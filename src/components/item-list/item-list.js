import React, {Component} from 'react';

import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

import './item-list.css';

export default class ItemList extends Component {

    swapiService = new SwapiService();

    state = {
        itemList: null
    };

    componentDidMount() {
        const { getData } = this.props;

        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                });
            });
    }

    renderItems(array) {
       let { renderItem } = this.props;

        if (!renderItem) {
            renderItem = this.props.children;
        }

        return array.map((item) => {
            const { id } = item;

            const content = renderItem(item);
            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                    {content}
                </li>
            )
        })
    }

    render() {
        const {itemList} = this.state;

        if (!itemList) {
            return <Spinner/>
        }
        const items = this.renderItems(itemList);
        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}

