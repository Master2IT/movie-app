"use client";
import { useEffect, useRef } from "react";
import { inherits } from "util";

// import React from "react";
// import videojs from "video.js";
// import "video.js/dist/video-js.css";
// import "videojs-youtube";
// import "@filmgardi/videojs-subtitle-settings";

// export const VideoPlayer = (props) => {
//   const videoRef = React.useRef(null);
//   const playerRef = React.useRef(null);
//   const { options, onReady } = props;

//   React.useEffect(() => {
//     // Make sure Video.js player is only initialized once
//     if (!playerRef.current) {
//       // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
//       const videoElement = document.createElement("video-js");

//       videoElement.classList.add("vjs-big-play-centered");
//       videoRef.current.appendChild(videoElement);

//       const player = (playerRef.current = videojs(videoElement, options, () => {
//         videojs.log("player is ready");
//         onReady && onReady(player);
//       }));

//       // You could update an existing player in the `else` block here
//       // on prop change, for example:
//     } else {
//       const player = playerRef.current;

//       player.autoplay(options.autoplay);
//       player.src(options.sources);
//     }
//   }, [options, videoRef]);

//   // Dispose the Video.js player when the functional component unmounts
//   React.useEffect(() => {
//     const player = playerRef.current;

//     return () => {
//       if (player && !player.isDisposed()) {
//         player.dispose();
//         playerRef.current = null;
//       }
//     };
//   }, [playerRef]);

//   return (
//     <div data-vjs-player>
//       <div ref={videoRef} />
//     </div>
//   );
// };

// export default VideoPlayer;

const VideoPlayer = (props) => {
  const videoRef = useRef(null);
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
        id: videoRef.current,
        width: "100%",
        magnet:
          "magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel",
        on: function (e) {
          if (e.name == window.webtor.INITED) {
            e.player.play();
          }
        },
      });
    }
  };

  return <div ref="player"></div>;
};

export default VideoPlayer;
