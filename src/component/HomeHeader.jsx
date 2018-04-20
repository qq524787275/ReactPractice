import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import Toolbar from 'material-ui/Toolbar';
import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';
const styles = {
    root: {
        height:"60px",
    },
    toolbar:{
        height:"60px",
    },
    title:{
        margin:"0 auto",
        postion:"position"
    },
};

class HomeHeader extends Component {
    state = {};

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps() {

    }

    componentWillUpdate() {

    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }

    render() {
        const {classes} = this.props;
        return (
                <div className={classes.root}>
                    <AppBar>
                        <Toolbar className={classes.toolbar}>
                            <Typography variant="body2" color="inherit" className={classes.title}>
                                鹿城区人民医院
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </div>
        );
    }
}

export default withStyles(styles)(HomeHeader);
