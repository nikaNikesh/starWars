import React, {Component} from 'react';

import Header from "../header";
import RandomPlanet from "../random-planet";
import './app.css';
import SwapiService from "../../services/swapi-service";
import ErrorBoundary from "../error-boundary";
import {PeoplePage, PlanetPage, StarshipPage, SecretPage, LoginPage, RequireAuth} from "../pages";
import {SwapiServiceProvider} from "../swapi-service-context";
import AuthRouterProvider from "../auth-context/auth-provider";
import DummySwapiService from "../../services/dummy-swapi-service";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {StarshipDetails} from "../sw-components";

export default class App extends Component {

    state = {
        swapiService: new SwapiService()
    };
    onServiceChange = () => {
        this.setState(({swapiService}) => {
            const Service = swapiService instanceof SwapiService ?
                DummySwapiService : SwapiService;
            return {
                swapiService: new Service()
            };

        });
    }

    render() {
        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <BrowserRouter>
                        <div className="stardb-app">
                            <Header onServiceChange={this.onServiceChange}/>
                            <RandomPlanet/>
                            <Routes>
                                <Route path="/" element={<h2>Welcome star DB</h2>}/>
                                <Route path="people" element={<PeoplePage/>}/>
                                <Route path="planets" element={<PlanetPage/>}/>
                                <Route path="starships" element={<StarshipPage/>}/>
                                <Route path="starships/:id" element={<StarshipDetails/>}/>
                                <Route element={<AuthRouterProvider/>}>
                                    <Route path="login" element={<LoginPage/>}/>
                                    <Route path="secret" element={
                                        <RequireAuth>
                                            <SecretPage/>
                                        </RequireAuth>
                                    }/>
                                </Route>
                            </Routes>
                        </div>
                    </BrowserRouter>
                </SwapiServiceProvider>
            </ErrorBoundary>
        );
    }
}