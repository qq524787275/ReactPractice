import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import HomeHeader from '../component/HomeHeader';
import Grid from 'material-ui/Grid';
import Img from '../assets/img/home_bg.jpg';
const styles = {
    root: {
        paddingBottom:60
    },
    img: {
        position: 'static',
        left: 0,
        right: 0,
        top: 50,
        bottom: 0,
        height: 200,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
};

class Home extends Component {
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
                <HomeHeader></HomeHeader>
                <Grid container>
                    <Grid item xs={12}>
                        <div className={classes.img}   style={{
                            // backgroundColor:"red",
                            backgroundImage: `url(${Img})`,
                        }}>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={classes.img}   style={{
                            // backgroundColor:"red",
                            backgroundImage: `url(${Img})`,
                        }}>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={classes.img}   style={{
                            // backgroundColor:"red",
                            backgroundImage: `url(${Img})`,
                        }}>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Home);
