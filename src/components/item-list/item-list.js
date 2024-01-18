import React from 'react';
import PropTypes from "prop-types";

import './item-list.css';

const ItemList = (props) => {
    const {data, children, onItemSelected} = props;

    ItemList.defaultProps = {
        onItemSelected: () => {}
    };

    ItemList.propTypes = {
        onItemSelected: PropTypes.func,
        date: PropTypes.arrayOf(PropTypes.object).isRequired,
        children: PropTypes.func.isRequired
    }

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

export default ItemList;

