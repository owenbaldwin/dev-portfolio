import PropTypes from "prop-types";

import './video.styles.scss';

const YoutubeEmbed = ({ embedUrl }) => (
  <div className="video-responsive">
    <iframe
      width="560"
      height="315"
      src={embedUrl}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedUrl: PropTypes.string.isRequired
};

export default YoutubeEmbed;
