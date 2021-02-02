# SDKBLMTracking

## Install

```bash
npm install --save SDKBLMTracking
```

## Usage

```jsx
<div className='main-content'>
  <form>
    <div className='inputUrl'>
      <label htmlFor='adsJson'>Url:</label>
      <input
        type='text'
        id='adsJson'
        onChange={this.handleChangeUrl}
        value='ads.json'
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
    <div>
      <label htmlFor='adId'>Ad ID:</label>
      <select id='adId' onChange={this.handleChangeAdId}>
        <option value='_PT10M_0'>_PT10M_0</option>
        <option value='_PT20M0.388S_0'>_PT20M0.388S_0</option>
        <option value='_PT20M_0'>_PT20M_0</option>
        <option value='_PT0S_0'>_PT0S_0</option>
        <option value='_PT30S_0'>_PT30S_0</option>
      </select>
    </div>
    <div className='controls'>
      <button type='button' onClick={this.handleCallEvets}>
        CallUrls
      </button>
    </div>
  </form>
</div>
```

## License

MIT © [](https://github.com/)
