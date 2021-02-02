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
      .catch(error => {
        throw error
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

  searchEvents(eventType, data) {
    let urls = [];
    data.avails.map(item => {
      let findUrl = item.ads[0].trackingEvents.filter(item => {
        return item.eventType === eventType;
      });
      urls.push(findUrl[0].beaconUrls);
    });

    return urls;
  }

  searchAds(adId, data, eventType) {
    let ads = [];
    let urls;
    data.avails.map(item => {
      let listAd = item.ads.filter(ad => {
        return ad.adId === adId;
      });
      if (listAd.length) {
        ads.push(listAd);
      }
    });

    urls = ads[0][0].trackingEvents.filter(item => {
      return item.eventType === eventType;
    });
    console.log(urls[0]);
  }

  async callAllEventsUrl(url, eventType, adId) {
    const data = await this.readJson(url);
    this.searchAds(adId, data, eventType);
    //let urls = this.searchEvents(eventType, data);
    // this.callUrl(urls);
  }
}

export default PlayerEvents;