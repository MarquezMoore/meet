(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(22),s=n.n(r),i=(n(28),n(5)),c=n(6),u=n(3),l=n(8),d=n(7),h=(n(29),n(0)),p=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this)).state={detailStatus:null},a.toggleDetails=a.toggleDetails.bind(Object(u.a)(a)),a}return Object(c.a)(n,[{key:"toggleDetails",value:function(){this.state.detailStatus?this.setState({detailStatus:null}):this.setState({detailStatus:"hidden"})}},{key:"render",value:function(){this.props.event;return Object(h.jsxs)("div",{className:"event",children:[Object(h.jsx)("div",{className:"event-overview"}),Object(h.jsx)("button",{onClick:this.toggleDetails,className:"show-details"}),"Show Details",Object(h.jsx)("button",{}),Object(h.jsx)("div",{hidden:this.state.detailStatus,className:"details"})]})}}]),n}(o.a.Component),f=function(e){var t=e.events;return Object(h.jsx)("ul",{className:"EventList",children:t.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(p,{event:e})},e.id)}))})},m=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this)).state={query:"",suggestions:[],showSuggestions:void 0},a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.handleClick=a.handleClick.bind(Object(u.a)(a)),a}return Object(c.a)(n,[{key:"handleClick",value:function(e){this.setState({query:e,showSuggestions:!1}),this.props.updateEvents(e)}},{key:"handleChange",value:function(e){var t=e.target.value,n=this.props.locations.filter((function(e){return e.toUpperCase().indexOf(t.toUpperCase())>-1}));this.setState({query:e.target.value,suggestions:n})}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"CitySearch",children:[Object(h.jsx)("input",{className:"city-search",type:"text",value:this.state.query,onChange:this.handleChange,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(h.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(h.jsx)("li",{onClick:function(){return e.handleClick(t)},children:t},t)})),Object(h.jsx)("li",{onClick:function(){return e.handleClick("all")},children:Object(h.jsx)("b",{children:"See all cities"})},"all")]})]})}}]),n}(o.a.Component),v=n(53),g=function(){return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("input",{type:"text",className:"numOfEvents"}),Object(h.jsx)(v.a,{})]})},b=n(23),w=n(4),j=n.n(w),k=n(9),y=JSON.parse(JSON.stringify([{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200521T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjFUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-21T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}])),O=n(13),x=n.n(O),S=n(10),T=n.n(S),C=function(){var e=Object(k.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(k.a)(j.a.mark((function e(){var t,n,a,o,r,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("accessToken"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,C(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(o=e.sent){e.next=20;break}return e.next=17,x.a.get("https://pu8n39of9l.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return r=e.sent,s=r.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",o&&J(o));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(e){var t=e.map((function(e){return e.location}));return Object(b.a)(new Set(t))},E=function(){var e=Object(k.a)(j.a.mark((function e(){var t,n,a,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(T.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return T.a.done(),e.abrupt("return",y);case 4:return e.next=6,Z();case 6:if(!(t=e.sent)){e.next=16;break}return D(),n="https://pu8n39of9l.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/".concat(t),e.next=12,x.a.get(n);case 12:return(a=e.sent).data&&(o=N(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(o))),T.a.done(),e.abrupt("return",a.data.events);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},J=function(){var e=Object(k.a)(j.a.mark((function e(t){var n,a,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://pu8n39of9l.execute-api.eu-central-1.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(o=a.access_token)&&localStorage.setItem("access_token",o),e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=(n(50),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this)).updateEvents=function(e){E().then((function(t){var n="all"===e?t:t.filter((function(t){return t.location===e}));a.setState({events:n})}))},a.state={events:[],locations:[]},a.updateEvents=a.updateEvents.bind(Object(u.a)(a)),a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,E().then((function(t){e.mounted&&e.setState({events:t,locations:N(t)})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(m,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(h.jsx)(g,{}),Object(h.jsx)(f,{events:this.state.events})]})}}]),n}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),o(e),r(e),s(e)}))};s.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(M,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),q()}},[[51,1,2]]]);
//# sourceMappingURL=main.eb0bf679.chunk.js.map