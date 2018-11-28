<template>
  <div id="app">
    <navbar-item></navbar-item>
    <b-container fluid class="mt-3">
      <b-row>
        <b-col lg="4" v-if="papercutAuthToken">
          <papercut-statuses></papercut-statuses>
          <printer-statuses></printer-statuses>
          <device-statuses></device-statuses>
        </b-col>
        <b-col>
          <ticket-table></ticket-table>
          <b-row>
            <b-col>
              <stat-table v-if="statsLastWeekURL" :url="statsLastWeekURL" title="Ticket Resolutions Last Week"></stat-table>
            </b-col>
            <b-col>
              <stat-table v-if="statsURL" :url="statsURL" title="Ticket Resolutions This Week"></stat-table>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import DeviceStatuses from './components/DeviceStatuses';
import NavbarItem from './components/NavbarItem';
import PapercutStatuses from './components/PapercutStatuses';
import PrinterStatuses from './components/PrinterStatuses';
import StatTable from './components/StatTable';
import TicketTable from './components/TicketTable';

export default {
  name: 'app',
  components: {
    DeviceStatuses,
    NavbarItem,
    PapercutStatuses,
    PrinterStatuses,
    StatTable,
    TicketTable,
  },
  data() {
    return {
      papercutAuthToken: process.env.PAPERCUT_AUTH_TOKEN,
      statsLastWeekURL: process.env.TD_STAT_LAST_WEEK_REPORT_URL,
      statsURL: process.env.TD_STAT_REPORT_URL,
    };
  },
};
</script>
