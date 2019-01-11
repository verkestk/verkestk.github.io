import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import FaceIcon from '@material-ui/icons/Face';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Cell, Legend, Pie, PieChart, Sector } from 'recharts';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 800,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});

const dataPVP = [{name: 'People', value: 60}, {name: 'Process', value: 40}];

const dataCVE = [{name: 'Control', value: 10}, {name: 'Enable', value: 90}];

const COLORS_PVP = ['#0088FE', '#00C49F'];
const COLORS_CVE = ['#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;

const renderCustomizedLabelPVP = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const angle = index == 0 ? 170 : 10;
  const x  = cx + (outerRadius + 10) * Math.cos(-angle * RADIAN);
  const y = cy + (outerRadius + 10) * Math.sin(-angle * RADIAN);

  return (
    <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">{dataPVP[index].name}
    </text>
  );
};

const renderCustomizedLabelCVE = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const angle = index == 0 ? 170 : 10;
  const x  = cx + (outerRadius + 10) * Math.cos(-angle * RADIAN);
  const y = cy + (outerRadius + 10) * Math.sin(-angle * RADIAN);

  return (
    <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">{dataCVE[index].name}
    </text>
  );
};

function Resume(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <FaceIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            karlieann.com
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Grid container spacing={24}>
              <Grid item xs={12} sm={6}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                  Karlie Verkest
                </Typography>
                <Typography variant="h6" align="center" color="textSecondary" paragraph>
                  human-focused engineering manager
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div>
                  <PieChart width={300} height={100}>
                    <Pie
                      data={dataPVP}
                      cx={150}
                      cy={100}
                      startAngle={180}
                      endAngle={0}
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      label={renderCustomizedLabelPVP}
                      labelLine={false}
                      paddingAngle={5}
                    >
                    	{
                      	dataPVP.map((entry, index) => <Cell fill={COLORS_PVP[index % COLORS_PVP.length]}/>)
                      }
                    </Pie>
                  </PieChart>
                </div>
                <div>
                  <PieChart width={300} height={100}>
                    <Pie
                      data={dataCVE}
                      cx={150}
                      cy={100}
                      startAngle={180}
                      endAngle={0}
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      label={renderCustomizedLabelCVE}
                      labelLine={false}
                      paddingAngle={5}
                    >
                    	{
                      	dataCVE.map((entry, index) => <Cell fill={COLORS_CVE[index % COLORS_CVE.length]}/>)
                      }
                    </Pie>
                  </PieChart>
                </div>
              </Grid>
            </Grid>
            <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

Resume.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Resume);
