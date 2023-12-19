import DefineFields from "../define-fields";
import ItemDetails from "../person-details";
import React from "react";
import {SwapiServiceConsumer} from "../swapi-service-context";

const StarshipDetails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getStarship, getImageStarship}) => {
                    return (
                        <ItemDetails
                            itemId={itemId}
                            getData={getStarship}
                            getImageUrl={getImageStarship}>
                            <DefineFields serviceField='model' contentField='Model:'/>
                            <DefineFields serviceField='length' contentField='Length:'/>
                            <DefineFields serviceField='costInCredits' contentField='Cost:'/>
                        </ItemDetails>
                    );
                }
            }
        </SwapiServiceConsumer>
    );
};

const PersonDetails = ({itemId}) => {
    // return React.createElement(
    //     ItemDetails,
    //     {itemID: itemId, getData: getPerson, getImagePerson: getImagePerson},
    //     React.createElement(DefineFields, { serviceField: 'gender', contentField: 'Gender:' }),
    //     React.createElement(DefineFields, { serviceField: 'eyeColor', contentField: 'Eye color:' }),
    //     React.createElement(DefineFields, { serviceField: 'birthYear', contentField: 'Birth year:' })
    //     );
    return (
        <SwapiServiceConsumer>
            {
                ({getPerson, getImagePerson}) => {
                    return (
                        <ItemDetails
                            itemId={itemId}
                            getData={getPerson}
                            getImageUrl={getImagePerson}>
                            <DefineFields serviceField='gender' contentField='Gender:'/>
                            <DefineFields serviceField='eyeColor' contentField='Eye color:'/>
                            <DefineFields serviceField='birthYear' contentField='Birth year:'/>
                        </ItemDetails>
                    );
                }
            }
        </SwapiServiceConsumer>
    );
};

const PlanetDetails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getPlanet, getImagePlanet}) => {
                    return (
                        <ItemDetails
                            itemId={itemId}
                            getData={getPlanet}
                            getImageUrl={getImagePlanet}>

                            <DefineFields serviceField="population" contentField="Population:"/>
                            <DefineFields serviceField="rotationPeriod" contentField="Rotation Period:"/>
                            <DefineFields serviceField="diameter" contentField="Diameter:"/>
                        </ItemDetails>
                    );
                }
            }
        </SwapiServiceConsumer>
    );
};

export {
    StarshipDetails,
    PersonDetails,
    PlanetDetails
};