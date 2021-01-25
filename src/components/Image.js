import React from "react";
import { Form } from './Form'

export const Image = ({ template, onClick, listCreated }) => {
    return (
        <div className="card is-one-quarter">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img
                        key={template.id}
                        src={template.url}
                        alt={template.name}
                        onClick={onClick}
                    />
                </figure>
            </div>
            <div className="card-content">
                <div className="content">
                    <Form
                        idSelected = {template.id}
                        listCreated = {listCreated}
                    />
                </div>
            </div>
        </div>


    );
};