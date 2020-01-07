import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withFirebase } from '../Firebase';
import { Utils } from '../Library/utils';
import StyledTableCell from './StyledTableCell';
const colorStyle = {
    red: { color: 'red' },
    green: { color: 'green' }
};

class TickerTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataType: '', // mostTraded, mostBought, mostSold
            loading: true,
            companies: [],
        };
    }
    componentDidMount() {
        const companies = [];
        const query = this.props.firebase.getMarketData(this.props.dataType);

        query.get()
            .then(snapshot => snapshot
                .forEach(doc => {
                    const data = doc.data();
                    data.id = doc.id;
                    const change = Utils.round(((data.close - data.open)/data.open) * 100, 2);
                    data.change = change;
                    data.color = data.close > data.open ? 'green' : 'red';
                    companies.push(data);
                })
            )
            .then(() => {
                this.setState({
                    companies,
                    loading: false,
                });
            });
    }

    render() {
        return (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">Ticker</StyledTableCell>
                  <StyledTableCell align="center">Close</StyledTableCell>
                  <StyledTableCell align="center">Change</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.companies.map(company => (
                  <TableRow key={company.id}>
                    <TableCell align="center">{company.ticker}</TableCell>
                    <TableCell align="center">{company.close}</TableCell>
                    <TableCell align="center">
                        { company.color==='red' 
                            ? <div style={colorStyle.red}>{company.change}%</div>
                            : <div style={colorStyle.green}>{company.change}%</div> 
                        }
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ); 
    }
}

export default withFirebase(TickerTable);