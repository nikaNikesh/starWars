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


const StarshipList = withListData(ItemList, getAllStarships);
const PersonList = withListData(ItemList, getAllPeople);
const PlanetList = withListData(ItemList, getAllPlanets);



export {
    StarshipList,
    PersonList,
    PlanetList
};

