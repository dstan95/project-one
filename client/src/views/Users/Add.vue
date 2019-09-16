<template>
  <form>
    <v-text-field
      v-model="item.fname"
      v-validate="'required|min:2|max:100'"
      :error-messages="errors.collect('fname')"
      label="First Name"
      data-vv-name="fname"
      required
    ></v-text-field>
    <v-text-field
      v-model="item.lname"
      v-validate="'required|min:2|max:100'"
      :error-messages="errors.collect('lname')"
      label="Last Name"
      data-vv-name="lname"
      required
    ></v-text-field>
    <v-text-field
      v-model="item.username"
      v-validate="'required|min:2|max:100'"
      :error-messages="errors.collect('username')"
      label="Username"
      data-vv-name="username"
      required
    ></v-text-field>
    <v-text-field
      v-model="item.email"
      v-validate="'required|email'"
      :error-messages="errors.collect('email')"
      label="E-mail"
      data-vv-name="email"
      required
    ></v-text-field>
    <v-text-field
      v-model="item.password"
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
  name: Constants.ROUTES.USER_ADD,
  $_veeValidate: {
    validator: "new"
  },

  data: () => ({
    show: false,
    item: {
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
  },

  methods: {
    onValidateAll() {
      let newItem = {
        fname: this.item.fname,
        lname: this.item.lname,
        username: this.item.username,
        email: this.item.email,
        password: this.item.password
      };
      UserAccessService.addUser(newItem)
      .then(result => {
        this.$router.push({
          name: Constants.ROUTES.USERS
        });
        console.log('Totul e ok');
      })
      .catch(error => {
        if(error.message){
          console.log('Nu e ok');
        }
      });
    },
    submit() {
      let v = this.$validator;
      this.$validator.validateAll();
      setTimeout(() => {
        if(v.errors.items.length === 0){
          this.onValidateAll();
        }
      });
    }
  }
};
</script>