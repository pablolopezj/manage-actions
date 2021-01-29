import React from 'react';
import PlayerEvents from 'player-events';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://servicios.site/BLDash/ads.json',
      action: 'midpoint'
    }

    this.handleChangeUrl = this.handleChangeUrl.bind(this);
    this.handleChangeAction = this.handleChangeAction.bind(this);
    this.handleCallEvets = this.handleCallEvets.bind(this);
  }

  handleChangeUrl(e) {
    this.setState({ url: e.target.value })
  }

  handleChangeAction(e) {
    this.setState({ action: e.target.value });
  }

  handleCallEvets() {
    console.log(this.state);
    const events = new PlayerEvents();
    events.callAllEventsUrl(
      this.state.url,
      this.state.action
    );
  }

  render() {
    return (
      <div className="main-content">
        <form>
          <div className="inputUrl">
            <label htmlFor="adsJson">Url:</label>
            <input type="text" id="adsJson" onChange={this.handleChangeUrl} value="https://servicios.site/BLDash/ads.json" />
          </div>
          <div>
            <label htmlFor="actiontype">Action:</label>
            <select id="actiontype" onChange={this.handleChangeAction}>
              <option value="midpoint">midpoint</option>
              <option value="firstQuartile">firstQuartile</option>
              <option value="thirdQuartile">thirdQuartile</option>
              <option value="unmute">unmute</option>
              <option value="complete">complete</option>
              <option value="fullscreen">fullscreen</option>
              <option value="impression">impression</option>
              <option value="pause">pause</option>
              <option value="start">start</option>
              <option value="mute">mute</option>
            </select>
          </div>
          <div className="controls">
            <button type="button" onClick={this.handleCallEvets}>CallUrls</button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;