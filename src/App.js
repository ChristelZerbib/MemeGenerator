import './App.css';
import './components/Image';
import { Image } from "./components/Image";
import { useTemplatesFromAPI } from "./hook/useTemplatesFromAPI";

function App() {
  const [templates] = useTemplatesFromAPI();
  return (
    <div className="App container has-background-primary ">
        <h1 className="is-uppercase is-size-1 has-text-success-light pt-6 pb-5">Meme Generator</h1>
        <div className="columns">
            <div className="column is-four-fifths">
                 {templates.map(template => {
                    return (
                        <Image
                            template={template}
                            onClick={() => {

                            }}
                        />
                    );
                })}
            </div>

            <div className="column is-one-fifths" style={{marginTop: 20}}>

                Meme end
            </div>
        </div>

    </div>
  );
}

export default App;
