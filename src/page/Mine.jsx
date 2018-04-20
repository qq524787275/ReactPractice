import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import MineHeader from '../component/MineHeader';
const styles = {
    root: {},
};

class Mine extends Component {
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
                <MineHeader></MineHeader>
            </div>
        );
    }
}

export default withStyles(styles)(Mine);
