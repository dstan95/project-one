<template>
  <form>
    <v-text-field
      v-model="updateUser.fname"
      v-validate="'required|min:2|max:100'"
      :error-messages="errors.collect('fname')"
      label="First Name"
      data-vv-name="fname"
      required
    ></v-text-field>
    <v-text-field
      v-model="updateUser.lname"
      v-validate="'required|min:2|max:100'"
      :error-messages="errors.collect('lname')"
      label="Last Name"
      data-vv-name="lname"
      required
    ></v-text-field>
    <v-text-field
      v-model="updateUser.username"
      v-validate="'required|min:2|max:100'"
      :error-messages="errors.collect('username')"
      label="Username"
      data-vv-name="username"
      required
    ></v-text-field>
    <v-text-field
      v-model="updateUser.email"
      v-validate="'required|email'"
      :error-messages="errors.collect('email')"
      label="E-mail"
      data-vv-name="email"
      required
    ></v-text-field>
    <v-text-field
      v-model="updateUser.password"
      :append-icon="show ? 'visibility' : 'visibility_off'"
      v-validate="'required|min:6'"
      :type="show ? 'text' : 'password'"
      :error-messages="errors.collect('password')"
      label="Password"
      data-vv-name="password"
      required
      counter
      @click:append="show = !show"
    ></v-text-field>
    <v-btn class="mr-4" @click="submit">submit</v-btn>
  </form>
</template>

<script>
import Constants from "../../_services/Constants";
import FormErrorFactory from "../../_services/FormErrorFactory";
import UserAccessService from "../../_services/UserAccessService";

export default {
  name: Constants.ROUTES.USER_UPDATE,
  $_veeValidate: {
    validator: "new"
  },

  data: () => ({
    show: false,
    responseUser: null,
    updateUser: {
      fname: null,
      lname: null,
      username: null,
      email: null,
      password: null
    },
    dictionary: FormErrorFactory.getUserErrorModel()
  }),

  mounted() {
    this.$validator.localize("en", this.dictionary);
    this.getUser(this.$route.params.id);
  },

  methods: {
    onValidateAll() {
      let that = this;
      let updateUser = {
        fname: this.updateUser.fname,
        lname: this.updateUser.lname,
        username: this.updateUser.username,
        email: this.updateUser.email,
        password: this.updateUser.password
      };
      UserAccessService.updateUser(that.$route.params.id, that.updateUser)
      .then(result =>
      {
        this.$router.push({
          name: Constants.ROUTES.USERS
        });
          console.log('update succcesfully');
      })
      .catch(error => {
          console.log('update erros');
      })
    },
    getUser(id) {
      let that = this;
      UserAccessService.getUser(id).then(result => {
        that.responseUser = result.data;
        that.getParser(result.data, that.updateUser);
      });
    },
    getParser: function(data, updateUser) {
      for (let item in data) {
        updateUser[item] = "";
        updateUser[item] = data[item];
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