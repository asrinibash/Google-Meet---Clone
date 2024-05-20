import { useSocket } from "@/context/socket";
import { useEffect } from "react";
import usePeer from "@/hooks/usePeer";
import useMediaStream from "@/hooks/useMediaStream";
import Player from "@/components/Player";

const room = () => {
  const socket = useSocket();
  const { peer, myId } = usePeer();
  const { stream } = useMediaStream();

  return (
    <div>
      <Player url={stream} muted playing playerId={myId} />
    </div>
  );
};

export default room;
