import React, {Component} from 'react';

import Header from "../header";
import RandomPlanet from "../random-planet";
import './app.css';
import SwapiService from "../../services/swapi-service";
import ErrorBoundary from "../error-boundary";
import {PeoplePage, PlanetPage, StarshipPage} from "../pages";
import {SwapiServiceProvider} from "../swapi-service-context";
import DummySwapiService from "../../services/dummy-swapi-service";


export default class App extends Component {

    state = {
        swapiService: new SwapiService()
    };

    onServiceChange = () => {
        this.setState(({ swapiService }) => {
            const Service = swapiService instanceof SwapiService ?
                                DummySwapiService : SwapiService;

            console.log('switched to', Service.name);

            return{
                swapiService: new Service()
            };

        });
    }

    render() {
        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <div className="stardb-app">
                        <Header onServiceChange={this.onServiceChange} />
                        <RandomPlanet/>
                        <PeoplePage/>
                        <StarshipPage/>
                        <PlanetPage/>
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundary>
        );
    }
}