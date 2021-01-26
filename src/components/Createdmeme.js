import React from 'react';

export const Createdmeme = ({url}) => {

    return (
        <div className="card has-text-left">
            <div className="card-image">
                <div className="image">
                    <img style={{ width: 200 }} src={url} alt="created meme"/>
                </div>
            </div>
        </div>
    );
};