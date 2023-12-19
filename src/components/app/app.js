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


export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        showRandomPlanet: true,
        hasError: false
    };

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    }

    componentDidCatch() {
        console.log('componentDidCatch()');
        this.setState({hasError: true});
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator/>
        }

        const planet = this.state.showRandomPlanet ?
            <RandomPlanet/> :
            null;


        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={this.swapiService}>
                    <div className="stardb-app">
                        <Header/>
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