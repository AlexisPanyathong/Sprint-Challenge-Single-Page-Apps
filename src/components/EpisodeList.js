import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";

export default function EpisodeList() {
    const [epsiodes, setEpisodes] = useState([]);

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/episode/`)
        //handle success
        .then(response => {
            console.log('rickandmorty episode api', response.data);

            setEpisodes(response.data.reesults);

        });

    }, []);
    console.log(episodes);

    return (
        <div className="episode-list">
            <h2>Episodes</h2>
            {/* {episodes.map(episode => (

            ))} */}
        </div>
    )
}