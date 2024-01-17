import React from "react";
import { SwapiServiceConsumer } from "../swapi-service-context";

/*const test = (a, b) => a + b;

const test1 = (b) => (a) => a + b;*/

const withSwapiService = (Wrapped, mapMethodsToProps) => {
    return (props) => {
        return (
            <SwapiServiceConsumer>
                {
                    (swapiService) => {
                        const serviceProps = mapMethodsToProps(swapiService);
                        return (
                            <Wrapped {...props} {...serviceProps}/>
                        );
                    }
                }
            </SwapiServiceConsumer>
        );
    }
};

export default withSwapiService;