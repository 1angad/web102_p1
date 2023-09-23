import React from "react";

const Event = (player) => {
    return (
        <div className = "Card">
            <img src = {player.image}></img>
            <h3>{player.name}</h3>
            <h4>{player.position}</h4>
            <a href= {player.info}><button>View Stats</button></a>
        </div>
    )
}

export default Event;