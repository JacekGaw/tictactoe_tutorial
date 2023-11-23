import React, { useState } from "react";

const Player = ({ initialName, symbol }) => {
   const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClic = () =>
    setIsEditing((prevState) => !prevState);

    const handleChange = (e) => {
        setPlayerName(e.target.value);
    }

  return (
    <li>
      <span className="player">
        <span className="player-name">
          {!isEditing ? playerName : <input type="text" required value={playerName} onChange={handleChange} />}
        </span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClic}>{!isEditing ? "Edit" : "Confirm"}</button>
    </li>
  );
};

export default Player;
