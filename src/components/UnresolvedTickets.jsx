import React from 'react';
import Typography from '@material-ui/core/Typography';

class UnresolvedTickets extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      timer: null,
    };
  }

  componentDidMount() {
    const timer = setInterval(this.fetchNewData.bind(this), 1000);
    this.setState({ timer });
  }

  componentWillUnmount() {
    const { timer } = this.state;
    clearInterval(timer);
  }

  fetchNewData() {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  render() {
    const { count } = this.state;
    return (
      <Typography variant="h6" color="secondary">
        Unresolved Tickets ({count})
      </Typography>
    );
  }
}

export default UnresolvedTickets;
