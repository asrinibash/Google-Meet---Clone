import { useState } from "react";

const usePlayer = () => {
  const [players, setPlayers] = useState({});

  return {players,setPlayers}
};

export default usePlayer;
