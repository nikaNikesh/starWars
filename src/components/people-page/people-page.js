import React, {Component} from 'react';

import './people-page.css';
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator";
import ErrorBoundary from "../error-boundary";
import SwapiService from "../../services/swapi-service";
import Row from "../row";


export default class PeoplePage extends Component {

    swapiService = new SwapiService;


    state = {
        selectedPerson: 3,
        hasError: false
    }


    onPersonSelected = (selectedPerson) => {
        this.setState({
            selectedPerson: selectedPerson
        });
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator/>
        }

        const itemList = (
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}>
                {(item) => (`${item.name} (${item.birthYear})`)}
            </ItemList>
        );


        const personDetails = (
        <ErrorBoundary>
            <PersonDetails itemId={this.state.selectedPerson}/>
        </ErrorBoundary>
        );

        return (             <Row left={itemList} right={personDetails} />
        )

    }
}