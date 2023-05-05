/*! For license information please see component---src-pages-search-tsx-3158f824447b5ab981fc.js.LICENSE.txt */
(self.webpackChunkblog=self.webpackChunkblog||[]).push([[334],{7815:function(e,t,n){var i,o;!function(){var r,s,a,l,u,c,d,h,f,p,v,m,g,y,S,x,w,I,b,E,F,D,_,k,C,N,P,z,O,W=function(e){var t=new W.Index;return t.pipeline.add(W.trimmer,W.stopWordFilter,W.stemmer),e&&e.call(t,t),t};W.version="0.9.5",lunr=W,W.utils={},W.utils.warn=(r=this,function(e){r.console&&console.warn&&console.warn(e)}),W.utils.toString=function(e){return null==e?"":e.toString()},W.EventEmitter=function(){this.events={}},W.EventEmitter.prototype.addListener=function(){var e=Array.prototype.slice.call(arguments),t=e.pop(),n=e;if("function"!=typeof t)throw new TypeError("last argument must be a function");n.forEach((function(e){this.hasHandler(e)||(this.events[e]=[]),this.events[e].push(t)}),this)},W.EventEmitter.prototype.removeListener=function(e,t){if(this.hasHandler(e)){var n=this.events[e].indexOf(t);-1!==n&&(this.events[e].splice(n,1),0==this.events[e].length&&delete this.events[e])}},W.EventEmitter.prototype.emit=function(e){if(this.hasHandler(e)){var t=Array.prototype.slice.call(arguments,1);this.events[e].forEach((function(e){e.apply(void 0,t)}),this)}},W.EventEmitter.prototype.hasHandler=function(e){return e in this.events},W.tokenizer=function(e){if(!arguments.length||null==e)return[];if(Array.isArray(e)){var t=e.filter((function(e){return null!=e}));t=t.map((function(e){return W.utils.toString(e).toLowerCase()}));var n=[];return t.forEach((function(e){var t=e.split(W.tokenizer.seperator);n=n.concat(t)}),this),n}return e.toString().trim().toLowerCase().split(W.tokenizer.seperator)},W.tokenizer.defaultSeperator=/[\s\-]+/,W.tokenizer.seperator=W.tokenizer.defaultSeperator,W.tokenizer.setSeperator=function(e){null!=e&&"object"==typeof e&&(W.tokenizer.seperator=e)},W.tokenizer.resetSeperator=function(){W.tokenizer.seperator=W.tokenizer.defaultSeperator},W.tokenizer.getSeperator=function(){return W.tokenizer.seperator},W.Pipeline=function(){this._queue=[]},W.Pipeline.registeredFunctions={},W.Pipeline.registerFunction=function(e,t){t in W.Pipeline.registeredFunctions&&W.utils.warn("Overwriting existing registered function: "+t),e.label=t,W.Pipeline.registeredFunctions[t]=e},W.Pipeline.getRegisteredFunction=function(e){return e in W.Pipeline.registeredFunctions!=!0?null:W.Pipeline.registeredFunctions[e]},W.Pipeline.warnIfFunctionNotRegistered=function(e){e.label&&e.label in this.registeredFunctions||W.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n",e)},W.Pipeline.load=function(e){var t=new W.Pipeline;return e.forEach((function(e){var n=W.Pipeline.getRegisteredFunction(e);if(!n)throw new Error("Cannot load un-registered function: "+e);t.add(n)})),t},W.Pipeline.prototype.add=function(){Array.prototype.slice.call(arguments).forEach((function(e){W.Pipeline.warnIfFunctionNotRegistered(e),this._queue.push(e)}),this)},W.Pipeline.prototype.after=function(e,t){W.Pipeline.warnIfFunctionNotRegistered(t);var n=this._queue.indexOf(e);if(-1===n)throw new Error("Cannot find existingFn");this._queue.splice(n+1,0,t)},W.Pipeline.prototype.before=function(e,t){W.Pipeline.warnIfFunctionNotRegistered(t);var n=this._queue.indexOf(e);if(-1===n)throw new Error("Cannot find existingFn");this._queue.splice(n,0,t)},W.Pipeline.prototype.remove=function(e){var t=this._queue.indexOf(e);-1!==t&&this._queue.splice(t,1)},W.Pipeline.prototype.run=function(e){for(var t=[],n=e.length,i=this._queue.length,o=0;o<n;o++){for(var r=e[o],s=0;s<i&&null!=(r=this._queue[s](r,o,e));s++);null!=r&&t.push(r)}return t},W.Pipeline.prototype.reset=function(){this._queue=[]},W.Pipeline.prototype.get=function(){return this._queue},W.Pipeline.prototype.toJSON=function(){return this._queue.map((function(e){return W.Pipeline.warnIfFunctionNotRegistered(e),e.label}))},W.Index=function(){this._fields=[],this._ref="id",this.pipeline=new W.Pipeline,this.documentStore=new W.DocumentStore,this.index={},this.eventEmitter=new W.EventEmitter,this._idfCache={},this.on("add","remove","update",function(){this._idfCache={}}.bind(this))},W.Index.prototype.on=function(){var e=Array.prototype.slice.call(arguments);return this.eventEmitter.addListener.apply(this.eventEmitter,e)},W.Index.prototype.off=function(e,t){return this.eventEmitter.removeListener(e,t)},W.Index.load=function(e){e.version!==W.version&&W.utils.warn("version mismatch: current "+W.version+" importing "+e.version);var t=new this;for(var n in t._fields=e.fields,t._ref=e.ref,t.documentStore=W.DocumentStore.load(e.documentStore),t.pipeline=W.Pipeline.load(e.pipeline),t.index={},e.index)t.index[n]=W.InvertedIndex.load(e.index[n]);return t},W.Index.prototype.addField=function(e){return this._fields.push(e),this.index[e]=new W.InvertedIndex,this},W.Index.prototype.setRef=function(e){return this._ref=e,this},W.Index.prototype.saveDocument=function(e){return this.documentStore=new W.DocumentStore(e),this},W.Index.prototype.addDoc=function(e,t){if(e){t=void 0===t||t;var n=e[this._ref];this.documentStore.addDoc(n,e),this._fields.forEach((function(t){var i=this.pipeline.run(W.tokenizer(e[t]));this.documentStore.addFieldLength(n,t,i.length);var o={};for(var r in i.forEach((function(e){e in o?o[e]+=1:o[e]=1}),this),o){var s=o[r];s=Math.sqrt(s),this.index[t].addToken(r,{ref:n,tf:s})}}),this),t&&this.eventEmitter.emit("add",e,this)}},W.Index.prototype.removeDocByRef=function(e,t){if(e&&!1!==this.documentStore.isDocStored()&&this.documentStore.hasDoc(e)){var n=this.documentStore.getDoc(e);this.removeDoc(n,!1)}},W.Index.prototype.removeDoc=function(e,t){if(e){t=void 0===t||t;var n=e[this._ref];this.documentStore.hasDoc(n)&&(this.documentStore.removeDoc(n),this._fields.forEach((function(t){this.pipeline.run(W.tokenizer(e[t])).forEach((function(e){this.index[t].removeToken(e,n)}),this)}),this),t&&this.eventEmitter.emit("remove",e,this))}},W.Index.prototype.updateDoc=function(e,t){t=void 0===t||t;this.removeDocByRef(e[this._ref],!1),this.addDoc(e,!1),t&&this.eventEmitter.emit("update",e,this)},W.Index.prototype.idf=function(e,t){var n="@"+t+"/"+e;if(Object.prototype.hasOwnProperty.call(this._idfCache,n))return this._idfCache[n];var i=this.index[t].getDocFreq(e),o=1+Math.log(this.documentStore.length/(i+1));return this._idfCache[n]=o,o},W.Index.prototype.getFields=function(){return this._fields.slice()},W.Index.prototype.search=function(e,t){if(!e)return[];var n=null;null!=t&&(n=JSON.stringify(t));var i=new W.Configuration(n,this.getFields()).get(),o=this.pipeline.run(W.tokenizer(e)),r={};for(var s in i){var a=this.fieldSearch(o,s,i),l=i[s].boost;for(var u in a)a[u]=a[u]*l;for(var u in a)u in r?r[u]+=a[u]:r[u]=a[u]}var c=[];for(var u in r)c.push({ref:u,score:r[u]});return c.sort((function(e,t){return t.score-e.score})),c},W.Index.prototype.fieldSearch=function(e,t,n){var i=n[t].bool,o=n[t].expand,r=n[t].boost,s=null,a={};if(0!==r)return e.forEach((function(e){var n=[e];1==o&&(n=this.index[t].expandToken(e));var r={};n.forEach((function(n){var o=this.index[t].getDocs(n),l=this.idf(n,t);if(s&&"AND"==i){var u={};for(var c in s)c in o&&(u[c]=o[c]);o=u}for(var c in n==e&&this.fieldSearchStats(a,n,o),o){var d=this.index[t].getTermFrequency(n,c),h=this.documentStore.getFieldLength(c,t),f=1;0!=h&&(f=1/Math.sqrt(h));var p=1;n!=e&&(p=.15*(1-(n.length-e.length)/n.length));var v=d*l*f*p;c in r?r[c]+=v:r[c]=v}}),this),s=this.mergeScores(s,r,i)}),this),s=this.coordNorm(s,a,e.length)},W.Index.prototype.mergeScores=function(e,t,n){if(!e)return t;if("AND"==n){var i={};for(var o in t)o in e&&(i[o]=e[o]+t[o]);return i}for(var o in t)o in e?e[o]+=t[o]:e[o]=t[o];return e},W.Index.prototype.fieldSearchStats=function(e,t,n){for(var i in n)i in e?e[i].push(t):e[i]=[t]},W.Index.prototype.coordNorm=function(e,t,n){for(var i in e)if(i in t){var o=t[i].length;e[i]=e[i]*o/n}return e},W.Index.prototype.toJSON=function(){var e={};return this._fields.forEach((function(t){e[t]=this.index[t].toJSON()}),this),{version:W.version,fields:this._fields,ref:this._ref,documentStore:this.documentStore.toJSON(),index:e,pipeline:this.pipeline.toJSON()}},W.Index.prototype.use=function(e){var t=Array.prototype.slice.call(arguments,1);t.unshift(this),e.apply(this,t)},W.DocumentStore=function(e){this._save=null==e||e,this.docs={},this.docInfo={},this.length=0},W.DocumentStore.load=function(e){var t=new this;return t.length=e.length,t.docs=e.docs,t.docInfo=e.docInfo,t._save=e.save,t},W.DocumentStore.prototype.isDocStored=function(){return this._save},W.DocumentStore.prototype.addDoc=function(e,t){this.hasDoc(e)||this.length++,!0===this._save?this.docs[e]=function(e){if(null===e||"object"!=typeof e)return e;var t=e.constructor();for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}(t):this.docs[e]=null},W.DocumentStore.prototype.getDoc=function(e){return!1===this.hasDoc(e)?null:this.docs[e]},W.DocumentStore.prototype.hasDoc=function(e){return e in this.docs},W.DocumentStore.prototype.removeDoc=function(e){this.hasDoc(e)&&(delete this.docs[e],delete this.docInfo[e],this.length--)},W.DocumentStore.prototype.addFieldLength=function(e,t,n){null!=e&&0!=this.hasDoc(e)&&(this.docInfo[e]||(this.docInfo[e]={}),this.docInfo[e][t]=n)},W.DocumentStore.prototype.updateFieldLength=function(e,t,n){null!=e&&0!=this.hasDoc(e)&&this.addFieldLength(e,t,n)},W.DocumentStore.prototype.getFieldLength=function(e,t){return null==e?0:e in this.docs&&t in this.docInfo[e]?this.docInfo[e][t]:0},W.DocumentStore.prototype.toJSON=function(){return{docs:this.docs,docInfo:this.docInfo,length:this.length,save:this._save}},W.stemmer=(s={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},a={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},d="^("+(u="[^aeiou][^aeiouy]*")+")?"+(c=(l="[aeiouy]")+"[aeiou]*")+u+"("+c+")?$",h="^("+u+")?"+c+u+c+u,f="^("+u+")?"+l,p=new RegExp("^("+u+")?"+c+u),v=new RegExp(h),m=new RegExp(d),g=new RegExp(f),y=/^(.+?)(ss|i)es$/,S=/^(.+?)([^s])s$/,x=/^(.+?)eed$/,w=/^(.+?)(ed|ing)$/,I=/.$/,b=/(at|bl|iz)$/,E=new RegExp("([^aeiouylsz])\\1$"),F=new RegExp("^"+u+l+"[^aeiouwxy]$"),D=/^(.+?[^aeiou])y$/,_=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,k=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,C=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,N=/^(.+?)(s|t)(ion)$/,P=/^(.+?)e$/,z=/ll$/,O=new RegExp("^"+u+l+"[^aeiouwxy]$"),function(e){var t,n,i,o,r,l,u;if(e.length<3)return e;if("y"==(i=e.substr(0,1))&&(e=i.toUpperCase()+e.substr(1)),r=S,(o=y).test(e)?e=e.replace(o,"$1$2"):r.test(e)&&(e=e.replace(r,"$1$2")),r=w,(o=x).test(e)){var c=o.exec(e);(o=p).test(c[1])&&(o=I,e=e.replace(o,""))}else r.test(e)&&(t=(c=r.exec(e))[1],(r=g).test(t)&&(l=E,u=F,(r=b).test(e=t)?e+="e":l.test(e)?(o=I,e=e.replace(o,"")):u.test(e)&&(e+="e")));return(o=D).test(e)&&(e=(t=(c=o.exec(e))[1])+"i"),(o=_).test(e)&&(t=(c=o.exec(e))[1],n=c[2],(o=p).test(t)&&(e=t+s[n])),(o=k).test(e)&&(t=(c=o.exec(e))[1],n=c[2],(o=p).test(t)&&(e=t+a[n])),r=N,(o=C).test(e)?(t=(c=o.exec(e))[1],(o=v).test(t)&&(e=t)):r.test(e)&&(t=(c=r.exec(e))[1]+c[2],(r=v).test(t)&&(e=t)),(o=P).test(e)&&(t=(c=o.exec(e))[1],r=m,l=O,((o=v).test(t)||r.test(t)&&!l.test(t))&&(e=t)),r=v,(o=z).test(e)&&r.test(e)&&(o=I,e=e.replace(o,"")),"y"==i&&(e=i.toLowerCase()+e.substr(1)),e}),W.Pipeline.registerFunction(W.stemmer,"stemmer"),W.stopWordFilter=function(e){if(e&&!0!==W.stopWordFilter.stopWords[e])return e},W.clearStopWords=function(){W.stopWordFilter.stopWords={}},W.addStopWords=function(e){null!=e&&!1!==Array.isArray(e)&&e.forEach((function(e){W.stopWordFilter.stopWords[e]=!0}),this)},W.resetStopWords=function(){W.stopWordFilter.stopWords=W.defaultStopWords},W.defaultStopWords={"":!0,a:!0,able:!0,about:!0,across:!0,after:!0,all:!0,almost:!0,also:!0,am:!0,among:!0,an:!0,and:!0,any:!0,are:!0,as:!0,at:!0,be:!0,because:!0,been:!0,but:!0,by:!0,can:!0,cannot:!0,could:!0,dear:!0,did:!0,do:!0,does:!0,either:!0,else:!0,ever:!0,every:!0,for:!0,from:!0,get:!0,got:!0,had:!0,has:!0,have:!0,he:!0,her:!0,hers:!0,him:!0,his:!0,how:!0,however:!0,i:!0,if:!0,in:!0,into:!0,is:!0,it:!0,its:!0,just:!0,least:!0,let:!0,like:!0,likely:!0,may:!0,me:!0,might:!0,most:!0,must:!0,my:!0,neither:!0,no:!0,nor:!0,not:!0,of:!0,off:!0,often:!0,on:!0,only:!0,or:!0,other:!0,our:!0,own:!0,rather:!0,said:!0,say:!0,says:!0,she:!0,should:!0,since:!0,so:!0,some:!0,than:!0,that:!0,the:!0,their:!0,them:!0,then:!0,there:!0,these:!0,they:!0,this:!0,tis:!0,to:!0,too:!0,twas:!0,us:!0,wants:!0,was:!0,we:!0,were:!0,what:!0,when:!0,where:!0,which:!0,while:!0,who:!0,whom:!0,why:!0,will:!0,with:!0,would:!0,yet:!0,you:!0,your:!0},W.stopWordFilter.stopWords=W.defaultStopWords,W.Pipeline.registerFunction(W.stopWordFilter,"stopWordFilter"),W.trimmer=function(e){if(null==e)throw new Error("token should not be undefined");return e.replace(/^\W+/,"").replace(/\W+$/,"")},W.Pipeline.registerFunction(W.trimmer,"trimmer"),W.InvertedIndex=function(){this.root={docs:{},df:0}},W.InvertedIndex.load=function(e){var t=new this;return t.root=e.root,t},W.InvertedIndex.prototype.addToken=function(e,t,n){n=n||this.root;for(var i=0;i<=e.length-1;){var o=e[i];o in n||(n[o]={docs:{},df:0}),i+=1,n=n[o]}var r=t.ref;n.docs[r]?n.docs[r]={tf:t.tf}:(n.docs[r]={tf:t.tf},n.df+=1)},W.InvertedIndex.prototype.hasToken=function(e){if(!e)return!1;for(var t=this.root,n=0;n<e.length;n++){if(!t[e[n]])return!1;t=t[e[n]]}return!0},W.InvertedIndex.prototype.getNode=function(e){if(!e)return null;for(var t=this.root,n=0;n<e.length;n++){if(!t[e[n]])return null;t=t[e[n]]}return t},W.InvertedIndex.prototype.getDocs=function(e){var t=this.getNode(e);return null==t?{}:t.docs},W.InvertedIndex.prototype.getTermFrequency=function(e,t){var n=this.getNode(e);return null==n?0:t in n.docs?n.docs[t].tf:0},W.InvertedIndex.prototype.getDocFreq=function(e){var t=this.getNode(e);return null==t?0:t.df},W.InvertedIndex.prototype.removeToken=function(e,t){if(e){var n=this.getNode(e);null!=n&&t in n.docs&&(delete n.docs[t],n.df-=1)}},W.InvertedIndex.prototype.expandToken=function(e,t,n){if(null==e||""==e)return[];t=t||[];if(null==n&&null==(n=this.getNode(e)))return t;for(var i in n.df>0&&t.push(e),n)"docs"!==i&&"df"!==i&&this.expandToken(e+i,t,n[i]);return t},W.InvertedIndex.prototype.toJSON=function(){return{root:this.root}},W.Configuration=function(e,t){var n;e=e||"";if(null==t||null==t)throw new Error("fields should not be null");this.config={};try{n=JSON.parse(e),this.buildUserConfig(n,t)}catch(i){W.utils.warn("user configuration parse failed, will use default configuration"),this.buildDefaultConfig(t)}},W.Configuration.prototype.buildDefaultConfig=function(e){this.reset(),e.forEach((function(e){this.config[e]={boost:1,bool:"OR",expand:!1}}),this)},W.Configuration.prototype.buildUserConfig=function(e,t){var n="OR",i=!1;if(this.reset(),"bool"in e&&(n=e.bool||n),"expand"in e&&(i=e.expand||i),"fields"in e)for(var o in e.fields)if(t.indexOf(o)>-1){var r=e.fields[o],s=i;null!=r.expand&&(s=r.expand),this.config[o]={boost:r.boost||0===r.boost?r.boost:1,bool:r.bool||n,expand:s}}else W.utils.warn("field name in user configuration not found in index instance fields");else this.addAllFields2UserConfig(n,i,t)},W.Configuration.prototype.addAllFields2UserConfig=function(e,t,n){n.forEach((function(n){this.config[n]={boost:1,bool:e,expand:t}}),this)},W.Configuration.prototype.get=function(){return this.config},W.Configuration.prototype.reset=function(){this.config={}},lunr.SortedSet=function(){this.length=0,this.elements=[]},lunr.SortedSet.load=function(e){var t=new this;return t.elements=e,t.length=e.length,t},lunr.SortedSet.prototype.add=function(){var e,t;for(e=0;e<arguments.length;e++)t=arguments[e],~this.indexOf(t)||this.elements.splice(this.locationFor(t),0,t);this.length=this.elements.length},lunr.SortedSet.prototype.toArray=function(){return this.elements.slice()},lunr.SortedSet.prototype.map=function(e,t){return this.elements.map(e,t)},lunr.SortedSet.prototype.forEach=function(e,t){return this.elements.forEach(e,t)},lunr.SortedSet.prototype.indexOf=function(e){for(var t=0,n=this.elements.length,i=n-t,o=t+Math.floor(i/2),r=this.elements[o];i>1;){if(r===e)return o;r<e&&(t=o),r>e&&(n=o),i=n-t,o=t+Math.floor(i/2),r=this.elements[o]}return r===e?o:-1},lunr.SortedSet.prototype.locationFor=function(e){for(var t=0,n=this.elements.length,i=n-t,o=t+Math.floor(i/2),r=this.elements[o];i>1;)r<e&&(t=o),r>e&&(n=o),i=n-t,o=t+Math.floor(i/2),r=this.elements[o];return r>e?o:r<e?o+1:void 0},lunr.SortedSet.prototype.intersect=function(e){for(var t=new lunr.SortedSet,n=0,i=0,o=this.length,r=e.length,s=this.elements,a=e.elements;!(n>o-1||i>r-1);)s[n]!==a[i]?s[n]<a[i]?n++:s[n]>a[i]&&i++:(t.add(s[n]),n++,i++);return t},lunr.SortedSet.prototype.clone=function(){var e=new lunr.SortedSet;return e.elements=this.toArray(),e.length=e.elements.length,e},lunr.SortedSet.prototype.union=function(e){var t,n,i;this.length>=e.length?(t=this,n=e):(t=e,n=this),i=t.clone();for(var o=0,r=n.toArray();o<r.length;o++)i.add(r[o]);return i},lunr.SortedSet.prototype.toJSON=function(){return this.toArray()},void 0===(o="function"==typeof(i=function(){return W})?i.call(t,n,t,e):i)||(e.exports=o)}()},9108:function(e,t,n){"use strict";n.d(t,{A:function(){return i.A}});var i=n(4018);n(707)},2287:function(e,t,n){"use strict";n.r(t);var i=n(9693),o=n.n(i),r=n(7294),s=n(1597),a=n(6958),l=n(9108),u=n(2734),c=n(5414),d=n(7683),h=n(4133),f=n.n(h),p=n(1558),v=n(7815),m=n.n(v),g=n(9);t.default=()=>{const e=(0,r.useRef)(null),{0:t,1:n}=(0,r.useState)(""),{0:i,1:h}=(0,r.useState)([]),{0:p,1:v}=(0,r.useState)(null),g=e=>{p&&h(o()(p.search(e,{expand:!0}).map((e=>p&&p.documentStore.getDoc(e.ref)))))};return(0,r.useEffect)((()=>{fetch("/siteSearchIndex.json").then((e=>e.json())).then((e=>{const n=e.documentStore.docs;m().stopWordFilter.stopWords={};var i=m()((function(){this.addField("title"),this.addField("body"),this.setRef("id")}));Object.keys(n).map((e=>i.addDoc(n[e]))),v(i),t&&g(t)}))}),[]),r.createElement(l.A,null,r.createElement(c.Z,{title:"Search | "+d.Z.siteTitle}),r.createElement(a.HJ,{path:"/search/",data:{title:"Search"}}),r.createElement(a.h4,{banner:"/assets/bg/bg3.jpg"},r.createElement(a.NZ,null,"Search")),r.createElement(a.im,null,r.createElement(u.VY,null,r.createElement("div",{style:{marginTop:"1rem"}},r.createElement("div",{style:{position:"relative"}},r.createElement(I,{type:"text",value:t,onChange:e=>{const t=e.target.value;n(t),g(t)},ref:e,style:{boxSizing:"border-box"}}),!p&&r.createElement(w,null)),r.createElement(b,null,i.map((e=>r.createElement(E,{key:e.id},r.createElement(s.Link,{to:""+e.path},e.title),"  ",r.createElement("span",{style:{color:f()(0,0,0,.5)}},e.date)))))))))};const y=(0,g.keyframes)(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]),S=g.default.div.withConfig({displayName:"search__Spinner",componentId:"sc-79a7vh-0"})(["border:2px solid transparent;border-top:2px solid ",";border-radius:50%;width:1rem;height:1rem;animation:"," 0.8s linear infinite;position:relative;"],p.r.colors.primary,y),x=g.default.div.withConfig({displayName:"search__SpinnerContainer",componentId:"sc-79a7vh-1"})(["position:absolute;right:0.5rem;top:calc(50% - 1rem);"]),w=()=>r.createElement(x,null,r.createElement(S,null)),I=g.default.input.withConfig({displayName:"search__SearchInput",componentId:"sc-79a7vh-2"})(["margin-bottom:1rem;width:100%;"]),b=g.default.ul.withConfig({displayName:"search__ResultsList",componentId:"sc-79a7vh-3"})(["list-style-type:none;margin:0;"]),E=g.default.li.withConfig({displayName:"search__SearchResultItem",componentId:"sc-79a7vh-4"})(["margin:0;"])},9693:function(e){e.exports=function(e){for(var t=-1,n=null==e?0:e.length,i=0,o=[];++t<n;){var r=e[t];r&&(o[i++]=r)}return o}}}]);
//# sourceMappingURL=component---src-pages-search-tsx-3158f824447b5ab981fc.js.map