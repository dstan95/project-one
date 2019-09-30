<template>
  <div>
    <v-btn :to="{name: constants.ROUTES.USERS}" color="secondary">Users</v-btn>
    <v-container fluid v-if="item">
      <v-row>
        <box-link-component v-for="serviciu in servicii" :key="serviciu.name" :item="serviciu"></box-link-component>
      </v-row>
    </v-container>    
  </div>
</template>
<script>
import Constants from "../../_services/Constants";
import Services from "../../_services/Services";
import BoxLinkComponent from "../../components/BoxLinkComponent/BoxLinkComponent";

export default {
  name: Constants.ROUTES.HOME,
  components: {
    BoxLinkComponent
  },
  data: () => ({
    item: '',
    constants: Constants,
    servicii: Services.services,
  })
}
</script>