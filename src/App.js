import React, {Component} from 'react';
import Footer from './component/Footer';
import {MuiThemeProvider, withStyles} from 'material-ui/styles';
import {theme} from "./utils/theme";
import {BrowserRouter, Route, Switch,Redirect} from 'react-router-dom';
import Home from "./page/Home";
import Mine from "./page/Mine";
import Pay from "./page/Pay";

const styles = {
    root: {
        margin: "0px",
        padding: "0px",
        width: "100%",
        height: "100%",
    },
    footer: {
        position: "fixed",
        width: "100%",
        bottom:0
    },
    content: {
        backgroundColor: "#F5F5F5",
    }
};

class App extends Component {
    state = {
        height: 100,
    };

    updateDimensions = () => {
        this.setState({
            height: window.innerHeight + 'px',
        });
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
        this.updateDimensions();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    render() {
        const {classes} = this.props;
        return (
            <BrowserRouter>
                <MuiThemeProvider theme={theme}>
                    <div className={classes.root}>
                        <div className={classes.content} style={{"height": this.state.height}}>
                            <Switch>
                                <Route path={"/home"} component={Home}/>
                                <Route path={"/pay"} component={Pay}/>
                                <Route path={"/mine"} component={Mine}/>
                                <Redirect to='/home'/>
                            </Switch>
                        </div>
                        <div className={classes.footer}>
                            <Footer/>
                        </div>
                    </div>
                </MuiThemeProvider>
            </BrowserRouter>
        );
    }
}

export default withStyles(styles)(App);
