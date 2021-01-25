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

    function listCreated(listCreated){
        // if(listCreated.length > 0) {
            console.log("APP");
            console.log(listCreated)
        // }
    }


  return (
    <div className="App container has-background-primary ">
        <h1 className="is-uppercase is-size-1 has-text-success-light pt-6 pb-5">Meme Generator</h1>
        <div className="columns">
            <div className="column is-four-fifths">
                 {templates.map(template => {
                    return (
                        <Image
                            key={template.id}
                            template={template}
                            result={result}
                            onClick={() => {

                            }}
                            listCreated={listCreated}
                        />
                    );
                })}
            </div>

            <div className="column is-one-fifths" style={{marginTop: 20}}>

                {listMeme.map(listMeme => {
                    return < Createdmeme listCreated={listCreated} />
                })}
            </div>
        </div>

    </div>
  );
}

export default App;
