import React, { useState, useEffect } from 'react';
import api from '../api';

const parameters = obj => {
    const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`);
    return params.join("&");
};

export const Form = ({idSelected, listCreated}) => {
    const [topText, setTopText] = useState('');
    const [bottomText, setBottomText] = useState('');
    const [createdMeme, setCreatedMeme] = useState('');

    useEffect(()=>{
        listCreated(createdMeme);
    })

    return (
        <form className="field"
              onSubmit={async e => {
                  e.preventDefault();
                  // add logic to create meme from api
                  const params = {
                      template_id: idSelected,
                      text0: topText,
                      text1: bottomText,
                      username: "czerbibmeme",
                      password: "L0vememe"
                  };

                  const headers = {
                      'content-type': 'application/x-www-form-urlencoded',
                  };
                  await api(
                      {
                          url: api.defaults.baseURL,
                          method: 'POST',
                          headers: headers,
                          data: parameters(params)
                      }
                  ).then(function(response) {
                      setCreatedMeme(response.data.data.url);
                  }).catch(function (error) {
                      console.log(error);
                  });
              }}
        >
            <input className="input is-primary mb-2" type="text" placeholder="Text 1" name="text1" value={topText} onChange={e => setTopText(e.target.value)}/>
            <input className="input is-primary mb-3" type="text" placeholder="Text 2" name="text2" value={bottomText} onChange={e => setBottomText(e.target.value)}/>
            <button className="button is-primary" type="submit">Generate Meme</button>
        </form>
    )
}