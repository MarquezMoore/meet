(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{30:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(23),s=n.n(o),i=(n(30),n(3)),c=n(7),l=n(6),u=n(5),d=n(4),h=n(56),f=n(0),p=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this)).state={detailStatus:"hidden"},a.toggleDetails=a.toggleDetails.bind(Object(l.a)(a)),a}return Object(c.a)(n,[{key:"toggleDetails",value:function(){this.state.detailStatus?this.setState({detailStatus:null}):this.setState({detailStatus:"hidden"})}},{key:"render",value:function(){var e=this.props.event;return Object(f.jsxs)("div",{className:"event pt-3 pb-5 px-4 my-3 border rounded-3 border-secondary",children:[Object(f.jsxs)("div",{className:"event-overview d-flex justify-content-between align-items-center",children:[Object(f.jsx)("span",{className:"fs-1",children:e.summary}),Object(f.jsx)("span",{className:"fs-5",children:e.location})]}),Object(f.jsx)(h.a,{className:"toggle-details m-2",onClick:this.toggleDetails,children:"hidden"===this.state.detailStatus?"Show Details":"Hide Details"}),Object(f.jsx)("div",{hidden:this.state.detailStatus,className:"details",children:e.description})]})}}]),n}(r.a.Component),v=function(e){var t=e.events;return Object(f.jsx)("ul",{className:"EventList",children:t.map((function(e){return Object(f.jsx)("li",{children:Object(f.jsx)(p,{event:e})},e.id)}))})},m=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.getClassNames=function(){return a.classNames},a.color=null,a.classNames=null,a}return Object(c.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:this.getClassNames(),children:Object(f.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(r.a.Component),g=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).color="blue",a.classNames="Alert info",a}return n}(m),b=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).color="red",a.classNames="Alert error",a}return n}(m),j=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).color="yellow",a.classNames="Alert warning",a}return n}(m),w=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this)).handleBlur=function(e){setTimeout((function(){a.setState({showSuggestions:!1})}),300)},a.handleClick=function(e){a.setState({query:e,showSuggestions:!1}),a.props.updateEvents(e),a.setState({showSuggestions:!1})},a.handleChange=function(e){var t=e.target.value,n=a.props.locations.filter((function(e){return e.toUpperCase().indexOf(t.toUpperCase())>-1}));n.length?a.setState({query:e.target.value,suggestions:n,infoText:""}):a.setState({query:e.target.value,suggestions:n,infoText:"We can not find the city you are looking for. Please try another city"})},a.state={query:"",suggestions:[],showSuggestions:void 0,infoText:""},a.handleChange=a.handleChange.bind(Object(l.a)(a)),a.handleClick=a.handleClick.bind(Object(l.a)(a)),a.handleBlur=a.handleBlur.bind(Object(l.a)(a)),a}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{className:"CitySearch d-flex flex-column align-items-center",children:[Object(f.jsx)(g,{className:"info",text:this.state.infoText}),Object(f.jsx)("input",{placeholder:"Filter by city",className:"city-search w-25",type:"text",value:this.state.query,onChange:this.handleChange,onFocus:function(){e.setState({showSuggestions:!0})},onBlur:this.handleBlur}),Object(f.jsxs)("ul",{className:"suggestions w-25  flex-column align-items-center",style:this.state.showSuggestions?{display:"flex"}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(f.jsx)("li",{onClick:function(){return e.handleClick(t)},children:t},t)})),Object(f.jsx)("li",{onClick:function(){return e.handleClick("all")},children:Object(f.jsx)("b",{children:"See all cities"})},"all")]})]})}}]),n}(r.a.Component),O=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this)).handleChange=function(e){var t=e.target.value;new RegExp(/\b(0?[1-9]|[1-2][0-9]|3[0-2])\b/).test(t)?(a.setState({infoText:""}),a.props.updateEvents(null,t)):(console.log(typeof t),a.setState({infoText:"Enter number between 1 - 32"}))},a.state={infoText:""},a.handleChange=a.handleChange.bind(Object(l.a)(a)),a}return Object(c.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("input",{type:"text",className:"numOfEvents",placeholder:"enter num of events",onChange:this.handleChange}),Object(f.jsx)(b,{text:this.state.infoText})]})}}]),n}(r.a.Component),x=n(25),y=n(8),k=n.n(y),S=n(9),T=JSON.parse(JSON.stringify([{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200521T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjFUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-21T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}])),C=n(13),N=n.n(C),E=n(10),Z=n.n(E),W=function(){var e=Object(S.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(S.a)(k.a.mark((function e(){var t,n,a,r,o,s;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("accessToken"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,W(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,N.a.get("https://pu8n39of9l.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",r&&A(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(e){var t=e.map((function(e){return e.location}));return Object(x.a)(new Set(t))},D=function(){var e=Object(S.a)(k.a.mark((function e(){var t,n,a,r,o;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Z.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return Z.a.done(),e.abrupt("return",T);case 4:if(navigator.onLine){e.next=9;break}return console.log("Running Offline"),t=localStorage.getItem("lastEvents"),Z.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 9:return e.next=11,B();case 11:if(!(n=e.sent)){e.next=21;break}return q(),a="https://pu8n39of9l.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/".concat(n),e.next=17,N.a.get(a);case 17:return(r=e.sent).data&&(o=J(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),Z.a.done(),e.abrupt("return",r.data.events);case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},A=function(){var e=Object(S.a)(k.a.mark((function e(t){var n,a,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://pu8n39of9l.execute-api.eu-central-1.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=(n(50),n(51),n(52),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this)).updateEvents=function(e,t){var n=JSON.parse(localStorage.getItem("events"));if(e){var r="all"===e?n:n.filter((function(t){return t.location===e}));a.setState({events:r})}t&&a.setState({numOfEvents:t,events:n.slice(0,t)})},a.state={events:[],locations:[],numOfEvents:32,networkStatus:navigator.onLine?"Online":"Offline"},a.updateEvents=a.updateEvents.bind(Object(l.a)(a)),a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,D().then((function(t){localStorage.setItem("events",JSON.stringify(t)),e.mounted&&e.setState({events:t,locations:J(t)})})),console.log(this.state.networkStatus)}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return Object(f.jsxs)("div",{className:"App m-4",children:[Object(f.jsx)(j,{className:"networkStatus",children:"Offline"===this.state.networkStatus?"Offline":""}),Object(f.jsx)(w,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(f.jsx)(O,{updateEvents:this.updateEvents}),Object(f.jsx)(v,{events:this.state.events})]})}}]),n}(r.a.Component)),M=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function L(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,57)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),o(e),s(e)}))};n(24).config("556cd3c0d3a04efa991db86631fd7c46").install(),s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(I,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");M?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):L(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):L(t,e)}))}}(),R()}},[[54,1,2]]]);
//# sourceMappingURL=main.f28b5945.chunk.js.map