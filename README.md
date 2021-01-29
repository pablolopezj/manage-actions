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
      <div>
        <p>Here put your content.</p>
      </div>
    )
  }
}
```

## License

MIT © [](https://github.com/)
