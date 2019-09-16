<template>
  <div>
    <ul v-for="user in users" v-bind:todo="user" v-bind:key="user.id">
      <li>First Name: {{ user.fname }}</li>
      <li>Last Name: {{ user.lname }}</li>
      <li>Username: {{ user.username }}</li>
      <li>Email: {{ user.email }}</li>
      <li>Password: {{ user.password }}</li>
      <br>
    </ul>
  </div>
</template>

<script>
import Constants from "../../_services/Constants";
import UserAccessService from "../../_services/UserAccessService";

export default {
  name: Constants.ROUTES.USERS,
  data: () => ({
    users: []
  }),
  mounted() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      let that = this;
      UserAccessService.getUsers().then(result => {
        this.users = result.data;
        console.log(this.users);
      });
    }
  }
};
</script>