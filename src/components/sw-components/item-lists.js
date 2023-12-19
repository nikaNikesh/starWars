import React from "react";

import ItemList from "../item-list";
import {withListData} from '../hoc-helper';
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService;

const {
    getAllPeople,
    getAllStarships,
    getAllPlanets
} = swapiService;

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        );
    }
};

const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ model, name }) => {
    return (<span>{name} ({model})</span>);
}
const StarshipList = withListData(
                        withChildFunction(ItemList, renderModelAndName),
                        getAllStarships);
const PersonList = withListData(
                        withChildFunction(ItemList, renderName),
                        getAllPeople);
const PlanetList = withListData(
                        withChildFunction(ItemList, ({name}) => <span>{name}</span>),
                        getAllPlanets);

export {
    StarshipList,
    PersonList,
    PlanetList
};

