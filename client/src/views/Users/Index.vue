<template>
  <div>
    <v-container fluid>
      <v-row justify="space-around">
        <v-col cols="6" class="pa-0">
          <v-btn :to="{name: constants.ROUTES.HOME}" color="secondary">Back to Home</v-btn>
        </v-col>

        <v-col cols="6" class="pa-0 text-right">
          <v-btn :to="{name: constants.ROUTES.USER_ADD}" color="primary">Add user</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-card>
      <v-card-title>
        Users
        <div class="flex-grow-1"></div>
        <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
      </v-card-title>
      <v-data-table :headers="headers" :items="users" :search="search">
        <template v-slot:item.actions="{ item }">
          <div class="text-left">
            <v-menu offset-x>
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on">
                  <v-icon>{{ icons.mdiSettingsOutline }}</v-icon>
                </v-btn>
              </template>
              <v-list class="pa-0">
                <v-btn
                  width="180px"
                  :to="{name: constants.ROUTES.USER_UPDATE, params: {id: item._id}}"
                  block
                >
                  Edit
                  <v-icon class="ml-auto">{{ icons.mdiPencil }}</v-icon>
                </v-btn>
                <v-btn width="180px" @click="showModal(item._id,item.fname,item.lname)" block>
                  Delete
                  <v-icon class="ml-auto">{{ icons.mdiDelete }}</v-icon>
                </v-btn>
              </v-list>
            </v-menu>
          </div>
        </template>
      </v-data-table>
    </v-card>
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="headline mb-4" primary-title>Delete Confirmation</v-card-title>

        <v-card-text class="mb-5">
          Are you sure do you want to delete
          <span class="primary--text">{{ this.currentName }}</span> ?
        </v-card-text>

        <v-divider></v-divider>

        <div class="text-right pa-2">
          <v-btn class="mr-2" color="black" text @click="dialog=false">Cancel</v-btn>
          <v-btn color="primary" @click="deleteUser()">Yes, I'm sure</v-btn>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Constants from "../../_services/Constants";
import UserAccessService from "../../_services/UserAccessService";
import { mdiPencil, mdiSettingsOutline, mdiDelete } from "@mdi/js";

export default {
  name: Constants.ROUTES.USERS,
  data: () => ({
    constants: Constants,
    users: [],
    search: "",
    headers: [
      { text: "Actions", value: "actions" },
      { text: "First Name", value: "fname" },
      { text: "Last Name", value: "lname" },
      { text: "Email", value: "email" },
      { text: "Username", value: "username" }
    ],
    icons: {
      mdiPencil,
      mdiSettingsOutline,
      mdiDelete
    },
    currentId: null,
    dialog: false,
    currentName: null
  }),
  mounted() {
    this.getUsers();
    console.log(this.getUsers());
  },
  methods: {
    getUsers() {
      let that = this;
      UserAccessService.getUsers().then(result => {
        this.users = result.data;
        console.log(this.users);
      });
    },
    showModal(id, fname, lname) {
      this.currentId = id;
      this.currentName = fname + " " + lname;
      this.dialog = true;
      console.log(this.currentId);
    },
    deleteUser(){
      UserAccessService.deleteUser(this.currentId).then(result =>{
        this.getUsers();
        this.dialog = false;
      })
    }
  }
};
</script>