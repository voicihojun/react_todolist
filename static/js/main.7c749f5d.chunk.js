(this.webpackJsonpreact_todolist=this.webpackJsonpreact_todolist||[]).push([[0],{12:function(t,e,o){},13:function(t,e,o){},15:function(t,e,o){"use strict";o.r(e);var n=o(1),a=o.n(n),i=o(6),r=o.n(i),c=(o(12),o(13),o(2)),s=o(0);function u(){var t=new Date,e=String(t.getHours()).padStart(2,"0"),o=String(t.getMinutes()).padStart(2,"0"),n=String(t.getSeconds()).padStart(2,"0");return"".concat(e,":").concat(o,":").concat(n)}var l=function(){var t=Object(n.useState)(u()),e=Object(c.a)(t,2),o=e[0],a=e[1];return Object(n.useEffect)((function(){setInterval((function(){a(u())}),1e3)})),Object(s.jsx)("div",{"data-testid":"clock",id:"clock",children:o})};var d=function(){var t=Object(n.useState)(localStorage.getItem("username")),e=Object(c.a)(t,2),o=e[0],a=e[1],i=Object(n.useState)(""),r=Object(c.a)(i,2),u=r[0],l=r[1];return Object(s.jsx)("div",{id:"login",children:localStorage.getItem("username")?Object(s.jsxs)("h1",{id:"saluting",children:["Salut, ",o]}):Object(s.jsxs)("form",{children:[Object(s.jsx)("input",{"data-testid":"login-input",id:"login-input",required:!0,maxLength:"15",type:"text",placeholder:"Hello, Who are you?",onChange:function(t){return l(t.target.value)}}),Object(s.jsx)("button",{"data-testid":"login-button",id:"login-button",onClick:function(t){t.preventDefault(),function(t){a(t),l(""),localStorage.setItem("username",t)}(u)},children:"Log in"})]})})},h=o(7);var b=function(t){var e=t.todos,o=t.deleteTodo;return Object(s.jsx)("div",{id:"todo-ul",children:Object(s.jsx)("ul",{children:e.map((function(t){return Object(s.jsxs)("li",{id:t.id,className:"todo-li",children:[t.todo,Object(s.jsx)("button",{className:"todo-button",onClick:function(t){o(t)},children:"x"})]},t.id)}))})})};var j=function(){var t=Object(n.useState)((function(){return JSON.parse(localStorage.getItem("todos"))||[]})),e=Object(c.a)(t,2),o=e[0],a=e[1],i=Object(n.useState)(""),r=Object(c.a)(i,2),u=r[0],l=r[1];return Object(n.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(o))}),[o]),Object(s.jsxs)("div",{children:[Object(s.jsx)("form",{onSubmit:function(t){t.preventDefault();var e={id:String(Date.now()),todo:u};a([].concat(Object(h.a)(o),[e])),function(t){localStorage.setItem("todos",JSON.stringify(t))}(o),l("")},children:Object(s.jsx)("input",{id:"todo-input",type:"text",placeholder:"Write What to do and Press Enter.",required:!0,onChange:function(t){l(t.target.value)}})}),Object(s.jsx)(b,{todos:o,deleteTodo:function(t){console.log(t.target.parentNode.id);var e=t.target.parentNode.id;a(o.filter((function(t){return t.id!==e}))),localStorage.setItem("todos",JSON.stringify(o))}})]})};var f=function(){var t=Object(n.useState)(""),e=Object(c.a)(t,2),o=e[0],a=e[1],i=Object(n.useState)(""),r=Object(c.a)(i,2),u=r[0],l=r[1],d=Object(n.useState)(""),h=Object(c.a)(d,2),b=h[0],j=h[1];return navigator.geolocation.getCurrentPosition((function(t){var e=t.coords.latitude,o=t.coords.longitude;!function(t){fetch(t).then((function(t){return t.json()})).then((function(t){a("".concat(t.name,", ").concat(t.sys.country)),l("".concat(t.weather[0].main)),j("".concat(t.main.temp))}))}("https://api.openweathermap.org/data/2.5/weather?lat=".concat(e,"&lon=").concat(o,"&appid=").concat("f7fe21bbdb94774cf7eff66143dc833d","&units=metric"))}),(function(){alert("Can't find you. No weather for you.")})),Object(s.jsx)("div",{id:"weather",children:o?Object(s.jsxs)("span",{children:[b," \u2103, ",u," in ",o]}):null})},g=[{quote:"The purpose of our lives is to be happy.",author:"Dalai Lama"},{quote:"If you want to live a happy life, tie it to a goal, not to people or things.",author:"Albert Einstein"},{quote:"Life is not a problem to be solved, but a reality to be experienced.",author:"Soren Kierkegaard"},{quote:"Everything negative \u2013 pressure, challenges \u2013 is all an opportunity for me to rise.",author:"Kobe Bryant"},{quote:"Life is never easy. There is work to be done and obligations to be met \u2013 obligations to truth, to justice, and to liberty.",author:"John F. Kennedy"},{quote:"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven\u2019t found it yet, keep looking. Don\u2019t settle. As with all matters of the heart, you\u2019ll know when you find it.",author:"Steve Jobs"},{quote:"My mama always said, life is like a box of chocolates. You never know what you\u2019re gonna get.",author:"Forrest Gump"},{quote:"Keep calm and carry on.",author:"Winston Churchill"},{quote:"Good friends, good books, and a sleepy conscience: this is the ideal life.",author:"Mark Twainv"},{quote:"If you can do what you do best and be happy, you\u2019re further along in life than most people.",author:"Leonardo DiCaprio"}];var p=function(){var t,e=(t=g.length,Math.floor(Math.random()*t)),o=g[e];return Object(s.jsx)("div",{id:"quote",children:Object(s.jsxs)("span",{children:[o.quote," - ",o.author]})})};var O=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)("div",{id:"todo-container",children:[Object(s.jsx)("h1",{id:"title",children:"TODO"}),Object(s.jsx)(l,{}),Object(s.jsx)(d,{}),Object(s.jsx)(j,{}),Object(s.jsx)(f,{}),Object(s.jsx)(p,{})]})})};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(O,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.7c749f5d.chunk.js.map