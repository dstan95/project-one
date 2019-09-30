<template>
  <form ref="form">
    <v-container fluid grid-list-excel pa-3>
      <v-layout row justify-space-between v-if="configObj.fieldsData.length > 0">
        <form-component
          v-for="field in configObj.fieldsData"
          :field="field"
          :key="field.id"
          :configObj="configObj"
          :validator="$validator"
        ></form-component>
      </v-layout>
      <v-layout row>
        <v-flex xs12 class="text-lg-right">
          <v-btn width="200px" class="mr-4" :to="{name: configObj.listRoute}">
            cancel
            <i class="fas fa-times ml-auto"></i>
          </v-btn>
          <v-btn width="200px" color="primary" @click="submit()">
            submit
            <i class="fas fa-check ml-auto"></i>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </form>
</template>
<script>
import HttpService from "../_services/HttpService";
import FormComponent from "../components/FormComponent/FormComponent";
import UserAccessService from "../_services/UserAccessService";

export default {
  $_veeValidate: {
    validator: "new"
  },
  components: {
    FormComponent
  },
  data() {
    return {
      callbackValidator: [],
      url: this.$route.meta.config.url,
      configObj: {
        itemId: this.$route.params.id,
        listRoute: this.$route.meta.config.listRoute,
        fieldsData: this.$route.meta.config.fields,
        itemModel: this.$route.meta.config.itemModel,
        directory: this.$route.meta.config.errorsItems
      }
    };
  },
  mounted() {
    this.cleaningObj(this.configObj.itemModel);
    this.emptyCallbackErrorList();
    this.$validator.localize("en", this.dictionary);
    this.getUser(this.$route.params.id);
    console.log(this.configObj.fieldsData);
  },
  methods: {
    cleaningObj(modelObj) {
      for (let item in modelObj) {
        modelObj[item] = null;
      }
      return modelObj;
    },
    onValidateAll() {
      HttpService.put(this.url+this.configObj.itemId, this.configObj.itemModel)
        .then(response => {
          this.$router.push({ name: this.configObj.listRoute });
        })
        .catch((err) => { alert(err.message, "error", 3500); });
    },
    emptyCallbackErrorList: function() {
      this.callbackValidator = [];
    },
    getUser(id) {
      let that = this;
      UserAccessService.getUser(id).then(result => {
        that.responseUser = result.data;
        that.getParser(result.data, this.configObj.itemModel);
      });
    },
    getParser: function(data, model) {           
            for(let item in data){ 
                if(!model.hasOwnProperty(item)){
                    model[item] = '';
                }
                model[item] = data[item];
            }           
        },
    submit() {
      let v = this.$validator;
      this.$validator.validateAll();
      setTimeout(() => {
        if (v.errors.items.length === 0) {
          this.onValidateAll();
        }
      });
    }
  }
};
</script>