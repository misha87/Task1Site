(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{132:function(n,e,t){var r=t(133);"string"==typeof r&&(r=[[n.i,r,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};t(1)(r,s);r.locals&&(n.exports=r.locals)},133:function(n,e,t){(n.exports=t(0)(!1)).push([n.i,'/* Include the padding and border in an element\'s total width and height */\r\n/** {\r\n    box-sizing: border-box;\r\n}*/\r\n\r\n/* Remove margins and padding from the list */\r\nul {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n/* Style the list items */\r\nul li {\r\n    cursor: pointer;\r\n    padding: 12px 8px 12px 40px;\r\n    background: #eee;\r\n    font-size: 18px;\r\n    transition: 0.2s;\r\n\r\n    /* make the list items unselectable */\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n}\r\n\r\n/* Set all odd list items to a different color (zebra-stripes) */\r\nul li:nth-child(odd) {\r\n    background: #f9f9f9;\r\n}\r\n\r\n/* Darker background-color on hover */\r\nul li:hover {\r\n    background: #ddd;\r\n}\r\n\r\n/* Style the header */\r\n.header {\r\n    background-color: #f44336;\r\n    padding: 30px 40px;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n/* Clear floats after the header */\r\n.header:after {\r\n    content: "";\r\n    display: table;\r\n    clear: both;\r\n}\r\n\r\n/* Style the input */\r\ninput {\r\n    margin: 0;\r\n    border: none;\r\n    border-radius: 0;\r\n    padding: 10px;\r\n    font-size: 16px;\r\n    width: 80px;\r\n}\r\n\r\n#navigationBar {\r\n    float: left;    \r\n}\r\n\r\n#newsChannelsContainer {\r\n}\r\n\r\n#inputNewsNumberContainer {\r\n}\r\n\r\n#newsChannelsSelect {\r\n}\r\n\r\n#newsContainer {\r\n    overflow: hidden;\r\n    background-color: #f44336;\r\n}\r\n\r\nbody {\r\n    background: grey;\r\n};\r\n',""])},6:function(n,e,t){"use strict";t.r(e);t(132),t(134),t(336);function r(n,e,t,r,s,i,a){try{var o=n[i](a),l=o.value}catch(n){return void t(n)}o.done?e(l):Promise.resolve(l).then(r,s)}function s(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var i=10,a=function(){function n(){var e=this;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this._newsContainer=document.getElementById("newsContainer"),this._newsCountElement=document.getElementById("newsCount"),this._newsCount=i,this._newsCountElement.value=this._newsCount,this._newsCountElement.oninput=function(){e._newsCount=e._newsCountElement.value,e.requestNews(e._selectedSource)}}var e,t,a,o,l;return e=n,(t=[{key:"addNewArticleItem",value:function(n){var e=document.createElement("li");if(n.urlToImage){var t=document.createElement("img");t.src=n.urlToImage,t.width=24,t.height=24,e.appendChild(t)}var r=document.createTextNode(n.title);e.appendChild(r),this._newsList.appendChild(e)}},{key:"fillNews",value:function(n){var e=this;this._newsList&&this._newsContainer.removeChild(this._newsList),this._newsList=document.createElement("ul"),this._newsContainer.appendChild(this._newsList),n.forEach(function(n){return e.addNewArticleItem(n)})}},{key:"requestNews",value:(o=regeneratorRuntime.mark(function n(e){var t,r,s;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return this._selectedSource=e,t="https://newsapi.org/v2/everything?sources=".concat(e,"&apiKey=cf033c57da2e4126b52df66a8cdd2f89&pageSize=").concat(this._newsCount),n.next=4,fetch(t);case 4:return r=n.sent,n.next=7,r.json();case 7:s=n.sent,this.fillNews(s.articles);case 9:case"end":return n.stop()}},n,this)}),l=function(){var n=this,e=arguments;return new Promise(function(t,s){var i=o.apply(n,e);function a(n){r(i,t,s,a,l,"next",n)}function l(n){r(i,t,s,a,l,"throw",n)}a(void 0)})},function(n){return l.apply(this,arguments)})}])&&s(e.prototype,t),a&&s(e,a),n}();function o(n,e,t,r,s,i,a){try{var o=n[i](a),l=o.value}catch(n){return void t(n)}o.done?e(l):Promise.resolve(l).then(r,s)}function l(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var u=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this._newsChannelsContainer=document.getElementById("newsChannelsContainer"),this._news=new a}var e,t,r,s,i;return e=n,(t=[{key:"addNewChannel",value:function(n){var e=document.createElement("Option");e.value=n.id,e.text=n.name,this._newsChannelsList.add(e)}},{key:"fillNewsChannels",value:function(n){var e=this;this._newsChannelsList&&this._newsChannelsContainer.removeChild(this._newsChannelsList),this._newsChannelsList=document.createElement("Select"),this._newsChannelsList.id="newsChannelsSelect",this._newsChannelsList.size=20,this._newsChannelsList.onchange=function(){return e._news.requestNews(e._newsChannelsList.value)},this._newsChannelsContainer.appendChild(this._newsChannelsList),n.forEach(function(n){return e.addNewChannel(n)})}},{key:"requestNewsChannels",value:(s=regeneratorRuntime.mark(function n(){var e,t;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return"https://newsapi.org/v2/sources?apiKey=cf033c57da2e4126b52df66a8cdd2f89",n.next=3,fetch("https://newsapi.org/v2/sources?apiKey=cf033c57da2e4126b52df66a8cdd2f89");case 3:return e=n.sent,n.next=6,e.json();case 6:t=n.sent,this.fillNewsChannels(t.sources);case 8:case"end":return n.stop()}},n,this)}),i=function(){var n=this,e=arguments;return new Promise(function(t,r){var i=s.apply(n,e);function a(n){o(i,t,r,a,l,"next",n)}function l(n){o(i,t,r,a,l,"throw",n)}a(void 0)})},function(){return i.apply(this,arguments)})}])&&l(e.prototype,t),r&&l(e,r),n}();function c(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}t.d(e,"App",function(){return h});var h=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this._newsChannels=new u}var e,t,r;return e=n,(t=[{key:"showNews",value:function(){this._newsChannels.requestNewsChannels()}}])&&c(e.prototype,t),r&&c(e,r),n}()}}]);