(this["webpackJsonpplayer-events-example"]=this["webpackJsonpplayer-events-example"]||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);n(3);var a=n(0),r=n.n(a),l=n(1),o=n.n(l),i=function(){function e(){}var t=e.prototype;return t.getUrl=function(e){try{return Promise.resolve(fetch(e).then((function(e){return e})).then((function(e){return e})))}catch(t){return Promise.reject(t)}},t.readJson=function(e){try{return Promise.resolve(fetch(e,{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.log(e)})))}catch(t){return Promise.reject(t)}},t.callUrl=function(e){var t=this;e.map((function(e){e.forEach((function(e){try{return Promise.resolve(t.getUrl(e)).then((function(e){console.log(e)}))}catch(n){return Promise.reject(n)}}))}))},t.searcgEvents=function(e,t){var n=[];return t.avails.map((function(t){var a=t.ads[0].trackingEvents.filter((function(t){return t.eventType===e}));n.push(a[0].beaconUrls)})),n},t.callAllEventsUrl=function(e,t){try{var n=this;return Promise.resolve(n.readJson(e)).then((function(e){var a=n.searcgEvents(t,e);n.callUrl(a)}))}catch(a){return Promise.reject(a)}},e}();class s extends r.a.Component{constructor(e){super(e),this.state={url:"https://servicios.site/BLDash/ads.json",action:"midpoint"},this.handleChangeUrl=this.handleChangeUrl.bind(this),this.handleChangeAction=this.handleChangeAction.bind(this),this.handleCallEvets=this.handleCallEvets.bind(this)}handleChangeUrl(e){this.setState({url:e.target.value})}handleChangeAction(e){this.setState({action:e.target.value})}handleCallEvets(){console.log(this.state);(new i).callAllEventsUrl(this.state.url,this.state.action)}render(){return r.a.createElement("div",{className:"main-content"},r.a.createElement("form",null,r.a.createElement("div",{className:"inputUrl"},r.a.createElement("label",{htmlFor:"adsJson"},"Url:"),r.a.createElement("input",{type:"text",id:"adsJson",onChange:this.handleChangeUrl,value:"https://servicios.site/BLDash/ads.json"})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"actiontype"},"Action:"),r.a.createElement("select",{id:"actiontype",onChange:this.handleChangeAction},r.a.createElement("option",{value:"midpoint"},"midpoint"),r.a.createElement("option",{value:"firstQuartile"},"firstQuartile"),r.a.createElement("option",{value:"thirdQuartile"},"thirdQuartile"),r.a.createElement("option",{value:"unmute"},"unmute"),r.a.createElement("option",{value:"complete"},"complete"),r.a.createElement("option",{value:"fullscreen"},"fullscreen"),r.a.createElement("option",{value:"impression"},"impression"),r.a.createElement("option",{value:"pause"},"pause"),r.a.createElement("option",{value:"start"},"start"),r.a.createElement("option",{value:"mute"},"mute"))),r.a.createElement("div",{className:"controls"},r.a.createElement("button",{type:"button",onClick:this.handleCallEvets},"CallUrls"))))}}var c=s;o.a.render(r.a.createElement(c,null),document.getElementById("root"))},2:function(e,t,n){e.exports=n(10)},3:function(e,t,n){}},[[2,1,2]]]);
//# sourceMappingURL=main.1f9cb157.chunk.js.map