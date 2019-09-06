import React, { useEffect, useState } from "react";
import axios from 'axios'
import PlayerCard from './PlayerCard'

export default function PlayerList() {
  // TODO: Add useState to track data from useEffect
  const [player, setPlayer] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get("https://googletrends.github.io/data/")
    .then(data => {
      const playerList = data.data.results
      setPlayer(playerList)
    })
    .catch(error => {
      console.log(error)
    })
  }, []);

  return (
    <section className="character-list grid-view">
      {player.map((player, index) => {
        return <PlayerCard key={index} {...player} />
      })}
    </section>
  );
}
