<template>
  <div class="device-statuses">
    <h5 class="text-warning">Devices in Error ({{ devicesInError.length }})</h5>
    <b-table hover :items="devicesInError" :fields="fields" :small="true" thead-class="d-none">
      <template slot="state" slot-scope="data">
        {{data.value.status}}
      </template>
    </b-table>
  </div>
</template>

<script>
import axios from 'axios';
import _ from 'lodash';

export default {
  name: 'device-statuses',

  computed: {
    devicesInError() {
      return _.filter(this.devices, o => o.state.status !== 'OK');
    },
  },

  data() {
    return {
      fields: ['name', 'state'],
      devices: [],
    };
  },

  methods: {
    loadData() {
      axios
        .get(process.env.PAPERCUT_DEVICE_URL, {
          params: { Authorization: process.env.PAPERCUT_AUTH_TOKEN },
        })
        .then((response) => {
          this.devices = response.data.devices;
        });
    },
  },
  mounted() {
    this.loadData();

    // Refresh data every 5 minutes.
    setInterval(this.loadData, 300000);
  },
};
</script>
