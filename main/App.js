import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
    };
  }

  componentDidMount() {
    this.getPlaylist();
  }

  getPlaylist() {
    fetch(
      'https://api.vimeo.com/channels/documentary/videos?access_token=b01e6d1ea960f10c41ed22b14baa8c07'
    )
      .then(resp => resp.json())
      .then(({ data }) => {
        this.setState({ videos: data });
      });
  }

  render() {
    return <div className="app" />;
  }
}

export default App;
