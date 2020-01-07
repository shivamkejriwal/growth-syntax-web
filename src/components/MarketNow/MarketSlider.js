import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import Typography from '@material-ui/core/Typography';
import { withFirebase } from '../Firebase';

const PrettoSlider = withStyles({
    root: {
      color: '#52af77',
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus,&:hover,&$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);

class MarketSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            advancers: 0,
            decliners: 0,
            total: 0,
            loading: true
        };
    }
    componentDidMount() {
        const query = this.props.firebase.getAdvancersDecliners();

        query.get()
            .then(doc => {
                    let data = doc.data();
                    data.id = doc.id;
                    data.loading = false;
                    data.total = data.advancers + data.decliners;
                    this.setState(data);
            });
    }

    render() {
        return (
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                    <Typography gutterBottom>
                        Advancers
                    </Typography>
                    <TrendingUpIcon />
                </Grid>
                <Grid item xs>
                    <PrettoSlider 
                    valueLabelDisplay="auto" 
                    aria-label="pretto slider" 
                    min={0}
                    max={this.state.total}
                    value={this.state.advancers} />
                </Grid>
                <Grid item>
                    <Typography gutterBottom>
                        Decliners
                    </Typography>
                    <TrendingDownIcon />
                </Grid>
            </Grid>
        ); 
    }
}

export default withFirebase(MarketSlider);