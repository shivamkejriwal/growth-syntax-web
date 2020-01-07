import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InfoIcon from '@material-ui/icons/Info';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { withAuthorization } from '../Authentication/Session';
import MarketTable from './MarketTable';
import MarketSlider from './MarketSlider';
import Sectors from './Sectors';
import Industries from './Industries';

// import { withStyles } from '@material-ui/core/styles';
// const CenteredButton = withStyles({
//   root: {
//     justifyContent: 'center'
//   },
// })(Button);

const divStyle = {
  marginTop: '50px'
};


class CollapsedSection extends Component {
  constructor(props) {
      super(props);
      this.state = {
          show: false
      };
      this.toggleHidden = this.toggleHidden.bind(this);
  }

  toggleHidden() {
      this.setState({
          show: !this.state.show
      });
  }

  render() {
      return (
          <div>
              <Button onClick={this.toggleHidden}
                      variant="outlined"
                      color="primary">
                <InfoIcon/>
                Load Individual Industry Details (more granular)
                <div>
                  { this.state.show
                        ? <ArrowDownwardIcon/>
                        : null
                  }
                </div>
              </Button>
              <div style={divStyle}>
                { this.state.show
                      ? <Industries/>
                      : null
                }
              </div>
          </div>
      )
  }
}

const MarketNowPage = () => {
  return (
    <div style={divStyle}>
      <Typography variant='h5'
                  align='center'
                  gutterBottom>
          Market Now
      </Typography>
      <MarketTable/>
      <div style={divStyle}>
        <MarketSlider />
      </div>
      <div style={divStyle}>
        <Sectors/>
      </div>
      <div style={divStyle}>
        <CollapsedSection/>
      </div>
    </div>
  );
}


const condition = authUser => !!authUser;
export default withAuthorization(condition)(MarketNowPage);