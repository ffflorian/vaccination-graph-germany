parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Guk4":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.GoogleCharts=exports.default=void 0;const t=Symbol("loadScript"),e=Symbol("instance");let s;class a{get[e](){return s}set[e](t){s=t}constructor(){if(this[e])return this[e];this[e]=this}reset(){s=null}[t](){return this.scriptPromise||(this.scriptPromise=new Promise(t=>{const e=document.getElementsByTagName("body")[0],s=document.createElement("script");s.type="text/javascript",s.onload=function(){r.api=window.google,r.api.charts.load("current",{packages:["corechart","table"]}),r.api.charts.setOnLoadCallback(()=>{t()})},s.src="https://www.gstatic.com/charts/loader.js",e.appendChild(s)})),this.scriptPromise}load(e,s){return this[t]().then(()=>{if(s){let t={};t=s instanceof Object?s:Array.isArray(s)?{packages:s}:{packages:[s]},this.api.charts.load("current",t),this.api.charts.setOnLoadCallback(e)}else{if("function"!=typeof e)throw"callback must be a function";e()}})}}const r=new a;exports.GoogleCharts=r;var o=a;exports.default=o;
},{}],"boCh":[function(require,module,exports) {
module.exports={germany:{historical:[{date:"2021-01-10",value:613347},{date:"2021-01-09",value:585126},{date:"2021-01-08",value:536466},{date:"2021-01-07",value:483768},{date:"2021-01-06",value:428832},{date:"2021-01-05",value:374717},{date:"2021-01-04",value:325524},{date:"2021-01-03",value:278025},{date:"2021-01-02",value:253789},{date:"2021-01-01",value:209331},{date:"2020-12-31",value:179031},{date:"2020-12-30",value:141498},{date:"2020-12-29",value:84935},{date:"2020-12-28",value:42681},{date:"2020-12-27",value:23621}]},bundeslaender:[{id:"Baden-Württemberg",historical:[{date:"2021-01-10",value:65488},{date:"2021-01-09",value:61119},{date:"2021-01-08",value:55320},{date:"2021-01-07",value:49103},{date:"2021-01-06",value:42899},{date:"2021-01-05",value:37840},{date:"2021-01-04",value:32182},{date:"2021-01-03",value:27454},{date:"2021-01-02",value:24063},{date:"2021-01-01",value:20045},{date:"2020-12-31",value:17086},{date:"2020-12-30",value:12649},{date:"2020-12-29",value:8242},{date:"2020-12-28",value:4721},{date:"2020-12-27",value:2084}]},{id:"Bayern",historical:[{date:"2021-01-10",value:120136},{date:"2021-01-09",value:108027},{date:"2021-01-08",value:93966},{date:"2021-01-07",value:88916},{date:"2021-01-06",value:84349},{date:"2021-01-05",value:82749},{date:"2021-01-04",value:77876},{date:"2021-01-03",value:66258},{date:"2021-01-02",value:57833},{date:"2021-01-01",value:39005},{date:"2020-12-31",value:37955},{date:"2020-12-30",value:28206},{date:"2020-12-29",value:12935},{date:"2020-12-28",value:5219},{date:"2020-12-27",value:3389}]},{id:"Berlin",historical:[{date:"2021-01-10",value:32014},{date:"2021-01-09",value:30988},{date:"2021-01-08",value:28871},{date:"2021-01-07",value:26406},{date:"2021-01-06",value:24159},{date:"2021-01-05",value:21955},{date:"2021-01-04",value:19389},{date:"2021-01-03",value:17758},{date:"2021-01-02",value:14616},{date:"2021-01-01",value:13137},{date:"2020-12-31",value:11114},{date:"2020-12-30",value:9084},{date:"2020-12-29",value:6296},{date:"2020-12-28",value:3839},{date:"2020-12-27",value:1626}]},{id:"Brandenburg",historical:[{date:"2021-01-10",value:14063},{date:"2021-01-09",value:14063},{date:"2021-01-08",value:13895},{date:"2021-01-07",value:11481},{date:"2021-01-06",value:8182},{date:"2021-01-05",value:5404},{date:"2021-01-04",value:3334},{date:"2021-01-03",value:3309},{date:"2021-01-02",value:3219},{date:"2021-01-01",value:3219},{date:"2020-12-31",value:3219},{date:"2020-12-30",value:3036},{date:"2020-12-29",value:1553},{date:"2020-12-28",value:107},{date:"2020-12-27",value:100}]},{id:"Bremen",historical:[{date:"2021-01-10",value:6303},{date:"2021-01-09",value:5812},{date:"2021-01-08",value:5291},{date:"2021-01-07",value:4505},{date:"2021-01-06",value:3825},{date:"2021-01-05",value:3195},{date:"2021-01-04",value:2653},{date:"2021-01-03",value:1903},{date:"2021-01-02",value:1837},{date:"2021-01-01",value:1741},{date:"2020-12-31",value:1741},{date:"2020-12-30",value:1691},{date:"2020-12-29",value:1059},{date:"2020-12-28",value:592},{date:"2020-12-27",value:420}]},{id:"Hamburg",historical:[{date:"2021-01-10",value:12695},{date:"2021-01-09",value:11359},{date:"2021-01-08",value:9888},{date:"2021-01-07",value:8471},{date:"2021-01-06",value:7079},{date:"2021-01-05",value:5901},{date:"2021-01-04",value:4756},{date:"2021-01-03",value:4140},{date:"2021-01-02",value:3704},{date:"2021-01-01",value:3042},{date:"2020-12-31",value:2759},{date:"2020-12-30",value:2040},{date:"2020-12-29",value:1499},{date:"2020-12-28",value:1071},{date:"2020-12-27",value:445}]},{id:"Hessen",historical:[{date:"2021-01-10",value:54361},{date:"2021-01-09",value:52241},{date:"2021-01-08",value:48653},{date:"2021-01-07",value:46006},{date:"2021-01-06",value:44122},{date:"2021-01-05",value:41298},{date:"2021-01-04",value:37795},{date:"2021-01-03",value:33405},{date:"2021-01-02",value:30085},{date:"2021-01-01",value:24791},{date:"2020-12-31",value:21373},{date:"2020-12-30",value:15674},{date:"2020-12-29",value:9448},{date:"2020-12-28",value:4354},{date:"2020-12-27",value:3112}]},{id:"Mecklenburg-Vorpommern",historical:[{date:"2021-01-10",value:25141},{date:"2021-01-09",value:25141},{date:"2021-01-08",value:25141},{date:"2021-01-07",value:24060},{date:"2021-01-06",value:21713},{date:"2021-01-05",value:18014},{date:"2021-01-04",value:13832},{date:"2021-01-03",value:11494},{date:"2021-01-02",value:11494},{date:"2021-01-01",value:11494},{date:"2020-12-31",value:11494},{date:"2020-12-30",value:11101},{date:"2020-12-29",value:7338},{date:"2020-12-28",value:4170},{date:"2020-12-27",value:590}]},{id:"Niedersachsen",historical:[{date:"2021-01-10",value:45342},{date:"2021-01-09",value:44829},{date:"2021-01-08",value:41646},{date:"2021-01-07",value:32170},{date:"2021-01-06",value:22608},{date:"2021-01-05",value:15164},{date:"2021-01-04",value:8665},{date:"2021-01-03",value:5394},{date:"2021-01-02",value:4962},{date:"2021-01-01",value:3945},{date:"2020-12-31",value:3566},{date:"2020-12-30",value:2705},{date:"2020-12-29",value:1527},{date:"2020-12-28",value:835},{date:"2020-12-27",value:334}]},{id:"Nordrhein-Westfalen",historical:[{date:"2021-01-10",value:114762},{date:"2021-01-09",value:111086},{date:"2021-01-08",value:98950},{date:"2021-01-07",value:90802},{date:"2021-01-06",value:79578},{date:"2021-01-05",value:69225},{date:"2021-01-04",value:62692},{date:"2021-01-03",value:53841},{date:"2021-01-02",value:48691},{date:"2021-01-01",value:33375},{date:"2020-12-31",value:24924},{date:"2020-12-30",value:19930},{date:"2020-12-29",value:11385},{date:"2020-12-28",value:7136},{date:"2020-12-27",value:5405}]},{id:"Rheinland-Pfalz",historical:[{date:"2021-01-10",value:29994},{date:"2021-01-09",value:28128},{date:"2021-01-08",value:25482},{date:"2021-01-07",value:20792},{date:"2021-01-06",value:15984},{date:"2021-01-05",value:12336},{date:"2021-01-04",value:9891},{date:"2021-01-03",value:7248},{date:"2021-01-02",value:7248},{date:"2021-01-01",value:6898},{date:"2020-12-31",value:5112},{date:"2020-12-30",value:4247},{date:"2020-12-29",value:2284},{date:"2020-12-28",value:1462},{date:"2020-12-27",value:1252}]},{id:"Saarland",historical:[{date:"2021-01-10",value:9157},{date:"2021-01-09",value:9157},{date:"2021-01-08",value:8232},{date:"2021-01-07",value:7358},{date:"2021-01-06",value:6511},{date:"2021-01-05",value:5633},{date:"2021-01-04",value:4836},{date:"2021-01-03",value:4149},{date:"2021-01-02",value:4149},{date:"2021-01-01",value:3316},{date:"2020-12-31",value:2716},{date:"2020-12-30",value:2119},{date:"2020-12-29",value:1518},{date:"2020-12-28",value:862},{date:"2020-12-27",value:215}]},{id:"Sachsen",historical:[{date:"2021-01-10",value:19756},{date:"2021-01-09",value:19041},{date:"2021-01-08",value:17991},{date:"2021-01-07",value:15593},{date:"2021-01-06",value:13006},{date:"2021-01-05",value:10767},{date:"2021-01-04",value:7740},{date:"2021-01-03",value:4866},{date:"2021-01-02",value:4343},{date:"2021-01-01",value:4e3},{date:"2020-12-31",value:3290},{date:"2020-12-30",value:2653},{date:"2020-12-29",value:1487},{date:"2020-12-28",value:857},{date:"2020-12-27",value:182}]},{id:"Sachsen-Anhalt",historical:[{date:"2021-01-10",value:21914},{date:"2021-01-09",value:21914},{date:"2021-01-08",value:20799},{date:"2021-01-07",value:19399},{date:"2021-01-06",value:17624},{date:"2021-01-05",value:17123},{date:"2021-01-04",value:15628},{date:"2021-01-03",value:13366},{date:"2021-01-02",value:12822},{date:"2021-01-01",value:11771},{date:"2020-12-31",value:11146},{date:"2020-12-30",value:10100},{date:"2020-12-29",value:7287},{date:"2020-12-28",value:3985},{date:"2020-12-27",value:1504}]},{id:"Schleswig-Holstein",historical:[{date:"2021-01-10",value:31431},{date:"2021-01-09",value:31431},{date:"2021-01-08",value:28241},{date:"2021-01-07",value:23903},{date:"2021-01-06",value:20078},{date:"2021-01-05",value:17016},{date:"2021-01-04",value:12978},{date:"2021-01-03",value:9557},{date:"2021-01-02",value:8933},{date:"2021-01-01",value:7964},{date:"2020-12-31",value:7270},{date:"2020-12-30",value:5581},{date:"2020-12-29",value:3579},{date:"2020-12-28",value:2495},{date:"2020-12-27",value:809}]},{id:"Thüringen",historical:[{date:"2021-01-10",value:10790},{date:"2021-01-09",value:10790},{date:"2021-01-08",value:10512},{date:"2021-01-07",value:7994},{date:"2021-01-06",value:5343},{date:"2021-01-05",value:3711},{date:"2021-01-04",value:2715},{date:"2021-01-03",value:810},{date:"2021-01-02",value:810},{date:"2021-01-01",value:810},{date:"2020-12-31",value:810},{date:"2020-12-30",value:810},{date:"2020-12-29",value:672},{date:"2020-12-28",value:257},{date:"2020-12-27",value:99}]}],timestamp:"11.1.2021, 11:00 Uhr",messages:[],lastUpdate:"2021-01-11T12:58:19+01:00"};
},{}],"Focm":[function(require,module,exports) {
"use strict";var t=require("google-charts"),e=require("./data.json");function r(t){return i(t)||o(t)||n(t)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(t,e){if(t){if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(t,e):void 0}}function o(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function i(t){if(Array.isArray(t))return c(t)}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,a=new Array(e);r<e;r++)a[r]=t[r];return a}var l=e.germany.historical.reverse().map(function(t){return[new Date(t.date),t.value]}),u=new Date(e.lastUpdate);function d(){var e=new t.GoogleCharts.api.visualization.arrayToDataTable([["date","People vaccinated"]].concat(r(l)));new t.GoogleCharts.api.visualization.AreaChart(document.getElementById("chart")).draw(e,{hAxis:{backgroundColor:"#55aa00",format:"dd.MM.y"},width:900,height:500})}t.GoogleCharts.load(d,{packages:["corechart"]});var s=document.getElementById("updated");s.innerHTML="Updated on ".concat(u.toLocaleDateString(),", ").concat(u.toLocaleTimeString());
},{"google-charts":"Guk4","./data.json":"boCh"}]},{},["Focm"], null)
//# sourceMappingURL=src.7a72b94c.js.map