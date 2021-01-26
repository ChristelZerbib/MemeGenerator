
import React, { useState } from "react";
import { Form } from './Form'

export const Image = ({ template, onMemeCreation }) => {
    const [showForm, setShowForm] = useState(false);

    function toggleFormOnClick() {
        setShowForm(!showForm);
    }

    return (
        <div className="card is-one-quarter">
            <div className="card-image" onClick={toggleFormOnClick}>
                <figure className="image is-4by3">
                    <img
                        key={template.id}
                        src={template.url}
                        alt={template.name}
                    />
                </figure>
            </div>
            { showForm &&
            <div className="card-content">
                <div className="content">
                    <Form
                        idSelected = {template.id}
                        onMemeCreation = {onMemeCreation}
                    />
                </div>
            </div>
            }
        </div>


    );
};