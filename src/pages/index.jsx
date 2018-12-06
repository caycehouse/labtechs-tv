import React from 'react';
import Grid from '@material-ui/core/Grid';

import Layout from '../components/Layout';
import UnresolvedTickets from '../components/UnresolvedTickets';

export default () => (
  <Layout>
    <Grid container>
      <Grid item xs>
        <UnresolvedTickets />
      </Grid>
    </Grid>
  </Layout>
);
