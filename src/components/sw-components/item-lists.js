import React from "react";

import ItemList from "../item-list";
import {withListData, withSwapiService} from '../hoc-helper';

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        );
    }
};

const renderName = ({name}) => <span>{name}</span>;
const renderModelAndName = ({model, name}) => {
    return (<span>{name} ({model})</span>);
}

const mapPersonMethodToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    };
};

const mapStarshipMethodToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    };
};

const mapPlanetMethodToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    };
};

const StarshipList = withSwapiService(
    withListData(
        withChildFunction(ItemList, renderModelAndName)
    ),
    mapStarshipMethodToProps
);
const PersonList = withSwapiService(withListData(
    withChildFunction(ItemList, renderName)), mapPersonMethodToProps);
const PlanetList = withSwapiService(withListData(
    withChildFunction(ItemList, renderName)), mapPlanetMethodToProps);

export {
    StarshipList,
    PersonList,
    PlanetList
};

