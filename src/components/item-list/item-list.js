import React from 'react';



import './item-list.css';
import SwapiService from "../../services/swapi-service";
import { withListData } from '../hoc-helper'

const ItemList = (props) => {
    const {data, children, onItemSelected} = props;

    const items = data.map((item) => {
        const {id} = item;

        const content = children(item);
        return (
            <li className="list-group-item"
                key={id}
                onClick={() => onItemSelected(id)}>
                {content}
            </li>
        )
    });

    return (
        <ul className="item-list list-group">
            {items}
        </ul>
    );
}

const { getAllPeople } = new SwapiService;

export default withListData(ItemList, getAllPeople);

