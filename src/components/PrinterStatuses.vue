<template>
  <div class="printer-statuses">
    <h5 class="text-warning">Printers in Error ({{ printersInError.length }})</h5>
    <b-table hover :items="printersInError" :fields="fields" :small="true" thead-class="d-none"></b-table>
  </div>
</template>

<script>
import axios from 'axios';
import _ from 'lodash';

export default {
  name: 'printer-statuses',
  computed: {
    printersInError() {
      return _.filter(this.printers, o => (o.status !== 'OK' && o.name.split('\\')[0] !== 'typo' && o.name.split('\\')[0] !== 'geoflex'));
    },
  },

  data() {
    return {
      fields: {
        name: {
          tdClass: this.colorByName,
        },
        status: {
          tdClass: this.colorByName,
        },
      },
      printers: [],
    };
  },

  methods: {
    colorByName(value, field, object) {
      if (object.name.split('\\')[0] === 'papercut') {
        return 'text-danger';
      }
      return '';
    },
    loadData() {
      axios
        .get(process.env.PAPERCUT_PRINTER_URL, {
          params: { Authorization: process.env.PAPERCUT_AUTH_TOKEN },
        })
        .then((response) => {
          this.printers = response.data.printers;
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
