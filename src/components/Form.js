import React, { useState } from 'react';
import api from '../api';

const objectToQueryParam = obj => {
    const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`);
    return "?" + params.join("&");
};

export const Form = ({idSelected, created}) => {
    const [topText, setTopText] = useState('');
    const [bottomText, setBottomText] = useState('');
    const [createdMeme, setCreatedMeme] = useState(null);

    return (
        <form className="field"
              onSubmit={async e => {
                  e.preventDefault();
                  // add logic to create meme from api
                  const params = {
                      template_id: idSelected,
                      text1: topText,
                      text2: bottomText,
                      username: "czerbibmeme",
                      password: "L0vememe"
                  };
                  const response = await fetch(
                      api.defaults.baseURL + `${objectToQueryParam(
                          params
                      )}`
                  );
                  const json = await response.json();
                  setCreatedMeme(json.data.url);
                  created(createdMeme);
              }}
        >
            <input className="input is-primary mb-2" type="text" placeholder="Text 1" name="text1" value={topText} onChange={e => setTopText(e.target.value)}/>
            <input className="input is-primary mb-3" type="text" placeholder="Text 2" name="text2" value={bottomText} onChange={e => setBottomText(e.target.value)}/>
            <button className="button is-primary" type="submit">Generate Meme</button>
        </form>
    )
}