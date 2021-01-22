import React from 'react';

export const Createdmeme = ({fromForm}) => {

    if (fromForm) {
        return (
            <>
                <div className="text-center" style={{paddingTop: 10}}>
                    <img style={{ width: 200 }} src={fromForm} alt="created meme"/>
                </div>
            </>
        )
    }
    else {
        return (
            <>
            </>
        )
    }
};