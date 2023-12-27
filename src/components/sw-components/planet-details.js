import ItemDetails from "../person-details";
import DefineFields from "../define-fields";
import React from "react";
import {withSwapiService} from "../hoc-helper";

const PlanetDetails = (props) => {
    return (
        <ItemDetails {...props}>

            <DefineFields serviceField="population" contentField="Population:"/>
            <DefineFields serviceField="rotationPeriod" contentField="Rotation Period:"/>
            <DefineFields serviceField="diameter" contentField="Diameter:"/>
        </ItemDetails>

    );
};

const mapMethodToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getImagePlanet
    }
};

export default withSwapiService(PlanetDetails, mapMethodToProps);