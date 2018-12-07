import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

class UnresolvedTickets extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tickets: [],
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
    // TODO: Write this
    const { tickets } = this.state;
    console.log(tickets);
  }

  render() {
    const rows = [];

    const { tickets } = this.state;
    return (
      <React.Fragment>
        <Typography variant="h6" color="secondary">
          Unresolved Tickets ({tickets.length})
        </Typography>
        <Table>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell numeric>{row.calories}</TableCell>
                <TableCell numeric>{row.fat}</TableCell>
                <TableCell numeric>{row.carbs}</TableCell>
                <TableCell numeric>{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </React.Fragment>
    );
  }
}

export default UnresolvedTickets;
