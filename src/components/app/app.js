import React, {Component} from 'react';

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorIndicator from "../error-indicator";

import './app.css';
import ErrorButton from "../error-button";
import PeoplePage from "../people-page";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import SwapiService from "../../services/swapi-service";
import ErrorBoundary from "../error-boundary";
import Row from "../row";
import ItemDetails from "../person-details";

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
                getImageUrl={getImagePerson}
                field={[
                    {serviceField: 'gender', contentField: 'Gender'},
                    {serviceField: 'eyeColor', contentField: 'Eye color'},
                    {serviceField: 'birthYear', contentField: 'Birth year'}
                ]}/>
        );

        const starshipDetails = (
            <ItemDetails
                itemId={9}
                getData={getStarship}
                getImageUrl={getImageStarship}
                field={[
                    {serviceField: 'model', contentField: 'Model'},
                    {serviceField: 'manufacturer', contentField: 'Manufacturer'},
                    {serviceField: 'length', contentField: 'Length'}
                ]}/>
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