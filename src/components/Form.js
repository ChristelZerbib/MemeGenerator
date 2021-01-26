import React, { useState } from 'react';
import { useEffect } from 'react';
import api from '../api';

const objectToQueryParam = obj => {
    const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`);
    return params.join("&");
};


export const Form = ({idSelected, onMemeCreation}) => {
    const [topText, setTopText] = useState('');
    const [bottomText, setBottomText] = useState('');
    const [createdMeme, setCreatedMeme] = useState(null);

    useEffect(()=>{
        onMemeCreation(createdMeme);
    }, [createdMeme, onMemeCreation]);

    return (
        <form className="field"
              onSubmit={async e => {
                  e.preventDefault();

                  // parameters needed by the api
                  const params = {
                      template_id: idSelected,
                      text0: topText,
                      text1: bottomText,
                      username: "czerbibmeme",
                      password: "L0vememe"
                  };

                  // request
                  await api(
                      {
                          url: api.defaults.baseURL,
                          method: 'POST',
                          data: objectToQueryParam(params)
                      }
                  ).then(function(response) {
                      // if request ok
                      setCreatedMeme(response.data.data.url);
                  }).catch(function (error) {
                      // if error catched
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