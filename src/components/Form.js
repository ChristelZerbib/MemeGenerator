import React, { useState } from 'react';

export const Form = () => {
    const [topText, setTopText] = useState('');
    const [bottomText, setBottomText] = useState('');

    return (
        <form className="field">
            <input className="input mb-2" type="text" placeholder="Text 1" name="text1" value={topText} onChange={e => setTopText(e.target.value)}/>
            <input className="input mb-3" type="text" placeholder="Text 2" name="text2" value={bottomText} onChange={e => setBottomText(e.target.value)}/>
            <button type="submit">Generate Meme</button>
        </form>
    )
}