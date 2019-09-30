<template>
    <v-flex v-bind:class="field.size">
        <v-text-field v-if="field.type=='text'"
            :ref="field.ref"
            v-validate="field.validate"                        
            v-model="configObj.itemModel[field.name]"
            :label="field.label"
            :error-messages="errors.collect(field.name)"
            :data-vv-name="field.name"
            :prepend-icon="field.icon"
            :id="field.id"    
        ></v-text-field>
        <v-text-field v-else-if="field.type=='password'"
            :ref="field.ref"
            v-validate="field.validate"                        
            v-model="configObj.itemModel[field.name]"
            :label="field.label"
            :error-messages="errors.collect(field.name)"
            :data-vv-name="field.name"
            :name="field.name"
            :data-vv-as="field.as"
            :prepend-icon="field.icon"
            :append-icon="field.visibility ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="() => (field.visibility = !field.visibility)"
            :type="field.visibility ? 'text' : 'password'"
            :counter="field.counter"
            :id="field.id"
        ></v-text-field>
        <v-select v-if="field.type=='select'"
            :ref="field.ref"
            v-validate="field.validate"
            v-model="configObj.itemModel[field.name]"
            :label="field.label"
            :error-messages="errors.collect(field.name)"
            :data-vv-name="field.name"
            :id="field.id"
            :items="field.items"
        ></v-select>
        <v-checbox v-if="field.type=='checkbox'"
            :ref="field.ref"
            v-validate="field.validate"
            v-model="configObj.itemModel[field.name]"
            :label="field.label"
            :error--message="errors.collect(field.name)"
            :data-vv-name="field.name"
            :id="field.id"
        ></v-checbox>
    </v-flex>
</template>
<script>
export default {
  $_veeValidate: {
    validator: "new"
  },
  props: ["configObj", "field", "formName", "validator"],
  data() {
      return {
          isPasswordVisible: false
      }
  },
  created() {
      if(this.validator){
          this.$validator = this.validator;
      }
  },
  mounted() {
      this.$validator.localize("en", this.dictionary);
  }
}
</script>