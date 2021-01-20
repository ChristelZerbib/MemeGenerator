import {useEffect, useState} from 'react';

export const useTemplatesFromAPI = () => {
    const [templates, setTemplates] = useState([]);

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes").then(x =>
            x.json().then(response => setTemplates(response.data.memes))
        );
    }, []);

    return [templates];
};