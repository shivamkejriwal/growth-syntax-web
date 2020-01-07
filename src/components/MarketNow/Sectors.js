import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Utils } from '../Library/utils';
import StyledTableCell from './StyledTableCell';


const colorStyle = {
    red: {color: 'red'},
    green: {color: 'green'}
};
// const getIconMappings = () => {
//     return {
//         'Basic Industries': 'cog',
//         'Finance': 'stats',
//         'Capital Goods': 'construct',
//         'Healthcare': 'medkit',
//         'Health Care': 'medkit',
//         'Consumer Durables': 'cart',
//         'Miscellaneous': 'basket',
//         'Consumer Non-Durables': 'pricetags',
//         'Public Utilities': 'bulb',
//         'Consumer Services': 'contacts',
//         'Technology': 'battery-charging',
//         'Energy': 'flame',
//         'Transportation': 'subway'
//     };
// }

class Sectors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sectors: [],
            loading: true
        };
    }
    componentDidMount() {
        const query = this.props.firebase.getSectors();
        const sectors = [];
        query.get()
            .then(snapshot => snapshot
                .forEach(doc => {
                    const sector = doc.data();
                    sector.id = doc.id;
                    // data.icon = this.sectorMapings[data.name];
                    sector.change = Utils.round(sector.change/sector.open * 100, 2);
                    sector.color = sector.close > sector.open ? 'green' : 'red';
                    sectors.push(sector);
                })
            )
            .then(() => {
                this.setState({
                    sectors,
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
                  <StyledTableCell align="left">Sector</StyledTableCell>
                  <StyledTableCell align="right">Change</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.sectors.map(sector => (
                  <TableRow key={sector.id}>
                    <TableCell align="left">{sector.name}</TableCell>
                    <TableCell align="right">
                        { sector.color==='red' 
                            ? <div style={colorStyle.red}>{sector.change}%</div>
                            : <div style={colorStyle.green}>{sector.change}%</div> 
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

export default withFirebase(Sectors);