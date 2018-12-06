import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout>
    <Grid container align="center" style={{ marginTop: '50px' }}>
      <Grid item xs={12}>
        <Typography component="h1" variant="h1" gutterBottom>
          NOT FOUND
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1" gutterBottom>
          You just hit a route that doesn&#39;t exist... the sadness.
        </Typography>
      </Grid>
    </Grid>
  </Layout>
);

export default NotFoundPage;
