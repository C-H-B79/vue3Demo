(self["webpackChunkvue3_demo"]=self["webpackChunkvue3_demo"]||[]).push([[599],{9917:function(e,t,n){n(4114),n(6573),n(8100),n(7936),n(9479),n(7467),n(4732),n(9577),n(4603),n(7566),n(8721),function(t,r){e.exports=r(n(4648))}(0,(function(e){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?c(e):t}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=o(e);if(t){var i=o(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return l(this,n)}}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,a=void 0;try{for(var s,o=e[Symbol.iterator]();!(r=(s=o.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){i=!0,a=e}finally{try{r||null==o.return||o.return()}finally{if(i)throw a}}return n}}(e,t)||d(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=d(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,o=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){o=!0,a=e},f:function(){try{s||null==n.return||n.return()}finally{if(o)throw a}}}}var v,k;function m(e){if(v){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];v.apply(void 0,[e].concat(n))}}function g(e){if(k){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];k.apply(void 0,[e].concat(n))}}var b=function(){function e(t){n(this,e),this.payload=t,this.nri=(96&this.payload[0])>>5,this.ntype=31&this.payload[0],this.isvcl=1==this.ntype||5==this.ntype,this.stype="",this.isfmb=!1}return i(e,null,[{key:"type",value:function(t){return t.ntype in e.TYPES?e.TYPES[t.ntype]:"UNKNOWN"}},{key:"NDR",get:function(){return 1}},{key:"IDR",get:function(){return 5}},{key:"SEI",get:function(){return 6}},{key:"SPS",get:function(){return 7}},{key:"PPS",get:function(){return 8}},{key:"AUD",get:function(){return 9}},{key:"TYPES",get:function(){var t;return a(t={},e.IDR,"IDR"),a(t,e.SEI,"SEI"),a(t,e.SPS,"SPS"),a(t,e.PPS,"PPS"),a(t,e.NDR,"NDR"),a(t,e.AUD,"AUD"),t}}]),i(e,[{key:"toString",value:function(){return"".concat(e.type(this),": NRI: ").concat(this.getNri())}},{key:"getNri",value:function(){return this.nri}},{key:"type",value:function(){return this.ntype}},{key:"isKeyframe",value:function(){return this.ntype===e.IDR}},{key:"getPayload",value:function(){return this.payload}},{key:"getPayloadSize",value:function(){return this.payload.byteLength}},{key:"getSize",value:function(){return 4+this.getPayloadSize()}},{key:"getData",value:function(){var e=new Uint8Array(this.getSize());return new DataView(e.buffer).setUint32(0,this.getSize()-4),e.set(this.getPayload(),4),e}}]),e}();function S(e,t){var n=new Uint8Array((0|e.byteLength)+(0|t.byteLength));return n.set(e,0),n.set(t,0|e.byteLength),n}var w,x=function(){function e(t){n(this,e),this.data=t,this.index=0,this.bitLength=8*t.byteLength}return i(e,[{key:"skipBits",value:function(e){if(this.bitsAvailable<e)return!1;this.index+=e}},{key:"readBits",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.getBits(e,this.index,t);return n}},{key:"getBits",value:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(this.bitsAvailable<e)return 0;var r=t%8,i=this.data[t/8|0]&255>>>r,a=8-r;if(a>=e)return n&&(this.index+=e),i>>a-e;n&&(this.index+=a);var s=e-a;return i<<s|this.getBits(s,t+a,n)}},{key:"skipLZ",value:function(){var e;for(e=0;e<this.bitLength-this.index;++e)if(0!==this.getBits(1,this.index+e,!1))return this.index+=e,e;return e}},{key:"skipUEG",value:function(){this.skipBits(1+this.skipLZ())}},{key:"skipEG",value:function(){this.skipBits(1+this.skipLZ())}},{key:"readUEG",value:function(){var e=this.skipLZ();return this.readBits(e+1)-1}},{key:"readEG",value:function(){var e=this.readUEG();return 1&e?1+e>>>1:-1*(e>>>1)}},{key:"readBoolean",value:function(){return 1===this.readBits(1)}},{key:"readUByte",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return this.readBits(8*e)}},{key:"readUShort",value:function(){return this.readBits(16)}},{key:"readUInt",value:function(){return this.readBits(32)}},{key:"bitsAvailable",get:function(){return this.bitLength-this.index}}]),e}(),U=function(){function e(t){n(this,e),this.remuxer=t,this.track=t.mp4track}return i(e,null,[{key:"extractNALu",value:function(e){for(var t,n,r=0,i=e.byteLength,a=0,s=[],o=0;r<i;)switch(t=e[r++],a){case 0:0===t&&(a=1);break;case 1:a=0===t?2:0;break;case 2:case 3:0===t?a=3:1===t&&r<i?(o!=r-a-1&&s.push(e.subarray(o,r-a-1)),o=r,a=0):a=0}return o<i&&(n=e.subarray(o,i)),[s,n]}},{key:"skipScalingList",value:function(e,t){for(var n=8,r=8,i=0;i<t;i++)0!==r&&(r=(n+e.readEG()+256)%256),n=0===r?n:r}},{key:"readSPS",value:function(t){var n,r,i,a,s,o,u=new x(t),c=0,l=0,f=0,h=0,d=1;if(u.readUByte(),n=u.readUByte(),u.readBits(5),u.skipBits(3),u.readUByte(),u.skipUEG(),100===n||110===n||122===n||244===n||44===n||83===n||86===n||118===n||128===n){var y=u.readUEG();if(3===y&&u.skipBits(1),u.skipUEG(),u.skipUEG(),u.skipBits(1),u.readBoolean()){o=3!==y?8:12;for(var p=0;p<o;++p)u.readBoolean()&&(p<6?e.skipScalingList(u,16):e.skipScalingList(u,64))}}u.skipUEG();var v=u.readUEG();if(0===v)u.readUEG();else if(1===v){u.skipBits(1),u.skipEG(),u.skipEG(),r=u.readUEG();for(var k=0;k<r;++k)u.skipEG()}if(u.skipUEG(),u.skipBits(1),i=u.readUEG(),a=u.readUEG(),0===(s=u.readBits(1))&&u.skipBits(1),u.skipBits(1),u.readBoolean()&&(c=u.readUEG(),l=u.readUEG(),f=u.readUEG(),h=u.readUEG()),u.readBoolean()){if(u.readBoolean()){var m;switch(u.readUByte()){case 1:m=[1,1];break;case 2:m=[12,11];break;case 3:m=[10,11];break;case 4:m=[16,11];break;case 5:m=[40,33];break;case 6:m=[24,11];break;case 7:m=[20,11];break;case 8:m=[32,11];break;case 9:m=[80,33];break;case 10:m=[18,11];break;case 11:m=[15,11];break;case 12:m=[64,33];break;case 13:m=[160,99];break;case 14:m=[4,3];break;case 15:m=[3,2];break;case 16:m=[2,1];break;case 255:m=[u.readUByte()<<8|u.readUByte(),u.readUByte()<<8|u.readUByte()]}m&&(d=m[0]/m[1])}u.readBoolean()&&u.skipBits(1),u.readBoolean()&&(u.skipBits(4),u.readBoolean()&&u.skipBits(24)),u.readBoolean()&&(u.skipUEG(),u.skipUEG()),u.readBoolean()&&(u.readUInt(),u.readUInt(),u.readBoolean())}return{width:Math.ceil((16*(i+1)-2*c-2*l)*d),height:(2-s)*(a+1)*16-(s?2:4)*(f+h)}}},{key:"parseHeader",value:function(e){var t=new x(e.getPayload());t.readUByte(),e.isfmb=0===t.readUEG(),e.stype=t.readUEG()}}]),i(e,[{key:"parseSPS",value:function(t){var n=e.readSPS(new Uint8Array(t));this.track.width=n.width,this.track.height=n.height,this.track.sps=[new Uint8Array(t)],this.track.codec="avc1.";for(var r=new DataView(t.buffer,t.byteOffset+1,4),i=0;i<3;++i){var a=r.getUint8(i).toString(16);a.length<2&&(a="0"+a),this.track.codec+=a}}},{key:"parsePPS",value:function(e){this.track.pps=[new Uint8Array(e)]}},{key:"parseNAL",value:function(e){if(!e)return!1;var t=!1;switch(e.type()){case b.IDR:case b.NDR:t=!0;break;case b.PPS:this.track.pps||(this.parsePPS(e.getPayload()),!this.remuxer.readyToDecode&&this.track.pps&&this.track.sps&&(this.remuxer.readyToDecode=!0)),t=!0;break;case b.SPS:this.track.sps||(this.parseSPS(e.getPayload()),!this.remuxer.readyToDecode&&this.track.pps&&this.track.sps&&(this.remuxer.readyToDecode=!0)),t=!0;break;case b.AUD:m("AUD - ignoing");break;case b.SEI:m("SEI - ignoing")}return t}}]),e}(),A=function(){function e(t){n(this,e),this.remuxer=t,this.track=t.mp4track}return i(e,null,[{key:"getHeaderLength",value:function(e){return 1&e[1]?7:9}},{key:"getFrameLength",value:function(e){return(3&e[3])<<11|e[4]<<3|(224&e[5])>>>5}},{key:"isAACPattern",value:function(e){return 255===e[0]&&240==(240&e[1])&&0==(6&e[1])}},{key:"extractAAC",value:function(t){var n,r,i=0,a=t.byteLength,s=[];if(!e.isAACPattern(t))return g("Invalid ADTS audio format"),s;for(n=e.getHeaderLength(t),w||(w=t.subarray(0,n));i<a;)r=e.getFrameLength(t),s.push(t.subarray(n,r)),t=t.slice(r),i+=r;return s}},{key:"samplingRateMap",get:function(){return[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350]}},{key:"getAACHeaderData",get:function(){return w}}]),i(e,[{key:"setAACConfig",value:function(){var t,n,r,i=new Uint8Array(2),a=e.getAACHeaderData;a&&(t=1+((192&a[2])>>>6),n=(60&a[2])>>>2,r=(1&a[2])<<2,r|=(192&a[3])>>>6,i[0]=t<<3,i[0]|=(14&n)>>1,i[1]|=(1&n)<<7,i[1]|=r<<3,this.track.codec="mp4a.40."+t,this.track.channelCount=r,this.track.config=i,this.remuxer.readyToDecode=!0)}}]),e}(),C=function(){function e(t){n(this,e),this.listener={},this.type=""|t}return i(e,[{key:"on",value:function(e,t){return this.listener[e]||(this.listener[e]=[]),this.listener[e].push(t),!0}},{key:"off",value:function(e,t){if(this.listener[e]){var n=this.listener[e].indexOf(t);return n>-1&&this.listener[e].splice(n,1),!0}return!1}},{key:"offAll",value:function(){this.listener={}}},{key:"dispatch",value:function(e,t){return!!this.listener[e]&&(this.listener[e].map((function(e){e.apply(null,[t])})),!0)}}]),e}(),B=function(){function e(){n(this,e)}return i(e,null,[{key:"init",value:function(){var t;for(t in e.types={avc1:[],avcC:[],btrt:[],dinf:[],dref:[],esds:[],ftyp:[],hdlr:[],mdat:[],mdhd:[],mdia:[],mfhd:[],minf:[],moof:[],moov:[],mp4a:[],mvex:[],mvhd:[],sdtp:[],stbl:[],stco:[],stsc:[],stsd:[],stsz:[],stts:[],tfdt:[],tfhd:[],traf:[],trak:[],trun:[],trex:[],tkhd:[],vmhd:[],smhd:[]},e.types)e.types.hasOwnProperty(t)&&(e.types[t]=[t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2),t.charCodeAt(3)]);var n=new Uint8Array([0,0,0,0,0,0,0,0,118,105,100,101,0,0,0,0,0,0,0,0,0,0,0,0,86,105,100,101,111,72,97,110,100,108,101,114,0]),r=new Uint8Array([0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0]);e.HDLR_TYPES={video:n,audio:r};var i=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1]),a=new Uint8Array([0,0,0,0,0,0,0,0]);e.STTS=e.STSC=e.STCO=a,e.STSZ=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0]),e.VMHD=new Uint8Array([0,0,0,1,0,0,0,0,0,0,0,0]),e.SMHD=new Uint8Array([0,0,0,0,0,0,0,0]),e.STSD=new Uint8Array([0,0,0,0,0,0,0,1]);var s=new Uint8Array([105,115,111,109]),o=new Uint8Array([97,118,99,49]),u=new Uint8Array([0,0,0,1]);e.FTYP=e.box(e.types.ftyp,s,u,s,o),e.DINF=e.box(e.types.dinf,e.box(e.types.dref,i))}},{key:"box",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i,a=8,s=n.length,o=s;s--;)a+=n[s].byteLength;for((i=new Uint8Array(a))[0]=a>>24&255,i[1]=a>>16&255,i[2]=a>>8&255,i[3]=255&a,i.set(e,4),s=0,a=8;s<o;++s)i.set(n[s],a),a+=n[s].byteLength;return i}},{key:"hdlr",value:function(t){return e.box(e.types.hdlr,e.HDLR_TYPES[t])}},{key:"mdat",value:function(t){return e.box(e.types.mdat,t)}},{key:"mdhd",value:function(t,n){return e.box(e.types.mdhd,new Uint8Array([0,0,0,0,0,0,0,2,0,0,0,3,t>>24&255,t>>16&255,t>>8&255,255&t,n>>24,n>>16&255,n>>8&255,255&n,85,196,0,0]))}},{key:"mdia",value:function(t){return e.box(e.types.mdia,e.mdhd(t.timescale,t.duration),e.hdlr(t.type),e.minf(t))}},{key:"mfhd",value:function(t){return e.box(e.types.mfhd,new Uint8Array([0,0,0,0,t>>24,t>>16&255,t>>8&255,255&t]))}},{key:"minf",value:function(t){return"audio"===t.type?e.box(e.types.minf,e.box(e.types.smhd,e.SMHD),e.DINF,e.stbl(t)):e.box(e.types.minf,e.box(e.types.vmhd,e.VMHD),e.DINF,e.stbl(t))}},{key:"moof",value:function(t,n,r){return e.box(e.types.moof,e.mfhd(t),e.traf(r,n))}},{key:"moov",value:function(t,n,r){for(var i=t.length,a=[];i--;)a[i]=e.trak(t[i]);return e.box.apply(null,[e.types.moov,e.mvhd(r,n)].concat(a).concat(e.mvex(t)))}},{key:"mvex",value:function(t){for(var n=t.length,r=[];n--;)r[n]=e.trex(t[n]);return e.box.apply(null,[e.types.mvex].concat(r))}},{key:"mvhd",value:function(t,n){var r=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,2,t>>24&255,t>>16&255,t>>8&255,255&t,n>>24&255,n>>16&255,n>>8&255,255&n,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255]);return e.box(e.types.mvhd,r)}},{key:"sdtp",value:function(t){var n,r,i=t.samples||[],a=new Uint8Array(4+i.length);for(r=0;r<i.length;r++)n=i[r].flags,a[r+4]=n.dependsOn<<4|n.isDependedOn<<2|n.hasRedundancy;return e.box(e.types.sdtp,a)}},{key:"stbl",value:function(t){return e.box(e.types.stbl,e.stsd(t),e.box(e.types.stts,e.STTS),e.box(e.types.stsc,e.STSC),e.box(e.types.stsz,e.STSZ),e.box(e.types.stco,e.STCO))}},{key:"avc1",value:function(t){var n,r,i,a=[],s=[];for(n=0;n<t.sps.length;n++)i=(r=t.sps[n]).byteLength,a.push(i>>>8&255),a.push(255&i),a=a.concat(Array.prototype.slice.call(r));for(n=0;n<t.pps.length;n++)i=(r=t.pps[n]).byteLength,s.push(i>>>8&255),s.push(255&i),s=s.concat(Array.prototype.slice.call(r));var o=e.box(e.types.avcC,new Uint8Array([1,a[3],a[4],a[5],255,224|t.sps.length].concat(a).concat([t.pps.length]).concat(s))),u=t.width,c=t.height;return e.box(e.types.avc1,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,u>>8&255,255&u,c>>8&255,255&c,0,72,0,0,0,72,0,0,0,0,0,0,0,1,18,98,105,110,101,108,112,114,111,46,114,117,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,17,17]),o,e.box(e.types.btrt,new Uint8Array([0,28,156,128,0,45,198,192,0,45,198,192])))}},{key:"esds",value:function(e){var t=e.config.byteLength,n=new Uint8Array(26+t+3);return n.set([0,0,0,0,3,23+t,0,1,0,4,15+t,64,21,0,0,0,0,0,0,0,0,0,0,0,5,t]),n.set(e.config,26),n.set([6,1,2],26+t),n}},{key:"mp4a",value:function(t){var n=t.audiosamplerate;return e.box(e.types.mp4a,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,t.channelCount,0,16,0,0,0,0,n>>8&255,255&n,0,0]),e.box(e.types.esds,e.esds(t)))}},{key:"stsd",value:function(t){return"audio"===t.type?e.box(e.types.stsd,e.STSD,e.mp4a(t)):e.box(e.types.stsd,e.STSD,e.avc1(t))}},{key:"tkhd",value:function(t){var n=t.id,r=t.duration,i=t.width,a=t.height,s=t.volume;return e.box(e.types.tkhd,new Uint8Array([0,0,0,7,0,0,0,0,0,0,0,0,n>>24&255,n>>16&255,n>>8&255,255&n,0,0,0,0,r>>24,r>>16&255,r>>8&255,255&r,0,0,0,0,0,0,0,0,0,0,0,0,255&s,s%1*10&255,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,i>>8&255,255&i,0,0,a>>8&255,255&a,0,0]))}},{key:"traf",value:function(t,n){var r=e.sdtp(t),i=t.id;return e.box(e.types.traf,e.box(e.types.tfhd,new Uint8Array([0,0,0,0,i>>24,i>>16&255,i>>8&255,255&i])),e.box(e.types.tfdt,new Uint8Array([0,0,0,0,n>>24,n>>16&255,n>>8&255,255&n])),e.trun(t,r.length+16+16+8+16+8+8),r)}},{key:"trak",value:function(t){return t.duration=t.duration||4294967295,e.box(e.types.trak,e.tkhd(t),e.mdia(t))}},{key:"trex",value:function(t){var n=t.id;return e.box(e.types.trex,new Uint8Array([0,0,0,0,n>>24,n>>16&255,n>>8&255,255&n,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1]))}},{key:"trun",value:function(t,n){var r,i,a,s,o,u,c=t.samples||[],l=c.length,f=12+16*l,h=new Uint8Array(f);for(n+=8+f,h.set([0,0,15,1,l>>>24&255,l>>>16&255,l>>>8&255,255&l,n>>>24&255,n>>>16&255,n>>>8&255,255&n],0),r=0;r<l;r++)a=(i=c[r]).duration,s=i.size,o=i.flags,u=i.cts,h.set([a>>>24&255,a>>>16&255,a>>>8&255,255&a,s>>>24&255,s>>>16&255,s>>>8&255,255&s,o.isLeading<<2|o.dependsOn,o.isDependedOn<<6|o.hasRedundancy<<4|o.paddingValue<<1|o.isNonSync,61440&o.degradPrio,15&o.degradPrio,u>>>24&255,u>>>16&255,u>>>8&255,255&u],12+16*r);return e.box(e.types.trun,h)}},{key:"initSegment",value:function(t,n,r){e.types||e.init();var i,a=e.moov(t,n,r);return(i=new Uint8Array(e.FTYP.byteLength+a.byteLength)).set(e.FTYP),i.set(a,e.FTYP.byteLength),i}}]),e}(),D=1,E=function(){function e(){n(this,e)}return i(e,[{key:"flush",value:function(){this.mp4track.len=0,this.mp4track.samples=[]}},{key:"isReady",value:function(){return!(!this.readyToDecode||!this.samples.length)||null}}],[{key:"getTrackID",value:function(){return D++}}]),e}(),T=function(e){s(r,e);var t=f(r);function r(e){var i;return n(this,r),(i=t.call(this)).readyToDecode=!1,i.nextDts=0,i.dts=0,i.mp4track={id:E.getTrackID(),type:"audio",channelCount:0,len:0,fragmented:!0,timescale:e,duration:e,samples:[],config:"",codec:""},i.samples=[],i.aac=new A(c(i)),i}return i(r,[{key:"resetTrack",value:function(){this.readyToDecode=!1,this.mp4track.codec="",this.mp4track.channelCount="",this.mp4track.config="",this.mp4track.timescale=this.timescale,this.nextDts=0,this.dts=0}},{key:"remux",value:function(e){if(e.length>0)for(var t=0;t<e.length;t++){var n=e[t],r=n.units,i=r.byteLength;this.samples.push({units:r,size:i,duration:n.duration}),this.mp4track.len+=i,this.readyToDecode||this.aac.setAACConfig()}}},{key:"getPayload",value:function(){if(!this.isReady())return null;var e,t,n=new Uint8Array(this.mp4track.len),r=0,i=this.mp4track.samples;for(this.dts=this.nextDts;this.samples.length;){var a=this.samples.shift();a.units,(t=a.duration)<=0?(m("remuxer: invalid sample duration at DTS: ".concat(this.nextDts," :").concat(t)),this.mp4track.len-=a.size):(this.nextDts+=t,e={size:a.size,duration:t,cts:0,flags:{isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,dependsOn:1}},n.set(a.units,r),r+=a.size,i.push(e))}return i.length?new Uint8Array(n.buffer,0,this.mp4track.len):null}}]),r}(E),P=function(e){s(r,e);var t=f(r);function r(e){var i;return n(this,r),(i=t.call(this)).readyToDecode=!1,i.nextDts=0,i.dts=0,i.mp4track={id:E.getTrackID(),type:"video",len:0,fragmented:!0,sps:"",pps:"",width:0,height:0,timescale:e,duration:e,samples:[]},i.samples=[],i.h264=new U(c(i)),i}return i(r,[{key:"resetTrack",value:function(){this.readyToDecode=!1,this.mp4track.sps="",this.mp4track.pps="",this.nextDts=0,this.dts=0}},{key:"remux",value:function(e){var t,n=p(e);try{for(n.s();!(t=n.n()).done;){var r,i=t.value,a=[],s=0,o=p(i.units);try{for(o.s();!(r=o.n()).done;){var u=r.value;this.h264.parseNAL(u)&&(a.push(u),s+=u.getSize())}}catch(e){o.e(e)}finally{o.f()}a.length>0&&this.readyToDecode&&(this.mp4track.len+=s,this.samples.push({units:a,size:s,keyFrame:i.keyFrame,duration:i.duration}))}}catch(e){n.e(e)}finally{n.f()}}},{key:"getPayload",value:function(){if(!this.isReady())return null;var e,t,n=new Uint8Array(this.mp4track.len),r=0,i=this.mp4track.samples;for(this.dts=this.nextDts;this.samples.length;){var a=this.samples.shift(),s=a.units;if((t=a.duration)<=0)m("remuxer: invalid sample duration at DTS: ".concat(this.nextDts," :").concat(t)),this.mp4track.len-=a.size;else{this.nextDts+=t,e={size:a.size,duration:t,cts:0,flags:{isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,isNonSync:a.keyFrame?0:1,dependsOn:a.keyFrame?2:1}};var o,u=p(s);try{for(u.s();!(o=u.n()).done;){var c=o.value;n.set(c.getData(),r),r+=c.getSize()}}catch(e){u.e(e)}finally{u.f()}i.push(e)}}return i.length?new Uint8Array(n.buffer,0,this.mp4track.len):null}}]),r}(E),L=function(e){s(r,e);var t=f(r);function r(e){var i;return n(this,r),(i=t.call(this,"remuxer")).initialized=!1,i.trackTypes=[],i.tracks={},i.seq=1,i.env=e,i.timescale=1e3,i.mediaDuration=0,i}return i(r,[{key:"addTrack",value:function(e){"video"!==e&&"both"!==e||(this.tracks.video=new P(this.timescale),this.trackTypes.push("video")),"audio"!==e&&"both"!==e||(this.tracks.audio=new T(this.timescale),this.trackTypes.push("audio"))}},{key:"reset",value:function(){var e,t=p(this.trackTypes);try{for(t.s();!(e=t.n()).done;){var n=e.value;this.tracks[n].resetTrack()}}catch(e){t.e(e)}finally{t.f()}this.initialized=!1}},{key:"destroy",value:function(){this.tracks={},this.offAll()}},{key:"flush",value:function(){if(this.initialized){var e,t=p(this.trackTypes);try{for(t.s();!(e=t.n()).done;){var n=e.value,r=this.tracks[n],i=r.getPayload();if(i&&i.byteLength){var a={type:n,payload:S(B.moof(this.seq,r.dts,r.mp4track),B.mdat(i)),dts:r.dts};this.dispatch("buffer",a);var s=(o=r.dts/this.timescale,u=void 0,c=void 0,l=void 0,f=void 0,f="",u=Math.floor(o),(c=parseInt(u/3600,10)%24)>0&&(f+=(c<10?"0"+c:c)+":"),f+=((l=parseInt(u/60,10)%60)<10?"0"+l:l)+":"+((u=u<0?0:u%60)<10?"0"+u:u));m("put segment (".concat(n,"): dts: ").concat(r.dts," frames: ").concat(r.mp4track.samples.length," second: ").concat(s)),r.flush(),this.seq++}}}catch(e){t.e(e)}finally{t.f()}}else this.isReady()&&(this.dispatch("ready"),this.initSegment(),this.initialized=!0,this.flush());var o,u,c,l,f}},{key:"initSegment",value:function(){var e,t=[],n=p(this.trackTypes);try{for(n.s();!(e=n.n()).done;){var r=e.value,i=this.tracks[r];if("browser"==this.env){var a={type:r,payload:B.initSegment([i.mp4track],this.mediaDuration,this.timescale)};this.dispatch("buffer",a)}else t.push(i.mp4track)}}catch(e){n.e(e)}finally{n.f()}if("node"==this.env){var s={type:"all",payload:B.initSegment(t,this.mediaDuration,this.timescale)};this.dispatch("buffer",s)}m("Initial segment generated.")}},{key:"isReady",value:function(){var e,t=p(this.trackTypes);try{for(t.s();!(e=t.n()).done;){var n=e.value;if(!this.tracks[n].readyToDecode||!this.tracks[n].samples.length)return!1}}catch(e){t.e(e)}finally{t.f()}return!0}},{key:"remux",value:function(e){var t,n=p(this.trackTypes);try{for(n.s();!(t=n.n()).done;){var r=t.value,i=e[r];"audio"===r&&this.tracks.video&&!this.tracks.video.readyToDecode||i.length>0&&this.tracks[r].remux(i)}}catch(e){n.e(e)}finally{n.f()}this.flush()}}]),r}(C),R=function(e){s(r,e);var t=f(r);function r(e,i){var a;return n(this,r),(a=t.call(this,"buffer")).type=i,a.queue=new Uint8Array,a.cleaning=!1,a.pendingCleaning=0,a.cleanOffset=30,a.cleanRanges=[],a.sourceBuffer=e,a.sourceBuffer.addEventListener("updateend",(function(){a.pendingCleaning>0&&(a.initCleanup(a.pendingCleaning),a.pendingCleaning=0),a.cleaning=!1,a.cleanRanges.length&&a.doCleanup()})),a.sourceBuffer.addEventListener("error",(function(){a.dispatch("error",{type:a.type,name:"buffer",error:"buffer error"})})),a}return i(r,[{key:"destroy",value:function(){this.queue=null,this.sourceBuffer=null,this.offAll()}},{key:"doCleanup",value:function(){if(this.cleanRanges.length){var e=this.cleanRanges.shift();m("".concat(this.type," remove range [").concat(e[0]," - ").concat(e[1],")")),this.cleaning=!0,this.sourceBuffer.remove(e[0],e[1])}else this.cleaning=!1}},{key:"initCleanup",value:function(e){if(this.sourceBuffer.updating)this.pendingCleaning=e;else if(this.sourceBuffer.buffered&&this.sourceBuffer.buffered.length&&!this.cleaning){for(var t=0;t<this.sourceBuffer.buffered.length;++t){var n=this.sourceBuffer.buffered.start(t),r=this.sourceBuffer.buffered.end(t);e-n>this.cleanOffset&&n<(r=e-this.cleanOffset)&&this.cleanRanges.push([n,r])}this.doCleanup()}}},{key:"doAppend",value:function(){if(this.queue.length&&!this.sourceBuffer.updating)try{this.sourceBuffer.appendBuffer(this.queue),this.queue=new Uint8Array}catch(e){if("QuotaExceededError"===e.name)return m("".concat(this.type," buffer quota full")),void this.dispatch("error",{type:this.type,name:"QuotaExceeded",error:"buffer error"});g("Error occured while appending ".concat(this.type," buffer -  ").concat(e.name,": ").concat(e.message)),this.dispatch("error",{type:this.type,name:"unexpectedError",error:"buffer error"})}}},{key:"feed",value:function(e){this.queue=S(this.queue,e)}}]),r}(C);return function(r){s(o,r);var a=f(o);function o(e){var r;return n(this,o),(r=a.call(this,"jmuxer")).options=Object.assign({},{node:"",mode:"both",flushingTime:1500,clearBuffer:!0,fps:30,debug:!1,onReady:function(){},onError:function(){}},e),r.env="object"===("undefined"==typeof process?"undefined":t(process))&&"undefined"==typeof window?"node":"browser",r.options.debug&&(v=console.log,k=console.error),r.options.fps||(r.options.fps=30),r.frameDuration=1e3/r.options.fps|0,r.remuxController=new L(r.env),r.remuxController.addTrack(r.options.mode),r.lastCleaningTime=Date.now(),r.kfPosition=[],r.kfCounter=0,r.pendingUnits={},r.remainingData=new Uint8Array,r.remuxController.on("buffer",r.onBuffer.bind(c(r))),"browser"==r.env&&(r.remuxController.on("ready",r.createBuffer.bind(c(r))),r.initBrowser()),r.startInterval(),r}return i(o,null,[{key:"isSupported",value:function(e){return window.MediaSource&&window.MediaSource.isTypeSupported(e)}}]),i(o,[{key:"initBrowser",value:function(){"string"==typeof this.options.node&&""==this.options.node&&g("no video element were found to render, provide a valid video element"),this.node="string"==typeof this.options.node?document.getElementById(this.options.node):this.options.node,this.mseReady=!1,this.setupMSE()}},{key:"createStream",value:function(){var t=this.feed.bind(this),n=this.destroy.bind(this);return this.stream=new e.Duplex({writableObjectMode:!0,read:function(e){},write:function(e,n,r){t(e),r()},final:function(e){n(),e()}}),this.stream}},{key:"setupMSE",value:function(){if(window.MediaSource=window.MediaSource||window.WebKitMediaSource,!window.MediaSource)throw"Oops! Browser does not support media source extension.";this.isMSESupported=!!window.MediaSource,this.mediaSource=new MediaSource,this.url=URL.createObjectURL(this.mediaSource),this.node.src=this.url,this.mseEnded=!1,this.mediaSource.addEventListener("sourceopen",this.onMSEOpen.bind(this)),this.mediaSource.addEventListener("sourceclose",this.onMSEClose.bind(this)),this.mediaSource.addEventListener("webkitsourceopen",this.onMSEOpen.bind(this)),this.mediaSource.addEventListener("webkitsourceclose",this.onMSEClose.bind(this))}},{key:"endMSE",value:function(){if(!this.mseEnded)try{this.mseEnded=!0,this.mediaSource.endOfStream()}catch(e){g("mediasource is not available to end")}}},{key:"feed",value:function(e){var t,n,r,i=!1,a={video:[],audio:[]};if(e&&this.remuxController){if(r=e.duration?parseInt(e.duration):0,e.video){e.video=S(this.remainingData,e.video);var s=h(U.extractNALu(e.video),2);t=s[0],n=s[1],t.length>0&&(a.video=this.getVideoFrames(t,r),i=!0),this.remainingData=n||new Uint8Array}e.audio&&(t=A.extractAAC(e.audio)).length>0&&(a.audio=this.getAudioFrames(t,r),i=!0),i?this.remuxController.remux(a):g("Input object must have video and/or audio property. Make sure it is a valid typed array")}}},{key:"getVideoFrames",value:function(e,t){var n,r=this,i=[],a=[],s=0,o=!1,u=!1;this.pendingUnits.units&&(i=this.pendingUnits.units,u=this.pendingUnits.vcl,o=this.pendingUnits.keyFrame,this.pendingUnits={});var c,l=p(e);try{for(l.s();!(c=l.n()).done;){var f=c.value,h=new b(f);h.type()!==b.IDR&&h.type()!==b.NDR||U.parseHeader(h),i.length&&u&&(h.isfmb||!h.isvcl)&&(a.push({units:i,keyFrame:o}),i=[],o=!1,u=!1),i.push(h),o=o||h.isKeyframe(),u=u||h.isvcl}}catch(e){l.e(e)}finally{l.f()}if(i.length)if(t)if(u)a.push({units:i,keyFrame:o});else{var d=a.length-1;a[d].units=a[d].units.concat(i)}else this.pendingUnits={units:i,keyFrame:o,vcl:u};return n=t?t/a.length|0:this.frameDuration,s=t?t-n*a.length:0,a.map((function(e){e.duration=n,s>0&&(e.duration++,s--),r.kfCounter++,e.keyFrame&&r.options.clearBuffer&&r.kfPosition.push(r.kfCounter*n/1e3)})),m("jmuxer: No. of frames of the last chunk: ".concat(a.length)),a}},{key:"getAudioFrames",value:function(e,t){var n,r,i=[],a=0,s=p(e);try{for(s.s();!(r=s.n()).done;){var o=r.value;i.push({units:o})}}catch(e){s.e(e)}finally{s.f()}return n=t?t/i.length|0:this.frameDuration,a=t?t-n*i.length:0,i.map((function(e){e.duration=n,a>0&&(e.duration++,a--)})),i}},{key:"destroy",value:function(){if(this.stopInterval(),this.stream&&(this.remuxController.flush(),this.stream.push(null),this.stream=null),this.remuxController&&(this.remuxController.destroy(),this.remuxController=null),this.bufferControllers){for(var e in this.bufferControllers)this.bufferControllers[e].destroy();this.bufferControllers=null,this.endMSE()}this.node=!1,this.mseReady=!1,this.videoStarted=!1,this.mediaSource=null}},{key:"reset",value:function(){if(this.node.pause(),this.remuxController&&this.remuxController.reset(),this.bufferControllers){for(var e in this.bufferControllers)this.bufferControllers[e].destroy();this.bufferControllers=null,this.endMSE()}"browser"==this.env&&this.initBrowser(),m("JMuxer was reset")}},{key:"createBuffer",value:function(){if(this.mseReady&&this.remuxController&&this.remuxController.isReady()&&!this.bufferControllers)for(var e in this.bufferControllers={},this.remuxController.tracks){var t=this.remuxController.tracks[e];if(!o.isSupported("".concat(e,'/mp4; codecs="').concat(t.mp4track.codec,'"')))return g("Browser does not support codec"),!1;var n=this.mediaSource.addSourceBuffer("".concat(e,'/mp4; codecs="').concat(t.mp4track.codec,'"'));this.bufferControllers[e]=new R(n,e),this.bufferControllers[e].on("error",this.onBufferError.bind(this))}}},{key:"startInterval",value:function(){var e=this;this.interval=setInterval((function(){e.bufferControllers&&(e.releaseBuffer(),e.clearBuffer())}),this.options.flushingTime)}},{key:"stopInterval",value:function(){this.interval&&clearInterval(this.interval)}},{key:"releaseBuffer",value:function(){for(var e in this.bufferControllers)this.bufferControllers[e].doAppend()}},{key:"getSafeClearOffsetOfBuffer",value:function(e){for(var t,n="audio"===this.options.mode&&e||0,r=0;r<this.kfPosition.length&&!(this.kfPosition[r]>=e);r++)t=this.kfPosition[r];return t&&(this.kfPosition=this.kfPosition.filter((function(e){return e<t&&(n=e),e>=t}))),n}},{key:"clearBuffer",value:function(){if(this.options.clearBuffer&&Date.now()-this.lastCleaningTime>1e4){for(var e in this.bufferControllers){var t=this.getSafeClearOffsetOfBuffer(this.node.currentTime);this.bufferControllers[e].initCleanup(t)}this.lastCleaningTime=Date.now()}}},{key:"onBuffer",value:function(e){"browser"==this.env?this.bufferControllers&&this.bufferControllers[e.type]&&this.bufferControllers[e.type].feed(e.payload):this.stream&&this.stream.push(e.payload)}},{key:"onMSEOpen",value:function(){this.mseReady=!0,"function"==typeof this.options.onReady&&this.options.onReady.call(null),URL.revokeObjectURL(this.url),this.createBuffer()}},{key:"onMSEClose",value:function(){this.mseReady=!1,this.videoStarted=!1}},{key:"onBufferError",value:function(e){"QuotaExceeded"!=e.name?(this.endMSE(),"function"==typeof this.options.onError&&this.options.onError.call(null,e)):this.bufferControllers[e.type].initCleanup(this.node.currentTime)}}]),o}(C)}))},2599:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});n(6573),n(8100),n(7936),n(7467),n(4732),n(9577);var r=n(641),i=n(953),a=n(9917),s=n.n(a);const o=e=>((0,r.Qi)("data-v-196aa8d1"),e=e(),(0,r.jt)(),e),u={class:"h264video"},c={class:"search-box"},l=o((()=>(0,r.Lk)("div",{class:"video-box"},[(0,r.Lk)("video",{id:"videoPlay",class:"video",controls:""})],-1)));var f={__name:"index",setup(e){let t=(0,i.KR)(""),n=(0,i.KR)(null);const a=()=>{t.value&&(o(),f(t.value))},o=()=>{n=new(s())({node:"videoPlay",mode:"video",flushingTime:1e3,fps:30,debug:!0,clearBuffer:!1})},f=e=>{websocket=new WebSocket(e),websokcet.binaryType="arraybuffer",websocket.onbmessage=e=>{let t=e;n.feed({video:new Uint8Array(t)})}};return(e,n)=>{const s=(0,r.g2)("a-input"),o=(0,r.g2)("a-button");return(0,r.uX)(),(0,r.CE)("div",u,[(0,r.Lk)("div",c,[(0,r.bF)(s,{value:(0,i.R1)(t),"onUpdate:value":n[0]||(n[0]=e=>(0,i.i9)(t)?t.value=e:t=e),placeholder:"请输入webrocket地址获取H264视频流",size:"large"},null,8,["value"]),(0,r.bF)(o,{type:"primary",onClick:a,size:"large"},{default:(0,r.k6)((()=>[(0,r.eW)("播放")])),_:1})]),l])}}},h=n(6262);const d=(0,h.A)(f,[["__scopeId","data-v-196aa8d1"]]);var y=d},4648:function(){},7979:function(e,t,n){"use strict";var r=n(8551);e.exports=function(){var e=r(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},655:function(e,t,n){"use strict";var r=n(6955),i=String;e.exports=function(e){if("Symbol"===r(e))throw new TypeError("Cannot convert a Symbol value to a string");return i(e)}},2812:function(e){"use strict";var t=TypeError;e.exports=function(e,n){if(e<n)throw new t("Not enough arguments");return e}},9479:function(e,t,n){"use strict";var r=n(4475),i=n(3724),a=n(2106),s=n(7979),o=n(9039),u=r.RegExp,c=u.prototype,l=i&&o((function(){var e=!0;try{u(".","d")}catch(l){e=!1}var t={},n="",r=e?"dgimsy":"gimsy",i=function(e,r){Object.defineProperty(t,e,{get:function(){return n+=r,!0}})},a={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var s in e&&(a.hasIndices="d"),a)i(s,a[s]);var o=Object.getOwnPropertyDescriptor(c,"flags").get.call(t);return o!==r||n!==r}));l&&a(c,"flags",{configurable:!0,get:s})},4603:function(e,t,n){"use strict";var r=n(6840),i=n(9504),a=n(655),s=n(2812),o=URLSearchParams,u=o.prototype,c=i(u.append),l=i(u["delete"]),f=i(u.forEach),h=i([].push),d=new o("a=1&a=2&b=3");d["delete"]("a",1),d["delete"]("b",void 0),d+""!=="a=2"&&r(u,"delete",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return l(this,e);var r=[];f(this,(function(e,t){h(r,{key:t,value:e})})),s(t,1);var i,o=a(e),u=a(n),d=0,y=0,p=!1,v=r.length;while(d<v)i=r[d++],p||i.key===o?(p=!0,l(this,i.key)):y++;while(y<v)i=r[y++],i.key===o&&i.value===u||c(this,i.key,i.value)}),{enumerable:!0,unsafe:!0})},7566:function(e,t,n){"use strict";var r=n(6840),i=n(9504),a=n(655),s=n(2812),o=URLSearchParams,u=o.prototype,c=i(u.getAll),l=i(u.has),f=new o("a=1");!f.has("a",2)&&f.has("a",void 0)||r(u,"has",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return l(this,e);var r=c(this,e);s(t,1);var i=a(n),o=0;while(o<r.length)if(r[o++]===i)return!0;return!1}),{enumerable:!0,unsafe:!0})},8721:function(e,t,n){"use strict";var r=n(3724),i=n(9504),a=n(2106),s=URLSearchParams.prototype,o=i(s.forEach);r&&!("size"in s)&&a(s,"size",{get:function(){var e=0;return o(this,(function(){e++})),e},configurable:!0,enumerable:!0})}}]);
//# sourceMappingURL=599.1737706365440.js.map