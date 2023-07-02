import { useState, useEffect } from "react";
import YouTube from "react-youtube";
import bannerPhoto from "../../assets/images/banner_photo.webp";
import LazyImage from "../lazyImage/LazyImage";
import TextButton from "../textButton/TextButton";
import { YOUTUBE_ID } from "../../constant/urls";
import "./banner.scss";

interface Options {
  playerVars: {
    autoplay: 0 | 1 | undefined;
    controls: 0 | 1 | undefined;
    mute: 0 | 1 | undefined;
    loop: 0 | 1 | undefined;
  };
}
function Banner() {
  const [showVideo, setShowVideo] = useState(false);
  const videoOptions: Options = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      mute: 1,
      loop: 1,
    },
  };

  useEffect(() => {
    setShowVideo(true);
  }, []);

  const handleVideoError = () => {
    setShowVideo(false);
  };

  return (
    <section className="banner">
      <div className="banner_content">
        <h2 className="banner_title">adventure is worthwhile</h2>
        <p className="banner_motto">
          discover new places with us, adventures await you
        </p>
        <TextButton text="discover more" />
      </div>
      <div className="banner_video_container">
        {showVideo ? (
          <YouTube
            videoId={YOUTUBE_ID}
            opts={videoOptions}
            onError={handleVideoError}
          />
        ) : (
          <LazyImage src={bannerPhoto} alt="Banner Photo" />
        )}
      </div>
    </section>
  );
}

export default Banner;
