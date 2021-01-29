# player-events

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/player-events.svg)](https://www.npmjs.com/package/player-events) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save player-events
```

## Usage

```jsx
import React, { Component } from 'react'
import PlayerEvents from 'player-events'

class Example extends Component {
  handleEvent() {
    const events = new PlayerEvents()
    events.callAllEventsUrl('url', 'action')
  }

  render() {
    return (
      <div className='main-content'>
        <form>
          <div className='inputUrl'>
            <label htmlFor='adsJson'>Url:</label>
            <input
              type='text'
              id='adsJson'
              onChange={this.handleEvent}
              value=''
            />
          </div>
          <div>
            <label htmlFor='actiontype'>Action:</label>
            <select id='actiontype' onChange={this.handleChangeAction}>
              <option value='midpoint'>midpoint</option>
              <option value='firstQuartile'>firstQuartile</option>
              <option value='thirdQuartile'>thirdQuartile</option>
              <option value='unmute'>unmute</option>
              <option value='complete'>complete</option>
              <option value='fullscreen'>fullscreen</option>
              <option value='impression'>impression</option>
              <option value='pause'>pause</option>
              <option value='start'>start</option>
              <option value='mute'>mute</option>
            </select>
          </div>
          <div className='controls'>
            <button type='button' onClick={this.handleCallEvets}>
              CallUrls
            </button>
          </div>
        </form>
      </div>
    )
  }
}
```

## License

MIT © [](https://github.com/)
