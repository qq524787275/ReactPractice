import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import PayHeader from '../component/PayHeader';
const styles = {
    root: {},
};

class Pay extends Component {
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
                <PayHeader></PayHeader>
            </div>
        );
    }
}

export default withStyles(styles)(Pay);
