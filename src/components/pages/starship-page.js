import React from "react";
import {StarshipList} from "../sw-components";
import {useLocation, useNavigate} from "react-router-dom";

const StarshipPage = () => {
    const {pathname} = useLocation();
    const navigate = useNavigate();

    return (
    <StarshipList
            onItemSelected={(itemId) => {
                navigate(pathname + itemId);
            }}
        />
    );
}

export default StarshipPage;