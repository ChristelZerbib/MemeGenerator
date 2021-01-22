import React, { useState } from 'react';
import './App.css';
import './components/Image';
import { Image } from "./components/Image";
import { useTemplatesFromAPI } from "./hook/useTemplatesFromAPI";
import { Createdmeme } from "./components/Createdmeme";

function App() {
  const [templates] = useTemplatesFromAPI();
  const [listMeme, setListmeme] = useState([]);

    var result = (lien) => {
        var state = listMeme.concat(lien)
        setListmeme(state);
    }

  return (
    <div className="App container has-background-primary ">
        <h1 className="is-uppercase is-size-1 has-text-success-light pt-6 pb-5">Meme Generator</h1>
        <div className="columns">
            <div className="column is-four-fifths">
                 {templates.map(template => {
                    return (
                        <Image
                            template={template}
                            result={result}
                            onClick={() => {

                            }}
                        />
                    );
                })}
            </div>

            <div className="column is-one-fifths" style={{marginTop: 20}}>

                {listMeme.map(fromForm => {
                    return < Createdmeme fromForm={fromForm} />
                })}
            </div>
        </div>

    </div>
  );
}

export default App;
