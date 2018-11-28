<template>
  <div class="ticket-table table-responsive">
    <h5 class="text-warning">Unresolved Tickets ({{ tickets.length }})</h5>
    <b-table hover :items="listItems.slice(0,20)" :fields="fields" :small="true" thead-class="d-none" @row-clicked="openTicket">
      <template slot="Title" slot-scope="data">
        {{ truncate(data.value) }}
      </template>
      <template slot="DaysOld" slot-scope="data">
        {{data.value}} d
      </template>
    </b-table>
  </div>
</template>

<script>
import axios from 'axios';
import _ from 'lodash';

export default {
  name: 'ticket-table',
  data() {
    return {
      fields: {
        ticket_id: {
          key: 'TicketID',
          tdClass: this.colorByStatus,
        },
        title: {
          key: 'Title',
          tdClass: this.colorByStatus,
        },
        lab: {
          key: '18375',
          tdClass: this.colorByStatus,
        },
        status_name: {
          key: 'StatusName',
          tdClass: this.colorByStatus,
        },
        age: {
          key: 'DaysOld',
          tdClass: this.colorByStatus,
        },
      },
      tickets: [],
    };
  },

  computed: {
    listItems() {
      return _.orderBy(this.tickets, 'TicketID', 'desc');
    },
  },

  methods: {
    colorByStatus(value, field, object) {
      if (object.StatusName === 'New') {
        if (object.DaysOld >= 1) {
          return 'text-danger';
        }
        return 'text-warning';
      } else if (object.StatusName === 'On Hold') {
        return 'text-muted';
      }
      return '';
    },
    truncate(str) {
      const Str = String(str);
      if (Str.length > 65) {
        return `${Str.substring(0, 62)}...`;
      }
      return Str;
    },
    loadData() {
      axios
        .post(process.env.TD_AUTH_URL, {
          username: process.env.TD_USERNAME,
          password: process.env.TD_PASSWORD,
        })
        .then((authResponse) => {
          axios
            .get(process.env.TD_TICKET_REPORT_URL, {
              headers: { Authorization: `Bearer ${authResponse.data}` },
              params: { withData: true },
            })
            .then((response) => {
              this.tickets = response.data.DataRows;
            });
        });
    },
    openTicket(record) {
      window.open(
        `${process.env.TD_TICKET_URL}?TicketID=${record.TicketID}`,
      );
    },
  },
  mounted() {
    this.loadData();

    // Refresh data every 2 minutes.
    setInterval(this.loadData, 120000);
  },
};
</script>
