parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Guk4":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.GoogleCharts=exports.default=void 0;const t=Symbol("loadScript"),e=Symbol("instance");let s;class a{get[e](){return s}set[e](t){s=t}constructor(){if(this[e])return this[e];this[e]=this}reset(){s=null}[t](){return this.scriptPromise||(this.scriptPromise=new Promise(t=>{const e=document.getElementsByTagName("body")[0],s=document.createElement("script");s.type="text/javascript",s.onload=function(){r.api=window.google,r.api.charts.load("current",{packages:["corechart","table"]}),r.api.charts.setOnLoadCallback(()=>{t()})},s.src="https://www.gstatic.com/charts/loader.js",e.appendChild(s)})),this.scriptPromise}load(e,s){return this[t]().then(()=>{if(s){let t={};t=s instanceof Object?s:Array.isArray(s)?{packages:s}:{packages:[s]},this.api.charts.load("current",t),this.api.charts.setOnLoadCallback(e)}else{if("function"!=typeof e)throw"callback must be a function";e()}})}}const r=new a;exports.GoogleCharts=r;var o=a;exports.default=o;
},{}],"boCh":[function(require,module,exports) {
module.exports={germany:{historical:[{date:"2021-01-05",value:367478},{date:"2021-01-04",value:322245},{date:"2021-01-03",value:275632},{date:"2021-01-02",value:251397},{date:"2021-01-01",value:207226},{date:"2020-12-31",value:177021},{date:"2020-12-30",value:139734},{date:"2020-12-29",value:83813},{date:"2020-12-28",value:42049},{date:"2020-12-27",value:23603},{date:"2020-12-26",value:147}]},bundeslaender:[{id:"Baden-Württemberg",historical:[{date:"2021-01-05",value:37840},{date:"2021-01-04",value:32182},{date:"2021-01-03",value:27454},{date:"2021-01-02",value:24063},{date:"2021-01-01",value:20045},{date:"2020-12-31",value:17086},{date:"2020-12-30",value:12649},{date:"2020-12-29",value:8242},{date:"2020-12-28",value:4721},{date:"2020-12-27",value:2084},{date:"2020-12-26",value:0}]},{id:"Bayern",historical:[{date:"2021-01-05",value:82749},{date:"2021-01-04",value:77876},{date:"2021-01-03",value:66258},{date:"2021-01-02",value:57833},{date:"2021-01-01",value:39005},{date:"2020-12-31",value:37955},{date:"2020-12-30",value:28206},{date:"2020-12-29",value:12935},{date:"2020-12-28",value:5219},{date:"2020-12-27",value:3389},{date:"2020-12-26",value:0}]},{id:"Berlin",historical:[{date:"2021-01-05",value:21955},{date:"2021-01-04",value:19389},{date:"2021-01-03",value:17758},{date:"2021-01-02",value:14616},{date:"2021-01-01",value:13137},{date:"2020-12-31",value:11114},{date:"2020-12-30",value:9084},{date:"2020-12-29",value:6296},{date:"2020-12-28",value:3839},{date:"2020-12-27",value:1626},{date:"2020-12-26",value:0}]},{id:"Brandenburg",historical:[{date:"2021-01-05",value:5404},{date:"2021-01-04",value:3334},{date:"2021-01-03",value:3309},{date:"2021-01-02",value:3219},{date:"2021-01-01",value:3219},{date:"2020-12-31",value:3219},{date:"2020-12-30",value:3036},{date:"2020-12-29",value:1553},{date:"2020-12-28",value:107},{date:"2020-12-27",value:100},{date:"2020-12-26",value:0}]},{id:"Bremen",historical:[{date:"2021-01-05",value:3195},{date:"2021-01-04",value:2653},{date:"2021-01-03",value:1903},{date:"2021-01-02",value:1837},{date:"2021-01-01",value:1741},{date:"2020-12-31",value:1741},{date:"2020-12-30",value:1691},{date:"2020-12-29",value:1059},{date:"2020-12-28",value:592},{date:"2020-12-27",value:420},{date:"2020-12-26",value:0}]},{id:"Hamburg",historical:[{date:"2021-01-05",value:5901},{date:"2021-01-04",value:4756},{date:"2021-01-03",value:4140},{date:"2021-01-02",value:3704},{date:"2021-01-01",value:3042},{date:"2020-12-31",value:2759},{date:"2020-12-30",value:2040},{date:"2020-12-29",value:1499},{date:"2020-12-28",value:1071},{date:"2020-12-27",value:445},{date:"2020-12-26",value:0}]},{id:"Hessen",historical:[{date:"2021-01-05",value:41298},{date:"2021-01-04",value:37795},{date:"2021-01-03",value:33405},{date:"2021-01-02",value:30085},{date:"2021-01-01",value:24791},{date:"2020-12-31",value:21373},{date:"2020-12-30",value:15674},{date:"2020-12-29",value:9448},{date:"2020-12-28",value:4354},{date:"2020-12-27",value:3112},{date:"2020-12-26",value:0}]},{id:"Mecklenburg-Vorpommern",historical:[{date:"2021-01-05",value:18014},{date:"2021-01-04",value:13832},{date:"2021-01-03",value:11494},{date:"2021-01-02",value:11494},{date:"2021-01-01",value:11494},{date:"2020-12-31",value:11494},{date:"2020-12-30",value:11101},{date:"2020-12-29",value:7338},{date:"2020-12-28",value:4170},{date:"2020-12-27",value:590},{date:"2020-12-26",value:0}]},{id:"Niedersachsen",historical:[{date:"2021-01-05",value:15164},{date:"2021-01-04",value:8665},{date:"2021-01-03",value:5394},{date:"2021-01-02",value:4962},{date:"2021-01-01",value:3945},{date:"2020-12-31",value:3566},{date:"2020-12-30",value:2705},{date:"2020-12-29",value:1527},{date:"2020-12-28",value:835},{date:"2020-12-27",value:334},{date:"2020-12-26",value:0}]},{id:"Nordrhein-Westfalen",historical:[{date:"2021-01-05",value:69225},{date:"2021-01-04",value:62692},{date:"2021-01-03",value:53841},{date:"2021-01-02",value:48691},{date:"2021-01-01",value:33375},{date:"2020-12-31",value:24924},{date:"2020-12-30",value:19930},{date:"2020-12-29",value:11385},{date:"2020-12-28",value:7136},{date:"2020-12-27",value:5405},{date:"2020-12-26",value:0}]},{id:"Rheinland-Pfalz",historical:[{date:"2021-01-05",value:12336},{date:"2021-01-04",value:9891},{date:"2021-01-03",value:7248},{date:"2021-01-02",value:7248},{date:"2021-01-01",value:6898},{date:"2020-12-31",value:5112},{date:"2020-12-30",value:4247},{date:"2020-12-29",value:2284},{date:"2020-12-28",value:1462},{date:"2020-12-27",value:1252},{date:"2020-12-26",value:0}]},{id:"Saarland",historical:[{date:"2021-01-05",value:5633},{date:"2021-01-04",value:4836},{date:"2021-01-03",value:4149},{date:"2021-01-02",value:4149},{date:"2021-01-01",value:3316},{date:"2020-12-31",value:2716},{date:"2020-12-30",value:2119},{date:"2020-12-29",value:1518},{date:"2020-12-28",value:862},{date:"2020-12-27",value:215},{date:"2020-12-26",value:0}]},{id:"Sachsen",historical:[{date:"2021-01-05",value:10767},{date:"2021-01-04",value:7740},{date:"2021-01-03",value:4866},{date:"2021-01-02",value:4343},{date:"2021-01-01",value:4e3},{date:"2020-12-31",value:3290},{date:"2020-12-30",value:2653},{date:"2020-12-29",value:1487},{date:"2020-12-28",value:857},{date:"2020-12-27",value:182},{date:"2020-12-26",value:0}]},{id:"Sachsen-Anhalt",historical:[{date:"2021-01-05",value:17123},{date:"2021-01-04",value:15628},{date:"2021-01-03",value:13366},{date:"2021-01-02",value:12822},{date:"2021-01-01",value:11771},{date:"2020-12-31",value:11146},{date:"2020-12-30",value:10100},{date:"2020-12-29",value:7287},{date:"2020-12-28",value:3985},{date:"2020-12-27",value:1504},{date:"2020-12-26",value:147}]},{id:"Schleswig-Holstein",historical:[{date:"2021-01-05",value:17016},{date:"2021-01-04",value:12978},{date:"2021-01-03",value:9557},{date:"2021-01-02",value:8933},{date:"2021-01-01",value:7964},{date:"2020-12-31",value:7270},{date:"2020-12-30",value:5581},{date:"2020-12-29",value:3579},{date:"2020-12-28",value:2495},{date:"2020-12-27",value:809},{date:"2020-12-26",value:0}]},{id:"Thüringen",historical:[{date:"2021-01-05",value:3711},{date:"2021-01-04",value:2715},{date:"2021-01-03",value:810},{date:"2021-01-02",value:810},{date:"2021-01-01",value:810},{date:"2020-12-31",value:810},{date:"2020-12-30",value:810},{date:"2020-12-29",value:672},{date:"2020-12-28",value:257},{date:"2020-12-27",value:99},{date:"2020-12-26",value:0}]}],timestamp:"6.1.2021, 12:00 Uhr",messages:[],lastUpdate:"2021-01-06T12:26:19+01:00"};
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=require("google-charts"),t=a(require("./data.json"));function r(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return r=function(){return e},e}function a(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=r();if(t&&t.has(e))return t.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=n?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}return a.default=e,t&&t.set(e,a),a}var n=t.germany.historical.map(function(e){return[new Date(e.date),e.value]}).reverse();function o(){var t=new e.GoogleCharts.api.visualization.DataTable;t.addColumn("date","Date"),t.addColumn("number","People vaccinated"),t.addRows(n);new e.GoogleCharts.api.charts.Line(document.getElementById("graph")).draw(t,e.GoogleCharts.api.charts.Line.convertOptions({chart:{title:"COVID-19 Vaccination Graph for Germany"},hAxis:{format:"dd.MM.y"},vAxis:{format:"decimal"},width:900,height:500}))}e.GoogleCharts.load(o,{packages:["line"]});
},{"google-charts":"Guk4","./data.json":"boCh"}]},{},["Focm"], null)
//# sourceMappingURL=/src.ca937801.js.map