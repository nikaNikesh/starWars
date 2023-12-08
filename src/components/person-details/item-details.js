import React, {Component} from 'react';

import SwapiService from "../../services/swapi-service";

import './item-details.css';
import ErrorButton from "../error-button";

export default class ItemDetails extends Component {

    swapiService = new SwapiService;

    state = {
        item: null,
        image: null
    };

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    updateItem() {
        const {itemId, getData, getImageUrl} = this.props;
        if (!itemId) {
            return;
        }

        getData(itemId)
            .then((item) => this.setState({
                    item,
                    image: getImageUrl(item)
                })
            )

    }

    generateItemField = (id, fields, item) => {
        return fields.map((field) => {
            return (
                <li className="list-group-item"
                    key={id}>
                    <span className="term">{field.contentField}</span>
                    <span>{item[field.serviceField]}</span>
                </li>
            )
        })

    }


    render() {
        const {item, image} = this.state;

        if (!item) {
            return <span>Select a person from a list</span>;
        }

        const {id, name} = this.state.item;
        const itemField = this.generateItemField(id, this.props.field, item);


        return (
            <div className="person-details card">
                <img className="person-image"
                     src={image}/>

                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        {itemField}
                    </ul>
                    <ErrorButton/>
                </div>
            </div>
        )
    }
}