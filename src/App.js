import React, { useState } from 'react';
import './App.css';
import './components/Image';
import { Image } from "./components/Image";
import { useTemplatesFromAPI } from "./hook/useTemplatesFromAPI";
import { Createdmeme } from "./components/Createdmeme";

function App() {
    const [templates] = useTemplatesFromAPI();
    const [listCreatedMemes, setListCreatedMemes] = useState([]);

    var addCreatedMeme = strUrl => {
        if(strUrl) {
            if(strUrl.length > 0 && listCreatedMemes.indexOf(strUrl) <= -1) {
                setListCreatedMemes([strUrl, ...listCreatedMemes]);
            }
        }
    }

    return (
        <div className="App container has-background-primary ">
            <h1 className="is-uppercase is-size-1 has-text-success-light pt-6 pb-5">Meme Generator</h1>
            <div className="columns">
                <div className="column is-four-fifths">
                    {templates.map(template => {
                        return (
                            <Image
                                onMemeCreation = {addCreatedMeme}
                                key={template.id}
                                template={template}
                            />
                        );
                    })}
                </div>

                <div className="column is-one-fifths" style={{marginTop: 20}}>

                    {listCreatedMemes.map(url => {
                        return (
                            < Createdmeme
                                key = {url}
                                url = {url}
                            />
                        )
                    })}
                </div>
            </div>

        </div>
    );
}

export default App;