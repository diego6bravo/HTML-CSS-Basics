
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"131",
  
  "macros":[{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page"
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__cid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionTotal"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionAffiliation"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionTax"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionShipping"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionCoupon"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionCurrency"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"currencyCode"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"products"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.C55||function(){};a.prototype.customDimProduct=a.prototype.customDimProduct||{};a.prototype.customMetProduct=a.prototype.customMetProduct||{};a.prototype.nbPvTpl=a.prototype.nbPvTpl||1;a.prototype.encodeCookie=a.prototype.encodeCookie||!0;a.prototype.expires=a.prototype.expires||(new Date(+new Date+15552E6)).toUTCString();a.prototype.path=a.prototype.path||\"\/\";a.prototype.insensitiveWords=a.prototype.insensitiveWords||[\"trackSocial\",\"trackEvent\",\"virtualPageview\"];a.prototype.indexKw=\na.prototype.indexKw||function(a,b,f){var k;f=f||0;for(k=a.length;f\u003Ck;f+=1)if(b\u0026\u0026a[f].toString().toLowerCase()===b.toLowerCase())return f;return-1};a.prototype.dataLayerInitiated=a.prototype.dataLayerInitiated||!1;a.prototype.initDataLayer=a.prototype.initDataLayer||function(){for(var a=window.document.getElementsByTagName(\"script\"),b,f=a.length,c=0,d,g=!1,e=this||{};c\u003Cf\u0026\u0026!g;)b=a[c].src,\/www\\.googletagmanager\\.com\\\/gtm\\.js\\?\/.test(b)\u0026\u0026b.split(\"id\\x3d\")[1].split(\"\\x26l\\x3d\")[0]===",["escape",["macro",4],8,16],"\u0026\u0026\n(d=b.split(\"\\x26l\\x3d\")[1],g=!0),c+=1;e.dataLayer=d?window[d]||[]:window.dataLayer||[];e._push=e.dataLayer.push;e.dataLayer.push=function(a){var b=(b=a?a.event:null)?e.indexKw(e.insensitiveWords,b.toLowerCase()):-1;-1!==b\u0026\u0026(a.event=e.insensitiveWords[b]);return e._push.call(e.dataLayer,a)};this.dataLayerInitiated=!0};0==a.prototype.dataLayerInitiated\u0026\u0026a.prototype.initDataLayer();a.prototype.nodeExplorer=function(a,b,f,c){var d,g=c||0;if(a\u0026\u0026void 0!==a[b]\u0026\u0026(f\u0026\u0026a[b]===f||!f))return a;if(a instanceof\nArray\u0026\u00265\u003Eg)for(d=a.length-1;0\u003C=d;--d){if(c=this.nodeExplorer(a[d],b,f,g+1),void 0!==c)return c}else if(\"object\"===typeof a\u0026\u00265\u003Eg)for(d in a)if(a.hasOwnProperty(d)\u0026\u0026(c=this.nodeExplorer(a[d],b,f,g+1),void 0!==c))return c};a.prototype.getDataLayerValue=function(a){var b=this.nodeExplorer(this.dataLayer,a);return b?b[a]:\"\"};a.prototype.getDataLayerObject=function(a,b){return(a=this.nodeExplorer(this.dataLayer,a,b))?a:!1};a.prototype.getDataLayerListById=function(a){var b=function(a,c,d,g){var e;g=g||\n0;a\u0026\u0026void 0!==a[c]\u0026\u0026a[c]\u0026\u0026d.push(a);if(a instanceof Array\u0026\u00265\u003Eg)for(e=a.length-1;0\u003C=e;--e)r=b(a[e],c,d,g+1);else if(\"object\"===typeof a\u0026\u00265\u003Eg)for(e in a)a.hasOwnProperty(e)\u0026\u0026(r=b(a[e],c,d,g+1));return d};return b(this.dataLayer,a,[])};a.prototype.loadCookie=function(){document.cookie.match(\"__55\\x3d([^;$]*)\")?this.store=this.encodeCookie?JSON.parse(decodeURIComponent(document.cookie.match(\"__55\\x3d([^;$]*)\")[1])):JSON.parse(document.cookie.match(\"__55\\x3d([^;$]*)\")[1]):this.store={}};a.prototype.loadCookie();\na.prototype.saveCookie=function(){window.document.cookie=this.encodeCookie?\"__55\\x3d\"+encodeURIComponent(JSON.stringify(this.store))+\";expires\\x3d\"+this.expires+\";path\\x3d\"+this.path:\"__55\\x3d\"+JSON.stringify(this.store)+\";expires\\x3d\"+this.expires+\";path\\x3d\"+this.path};window.C55=a;window.config55=new a;a={};var h,l=config55.getDataLayerListById(\"eeAction\"),m=l.length;if((h=config55.getDataLayerListById(\"ecommerce\")[0])\u0026\u0026h.ecommerce){var b=config55.getDataLayerValue(\"ecommerce\");a.ecommerce=h.ecommerce||\n{};return a}for(h=0;h\u003Cm;h+=1)switch(l[h].eeAction){case \"eeListView\":b=config55.getDataLayerObject(\"eeAction\",\"eeListView\");b.eeSend=b.eeSend||0;if(b\u0026\u0026b.eeSend\u003Cconfig55.nbPvTpl){a.ecommerce=a.ecommerce||{};a.ecommerce.currencyCode=a.ecommerce.currencyCode||b.currencyCode;a.ecommerce.impressions=a.ecommerce.impressions||b.products;for(j=0;j\u003Ca.ecommerce.impressions.length;j++){for(var c in config55.customDimProduct)a.ecommerce.impressions[j][\"dimension\"+c]=a.ecommerce.impressions[j][config55.customDimProduct[c]]||\n\"\";for(var d in config55.customMetProduct)a.ecommerce.impressions[j][\"metric\"+d]=a.ecommerce.impressions[j][config55.customMetProduct[d]]||\"\"}b.eeSend+=1}break;case \"eeListClick\":b=config55.getDataLayerObject(\"eeAction\",\"eeListClick\");b.eeSend=b.eeSend||0;if(b\u0026\u0026b.eeSend\u003Cconfig55.nbPvTpl){a.ecommerce=a.ecommerce||{};a.ecommerce.click=a.ecommerce.click||{};a.ecommerce.click.actionField=a.ecommerce.click.actionField||{};a.ecommerce.click.actionField.list=a.ecommerce.click.actionField.list||b.list;a.ecommerce.click.products=\na.ecommerce.click.products||b.products;for(j=0;j\u003Ca.ecommerce.click.products.length;j++){for(c in config55.customDimProduct)a.ecommerce.click.products[j][\"dimension\"+c]=a.ecommerce.click.products[j][config55.customDimProduct[c]]||\"\";for(d in config55.customMetProduct)a.ecommerce.click.products[j][\"metric\"+d]=a.ecommerce.click.products[j][config55.customMetProduct[d]]||\"\"}b.eeSend+=1}break;case \"eeProductDetail\":b=config55.getDataLayerObject(\"eeAction\",\"eeProductDetail\");b.eeSend=b.eeSend||0;if(b\u0026\u0026\nb.eeSend\u003Cconfig55.nbPvTpl){a.ecommerce=a.ecommerce||{};a.ecommerce.detail=a.ecommerce.detail||{};a.ecommerce.detail.actionField=a.ecommerce.detail.actionField||{};a.ecommerce.detail.actionField.list=a.ecommerce.detail.actionField.list||b.list;a.ecommerce.detail.products=a.ecommerce.detail.products||b.products;for(j=0;j\u003Ca.ecommerce.detail.products.length;j++){for(c in config55.customDimProduct)a.ecommerce.detail.products[j][\"dimension\"+c]=a.ecommerce.detail.products[j][config55.customDimProduct[c]]||\n\"\";for(d in config55.customMetProduct)a.ecommerce.detail.products[j][\"metric\"+d]=a.ecommerce.detail.products[j][config55.customMetProduct[d]]||\"\"}b.eeSend+=1}break;case \"eePromoView\":b=config55.getDataLayerObject(\"eeAction\",\"eePromoView\");b.eeSend=b.eeSend||0;b\u0026\u0026b.eeSend\u003Cconfig55.nbPvTpl\u0026\u0026(a.ecommerce=a.ecommerce||{},a.ecommerce.promoView=a.ecommerce.promoView||{},a.ecommerce.promoView.promotions=a.ecommerce.promoView.promotions||b.promotions,b.eeSend+=1);break;case \"eeCheckout\":b=config55.getDataLayerObject(\"eeAction\",\n\"eeCheckout\");b.eeSend=b.eeSend||0;if(b\u0026\u0026b.eeSend\u003Cconfig55.nbPvTpl){a.ecommerce=a.ecommerce||{};a.ecommerce.checkout=a.ecommerce.checkout||{};a.ecommerce.checkout.actionField=a.ecommerce.checkout.actionField||{};a.ecommerce.checkout.actionField.step=a.ecommerce.checkout.actionField.step||b.checkoutStep;a.ecommerce.checkout.actionField.option=a.ecommerce.checkout.actionField.option||b.checkoutOption;a.ecommerce.checkout.products=a.ecommerce.checkout.products||b.products;for(j=0;j\u003Ca.ecommerce.checkout.products.length;j++){for(c in config55.customDimProduct)a.ecommerce.checkout.products[j][\"dimension\"+\nc]=a.ecommerce.checkout.products[j][config55.customDimProduct[c]]||\"\";for(d in config55.customMetProduct)a.ecommerce.checkout.products[j][\"metric\"+d]=a.ecommerce.checkout.products[j][config55.customMetProduct[d]]||\"\"}b.eeSend+=1}break;case \"eeRefund\":if(b=config55.getDataLayerObject(\"eeAction\",\"eeRefund\"),b.eeSend=b.eeSend||0,b\u0026\u0026b.eeSend\u003Cconfig55.nbPvTpl){a.ecommerce=a.ecommerce||{};a.ecommerce.refund=a.ecommerce.refund||{};a.ecommerce.refund.actionField=a.ecommerce.refund.actionField||{};a.ecommerce.refund.actionField.id=\na.ecommerce.refund.actionField.id||b.transactionId;a.ecommerce.refund.products=a.ecommerce.refund.products||b.products;for(j=0;j\u003Ca.ecommerce.refund.products.length;j++){for(c in config55.customDimProduct)a.ecommerce.refund.products[j][\"dimension\"+c]=a.ecommerce.refund.products[j][config55.customDimProduct[c]]||\"\";for(d in config55.customMetProduct)a.ecommerce.refund.products[j][\"metric\"+d]=a.ecommerce.refund.products[j][config55.customMetProduct[d]]||\"\"}b.eeSend+=1}}if(",["escape",["macro",5],8,16],"\u0026\u0026",["escape",["macro",6],8,16],")for(a.ecommerce=\na.ecommerce||{},a.ecommerce.purchase=a.ecommerce.purchase||{},a.ecommerce.purchase.actionField=a.ecommerce.purchase.actionField||{},a.ecommerce.purchase.actionField.id=",["escape",["macro",5],8,16],",a.ecommerce.purchase.actionField.revenue=",["escape",["macro",6],8,16],",a.ecommerce.purchase.actionField.affiliation=",["escape",["macro",7],8,16],",a.ecommerce.purchase.actionField.tax=",["escape",["macro",8],8,16],",a.ecommerce.purchase.actionField.shipping=",["escape",["macro",9],8,16],",a.ecommerce.purchase.actionField.coupon=",["escape",["macro",10],8,16],",\na.ecommerce.currencyCode=",["escape",["macro",11],8,16],"||",["escape",["macro",12],8,16],",a.ecommerce.purchase.products=",["escape",["macro",13],8,16],",j=0;j\u003Ca.ecommerce.purchase.products.length;j++){for(c in config55.customDimProduct)a.ecommerce.purchase.products[j][\"dimension\"+c]=a.ecommerce.purchase.products[j][config55.customDimProduct[c]]||\"\";for(d in config55.customMetProduct)a.ecommerce.purchase.products[j][\"metric\"+d]=a.ecommerce.purchase.products[j][config55.customMetProduct[d]]||\"\"}return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.C55||function(){};a.prototype.encodeCookie=a.prototype.encodeCookie||!0;a.prototype.expires=a.prototype.expires||(new Date(+new Date+15552E6)).toUTCString();a.prototype.path=a.prototype.path||\"\/\";a.prototype.domain=a.prototype.domain;a.prototype.loadCookie=a.prototype.loadCookie||function(){document.cookie.match(\"__55\\x3d([^;$]*)\")?this.store=this.encodeCookie?JSON.parse(decodeURIComponent(document.cookie.match(\"__55\\x3d([^;$]*)\")[1])):JSON.parse(document.cookie.match(\"__55\\x3d([^;$]*)\")[1]):\nthis.store={}};a.prototype.loadCookie();a.prototype.saveCookie=a.prototype.saveCookie||function(){window.document.cookie=this.encodeCookie?\"__55\\x3d\"+encodeURIComponent(JSON.stringify(this.store))+\";expires\\x3d\"+this.expires+\";path\\x3d\"+this.path:\"__55\\x3d\"+JSON.stringify(this.store)+\";expires\\x3d\"+this.expires+\";path\\x3d\"+this.path};window.C55=a;window.config55=new a;if(\"undefined\"==typeof b)var b=config55.store.userId;\"undefined\"!=typeof b\u0026\u0026(config55.store.userId=b,config55.saveCookie());return b})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageCategory"
    },{
      "function":"__ctv"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(document.location.hostname.match(\/gallery\\.consumer\\.huawei.com\/i))return document.URL.split(\"gallery.consumer.huawei.com\")[1];if(document.URL.match(\/v3\\\/payment\\\/success\/i))return document.location.pathname;try{var v=\"\/en \/cn \/hk \/tw \/uk \/it \/es \/fr \/de \/nl \/be \/be-fr \/ch \/ch-fr \/ie \/pt \/au \/my \/ph \/sg \/nz \/id \/th \/vn \/mm \/bd \/lk \/kh \/np \/la \/se \/no \/fi \/dk \/pl \/ro \/cz \/hu \/gr \/at \/tr \/ua \/cy \/rs \/sk \/mk \/lt \/lv \/bg \/ee \/hr \/si \/ca \/ca-fr \/il \/latin \/mx \/pe \/co \/ar \/cl \/br \/za \/levant-ar \/levant \/tn \/tn-ar \/ma \/ma-ar \/dz \/dz-ar \/zm \/gh \/in \/om \/om-ar \/bh \/bh-ar \/qa \/qa-ar \/sa \/sa-en \/ae \/ae-en \/eg \/kw \/kw-en \/fa \/pk \/et-en \/mu \/ng \/ke \/lb \/lb-ar \/jo \/jo-ar \/us \/kr \/jp \/mn \/ru \/kz \/by \/az \/ge \/uz \/tj \/tm \/kg\".split(\" \"),\nw=function(c){if(\"homepage\"==",["escape",["macro",16],8,16],")return!0;v.forEach(function(a){if(c.includes(a))return!0});return!1},p=",["escape",["macro",3],8,16],";if(2==p.split(\"\/\").length\u0026\u00260==p.includes(\"?\")\u0026\u0026w(p))return p+\"\/\"}catch(c){}var b=window.C55||function(){};b.prototype.queryParameters=b.prototype.queryParameters||[\"kw55\",\"res55\",\"cat55\"];b.prototype.hash=b.prototype.hash||!0;b.prototype.excludeParams=b.prototype.excludeParams||[];b.prototype.virtualPageValues=b.prototype.virtualPageValues||[\"virtualPageview\"];\nb.prototype.insensitiveWords=b.prototype.insensitiveWords||[\"trackSocial\",\"trackEvent\",\"virtualPageview\"];b.prototype.indexKw=b.prototype.indexKw||function(c,a,d){var e;d=d||0;for(e=c.length;d\u003Ce;d+=1)if(a\u0026\u0026c[d].toString().toLowerCase()===a.toLowerCase())return d;return-1};b.prototype.dataLayerInitiated=b.prototype.dataLayerInitiated||!1;b.prototype.initDataLayer=b.prototype.initDataLayer||function(){for(var c=window.document.getElementsByTagName(\"script\"),a,d=c.length,e=0,f,k=!1,g=this||{};e\u003Cd\u0026\u0026!k;)a=\nc[e].src,\/www\\.googletagmanager\\.com\\\/gtm\\.js\\?\/.test(a)\u0026\u0026a.split(\"id\\x3d\")[1].split(\"\\x26l\\x3d\")[0]===",["escape",["macro",4],8,16],"\u0026\u0026(f=a.split(\"\\x26l\\x3d\")[1],k=!0),e+=1;g.dataLayer=f?window[f]||[]:window.dataLayer||[];g._push=g.dataLayer.push;g.dataLayer.push=function(h){var l=(l=h?h.event:null)?g.indexKw(g.insensitiveWords,l.toLowerCase()):-1;-1!==l\u0026\u0026(h.event=g.insensitiveWords[l]);return g._push.call(g.dataLayer,h)};this.dataLayerInitiated=!0};0==b.prototype.dataLayerInitiated\u0026\u0026b.prototype.initDataLayer();\nb.utils=b.utils||{_log:[]};b.utils.isNative=b.utils.isNative||function(c){var a=\/\\s*\\[native code\\]\\s*\/i;try{return!!c.toString().match(a)}catch(d){return!1}};b.utils.enumerate=b.utils.enumerate||function(c){return function(a){var d,e;if(c)try{return e=Object.keys(a)}catch(f){}e=[];a=a?a.callee?a.slice(a):a:{};for(d in a)a.hasOwnProperty(d)\u0026\u0026e.push(d);return e}}(b.utils.isNative(Object.keys));b.utils.serialize=function(c){var a,d=[],e=\"\\x26\",f=\"\\x3d\";var k=1\u003Carguments.length?arguments:void 0!==c?\nc:{};var g=this.enumerate(k);var h=g.length;for(a=0;a\u003Ch;a+=1){var l=encodeURI(g[a]);k[g[a]]\u0026\u0026(l+=f+encodeURIComponent(k[g[a]]));d.push(l)}return d.join(e).replace(\/%20\/g,\"+\")};b.utils.objectify=b.utils.objectify||function(c){var a={},d=\/\u0026amp;|\u0026\/g,e=\"\\x3d\",f;-1!==c.search(d)?d=c.split(d,-1):c.length?(d={},d[c]=c.toString()):d=\"Array\"===typeof c?[c]:[];var k=this.enumerate(d);var g=k.length;for(f=0;f\u003Cg;f+=1){var h=decodeURI(d[k[f]].replace(\/\\+\/g,\"%20\"));var l=-1!==h.indexOf(e)?h.indexOf(e):c.length;\nvar x=h.split(e,1);h=h.slice(l+1);a[x]=h}return a};b.utils.URLparse=b.utils.URLparse||function(c){var a=document.createElement(\"a\"),d={};a.href=c;d.hash=a.hash;d.params=b.utils.objectify(a.search.slice(1));d.pathname=\"\/\"!==a.pathname[0]?\"\/\"+a.pathname:a.pathname;d.host=a.hostname;d.protocol=a.protocol;d.port=a.port;return d};window.C55=b;window.config55=new b;var q=window.location,n=b.utils.URLparse(q),t=n.pathname,r=n.hash.slice(1),u=n.params,m=\"\";b.page={pagePosition:function(){var c=config55.dataLayer.length;\nfor(--c;0\u003C=c;--c)if(config55.dataLayer[c].page)return c;return-1},queryParams:function(){var c=config55.dataLayer.length,a={},d;for(--c;0\u003C=c;--c)for(d=0;d\u003Cconfig55.queryParameters.length;d+=1)config55.dataLayer[c][config55.queryParameters[d]]\u0026\u0026!a.hasOwnProperty(config55.queryParameters[d])\u0026\u0026(a[config55.queryParameters[d]]=decodeURI(config55.dataLayer[c][config55.queryParameters[d]]).replace(\/(\\s)?[-0-9a-z.+]+(@|%40)[-0-9a-z.+]+\/ig,\"\"));return a},getEventName:function(){return config55.dataLayer[config55.dataLayer.length-\n1]?config55.dataLayer[config55.dataLayer.length-1].event:\"\"},pathname:function(){return-1===b.page.pagePosition()?t:config55.dataLayer[b.page.pagePosition()].page},removeQueryParams:function(c){var a,d=config55.excludeParams.length;for(a=0;a\u003Cd;a++)c.hasOwnProperty(config55.excludeParams[a])\u0026\u0026delete c[config55.excludeParams[a]];return c},getSearch:function(c){c=c||b.page.pathname();var a=b.utils.serialize(b.page.removeQueryParams(u)),d=b.utils.serialize(b.page.removeQueryParams(b.page.queryParams())),\ne=d.split(\"\\x26\"),f;for(f=0;f\u003Ce.length;f+=1)if(\"\"!==e[f]\u0026\u0026a.match(e[f].split(\"\\x3d\")[0])){var k=new RegExp(\"(\\\\?|\\x26|^)\"+e[f].split(\"\\x3d\")[0]+\"([^\\x26]+)(\\x26|$)\",\"gi\");a=a.replace(k,\"\")}a?(c+=\"?\"+a,d\u0026\u0026(c+=\"\\x26\"+d)):d\u0026\u0026(c+=\"?\"+d);return c},init:function(){-1==config55.virtualPageValues.indexOf(b.page.getEventName())?(m=b.page.getSearch(),config55.hash\u0026\u0026r\u0026\u0026(m=m!==b.page.pathname()?m+(\"\\x26\"+r):m+(\"?\"+r))):(-1==b.page.pagePosition()?(q=window.location,\"QUICK_PREVIEW\"==",["escape",["macro",17],8,16],"\u0026\u0026console.log(\"the variable page is undefined on virtualPageview\")):\nq=config55.dataLayer[b.page.pagePosition()].page,n=b.utils.URLparse(q),t=n.pathname,r=n.hash.slice(1),u=n.params,m=b.page.getSearch(t));return m=decodeURI(m)}};return b.page.init()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.C55||function(){};a.prototype.autoExcludeRefOnTransac=a.prototype.autoExcludeRefOnTransac||!0;window.C55=a;window.config55=new a;a=",["escape",["macro",5],8,16],";var d=",["escape",["macro",6],8,16],",b=document.referrer;if(a\u0026\u0026d\u0026\u0026config55.autoExcludeRefOnTransac)try{b=void 0}catch(c){}else if(b.match(document.location.hostname))try{b=void 0}catch(c){}else if(\"\"==b)try{b=void 0}catch(c){}return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(c){for(var a=c.get(\"hitPayload\").split(\"\\x26\"),b=0;b\u003Ca.length;b++){var d=a[b].split(\"\\x3d\");\"ClientIdOverriddenByCustomTask\"==d[1]\u0026\u0026(a[b]=d[0]+\"\\x3d\"+c.get(\"clientId\"))}return a}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(c){var a=window.C55||function(){};a.prototype.customTask=a.prototype.customTask||[",["escape",["macro",20],8,16],"];window.C55=a;window.config55=new a;a=\"_\"+c.get(\"trackingId\")+\"_originalSendTask\";var f=window[a]=window[a]||c.get(\"sendHitTask\");c.set(\"sendHitTask\",function(b){for(var d=0;d\u003Cconfig55.customTask.length;d++)try{var e=config55.customTask[d](b);-1!=e.indexOf(\"\\x26\")?b.set(\"hitPayload\",e,!0):b.set(\"hitPayload\",e.join(\"\\x26\"),!0)}catch(g){console.log(g)}f(b)})}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={\"consumer.huawei.com\/au\/\":!0,\"consumer.huawei.com\/be\/\":!0,\"consumer.huawei.com\/be-fr\/\":!0,\"consumer.huawei.com\/ch\/\":!0,\"consumer.huawei.com\/ch-fr\/\":!0,\"consumer.huawei.com\/es\/\":!0,\"consumer.huawei.com\/fr\/\":!0,\"consumer.huawei.com\/ie\/\":!0,\"consumer.huawei.com\/it\/\":!0,\"consumer.huawei.com\/nl\/\":!0,\"consumer.huawei.com\/pt\/\":!0,\"consumer.huawei.com\/uk\/\":!0,\"consumer.huawei.com\/at\/\":!0,\"consumer.huawei.com\/bg\/\":!0,\"consumer.huawei.com\/ca\/\":!0,\"consumer.huawei.com\/ca-fr\/\":!0,\"consumer.huawei.com\/cy\/\":!0,\n\"consumer.huawei.com\/cz\/\":!0,\"consumer.huawei.com\/dk\/\":!0,\"consumer.huawei.com\/ee\/\":!0,\"consumer.huawei.com\/fi\/\":!0,\"consumer.huawei.com\/gr\/\":!0,\"consumer.huawei.com\/hr\/\":!0,\"consumer.huawei.com\/hu\/\":!0,\"consumer.huawei.com\/il\/\":!0,\"consumer.huawei.com\/lt\/\":!0,\"consumer.huawei.com\/lv\/\":!0,\"consumer.huawei.com\/mk\/\":!0,\"consumer.huawei.com\/no\/\":!0,\"consumer.huawei.com\/pl\/\":!0,\"consumer.huawei.com\/ro\/\":!0,\"consumer.huawei.com\/rs\/\":!0,\"consumer.huawei.com\/se\/\":!0,\"consumer.huawei.com\/si\/\":!0,\"consumer.huawei.com\/sk\/\":!0,\n\"consumer.huawei.com\/ua\/\":!0};a:{for(var b in a)if(-1!=document.URL.indexOf(b)){a=a[b];break a}a=void 0}return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(document.URL.match(\/consumer\\.huawei\\.com\\\/fr\/i))return 3419E4})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.google_tag_manager[\"GTM-MBP7H56\"].dataLayer.get(\"OptanonActiveGroups\");return!a||a.match(\/,4,\/i)?!0:!1})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"siteSearchResults"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userId"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.C55||function(){};a.prototype.adblockMaxLoop=a.prototype.adblockMaxLoop||5;a.prototype.adblockActivated=a.prototype.adblockActivated||\"Adblock activate\";a.prototype.adblockDeactivated=a.prototype.adblockDeactivated||\"Adblock deactivate\";window.C55=a;window.config55=new a;var c,d=0,e;a.adblock={bait:null,baitClass:\"pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links\",baitStyle:\"width: 1px!important; height: 1px!important; position: absolute!important;left: -10000px!important; top: -1000px!important;\",\ncreateBait:function(){if(!a.adblock.bait){var b=document.createElement(\"div\");b.setAttribute(\"class\",a.adblock.baitClass);b.setAttribute(\"style\",a.adblock.baitStyle);a.adblock.bait=document.body.appendChild(b)}},removeBait:function(){document.body.removeChild(a.adblock.bait);a.adblock.bait=null},stopLoop:function(){c=null;d=0},checkBait:function(){var b=!1;if(!window.document.body.getAttribute(\"abp\")\u0026\u0026a.adblock.bait.offsetParent\u0026\u0026a.adblock.bait.offsetHeight\u0026\u0026a.adblock.bait.offsetLeft\u0026\u0026a.adblock.bait.offsetTop\u0026\u0026\na.adblock.bait.offsetWidth\u0026\u0026a.adblock.bait.clientHeight\u0026\u0026a.adblock.bait.clientWidth)if(window.getComputedStyle){var f=window.getComputedStyle(a.adblock.bait,null);!f||\"none\"!==f.getPropertyValue(\"display\")\u0026\u0026\"hidden\"!==f.getPropertyValue(\"visibility\")||(b=!0)}else\"none\"==a.adblock.bait.currentStyle.display\u0026\u0026\"hidden\"===a.adblock.bait.currentStyle.visibility\u0026\u0026(b=!0);else b=!0;c\u0026\u0026(d++,d\u003Econfig55.adblockMaxLoop?(a.adblock.stopLoop(),c=0):a.adblock.stopLoop(c));b?(a.adblock.stopLoop(),a.adblock.removeBait(),\ne=config55.adblockActivated):c||(a.adblock.removeBait(),e=config55.adblockDeactivated)},init:function(){a.adblock.createBait();d=0;a.adblock.checkBait()}};a.adblock.init();return e})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"gclid",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"siteCountryName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"siteCountryCode"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.location.pathname.match(\/\\\/en\\\/\/i)||document.location.hostname.match(\/gallery\\.consumer\\.huawei\\.com\/i)?\"EN\":",["escape",["macro",30],8,16],"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"siteLanguage"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productMktName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productCategory"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){function h(b){b+=\"\\x3d\";var c=decodeURIComponent(document.cookie);c=c.split(\";\");for(var d=0;d\u003Cc.length;d++){for(var a=c[d];\" \"==a.charAt(0);)a=a.substring(1);if(0==a.indexOf(b))return a.substring(b.length,a.length)}return\"\"}function e(b){try{return JSON.parse(h(b))}catch(c){return{}}}var f=e(\"first_utm\").src,g=e(\"first_utm\").mdm;if(f\u0026\u0026g)return f+\"\/\"+g})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){function h(b){b+=\"\\x3d\";var c=decodeURIComponent(document.cookie);c=c.split(\";\");for(var d=0;d\u003Cc.length;d++){for(var a=c[d];\" \"==a.charAt(0);)a=a.substring(1);if(0==a.indexOf(b))return a.substring(b.length,a.length)}return\"\"}function e(b){try{return JSON.parse(h(b))}catch(c){return{}}}var f=e(\"last_utm\").src,g=e(\"last_utm\").mdm;if(f\u0026\u0026g)return f+\"\/\"+g})();"]
    },{
      "function":"__r"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"hitTimeStamp"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"loginStatus"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"discountStatus"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"deliveryMethod"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"shippingType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"paymentMethod"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"billingCountry"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"billingPostcode"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"deliveryCountry"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"deliveryPostcode"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"checkoutAccountStatus"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"accountStatus"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"emailSubject"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"emailCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"emailProduct"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"ic_medium",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"ic_source",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"ic_campaign",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){function n(){function p(){k||(k=!0,window.CS_CONF\u0026\u0026(CS_CONF.integrations=CS_CONF.integrations||[],CS_CONF.integrations.push(\"Google Analytics\")))}function l(b){c=Math.random()+\"_\"+Date.now();b\u0026\u0026(c=b);b=0;for(var a=document.domain,e=a.split(\".\"),f=\"_gd\"+(new Date).getTime();b\u003Ce.length-1\u0026\u0026-1==document.cookie.indexOf(f+\"\\x3d\"+f);)a=e.slice(-1-++b).join(\".\"),document.cookie=f+\"\\x3d\"+f+\";domain\\x3d\"+a+\";\";document.cookie=f+\"\\x3d;expires\\x3dThu, 01 Jan 1970 00:00:01 GMT;domain\\x3d\"+a+\";\";b=\na;a=new Date;e=a.getTime();e+=18E5;a.setTime(e);document.cookie=m+\"\\x3d\"+c+\"; expires\\x3d\"+a.toUTCString()+\";path\\x3d\/;domain\\x3d\"+b;_uxa.push([\"trackDynamicVariable\",{key:\"csMatchingKey\",value:c}])}var k=!1;window._uxa=window._uxa||[];_uxa.push([\"afterPageView\",p]);var c=null,m=\"_cs_mk\",d=\"_cs_id\",h=\"; \"+document.cookie;if(h){var g=h.split(\"; \"+m+\"\\x3d\");d=h.split(\"; \"+d+\"\\x3d\");if(1\u003Cg.length\u0026\u00261\u003Cd.length)return c=g[1].split(\";\")[0];1==g.length?l():(d=\"\",g\u0026\u0026(d=g[1].split(\";\")[0]),l(d))}return c}return n()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"UA-7728030-19\"})();"]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","userId","value",["macro",15]],["map","fieldName","allowLinker","value","false"],["map","fieldName","page","value",["macro",18]],["map","fieldName","referrer","value",["macro",19]],["map","fieldName","customTask","value",["macro",21]],["map","fieldName","forceSSL","value","true"],["map","fieldName","anonymizeIp","value",["macro",22]],["map","fieldName","cookieExpires","value",["macro",23]],["map","fieldName","allowAdFeatures","value",["macro",24]]],
      "vtp_useHashAutoLink":false,
      "vtp_metric":["list",["map","index","1","metric",["macro",25]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",26]],["map","index","3","dimension",["macro",27]],["map","index","4","dimension",["template",["macro",4],"_",["macro",17]]],["map","index","5","dimension",["macro",28]],["map","index","6","dimension",["macro",25]],["map","index","7","dimension",["macro",29]],["map","index","8","dimension",["macro",31]],["map","index","9","dimension",["macro",32]],["map","index","2","dimension","ClientIdOverriddenByCustomTask"],["map","index","10","dimension",["macro",33]],["map","index","11","dimension",["macro",34]],["map","index","12","dimension",["macro",16]],["map","index","13","dimension",["macro",35]],["map","index","14","dimension",["macro",36]],["map","index","15","dimension",["macro",37]],["map","index","16","dimension",["macro",38]],["map","index","17","dimension",["macro",39]],["map","index","18","dimension",["macro",40]],["map","index","19","dimension",["macro",41]],["map","index","20","dimension",["macro",42]],["map","index","21","dimension",["macro",43]],["map","index","22","dimension",["macro",44]],["map","index","23","dimension",["macro",45]],["map","index","24","dimension",["macro",46]],["map","index","25","dimension",["macro",47]],["map","index","26","dimension",["macro",48]],["map","index","27","dimension",["macro",49]],["map","index","28","dimension",["macro",50]],["map","index","29","dimension",["macro",51]],["map","index","30","dimension",["macro",52]],["map","index","31","dimension",["macro",30]],["map","index","35","dimension",["macro",53]],["map","index","36","dimension",["macro",54]],["map","index","37","dimension",["macro",55]],["map","index","39","dimension",["macro",56]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",57],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventCategory"
    },{
      "function":"__e"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",59],8,16],".match(\/checkout|purchase\/i)\u0026\u0026",["escape",["macro",60],8,16],".match(\/fire_event\/i)?!0:!1})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLabel"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.C55||function(){};a.prototype.customDimProduct=a.prototype.customDimProduct||{};a.prototype.customMetProduct=a.prototype.customMetProduct||{};a.prototype.insensitiveWords=a.prototype.insensitiveWords||[\"trackSocial\",\"trackEvent\",\"virtualPageview\"];a.prototype.indexKw=a.prototype.indexKw||function(c,f,b){var e;b=b||0;for(e=c.length;b\u003Ce;b+=1)if(f\u0026\u0026c[b].toString().toLowerCase()===f.toLowerCase())return b;return-1};a.prototype.dataLayerInitiated=a.prototype.dataLayerInitiated||\n!1;a.prototype.initDataLayer=a.prototype.initDataLayer||function(){for(var c=window.document.getElementsByTagName(\"script\"),f,b=c.length,e=0,l,m=!1,g=this||{};e\u003Cb\u0026\u0026!m;)f=c[e].src,\/www\\.googletagmanager\\.com\\\/gtm\\.js\\?\/.test(f)\u0026\u0026f.split(\"id\\x3d\")[1].split(\"\\x26l\\x3d\")[0]===",["escape",["macro",4],8,16],"\u0026\u0026(l=f.split(\"\\x26l\\x3d\")[1],m=!0),e+=1;g.dataLayer=l?window[l]||[]:window.dataLayer||[];g._push=g.dataLayer.push;g.dataLayer.push=function(n){var p=(p=n?n.event:null)?g.indexKw(g.insensitiveWords,p.toLowerCase()):\n-1;-1!==p\u0026\u0026(n.event=g.insensitiveWords[p]);return g._push.call(g.dataLayer,n)};this.dataLayerInitiated=!0};0==a.prototype.dataLayerInitiated\u0026\u0026a.prototype.initDataLayer();a.prototype.nodeExplorer=function(c,f,b,e){var l,m=e||0;if(c\u0026\u0026void 0!==c[f]\u0026\u0026(b\u0026\u0026c[f]===b||!b))return c;if(c instanceof Array\u0026\u00265\u003Em)for(l=c.length-1;0\u003C=l;--l){if(e=this.nodeExplorer(c[l],f,b,m+1),void 0!==e)return e}else if(\"object\"===typeof c\u0026\u00265\u003Em)for(l in c)if(c.hasOwnProperty(l)\u0026\u0026(e=this.nodeExplorer(c[l],f,b,m+1),void 0!==e))return e};\na.prototype.getDataLayerObject=function(c,f){return(c=this.nodeExplorer(this.dataLayer,c,f))?c:!1};a.prototype.getDataLayerListById=function(c){var f=function(b,e,l,m){var g;m=m||0;b\u0026\u0026void 0!==b[e]\u0026\u0026b[e]\u0026\u0026l.push(b);if(b instanceof Array\u0026\u00265\u003Em)for(g=b.length-1;0\u003C=g;--g){if(r=f(b[g],e,l,m+1),void 0!==r)return r}else if(\"object\"===typeof b\u0026\u00265\u003Em)for(g in b)if(b.hasOwnProperty(g)\u0026\u0026(r=f(b[g],e,l,m+1),void 0!==r))return r;return l};return f(this.dataLayer,c,[])};window.C55=a;window.config55=new a;a={};var d=\nconfig55.getDataLayerListById(\"event\")[0];var q=config55.getDataLayerListById(\"ecommerce\")[0];if(q\u0026\u0026q.ecommerce)return a.ecommerce=q.ecommerce||a.ecommerce||{},a;switch(d.event){case \"eeListView\":if(d=config55.getDataLayerObject(\"event\",\"eeListView\"))for(a.ecommerce=a.ecommerce||{},a.ecommerce.currencyCode=a.ecommerce.currencyCode||d.currencyCode,a.ecommerce.impressions=a.ecommerce.impressions||d.products,j=0;j\u003Ca.ecommerce.impressions.length;j++){for(var h in config55.customDimProduct)a.ecommerce.impressions[j][\"dimension\"+\nh]=a.ecommerce.impressions[j][config55.customDimProduct[h]]||\"\";for(var k in config55.customMetProduct)a.ecommerce.impressions[j][\"metric\"+k]=a.ecommerce.impressions[j][config55.customMetProduct[k]]||\"\"}break;case \"eeListClick\":if(d=config55.getDataLayerObject(\"event\",\"eeListClick\"))for(a.ecommerce={},a.ecommerce.click={},a.ecommerce.click.actionField={},a.ecommerce.click.actionField.list=d.list,a.ecommerce.click.products=d.products,j=0;j\u003Ca.ecommerce.click.products.length;j++){for(h in config55.customDimProduct)a.ecommerce.click.products[j][\"dimension\"+\nh]=a.ecommerce.click.products[j][config55.customDimProduct[h]]||\"\";for(k in config55.customMetProduct)a.ecommerce.click.products[j][\"metric\"+k]=a.ecommerce.click.products[j][config55.customMetProduct[k]]||\"\"}break;case \"eePromoView\":if(d=config55.getDataLayerObject(\"event\",\"eePromoView\"))a.ecommerce={},a.ecommerce.promoView={},a.ecommerce.promoView.promotions=d.promotions;break;case \"eePromoClick\":if(d=config55.getDataLayerObject(\"event\",\"eePromoClick\"))a.ecommerce={},a.ecommerce.promoClick={},a.ecommerce.promoClick.promotions=\nd.promotions;break;case \"addToCart\":if(d=config55.getDataLayerObject(\"event\",\"addToCart\"))for(a.ecommerce={},a.ecommerce.currencyCode=d.currencyCode,a.ecommerce.add={},a.ecommerce.add.products=d.products,j=0;j\u003Ca.ecommerce.add.products.length;j++){for(h in config55.customDimProduct)a.ecommerce.add.products[j][\"dimension\"+h]=a.ecommerce.add.products[j][config55.customDimProduct[h]]||\"\";for(k in config55.customMetProduct)a.ecommerce.add.products[j][\"metric\"+k]=a.ecommerce.add.products[j][config55.customMetProduct[k]]||\n\"\"}break;case \"addToCartFromBuyNow\":if(d=config55.getDataLayerObject(\"event\",\"addToCartFromBuyNow\"))for(a.ecommerce={},a.ecommerce.currencyCode=d.currencyCode,a.ecommerce.add={},a.ecommerce.add.products=d.products,j=0;j\u003Ca.ecommerce.add.products.length;j++){for(h in config55.customDimProduct)a.ecommerce.add.products[j][\"dimension\"+h]=a.ecommerce.add.products[j][config55.customDimProduct[h]]||\"\";for(k in config55.customMetProduct)a.ecommerce.add.products[j][\"metric\"+k]=a.ecommerce.add.products[j][config55.customMetProduct[k]]||\n\"\"}break;case \"removeFromCart\":if(d=config55.getDataLayerObject(\"event\",\"removeFromCart\"))for(a.ecommerce={},a.ecommerce.remove={},a.ecommerce.remove.products=d.products,j=0;j\u003Ca.ecommerce.remove.products.length;j++){for(h in config55.customDimProduct)a.ecommerce.remove.products[j][\"dimension\"+h]=a.ecommerce.remove.products[j][config55.customDimProduct[h]]||\"\";for(k in config55.customMetProduct)a.ecommerce.remove.products[j][\"metric\"+k]=a.ecommerce.remove.products[j][config55.customMetProduct[k]]||\n\"\"}break;case \"eeCheckoutOption\":if(d=config55.getDataLayerObject(\"event\",\"eeCheckoutOption\"))a.ecommerce={},a.ecommerce.checkout_option={},a.ecommerce.checkout_option.actionField={},a.ecommerce.checkout_option.actionField.step=d.checkoutStep,a.ecommerce.checkout_option.actionField.option=d.checkoutOption}if(",["escape",["macro",5],8,16],"\u0026\u0026",["escape",["macro",6],8,16],")for(a.ecommerce=a.ecommerce||{},a.ecommerce.purchase=a.ecommerce.purchase||{},a.ecommerce.purchase.actionField=a.ecommerce.purchase.actionField||{},\na.ecommerce.purchase.actionField.id=",["escape",["macro",5],8,16],",a.ecommerce.purchase.actionField.revenue=",["escape",["macro",6],8,16],",a.ecommerce.purchase.actionField.affiliation=",["escape",["macro",7],8,16],",a.ecommerce.purchase.actionField.tax=",["escape",["macro",8],8,16],",a.ecommerce.purchase.actionField.shipping=",["escape",["macro",9],8,16],",a.ecommerce.purchase.actionField.coupon=",["escape",["macro",10],8,16],",a.ecommerce.currencyCode=",["escape",["macro",11],8,16],"||",["escape",["macro",12],8,16],",a.ecommerce.purchase.products=",["escape",["macro",13],8,16],",j=0;j\u003C\na.ecommerce.purchase.products.length;j++){for(h in config55.customDimProduct)a.ecommerce.purchase.products[j][\"dimension\"+h]=a.ecommerce.purchase.products[j][config55.customDimProduct[h]]||\"\";for(k in config55.customMetProduct)a.ecommerce.purchase.products[j][\"metric\"+k]=a.ecommerce.purchase.products[j][config55.customMetProduct[k]]||\"\"}return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var g=function(a,b,e,c){var d,f=c||0;if(a\u0026\u0026void 0!==a[b]\u0026\u0026(e\u0026\u0026a[b]===e||!e))return a;if(a instanceof Array\u0026\u00265\u003Ef)for(d=a.length-1;0\u003C=d;--d){if(c=g(a[d],b,e,f+1),void 0!==c)return c}else if(\"object\"===typeof a\u0026\u00265\u003Ef)for(d in a)if(a.hasOwnProperty(d)\u0026\u0026(c=g(a[d],b,e,f+1),void 0!==c))return c},h=function(a){var b=g(window.dataLayer,a);return b?b[a]:\"\"};return h(\"name\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"nextPage"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{if(\"undefined\"!==typeof ",["escape",["macro",66],8,16],"\u0026\u0026\"\"!==",["escape",["macro",66],8,16],")return document.location=",["escape",["macro",66],8,16],"}catch(a){}})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoStep"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"fieldName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"buttonPosition"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"clickedCountryCode"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"originCountryCode"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"documentName"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",73],8,16],";return null!=a\u0026\u0026null==",["escape",["macro",76],8,16],"?\"download\":\"support download\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"buttonName"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",73],8,16],";return null!=a?",["escape",["macro",78],8,16],":\"success\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageName"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",73],8,16],";return null!=a?",["escape",["macro",80],8,16],"+\"_\"+a:",["escape",["macro",76],8,16],"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"accountType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"socialMedia"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productPosition"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"iconName"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",33],8,16],"?",["escape",["macro",33],8,16],"+\"_\"+",["escape",["macro",84],8,16],":",["escape",["macro",84],8,16],"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecPlatform"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"countryCode"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"bgName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"bannerName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"bannerPosition"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"filterCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"filterName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"storeName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"courseName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"courseTime"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"kw55"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"siteSearchCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"choseProductMktName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"otherProductMktName"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"nextBannerName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"previousBannerName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"swipeDirection"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"serviceLink"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"accountInteraction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"linkName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"moduelname"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"lastpagename"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",78],8,16],",a=\"\";\"go\"==b\u0026\u0026(a=\"en\"==$(\".ip-jump-go\").attr(\"path\")?\"country selection\":$(\".ipJump-select ul li[path\\x3d'\"+$(\".ip-jump-go\").attr(\"path\")+\"']\").attr(\"path\"));return a?a:b})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pop_upName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"subheaderSection"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"iconPosition"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"linkPosition"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"paymentCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"paymentBank"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"recommendedProductMktName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"couponCode"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"linkDestination"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"siteModule"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"ecommerce.checkout.actionField.step"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",122],8,16],";return\"function\"==typeof $\u0026\u0026(a=$(a).parents(\"div.one-column-content\")||!1)?a=$(a).find(\"div.content-text div.one-column-content-title\").text().trim():!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.C55||function(){};a.prototype.customDimProduct=a.prototype.customDimProduct||{};a.prototype.customMetProduct=a.prototype.customMetProduct||{};a.prototype.insensitiveWords=a.prototype.insensitiveWords||[\"trackSocial\",\"trackEvent\",\"virtualPageview\"];a.prototype.indexKw=a.prototype.indexKw||function(c,e,b){var d;b=b||0;for(d=c.length;b\u003Cd;b+=1)if(e\u0026\u0026c[b].toString().toLowerCase()===e.toLowerCase())return b;return-1};a.prototype.dataLayerInitiated=a.prototype.dataLayerInitiated||\n!1;a.prototype.initDataLayer=a.prototype.initDataLayer||function(){for(var c=window.document.getElementsByTagName(\"script\"),e,b=c.length,d=0,g,h=!1,f=this||{};d\u003Cb\u0026\u0026!h;)e=c[d].src,\/www\\.googletagmanager\\.com\\\/gtm\\.js\\?\/.test(e)\u0026\u0026e.split(\"id\\x3d\")[1].split(\"\\x26l\\x3d\")[0]===",["escape",["macro",4],8,16],"\u0026\u0026(g=e.split(\"\\x26l\\x3d\")[1],h=!0),d+=1;f.dataLayer=g?window[g]||[]:window.dataLayer||[];f._push=f.dataLayer.push;f.dataLayer.push=function(l){var m=(m=l?l.event:null)?f.indexKw(f.insensitiveWords,m.toLowerCase()):\n-1;-1!==m\u0026\u0026(l.event=f.insensitiveWords[m]);return f._push.call(f.dataLayer,l)};this.dataLayerInitiated=!0};0==a.prototype.dataLayerInitiated\u0026\u0026a.prototype.initDataLayer();a.prototype.nodeExplorer=function(c,e,b,d){var g,h=d||0;if(c\u0026\u0026void 0!==c[e]\u0026\u0026(b\u0026\u0026c[e]===b||!b))return c;if(c instanceof Array\u0026\u00265\u003Eh)for(g=c.length-1;0\u003C=g;--g){if(d=this.nodeExplorer(c[g],e,b,h+1),void 0!==d)return d}else if(\"object\"===typeof c\u0026\u00265\u003Eh)for(g in c)if(c.hasOwnProperty(g)\u0026\u0026(d=this.nodeExplorer(c[g],e,b,h+1),void 0!==d))return d};\na.prototype.getDataLayerObject=function(c,e){return(c=this.nodeExplorer(this.dataLayer,c,e))?c:!1};a.prototype.getDataLayerListById=function(c){var e=function(b,d,g,h){var f;h=h||0;b\u0026\u0026void 0!==b[d]\u0026\u0026b[d]\u0026\u0026g.push(b);if(b instanceof Array\u0026\u00265\u003Eh)for(f=b.length-1;0\u003C=f;--f){if(r=e(b[f],d,g,h+1),void 0!==r)return r}else if(\"object\"===typeof b\u0026\u00265\u003Eh)for(f in b)if(b.hasOwnProperty(f)\u0026\u0026(r=e(b[f],d,g,h+1),void 0!==r))return r;return g};return e(this.dataLayer,c,[])};window.C55=a;window.config55=new a;a={};config55.getDataLayerListById(\"event\");\nvar k=config55.getDataLayerListById(\"ecommerce\")[0];k\u0026\u0026k.ecommerce\u0026\u0026(a.ecommerce=k.ecommerce||a.ecommerce||{});if(",["escape",["macro",5],8,16],"\u0026\u0026",["escape",["macro",6],8,16],")for(a.ecommerce=a.ecommerce||{},a.ecommerce.purchase=a.ecommerce.purchase||{},a.ecommerce.purchase.actionField=a.ecommerce.purchase.actionField||{},a.ecommerce.purchase.actionField.id=",["escape",["macro",5],8,16],",a.ecommerce.purchase.actionField.revenue=",["escape",["macro",6],8,16],",a.ecommerce.purchase.actionField.affiliation=",["escape",["macro",7],8,16],",a.ecommerce.purchase.actionField.tax=\n",["escape",["macro",8],8,16],",a.ecommerce.purchase.actionField.shipping=",["escape",["macro",9],8,16],",a.ecommerce.purchase.actionField.coupon=",["escape",["macro",10],8,16],",a.ecommerce.currencyCode=",["escape",["macro",11],8,16],"||",["escape",["macro",12],8,16],",k=",["escape",["macro",13],8,16],",void 0!=k?a.ecommerce.purchase.products=k:a.ecommerce.checkout?(a.ecommerce.purchase.products=a.ecommerce.checkout.products,a.ecommerce.checkout=void 0):a.ecommerce.purchase.products=a.ecommerce.purchase.products||[],j=0;j\u003Ca.ecommerce.purchase.products.length;j++){for(var n in config55.customDimProduct)a.ecommerce.purchase.products[j][\"dimension\"+\nn]=a.ecommerce.checkout.products[j][config55.customDimProduct[n]]||\"\";for(var p in config55.customMetProduct)a.ecommerce.purchase.products[j][\"metric\"+p]=a.ecommerce.checkout.products[j][config55.customMetProduct[p]]||\"\"}return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",16],8,16],";return a=\"product-detail\"==a?\"product details\":\"product-listing\"==a?\"product list\":\"product-detail_select\"==a?\"product select\":\"campaign\"==a?\"campaign page\":a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",126],8,16],"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ProductPageCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"previousProductMktName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"nextProductMktName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"subButtonName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"tabName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"percentage"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.URL.match(\/\\.huawei\\.com\\\/ph\/i)||document.URL.match(\/\\.huawei\\.com\\\/za\/i)||document.URL.match(\/\\.huawei\\.com\\\/sa\/i)||document.URL.match(\/\\.huawei\\.com\\\/sa-en\/i)||document.URL.match(\/\\.huawei\\.com\\\/th\/i)?\"true\":!1})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"chapter1"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"chapter2"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"chapter3"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a,b=document.URL,c=[[\"consumer.huawei.com\/en\/\",\"GTM-TRG4Z8Z\"],[\"consumer.huawei.com\/cn\/\",\"GTM-PQCNHSV\"],[\"consumer.huawei.com\/hk\/\",\"GTM-PQCNHSV\"],[\"consumer.huawei.com\/tw\/\",\"GTM-PQCNHSV\"],[\"consumer.huawei.com\/au\/\",\"GTM-WZ2XTFN\"],[\"consumer.huawei.com\/be\/\",\"GTM-WZ2XTFN\"],[\"consumer.huawei.com\/be-fr\/\",\"GTM-WZ2XTFN\"],[\"consumer.huawei.com\/ch\/\",\"GTM-WZ2XTFN\"],[\"consumer.huawei.com\/ch-fr\/\",\"GTM-WZ2XTFN\"],[\"consumer.huawei.com\/de\/\",\"GTM-WZ2XTFN\"],[\"consumer.huawei.com\/es\/\",\"GTM-WZ2XTFN\"],\n[\"consumer.huawei.com\/fr\/\",\"GTM-WZ2XTFN\"],[\"consumer.huawei.com\/ie\/\",\"GTM-WZ2XTFN\"],[\"consumer.huawei.com\/it\/\",\"GTM-WZ2XTFN\"],[\"consumer.huawei.com\/nl\/\",\"GTM-WZ2XTFN\"],[\"consumer.huawei.com\/pt\/\",\"GTM-WZ2XTFN\"],[\"consumer.huawei.com\/uk\/\",\"GTM-WZ2XTFN\"],[\"consumer.huawei.com\/at\/\",\"GTM-N8QP5HC\"],[\"consumer.huawei.com\/bg\/\",\"GTM-N8QP5HC\"],[\"consumer.huawei.com\/ca\/\",\"GTM-N8QP5HC\"],[\"consumer.huawei.com\/ca-fr\/\",\"GTM-N8QP5HC\"],[\"consumer.huawei.com\/cy\/\",\"GTM-N8QP5HC\"],[\"consumer.huawei.com\/cz\/\",\"GTM-N8QP5HC\"],\n[\"consumer.huawei.com\/dk\/\",\"GTM-N8QP5HC\"],[\"consumer.huawei.com\/ee\/\",\"GTM-N8QP5HC\"],[\"consumer.huawei.com\/fi\/\",\"GTM-N8QP5HC\"],[\"consumer.huawei.com\/gr\/\",\"GTM-N8QP5HC\"],[\"consumer.huawei.com\/hr\/\",\"GTM-N8QP5HC\"],[\"consumer.huawei.com\/hu\/\",\"GTM-N8QP5HC\"],[\"consumer.huawei.com\/il\/\",\"GTM-N8QP5HC\"],[\"consumer.huawei.com\/lt\/\",\"GTM-N8QP5HC\"],[\"consumer.huawei.com\/lv\/\",\"GTM-N8QP5HC\"],[\"consumer.huawei.com\/mk\/\",\"GTM-N8QP5HC\"],[\"consumer.huawei.com\/no\/\",\"GTM-N8QP5HC\"],[\"consumer.huawei.com\/pl\/\",\"GTM-N8QP5HC\"],\n[\"consumer.huawei.com\/ro\/\",\"GTM-N8QP5HC\"],[\"consumer.huawei.com\/rs\/\",\"GTM-N8QP5HC\"],[\"consumer.huawei.com\/se\/\",\"GTM-N8QP5HC\"],[\"consumer.huawei.com\/si\/\",\"GTM-N8QP5HC\"],[\"consumer.huawei.com\/sk\/\",\"GTM-N8QP5HC\"],[\"consumer.huawei.com\/tr\/\",\"GTM-N8QP5HC\"],[\"consumer.huawei.com\/ua\/\",\"GTM-N8QP5HC\"],[\"consumer.huawei.com\/bd\/\",\"GTM-TJ7ZZX8\"],[\"consumer.huawei.com\/id\/\",\"GTM-TJ7ZZX8\"],[\"consumer.huawei.com\/kh\/\",\"GTM-TJ7ZZX8\"],[\"consumer.huawei.com\/la\/\",\"GTM-TJ7ZZX8\"],[\"consumer.huawei.com\/lk\/\",\"GTM-TJ7ZZX8\"],\n[\"consumer.huawei.com\/mm\/\",\"GTM-TJ7ZZX8\"],[\"consumer.huawei.com\/my\/\",\"GTM-TJ7ZZX8\"],[\"consumer.huawei.com\/np\/\",\"GTM-TJ7ZZX8\"],[\"consumer.huawei.com\/nz\/\",\"GTM-TJ7ZZX8\"],[\"consumer.huawei.com\/ph\/\",\"GTM-TJ7ZZX8\"],[\"consumer.huawei.com\/sg\/\",\"GTM-TJ7ZZX8\"],[\"consumer.huawei.com\/th\/\",\"GTM-TJ7ZZX8\"],[\"consumer.huawei.com\/vn\/\",\"GTM-TJ7ZZX8\"],[\"consumer.huawei.com\/mn\/\",\"GTM-TTH926G\"],[\"consumer.huawei.com\/ru\/\",\"GTM-TTH926G\"],[\"consumer.huawei.com\/kz\/\",\"GTM-TTH926G\"],[\"consumer.huawei.com\/by\/\",\"GTM-TTH926G\"],\n[\"consumer.huawei.com\/az\/\",\"GTM-TTH926G\"],[\"consumer.huawei.com\/ge\/\",\"GTM-TTH926G\"],[\"consumer.huawei.com\/uz\/\",\"GTM-TTH926G\"],[\"consumer.huawei.com\/tj\/\",\"GTM-TTH926G\"],[\"consumer.huawei.com\/tm\/\",\"GTM-TTH926G\"],[\"consumer.huawei.com\/kg\/\",\"GTM-TTH926G\"],[\"consumer.huawei.com\/ar\/\",\"GTM-NF4GDWB\"],[\"consumer.huawei.com\/br\/\",\"GTM-NF4GDWB\"],[\"consumer.huawei.com\/cl\/\",\"GTM-NF4GDWB\"],[\"consumer.huawei.com\/co\/\",\"GTM-NF4GDWB\"],[\"consumer.huawei.com\/latin\/\",\"GTM-NF4GDWB\"],[\"consumer.huawei.com\/mx\/\",\"GTM-NF4GDWB\"],\n[\"consumer.huawei.com\/pe\/\",\"GTM-NF4GDWB\"],[\"consumer.huawei.com\/ae\/\",\"GTM-N77KTJD\"],[\"consumer.huawei.com\/ae-en\/\",\"GTM-N77KTJD\"],[\"consumer.huawei.com\/bh\/\",\"GTM-N77KTJD\"],[\"consumer.huawei.com\/bh-ar\/\",\"GTM-N77KTJD\"],[\"consumer.huawei.com\/dz\/\",\"GTM-N77KTJD\"],[\"consumer.huawei.com\/dz-ar\/\",\"GTM-N77KTJD\"],[\"consumer.huawei.com\/eg\/\",\"GTM-N77KTJD\"],[\"consumer.huawei.com\/eg-en\/\",\"GTM-N77KTJD\"],[\"consumer.huawei.com\/et-en\/\",\"GTM-N77KTJD\"],[\"consumer.huawei.com\/fa\/\",\"GTM-N77KTJD\"],[\"consumer.huawei.com\/gh\/\",\n\"GTM-N77KTJD\"],[\"consumer.huawei.com\/in\/\",\"GTM-N77KTJD\"],[\"consumer.huawei.com\/jo\/\",\"GTM-N77KTJD\"],[\"consumer.huawei.com\/jo-ar\/\",\"GTM-N77KTJD\"],[\"consumer.huawei.com\/ke\/\",\"GTM-N77KTJD\"],[\"consumer.huawei.com\/kw\/\",\"GTM-N77KTJD\"],[\"consumer.huawei.com\/kw-en\/\",\"GTM-N77KTJD\"],[\"consumer.huawei.com\/lb\/\",\"GTM-N77KTJD\"],[\"consumer.huawei.com\/lb-ar\/\",\"GTM-N77KTJD\"],[\"consumer.huawei.com\/levant\/\",\"GTM-N77KTJD\"],[\"consumer.huawei.com\/levant-ar\/\",\"GTM-N77KTJD\"],[\"consumer.huawei.com\/ma\/\",\"GTM-N77KTJD\"],[\"consumer.huawei.com\/ma-ar\/\",\n\"GTM-N77KTJD\"],[\"consumer.huawei.com\/mu\/\",\"GTM-N77KTJD\"],[\"consumer.huawei.com\/ng\/\",\"GTM-N77KTJD\"],[\"consumer.huawei.com\/om\/\",\"GTM-N77KTJD\"],[\"consumer.huawei.com\/om-ar\/\",\"GTM-N77KTJD\"],[\"consumer.huawei.com\/pk\/\",\"GTM-N77KTJD\"],[\"consumer.huawei.com\/qa\/\",\"GTM-N77KTJD\"],[\"consumer.huawei.com\/qa-ar\/\",\"GTM-N77KTJD\"],[\"consumer.huawei.com\/sa\/\",\"GTM-N77KTJD\"],[\"consumer.huawei.com\/sa-en\/\",\"GTM-N77KTJD\"],[\"consumer.huawei.com\/tn\/\",\"GTM-N77KTJD\"],[\"consumer.huawei.com\/tn-ar\/\",\"GTM-N77KTJD\"],[\"consumer.huawei.com\/za\/\",\n\"GTM-N77KTJD\"],[\"consumer.huawei.com\/zm\/\",\"GTM-N77KTJD\"],[\"consumer.huawei.com\/us\/\",\"GTM-N35TFBM\"],[\"consumer.huawei.com\/kr\/\",\"GTM-N35TFBM\"],[\"consumer.huawei.com\/jp\/\",\"GTM-N35TFBM\"],[\"gallery.consumer.huawei.com\",\"GTM-TRG4Z8Z\"]];\"undefined\"==typeof b\u0026\u0026(b=\"\");for(a=0;a\u003Cc.length;a++)if((new RegExp(c[a][0],\"i\")).test(b))return c[a][1];return\"\"})();"]
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"GTM-5PKMZFJ\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"products.0.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"products.0.name"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",57],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_ecommerceIsEnabled":true,
      "vtp_enableGA4Schema":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(c){var f=[{name:\"EMAIL\",regex:\/(\u0026|\\?|#)(email|e-mail|mail)=[^\u0026#]+\/gi},{name:\"EMAIL\",regex:\/[^\u0026?=#]+(@|%40)[^@\u0026?=#]+\\.[^@\u0026?=#]+\/gi},{name:\"ADDRESS\",regex:\/(\u0026|\\?|#)address=[^\u0026#]+\/gi},{name:\"NAME\",regex:\/(\u0026|\\?|#)(firstname|surname|prenom|lastname|name|nom|username)=[^\u0026#]+\/gi},{name:\"PASSWORD\",regex:\/(\u0026|\\?|#)(password|pwd)=[^\u0026#]+\/gi},{name:\"PHONE\",regex:\/(\u0026|\\?|#)phone=[^\u0026#]+\/gi}],d=c.get(\"hitPayload\").split(\"\\x26\");for(c=0;c\u003Cd.length;c++){var e=d[c].split(\"\\x3d\");try{var a=\ndecodeURIComponent(decodeURIComponent(e[1]))}catch(b){a=decodeURIComponent(e[1])}f.forEach(function(b){a=null!==a.match(b.regex)\u0026\u00261\u003Ca.match(b.regex)[0].split(\"\\x3d\").length?a.replace(b.regex,a.match(b.regex)[0].split(\"\\x3d\")[0]+\"\\x3d[DELETED \"+b.name+\"]\"):a.replace(b.regex,\"[DELETED \"+b.name+\"]\")});e[1]=encodeURIComponent(a);d[c]=e.join(\"\\x3d\")}return d}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(){var c=window.C55||function(){};c.prototype.youtubeParse=c.prototype.youtubeParse||!1;c.prototype.youtubeStepsHierarchy=c.prototype.youtubeStepsHierarchy||[{name:\"25%\",value:25,step:25},{name:\"50%\",value:50,step:25},{name:\"75%\",value:75,step:25},{name:\"100%\",value:98,step:25}];window.C55=c;window.config55=new c;config55.ytPlayers={};var m=0,q,r=\/youtube(?:-nocookie)?\\.com\\\/embed\\\/([^\\?|$]*)\/,t=\/youtube(?:-nocookie)?\\.com\\\/v\\\/([^\\?|$]*)\/,v=\/youtube(?:-nocookie)?\\.com\\\/v\\\/.*playerapiid=([^\u0026|$]*)\/,\np={},k=[],l=[],u=function(){var b=Array.prototype.slice;try{b.call(document.getElementsByTagName(\"body\"))}catch(a){return function(){var a,b=this.length,e=[];if(!b)return[];for(a=0;a\u003Cb;a+=1)e.push(this[a]);return e}}return b}();c.youtube={players:{},pushGAEvent:function(b,a,c){b\u0026\u0026window.dataLayer.push({event:\"videoEvent\",videoAction:b,videoLabel:a,videoValue:c})},trackPercentageView:function(){var b={},a=1E3,d=function(b,e){var d=config55.youtubeStepsHierarchy,f=0,n=!1;try{f=e.getDuration()}catch(g){f=\ne.F.duration}var k=function(){var g=0,h=0,l;try{g=e.getCurrentTime(),h=Math.round(g\/f*100)}catch(w){g=e.F.currentTime,h=Math.round(g\/f*100)}g=0;for(l=d.length;g\u003Cl;g+=1)d[g].reached=d[g].reached||[],h\u003Ed[g].value\u0026\u0026!d[g].reached[b]\u0026\u0026(d[g].reached[b]=!0,c.youtube.pushGAEvent(d[g].name,b,d[g].step));n\u0026\u0026setTimeout(k,a)};return{start:function(){n||(n=!0,k())},stop:function(){n=!1}}};return function(a,c){b[a]||(b[a]=d(a,c));return b[a]}}(),ytOnStateChange:function(){return function(b){var a=b._videoId;switch(b.data){case YT.PlayerState.ENDED:try{this.getPlaylist\u0026\u0026\nthis.getPlaylist()\u0026\u0026(a=this.getPlaylist()[Math.max(this.getPlaylistIndex()-1,0)])}catch(d){this.F.playlist\u0026\u0026(a=this.F.playlist[Math.max(this.F.playlistIndex-1,0)])}c.youtube.pushGAEvent(\"Watch to End\",a);l[a]=\"Ended\";break;case YT.PlayerState.PLAYING:c.youtube.trackPercentageView(a,b.target).start();\"Play\"!==l[a]\u0026\u0026c.youtube.pushGAEvent(\"Play\",a);l[a]=\"Play\";break;case YT.PlayerState.PAUSED:c.youtube.trackPercentageView(a).stop()}}}(),registerPlayer:function(b,a){a=\"__ytOnStateChange_\"+a;var d=window[a]=\nfunction(a){return c.youtube.ytOnStateChange({data:a,_videoId:d._videoid})};d._videoid=b.data.match(t)[1];b.addEventListener(\"onStateChange\",a)},parseDOMForVideos:function(){var b,a;var d=document.getElementsByTagName(\"iframe\");var f=[].concat(u.call(document.getElementsByTagName(\"object\")),u.call(document.getElementsByTagName(\"embed\")));var e=0;for(b=d.length;e\u003Cb;e+=1)(a=d[e].src.match(r))\u0026\u0026-1===k.indexOf(d[e])\u0026\u0026(d[e].id||(d[e].id=\"ytvid_\"+ +new Date),a=d[e].id,c.youtube.players[a]=new YT.Player(a));\ne=0;for(b=f.length;e\u003Cb;e+=1)(a=(f[e].data||f[e].src).match(t))\u0026\u0026-1===k.indexOf(f[e])\u0026\u0026(k.push(f[e]),c.youtube.registerPlayer(f[e],a[1]));config55.youtubeParse\u0026\u0026setTimeout(c.youtube.parseDOMForVideos,500)},iframeAPIReady:function(){var b=window.YT;b._Player=b.Player;b.Player=function(a,d){d=d||{};d.events||(d.events={});var f=this,e=d.events||{},h=document.getElementById(a);var m=\"function\"===typeof e.onStateChange?e.onStateChange:function(){};k.push(h);e.onStateChange=function(a){a._videoId=d.videoId||\nh.src.match(r)[1];if(\"videoseries\"===a._videoId||\"playlist\"===a._videoId)try{a._videoId=a.target.getVideoData().video_id}catch(x){a._videoId=a.target.F.videoData.video_id}a.lastState=l;c.youtube.ytOnStateChange.call(f,a);m\u0026\u0026m.call(f,a)};b._Player.call(this,a,d)};b.Player.prototype=b._Player.prototype;window._onYouTubeIframeAPIReady\u0026\u0026window._onYouTubeIframeAPIReady();c.youtube.parseDOMForVideos()},PlayerReady:function(){return function(b){var a;if(b){if(!(a=p[b]))a:{a=b;var d=document.getElementsByTagName(\"object\"),\nf,e;var h=0;for(f=d.length;h\u003Cf;h+=1)if((e=d[h].data.match(v))\u0026\u0026e[1]===a){p[a]=d[h];a=p[a];break a}a=null}a\u0026\u0026(k.push(a),c.youtube.registerPlayer(a,b));window._onYouTubePlayerReady\u0026\u0026window._onYouTubePlayerReady(b)}}}(),main:function(){m||\"complete\"!==document.readyState||(m+=1,q=document.getElementsByTagName(\"head\")[0],window._onYouTubePlayerReady=window.onYouTubePlayerReady,window.onYouTubePlayerReady=c.youtube.PlayerReady,window.YT?function a(){if(!YT.Player)return setTimeout(a,16);c.youtube.iframeAPIReady()}():\n(window._onYouTubeIframeAPIReady=window.onYouTubeIframeAPIReady||null,window.onYouTubeIframeAPIReady=c.youtube.iframeAPIReady,function(){var b=document.createElement(\"script\"),a=document.createElement(\"a\"),c=q;a.href=\"dummy.jpg\";b.async=!0;b.src=\"file:\"===a.protocol?\"http:\/\/youtube.com\/iframe_api\":\"\/\/youtube.com\/iframe_api\";c.appendChild(b)}()))},onreadystatechange:function(){\"complete\"!==document.readyState||m||c.youtube.main()},init:function(){if(document.readyState){if(\"complete\"===document.readyState)return c.youtube.main()}else setTimeout(c.youtube.main,\n500);window.addEventListener?(window.addEventListener(\"DOMContentLoaded\",c.youtube.main),window.addEventListener(\"load\",c.youtube.main),document.addEventListener(\"readystatechange\",c.youtube.onreadystatechange)):(window.attachEvent(\"onload\",c.youtube.main),document.attachEvent(\"onreadystatechange\",c.youtube.onreadystatechange))}};c.youtube.init();return\"55youtube\"}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"audioAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"audioLabel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"audioValue"
    },{
      "function":"__e"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=window.C55||function(){};b.prototype.virtualPageValues=b.prototype.virtualPageValues||[\"virtualPageview\"];var h=\"spaVariable\";Array.prototype.indexOf||(Array.prototype.indexOf=function(b,a){if(!this)throw new TypeError('\"this\" is null or not defined');var c=this,e=c.length;a=+a||0;if(0===e)return-1;Infinity===Math.abs(a)\u0026\u0026(a=0);if(a\u003E=e)return-1;for(a=Math.max(0\u003C=a?a:e-Math.abs(a),0);a\u003Ce;){if(c.hasOwnProperty(a)\u0026\u0026c[a]===b)return a;a+=1}return-1});b.prototype.insensitiveWords=b.prototype.insensitiveWords||\n[\"trackSocial\",\"trackEvent\",\"virtualPageview\"];b.prototype.indexKw=b.prototype.indexKw||function(b,a,c){var e;c=c||0;for(e=b.length;c\u003Ce;c+=1)if(a\u0026\u0026b[c].toString().toLowerCase()===a.toLowerCase())return c;return-1};b.prototype.dataLayerInitiated=b.prototype.dataLayerInitiated||!1;b.prototype.initDataLayer=b.prototype.initDataLayer||function(){for(var b=window.document.getElementsByTagName(\"script\"),a,c=b.length,e=0,f,g=!1,d=this||{};e\u003Cc\u0026\u0026!g;)a=b[e].src,\/www\\.googletagmanager\\.com\\\/gtm\\.js\\?\/.test(a)\u0026\u0026\na.split(\"id\\x3d\")[1].split(\"\\x26l\\x3d\")[0]===",["escape",["macro",4],8,16],"\u0026\u0026(f=a.split(\"\\x26l\\x3d\")[1],g=!0),e+=1;d.dataLayer=f?window[f]||[]:window.dataLayer||[];d._push=d.dataLayer.push;d.dataLayer.push=function(a){var c=(c=a?a.event:null)?d.indexKw(d.insensitiveWords,c.toLowerCase()):-1;-1!==c\u0026\u0026(a.event=d.insensitiveWords[c]);return d._push.call(d.dataLayer,a)};this.dataLayerInitiated=!0};0==b.prototype.dataLayerInitiated\u0026\u0026b.prototype.initDataLayer();b.prototype.getDataLayerValueForSpa=function(b){_nodeExplorer=\nfunction(a,b,f,g){var d;var c=g||0;if(a\u0026\u0026void 0!==a[b])return a;if(a instanceof Array\u0026\u00265\u003Ec)for(d=a.length-1;0\u003C=d;--d){if(c=_nodeExplorer(a[d],b,f,g+1),-1!=f.indexOf(a[d].event)\u0026\u0026(d=0),void 0!==c)return c}else if(\"object\"===typeof a\u0026\u00265\u003Ec)for(d in a)if(a.hasOwnProperty(d)\u0026\u0026(\"event\"==d\u0026\u0026f.indexOf(a.event),c=_nodeExplorer(a[d],b,f,g+1),void 0!==c))return c};var a=_nodeExplorer(this.dataLayer,b,config55.virtualPageValues,0);return a?a[b]:void 0};window.C55=b;window.config55=new b;return config55.getDataLayerValueForSpa(h)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoLabel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoValue"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){window.eec=window.eec||{count:0};if(\"pageview\"!=window.eec.where\u0026\u0026\"55eeEvent\"!=window.eec.where){var b=function(b){var d=function(a,b,f,e){var c;e=e||0;a\u0026\u0026void 0!==a[b]\u0026\u0026a[b]\u0026\u0026f.push(a);if(a instanceof Array\u0026\u00265\u003Ee)for(c=a.length-1;0\u003C=c;--c)r=d(a[c],b,f,e+1);else if(\"object\"===typeof a\u0026\u00265\u003Ee)for(c in a)a.hasOwnProperty(c)\u0026\u0026(r=d(a[c],b,f,e+1));return f};return d(window.dataLayer,b,[])},d={};(b=b(\"ecommerce\")[0])\u0026\u0026b.ecommerce\u0026\u0026(d.ecommerce=b.ecommerce||d.ecommerce||{},window.eec.count+=1,window.eec.where=\n\"fire_event\");return d}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",80],8,16],";\"product-detail\"==a?a=\"product details interaction\":\"press\"==a?a=\"news page interaction\":\"huaweitime\"==a\u0026\u0026(a=\"huawei time\");return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",80],8,16],";return a=\"huaweitime\"==a?\"click to my reservations\":\"click to \"+",["escape",["macro",78],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",80],8,16],",a=\"\";\"product-detail\"==b\u0026\u0026(a=",["escape",["macro",33],8,16],");return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(d){var f=d.get(\"hitPayload\");try{a:{var e=f;try{if(-1!=e.indexOf(\"\\x26ti\")){try{var b=val=decodeURIComponent(decodeURIComponent(e))}catch(g){b=val=decodeURIComponent(e)}var h=b.match(\/ti=([^\u0026]*)\/i);var a=h[0].split(\"\\x3d\")[1]||void 0;break a}}catch(g){a=void 0;break a}a=void 0}if((a=a||void 0)\u0026\u0026document.URL.match(\/\\.huawei\\.com\\\/(jp|ph)\\\/shop\\\/\/gm)){b=a;var c=11==b.length?b.replace(\/([0-9a-zA-Z]{4})[0-9a-zA-Z]{3}([0-9a-zA-Z]{4})\/,\"$1000$2\"):b;c=c||a;var k=f.replaceAll(a,\nc);console.log(c);return k}return d.get(\"hitPayload\")}catch(g){return d.get(\"hitPayload\")}}})();"]
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_name":"gtm.newUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__dbg"
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollUnits",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollDirection",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",14],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",58],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":["macro",61],
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":["macro",59],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["macro",62],
      "vtp_eventLabel":["macro",63],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":2
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",64],
      "vtp_eventCategory":"cart",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"add to cart",
      "vtp_eventLabel":["macro",65],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":9
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",64],
      "vtp_eventCategory":"Enhanced Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"eeCheckoutOption",
      "vtp_eventLabel":"More information in ecommerce reports",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":10
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",64],
      "vtp_eventCategory":"Enhanced Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"eeRefund",
      "vtp_eventLabel":"More information in ecommerce reports",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":11
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",64],
      "vtp_fieldsToSet":["list",["map","fieldName","hitCallback","value",["macro",67]]],
      "vtp_eventCategory":"Enhanced Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"eeListClick",
      "vtp_eventLabel":"More information in ecommerce reports",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":12
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",64],
      "vtp_eventCategory":"Enhanced Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"eeListView",
      "vtp_eventLabel":"More information in ecommerce reports",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":13
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",64],
      "vtp_fieldsToSet":["list",["map","fieldName","hitCallback","value",["macro",67]]],
      "vtp_eventCategory":"Enhanced Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"eePromoClick",
      "vtp_eventLabel":"More information in ecommerce reports",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":14
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",64],
      "vtp_eventCategory":"Enhanced Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"eePromoView",
      "vtp_eventLabel":"More information in ecommerce reports",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":15
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",64],
      "vtp_eventCategory":"cart",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"remove from cart",
      "vtp_eventLabel":["macro",65],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":16
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Scroll",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template",["macro",69],"%"],
      "vtp_eventLabel":["macro",16],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":17
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Video",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["macro",70],
      "vtp_eventLabel":["macro",71],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":19
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"contact customer service",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"submit the form",
      "vtp_eventLabel":["template",["macro",50],"_",["macro",51],"_",["macro",52]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":21
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"contact customer service",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"error popup",
      "vtp_eventLabel":["macro",72],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":22
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"contact customer service",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"intend to online chat",
      "vtp_eventLabel":["macro",73],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":23
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"contact customer service",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click to call",
      "vtp_eventLabel":["macro",73],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":24
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"contact customer service",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","change to ",["macro",74]],
      "vtp_eventLabel":["template","from ",["macro",75]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":25
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"contact shop for business",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click to email",
      "vtp_eventLabel":["macro",73],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":26
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"newsletter subscription",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"success",
      "vtp_eventLabel":["macro",73],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":27
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",77],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["macro",79],
      "vtp_eventLabel":["macro",81],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":28
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"account",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"creation",
      "vtp_eventLabel":["macro",82],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":29
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"account",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"logged_in",
      "vtp_eventLabel":["macro",82],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":30
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"social",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["macro",83],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":31
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"navigation interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click to pdp",
      "vtp_eventLabel":["template",["macro",33],"_",["macro",84]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":32
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"navigation interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click to product support",
      "vtp_eventLabel":["template",["macro",33],"_",["macro",84]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":33
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"navigation interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click second navi ",["macro",85]],
      "vtp_eventLabel":["macro",86],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":34
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"navigation interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click to pop_huawei",
      "vtp_eventLabel":["template",["macro",33],"_",["macro",84]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":35
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"navigation interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click to pop_",["macro",87]],
      "vtp_eventLabel":["template",["macro",33],"_",["macro",84]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":36
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"navigation interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click to pop intention",
      "vtp_eventLabel":["template",["macro",33],"_",["macro",84]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":37
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"navigation interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click to pop_",["macro",88]],
      "vtp_eventLabel":["template",["macro",33],"_",["macro",84]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":38
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"navigation interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click first navi ",["macro",85]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":39
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"bg switch",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click to ",["macro",89]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":40
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"banner interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click to campaign page",
      "vtp_eventLabel":["template",["macro",90],"_",["macro",91]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":41
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"banner interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click to pdp",
      "vtp_eventLabel":["template",["macro",90],"_",["macro",91]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":42
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"banner interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click to pop_huawei",
      "vtp_eventLabel":["template",["macro",90],"_",["macro",91]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":43
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"banner interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click to pop intention",
      "vtp_eventLabel":["template",["macro",90],"_",["macro",91]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":44
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"banner interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click to pop_",["macro",87]],
      "vtp_eventLabel":["template",["macro",90],"_",["macro",91]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":45
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product list interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click to pdp",
      "vtp_eventLabel":["template",["macro",33],"_",["macro",84]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":46
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product list interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click to pop_Huawei",
      "vtp_eventLabel":["template",["macro",33],"_",["macro",84]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":47
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product list interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click to pop intention",
      "vtp_eventLabel":["template",["macro",33],"_",["macro",84]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":48
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product list interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click to pop_",["macro",87]],
      "vtp_eventLabel":["template",["macro",33],"_",["macro",84]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":49
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product list interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click to pop_",["macro",88]],
      "vtp_eventLabel":["template",["macro",33],"_",["macro",84]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":50
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product list interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","filter ",["macro",92]],
      "vtp_eventLabel":["macro",93],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":51
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"find a store",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","filter ",["macro",92]],
      "vtp_eventLabel":["macro",93],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":52
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"find a store",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"view store details",
      "vtp_eventLabel":["macro",94],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":53
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":54
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":55
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"course reservation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","succeed to reserve ",["macro",95]],
      "vtp_eventLabel":["template",["macro",94],"_",["macro",96]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":56
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"site search",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","search ",["macro",97]],
      "vtp_eventLabel":["macro",98],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":57
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"site search",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","search ",["macro",97]],
      "vtp_eventLabel":["template","from ",["macro",98]," suggestion"],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":58
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"comparison",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","compare ",["macro",99]],
      "vtp_eventLabel":["template","with ",["macro",100]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":59
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"country selection",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","to ",["macro",74]],
      "vtp_eventLabel":["template","from ",["macro",75]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":60
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product details interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click to pop_huawei",
      "vtp_eventLabel":["macro",33],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":61
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product details interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click to pop intention",
      "vtp_eventLabel":["macro",33],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":62
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product details interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click to pop_",["macro",87]],
      "vtp_eventLabel":["macro",33],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":63
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product details interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click to pop_",["macro",88]],
      "vtp_eventLabel":["macro",33],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":64
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product details interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click to pop footer",
      "vtp_eventLabel":["macro",33],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":65
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",64],
      "vtp_eventCategory":"cart",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"add to cart from buy now",
      "vtp_eventLabel":["macro",65],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":66
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",64],
      "vtp_eventCategory":"cart",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"add to cart by increasing quantity",
      "vtp_eventLabel":["macro",65],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":67
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",64],
      "vtp_eventCategory":"cart",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"remove from cart by decreasing quantity",
      "vtp_eventLabel":["macro",65],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":68
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",64],
      "vtp_eventCategory":"Checkout",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"Checkout as a guest",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":69
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",64],
      "vtp_eventCategory":"Checkout",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"checkout step 1",
      "vtp_eventLabel":["macro",65],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":70
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",64],
      "vtp_eventCategory":"Checkout",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"checkout step 2",
      "vtp_eventLabel":["macro",65],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":71
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",64],
      "vtp_eventCategory":"Checkout",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"checkout step 3",
      "vtp_eventLabel":["macro",65],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":72
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",64],
      "vtp_eventCategory":"purchase",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"transaction confirmed",
      "vtp_eventLabel":["macro",65],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":73
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"banner interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click to pop_",["macro",88]],
      "vtp_eventLabel":["template",["macro",90],"_",["macro",91]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":75
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product list interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click to pop_",["macro",88]],
      "vtp_eventLabel":["template",["macro",33],"_",["macro",84]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":76
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieExpires","value",["macro",23]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",58],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_enableGA4Schema":false,
      "tag_id":77
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"banner interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click to quick view",
      "vtp_eventLabel":["template",["macro",90],"_",["macro",91]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":122
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"banner interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click ",["macro",78]," to ",["macro",102]],
      "vtp_eventLabel":["template","from ",["macro",103],"_",["macro",91]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":127
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"banner interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","swipe ",["macro",104]," to ",["macro",102]],
      "vtp_eventLabel":["template","from ",["macro",103],"_",["macro",91]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":130
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"service module interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click to ",["macro",105]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":133
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"product details interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click to ",["macro",78]],
      "vtp_eventLabel":["macro",33],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":135
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"account",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click ",["macro",106]],
      "vtp_eventLabel":["macro",82],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":142
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"about us",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click ",["macro",107]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":145
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"news page interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click to load more",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":158
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"navigation interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click to mobileservices",
      "vtp_eventLabel":["macro",86],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":160
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product details interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","scrolling to ",["macro",108]],
      "vtp_eventLabel":["macro",109],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":164
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"ip relocated pop-up interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click to ",["macro",110]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":166
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"find a store",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click to ",["macro",94]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":168
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":171
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"huawei time",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","filter ",["macro",92]],
      "vtp_eventLabel":["macro",93],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":172
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"huawei time",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click to calender",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":173
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"find a store",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click to huawei time",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":174
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template",["macro",16]," page interaction"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click ",["macro",78]," to ",["macro",80]],
      "vtp_eventLabel":["template",["macro",90],"_",["macro",91]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":179
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template",["macro",16]," page interaction"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click to pop intention",
      "vtp_eventLabel":["template",["macro",33],"_",["macro",84]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":180
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template",["macro",16]," page interaction"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click to pop_",["macro",88]],
      "vtp_eventLabel":["template",["macro",33],"_",["macro",84]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":181
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template",["macro",16]," page interaction"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click ",["macro",78]," to ",["macro",80]],
      "vtp_eventLabel":["macro",73],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":183
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template",["macro",16]," page interaction"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click to ",["macro",80]],
      "vtp_eventLabel":["macro",90],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":186
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template",["macro",16]," page interaction"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click to pop_",["macro",87]],
      "vtp_eventLabel":["template",["macro",33],"_",["macro",84]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":187
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":189
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template",["macro",16]," page interaction"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click ",["macro",78]," to ",["macro",80]],
      "vtp_eventLabel":["template",["macro",90],"_",["macro",91]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":192
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":196
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template",["macro",16]," page interaction"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click ",["macro",78]," to ",["macro",80]],
      "vtp_eventLabel":["macro",73],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":201
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template",["macro",16]," page interaction"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click ",["macro",78],"_",["macro",73]],
      "vtp_eventLabel":["macro",111],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":203
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product details interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click ",["macro",78]," to ",["macro",80]],
      "vtp_eventLabel":["macro",73],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":205
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"navigation interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click footer ",["macro",85]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":214
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"sub header navigation interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template",["macro",112],"_click to ",["macro",78]],
      "vtp_eventLabel":["macro",33],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":220
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"series page interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click to pop_Huawei",
      "vtp_eventLabel":["template",["macro",33],"_",["macro",84]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":222
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"series page interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click to pop intention",
      "vtp_eventLabel":["template",["macro",33],"_",["macro",84]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":224
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"series page interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click to pop_",["macro",88]],
      "vtp_eventLabel":["template",["macro",33],"_",["macro",84]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":226
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"series page interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click to pdp",
      "vtp_eventLabel":["template",["macro",33],"_",["macro",84]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":228
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product details interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click to ",["macro",107]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":230
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product details interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click to ",["macro",107]],
      "vtp_eventLabel":["template",["macro",90],"_",["macro",91]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":232
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product details interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click to ",["macro",107]],
      "vtp_eventLabel":["template",["macro",85],"_",["macro",113]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":235
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"pop_up interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click to ",["macro",78]],
      "vtp_eventLabel":"language selection",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":237
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template",["macro",16]," page interaction"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click ",["macro",78]," to ",["macro",102]],
      "vtp_eventLabel":["template","from ",["macro",103],"_",["macro",91]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":240
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template",["macro",16]," page interaction"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","swipe ",["macro",104]," to ",["macro",102]],
      "vtp_eventLabel":["template","from ",["macro",103],"_",["macro",91]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":242
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template",["macro",16]," page interaction"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click to ",["macro",80]],
      "vtp_eventLabel":["template",["macro",107],"_",["macro",114]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":245
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template",["macro",16]," page interaction"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click ",["macro",78]," to ",["macro",80]],
      "vtp_eventLabel":["macro",73],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":247
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template",["macro",16]," page interaction"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click ",["macro",78]," to ",["macro",80]],
      "vtp_eventLabel":["template",["macro",90],"_",["macro",91]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":249
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product details interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click ",["macro",78]," to ",["macro",80]],
      "vtp_eventLabel":["template",["macro",90],"_",["macro",91]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":251
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template",["macro",16]," page interaction"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click to ",["macro",80]],
      "vtp_eventLabel":["macro",90],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":253
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template",["macro",16]," page interaction"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click to pop_huawei",
      "vtp_eventLabel":["template",["macro",90],"_",["macro",91]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":255
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template",["macro",16]," page interaction"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click to pop intention",
      "vtp_eventLabel":["template",["macro",33],"_",["macro",84]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":257
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template",["macro",16]," page interaction"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click to pop_",["macro",87]],
      "vtp_eventLabel":["template",["macro",33],"_",["macro",84]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":259
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template",["macro",16]," page interaction"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click to pop footer",
      "vtp_eventLabel":["macro",33],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":261
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"banner interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click to ",["macro",90]],
      "vtp_eventLabel":"banner under navi",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":269
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"news page interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click to loadmore",
      "vtp_eventLabel":"all events page",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":272
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"news page interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click to ",["macro",78]],
      "vtp_eventLabel":["template",["macro",90],"_event page"],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":273
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"series page interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click to pop_",["macro",87]],
      "vtp_eventLabel":["template",["macro",33],"_",["macro",84]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":275
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"checkout",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","select ",["macro",115]],
      "vtp_eventLabel":["template","click ",["macro",116]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":283
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"account",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click ",["macro",106]],
      "vtp_eventLabel":["macro",82],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":285
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product order interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click recommended items of ",["macro",117]],
      "vtp_eventLabel":["template","from ",["macro",33]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":288
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product order interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"out of stock_notify me",
      "vtp_eventLabel":["macro",33],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":290
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product order interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"collect coupon",
      "vtp_eventLabel":["template",["macro",33],"_",["macro",118]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":293
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product order interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"pop promo",
      "vtp_eventLabel":["macro",33],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":296
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product order interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","top banner click to ",["macro",119]],
      "vtp_eventLabel":["template",["macro",33],"_",["macro",90]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":299
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product order interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click to ",["macro",78]],
      "vtp_eventLabel":["macro",33],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":301
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"cart",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click check out",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":303
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"cart",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click check cart",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":305
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"cart",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click continue shopping",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":307
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"mini cart",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click check cart",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":309
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"mini cart",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click continue shopping",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":311
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"account",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"register start",
      "vtp_eventLabel":["template",["macro",120],"_",["macro",82]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":314
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"account",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"register success",
      "vtp_eventLabel":["template",["macro",120],"_",["macro",82]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":317
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"account",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"login start",
      "vtp_eventLabel":["template",["macro",120],"_",["macro",82]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":318
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"Checkout",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","checkout step ",["macro",121]],
      "vtp_eventLabel":["macro",65],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":325
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"account",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"login success",
      "vtp_eventLabel":["template",["macro",120],"_",["macro",82]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":328
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"banner interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click ",["macro",78]],
      "vtp_eventLabel":["macro",90],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":330
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product order interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click learn more",
      "vtp_eventLabel":["macro",33],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":337
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"offer interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"top banner click",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":340
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"offer interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click navi tab to ",["macro",123]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":342
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"offer interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"subscription enter",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":344
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"offer interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"subscription confirm",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":346
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"offer interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click to pop_huawei",
      "vtp_eventLabel":["macro",124],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":349
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"offer interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"lucky draw start",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":351
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"offer interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"chat intent",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":353
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",125],
      "vtp_eventCategory":"purchase",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"transaction confirmed",
      "vtp_eventLabel":["macro",65],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":359
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template",["macro",127]," interaction"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click to pop_Huawei",
      "vtp_eventLabel":["template",["macro",33],"_",["macro",84]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":373
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template",["macro",127]," interaction"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click to pop intention",
      "vtp_eventLabel":["template",["macro",33],"_",["macro",84]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":374
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template",["macro",127]," interaction"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click to pop_",["macro",87]],
      "vtp_eventLabel":["template",["macro",33],"_",["macro",84]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":375
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template",["macro",127]," interaction"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click to pop_",["macro",88]],
      "vtp_eventLabel":["template",["macro",33],"_",["macro",84]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":376
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template",["macro",127]," interaction"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click to pdp",
      "vtp_eventLabel":["template",["macro",33],"_",["macro",84]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":377
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template",["macro",126]," interaction"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click to compare page",
      "vtp_eventLabel":["macro",85],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":387
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product select interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click to pdp",
      "vtp_eventLabel":["template",["macro",33],"_",["macro",84]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":388
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product select interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click to pop_Huawei",
      "vtp_eventLabel":["template",["macro",33],"_",["macro",84]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":389
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product select interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click to pop intention",
      "vtp_eventLabel":["template",["macro",33],"_",["macro",84]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":390
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product select interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click to pop_",["macro",87]],
      "vtp_eventLabel":["template",["macro",33],"_",["macro",84]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":391
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product select interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click to pop_",["macro",88]],
      "vtp_eventLabel":["template",["macro",33],"_",["macro",84]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":392
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product select interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click to load more",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":393
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template",["macro",126]," interaction"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click product navi ",["macro",85]],
      "vtp_eventLabel":["macro",128],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":410
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template",["macro",126]," interaction"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click ",["macro",78],"_product navi"],
      "vtp_eventLabel":["template","from ",["macro",129]," to ",["macro",130]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":414
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template",["macro",126]," interaction"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click to pdp",
      "vtp_eventLabel":["template","series_section ",["macro",33],"_",["macro",84]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":415
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template",["macro",126]," interaction"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click to psp",
      "vtp_eventLabel":["template","series_section ",["macro",33],"_",["macro",84]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":416
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template",["macro",126]," interaction"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click to pop_huawei",
      "vtp_eventLabel":["template","series_section ",["macro",33],"_",["macro",84]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":417
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template",["macro",126]," interaction"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click to pop intention",
      "vtp_eventLabel":["template","series_section ",["macro",33],"_",["macro",84]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":418
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template",["macro",126]," interaction"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click to pop_",["macro",87]],
      "vtp_eventLabel":["template","series_section ",["macro",33],"_",["macro",84]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":419
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template",["macro",126]," interaction"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click to pop_",["macro",88]],
      "vtp_eventLabel":["template","series_section ",["macro",33],"_",["macro",84]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":420
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template",["macro",126]," interaction"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click to psp",
      "vtp_eventLabel":["template","recommendation_section ",["macro",33],"_",["macro",84]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":421
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template",["macro",126]," interaction"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click to pop_huawei",
      "vtp_eventLabel":["template","recommendation_section ",["macro",33],"_",["macro",84]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":422
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template",["macro",126]," interaction"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click to pop intention",
      "vtp_eventLabel":["template","recommendation_section ",["macro",33],"_",["macro",84]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":424
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template",["macro",126]," interaction"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click to pop_",["macro",87]],
      "vtp_eventLabel":["template","recommendation_section ",["macro",33],"_",["macro",84]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":425
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template",["macro",126]," interaction"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click to pop_",["macro",88]],
      "vtp_eventLabel":["template","recommendation_section ",["macro",33],"_",["macro",84]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":426
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template",["macro",126]," interaction"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click to pdp",
      "vtp_eventLabel":["template","recommendation_section ",["macro",33],"_",["macro",84]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":427
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template",["macro",126]," interaction"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click to pdp",
      "vtp_eventLabel":["template",["macro",33],"_",["macro",84]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":428
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template",["macro",126]," interaction"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click ",["macro",78],"_recommendation_section"],
      "vtp_eventLabel":["template","from ",["macro",129]," to ",["macro",130]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":429
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template",["macro",126]," interaction"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click sub header navi_",["macro",78]],
      "vtp_eventLabel":["macro",33],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":433
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template",["macro",126]," interaction"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click sub header navi_drop down",
      "vtp_eventLabel":["macro",33],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":434
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"sub header navigation interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template",["macro",112],"_click to ",["macro",78],"_",["macro",131]],
      "vtp_eventLabel":["macro",33],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":436
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product list interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click tab",
      "vtp_eventLabel":["macro",132],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":447
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template",["macro",126]," interaction"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click to pop_huawei",
      "vtp_eventLabel":["template",["macro",33],"_",["macro",84]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":448
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template",["macro",126]," interaction"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click to pop intention",
      "vtp_eventLabel":["template",["macro",33],"_",["macro",84]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":449
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template",["macro",126]," interaction"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click to pop_",["macro",87]],
      "vtp_eventLabel":["template",["macro",33],"_",["macro",84]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":450
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template",["macro",126]," interaction"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click to pop_",["macro",88]],
      "vtp_eventLabel":["template",["macro",33],"_",["macro",84]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":451
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product details interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["macro",111],
      "vtp_eventLabel":["template","scrolling to ",["macro",133]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":456
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product details interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click ",["macro",78],"_",["macro",73]],
      "vtp_eventLabel":["macro",111],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":457
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"banner interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click to plp",
      "vtp_eventLabel":["template",["macro",90],"_",["macro",91]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":461
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"banner interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click to psp",
      "vtp_eventLabel":["template",["macro",90],"_",["macro",91]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":462
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template",["macro",126]," interaction"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click to psp",
      "vtp_eventLabel":["template",["macro",33],"_",["macro",84]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":463
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product details interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":"click to pop_huawei",
      "vtp_eventLabel":["template",["macro",90],"_",["macro",91]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":465
    },{
      "function":"__cvt_13357096_497",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_cvars":["list",["map","slot","1","name","siteCountryCode","value",["macro",30]],["map","slot","2","name","siteLanguage","value",["macro",32]],["map","slot","3","name","siteCountryName","value",["macro",29]],["map","slot","4","name","chapter1","value",["macro",135]],["map","slot","5","name","chapter2","value",["macro",136]],["map","slot","6","name","chapter3","value",["macro",137]]],
      "vtp_TagId":"960e220e97365",
      "tag_id":500
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product list interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",58],
      "vtp_eventAction":["template","click ",["macro",78]," to ",["macro",80]],
      "vtp_eventLabel":["macro",73],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":511
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-N35TFBM","nickname","Media JP"]],
      "vtp_boundaries":["list",["zb","_cn",["macro",101],"consumer.test.huawei.com\/jp",false,false]],
      "vtp_enableTypeRestrictions":false,
      "tag_id":513
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-TJ7ZZX8","nickname","media PH"]],
      "vtp_boundaries":["list",["zb","_cn",["macro",101],"consumer.test.huawei.com\/ph",false,false]],
      "vtp_enableTypeRestrictions":false,
      "tag_id":514
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-N3FLXCZ","nickname","Media KR"]],
      "vtp_boundaries":["list",["zb","_cn",["macro",3],"\/kr\/",false,false]],
      "vtp_enableTypeRestrictions":false,
      "tag_id":515
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"25,50,75,100",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"13357096_49",
      "vtp_enableTriggerStartOption":true,
      "tag_id":516
    },{
      "function":"__hl",
      "tag_id":517
    },{
      "function":"__cl",
      "tag_id":518
    },{
      "function":"__cl",
      "tag_id":519
    },{
      "function":"__cl",
      "tag_id":520
    },{
      "function":"__cl",
      "tag_id":521
    },{
      "function":"__cl",
      "tag_id":522
    },{
      "function":"__cl",
      "tag_id":523
    },{
      "function":"__cl",
      "tag_id":524
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","13357096_485_483","13357096_485_484"],
      "vtp_uniqueTriggerId":"13357096_485",
      "tag_id":525
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"13357096_485_483",
      "tag_id":526
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"13357096_485_484",
      "tag_id":528
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,d,a,e){b[a]=b[a]||[];b[a].push({\"gtm.start\":(new Date).getTime(),event:\"gtm.js\"});b=c.getElementsByTagName(d)[0];c=c.createElement(d);a=\"dataLayer\"!=a?\"\\x26l\\x3d\"+a:\"\";c.async=!0;c.src=\"https:\/\/www.googletagmanager.com\/gtm.js?id\\x3d\"+e+a;b.parentNode.insertBefore(c,b)})(window,document,\"script\",\"dataLayer\",",["escape",["macro",138],8,16],");\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":3
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,d,a,e){b[a]=b[a]||[];b[a].push({\"gtm.start\":(new Date).getTime(),event:\"gtm.js\"});b=c.getElementsByTagName(d)[0];c=c.createElement(d);a=\"dataLayer\"!=a?\"\\x26l\\x3d\"+a:\"\";c.async=!0;c.src=\"https:\/\/www.googletagmanager.com\/gtm.js?id\\x3d\"+e+a;b.parentNode.insertBefore(c,b)})(window,document,\"script\",\"dataLayer\",\"GTM-TBLRR4F\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":78
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,d,a,e){b[a]=b[a]||[];b[a].push({\"gtm.start\":(new Date).getTime(),event:\"gtm.js\"});b=c.getElementsByTagName(d)[0];c=c.createElement(d);a=\"dataLayer\"!=a?\"\\x26l\\x3d\"+a:\"\";c.async=!0;c.src=\"https:\/\/www.googletagmanager.com\/gtm.js?id\\x3d\"+e+a;b.parentNode.insertBefore(c,b)})(window,document,\"script\",\"dataLayer\",",["escape",["macro",140],8,16],");\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":139
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction getParameter(a){for(var b=window.location.search.substr(1).split(\"\\x26\"),c=0;c\u003Cb.length;c++){var d=b[c].split(\"\\x3d\");if(d[0]==a)return decodeURIComponent(d[1])}return!1}function getHostname(a){var b=document.createElement(\"a\");b.setAttribute(\"href\",a);return b.hostname}function getorg(a){for(var b in organic){var c=new RegExp(b,\"i\");if(a.match(c))return organic[b]}}\nfunction exclude_ref(a,b){if(-1==document.referrer.indexOf(document.location.hostname))return!1;for(var c=0;c\u003Cb.length;c++){var d=new RegExp(b[c],\"i\");if(a.match(d))return!1}return!0}function setUTMCookies(a,b,c,d){return setCookie(b,'{\"Timestamp\":'+a+',\"src\":\"'+c+'\",\"mdm\":\"'+d+'\"}')}function getCookiesJson(a){try{return JSON.parse(getCookie(a))}catch(b){return{}}}var url_src,url_mdm,url_cpn,url_ctt,url_tm;url_src=getParameter(\"utm_source\")||0;url_mdm=getParameter(\"utm_medium\")||0;\nvar gclid=getParameter(\"gclid\"),myTimestamp=Date.now(),organic={\"www.google.com\":\"google\",\"www.baidu.com\":\"baidu\"},exclude_ref_list=[\"consumer.test.huawei.com\"];myTimestamp=Date.now();\nfunction trafficCategorylize(a){if(url_src\u0026\u0026url_mdm)return setUTMCookies(myTimestamp,a,url_src,url_mdm);if(gclid)return url_src=\"Google\",url_mdm=\"cpc\",setUTMCookies(myTimestamp,a,url_src,url_mdm);if(getorg(document.referrer))return url_src=getorg(document.referrer),url_mdm=\"organic\",setUTMCookies(myTimestamp,a,url_src,url_mdm);if(document.referrer\u0026\u0026exclude_ref(document.referrer,exclude_ref_list))return url_src=getHostname(document.referrer),url_mdm=\"referral\",setUTMCookies(myTimestamp,a,url_src,url_mdm);\nif(-1==document.referrer.indexOf(document.location.hostname)\u0026\u0026!getCookie(\"last_utm\")\u0026\u0026\"direct\"!=getCookiesJson(\"last_utm\").src)return url_src=\"direct\",url_mdm=\"none\",setUTMCookies(myTimestamp,a,url_src,url_mdm)}try{getCookie(\"first_utm\")||trafficCategorylize(\"first_utm\"),trafficCategorylize(\"last_utm\")}catch(a){};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":495
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" class=\"optanon-category-2\"\u003Efunction getParameter(a){for(var b=window.location.search.substr(1).split(\"\\x26\"),c=0;c\u003Cb.length;c++){var d=b[c].split(\"\\x3d\");if(d[0]==a)return decodeURIComponent(d[1])}return!1}function getHostname(a){var b=document.createElement(\"a\");b.setAttribute(\"href\",a);return b.hostname}function getorg(a){for(var b in organic){var c=new RegExp(b,\"i\");if(a.match(c))return organic[b]}}\nfunction exclude_ref(a,b){if(-1==document.referrer.indexOf(document.location.hostname))return!1;for(var c=0;c\u003Cb.length;c++){var d=new RegExp(b[c],\"i\");if(a.match(d))return!1}return!0}function setUTMCookies(a,b,c,d){return setCookie(b,'{\"Timestamp\":'+a+',\"src\":\"'+c+'\",\"mdm\":\"'+d+'\"}')}function getCookiesJson(a){try{return JSON.parse(getCookie(a))}catch(b){return{}}}var url_src,url_mdm,url_cpn,url_ctt,url_tm;url_src=getParameter(\"utm_source\")||0;url_mdm=getParameter(\"utm_medium\")||0;\nvar gclid=getParameter(\"gclid\"),myTimestamp=Date.now(),organic={\"www.google.com\":\"google\",\"www.baidu.com\":\"baidu\"},exclude_ref_list=[\"consumer.test.huawei.com\"];myTimestamp=Date.now();\nfunction trafficCategorylize(a){if(url_src\u0026\u0026url_mdm)return setUTMCookies(myTimestamp,a,url_src,url_mdm);if(gclid)return url_src=\"Google\",url_mdm=\"cpc\",setUTMCookies(myTimestamp,a,url_src,url_mdm);if(getorg(document.referrer))return url_src=getorg(document.referrer),url_mdm=\"organic\",setUTMCookies(myTimestamp,a,url_src,url_mdm);if(document.referrer\u0026\u0026exclude_ref(document.referrer,exclude_ref_list))return url_src=getHostname(document.referrer),url_mdm=\"referral\",setUTMCookies(myTimestamp,a,url_src,url_mdm);\nif(-1==document.referrer.indexOf(document.location.hostname)\u0026\u0026!getCookie(\"last_utm\")\u0026\u0026\"direct\"!=getCookiesJson(\"last_utm\").src)return url_src=\"direct\",url_mdm=\"none\",setUTMCookies(myTimestamp,a,url_src,url_mdm)}try{getCookie(\"first_utm\")||trafficCategorylize(\"first_utm\"),trafficCategorylize(\"last_utm\")}catch(a){};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":496
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._uxa=window._uxa||[];window._uxa.push([\"ecommerce:addTransaction\",{id:",["escape",["macro",5],8,16],",revenue:",["escape",["macro",6],8,16],",shipping:",["escape",["macro",9],8,16],",tax:",["escape",["macro",8],8,16],"}]);var cs_products=",["escape",["macro",13],8,16],";console.log(cs_products);for(var i=0;i\u003Ccs_products.length;i++)window._uxa.push([\"ecommerce:addItem\",{id:",["escape",["macro",5],8,16],",name:cs_products[i].name,sku:cs_products[i].id,category:cs_products[i].category,price:cs_products[i].price,quantity:cs_products[i].quantity}]);window._uxa.push([\"ecommerce:send\"]);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":499
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function r(){function g(b,a){b=t+b;_uxa.push([\"trackDynamicVariable\",{key:b,value:a}])}function u(){dataLayer.push(arguments)}function k(){setTimeout(function(){var b=!1,a;for(a in c)b||c.hasOwnProperty(a)\u0026\u0026c[a].experiments\u0026\u0026(b=!0);var d=\"\",e=\"\";if(b)for(b=Object.keys(c),a=0;a\u003Cb.length;a++){if(c[b[a]].experiments){var f=c[b[a]].experiments;f=Object.keys(f);for(var h=0;h\u003Cf.length;h++){var l=f[h];d=l;e=c[b[a]].experiments[l];d\u0026\u0026e\u0026\u0026g(d,e)}}}else if(a=document.location.search,-1\u003Ca.indexOf(\"utm_expid\\x3d.\")){if(a=\ndecodeURIComponent(a.substr(a.indexOf(\"utm_expid\\x3d\")+11).split(\"\\x26\")[0]))d=a.split(\".\")[0],e=a.split(\".\")[1],d\u0026\u0026e\u0026\u0026g(d,e)}else window.dataLayer\u0026\u0026(a=window.gtag?gtag:u,a(\"event\",\"optimize.callback\",{callback:function(m,n){n\u0026\u0026m\u0026\u0026(d=n,e=m,d\u0026\u0026e\u0026\u0026g(d,e))}}))},500)}var t=\"AB_GO_\",p=!1,c=window.gaData;c?k():Object.defineProperty(window,\"gaData\",{configurable:!0,get:function(){return c},set:function(b){c=b;p||(p=!0,k())}})}function v(){q||(q=!0,r(),window.CS_CONF\u0026\u0026(CS_CONF.integrations=CS_CONF.integrations||\n[],CS_CONF.integrations.push(\"Google Optimize\")))}var q=!1;window._uxa=window._uxa||[];_uxa.push([\"afterPageView\",v])})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":509
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._uxa.push([\"ecommerce:addToCart\",{sku:",["escape",["macro",141],8,16],",name:",["escape",["macro",142],8,16],"}]);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":512
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"virtualPageview"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"contact-us"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"contactRequest"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"pushState"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.historyChange"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"\/fr|\/de",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"fire_event"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"addToCart"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"eeCheckoutOption"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"eeRefund"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"eeListClick"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"eeListView"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"eePromoClick"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"eePromoView"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"removeFromCart"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"homepage|product-detail",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.scrollDepth"
    },{
      "function":"_re",
      "arg0":["macro",68],
      "arg1":"(^$|((^|,)13357096_49($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"video"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"videoShop"
    },{
      "function":"_eq",
      "arg0":["macro",72],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"chatIntention"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"clickToCall"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"countrySelection"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"shopForBusiness"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"newsletterSubscription"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"download"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"accountCreation"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"accountLogin"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"social"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"naviPdp"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"naviSupport"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"secondNavi"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"naviPop"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"naviPlatform"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"naviIntent"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"naviEN"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"firstNavi"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"bgSwitch"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"bannerCampaign"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"bannerPdp"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"bannerPop"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"bannerIntent"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"bannerPlatform"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"listPdp"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"listPop"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"listIntent"
    },{
      "function":"_eq",
      "arg0":["macro",87],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"listPlatform"
    },{
      "function":"_eq",
      "arg0":["macro",88],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"plpFilter"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"storeFilter"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"storeView"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"courseFilter"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"courseIntention"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"courseSuccess"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"siteSearch"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"searchSuggestion"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"compare"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"csCountry"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"productPop"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"productIntent"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"productPlatform"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"productEN"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"productFooter"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"addToCartFromBuyNow"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"addToCartByIncrease"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"removeFromCartByDecrease"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"guestCheckout"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"checkoutStep1"
    },{
      "function":"_cn",
      "arg0":["macro",101],
      "arg1":"\/ph\/shop\/"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(checkoutStep1|checkoutStep2|checkoutStep3)"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"checkoutStep2"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"checkoutStep3"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"purchase"
    },{
      "function":"_re",
      "arg0":["macro",31],
      "arg1":"(PH|JP)"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"bannerEN"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"listEn"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"bannerQuickview"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"bannerClick"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"bannerSwipe"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"serviceClick"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"pdpClick"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"accountInteraction"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"aboutUsNavi"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"newsLoadMore"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"naviService"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"pdpScroling"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"ipPop-up"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"storeFind"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"clickMyReservations"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"HuaweiTimeFind"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"campaignBtnClicks"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"campaignBuyBtnClicks"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"campaignListItemClicks"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"campaignShareBtnClicks"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"campaignBannerClicks"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"campaignRetailerClicks"
    },{
      "function":"_cn",
      "arg0":["macro",101],
      "arg1":"https:\/\/consumer.huawei.com\/"
    },{
      "function":"_cn",
      "arg0":["macro",101],
      "arg1":"\/en\/phones\/nova7"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"PDPBtnClicks"
    },{
      "function":"_re",
      "arg0":["macro",101],
      "arg1":"\/press\/news\/",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"submitBtnClicks"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"popupBtnClicks"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"productPopBtn"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"footerNavi"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"subHeaderNavigationInteraction"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"seriesPop"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"seriesIntent"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"seriesEN"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"seriesPdp"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"seriesMore"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"productAd"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"iconService"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"languageSelection"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"swiperSwitchBtnClicks"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"mobTouchSwitch"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"textLinkClicks"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"independentBtnClicks"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"bannerBtnClicks"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"productBannerBtnClicks"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"bannerClicks"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"nonProductPopBtn"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"buyBtnClicks"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"retailerClicks"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"positionBtnClicks"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"adBannerUnderNavi"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"eventLoadmore"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"bannerEventClick"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"SeriesProductPlatform"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"PaymentSelection"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"accountInteractionShop"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"popRecommendClickShop"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(popNotifymeClickShop|popnotifymeClickShop)"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"popCouponCollectionShop"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"popPromoWordsClickShop"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"poptopBannerClickShop"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"popsubHeaderClickShop"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"cartCheckOutShop"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"cartClickcheckCartShop"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"cartClickContinueShop"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"miniCartClickcheckCartShop"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"miniCartClickContinueShop"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"accountregisterShop"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"accountregisterShopSuccess"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"accountLoginShop"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"accountLoginShopSuccess"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"preAdBanner"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"clickLearnMoreShop"
    },{
      "function":"_css",
      "arg0":["macro",122],
      "arg1":"div.carousel a, div.carousel a *"
    },{
      "function":"_cn",
      "arg0":["macro",101],
      "arg1":"huawei.com\/ph\/offer"
    },{
      "function":"_cn",
      "arg0":["macro",101],
      "arg1":"consumer"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.click"
    },{
      "function":"_css",
      "arg0":["macro",122],
      "arg1":"div#navList a,div#navList a *"
    },{
      "function":"_css",
      "arg0":["macro",122],
      "arg1":"div.pix-subscribe-button"
    },{
      "function":"_css",
      "arg0":["macro",122],
      "arg1":"div.notice-confirm-button"
    },{
      "function":"_css",
      "arg0":["macro",122],
      "arg1":"div.one-column-buy-info div.view-button-default, div.one-column-buy-info div.view-button-default *"
    },{
      "function":"_css",
      "arg0":["macro",122],
      "arg1":"div.pix-aem-lottery-swiper div.view-button, div.pix-aem-lottery-swiper div.view-button *"
    },{
      "function":"_css",
      "arg0":["macro",122],
      "arg1":"div#robotIcon"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"relateProductsPop"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"relateProductsIntent"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"relateProductsPlatform"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"relateProductsEN"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"relateProductsPdp"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"compareEntranceClick"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"productSelectClick"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"productSelectPop"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"productSelectIntent"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"productSelectPlatform"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"productSelectEN"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"productSelectLoadmore"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"productNaviBanner"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"productNaviBannerSwipe"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"seriesSectionClick"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"seriesSectionLink"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"seriesSectionPop"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"seriesSectionIntent"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"seriesSectionPlatform"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"seriesSectionEN"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"recommendationSectionLink"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"recommendationSectionPop"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"recommendationSectionIntent"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"recommendationSectionPlatform"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"recommendationSectionEN"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"recommendationSectionClick"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"relationSectionClick"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"recommendationSectionSwipe"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"subHeaderNaviClick"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"subHeaderNaviDropDown"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"subHeaderNaviSupportChildMenu"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"productNaviBannerTab"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"relationSectionPop"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"relationSectionIntent"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"relationSectionPlatform"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"relationSectionEN"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"scrollPopup"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"scrollPopupClicks"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"bannerPlp"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"bannerPsp"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"relateProductsPsp"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"productDetailPopBtn"
    },{
      "function":"_eq",
      "arg0":["macro",134],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"plpBannerBtnClicks"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.load"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.dom"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"trackOptanonEvent"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.triggerGroup"
    },{
      "function":"_re",
      "arg0":["macro",68],
      "arg1":"(^$|((^|,)13357096_485($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",101],
      "arg1":"test.huawei.com"
    },{
      "function":"_cn",
      "arg0":["macro",101],
      "arg1":"consumer-sit7.test.huawei.com"
    },{
      "function":"_cn",
      "arg0":["macro",139],
      "arg1":"gallery.consumer.huawei.com"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"\/shop\/"
    },{
      "function":"_re",
      "arg0":["macro",31],
      "arg1":"PH|JP",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"\/au\/|\/be\/|\/be-fr\/|\/ch\/|\/ch-fr\/|\/de\/|\/es\/|\/fr\/|\/ie\/|\/it\/|\/nl\/|\/pt\/|\/uk\/|\/cz\/|\/se\/|\/dk\/|\/fi\/|\/gr\/|\/tr\/|\/lt\/|\/sk\/|\/hr\/|\/ee\/|\/lv\/|\/si\/|\/pl\/|\/hu\/|\/rs\/|\/ua\/|\/bg\/|\/mk\/|\/no\/|\/ro\/|\/il\/|\/at\/|\/cy\/|\/ca\/|\/ca-fr\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"\/uk\/|\/de\/|\/fr\/|\/es\/|\/nl\/|\/it\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"addToCart"
    }],
  "rules":[
    [["if",0],["add",0,193,194,195,209,197,198,199,200,201,202,203,204,205]],
    [["if",1],["add",0]],
    [["if",2,3],["add",0,12]],
    [["if",4,5],["add",0]],
    [["if",7],["add",1]],
    [["if",8],["add",2]],
    [["if",9],["add",3]],
    [["if",10],["add",4]],
    [["if",11],["add",5]],
    [["if",12],["add",6]],
    [["if",13],["add",7]],
    [["if",14],["add",8]],
    [["if",15],["add",9]],
    [["if",16,17,18],["add",10]],
    [["if",19],["add",11]],
    [["if",20],["add",11]],
    [["if",3],["unless",21],["add",13]],
    [["if",22],["add",14]],
    [["if",23],["add",15]],
    [["if",24],["add",16]],
    [["if",25],["add",17]],
    [["if",26],["add",18]],
    [["if",27],["add",19]],
    [["if",28],["add",20]],
    [["if",29],["add",21]],
    [["if",30],["add",22]],
    [["if",31],["add",23]],
    [["if",32],["add",24]],
    [["if",33],["add",25]],
    [["if",34],["add",26]],
    [["if",35],["add",27]],
    [["if",36],["add",28]],
    [["if",37],["add",29]],
    [["if",38],["add",30]],
    [["if",39],["add",31]],
    [["if",40],["add",32]],
    [["if",41],["add",33]],
    [["if",42],["add",34]],
    [["if",43],["add",35]],
    [["if",44],["add",36]],
    [["if",45],["add",37]],
    [["if",46],["add",38]],
    [["if",47],["add",39]],
    [["if",49],["unless",48],["add",40]],
    [["if",49],["unless",50],["add",41]],
    [["if",51],["add",42]],
    [["if",52],["add",43]],
    [["if",53],["add",44]],
    [["if",54],["add",45,81]],
    [["if",55],["add",46,82]],
    [["if",56],["add",47]],
    [["if",57],["add",48]],
    [["if",58],["add",49]],
    [["if",59],["add",50]],
    [["if",60],["add",51]],
    [["if",61],["add",52]],
    [["if",62],["add",53]],
    [["if",63],["add",54]],
    [["if",64],["add",55]],
    [["if",65],["add",56]],
    [["if",66],["add",57]],
    [["if",67],["add",58]],
    [["if",68],["add",59]],
    [["if",69],["add",60]],
    [["if",70],["add",61]],
    [["if",73],["add",62]],
    [["if",74],["add",63]],
    [["if",75],["add",64]],
    [["if",77],["add",65]],
    [["if",78],["add",66]],
    [["if",0,6],["add",67],["block",0]],
    [["if",79],["add",68]],
    [["if",80],["add",69]],
    [["if",81],["add",70]],
    [["if",82],["add",71]],
    [["if",83],["add",72]],
    [["if",84],["add",73]],
    [["if",85],["add",74]],
    [["if",86],["add",75]],
    [["if",87],["add",76]],
    [["if",88],["add",77]],
    [["if",89],["add",78]],
    [["if",90],["add",79]],
    [["if",91],["add",80]],
    [["if",92],["add",83]],
    [["if",93],["add",84]],
    [["if",94],["add",85]],
    [["if",95],["add",86]],
    [["if",96],["add",87]],
    [["if",97],["add",88]],
    [["if",98],["add",89]],
    [["if",0,99],["add",90]],
    [["if",100,101],["add",91]],
    [["if",0,102],["add",92]],
    [["if",103],["add",93]],
    [["if",104],["add",94]],
    [["if",105],["add",95]],
    [["if",106],["add",96]],
    [["if",107],["add",97]],
    [["if",108],["add",98]],
    [["if",109],["add",99]],
    [["if",110],["add",100]],
    [["if",111],["add",101]],
    [["if",112],["add",102]],
    [["if",113],["add",103]],
    [["if",114],["add",104]],
    [["if",115],["add",105]],
    [["if",116],["add",106]],
    [["if",117],["add",107]],
    [["if",118],["add",108]],
    [["if",119],["add",109]],
    [["if",120],["add",110]],
    [["if",121],["add",111]],
    [["if",122],["add",112]],
    [["if",123],["add",113]],
    [["if",124],["add",114]],
    [["if",125],["add",115]],
    [["if",126],["add",116]],
    [["if",127],["add",117]],
    [["if",128],["add",118]],
    [["if",129],["add",119]],
    [["if",130],["add",120]],
    [["if",131],["add",121]],
    [["if",132],["add",122]],
    [["if",133],["add",123]],
    [["if",134],["add",124]],
    [["if",135],["add",125]],
    [["if",136],["add",126]],
    [["if",137],["add",127]],
    [["if",138],["add",128]],
    [["if",139],["add",129]],
    [["if",140],["add",130]],
    [["if",141],["add",131]],
    [["if",142],["add",132]],
    [["if",143],["add",133]],
    [["if",144],["add",134]],
    [["if",145],["add",135]],
    [["if",146],["add",136]],
    [["if",71,72],["add",137],["block",61,62,63]],
    [["if",147],["add",138]],
    [["if",148],["add",139]],
    [["if",149],["add",140]],
    [["if",150,151,152,153],["add",141]],
    [["if",151,152,153,154],["add",142]],
    [["if",151,152,153,155],["add",143]],
    [["if",151,152,153,156],["add",144]],
    [["if",151,152,153,157],["add",145]],
    [["if",151,152,153,158],["add",146]],
    [["if",151,152,153,159],["add",147]],
    [["if",75,76],["add",148],["block",64]],
    [["if",160],["add",149]],
    [["if",161],["add",150]],
    [["if",162],["add",151]],
    [["if",163],["add",152]],
    [["if",164],["add",153]],
    [["if",165],["add",154]],
    [["if",166],["add",155]],
    [["if",167],["add",156]],
    [["if",168],["add",157]],
    [["if",169],["add",158]],
    [["if",170],["add",159]],
    [["if",171],["add",160]],
    [["if",172],["add",161]],
    [["if",173],["add",162]],
    [["if",174],["add",163]],
    [["if",175],["add",164]],
    [["if",176],["add",165]],
    [["if",177],["add",166]],
    [["if",178],["add",167]],
    [["if",179],["add",168]],
    [["if",180],["add",169]],
    [["if",181],["add",170]],
    [["if",182],["add",171]],
    [["if",183],["add",172]],
    [["if",184],["add",173]],
    [["if",185],["add",174]],
    [["if",186],["add",175]],
    [["if",187],["add",176]],
    [["if",188],["add",177]],
    [["if",189],["add",178]],
    [["if",190],["add",179]],
    [["if",191],["add",180]],
    [["if",192],["add",181]],
    [["if",193],["add",182]],
    [["if",194],["add",183]],
    [["if",195],["add",184]],
    [["if",196],["add",185]],
    [["if",197],["add",186]],
    [["if",198],["add",187]],
    [["if",199],["add",188]],
    [["if",200],["add",189]],
    [["if",201],["add",190]],
    [["if",0,202],["add",191]],
    [["if",203],["add",192]],
    [["if",204],["add",196]],
    [["if",205],["add",206]],
    [["if",206],["add",207]],
    [["if",0,207],["add",208,210]],
    [["if",207,208,209],["add",208,210]],
    [["if",0],["unless",215],["add",211]],
    [["if",0,215],["add",212]],
    [["if",75,202],["add",213]],
    [["if",202,204],["add",214]],
    [["if",202,217],["add",215]],
    [["if",0,210],["block",208]],
    [["if",0,211],["block",208,209,210]],
    [["if",0,212],["block",209]],
    [["if",0,213,214],["block",209]],
    [["if",0,216],["block",212]]]
},
"runtime":[[50,"__cvt_13357096_497",[46,"a"],[41,"q"],[52,"b",["require","copyFromWindow"]],[52,"c",["require","injectScript"]],[52,"d",["require","getUrl"]],[52,"e",["require","getQueryParameters"]],[52,"f",["require","encodeUriComponent"]],[52,"g",["require","createQueue"]],[41,"h"],[3,"h",["g","_uxa"]],[41,"i"],[3,"i",["b","CS_CONF"]],[41,"j"],[3,"j",["d","path"]],[41,"k"],[3,"k",["d","fragment"]],[41,"l"],[3,"l",[0,[0,"https://t.contentsquare.net/uxa/",["f",[17,[15,"a"],"TagId"]]],".js"]],[41,"m"],[3,"m",["e","utm_medium"]],[41,"n"],[3,"n",["e","utm_source"]],[41,"o"],[3,"o",["e","utm_campaign"]],[41,"p"],[3,"p",["e","gclid"]],[22,[1,[21,[15,"m"],""],[21,[40,[15,"m"]],"undefined"]],[46,["h",[7,"trackDynamicVariable",[8,"key","Medium","value",[2,[15,"m"],"toLowerCase",[7]]]]]]],[22,[1,[21,[15,"n"],""],[21,[40,[15,"n"]],"undefined"]],[46,["h",[7,"trackDynamicVariable",[8,"key","Source","value",[2,[15,"n"],"toLowerCase",[7]]]]]]],[22,[1,[21,[15,"o"],""],[21,[40,[15,"o"]],"undefined"]],[46,["h",[7,"trackDynamicVariable",[8,"key","Campaign","value",[2,[15,"o"],"toLowerCase",[7]]]]]]],[22,[1,[21,[15,"p"],""],[21,[40,[15,"p"]],"undefined"]],[46,["h",[7,"trackDynamicVariable",[8,"key","Gclid","value","true"]]]]],[22,[2,[15,"a"],"hasOwnProperty",[7,"cvars"]],[46,[3,"q",0],[42,[23,[15,"q"],[17,[17,[15,"a"],"cvars"],"length"]],[33,[15,"q"],[3,"q",[0,[15,"q"],1]]],false,[46,["h",[7,"setCustomVariable",[17,[16,[17,[15,"a"],"cvars"],[15,"q"]],"slot"],[17,[16,[17,[15,"a"],"cvars"],[15,"q"]],"name"],[17,[16,[17,[15,"a"],"cvars"],[15,"q"]],"value"],3]]]]]],[22,[20,[40,[15,"i"]],"undefined"],[46,[22,[21,[15,"k"],""],[46,["h",[7,"setPath",[0,[0,[15,"j"],"?__"],[15,"k"]]]]]],["c",[15,"l"],[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"]]],[46,[22,[21,[15,"k"],""],[46,["h",[7,"trackPageview",[0,[0,[15,"j"],"?__"],[15,"k"]]]]],[46,["h",[7,"trackPageview",[15,"j"]]]]]]]]]
,"permissions":{"__cvt_13357096_497":{"access_globals":{"keys":[{"key":"_uxa","read":true,"write":true,"execute":true},{"key":"CS_CONF","read":true,"write":true,"execute":true}]},"inject_script":{"urls":["https:\/\/t.contentsquare.net\/*"]},"get_url":{"queriesAllowed":"specific","urlParts":"specific","path":true,"fragment":true,"queryKeys":["utm_medium","utm_source","utm_campaign","gclid"],"query":true}}}
,"sandboxed_scripts":["__cvt_13357096_497"]


};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ca=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},da=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ca(a)}},fa="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ha;
if("function"==typeof Object.setPrototypeOf)ha=Object.setPrototypeOf;else{var ia;a:{var ja={a:!0},la={};try{la.__proto__=ja;ia=la.a;break a}catch(a){}ia=!1}ha=ia?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ma=ha,na=function(a,b){a.prototype=fa(b.prototype);a.prototype.constructor=a;if(ma)ma(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.kj=b.prototype},oa=this||self,va=function(a){if(a&&a!=oa)return qa(a.document);null===ua&&(ua=qa(oa.document));return ua},wa=/^[\w+/_-]+[=]{0,2}$/,ua=null,qa=function(a){var b=a.querySelector&&a.querySelector("script[nonce]");if(b){var c=b.nonce||b.getAttribute("nonce");
if(c&&wa.test(c))return c}return""},xa=function(a){return a};var ya=function(a,b){this.g=a;this.o=b};var za=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},Aa=function(){this.D={};this.s=!1;this.J={}};Aa.prototype.get=function(a){return this.D["dust."+a]};Aa.prototype.set=function(a,b){this.s||(a="dust."+a,this.J.hasOwnProperty(a)||(this.D[a]=b))};Aa.prototype.has=function(a){return this.D.hasOwnProperty("dust."+a)};var Ba=function(a){var b=[],c;for(c in a.D)a.D.hasOwnProperty(c)&&b.push(c.substr(5));return b};var k=function(a){this.o=new Aa;this.g=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(za(b)?this.g[Number(b)]=a[Number(b)]:this.o.set(b,a[b]))};aa=k.prototype;aa.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.g.length;c++){var d=this.g[c];null===d||void 0===d?b.push(""):d instanceof k?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
aa.set=function(a,b){if("length"===a){if(!za(b))throw Error("RangeError: Length property must be a valid integer.");this.g.length=Number(b)}else za(a)?this.g[Number(a)]=b:this.o.set(a,b)};aa.get=function(a){return"length"===a?this.length():za(a)?this.g[Number(a)]:this.o.get(a)};aa.length=function(){return this.g.length};aa.Rb=function(){for(var a=Ba(this.o),b=0;b<this.g.length;b++)a.push(b+"");return new k(a)};
var Ca=function(a,b){if(za(b))delete a.g[Number(b)];else{var c=a.o,d;d="dust."+b;c.s||c.J.hasOwnProperty(d)||delete c.D[d]}};aa=k.prototype;aa.pop=function(){return this.g.pop()};aa.push=function(a){return this.g.push.apply(this.g,Array.prototype.slice.call(arguments))};aa.shift=function(){return this.g.shift()};aa.splice=function(a,b,c){return new k(this.g.splice.apply(this.g,arguments))};aa.unshift=function(a){return this.g.unshift.apply(this.g,Array.prototype.slice.call(arguments))};
aa.has=function(a){return za(a)&&this.g.hasOwnProperty(a)||this.o.has(a)};var Ea=function(){function a(f,g){if(b[f]){if(b[f].Ec+g>b[f].max)throw Error("Quota exceeded");b[f].Ec+=g}}var b={},c=void 0,d=void 0,e={ii:function(f){c=f},Ff:function(){c&&a(c,1)},ki:function(f){d=f},Ra:function(f){d&&a(d,f)},Ei:function(f,g){b[f]=b[f]||{Ec:0};b[f].max=g},Lh:function(f){return b[f]&&b[f].Ec||0},reset:function(){b={}},xh:a};e.onFnConsume=e.ii;e.consumeFn=e.Ff;e.onStorageConsume=e.ki;e.consumeStorage=e.Ra;e.setMax=e.Ei;e.getConsumed=e.Lh;e.reset=e.reset;e.consume=e.xh;return e};var Fa=function(a,b){this.J=a;this.S=function(c,d,e){return c.apply(d,e)};this.s=b;this.o=new Aa;this.g=this.D=void 0};Fa.prototype.add=function(a,b){Ga(this,a,b,!1)};var Ga=function(a,b,c,d){if(!a.o.s)if(a.J.Ra(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.o;e.set(b,c);e.J["dust."+b]=!0}else a.o.set(b,c)};
Fa.prototype.set=function(a,b){this.o.s||(!this.o.has(a)&&this.s&&this.s.has(a)?this.s.set(a,b):(this.J.Ra(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.o.set(a,b)))};Fa.prototype.get=function(a){return this.o.has(a)?this.o.get(a):this.s?this.s.get(a):void 0};Fa.prototype.has=function(a){return!!this.o.has(a)||!(!this.s||!this.s.has(a))};var Ha=function(a){var b=new Fa(a.J,a);a.D&&(b.D=a.D);b.S=a.S;b.g=a.g;return b};var Ia=function(){},Ka=function(a){return"function"==typeof a},q=function(a){return"string"==typeof a},La=function(a){return"number"==typeof a&&!isNaN(a)},Na=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},B=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Oa=function(a,b){if(a&&Na(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Pa=function(a,b){if(!La(a)||
!La(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Sa=function(a,b){for(var c=new Qa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Ta=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Ua=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Va=function(a){return Math.round(Number(a))||0},Xa=function(a){return"false"==
String(a).toLowerCase()?!1:!!a},Ya=function(a){var b=[];if(Na(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Za=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},ab=function(){return(new Date).getTime()},Qa=function(){this.prefix="gtm.";this.values={}};Qa.prototype.set=function(a,b){this.values[this.prefix+a]=b};Qa.prototype.get=function(a){return this.values[this.prefix+a]};
var bb=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},cb=function(a){var b=a;return function(){if(b){var c=b;b=void 0;try{c()}catch(d){}}}},db=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},eb=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},gb=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},jb=function(a,b){var c=F;b=b||[];for(var d=c,e=0;e<a.length-1;e++){if(!d.hasOwnProperty(a[e]))return;d=d[a[e]];if(0<=
B(b,d))return}return d},kb=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},lb=function(a){var b=[];Ta(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};var pb=function(a,b){Aa.call(this);this.g=a;this.S=b};na(pb,Aa);pb.prototype.toString=function(){return this.g};pb.prototype.Rb=function(){return new k(Ba(this))};pb.prototype.o=function(a,b){a.J.Ff();return this.S.apply(qb(this,a),Array.prototype.slice.call(arguments,1))};var qb=function(a,b){var c=function(d,e){this.o=d;this.s=e};c.prototype.g=function(d){var e=this.s;return Na(d)?rb(e,d):d};c.prototype.J=function(d){return sb(this.s,d)};c.prototype.D=function(){return b.J};return new c(a,b)};
pb.prototype.Ta=function(a,b){try{return this.o.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};var sb=function(a,b){for(var c,d=0;d<b.length&&!(c=rb(a,b[d]),c instanceof ya);d++);return c},rb=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof pb))throw Error("Attempting to execute non-function "+b[0]+".");return c.o.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.D;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};var tb=function(){Aa.call(this)};na(tb,Aa);tb.prototype.Rb=function(){return new k(Ba(this))};var ub={control:function(a,b){return new ya(a,this.g(b))},fn:function(a,b,c){var d=this.s,e=this.g(b);if(!(e instanceof k))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.D().Ra(a.length+f.length);return new pb(a,function(){return function(g){var h=Ha(d);void 0===h.g&&(h.g=this.s.g);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=this.g(l[m]),l[m]instanceof ya)return l[m];for(var p=e.get("length"),n=
0;n<p;n++)n<l.length?h.add(e.get(n),l[n]):h.add(e.get(n),void 0);h.add("arguments",new k(l));var t=sb(h,f);if(t instanceof ya)return"return"===t.g?t.o:t}}())},list:function(a){var b=this.D();b.Ra(arguments.length);for(var c=new k,d=0;d<arguments.length;d++){var e=this.g(arguments[d]);"string"===typeof e&&b.Ra(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.D(),c=new tb,d=0;d<arguments.length-1;d+=2){var e=this.g(arguments[d])+"",f=this.g(arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.Ra(g);c.set(e,f)}return c},undefined:function(){}};var wb=function(){this.s=Ea();this.g=new Fa(this.s)},xb=function(a,b,c){var d=new pb(b,c);d.s=!0;a.g.set(b,d)};wb.prototype.Jc=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.o(c)};wb.prototype.o=function(a){for(var b,c=0;c<arguments.length;c++)b=rb(this.g,arguments[c]);return b};wb.prototype.D=function(a,b){var c=Ha(this.g);c.g=a;for(var d,e=1;e<arguments.length;e++)d=d=rb(c,arguments[e]);return d};var yb=function(a){if(a instanceof yb)return a;this.sa=a};yb.prototype.toString=function(){return String(this.sa)};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var zb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Ab=function(a){if(null==a)return String(a);var b=zb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Bb=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Cb=function(a){if(!a||"object"!=Ab(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Bb(a,"constructor")&&!Bb(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Bb(a,b)},G=function(a,b){var c=b||("array"==Ab(a)?[]:{}),d;for(d in a)if(Bb(a,d)){var e=a[d];"array"==Ab(e)?("array"!=Ab(c[d])&&(c[d]=[]),c[d]=G(e,c[d])):Cb(e)?(Cb(c[d])||(c[d]={}),c[d]=G(e,c[d])):c[d]=e}return c};var Eb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m=Ba(h),p=0;p<m.length;p++)l[m[p]]=g(h.get(m[p]))},g=function(h){var l=B(d,h);if(-1<l)return e[l];if(h instanceof k){var m=[];d.push(h);e.push(m);for(var p=h.Rb(),n=0;n<p.length();n++)m[p.get(n)]=g(h.get(p.get(n)));return m}if(h instanceof tb){var t={};d.push(h);e.push(t);f(h,t);return t}if(h instanceof pb){var r=function(){for(var u=Array.prototype.slice.call(arguments,0),v=0;v<u.length;v++)u[v]=Db(u[v],b,!!c);var w=b?b.J:Ea(),y=new Fa(w);
b&&(y.g=b.g);return g(h.o.apply(h,[y].concat(u)))};d.push(h);e.push(r);f(h,r);return r}switch(typeof h){case "boolean":case "number":case "string":case "undefined":return h;case "object":if(null===h)return null}};return g(a)},Db=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m in h)h.hasOwnProperty(m)&&l.set(m,g(h[m]))},g=function(h){var l=B(d,
h);if(-1<l)return e[l];if(Na(h)||Ua(h)){var m=new k([]);d.push(h);e.push(m);for(var p in h)h.hasOwnProperty(p)&&m.set(p,g(h[p]));return m}if(Cb(h)){var n=new tb;d.push(h);e.push(n);f(h,n);return n}if("function"===typeof h){var t=new pb("",function(u){for(var v=Array.prototype.slice.call(arguments,0),w=0;w<v.length;w++)v[w]=Eb(this.g(v[w]),b,!!c);return g((0,this.s.S)(h,h,v))});d.push(h);e.push(t);f(h,t);return t}var r=typeof h;if(null===h||"string"===r||"number"===r||"boolean"===r)return h;};return g(a)};var Fb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b},Hb=function(a){if(void 0===a||Na(a)||Cb(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1};var Ib={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof k)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new k(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.o(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.o(a,this.get(e),e,this)&&d.push(this.get(e));return new k(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.o(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.o(a,this.get(e),e,this));return new k(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g===d)throw Error("TypeError: Reduce on List with no elements.");}for(var h=f;h<d;h++)this.has(h)&&(e=b.o(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var h=f;0<=h;h--)this.has(h)&&(e=b.o(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=Fb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):Ca(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new k(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.o(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=Fb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.o(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):Ca(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var Jb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),Kb=new ya("break"),Nb=new ya("continue"),Ob=function(a,b){return this.g(a)+this.g(b)},Pb=function(a,b){return this.g(a)&&this.g(b)},Qb=function(a,b,c){a=this.g(a);b=this.g(b);c=this.g(c);if(!(c instanceof k))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"===typeof a||"number"===typeof a){if("toString"===b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"===typeof a){if(0<=B(Jb,b))return Db(a[b].apply(a,Fb(c)),this.s);throw Error("TypeError: "+b+" is not a function");}if(a instanceof k){if(a.has(b)){var d=a.get(b);if(d instanceof pb){var e=Fb(c);e.unshift(this.s);return d.o.apply(d,e)}throw Error("TypeError: "+b+" is not a function");}if(0<=B(Ib.supportedMethods,b)){var f=Fb(c);f.unshift(this.s);
return Ib[b].apply(a,f)}}if(a instanceof pb||a instanceof tb){if(a.has(b)){var g=a.get(b);if(g instanceof pb){var h=Fb(c);h.unshift(this.s);return g.o.apply(g,h)}throw Error("TypeError: "+b+" is not a function");}if("toString"===b)return a instanceof pb?a.g:a.toString();if("hasOwnProperty"===b)return a.has.apply(a,Fb(c))}if(a instanceof yb&&"toString"===b)return a.toString();throw Error("TypeError: Object has no '"+b+"' property.");},Rb=function(a,b){a=this.g(a);if("string"!==typeof a)throw Error("Invalid key name given for assignment.");
var c=this.s;if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=this.g(b);c.set(a,d);return d},Tb=function(a){var b=Ha(this.s),c=sb(b,Array.prototype.slice.apply(arguments));if(c instanceof ya)return c},Ub=function(){return Kb},Vb=function(a){for(var b=this.g(a),c=0;c<b.length;c++){var d=this.g(b[c]);if(d instanceof ya)return d}},Wb=function(a){for(var b=this.s,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=this.g(arguments[c+1]);Ga(b,d,e,
!0)}}},Xb=function(){return Nb},Yb=function(a,b,c){var d=new k;b=this.g(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.s.add(a,this.g(f))},Zb=function(a,b){return this.g(a)/this.g(b)},$b=function(a,b){a=this.g(a);b=this.g(b);var c=a instanceof yb,d=b instanceof yb;return c||d?c&&d?a.sa==b.sa:!1:a==b},ac=function(a){for(var b,c=0;c<arguments.length;c++)b=this.g(arguments[c]);return b};
function bc(a,b,c,d){for(var e=0;e<b();e++){var f=a(c(e)),g=sb(f,d);if(g instanceof ya){if("break"===g.g)break;if("return"===g.g)return g}}}function cc(a,b,c){if("string"===typeof b)return bc(a,function(){return b.length},function(f){return f},c);if(b instanceof tb||b instanceof k||b instanceof pb){var d=b.Rb(),e=d.length();return bc(a,function(){return e},function(f){return d.get(f)},c)}}
var dc=function(a,b,c){a=this.g(a);b=this.g(b);c=this.g(c);var d=this.s;return cc(function(e){d.set(a,e);return d},b,c)},ec=function(a,b,c){a=this.g(a);b=this.g(b);c=this.g(c);var d=this.s;return cc(function(e){var f=Ha(d);Ga(f,a,e,!0);return f},b,c)},fc=function(a,b,c){a=this.g(a);b=this.g(b);c=this.g(c);var d=this.s;return cc(function(e){var f=Ha(d);f.add(a,e);return f},b,c)},ic=function(a,b,c){a=this.g(a);b=this.g(b);c=this.g(c);var d=this.s;return gc(function(e){d.set(a,e);return d},b,c)},jc=
function(a,b,c){a=this.g(a);b=this.g(b);c=this.g(c);var d=this.s;return gc(function(e){var f=Ha(d);Ga(f,a,e,!0);return f},b,c)},kc=function(a,b,c){a=this.g(a);b=this.g(b);c=this.g(c);var d=this.s;return gc(function(e){var f=Ha(d);f.add(a,e);return f},b,c)};
function gc(a,b,c){if("string"===typeof b)return bc(a,function(){return b.length},function(d){return b[d]},c);if(b instanceof k)return bc(a,function(){return b.length()},function(d){return b.get(d)},c);throw new TypeError("The value is not iterable.");}
var lc=function(a,b,c,d){function e(p,n){for(var t=0;t<f.length();t++){var r=f.get(t);n.add(r,p.get(r))}}var f=this.g(a);if(!(f instanceof k))throw Error("TypeError: Non-List argument given to ForLet instruction.");var g=this.s;d=this.g(d);var h=Ha(g);for(e(g,h);rb(h,b);){var l=sb(h,d);if(l instanceof ya){if("break"===l.g)break;if("return"===l.g)return l}var m=Ha(g);e(h,m);rb(m,c);h=m}},mc=function(a){a=this.g(a);var b=this.s,c=!1;if(c&&!b.has(a))throw new ReferenceError(a+" is not defined.");return b.get(a)},nc=function(a,b){var c;a=this.g(a);b=this.g(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");if(a instanceof tb||a instanceof k||a instanceof pb)c=a.get(b);else if("string"===typeof a)"length"===b?c=a.length:za(b)&&(c=a[b]);else if(a instanceof yb)return;return c},oc=function(a,b){return this.g(a)>this.g(b)},
pc=function(a,b){return this.g(a)>=this.g(b)},qc=function(a,b){a=this.g(a);b=this.g(b);a instanceof yb&&(a=a.sa);b instanceof yb&&(b=b.sa);return a===b},rc=function(a,b){return!qc.call(this,a,b)},sc=function(a,b,c){var d=[];this.g(a)?d=this.g(b):c&&(d=this.g(c));var e=this.J(d);if(e instanceof ya)return e},tc=function(a,b){return this.g(a)<this.g(b)},uc=function(a,b){return this.g(a)<=this.g(b)},vc=function(a,b){return this.g(a)%this.g(b)},wc=function(a,b){return this.g(a)*this.g(b)},xc=function(a){return-this.g(a)},
yc=function(a){return!this.g(a)},zc=function(a,b){return!$b.call(this,a,b)},Ac=function(){return null},Ec=function(a,b){return this.g(a)||this.g(b)},Fc=function(a,b){var c=this.g(a);this.g(b);return c},Gc=function(a){return this.g(a)},Hc=function(a){return Array.prototype.slice.apply(arguments)},Ic=function(a){return new ya("return",this.g(a))},Jc=function(a,b,c){a=this.g(a);b=this.g(b);c=this.g(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof pb||
a instanceof k||a instanceof tb)&&a.set(b,c);return c},Kc=function(a,b){return this.g(a)-this.g(b)},Lc=function(a,b,c){a=this.g(a);var d=this.g(b),e=this.g(c);if(!Na(d)||!Na(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,h=0;h<d.length;h++)if(g||a===this.g(d[h]))if(f=this.g(e[h]),f instanceof ya){var l=f.g;if("break"===l)return;if("return"===l||"continue"===l)return f}else g=!0;if(e.length===d.length+1&&(f=this.g(e[e.length-1]),f instanceof ya&&("return"===f.g||"continue"===
f.g)))return f},Mc=function(a,b,c){return this.g(a)?this.g(b):this.g(c)},Nc=function(a){a=this.g(a);return a instanceof pb?"function":typeof a},Oc=function(a){for(var b=this.s,c=0;c<arguments.length;c++){var d=arguments[c];"string"!==typeof d||b.add(d,void 0)}},Pc=function(a,b,c,d){var e=this.g(d);if(this.g(c)){var f=this.J(e);if(f instanceof ya){if("break"===f.g)return;if("return"===f.g)return f}}for(;this.g(a);){var g=this.J(e);if(g instanceof ya){if("break"===g.g)break;if("return"===g.g)return g}this.g(b)}},
Qc=function(a){return~Number(this.g(a))},Rc=function(a,b){return Number(this.g(a))<<Number(this.g(b))},Sc=function(a,b){return Number(this.g(a))>>Number(this.g(b))},Tc=function(a,b){return Number(this.g(a))>>>Number(this.g(b))},Uc=function(a,b){return Number(this.g(a))&Number(this.g(b))},Vc=function(a,b){return Number(this.g(a))^Number(this.g(b))},Wc=function(a,b){return Number(this.g(a))|Number(this.g(b))};var Yc=function(){this.g=new wb;Xc(this)};Yc.prototype.Jc=function(a){return $c(this.g.o(a))};
var bd=function(a,b){return $c(ad.g.D(a,b))},Xc=function(a){var b=function(d,e){var f=a.g,g=String(e);ub.hasOwnProperty(d)&&xb(f,g||d,ub[d])};b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);var c=function(d,e){xb(a.g,String(d),e)};c(0,Ob);c(1,Pb);c(2,Qb);c(3,Rb);c(53,Tb);c(4,Ub);c(5,Vb);c(52,Wb);c(6,Xb);c(9,Vb);c(50,Yb);c(10,Zb);c(12,$b);c(13,ac);c(47,dc);c(54,ec);c(55,fc);c(63,lc);c(64,ic);c(65,jc);c(66,kc);c(15,mc);c(16,nc);c(17,nc);c(18,oc);c(19,pc);c(20,qc);c(21,rc);c(22,sc);
c(23,tc);c(24,uc);c(25,vc);c(26,wc);c(27,xc);c(28,yc);c(29,zc);c(45,Ac);c(30,Ec);c(32,Fc);c(33,Fc);c(34,Gc);c(35,Gc);c(46,Hc);c(36,Ic);c(43,Jc);c(37,Kc);c(38,Lc);c(39,Mc);c(40,Nc);c(41,Oc);c(42,Pc);c(58,Qc);c(57,Rc);c(60,Sc);c(61,Tc);c(56,Uc);c(62,Vc);c(59,Wc)},dd=function(){var a=ad,b=cd();xb(a.g,"require",b)},id=function(a,b){a.g.g.S=b};
function $c(a){if(a instanceof ya||a instanceof pb||a instanceof k||a instanceof tb||a instanceof yb||null===a||void 0===a||"string"===typeof a||"number"===typeof a||"boolean"===typeof a)return a};
var jd=[],kd={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},ld=function(a){return kd[a]},md=/[\x00\x22\x26\x27\x3c\x3e]/g;var qd=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,rd={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},sd=function(a){return rd[a]};
jd[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(qd,sd)+"'"}};var Ad=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Bd={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Cd=function(a){return Bd[a]};jd[16]=function(a){return a};var Ed;
var Fd=[],Gd=[],Hd=[],Nd=[],Od=[],Pd={},Qd,Rd,Sd,Td=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Ud=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=Pd[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(d&&b&&b.Cf&&b.Cf(a[f]),e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):Ed(c,e,b)},Wd=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&
(d[e]=Vd(a[e],b,c));return d},Vd=function(a,b,c){if(Na(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Vd(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var g=Fd[f];if(!g||b.Td(g))return;c[f]=!0;try{var h=Wd(g,b,c);h.vtp_gtmEventId=b.id;d=Ud(h,b);Sd&&(d=Sd.zh(d,h))}catch(y){b.Rf&&b.Rf(y,Number(f)),d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Vd(a[l],b,c)]=Vd(a[l+1],b,c);return d;case "template":d=[];for(var m=
!1,p=1;p<a.length;p++){var n=Vd(a[p],b,c);Rd&&(m=m||n===Rd.wc);d.push(n)}return Rd&&m?Rd.Ch(d):d.join("");case "escape":d=Vd(a[1],b,c);if(Rd&&Na(a[1])&&"macro"===a[1][0]&&Rd.Wh(a))return Rd.ri(d);d=String(d);for(var t=2;t<a.length;t++)jd[a[t]]&&(d=jd[a[t]](d));return d;case "tag":var r=a[1];if(!Nd[r])throw Error("Unable to resolve tag reference "+r+".");return d={If:a[2],index:r};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=Xd(u,b,c),w=!!a[4];return w||2!==v?w!==
(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Xd=function(a,b,c){try{return Qd(Wd(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Yd=function(){var a=function(b){return{toString:function(){return b}}};return{gg:a("consent"),ye:a("convert_case_to"),ze:a("convert_false_to"),Ae:a("convert_null_to"),Be:a("convert_true_to"),Ce:a("convert_undefined_to"),Qi:a("debug_mode_metadata"),Qa:a("function"),Ug:a("instance_name"),Vg:a("live_only"),Wg:a("malware_disabled"),Xg:a("metadata"),Ti:a("original_activity_id"),Ui:a("original_vendor_template_id"),Zg:a("once_per_event"),sf:a("once_per_load"),wf:a("setup_tags"),xf:a("tag_id"),yf:a("teardown_tags")}}();var Zd=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.o=a;this.g=c};na(Zd,Error);function $d(a,b){if(Na(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)$d(a[c],b[c])}};var ae=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.s=a;this.o=b;this.g=[]};na(ae,Error);var ce=function(){return function(a,b){a instanceof ae||(a=new ae(a,be));b&&a.g.push(b);throw a;}};function be(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)La(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var de=null,ge=function(a){function b(n){for(var t=0;t<n.length;t++)d[n[t]]=!0}var c=[],d=[];de=ee(a);for(var e=0;e<Gd.length;e++){var f=Gd[e],g=fe(f);if(g){for(var h=f.add||[],l=0;l<h.length;l++)c[h[l]]=!0;b(f.block||[])}else null===g&&b(f.block||[])}for(var m=[],p=0;p<Nd.length;p++)c[p]&&!d[p]&&(m[p]=!0);return m},fe=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=de(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var g=de(e[f]);if(2===g)return null;
if(1===g)return!1}return!0},ee=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Xd(Hd[c],a));return b[c]}};var he={zh:function(a,b){b[Yd.ye]&&"string"===typeof a&&(a=1==b[Yd.ye]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Yd.Ae)&&null===a&&(a=b[Yd.Ae]);b.hasOwnProperty(Yd.Ce)&&void 0===a&&(a=b[Yd.Ce]);b.hasOwnProperty(Yd.Be)&&!0===a&&(a=b[Yd.Be]);b.hasOwnProperty(Yd.ze)&&!1===a&&(a=b[Yd.ze]);return a}};var ie=function(){this.g={}};function je(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(h){g="string"===typeof h?g+(": "+h):h instanceof Error?g+(": "+h.message):g+"."}if(!f)throw new Zd(c,d,g);}}function ke(a,b,c){return function(){var d=arguments[0];if(d){var e=a.g[d],f=a.g.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));je(e,b,d,g);je(f,b,d,g)}}}};var oe=function(a){var b=le.F,c=this;this.o=new ie;this.g={};var d={},e=ke(this.o,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Ta(a,function(f,g){var h={};Ta(g,function(l,m){var p=me(l,m);h[l]=p.assert;d[l]||(d[l]=p.N)});c.g[f]=function(l,m){var p=h[l];if(!p)throw ne(l,{},"The requested permission "+l+" is not configured.");var n=Array.prototype.slice.call(arguments,0);p.apply(void 0,n);e.apply(void 0,n)}})},qe=function(a){return pe.g[a]||
function(){}};function me(a,b){var c=Td(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=ne;try{return Ud(c)}catch(d){return{assert:function(e){throw new Zd(e,{},"Permission "+e+" is unknown.");},N:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function ne(a,b,c){return new Zd(a,b,c)};var re=!1;var se={};se.Li=Xa('');se.Fh=Xa('');var te=re,ue=se.Fh,ve=se.Li;
var Je=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},Ke=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;Je(b,"/*")&&(b=b.slice(0,-2));Je(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var h=d[d.length-1];return a.lastIndexOf(h)===a.length-h.length},Le=/^[a-z0-9-]+$/i,Me=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
Oe=function(a,b){var c;if(!(c=!Ne(a))){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!Le.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var h;var l=a,m=b[g];if(!Me.exec(m))throw Error("Invalid Wildcard");var p=m.slice(8),n=p.slice(0,p.indexOf("/")),t;var r=l.hostname,u=n;if(0!==u.indexOf("*."))t=r.toLowerCase()===u.toLowerCase();else{u=u.slice(2);var v=r.toLowerCase().indexOf(u.toLowerCase());t=-1===v?!1:r.length===u.length?
!0:r.length!==u.length+v?!1:"."===r[v-1]}if(t){var w=p.slice(p.indexOf("/"));h=Ke(l.pathname+l.search,w)?!0:!1}else h=!1;if(h)return!0}return!1},Ne=function(a){return"https:"===a.protocol&&(!a.port||"443"===a.port)};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var Re=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,Se={Fn:"function",DustMap:"Object",List:"Array"},H=function(a,b,c){for(var d=0;d<b.length;d++){var e=Re.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],h=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==h){var p=typeof l;l instanceof pb?p="Fn":l instanceof k?p="List":l instanceof tb?p="DustMap":
l instanceof yb&&(p="OpaqueValue");if(p!=h)throw Error("Error in "+a+". Argument "+f+" has type "+p+", which does not match required type "+(Se[h]||h)+".");}}};function Te(a){return""+a}
function Ue(a,b){var c=[];return c};var Ve=function(a,b){var c=new pb(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=this.g(d[e]);return b.apply(this,d)});c.s=!0;return c},We=function(a,b){var c=new tb,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Ka(e)?c.set(d,Ve(a+"_"+d,e)):(La(e)||q(e)||"boolean"==typeof e)&&c.set(d,e)}c.s=!0;return c};var Xe=function(a,b){H(this.o.g,["apiName:!string","message:?string"],arguments);var c={},d=new tb;return d=We("AssertApiSubject",c)};var Ye=function(a,b){H(this.o.g,["actual:?*","message:?string"],arguments);var c={},d=new tb;return d=We("AssertThatSubject",c)};function Ze(a){return function(){for(var b=[],c=this.s,d=0;d<arguments.length;++d)b.push(Eb(arguments[d],c));return Db(a.apply(null,b))}}var af=function(){for(var a=Math,b=$e,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=Ze(a[e].bind(a)))}return c};var bf=function(a){var b;return b};var cf=function(a){var b;return b};var df=function(a){H(this.o.g,["uri:!string"],arguments);return encodeURI(a)};var ef=function(a){H(this.o.g,["uri:!string"],arguments);return encodeURIComponent(a)};var ff=function(a){H(this.o.g,["message:?string"],arguments);};var gf=function(a,b){H(this.o.g,["min:!number","max:!number"],arguments);return Pa(a,b)};var hf=function(a,b,c){var d=a.s.g;if(!d)throw Error("Missing program state.");d.oh.apply(null,Array.prototype.slice.call(arguments,1))};var jf=function(){hf(this,"read_container_data");var a=new tb;a.set("containerId",'GTM-MBP7H56');a.set("version",'131');a.set("environmentName",'');a.set("debugMode",te);a.set("previewMode",ve);a.set("environmentMode",ue);a.s=!0;return a};var kf=function(){return(new Date).getTime()};var lf=function(a){if(null===a)return"null";if(a instanceof k)return"array";if(a instanceof pb)return"function";if(a instanceof yb){a=a.sa;if(void 0===a.constructor||void 0===a.constructor.name){var b=String(a);return b.substring(8,b.length-1)}return String(a.constructor.name)}return typeof a};var mf=function(a){function b(c){return function(d){try{return c(d)}catch(e){(te||ve)&&a.call(this,e.message)}}}return{parse:b(function(c){return Db(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(Eb(c))})}};var nf=function(a){return Va(Eb(a,this.s))};var of=function(a){return Number(Eb(a,this.s))};var pf=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var qf=function(a,b,c){var d=null,e=!1;return e?d:null};var $e="floor ceil round max min abs pow sqrt".split(" ");var rf=function(){var a={};return{Mh:function(b){return a.hasOwnProperty(b)?a[b]:void 0},Fi:function(b,c){a[b]=c},reset:function(){a={}}}},sf=function(a,b){H(this.o.g,["apiName:!string","mock:?*"],arguments);};var tf=function(){this.g={};this.o={}};tf.prototype.get=function(a,b){var c=this.g.hasOwnProperty(a)?this.g[a]:void 0;return c};
tf.prototype.add=function(a,b,c){if(this.g.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(this.o.hasOwnProperty(a))throw"Attempting to add an API with an existing private API name: "+a+".";this.g[a]=c?void 0:Ka(b)?Ve(a,b):We(a,b)};
var uf=function(a,b,c){if(a.o.hasOwnProperty(b))throw"Attempting to add a private function which already exists: "+b+".";if(a.g.hasOwnProperty(b))throw"Attempting to add a private function with an existing API name: "+b+".";a.o[b]=Ka(c)?Ve(b,c):We(b,c)};function vf(){var a={};return a};var I={Fb:"_ee",Bd:"_syn",Xi:"_uei",vd:"_eu",Vi:"_pci",jd:"event_callback",oc:"event_timeout",ja:"gtag.config",Ma:"gtag.get",na:"purchase",ab:"refund",La:"begin_checkout",Za:"add_to_cart",$a:"remove_from_cart",pg:"view_cart",Ge:"add_to_wishlist",Aa:"view_item",Fe:"view_promotion",Ee:"select_promotion",dd:"select_item",kc:"view_item_list",De:"add_payment_info",og:"add_shipping_info",Da:"value_key",Ca:"value_callback",ka:"allow_ad_personalization_signals",rd:"restricted_data_processing",vb:"allow_google_signals",
la:"cookie_expires",yb:"cookie_update",Cb:"session_duration",qa:"user_properties",Pa:"transport_url",O:"ads_data_redaction",C:"ad_storage",K:"analytics_storage",xe:"region",hg:"wait_for_update"};I.ff=[I.na,I.ab,I.La,I.Za,I.$a,I.pg,I.Ge,I.Aa,I.Fe,I.Ee,I.kc,I.dd,I.De,I.og];I.ef=[I.ka,I.vb,I.yb];I.hf=[I.la,I.oc,I.Cb];var wf={},xf=function(a,b){wf[a]=wf[a]||[];wf[a][b]=!0},yf=function(a){for(var b=[],c=wf[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var zf=function(a){xf("GTM",a)};var Af=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},Bf=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};var Cf,Df=function(){if(void 0===Cf){var a=null,b=oa.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:xa,createScript:xa,createScriptURL:xa})}catch(c){oa.console&&oa.console.error(c.message)}Cf=a}else Cf=a}return Cf};var Ff=function(a,b){this.g=b===Ef?a:""};Ff.prototype.toString=function(){return this.g+""};var Ef={};var Gf=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Hf;a:{var If=oa.navigator;if(If){var Jf=If.userAgent;if(Jf){Hf=Jf;break a}}Hf=""}var Kf=function(a){return-1!=Hf.indexOf(a)};var Mf=function(a,b,c){this.g=c===Lf?a:""};Mf.prototype.toString=function(){return this.g.toString()};var Nf=function(a){return a instanceof Mf&&a.constructor===Mf?a.g:"type_error:SafeHtml"},Lf={},Of=new Mf(oa.trustedTypes&&oa.trustedTypes.emptyHTML||"",0,Lf);var Pf=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);var c=a.firstChild.firstChild;a.innerHTML=Nf(Of);return!c.parentElement}),Qf=function(a,b){if(Pf())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Nf(b)};var Rf=function(a){var b=Df(),c=b?b.createHTML(a):a;return new Mf(c,null,Lf)};var F=window,M=document,Sf=navigator,Tf=M.currentScript&&M.currentScript.src,Uf=function(a,b){var c=F[a];F[a]=void 0===c?b:c;return F[a]},Vf=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Wf=function(a,b,c){var d=M.createElement("script");d.type="text/javascript";d.async=!0;var e,f=Df(),g=f?f.createScriptURL(a):a;e=new Ff(g,Ef);d.src=e instanceof Ff&&e.constructor===Ff?e.g:"type_error:TrustedResourceUrl";
var h=va(d.ownerDocument&&d.ownerDocument.defaultView);h&&d.setAttribute("nonce",h);Vf(d,b);c&&(d.onerror=c);var l=va();l&&d.setAttribute("nonce",l);var m=M.getElementsByTagName("script")[0]||M.body||M.head;m.parentNode.insertBefore(d,m);return d},Xf=function(){if(Tf){var a=Tf.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Yf=function(a,b){var c=M.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";
var d=M.body&&M.body.lastChild||M.body||M.head;d.parentNode.insertBefore(c,d);Vf(c,b);void 0!==a&&(c.src=a);return c},Zf=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},$f=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},ag=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},N=function(a){F.setTimeout(a,
0)},bg=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},cg=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},dg=function(a){var b=M.createElement("div"),c=Rf("A<div>"+a+"</div>");Qf(b,c);b=b.lastChild;for(var d=[];b.firstChild;)d.push(b.removeChild(b.firstChild));return d},fg=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=
a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;f=f.parentElement}return null},gg=function(a){Sf.sendBeacon&&Sf.sendBeacon(a)||Zf(a)},hg=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var ig={},jg=function(){return void 0==ig.gtag_cs_api?!1:ig.gtag_cs_api};var kg=[];function lg(){var a=Uf("google_tag_data",{});a.ics||(a.ics={entries:{},set:mg,update:ng,addListener:og,notifyListeners:pg,active:!1,usedDefault:!1});return a.ics}
function mg(a,b,c,d,e,f){var g=lg();g.active=!0;g.usedDefault=!0;if(void 0!=b){var h=g.entries,l=h[a]||{},m=l.region,p=c&&q(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(p===e||(p===d?m!==e:!p&&!m)){var n=!!(f&&0<f&&void 0===l.update),t={region:p,initial:"granted"===b,update:l.update,quiet:n};h[a]=t;n&&F.setTimeout(function(){h[a]===t&&t.quiet&&(t.quiet=!1,qg(a),pg(),xf("TAGGING",2))},f)}}}
function ng(a,b){var c=lg();c.active=!0;if(void 0!=b){var d=rg(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=rg(a);f.quiet?(f.quiet=!1,qg(a)):g!==d&&qg(a)}}function og(a,b){kg.push({Ef:a,Ih:b})}function qg(a){for(var b=0;b<kg.length;++b){var c=kg[b];Na(c.Ef)&&-1!==c.Ef.indexOf(a)&&(c.Uf=!0)}}function pg(a){for(var b=0;b<kg.length;++b){var c=kg[b];if(c.Uf){c.Uf=!1;try{c.Ih({Df:a})}catch(d){}}}}
var rg=function(a){var b=lg().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},sg=function(a){return(lg().entries[a]||{}).initial},tg=function(a){return!(lg().entries[a]||{}).quiet},ug=function(){return jg()?lg().active:!1},vg=function(a,b){lg().addListener(a,b)},wg=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!tg(b[e]))return!0;return!1}if(c()){var d=!1;vg(b,function(e){d||c()||(d=!0,a(e))})}else a({})},xg=function(a,b){if(!1===rg(b)){var c=!1;vg([b],
function(d){!c&&rg(b)&&(a(d),c=!0)})}};function yg(a){for(var b=[],c=0;c<zg.length;c++){var d=a(zg[c]);b[c]=!0===d?"1":!1===d?"0":"-"}return b.join("")}
var zg=[I.C,I.K],Ag=function(a){var b=a[I.xe];b&&zf(40);var c=a[I.hg];c&&zf(41);for(var d=Na(b)?b:[b],e=0;e<d.length;++e)for(var f=0;f<zg.length;f++){var g=zg[f],h=a[zg[f]],l=d[e];lg().set(g,h,l,"CO","CO-CUN",c)}},Bg=function(a,b){for(var c=0;c<zg.length;c++){var d=zg[c],e=a[zg[c]];lg().update(d,e)}lg().notifyListeners(b)},Cg=function(a){var b=rg(a);return void 0!=b?b:!0},Dg=function(){return"G1"+yg(rg)},Eg=function(a,b){wg(a,b)};var Gg=function(a){return Fg?M.querySelectorAll(a):null},Hg=function(a,b){if(!Fg)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!M.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Ig=!1;if(M.querySelectorAll)try{var Jg=M.querySelectorAll(":root");Jg&&1==Jg.length&&Jg[0]==M.documentElement&&(Ig=!0)}catch(a){}var Fg=Ig;var Kg=function(a){if(M.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!F.getComputedStyle)return!0;var c=F.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var h=g.indexOf("opacity(");0<=h&&(g=g.substring(h+8,g.indexOf(")",h)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-1)),f=Math.min(g,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=F.getComputedStyle(d,
null))}return!1};
var Lg=function(){var a=M.body,b=M.documentElement||a&&a.parentElement,c,d;if(M.compatMode&&"BackCompat"!==M.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,g){return f&&g?Math.min(f,g):Math.max(f,g)};zf(7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},Mg=function(a){var b=Lg(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,g=e.right-e.left;return f&&g?(1-Math.min((Math.max(0-e.left,0)+Math.max(e.right-
d,0))/g,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0};var Tg=/:[0-9]+$/,Ug=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var h=f[g].split("=");if(decodeURIComponent(h[0]).replace(/\+/g," ")===b){var l=h.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},Xg=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Vg(a.protocol)||Vg(F.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
F.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||F.location.hostname).replace(Tg,"").toLowerCase());return Wg(a,b,c,d,e)},Wg=function(a,b,c,d,e){var f,g=Vg(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=Yg(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(Tg,"").toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||xf("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=B(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Ug(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Vg=function(a){return a?a.replace(":",
"").toLowerCase():""},Yg=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},Zg=function(a){var b=M.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||xf("TAGGING",1),c="/"+c);var d=b.hostname.replace(Tg,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},$g=function(a){function b(m){var p=m.split("=")[0];return 0>d.indexOf(p)?m:p+"=0"}function c(m){return m.split("&").map(b).filter(function(p){return void 0!=
p}).join("&")}var d="gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),e=Zg(a),f=a.split(/[?#]/)[0],g=e.search,h=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===h[0]&&(h=h.substring(1));g=c(g);h=c(h);""!==g&&(g="?"+g);""!==h&&(h="#"+h);var l=""+f+g+h;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};var ah=new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),bh=new RegExp(/support|noreply/i),ch=["SCRIPT","IMG","SVG","PATH","BR"],dh=["BR"];function eh(a){var b;if(a===M.body)b="body";else{var c;if(a.id)c="#"+a.id;else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var g=0;g<f.childElementCount;g++)if(f.children[g]===a){e=g+1;break a}e=-1}else e=1}d=eh(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b}
var hh=function(){var a=!0;var b=a,c;var d=[],e=M.body;if(e){for(var f=e.querySelectorAll("*"),g=0;g<f.length&&1E4>g;g++){var h=f[g];if(!(0<=ch.indexOf(h.tagName.toUpperCase()))){for(var l=!1,m=0;m<h.childElementCount&&1E4>m;m++)if(!(0<=dh.indexOf(h.children[m].tagName.toUpperCase()))){l=!0;break}l||d.push(h)}}c={elements:d,status:1E4<f.length?"2":"1"}}else c=
{elements:d,status:"4"};for(var p=c,n=p.elements,t=[],r=0;r<n.length;r++){var u=n[r],v=u.textContent;u.value&&(v=u.value);if(v){var w=v.match(ah);if(w){var y=w[0],x;if(F.location){var z=Wg(F.location,"host",!0);x=0<=y.toLowerCase().indexOf(z)}else x=!1;x||t.push({element:u,bd:y})}}}var A;for(var C=[],D=10<t.length?"3":p.status,E=0;E<t.length&&
10>E;E++){var J=t[E].element,Q=t[E].bd,V=!1;C.push({bd:Q,querySelector:eh(J),tagName:J.tagName,isVisible:!Kg(J),type:1,Pc:!!V})}return{elements:C,status:D}};var le={},O=null,vh=Math.random();le.F="GTM-MBP7H56";le.Ac="1k0";le.Si="";le.ig="ChEIgI3kgAYQ+5jancjXyJfvARIkAAz82FBvY3pvx2uDy67eqSJ1x93mARoG5zS4jCaQnVyzOJX4GgJsWg\x3d\x3d";var wh={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},xh={__paused:!0,__tg:!0},yh;for(yh in wh)wh.hasOwnProperty(yh)&&(xh[yh]=!0);var zh="www.googletagmanager.com/gtm.js";
var Ah=zh,Bh=Xa(""),Ch=null,Dh=null,Eh="//www.googletagmanager.com/a?id="+le.F+"&cv=131",Fh={},Gh={},Hh=function(){var a=O.sequence||1;O.sequence=a+1;return a};var Ih={},Jh=new Qa,Kh={},Lh={},Oh={name:"dataLayer",set:function(a,b){G(kb(a,b),Kh);Mh()},get:function(a){return Nh(a,2)},reset:function(){Jh=new Qa;Kh={};Mh()}},Nh=function(a,b){return 2!=b?Jh.get(a):Ph(a)},Ph=function(a,b){var c=a.split(".");b=b||[];for(var d=Kh,e=0;e<c.length;e++){if(null===d)return!1;if(void 0===d)break;d=d[c[e]];if(-1!==B(b,d))return}return d},Qh=function(a,b){Lh.hasOwnProperty(a)||(Jh.set(a,b),G(kb(a,b),Kh),Mh())},Mh=function(a){Ta(Lh,function(b,c){Jh.set(b,c);G(kb(b,void 0),
Kh);G(kb(b,c),Kh);a&&delete Lh[b]})},Rh=function(a,b,c){Ih[a]=Ih[a]||{};var d=1!==c?Ph(b):Jh.get(b);"array"===Ab(d)||"object"===Ab(d)?Ih[a][b]=G(d):Ih[a][b]=d},Sh=function(a,b){if(Ih[a])return Ih[a][b]},Th=function(a,b){Ih[a]&&delete Ih[a][b]};var Wh={},Xh=function(a,b){if(F._gtmexpgrp&&F._gtmexpgrp.hasOwnProperty(a))return F._gtmexpgrp[a];void 0===Wh[a]&&(Wh[a]=Math.floor(Math.random()*b));return Wh[a]};var Yh=function(a){var b=1,c,d,e;if(a)for(b=0,d=a.length-1;0<=d;d--)e=a.charCodeAt(d),b=(b<<6&268435455)+e+(e<<14),c=b&266338304,b=0!=c?b^c>>21:b;return b};function Zh(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),h=g[0].replace(/^\s*|\s*$/g,"");if(h&&h==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var ai=function(a,b,c,d){return $h(d)?Zh(a,String(b||document.cookie),c):[]},di=function(a,b,c,d,e){if($h(e)){var f=bi(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=ci(f,function(g){return g.Ic},b);if(1===f.length)return f[0].id;f=ci(f,function(g){return g.Xb},c);return f[0]?f[0].id:void 0}}};function ei(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=ai(b,f,!1,d).indexOf(c)}
var ii=function(a,b,c,d){function e(w,y,x){if(null==x)return delete h[y],w;h[y]=x;return w+"; "+y+"="+x}function f(w,y){if(null==y)return delete h[y],w;h[y]=!0;return w+"; "+y}if(!$h(c.ya))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=fi(b),g=a+"="+b);var h={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.fi);g=e(g,"samesite",
c.zi);c.Ci&&(g=f(g,"secure"));var m=c.domain;if("auto"===m){for(var p=gi(),n=void 0,t=!1,r=0;r<p.length;++r){var u="none"!==p[r]?p[r]:void 0,v=e(g,"domain",u);v=f(v,c.flags);try{d&&d(a,h)}catch(w){n=w;continue}t=!0;if(!hi(u,c.path)&&ei(v,a,b,c.ya))return 0}if(n&&!t)throw n;return 1}m&&"none"!==m&&(g=e(g,"domain",m));g=f(g,c.flags);d&&d(a,h);return hi(m,c.path)?1:ei(g,a,b,c.ya)?0:1},ji=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return ii(a,b,c)};
function ci(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var h=a[g],l=b(h);l===c?d.push(h):void 0===f||l<f?(e=[h],f=l):l===f&&e.push(h)}return 0<d.length?d:e}function bi(a,b,c){for(var d=[],e=ai(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),Ic:1*l[0]||1,Xb:1*l[1]||1}))}}return d}
var fi=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},ki=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,li=/(^|\.)doubleclick\.net$/i,hi=function(a,b){return li.test(document.location.hostname)||"/"===b&&ki.test(a)},gi=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;li.test(e)||ki.test(e)||a.push("none");
return a},$h=function(a){if(!jg()||!a||!ug())return!0;if(!tg(a))return!1;var b=rg(a);return null==b?!0:!!b};var mi=function(){for(var a=Sf.userAgent+(M.cookie||"")+(M.referrer||""),b=a.length,c=F.history.length;0<c;)a+=c--^b++;return[Math.round(2147483647*Math.random())^Yh(a)&2147483647,Math.round(ab()/1E3)].join(".")},pi=function(a,b,c,d,e){var f=ni(b);return di(a,f,oi(c),d,e)},qi=function(a,b,c,d){var e=""+ni(c),f=oi(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},ni=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},oi=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&
(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function ri(a,b,c){var d,e=a.Wb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||ab())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var si=["1"],ti={},wi=function(a){var b=ui(a.prefix),c=ti[b];c&&vi(b,c,a)},yi=function(a){var b=ui(a.prefix);if(!ti[b]&&!xi(b,a.path,a.domain)){var c=mi();vi(b,c,a);var d=Uf("google_tag_data",{});d._gcl_au?xf("GTM",57):d._gcl_au=c;xi(b,a.path,a.domain)}};function vi(a,b,c){var d=qi(b,"1",c.domain,c.path),e=ri(c);e.ya="ad_storage";ji(a,d,e)}function xi(a,b,c){var d=pi(a,b,c,si,"ad_storage");d&&(ti[a]=d);return d}function ui(a){return(a||"_gcl")+"_au"};function zi(){for(var a=Ai,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Bi(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Ai,Ci;
function Di(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),p=Ci[m];if(null!=p)return p;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Ai=Ai||Bi();Ci=Ci||zi();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),h=b(64);if(64===h&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=h&&(c+=String.fromCharCode(g<<6&192|h)))}};var Ei;var Ii=function(){var a=Fi,b=Gi,c=Hi(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){$f(M,"mousedown",d);$f(M,"keyup",d);$f(M,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},Ji=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};Hi().decorators.push(f)},Ki=function(a,b,c){for(var d=Hi().decorators,e={},f=0;f<d.length;++f){var g=
d[f],h;if(h=!c||g.forms)a:{var l=g.domains,m=a,p=!!g.sameHost;if(l&&(p||m!==M.location.hostname))for(var n=0;n<l.length;n++)if(l[n]instanceof RegExp){if(l[n].test(m)){h=!0;break a}}else if(0<=m.indexOf(l[n])||p&&0<=l[n].indexOf(m)){h=!0;break a}h=!1}if(h){var t=g.placement;void 0==t&&(t=g.fragment?2:1);t===b&&db(e,g.callback())}}return e},Hi=function(){var a=Uf("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Li=/(.*?)\*(.*?)\*(.*)/,Mi=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Ni=/^(?:www\.|m\.|amp\.)+/,Si=/([^?#]+)(\?[^#]*)?(#.*)?/;function Ti(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var Vi=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()){b.push(c);var e=b,f=e.push,g,h=String(d);Ai=Ai||Bi();Ci=Ci||zi();for(var l=[],m=0;m<h.length;m+=3){var p=m+1<h.length,n=m+2<h.length,t=h.charCodeAt(m),r=p?h.charCodeAt(m+1):0,u=n?h.charCodeAt(m+2):0,v=t>>2,w=(t&3)<<4|r>>4,y=(r&15)<<2|u>>6,x=u&63;n||(x=64,p||(y=64));l.push(Ai[v],Ai[w],Ai[y],Ai[x])}g=l.join("");f.call(e,g)}}var z=b.join("*");return["1",Ui(z),
z].join("*")},Ui=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Ei)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,h=0;8>h;h++)g=g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}Ei=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Ei[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Xi=function(){return function(a){var b=Zg(F.location.href),
c=b.search.replace("?",""),d=Ug(c,"_gl",!1,!0)||"";a.query=Wi(d)||{};var e=Xg(b,"fragment").match(Ti("_gl"));a.fragment=Wi(e&&e[3]||"")||{}}},Yi=function(a){var b=Xi(),c=Hi();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(db(d,e.query),a&&db(d,e.fragment));return d},Wi=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Li.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var h=g[3],l;a:{for(var m=g[2],p=
0;p<b;++p)if(m===Ui(h,p)){l=!0;break a}l=!1}if(l){for(var n={},t=h?h.split("*"):[],r=0;r<t.length;r+=2)n[t[r]]=Di(t[r+1]);return n}}}}catch(u){}};function Zi(a,b,c,d){function e(p){var n=p,t=Ti(a).exec(n),r=n;if(t){var u=t[2],v=t[4];r=t[1];v&&(r=r+u+v)}p=r;var w=p.charAt(p.length-1);p&&"&"!==w&&(p+="&");return p+m}d=void 0===d?!1:d;var f=Si.exec(c);if(!f)return"";var g=f[1],h=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):h="?"+e(h.substring(1));return""+g+h+l}
function $i(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=Ki(b,1,c),e=Ki(b,2,c),f=Ki(b,3,c);if(eb(d)){var g=Vi(d);c?aj("_gl",g,a):bj("_gl",g,a,!1)}if(!c&&eb(e)){var h=Vi(e);bj("_gl",h,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,p=f[l],n=a;if(n.tagName){if("a"===n.tagName.toLowerCase()){bj(m,p,n,void 0);break a}if("form"===n.tagName.toLowerCase()){aj(m,p,n);break a}}"string"==typeof n&&Zi(m,p,n,void 0)}}
function bj(a,b,c,d){if(c.href){var e=Zi(a,b,c.href,void 0===d?!1:d);Gf.test(e)&&(c.href=e)}}
function aj(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var h=e[g];if(h.name===a){h.setAttribute("value",b);f=!0;break}}if(!f){var l=M.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=Zi(a,b,c.action);Gf.test(m)&&(c.action=m)}}}
var Fi=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||$i(e,e.hostname)}}catch(g){}},Gi=function(a){try{if(a.action){var b=Xg(Zg(a.action),"host");$i(a,b)}}catch(c){}},cj=function(a,b,c,d){Ii();Ji(a,b,"fragment"===c?2:1,!!d,!1)},dj=function(a,b){Ii();Ji(a,[Wg(F.location,"host",!0)],b,!0,!0)},ej=function(){var a=M.location.hostname,b=Mi.exec(M.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var h=a.replace(Ni,""),l=e.replace(Ni,""),m;if(!(m=h===l)){var p="."+l;m=h.substring(h.length-p.length,h.length)===p}return m},fj=function(a,b){return!1===a?!1:a||b||ej()};var gj=/^\w+$/,hj=/^[\w-]+$/,ij=/^~?[\w-]+$/,jj={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},kj=function(){if(!jg()||!ug())return!0;var a=rg("ad_storage");return null==a?!0:!!a},lj=function(a,b){tg("ad_storage")?kj()?a():xg(a,"ad_storage"):b?xf("TAGGING",3):wg(function(){lj(a,!0)},["ad_storage"])},oj=function(a){var b=[];if(!M.cookie)return b;var c=ai(a,M.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d=0;d<c.length;d++){var e=mj(c[d]);e&&-1===B(b,e)&&b.push(e)}return nj(b)};
function pj(a){return a&&"string"==typeof a&&a.match(gj)?a:"_gcl"}
var rj=function(){var a=Zg(F.location.href),b=Xg(a,"query",!1,void 0,"gclid"),c=Xg(a,"query",!1,void 0,"gclsrc"),d=Xg(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Ug(e,"gclid",!1,void 0);c=c||Ug(e,"gclsrc",!1,void 0)}return qj(b,c,d)},qj=function(a,b,c){var d={},e=function(f,g){d[g]||(d[g]=[]);d[g].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(hj))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":e(a,
"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},sj=function(a,b){switch(a){case void 0:case "aw":return"aw"===b;case "aw.ds":return"aw"===b||"dc"===b;case "ds":case "3p.ds":return"dc"===b;case "gf":return"gf"===b;case "ha":return"ha"===b;case "gp":return"gp"===b}return!1},uj=function(a){var b=rj();lj(function(){tj(b,a)})};
function tj(a,b,c){function d(l,m){var p=vj(l,e);p&&ji(p,m,f)}b=b||{};var e=pj(b.prefix);c=c||ab();var f=ri(b,c,!0);f.ya="ad_storage";var g=Math.round(c/1E3),h=function(l){return["GCL",g,l].join(".")};a.aw&&(!0===b.nj?d("aw",h("~"+a.aw[0])):d("aw",h(a.aw[0])));a.dc&&d("dc",h(a.dc[0]));a.gf&&d("gf",h(a.gf[0]));a.ha&&d("ha",h(a.ha[0]));a.gp&&d("gp",h(a.gp[0]))}
var xj=function(a,b){var c=Yi(!0);lj(function(){for(var d=pj(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==jj[f]){var g=vj(f,d),h=c[g];if(h){var l=Math.min(wj(h),ab()),m;b:{for(var p=l,n=ai(g,M.cookie,void 0,"ad_storage"),t=0;t<n.length;++t)if(wj(n[t])>p){m=!0;break b}m=!1}if(!m){var r=ri(b,l,!0);r.ya="ad_storage";ji(g,h,r)}}}}tj(qj(c.gclid,c.gclsrc),b)})},vj=function(a,b){var c=jj[a];if(void 0!==c)return b+c},wj=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function mj(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var yj=function(a,b,c,d,e){if(Na(b)){var f=pj(e),g=function(){for(var h={},l=0;l<a.length;++l){var m=vj(a[l],f);if(m){var p=ai(m,M.cookie,void 0,"ad_storage");p.length&&(h[m]=p.sort()[p.length-1])}}return h};lj(function(){cj(g,b,c,d)})}},nj=function(a){return a.filter(function(b){return ij.test(b)})},zj=function(a,b){for(var c=pj(b.prefix),d={},e=0;e<a.length;e++)jj[a[e]]&&(d[a[e]]=jj[a[e]]);lj(function(){Ta(d,function(f,g){var h=ai(c+g,M.cookie,void 0,"ad_storage");if(h.length){var l=h[0],m=wj(l),
p={};p[f]=[mj(l)];tj(p,b,m)}})})};function Aj(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var Bj=function(){function a(e,f,g){g&&(e[f]=g)}var b=["aw","dc"];if(ug()){var c=rj();if(Aj(c,b)){var d={};a(d,"gclid",c.gclid);a(d,"dclid",c.dclid);a(d,"gclsrc",c.gclsrc);dj(function(){return d},3);dj(function(){var e={};return e._up="1",e},1)}}},Cj=function(){var a;if(kj()){for(var b=[],c=M.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({qe:f[1],value:f[2]})}var g={};if(b&&b.length)for(var h=0;h<b.length;h++){var l=b[h].value.split(".");
"1"==l[0]&&3==l.length&&l[1]&&(g[b[h].qe]||(g[b[h].qe]=[]),g[b[h].qe].push({timestamp:l[1],Lc:l[2]}))}a=g}else a={};return a};var Dj=/^\d+\.fls\.doubleclick\.net$/,Ej=!1;function Fj(a,b){tg(I.C)?Cg(I.C)?a():xg(a,I.C):b?zf(42):Eg(function(){Fj(a,!0)},[I.C])}function Gj(a){var b=Zg(F.location.href),c=Xg(b,"host",!1);if(c&&c.match(Dj)){var d=Xg(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Hj(a,b,c){if("aw"==a||"dc"==a){var d=Gj("gcl"+a);if(d)return d.split(".")}var e=pj(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!Cg(I.C)&&c,g;g=rj()[a]||[];if(0<g.length)return f?["0"]:g}var h=vj(a,e);return h?oj(h):[]}
var Ij=function(a){var b=Gj("gac");if(b)return!Cg(I.C)&&a?"0":decodeURIComponent(b);var c=Cj(),d=[];Ta(c,function(e,f){for(var g=[],h=0;h<f.length;h++)g.push(f[h].Lc);g=nj(g);g.length&&d.push(e+":"+g.join(","))});return d.join(";")},Kj=function(a,b){if(Ej)Jj(a,b,"dc");else{var c=rj().dc||[];Fj(function(){yi(b);var d=ti[ui(b.prefix)],e=!1;if(d&&0<c.length){var f=O.joined_au=O.joined_au||{},g=b.prefix||"_gcl";if(!f[g])for(var h=0;h<c.length;h++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[h]+"&auiddc="+
d;gg(l);e=f[g]=!0}}null==a&&(a=e);a&&d&&wi(b)})}},Jj=function(a,b,c){var d=rj(),e=[],f=d.gclid,g=d.dclid,h=d.gclsrc||"aw";!f||"aw.ds"!==h&&"aw"!==h&&"ds"!==h||c&&!sj(h,c)||e.push({Lc:f,Mf:h});!g||c&&"dc"!==c||e.push({Lc:g,Mf:"ds"});Fj(function(){yi(b);var l=ti[ui(b.prefix)],m=!1;if(l&&0<e.length)for(var p=O.joined_auid=O.joined_auid||{},n=0;n<e.length;n++){var t=e[n],r=t.Lc,u=t.Mf,v=(b.prefix||"_gcl")+"."+u+"."+r;if(!p[v]){var w="https://adservice.google.com/pagead/regclk";w=w+"?gclid="+r+"&auid="+l+"&gclsrc="+u;gg(w);
m=p[v]=!0}}null==a&&(a=m);a&&l&&wi(b)})};var Lj=/[A-Z]+/,Mj=/\s/,Nj=function(a){if(q(a)&&(a=Za(a),!Mj.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Lj.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],H:d}}}}},Pj=function(a){for(var b={},c=0;c<a.length;++c){var d=Nj(a[c]);d&&(b[d.id]=d)}Oj(b);var e=[];Ta(b,function(f,g){e.push(g)});return e};
function Oj(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.H[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Qj=function(){var a=!1;return a};var Sj=function(a,b,c,d){return(2===Rj()||d||"http:"!=F.location.protocol?a:b)+c},Rj=function(){var a=Xf(),b;if(1===a)a:{var c=Ah;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=M.getElementsByTagName("script"),h=0;h<g.length&&100>h;h++){var l=g[h].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var gk=function(a){return Cg(I.C)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=$g(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})},hk=function(){var a;if(!(a=Bh)){var b;if(!0===F._gtmdgs)b=!0;else{var c=Sf&&Sf.userAgent||"";b=0>c.indexOf("Safari")||/Chrome|Coast|Opera|Edg|Silk|Android/.test(c)||11>((/Version\/([\d]+)/.exec(c)||[])[1]||"")?!1:!0}a=!b}if(a)return-1;var d=Va("1");return Xh(1,100)<d?Xh(2,2):-1},ik=function(a){var b;
if(!a||!a.length)return;for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&e.estimated_delivery_date?c.push(""+e.estimated_delivery_date):c.push("")}b=c.join(",");return b};var jk=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),kk={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},lk={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},mk="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var ok=function(a){var b=Nh("gtm.allowlist")||Nh("gtm.whitelist");b&&zf(9);var c=b&&gb(Ya(b),kk),d=Nh("gtm.blocklist")||Nh("gtm.blacklist");d||(d=Nh("tagTypeBlacklist"))&&
zf(3);d?zf(8):d=[];nk()&&(d=Ya(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=B(Ya(d),"google")&&zf(2);var e=d&&gb(Ya(d),lk),f={};return function(g){var h=g&&g[Yd.Qa];if(!h||"string"!=typeof h)return!0;h=h.replace(/^_*/,"");if(void 0!==f[h])return f[h];var l=Gh[h]||[],m=a(h,l);if(b){var p;if(p=m)a:{if(0>B(c,h))if(l&&0<l.length)for(var n=0;n<
l.length;n++){if(0>B(c,l[n])){zf(11);p=!1;break a}}else{p=!1;break a}p=!0}m=p}var t=!1;if(d){var r=0<=B(e,h);if(r)t=r;else{var u=Sa(e,l||[]);u&&zf(10);t=u}}var v=!m||t;v||!(0<=B(l,"sandboxedScripts"))||c&&-1!==B(c,"sandboxedScripts")||(v=Sa(e,mk));return f[h]=v}},nk=function(){return jk.test(F.location&&F.location.hostname)};var pk={active:!0,isAllowed:function(){return!0}},qk=function(a){var b=O.zones;return b?b.checkState(le.F,a):pk},rk=function(a){var b=O.zones;!b&&a&&(b=O.zones=a());return b};var sk=function(){},tk=function(){};var uk=!1,vk=0,wk=[];function xk(a){if(!uk){var b=M.createEventObject,c="complete"==M.readyState,d="interactive"==M.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){uk=!0;for(var e=0;e<wk.length;e++)N(wk[e])}wk.push=function(){for(var f=0;f<arguments.length;f++)N(arguments[f]);return 0}}}function yk(){if(!uk&&140>vk){vk++;try{M.documentElement.doScroll("left"),xk()}catch(a){F.setTimeout(yk,50)}}}var zk=function(a){uk?a():wk.push(a)};var Ak={},Bk={},Ck=function(a,b,c,d){if(!Bk[a]||xh[b]||"__zone"===b)return-1;var e={};Cb(d)&&(e=G(d,e));e.id=c;e.status="timeout";return Bk[a].tags.push(e)-1},Dk=function(a,b,c,d){if(Bk[a]){var e=Bk[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Ek(a){for(var b=Ak[a]||[],c=0;c<b.length;c++)b[c]();Ak[a]={push:function(d){d(le.F,Bk[a])}}}
var Hk=function(a,b,c){Bk[a]={tags:[]};Ka(b)&&Fk(a,b);c&&F.setTimeout(function(){return Ek(a)},Number(c));return Gk(a)},Fk=function(a,b){Ak[a]=Ak[a]||[];Ak[a].push(cb(function(){return N(function(){b(le.F,Bk[a])})}))};function Gk(a){var b=0,c=0,d=!1;return{add:function(){c++;return cb(function(){b++;d&&b>=c&&Ek(a)})},nh:function(){d=!0;b>=c&&Ek(a)}}};var Ik=function(){function a(d){return!La(d)||0>d?0:d}if(!O._li&&F.performance&&F.performance.timing){var b=F.performance.timing.navigationStart,c=La(Oh.get("gtm.start"))?Oh.get("gtm.start"):0;O._li={cst:a(c-b),cbt:a(Dh-b)}}};var Mk={},Nk=function(){return F.GoogleAnalyticsObject&&F[F.GoogleAnalyticsObject]},Ok=!1;
var Pk=function(a){F.GoogleAnalyticsObject||(F.GoogleAnalyticsObject=a||"ga");var b=F.GoogleAnalyticsObject;if(F[b])F.hasOwnProperty(b)||zf(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);F[b]=c}Ik();return F[b]},Qk=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Nk();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)},Rk=function(a){};
var Tk=function(a){},Sk=function(){return F.GoogleAnalyticsObject||"ga"},Uk=function(a,b){return function(){var c=Nk(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var g=f.get("hitPayload"),h=f.get("hitCallback"),l=0>g.indexOf("&tid="+b);l&&(f.set("hitPayload",g.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+
b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",g,!0),f.set("hitCallback",h,!0),f.set("_x_19",void 0,!0),e(f))})}}};
var Zk=function(){return"&tc="+Nd.filter(function(a){return a}).length},bl=function(){2022<=$k().length&&al()},dl=function(){cl||(cl=F.setTimeout(al,500))},al=function(){cl&&(F.clearTimeout(cl),cl=void 0);void 0===el||fl[el]&&!gl&&!hl||(il[el]||jl.Xh()||0>=kl--?(zf(1),il[el]=!0):(jl.wi(),Zf($k()),fl[el]=!0,ll=ml=nl=hl=gl=""))},$k=function(){var a=el;if(void 0===a)return"";var b=yf("GTM"),c=yf("TAGGING");return[ol,fl[a]?"":"&es=1",pl[a],b?"&u="+b:"",c?"&ut="+c:"",Zk(),gl,hl,nl?nl:"",ml,ll,"&z=0"].join("")},
ql=function(){return[Eh,"&v=3&t=t","&pid="+Pa(),"&rv="+le.Ac].join("")},rl="0.005000">Math.random(),ol=ql(),sl=function(){ol=ql()},fl={},gl="",hl="",ll="",ml="",nl="",el=void 0,pl={},il={},cl=void 0,jl=function(a,b){var c=0,d=0;return{Xh:function(){if(c<a)return!1;ab()-d>=b&&(c=0);return c>=a},wi:function(){ab()-d>=b&&(c=0);c++;d=ab()}}}(2,1E3),kl=1E3,tl=function(a,b,c){if(rl&&!il[a]&&b){a!==el&&(al(),el=a);var d,e=String(b[Yd.Qa]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");
d=e;var f=c+d;gl=gl?gl+"."+f:"&tr="+f;var g=b["function"];if(!g)throw Error("Error: No function name given for function call.");var h=(Pd[g]?"1":"2")+d;ll=ll?ll+"."+h:"&ti="+h;dl();bl()}},ul=function(a,b,c){if(rl&&!il[a]){a!==el&&(al(),el=a);var d=c+b;hl=hl?hl+"."+d:"&epr="+d;dl();bl()}},vl=function(a,b,c){};
var wl=function(){return!1},xl=function(){var a={};return function(b,c,d){}};function yl(a,b,c,d){var e=Nd[a],f=zl(a,b,c,d);if(!f)return null;var g=Vd(e[Yd.wf],c,[]);if(g&&g.length){var h=g[0];f=yl(h.index,{onSuccess:f,onFailure:1===h.If?b.terminate:f,terminate:b.terminate},c,d)}return f}
function zl(a,b,c,d){function e(){if(f[Yd.Wg])h();else{var w=Wd(f,c,[]);var z=Ck(c.id,String(f[Yd.Qa]),Number(f[Yd.xf]),w[Yd.Xg]),A=!1;w.vtp_gtmOnSuccess=function(){if(!A){A=!0;var E=ab()-D;tl(c.id,Nd[a],"5");Dk(c.id,z,"success",
E);g()}};w.vtp_gtmOnFailure=function(){if(!A){A=!0;var E=ab()-D;tl(c.id,Nd[a],"6");Dk(c.id,z,"failure",E);h()}};w.vtp_gtmTagId=f.tag_id;w.vtp_gtmEventId=c.id;tl(c.id,f,"1");var C=function(){var E=ab()-D;tl(c.id,f,"7");Dk(c.id,z,"exception",E);A||(A=!0,h())};var D=ab();try{Ud(w,c)}catch(E){C(E)}}}var f=Nd[a],g=b.onSuccess,h=b.onFailure,l=b.terminate;if(c.Td(f))return null;var m=Vd(f[Yd.yf],c,[]);if(m&&m.length){var p=m[0],n=yl(p.index,{onSuccess:g,onFailure:h,terminate:l},c,d);if(!n)return null;g=n;h=2===p.If?l:n}if(f[Yd.sf]||f[Yd.Zg]){var t=f[Yd.sf]?Od:
c.Hi,r=g,u=h;if(!t[a]){e=cb(e);var v=Al(a,t,e);g=v.onSuccess;h=v.onFailure}return function(){t[a](r,u)}}return e}function Al(a,b,c){var d=[],e=[];b[a]=Bl(d,e,c);return{onSuccess:function(){b[a]=Cl;for(var f=0;f<d.length;f++)d[f]()},onFailure:function(){b[a]=Dl;for(var f=0;f<e.length;f++)e[f]()}}}function Bl(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Cl(a){a()}function Dl(a,b){b()};var Gl=function(a,b,c){for(var d=[],e=0;e<Nd.length;e++)if(a[e]){var f=Nd[e];var g=c.add();try{var h=yl(e,{onSuccess:g,onFailure:g,terminate:g},b,e);if(h){var l=d,m=l.push,p=e,n=f["function"];if(!n)throw"Error: No function name given for function call.";var t=Pd[n];m.call(l,{bg:p,Vf:t?t.priorityOverride||0:0,Jc:h})}else El(e,b),g()}catch(u){g()}}c.nh();d.sort(Fl);for(var r=0;r<d.length;r++)d[r].Jc();return 0<
d.length};function Fl(a,b){var c,d=b.Vf,e=a.Vf;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.bg,h=b.bg;f=g>h?1:g<h?-1:0}return f}function El(a,b){if(!rl)return;var c=function(d){var e=b.Td(Nd[d])?"3":"4",f=Vd(Nd[d][Yd.wf],b,[]);f&&f.length&&c(f[0].index);tl(b.id,Nd[d],e);var g=Vd(Nd[d][Yd.yf],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var Hl=!1,Ml=function(a){var b=a["gtm.uniqueEventId"],c=a.event;if("gtm.js"===c){if(Hl)return!1;Hl=!0}var d=qk(b),e=!1;if(!d.active){if("gtm.js"!==c)return!1;e=!0;d=qk(Number.MAX_SAFE_INTEGER)}rl&&!il[b]&&el!==b&&(al(),el=b,ll=gl="",pl[b]="&e="+(0===c.indexOf("gtm.")?encodeURIComponent(c):"*")+"&eid="+b,dl());var f={id:b,name:c,Td:ok(d.isAllowed),Hi:[],Rf:function(){zf(6)},Cf:Il(b)},g=Hk(b,a.eventCallback,a.eventTimeout);Jl(b);
var h=ge(f);e&&(h=Kl(h));var l=Gl(h,f,g);"gtm.js"!==c&&"gtm.sync"!==c||Tk(le.F);switch(c){case "gtm.init":zf(19),l&&zf(20)}return Ll(h,l)};function Il(a){return function(b){rl&&(Hb(b)||vl(a,"input",b))}}
function Jl(a){Rh(a,"event",1);Rh(a,"ecommerce",1);Rh(a,"gtm");Rh(a,"eventModel");}function Kl(a){for(var b=[],c=0;c<a.length;c++)a[c]&&wh[String(Nd[c][Yd.Qa])]&&(b[c]=!0);return b}function Ll(a,b){if(!b)return b;for(var c=0;c<a.length;c++)if(a[c]&&Nd[c]&&!xh[String(Nd[c][Yd.Qa])])return!0;return!1}function Nl(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return Zg(""+c+b).href}}function Ol(a,b){return Pl()?Nl(a,b):void 0}function Pl(){var a=!1;return a};var Ql=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.remoteConfig={};this.globalConfig={};this.onSuccess=function(){};this.onFailure=function(){};this.setContainerTypeLoaded=function(){};this.getContainerTypeLoaded=function(){};this.eventId=void 0},Rl=function(a){var b=new Ql;b.eventModel=a;return b},Sl=function(a,b){a.targetConfig=b;return a},Tl=function(a,b){a.containerConfig=b;return a},Ul=function(a,b){a.remoteConfig=b;return a},Vl=function(a,b){a.globalConfig=
b;return a},Wl=function(a,b){a.onSuccess=b;return a},Xl=function(a,b){a.setContainerTypeLoaded=b;return a},Yl=function(a,b){a.getContainerTypeLoaded=b;return a},Zl=function(a,b){a.onFailure=b;return a};Ql.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.remoteConfig[a])return this.remoteConfig[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var $l=function(a){function b(e){Ta(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Ta(c,function(e){d.push(e)});return d};var am;if(3===le.Ac.length)am="g";else{var bm="G";am=bm}
var cm={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:am,OPT:"o"},dm=function(a){var b=le.F.split("-"),c=b[0].toUpperCase(),d=cm[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===le.Ac.length){var g="w";f="2"+g}else f="";return f+d+le.Ac+e};var em=function(a,b){a.addEventListener&&a.addEventListener.call(a,"message",b,!1)};var fm=function(){return Kf("iPhone")&&!Kf("iPod")&&!Kf("iPad")};Kf("Opera");Kf("Trident")||Kf("MSIE");Kf("Edge");!Kf("Gecko")||-1!=Hf.toLowerCase().indexOf("webkit")&&!Kf("Edge")||Kf("Trident")||Kf("MSIE")||Kf("Edge");-1!=Hf.toLowerCase().indexOf("webkit")&&!Kf("Edge")&&Kf("Mobile");Kf("Macintosh");Kf("Windows");Kf("Linux")||Kf("CrOS");var gm=oa.navigator||null;gm&&(gm.appVersion||"").indexOf("X11");Kf("Android");fm();Kf("iPad");Kf("iPod");fm()||Kf("iPad")||Kf("iPod");Hf.toLowerCase().indexOf("kaios");var hm=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(h){e=!1}if(e)return c;var f;a:{try{var g=c.parent;if(g&&g!=c){f=g;break a}}catch(h){}f=null}if(!(c=f))break}return null};var im=function(){};var jm=function(a){void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent&&(a.addtlConsent=void 0);void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies&&(a.gdprApplies=void 0);return void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.listenerId&&"number"!==typeof a.listenerId?2:a.cmpStatus&&"error"!==a.cmpStatus?0:3},km=function(a,b){this.o=a;this.g=null;this.D={};this.S=0;this.J=void 0===b?500:b;this.s=null};na(km,im);
var mm=function(a){return"function"===typeof a.o.__tcfapi||null!=lm(a)};
km.prototype.addEventListener=function(a){var b={},c=Bf(function(){return a(b)}),d=0;-1!==this.J&&(d=setTimeout(function(){b.tcString="tcunavailable";b.internalErrorState=1;c()},this.J));var e=function(f,g){clearTimeout(d);f?(b=f,b.internalErrorState=jm(b),g&&0===b.internalErrorState||(b.tcString="tcunavailable",g||(b.internalErrorState=3))):(b.tcString="tcunavailable",b.internalErrorState=3);a(b)};try{nm(this,"addEventListener",e)}catch(f){b.tcString="tcunavailable",b.internalErrorState=3,d&&(clearTimeout(d),
d=0),c()}};km.prototype.removeEventListener=function(a){a&&a.listenerId&&nm(this,"removeEventListener",null,a.listenerId)};
var pm=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var g=e;if(0===g)return!1;var h=c;2===c?(h=0,2===g&&(h=1)):3===c&&(h=1,1===g&&(h=0));var l;if(0===h)if(a.purpose&&a.vendor){var m=om(a.vendor.consents,void 0===d?"755":d);l=m&&"1"===b&&a.purposeOneTreatment&&"DE"===a.publisherCC?!0:m&&om(a.purpose.consents,b)}else l=!0;else l=1===h?a.purpose&&a.vendor?om(a.purpose.legitimateInterests,
b)&&om(a.vendor.legitimateInterests,void 0===d?"755":d):!0:!0;return l},om=function(a,b){return!(!a||!a[b])},nm=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.o.__tcfapi){var e=a.o.__tcfapi;e(b,2,c,d)}else if(lm(a)){qm(a);var f=++a.S;a.D[f]=c;if(a.g){var g={};a.g.postMessage((g.__tcfapiCall={command:b,version:2,callId:f,parameter:d},g),"*")}}else c({},!1)},lm=function(a){if(a.g)return a.g;a.g=hm(a.o,"__tcfapiLocator");return a.g},qm=function(a){a.s||(a.s=function(b){try{var c;c=("string"===
typeof b.data?JSON.parse(b.data):b.data).__tcfapiReturn;a.D[c.callId](c.returnValue,c.success)}catch(d){}},em(a.o,a.s))};var rm={1:0,3:0,4:0,7:3,9:3,10:3};function sm(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c}var tm=sm("",550),um=sm("",500);function vm(){var a=O.tcf||{};return O.tcf=a}
var wm=function(a,b){this.s=a;this.g=b;this.o=ab();},xm=function(a){},ym=function(a){},Em=function(){var a=vm(),b=new km(F,3E3),c=new wm(b,a);if((zm()?!0===F.gtag_enable_tcf_support:!1!==F.gtag_enable_tcf_support)&&!a.active&&("function"===typeof F.__tcfapi||mm(b))){a.active=!0;a.Zb={};Am();var d=setTimeout(function(){Bm(a);Cm(a);d=null},um);try{b.addEventListener(function(e){d&&(clearTimeout(d),d=null);if(0!==e.internalErrorState)Bm(a),Cm(a),xm(c);else{var f;if(!1===e.gdprApplies)f=Dm(),b.removeEventListener(e);
else if("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||"cmpuishown"===e.eventStatus){var g={},h;for(h in rm)if(rm.hasOwnProperty(h))if("1"===h){var l=e,m=!0;m=void 0===m?!1:m;var p;var n=l;!1===n.gdprApplies?p=!0:(void 0===n.internalErrorState&&(n.internalErrorState=jm(n)),p="error"===n.cmpStatus||0!==n.internalErrorState||"loaded"===n.cmpStatus&&("tcloaded"===n.eventStatus||"useractioncomplete"===n.eventStatus)?!0:!1);g["1"]=p?!1===l.gdprApplies||"tcunavailable"===l.tcString||
void 0===l.gdprApplies&&!m||"string"!==typeof l.tcString||!l.tcString.length?!0:pm(l,"1",0):!1}else g[h]=pm(e,h,rm[h]);f=g}f&&(a.tcString=e.tcString||"tcempty",a.Zb=f,Cm(a),xm(c))}}),ym(c)}catch(e){d&&(clearTimeout(d),d=null),Bm(a),Cm(a)}}};function Bm(a){a.type="e";a.tcString="tcunavailable";a.Zb=Dm()}function Am(){var a={};Ag((a.ad_storage="denied",a.wait_for_update=tm,a))}
var zm=function(){var a=!1;a=!0;return a};function Dm(){var a={},b;for(b in rm)rm.hasOwnProperty(b)&&(a[b]=!0);return a}function Cm(a){var b={};Bg((b.ad_storage=a.Zb["1"]?"granted":"denied",b))}
var Fm=function(){var a=vm();if(a.active&&void 0!==a.loadTime)return Number(a.loadTime)},Gm=function(){var a=vm();return a.active?a.tcString||"":""},Hm=function(a){if(!rm.hasOwnProperty(String(a)))return!0;var b=vm();return b.active&&b.Zb?!!b.Zb[String(a)]:!0};var Im=!1;function Jm(a){var b=String(F.location).split(/[?#]/)[0],c=le.ig||F._CONSENT_MODE_SALT;return a?c?String(Yh(b+a+c)):"0":""}
function Km(a){function b(r){var u;O.reported_gclid||(O.reported_gclid={});u=O.reported_gclid;var v;v=Im&&g&&(!ug()||Cg(I.C))?l+"."+(f.prefix||"_gcl")+(r?"gcu":"gcs"):l+(r?"gcu":"gcs");if(!u[v]){u[v]=!0;var w=[],y=function(D,E){E&&w.push(D+"="+encodeURIComponent(E))},x="https://www.google.com";if(ug()){var z=Cg(I.C);y("gcs",Dg());r&&y("gcu","1");O.dedupe_gclid||
(O.dedupe_gclid=""+mi());y("rnd",O.dedupe_gclid);if((!l||m&&"aw.ds"!==m)&&Cg(I.C)){var A=oj("_gcl_aw");y("gclaw",A.join("."))}y("url",String(F.location).split(/[?#]/)[0]);y("dclid",Lm(d,p));!z&&d&&(x="https://pagead2.googlesyndication.com")}y("gdpr_consent",Gm());"1"===Yi(!1)._up&&y("gtm_up","1");y("gclid",Lm(d,
l));y("gclsrc",m);y("gtm",dm(!e));Im&&g&&Cg(I.C)&&(yi(f||{}),y("auid",ti[ui(f.prefix)]||""));var C=x+"/pagead/landing?"+w.join("&");gg(C)}}var c=!!a.Hd,d=!!a.wa,e=a.U,f=void 0===a.Fc?{}:a.Fc,g=void 0===a.Oc?!0:a.Oc,h=rj(),l=h.gclid||"",m=h.gclsrc,p=h.dclid||"",n=!c&&(!l||m&&"aw.ds"!==m?!1:!0),t=ug();if(n||t)t?Eg(function(){b();Cg(I.C)||xg(function(r){return b(!0,r.Df)},I.C)},[I.C]):b()}function Lm(a,b){var c=a&&!Cg(I.C);return b&&c?"0":b}var vn=function(){var a=!0;Hm(7)&&Hm(9)&&Hm(10)||(a=!1);var b=!0;b=!1;b&&!un()&&(a=!1);return a},un=function(){var a=!0;Hm(3)&&Hm(4)||(a=!1);return a};var Tn=!1;function Un(){var a=O;return a.gcq=a.gcq||new Vn}
var Wn=function(a,b,c){Un().register(a,b,c)},Xn=function(a,b,c,d){Un().push("event",[b,a],c,d)},Yn=function(a,b){Un().push("config",[a],b)},Zn=function(a,b,c,d){Un().push("get",[a,b],c,d)},$n=function(a){return Un().getRemoteConfig(a)},ao={},bo=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.remoteConfig={};this.o=null;this.g=!1},co=function(a,b,c,d,e){this.type=a;this.s=b;this.U=c||"";this.g=d;this.o=e},Vn=function(){this.D={};this.o={};this.g=[];this.s={AW:!1,UA:!1}},
eo=function(a,b){var c=Nj(b);return a.D[c.containerId]=a.D[c.containerId]||new bo},fo=function(a,b,c){if(b){var d=Nj(b);if(d&&1===eo(a,b).status){eo(a,b).status=2;var e={};rl&&(e.timeoutId=F.setTimeout(function(){zf(38);dl()},3E3));a.push("require",[e],d.containerId);ao[d.containerId]=ab();if(Qj()){}else{var g="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",h=("http:"!=F.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=Ol(c,g)||h;Wf(l)}}}},go=function(a,b,c,d){if(d.U){var e=eo(a,d.U),f=e.o;if(f){var g=G(c),h=G(e.targetConfig[d.U]),l=G(e.containerConfig),m=G(e.remoteConfig),p=G(a.o),n=Nh("gtm.uniqueEventId"),t=Nj(d.U).prefix,r=Yl(Xl(Zl(Wl(Vl(Ul(Tl(Sl(Rl(g),h),l),m),p),function(){
ul(n,t,"2");}),function(){ul(n,t,"3");}),function(u,v){a.s[u]=v}),function(u){return a.s[u]});try{ul(n,t,"1");f(d.U,b,d.s,r)}catch(u){ul(n,t,"4");}}}};aa=Vn.prototype;
aa.register=function(a,b,c){var d=eo(this,a);if(3!==d.status){d.o=b;d.status=3;if(c){d.remoteConfig=c}var e=Nj(a),f=ao[e.containerId];if(void 0!==f){var g=O[e.containerId].bootstrap,h=e.prefix.toUpperCase();O[e.containerId]._spx&&(h=h.toLowerCase());var l=Nh("gtm.uniqueEventId"),m=h,p=ab()-g;if(rl&&!il[l]){l!==el&&(al(),el=l);var n=m+"."+Math.floor(g-f)+
"."+Math.floor(p);ml=ml?ml+","+n:"&cl="+n}delete ao[e.containerId]}this.flush()}};aa.push=function(a,b,c,d){var e=Math.floor(ab()/1E3);fo(this,c,b[0][I.Pa]||this.o[I.Pa]);Tn&&c&&eo(this,c).g&&(d=!1);this.g.push(new co(a,e,c,b,d));d||this.flush()};aa.insert=function(a,b,c){var d=Math.floor(ab()/1E3);0<this.g.length?this.g.splice(1,0,new co(a,d,c,b,!1)):this.g.push(new co(a,d,c,b,!1))};
aa.flush=function(a){for(var b=this,c=[],d=!1;this.g.length;){var e=this.g[0];if(e.o)Tn?!e.U||eo(this,e.U).g?(e.o=!1,this.g.push(e)):c.push(e):(e.o=!1,this.g.push(e));else switch(e.type){case "require":if(3!==eo(this,e.U).status&&!a){Tn&&this.g.push.apply(this.g,c);return}rl&&F.clearTimeout(e.g[0].timeoutId);break;case "set":Ta(e.g[0],function(t,r){G(kb(t,r),b.o)});break;case "config":var f=e.g[0],g=!!f[I.vc];delete f[I.vc];var h=eo(this,e.U),l=Nj(e.U),m=l.containerId===l.id;g||(m?h.containerConfig=
{}:h.targetConfig[e.U]={});h.g&&g||go(this,I.ja,f,e);h.g=!0;delete f[I.Fb];m?G(f,h.containerConfig):G(f,h.targetConfig[e.U]);Tn&&(d=!0);break;case "event":go(this,e.g[1],e.g[0],e);break;case "get":var p={},n=(p[I.Da]=e.g[0],p[I.Ca]=e.g[1],p);go(this,I.Ma,n,e)}this.g.shift()}Tn&&(this.g.push.apply(this.g,c),d&&this.flush())};aa.getRemoteConfig=function(a){return eo(this,a).remoteConfig};function ho(a,b,c){};function io(a,b,c,d){};function jo(a){};var ko=function(a,b,c){function d(f,g){var h=f[g];return h}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||bg(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},lo=function(a){O.hasOwnProperty("autoEventsSettings")||(O.autoEventsSettings={});var b=O.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},mo=function(a,b,c){lo(a)[b]=c},no=function(a,b,c,d){var e=lo(a),f=bb(e,b,d);e[b]=c(f)},oo=function(a,b,c){var d=lo(a);return bb(d,b,c)};var po={},qo=[];
var xo=function(a,b){};

function Ao(a,b){};var Bo=/^\s*$/,Co,Do=!1;
function Oo(a,b){}function Po(a,b,c){};var Qo=!!F.MutationObserver,Ro=void 0,So=function(a){if(!Ro){var b=function(){var c=M.body;if(c)if(Qo)(new MutationObserver(function(){for(var e=0;e<Ro.length;e++)N(Ro[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;$f(c,"DOMNodeInserted",function(){d||(d=!0,N(function(){d=!1;for(var e=0;e<Ro.length;e++)N(Ro[e])}))})}};Ro=[];M.body?b():N(b)}Ro.push(a)};var Uo=["www.youtube.com","www.youtube-nocookie.com"],Vo,Wo=!1,Xo=0;
function gp(a,b){}function hp(a,b){
return!0};function ip(a,b){var c;return c};function jp(a){};function kp(a){};var lp=!1,mp=[];function np(){if(!lp){lp=!0;for(var a=0;a<mp.length;a++)N(mp[a])}}var op=function(a){lp?N(a):mp.push(a)};function pp(a){H(this.o.g,["listener:!Fn"],arguments);hf(this,"process_dom_events","window","load");op(Eb(a))};function qp(a,b){var c;var e=!1;var f=Db(c,this.s,e);void 0===f&&void 0!==c&&zf(45);return f};function rp(a){var b;H(this.o.g,["path:!string"],arguments);hf(this,"access_globals","read",a);var c=a.split("."),d=F,e;for(e=0;e<c.length-1;e++){d=d[c[e]];if(null==d)return;}b=d[c[e]];var f=!1;var g=Db(b,this.s,f);void 0===g&&void 0!==b&&zf(45);return g};function sp(a,b){var c=null,d=!1;
return Db(c,this.s,d)};function tp(a){var b;H(this.o.g,["path:!string"],arguments);hf(this,"access_globals","readwrite",a);var c=a.split("."),d=[];var e=jb(c,d),f=c[c.length-1];if(void 0===e)throw Error("Path "+a+" does not exist.");var g=e[f];void 0===g&&(g=[],e[f]=g);b=function(){if(!Ka(g.push))throw Error("Object at "+a+" in window is not an array.");
g.push.apply(g,Array.prototype.slice.call(arguments,0))};var h=!1;return Db(b,this.s,h)};var up=function(a){var b;return b};function vp(a,b){b=void 0===b?!0:b;var c;return c};function wp(a){var b=null;return b};function xp(a,b){var c;H(this.o.g,["queryKey:!string","retrieveAll:?boolean"],arguments);hf(this,"get_url","query",a);var d=Xg(Zg(F.location.href),"query"),e=Ug(d,a,b);c=Db(e,this.s);return c};function yp(a,b){var c;return c};function zp(a){var b="";return b};function Ap(a,b){var c;return c};function Bp(a){var b="";H(this.o.g,["component:?string"],arguments),hf(this,"get_url",a),b=Xg(Zg(F.location.href),a);return b};function Cp(){hf(this,"get_user_agent");return F.navigator.userAgent};function Dp(a,b){};var Ep={};
function Fp(a,b,c,d){H(this.o.g,["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);hf(this,"inject_script",a);var e=this.s,f=function(){b instanceof pb&&b.Ta(e)},g=function(){c instanceof pb&&c.Ta(e)};if(!d){Wf(a,f,g);return}var h=d;Ep[h]?(Ep[h].onSuccess.push(f),Ep[h].onFailure.push(g)):(Ep[h]={onSuccess:[f],onFailure:[g]},f=function(){for(var l=Ep[h].onSuccess,m=0;m<l.length;m++)N(l[m]);l.push=function(p){N(p);return 0}},
g=function(){for(var l=Ep[h].onFailure,m=0;m<l.length;m++)N(l[m]);Ep[h]=null},Wf(a,f,g));};var Gp=function(){return!1},Hp={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};function Ip(){};function Jp(a){var b=void 0;return b};function Kp(a,b){var c=!1;return c};function Lp(){var a="";return a};function Mp(){var a="";return a};function Np(a,b,c,d){d=void 0===d?!1:d;};function Op(a,b,c){};function Pp(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};function Qp(a){H(this.o.g,["consentSettings:!DustMap"],arguments);for(var b=a.Rb(),c=b.length(),d=0;d<c;d++){var e=b.get(d);e!==I.xe&&hf(this,"access_consent",e,"write")}Ag(Eb(a))};function Rp(a,b,c){return!1};function Sp(a,b,c){};var Tp=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};function Up(a,b,c){var d=this;}
;var Vp={},Wp={};Vp.getItem=function(a){var b=null;return b};
Vp.setItem=function(a,b){};
Vp.removeItem=function(a){};Vp.clear=function(){};var Xp=function(a){var b;return b};function Yp(a){H(this.o.g,["consentSettings:!DustMap"],arguments);var b=Eb(a),c;for(c in b)b.hasOwnProperty(c)&&hf(this,"access_consent",c,"write");Bg(b)};var cd=function(){var a=new tf;Qj()?(a.add("injectHiddenIframe",Ia),a.add("injectScript",Ia)):(a.add("injectHiddenIframe",Dp),a.add("injectScript",Fp));var b=Op;a.add("Math",af());a.add("TestHelper",vf());a.add("addEventCallback",jo);a.add("aliasInWindow",hp);a.add("assertApi",Xe);a.add("assertThat",Ye);a.add("callInWindow",
ip);a.add("callLater",jp);a.add("copyFromDataLayer",qp);a.add("copyFromWindow",rp);a.add("createArgumentsQueue",sp);a.add("createQueue",tp);a.add("decodeUri",bf);a.add("decodeUriComponent",cf);a.add("encodeUri",df);a.add("encodeUriComponent",ef);a.add("fail",ff);a.add("fromBase64",up,!("atob"in F));a.add("generateRandom",gf);a.add("getContainerVersion",jf);a.add("getCookieValues",vp);a.add("getQueryParameters",xp);a.add("getReferrerQueryParameters",yp);a.add("getReferrerUrl",zp);a.add("getTimestamp",
kf);a.add("getTimestampMillis",kf);a.add("getType",lf);a.add("getUrl",Bp);a.add("localStorage",Hp,!Gp());a.add("logToConsole",Ip);a.add("makeInteger",nf);a.add("makeNumber",of);a.add("makeString",pf);a.add("makeTableMap",qf);a.add("mock",sf);a.add("queryPermission",Kp);a.add("readCharacterSet",Lp);a.add("readTitle",Mp);a.add("sendPixel",b);a.add("setCookie",Pp);a.add("setInWindow",Rp);a.add("sha256",Up);a.add("templateStorage",Vp);a.add("toBase64",Xp,!("btoa"in F));a.add("JSON",mf(function(c){var d=this.s.g;d&&d.log.call(this,"error",c)}));a.add("parseUrl",Jp);

return function(c){var d;if(a.g.hasOwnProperty(c))d=a.get(c,this);else{var e;if(e=a.o.hasOwnProperty(c))b:{var f=this.s.g;if(f){var g=f.Qb();if(g&&0!==g.indexOf("__cvt_")){e=!0;break b}}e=!1}if(e)d=a.o.hasOwnProperty(c)?a.o[c]:void 0;
else throw Error(c+" is not a valid API name.");}return d}};var ad,pe;
function Zp(){var a=data.runtime||[],b=data.runtime_lines;ad=new Yc;$p();Ed=function(e,f,g){aq(f);var h=new tb;Ta(f,function(r,u){var v=Db(u);void 0===v&&void 0!==u&&zf(44);h.set(r,v)});ad.g.g.D=ce();var l={oh:qe(e),eventId:void 0!==g?g.id:void 0,Qb:function(){return e},log:function(){}};if(wl()){var m=xl(),p=void 0,n=void 0;l.ia={Lb:{},mb:function(r,u,v){1===u&&(p=r);7===u&&(n=v);m(r,u,v)},Xd:rf()};l.log=function(r,u){if(p){var v=Array.prototype.slice.call(arguments,1);m(p,4,{level:r,source:n,message:v})}}}var t=
bd(l,[e,h]);ad.g.g.D=void 0;t instanceof ya&&"return"===t.g&&(t=t.o);return Eb(t)};dd();for(var c=0;c<a.length;c++){var d=a[c];if(!Na(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&$d(d,b[c]);ad.Jc(d)}}function aq(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Ka(b)&&(a.gtmOnSuccess=function(){N(b)});Ka(c)&&(a.gtmOnFailure=function(){N(c)})}
function $p(){var a=ad;O.SANDBOXED_JS_SEMAPHORE=O.SANDBOXED_JS_SEMAPHORE||0;id(a,function(b,c,d){O.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{O.SANDBOXED_JS_SEMAPHORE--}})}function bq(a){void 0!==a&&Ta(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");Gh[e]=Gh[e]||[];Gh[e].push(b)}})};var cq="HA GF G UA AW DC".split(" "),dq=!1,eq={},fq=!1;function gq(a,b){var c={event:a};b&&(c.eventModel=G(b),b[I.jd]&&(c.eventCallback=b[I.jd]),b[I.oc]&&(c.eventTimeout=b[I.oc]));return c}function hq(){return dq}
var kq={config:function(a){var b;return b},consent:function(a){function b(){hq()&&
G(a[2],{subcommand:a[1]})}if(3===a.length){zf(39);var c=Hh(),d=a[1];"default"===d?(b(),Ag(a[2])):"update"===d&&(b(),Bg(a[2],c))}},event:function(a){var b=a[1];if(!(2>a.length)&&q(b)){var c;if(2<a.length){if(!Cb(a[2])&&void 0!=a[2]||3<a.length)return;c=a[2]}var d=gq(b,c);return d}},get:function(a){},js:function(a){if(2==a.length&&a[1].getTime)return fq=!0,hq(),{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=pe.o;d.g[b]?d.g[b].push(c):d.g[b]=[c]}},set:function(a){var b;2==a.length&&Cb(a[1])?b=G(a[1]):3==a.length&&q(a[1])&&(b={},Cb(a[2])||Na(a[2])?b[a[1]]=
G(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},lq={policy:!0};var mq=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},oq=function(a){var b=nq(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Fq=function(a){if(Eq(a))return a;this.g=a};Fq.prototype.Ph=function(){return this.g};var Eq=function(a){return!a||"object"!==Ab(a)||Cb(a)?!1:"getUntrustedUpdateValue"in a};Fq.prototype.getUntrustedUpdateValue=Fq.prototype.Ph;var Gq=[];var Jq=!1,Kq=function(a){return F["dataLayer"].push(a)},Lq=function(a){var b=O["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function Mq(a){var b=a._clear;Ta(a,function(d,e){"_clear"!==d&&(b&&Qh(d,void 0),Qh(d,e))});Ch||(Ch=a["gtm.start"]);var c=a["gtm.uniqueEventId"];if(!a.event)return!1;c||(c=Hh(),a["gtm.uniqueEventId"]=c,Qh("gtm.uniqueEventId",c));return Ml(a)}function Nq(){var a=Gq[0];if(null==a||"object"!==typeof a)return!1;if(a.event)return!0;if(Ua(a)){var b=a[0];if("config"===b||"event"===b||"js"===b)return!0}return!1}
function Oq(){for(var a=!1;!Jq&&0<Gq.length;){
Jq=!0;delete Kh.eventModel;Mh();var d=Gq.shift();if(null!=d){var e=Eq(d);if(e){var f=d;d=Eq(f)?f.getUntrustedUpdateValue():void 0;for(var g=["gtm.allowlist","gtm.blocklist","gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],h=0;h<g.length;h++){var l=g[h],m=Nh(l,1);if(Na(m)||Cb(m))m=G(m);Lh[l]=m}}try{if(Ka(d))try{d.call(Oh)}catch(y){}else if(Na(d)){var p=d;if(q(p[0])){var n=p[0].split("."),t=n.pop(),r=p.slice(1),u=Nh(n.join("."),2);if(void 0!==u&&null!==u)try{u[t].apply(u,r)}catch(y){}}}else{if(Ua(d)){a:{var v=
d;if(v.length&&q(v[0])){var w=kq[v[0]];if(w&&(!e||!lq[v[0]])){d=w(v);break a}}d=void 0}if(!d){Jq=!1;continue}}a=Mq(d)||a}}finally{e&&Mh(!0)}}Jq=!1}return!a}function Pq(){var a=Oq();try{mq(F["dataLayer"],le.F)}catch(b){}return a}
var Rq=function(){var a=Uf("dataLayer",[]),b=Uf("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};zk(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});op(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<O.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new Fq(arguments[f])}else e=[].slice.call(arguments,0);var g=c.apply(a,e);Gq.push.apply(Gq,e);if(300<
this.length)for(zf(4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return Oq()&&h};var d=a.slice(0);Gq.push.apply(Gq,d);Qq()&&N(Pq)},Qq=function(){var a=!0;return a};var Sq={};Sq.wc=new String("undefined");
var Tq=function(a){this.g=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Sq.wc?b:a[d]);return c.join("")}};Tq.prototype.toString=function(){return this.g("undefined")};Tq.prototype.valueOf=Tq.prototype.toString;Sq.bh=Tq;Sq.zd={};Sq.Ch=function(a){return new Tq(a)};var Uq={};Sq.xi=function(a,b){var c=Hh();Uq[c]=[a,b];return c};Sq.Gf=function(a){var b=a?0:1;return function(c){var d=Uq[c];if(d&&"function"===typeof d[b])d[b]();Uq[c]=void 0}};Sq.Wh=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};Sq.ri=function(a){if(a===Sq.wc)return a;var b=Hh();Sq.zd[b]=a;return'google_tag_manager["'+le.F+'"].macro('+b+")"};Sq.gi=function(a,b,c){a instanceof Sq.bh&&(a=a.g(Sq.xi(b,c)),b=Ia);return{Rd:a,onSuccess:b}};var Vq=["input","select","textarea"],Wq=["button","hidden","image","reset","submit"],Xq=function(a){var b=a.tagName.toLowerCase();return!Oa(Vq,function(c){return c===b})||"input"===b&&Oa(Wq,function(c){return c===a.type.toLowerCase()})?!1:!0},Yq=function(a){return a.form?a.form.tagName?a.form:M.getElementById(a.form):fg(a,["form"],100)},Zq=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(Xq(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var jr=F.clearTimeout,kr=F.setTimeout,S=function(a,b,c){if(Qj()){b&&N(b)}else return Wf(a,b,c)},lr=function(){return new Date},mr=function(){return F.location.href},nr=function(a){return Xg(Zg(a),"fragment")},or=function(a){return Yg(Zg(a))},pr=function(a,b){return Nh(a,b||2)},qr=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Kq(a)):d=Kq(a);return d},rr=function(a,b){F[a]=b},T=function(a,b,c){b&&
(void 0===F[a]||c&&!F[a])&&(F[a]=b);return F[a]},sr=function(a,b,c){return ai(a,b,void 0===c?!0:!!c)},tr=function(a,b,c){return 0===ji(a,b,c)},ur=function(a,b){if(Qj()){b&&N(b)}else Yf(a,b)},vr=function(a){return!!oo(a,"init",!1)},wr=function(a){mo(a,"init",!0)},xr=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Ah;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";S(Sj("https://","http://",c))},yr=function(a,
b){var c=a[b];return c},zr=function(a,b,c){rl&&(Hb(a)||vl(c,b,a))};
var Ar=Sq.gi;function Xr(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var Yr=new Qa;function Zr(a,b){function c(g){var h=Zg(g),l=Xg(h,"protocol"),m=Xg(h,"host",!0),p=Xg(h,"port"),n=Xg(h,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==p||"https"==l&&"443"==p)l="web",p="default";return[l,m,p,n]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function $r(a){return as(a)?1:0}
function as(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Na(c)){for(var d=0;d<c.length;d++){var e=G(a,{});G({arg1:c[d],any_of:void 0},e);if($r(e))return!0}return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var f;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){f=b[g[h]](c);break a}}catch(r){}}f=!1}return f;case "_ew":return Xr(b,c);case "_eq":return String(b)==
String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var l;l=String(b).split(",");return 0<=B(l,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var m;var p=a.ignore_case?"i":void 0;try{var n=String(c)+p,t=Yr.get(n);t||(t=new RegExp(c,p),Yr.set(n,t));m=t.test(b)}catch(r){m=!1}return m;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Zr(b,c)}return!1};var bs=encodeURI,Y=encodeURIComponent,cs=Zf;var ds=function(a,b){if(!a)return!1;var c=Xg(Zg(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var es=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};function Kt(){return F.gaGlobal=F.gaGlobal||{}}var Lt=function(){var a=Kt();a.hid=a.hid||Pa();return a.hid},Mt=function(a,b){var c=Kt();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var uu=window,vu=document,wu=function(a){var b=uu._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===uu["ga-disable-"+a])return!0;try{var c=uu.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Zh("AMP_TOKEN",String(vu.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return vu.getElementById("__gaOptOutExtension")?!0:!1};var xu={};function zu(a){delete a.eventModel[I.Fb];Bu(a.eventModel)}
var Bu=function(a){Ta(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[I.qa]||{};Ta(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var Eu=function(a,b,c){Xn(b,c,a)},Fu=function(a,b,c){Xn(b,c,a,!0)},Mu=function(a,b){};
function Gu(a,b){}var Z={h:{}};Z.h.ctv=["google"],function(){(function(a){Z.__ctv=a;Z.__ctv.i="ctv";Z.__ctv.m=!0;Z.__ctv.priorityOverride=0})(function(){return"131"})}();
Z.h.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(x){for(var z=[],A=x.split(","),C=0;C<A.length;C++){var D=Number(A[C]);if(isNaN(D))return[];p.test(A[C])||z.push(D)}return z}function c(){var x=0,z=0;return function(){var A=Lg(),C=A.height;x=Math.max(v.scrollLeft+A.width,x);z=Math.max(v.scrollTop+C,z);return{Jd:x,Kd:z}}}function d(){r=T("self");
u=r.document;v=u.scrollingElement||u.body&&u.body.parentNode;y=c()}function e(x,z,A,C){var D=l(z),E={},J;for(J in D){E.Xa=J;if(D.hasOwnProperty(E.Xa)){var Q=Number(E.Xa);x<Q||(qr({event:"gtm.scrollDepth","gtm.scrollThreshold":Q,"gtm.scrollUnits":A.toLowerCase(),"gtm.scrollDirection":C,"gtm.triggers":D[E.Xa].join(",")}),no("sdl",z,function(V){return function(ba){delete ba[V.Xa];return ba}}(E),{}))}E={Xa:E.Xa}}}function f(){var x=y(),z=x.Jd,A=x.Kd,C=z/v.scrollWidth*100,D=A/v.scrollHeight*100;e(z,"horiz.pix",
n.yc,t.jf);e(C,"horiz.pct",n.xc,t.jf);e(A,"vert.pix",n.yc,t.zf);e(D,"vert.pct",n.xc,t.zf);mo("sdl","pending",!1)}function g(){var x=250,z=!1;u.scrollingElement&&u.documentElement&&r.addEventListener&&(x=50,z=!0);var A=0,C=!1,D=function(){C?A=kr(D,x):(A=0,f(),vr("sdl")&&!a()&&(ag(r,"scroll",E),ag(r,"resize",E),mo("sdl","init",!1)));C=!1},E=function(){z&&y();A?C=!0:(A=kr(D,x),mo("sdl","pending",!0))};return E}function h(x,z,A){if(z){var C=b(String(x));no("sdl",A,function(D){for(var E=0;E<C.length;E++){var J=
String(C[E]);D.hasOwnProperty(J)||(D[J]=[]);D[J].push(z)}return D},{})}}function l(x){return oo("sdl",x,{})}function m(x){N(x.vtp_gtmOnSuccess);var z=x.vtp_uniqueTriggerId,A=x.vtp_horizontalThresholdsPixels,C=x.vtp_horizontalThresholdsPercent,D=x.vtp_verticalThresholdUnits,E=x.vtp_verticalThresholdsPixels,J=x.vtp_verticalThresholdsPercent;switch(x.vtp_horizontalThresholdUnits){case n.yc:h(A,z,"horiz.pix");break;case n.xc:h(C,z,"horiz.pct")}switch(D){case n.yc:h(E,z,"vert.pix");break;case n.xc:h(J,
z,"vert.pct")}vr("sdl")?oo("sdl","pending")||(w||(d(),w=!0),N(function(){return f()})):(d(),w=!0,v&&(wr("sdl"),mo("sdl","pending",!0),N(function(){f();if(a()){var Q=g();$f(r,"scroll",Q);$f(r,"resize",Q)}else mo("sdl","init",!1)})))}var p=/^\s*$/,n={xc:"PERCENT",yc:"PIXELS"},t={zf:"vertical",jf:"horizontal"},r,u,v,w=!1,y;(function(x){Z.__sdl=x;Z.__sdl.i="sdl";Z.__sdl.m=!0;Z.__sdl.priorityOverride=0})(function(x){x.vtp_triggerStartOption?m(x):op(function(){m(x)})})}();

Z.h.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.i="jsm";Z.__jsm.m=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=T("google_tag_manager");var d=c&&c.e&&c.e(b);zr(d,"jsm",a.vtp_gtmEventId);return d}catch(e){}}})}();

Z.h.e=["google"],function(){(function(a){Z.__e=a;Z.__e.i="e";Z.__e.m=!0;Z.__e.priorityOverride=0})(function(a){return String(Sh(a.vtp_gtmEventId,"event"))})}();
Z.h.f=["google"],function(){(function(a){Z.__f=a;Z.__f.i="f";Z.__f.m=!0;Z.__f.priorityOverride=0})(function(a){var b=pr("gtm.referrer",1)||M.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Xg(Zg(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):or(String(b)):String(b)})}();
Z.h.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=ko(c,"gtm.click");qr(d)}}(function(b){Z.__cl=b;Z.__cl.i="cl";Z.__cl.m=!0;Z.__cl.priorityOverride=0})(function(b){if(!vr("cl")){var c=T("document");$f(c,"click",a,!0);wr("cl")}N(b.vtp_gtmOnSuccess)})}();

Z.h.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Z.__access_globals=b;Z.__access_globals.i="access_globals";Z.__access_globals.m=!0;Z.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],h=0;h<c.length;h++){var l=c[h],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&g.push(m)}return{assert:function(p,n,t){if(!q(t))throw d(p,{},"Key must be a string.");if("read"===n){if(-1<B(e,t))return}else if("write"===n){if(-1<B(f,t))return}else if("readwrite"===n){if(-1<B(f,t)&&-1<B(e,t))return}else if("execute"===n){if(-1<B(g,t))return}else throw d(p,{},"Operation must be either 'read', 'write', or 'execute', was "+n);throw d(p,{},"Prohibited "+n+" on global variable: "+
t+".");},N:a}})}();Z.h.r=["google"],function(){(function(a){Z.__r=a;Z.__r.i="r";Z.__r.m=!0;Z.__r.priorityOverride=0})(function(a){return Pa(a.vtp_min,a.vtp_max)})}();
Z.h.tg=["google"],function(){function a(g){f.push(g);1<f.length||N(function(){var h=f.join(",");f=[];qr({event:"gtm.triggerGroup","gtm.triggers":h})})}function b(g,h){var l=c[h],m=l.indexOf(g);-1!==m&&(l.splice(m,1),l.length||a(h))}var c={},d={},e=[],f=[];(function(g){Z.__tg=g;Z.__tg.i="tg";Z.__tg.m=!0;Z.__tg.priorityOverride=0})(function(g){N(g.vtp_gtmOnSuccess);var h=g.vtp_uniqueTriggerId,l=g.vtp_triggerIds,m=g.vtp_firingId;
if(g.vtp_isListeningTag){var p=d[m];p?b(m,p):e.push(m)}else{c[h]=l;for(var n=0,t;t=l[n];n++)d[t]=h;for(var r=0;r<e.length;r++)b(e[r],h)}})}();
Z.h.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.i="u";Z.__u.m=!0;Z.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:pr("gtm.url",1))||mr();var d=b[a("vtp_component")];if(!d||"URL"==d)return or(String(c));var e=Zg(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],h=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;g?Na(h)?m=h:m=String(h).replace(/\s+/g,
"").split(","):m=[String(h)];for(var p=0;p<m.length;p++){var n=Xg(e,"QUERY",void 0,void 0,m[p]);if(void 0!=n&&(!l||""!==n)){f=n;break a}}f=void 0}else f=Xg(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.h.v=["google"],function(){(function(a){Z.__v=a;Z.__v.i="v";Z.__v.m=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=pr(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;zr(d,"v",a.vtp_gtmEventId);return d})}();
Z.h.ua=["google"],function(){function a(n){return Cg(n)}function b(n,t){if(ug()&&!e[n]){var r=function(){var u=Nk(),v="gtm"+Hh(),w=m(t),y={name:v};l(w,y,!0);u("create",n,y);u(function(){u.remove(v)})};xg(r,I.K);xg(r,I.C);e[n]=!0}}var c,d={},e={},f={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,
useAmpClientId:!0,storeGac:!0,_cd2l:!0,_useUp:!0,_cs:!0},g={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},h={urlPassthrough:!0},l=function(n,t,r){var u=0;if(n)for(var v in n)if(!h[v]&&n.hasOwnProperty(v)&&(r&&f[v]||!r&&void 0===f[v])){var w=g[v]?Xa(n[v]):n[v];"anonymizeIp"!=v||w||
(w=void 0);t[v]=w;u++}return u},m=function(n){var t={};n.vtp_gaSettings&&G(es(n.vtp_gaSettings.vtp_fieldsToSet,"fieldName","value"),t);G(es(n.vtp_fieldsToSet,"fieldName","value"),t);Cg(I.K)||(t.storage="none");Cg(I.C)||(t.allowAdFeatures=!1,t.storeGac=!1);vn()||(t.allowAdFeatures=!1);un()||(t.allowAdPersonalizationSignals=!1);n.vtp_transportUrl&&(t._x_19=n.vtp_transportUrl);
return t},p=function(n){function t(ka,W){void 0!==W&&E("set",ka,W)}var r={},u={},v={},w={};if(n.vtp_gaSettings){var y=n.vtp_gaSettings;G(es(y.vtp_contentGroup,"index","group"),u);G(es(y.vtp_dimension,"index","dimension"),v);G(es(y.vtp_metric,"index","metric"),w);var x=G(y);x.vtp_fieldsToSet=void 0;x.vtp_contentGroup=void 0;x.vtp_dimension=
void 0;x.vtp_metric=void 0;n=G(n,x)}G(es(n.vtp_contentGroup,"index","group"),u);G(es(n.vtp_dimension,"index","dimension"),v);G(es(n.vtp_metric,"index","metric"),w);var z=m(n),A=Pk(n.vtp_functionName);if(Ka(A)){var C="",D="";n.vtp_setTrackerName&&"string"==typeof n.vtp_trackerName?""!==n.vtp_trackerName&&(D=n.vtp_trackerName,C=D+"."):(D="gtm"+Hh(),C=D+".");var E=function(ka){var W=[].slice.call(arguments,0);W[0]=C+W[0];A.apply(window,W)},J=function(ka,W){return void 0===W?W:ka(W)},Q=function(ka,W){if(W)for(var $a in W)W.hasOwnProperty($a)&&
E("set",ka+$a,W[$a])},V=function(){var ka={transaction_id:"id",affiliation:"affiliation",value:"revenue",tax:"tax",shipping:"shipping",coupon:"coupon",item_list_name:"list"},W={},$a=(W[I.dd]="click",W[I.Aa]="detail",W[I.Za]="add",W[I.$a]="remove",W[I.La]="checkout",W[I.na]="purchase",W[I.ab]="refund",W),ed={item_id:"id",item_name:"name",item_list_name:"list",item_brand:"brand",item_category:"category",item_variant:"variant",index:"position",
promotion_id:"id",promotion_name:"name",creative_name:"creative",creative_slot:"position"},Lb=function(Ma,hb){for(var ib in Ma)ka.hasOwnProperty(ib)&&(Ma[hb]=Ma[hb]||{},Ma[hb].actionField=Ma[hb].actionField||{},Ma[hb].actionField[ka[ib]]=Ma[ib])},mb=function(Ma){for(var hb=[],ib={},ob=0;ob<Ma.length;ib={tb:ib.tb},ob++)ib.tb={},Ta(Ma[ob],function(Mb){return function(Cc,hd){ed.hasOwnProperty(Cc)?Mb.tb[ed[Cc]]=hd:Mb.tb[Cc]=hd}}(ib)),hb.push(ib.tb);return hb},nb=function(Ma,hb,ib){if(!Cb(hb))return!1;
for(var ob=bb(Object(hb),ib,[]),Mb=0;ob&&Mb<ob.length;Mb++)E(Ma,ob[Mb]);return!!ob&&0<ob.length},R;if(n.vtp_useEcommerceDataLayer){var Wa=!1;n.vtp_useGA4SchemaForEcommerce&&(R=Sh(n.vtp_gtmEventId,"eventModel"),Wa=!!R);Wa||(R=pr("ecommerce",1))}else n.vtp_ecommerceMacroData&&(R=n.vtp_ecommerceMacroData.ecommerce,!R&&n.vtp_useGA4SchemaForEcommerce&&
(R=n.vtp_ecommerceMacroData));if(!Cb(R))return;R=Object(R);if(n.vtp_useGA4SchemaForEcommerce){R=G(R);R.currencyCode=R.currencyCode||R.currency;var vb=String(Sh(n.vtp_gtmEventId,"event"));if("view_item_list"===vb&&!R.impressions&&R.items)R.impressions=mb(R.items);else if("view_promotion"===vb&&!R.promoView&&R.items)R.promoView={},R.promoView.promotions=mb(R.items);else if("select_promotion"===vb&&!R.promoClick)R.items&&(R.promoClick={},R.promoClick.promotions=mb(R.items)),Lb(R,"promoClick");else if($a.hasOwnProperty(vb)){var fd=
$a[vb];R[fd]||(R.items&&(R[fd]={},R[fd].products=mb(R.items)),Lb(R,fd))}}var gd=bb(z,"currencyCode",R.currencyCode);void 0!==gd&&E("set","&cu",gd);nb("ec:addImpression",R,"impressions");if(nb("ec:addPromo",R[R.promoClick?"promoClick":"promoView"],"promotions")&&R.promoClick){E("ec:setAction","promo_click",R.promoClick.actionField);return}for(var Id="detail checkout checkout_option click add remove purchase refund".split(" "),Jd="refund purchase remove checkout checkout_option add click detail".split(" "),
Kd=0;Kd<Id.length;Kd++){var Bc=R[Id[Kd]];if(Bc){nb("ec:addProduct",Bc,"products");E("ec:setAction",Id[Kd],Bc.actionField);if(rl)for(var Ld=0;Ld<Jd.length;Ld++){var Md=R[Jd[Ld]];if(Md){Md!==Bc&&zf(13);break}}break}}},ba={name:D};l(z,ba,!0);var ra=n.vtp_trackingId||r.trackingId;A("create",ra,ba);E("set","&gtm",dm(!0));
ug()&&(E("set","&gcs",Dg()),b(ra,n));z._x_19&&(null==Tf&&delete z._x_19,z._x_20&&!d[D]&&(d[D]=!0,A(Uk(D,String(z._x_20)))));n.vtp_enableRecaptcha&&E("require","recaptcha","recaptcha.js");(function(ka,W){void 0!==n[W]&&E("set",ka,n[W])})("nonInteraction","vtp_nonInteraction");Q("contentGroup",u);Q("dimension",v);Q("metric",w);var P={};l(z,P,!1)&&E("set",P);var K;
n.vtp_enableLinkId&&E("require","linkid","linkid.js");E("set","hitCallback",function(){var ka=z&&z.hitCallback;Ka(ka)&&ka();n.vtp_gtmOnSuccess()});var L=function(ka,W){return void 0===n[ka]?r[W]:n[ka]};if("TRACK_EVENT"==n.vtp_trackType){n.vtp_enableEcommerce&&(E("require","ec","ec.js"),V());var ea={hitType:"event",eventCategory:String(L("vtp_eventCategory","category")),eventAction:String(L("vtp_eventAction","action")),eventLabel:J(String,
L("vtp_eventLabel","label")),eventValue:J(Va,L("vtp_eventValue","value"))};l(K,ea,!1);E("send",ea);}else if("TRACK_SOCIAL"==n.vtp_trackType){}else if("TRACK_TRANSACTION"==
n.vtp_trackType){}else if("TRACK_TIMING"==n.vtp_trackType){}else if("DECORATE_LINK"==
n.vtp_trackType){}else if("DECORATE_FORM"==n.vtp_trackType){}else if("TRACK_DATA"==n.vtp_trackType){}else{n.vtp_enableEcommerce&&
(E("require","ec","ec.js"),V());if(n.vtp_doubleClick||"DISPLAY_FEATURES"==n.vtp_advertisingFeaturesType){var hc="_dc_gtm_"+String(n.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");E("require","displayfeatures",void 0,{cookieName:hc})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==n.vtp_advertisingFeaturesType){var Gb="_dc_gtm_"+String(n.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");E("require","adfeatures",{cookieName:Gb})}K?E("send","pageview",K):E("send","pageview");Xa(z.urlPassthrough)&&Rk(C)}if(!c){var Ra=n.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";n.vtp_useInternalVersion&&!n.vtp_useDebugVersion&&(Ra="internal/"+Ra);c=!0;var Sb=Ol(z._x_19,"/analytics.js"),Zc=Sj("https:","http:","//www.google-analytics.com/"+Ra,z&&!!z.forceSSL);S("analytics.js"===Ra&&Sb?Sb:Zc,function(){var ka=
Nk();ka&&ka.loaded||n.vtp_gtmOnFailure();},n.vtp_gtmOnFailure)}}else N(n.vtp_gtmOnFailure)};(function(n){Z.__ua=n;Z.__ua.i="ua";Z.__ua.m=!0;Z.__ua.priorityOverride=0})(function(n){Eg(function(){p(n)},[I.K,I.C])})}();
Z.h.get_url=["google"],function(){function a(b,c,d){return{component:c,queryKey:d}}(function(b){Z.__get_url=b;Z.__get_url.i="get_url";Z.__get_url.m=!0;Z.__get_url.priorityOverride=0})(function(b){var c="any"===b.vtp_urlParts?null:[];c&&(b.vtp_protocol&&c.push("protocol"),b.vtp_host&&c.push("host"),b.vtp_port&&c.push("port"),b.vtp_path&&c.push("path"),b.vtp_extension&&c.push("extension"),b.vtp_query&&c.push("query"),b.vtp_fragment&&c.push("fragment"));var d=c&&"any"!==b.vtp_queriesAllowed?b.vtp_queryKeys||
[]:null,e=b.vtp_createPermissionError;return{assert:function(f,g,h){if(g){if(!q(g))throw e(f,{},"URL component must be a string.");if(c&&0>B(c,g))throw e(f,{},"Prohibited URL component: "+g);if("query"===g&&d){if(!h)throw e(f,{},"Prohibited from getting entire URL query when query keys are specified.");if(!q(h))throw e(f,{},"Query key must be a string.");if(0>B(d,h))throw e(f,{},"Prohibited query key: "+h);}}else if(c)throw e(f,{},"Prohibited from getting entire URL when components are specified.");
},N:a}})}();


Z.h.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Z.__inject_script=b;Z.__inject_script.i="inject_script";Z.__inject_script.m=!0;Z.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!q(f))throw d(e,{},"Script URL must be a string.");try{if(Oe(Zg(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},N:a}})}();


Z.h.cid=["google"],function(){(function(a){Z.__cid=a;Z.__cid.i="cid";Z.__cid.m=!0;Z.__cid.priorityOverride=0})(function(){return le.F})}();



Z.h.aev=["google"],function(){function a(r,u){var v=Sh(r,"gtm");if(v)return v[u]}function b(r,u,v,w){w||(w="element");var y=r+"."+u,x;if(p.hasOwnProperty(y))x=p[y];else{var z=a(r,w);if(z&&(x=v(z),p[y]=x,n.push(y),35<n.length)){var A=n.shift();delete p[A]}}return x}function c(r,u,v){var w=a(r,t[u]);return void 0!==w?w:v}function d(r,u){if(!r)return!1;var v=e(mr());Na(u)||(u=String(u||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<u.length;y++){var x=u[y];if(x.hasOwnProperty("is_regex"))if(x.is_regex)try{x=
new RegExp(x.domain)}catch(A){continue}else x=x.domain;if(x instanceof RegExp){if(x.test(r))return!1}else{var z=x;if(0!=z.length){if(0<=e(r).indexOf(z))return!1;w.push(e(z))}}}return!ds(r,w)}function e(r){m.test(r)||(r="http://"+r);return Xg(Zg(r),"HOST",!0)}function f(r,u,v){switch(r){case "SUBMIT_TEXT":return b(u,"FORM."+r,g,"formSubmitElement")||v;case "LENGTH":var w=b(u,"FORM."+r,h);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(u,"id",v);case "INTERACTED_FIELD_NAME":return l(u,"name",
v);case "INTERACTED_FIELD_TYPE":return l(u,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(u,"interactedFormFieldPosition");return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(u,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function g(r){switch(r.tagName.toLowerCase()){case "input":return bg(r,"value");case "button":return cg(r);default:return null}}function h(r){if("form"===r.tagName.toLowerCase()&&r.elements){for(var u=0,v=0;v<r.elements.length;v++)Xq(r.elements[v])&&
u++;return u}}function l(r,u,v){var w=a(r,"interactedFormField");return w&&bg(w,u)||v}var m=/^https?:\/\//i,p={},n=[],t={ATTRIBUTE:"elementAttribute",CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(r){Z.__aev=r;Z.__aev.i="aev";Z.__aev.m=!0;Z.__aev.priorityOverride=
0})(function(r){var u=r.vtp_gtmEventId,v=r.vtp_defaultValue,w=r.vtp_varType;switch(w){case "TAG_NAME":var y=a(u,"element");return y&&y.tagName||v;case "TEXT":return b(u,w,cg)||v;case "URL":var x;a:{var z=String(a(u,"elementUrl")||v||""),A=Zg(z),C=String(r.vtp_component||"URL");switch(C){case "URL":x=z;break a;case "IS_OUTBOUND":x=d(z,r.vtp_affiliatedDomains);break a;default:x=Xg(A,C,r.vtp_stripWww,r.vtp_defaultPages,r.vtp_queryKey)}}return x;case "ATTRIBUTE":var D;if(void 0===r.vtp_attribute)D=c(u,
w,v);else{var E=r.vtp_attribute,J=a(u,"element");D=J&&bg(J,E)||v||""}return D;case "MD":var Q=r.vtp_mdValue,V=b(u,"MD",fr);return Q&&V?ir(V,Q)||v:V||v;case "FORM":return f(String(r.vtp_component||"SUBMIT_TEXT"),u,v);default:var ba=c(u,w,v);zr(ba,"aev",r.vtp_gtmEventId);return ba}})}();Z.h.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.i="gas";Z.__gas.m=!0;Z.__gas.priorityOverride=0})(function(a){var b=G(a),c=b;c[Yd.Qa]=null;c[Yd.Ug]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();
Z.h.hl=["google"],function(){function a(f){return f.target&&f.target.location&&f.target.location.href?f.target.location.href:mr()}function b(f,g){$f(f,"hashchange",function(h){var l=a(h);g({source:"hashchange",state:null,url:or(l),L:nr(l)})})}function c(f,g){$f(f,"popstate",function(h){var l=a(h);g({source:"popstate",state:h.state,url:or(l),L:nr(l)})})}function d(f,g,h){var l=g.history,m=l[f];if(Ka(m))try{l[f]=function(p,n,t){m.apply(l,[].slice.call(arguments,0));h({source:f,state:p,url:or(mr()),
L:nr(mr())})}}catch(p){}}function e(){var f={source:null,state:T("history").state||null,url:or(mr()),L:nr(mr())};return function(g){var h=f,l={};l[h.source]=!0;l[g.source]=!0;if(!l.popstate||!l.hashchange||h.L!=g.L){var m={event:"gtm.historyChange","gtm.historyChangeSource":g.source,"gtm.oldUrlFragment":f.L,"gtm.newUrlFragment":g.L,"gtm.oldHistoryState":f.state,"gtm.newHistoryState":g.state,"gtm.oldUrl":f.url,"gtm.newUrl":g.url};f=g;qr(m)}}}(function(f){Z.__hl=f;Z.__hl.i="hl";Z.__hl.m=!0;Z.__hl.priorityOverride=
0})(function(f){var g=T("self");if(!vr("hl")){var h=e();b(g,h);c(g,h);d("pushState",g,h);d("replaceState",g,h);wr("hl")}N(f.vtp_gtmOnSuccess)})}();



Z.h.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.i="paused";Z.__paused.m=!0;Z.__paused.priorityOverride=0})(function(a){N(a.vtp_gtmOnFailure)})}();

Z.h.zone=[],function(){function a(p){for(var n=p.vtp_boundaries||[],t=0;t<n.length;t++)if(!n[t])return!1;return!0}function b(p){var n=le.F,t=n+":"+p.vtp_gtmTagId,r=pr("gtm.uniqueEventId")||0,u=rk(function(){return new g}),v=a(p),w=p.vtp_enableTypeRestrictions?p.vtp_whitelistedTypes.map(function(D){return D.typeId}):null;w=w&&gb(w,f);if(u.registerZone(t,r,v,w))for(var y=p.vtp_childContainers.map(function(D){return D.publicId}),x=0;x<y.length;x++){var z=String(y[x]);if(u.registerChild(z,n,t)){var A=
0!==z.indexOf("GTM-");if(A){var C=function(D,E){qr(arguments)};C("js",new Date);m?(C("config",z),l||xr(z,A)):(O.addTargetToGroup(z),Yn({},z))}else xr(z,A)}}}var c={active:!1,isAllowed:function(){return!1},Yh:function(){return!1}},d={active:!0,isAllowed:function(){return!0},Yh:function(){return!0}},e={zone:!0,cn:!0,css:!0,ew:!0,eq:!0,ge:!0,gt:!0,lc:!0,le:!0,lt:!0,re:!0,sw:!0,um:!0},f={cl:["ecl"],ecl:["cl"],ehl:["hl"],hl:["ehl"]},g=function(){this.g={};this.o={}};g.prototype.checkState=function(p,n){var t=
this.g[p];if(!t)return d;var r=this.checkState(t.Tf,n);if(!r.active)return c;for(var u=[],v=0;v<t.ve.length;v++){var w=this.o[t.ve[v]];w.Ub(n)&&u.push(w)}return u.length?{active:!0,isAllowed:function(y,x){x=x||[];var z=r.isAllowed;if(!z(y,x))return!1;for(var A=0;A<u.length;++A)if(u[A].isAllowed(y,x))return!0;return!1}}:c};g.prototype.unregisterChild=function(p){delete this.g[p]};g.prototype.registerZone=function(p,n,t,r){var u=this.o[p];if(u)return u.s(n,t),!1;if(!t)return!1;this.o[p]=new h(n,r);
return!0};g.prototype.registerChild=function(p,n,t){var r=this.g[p];if(!r&&O[p]||r&&r.Tf!==n)return!1;if(r)return r.ve.push(t),!1;this.g[p]={Tf:n,ve:[t]};return!0};var h=function(p,n){this.g=[{eventId:p,Ub:!0}];this.o=null;if(n){this.o={};for(var t=0;t<n.length;t++)this.o[n[t]]=!0}};h.prototype.s=function(p,n){var t=this.g[this.g.length-1];p<=t.eventId||t.Ub!=n&&this.g.push({eventId:p,Ub:n})};h.prototype.Ub=function(p){if(!this.g||0==this.g.length)return!1;for(var n=this.g.length-1;0<=n;n--)if(this.g[n].eventId<=
p)return this.g[n].Ub;return!1};h.prototype.isAllowed=function(p,n){n=n||[];if(!this.o||e[p]||this.o[p])return!0;for(var t=0;t<n.length;++t)if(this.o[n[t]])return!0;return!1};var l=!1;var m=!0;m=!1;(function(p){Z.__zone=p;Z.__zone.i="zone";Z.__zone.m=
!0;Z.__zone.priorityOverride=0})(function(p){b(p);N(p.vtp_gtmOnSuccess)})}();
Z.h.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var h=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(h.nodeName).toUpperCase()&&"text/gtmscript"==h.type){var m=M.createElement("script");m.async=!1;m.type="text/javascript";m.id=h.id;m.text=h.text||h.textContent||h.innerHTML||"";h.charset&&(m.charset=h.charset);var p=h.getAttribute("data-gtmsrc");p&&(m.src=p,Vf(m,l));d.insertBefore(m,null);p||l()}else if(h.innerHTML&&0<=h.innerHTML.toLowerCase().indexOf("<script")){for(var n=
[];h.firstChild;)n.push(h.removeChild(h.firstChild));d.insertBefore(h,null);a(h,n,l,g)()}else d.insertBefore(h,null),l()}else f()}catch(t){N(g)}}}var c=function(d){if(M.body){var e=d.vtp_gtmOnFailure,f=Ar(d.vtp_html,d.vtp_gtmOnSuccess,
e),g=f.Rd,h=f.onSuccess;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,h,e):a(M.body,dg(g),h,e)()}else kr(function(){c(d)},200)};Z.__html=c;Z.__html.i="html";
Z.__html.m=!0;Z.__html.priorityOverride=0}();

Z.h.dbg=["google"],function(){(function(a){Z.__dbg=a;Z.__dbg.i="dbg";Z.__dbg.m=!0;Z.__dbg.priorityOverride=0})(function(){return!1})}();






var Nu={};Nu.macro=function(a){if(Sq.zd.hasOwnProperty(a))return Sq.zd[a]},Nu.onHtmlSuccess=Sq.Gf(!0),Nu.onHtmlFailure=Sq.Gf(!1);Nu.dataLayer=Oh;Nu.callback=function(a){Fh.hasOwnProperty(a)&&Ka(Fh[a])&&Fh[a]();delete Fh[a]};Nu.bootstrap=0;Nu._spx=!1;function Ou(){O[le.F]=Nu;db(Gh,Z.h);Rd=Rd||Sq;Sd=he}
function Pu(){ig.gtag_cs_api=!0;O=F.google_tag_manager=F.google_tag_manager||{};Em();if(O[le.F]){var a=O.zones;a&&a.unregisterChild(le.F);}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Fd.push(c[d]);
for(var e=b.tags||[],f=0;f<e.length;f++)Nd.push(e[f]);for(var g=b.predicates||[],h=0;h<g.length;h++)Hd.push(g[h]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var p=l[m],n={},t=0;t<p.length;t++)n[p[t][0]]=Array.prototype.slice.call(p[t],1);Gd.push(n)}Pd=Z;Qd=$r;var r=data.permissions||{},u=data.sandboxed_scripts,v=data.security_groups;Zp();pe=new oe(r);if(void 0!==u)for(var w=["sandboxedScripts"],y=0;y<u.length;y++){var x=u[y].replace(/^_*/,"");Gh[x]=w}bq(v);Ou();Rq();uk=!1;vk=0;if("interactive"==
M.readyState&&!M.createEventObject||"complete"==M.readyState)xk();else{$f(M,"DOMContentLoaded",xk);$f(M,"readystatechange",xk);if(M.createEventObject&&M.documentElement.doScroll){var z=!0;try{z=!F.frameElement}catch(J){}z&&yk()}$f(F,"load",xk)}lp=!1;"complete"===M.readyState?np():$f(F,"load",np);a:{
if(!rl)break a;F.setInterval(sl,864E5);}Dh=(new Date).getTime();}}
(function(a){if(!F["__TAGGY_INSTALLED"]){var b=!1;if(M.referrer){var c=Zg(M.referrer);b="cct.google"===Wg(c,"host")}if(!b){var d=ai("googTaggyReferrer");b=d.length&&d[0].length}b&&(F["__TAGGY_INSTALLED"]=!0,Wf("https://cct.google/taggy/agent.js"))}var f=function(){var m=F["google.tagmanager.debugui2.queue"];m||(m=[],F["google.tagmanager.debugui2.queue"]=m,Wf("https://www.googletagmanager.com/debug/bootstrap"));return m},g="x"===Xg(F.location,"query",!1,void 0,"gtm_debug");if(!g&&M.referrer){var h=Zg(M.referrer);g="tagassistant.google.com"===Wg(h,"host")}if(!g){var l=ai("__TAG_ASSISTANT");g=l.length&&l[0].length}F.__TAG_ASSISTANT_API&&(g=!0);g&&Tf?f().push({messageType:"CONTAINER_STARTING",
data:{scriptSource:Tf,resume:function(){a()}}}):a()})(Pu);

})()
