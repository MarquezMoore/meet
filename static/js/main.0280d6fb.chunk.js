(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{30:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},53:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(23),s=n.n(r),c=(n(30),n(7)),i=n.n(c),l=n(9),u=n(3),d=n(8),h=n(6),f=n(5),p=n(4),m=n(57),g=n(0),v=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this)).state={detailStatus:"hidden"},a.toggleDetails=a.toggleDetails.bind(Object(h.a)(a)),a}return Object(d.a)(n,[{key:"toggleDetails",value:function(){this.state.detailStatus?this.setState({detailStatus:null}):this.setState({detailStatus:"hidden"})}},{key:"render",value:function(){var e=this.props.event;return Object(g.jsxs)("div",{className:"event pt-3 pb-5 px-4 my-3 border rounded-3 border-secondary",children:[Object(g.jsxs)("div",{className:"event-overview d-flex justify-content-between align-items-center",children:[Object(g.jsx)("span",{className:"fs-1",children:e.summary}),Object(g.jsx)("span",{className:"fs-5",children:e.location})]}),Object(g.jsx)(m.a,{className:"toggle-details m-2",onClick:this.toggleDetails,children:"hidden"===this.state.detailStatus?"Show Details":"Hide Details"}),Object(g.jsx)("div",{hidden:this.state.detailStatus,className:"details",children:e.description})]})}}]),n}(o.a.Component),b=function(e){var t=e.events;return Object(g.jsx)("ul",{className:"EventList",children:t.map((function(e){return Object(g.jsx)("li",{children:Object(g.jsx)(v,{event:e})},e.id)}))})},j=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.getClassNames=function(){return a.classNames},a.color=null,a.classNames=null,a}return Object(d.a)(n,[{key:"render",value:function(){return Object(g.jsx)("div",{className:this.getClassNames(),children:Object(g.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(o.a.Component),w=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="blue",a.classNames="Alert info",a}return n}(j),x=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="red",a.classNames="Alert error",a}return n}(j),O=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="yellow",a}return n}(j),k=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this)).handleBlur=function(e){setTimeout((function(){a.setState({showSuggestions:!1})}),300)},a.handleClick=function(e){a.setState({query:e,showSuggestions:!1}),a.props.updateEvents(e),a.setState({showSuggestions:!1})},a.handleChange=function(e){var t=e.target.value,n=a.props.locations.filter((function(e){return e.toUpperCase().indexOf(t.toUpperCase())>-1}));n.length?a.setState({query:e.target.value,suggestions:n,infoText:""}):a.setState({query:e.target.value,suggestions:n,infoText:"We can not find the city you are looking for. Please try another city"})},a.state={query:"",suggestions:[],showSuggestions:void 0,infoText:""},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a.handleClick=a.handleClick.bind(Object(h.a)(a)),a.handleBlur=a.handleBlur.bind(Object(h.a)(a)),a}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{className:"CitySearch d-flex flex-column align-items-center",children:[Object(g.jsx)(w,{className:"info",text:this.state.infoText}),Object(g.jsx)("input",{placeholder:"Filter by city",className:"city-search w-25",type:"text",value:this.state.query,onChange:this.handleChange,onFocus:function(){e.setState({showSuggestions:!0})},onBlur:this.handleBlur}),Object(g.jsxs)("ul",{className:"suggestions w-25  flex-column align-items-center",style:this.state.showSuggestions?{display:"flex"}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(g.jsx)("li",{onClick:function(){return e.handleClick(t)},children:t},t)})),Object(g.jsx)("li",{onClick:function(){return e.handleClick("all")},children:Object(g.jsx)("b",{children:"See all cities"})},"all")]})]})}}]),n}(o.a.Component),y=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this)).handleChange=function(e){var t=e.target.value;new RegExp(/\b(0?[1-9]|[1-2][0-9]|3[0-2])\b/).test(t)?(a.setState({infoText:""}),a.props.updateEvents(null,t)):a.setState({infoText:"Enter number between 1 - 32"})},a.state={infoText:""},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a}return Object(d.a)(n,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)("input",{type:"text",className:"numOfEvents",placeholder:"enter num of events",onChange:this.handleChange}),Object(g.jsx)(x,{text:this.state.infoText})]})}}]),n}(o.a.Component),S=n(25),C=JSON.parse(JSON.stringify([{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200521T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjFUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-21T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}])),N=n(13),T=n.n(N),W=n(10),E=n.n(W),Z=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,o,r,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("accessToken"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,Z(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(o=e.sent){e.next=20;break}return e.next=17,T.a.get("https://pu8n39of9l.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return r=e.sent,s=r.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",o&&q(o));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(e){var t=e.map((function(e){return e.location}));return Object(S.a)(new Set(t))},A=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,o,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return E.a.done(),e.abrupt("return",C);case 4:if(navigator.onLine){e.next=9;break}return console.log("Running Offline"),t=localStorage.getItem("lastEvents"),E.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 9:return e.next=11,M();case 11:if(!(n=e.sent)){e.next=21;break}return D(),a="https://pu8n39of9l.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/".concat(n),e.next=17,T.a.get(a);case 17:return(o=e.sent).data&&(r=B(o.data.events),localStorage.setItem("lastEvents",JSON.stringify(o.data)),localStorage.setItem("locations",JSON.stringify(r))),E.a.done(),e.abrupt("return",o.data.events);case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},q=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://pu8n39of9l.execute-api.eu-central-1.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(o=a.access_token)&&localStorage.setItem("access_token",o),e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();n(50),n(51),n(52),n(53);var F=function(e){return e.showWelcomeScreen?Object(g.jsxs)("div",{className:"WelcomeScreen d-flex flex-column justify-content-center position-fixed top-0 w-100 h-100 bg-dark text-white p-5",children:[Object(g.jsxs)("header",{className:"welcome-header text-center mb-5",children:[Object(g.jsx)("h1",{className:"welcome-header_heading",children:"Welcome to the Meet app"}),Object(g.jsx)("h4",{className:"welcome-header_sub-heading",children:"Log in to see upcoming events around the world for full-stack developers"})]}),Object(g.jsx)("main",{className:"button_cont mb-5",align:"center",children:Object(g.jsx)("div",{className:"google-btn_container",children:Object(g.jsxs)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",className:"google-btn bg-light border-0 rounded py-1 px-2",children:[Object(g.jsx)("span",{className:"google-icon pe-2",children:Object(g.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"42px",height:"42px",children:[Object(g.jsx)("path",{fill:"#FFC107",d:"M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"}),Object(g.jsx)("path",{fill:"#FF3D00",d:"M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"}),Object(g.jsx)("path",{fill:"#4CAF50",d:"M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"}),Object(g.jsx)("path",{fill:"#1976D2",d:"M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"})]})}),Object(g.jsx)("b",{className:"google-btn_text",children:"Sign in with google"})]})})}),Object(g.jsx)("footer",{className:"align-self-center",children:Object(g.jsx)("a",{className:"fs-5 text-white-50 text-decoration-none",href:"https://MarquezMoore.github.io/meet/privacy.html",rel:"nofollow noopener",children:"Privacy policy"})})]}):null},J=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this)).updateEvents=function(e,t){var n=A();if(e){var o="all"===e?n:n.filter((function(t){return t.location===e}));a.setState({events:o})}t&&a.setState({numOfEvents:t,events:n.slice(0,t)})},a.state={events:[],locations:[],numOfEvents:32,networkStatus:navigator.onLine?"Online":"Offline",showWelcomeScreen:void 0},a.updateEvents=a.updateEvents.bind(Object(h.a)(a)),a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,o,r=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.mounted=!0,t=localStorage.getItem("access_token"),e.next=4,Z(t);case 4:if(!e.sent.error){e.next=8;break}e.t0=!1,e.next=9;break;case 8:e.t0=!0;case 9:n=e.t0,a=new URLSearchParams(window.location.search),o=a.get("code"),this.setState({showWelcomeScreen:!(o||n)}),(o||n)&&this.mounted&&A().then((function(e){r.mounted&&r.setState({events:e,locations:B(e)})}));case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return void 0===this.state.showWelcomeScreen?Object(g.jsx)("div",{className:"App"}):Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(O,{className:"networkStatus",text:"Offline"===this.state.networkStatus?"Offline":""}),Object(g.jsx)(k,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(g.jsx)(y,{updateEvents:this.updateEvents}),Object(g.jsx)(b,{events:this.state.events}),Object(g.jsx)(F,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){M()}})]})}}]),n}(o.a.Component),L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,58)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),o(e),r(e),s(e)}))};n(24).config("556cd3c0d3a04efa991db86631fd7c46").install(),s.a.render(Object(g.jsx)(o.a.StrictMode,{children:Object(g.jsx)(J,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");L?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):R(t,e)}))}}(),I()}},[[55,1,2]]]);
//# sourceMappingURL=main.0280d6fb.chunk.js.map