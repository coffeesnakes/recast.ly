import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoListEntry from './VideoListEntry.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
// import searchYouTube from '../lib/searchYouTube.js'
// refactor to Class component
// use costructor and super
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
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.onInputSearch = this.onInputSearch.bind(this);
  }

  componentDidMount() {
    this.props.searchYouTube({
      key: this.props.YOUTUBE_API_KEY,
      query: 'tennis',
      max: 5
    }, (data) => {
      this.setState({
        allVideos: data,
        currentVideo: data[0]
      });
    });
    console.log('component mounting ..testest');
  }

  onVideoClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  onSearchSubmit(input) {
    this.props.searchYouTube({
      key: this.props.YOUTUBE_API_KEY,
      query: input,
      max: 5
    }, (data) => {
      this.setState({
        allVideos: data,
        currentVideo: data[0]
      });
    }
    );
  }

  onInputSearch(input) {
    this.props.searchYouTube({
      key: this.props.YOUTUBE_API_KEY,
      query: input,
      max: 5
    }, (data) => {
      this.setState({
        allVideos: data,
        currentVideo: data[0]
      });
    }
    );

  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            < Search onSearchSubmit={this.onSearchSubmit} onInputSearch={this.onInputSearch} />
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

export default App;
