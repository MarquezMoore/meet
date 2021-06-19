(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{197:function(e,t,n){},199:function(e,t,n){},201:function(e,t,n){},202:function(e,t,n){},203:function(e,t,n){},204:function(e,t,n){},205:function(e,t,n){},206:function(e,t,n){},341:function(e,t,n){},342:function(e,t,n){},361:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(67),i=n.n(r),s=(n(197),n(26)),c=n.n(s),l=n(51),u=n(23),d=n(32),h=n(30),f=n(24),m=n(25),p=n(367),v=n(368),g=n(369),b=(n(199),n(2)),j=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this)).state={detailStatus:"hidden"},a.toggleDetails=a.toggleDetails.bind(Object(h.a)(a)),a}return Object(d.a)(n,[{key:"toggleDetails",value:function(){this.state.detailStatus?this.setState({detailStatus:null}):this.setState({detailStatus:"hidden"})}},{key:"render",value:function(){var e=this.props.event;return Object(b.jsxs)("div",{className:"event pt-3 pb-5 px-4 mb-3 rounded-3 border-secondary",children:[Object(b.jsxs)("div",{className:"event-overview d-flex flex-column justify-content-between",children:[Object(b.jsxs)("span",{className:"event-location position-relative pb-2 ps-3",children:[Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"#e2d36b",className:"location-icon position-absolute start-0",viewBox:"0 0 16 16",children:Object(b.jsx)("path",{d:"M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"})}),e.location]}),Object(b.jsx)("span",{className:"event-name fs-5 pb-2 fw-bold",children:e.summary})]}),Object(b.jsx)("button",{className:"toggle-details m-2 px-2 rounded ",onClick:this.toggleDetails,children:"hidden"===this.state.detailStatus?"Show Details":"Hide Details"}),Object(b.jsx)("div",{hidden:this.state.detailStatus,className:"details",children:e.description})]})}}]),n}(o.a.Component),w=(n(201),function(e){var t=e.events;return Object(b.jsx)("ul",{className:"EventList",children:t.map((function(e,t){return Object(b.jsx)("li",{children:Object(b.jsx)(j,{event:e})},t)}))})}),x=(n(202),function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.getClassNames=function(){return a.classNames},a.color=null,a.classNames=null,a}return Object(d.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:this.getClassNames(),children:Object(b.jsx)("span",{style:this.getStyle(),children:this.props.text})})}}]),n}(o.a.Component)),O=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="#31708f",a.classNames="Alert info",a}return n}(x),y=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="#D8000C",a.classNames="Alert error",a}return n}(x),k=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="#9F6000",a.classNames="Alert warning bg-dark text-center bg-gradient",a}return n}(x),S=(n(203),function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this)).handleBlur=function(e){setTimeout((function(){a.setState({showSuggestions:!1})}),300)},a.handleClick=function(e){a.setState({query:e,showSuggestions:!1}),a.props.updateEvents(e),a.setState({showSuggestions:!1})},a.handleChange=function(e){var t=e.target.value,n=a.props.locations.filter((function(e){return e.toUpperCase().indexOf(t.toUpperCase())>-1}));n.length?a.setState({query:e.target.value,suggestions:n,infoText:""}):a.setState({query:e.target.value,suggestions:n,infoText:"We can not find the city you are looking for. Please try another city"})},a.state={query:"",suggestions:[],showSuggestions:void 0,infoText:""},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a.handleClick=a.handleClick.bind(Object(h.a)(a)),a.handleBlur=a.handleBlur.bind(Object(h.a)(a)),a}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"CitySearch",children:[Object(b.jsx)(O,{className:"info",text:this.state.infoText}),Object(b.jsx)("input",{placeholder:"Filter by city",className:"city-search py-3",type:"text",value:this.state.query,onChange:this.handleChange,onFocus:function(){e.setState({showSuggestions:!0})},onBlur:this.handleBlur}),Object(b.jsxs)("ul",{className:"suggestions w-100 flex-column align-items-center",style:this.state.showSuggestions?{display:"flex"}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(b.jsx)("li",{onClick:function(){return e.handleClick(t)},children:t},t)})),Object(b.jsx)("li",{onClick:function(){return e.handleClick("all")},children:Object(b.jsx)("b",{children:"See all cities"})},"all")]})]})}}]),n}(o.a.Component)),T=(n(204),function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this)).handleChange=function(e){var t=e.target.value;new RegExp(/\b(0?[1-9]|[1-2][0-9]|3[0-2])\b/).test(t)?(a.setState({infoText:""}),a.props.updateEvents(null,t)):a.setState({infoText:"Enter number between 1 - 32"})},a.state={infoText:""},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a}return Object(d.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"numOfEvents-header py-4 d-flex flex-row-reverse align-items-center",children:[Object(b.jsx)("input",{type:"text",className:"numOfEvents rounded text-align-center",onChange:this.handleChange,placeholder:"32"}),Object(b.jsx)("span",{className:"pe-2",children:"Events displayed: "}),Object(b.jsx)(y,{text:this.state.infoText})]})}}]),n}(o.a.Component));n(205);var Z=function(e){return e.showWelcomeScreen?Object(b.jsxs)("div",{className:"WelcomeScreen d-flex flex-column justify-content-center position-fixed top-0 w-100 h-100 bg-dark text-white p-5",children:[Object(b.jsxs)("header",{className:"welcome-header text-center mb-5",children:[Object(b.jsx)("h1",{className:"welcome-header_heading",children:"Welcome to the Meet app"}),Object(b.jsx)("h4",{className:"welcome-header_sub-heading",children:"Log in to see upcoming events around the world for full-stack developers"})]}),Object(b.jsx)("main",{className:"button_cont mb-5",align:"center",children:Object(b.jsx)("div",{className:"google-btn_container",children:Object(b.jsxs)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",className:"google-btn bg-light border-0 rounded py-1 px-2",children:[Object(b.jsx)("span",{className:"google-icon pe-2",children:Object(b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"42px",height:"42px",children:[Object(b.jsx)("path",{fill:"#FFC107",d:"M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"}),Object(b.jsx)("path",{fill:"#FF3D00",d:"M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"}),Object(b.jsx)("path",{fill:"#4CAF50",d:"M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"}),Object(b.jsx)("path",{fill:"#1976D2",d:"M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"})]})}),Object(b.jsx)("b",{className:"google-btn_text",children:"Sign in with google"})]})})}),Object(b.jsx)("footer",{className:"align-self-center",children:Object(b.jsx)("a",{className:"fs-5 text-white-50 text-decoration-none",href:"https://MarquezMoore.github.io/meet/privacy.html",rel:"nofollow noopener",children:"Privacy policy"})})]}):null},C=(n(206),n.p+"static/media/meet.db8e978b.svg"),N=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"navbar d-flex justify-content-center",children:Object(b.jsx)("img",{width:100,src:C,alt:"App-logo"})})}}]),n}(o.a.Component),A=n(18),E=n(363),M=n(371),W=n(187),B=n(22),D=n(181),J=n(76),R=function(e){var t=e.events,n=Object(a.useState)([]),o=Object(A.a)(n,2),r=o[0],i=o[1];Object(a.useEffect)((function(){i((function(){return c()}))}),[t]);var s=["React","JavaScript","Node","jQuery","AngularJS"],c=function(){var e=s.map((function(e){return{name:e,value:t.filter((function(t){return t.summary.split(" ").includes(e)})).length}}));return(e=e.filter((function(e){return e.value>0}))).sort((function(e,t){return t.value-e.value})),e},l=["#E2D36B","#96D7C6","#5AA7A7","#99A348","#BAC94A","#F7EC75"];return Object(b.jsxs)("div",{className:"h-100 d-flex flex-column align-items-center pb-sm-5",children:[Object(b.jsx)("div",{className:"w-100 d-flex pt-5 ps-4",children:Object(b.jsx)("span",{className:"fs-4 fw-bold",children:"Event Breakdown"})}),Object(b.jsx)(E.a,{height:400,children:Object(b.jsxs)(M.a,{width:300,height:300,children:[Object(b.jsxs)(W.a,{data:r,cx:"50%",cy:"50%",innerRadius:60,outerRadius:80,fill:"#e2d36b",paddingAngle:10,dataKey:"value",label:function(e){var t=e.percent;return"".concat((100*t).toFixed(0),"%")},children:[Object(b.jsx)(B.a,{value:"Total: ".concat(t.length),offset:0,position:"center",fill:l[0]}),c().map((function(e,t){return Object(b.jsx)(D.a,{fill:l[t],stroke:l[t]},"cell-".concat(t))}))]}),Object(b.jsx)(J.a,{verticalAlign:"bottom"})]})})]})},q=(n(341),n(342),n(343),n(186)),F=JSON.parse(JSON.stringify([{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Myrtle Beach, SC",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200521T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjFUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-21T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200521T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjFUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-21T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200521T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjFUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"Belton, SC",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-21T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}])),L=n(118),H=n.n(L),z=n(79),I=n.n(z),U=function(){var e=Object(l.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,a,o,r,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,U(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(o=e.sent){e.next=20;break}return e.next=17,H.a.get("https://pu8n39of9l.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return r=e.sent,i=r.data.authUrl,e.abrupt("return",window.location.href=i);case 20:return e.abrupt("return",o&&P(o));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(e){var t=e.map((function(e){return e.location}));return Object(q.a)(new Set(t))},V=function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,a,o,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(I.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return I.a.done(),e.abrupt("return",F);case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),I.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 8:return e.next=10,_();case 10:if(!(n=e.sent)){e.next=20;break}return G(),a="https://pu8n39of9l.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/".concat(n),e.next=16,H.a.get(a);case 16:return(o=e.sent).data&&(r=Y(o.data.events),localStorage.setItem("lastEvents",JSON.stringify(o.data)),localStorage.setItem("locations",JSON.stringify(r))),I.a.done(),e.abrupt("return",o.data.events);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},P=function(){var e=Object(l.a)(c.a.mark((function e(t){var n,a,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://pu8n39of9l.execute-api.eu-central-1.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(o=a.access_token)&&localStorage.setItem("access_token",o),e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),X=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this)).updateEvents=function(e,t){V().then((function(n){e&&a.setState({events:"all"===e?n:n.filter((function(t){return t.location===e}))}),t&&a.setState({numOfEvents:t,events:n.slice(0,t)})})).catch((function(e){console.log(e)}))},a.getData=function(){var e=a.state,t=e.locations,n=e.events;return t.map((function(e){var t=n.filter((function(t){return t.location===e})).length;return{city:e.split(", ").shift(),number:t}}))},a.state={events:[],locations:[],numOfEvents:32,networkStatus:navigator.onLine?"Online":"Offline",showWelcomeScreen:void 0,cityFilter:null},a.updateEvents=a.updateEvents.bind(Object(h.a)(a)),a.getData=a.getData.bind(Object(h.a)(a)),a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,a,o,r=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.mounted=!0,t=localStorage.getItem("access_token"),e.next=4,U(t);case 4:if(!e.sent.error){e.next=8;break}e.t0=!1,e.next=9;break;case 8:e.t0=!0;case 9:n=e.t0,a=new URLSearchParams(window.location.search),o=a.get("code"),this.setState({showWelcomeScreen:!(o||n)}),(o||n)&&this.mounted&&V().then((function(e){r.mounted&&r.setState({events:e,locations:Y(e)})}));case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state,t=e.networkStatus,n=e.locations,a=e.events,o=e.showWelcomeScreen;return void 0===this.state.showWelcomeScreen?Object(b.jsx)("div",{className:"App"}):Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(k,{text:"Offline"===t?"App is running offline: data may not be updated":""}),Object(b.jsx)(N,{}),Object(b.jsx)(p.a,{fluid:!0,children:Object(b.jsxs)(v.a,{className:"body",children:[Object(b.jsx)(g.a,{md:5,className:"charts-section ",children:Object(b.jsx)("div",{className:"data-vis-wrapper h-100",children:Object(b.jsx)(R,{events:a})})}),Object(b.jsxs)(g.a,{className:"events-section px-5 h-100",md:7,children:[Object(b.jsx)(S,{locations:n,updateEvents:this.updateEvents}),Object(b.jsx)(T,{updateEvents:this.updateEvents}),Object(b.jsx)("div",{className:"eventList-container h-75 overflow-scroll",children:Object(b.jsx)(w,{events:a})})]})]})}),Object(b.jsx)(Z,{showWelcomeScreen:o,getAccessToken:function(){_()}})]})}}]),n}(o.a.Component),Q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function K(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var $=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,372)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),o(e),r(e),i(e)}))};n(184).config("556cd3c0d3a04efa991db86631fd7c46").install(),i.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(X,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");Q?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):K(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):K(t,e)}))}}(),$()}},[[361,1,2]]]);
//# sourceMappingURL=main.cd1e35e8.chunk.js.map