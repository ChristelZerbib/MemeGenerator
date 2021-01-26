import React from 'react';

export const Createdmeme = ({url}) => {

    return (
        <div className="text-center" style={{paddingTop: 10}}>
            <img style={{ width: 200 }} src={url} alt="created meme"/>
        </div>
    );
};