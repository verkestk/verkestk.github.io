import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import FaceIcon from '@material-ui/icons/Face';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Cell, Pie, PieChart } from 'recharts';
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
  heroName: {
    paddingTop: 20,
  },
  summary: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
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
  grow: {
    flexGrow: 1,
  },
});

const dataPVP = [{name: 'People', value: 65}, {name: 'Process', value: 35}];
const dataCVE = [{name: 'Control', value: 10}, {name: 'Enable', value: 90}];

const COLORS_PVP = ['#0088FE', '#00C49F'];
const COLORS_CVE = ['#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;

const renderCustomizedLabelPVP = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const angle = index === 0 ? 170 : 10;
  const x  = cx + (outerRadius + 10) * Math.cos(-angle * RADIAN);
  const y = cy + (outerRadius + 10) * Math.sin(-angle * RADIAN);

  return (
    <text x={x} y={y}
          fill="black"
          fillOpacity={0.54}
          textAnchor={x > cx ? 'start' : 'end'}
          dominantBaseline="central"
          style={{
                  fontSize: '0.75rem',
                  fontWeight: 400,
                  fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                  lineHeight: '1.375em'
                }}>
      {dataPVP[index].name}
    </text>
  );
};

const renderCustomizedLabelCVE = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const angle = index === 0 ? 190 : 350;
  const x  = cx + (outerRadius + 10) * Math.cos(-angle * RADIAN);
  const y = cy + (outerRadius + 10) * Math.sin(-angle * RADIAN);

  return (
    <text x={x} y={y}
          fill="black"
          fillOpacity={0.54}
          textAnchor={x > cx ? 'start' : 'end'}
          dominantBaseline="central"
          style={{
                  fontSize: '0.75rem',
                  fontWeight: 400,
                  fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                  lineHeight: '1.375em'
                }}>
      {dataCVE[index].name}
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
          <Typography variant="h6" color="inherit" className={classes.grow} noWrap>
            Karlie Verkest
          </Typography>
          <Button color="inherit">github</Button>
        <Button color="inherit">linkedin</Button>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Grid container spacing={24}>
              <Hidden xsDown>
                <Grid item sm={7}>
                  <Typography component="h1" variant="h2" color="textPrimary" gutterBottom className={classes.heroName}>
                    Karlie Verkest
                  </Typography>
                  <Typography variant="h6" color="textSecondary" paragraph>
                    human-focused engineering manager
                  </Typography>
                </Grid>
              </Hidden>
              <Hidden smUp>
                <Grid item xs={12}>
                  <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom className={classes.heroName}>
                    Karlie Verkest
                  </Typography>
                  <Typography variant="h6" align="center" color="textSecondary" paragraph>
                    human-focused engineering manager
                  </Typography>
                </Grid>
              </Hidden>
              <Grid item xs={12} sm={5}>
                <PieChart width={260} height={90}>
                  <Pie
                    data={dataPVP}
                    cx={122}
                    cy={80}
                    startAngle={180}
                    endAngle={0}
                    innerRadius={40}
                    outerRadius={60}
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
                <Divider/>
                <PieChart width={260} height={90}>
                  <Pie
                    data={dataCVE}
                    cx={122}
                    cy={0}
                    startAngle={-180}
                    endAngle={0}
                    innerRadius={40}
                    outerRadius={60}
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
              </Grid>
            </Grid>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <div>
                  <Paper className={classes.summary} elevation={1}>
                    <Typography variant="h5" component="h3">
                      Professional Goals
                    </Typography>
                    <Typography variant="body1" component="p">
                      I want to work with excellent engineers who don't need my technical help. I want to work for a leadership team that sees their human team members as their most valuable resource. I want to work in an organization that shares my values, does social good, and has a real impact.
                    </Typography>
                  </Paper>
                </div>
              </Grid>
            </Grid>

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
