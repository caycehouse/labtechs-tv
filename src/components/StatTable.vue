<template>
  <div class="stat-table">
    <h5 class="text-warning">{{ title }} ({{ total }})</h5>
    <b-table hover :items="listItems" :fields="fields" :small="true" thead-class="d-none"></b-table>
  </div>
</template>

<script>
import axios from 'axios';
import _ from 'lodash';

export default {
  name: 'stat-table',
  computed: {
    listItems() {
      return _.orderBy(this.stats, 'CountTicketID', 'desc');
    },
    total() {
      return _.sumBy(this.stats, 'CountTicketID');
    },
  },

  data() {
    return {
      fields: ['ClosedByFullName', 'CountTicketID'],
      stats: [],
    };
  },

  methods: {
    loadData() {
      axios
        .post(process.env.TD_AUTH_URL, {
          username: process.env.TD_USERNAME,
          password: process.env.TD_PASSWORD,
        })
        .then((authResponse) => {
          axios
            .get(this.url, {
              headers: { Authorization: `Bearer ${authResponse.data}` },
              params: { withData: true },
            })
            .then((response) => {
              this.stats = response.data.DataRows;
            });
        });
    },
  },
  mounted() {
    this.loadData();

    // Refresh data every 5 minutes.
    setInterval(this.loadData, 300000);
  },

  props: ['url', 'title'],
};
</script>
