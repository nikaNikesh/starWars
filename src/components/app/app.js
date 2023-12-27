import React, {Component} from 'react';

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorIndicator from "../error-indicator";
import './app.css';
import SwapiService from "../../services/swapi-service";
import ErrorBoundary from "../error-boundary";
import {SwapiServiceProvider} from "../swapi-service-context";
import {
    StarshipList,
    PersonList,
    PlanetList
} from '../sw-components';
import {
    StarshipDetails,
    PersonDetails,
    PlanetDetails
} from '../sw-components';
import DummySwapiService from "../../services/dummy-swapi-service";


export default class App extends Component {


    state = {
        showRandomPlanet: true,
        swapiService: new DummySwapiService()
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

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };


    render() {
        if (this.state.hasError) {
            return <ErrorIndicator/>
        }

        const planet = this.state.showRandomPlanet ?
            <RandomPlanet/> :
            null;


        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <div className="stardb-app">
                        <Header onServiceChange={this.onServiceChange} />
                        <PersonDetails itemId={11}/>
                        <PlanetDetails itemId={5}/>
                        <StarshipDetails itemId={9}/>
                        <PersonList/>
                        <StarshipList/>
                        <PlanetList/>
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundary>
        )
            ;
    }
}