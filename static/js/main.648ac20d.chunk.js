(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{4:function(e,t,a){e.exports=a(9)},9:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),i=a.n(c),s=a(1);var l=function(e){var t=e.onFormSubmit,a=Object(n.useState)("microsoft/vscode"),c=Object(s.a)(a,2),i=c[0],l=c[1];return r.a.createElement("div",{className:"search-bar ui segment"},r.a.createElement("form",{className:"ui form",onSubmit:function(e){e.preventDefault(),t(i)}},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Retrieve GitHub Issues"),r.a.createElement("input",{type:"text",value:i,onChange:function(e){return l(e.target.value)},placeholder:"facebook/react"}))))},u=function(e){var t=e.issue;return r.a.createElement("div",{className:"item"},r.a.createElement("i",{className:"large github middle aligned icon"}),r.a.createElement("div",{className:"content"},r.a.createElement("a",{className:"header",href:t.html_url,target:"_blank",rel:"noopener noreferrer"},t.title),r.a.createElement("div",{className:"description"},t.description)))},o=function(e){var t=e.issues.map(function(e){return r.a.createElement(u,{key:e.id,issue:e})});return r.a.createElement("div",{className:"ui relaxed divided list"},t)};var m=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)([]),u=Object(s.a)(i,2),m=(u[0],u[1]);return Object(n.useEffect)(function(){document.title="GitHub issues"},[]),r.a.createElement("div",{className:"ui container"},r.a.createElement(l,{onFormSubmit:function(e){var t="https://api.github.com/repos/".concat(e,"/issues?direction=asc"),a="https://statsapi.web.nhl.com/api/v1/game/2021021133/feed/live";console.log("issuesURL",t),fetch(t).then(function(e){return e.json()}).then(function(e){return c(e)}),fetch(a).then(function(e){return e.json()}).then(function(e){return m(e)}),console.log("nhlGame",a)}}),r.a.createElement("div",{className:"ui grid"},r.a.createElement("div",{className:"ui row"},r.a.createElement("div",{className:"eleven wide column"},r.a.createElement(o,{issues:a})))))};i.a.render(r.a.createElement(m,null),document.getElementById("root"))}},[[4,1,2]]]);
//# sourceMappingURL=main.648ac20d.chunk.js.map