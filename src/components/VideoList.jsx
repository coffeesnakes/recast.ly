import VideoListEntry from './VideoListEntry.js';
import exampleVideoData from '../data/exampleVideoData.js';

var VideoList = (props) => (
  //console.log("props", props)
  < div className="video-list" >
    {
      props.videos.map(video =>
        <VideoListEntry video={video} key={video.etag} onVideoClick={props.onVideoClick} />
      )
    }
  </div >

);

VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

export default VideoList;