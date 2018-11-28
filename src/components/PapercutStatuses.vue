<template>
  <div class="papercut-statuses">
    <h5 class="text-warning">Papercut Summary</h5>
    <b-table hover :items="papercutStatuses" :fields="fields" :small="true" thead-class="d-none"></b-table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'papercut-statuses',
  data() {
    return {
      fields: {
        name,
        status: {
          tdClass: this.colorByStatus,
        },
      },
      papercutStatuses: [],
    };
  },

  methods: {
    colorByStatus(status) {
      if (status === 'OK') {
        return 'text-success';
      }
      return 'text-danger';
    },
    findWithAttr(array, attr, value) {
      let i;
      for (i = 0; i < array.length; i += 1) {
        if (array[i][attr] === value) {
          return i;
        }
      }
      return -1;
    },
    getStatus(url, name) {
      axios
        .get(url, {
          params: { Authorization: process.env.PAPERCUT_AUTH_TOKEN },
        })
        .then((response) => {
          const index = this.findWithAttr(this.papercutStatuses, 'name', name);
          const status = {
            name,
            status: response.data.status,
          };

          if (index === -1) {
            this.papercutStatuses.push(status);
          } else {
            this.$set(this.papercutStatuses, index, status);
          }
        });
    },
    loadData() {
      this.getStatus(process.env.PAPERCUT_MOBILITY_PRINT_URL, 'Mobility-Print Servers');
      this.getStatus(process.env.PAPERCUT_WEB_PRINT_URL, 'Web-Print Servers');
      this.getStatus(process.env.PAPERCUT_PRINT_PROVIDER_URL, 'Print Providers');
      this.getStatus(process.env.PAPERCUT_SYSTEM_URL, 'Papercut System');
    },
  },

  mounted() {
    this.loadData();

    // Refresh data every 5 minutes.
    setInterval(this.loadData, 300000);
  },
};
</script>
