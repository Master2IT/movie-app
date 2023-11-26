"use client";
import { useEffect } from "react";

const VideoPlayer = (props) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/@webtor/embed-sdk-js/dist/index.min.js";
    script.async = true;
    script.onload = () => initPlayer();

    document.body.appendChild(script);
  }, []);

  const initPlayer = () => {
    if (typeof window != undefined) {
      window.webtor = window.webtor || [];

      window.webtor.push({
        id: "player",
        width: "100%",
        // magnet: props.file,
        torrentUrl: props.file,
        on: function (e) {
          if (e.name == window.webtor.INITED) {
            e.player.play();
          }
        },
      });
    }
  };

  return <div id="player"></div>;
};

export default VideoPlayer;
