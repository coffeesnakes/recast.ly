import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoListEntry from './VideoListEntry.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
// refactor to Class component
// use constructor and super
// set state to hold all videos
// have state hold a single video in example data
// render current video

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allVideos: exampleVideoData,
      currentVideo: exampleVideoData[0],
    };
    this.onVideoClick = this.onVideoClick.bind(this);
  }

  onVideoClick(video) {
    console.log(this.state.currentVideo);
    this.setState({
      currentVideo: video
    });
  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            < Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            < VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            < VideoList videos={this.state.allVideos} onVideoClick={this.onVideoClick} />
          </div>
        </div>
      </div>
    );
  }
}

// // var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         < Search />
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         < VideoPlayer />
//       </div>
//       <div className="col-md-5">
//         < VideoList />
//       </div>
//     </div>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;


// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         < Search />
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         < VideoPlayer />
//       </div>
//       <div className="col-md-5">
//         < VideoList />
//       </div>
//     </div>
//   </div>
// );