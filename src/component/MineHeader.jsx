import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import Toolbar from 'material-ui/Toolbar';
import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';
const styles = {
    root: {},
    title:{
        margin:"0 auto",
        postion:"position"
    },
};
class MineHeader extends Component {
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
        //const { } = this.state;
        return (
            <div className={classes.root}>
                <AppBar>
                    <Toolbar>
                        <Typography variant="body2" color="inherit" className={classes.title}>
                            我的
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(MineHeader);
