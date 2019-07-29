import React from 'react';
import { Scene, Router, Actions } from "react-native-router-flux";
import Home from "../components/Home";

const Routes = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key = "main"  >
                    <Scene key="home" component={Home} title="nextklik" hideNavBar />
                </Scene>
            </Scene>
        </Router>
    )
}

export default Routes;