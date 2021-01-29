class PlayerEvents {

  async getUrl(url) {
    const res = await fetch(url)
      .then(res => res)
      .then(data => data);
    return res;
  }

  async readJson(url) {
    return await fetch(url,
      {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    ).then(response => response.json())
      .then(data => data)
      .catch(err => {
        console.log(err);
      });
  }

  callUrl(data) {
    data.map(item => {
      item.forEach(async element => {
        const res = await this.getUrl(element);
        console.log(res);
      });
    });
  }

  searcgEvents(eventType, data) {
    let urls = [];
    data.avails.map(item => {
      let findUrl = item.ads[0].trackingEvents.filter(item => {
        return item.eventType === eventType;
      });
      urls.push(findUrl[0].beaconUrls);
    });

    return urls;
  }

  async callAllEventsUrl(url, eventType) {
    const data = await this.readJson(url);
    let urls = this.searcgEvents(eventType, data);
    this.callUrl(urls);
  }
}

export default PlayerEvents;