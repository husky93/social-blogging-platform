import{Q as v,S as y,T as O,U as te}from"./index.f31e121f.js";function ae(r,t){v(2,arguments);var e=y(r).getTime(),a=O(t);return new Date(e+a)}var re={};function N(){return re}function Y(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Y=function(e){return typeof e}:Y=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Y(r)}function ne(r){return v(1,arguments),r instanceof Date||Y(r)==="object"&&Object.prototype.toString.call(r)==="[object Date]"}function ie(r){if(v(1,arguments),!ne(r)&&typeof r!="number")return!1;var t=y(r);return!isNaN(Number(t))}function oe(r,t){v(2,arguments);var e=O(t);return ae(r,-e)}var ue=864e5;function se(r){v(1,arguments);var t=y(r),e=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var a=t.getTime(),n=e-a;return Math.floor(n/ue)+1}function E(r){v(1,arguments);var t=1,e=y(r),a=e.getUTCDay(),n=(a<t?7:0)+a-t;return e.setUTCDate(e.getUTCDate()-n),e.setUTCHours(0,0,0,0),e}function B(r){v(1,arguments);var t=y(r),e=t.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(e+1,0,4),a.setUTCHours(0,0,0,0);var n=E(a),i=new Date(0);i.setUTCFullYear(e,0,4),i.setUTCHours(0,0,0,0);var o=E(i);return t.getTime()>=n.getTime()?e+1:t.getTime()>=o.getTime()?e:e-1}function de(r){v(1,arguments);var t=B(r),e=new Date(0);e.setUTCFullYear(t,0,4),e.setUTCHours(0,0,0,0);var a=E(e);return a}var le=6048e5;function ce(r){v(1,arguments);var t=y(r),e=E(t).getTime()-de(t).getTime();return Math.round(e/le)+1}function $(r,t){var e,a,n,i,o,s,l,d;v(1,arguments);var f=N(),c=O((e=(a=(n=(i=t==null?void 0:t.weekStartsOn)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.weekStartsOn)!==null&&n!==void 0?n:f.weekStartsOn)!==null&&a!==void 0?a:(l=f.locale)===null||l===void 0||(d=l.options)===null||d===void 0?void 0:d.weekStartsOn)!==null&&e!==void 0?e:0);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var h=y(r),m=h.getUTCDay(),w=(m<c?7:0)+m-c;return h.setUTCDate(h.getUTCDate()-w),h.setUTCHours(0,0,0,0),h}function V(r,t){var e,a,n,i,o,s,l,d;v(1,arguments);var f=y(r),c=f.getUTCFullYear(),h=N(),m=O((e=(a=(n=(i=t==null?void 0:t.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&n!==void 0?n:h.firstWeekContainsDate)!==null&&a!==void 0?a:(l=h.locale)===null||l===void 0||(d=l.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&e!==void 0?e:1);if(!(m>=1&&m<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var w=new Date(0);w.setUTCFullYear(c+1,0,m),w.setUTCHours(0,0,0,0);var D=$(w,t),p=new Date(0);p.setUTCFullYear(c,0,m),p.setUTCHours(0,0,0,0);var P=$(p,t);return f.getTime()>=D.getTime()?c+1:f.getTime()>=P.getTime()?c:c-1}function fe(r,t){var e,a,n,i,o,s,l,d;v(1,arguments);var f=N(),c=O((e=(a=(n=(i=t==null?void 0:t.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&n!==void 0?n:f.firstWeekContainsDate)!==null&&a!==void 0?a:(l=f.locale)===null||l===void 0||(d=l.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&e!==void 0?e:1),h=V(r,t),m=new Date(0);m.setUTCFullYear(h,0,c),m.setUTCHours(0,0,0,0);var w=$(m,t);return w}var me=6048e5;function he(r,t){v(1,arguments);var e=y(r),a=$(e,t).getTime()-fe(e,t).getTime();return Math.round(a/me)+1}function u(r,t){for(var e=r<0?"-":"",a=Math.abs(r).toString();a.length<t;)a="0"+a;return e+a}var ve={y:function(t,e){var a=t.getUTCFullYear(),n=a>0?a:1-a;return u(e==="yy"?n%100:n,e.length)},M:function(t,e){var a=t.getUTCMonth();return e==="M"?String(a+1):u(a+1,2)},d:function(t,e){return u(t.getUTCDate(),e.length)},a:function(t,e){var a=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return a.toUpperCase();case"aaa":return a;case"aaaaa":return a[0];case"aaaa":default:return a==="am"?"a.m.":"p.m."}},h:function(t,e){return u(t.getUTCHours()%12||12,e.length)},H:function(t,e){return u(t.getUTCHours(),e.length)},m:function(t,e){return u(t.getUTCMinutes(),e.length)},s:function(t,e){return u(t.getUTCSeconds(),e.length)},S:function(t,e){var a=e.length,n=t.getUTCMilliseconds(),i=Math.floor(n*Math.pow(10,a-3));return u(i,e.length)}};const T=ve;var M={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},ge={G:function(t,e,a){var n=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return a.era(n,{width:"abbreviated"});case"GGGGG":return a.era(n,{width:"narrow"});case"GGGG":default:return a.era(n,{width:"wide"})}},y:function(t,e,a){if(e==="yo"){var n=t.getUTCFullYear(),i=n>0?n:1-n;return a.ordinalNumber(i,{unit:"year"})}return T.y(t,e)},Y:function(t,e,a,n){var i=V(t,n),o=i>0?i:1-i;if(e==="YY"){var s=o%100;return u(s,2)}return e==="Yo"?a.ordinalNumber(o,{unit:"year"}):u(o,e.length)},R:function(t,e){var a=B(t);return u(a,e.length)},u:function(t,e){var a=t.getUTCFullYear();return u(a,e.length)},Q:function(t,e,a){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(n);case"QQ":return u(n,2);case"Qo":return a.ordinalNumber(n,{unit:"quarter"});case"QQQ":return a.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return a.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return a.quarter(n,{width:"wide",context:"formatting"})}},q:function(t,e,a){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(n);case"qq":return u(n,2);case"qo":return a.ordinalNumber(n,{unit:"quarter"});case"qqq":return a.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return a.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return a.quarter(n,{width:"wide",context:"standalone"})}},M:function(t,e,a){var n=t.getUTCMonth();switch(e){case"M":case"MM":return T.M(t,e);case"Mo":return a.ordinalNumber(n+1,{unit:"month"});case"MMM":return a.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return a.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return a.month(n,{width:"wide",context:"formatting"})}},L:function(t,e,a){var n=t.getUTCMonth();switch(e){case"L":return String(n+1);case"LL":return u(n+1,2);case"Lo":return a.ordinalNumber(n+1,{unit:"month"});case"LLL":return a.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return a.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return a.month(n,{width:"wide",context:"standalone"})}},w:function(t,e,a,n){var i=he(t,n);return e==="wo"?a.ordinalNumber(i,{unit:"week"}):u(i,e.length)},I:function(t,e,a){var n=ce(t);return e==="Io"?a.ordinalNumber(n,{unit:"week"}):u(n,e.length)},d:function(t,e,a){return e==="do"?a.ordinalNumber(t.getUTCDate(),{unit:"date"}):T.d(t,e)},D:function(t,e,a){var n=se(t);return e==="Do"?a.ordinalNumber(n,{unit:"dayOfYear"}):u(n,e.length)},E:function(t,e,a){var n=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return a.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return a.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(n,{width:"short",context:"formatting"});case"EEEE":default:return a.day(n,{width:"wide",context:"formatting"})}},e:function(t,e,a,n){var i=t.getUTCDay(),o=(i-n.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return u(o,2);case"eo":return a.ordinalNumber(o,{unit:"day"});case"eee":return a.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return a.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(i,{width:"short",context:"formatting"});case"eeee":default:return a.day(i,{width:"wide",context:"formatting"})}},c:function(t,e,a,n){var i=t.getUTCDay(),o=(i-n.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return u(o,e.length);case"co":return a.ordinalNumber(o,{unit:"day"});case"ccc":return a.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return a.day(i,{width:"narrow",context:"standalone"});case"cccccc":return a.day(i,{width:"short",context:"standalone"});case"cccc":default:return a.day(i,{width:"wide",context:"standalone"})}},i:function(t,e,a){var n=t.getUTCDay(),i=n===0?7:n;switch(e){case"i":return String(i);case"ii":return u(i,e.length);case"io":return a.ordinalNumber(i,{unit:"day"});case"iii":return a.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return a.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return a.day(n,{width:"short",context:"formatting"});case"iiii":default:return a.day(n,{width:"wide",context:"formatting"})}},a:function(t,e,a){var n=t.getUTCHours(),i=n/12>=1?"pm":"am";switch(e){case"a":case"aa":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return a.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return a.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(t,e,a){var n=t.getUTCHours(),i;switch(n===12?i=M.noon:n===0?i=M.midnight:i=n/12>=1?"pm":"am",e){case"b":case"bb":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return a.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return a.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(t,e,a){var n=t.getUTCHours(),i;switch(n>=17?i=M.evening:n>=12?i=M.afternoon:n>=4?i=M.morning:i=M.night,e){case"B":case"BB":case"BBB":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return a.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return a.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(t,e,a){if(e==="ho"){var n=t.getUTCHours()%12;return n===0&&(n=12),a.ordinalNumber(n,{unit:"hour"})}return T.h(t,e)},H:function(t,e,a){return e==="Ho"?a.ordinalNumber(t.getUTCHours(),{unit:"hour"}):T.H(t,e)},K:function(t,e,a){var n=t.getUTCHours()%12;return e==="Ko"?a.ordinalNumber(n,{unit:"hour"}):u(n,e.length)},k:function(t,e,a){var n=t.getUTCHours();return n===0&&(n=24),e==="ko"?a.ordinalNumber(n,{unit:"hour"}):u(n,e.length)},m:function(t,e,a){return e==="mo"?a.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):T.m(t,e)},s:function(t,e,a){return e==="so"?a.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):T.s(t,e)},S:function(t,e){return T.S(t,e)},X:function(t,e,a,n){var i=n._originalDate||t,o=i.getTimezoneOffset();if(o===0)return"Z";switch(e){case"X":return G(o);case"XXXX":case"XX":return C(o);case"XXXXX":case"XXX":default:return C(o,":")}},x:function(t,e,a,n){var i=n._originalDate||t,o=i.getTimezoneOffset();switch(e){case"x":return G(o);case"xxxx":case"xx":return C(o);case"xxxxx":case"xxx":default:return C(o,":")}},O:function(t,e,a,n){var i=n._originalDate||t,o=i.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+X(o,":");case"OOOO":default:return"GMT"+C(o,":")}},z:function(t,e,a,n){var i=n._originalDate||t,o=i.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+X(o,":");case"zzzz":default:return"GMT"+C(o,":")}},t:function(t,e,a,n){var i=n._originalDate||t,o=Math.floor(i.getTime()/1e3);return u(o,e.length)},T:function(t,e,a,n){var i=n._originalDate||t,o=i.getTime();return u(o,e.length)}};function X(r,t){var e=r>0?"-":"+",a=Math.abs(r),n=Math.floor(a/60),i=a%60;if(i===0)return e+String(n);var o=t||"";return e+String(n)+o+u(i,2)}function G(r,t){if(r%60===0){var e=r>0?"-":"+";return e+u(Math.abs(r)/60,2)}return C(r,t)}function C(r,t){var e=t||"",a=r>0?"-":"+",n=Math.abs(r),i=u(Math.floor(n/60),2),o=u(n%60,2);return a+i+e+o}const we=ge;var I=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},j=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},ye=function(t,e){var a=t.match(/(P+)(p+)?/)||[],n=a[1],i=a[2];if(!i)return I(t,e);var o;switch(n){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;case"PPPP":default:o=e.dateTime({width:"full"});break}return o.replace("{{date}}",I(n,e)).replace("{{time}}",j(i,e))},be={p:j,P:ye};const Te=be;var pe=["D","DD"],Ce=["YY","YYYY"];function Oe(r){return pe.indexOf(r)!==-1}function Me(r){return Ce.indexOf(r)!==-1}function A(r,t,e){if(r==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var De={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Pe=function(t,e,a){var n,i=De[t];return typeof i=="string"?n=i:e===1?n=i.one:n=i.other.replace("{{count}}",e.toString()),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?"in "+n:n+" ago":n};const ke=Pe;function Q(r){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.width?String(t.width):r.defaultWidth,a=r.formats[e]||r.formats[r.defaultWidth];return a}}var We={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},xe={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Se={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Ue={date:Q({formats:We,defaultWidth:"full"}),time:Q({formats:xe,defaultWidth:"full"}),dateTime:Q({formats:Se,defaultWidth:"full"})};const _e=Ue;var Ye={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Ee=function(t,e,a,n){return Ye[t]};const $e=Ee;function x(r){return function(t,e){var a=e!=null&&e.context?String(e.context):"standalone",n;if(a==="formatting"&&r.formattingValues){var i=r.defaultFormattingWidth||r.defaultWidth,o=e!=null&&e.width?String(e.width):i;n=r.formattingValues[o]||r.formattingValues[i]}else{var s=r.defaultWidth,l=e!=null&&e.width?String(e.width):r.defaultWidth;n=r.values[l]||r.values[s]}var d=r.argumentCallback?r.argumentCallback(t):t;return n[d]}}var Ne={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},qe={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Fe={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Le={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},He={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Re={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Qe=function(t,e){var a=Number(t),n=a%100;if(n>20||n<10)switch(n%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"},Xe={ordinalNumber:Qe,era:x({values:Ne,defaultWidth:"wide"}),quarter:x({values:qe,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:x({values:Fe,defaultWidth:"wide"}),day:x({values:Le,defaultWidth:"wide"}),dayPeriod:x({values:He,defaultWidth:"wide",formattingValues:Re,defaultFormattingWidth:"wide"})};const Ge=Xe;function S(r){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.width,n=a&&r.matchPatterns[a]||r.matchPatterns[r.defaultMatchWidth],i=t.match(n);if(!i)return null;var o=i[0],s=a&&r.parsePatterns[a]||r.parsePatterns[r.defaultParseWidth],l=Array.isArray(s)?Ae(s,function(c){return c.test(o)}):Ie(s,function(c){return c.test(o)}),d;d=r.valueCallback?r.valueCallback(l):l,d=e.valueCallback?e.valueCallback(d):d;var f=t.slice(o.length);return{value:d,rest:f}}}function Ie(r,t){for(var e in r)if(r.hasOwnProperty(e)&&t(r[e]))return e}function Ae(r,t){for(var e=0;e<r.length;e++)if(t(r[e]))return e}function Be(r){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.match(r.matchPattern);if(!a)return null;var n=a[0],i=t.match(r.parsePattern);if(!i)return null;var o=r.valueCallback?r.valueCallback(i[0]):i[0];o=e.valueCallback?e.valueCallback(o):o;var s=t.slice(n.length);return{value:o,rest:s}}}var Ve=/^(\d+)(th|st|nd|rd)?/i,je=/\d+/i,Je={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},ze={any:[/^b/i,/^(a|c)/i]},Ke={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Ze={any:[/1/i,/2/i,/3/i,/4/i]},et={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},tt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},at={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},rt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},nt={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},it={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},ot={ordinalNumber:Be({matchPattern:Ve,parsePattern:je,valueCallback:function(t){return parseInt(t,10)}}),era:S({matchPatterns:Je,defaultMatchWidth:"wide",parsePatterns:ze,defaultParseWidth:"any"}),quarter:S({matchPatterns:Ke,defaultMatchWidth:"wide",parsePatterns:Ze,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:S({matchPatterns:et,defaultMatchWidth:"wide",parsePatterns:tt,defaultParseWidth:"any"}),day:S({matchPatterns:at,defaultMatchWidth:"wide",parsePatterns:rt,defaultParseWidth:"any"}),dayPeriod:S({matchPatterns:nt,defaultMatchWidth:"any",parsePatterns:it,defaultParseWidth:"any"})};const ut=ot;var st={code:"en-US",formatDistance:ke,formatLong:_e,formatRelative:$e,localize:Ge,match:ut,options:{weekStartsOn:0,firstWeekContainsDate:1}};const dt=st;var lt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ct=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ft=/^'([^]*?)'?$/,mt=/''/g,ht=/[a-zA-Z]/;function wt(r,t,e){var a,n,i,o,s,l,d,f,c,h,m,w,D,p,P,q,F,L;v(2,arguments);var J=String(t),k=N(),W=(a=(n=e==null?void 0:e.locale)!==null&&n!==void 0?n:k.locale)!==null&&a!==void 0?a:dt,H=O((i=(o=(s=(l=e==null?void 0:e.firstWeekContainsDate)!==null&&l!==void 0?l:e==null||(d=e.locale)===null||d===void 0||(f=d.options)===null||f===void 0?void 0:f.firstWeekContainsDate)!==null&&s!==void 0?s:k.firstWeekContainsDate)!==null&&o!==void 0?o:(c=k.locale)===null||c===void 0||(h=c.options)===null||h===void 0?void 0:h.firstWeekContainsDate)!==null&&i!==void 0?i:1);if(!(H>=1&&H<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var R=O((m=(w=(D=(p=e==null?void 0:e.weekStartsOn)!==null&&p!==void 0?p:e==null||(P=e.locale)===null||P===void 0||(q=P.options)===null||q===void 0?void 0:q.weekStartsOn)!==null&&D!==void 0?D:k.weekStartsOn)!==null&&w!==void 0?w:(F=k.locale)===null||F===void 0||(L=F.options)===null||L===void 0?void 0:L.weekStartsOn)!==null&&m!==void 0?m:0);if(!(R>=0&&R<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!W.localize)throw new RangeError("locale must contain localize property");if(!W.formatLong)throw new RangeError("locale must contain formatLong property");var U=y(r);if(!ie(U))throw new RangeError("Invalid time value");var z=te(U),K=oe(U,z),Z={firstWeekContainsDate:H,weekStartsOn:R,locale:W,_originalDate:U},ee=J.match(ct).map(function(g){var b=g[0];if(b==="p"||b==="P"){var _=Te[b];return _(g,W.formatLong)}return g}).join("").match(lt).map(function(g){if(g==="''")return"'";var b=g[0];if(b==="'")return vt(g);var _=we[b];if(_)return!(e!=null&&e.useAdditionalWeekYearTokens)&&Me(g)&&A(g,t,String(r)),!(e!=null&&e.useAdditionalDayOfYearTokens)&&Oe(g)&&A(g,t,String(r)),_(K,g,W.localize,Z);if(b.match(ht))throw new RangeError("Format string contains an unescaped latin alphabet character `"+b+"`");return g}).join("");return ee}function vt(r){var t=r.match(ft);return t?t[1].replace(mt,"'"):r}export{wt as f};
