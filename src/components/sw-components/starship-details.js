import ItemDetails from "../person-details";
import DefineFields from "../define-fields";
import React from "react";
import {withSwapiService} from "../hoc-helper";
import {useParams} from "react-router-dom";

const StarshipDetails = (props) => {
    const { id } = useParams();

    return (
        <ItemDetails {...props} itemId={id} >
            <DefineFields serviceField='model' contentField='Model:'/>
            <DefineFields serviceField='length' contentField='Length:'/>
            <DefineFields serviceField='costInCredits' contentField='Cost:'/>
        </ItemDetails>

    );
};

const mapMethodToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImageUrl: swapiService.getImageStarship
    }
}

export default withSwapiService(StarshipDetails, mapMethodToProps);
