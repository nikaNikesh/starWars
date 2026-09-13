import ItemDetails from "../person-details";
import DefineFields from "../define-fields";
import React from "react";
import {withSwapiService} from "../hoc-helper";

const PersonDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <DefineFields serviceField='gender' contentField='Gender:'/>
            <DefineFields serviceField='eyeColor' contentField='Eye color:'/>
            <DefineFields serviceField='birthYear' contentField='Birth year:'/>
        </ItemDetails>
    );
};

const mapMethodToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getImagePerson
    }
};
export default withSwapiService(PersonDetails, mapMethodToProps);