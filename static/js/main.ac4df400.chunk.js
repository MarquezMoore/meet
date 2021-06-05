(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{28:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(22),s=n.n(o),i=(n(28),n(5)),c=n(6),u=n(3),l=n(8),d=n(7),h=n(54),p=n(0),f=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this)).state={detailStatus:"hidden"},a.toggleDetails=a.toggleDetails.bind(Object(u.a)(a)),a}return Object(c.a)(n,[{key:"toggleDetails",value:function(){this.state.detailStatus?this.setState({detailStatus:null}):this.setState({detailStatus:"hidden"})}},{key:"render",value:function(){var e=this.props.event;return Object(p.jsxs)("div",{className:"event pt-3 pb-5 px-4 my-3 border rounded-3 border-secondary",children:[Object(p.jsxs)("div",{className:"event-overview d-flex justify-content-between align-items-center",children:[Object(p.jsx)("span",{className:"fs-1",children:e.summary}),Object(p.jsx)("span",{className:"fs-5",children:e.location})]}),Object(p.jsx)(h.a,{className:"show-details m-2",onClick:this.toggleDetails,children:"Show Details"}),Object(p.jsx)("div",{hidden:this.state.detailStatus,className:"details",children:e.description})]})}}]),n}(r.a.Component),m=function(e){var t=e.events;return Object(p.jsx)("ul",{className:"EventList",children:t.map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)(f,{event:e})},e.id)}))})},v=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this)).handleClick=function(e){a.setState({query:e,showSuggestions:!1}),a.props.updateEvents(e),a.setState({showSuggestions:!1})},a.handleChange=function(e){var t=e.target.value,n=a.props.locations.filter((function(e){return e.toUpperCase().indexOf(t.toUpperCase())>-1}));a.setState({query:e.target.value,suggestions:n})},a.state={query:"",suggestions:[],showSuggestions:void 0},a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.handleClick=a.handleClick.bind(Object(u.a)(a)),a}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"CitySearch d-flex flex-column align-items-center",children:[Object(p.jsx)("input",{placeholder:"Filter by city",className:"city-search w-25",type:"text",value:this.state.query,onChange:this.handleChange,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(p.jsxs)("ul",{className:"suggestions w-25  flex-column align-items-center",style:this.state.showSuggestions?{display:"flex"}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(p.jsx)("li",{onClick:function(){return e.handleClick(t)},children:t},t)})),Object(p.jsx)("li",{onClick:function(){return e.handleClick("all")},children:Object(p.jsx)("b",{children:"See all cities"})},"all")]})]})}}]),n}(r.a.Component),g=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this)).handleChange=function(e){e.target.value>0?(a.props.updateEvents(null,e.target.value),console.log("Change to: "+e.target.value)):a.props.updateEvents(null,1e5)},a.handleChange=a.handleChange.bind(Object(u.a)(a)),a}return Object(c.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("input",{type:"text",className:"numOfEvents",onChange:this.handleChange})})}}]),n}(r.a.Component),b=n(23),j=n(4),w=n.n(j),y=n(9),O=JSON.parse(JSON.stringify([{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200521T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjFUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-21T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}])),x=n(13),k=n.n(x),S=n(10),C=n.n(S),T=function(){var e=Object(y.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(y.a)(w.a.mark((function e(){var t,n,a,r,o,s;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("accessToken"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,T(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,k.a.get("https://pu8n39of9l.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",r&&J(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(e){var t=e.map((function(e){return e.location}));return Object(b.a)(new Set(t))},N=function(){var e=Object(y.a)(w.a.mark((function e(){var t,n,a,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return C.a.done(),e.abrupt("return",O);case 4:return e.next=6,Z();case 6:if(!(t=e.sent)){e.next=16;break}return D(),n="https://pu8n39of9l.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/".concat(t),e.next=12,k.a.get(n);case 12:return(a=e.sent).data&&(r=E(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(r))),C.a.done(),e.abrupt("return",a.data.events);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},J=function(){var e=Object(y.a)(w.a.mark((function e(t){var n,a,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://pu8n39of9l.execute-api.eu-central-1.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=(n(49),n(50),n(51),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this)).updateEvents=function(e,t){e&&N().then((function(t){var n="all"===e?t:t.filter((function(t){return t.location===e}));a.setState({events:n})})),t&&N().then((function(e){a.setState({numOfEvents:t,events:e.slice(0,t)})}))},a.state={events:[],locations:[],numOfEvents:null},a.updateEvents=a.updateEvents.bind(Object(u.a)(a)),a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,N().then((function(t){e.mounted&&e.setState({events:t,locations:E(t)})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"App m-4",children:[Object(p.jsx)(v,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(p.jsx)(g,{updateEvents:this.updateEvents}),Object(p.jsx)(m,{events:this.state.events})]})}}]),n}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),o(e),s(e)}))};s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(M,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),q()}},[[52,1,2]]]);
//# sourceMappingURL=main.ac4df400.chunk.js.map