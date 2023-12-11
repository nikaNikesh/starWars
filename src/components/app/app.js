import React, {Component} from 'react';

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorIndicator from "../error-indicator";

import './app.css';

import PersonDetails from "../person-details";
import SwapiService from "../../services/swapi-service";
import ErrorBoundary from "../error-boundary";
import Row from "../row";
import ItemDetails from "../person-details";
import DefineFields from "../define-fields";

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

        const {
            getPerson,
            getStarship,
            getImagePerson,
            getImageStarship,
            getImagePlanet
        } = this.swapiService;

        const personDetails = (
                <ItemDetails
                    itemId={11}
                    getData={getPerson}
                    getImageUrl={getImagePerson}>
                    <DefineFields serviceField='gender' contentField='Gender:'/>
                    <DefineFields serviceField='eyeColor' contentField='Eye color:'/>
                    <DefineFields serviceField='birthYear' contentField='Birth year:'/>
                </ItemDetails>
            )
        ;

        const starshipDetails = (
            <ItemDetails
                itemId={5}
                getData={getStarship}
                getImageUrl={getImageStarship}>
                <DefineFields serviceField='model' contentField='Model:'/>
                <DefineFields serviceField='length' contentField='Length:'/>
                <DefineFields serviceField='costInCredits' contentField='Cost:'/>
            </ItemDetails>
        );

        return (
            <ErrorBoundary>
                <div className="stardb-app">
                    <Header/>
                    <Row left={personDetails}
                         right={starshipDetails}/>
                </div>
            </ErrorBoundary>
        );
    }
}