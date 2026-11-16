(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ka="187",os={ROTATE:0,DOLLY:1,PAN:2},ns={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zu=0,Fl=1,ku=2,Bs=1,Gu=2,Fs=3,Mi=0,tn=1,Qe=2,as=0,zs=1,Ol=2,Bl=3,zl=4,Hu=5,es=100,Vu=101,Wu=102,qu=103,Xu=104,Yu=200,Zu=201,Ku=202,$u=203,bh=204,Eh=205,Ju=206,ju=207,Qu=208,td=209,ed=210,nd=211,id=212,sd=213,rd=214,ia=0,sa=1,ra=2,Hs=3,oa=4,aa=5,la=6,ca=7,wh=0,od=1,ad=2,si=0,Th=1,Ah=2,Rh=3,$a=4,Ch=5,Ph=6,Lh=7,Ih=300,us=301,Vs=302,uo=303,fo=304,ds=1e3,ni=1001,ha=1002,qe=1003,ld=1004,sr=1005,cn=1006,po=1007,_i=1008,dn=1009,Dh=1010,Nh=1011,Ws=1012,Ja=1013,Wn=1014,An=1015,Mn=1016,ja=1017,Qa=1018,fs=1020,Uh=35902,Fh=35899,Oh=1021,Bh=1022,Hn=1023,yi=1026,vi=1027,tl=1028,el=1029,Ui=1030,nl=1031,il=1033,Br=33776,zr=33777,kr=33778,Gr=33779,ua=35840,da=35841,fa=35842,pa=35843,ma=36196,ga=37492,_a=37496,va=37488,xa=37489,Wr=37490,Ma=37491,ya=37808,Sa=37809,ba=37810,Ea=37811,wa=37812,Ta=37813,Aa=37814,Ra=37815,Ca=37816,Pa=37817,La=37818,Ia=37819,Da=37820,Na=37821,Ua=36492,Fa=36494,Oa=36495,Ba=36283,za=36284,qr=36285,ka=36286,cd=3200,Ga=0,hd=1,ei="",Ge="srgb",Xr="srgb-linear",Yr="linear",ve="srgb",mo=7680,ud=519,dd=512,fd=513,pd=514,zh=515,md=516,gd=517,kh=518,Gh=519,_d=35044,Zr=35048,kl="300 es",Rn=2e3,qs=2001;function vd(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Xs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function xd(){const r=Xs("canvas");return r.style.display="block",r}const Gl={};function Hl(...r){const t="THREE."+r.shift();console.log(t,...r)}function Hh(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function qt(...r){r=Hh(r);const t="THREE."+r.shift();{const e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function ce(...r){r=Hh(r);const t="THREE."+r.shift();{const e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function Hr(...r){const t=r.join(" ");t in Gl||(Gl[t]=!0,qt(...r))}function Md(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const yd={[ia]:ia,[ra]:la,[oa]:oa,[Hs]:aa,[sa]:sa,[la]:ra,[ca]:ca,[aa]:Hs};class bi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const $e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vl=1234567;const ks=Math.PI/180,Ys=180/Math.PI;function gs(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($e[r&255]+$e[r>>8&255]+$e[r>>16&255]+$e[r>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[e&63|128]+$e[e>>8&255]+"-"+$e[e>>16&255]+$e[e>>24&255]+$e[n&255]+$e[n>>8&255]+$e[n>>16&255]+$e[n>>24&255]).toLowerCase()}function ee(r,t,e){return Math.max(t,Math.min(e,r))}function sl(r,t){return(r%t+t)%t}function Sd(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function bd(r,t,e){return r!==t?(e-r)/(t-r):0}function Gs(r,t,e){return(1-e)*r+e*t}function Ed(r,t,e,n){return Gs(r,t,1-Math.exp(-e*n))}function wd(r,t=1){return t-Math.abs(sl(r,t*2)-t)}function Td(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Ad(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Rd(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Cd(r,t){return r+Math.random()*(t-r)}function Pd(r){return r*(.5-Math.random())}function Ld(r){r!==void 0&&(Vl=r);let t=Vl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Id(r){return r*ks}function Dd(r){return r*Ys}function Nd(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function Ud(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Vh(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Fd(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),u=o((t+n)/2),d=s((t-n)/2),h=o((t-n)/2),f=s((n-t)/2),p=o((n-t)/2);switch(i){case"XYX":r.set(a*u,l*d,l*h,a*c);break;case"YZY":r.set(l*h,a*u,l*d,a*c);break;case"ZXZ":r.set(l*d,l*h,a*u,a*c);break;case"XZX":r.set(a*u,l*p,l*f,a*c);break;case"YXY":r.set(l*f,a*u,l*p,a*c);break;case"ZYZ":r.set(l*p,l*f,a*u,a*c);break;default:qt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function rl(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Wh(r,t){if(t.constructor===Float32Array)return r;const e=rl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/e,-1)}function qh(r,t){if(t.constructor===Float32Array)return r;const e=rl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*e)}const He={DEG2RAD:ks,RAD2DEG:Ys,generateUUID:gs,clamp:ee,euclideanModulo:sl,mapLinear:Sd,inverseLerp:bd,lerp:Gs,damp:Ed,pingpong:wd,smoothstep:Td,smootherstep:Ad,randInt:Rd,randFloat:Cd,randFloatSpread:Pd,seededRandom:Ld,degToRad:Id,radToDeg:Dd,isPowerOfTwo:Nd,ceilPowerOfTwo:Ud,floorPowerOfTwo:Vh,setQuaternionFromProperEuler:Fd,normalize:qh,denormalize:Wh};class Gt{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}let vn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3],h=s[o+0],f=s[o+1],p=s[o+2],v=s[o+3];if(d!==v||l!==h||c!==f||u!==p){let m=l*h+c*f+u*p+d*v;m<0&&(h=-h,f=-f,p=-p,v=-v,m=-m);let g=1-a;if(m<.9995){const _=Math.acos(m),x=Math.sin(_);g=Math.sin(g*_)/x,a=Math.sin(a*_)/x,l=l*g+h*a,c=c*g+f*a,u=u*g+p*a,d=d*g+v*a}else{l=l*g+h*a,c=c*g+f*a,u=u*g+p*a,d=d*g+v*a;const _=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=_,c*=_,u*=_,d*=_}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[o],h=s[o+1],f=s[o+2],p=s[o+3];return t[e]=a*p+u*d+l*f-c*h,t[e+1]=l*p+u*h+c*d-a*f,t[e+2]=c*p+u*f+a*h-l*d,t[e+3]=u*p-a*d-l*h-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),d=a(s/2),h=l(n/2),f=l(i/2),p=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"YXZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"ZXY":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"ZYX":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"YZX":this._x=h*u*d+c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d-h*f*p;break;case"XZY":this._x=h*u*d-c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d+h*f*p;break;default:qt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=n+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ee(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class k{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Wl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Wl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),u=2*(a*e-s*i),d=2*(s*n-o*e);return this.x=e+l*c+o*d-a*u,this.y=n+l*u+a*c-s*d,this.z=i+l*d+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return go.copy(this).projectOnVector(t),this.sub(go)}reflect(t){return this.sub(go.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const go=new k,Wl=new vn;class $t{static{this.prototype.isMatrix3=!0}constructor(t,e,n,i,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],p=n[8],v=i[0],m=i[3],g=i[6],_=i[1],x=i[4],y=i[7],E=i[2],b=i[5],M=i[8];return s[0]=o*v+a*_+l*E,s[3]=o*m+a*x+l*b,s[6]=o*g+a*y+l*M,s[1]=c*v+u*_+d*E,s[4]=c*m+u*x+d*b,s[7]=c*g+u*y+d*M,s[2]=h*v+f*_+p*E,s[5]=h*m+f*x+p*b,s[8]=h*g+f*y+p*M,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=u*o-a*c,h=a*l-u*s,f=c*s-o*l,p=e*d+n*h+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return t[0]=d*v,t[1]=(i*c-u*n)*v,t[2]=(a*n-i*o)*v,t[3]=h*v,t[4]=(u*e-i*l)*v,t[5]=(i*s-a*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Hr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(_o.makeScale(t,e)),this}rotate(t){return Hr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(_o.makeRotation(-t)),this}translate(t,e){return Hr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(_o.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const _o=new $t,ql=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xl=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Od(){const r={enabled:!0,workingColorSpace:Xr,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ve&&(i.r=ri(i.r),i.g=ri(i.g),i.b=ri(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ve&&(i.r=ls(i.r),i.g=ls(i.g),i.b=ls(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ei?Yr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Xr]:{primaries:t,whitePoint:n,transfer:Yr,toXYZ:ql,fromXYZ:Xl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ge},outputColorSpaceConfig:{drawingBufferColorSpace:Ge}},[Ge]:{primaries:t,whitePoint:n,transfer:ve,toXYZ:ql,fromXYZ:Xl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ge}}}),r}const ae=Od();function ri(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ls(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Bi;class Bd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Bi===void 0&&(Bi=Xs("canvas")),Bi.width=t.width,Bi.height=t.height;const i=Bi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Bi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Xs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ri(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ri(e[n]/255)*255):e[n]=ri(e[n]);return{data:e,width:t.width,height:t.height}}else return qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let zd=0;class ol{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=gs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(vo(i[o].image)):s.push(vo(i[o]))}else s=vo(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function vo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Bd.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(qt("Texture: Unable to serialize Texture."),{})}let kd=0;const xo=new k;class Ye extends bi{constructor(t=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,n=ni,i=ni,s=cn,o=_i,a=Hn,l=dn,c=Ye.DEFAULT_ANISOTROPY,u=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=gs(),this.name="",this.source=new ol(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(xo).x}get height(){return this.source.getSize(xo).y}get depth(){return this.source.getSize(xo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){qt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){qt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ih)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ds:t.x=t.x-Math.floor(t.x);break;case ni:t.x=t.x<0?0:1;break;case ha:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ds:t.y=t.y-Math.floor(t.y);break;case ni:t.y=t.y<0?0:1;break;case ha:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=Ih;Ye.DEFAULT_ANISOTROPY=1;class Te{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],p=l[9],v=l[2],m=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,y=(f+1)/2,E=(g+1)/2,b=(u+h)/4,M=(d+v)/4,S=(p+m)/4;return x>y&&x>E?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=b/n,s=M/n):y>E?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=b/i,s=S/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=M/s,i=S/s),this.set(n,i,s,e),this}let _=Math.sqrt((m-p)*(m-p)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(m-p)/_,this.y=(d-v)/_,this.z=(h-u)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this.w=ee(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this.w=ee(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gd extends bi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Te(0,0,t,e),this.scissorTest=!1,this.viewport=new Te(0,0,t,e),this.textures=[];const i=n.count;for(let s=0;s<i;s++)this.textures[s]=new Ye({width:t,height:e,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new ol(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xn extends Gd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Xh extends Ye{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=qe,this.minFilter=qe,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hd extends Ye{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=qe,this.minFilter=qe,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}class me{static{this.prototype.isMatrix4=!0}constructor(t,e,n,i,s,o,a,l,c,u,d,h,f,p,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,u,d,h,f,p,v,m)}set(t,e,n,i,s,o,a,l,c,u,d,h,f,p,v,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=h,g[3]=f,g[7]=p,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,i=1/zi.setFromMatrixColumn(t,0).length(),s=1/zi.setFromMatrixColumn(t,1).length(),o=1/zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const h=o*u,f=o*d,p=a*u,v=a*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=h-v*c,e[9]=-a*l,e[2]=v-h*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){const h=l*u,f=l*d,p=c*u,v=c*d;e[0]=h+v*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=f*a-p,e[6]=v+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*u,f=l*d,p=c*u,v=c*d;e[0]=h-v*a,e[4]=-o*d,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*u,e[9]=v-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*u,f=o*d,p=a*u,v=a*d;e[0]=l*u,e[4]=p*c-f,e[8]=h*c+v,e[1]=l*d,e[5]=v*c+h,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,f=o*c,p=a*l,v=a*c;e[0]=l*u,e[4]=v-h*d,e[8]=p*d+f,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=f*d+p,e[10]=h-v*d}else if(t.order==="XZY"){const h=o*l,f=o*c,p=a*l,v=a*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+v,e[5]=o*u,e[9]=f*d-p,e[2]=p*d-f,e[6]=a*u,e[10]=v*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vd,t,Wd)}lookAt(t,e,n){const i=this.elements;return hn.subVectors(t,e),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),ui.crossVectors(n,hn),ui.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),ui.crossVectors(n,hn)),ui.normalize(),rr.crossVectors(hn,ui),i[0]=ui.x,i[4]=rr.x,i[8]=hn.x,i[1]=ui.y,i[5]=rr.y,i[9]=hn.y,i[2]=ui.z,i[6]=rr.z,i[10]=hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],p=n[2],v=n[6],m=n[10],g=n[14],_=n[3],x=n[7],y=n[11],E=n[15],b=i[0],M=i[4],S=i[8],P=i[12],A=i[1],L=i[5],I=i[9],D=i[13],w=i[2],N=i[6],F=i[10],B=i[14],Y=i[3],q=i[7],O=i[11],H=i[15];return s[0]=o*b+a*A+l*w+c*Y,s[4]=o*M+a*L+l*N+c*q,s[8]=o*S+a*I+l*F+c*O,s[12]=o*P+a*D+l*B+c*H,s[1]=u*b+d*A+h*w+f*Y,s[5]=u*M+d*L+h*N+f*q,s[9]=u*S+d*I+h*F+f*O,s[13]=u*P+d*D+h*B+f*H,s[2]=p*b+v*A+m*w+g*Y,s[6]=p*M+v*L+m*N+g*q,s[10]=p*S+v*I+m*F+g*O,s[14]=p*P+v*D+m*B+g*H,s[3]=_*b+x*A+y*w+E*Y,s[7]=_*M+x*L+y*N+E*q,s[11]=_*S+x*I+y*F+E*O,s[15]=_*P+x*D+y*B+E*H,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],f=t[14],p=t[3],v=t[7],m=t[11],g=t[15],_=l*f-c*h,x=a*f-c*d,y=a*h-l*d,E=o*f-c*u,b=o*h-l*u,M=o*d-a*u;return e*(v*_-m*x+g*y)-n*(p*_-m*E+g*b)+i*(p*x-v*E+g*M)-s*(p*y-v*b+m*M)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return e*(o*u-a*c)-n*(s*u-a*l)+i*(s*c-o*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],f=t[11],p=t[12],v=t[13],m=t[14],g=t[15],_=e*a-n*o,x=e*l-i*o,y=e*c-s*o,E=n*l-i*a,b=n*c-s*a,M=i*c-s*l,S=u*v-d*p,P=u*m-h*p,A=u*g-f*p,L=d*m-h*v,I=d*g-f*v,D=h*g-f*m,w=_*D-x*I+y*L+E*A-b*P+M*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/w;return t[0]=(a*D-l*I+c*L)*N,t[1]=(i*I-n*D-s*L)*N,t[2]=(v*M-m*b+g*E)*N,t[3]=(h*b-d*M-f*E)*N,t[4]=(l*A-o*D-c*P)*N,t[5]=(e*D-i*A+s*P)*N,t[6]=(m*y-p*M-g*x)*N,t[7]=(u*M-h*y+f*x)*N,t[8]=(o*I-a*A+c*S)*N,t[9]=(n*A-e*I-s*S)*N,t[10]=(p*b-v*y+g*_)*N,t[11]=(d*y-u*b-f*_)*N,t[12]=(a*P-o*L-l*S)*N,t[13]=(e*L-n*P+i*S)*N,t[14]=(v*x-p*E-m*_)*N,t[15]=(u*E-d*x+h*_)*N,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,d=a+a,h=s*c,f=s*u,p=s*d,v=o*u,m=o*d,g=a*d,_=l*c,x=l*u,y=l*d,E=n.x,b=n.y,M=n.z;return i[0]=(1-(v+g))*E,i[1]=(f+y)*E,i[2]=(p-x)*E,i[3]=0,i[4]=(f-y)*b,i[5]=(1-(h+g))*b,i[6]=(m+_)*b,i[7]=0,i[8]=(p+x)*M,i[9]=(m-_)*M,i[10]=(1-(h+v))*M,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=zi.set(i[0],i[1],i[2]).length();const a=zi.set(i[4],i[5],i[6]).length(),l=zi.set(i[8],i[9],i[10]).length();s<0&&(o=-o),Sn.copy(this);const c=1/o,u=1/a,d=1/l;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=u,Sn.elements[5]*=u,Sn.elements[6]*=u,Sn.elements[8]*=d,Sn.elements[9]*=d,Sn.elements[10]*=d,e.setFromRotationMatrix(Sn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,s,o,a=Rn,l=!1){const c=this.elements,u=2*s/(e-t),d=2*s/(n-i),h=(e+t)/(e-t),f=(n+i)/(n-i);let p,v;if(l)p=s/(o-s),v=o*s/(o-s);else if(a===Rn)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===qs)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Rn,l=!1){const c=this.elements,u=2/(e-t),d=2/(n-i),h=-(e+t)/(e-t),f=-(n+i)/(n-i);let p,v;if(l)p=1/(o-s),v=o/(o-s);else if(a===Rn)p=-2/(o-s),v=-(o+s)/(o-s);else if(a===qs)p=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const zi=new k,Sn=new me,Vd=new k(0,0,0),Wd=new k(1,1,1),ui=new k,rr=new k,hn=new k,Yl=new me,Zl=new vn;class Pn{constructor(t=0,e=0,n=0,i=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ee(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ee(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ee(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Yl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Zl.setFromEuler(this),this.setFromQuaternion(Zl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";class al{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let qd=0;const Kl=new k,ki=new vn,Xn=new me,or=new k,ys=new k,Xd=new k,Yd=new vn,$l=new k(1,0,0),Jl=new k(0,1,0),jl=new k(0,0,1),Ql={type:"added"},Zd={type:"removed"},Gi={type:"childadded",child:null},Mo={type:"childremoved",child:null};class Ie extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ie.DEFAULT_UP.clone();const t=new k,e=new Pn,n=new vn,i=new k(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new me},normalMatrix:{value:new $t}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=Ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new al,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.multiply(ki),this}rotateOnWorldAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.premultiply(ki),this}rotateX(t){return this.rotateOnAxis($l,t)}rotateY(t){return this.rotateOnAxis(Jl,t)}rotateZ(t){return this.rotateOnAxis(jl,t)}translateOnAxis(t,e){return Kl.copy(t).applyQuaternion(this.quaternion),this.position.add(Kl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($l,t)}translateY(t){return this.translateOnAxis(Jl,t)}translateZ(t){return this.translateOnAxis(jl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?or.copy(t):or.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(ys,or,this.up):Xn.lookAt(or,ys,this.up),this.quaternion.setFromRotationMatrix(Xn),i&&(Xn.extractRotation(i.matrixWorld),ki.setFromRotationMatrix(Xn),this.quaternion.premultiply(ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ce("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ql),Gi.child=t,this.dispatchEvent(Gi),Gi.child=null):ce("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zd),Mo.child=t,this.dispatchEvent(Mo),Mo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ql),Gi.child=t,this.dispatchEvent(Gi),Gi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,t,Xd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,Yd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,i=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),d=o(t.shapes),h=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ie.DEFAULT_UP=new k(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Vn extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Kd={type:"move"};class yo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),g=this._getHandJoint(c,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&h>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Kd)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Vn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Yh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},ar={h:0,s:0,l:0};function So(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Xt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ae.workingColorSpace){if(t=sl(t,1),e=ee(e,0,1),n=ee(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=So(o,s,t+1/3),this.g=So(o,s,t),this.b=So(o,s,t-1/3)}return ae.colorSpaceToWorking(this,i),this}setStyle(t,e=Ge){function n(s){s!==void 0&&parseFloat(s)<1&&qt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,e);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:qt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ge){const n=Yh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ri(t.r),this.g=ri(t.g),this.b=ri(t.b),this}copyLinearToSRGB(t){return this.r=ls(t.r),this.g=ls(t.g),this.b=ls(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ge){return ae.workingToColorSpace(Je.copy(this),t),Math.round(ee(Je.r*255,0,255))*65536+Math.round(ee(Je.g*255,0,255))*256+Math.round(ee(Je.b*255,0,255))}getHexString(t=Ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace(Je.copy(this),e);const n=Je.r,i=Je.g,s=Je.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace(Je.copy(this),e),t.r=Je.r,t.g=Je.g,t.b=Je.b,t}getStyle(t=Ge){ae.workingToColorSpace(Je.copy(this),t);const e=Je.r,n=Je.g,i=Je.b;return t!==Ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(di),this.setHSL(di.h+t,di.s+e,di.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(di),t.getHSL(ar);const n=Gs(di.h,ar.h,e),i=Gs(di.s,ar.s,e),s=Gs(di.l,ar.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Je=new Xt;Xt.NAMES=Yh;class ll{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Xt(t),this.density=e}clone(){return new ll(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Kr extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const bn=new k,Yn=new k,bo=new k,Zn=new k,Hi=new k,Vi=new k,tc=new k,Eo=new k,wo=new k,To=new k,Ao=new Te,Ro=new Te,Co=new Te;class Tn{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),bn.subVectors(t,e),i.cross(bn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){bn.subVectors(i,e),Yn.subVectors(n,e),bo.subVectors(t,e);const o=bn.dot(bn),a=bn.dot(Yn),l=bn.dot(bo),c=Yn.dot(Yn),u=Yn.dot(bo),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(c*l-a*u)*h,p=(o*u-a*l)*h;return s.set(1-f-p,p,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Zn.x),l.addScaledVector(o,Zn.y),l.addScaledVector(a,Zn.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return Ao.setScalar(0),Ro.setScalar(0),Co.setScalar(0),Ao.fromBufferAttribute(t,e),Ro.fromBufferAttribute(t,n),Co.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Ao,s.x),o.addScaledVector(Ro,s.y),o.addScaledVector(Co,s.z),o}static isFrontFacing(t,e,n,i){return bn.subVectors(n,e),Yn.subVectors(t,e),bn.cross(Yn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),bn.cross(Yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Tn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return Tn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;Hi.subVectors(i,n),Vi.subVectors(s,n),Eo.subVectors(t,n);const l=Hi.dot(Eo),c=Vi.dot(Eo);if(l<=0&&c<=0)return e.copy(n);wo.subVectors(t,i);const u=Hi.dot(wo),d=Vi.dot(wo);if(u>=0&&d<=u)return e.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),e.copy(n).addScaledVector(Hi,o);To.subVectors(t,s);const f=Hi.dot(To),p=Vi.dot(To);if(p>=0&&f<=p)return e.copy(s);const v=f*c-l*p;if(v<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Vi,a);const m=u*p-f*d;if(m<=0&&d-u>=0&&f-p>=0)return tc.subVectors(s,i),a=(d-u)/(d-u+(f-p)),e.copy(i).addScaledVector(tc,a);const g=1/(m+v+h);return o=v*g,a=h*g,e.copy(n).addScaledVector(Hi,o).addScaledVector(Vi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ei{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(En.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(En.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=En.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,En):En.fromBufferAttribute(s,o),En.applyMatrix4(t.matrixWorld),this.expandByPoint(En);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),lr.copy(n.boundingBox)),lr.applyMatrix4(t.matrixWorld),this.union(lr)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,En),En.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ss),cr.subVectors(this.max,Ss),Wi.subVectors(t.a,Ss),qi.subVectors(t.b,Ss),Xi.subVectors(t.c,Ss),fi.subVectors(qi,Wi),pi.subVectors(Xi,qi),Ri.subVectors(Wi,Xi);let e=[0,-fi.z,fi.y,0,-pi.z,pi.y,0,-Ri.z,Ri.y,fi.z,0,-fi.x,pi.z,0,-pi.x,Ri.z,0,-Ri.x,-fi.y,fi.x,0,-pi.y,pi.x,0,-Ri.y,Ri.x,0];return!Po(e,Wi,qi,Xi,cr)||(e=[1,0,0,0,1,0,0,0,1],!Po(e,Wi,qi,Xi,cr))?!1:(hr.crossVectors(fi,pi),e=[hr.x,hr.y,hr.z],Po(e,Wi,qi,Xi,cr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,En).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(En).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Kn=[new k,new k,new k,new k,new k,new k,new k,new k],En=new k,lr=new Ei,Wi=new k,qi=new k,Xi=new k,fi=new k,pi=new k,Ri=new k,Ss=new k,cr=new k,hr=new k,Ci=new k;function Po(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Ci.fromArray(r,s);const a=i.x*Math.abs(Ci.x)+i.y*Math.abs(Ci.y)+i.z*Math.abs(Ci.z),l=t.dot(Ci),c=e.dot(Ci),u=n.dot(Ci);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Re=new k,ur=new Gt;let $d=0;class Xe extends bi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$d++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=_d,this.updateRanges=[],this.gpuType=An,this.version=0,this._normalizationScale=t!==void 0?rl(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ur.fromBufferAttribute(this,e),ur.applyMatrix3(t),this.setXY(e,ur.x,ur.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Wh(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):qh(t,this.array)}}class Zh extends Xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Kh extends Xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class pe extends Xe{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Jd=new Ei,bs=new k,Lo=new k;let _s=class{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Jd.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bs.subVectors(t,this.center);const e=bs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(bs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Lo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bs.copy(t.center).add(Lo)),this.expandByPoint(bs.copy(t.center).sub(Lo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},jd=0;const pn=new me,Io=new Ie,Yi=new k,un=new Ei,Es=new Ei,ke=new k;class Ue extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=gs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vd(t)?Kh:Zh)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new $t().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,n){return pn.makeTranslation(t,e,n),this.applyMatrix4(pn),this}scale(t,e,n){return pn.makeScale(t,e,n),this.applyMatrix4(pn),this}lookAt(t){return Io.lookAt(t),Io.updateMatrix(),this.applyMatrix4(Io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new pe(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];un.setFromBufferAttribute(s),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _s);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const n=this.boundingSphere.center;if(un.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Es.setFromBufferAttribute(a),this.morphTargetsRelative?(ke.addVectors(un.min,Es.min),un.expandByPoint(ke),ke.addVectors(un.max,Es.max),un.expandByPoint(ke)):(un.expandByPoint(Es.min),un.expandByPoint(Es.max))}un.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)ke.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(ke));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ke.fromBufferAttribute(a,c),l&&(Yi.fromBufferAttribute(t,c),ke.add(Yi)),i=Math.max(i,n.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Xe(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[],c=new Uint8Array(n.count);for(let P=0;P<n.count;P++)a[P]=new k,l[P]=new k;const u=new k,d=new k,h=new k,f=new Gt,p=new Gt,v=new Gt,m=new k,g=new k;function _(P,A,L){c[P]=c[A]=c[L]=1,u.fromBufferAttribute(n,P),d.fromBufferAttribute(n,A),h.fromBufferAttribute(n,L),f.fromBufferAttribute(s,P),p.fromBufferAttribute(s,A),v.fromBufferAttribute(s,L),d.sub(u),h.sub(u),p.sub(f),v.sub(f);const I=1/(p.x*v.y-v.x*p.y);isFinite(I)&&(m.copy(d).multiplyScalar(v.y).addScaledVector(h,-p.y).multiplyScalar(I),g.copy(h).multiplyScalar(p.x).addScaledVector(d,-v.x).multiplyScalar(I),a[P].add(m),a[A].add(m),a[L].add(m),l[P].add(g),l[A].add(g),l[L].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let P=0,A=x.length;P<A;++P){const L=x[P],I=L.start,D=L.count;for(let w=I,N=I+D;w<N;w+=3)_(t.getX(w+0),t.getX(w+1),t.getX(w+2))}const y=new k,E=new k,b=new k,M=new k;function S(P){b.fromBufferAttribute(i,P),M.copy(b);const A=a[P];y.copy(A),y.sub(b.multiplyScalar(b.dot(A))).normalize(),E.crossVectors(M,A);const I=E.dot(l[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,I)}for(let P=0,A=n.count;P<A;++P)c[P]&&S(P);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const i=new k,s=new k,o=new k,a=new k,l=new k,c=new k,u=new k,d=new k;if(t)for(let h=0,f=t.count;h<f;h+=3){const p=t.getX(h+0),v=t.getX(h+1),m=t.getX(h+2);i.fromBufferAttribute(e,p),s.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=e.count;h<f;h+=3)i.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let f=0,p=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*u;for(let g=0;g<u;g++)h[p++]=c[f++]}return new Xe(h,u,d)}if(this.index===null)return qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ue,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=t(h,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Do=new k,Qd=new k,tf=new $t;class kn{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Do.subVectors(n,e).cross(Qd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const i=t.delta(Do),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||tf.getNormalMatrix(t),i=this.coplanarPoint(Do).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let ef=0,vs=class extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=gs(),this.name="",this.type="Material",this.blending=zs,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bh,this.blendDst=Eh,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ud,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mo,this.stencilZFail=mo,this.stencilZPass=mo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){qt(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){qt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Xt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new kn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Gt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Gt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};const $n=new k,No=new k,dr=new k,fr=new k;let no=class{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=$n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):($n.copy(this.origin).addScaledVector(this.direction,e),$n.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){No.copy(t).add(e).multiplyScalar(.5),dr.copy(e).sub(t).normalize(),fr.copy(this.origin).sub(No);const s=t.distanceTo(e)*.5,o=-this.direction.dot(dr),a=fr.dot(this.direction),l=-fr.dot(dr),c=fr.lengthSq(),u=Math.abs(1-o*o);let d,h,f,p;if(u>0)if(d=o*l-a,h=o*a-l,p=s*u,d>=0)if(h>=-p)if(h<=p){const v=1/u;d*=v,h*=v,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-p?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c):h<=p?(d=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(No).addScaledVector(dr,h),f}intersectSphere(t,e){if(t.radius<0)return null;$n.subVectors(t.center,this.origin);const n=$n.dot(this.direction),i=$n.dot($n)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,i=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,i=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,$n)!==null}intersectTriangle(t,e,n,i,s){const o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,d=t.x-o.x,h=t.y-o.y,f=t.z-o.z,p=e.x-o.x,v=e.y-o.y,m=e.z-o.z,g=n.x-o.x,_=n.y-o.y,x=n.z-o.z,y=Math.abs(l),E=Math.abs(c),b=Math.abs(u);let M,S,P,A,L,I,D,w,N,F,B,Y;if(y>=E&&y>=b?(P=l,I=d,N=p,Y=g,l>=0?(M=c,S=u,A=h,L=f,D=v,w=m,F=_,B=x):(M=u,S=c,A=f,L=h,D=m,w=v,F=x,B=_)):E>=b?(P=c,I=h,N=v,Y=_,c>=0?(M=u,S=l,A=f,L=d,D=m,w=p,F=x,B=g):(M=l,S=u,A=d,L=f,D=p,w=m,F=g,B=x)):(P=u,I=f,N=m,Y=x,u>=0?(M=l,S=c,A=d,L=h,D=p,w=v,F=g,B=_):(M=c,S=l,A=h,L=d,D=v,w=p,F=_,B=g)),P===0)return null;const q=M/P,O=S/P,H=1/P,W=A-q*I,rt=L-O*I,X=D-q*N,J=w-O*N,nt=F-q*Y,ct=B-O*Y,at=nt*J-ct*X,St=W*ct-rt*nt,Pt=X*rt-J*W;if(i){if(at<0||St<0||Pt<0)return null}else if((at<0||St<0||Pt<0)&&(at>0||St>0||Pt>0))return null;const dt=at+St+Pt;if(dt===0)return null;const Ot=H*(at*I+St*N+Pt*Y);return(dt>0?Ot<0:Ot>0)?null:this.at(Ot/dt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class Ln extends vs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ec=new me,Pi=new no,pr=new _s,nc=new k,mr=new k,gr=new k,_r=new k,Uo=new k,vr=new k,ic=new k,xr=new k;class Me extends Ie{constructor(t=new Ue,e=new Ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){vr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(Uo.fromBufferAttribute(d,t),o?vr.addScaledVector(Uo,u):vr.addScaledVector(Uo.sub(e),u))}e.add(vr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(s),Pi.copy(t.ray).recast(t.near),!(pr.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(pr,nc)===null||Pi.origin.distanceToSquared(nc)>(t.far-t.near)**2))&&(ec.copy(s).invert(),Pi.copy(t.ray).applyMatrix4(ec),!(n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Pi)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,v=h.length;p<v;p++){const m=h[p],g=o[m.materialIndex],_=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,E=x;y<E;y+=3){const b=a.getX(y),M=a.getX(y+1),S=a.getX(y+2);i=Mr(this,g,t,n,c,u,d,b,M,S),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const p=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=p,g=v;m<g;m+=3){const _=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);i=Mr(this,o,t,n,c,u,d,_,x,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,v=h.length;p<v;p++){const m=h[p],g=o[m.materialIndex],_=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,E=x;y<E;y+=3){const b=y,M=y+1,S=y+2;i=Mr(this,g,t,n,c,u,d,b,M,S),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const p=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=p,g=v;m<g;m+=3){const _=m,x=m+1,y=m+2;i=Mr(this,o,t,n,c,u,d,_,x,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function nf(r,t,e,n,i,s,o,a){let l;if(t.side===tn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===Mi,a),l===null)return null;xr.copy(a),xr.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(xr);return c<e.near||c>e.far?null:{distance:c,point:xr.clone(),object:r}}function Mr(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,mr),r.getVertexPosition(l,gr),r.getVertexPosition(c,_r);const u=nf(r,t,e,n,mr,gr,_r,ic);if(u){const d=new k;Tn.getBarycoord(ic,mr,gr,_r,d),i&&(u.uv=Tn.getInterpolatedAttribute(i,a,l,c,d,new Gt)),s&&(u.uv1=Tn.getInterpolatedAttribute(s,a,l,c,d,new Gt)),o&&(u.normal=Tn.getInterpolatedAttribute(o,a,l,c,d,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new k,materialIndex:0};Tn.getNormal(mr,gr,_r,h.normal),u.face=h,u.barycoord=d}return u}class $h extends Ye{constructor(t=null,e=1,n=1,i,s,o,a,l,c=qe,u=qe,d,h){super(null,o,a,l,c,u,i,s,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sc extends Xe{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Zi=new me,rc=new me,yr=[],oc=new Ei,sf=new me,ws=new Me,Ts=new _s;class cs extends Me{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new sc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,sf)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ei),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Zi),oc.copy(t.boundingBox).applyMatrix4(Zi),this.boundingBox.union(oc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new _s),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Zi),Ts.copy(t.boundingSphere).applyMatrix4(Zi),this.boundingSphere.union(Ts)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(ws.geometry=this.geometry,ws.material=this.material,ws.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ts.copy(this.boundingSphere),Ts.applyMatrix4(n),t.ray.intersectsSphere(Ts)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Zi),rc.multiplyMatrices(n,Zi),ws.matrixWorld=rc,ws.raycast(t,yr);for(let o=0,a=yr.length;o<a;o++){const l=yr[o];l.instanceId=s,l.object=this,e.push(l)}yr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new sc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new $h(new Float32Array(i*this.count),i,this.count,tl,An));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;return s[l]=a,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Li=new _s,rf=new Gt(.5,.5),Sr=new k;class Zs{constructor(t=new kn,e=new kn,n=new kn,i=new kn,s=new kn,o=new kn){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Rn,n=!1){const i=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],d=s[5],h=s[6],f=s[7],p=s[8],v=s[9],m=s[10],g=s[11],_=s[12],x=s[13],y=s[14],E=s[15];if(i[0].setComponents(c-o,f-u,g-p,E-_).normalize(),i[1].setComponents(c+o,f+u,g+p,E+_).normalize(),i[2].setComponents(c+a,f+d,g+v,E+x).normalize(),i[3].setComponents(c-a,f-d,g-v,E-x).normalize(),n)i[4].setComponents(l,h,m,y).normalize(),i[5].setComponents(c-l,f-h,g-m,E-y).normalize();else if(i[4].setComponents(c-l,f-h,g-m,E-y).normalize(),e===Rn)i[5].setComponents(c+l,f+h,g+m,E+y).normalize();else if(e===qs)i[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(t){Li.center.set(0,0,0);const e=rf.distanceTo(t.center);return Li.radius=.7071067811865476+e,Li.applyMatrix4(t.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Sr.x=i.normal.x>0?t.max.x:t.min.x,Sr.y=i.normal.y>0?t.max.y:t.min.y,Sr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Sr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const ac=new me;class cl{constructor(){this.coordinateSystem=Rn,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){const s=e[i];ac.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0&&(n[i]=new Zs),n[i].setFromProjectionMatrix(ac,s.coordinateSystem,s.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new Zs),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new cl().copy(this)}}class Jh extends vs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const $r=new k,Jr=new k,lc=new me,As=new no,br=new _s,Fo=new k,cc=new k;class of extends Ie{constructor(t=new Ue,e=new Jh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)$r.fromBufferAttribute(e,i-1),Jr.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=$r.distanceTo(Jr);t.setAttribute("lineDistance",new pe(n,1))}else qt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(i),br.radius+=s,t.ray.intersectsSphere(br)===!1)return;lc.copy(i).invert(),As.copy(t.ray).applyMatrix4(lc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let v=f,m=p-1;v<m;v+=c){const g=u.getX(v),_=u.getX(v+1),x=Er(this,t,As,l,g,_,v);x&&e.push(x)}if(this.isLineLoop){const v=u.getX(p-1),m=u.getX(f),g=Er(this,t,As,l,v,m,p-1);g&&e.push(g)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let v=f,m=p-1;v<m;v+=c){const g=Er(this,t,As,l,v,v+1,v);g&&e.push(g)}if(this.isLineLoop){const v=Er(this,t,As,l,p-1,f,p-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Er(r,t,e,n,i,s,o){const a=r.geometry.attributes.position;if($r.fromBufferAttribute(a,i),Jr.fromBufferAttribute(a,s),e.distanceSqToSegment($r,Jr,Fo,cc)>n)return;Fo.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Fo);if(!(c<t.near||c>t.far))return{distance:c,point:cc.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}class jh extends Ye{constructor(t=[],e=us,n,i,s,o,a,l,c,u){super(t,e,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class io extends Ye{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ps extends Ye{constructor(t,e,n=Wn,i,s,o,a=qe,l=qe,c,u=yi,d=1){if(u!==yi&&u!==vi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:d};super(h,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ol(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Qh extends ps{constructor(t,e=Wn,n=us,i,s,o=qe,a=qe,l,c=yi){const u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,n,i,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class tu extends Ye{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class oi extends Ue{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,f=0;p("z","y","x",-1,-1,n,e,t,o,s,0),p("z","y","x",1,-1,n,e,-t,o,s,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,s,4),p("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(u,3)),this.setAttribute("uv",new pe(d,2));function p(v,m,g,_,x,y,E,b,M,S,P){const A=y/M,L=E/S,I=y/2,D=E/2,w=b/2,N=M+1,F=S+1;let B=0,Y=0;const q=new k;for(let O=0;O<F;O++){const H=O*L-D;for(let W=0;W<N;W++){const rt=W*A-I;q[v]=rt*_,q[m]=H*x,q[g]=w,c.push(q.x,q.y,q.z),q[v]=0,q[m]=0,q[g]=b>0?1:-1,u.push(q.x,q.y,q.z),d.push(W/M),d.push(1-O/S),B+=1}}for(let O=0;O<S;O++)for(let H=0;H<M;H++){const W=h+H+N*O,rt=h+H+N*(O+1),X=h+(H+1)+N*(O+1),J=h+(H+1)+N*O;l.push(W,rt,J),l.push(rt,X,J),Y+=6}a.addGroup(f,Y,P),f+=Y,h+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class ai extends Ue{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],d=[],h=[],f=[];let p=0;const v=[],m=n/2;let g=0;_(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new pe(d,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(f,2));function _(){const y=new k,E=new k;let b=0;const M=(e-t)/n;for(let S=0;S<=s;S++){const P=[],A=S/s,L=A*(e-t)+t;for(let I=0;I<=i;I++){const D=I/i,w=D*l+a,N=Math.sin(w),F=Math.cos(w);E.x=L*N,E.y=-A*n+m,E.z=L*F,d.push(E.x,E.y,E.z),y.set(N,M,F).normalize(),h.push(y.x,y.y,y.z),f.push(D,1-A),P.push(p++)}v.push(P)}for(let S=0;S<i;S++)for(let P=0;P<s;P++){const A=v[P][S],L=v[P+1][S],I=v[P+1][S+1],D=v[P][S+1];(t>0||P!==0)&&(u.push(A,L,D),b+=3),(e>0||P!==s-1)&&(u.push(L,I,D),b+=3)}c.addGroup(g,b,0),g+=b}function x(y){const E=p,b=new Gt,M=new k;let S=0;const P=y===!0?t:e,A=y===!0?1:-1;for(let I=1;I<=i;I++)d.push(0,m*A,0),h.push(0,A,0),f.push(.5,.5),p++;const L=p;for(let I=0;I<=i;I++){const w=I/i*l+a,N=Math.cos(w),F=Math.sin(w);M.x=P*F,M.y=m*A,M.z=P*N,d.push(M.x,M.y,M.z),h.push(0,A,0),b.x=N*.5+.5,b.y=F*.5*A+.5,f.push(b.x,b.y),p++}for(let I=0;I<i;I++){const D=E+I,w=L+I;y===!0?u.push(w,w+1,D):u.push(w+1,w,D),S+=3}c.addGroup(g,S,y===!0?1:2),g+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ai(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class hl extends ai{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new hl(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ul extends Ue{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],o=[];a(i),c(n),u(),this.setAttribute("position",new pe(s,3)),this.setAttribute("normal",new pe(s.slice(),3)),this.setAttribute("uv",new pe(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const x=new k,y=new k,E=new k;for(let b=0;b<e.length;b+=3)f(e[b+0],x),f(e[b+1],y),f(e[b+2],E),l(x,y,E,_)}function l(_,x,y,E){const b=E+1,M=[];for(let S=0;S<=b;S++){M[S]=[];const P=_.clone().lerp(y,S/b),A=x.clone().lerp(y,S/b),L=b-S;for(let I=0;I<=L;I++)I===0&&S===b?M[S][I]=P:M[S][I]=P.clone().lerp(A,I/L)}for(let S=0;S<b;S++)for(let P=0;P<2*(b-S)-1;P++){const A=Math.floor(P/2);P%2===0?(h(M[S][A+1]),h(M[S+1][A]),h(M[S][A])):(h(M[S][A+1]),h(M[S+1][A+1]),h(M[S+1][A]))}}function c(_){const x=new k;for(let y=0;y<s.length;y+=3)x.x=s[y+0],x.y=s[y+1],x.z=s[y+2],x.normalize().multiplyScalar(_),s[y+0]=x.x,s[y+1]=x.y,s[y+2]=x.z}function u(){const _=new k;for(let x=0;x<s.length;x+=3){_.x=s[x+0],_.y=s[x+1],_.z=s[x+2];const y=m(_)/2/Math.PI+.5,E=g(_)/Math.PI+.5;o.push(y,1-E)}p(),d()}function d(){for(let _=0;_<o.length;_+=6){const x=o[_+0],y=o[_+2],E=o[_+4],b=Math.max(x,y,E),M=Math.min(x,y,E);b>.9&&M<.1&&(x<.2&&(o[_+0]+=1),y<.2&&(o[_+2]+=1),E<.2&&(o[_+4]+=1))}}function h(_){s.push(_.x,_.y,_.z)}function f(_,x){const y=_*3;x.x=t[y+0],x.y=t[y+1],x.z=t[y+2]}function p(){const _=new k,x=new k,y=new k,E=new k,b=new Gt,M=new Gt,S=new Gt;for(let P=0,A=0;P<s.length;P+=9,A+=6){_.set(s[P+0],s[P+1],s[P+2]),x.set(s[P+3],s[P+4],s[P+5]),y.set(s[P+6],s[P+7],s[P+8]),b.set(o[A+0],o[A+1]),M.set(o[A+2],o[A+3]),S.set(o[A+4],o[A+5]),E.copy(_).add(x).add(y).divideScalar(3);const L=m(E);v(b,A+0,_,L),v(M,A+2,x,L),v(S,A+4,y,L)}}function v(_,x,y,E){E<0&&_.x===1&&(o[x]=_.x-1),y.x===0&&y.z===0&&(o[x]=E/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function g(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ul(t.vertices,t.indices,t.radius,t.detail)}}class eu{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){qt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const u=n[i],h=n[i+1]-u,f=(o-u)/h;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new Gt:new k);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new k,i=[],s=[],o=[],a=new k,l=new me;for(let f=0;f<=t;f++){const p=f/t;i[f]=this.getTangentAt(p,new k)}s[0]=new k,o[0]=new k;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),d=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(ee(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(ee(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let p=1;p<=t;p++)s[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),o[p].crossVectors(i[p],s[p])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}}function dl(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,d){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+d)+(l-a)/d;h*=u,f*=u,i(o,a,h,f)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const hc=new k,uc=new k,Oo=new dl,Bo=new dl,zo=new dl;class fl extends eu{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new k){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%s]:(uc.subVectors(i[0],i[1]).add(i[0]),c=uc);const d=i[a%s],h=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(hc.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=hc),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);v<1e-4&&(v=1),p<1e-4&&(p=v),m<1e-4&&(m=v),Oo.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,p,v,m),Bo.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,p,v,m),zo.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,p,v,m)}else this.curveType==="catmullrom"&&(Oo.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),Bo.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),zo.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(Oo.calc(l),Bo.calc(l),zo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new k().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function af(r,t){const e=1-r;return e*e*e*t}function lf(r,t){const e=1-r;return 3*e*e*r*t}function cf(r,t){return 3*(1-r)*r*r*t}function hf(r,t){return r*r*r*t}function ko(r,t,e,n,i){return af(r,t)+lf(r,e)+cf(r,n)+hf(r,i)}class uf extends eu{constructor(t=new k,e=new k,n=new k,i=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new k){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ko(t,i.x,s.x,o.x,a.x),ko(t,i.y,s.y,o.y,a.y),ko(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ks extends ul{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ks(t.radius,t.detail)}}class li extends Ue{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,d=t/a,h=e/l,f=[],p=[],v=[],m=[];for(let g=0;g<u;g++){const _=g*h-o;for(let x=0;x<c;x++){const y=x*d-s;p.push(y,-_,0),v.push(0,0,1),m.push(x/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<a;_++){const x=_+c*g,y=_+c*(g+1),E=_+1+c*(g+1),b=_+1+c*g;f.push(x,y,b),f.push(y,E,b)}this.setIndex(f),this.setAttribute("position",new pe(p,3)),this.setAttribute("normal",new pe(v,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new li(t.width,t.height,t.widthSegments,t.heightSegments)}}class js extends Ue{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new k,h=new k,f=[],p=[],v=[],m=[];for(let g=0;g<=n;g++){const _=[],x=g/n,y=o+x*a,E=t*Math.cos(y),b=Math.sqrt(t*t-E*E);let M=0;g===0&&o===0?M=.5/e:g===n&&l===Math.PI&&(M=-.5/e);for(let S=0;S<=e;S++){const P=S/e,A=i+P*s;d.x=-b*Math.cos(A),d.y=E,d.z=b*Math.sin(A),p.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),m.push(P+M,1-x),_.push(c++)}u.push(_)}for(let g=0;g<n;g++)for(let _=0;_<e;_++){const x=u[g][_+1],y=u[g][_],E=u[g+1][_],b=u[g+1][_+1];(g!==0||o>0)&&f.push(x,y,b),(g!==n-1||l<Math.PI)&&f.push(y,E,b)}this.setIndex(f),this.setAttribute("position",new pe(p,3)),this.setAttribute("normal",new pe(v,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new js(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class pl extends Ue{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],u=[],d=[],h=new k,f=new k,p=new k;for(let v=0;v<=n;v++){const m=o+v/n*a;for(let g=0;g<=i;g++){const _=g/i*s;f.x=(t+e*Math.cos(m))*Math.cos(_),f.y=(t+e*Math.cos(m))*Math.sin(_),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),p.subVectors(f,h).normalize(),u.push(p.x,p.y,p.z),d.push(g/i),d.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=i;m++){const g=(i+1)*v+m-1,_=(i+1)*(v-1)+m-1,x=(i+1)*(v-1)+m,y=(i+1)*v+m;l.push(g,_,y),l.push(_,x,y)}this.setIndex(l),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(u,3)),this.setAttribute("uv",new pe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pl(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function ms(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];if(dc(i))i.isRenderTargetTexture?(qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(dc(i[0])){const s=[];for(let o=0,a=i.length;o<a;o++)s[o]=i[o].clone();t[e][n]=s}else t[e][n]=i.slice();else t[e][n]=i}}return t}function nn(r){const t={};for(let e=0;e<r.length;e++){const n=ms(r[e]);for(const i in n)t[i]=n[i]}return t}function dc(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function df(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function nu(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}const ff={clone:ms,merge:nn};var pf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Si extends vs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pf,this.fragmentShader=mf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ms(t.uniforms),this.uniformsGroups=df(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Xt().setHex(i.value);break;case"v2":this.uniforms[n].value=new Gt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new k().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Te().fromArray(i.value);break;case"m3":this.uniforms[n].value=new $t().fromArray(i.value);break;case"m4":this.uniforms[n].value=new me().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class gf extends Si{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class on extends vs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ga,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class _f extends vs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class vf extends vs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Go={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(fc(r)||(this.files[r]=t))},get:function(r){if(this.enabled!==!1&&!fc(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function fc(r){try{const t=r.slice(r.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class xf{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Mf=new xf;class ml{constructor(t){this.manager=t!==void 0?t:Mf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}}ml.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ki=new WeakMap;class yf extends ml{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Go.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);else{let d=Ki.get(o);d===void 0&&(d=[],Ki.set(o,d)),d.push({onLoad:e,onError:i})}return o}const a=Xs("img");function l(){u(),e&&e(this);const d=Ki.get(this)||[];for(let h=0;h<d.length;h++){const f=d[h];f.onLoad&&f.onLoad(this)}Ki.delete(this),s.manager.itemEnd(t)}function c(d){u(),i&&i(d),Go.remove(`image:${t}`);const h=Ki.get(this)||[];for(let f=0;f<h.length;f++){const p=h[f];p.onError&&p.onError(d)}Ki.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Go.add(`image:${t}`,a),s.manager.itemStart(t),a.fetchPriority=this.priority,a.src=t,a}}class Sf extends ml{constructor(t){super(t)}load(t,e,n,i){const s=new Ye,o=new yf(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class gl extends Ie{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class bf extends gl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Ho=new me,pc=new k,mc=new k;class iu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Gt(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zs,this._frameExtents=new Gt(1,1),this._viewportCount=1,this._viewports=[new Te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;pc.setFromMatrixPosition(t.matrixWorld),e.position.copy(pc),mc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(mc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Ho.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Ho,t.coordinateSystem,t.reversedDepth);const s=this._frameExtents,o=i?i.z/s.x:1,a=i?i.w/s.y:1,l=i?i.x/s.x:0,c=i?i.y/s.y:0;t.coordinateSystem===qs||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Ho)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const wr=new k,Tr=new vn,Dn=new k;class _l extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(wr,Tr,Dn),Dn.x===1&&Dn.y===1&&Dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wr,Tr,Dn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(wr,Tr,Dn),Dn.x===1&&Dn.y===1&&Dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wr,Tr,Dn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const mi=new k,gc=new Gt,_c=new Gt;class gn extends _l{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ys*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ks*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ys*2*Math.atan(Math.tan(ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(mi.x,mi.y).multiplyScalar(-t/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mi.x,mi.y).multiplyScalar(-t/mi.z)}getViewSize(t,e){return this.getViewBounds(t,gc,_c),e.subVectors(_c,gc)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ks*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Ef extends iu{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0}}class wf extends gl{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ef}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class su extends _l{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Tf extends iu{constructor(){super(new su(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vc extends gl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new Tf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const $i=-90,Ji=1;class Ha extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new gn($i,Ji,t,e);i.layers=this.layers,this.add(i);const s=new gn($i,Ji,t,e);s.layers=this.layers,this.add(s);const o=new gn($i,Ji,t,e);o.layers=this.layers,this.add(o);const a=new gn($i,Ji,t,e);a.layers=this.layers,this.add(a);const l=new gn($i,Ji,t,e);l.layers=this.layers,this.add(l);const c=new gn($i,Ji,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=v,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Af extends gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}const xc=new me;class Rf{constructor(t,e,n=0,i=1/0){this.ray=new no(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new al,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ce("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return xc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xc),this}intersectObject(t,e=!0,n=[]){return Va(t,this,n,e),n.sort(Mc),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)Va(t[i],this,n,e);return n.sort(Mc),n}}function Mc(r,t){return r.distance-t.distance}function Va(r,t,e,n){let i=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)Va(s[o],t,e,!0)}}class Wa{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ee(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ee(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Cf extends bi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function yc(r,t,e,n){const i=Pf(n);switch(e){case Oh:return r*t;case tl:return r*t/i.components*i.byteLength;case el:return r*t/i.components*i.byteLength;case Ui:return r*t*2/i.components*i.byteLength;case nl:return r*t*2/i.components*i.byteLength;case Bh:return r*t*3/i.components*i.byteLength;case Hn:return r*t*4/i.components*i.byteLength;case il:return r*t*4/i.components*i.byteLength;case Br:case zr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case kr:case Gr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case da:case pa:return Math.max(r,16)*Math.max(t,8)/4;case ua:case fa:return Math.max(r,8)*Math.max(t,8)/2;case ma:case ga:case va:case xa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case _a:case Wr:case Ma:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ya:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Sa:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case ba:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Ea:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case wa:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Ta:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Aa:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Ra:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Ca:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Pa:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case La:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Ia:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Da:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Na:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Ua:case Fa:case Oa:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Ba:case za:return Math.ceil(r/4)*Math.ceil(t/4)*8;case qr:case ka:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Pf(r){switch(r){case dn:case Dh:return{byteLength:1,components:1};case Ws:case Nh:case Mn:return{byteLength:2,components:1};case ja:case Qa:return{byteLength:2,components:4};case Wn:case Ja:case An:return{byteLength:4,components:1};case Uh:case Fh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ka}}));typeof window<"u"&&(window.__THREE__?qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ka);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ru(){let r=null,t=!1,e=null,n=null;function i(s,o){n=r.requestAnimationFrame(i),e(s,o)}return{start:function(){t!==!0&&e!==null&&r!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Lf(r){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const u=l.array,d=l.updateRanges;if(r.bindBuffer(c,a),d.length===0)r.bufferSubData(c,0,u);else{d.sort((f,p)=>f.start-p.start);let h=0;for(let f=1;f<d.length;f++){const p=d[h],v=d[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++h,d[h]=v)}d.length=h+1;for(let f=0,p=d.length;f<p;f++){const v=d[f];r.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var If=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Df=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Nf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Uf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ff=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Of=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Gf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Xf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Zf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$f=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,jf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Qf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,tp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ep=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,np=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ip=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,op=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ap="gl_FragColor = linearToOutputTexel( gl_FragColor );",lp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,hp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,up=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,dp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,pp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_p=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,bp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Ep=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ap=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Cp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Pp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Lp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ip=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dp=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Np=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Up=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Op=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Gp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qp=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Zp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$p=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,tm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,em=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,im=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,om=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,am=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,um=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,pm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_m=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ym=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Em=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Tm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Pm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Im=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nm=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Om=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Bm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,zm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,km=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Xm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ym=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Km=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$m=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Qm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,n0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,o0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,a0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,l0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,c0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,h0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,te={alphahash_fragment:If,alphahash_pars_fragment:Df,alphamap_fragment:Nf,alphamap_pars_fragment:Uf,alphatest_fragment:Ff,alphatest_pars_fragment:Of,aomap_fragment:Bf,aomap_pars_fragment:zf,batching_pars_vertex:kf,batching_vertex:Gf,begin_vertex:Hf,beginnormal_vertex:Vf,bsdfs:Wf,iridescence_fragment:qf,bumpmap_pars_fragment:Xf,clipping_planes_fragment:Yf,clipping_planes_pars_fragment:Zf,clipping_planes_pars_vertex:Kf,clipping_planes_vertex:$f,color_fragment:Jf,color_pars_fragment:jf,color_pars_vertex:Qf,color_vertex:tp,common:ep,defaultnormal_vertex:np,displacementmap_pars_vertex:ip,displacementmap_vertex:sp,emissivemap_fragment:rp,emissivemap_pars_fragment:op,colorspace_fragment:ap,colorspace_pars_fragment:lp,envmap_fragment:cp,envmap_common_pars_fragment:hp,envmap_pars_fragment:up,envmap_pars_vertex:dp,envmap_physical_pars_fragment:bp,envmap_vertex:fp,fog_vertex:pp,fog_pars_vertex:mp,fog_fragment:gp,fog_pars_fragment:_p,gradientmap_pars_fragment:vp,lightmap_pars_fragment:xp,lights_lambert_fragment:Mp,lights_lambert_pars_fragment:yp,lights_pars_begin:Sp,lights_toon_fragment:Ep,lights_toon_pars_fragment:wp,lights_phong_fragment:Tp,lights_phong_pars_fragment:Ap,lights_physical_fragment:Rp,lights_physical_pars_fragment:Cp,lights_fragment_begin:Pp,lights_fragment_maps:Lp,lights_fragment_end:Ip,lightprobes_pars_fragment:Dp,logdepthbuf_fragment:Np,logdepthbuf_pars_fragment:Up,logdepthbuf_pars_vertex:Fp,logdepthbuf_vertex:Op,map_fragment:Bp,map_pars_fragment:zp,map_particle_fragment:kp,map_particle_pars_fragment:Gp,metalnessmap_fragment:Hp,metalnessmap_pars_fragment:Vp,morphinstance_vertex:Wp,morphcolor_vertex:qp,morphnormal_vertex:Xp,morphtarget_pars_vertex:Yp,morphtarget_vertex:Zp,normal_fragment_begin:Kp,normal_fragment_maps:$p,normal_pars_fragment:Jp,normal_pars_vertex:jp,normal_vertex:Qp,normalmap_pars_fragment:tm,clearcoat_normal_fragment_begin:em,clearcoat_normal_fragment_maps:nm,clearcoat_pars_fragment:im,iridescence_pars_fragment:sm,opaque_fragment:rm,packing:om,premultiplied_alpha_fragment:am,project_vertex:lm,dithering_fragment:cm,dithering_pars_fragment:hm,roughnessmap_fragment:um,roughnessmap_pars_fragment:dm,shadowmap_pars_fragment:fm,shadowmap_pars_vertex:pm,shadowmap_vertex:mm,shadowmask_pars_fragment:gm,skinbase_vertex:_m,skinning_pars_vertex:vm,skinning_vertex:xm,skinnormal_vertex:Mm,specularmap_fragment:ym,specularmap_pars_fragment:Sm,tonemapping_fragment:bm,tonemapping_pars_fragment:Em,transmission_fragment:wm,transmission_pars_fragment:Tm,uv_pars_fragment:Am,uv_pars_vertex:Rm,uv_vertex:Cm,worldpos_vertex:Pm,background_vert:Lm,background_frag:Im,backgroundCube_vert:Dm,backgroundCube_frag:Nm,cube_vert:Um,cube_frag:Fm,depth_vert:Om,depth_frag:Bm,distance_vert:zm,distance_frag:km,equirect_vert:Gm,equirect_frag:Hm,linedashed_vert:Vm,linedashed_frag:Wm,meshbasic_vert:qm,meshbasic_frag:Xm,meshlambert_vert:Ym,meshlambert_frag:Zm,meshmatcap_vert:Km,meshmatcap_frag:$m,meshnormal_vert:Jm,meshnormal_frag:jm,meshphong_vert:Qm,meshphong_frag:t0,meshphysical_vert:e0,meshphysical_frag:n0,meshtoon_vert:i0,meshtoon_frag:s0,points_vert:r0,points_frag:o0,shadow_vert:a0,shadow_frag:l0,sprite_vert:c0,sprite_frag:h0},wt={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Gn={basic:{uniforms:nn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:nn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Xt(0)},envMapIntensity:{value:1}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:nn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:nn([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:nn([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:nn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:nn([wt.points,wt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:nn([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:nn([wt.common,wt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:nn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:nn([wt.sprite,wt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distance:{uniforms:nn([wt.common,wt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distance_vert,fragmentShader:te.distance_frag},shadow:{uniforms:nn([wt.lights,wt.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};Gn.physical={uniforms:nn([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new $t},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};const Ar={r:0,b:0,g:0},u0=new me,ou=new $t;ou.set(-1,0,0,0,1,0,0,0,1);function d0(r,t,e,n,i,s){const o=new Xt(0);let a=i===!0?0:1,l,c,u=null,d=0,h=null;function f(_){let x=_.isScene===!0?_.background:null;if(x&&x.isTexture){const y=_.backgroundBlurriness>0;x=t.get(x,y)}return x}function p(_){let x=!1;const y=f(_);y===null?m(o,a):y&&y.isColor&&(m(y,1),x=!0);const E=r.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||x)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function v(_,x){const y=f(x);y&&y.isCubeTexture?(c===void 0&&(c=new Me(new oi(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:ms(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,b,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(u0.makeRotationFromEuler(x.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ou),c.material.toneMapped=ae.getTransfer(y.colorSpace)!==ve,(u!==y||d!==y.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,h=r.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Me(new li(2,2),new Si({name:"BackgroundMaterial",uniforms:ms(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=ae.getTransfer(y.colorSpace)!==ve,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,h=r.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,x){_.getRGB(Ar,nu(r)),e.buffers.color.setClear(Ar.r,Ar.g,Ar.b,x,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,x=1){o.set(_),a=x,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,m(o,a)},render:p,addToRenderList:v,dispose:g}}function f0(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,o=!1;function a(L,I,D,w,N){let F=!1;const B=d(L,w,D,I);s!==B&&(s=B,c(s.object)),F=f(L,w,D,N),F&&p(L,w,D,N),N!==null&&t.update(N,r.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,y(L,I,D,w),N!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return r.createVertexArray()}function c(L){return r.bindVertexArray(L)}function u(L){return r.deleteVertexArray(L)}function d(L,I,D,w){const N=w.wireframe===!0;let F=n[I.id];F===void 0&&(F={},n[I.id]=F);const B=L.isInstancedMesh===!0?L.id:0;let Y=F[B];Y===void 0&&(Y={},F[B]=Y);let q=Y[D.id];q===void 0&&(q={},Y[D.id]=q);let O=q[N];return O===void 0&&(O=h(l()),q[N]=O),O}function h(L){const I=[],D=[],w=[];for(let N=0;N<e;N++)I[N]=0,D[N]=0,w[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:D,attributeDivisors:w,object:L,attributes:{},index:null}}function f(L,I,D,w){const N=s.attributes,F=I.attributes;let B=0;const Y=D.getAttributes();for(const q in Y)if(Y[q].location>=0){const H=N[q];let W=F[q];if(W===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(W=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(W=L.instanceColor)),H===void 0||H.attribute!==W||W&&H.data!==W.data)return!0;B++}return s.attributesNum!==B||s.index!==w}function p(L,I,D,w){const N={},F=I.attributes;let B=0;const Y=D.getAttributes();for(const q in Y)if(Y[q].location>=0){let H=F[q];H===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(H=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(H=L.instanceColor));const W={};W.attribute=H,H&&H.data&&(W.data=H.data),N[q]=W,B++}s.attributes=N,s.attributesNum=B,s.index=w}function v(){const L=s.newAttributes;for(let I=0,D=L.length;I<D;I++)L[I]=0}function m(L){g(L,0)}function g(L,I){const D=s.newAttributes,w=s.enabledAttributes,N=s.attributeDivisors;D[L]=1,w[L]===0&&(r.enableVertexAttribArray(L),w[L]=1),N[L]!==I&&(r.vertexAttribDivisor(L,I),N[L]=I)}function _(){const L=s.newAttributes,I=s.enabledAttributes;for(let D=0,w=I.length;D<w;D++)I[D]!==L[D]&&(r.disableVertexAttribArray(D),I[D]=0)}function x(L,I,D,w,N,F,B){B===!0?r.vertexAttribIPointer(L,I,D,N,F):r.vertexAttribPointer(L,I,D,w,N,F)}function y(L,I,D,w){v();const N=w.attributes,F=D.getAttributes(),B=I.defaultAttributeValues;for(const Y in F){const q=F[Y];if(q.location>=0){let O=N[Y];if(O===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(O=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(O=L.instanceColor)),O!==void 0){const H=O.normalized,W=O.itemSize,rt=t.get(O);if(rt===void 0)continue;const X=rt.buffer,J=rt.type,nt=rt.bytesPerElement,ct=J===r.INT||J===r.UNSIGNED_INT||O.gpuType===Ja;if(O.isInterleavedBufferAttribute){const at=O.data,St=at.isInterleavedBuffer===!0?at.stride:at.itemSize,Pt=O.offset;if(at.isInstancedInterleavedBuffer||at.isInstancedBufferAttribute){for(let dt=0;dt<q.locationSize;dt++)g(q.location+dt,at.meshPerAttribute);L.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let dt=0;dt<q.locationSize;dt++)m(q.location+dt);r.bindBuffer(r.ARRAY_BUFFER,X);for(let dt=0;dt<q.locationSize;dt++)x(q.location+dt,W/q.locationSize,J,H,St*nt,(Pt+W/q.locationSize*dt)*nt,ct)}else{if(O.isInstancedBufferAttribute){for(let at=0;at<q.locationSize;at++)g(q.location+at,O.meshPerAttribute);L.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let at=0;at<q.locationSize;at++)m(q.location+at);r.bindBuffer(r.ARRAY_BUFFER,X);for(let at=0;at<q.locationSize;at++)x(q.location+at,W/q.locationSize,J,H,W*nt,W/q.locationSize*at*nt,ct)}}else if(B!==void 0){const H=B[Y];if(H!==void 0)switch(H.length){case 2:r.vertexAttrib2fv(q.location,H);break;case 3:r.vertexAttrib3fv(q.location,H);break;case 4:r.vertexAttrib4fv(q.location,H);break;default:r.vertexAttrib1fv(q.location,H)}}}}_()}function E(){P();for(const L in n){const I=n[L];for(const D in I){const w=I[D];for(const N in w){const F=w[N];for(const B in F)u(F[B].object),delete F[B];delete w[N]}}delete n[L]}}function b(L){if(n[L.id]===void 0)return;const I=n[L.id];for(const D in I){const w=I[D];for(const N in w){const F=w[N];for(const B in F)u(F[B].object),delete F[B];delete w[N]}}delete n[L.id]}function M(L){for(const I in n){const D=n[I];for(const w in D){const N=D[w];if(N[L.id]===void 0)continue;const F=N[L.id];for(const B in F)u(F[B].object),delete F[B];delete N[L.id]}}}function S(L){for(const I in n){const D=n[I],w=L.isInstancedMesh===!0?L.id:0,N=D[w];if(N!==void 0){for(const F in N){const B=N[F];for(const Y in B)u(B[Y].object),delete B[Y];delete N[F]}delete D[w],Object.keys(D).length===0&&delete n[I]}}}function P(){A(),o=!0,s!==i&&(s=i,c(s.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:A,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfObject:S,releaseStatesOfProgram:M,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function p0(r,t,e){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,u){u!==0&&(r.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];e.update(h,n,1)}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function m0(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const M=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(M){return!(M!==Hn&&n.convert(M)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(M){const S=M===Mn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(M!==dn&&M!==An&&!S&&n.convert(M)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(M){if(M==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(qt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),h=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&qt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),E=r.getParameter(r.MAX_SAMPLES),b=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:_,maxVaryings:x,maxFragmentUniforms:y,maxSamples:E,samples:b}}function g0(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new kn,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||i;return i=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){const p=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,g=r.get(d);if(!i||p===null||p.length===0||s&&!m)s?u(null):c();else{const _=s?0:n,x=_*4;let y=g.clippingState||null;l.value=y,y=u(p,h,x,f);for(let E=0;E!==x;++E)y[E]=e[E];g.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,f,p){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,p!==!0||m===null){const g=f+v*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<g)&&(m=new Float32Array(g));for(let x=0,y=f;x!==v;++x,y+=4)o.copy(d[x]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}class vl extends xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new jh(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new oi(5,5,5),s=new Si({name:"CubemapFromEquirect",uniforms:ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:as});s.uniforms.tEquirect.value=e;const o=new Me(i,s),a=e.minFilter;return e.minFilter===_i&&(e.minFilter=cn),new Ha(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const Sc=256,_0=3,v0=20,au=256,lu=16,x0=3,M0=new k,y0=new Xt;class jr{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ha(1,10,null),this._boxMesh=new Me(new oi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){const{size:o=256,position:a=M0}=s,l=this._renderer;this._setSize(o);const c=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);const d=l.autoClear,h=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,v=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(t.background=l.getClearColor(y0));const m=new Ha(n,i,u);return m.position.copy(a),m.update(l,t),l.autoClear=d,l.autoClearColor=h,l.autoClearDepth=f,l.autoClearStencil=p,t.background=v,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ec(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Sc,Vh(t))}_fromTexture(t,e){t.mapping===us||t.mapping===Vs?this._setSize(t.image.length===0?Sc:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=bc(t,!1,!1),n=Math.log2(t)-_0;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=bc(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=t,s.activeMipmapLevel=e;const o=t.width>>e;t.viewport.set(0,0,o,o),s.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===us||t.mapping===Vs?(this._cubemapMaterial===null&&(this._cubemapMaterial=wc()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Ec()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=S0(),this._integrationMaterial=b0());const e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(e/lu);for(let o=0;o<=n;o++){const a=jr.lodToRoughness(o,n);if(o>n-x0)s.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{const l=a>0?Math.log2(e)+.5*Math.log2(6/(au*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=E0());const n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(s,0,n)}}function bc(r,t,e){return new vl(r,{minFilter:_i,generateMipmaps:t,type:Mn,colorSpace:Xr,depthBuffer:e})}function Qs(r,t,e){return new Si({name:r,uniforms:t,vertexShader:te.cube_vert,fragmentShader:e,side:tn,blending:as,depthTest:!1,depthWrite:!1})}function S0(){return Qs("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${au}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function b0(){return Qs("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:lu}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function E0(){return Qs("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${v0}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Ec(){return Qs("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function wc(){return Qs("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function w0(r){let t=new WeakMap,e=new WeakMap,n=null;function i(h,f=!1){return h==null?null:f?o(h):s(h)}function s(h){if(h&&h.isTexture){const f=h.mapping;if(f===uo||f===fo)if(t.has(h)){const p=t.get(h).texture;return a(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const v=new vl(p.height);return v.fromEquirectangularTexture(r,h),t.set(h,v),h.addEventListener("dispose",c),a(v.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){const f=h.mapping,p=f===uo||f===fo,v=f===us||f===Vs;if(p||v){let m=e.get(h);const g=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return n===null&&(n=new jr(r)),m=p?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const _=h.image;return p&&_&&_.height>0||v&&_&&l(_)?(n===null&&(n=new jr(r)),m=p?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,f){return f===uo?h.mapping=us:f===fo&&(h.mapping=Vs),h}function l(h){let f=0;const p=6;for(let v=0;v<p;v++)h[v]!==void 0&&f++;return f===p}function c(h){const f=h.target;f.removeEventListener("dispose",c);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function T0(r){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Hr("WebGLRenderer: "+n+" extension not supported."),i}}}function A0(r,t,e,n){const i={},s=new WeakMap,o=new FinalizationRegistry(p=>delete i[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(const m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete i[p.id],o.unregister(p);const v=s.get(p);v&&(t.remove(v),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,v){return i[v.id]!==void 0||(v.addEventListener("dispose",a),i[v.id]=new WeakRef(v),o.register(v,v.id,v),e.memory.geometries++),v}function u(p){const v=p.attributes;for(const m in v)t.update(v[m],r.ARRAY_BUFFER)}function d(p){const v=p.index,m=p.attributes.position;let g=0;if(m===void 0)return;const _=v!==null?v.array.length:m.array.length/3-1,x=m.count>=65535?Kh:Zh,y=new x(Math.ceil(_/3)*6,1),E=y.array;if(v!==null){const M=v.array;g=v.version;for(let S=0,P=0;S<_;S+=3){const A=M[S+0],L=M[S+1],I=M[S+2];E[P++]=A,E[P++]=L,E[P++]=L,E[P++]=I,E[P++]=I,E[P++]=A}}else{g=m.version;for(let M=0,S=0;M<_;M+=3){const P=M+0,A=M+1,L=M+2;E[S++]=P,E[S++]=A,E[S++]=A,E[S++]=L,E[S++]=L,E[S++]=P}}y.version=g;const b=s.get(p);b&&t.remove(b),s.set(p,y)}function h(p){const v=s.get(p);if(v){const m=p.index;m!==null&&v.version<m.version&&d(p)}else d(p);return s.get(p)}function f(){for(const p in i){const v=i[p].deref();v!==void 0&&l(v)}}return{get:c,update:u,getWireframeAttribute:h,dispose:f}}function R0(r,t,e){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,h){r.drawElements(n,h,s,d*o),e.update(h,n,1)}function c(d,h,f){f!==0&&(r.drawElementsInstanced(n,h,s,d*o,f),e.update(h,n,f))}function u(d,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,d,0,f);let v=0;for(let m=0;m<f;m++)v+=h[m];e.update(v,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function C0(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:ce("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function P0(r,t,e){const n=new WeakMap,i=new Te;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let A=function(){S.dispose(),n.delete(a),a.removeEventListener("dispose",A)};var f=A;h!==void 0&&h.texture.dispose();const p=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;p===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let E=a.attributes.position.count*y,b=1;E>t.maxTextureSize&&(b=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const M=new Float32Array(E*b*4*d),S=new Xh(M,E,b,d);S.type=An,S.needsUpdate=!0;const P=y*4;for(let L=0;L<d;L++){const I=g[L],D=_[L],w=x[L],N=E*b*4*L;for(let F=0;F<I.count;F++){const B=F*P;p===!0&&(i.fromBufferAttribute(I,F),M[N+B+0]=i.x,M[N+B+1]=i.y,M[N+B+2]=i.z,M[N+B+3]=0),v===!0&&(i.fromBufferAttribute(D,F),M[N+B+4]=i.x,M[N+B+5]=i.y,M[N+B+6]=i.z,M[N+B+7]=0),m===!0&&(i.fromBufferAttribute(w,F),M[N+B+8]=i.x,M[N+B+9]=i.y,M[N+B+10]=i.z,M[N+B+11]=w.itemSize===4?i.w:1)}}h={count:d,texture:S,size:new Gt(E,b)},n.set(a,h),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let p=0;for(let m=0;m<c.length;m++)p+=c[m];const v=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(r,"morphTargetBaseInfluence",v),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function L0(r,t,e,n,i){let s=new WeakMap;function o(c){const u=i.render.frame,d=c.geometry,h=t.get(c,d);if(s.get(h)!==u&&(t.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return h}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}const I0={[Th]:"LINEAR_TONE_MAPPING",[Ah]:"REINHARD_TONE_MAPPING",[Rh]:"CINEON_TONE_MAPPING",[$a]:"ACES_FILMIC_TONE_MAPPING",[Ph]:"AGX_TONE_MAPPING",[Lh]:"NEUTRAL_TONE_MAPPING",[Ch]:"CUSTOM_TONE_MAPPING"};function D0(r,t,e,n,i,s){const o=new xn(t,e,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null,c=null;const u=new Ue;u.setAttribute("position",new pe([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new pe([0,2,0,0,2,0],2));const d=new gf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Me(u,d),f=new su(-1,1,1,-1,0,1);let p=null,v=null,m=!1,g,_=null,x=[],y=!1;this.setSize=function(E,b){o.setSize(E,b),a!==null&&a.setSize(E,b),l!==null&&l.setSize(E,b);for(let M=0;M<x.length;M++){const S=x[M];S.setSize&&S.setSize(E,b)}},this.setEffects=function(E){x=E,y=x.length>0&&x[0].isRenderPass===!0;const b=o.width,M=o.height;x.length>0&&a===null&&(a=new xn(b,M,{type:Mn,depthBuffer:!1,stencilBuffer:!1}),l=new xn(b,M,{type:Mn,depthBuffer:!1,stencilBuffer:!1}));const S=i===!0&&x.some(P=>P.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&c===null&&(c=new ps(b,M),s===!0&&(c.format=vi,c.type=fs)),o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let P=0;P<x.length;P++){const A=x[P];A.setSize&&A.setSize(b,M),S&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(E,b){if(m||E.toneMapping===si&&x.length===0)return!1;if(_=b,b!==null){const M=b.width,S=b.height;(o.width!==M||o.height!==S)&&this.setSize(M,S)}return y===!1&&E.setRenderTarget(o),g=E.toneMapping,E.toneMapping=si,!0},this.hasRenderPass=function(){return y},this.end=function(E,b){E.toneMapping=g,m=!0;let M=o,S=a;for(let P=0;P<x.length;P++){const A=x[P];A.enabled!==!1&&(A.render(E,S,M,b),A.needsSwap!==!1&&(M=S,S=S===a?l:a))}if(p!==E.outputColorSpace||v!==E.toneMapping){p=E.outputColorSpace,v=E.toneMapping,d.defines={},ae.getTransfer(p)===ve&&(d.defines.SRGB_TRANSFER="");const P=I0[v];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=M.texture,E.setRenderTarget(_),E.render(h,f),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),d.dispose()}}const cu=new Ye,hu=new ps(1,1),uu=new Qh(1),du=new Xh,fu=new Hd,pu=new jh,Tc=[],Ac=[],Rc=new Float32Array(16),Cc=new Float32Array(9),Pc=new Float32Array(4);function xs(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Tc[i];if(s===void 0&&(s=new Float32Array(i),Tc[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Fe(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Oe(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function so(r,t){let e=Ac[t];e===void 0&&(e=new Int32Array(t),Ac[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function N0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function U0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;r.uniform2fv(this.addr,t),Oe(e,t)}}function F0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;r.uniform3fv(this.addr,t),Oe(e,t)}}function O0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;r.uniform4fv(this.addr,t),Oe(e,t)}}function B0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Pc.set(n),r.uniformMatrix2fv(this.addr,!1,Pc),Oe(e,n)}}function z0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Cc.set(n),r.uniformMatrix3fv(this.addr,!1,Cc),Oe(e,n)}}function k0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Rc.set(n),r.uniformMatrix4fv(this.addr,!1,Rc),Oe(e,n)}}function G0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function H0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;r.uniform2iv(this.addr,t),Oe(e,t)}}function V0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;r.uniform3iv(this.addr,t),Oe(e,t)}}function W0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;r.uniform4iv(this.addr,t),Oe(e,t)}}function q0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function X0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;r.uniform2uiv(this.addr,t),Oe(e,t)}}function Y0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;r.uniform3uiv(this.addr,t),Oe(e,t)}}function Z0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;r.uniform4uiv(this.addr,t),Oe(e,t)}}function ro(r){return r.version===0&&(r.compareFunction=Gh,r.needsUpdate=!0),r}function K0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?s=ro(hu):s=cu,e.setTexture2D(t||s,i)}function $0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||fu,i)}function J0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_CUBE_SHADOW?s=ro(uu):s=pu,e.setTextureCube(t||s,i)}function j0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||du,i)}function Q0(r){switch(r){case 5126:return N0;case 35664:return U0;case 35665:return F0;case 35666:return O0;case 35674:return B0;case 35675:return z0;case 35676:return k0;case 5124:case 35670:return G0;case 35667:case 35671:return H0;case 35668:case 35672:return V0;case 35669:case 35673:return W0;case 5125:return q0;case 36294:return X0;case 36295:return Y0;case 36296:return Z0;case 35678:case 36198:case 36298:case 36306:case 35682:return K0;case 35679:case 36299:case 36307:return $0;case 35680:case 36300:case 36308:case 36293:return J0;case 36289:case 36303:case 36311:case 36292:return j0}}function tg(r,t){r.uniform1fv(this.addr,t)}function eg(r,t){const e=xs(t,this.size,2);r.uniform2fv(this.addr,e)}function ng(r,t){const e=xs(t,this.size,3);r.uniform3fv(this.addr,e)}function ig(r,t){const e=xs(t,this.size,4);r.uniform4fv(this.addr,e)}function sg(r,t){const e=xs(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function rg(r,t){const e=xs(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function og(r,t){const e=xs(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function ag(r,t){r.uniform1iv(this.addr,t)}function lg(r,t){r.uniform2iv(this.addr,t)}function cg(r,t){r.uniform3iv(this.addr,t)}function hg(r,t){r.uniform4iv(this.addr,t)}function ug(r,t){r.uniform1uiv(this.addr,t)}function dg(r,t){r.uniform2uiv(this.addr,t)}function fg(r,t){r.uniform3uiv(this.addr,t)}function pg(r,t){r.uniform4uiv(this.addr,t)}function mg(r,t,e){const n=this.cache,i=t.length,s=so(e,i);Fe(n,s)||(r.uniform1iv(this.addr,s),Oe(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=ro(hu):o=cu;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,s[a])}function gg(r,t,e){const n=this.cache,i=t.length,s=so(e,i);Fe(n,s)||(r.uniform1iv(this.addr,s),Oe(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||fu,s[o])}function _g(r,t,e){const n=this.cache,i=t.length,s=so(e,i);Fe(n,s)||(r.uniform1iv(this.addr,s),Oe(n,s));let o;this.type===r.SAMPLER_CUBE_SHADOW?o=ro(uu):o=pu;for(let a=0;a!==i;++a)e.setTextureCube(t[a]||o,s[a])}function vg(r,t,e){const n=this.cache,i=t.length,s=so(e,i);Fe(n,s)||(r.uniform1iv(this.addr,s),Oe(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||du,s[o])}function xg(r){switch(r){case 5126:return tg;case 35664:return eg;case 35665:return ng;case 35666:return ig;case 35674:return sg;case 35675:return rg;case 35676:return og;case 5124:case 35670:return ag;case 35667:case 35671:return lg;case 35668:case 35672:return cg;case 35669:case 35673:return hg;case 5125:return ug;case 36294:return dg;case 36295:return fg;case 36296:return pg;case 35678:case 36198:case 36298:case 36306:case 35682:return mg;case 35679:case 36299:case 36307:return gg;case 35680:case 36300:case 36308:case 36293:return _g;case 36289:case 36303:case 36311:case 36292:return vg}}class Mg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Q0(e.type)}}class yg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=xg(e.type)}}class Sg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const Vo=/(\w+)(\])?(\[|\.)?/g;function Lc(r,t){r.seq.push(t),r.map[t.id]=t}function bg(r,t,e){const n=r.name,i=n.length;for(Vo.lastIndex=0;;){const s=Vo.exec(n),o=Vo.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Lc(e,c===void 0?new Mg(a,r,t):new yg(a,r,t));break}else{let d=e.map[a];d===void 0&&(d=new Sg(a),Lc(e,d)),e=d}}}class Vr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);bg(a,l,this)}const i=[],s=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Ic(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const Eg=37297;let wg=0;function Tg(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Dc=new $t;function Ag(r){ae._getMatrix(Dc,ae.workingColorSpace,r);const t=`mat3( ${Dc.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(r)){case Yr:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return qt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Nc(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Tg(r.getShaderSource(t),a)}else return s}function Rg(r,t){const e=Ag(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Cg={[Th]:"Linear",[Ah]:"Reinhard",[Rh]:"Cineon",[$a]:"ACESFilmic",[Ph]:"AgX",[Lh]:"Neutral",[Ch]:"Custom"};function Pg(r,t){const e=Cg[t];return e===void 0?(qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Rr=new k;function Lg(){ae.getLuminanceCoefficients(Rr);const r=Rr.x.toFixed(4),t=Rr.y.toFixed(4),e=Rr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ig(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Os).join(`
`)}function Dg(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ng(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Os(r){return r!==""}function Uc(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Fc(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ug=/^[ \t]*#include +<([\w\d./]+)>/gm;function qa(r){return r.replace(Ug,Fg)}function Fg(r,t){const e=te[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return qa(e)}const Og=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Oc(r){return r.replace(Og,Bg)}function Bg(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Bc(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const zg={[Bs]:"SHADOWMAP_TYPE_PCF",[Fs]:"SHADOWMAP_TYPE_VSM"};function kg(r){return zg[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Gg={[Vs]:"ENVMAP_MODE_REFRACTION"};function Hg(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Gg[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Vg={[wh]:"ENVMAP_BLENDING_MULTIPLY",[od]:"ENVMAP_BLENDING_MIX",[ad]:"ENVMAP_BLENDING_ADD"};function Wg(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Vg[r.combine]||"ENVMAP_BLENDING_NONE"}function qg(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=kg(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Hg(e),d=Wg(e),h=Ig(e),f=Dg(s),p=i.createProgram();let v,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Os).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Os).join(`
`),m.length>0&&(m+=`
`)):(v=[Bc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Os).join(`
`),m=[Bc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==si?"#define TONE_MAPPING":"",e.toneMapping!==si?te.tonemapping_pars_fragment:"",e.toneMapping!==si?Pg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,Rg("linearToOutputTexel",e.outputColorSpace),Lg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Os).join(`
`)),o=qa(o),o=Uc(o,e),o=Fc(o,e),a=qa(a),a=Uc(a,e),a=Fc(a,e),o=Oc(o),a=Oc(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,v=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",e.glslVersion===kl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===kl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=g+v+o,x=g+m+a,y=Ic(i,i.VERTEX_SHADER,_),E=Ic(i,i.FRAGMENT_SHADER,x);i.attachShader(p,y),i.attachShader(p,E),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function b(A){if(r.debug.checkShaderErrors){const L=i.getProgramInfoLog(p)||"",I=i.getShaderInfoLog(y)||"",D=i.getShaderInfoLog(E)||"",w=L.trim(),N=I.trim(),F=D.trim();let B=!0,Y=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(B=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,p,y,E);else{const q=Nc(i,y,"vertex"),O=Nc(i,E,"fragment");ce("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+w+`
`+q+`
`+O)}else w!==""?qt("WebGLProgram: Program Info Log:",w):(N===""||F==="")&&(Y=!1);Y&&(A.diagnostics={runnable:B,programLog:w,vertexShader:{log:N,prefix:v},fragmentShader:{log:F,prefix:m}})}i.deleteShader(y),i.deleteShader(E),M=new Vr(i,p),S=Ng(i,p)}let M;this.getUniforms=function(){return M===void 0&&b(this),M};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(p,Eg)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=wg++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=E,this}let Xg=0;class Yg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Zg(t),e.set(t,n)),n}}class Zg{constructor(t){this.id=Xg++,this.code=t,this.usedTimes=0}}function Kg(r){return r===Ui||r===Wr||r===qr}function $g(r,t,e,n,i,s){const o=new al,a=new Yg,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(M){return l.add(M),M===0?"uv":`uv${M}`}function p(M,S,P,A,L,I){const D=A.fog,w=L.geometry,N=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?A.environment:null,F=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,B=t.get(M.envMap||N,F),Y=h[M.type];let q=n.precision;M.precision!==null&&(q=n.getMaxPrecision(M.precision),q!==M.precision&&qt("WebGLProgram.getParameters:",M.precision,"not supported, using",q,"instead."));const O=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,H=O!==void 0?O.length:0;let W=0;w.morphAttributes.position!==void 0&&(W=1),w.morphAttributes.normal!==void 0&&(W=2),w.morphAttributes.color!==void 0&&(W=3);let rt,X,J,nt;if(Y){const Et=Gn[Y];rt=Et.vertexShader,X=Et.fragmentShader}else{rt=M.vertexShader,X=M.fragmentShader;const Et=a.getVertexShaderStage(M),_e=a.getFragmentShaderStage(M);a.update(M,Et,_e),J=Et.id,nt=_e.id}const ct=r.getRenderTarget(),at=r.state.buffers.depth.getReversed(),St=L.isInstancedMesh===!0,Pt=L.isBatchedMesh===!0,dt=!!M.map,Ot=!!M.matcap,Lt=!!B,Ct=Lt&&B.isPMREMTexture===!0,Vt=!!M.aoMap,Wt=!!M.lightMap,ye=!!M.bumpMap&&M.wireframe===!1,ie=!!M.normalMap,it=!!M.displacementMap,pt=!!M.emissiveMap,bt=!!M.metalnessMap,Rt=!!M.roughnessMap,Yt=M.anisotropy>0,z=M.clearcoat>0,Kt=M.diffuseRoughness>0,oe=M.dispersion>0,Jt=M.retroreflectivity>0,ht=M.iridescence>0,be=M.sheen>0,zt=M.transmission>0,Ht=Yt&&!!M.anisotropyMap,U=z&&!!M.clearcoatMap,T=z&&!!M.clearcoatNormalMap,K=z&&!!M.clearcoatRoughnessMap,lt=Kt&&!!M.diffuseRoughnessMap,ot=ht&&!!M.iridescenceMap,mt=ht&&!!M.iridescenceThicknessMap,Mt=be&&!!M.sheenColorMap,tt=be&&!!M.sheenRoughnessMap,et=!!M.specularMap,_t=!!M.specularColorMap,G=!!M.specularIntensityMap,st=zt&&!!M.transmissionMap,Q=zt&&!!M.thicknessMap,vt=!!M.gradientMap,ft=!!M.alphaMap,gt=M.alphaTest>0,Bt=!!M.alphaHash,Qt=!!M.extensions;let ut=si;M.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(ut=r.toneMapping);const kt=Ct?B.isCompressedCubeTexture?B.image[0].mipmaps:B.mipmaps:null,jt={shaderID:Y,shaderType:M.type,shaderName:M.name,vertexShader:rt,fragmentShader:X,defines:M.defines,customVertexShaderID:J,customFragmentShaderID:nt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:q,batching:Pt,batchingColor:Pt&&L._colorsTexture!==null,instancing:St,instancingColor:St&&L.instanceColor!==null,instancingMorph:St&&L.morphTexture!==null,outputColorSpace:ct===null?r.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:ae.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:dt,matcap:Ot,envMap:Lt,envMapMode:Lt&&B.mapping,envMapPMREM:Ct,envMapMaxLod:Ct?kt.length-1:null,envMapSize:Ct?kt[0].width:null,aoMap:Vt,lightMap:Wt,bumpMap:ye,normalMap:ie,displacementMap:it,emissiveMap:pt,normalMapObjectSpace:ie&&M.normalMapType===hd,normalMapTangentSpace:ie&&M.normalMapType===Ga,packedNormalMap:ie&&M.normalMapType===Ga&&Kg(M.normalMap.format),metalnessMap:bt,roughnessMap:Rt,anisotropy:Yt,anisotropyMap:Ht,clearcoat:z,clearcoatMap:U,clearcoatNormalMap:T,clearcoatRoughnessMap:K,diffuseRoughness:Kt,diffuseRoughnessMap:lt,dispersion:oe,retroreflection:Jt,iridescence:ht,iridescenceMap:ot,iridescenceThicknessMap:mt,sheen:be,sheenColorMap:Mt,sheenRoughnessMap:tt,specularMap:et,specularColorMap:_t,specularIntensityMap:G,transmission:zt,transmissionMap:st,thicknessMap:Q,gradientMap:vt,opaque:M.transparent===!1&&M.blending===zs&&M.alphaToCoverage===!1,alphaMap:ft,alphaTest:gt,alphaHash:Bt,combine:M.combine,mapUv:dt&&f(M.map.channel),aoMapUv:Vt&&f(M.aoMap.channel),lightMapUv:Wt&&f(M.lightMap.channel),bumpMapUv:ye&&f(M.bumpMap.channel),normalMapUv:ie&&f(M.normalMap.channel),displacementMapUv:it&&f(M.displacementMap.channel),emissiveMapUv:pt&&f(M.emissiveMap.channel),metalnessMapUv:bt&&f(M.metalnessMap.channel),roughnessMapUv:Rt&&f(M.roughnessMap.channel),anisotropyMapUv:Ht&&f(M.anisotropyMap.channel),clearcoatMapUv:U&&f(M.clearcoatMap.channel),clearcoatNormalMapUv:T&&f(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&f(M.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:lt&&f(M.diffuseRoughnessMap.channel),iridescenceMapUv:ot&&f(M.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&f(M.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&f(M.sheenColorMap.channel),sheenRoughnessMapUv:tt&&f(M.sheenRoughnessMap.channel),specularMapUv:et&&f(M.specularMap.channel),specularColorMapUv:_t&&f(M.specularColorMap.channel),specularIntensityMapUv:G&&f(M.specularIntensityMap.channel),transmissionMapUv:st&&f(M.transmissionMap.channel),thicknessMapUv:Q&&f(M.thicknessMap.channel),alphaMapUv:ft&&f(M.alphaMap.channel),vertexTangents:!!w.attributes.tangent&&(ie||Yt),vertexNormals:!!w.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!w.attributes.uv&&(dt||ft),fog:!!D,useFog:M.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||w.attributes.normal===void 0&&ie===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:at,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:w.attributes.position!==void 0,morphTargets:w.morphAttributes.position!==void 0,morphNormals:w.morphAttributes.normal!==void 0,morphColors:w.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:W,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:I.filter(Et=>Et.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:ut,decodeVideoTexture:dt&&M.map.isVideoTexture===!0&&ae.getTransfer(M.map.colorSpace)===ve,decodeVideoTextureEmissive:pt&&M.emissiveMap.isVideoTexture===!0&&ae.getTransfer(M.emissiveMap.colorSpace)===ve,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Qe,flipSided:M.side===tn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Qt&&M.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qt&&M.extensions.multiDraw===!0||Pt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return jt.vertexUv1s=l.has(1),jt.vertexUv2s=l.has(2),jt.vertexUv3s=l.has(3),l.clear(),jt}function v(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)S.push(P),S.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(m(S,M),g(S,M),S.push(r.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function m(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapPMREM),M.push(S.envMapMaxLod),M.push(S.envMapSize),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.diffuseRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.numSunLights),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numSunLightShadows),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.numLightProbeGrids),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function g(M,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),M.push(o.mask)}function _(M){const S=h[M.type];let P;if(S){const A=Gn[S];P=ff.clone(A.uniforms)}else P=M.uniforms;return P}function x(M,S){let P=u.get(S);return P!==void 0?++P.usedTimes:(P=new qg(r,S,M,i),c.push(P),u.set(S,P)),P}function y(M){if(--M.usedTimes===0){const S=c.indexOf(M);c[S]=c[c.length-1],c.pop(),u.delete(M.cacheKey),M.destroy()}}function E(M){a.remove(M)}function b(){a.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:_,acquireProgram:x,releaseProgram:y,releaseShaderCache:E,programs:c,dispose:b}}function Jg(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function jg(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function zc(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function kc(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,p,v,m,g){let _=r[t];return _===void 0?(_={id:h.id,object:h,geometry:f,material:p,materialVariant:o(h),groupOrder:v,renderOrder:h.renderOrder,z:m,group:g},r[t]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=p,_.materialVariant=o(h),_.groupOrder=v,_.renderOrder=h.renderOrder,_.z=m,_.group=g),t++,_}function l(h,f,p,v,m,g,_){_.reversedDepth===!0&&(m=-m);const x=a(h,f,p,v,m,g);p.transmission>0?n.push(x):p.transparent===!0?i.push(x):e.push(x)}function c(h,f,p,v,m,g){const _=a(h,f,p,v,m,g);p.transmission>0?n.unshift(_):p.transparent===!0?i.unshift(_):e.unshift(_)}function u(h,f){e.length>1&&e.sort(h||jg),n.length>1&&n.sort(f||zc),i.length>1&&i.sort(f||zc)}function d(){for(let h=t,f=r.length;h<f;h++){const p=r[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:u}}function Qg(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new kc,r.set(n,[o])):i>=s.length?(o=new kc,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function t_(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new k,color:new Xt};break;case"SpotLight":e={position:new k,direction:new k,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new k,halfWidth:new k,halfHeight:new k};break}return r[t.id]=e,e}}}function e_(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let n_=0;function i_(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function s_(r){const t=new t_,e=e_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);const i=new k,s=new me,o=new me;function a(c){let u=0,d=0,h=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let f=0,p=0,v=0,m=0,g=0,_=0,x=0,y=0,E=0,b=0,M=0,S=0,P=0,A=0;c.sort(i_);for(let I=0,D=c.length;I<D;I++){const w=c[I],N=w.color,F=w.intensity,B=w.distance;let Y=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===Ui?Y=w.shadow.map.texture:Y=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)u+=N.r*F,d+=N.g*F,h+=N.b*F;else if(w.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(w.sh.coefficients[q],F);A++}else if(w.isSunLight){const q=t.get(w);if(q.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const O=w.shadow,H=e.get(w);H.shadowIntensity=O.intensity,H.shadowBias=O.bias,H.shadowNormalBias=O.normalBias,H.shadowRadius=O.radius,H.shadowMapSize.copy(O.mapSize).multiply(O.getFrameExtents()),n.sunShadow[p]=H,n.sunShadowMap[p]=Y;const W=O.getViewportCount();for(let rt=0;rt<W;rt++)n.sunShadowMatrix[v+rt]=O.getMatrix(rt),n.sunShadowCascade[v+rt]=O._cascadeData[rt];v+=W,p++}n.sun[f]=q,f++}else if(w.isDirectionalLight){const q=t.get(w);if(q.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const O=w.shadow,H=e.get(w);H.shadowIntensity=O.intensity,H.shadowBias=O.bias,H.shadowNormalBias=O.normalBias,H.shadowRadius=O.radius,H.shadowMapSize=O.mapSize,n.directionalShadow[m]=H,n.directionalShadowMap[m]=Y,n.directionalShadowMatrix[m]=w.shadow.matrix,E++}n.directional[m]=q,m++}else if(w.isSpotLight){const q=t.get(w);q.position.setFromMatrixPosition(w.matrixWorld),q.color.copy(N).multiplyScalar(F),q.distance=B,q.coneCos=Math.cos(w.angle),q.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),q.decay=w.decay,n.spot[_]=q;const O=w.shadow;if(w.map&&(n.spotLightMap[S]=w.map,S++,O.updateMatrices(w),w.castShadow&&P++),n.spotLightMatrix[_]=O.matrix,w.castShadow){const H=e.get(w);H.shadowIntensity=O.intensity,H.shadowBias=O.bias,H.shadowNormalBias=O.normalBias,H.shadowRadius=O.radius,H.shadowMapSize=O.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=Y,M++}_++}else if(w.isRectAreaLight){const q=t.get(w);q.color.copy(N).multiplyScalar(F),q.halfWidth.set(w.width*.5,0,0),q.halfHeight.set(0,w.height*.5,0),n.rectArea[x]=q,x++}else if(w.isPointLight){const q=t.get(w);if(q.color.copy(w.color).multiplyScalar(w.intensity),q.distance=w.distance,q.decay=w.decay,w.castShadow){const O=w.shadow,H=e.get(w);H.shadowIntensity=O.intensity,H.shadowBias=O.bias,H.shadowNormalBias=O.normalBias,H.shadowRadius=O.radius,H.shadowMapSize=O.mapSize,H.shadowCameraNear=O.camera.near,H.shadowCameraFar=O.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=w.shadow.matrix,b++}n.point[g]=q,g++}else if(w.isHemisphereLight){const q=t.get(w);q.skyColor.copy(w.color).multiplyScalar(F),q.groundColor.copy(w.groundColor).multiplyScalar(F),n.hemi[y]=q,y++}}x>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=wt.LTC_FLOAT_1,n.rectAreaLTC2=wt.LTC_FLOAT_2):(n.rectAreaLTC1=wt.LTC_HALF_1,n.rectAreaLTC2=wt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const L=n.hash;(L.sunLength!==f||L.directionalLength!==m||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==x||L.hemiLength!==y||L.numSunShadows!==p||L.numDirectionalShadows!==E||L.numPointShadows!==b||L.numSpotShadows!==M||L.numSpotMaps!==S||L.numLightProbes!==A)&&(n.sun.length=f,n.directional.length=m,n.spot.length=_,n.rectArea.length=x,n.point.length=g,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=M,n.spotShadowMap.length=M,n.spotLightMatrix.length=M+S-P,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=A,L.sunLength=f,L.directionalLength=m,L.pointLength=g,L.spotLength=_,L.rectAreaLength=x,L.hemiLength=y,L.numSunShadows=p,L.numDirectionalShadows=E,L.numPointShadows=b,L.numSpotShadows=M,L.numSpotMaps=S,L.numLightProbes=A,n.version=n_++)}function l(c,u){let d=0,h=0,f=0,p=0,v=0,m=0;const g=u.matrixWorldInverse;for(let _=0,x=c.length;_<x;_++){const y=c[_];if(y.isSunLight){const E=n.sun[d];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(g),d++}else if(y.isDirectionalLight){const E=n.directional[h];E.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(g),h++}else if(y.isSpotLight){const E=n.spot[p];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(g),p++}else if(y.isRectAreaLight){const E=n.rectArea[v];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(g),o.identity(),s.copy(y.matrixWorld),s.premultiply(g),o.extractRotation(s),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){const E=n.point[f];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){const E=n.hemi[m];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function Gc(r){const t=new s_(r),e=[],n=[],i=[];function s(d){u.camera=d,e.length=0,n.length=0,i.length=0}function o(d){d.isLightProbeGrid?i.push(d):e.push(d)}function a(d){n.push(d)}function l(){t.setup(e),i.sort((d,h)=>d.priority-h.priority||d.id-h.id)}function c(d){t.setupView(e,d)}const u={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function r_(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new Gc(r),t.set(i,[a])):s>=o.length?(a=new Gc(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const o_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,a_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,l_=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],c_=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Hc=new me,Rs=new k,Wo=new k;function h_(r,t,e){let n=new Zs;const i=new Gt,s=new Gt,o=new Te,a=new _f,l=new vf,c={},u=e.maxTextureSize,d={[Mi]:tn,[tn]:Mi,[Qe]:Qe},h=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:o_,fragmentShader:a_}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const p=new Ue;p.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Me(p,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bs;let g=this.type;this.render=function(b,M,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===Gu&&(qt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Bs);const P=r.getRenderTarget(),A=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),I=r.state;I.setBlending(as),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const D=g!==this.type;D&&M.traverse(function(w){w.material&&(Array.isArray(w.material)?w.material.forEach(N=>N.needsUpdate=!0):w.material.needsUpdate=!0)});for(let w=0,N=b.length;w<N;w++){const F=b[w],B=F.shadow;if(B===void 0){qt("WebGLShadowMap:",F,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const Y=B.getFrameExtents();i.multiply(Y),s.copy(B.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/Y.x),i.x=s.x*Y.x,B.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/Y.y),i.y=s.y*Y.y,B.mapSize.y=s.y));const q=r.state.buffers.depth.getReversed();if(B.camera._reversedDepth=q,B.map===null||D===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Fs){if(F.isPointLight){qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new xn(i.x,i.y,{format:Ui,type:Mn,minFilter:cn,magFilter:cn,generateMipmaps:!1}),B.map.texture.name=F.name+".shadowMap",B.map.depthTexture=new ps(i.x,i.y,An),B.map.depthTexture.name=F.name+".shadowMapDepth",B.map.depthTexture.format=yi,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=qe,B.map.depthTexture.magFilter=qe}else F.isPointLight?(B.map=new vl(i.x),B.map.depthTexture=new Qh(i.x,Wn)):(B.map=new xn(i.x,i.y),B.map.depthTexture=new ps(i.x,i.y,Wn)),B.map.depthTexture.name=F.name+".shadowMap",B.map.depthTexture.format=yi,this.type===Bs?(B.map.depthTexture.compareFunction=q?kh:zh,B.map.depthTexture.minFilter=cn,B.map.depthTexture.magFilter=cn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=qe,B.map.depthTexture.magFilter=qe);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==i.x||B.map.height!==i.y)&&B.map.setSize(i.x,i.y);const O=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();F.isPointLight!==!0&&B.updateMatrices(F,S);const H=(B.camera.layers.mask&4294967294)!==0?B.camera.layers:S.layers;for(let W=0;W<O;W++){const rt=B.getCamera(W);if(F.isPointLight){const X=B.camera,J=B.matrix,nt=F.distance||X.far;nt!==X.far&&(X.far=nt,X.updateProjectionMatrix()),Rs.setFromMatrixPosition(F.matrixWorld),X.position.copy(Rs),Wo.copy(X.position),Wo.add(l_[W]),X.up.copy(c_[W]),X.lookAt(Wo),X.updateMatrixWorld(),J.makeTranslation(-Rs.x,-Rs.y,-Rs.z),Hc.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Hc,X.coordinateSystem,X.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)r.setRenderTarget(B.map,W),r.clear();else{W===0&&(r.setRenderTarget(B.map),r.clear());const X=B.getViewport(W);o.set(s.x*X.x,s.y*X.y,s.x*X.z,s.y*X.w),I.viewport(o)}n=B.getFrustum(W),y(M,S,rt,F,H,this.type)}B.isPointLightShadow!==!0&&this.type===Fs&&_(B,S),B.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(P,A,L)};function _(b,M){const S=t.update(v);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new xn(i.x,i.y,{format:Ui,type:Mn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(M,null,S,h,v,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(M,null,S,f,v,null)}function x(b,M,S,P){let A=null;const L=S.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)A=L;else if(A=S.isPointLight===!0?l:a,r.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){const I=A.uuid,D=M.uuid;let w=c[I];w===void 0&&(w={},c[I]=w);let N=w[D];N===void 0&&(N=A.clone(),w[D]=N,M.addEventListener("dispose",E)),A=N}if(A.visible=M.visible,A.wireframe=M.wireframe,P===Fs?A.side=M.shadowSide!==null?M.shadowSide:M.side:A.side=M.shadowSide!==null?M.shadowSide:d[M.side],A.alphaMap=M.alphaMap,A.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,A.map=M.map,A.clipShadows=M.clipShadows,A.clippingPlanes=M.clippingPlanes,A.clipIntersection=M.clipIntersection,A.displacementMap=M.displacementMap,A.displacementScale=M.displacementScale,A.displacementBias=M.displacementBias,A.wireframeLinewidth=M.wireframeLinewidth,A.linewidth=M.linewidth,S.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const I=r.properties.get(A);I.light=S}return A}function y(b,M,S,P,A,L){if(b.visible===!1)return;if(b.layers.test(A)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&L===Fs)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,b.matrixWorld);const w=t.update(b),N=b.material;if(Array.isArray(N)){const F=w.groups;for(let B=0,Y=F.length;B<Y;B++){const q=F[B],O=N[q.materialIndex];if(O&&O.visible){const H=x(b,O,P,L);b.onBeforeShadow(r,b,M,S,w,H,q),r.renderBufferDirect(S,null,w,H,b,q),b.onAfterShadow(r,b,M,S,w,H,q)}}}else if(N.visible){const F=x(b,N,P,L);b.onBeforeShadow(r,b,M,S,w,F,null),r.renderBufferDirect(S,null,w,F,b,null),b.onAfterShadow(r,b,M,S,w,F,null)}}const D=b.children;for(let w=0,N=D.length;w<N;w++)y(D[w],M,S,P,A,L)}function E(b){b.target.removeEventListener("dispose",E);for(const S in c){const P=c[S],A=b.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}function u_(r,t){function e(){let G=!1;const st=new Te;let Q=null;const vt=new Te(0,0,0,0);return{setMask:function(ft){Q!==ft&&!G&&(r.colorMask(ft,ft,ft,ft),Q=ft)},setLocked:function(ft){G=ft},setClear:function(ft,gt,Bt,Qt,ut){ut===!0&&(ft*=Qt,gt*=Qt,Bt*=Qt),st.set(ft,gt,Bt,Qt),vt.equals(st)===!1&&(r.clearColor(ft,gt,Bt,Qt),vt.copy(st))},reset:function(){G=!1,Q=null,vt.set(-1,0,0,0)}}}function n(){let G=!1,st=!1,Q=null,vt=null,ft=null;return{setReversed:function(gt){if(st!==gt){const Bt=t.get("EXT_clip_control");gt?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),st=gt;const Qt=ft;ft=null,this.setClear(Qt)}},getReversed:function(){return st},setTest:function(gt){gt?at(r.DEPTH_TEST):St(r.DEPTH_TEST)},setMask:function(gt){Q!==gt&&!G&&(r.depthMask(gt),Q=gt)},setFunc:function(gt){if(st&&(gt=yd[gt]),vt!==gt){switch(gt){case ia:r.depthFunc(r.NEVER);break;case sa:r.depthFunc(r.ALWAYS);break;case ra:r.depthFunc(r.LESS);break;case Hs:r.depthFunc(r.LEQUAL);break;case oa:r.depthFunc(r.EQUAL);break;case aa:r.depthFunc(r.GEQUAL);break;case la:r.depthFunc(r.GREATER);break;case ca:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}vt=gt}},setLocked:function(gt){G=gt},setClear:function(gt){ft!==gt&&(ft=gt,st&&(gt=1-gt),r.clearDepth(gt))},reset:function(){G=!1,Q=null,vt=null,ft=null,st=!1}}}function i(){let G=!1,st=null,Q=null,vt=null,ft=null,gt=null,Bt=null,Qt=null,ut=null;return{setTest:function(kt){G||(kt?at(r.STENCIL_TEST):St(r.STENCIL_TEST))},setMask:function(kt){st!==kt&&!G&&(r.stencilMask(kt),st=kt)},setFunc:function(kt,jt,Et){(Q!==kt||vt!==jt||ft!==Et)&&(r.stencilFunc(kt,jt,Et),Q=kt,vt=jt,ft=Et)},setOp:function(kt,jt,Et){(gt!==kt||Bt!==jt||Qt!==Et)&&(r.stencilOp(kt,jt,Et),gt=kt,Bt=jt,Qt=Et)},setLocked:function(kt){G=kt},setClear:function(kt){ut!==kt&&(r.clearStencil(kt),ut=kt)},reset:function(){G=!1,st=null,Q=null,vt=null,ft=null,gt=null,Bt=null,Qt=null,ut=null}}}const s=new e,o=new n,a=new i;let l={};const c=new WeakMap;let u={},d={},h={},f=new WeakMap,p=[],v=null,m=!1,g=null,_=null,x=null,y=null,E=null,b=null,M=null,S=new Xt(0,0,0),P=0,A=!1,L=null,I=null,D=null,w=null,N=null;const F=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Y=0;const q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(q)[1]),B=Y>=1):q.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),B=Y>=2);let O=null,H={};const W=r.getParameter(r.SCISSOR_BOX),rt=r.getParameter(r.VIEWPORT),X=new Te().fromArray(W),J=new Te().fromArray(rt);function nt(G,st,Q,vt){const ft=new Uint8Array(4),gt=r.createTexture();r.bindTexture(G,gt),r.texParameteri(G,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(G,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Bt=0;Bt<Q;Bt++)G===r.TEXTURE_3D||G===r.TEXTURE_2D_ARRAY?r.texImage3D(st,0,r.RGBA,1,1,vt,0,r.RGBA,r.UNSIGNED_BYTE,ft):r.texImage2D(st+Bt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ft);return gt}const ct={};ct[r.TEXTURE_2D]=nt(r.TEXTURE_2D,r.TEXTURE_2D,1),ct[r.TEXTURE_CUBE_MAP]=nt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[r.TEXTURE_2D_ARRAY]=nt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ct[r.TEXTURE_3D]=nt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),at(r.DEPTH_TEST),o.setFunc(Hs),ye(!1),ie(Fl),at(r.CULL_FACE),Vt(as);function at(G){u[G]!==!0&&(r.enable(G),u[G]=!0)}function St(G){u[G]!==!1&&(r.disable(G),u[G]=!1)}function Pt(G,st){return h[G]!==st?(r.bindFramebuffer(G,st),h[G]=st,G===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=st),G===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=st),!0):!1}function dt(G,st){let Q=p,vt=!1;if(G){Q=f.get(st),Q===void 0&&(Q=[],f.set(st,Q));const ft=G.textures;if(Q.length!==ft.length||Q[0]!==r.COLOR_ATTACHMENT0){for(let gt=0,Bt=ft.length;gt<Bt;gt++)Q[gt]=r.COLOR_ATTACHMENT0+gt;Q.length=ft.length,vt=!0}}else Q[0]!==r.BACK&&(Q[0]=r.BACK,vt=!0);vt&&r.drawBuffers(Q)}function Ot(G){return v!==G?(r.useProgram(G),v=G,!0):!1}const Lt={[es]:r.FUNC_ADD,[Vu]:r.FUNC_SUBTRACT,[Wu]:r.FUNC_REVERSE_SUBTRACT};Lt[qu]=r.MIN,Lt[Xu]=r.MAX;const Ct={[Yu]:r.ZERO,[Zu]:r.ONE,[Ku]:r.SRC_COLOR,[bh]:r.SRC_ALPHA,[ed]:r.SRC_ALPHA_SATURATE,[Qu]:r.DST_COLOR,[Ju]:r.DST_ALPHA,[$u]:r.ONE_MINUS_SRC_COLOR,[Eh]:r.ONE_MINUS_SRC_ALPHA,[td]:r.ONE_MINUS_DST_COLOR,[ju]:r.ONE_MINUS_DST_ALPHA,[nd]:r.CONSTANT_COLOR,[id]:r.ONE_MINUS_CONSTANT_COLOR,[sd]:r.CONSTANT_ALPHA,[rd]:r.ONE_MINUS_CONSTANT_ALPHA};function Vt(G,st,Q,vt,ft,gt,Bt,Qt,ut,kt){if(G===as){m===!0&&(St(r.BLEND),m=!1);return}if(m===!1&&(at(r.BLEND),m=!0),G!==Hu){if(G!==g||kt!==A){if((_!==es||E!==es)&&(r.blendEquation(r.FUNC_ADD),_=es,E=es),kt)switch(G){case zs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ol:r.blendFunc(r.ONE,r.ONE);break;case Bl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case zl:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:ce("WebGLState: Invalid blending: ",G);break}else switch(G){case zs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ol:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Bl:ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zl:ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ce("WebGLState: Invalid blending: ",G);break}x=null,y=null,b=null,M=null,S.set(0,0,0),P=0,g=G,A=kt}return}ft=ft||st,gt=gt||Q,Bt=Bt||vt,(st!==_||ft!==E)&&(r.blendEquationSeparate(Lt[st],Lt[ft]),_=st,E=ft),(Q!==x||vt!==y||gt!==b||Bt!==M)&&(r.blendFuncSeparate(Ct[Q],Ct[vt],Ct[gt],Ct[Bt]),x=Q,y=vt,b=gt,M=Bt),(Qt.equals(S)===!1||ut!==P)&&(r.blendColor(Qt.r,Qt.g,Qt.b,ut),S.copy(Qt),P=ut),g=G,A=!1}function Wt(G,st){G.side===Qe?St(r.CULL_FACE):at(r.CULL_FACE);let Q=G.side===tn;st&&(Q=!Q),ye(Q),G.blending===zs&&G.transparent===!1?Vt(as):Vt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),s.setMask(G.colorWrite);const vt=G.stencilWrite;a.setTest(vt),vt&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),pt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?at(r.SAMPLE_ALPHA_TO_COVERAGE):St(r.SAMPLE_ALPHA_TO_COVERAGE)}function ye(G){L!==G&&(G?r.frontFace(r.CW):r.frontFace(r.CCW),L=G)}function ie(G){G!==zu?(at(r.CULL_FACE),G!==I&&(G===Fl?r.cullFace(r.BACK):G===ku?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):St(r.CULL_FACE),I=G}function it(G){G!==D&&(B&&r.lineWidth(G),D=G)}function pt(G,st,Q){G?(at(r.POLYGON_OFFSET_FILL),(w!==st||N!==Q)&&(w=st,N=Q,o.getReversed()&&(st=-st,Q=-Q),r.polygonOffset(st,Q))):St(r.POLYGON_OFFSET_FILL)}function bt(G){G?at(r.SCISSOR_TEST):St(r.SCISSOR_TEST)}function Rt(G){G===void 0&&(G=r.TEXTURE0+F-1),O!==G&&(r.activeTexture(G),O=G)}function Yt(G,st,Q){Q===void 0&&(O===null?Q=r.TEXTURE0+F-1:Q=O);let vt=H[Q];vt===void 0&&(vt={type:void 0,texture:void 0},H[Q]=vt),(vt.type!==G||vt.texture!==st)&&(O!==Q&&(r.activeTexture(Q),O=Q),r.bindTexture(G,st||ct[G]),vt.type=G,vt.texture=st)}function z(){const G=H[O];G!==void 0&&G.type!==void 0&&(r.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Kt(){try{r.compressedTexImage2D(...arguments)}catch(G){ce("WebGLState:",G)}}function oe(){try{r.compressedTexImage3D(...arguments)}catch(G){ce("WebGLState:",G)}}function Jt(){try{r.texSubImage2D(...arguments)}catch(G){ce("WebGLState:",G)}}function ht(){try{r.texSubImage3D(...arguments)}catch(G){ce("WebGLState:",G)}}function be(){try{r.compressedTexSubImage2D(...arguments)}catch(G){ce("WebGLState:",G)}}function zt(){try{r.compressedTexSubImage3D(...arguments)}catch(G){ce("WebGLState:",G)}}function Ht(){try{r.texStorage2D(...arguments)}catch(G){ce("WebGLState:",G)}}function U(){try{r.texStorage3D(...arguments)}catch(G){ce("WebGLState:",G)}}function T(){try{r.texImage2D(...arguments)}catch(G){ce("WebGLState:",G)}}function K(){try{r.texImage3D(...arguments)}catch(G){ce("WebGLState:",G)}}function lt(G){return d[G]!==void 0?d[G]:r.getParameter(G)}function ot(G,st){d[G]!==st&&(r.pixelStorei(G,st),d[G]=st)}function mt(G){X.equals(G)===!1&&(r.scissor(G.x,G.y,G.z,G.w),X.copy(G))}function Mt(G){J.equals(G)===!1&&(r.viewport(G.x,G.y,G.z,G.w),J.copy(G))}function tt(G,st){let Q=c.get(st);Q===void 0&&(Q=new WeakMap,c.set(st,Q));let vt=Q.get(G);vt===void 0&&(vt=r.getUniformBlockIndex(st,G.name),r.uniformBlockBinding(st,vt,vt),Q.set(G,vt))}function et(G,st,Q){const ft=c.get(st).get(G);l[ft]!==Q&&(r.bindBufferBase(r.UNIFORM_BUFFER,ft,Q),l[ft]=Q)}function _t(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),u={},d={},O=null,H={},h={},l={},f=new WeakMap,p=[],v=null,m=!1,g=null,_=null,x=null,y=null,E=null,b=null,M=null,S=new Xt(0,0,0),P=0,A=!1,L=null,I=null,D=null,w=null,N=null,X.set(0,0,r.canvas.width,r.canvas.height),J.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:at,disable:St,bindFramebuffer:Pt,drawBuffers:dt,useProgram:Ot,setBlending:Vt,setMaterial:Wt,setFlipSided:ye,setCullFace:ie,setLineWidth:it,setPolygonOffset:pt,setScissorTest:bt,activeTexture:Rt,bindTexture:Yt,unbindTexture:z,compressedTexImage2D:Kt,compressedTexImage3D:oe,texImage2D:T,texImage3D:K,pixelStorei:ot,getParameter:lt,updateUBOMapping:tt,uniformBlockBinding:et,texStorage2D:Ht,texStorage3D:U,texSubImage2D:Jt,texSubImage3D:ht,compressedTexSubImage2D:be,compressedTexSubImage3D:zt,scissor:mt,viewport:Mt,reset:_t}}function d_(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Gt,u=new WeakMap,d=new Set;let h;const f=new WeakMap,p=new Set,v=new FinalizationRegistry(U=>p.delete(U));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(U,T){return m?new OffscreenCanvas(U,T):Xs("canvas")}function _(U,T,K){let lt=1;const ot=Ht(U);if((ot.width>K||ot.height>K)&&(lt=K/Math.max(ot.width,ot.height)),lt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const mt=Math.floor(lt*ot.width),Mt=Math.floor(lt*ot.height);h===void 0&&(h=g(mt,Mt));const tt=T?g(mt,Mt):h;return tt.width=mt,tt.height=Mt,tt.getContext("2d").drawImage(U,0,0,mt,Mt),qt("WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+mt+"x"+Mt+")."),tt}else return"data"in U&&qt("WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),U;return U}function x(U){return U.generateMipmaps}function y(U){r.generateMipmap(U)}function E(U){return U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?r.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function b(U,T,K,lt,ot,mt=!1){if(U!==null){if(r[U]!==void 0)return r[U];qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Mt;lt&&(Mt=t.get("EXT_texture_norm16"),Mt||qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let tt=T;if(T===r.RED&&(K===r.FLOAT&&(tt=r.R32F),K===r.HALF_FLOAT&&(tt=r.R16F),K===r.UNSIGNED_BYTE&&(tt=r.R8),K===r.UNSIGNED_SHORT&&Mt&&(tt=Mt.R16_EXT),K===r.SHORT&&Mt&&(tt=Mt.R16_SNORM_EXT)),T===r.RED_INTEGER&&(K===r.UNSIGNED_BYTE&&(tt=r.R8UI),K===r.UNSIGNED_SHORT&&(tt=r.R16UI),K===r.UNSIGNED_INT&&(tt=r.R32UI),K===r.BYTE&&(tt=r.R8I),K===r.SHORT&&(tt=r.R16I),K===r.INT&&(tt=r.R32I)),T===r.RG&&(K===r.FLOAT&&(tt=r.RG32F),K===r.HALF_FLOAT&&(tt=r.RG16F),K===r.UNSIGNED_BYTE&&(tt=r.RG8),K===r.UNSIGNED_SHORT&&Mt&&(tt=Mt.RG16_EXT),K===r.SHORT&&Mt&&(tt=Mt.RG16_SNORM_EXT)),T===r.RG_INTEGER&&(K===r.UNSIGNED_BYTE&&(tt=r.RG8UI),K===r.UNSIGNED_SHORT&&(tt=r.RG16UI),K===r.UNSIGNED_INT&&(tt=r.RG32UI),K===r.BYTE&&(tt=r.RG8I),K===r.SHORT&&(tt=r.RG16I),K===r.INT&&(tt=r.RG32I)),T===r.RGB_INTEGER&&(K===r.UNSIGNED_BYTE&&(tt=r.RGB8UI),K===r.UNSIGNED_SHORT&&(tt=r.RGB16UI),K===r.UNSIGNED_INT&&(tt=r.RGB32UI),K===r.BYTE&&(tt=r.RGB8I),K===r.SHORT&&(tt=r.RGB16I),K===r.INT&&(tt=r.RGB32I)),T===r.RGBA_INTEGER&&(K===r.UNSIGNED_BYTE&&(tt=r.RGBA8UI),K===r.UNSIGNED_SHORT&&(tt=r.RGBA16UI),K===r.UNSIGNED_INT&&(tt=r.RGBA32UI),K===r.BYTE&&(tt=r.RGBA8I),K===r.SHORT&&(tt=r.RGBA16I),K===r.INT&&(tt=r.RGBA32I)),T===r.RGB&&(K===r.UNSIGNED_SHORT&&Mt&&(tt=Mt.RGB16_EXT),K===r.SHORT&&Mt&&(tt=Mt.RGB16_SNORM_EXT),K===r.UNSIGNED_INT_5_9_9_9_REV&&(tt=r.RGB9_E5),K===r.UNSIGNED_INT_10F_11F_11F_REV&&(tt=r.R11F_G11F_B10F)),T===r.RGBA){const et=mt?Yr:ae.getTransfer(ot);K===r.FLOAT&&(tt=r.RGBA32F),K===r.HALF_FLOAT&&(tt=r.RGBA16F),K===r.UNSIGNED_BYTE&&(tt=et===ve?r.SRGB8_ALPHA8:r.RGBA8),K===r.UNSIGNED_SHORT&&Mt&&(tt=Mt.RGBA16_EXT),K===r.SHORT&&Mt&&(tt=Mt.RGBA16_SNORM_EXT),K===r.UNSIGNED_SHORT_4_4_4_4&&(tt=r.RGBA4),K===r.UNSIGNED_SHORT_5_5_5_1&&(tt=r.RGB5_A1)}return(tt===r.R16F||tt===r.R32F||tt===r.RG16F||tt===r.RG32F||tt===r.RGBA16F||tt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function M(U,T){let K;return U?T===null||T===Wn||T===fs?K=r.DEPTH24_STENCIL8:T===An?K=r.DEPTH32F_STENCIL8:T===Ws&&(K=r.DEPTH24_STENCIL8,qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Wn||T===fs?K=r.DEPTH_COMPONENT24:T===An?K=r.DEPTH_COMPONENT32F:T===Ws&&(K=r.DEPTH_COMPONENT16),K}function S(U,T){return x(U)===!0||U.isFramebufferTexture&&U.minFilter!==qe&&U.minFilter!==cn?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function P(U){const T=new WeakRef(U);n.get(U).__ref=T,p.add(T),v.register(U,T,T)}function A(U){const T=n.get(U).__ref;T!==void 0&&(p.delete(T),v.unregister(T))}function L(U){D(U.target)}function I(U){w(U.target)}function D(U){U.removeEventListener("dispose",L),A(U),F(U),U.isVideoTexture&&u.delete(U),U.isHTMLTexture&&d.delete(U)}function w(U){U.removeEventListener("dispose",I),A(U),Y(U)}function N(){for(const U of p){const T=U.deref();T!==void 0&&(T.isRenderTarget===!0?w(T):D(T))}p.clear(),d.clear()}function F(U){const T=n.get(U);if(T.__webglInit===void 0)return;const K=U.source,lt=f.get(K);if(lt){const ot=lt[T.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&B(U),Object.keys(lt).length===0&&f.delete(K)}n.remove(U)}function B(U){const T=n.get(U);r.deleteTexture(T.__webglTexture);const K=U.source,lt=f.get(K);delete lt[T.__cacheKey],o.memory.textures--}function Y(U){const T=n.get(U);T.__depthDisposeCallback&&T.__depthDisposeCallback();const K=U.depthTexture;if(K&&K.renderTarget===U&&D(K),U.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(T.__webglFramebuffer[ot]))for(let mt=0;mt<T.__webglFramebuffer[ot].length;mt++)r.deleteFramebuffer(T.__webglFramebuffer[ot][mt]);else r.deleteFramebuffer(T.__webglFramebuffer[ot]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[ot])}else{if(Array.isArray(T.__webglFramebuffer))for(let ot=0;ot<T.__webglFramebuffer.length;ot++)r.deleteFramebuffer(T.__webglFramebuffer[ot]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ot=0;ot<T.__webglColorRenderbuffer.length;ot++)T.__webglColorRenderbuffer[ot]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[ot]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const lt=U.textures;for(let ot=0,mt=lt.length;ot<mt;ot++){const Mt=n.get(lt[ot]);Mt.__webglTexture&&(r.deleteTexture(Mt.__webglTexture),o.memory.textures--),n.remove(lt[ot])}n.remove(U)}let q=0;function O(){q=0}function H(){return q}function W(U){q=U}function rt(){const U=q;return U>=i.maxTextures&&qt("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+i.maxTextures),q+=1,U}function X(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.mipmapsAutoUpdate),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function J(U,T){const K=n.get(U);if(U.isVideoTexture&&be(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&K.__version!==U.version){const lt=U.image;if(lt===null)qt("WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)qt("WebGLRenderer: Texture marked for update but image is incomplete");else{Wt(K,U,T);return}}else U.isExternalTexture&&(K.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,K.__webglTexture,r.TEXTURE0+T)}function nt(U,T){const K=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&K.__version!==U.version){Wt(K,U,T);return}else U.isExternalTexture&&(K.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,K.__webglTexture,r.TEXTURE0+T)}function ct(U,T){const K=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&K.__version!==U.version){Wt(K,U,T);return}e.bindTexture(r.TEXTURE_3D,K.__webglTexture,r.TEXTURE0+T)}function at(U,T){const K=n.get(U);if(U.version>0&&K.__version!==U.version){ye(K,U,T);return}e.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+T)}const St={[ds]:r.REPEAT,[ni]:r.CLAMP_TO_EDGE,[ha]:r.MIRRORED_REPEAT},Pt={[qe]:r.NEAREST,[ld]:r.NEAREST_MIPMAP_NEAREST,[sr]:r.NEAREST_MIPMAP_LINEAR,[cn]:r.LINEAR,[po]:r.LINEAR_MIPMAP_NEAREST,[_i]:r.LINEAR_MIPMAP_LINEAR},dt={[dd]:r.NEVER,[Gh]:r.ALWAYS,[fd]:r.LESS,[zh]:r.LEQUAL,[pd]:r.EQUAL,[kh]:r.GEQUAL,[md]:r.GREATER,[gd]:r.NOTEQUAL};function Ot(U,T){if(T.type===An&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===cn||T.magFilter===po||T.magFilter===sr||T.magFilter===_i||T.minFilter===cn||T.minFilter===po||T.minFilter===sr||T.minFilter===_i)&&qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,St[T.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,St[T.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,St[T.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,Pt[T.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,Pt[T.minFilter]),T.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,dt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===qe||T.minFilter!==sr&&T.minFilter!==_i||T.type===An&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const K=t.get("EXT_texture_filter_anisotropic");r.texParameterf(U,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Lt(U,T){let K=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",L),P(T));const lt=T.source;let ot=f.get(lt);ot===void 0&&(ot={},f.set(lt,ot));const mt=X(T);if(mt!==U.__cacheKey){ot[mt]===void 0&&(ot[mt]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,K=!0),ot[mt].usedTimes++;const Mt=ot[U.__cacheKey];Mt!==void 0&&(ot[U.__cacheKey].usedTimes--,Mt.usedTimes===0&&B(T)),U.__cacheKey=mt,U.__webglTexture=ot[mt].texture}return K}function Ct(U,T,K){return Math.floor(Math.floor(U/K)/T)}function Vt(U,T,K,lt){const mt=U.updateRanges;if(mt.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,K,lt,T.data);else{mt.sort((G,st)=>G.start-st.start);let Mt=0;for(let G=1;G<mt.length;G++){const st=mt[Mt],Q=mt[G],vt=st.start+st.count,ft=Ct(Q.start,T.width,4),gt=Ct(st.start,T.width,4);Q.start<=vt+1&&ft===gt&&Ct(Q.start+Q.count-1,T.width,4)===ft?st.count=Math.max(st.count,Q.start+Q.count-st.start):(++Mt,mt[Mt]=Q)}mt.length=Mt+1;const tt=e.getParameter(r.UNPACK_ROW_LENGTH),et=e.getParameter(r.UNPACK_SKIP_PIXELS),_t=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let G=0,st=mt.length;G<st;G++){const Q=mt[G],vt=Math.floor(Q.start/4),ft=Math.ceil(Q.count/4),gt=vt%T.width,Bt=Math.floor(vt/T.width),Qt=ft,ut=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,gt),e.pixelStorei(r.UNPACK_SKIP_ROWS,Bt),e.texSubImage2D(r.TEXTURE_2D,0,gt,Bt,Qt,ut,K,lt,T.data)}U.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,tt),e.pixelStorei(r.UNPACK_SKIP_PIXELS,et),e.pixelStorei(r.UNPACK_SKIP_ROWS,_t)}}function Wt(U,T,K){let lt=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(lt=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(lt=r.TEXTURE_3D);const ot=Lt(U,T),mt=T.source;e.bindTexture(lt,U.__webglTexture,r.TEXTURE0+K);const Mt=n.get(mt);if(mt.version!==Mt.__version||ot===!0){if(e.activeTexture(r.TEXTURE0+K),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const ut=ae.getPrimaries(ae.workingColorSpace),kt=T.colorSpace===ei?null:ae.getPrimaries(T.colorSpace),jt=T.colorSpace===ei||ut===kt?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt)}e.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment);let et=_(T.image,!1,i.maxTextureSize);et=zt(T,et);const _t=s.convert(T.format,T.colorSpace),G=s.convert(T.type);let st=b(T.internalFormat,_t,G,T.normalized,T.colorSpace,T.isVideoTexture);Ot(lt,T);let Q;const vt=T.mipmaps,ft=T.isVideoTexture!==!0,gt=Mt.__version===void 0||ot===!0,Bt=mt.dataReady,Qt=S(T,et);if(T.isDepthTexture)st=M(T.format===vi,T.type),gt&&(ft?e.texStorage2D(r.TEXTURE_2D,1,st,et.width,et.height):e.texImage2D(r.TEXTURE_2D,0,st,et.width,et.height,0,_t,G,null));else if(T.isDataTexture)if(vt.length>0){ft&&gt&&e.texStorage2D(r.TEXTURE_2D,Qt,st,vt[0].width,vt[0].height);for(let ut=0,kt=vt.length;ut<kt;ut++)Q=vt[ut],ft?Bt&&e.texSubImage2D(r.TEXTURE_2D,ut,0,0,Q.width,Q.height,_t,G,Q.data):e.texImage2D(r.TEXTURE_2D,ut,st,Q.width,Q.height,0,_t,G,Q.data);T.generateMipmaps=!1}else ft?(gt&&e.texStorage2D(r.TEXTURE_2D,Qt,st,et.width,et.height),Bt&&Vt(T,et,_t,G)):e.texImage2D(r.TEXTURE_2D,0,st,et.width,et.height,0,_t,G,et.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ft&&gt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Qt,st,vt[0].width,vt[0].height,et.depth);for(let ut=0,kt=vt.length;ut<kt;ut++)if(Q=vt[ut],T.format!==Hn)if(_t!==null)if(ft){if(Bt)if(T.layerUpdates.size>0){const jt=yc(Q.width,Q.height,T.format,T.type);for(const Et of T.layerUpdates){const _e=Q.data.subarray(Et*jt/Q.data.BYTES_PER_ELEMENT,(Et+1)*jt/Q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ut,0,0,Et,Q.width,Q.height,1,_t,_e)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ut,0,0,0,Q.width,Q.height,et.depth,_t,Q.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ut,st,Q.width,Q.height,et.depth,0,Q.data,0,0);else qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ft?Bt&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,ut,0,0,0,Q.width,Q.height,et.depth,_t,G,Q.data):e.texImage3D(r.TEXTURE_2D_ARRAY,ut,st,Q.width,Q.height,et.depth,0,_t,G,Q.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{ft&&gt&&e.texStorage2D(r.TEXTURE_2D,Qt,st,vt[0].width,vt[0].height);for(let ut=0,kt=vt.length;ut<kt;ut++)Q=vt[ut],T.format!==Hn?_t!==null?ft?Bt&&e.compressedTexSubImage2D(r.TEXTURE_2D,ut,0,0,Q.width,Q.height,_t,Q.data):e.compressedTexImage2D(r.TEXTURE_2D,ut,st,Q.width,Q.height,0,Q.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?Bt&&e.texSubImage2D(r.TEXTURE_2D,ut,0,0,Q.width,Q.height,_t,G,Q.data):e.texImage2D(r.TEXTURE_2D,ut,st,Q.width,Q.height,0,_t,G,Q.data)}else if(T.isDataArrayTexture)if(ft){if(gt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Qt,st,et.width,et.height,et.depth),Bt)if(T.layerUpdates.size>0){const ut=yc(et.width,et.height,T.format,T.type);for(const kt of T.layerUpdates){const jt=et.data.subarray(kt*ut/et.data.BYTES_PER_ELEMENT,(kt+1)*ut/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,kt,et.width,et.height,1,_t,G,jt)}T.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,_t,G,et.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,st,et.width,et.height,et.depth,0,_t,G,et.data);else if(T.isData3DTexture)ft?(gt&&e.texStorage3D(r.TEXTURE_3D,Qt,st,et.width,et.height,et.depth),Bt&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,_t,G,et.data)):e.texImage3D(r.TEXTURE_3D,0,st,et.width,et.height,et.depth,0,_t,G,et.data);else if(T.isFramebufferTexture){if(gt)if(ft)e.texStorage2D(r.TEXTURE_2D,Qt,st,et.width,et.height);else{let ut=et.width,kt=et.height;for(let jt=0;jt<Qt;jt++)e.texImage2D(r.TEXTURE_2D,jt,st,ut,kt,0,_t,G,null),ut>>=1,kt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in r){const ut=r.canvas;if(ut.hasAttribute("layoutsubtree")||ut.setAttribute("layoutsubtree","true"),et.parentNode!==ut){ut.appendChild(et),d.add(T),ut.onpaint=kt=>{const jt=kt.changedElements;for(const Et of d)jt.includes(Et.image)&&(Et.needsUpdate=!0)},ut.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,et);else{const jt=r.RGBA,Et=r.RGBA,_e=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,jt,Et,_e,et)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(vt.length>0){if(ft&&gt){const ut=Ht(vt[0]);e.texStorage2D(r.TEXTURE_2D,Qt,st,ut.width,ut.height)}for(let ut=0,kt=vt.length;ut<kt;ut++)Q=vt[ut],ft?Bt&&e.texSubImage2D(r.TEXTURE_2D,ut,0,0,_t,G,Q):e.texImage2D(r.TEXTURE_2D,ut,st,_t,G,Q);T.generateMipmaps=!1}else if(ft){if(gt){const ut=Ht(et);e.texStorage2D(r.TEXTURE_2D,Qt,st,ut.width,ut.height)}Bt&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,_t,G,et)}else e.texImage2D(r.TEXTURE_2D,0,st,_t,G,et);x(T)&&T.mipmapsAutoUpdate===!0&&y(lt),Mt.__version=mt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function ye(U,T,K){if(T.image.length!==6)return;const lt=Lt(U,T),ot=T.source;e.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+K);const mt=n.get(ot);if(ot.version!==mt.__version||lt===!0){e.activeTexture(r.TEXTURE0+K);const Mt=ae.getPrimaries(ae.workingColorSpace),tt=T.colorSpace===ei?null:ae.getPrimaries(T.colorSpace),et=T.colorSpace===ei||Mt===tt?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);const _t=T.isCompressedTexture||T.image[0].isCompressedTexture,G=T.image[0]&&T.image[0].isDataTexture,st=[];for(let Et=0;Et<6;Et++)!_t&&!G?st[Et]=_(T.image[Et],!0,i.maxCubemapSize):st[Et]=G?T.image[Et].image:T.image[Et],st[Et]=zt(T,st[Et]);const Q=st[0],vt=s.convert(T.format,T.colorSpace),ft=s.convert(T.type);let gt=b(T.internalFormat,vt,ft,T.normalized,T.colorSpace);const Bt=T.isVideoTexture!==!0,Qt=mt.__version===void 0||lt===!0,ut=ot.dataReady;let kt=S(T,Q);Ot(r.TEXTURE_CUBE_MAP,T);let jt;if(T.isDepthTexture){if(gt=M(T.format===vi,T.type),Qt)if(Bt)e.texStorage2D(r.TEXTURE_CUBE_MAP,1,gt,Q.width,Q.height);else for(let Et=0;Et<6;Et++)e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,gt,Q.width,Q.height,0,vt,ft,null)}else if(_t){Bt&&Qt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,kt,gt,Q.width,Q.height);for(let Et=0;Et<6;Et++){jt=st[Et].mipmaps;for(let _e=0;_e<jt.length;_e++){const Be=jt[_e];T.format!==Hn?vt!==null?Bt?ut&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,_e,0,0,Be.width,Be.height,vt,Be.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,_e,gt,Be.width,Be.height,0,Be.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?ut&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,_e,0,0,Be.width,Be.height,vt,ft,Be.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,_e,gt,Be.width,Be.height,0,vt,ft,Be.data)}}}else{if(jt=T.mipmaps,Bt&&Qt){jt.length>0&&kt++;const Et=Ht(st[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,kt,gt,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(G){Bt?ut&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,st[Et].width,st[Et].height,vt,ft,st[Et].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,gt,st[Et].width,st[Et].height,0,vt,ft,st[Et].data);for(let _e=0;_e<jt.length;_e++){const ci=jt[_e].image[Et].image;Bt?ut&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,_e+1,0,0,ci.width,ci.height,vt,ft,ci.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,_e+1,gt,ci.width,ci.height,0,vt,ft,ci.data)}}else{Bt?ut&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,vt,ft,st[Et]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,gt,vt,ft,st[Et]);for(let _e=0;_e<jt.length;_e++){const Be=jt[_e];Bt?ut&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,_e+1,0,0,vt,ft,Be.image[Et]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,_e+1,gt,vt,ft,Be.image[Et])}}}x(T)&&T.mipmapsAutoUpdate===!0&&y(r.TEXTURE_CUBE_MAP),mt.__version=ot.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function ie(U,T,K,lt,ot,mt){const Mt=s.convert(K.format,K.colorSpace),tt=s.convert(K.type),et=b(K.internalFormat,Mt,tt,K.normalized,K.colorSpace),_t=n.get(T),G=n.get(K);if(G.__renderTarget=T,!_t.__hasExternalTextures){const st=Math.max(1,T.width>>mt),Q=Math.max(1,T.height>>mt);ot===r.TEXTURE_3D||ot===r.TEXTURE_2D_ARRAY?e.texImage3D(ot,mt,et,st,Q,T.depth,0,Mt,tt,null):e.texImage2D(ot,mt,et,st,Q,0,Mt,tt,null)}e.bindFramebuffer(r.FRAMEBUFFER,U),ht(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,lt,ot,G.__webglTexture,0,Jt(T)):(ot===r.TEXTURE_2D||ot>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,lt,ot,G.__webglTexture,mt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function it(U,T,K){if(r.bindRenderbuffer(r.RENDERBUFFER,U),T.depthBuffer){const lt=T.depthTexture,ot=lt&&lt.isDepthTexture?lt.type:null,mt=M(T.stencilBuffer,ot),Mt=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ht(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Jt(T),mt,T.width,T.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,Jt(T),mt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,mt,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Mt,r.RENDERBUFFER,U)}else{const lt=T.textures;for(let ot=0;ot<lt.length;ot++){const mt=lt[ot],Mt=s.convert(mt.format,mt.colorSpace),tt=s.convert(mt.type),et=b(mt.internalFormat,Mt,tt,mt.normalized,mt.colorSpace);ht(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Jt(T),et,T.width,T.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,Jt(T),et,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,et,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function pt(U,T,K){const lt=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ot=n.get(T.depthTexture);ot.__renderTarget=T;const mt=lt?T.depthTexture.image[0]:T.depthTexture.image;(!ot.__webglTexture||mt.width!==T.width||mt.height!==T.height)&&(mt.width=T.width,mt.height=T.height,T.depthTexture.needsUpdate=!0),lt?at(T.depthTexture,0):J(T.depthTexture,0);const Mt=ot.__webglTexture,tt=Jt(T),et=lt?r.TEXTURE_CUBE_MAP_POSITIVE_X+K:r.TEXTURE_2D,_t=T.depthTexture.format===vi?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(T.depthTexture.format===yi)ht(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_t,et,Mt,0,tt):r.framebufferTexture2D(r.FRAMEBUFFER,_t,et,Mt,0);else if(T.depthTexture.format===vi)ht(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_t,et,Mt,0,tt):r.framebufferTexture2D(r.FRAMEBUFFER,_t,et,Mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function bt(U){const T=n.get(U),K=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const lt=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),lt){const ot=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,lt.removeEventListener("dispose",ot)};lt.addEventListener("dispose",ot),T.__depthDisposeCallback=ot}T.__boundDepthTexture=lt}if(U.depthTexture&&!T.__autoAllocateDepthBuffer)if(K)for(let lt=0;lt<6;lt++)pt(T.__webglFramebuffer[lt],U,lt);else U.texture.mipmaps.length>0?pt(T.__webglFramebuffer[0],U,0):pt(T.__webglFramebuffer,U,0);else if(K){T.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[lt]),T.__webglDepthbuffer[lt]===void 0)T.__webglDepthbuffer[lt]=r.createRenderbuffer(),it(T.__webglDepthbuffer[lt],U,!1);else{const ot=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,mt=T.__webglDepthbuffer[lt];r.bindRenderbuffer(r.RENDERBUFFER,mt),r.framebufferRenderbuffer(r.FRAMEBUFFER,ot,r.RENDERBUFFER,mt)}}else if(U.texture.mipmaps.length>0?e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),it(T.__webglDepthbuffer,U,!1);else{const ot=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,mt=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,mt),r.framebufferRenderbuffer(r.FRAMEBUFFER,ot,r.RENDERBUFFER,mt)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Rt(U,T,K){const lt=n.get(U);T!==void 0&&ie(lt.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),K!==void 0&&bt(U)}function Yt(U){const T=U.texture,K=n.get(U),lt=n.get(T);U.addEventListener("dispose",I),P(U);const ot=U.textures,mt=U.isWebGLCubeRenderTarget===!0,Mt=ot.length>1;if(Mt||(lt.__webglTexture===void 0&&(lt.__webglTexture=r.createTexture()),lt.__version=T.version,o.memory.textures++),mt){K.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(T.mipmaps.length>0){K.__webglFramebuffer[tt]=[];for(let et=0;et<T.mipmaps.length;et++)K.__webglFramebuffer[tt][et]=r.createFramebuffer()}else K.__webglFramebuffer[tt]=r.createFramebuffer()}else{if(T.mipmaps.length>0){K.__webglFramebuffer=[];for(let tt=0;tt<T.mipmaps.length;tt++)K.__webglFramebuffer[tt]=r.createFramebuffer()}else K.__webglFramebuffer=r.createFramebuffer();if(Mt)for(let tt=0,et=ot.length;tt<et;tt++){const _t=n.get(ot[tt]);_t.__webglTexture===void 0&&(_t.__webglTexture=r.createTexture(),o.memory.textures++)}if(U.samples>0&&ht(U)===!1){K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let tt=0;tt<ot.length;tt++){const et=ot[tt];K.__webglColorRenderbuffer[tt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,K.__webglColorRenderbuffer[tt]);const _t=s.convert(et.format,et.colorSpace),G=s.convert(et.type),st=b(et.internalFormat,_t,G,et.normalized,et.colorSpace,U.isXRRenderTarget===!0),Q=Jt(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,Q,st,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+tt,r.RENDERBUFFER,K.__webglColorRenderbuffer[tt])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),it(K.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(mt){e.bindTexture(r.TEXTURE_CUBE_MAP,lt.__webglTexture),Ot(r.TEXTURE_CUBE_MAP,T);for(let tt=0;tt<6;tt++)if(T.mipmaps.length>0)for(let et=0;et<T.mipmaps.length;et++)ie(K.__webglFramebuffer[tt][et],U,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,et);else ie(K.__webglFramebuffer[tt],U,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);x(T)?y(r.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}else if(Mt){for(let tt=0,et=ot.length;tt<et;tt++){const _t=ot[tt],G=n.get(_t);let st=r.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(st=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(st,G.__webglTexture),Ot(st,_t),ie(K.__webglFramebuffer,U,_t,r.COLOR_ATTACHMENT0+tt,st,0),x(_t)&&y(st)}e.unbindTexture()}else{let tt=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(tt=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(tt,lt.__webglTexture),Ot(tt,T),T.mipmaps.length>0)for(let et=0;et<T.mipmaps.length;et++)ie(K.__webglFramebuffer[et],U,T,r.COLOR_ATTACHMENT0,tt,et);else ie(K.__webglFramebuffer,U,T,r.COLOR_ATTACHMENT0,tt,0);x(T)?y(tt):T.mipmaps.length>0&&r.texParameteri(tt,r.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}U.depthBuffer&&bt(U)}function z(U){const T=U.textures;for(let K=0,lt=T.length;K<lt;K++){const ot=T[K];if(x(ot)&&ot.mipmapsAutoUpdate===!0){const mt=E(U),Mt=n.get(ot).__webglTexture;e.bindTexture(mt,Mt),y(mt),e.unbindTexture()}}}const Kt=[];function oe(U){if(U.samples>0){if(ht(U)===!1){const T=U.textures,K=U.width,lt=U.height;let ot=r.COLOR_BUFFER_BIT;const mt=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Mt=n.get(U),tt=T.length>1;if(tt)for(let _t=0;_t<T.length;_t++)e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),U.texture.mipmaps.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let _t=0;_t<T.length;_t++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ot|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ot|=r.STENCIL_BUFFER_BIT)),tt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Mt.__webglColorRenderbuffer[_t]);const G=n.get(T[_t]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,G,0)}r.blitFramebuffer(0,0,K,lt,0,0,K,lt,ot,r.NEAREST),l===!0&&(Kt.length=0,Kt.push(r.COLOR_ATTACHMENT0+_t),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&Kt.push(mt),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Kt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),tt)for(let _t=0;_t<T.length;_t++){e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.RENDERBUFFER,Mt.__webglColorRenderbuffer[_t]);const G=n.get(T[_t]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.TEXTURE_2D,G,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&l){const T=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function Jt(U){return Math.min(i.maxSamples,U.samples)}function ht(U){const T=n.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function be(U){const T=o.render.frame;u.get(U)!==T&&(u.set(U,T),U.update())}function zt(U,T){const K=U.colorSpace,lt=U.format,ot=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||K!==Xr&&K!==ei&&(ae.getTransfer(K)===ve?(lt!==Hn||ot!==dn)&&qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ce("WebGLTextures: Unsupported texture color space:",K)),T}function Ht(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=rt,this.resetTextureUnits=O,this.getTextureUnits=H,this.setTextureUnits=W,this.setTexture2D=J,this.setTexture2DArray=nt,this.setTexture3D=ct,this.setTextureCube=at,this.rebindTextures=Rt,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=ht,this.dispose=N}function f_(r,t){function e(n,i=ei){let s;const o=ae.getTransfer(i);if(n===dn)return r.UNSIGNED_BYTE;if(n===ja)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Qa)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Uh)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Fh)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Dh)return r.BYTE;if(n===Nh)return r.SHORT;if(n===Ws)return r.UNSIGNED_SHORT;if(n===Ja)return r.INT;if(n===Wn)return r.UNSIGNED_INT;if(n===An)return r.FLOAT;if(n===Mn)return r.HALF_FLOAT;if(n===Oh)return r.ALPHA;if(n===Bh)return r.RGB;if(n===Hn)return r.RGBA;if(n===yi)return r.DEPTH_COMPONENT;if(n===vi)return r.DEPTH_STENCIL;if(n===tl)return r.RED;if(n===el)return r.RED_INTEGER;if(n===Ui)return r.RG;if(n===nl)return r.RG_INTEGER;if(n===il)return r.RGBA_INTEGER;if(n===Br||n===zr||n===kr||n===Gr)if(o===ve)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Br)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===kr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Gr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Br)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===kr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Gr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ua||n===da||n===fa||n===pa)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ua)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===da)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===pa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ma||n===ga||n===_a||n===va||n===xa||n===Wr||n===Ma)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ma||n===ga)return o===ve?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===_a)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===va)return s.COMPRESSED_R11_EAC;if(n===xa)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Wr)return s.COMPRESSED_RG11_EAC;if(n===Ma)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ya||n===Sa||n===ba||n===Ea||n===wa||n===Ta||n===Aa||n===Ra||n===Ca||n===Pa||n===La||n===Ia||n===Da||n===Na)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ya)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sa)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ba)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ea)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wa)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ta)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Aa)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ra)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ca)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pa)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===La)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ia)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Da)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Na)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ua||n===Fa||n===Oa)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Ua)return o===ve?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Oa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ba||n===za||n===qr||n===ka)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ba)return s.COMPRESSED_RED_RGTC1_EXT;if(n===za)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ka)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}const p_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,m_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class g_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new tu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Si({vertexShader:p_,fragmentShader:m_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Me(new li(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class __ extends bi{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,p=null;const v=typeof XRWebGLBinding<"u",m=new g_,g={},_=e.getContextAttributes();let x=null,y=null;const E=[],b=[],M=new Gt;let S=null,P=null;const A=new gn;A.viewport=new Te;const L=new gn;L.viewport=new Te;const I=[A,L],D=new Af;let w=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let J=E[X];return J===void 0&&(J=new yo,E[X]=J),J.getTargetRaySpace()},this.getControllerGrip=function(X){let J=E[X];return J===void 0&&(J=new yo,E[X]=J),J.getGripSpace()},this.getHand=function(X){let J=E[X];return J===void 0&&(J=new yo,E[X]=J),J.getHandSpace()};function F(X){const J=b.indexOf(X.inputSource);if(J===-1)return;const nt=E[J];nt!==void 0&&(nt.update(X.inputSource,X.frame,c||o),nt.dispatchEvent({type:X.type,data:X.inputSource}))}function B(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",Y);for(let X=0;X<E.length;X++){const J=b[X];J!==null&&(b[X]=null,E[X].disconnect(J))}w=null,N=null,m.reset();for(const X in g)delete g[X];if(t.setRenderTarget(x),f=null,h=null,d=null,i=null,y=null,rt.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(M.width,M.height,!1),P!==null){const X=P.camera;X.fov=P.fov,X.zoom=P.zoom,X.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(x=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",B),i.addEventListener("inputsourceschange",Y),_.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(M),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let nt=null,ct=null,at=null;_.depth&&(at=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=_.stencil?vi:yi,ct=_.stencil?fs:Wn);const St={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(St),i.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new xn(h.textureWidth,h.textureHeight,{format:Hn,type:dn,depthTexture:new ps(h.textureWidth,h.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const nt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,nt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new xn(f.framebufferWidth,f.framebufferHeight,{format:Hn,type:dn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),rt.setContext(i),rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(X){for(let J=0;J<X.removed.length;J++){const nt=X.removed[J],ct=b.indexOf(nt);ct>=0&&(b[ct]=null,E[ct].disconnect(nt))}for(let J=0;J<X.added.length;J++){const nt=X.added[J];let ct=b.indexOf(nt);if(ct===-1){for(let St=0;St<E.length;St++)if(St>=b.length){b.push(nt),ct=St;break}else if(b[St]===null){b[St]=nt,ct=St;break}if(ct===-1)break}const at=E[ct];at&&at.connect(nt)}}function q(X,J){J===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(J.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let J=X.near,nt=X.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(nt=m.depthFar)),D.near=L.near=A.near=J,D.far=L.far=A.far=nt,(w!==D.near||N!==D.far)&&(i.updateRenderState({depthNear:D.near,depthFar:D.far}),w=D.near,N=D.far),D.layers.mask=X.layers.mask|6,A.layers.mask=D.layers.mask&-5,L.layers.mask=D.layers.mask&-3;const ct=X.parent,at=D.cameras;q(D,ct);for(let St=0;St<at.length;St++)q(at[St],ct);D.projectionMatrix.copy(A.projectionMatrix),D.projectionMatrixInverse.copy(A.projectionMatrixInverse),P===null&&X.isPerspectiveCamera&&(P={camera:X,fov:X.fov,zoom:X.zoom}),O(X,D,ct)};function O(X,J,nt){nt===null?X.matrix.copy(J.matrixWorld):(X.matrix.copy(nt.matrixWorld),X.matrix.invert(),X.matrix.multiply(J.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ys*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(X){return g[X]};let H=null;function W(X,J){if(u=J.getViewerPose(c||o),p=J,u!==null){const nt=u.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let ct=!1;nt.length!==D.cameras.length&&(D.cameras.length=0,ct=!0);for(let dt=0;dt<nt.length;dt++){const Ot=nt[dt];let Lt=null;if(f!==null)Lt=f.getViewport(Ot);else{const Vt=d.getViewSubImage(h,Ot);Lt=Vt.viewport,dt===0&&(t.setRenderTargetTextures(y,Vt.colorTexture,Vt.depthStencilTexture),t.setRenderTarget(y))}let Ct=I[dt];Ct===void 0&&(Ct=new gn,Ct.layers.enable(dt),Ct.viewport=new Te,I[dt]=Ct),Ct.matrix.fromArray(Ot.transform.matrix),Ct.matrix.decompose(Ct.position,Ct.quaternion,Ct.scale),Ct.projectionMatrix.fromArray(Ot.projectionMatrix),Ct.projectionMatrixInverse.copy(Ct.projectionMatrix).invert(),Ct.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),dt===0&&(D.matrix.copy(Ct.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),ct===!0&&D.cameras.push(Ct)}const at=i.enabledFeatures;if(at&&at.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){d=n.getBinding();const dt=d.getDepthInformation(nt[0]);dt&&dt.isValid&&dt.texture&&m.init(dt,i.renderState)}if(at&&at.includes("camera-access")&&v){t.state.unbindTexture(),d=n.getBinding();for(let dt=0;dt<nt.length;dt++){const Ot=nt[dt].camera;if(Ot){let Lt=g[Ot];Lt||(Lt=new tu,g[Ot]=Lt);const Ct=d.getCameraImage(Ot);Lt.sourceTexture=Ct}}}}for(let nt=0;nt<E.length;nt++){const ct=b[nt],at=E[nt];ct!==null&&at!==void 0&&at.update(ct,J,c||o)}H&&H(X,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),p=null}const rt=new ru;rt.setAnimationLoop(W),this.setAnimationLoop=function(X){H=X},this.dispose=function(){}}}const v_=new me,mu=new $t;mu.set(-1,0,0,0,1,0,0,0,1);function x_(r,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,nu(r)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,_,x,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(m,g):g.isMeshLambertMaterial?(s(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(m,g),d(m,g)):g.isMeshPhongMaterial?(s(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(m,g),h(m,g),g.isMeshPhysicalMaterial&&f(m,g,y)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),v(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,_,x):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===tn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===tn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const _=t.get(g),x=_.envMap,y=_.envMapRotation;x&&(m.envMap.value=x,m.envMapRotation.value.setFromMatrix4(v_.makeRotationFromEuler(y)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(mu),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,_,x){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*_,m.scale.value=x*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function h(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,_){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===tn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function v(m,g){const _=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function M_(r,t,e,n){let i={},s={};function o(_,x){const y=x.program;n.uniformBlockBinding(_,y,i[_.id])}function a(_,x){let y=i[_.id];y===void 0&&(p(_),y=l(_),i[_.id]=y,_.addEventListener("dispose",m));const E=x.program;n.updateUBOMapping(_,E);const b=t.render.frame;s[_.id]!==b&&(c(_),s[_.id]=b)}function l(_){const x=r.createBuffer(),y=_.__size,E=_.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,y,E),r.bindBuffer(r.UNIFORM_BUFFER,null),x}function c(_){const x=i[_.id],y=_.uniforms,E=_.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let b=0,M=y.length;b<M;b++){const S=y[b];if(Array.isArray(S))for(let P=0,A=S.length;P<A;P++)u(S[P],b,P,E);else u(S,b,0,E)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function u(_,x,y,E){if(h(_,x,y,E)===!0){const b=_.__offset,M=_.value;if(Array.isArray(M)){let S=0;for(let P=0;P<M.length;P++){const A=M[P],L=v(A,!0);d(A,_.__data,S),S+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else d(M,_.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,b,_.__data)}}function d(_,x,y){typeof _=="number"||typeof _=="boolean"?x[y]=_:_.isMatrix3?(x[y]=_.elements[0],x[y+1]=_.elements[1],x[y+2]=_.elements[2],x[y+3]=0,x[y+4]=_.elements[3],x[y+5]=_.elements[4],x[y+6]=_.elements[5],x[y+7]=0,x[y+8]=_.elements[6],x[y+9]=_.elements[7],x[y+10]=_.elements[8],x[y+11]=0):ArrayBuffer.isView(_)?x.set(_.subarray(0,x.length-y),y):_.toArray(x,y)}function h(_,x,y,E){const b=_.value,M=x+"_"+y;if(Array.isArray(b)){E[M]===void 0&&(E[M]=[]);const S=E[M];let P=!1;for(let A=0;A<b.length;A++)f(b[A],S,A)===!0&&(P=!0);return P}return f(b,E,M)}function f(_,x,y){if(x[y]===void 0)return typeof _=="number"||typeof _=="boolean"?x[y]=_:ArrayBuffer.isView(_)?x[y]=_.slice():x[y]=_.clone(),!0;{const E=x[y];if(typeof _=="number"||typeof _=="boolean"){if(E!==_)return x[y]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(E.equals(_)===!1)return E.copy(_),!0}}return!1}function p(_){const x=_.uniforms;let y=0;const E=16;for(let M=0,S=x.length;M<S;M++){const P=Array.isArray(x[M])?x[M]:[x[M]];for(let A=0,L=P.length;A<L;A++){const I=P[A],D=Array.isArray(I.value)?I.value:[I.value],w=Array.isArray(x[M])||Array.isArray(I.value);let N=y;for(let B=0,Y=D.length;B<Y;B++){const q=D[B],O=v(q,w),H=y%E,W=H%O.boundary,rt=H+W;y+=W,rt!==0&&E-rt<O.storage&&(y+=E-rt),B===0&&(N=y),y+=O.storage}const F=I.type==="int"?Int32Array:I.type==="uint"?Uint32Array:Float32Array;I.__data=new F((y-N)/Float32Array.BYTES_PER_ELEMENT),I.__offset=N}}const b=y%E;return b>0&&(y+=E-b),_.__size=y,_.__cache={},this}function v(_,x){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=16,y.storage=48):_.isMatrix4?(y.boundary=16,y.storage=64):_.isTexture?qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(y.boundary=16,y.storage=_.byteLength):qt("WebGLRenderer: Unsupported uniform value type.",_),x===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(_){const x=_.target;x.removeEventListener("dispose",m),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function g(){for(const _ in i)r.deleteBuffer(i[_]);i={},s={}}return{bind:o,update:a,dispose:g}}const y_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Nn=null;function S_(){return Nn===null&&(Nn=new $h(y_,16,16,Ui,Mn),Nn.name="DFG_LUT",Nn.minFilter=cn,Nn.magFilter=cn,Nn.wrapS=ni,Nn.wrapT=ni,Nn.generateMipmaps=!1,Nn.needsUpdate=!0),Nn}class b_{constructor(t={}){const{canvas:e=xd(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=dn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const v=f,m=new Set([il,nl,el]),g=new Set([dn,Wn,Ws,fs,ja,Qa]),_=new Uint32Array(4),x=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]};let E=null,b=null;const M=[],S=[];let P=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let L=!1,I=null,D=null,w=null,N=null;this._outputColorSpace=Ge;let F=0,B=0,Y=null,q=-1,O=null;const H=new Te,W=new Te;let rt=null;const X=new Xt(0);let J=0,nt=e.width,ct=e.height,at=1,St=null,Pt=null;const dt=new Te(0,0,nt,ct),Ot=new Te(0,0,nt,ct);let Lt=!1;const Ct=new Zs,Vt=new cl;let Wt=!1,ye=!1;const ie=new me,it=new k,pt=new Te,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Rt=!1;function Yt(){return Y===null?at:1}let z=n;function Kt(R,V){return e.getContext(R,V)}let oe,Jt,ht,be,zt,Ht,U,T,K,lt,ot,mt,Mt,tt,et,_t,G,st,Q,vt,ft,gt,Bt;try{const R={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ka}`),e.addEventListener("webglcontextlost",kt,!1),e.addEventListener("webglcontextrestored",jt,!1),e.addEventListener("webglcontextcreationerror",Et,!1),z===null){const V="webgl2";if(z=Kt(V,R),z===null)throw Kt(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qt()}catch(R){throw e.removeEventListener("webglcontextlost",kt,!1),e.removeEventListener("webglcontextrestored",jt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),ce("WebGLRenderer: "+R.message),R}function Qt(){oe=new T0(z),oe.init(),ft=new f_(z,oe),Jt=new m0(z,oe,t,ft),ht=new u_(z,oe),Jt.reversedDepthBuffer&&h&&ht.buffers.depth.setReversed(!0),D=z.createFramebuffer(),w=z.createFramebuffer(),N=z.createFramebuffer(),be=new C0(z),zt=new Jg,Ht=new d_(z,oe,ht,zt,Jt,ft,be),U=new w0(A),T=new Lf(z),gt=new f0(z,T),K=new A0(z,T,be,gt),lt=new L0(z,K,T,gt,be),st=new P0(z,Jt,Ht),et=new g0(zt),ot=new $g(A,U,oe,Jt,gt,et),mt=new x_(A,zt),Mt=new Qg,tt=new r_(oe),G=new d0(A,U,ht,lt,p,l),_t=new h_(A,lt,Jt),Bt=new M_(z,be,Jt,ht),Q=new p0(z,oe,be),vt=new R0(z,oe,be),be.programs=ot.programs,A.capabilities=Jt,A.extensions=oe,A.properties=zt,A.renderLists=Mt,A.shadowMap=_t,A.state=ht,A.info=be}v!==dn&&(P=new D0(v,e.width,e.height,a,i,s));const ut=new __(A,z);this.xr=ut,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const R=oe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=oe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return at},this.setPixelRatio=function(R){R!==void 0&&(at=R,this.setSize(nt,ct,!1))},this.getSize=function(R){return R.set(nt,ct)},this.setSize=function(R,V,j=!0){if(ut.isPresenting){qt("WebGLRenderer: Can't change size while VR device is presenting.");return}nt=R,ct=V,e.width=Math.floor(R*at),e.height=Math.floor(V*at),j===!0&&(e.style.width=R+"px",e.style.height=V+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,R,V)},this.getDrawingBufferSize=function(R){return R.set(nt*at,ct*at).floor()},this.setDrawingBufferSize=function(R,V,j){nt=R,ct=V,at=j,e.width=Math.floor(R*j),e.height=Math.floor(V*j),this.setViewport(0,0,R,V)},this.setEffects=function(R){if(v===dn){ce("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let V=0;V<R.length;V++)if(R[V].isOutputPass===!0){qt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(H)},this.getViewport=function(R){return R.copy(dt)},this.setViewport=function(R,V,j,Z){R.isVector4?dt.set(R.x,R.y,R.z,R.w):dt.set(R,V,j,Z),ht.viewport(H.copy(dt).multiplyScalar(Yt()).round())},this.getScissor=function(R){return R.copy(Ot)},this.setScissor=function(R,V,j,Z){R.isVector4?Ot.set(R.x,R.y,R.z,R.w):Ot.set(R,V,j,Z),ht.scissor(W.copy(Ot).multiplyScalar(Yt()).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(R){ht.setScissorTest(Lt=R)},this.setOpaqueSort=function(R){St=R},this.setTransparentSort=function(R){Pt=R},this.getClearColor=function(R){return R.copy(G.getClearColor())},this.setClearColor=function(){G.setClearColor(...arguments)},this.getClearAlpha=function(){return G.getClearAlpha()},this.setClearAlpha=function(){G.setClearAlpha(...arguments)},this.clear=function(R=!0,V=!0,j=!0){let Z=0;if(R){let $=!1;if(Y!==null){const yt=Y.texture.format;$=m.has(yt)}if($){const yt=Y.texture.type,Dt=g.has(yt),xt=G.getClearColor(),Tt=G.getClearAlpha(),Ft=xt.r,Zt=xt.g,se=xt.b;Dt?(_[0]=Ft,_[1]=Zt,_[2]=se,_[3]=Tt,z.clearBufferuiv(z.COLOR,0,_)):(x[0]=Ft,x[1]=Zt,x[2]=se,x[3]=Tt,z.clearBufferiv(z.COLOR,0,x))}else Z|=z.COLOR_BUFFER_BIT}V&&(Z|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(Z|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&z.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),I=R},this.dispose=function(){e.removeEventListener("webglcontextlost",kt,!1),e.removeEventListener("webglcontextrestored",jt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),G.dispose(),Mt.dispose(),tt.dispose(),Ht.dispose(),zt.dispose(),U.dispose(),lt.dispose(),K.dispose(),gt.dispose(),Bt.dispose(),ot.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",Tl),ut.removeEventListener("sessionend",Al),wi.stop()};function kt(R){R.preventDefault(),Hl("WebGLRenderer: Context Lost."),L=!0}function jt(){Hl("WebGLRenderer: Context Restored."),L=!1;const R=be.autoReset,V=_t.enabled,j=_t.autoUpdate,Z=_t.needsUpdate,$=_t.type;Qt(),be.autoReset=R,_t.enabled=V,_t.autoUpdate=j,_t.needsUpdate=Z,_t.type=$}function Et(R){ce("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function _e(R){const V=R.target;V.removeEventListener("dispose",_e),Be(V)}function Be(R){ci(R),zt.remove(R)}function ci(R){const V=zt.get(R).programs;V!==void 0&&(V.forEach(function(j){ot.releaseProgram(j)}),R.isShaderMaterial&&ot.releaseShaderCache(R))}this.renderBufferDirect=function(R,V,j,Z,$,yt){V===null&&(V=bt);const Dt=$.isMesh&&$.matrixWorld.determinantAffine()<0,xt=Fu(R,V,j,Z,$);ht.setMaterial(Z,Dt);let Tt=j.index,Ft=1;if(Z.wireframe===!0){if(Tt=K.getWireframeAttribute(j),Tt===void 0)return;Ft=2}const Zt=j.drawRange,se=j.attributes.position;let Nt=Zt.start*Ft,re=(Zt.start+Zt.count)*Ft;yt!==null&&(Nt=Math.max(Nt,yt.start*Ft),re=Math.min(re,(yt.start+yt.count)*Ft)),Tt!==null?(Nt=Math.max(Nt,0),re=Math.min(re,Tt.count)):se!=null&&(Nt=Math.max(Nt,0),re=Math.min(re,se.count));const Ae=re-Nt;if(Ae<0||Ae===1/0)return;gt.setup($,Z,xt,j,Tt);let Se,xe=Q;if(Tt!==null&&(Se=T.get(Tt),xe=vt,xe.setIndex(Se)),$.isMesh)Z.wireframe===!0?(ht.setLineWidth(Z.wireframeLinewidth*Yt()),xe.setMode(z.LINES)):xe.setMode(z.TRIANGLES);else if($.isLine){let Ze=Z.linewidth;Ze===void 0&&(Ze=1),ht.setLineWidth(Ze*Yt()),$.isLineSegments?xe.setMode(z.LINES):$.isLineLoop?xe.setMode(z.LINE_LOOP):xe.setMode(z.LINE_STRIP)}else $.isPoints?xe.setMode(z.POINTS):$.isSprite&&xe.setMode(z.TRIANGLES);if($.isBatchedMesh)if(oe.get("WEBGL_multi_draw"))xe.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Ze=$._multiDrawStarts,Ut=$._multiDrawCounts,en=$._multiDrawCount,he=Tt?T.get(Tt).bytesPerElement:1,Ti=zt.get(Z).currentProgram.getUniforms();for(let Ke=0;Ke<en;Ke++)Ti.setValue(z,"_gl_DrawID",Ke),xe.render(Ze[Ke]/he,Ut[Ke])}else if($.isInstancedMesh)xe.renderInstances(Nt,Ae,$.count);else if(j.isInstancedBufferGeometry){const Ze=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ut=Math.min(j.instanceCount,Ze);xe.renderInstances(Nt,Ae,Ut)}else xe.render(Nt,Ae)};function wl(R,V,j,Z){I!==null&&R.isNodeMaterial&&I.setObject(Z,R),Wt===!0&&et.setState(R,j,!1),R.transparent===!0&&R.side===Qe&&R.forceSinglePass===!1?(R.side=tn,R.needsUpdate=!0,Ms(R,V,Z),R.side=Mi,R.needsUpdate=!0,Ms(R,V,Z),R.side=Qe):Ms(R,V,Z)}this.compile=function(R,V,j=null){j===null&&(j=R),I!==null&&I.renderStart(R,V,j),b=tt.get(j),b.init(V),S.push(b),j.traverseVisible(function($){$.isLight&&$.layers.test(V.layers)&&(b.pushLight($),$.castShadow&&b.pushShadow($))}),R!==j&&R.traverseVisible(function($){$.isLight&&$.layers.test(V.layers)&&(b.pushLight($),$.castShadow&&b.pushShadow($))}),b.setupLights(),I!==null&&I.updateLights(b.state.lightsArray),ye=this.localClippingEnabled,Wt=et.init(this.clippingPlanes,ye),Wt===!0&&et.setGlobalState(this.clippingPlanes,V),I!==null&&_t.render(b.state.shadowsArray,j,V);const Z=new Set;return R.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const yt=$.material;if(yt)if(Array.isArray(yt))for(let Dt=0;Dt<yt.length;Dt++){const xt=yt[Dt];wl(xt,j,V,$),Z.add(xt)}else wl(yt,j,V,$),Z.add(yt)}),b=S.pop(),I!==null&&I.renderEnd(),Z},this.compileAsync=function(R,V,j=null){const Z=this.compile(R,V,j);return new Promise($=>{function yt(){if(Z.forEach(function(Dt){const Tt=zt.get(Dt).currentProgram;(Tt===void 0||Tt.isReady())&&Z.delete(Dt)}),Z.size===0){$(R);return}setTimeout(yt,10)}oe.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let co=null;function Nu(R){co&&co(R)}function Tl(){wi.stop()}function Al(){wi.start()}const wi=new ru;wi.setAnimationLoop(Nu),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(R){co=R,ut.setAnimationLoop(R),R===null?wi.stop():wi.start()},ut.addEventListener("sessionstart",Tl),ut.addEventListener("sessionend",Al),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0){ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;I!==null&&I.renderStart(R,V);const j=ut.enabled===!0&&ut.isPresenting===!0,Z=P!==null&&(Y===null||j)&&P.begin(A,Y);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(V),V=ut.getCamera()),R.isScene===!0&&R.onBeforeRender(A,R,V,Y),b=tt.get(R,S.length),b.init(V),b.state.textureUnits=Ht.getTextureUnits(),S.push(b),ie.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),V.isArrayCamera?Vt.setFromArrayCamera(V):Ct.setFromProjectionMatrix(ie,Rn,V.reversedDepth),ye=this.localClippingEnabled,Wt=et.init(this.clippingPlanes,ye),E=Mt.get(R,M.length),E.init(),M.push(E),this.info.render.frame++,ut.enabled===!0&&ut.isPresenting===!0){const Dt=A.xr.getDepthSensingMesh();Dt!==null&&ho(Dt,V,-1/0,A.sortObjects)}ho(R,V,0,A.sortObjects),E.finish(),I!==null&&I.updateLights(b.state.lightsArray),A.sortObjects===!0&&E.sort(St,Pt),Rt=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,Rt&&G.addToRenderList(E,R),this.info.autoReset===!0&&this.info.reset(),Wt===!0&&et.beginShadows();const $=b.state.shadowsArray;if(_t.render($,R,V),Wt===!0&&et.endShadows(),(Z&&P.hasRenderPass())===!1){const Dt=E.opaque,xt=E.transmissive;if(b.setupLights(),V.isArrayCamera){const Tt=V.cameras;if(xt.length>0)for(let Ft=0,Zt=Tt.length;Ft<Zt;Ft++){const se=Tt[Ft];Cl(Dt,xt,R,se)}Rt&&G.render(R);for(let Ft=0,Zt=Tt.length;Ft<Zt;Ft++){const se=Tt[Ft];Rl(E,R,se,se.viewport)}}else xt.length>0&&Cl(Dt,xt,R,V),Rt&&G.render(R),Rl(E,R,V)}Y!==null&&B===0&&(Ht.updateMultisampleRenderTarget(Y),Ht.updateRenderTargetMipmap(Y)),Z&&P.end(A),R.isScene===!0&&R.onAfterRender(A,R,V),gt.resetDefaultState(),q=-1,O=null,S.pop(),S.length>0?(b=S[S.length-1],Ht.setTextureUnits(b.state.textureUnits),Wt===!0&&et.setGlobalState(A.clippingPlanes,b.state.camera)):b=null,M.pop(),M.length>0?E=M[M.length-1]:E=null,I!==null&&I.renderEnd()};function ho(R,V,j,Z){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)j=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLight)b.pushLight(R),R.castShadow&&b.pushShadow(R);else if(R.isSprite){const Dt=V.isArrayCamera?Vt:Ct;if(!R.frustumCulled||R.intersectsFrustum(Dt)){Z&&pt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ie);const xt=lt.update(R),Tt=R.material;Tt.visible&&E.push(R,xt,Tt,j,pt.z,null,V)}}else if(R.isMesh||R.isLine||R.isPoints){const Dt=V.isArrayCamera?Vt:Ct;if(!R.frustumCulled||R.intersectsFrustum(Dt)){const xt=lt.update(R),Tt=R.material;if(Z&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),pt.copy(R.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),pt.copy(xt.boundingSphere.center)),pt.applyMatrix4(R.matrixWorld).applyMatrix4(ie)),Array.isArray(Tt)){const Ft=xt.groups;for(let Zt=0,se=Ft.length;Zt<se;Zt++){const Nt=Ft[Zt],re=Tt[Nt.materialIndex];re&&re.visible&&E.push(R,xt,re,j,pt.z,Nt,V)}}else Tt.visible&&E.push(R,xt,Tt,j,pt.z,null,V)}}}const yt=R.children;for(let Dt=0,xt=yt.length;Dt<xt;Dt++)ho(yt[Dt],V,j,Z)}function Rl(R,V,j,Z){const{opaque:$,transmissive:yt,transparent:Dt}=R;b.setupLightsView(j),Wt===!0&&et.setGlobalState(A.clippingPlanes,j),Z&&ht.viewport(H.copy(Z)),$.length>0&&nr($,V,j),yt.length>0&&nr(yt,V,j),Dt.length>0&&nr(Dt,V,j),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function Cl(R,V,j,Z){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[Z.id]===void 0){const Nt=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[Z.id]=new xn(1,1,{generateMipmaps:!0,type:Nt?Mn:dn,minFilter:_i,samples:Math.max(4,Jt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ae.workingColorSpace})}const yt=b.state.transmissionRenderTarget[Z.id],Dt=Z.viewport||H;yt.setSize(Dt.z*A.transmissionResolutionScale,Dt.w*A.transmissionResolutionScale);const xt=A.getRenderTarget(),Tt=A.getActiveCubeFace(),Ft=A.getActiveMipmapLevel();A.setRenderTarget(yt),A.getClearColor(X),J=A.getClearAlpha(),J<1&&A.setClearColor(16777215,.5),A.clear(),Rt&&G.render(j);const Zt=A.toneMapping;A.toneMapping=si;const se=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),b.setupLightsView(Z),Wt===!0&&et.setGlobalState(A.clippingPlanes,Z),nr(R,j,Z),Ht.updateMultisampleRenderTarget(yt),Ht.updateRenderTargetMipmap(yt),oe.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let re=0,Ae=V.length;re<Ae;re++){const Se=V[re],{object:xe,geometry:Ze,material:Ut,group:en}=Se;if(Ut.side===Qe&&xe.layers.test(Z.layers)){const he=Ut.side;Ut.side=tn,Ut.needsUpdate=!0,Pl(xe,j,Z,Ze,Ut,en),Ut.side=he,Ut.needsUpdate=!0,Nt=!0}}Nt===!0&&(Ht.updateMultisampleRenderTarget(yt),Ht.updateRenderTargetMipmap(yt))}A.setRenderTarget(xt,Tt,Ft),A.setClearColor(X,J),se!==void 0&&(Z.viewport=se),A.toneMapping=Zt}function nr(R,V,j){const Z=V.isScene===!0?V.overrideMaterial:null;for(let $=0,yt=R.length;$<yt;$++){const Dt=R[$],{object:xt,geometry:Tt,group:Ft}=Dt;let Zt=Dt.material;Zt.allowOverride===!0&&Z!==null&&(Zt=Z),xt.layers.test(j.layers)&&Pl(xt,V,j,Tt,Zt,Ft)}}function Pl(R,V,j,Z,$,yt){I!==null&&$.isNodeMaterial&&I.setObject(R,$),R.onBeforeRender(A,V,j,Z,$,yt),R.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),$.onBeforeRender(A,V,j,Z,R,yt),$.transparent===!0&&$.side===Qe&&$.forceSinglePass===!1?($.side=tn,$.needsUpdate=!0,A.renderBufferDirect(j,V,Z,$,R,yt),$.side=Mi,$.needsUpdate=!0,A.renderBufferDirect(j,V,Z,$,R,yt),$.side=Qe):A.renderBufferDirect(j,V,Z,$,R,yt),R.onAfterRender(A,V,j,Z,$,yt)}function Ll(R){let V=0;for(const j of R)j.texture!==null&&V++;return V}function Ms(R,V,j){V.isScene!==!0&&(V=bt);const Z=zt.get(R),$=b.state.lights,yt=b.state.shadowsArray,Dt=$.state.version,xt=ot.getParameters(R,$.state,yt,V,j,b.state.lightProbeGridArray),Tt=ot.getProgramCacheKey(xt);let Ft=Z.programs;Z.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?V.environment:null,Z.fog=V.fog;const Zt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;Z.envMap=U.get(R.envMap||Z.environment,Zt),Z.envMapRotation=Z.environment!==null&&R.envMap===null?V.environmentRotation:R.envMapRotation,Ft===void 0&&(R.addEventListener("dispose",_e),Ft=new Map,Z.programs=Ft,Z.programVariants=new Map);let se=Ft.get(Tt);if(se!==void 0){if(Z.currentProgram===se&&Z.lightsStateVersion===Dt)return Dl(R,xt),se}else xt.uniforms=ot.getUniforms(R),I!==null&&R.isNodeMaterial&&I.build(R,j,xt),R.onBeforeCompile(xt,A),se=ot.acquireProgram(xt,Tt),Ft.set(Tt,se),Z.uniforms=xt.uniforms;const Nt=Z.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Nt.clippingPlanes=et.uniform),Dl(R,xt),Z.needsLights=Bu(R),Z.lightsStateVersion=Dt,Z.needsLights&&(Nt.ambientLightColor.value=$.state.ambient,Nt.lightProbe.value=$.state.probe,Nt.sunLights.value=$.state.sun,Nt.sunLightShadows.value=$.state.sunShadow,Nt.directionalLights.value=$.state.directional,Nt.directionalLightShadows.value=$.state.directionalShadow,Nt.spotLights.value=$.state.spot,Nt.spotLightShadows.value=$.state.spotShadow,Nt.rectAreaLights.value=$.state.rectArea,Nt.ltc_1.value=$.state.rectAreaLTC1,Nt.ltc_2.value=$.state.rectAreaLTC2,Nt.pointLights.value=$.state.point,Nt.pointLightShadows.value=$.state.pointShadow,Nt.hemisphereLights.value=$.state.hemi,Nt.sunShadowMatrix.value=$.state.sunShadowMatrix,Nt.sunShadowCascade.value=$.state.sunShadowCascade,Nt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Nt.spotLightMatrix.value=$.state.spotLightMatrix,Nt.spotLightMap.value=$.state.spotLightMap,Nt.pointShadowMatrix.value=$.state.pointShadowMatrix),Z.numLightProbeGrids=Ll(b.state.lightProbeGridArray),Z.currentProgram=se,Z.uniformsList=null,se}function Uu(R,V,j,Z,$){const yt=zt.get(R),Dt=yt.currentProgram.id+","+Z+","+$;let xt=yt.programVariants.get(Dt);return xt===void 0?(xt=Ms(R,V,j),yt.programVariants.set(Dt,xt)):(yt.currentProgram=xt,yt.uniformsList=null,yt.outputColorSpace=Z,yt.toneMapping=$),xt}function Il(R){if(R.uniformsList===null){const V=R.currentProgram.getUniforms();R.uniformsList=Vr.seqWithValue(V.seq,R.uniforms)}return R.uniformsList}function Dl(R,V){const j=zt.get(R);j.outputColorSpace=V.outputColorSpace,j.batching=V.batching,j.batchingColor=V.batchingColor,j.instancing=V.instancing,j.instancingColor=V.instancingColor,j.instancingMorph=V.instancingMorph,j.skinning=V.skinning,j.morphTargets=V.morphTargets,j.morphNormals=V.morphNormals,j.morphColors=V.morphColors,j.morphTargetsCount=V.morphTargetsCount,j.numClippingPlanes=V.numClippingPlanes,j.numIntersection=V.numClipIntersection,j.vertexAlphas=V.vertexAlphas,j.vertexTangents=V.vertexTangents,j.toneMapping=V.toneMapping}function Fu(R,V,j,Z,$){V.isScene!==!0&&(V=bt),Ht.resetTextureUnits();const yt=V.fog,Dt=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?V.environment:null,xt=Y===null?A.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:ae.workingColorSpace,Tt=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,Ft=U.get(Z.envMap||Dt,Tt),Zt=Z.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,se=!!j.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Nt=!!j.morphAttributes.position,re=!!j.morphAttributes.normal,Ae=!!j.morphAttributes.color;let Se=si;Z.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Se=A.toneMapping);const xe=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Ze=xe!==void 0?xe.length:0,Ut=zt.get(Z),en=b.state.lights;if(Wt===!0&&(ye===!0||R!==O)){const we=R===O&&Z.id===q;et.setState(Z,R,we)}let he=!1,Ti=!1;Z.version===Ut.__version?Ut.needsLights&&Ut.lightsStateVersion!==en.state.version||$.isBatchedMesh&&Ut.batching===!1||!$.isBatchedMesh&&Ut.batching===!0||$.isBatchedMesh&&Ut.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Ut.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Ut.instancing===!1||!$.isInstancedMesh&&Ut.instancing===!0||$.isSkinnedMesh&&Ut.skinning===!1||!$.isSkinnedMesh&&Ut.skinning===!0||$.isInstancedMesh&&Ut.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ut.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ut.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ut.instancingMorph===!1&&$.morphTexture!==null||Ut.envMap!==Ft||Z.fog===!0&&Ut.fog!==yt||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==et.numPlanes||Ut.numIntersection!==et.numIntersection)||Ut.vertexAlphas!==Zt||Ut.vertexTangents!==se||Ut.morphTargets!==Nt||Ut.morphNormals!==re||Ut.morphColors!==Ae||Ut.morphTargetsCount!==Ze||Ut.numLightProbeGrids!==Ll(b.state.lightProbeGridArray)?he=!0:(Ut.outputColorSpace!==xt||Ut.toneMapping!==Se)&&(Ti=!0):(he=!0,Ut.__version=Z.version);let Ke=Ut.currentProgram;(he===!0||Ti===!0)&&(Ke=Ti===!0?Uu(Z,V,$,xt,Se):Ms(Z,V,$),I&&Z.isNodeMaterial&&I.onUpdateProgram(Z,Ke,Ut));let ir=!1,hi=!1,Ai=!1;const le=Ke.getUniforms(),Ve=Ut.uniforms;if(ht.useProgram(Ke.program)&&(ir=!0,hi=!0,Ai=!0),Z.id!==q&&(q=Z.id,hi=!0),ir||O!==R){ht.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),le.setValue(z,"projectionMatrix",R.projectionMatrix),le.setValue(z,"viewMatrix",R.matrixWorldInverse);const ze=le.map.cameraPosition;ze!==void 0&&ze.setValue(z,it.setFromMatrixPosition(R.matrixWorld)),Jt.logarithmicDepthBuffer&&le.setValue(z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&le.setValue(z,"isOrthographic",R.isOrthographicCamera===!0),O!==R&&(O=R,hi=!0,Ai=!0)}if(Ut.needsLights&&(en.state.sunShadowMap.length>0&&le.setValue(z,"sunShadowMap",en.state.sunShadowMap,Ht),en.state.directionalShadowMap.length>0&&le.setValue(z,"directionalShadowMap",en.state.directionalShadowMap,Ht),en.state.spotShadowMap.length>0&&le.setValue(z,"spotShadowMap",en.state.spotShadowMap,Ht),en.state.pointShadowMap.length>0&&le.setValue(z,"pointShadowMap",en.state.pointShadowMap,Ht)),$.isSkinnedMesh){le.setOptional(z,$,"bindMatrix"),le.setOptional(z,$,"bindMatrixInverse");const we=$.skeleton;we&&(we.boneTexture===null&&we.computeBoneTexture(),le.setValue(z,"boneTexture",we.boneTexture,Ht))}$.isBatchedMesh&&(le.setOptional(z,$,"batchingTexture"),le.setValue(z,"batchingTexture",$._matricesTexture,Ht),le.setOptional(z,$,"batchingIdTexture"),le.setValue(z,"batchingIdTexture",$._indirectTexture,Ht),le.setOptional(z,$,"batchingColorTexture"),$._colorsTexture!==null&&le.setValue(z,"batchingColorTexture",$._colorsTexture,Ht));const yn=j.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&st.update($,j,Ke),(hi||Ut.receiveShadow!==$.receiveShadow)&&(Ut.receiveShadow=$.receiveShadow,le.setValue(z,"receiveShadow",$.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&V.environment!==null&&(Ve.envMapIntensity.value=V.environmentIntensity),Ve.dfgLUT!==void 0&&(Ve.dfgLUT.value=S_()),hi){if(le.setValue(z,"toneMappingExposure",A.toneMappingExposure),Ut.needsLights&&Ou(Ve,Ai),yt&&Z.fog===!0&&mt.refreshFogUniforms(Ve,yt),mt.refreshMaterialUniforms(Ve,Z,at,ct,b.state.transmissionRenderTarget[R.id]),Ut.needsLights&&Ut.numLightProbeGrids>0){const we=y;let ze=0;for(const qn of b.state.lightProbeGridArray)qn.texture!==null&&(we.textures[ze]=qn.texture,we.min[ze]=qn.boundingBox.min,we.max[ze]=qn.boundingBox.max,we.resolution[ze]=qn.resolution,ze++);for(const qn in we)we[qn].length=ze;Ve.probesSH.value=we.textures,Ve.probesMin.value=we.min,Ve.probesMax.value=we.max,Ve.probesResolution.value=we.resolution}Vr.upload(z,Il(Ut),Ve,Ht)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Vr.upload(z,Il(Ut),Ve,Ht),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&le.setValue(z,"center",$.center),le.setValue(z,"modelViewMatrix",$.modelViewMatrix),le.setValue(z,"normalMatrix",$.normalMatrix),le.setValue(z,"modelMatrix",$.matrixWorld),Z.uniformsGroups!==void 0){const we=Z.uniformsGroups;for(let ze=0,qn=we.length;ze<qn;ze++){const Ul=we[ze];Bt.update(Ul,Ke),Bt.bind(Ul,Ke)}}return Ke}function Ou(R,V){R.ambientLightColor.needsUpdate=V,R.lightProbe.needsUpdate=V,R.sunLights.needsUpdate=V,R.sunLightShadows.needsUpdate=V,R.directionalLights.needsUpdate=V,R.directionalLightShadows.needsUpdate=V,R.pointLights.needsUpdate=V,R.pointLightShadows.needsUpdate=V,R.spotLights.needsUpdate=V,R.spotLightShadows.needsUpdate=V,R.rectAreaLights.needsUpdate=V,R.hemisphereLights.needsUpdate=V}function Bu(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(R,V,j){const Z=zt.get(R);Z.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),zt.get(R.texture).__webglTexture=V,zt.get(R.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:j,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,V){const j=zt.get(R);j.__webglFramebuffer=V,j.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(R,V=0,j=0){Y=R,F=V,B=j;let Z=null,$=!1,yt=!1;if(R){const xt=zt.get(R);if(xt.__useDefaultFramebuffer!==void 0){ht.bindFramebuffer(z.FRAMEBUFFER,xt.__webglFramebuffer),H.copy(R.viewport),W.copy(R.scissor),rt=R.scissorTest,ht.viewport(H),ht.scissor(W),ht.setScissorTest(rt),q=-1;return}else if(xt.__webglFramebuffer===void 0)Ht.setupRenderTarget(R);else if(xt.__hasExternalTextures)Ht.rebindTextures(R,zt.get(R.texture).__webglTexture,zt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Zt=R.depthTexture;if(xt.__boundDepthTexture!==Zt){if(Zt!==null&&zt.has(Zt)&&(R.width!==Zt.image.width||R.height!==Zt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ht.setupDepthRenderbuffer(R)}}const Tt=R.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(yt=!0);const Ft=zt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ft[V])?Z=Ft[V][j]:Z=Ft[V],$=!0):R.samples>0&&Ht.useMultisampledRTT(R)===!1?Z=zt.get(R).__webglMultisampledFramebuffer:Array.isArray(Ft)?Z=Ft[j]:Z=Ft,H.copy(R.viewport),W.copy(R.scissor),rt=R.scissorTest}else H.copy(dt).multiplyScalar(at).floor(),W.copy(Ot).multiplyScalar(at).floor(),rt=Lt;if(j!==0&&(Z=D),ht.bindFramebuffer(z.FRAMEBUFFER,Z)&&ht.drawBuffers(R,Z),ht.viewport(H),ht.scissor(W),ht.setScissorTest(rt),$){const xt=zt.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+V,xt.__webglTexture,j)}else if(yt){const xt=V;for(let Tt=0;Tt<R.textures.length;Tt++){const Ft=zt.get(R.textures[Tt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Tt,Ft.__webglTexture,j,xt)}}else if(R!==null&&j!==0){const xt=zt.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,xt.__webglTexture,j)}q=-1};function Nl(R){const V=zt.get(R);return(V.__readFormat!==R.format||V.__readType!==R.type)&&(V.__readFormat=R.format,V.__readType=R.type,V.__formatReadable=Jt.textureFormatReadable(R.format),V.__typeReadable=Jt.textureTypeReadable(R.type)),V}this.readRenderTargetPixels=function(R,V,j,Z,$,yt,Dt,xt=0){if(!(R&&R.isWebGLRenderTarget)){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=zt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Dt!==void 0&&(Tt=Tt[Dt],Array.isArray(Tt)&&(Tt=Tt[0])),Tt){ht.bindFramebuffer(z.FRAMEBUFFER,Tt);try{const Ft=R.textures[xt],Zt=Ft.format,se=Ft.type;R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+xt);const Nt=Nl(Ft);if(Nt.__formatReadable===!1){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Nt.__typeReadable===!1){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=R.width-Z&&j>=0&&j<=R.height-$&&z.readPixels(V,j,Z,$,ft.convert(Zt),ft.convert(se),yt)}finally{const Ft=Y!==null?zt.get(Y).__webglFramebuffer:null;ht.bindFramebuffer(z.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(R,V,j,Z,$,yt,Dt,xt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=zt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Dt!==void 0&&(Tt=Tt[Dt],Array.isArray(Tt)&&(Tt=Tt[0])),Tt)if(V>=0&&V<=R.width-Z&&j>=0&&j<=R.height-$){ht.bindFramebuffer(z.FRAMEBUFFER,Tt);const Ft=R.textures[xt],Zt=Ft.format,se=Ft.type;R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+xt);const Nt=Nl(Ft);if(Nt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Nt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const re=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,re),z.bufferData(z.PIXEL_PACK_BUFFER,yt.byteLength,z.STREAM_READ),z.readPixels(V,j,Z,$,ft.convert(Zt),ft.convert(se),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);const Ae=Y!==null?zt.get(Y).__webglFramebuffer:null;ht.bindFramebuffer(z.FRAMEBUFFER,Ae);const Se=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Md(z,Se,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,re),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,yt),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(re),z.deleteSync(Se),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,V=null,j=0){const Z=Math.pow(2,-j),$=Math.floor(R.image.width*Z),yt=Math.floor(R.image.height*Z),Dt=V!==null?V.x:0,xt=V!==null?V.y:0;Ht.setTexture2D(R,0),z.copyTexSubImage2D(z.TEXTURE_2D,j,0,0,Dt,xt,$,yt),ht.unbindTexture()},this.copyTextureToTexture=function(R,V,j=null,Z=null,$=0,yt=0){let Dt,xt,Tt,Ft,Zt,se,Nt,re,Ae;const Se=R.isCompressedTexture?R.mipmaps[yt]:R.image;if(j!==null)Dt=j.max.x-j.min.x,xt=j.max.y-j.min.y,Tt=j.isBox3?j.max.z-j.min.z:1,Ft=j.min.x,Zt=j.min.y,se=j.isBox3?j.min.z:0;else{const le=Math.pow(2,-$);Dt=Math.floor(Se.width*le),xt=Math.floor(Se.height*le),R.isDataArrayTexture?Tt=Se.depth:R.isData3DTexture?Tt=Math.floor(Se.depth*le):Tt=1,Ft=0,Zt=0,se=0}Z!==null?(Nt=Z.x,re=Z.y,Ae=Z.z):(Nt=0,re=0,Ae=0);const xe=ft.convert(V.format),Ze=ft.convert(V.type);let Ut;V.isData3DTexture?(Ht.setTexture3D(V,0),Ut=z.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(Ht.setTexture2DArray(V,0),Ut=z.TEXTURE_2D_ARRAY):(Ht.setTexture2D(V,0),Ut=z.TEXTURE_2D),ht.activeTexture(z.TEXTURE0),ht.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,V.flipY),ht.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),ht.pixelStorei(z.UNPACK_ALIGNMENT,V.unpackAlignment);const en=ht.getParameter(z.UNPACK_ROW_LENGTH),he=ht.getParameter(z.UNPACK_IMAGE_HEIGHT),Ti=ht.getParameter(z.UNPACK_SKIP_PIXELS),Ke=ht.getParameter(z.UNPACK_SKIP_ROWS),ir=ht.getParameter(z.UNPACK_SKIP_IMAGES);ht.pixelStorei(z.UNPACK_ROW_LENGTH,Se.width),ht.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Se.height),ht.pixelStorei(z.UNPACK_SKIP_PIXELS,Ft),ht.pixelStorei(z.UNPACK_SKIP_ROWS,Zt),ht.pixelStorei(z.UNPACK_SKIP_IMAGES,se);const hi=R.isDataArrayTexture||R.isData3DTexture,Ai=V.isDataArrayTexture||V.isData3DTexture;if(R.isDepthTexture){const le=zt.get(R),Ve=zt.get(V),yn=zt.get(le.__renderTarget),we=zt.get(Ve.__renderTarget);ht.bindFramebuffer(z.READ_FRAMEBUFFER,yn.__webglFramebuffer),ht.bindFramebuffer(z.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let ze=0;ze<Tt;ze++)hi&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,zt.get(R).__webglTexture,$,se+ze),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,zt.get(V).__webglTexture,yt,Ae+ze)),z.blitFramebuffer(Ft,Zt,Ft+Dt,Zt+xt,Nt,re,Nt+Dt,re+xt,z.DEPTH_BUFFER_BIT,z.NEAREST);ht.bindFramebuffer(z.READ_FRAMEBUFFER,null),ht.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if($!==0||R.isRenderTargetTexture||zt.has(R)){const le=zt.get(R),Ve=zt.get(V);ht.bindFramebuffer(z.READ_FRAMEBUFFER,w),ht.bindFramebuffer(z.DRAW_FRAMEBUFFER,N);for(let yn=0;yn<Tt;yn++)hi?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,le.__webglTexture,$,se+yn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,le.__webglTexture,$),Ai?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ve.__webglTexture,yt,Ae+yn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ve.__webglTexture,yt),$!==0?z.blitFramebuffer(Ft,Zt,Ft+Dt,Zt+xt,Nt,re,Nt+Dt,re+xt,z.COLOR_BUFFER_BIT,z.NEAREST):Ai?z.copyTexSubImage3D(Ut,yt,Nt,re,Ae+yn,Ft,Zt,Dt,xt):z.copyTexSubImage2D(Ut,yt,Nt,re,Ft,Zt,Dt,xt);ht.bindFramebuffer(z.READ_FRAMEBUFFER,null),ht.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Ai?R.isDataTexture||R.isData3DTexture?z.texSubImage3D(Ut,yt,Nt,re,Ae,Dt,xt,Tt,xe,Ze,Se.data):V.isCompressedArrayTexture?z.compressedTexSubImage3D(Ut,yt,Nt,re,Ae,Dt,xt,Tt,xe,Se.data):z.texSubImage3D(Ut,yt,Nt,re,Ae,Dt,xt,Tt,xe,Ze,Se):R.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,yt,Nt,re,Dt,xt,xe,Ze,Se.data):R.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,yt,Nt,re,Se.width,Se.height,xe,Se.data):z.texSubImage2D(z.TEXTURE_2D,yt,Nt,re,Dt,xt,xe,Ze,Se);ht.pixelStorei(z.UNPACK_ROW_LENGTH,en),ht.pixelStorei(z.UNPACK_IMAGE_HEIGHT,he),ht.pixelStorei(z.UNPACK_SKIP_PIXELS,Ti),ht.pixelStorei(z.UNPACK_SKIP_ROWS,Ke),ht.pixelStorei(z.UNPACK_SKIP_IMAGES,ir),yt===0&&V.generateMipmaps===!0&&V.mipmapsAutoUpdate===!0&&z.generateMipmap(Ut),ht.unbindTexture()},this.initRenderTarget=function(R){zt.get(R).__webglFramebuffer===void 0&&Ht.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Ht.setTextureCube(R,0):R.isData3DTexture?Ht.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Ht.setTexture2DArray(R,0):Ht.setTexture2D(R,0),ht.unbindTexture()},this.resetState=function(){F=0,B=0,Y=null,ht.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}}const Vc={type:"change"},xl={type:"start"},gu={type:"end"},Cr=new no,Wc=new kn,E_=Math.cos(70*He.DEG2RAD),De=new k,an=2*Math.PI,fe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},qo=1e-6;class w_ extends Cf{constructor(t,e=null){super(t,e),this.state=fe.NONE,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:os.ROTATE,MIDDLE:os.DOLLY,RIGHT:os.PAN},this.touches={ONE:ns.ROTATE,TWO:ns.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new vn,this._lastTargetPosition=new k,this._quat=new vn().setFromUnitVectors(t.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Wa,this._sphericalDelta=new Wa,this._scale=1,this._panOffset=new k,this._rotateStart=new Gt,this._rotateEnd=new Gt,this._rotateDelta=new Gt,this._panStart=new Gt,this._panEnd=new Gt,this._panDelta=new Gt,this._dollyStart=new Gt,this._dollyEnd=new Gt,this._dollyDelta=new Gt,this._dollyDirection=new k,this._mouse=new Gt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=A_.bind(this),this._onPointerDown=T_.bind(this),this._onPointerUp=R_.bind(this),this._onContextMenu=U_.bind(this),this._onMouseWheel=L_.bind(this),this._onKeyDown=I_.bind(this),this._onTouchStart=D_.bind(this),this._onTouchMove=N_.bind(this),this._onMouseDown=C_.bind(this),this._onMouseMove=P_.bind(this),this._interceptControlDown=F_.bind(this),this._interceptControlUp=O_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=fe.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Vc),this.update(),this.state=fe.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;De.copy(e).sub(this.target),De.applyQuaternion(this._quat),this._spherical.setFromVector3(De),this.autoRotate&&this.state===fe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=an:n>Math.PI&&(n-=an),i<-Math.PI?i+=an:i>Math.PI&&(i-=an),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(De.setFromSpherical(this._spherical),De.applyQuaternion(this._quatInverse),e.copy(this.target).add(De),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=De.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new k(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new k(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=De.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Cr.origin.copy(this.object.position),Cr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Cr.direction))<E_?this.object.lookAt(this.target):(Wc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Cr.intersectPlane(Wc,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>qo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>qo||this._lastTargetPosition.distanceToSquared(this.target)>qo?(this.dispatchEvent(Vc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?an/60*this.autoRotateSpeed*t:an/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){De.setFromMatrixColumn(e,0),De.multiplyScalar(-t),this._panOffset.add(De)}_panUp(t,e){this.screenSpacePanning===!0?De.setFromMatrixColumn(e,1):(De.setFromMatrixColumn(e,0),De.crossVectors(this.object.up,De)),De.multiplyScalar(t),this._panOffset.add(De)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;De.copy(i).sub(this.target);let s=De.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,s=e-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(an*this._rotateDelta.x/e.clientHeight),this._rotateUp(an*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(an*this._rotateDelta.x/e.clientHeight),this._rotateUp(an*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Gt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function T_(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function A_(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function R_(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(gu),this.state=fe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function C_(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case os.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=fe.DOLLY;break;case os.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=fe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=fe.ROTATE}break;case os.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=fe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=fe.PAN}break;default:this.state=fe.NONE}this.state!==fe.NONE&&this.dispatchEvent(xl)}function P_(r){switch(this.state){case fe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case fe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case fe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function L_(r){this.enabled===!1||this.enableZoom===!1||this.state!==fe.NONE||(r.preventDefault(),this.dispatchEvent(xl),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(gu))}function I_(r){this.enabled!==!1&&this._handleKeyDown(r)}function D_(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case ns.ROTATE:if(this.enableRotate===!1){this.state=fe.NONE;break}this._handleTouchStartRotate(r),this.state=fe.TOUCH_ROTATE;break;case ns.PAN:if(this.enablePan===!1){this.state=fe.NONE;break}this._handleTouchStartPan(r),this.state=fe.TOUCH_PAN;break;default:this.state=fe.NONE}break;case 2:switch(this.touches.TWO){case ns.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=fe.TOUCH_DOLLY_PAN;break;case ns.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=fe.TOUCH_DOLLY_ROTATE;break;default:this.state=fe.NONE}break;default:this.state=fe.NONE}this.state!==fe.NONE&&this.dispatchEvent(xl)}function N_(r){switch(this._trackPointer(r),this.state){case fe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case fe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case fe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case fe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=fe.NONE}}function U_(r){this.enabled!==!1&&r.preventDefault()}function F_(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function O_(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function _u(){const r=new Vn;r.position.set(2.26,0,.68);const t=(u,d={})=>new on({color:u,roughness:.78,...d}),e=t("#344739"),n=t("#a5915a",{metalness:.5,roughness:.4}),i=t("#c5b58f");function s(u,d,h,f,p,v=24){const m=new Me(new ai(u,d,h,v),f);return m.position.set(...p),m.castShadow=m.receiveShadow=!0,r.add(m),m}function o(u,d,h,f){const p=new k(...u),v=new k(...d),m=v.clone().sub(p);s(h,h,m.length(),f,p.add(v).multiplyScalar(.5).toArray()).quaternion.setFromUnitVectors(new k(0,1,0),m.normalize())}s(.3,.32,.055,e,[0,.0275,0]),o([0,.08,0],[0,2.04,0],.025,n);const a=s(.32,.47,.5,t("#e6d7b4",{emissive:"#e6bd73",emissiveIntensity:0}),[0,1.96,0],40),l=s(.44,.44,.015,t("#f5e8c7",{emissive:"#e6bd73",emissiveIntensity:0}),[0,1.711,0]);for(let u=0;u<20;u++){const d=u*Math.PI/10;o([Math.cos(d)*.325,2.205,Math.sin(d)*.325],[Math.cos(d)*.466,1.715,Math.sin(d)*.466],.004,i)}const c=new wf("#ffce85",0,5,2);return c.position.set(0,1.7,0),r.add(c),{group:r,light:c,setPower(u){c.intensity=6*u,a.material.emissiveIntensity=.15*u,l.material.emissiveIntensity=.55*u}}}const Cs=new k;function mn(r,t,e,n,i,s){const o=2*Math.PI*i/4,a=Math.max(s-2*i,0),l=Math.PI/4;Cs.copy(t),Cs[n]=0,Cs.normalize();const c=.5*o/(o+a),u=1-Cs.angleTo(r)/l;return Math.sign(Cs[e])===1?u*c:a/(o+a)+c+c*(1-u)}class Ml extends oi{constructor(t=1,e=1,n=1,i=2,s=.1){const o=i*2+1;if(s=Math.min(t/2,e/2,n/2,s),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:s},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const l=new k,c=new k,u=new k(t,e,n).divideScalar(2).subScalar(s),d=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,p=d.length/6,v=new k,m=.5/o;for(let g=0,_=0;g<d.length;g+=3,_+=2)switch(l.fromArray(d,g),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[g+0]=u.x*Math.sign(l.x)+c.x*s,d[g+1]=u.y*Math.sign(l.y)+c.y*s,d[g+2]=u.z*Math.sign(l.z)+c.z*s,h[g+0]=c.x,h[g+1]=c.y,h[g+2]=c.z,Math.floor(g/p)){case 0:v.set(1,0,0),f[_+0]=mn(v,c,"z","y",s,n),f[_+1]=1-mn(v,c,"y","z",s,e);break;case 1:v.set(-1,0,0),f[_+0]=1-mn(v,c,"z","y",s,n),f[_+1]=1-mn(v,c,"y","z",s,e);break;case 2:v.set(0,1,0),f[_+0]=1-mn(v,c,"x","z",s,t),f[_+1]=mn(v,c,"z","x",s,n);break;case 3:v.set(0,-1,0),f[_+0]=1-mn(v,c,"x","z",s,t),f[_+1]=1-mn(v,c,"z","x",s,n);break;case 4:v.set(0,0,1),f[_+0]=1-mn(v,c,"x","y",s,t),f[_+1]=1-mn(v,c,"y","x",s,e);break;case 5:v.set(0,0,-1),f[_+0]=mn(v,c,"x","y",s,t),f[_+1]=1-mn(v,c,"y","x",s,e);break}}static fromJSON(t){return new Ml(t.width,t.height,t.depth,t.segments,t.radius)}}function B_(r,t=!1){const e=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},o={},a=r[0].morphTargetsRelative,l=new Ue;l.morphTargetsRelative=a;let c=0;for(let u=0;u<r.length;++u){const d=r[u];let h=0,f=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(d.attributes[p]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[p].length!==r[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.morphAttributes[p]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(t){let p;if(e)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(e){let u=0;const d=[];for(let h=0;h<r.length;++h){const f=r[h].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+u);u+=r[h].attributes.position.count}l.setIndex(d)}for(const u in s){const d=qc(s[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(const u in o){const d=o[u][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<d;++h){const f=[];for(let v=0;v<o[u].length;++v)f.push(o[u][v][h]);const p=qc(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}}return l}function qc(r){let t,e,n,i=-1,s=0;for(let c=0;c<r.length;++c){const u=r[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*e}const o=new t(s),a=new Xe(o,e,n);let l=0;for(let c=0;c<r.length;++c){const u=r[c];if(u.isInterleavedBufferAttribute){const d=l/e;for(let h=0,f=u.count;h<f;h++)for(let p=0;p<e;p++){const v=u.getComponent(h,p);a.setComponent(h+d,p,v)}}else o.set(u.array,l);l+=u.count*e}return i!==void 0&&(a.gpuType=i),a}const Xo=new Map,z_={cream:"#e5ddc8",plaster:"#e0dccb",sage:"#7c8a72",dark:"#344739",oak:"#9a6840",walnut:"#514745",brass:"#a5915a",clay:"#9f6462",paper:"#e8dfc8",black:"#202c28"};function ne(r,t={}){r=z_[r]||r;const e=r+JSON.stringify(t);return Xo.has(e)||Xo.set(e,new on({color:r,roughness:.78,...t})),Xo.get(e)}function Fi(r,t,e,n=[0,0,0],i=[0,0,0]){const s=new Me(t,e);return s.position.set(...n),s.rotation.set(...i),s.castShadow=s.receiveShadow=!0,r.add(s),s}function ge(r,t,e,n,i=.015,s){return Fi(r,i?new Ml(...t,2,Math.min(i,...t.map(o=>o/2))):new oi(...t),e,n,s)}function sn(r,t,e,n,i,s,o,a=24){return Fi(r,new ai(t,e,n,a),i,s,o)}function Xa(r,t,e,n,i=[1,1,1]){const s=Fi(r,new js(t,16,12),e,n);return s.scale.set(...i),s}function zn(r,t,e,n,i){const s=new k(...t),o=new k(...e),a=o.clone().sub(s),l=sn(r,n,n,a.length(),i,s.clone().add(o).multiplyScalar(.5).toArray());return l.quaternion.setFromUnitVectors(new k(0,1,0),a.normalize()),l}function is(r,t,e){const n=document.createElement("canvas");n.width=r,n.height=t,e(n.getContext("2d"),r,t);const i=new io(n);return i.colorSpace=Ge,i.anisotropy=4,i}function k_(r=1){return()=>(r=r*1664525+1013904223>>>0,r/4294967296)}const Pr=k_(42);function G_(){return is(512,512,(r,t,e)=>{r.fillStyle="#9b8664",r.fillRect(0,0,t,e);for(let n=0;n<1100;n++){const i=Pr()*e;r.strokeStyle=`rgba(${Pr()>.5?"66,39,18":"234,203,155"},${.03+Pr()*.09})`,r.lineWidth=.4+Pr()*1.6,r.beginPath(),r.moveTo(0,i);for(let s=0;s<=t;s+=24)r.lineTo(s,i+Math.sin(s/95+n)*2.2);r.stroke()}})}function Xc(r){return is(512,640,(t,e,n)=>{if(t.fillStyle="#dcd9c5",t.fillRect(0,0,e,n),r==="art")t.fillStyle="#9a6045",t.beginPath(),t.arc(256,241,132,Math.PI,0),t.lineTo(388,453),t.lineTo(124,453),t.fill(),t.fillStyle="#345e68",t.beginPath(),t.arc(286,319,87,0,Math.PI*2),t.fill(),t.fillStyle="#cdb15b",t.beginPath(),t.arc(210,312,69,0,Math.PI*2),t.fill();else{t.strokeStyle="#b6b99f",t.lineWidth=2;for(let i=100;i<580;i+=48)t.beginPath(),t.moveTo(55,i),t.lineTo(457,i),t.stroke()}})}function Ps(r,t,e,n,i,s=[0,0,0],o=!1){return Fi(r,new li(t,e),new on({map:n,roughness:.9,...o?{emissive:16777215,emissiveMap:n,emissiveIntensity:.32}:{}}),i,s)}function Un(r){r.updateMatrixWorld(!0);const t=r.matrixWorld.clone().invert(),e=new Map;r.traverse(n=>{if(!n.isMesh||Array.isArray(n.material))return;const i=n.geometry.clone();i.applyMatrix4(new me().multiplyMatrices(t,n.matrixWorld));const s=i.index?i.toNonIndexed():i;for(const a of Object.keys(s.attributes))["position","normal","uv"].includes(a)||s.deleteAttribute(a);const o=e.get(n.material)||[];o.push(s),e.set(n.material,o)}),r.clear();for(const[n,i]of e){const s=B_(i);if(s){const o=Fi(r,s,n);o.frustumCulled=!0}for(const o of i)o.dispose()}return r}function We(r,t=[0,0,0],e=0){const n=new Vn;return n.position.set(...t),n.rotation.y=e,r.add(n),n}function H_(r,t,e=1){const n=We(r,t);n.scale.setScalar(e),sn(n,.25,.19,.4,ne("clay"),[0,.2,0]),sn(n,.255,.255,.045,ne("#99735f"),[0,.39,0]),sn(n,.226,.226,.015,ne("#3f3c2a"),[0,.407,0]);for(let i=0;i<9;i++){const s=i*2.4,o=.85+i%3*.27,a=Math.cos(s)*.28,l=Math.sin(s)*.28;zn(n,[0,.4,0],[a,o,l],.013,ne("dark")),Xa(n,.24,ne(i%2?"#305e50":"#797f45"),[a,o,l],[.52,1.5,.17]).rotation.set(Math.sin(s)*.6,s,Math.cos(s)*.5)}return n}function V_(r,t,e,n,i=0){const s=We(r,t,i);return ge(s,e,ne("paper"),[0,0,0],.005),ge(s,[e[0]+.025,.018,e[2]+.025],ne(n),[0,e[1]/2,0]),ge(s,[e[0]+.025,.018,e[2]+.025],ne(n),[0,-e[1]/2,0]),ge(s,[.025,e[1],e[2]+.025],ne(n),[-e[0]/2,0,0]),s}function W_(r,t=_u()){const e=We(r),n=We(e),i=We(e),s=We(e),o=[],a=[],l=[],c=new on({map:G_(),color:"#b5a17c",roughness:.73}),u=ne("walnut"),d=ne("cream");ne("sage");const h=ne("brass",{metalness:.5,roughness:.4}),f=(w,N,F)=>l.push({size:w,pos:N,quat:F});f([140,.2,140],[0,-.1,0]),ge(i,[.97,1.2,.055],u,[.65,2.01,-2.34]),ge(i,[.9,1.13,.015],d,[.65,2.01,-2.303]),Ps(i,.82,1.04,Xc("art"),[.65,2.01,-2.29]);for(const w of[.26,1.04])zn(i,[w,.02,-2.16],[w,2.55,-2.38],.035,u);zn(i,[.65,.02,-2.88],[.65,2.15,-2.38],.04,u),ge(i,[1.08,.065,.18],c,[.65,1.39,-2.28]),f([1.05,1.3,.12],[.65,2,-2.34]),ge(n,[3.45,.13,1.3],c,[0,1.38,-1.27],.04),f([3.45,.13,1.3],[0,1.38,-1.27]),ge(n,[3.35,.11,.07],u,[0,1.49,-1.89]);for(const w of[-1.48,1.48])for(const N of[-1.76,-.79])zn(n,[w,1.32,N],[w*1.06,.055,N+.02],.055,u),f([.13,1.32,.13],[w,.66,N]);ge(n,[.73,.58,1.04],c,[-1.06,1.02,-1.3],.025),f([.73,.58,1.04],[-1.06,1.02,-1.3]);for(let w=0;w<2;w++)ge(n,[.68,.255,.04],c,[-1.06,.88+w*.28,-.755]),ge(n,[.18,.023,.035],h,[-1.06,.91+w*.28,-.724]);const p=is(1024,768,(w,N,F)=>{w.fillStyle="#80553f",w.fillRect(0,0,N,F),w.strokeStyle="#d7ba83",w.lineWidth=26,w.strokeRect(39,39,N-78,F-78),w.strokeStyle="#465a47",w.lineWidth=12,w.strokeRect(66,66,N-132,F-132);for(let B=120;B<F-80;B+=100)for(let Y=130;Y<N-90;Y+=120)w.save(),w.translate(Y,B),w.rotate(Math.PI/4),w.fillStyle="#d1ae7b",w.fillRect(-23,-23,46,46),w.fillStyle="#6c7454",w.fillRect(-10,-10,20,20),w.restore();for(let B=0;B<F;B+=3)w.fillStyle=B%2?"#ffffff0b":"#33251912",w.fillRect(0,B,N,1)}),v=We(n,[.25,0,.38],-.25);ge(v,[.86,.13,.8],u,[0,.77,0],.06),ge(v,[.81,.14,.75],ne("#62694b"),[0,.87,0],.08),ge(v,[.87,.55,.13],u,[0,1.26,.36],.075,[-.13,0,0]),ge(v,[.79,.44,.12],ne("#62694b"),[0,1.28,.285],.07,[-.13,0,0]);for(const w of[-.35,.35])for(const N of[-.3,.3])zn(v,[w,.79,N],[w*1.25,.037,N*1.4],.037,u);for(const w of[-.36,.36])zn(v,[w,.7,.29],[w,1.28,.36],.03,u);f([.95,.9,.95],[.25,.48,.38]),f([.95,.5,.16],[.34,1.22,.72]);const m=We(n,[-2.22,0,.63]);ge(m,[.94,.55,1.18],c,[0,.47,0],.025);for(const w of[-.34,.34])for(const N of[-.45,.45])ge(m,[.07,.24,.07],u,[w,.12,N]);for(let w=0;w<7;w++)ge(m,[.07,.37,.65],ne(["#4f6252","#ae5e48","#d2bf94","#b38c55"][w%4]),[-.31+w*.088,.46,.12],.006);ge(m,[.86,.075,1.05],u,[0,.79,0]),sn(m,.325,.325,.023,ne("black"),[0,.841,-.06]),sn(m,.11,.11,.025,ne("clay"),[0,.854,-.06]),sn(m,.018,.018,.034,h,[0,.87,-.06]),zn(m,[.32,.88,-.4],[.3,.88,.14],.012,h),ge(m,[.07,.027,.08],ne("black"),[.28,.87,.18]),f([.94,.86,1.18],[-2.22,.43,.63]),H_(n,[2.35,0,-1.67],1.15),f([.65,.5,.65],[2.35,.25,-1.67]),e.add(t.group);const g=t.light;t.setPower(1),f([.64,.055,.64],[2.26,.0275,.68]),f([.055,1.96,.055],[2.26,1.06,.68]),f([.94,.5,.94],[2.26,1.96,.68]);const _=Fi(e,new ai(.33,.47,.5,24),new Ln({visible:!1}),[2.26,1.96,.68]);o.push({mesh:_,label:"Lamp · switch the light",section:"lamp"});const x=We(e,[-.2,1.465,-1.36],.04);ge(x,[.83,.035,.56],ne("#b8bdb3",{metalness:.55,roughness:.4}),[0,.019,0],.02),ge(x,[.7,.006,.25],ne("#405047"),[0,.039,-.065],.01);for(let w=0;w<4;w++)for(let N=0;N<11;N++)ge(x,[.048,.004,.035],ne("#919b91"),[-.31+N*.062,.044,-.16+w*.053],.004);ge(x,[.25,.003,.12],ne("#a2aa9e"),[0,.04,.16],.01);const y=We(x,[0,.04,-.255]);y.rotation.x=-.19,ge(y,[.83,.54,.033],ne("#a7afa4"),[0,.27,0],.025);const E=is(768,480,(w,N,F)=>{w.fillStyle="#344c60",w.fillRect(0,0,N,F),w.fillStyle="#bfae77",w.beginPath(),w.arc(384,224,83,Math.PI,0),w.lineTo(467,356),w.lineTo(301,356),w.fill(),w.fillStyle="#ded8be",w.beginPath(),w.arc(446,154,33,0,Math.PI*2),w.fill()});Ps(y,.76,.467,E,[0,.278,.019],void 0,!0),Un(x),o.push({mesh:x,label:"Laptop · selected work",section:"work"}),f([.85,.56,.25],[-.2,1.72,-1.65]),f([.85,.05,.56],[-.2,1.47,-1.36]);const b=We(n,[-1.36,1.66,-1.63]);sn(b,.17,.17,.075,d,[0,0,0],[Math.PI/2,0,0]),sn(b,.149,.149,.008,ne("#f7efd8"),[0,0,.041],[Math.PI/2,0,0]),zn(b,[0,0,.049],[-.065,.045,.049],.007,ne("dark")),zn(b,[0,0,.05],[.015,.1,.05],.006,ne("dark")),ge(b,[.15,.04,.1],u,[0,-.18,0]),sn(n,.075,.07,.18,ne("clay"),[1.37,1.54,-1.72]);for(let w=0;w<4;w++)zn(n,[1.34+w*.022,1.52,-1.72],[1.33+w*.03,1.85-w%2*.06,-1.72],.009,ne(w%2?"sage":"#cda35b"));const M=We(e);V_(M,[0,0,0],[.48,.045,.34],"#99735f"),Ps(M,.42,.29,Xc("notes"),[0,.034,0],[-Math.PI/2,0,0]),a.push({mesh:Un(M),name:"notebook",label:"Notebook · notes / drag to pick up",section:"notes",shape:"box",size:[.5,.07,.36],mass:.7,pos:[.85,1.52,-1.12],rotation:[0,-.18,0]});const S=We(e);sn(S,.112,.092,.23,ne("#e7ddc5"),[0,0,0]),sn(S,.096,.096,.012,ne("#61442d"),[0,.119,0]),Fi(S,new pl(.079,.023,8,20),d,[.122,.017,0]),a.push({mesh:Un(S),name:"mug",label:"Coffee · pick me up",shape:"cylinder",radius:.115,height:.25,mass:1.8,pos:[-.91,1.61,-1.05]});const P=We(e);Xa(P,.115,ne("#25302b",{roughness:.4}),[0,0,0]);const A=is(128,128,w=>{w.fillStyle="#f4ecd6",w.fillRect(0,0,128,128)});Ps(P,.115,.115,A,[0,.045,.108],[-.4,0,0]),a.push({mesh:Un(P),name:"eight-ball",label:"Eight ball · give it a nudge",shape:"sphere",radius:.115,mass:.45,restitution:.55,pos:[1.3,1.58,-.88]});const L=We(e);ge(L,[.23,.045,.43],ne("clay"),[0,0,0],.03),ge(L,[.197,.005,.36],ne("#273c32"),[0,.026,0],.02),Ps(L,.17,.3,is(192,320,w=>{w.fillStyle="#314a3a",w.fillRect(0,0,192,320),w.fillStyle="#ded8be",w.beginPath(),w.arc(96,160,30,0,Math.PI*2),w.fill()}),[0,.03,0],[-Math.PI/2,0,0],!0),a.push({mesh:Un(L),name:"phone",label:"Phone · about / drag to pick up",section:"about",shape:"box",size:[.23,.06,.43],mass:.8,pos:[.37,1.51,-.8],rotation:[0,.2,0]});const I=We(e);sn(I,.013,.013,.42,ne("#d4a251"),[0,0,0],[0,0,Math.PI/2],6),sn(I,.013,0,.055,ne("#dbc5a0"),[.236,0,0],[0,0,Math.PI/2],6),sn(I,.014,.014,.055,ne("clay"),[-.235,0,0],[0,0,Math.PI/2]),a.push({mesh:Un(I),name:"pencil",label:"Pencil · pick me up",shape:"box",size:[.53,.028,.028],mass:.12,pos:[.93,1.49,-.79],rotation:[0,.15,0]});const D=We(e);ge(D,[.19,.19,.19],ne("sage"),[0,0,0],.025);for(let w of[-1,1])for(let N of[-1,1])Xa(D,.018,d,[w*.047,.097,N*.047],[1,.2,1]);return a.push({mesh:Un(D),name:"wooden-die",label:"Wooden die · toss it",shape:"box",size:[.19,.19,.19],mass:.4,restitution:.24,pos:[1.18,1.57,-1.39]}),Un(n),Un(i),Un(s),{rugMap:p,room:e,props:a,colliders:l,interactives:o,backWall:i,leftWall:s,lamp:g}}class Cn{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new C);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new C);const n=this.elements,i=t.x,s=t.y,o=t.z;return e.x=n[0]*i+n[1]*s+n[2]*o,e.y=n[3]*i+n[4]*s+n[5]*o,e.z=n[6]*i+n[7]*s+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new Cn);const n=this.elements,i=t.elements,s=e.elements,o=n[0],a=n[1],l=n[2],c=n[3],u=n[4],d=n[5],h=n[6],f=n[7],p=n[8],v=i[0],m=i[1],g=i[2],_=i[3],x=i[4],y=i[5],E=i[6],b=i[7],M=i[8];return s[0]=o*v+a*_+l*E,s[1]=o*m+a*x+l*b,s[2]=o*g+a*y+l*M,s[3]=c*v+u*_+d*E,s[4]=c*m+u*x+d*b,s[5]=c*g+u*y+d*M,s[6]=h*v+f*_+p*E,s[7]=h*m+f*x+p*b,s[8]=h*g+f*y+p*M,e}scale(t,e){e===void 0&&(e=new Cn);const n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new C);const n=3,i=4,s=[];let o,a;for(o=0;o<n*i;o++)s.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)s[o+i*a]=this.elements[o+3*a];s[3]=t.x,s[7]=t.y,s[11]=t.z;let l=3;const c=l;let u;const d=4;let h;do{if(o=c-l,s[o+i*o]===0){for(a=o+1;a<c;a++)if(s[o+i*a]!==0){u=d;do h=d-u,s[h+i*o]+=s[h+i*a];while(--u);break}}if(s[o+i*o]!==0)for(a=o+1;a<c;a++){const f=s[o+i*a]/s[o+i*o];u=d;do h=d-u,s[h+i*a]=h<=o?0:s[h+i*a]-s[h+i*o]*f;while(--u)}}while(--l);if(e.z=s[2*i+3]/s[2*i+2],e.y=(s[1*i+3]-s[1*i+2]*e.z)/s[1*i+1],e.x=(s[0*i+3]-s[0*i+2]*e.z-s[0*i+1]*e.y)/s[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";for(let n=0;n<9;n++)t+=this.elements[n]+",";return t}reverse(t){t===void 0&&(t=new Cn);const e=3,n=6,i=q_;let s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)i[s+n*o]=this.elements[s+3*o];i[3]=1,i[9]=0,i[15]=0,i[4]=0,i[10]=1,i[16]=0,i[5]=0,i[11]=0,i[17]=1;let a=3;const l=a;let c;const u=n;let d;do{if(s=l-a,i[s+n*s]===0){for(o=s+1;o<l;o++)if(i[s+n*o]!==0){c=u;do d=u-c,i[d+n*s]+=i[d+n*o];while(--c);break}}if(i[s+n*s]!==0)for(o=s+1;o<l;o++){const h=i[s+n*o]/i[s+n*s];c=u;do d=u-c,i[d+n*o]=d<=s?0:i[d+n*o]-i[d+n*s]*h;while(--c)}}while(--a);s=2;do{o=s-1;do{const h=i[s+n*o]/i[s+n*s];c=n;do d=n-c,i[d+n*o]=i[d+n*o]-i[d+n*s]*h;while(--c)}while(o--)}while(--s);s=2;do{const h=1/i[s+n*s];c=n;do d=n-c,i[d+n*s]=i[d+n*s]*h;while(--c)}while(s--);s=2;do{o=2;do{if(d=i[e+o+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,o,d)}while(o--)}while(s--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,s=t.w,o=e+e,a=n+n,l=i+i,c=e*o,u=e*a,d=e*l,h=n*a,f=n*l,p=i*l,v=s*o,m=s*a,g=s*l,_=this.elements;return _[0]=1-(h+p),_[1]=u-g,_[2]=d+m,_[3]=u+g,_[4]=1-(c+p),_[5]=f-v,_[6]=d-m,_[7]=f+v,_[8]=1-(c+h),this}transpose(t){t===void 0&&(t=new Cn);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const q_=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class C{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new C);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,l=this.z;return e.x=a*s-l*i,e.y=l*n-o*s,e.z=o*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new C(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new C(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new Cn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new C);const e=this.x,n=this.y,i=this.z;let s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return Math.sqrt((s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return(s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i)}scale(t,e){e===void 0&&(e=new C);const n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new C),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new C),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new C),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=X_,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const o=Y_;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,s=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(Yc),Yc.almostEquals(t,e)}clone(){return new C(this.x,this.y,this.z)}}C.ZERO=new C(0,0,0);C.UNIT_X=new C(1,0,0);C.UNIT_Y=new C(0,1,0);C.UNIT_Z=new C(0,0,1);const X_=new C,Y_=new C,Yc=new C;class fn{constructor(t){t===void 0&&(t={}),this.lowerBound=new C,this.upperBound=new C,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const s=this.lowerBound,o=this.upperBound,a=n;s.copy(t[0]),a&&a.vmult(s,s),o.copy(s);for(let l=1;l<t.length;l++){let c=t[l];a&&(a.vmult(c,Zc),c=Zc),c.x>o.x&&(o.x=c.x),c.x<s.x&&(s.x=c.x),c.y>o.y&&(o.y=c.y),c.y<s.y&&(s.y=c.y),c.z>o.z&&(o.z=c.z),c.z<s.z&&(s.z=c.z)}return e&&(e.vadd(s,s),e.vadd(o,o)),i&&(s.x-=i,s.y-=i,s.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new fn().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,o=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,a=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,l=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return o&&a&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,o,a,l){const c=this.lowerBound,u=this.upperBound;t.copy(c),e.set(u.x,c.y,c.z),n.set(u.x,u.y,c.z),i.set(c.x,u.y,u.z),s.set(u.x,c.y,u.z),o.set(c.x,u.y,c.z),a.set(c.x,c.y,u.z),l.copy(u)}toLocalFrame(t,e){const n=Kc,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],d=n[7];this.getCorners(i,s,o,a,l,c,u,d);for(let h=0;h!==8;h++){const f=n[h];t.pointToLocal(f,f)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=Kc,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],d=n[7];this.getCorners(i,s,o,a,l,c,u,d);for(let h=0;h!==8;h++){const f=n[h];t.pointToWorld(f,f)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,s=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*s,u=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*o,h=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,l),Math.min(c,u)),Math.min(d,h)),p=Math.min(Math.min(Math.max(a,l),Math.max(c,u)),Math.max(d,h));return!(p<0||f>p)}}const Zc=new C,Kc=[new C,new C,new C,new C,new C,new C,new C,new C];class $c{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:s}=e;if(s>i){const o=s;s=i,i=o}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class vu{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}}class Pe{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new C),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=Z_,i=K_;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new Pe);const n=this.x,i=this.y,s=this.z,o=this.w,a=t.x,l=t.y,c=t.z,u=t.w;return e.x=n*u+o*a+i*c-s*l,e.y=i*u+o*l+s*a-n*c,e.z=s*u+o*c+n*l-i*a,e.w=o*u-n*a-i*l-s*c,e}inverse(t){t===void 0&&(t=new Pe);const e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);const o=1/(e*e+n*n+i*i+s*s);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new Pe),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new C);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,l=this.z,c=this.w,u=c*n+a*s-l*i,d=c*i+l*n-o*s,h=c*s+o*i-a*n,f=-o*n-a*i-l*s;return e.x=u*c+f*-o+d*-l-h*-a,e.y=d*c+f*-a+h*-o-u*-l,e.z=h*c+f*-l+u*-a-d*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,s;const o=this.x,a=this.y,l=this.z,c=this.w;switch(e){case"YZX":const u=o*a+l*c;if(u>.499&&(n=2*Math.atan2(o,c),i=Math.PI/2,s=0),u<-.499&&(n=-2*Math.atan2(o,c),i=-Math.PI/2,s=0),n===void 0){const d=o*o,h=a*a,f=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*h-2*f),i=Math.asin(2*u),s=Math.atan2(2*o*c-2*a*l,1-2*d-2*f)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const s=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),u=Math.sin(n/2);return i==="XYZ"?(this.x=l*o*a+s*c*u,this.y=s*c*a-l*o*u,this.z=s*o*u+l*c*a,this.w=s*o*a-l*c*u):i==="YXZ"?(this.x=l*o*a+s*c*u,this.y=s*c*a-l*o*u,this.z=s*o*u-l*c*a,this.w=s*o*a+l*c*u):i==="ZXY"?(this.x=l*o*a-s*c*u,this.y=s*c*a+l*o*u,this.z=s*o*u+l*c*a,this.w=s*o*a-l*c*u):i==="ZYX"?(this.x=l*o*a-s*c*u,this.y=s*c*a+l*o*u,this.z=s*o*u-l*c*a,this.w=s*o*a+l*c*u):i==="YZX"?(this.x=l*o*a+s*c*u,this.y=s*c*a+l*o*u,this.z=s*o*u-l*c*a,this.w=s*o*a-l*c*u):i==="XZY"&&(this.x=l*o*a-s*c*u,this.y=s*c*a-l*o*u,this.z=s*o*u+l*c*a,this.w=s*o*a+l*c*u),this}clone(){return new Pe(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new Pe);const i=this.x,s=this.y,o=this.z,a=this.w;let l=t.x,c=t.y,u=t.z,d=t.w,h,f,p,v,m;return f=i*l+s*c+o*u+a*d,f<0&&(f=-f,l=-l,c=-c,u=-u,d=-d),1-f>1e-6?(h=Math.acos(f),p=Math.sin(h),v=Math.sin((1-e)*h)/p,m=Math.sin(e*h)/p):(v=1-e,m=e),n.x=v*i+m*l,n.y=v*s+m*c,n.z=v*o+m*u,n.w=v*a+m*d,n}integrate(t,e,n,i){i===void 0&&(i=new Pe);const s=t.x*n.x,o=t.y*n.y,a=t.z*n.z,l=this.x,c=this.y,u=this.z,d=this.w,h=e*.5;return i.x+=h*(s*d+o*u-a*c),i.y+=h*(o*d+a*l-s*u),i.z+=h*(a*d+s*c-o*l),i.w+=h*(-s*l-o*c-a*u),i}}const Z_=new C,K_=new C,$_={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class It{constructor(t){t===void 0&&(t={}),this.id=It.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}It.idCounter=0;It.types=$_;class de{constructor(t){t===void 0&&(t={}),this.position=new C,this.quaternion=new Pe,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return de.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return de.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new C),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new C),n.vsub(t,i),e.conjugate(Jc),Jc.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new C),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new C),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new C),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const Jc=new Pe;class hs extends It{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:o}=t;super({type:It.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new C;for(let s=0;s!==t.length;s++){const o=t[s],a=o.length;for(let l=0;l!==a;l++){const c=(l+1)%a;e[o[l]].vsub(e[o[c]],i),i.normalize();let u=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){u=!0;break}u||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new C;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],o=this.vertices[n[2]];hs.computeNormal(i,s,o,e)}static computeNormal(t,e,n,i){const s=new C,o=new C;e.vsub(t,o),n.vsub(e,s),s.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,o,a,l,c){const u=new C;let d=-1,h=-Number.MAX_VALUE;for(let p=0;p<n.faces.length;p++){u.copy(n.faceNormals[p]),s.vmult(u,u);const v=u.dot(o);v>h&&(h=v,d=p)}const f=[];for(let p=0;p<n.faces[d].length;p++){const v=n.vertices[n.faces[d][p]],m=new C;m.copy(v),s.vmult(m,m),i.vadd(m,m),f.push(m)}d>=0&&this.clipFaceAgainstHull(o,t,e,f,a,l,c)}findSeparatingAxis(t,e,n,i,s,o,a,l){const c=new C,u=new C,d=new C,h=new C,f=new C,p=new C;let v=Number.MAX_VALUE;const m=this;if(m.uniqueAxes)for(let g=0;g!==m.uniqueAxes.length;g++){n.vmult(m.uniqueAxes[g],c);const _=m.testSepAxis(c,t,e,n,i,s);if(_===!1)return!1;_<v&&(v=_,o.copy(c))}else{const g=a?a.length:m.faces.length;for(let _=0;_<g;_++){const x=a?a[_]:_;c.copy(m.faceNormals[x]),n.vmult(c,c);const y=m.testSepAxis(c,t,e,n,i,s);if(y===!1)return!1;y<v&&(v=y,o.copy(c))}}if(t.uniqueAxes)for(let g=0;g!==t.uniqueAxes.length;g++){s.vmult(t.uniqueAxes[g],u);const _=m.testSepAxis(u,t,e,n,i,s);if(_===!1)return!1;_<v&&(v=_,o.copy(u))}else{const g=l?l.length:t.faces.length;for(let _=0;_<g;_++){const x=l?l[_]:_;u.copy(t.faceNormals[x]),s.vmult(u,u);const y=m.testSepAxis(u,t,e,n,i,s);if(y===!1)return!1;y<v&&(v=y,o.copy(u))}}for(let g=0;g!==m.uniqueEdges.length;g++){n.vmult(m.uniqueEdges[g],h);for(let _=0;_!==t.uniqueEdges.length;_++)if(s.vmult(t.uniqueEdges[_],f),h.cross(f,p),!p.almostZero()){p.normalize();const x=m.testSepAxis(p,t,e,n,i,s);if(x===!1)return!1;x<v&&(v=x,o.copy(p))}}return i.vsub(e,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,i,s,o){const a=this;hs.project(a,t,n,i,Yo),hs.project(e,t,s,o,Zo);const l=Yo[0],c=Yo[1],u=Zo[0],d=Zo[1];if(l<d||u<c)return!1;const h=l-d,f=u-c;return h<f?h:f}calculateLocalInertia(t,e){const n=new C,i=new C;this.computeLocalAABB(i,n);const s=n.x-i.x,o=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*s*2*s+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,o,a){const l=new C,c=new C,u=new C,d=new C,h=new C,f=new C,p=new C,v=new C,m=this,g=[],_=i,x=g;let y=-1,E=Number.MAX_VALUE;for(let A=0;A<m.faces.length;A++){l.copy(m.faceNormals[A]),n.vmult(l,l);const L=l.dot(t);L<E&&(E=L,y=A)}if(y<0)return;const b=m.faces[y];b.connectedFaces=[];for(let A=0;A<m.faces.length;A++)for(let L=0;L<m.faces[A].length;L++)b.indexOf(m.faces[A][L])!==-1&&A!==y&&b.connectedFaces.indexOf(A)===-1&&b.connectedFaces.push(A);const M=b.length;for(let A=0;A<M;A++){const L=m.vertices[b[A]],I=m.vertices[b[(A+1)%M]];L.vsub(I,c),u.copy(c),n.vmult(u,u),e.vadd(u,u),d.copy(this.faceNormals[y]),n.vmult(d,d),e.vadd(d,d),u.cross(d,h),h.negate(h),f.copy(L),n.vmult(f,f),e.vadd(f,f);const D=b.connectedFaces[A];p.copy(this.faceNormals[D]);const w=this.getPlaneConstantOfFace(D);v.copy(p),n.vmult(v,v);const N=w-v.dot(e);for(this.clipFaceAgainstPlane(_,x,v,N);_.length;)_.shift();for(;x.length;)_.push(x.shift())}p.copy(this.faceNormals[y]);const S=this.getPlaneConstantOfFace(y);v.copy(p),n.vmult(v,v);const P=S-v.dot(e);for(let A=0;A<_.length;A++){let L=v.dot(_[A])+P;if(L<=s&&(console.log(`clamped: depth=${L} to minDist=${s}`),L=s),L<=o){const I=_[A];if(L<=1e-6){const D={point:I,normal:v,depth:L};a.push(D)}}}}clipFaceAgainstPlane(t,e,n,i){let s,o;const a=t.length;if(a<2)return e;let l=t[t.length-1],c=t[0];s=n.dot(l)+i;for(let u=0;u<a;u++){if(c=t[u],o=n.dot(c)+i,s<0)if(o<0){const d=new C;d.copy(c),e.push(d)}else{const d=new C;l.lerp(c,s/(s-o),d),e.push(d)}else if(o<0){const d=new C;l.lerp(c,s/(s-o),d),e.push(d),e.push(c)}l=c,s=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new C);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new C);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const s=this.vertices;let o,a,l,c,u,d,h=new C;for(let f=0;f<s.length;f++){h.copy(s[f]),e.vmult(h,h),t.vadd(h,h);const p=h;(o===void 0||p.x<o)&&(o=p.x),(c===void 0||p.x>c)&&(c=p.x),(a===void 0||p.y<a)&&(a=p.y),(u===void 0||p.y>u)&&(u=p.y),(l===void 0||p.z<l)&&(l=p.z),(d===void 0||p.z>d)&&(d=p.z)}n.set(o,a,l),i.set(c,u,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new C);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){const o=i[s];e.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){const o=this.faceNormals[s];e.vmult(o,o)}}if(t)for(let s=0;s<n;s++){const o=i[s];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,s=new C;this.getAveragePointLocal(s);for(let o=0;o<this.faces.length;o++){let a=i[o];const l=e[n[o][0]],c=new C;t.vsub(l,c);const u=a.dot(c),d=new C;s.vsub(l,d);const h=a.dot(d);if(u<0&&h>0||u>0&&h<0)return!1}return-1}static project(t,e,n,i,s){const o=t.vertices.length,a=J_;let l=0,c=0;const u=j_,d=t.vertices;u.setZero(),de.vectorToLocalFrame(n,i,e,a),de.pointToLocalFrame(n,i,u,u);const h=u.dot(a);c=l=d[0].dot(a);for(let f=1;f<o;f++){const p=d[f].dot(a);p>l&&(l=p),p<c&&(c=p)}if(c-=h,l-=h,c>l){const f=c;c=l,l=f}s[0]=l,s[1]=c}}const Yo=[],Zo=[];new C;const J_=new C,j_=new C;class $s extends It{constructor(t){super({type:It.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=C,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new hs({vertices:s,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new C),$s.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<s.length;o++)gi.set(s[o][0],s[o][1],s[o][2]),e.vmult(gi,gi),t.vadd(gi,gi),n(gi.x,gi.y,gi.z)}calculateWorldAABB(t,e,n,i){const s=this.halfExtents;Fn[0].set(s.x,s.y,s.z),Fn[1].set(-s.x,s.y,s.z),Fn[2].set(-s.x,-s.y,s.z),Fn[3].set(-s.x,-s.y,-s.z),Fn[4].set(s.x,-s.y,-s.z),Fn[5].set(s.x,s.y,-s.z),Fn[6].set(-s.x,s.y,-s.z),Fn[7].set(s.x,-s.y,s.z);const o=Fn[0];e.vmult(o,o),t.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const l=Fn[a];e.vmult(l,l),t.vadd(l,l);const c=l.x,u=l.y,d=l.z;c>i.x&&(i.x=c),u>i.y&&(i.y=u),d>i.z&&(i.z=d),c<n.x&&(n.x=c),u<n.y&&(n.y=u),d<n.z&&(n.z=d)}}}const gi=new C,Fn=[new C,new C,new C,new C,new C,new C,new C,new C],yl={DYNAMIC:1,STATIC:2,KINEMATIC:4},Sl={AWAKE:0,SLEEPY:1,SLEEPING:2};class At extends vu{constructor(t){t===void 0&&(t={}),super(),this.id=At.idCounter++,this.index=-1,this.world=null,this.vlambda=new C,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new C,this.previousPosition=new C,this.interpolatedPosition=new C,this.initPosition=new C,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new C,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new C,this.force=new C;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?At.STATIC:At.DYNAMIC,typeof t.type==typeof At.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=At.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new C,this.quaternion=new Pe,this.initQuaternion=new Pe,this.previousQuaternion=new Pe,this.interpolatedQuaternion=new Pe,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new C,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new C,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new C,this.invInertia=new C,this.invInertiaWorld=new Cn,this.invMassSolve=0,this.invInertiaSolve=new C,this.invInertiaWorldSolve=new Cn,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new C(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new C(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new fn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new C,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=At.AWAKE,this.wakeUpAfterNarrowphase=!1,t===At.SLEEPING&&this.dispatchEvent(At.wakeupEvent)}sleep(){this.sleepState=At.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===At.AWAKE&&n<i?(this.sleepState=At.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(At.sleepyEvent)):e===At.SLEEPY&&n>i?this.wakeUp():e===At.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(At.sleepEvent))}}updateSolveMassProperties(){this.sleepState===At.SLEEPING||this.type===At.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new C),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new C),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new C),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new C),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new C,s=new Pe;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let s=0;s!==n;s++){const o=t[s];o.updateBoundingSphereRadius();const a=e[s].length(),l=o.boundingSphereRadius;a+l>i&&(i=a+l)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=Q_,o=tv,a=this.quaternion,l=this.aabb,c=ev;for(let u=0;u!==i;u++){const d=t[u];a.vmult(e[u],s),s.vadd(this.position,s),a.mult(n[u],o),d.calculateWorldAABB(s,o,c.lowerBound,c.upperBound),u===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=nv,i=iv;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new C),this.type!==At.DYNAMIC)return;this.sleepState===At.SLEEPING&&this.wakeUp();const n=sv;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new C),this.type!==At.DYNAMIC)return;const n=rv,i=ov;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===At.DYNAMIC&&(this.sleepState===At.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new C),this.type!==At.DYNAMIC)return;this.sleepState===At.SLEEPING&&this.wakeUp();const n=e,i=av;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=lv;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new C),this.type!==At.DYNAMIC)return;const n=cv,i=hv;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=uv;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),$s.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new C;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===At.DYNAMIC||this.type===At.KINEMATIC)||this.sleepState===At.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,u=this.invMass,d=this.invInertiaWorld,h=this.linearFactor,f=u*t;i.x+=a.x*f*h.x,i.y+=a.y*f*h.y,i.z+=a.z*f*h.z;const p=d.elements,v=this.angularFactor,m=l.x*v.x,g=l.y*v.y,_=l.z*v.z;s.x+=t*(p[0]*m+p[1]*g+p[2]*_),s.y+=t*(p[3]*m+p[4]*g+p[5]*_),s.z+=t*(p[6]*m+p[7]*g+p[8]*_),o.x+=i.x*t,o.y+=i.y*t,o.z+=i.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}At.idCounter=0;At.COLLIDE_EVENT_NAME="collide";At.DYNAMIC=yl.DYNAMIC;At.STATIC=yl.STATIC;At.KINEMATIC=yl.KINEMATIC;At.AWAKE=Sl.AWAKE;At.SLEEPY=Sl.SLEEPY;At.SLEEPING=Sl.SLEEPING;At.wakeupEvent={type:"wakeup"};At.sleepyEvent={type:"sleepy"};At.sleepEvent={type:"sleep"};const Q_=new C,tv=new Pe,ev=new fn,nv=new Cn,iv=new Cn;new Cn;const sv=new C,rv=new C,ov=new C,av=new C,lv=new C,cv=new C,hv=new C,uv=new C;class xu{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!((t.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&t.collisionFilterMask)===0||((t.type&At.STATIC)!==0||t.sleepState===At.SLEEPING)&&((e.type&At.STATIC)!==0||e.sleepState===At.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const s=dv;e.position.vsub(t.position,s);const o=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=fv,i=pv,s=mv,o=t.length;for(let a=0;a!==o;a++)i[a]=t[a],s[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){const l=i[a].id,c=s[a].id,u=l<c?`${l},${c}`:`${c},${l}`;n[u]=a,n.keys.push(u)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];t.push(i[c]),e.push(s[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new C;t.position.vsub(e.position,n);const i=t.shapes[0],s=e.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const dv=new C;new C;new Pe;new C;const fv={keys:[]},pv=[],mv=[];new C;new C;new C;class gv extends xu{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,s=i.length;let o,a;for(let l=0;l!==s;l++)for(let c=0;c!==l;c++)o=i[l],a=i[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const s=t.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}}class Qr{constructor(){this.rayFromWorld=new C,this.rayToWorld=new C,this.hitNormalWorld=new C,this.hitPointWorld=new C,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=o,this.distance=a}}let Mu,yu,Su,bu,Eu,wu,Tu;const bl={CLOSEST:1,ANY:2,ALL:4};Mu=It.types.SPHERE;yu=It.types.PLANE;Su=It.types.BOX;bu=It.types.CYLINDER;Eu=It.types.CONVEXPOLYHEDRON;wu=It.types.HEIGHTFIELD;Tu=It.types.TRIMESH;class Ce{get[Mu](){return this._intersectSphere}get[yu](){return this._intersectPlane}get[Su](){return this._intersectBox}get[bu](){return this._intersectConvex}get[Eu](){return this._intersectConvex}get[wu](){return this._intersectHeightfield}get[Tu](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new C),e===void 0&&(e=new C),this.from=t.clone(),this.to=e.clone(),this.direction=new C,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Ce.ANY,this.result=new Qr,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||Ce.ANY,this.result=e.result||new Qr,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(jc),Ko.length=0,t.broadphase.aabbQuery(t,jc,Ko),this.intersectBodies(Ko),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||(this.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&this.collisionFilterMask)===0)return;const i=_v,s=vv;for(let o=0,a=t.shapes.length;o<a;o++){const l=t.shapes[o];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],s),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(l,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const s=this.from;if(Iv(s,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){const o=this.from,a=this.to,l=this.direction,c=new C(0,0,1);e.vmult(c,c);const u=new C;o.vsub(n,u);const d=u.dot(c);a.vsub(n,u);const h=u.dot(c);if(d*h>0||o.distanceTo(a)<d)return;const f=c.dot(l);if(Math.abs(f)<this.precision)return;const p=new C,v=new C,m=new C;o.vsub(n,p);const g=-c.dot(p)/f;l.scale(g,v),o.vadd(v,m),this.reportIntersection(c,m,s,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;const o=xv;o.from.copy(this.from),o.to.copy(this.to),de.pointToLocalFrame(n,e,o.from,o.from),de.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();const a=Mv;let l,c,u,d;l=c=0,u=d=t.data.length-1;const h=new fn;o.getAABB(h),t.getIndexOfPosition(h.lowerBound.x,h.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),t.getIndexOfPosition(h.upperBound.x,h.upperBound.y,a,!0),u=Math.min(u,a[0]+1),d=Math.min(d,a[1]+1);for(let f=l;f<u;f++)for(let p=c;p<d;p++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(f,p,h),!!h.overlapsRay(o)){if(t.getConvexTrianglePillar(f,p,!1),de.pointToWorldFrame(n,e,t.pillarOffset,Lr),this._intersectConvex(t.pillarConvex,e,Lr,i,s,Qc),this.result.shouldStop)return;t.getConvexTrianglePillar(f,p,!0),de.pointToWorldFrame(n,e,t.pillarOffset,Lr),this._intersectConvex(t.pillarConvex,e,Lr,i,s,Qc)}}}_intersectSphere(t,e,n,i,s){const o=this.from,a=this.to,l=t.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,u=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,h=u**2-4*c*d,f=yv,p=Sv;if(!(h<0))if(h===0)o.lerp(a,h,f),f.vsub(n,p),p.normalize(),this.reportIntersection(p,f,s,i,-1);else{const v=(-u-Math.sqrt(h))/(2*c),m=(-u+Math.sqrt(h))/(2*c);if(v>=0&&v<=1&&(o.lerp(a,v,f),f.vsub(n,p),p.normalize(),this.reportIntersection(p,f,s,i,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,f),f.vsub(n,p),p.normalize(),this.reportIntersection(p,f,s,i,-1))}}_intersectConvex(t,e,n,i,s,o){const a=bv,l=th,c=o&&o.faceList||null,u=t.faces,d=t.vertices,h=t.faceNormals,f=this.direction,p=this.from,v=this.to,m=p.distanceTo(v),g=c?c.length:u.length,_=this.result;for(let x=0;!_.shouldStop&&x<g;x++){const y=c?c[x]:x,E=u[y],b=h[y],M=e,S=n;l.copy(d[E[0]]),M.vmult(l,l),l.vadd(S,l),l.vsub(p,l),M.vmult(b,a);const P=f.dot(a);if(Math.abs(P)<this.precision)continue;const A=a.dot(l)/P;if(!(A<0)){f.scale(A,ln),ln.vadd(p,ln),wn.copy(d[E[0]]),M.vmult(wn,wn),S.vadd(wn,wn);for(let L=1;!_.shouldStop&&L<E.length-1;L++){On.copy(d[E[L]]),Bn.copy(d[E[L+1]]),M.vmult(On,On),M.vmult(Bn,Bn),S.vadd(On,On),S.vadd(Bn,Bn);const I=ln.distanceTo(p);!(Ce.pointInTriangle(ln,wn,On,Bn)||Ce.pointInTriangle(ln,On,wn,Bn))||I>m||this.reportIntersection(a,ln,s,i,y)}}}}_intersectTrimesh(t,e,n,i,s,o){const a=Ev,l=Pv,c=Lv,u=th,d=wv,h=Tv,f=Av,p=Cv,v=Rv,m=t.indices;t.vertices;const g=this.from,_=this.to,x=this.direction;c.position.copy(n),c.quaternion.copy(e),de.vectorToLocalFrame(n,e,x,d),de.pointToLocalFrame(n,e,g,h),de.pointToLocalFrame(n,e,_,f),f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,h.x*=t.scale.x,h.y*=t.scale.y,h.z*=t.scale.z,f.vsub(h,d),d.normalize();const y=h.distanceSquared(f);t.tree.rayQuery(this,c,l);for(let E=0,b=l.length;!this.result.shouldStop&&E!==b;E++){const M=l[E];t.getNormal(M,a),t.getVertex(m[M*3],wn),wn.vsub(h,u);const S=d.dot(a),P=a.dot(u)/S;if(P<0)continue;d.scale(P,ln),ln.vadd(h,ln),t.getVertex(m[M*3+1],On),t.getVertex(m[M*3+2],Bn);const A=ln.distanceSquared(h);!(Ce.pointInTriangle(ln,On,wn,Bn)||Ce.pointInTriangle(ln,wn,On,Bn))||A>y||(de.vectorToWorldFrame(e,a,v),de.pointToWorldFrame(n,e,ln,p),this.reportIntersection(v,p,s,i,M))}l.length=0}reportIntersection(t,e,n,i,s){const o=this.from,a=this.to,l=o.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case Ce.ALL:this.hasHit=!0,c.set(o,a,t,e,n,i,l),c.hasHit=!0,this.callback(c);break;case Ce.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,i,l));break;case Ce.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,Ni),n.vsub(e,Ls),t.vsub(e,$o);const s=Ni.dot(Ni),o=Ni.dot(Ls),a=Ni.dot($o),l=Ls.dot(Ls),c=Ls.dot($o);let u,d;return(u=l*a-o*c)>=0&&(d=s*c-o*a)>=0&&u+d<s*l-o*o}}Ce.CLOSEST=bl.CLOSEST;Ce.ANY=bl.ANY;Ce.ALL=bl.ALL;const jc=new fn,Ko=[],Ls=new C,$o=new C,_v=new C,vv=new Pe,ln=new C,wn=new C,On=new C,Bn=new C;new C;new Qr;const Qc={faceList:[0]},Lr=new C,xv=new Ce,Mv=[],yv=new C,Sv=new C,bv=new C;new C;new C;const th=new C,Ev=new C,wv=new C,Tv=new C,Av=new C,Rv=new C,Cv=new C;new fn;const Pv=[],Lv=new de,Ni=new C,Ir=new C;function Iv(r,t,e){e.vsub(r,Ni);const n=Ni.dot(t);return t.scale(n,Ir),Ir.vadd(r,Ir),e.distanceTo(Ir)}class ss extends xu{static checkBounds(t,e,n){let i,s;n===0?(i=t.position.x,s=e.position.x):n===1?(i=t.position.y,s=e.position.y):n===2&&(i=t.position.z,s=e.position.z);const o=t.boundingRadius,a=e.boundingRadius,l=i+o;return s-a<l}static insertionSortX(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.x<=i.aabb.lowerBound.x);s--)t[s+1]=t[s];t[s+1]=i}return t}static insertionSortY(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.y<=i.aabb.lowerBound.y);s--)t[s+1]=t[s];t[s+1]=i}return t}static insertionSortZ(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.z<=i.aabb.lowerBound.z);s--)t[s+1]=t[s];t[s+1]=i}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;const e=this.axisList;this._addBodyHandler=n=>{e.push(n.body)},this._removeBodyHandler=n=>{const i=e.indexOf(n.body);i!==-1&&e.splice(i,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let e=0;e<t.bodies.length;e++)this.axisList.push(t.bodies[e]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,e,n){const i=this.axisList,s=i.length,o=this.axisIndex;let a,l;for(this.dirty&&(this.sortList(),this.dirty=!1),a=0;a!==s;a++){const c=i[a];for(l=a+1;l<s;l++){const u=i[l];if(this.needBroadphaseCollision(c,u)){if(!ss.checkBounds(c,u,o))break;this.intersectionTest(c,u,e,n)}}}}sortList(){const t=this.axisList,e=this.axisIndex,n=t.length;for(let i=0;i!==n;i++){const s=t[i];s.aabbNeedsUpdate&&s.updateAABB()}e===0?ss.insertionSortX(t):e===1?ss.insertionSortY(t):e===2&&ss.insertionSortZ(t)}autoDetectAxis(){let t=0,e=0,n=0,i=0,s=0,o=0;const a=this.axisList,l=a.length,c=1/l;for(let f=0;f!==l;f++){const p=a[f],v=p.position.x;t+=v,e+=v*v;const m=p.position.y;n+=m,i+=m*m;const g=p.position.z;s+=g,o+=g*g}const u=e-t*t*c,d=i-n*n*c,h=o-s*s*c;u>d?u>h?this.axisIndex=0:this.axisIndex=2:d>h?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,e,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);const i=this.axisIndex;let s="x";i===1&&(s="y"),i===2&&(s="z");const o=this.axisList;e.lowerBound[s],e.upperBound[s];for(let a=0;a<o.length;a++){const l=o[a];l.aabbNeedsUpdate&&l.updateAABB(),l.aabb.overlaps(e)&&n.push(l)}return n}}class Dv{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class eh{constructor(){this.spatial=new C,this.rotational=new C}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class tr{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=tr.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new eh,this.jacobianElementB=new eh,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,s=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*s*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*t-i*e-o*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,o=i.position;return t.spatial.dot(s)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,o=i.velocity,a=n.angularVelocity,l=i.angularVelocity;return t.multiplyVectors(s,a)+e.multiplyVectors(o,l)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,o=i.vlambda,a=n.wlambda,l=i.wlambda;return t.multiplyVectors(s,a)+e.multiplyVectors(o,l)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,o=n.torque,a=i.force,l=i.torque,c=n.invMassSolve,u=i.invMassSolve;return s.scale(c,nh),a.scale(u,ih),n.invInertiaWorldSolve.vmult(o,sh),i.invInertiaWorldSolve.vmult(l,rh),t.multiplyVectors(nh,sh)+e.multiplyVectors(ih,rh)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=s+o;return a.vmult(t.rotational,Dr),c+=Dr.dot(t.rotational),l.vmult(e.rotational,Dr),c+=Dr.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,o=Nv;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}tr.idCounter=0;const nh=new C,ih=new C,sh=new C,rh=new C,Dr=new C,Nv=new C;class Uv extends tr{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new C,this.rj=new C,this.ni=new C}computeB(t){const e=this.a,n=this.b,i=this.bi,s=this.bj,o=this.ri,a=this.rj,l=Fv,c=Ov,u=i.velocity,d=i.angularVelocity;i.force,i.torque;const h=s.velocity,f=s.angularVelocity;s.force,s.torque;const p=Bv,v=this.jacobianElementA,m=this.jacobianElementB,g=this.ni;o.cross(g,l),a.cross(g,c),g.negate(v.spatial),l.negate(v.rotational),m.spatial.copy(g),m.rotational.copy(c),p.copy(s.position),p.vadd(a,p),p.vsub(i.position,p),p.vsub(o,p);const _=g.dot(p),x=this.restitution+1,y=x*h.dot(g)-x*u.dot(g)+f.dot(c)-d.dot(l),E=this.computeGiMf();return-_*e-y*n-t*E}getImpactVelocityAlongNormal(){const t=zv,e=kv,n=Gv,i=Hv,s=Vv;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,s),this.ni.dot(s)}}const Fv=new C,Ov=new C,Bv=new C,zv=new C,kv=new C,Gv=new C,Hv=new C,Vv=new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;class oh extends tr{constructor(t,e,n){super(t,e,-n,n),this.ri=new C,this.rj=new C,this.t=new C}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=Wv,o=qv,a=this.t;n.cross(a,s),i.cross(a,o);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),s.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);const u=this.computeGW(),d=this.computeGiMf();return-u*e-t*d}}const Wv=new C,qv=new C;class oo{constructor(t,e,n){n=Dv.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=oo.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}oo.idCounter=0;class er{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=er.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}er.idCounter=0;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new Ce;new C;new C;new C;new C(1,0,0),new C(0,1,0),new C(0,0,1);new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;class Xv extends It{constructor(t){if(super({type:It.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new C);const n=2*t*this.radius*this.radius/5;return e.x=n,e.y=n,e.z=n,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,n,i){const s=this.radius,o=["x","y","z"];for(let a=0;a<o.length;a++){const l=o[a];n[l]=t[l]-s,i[l]=t[l]+s}}}new C;new C;new C;new C;new C;new C;new C;new C;new C;class Yv extends hs{constructor(t,e,n,i){if(t===void 0&&(t=1),e===void 0&&(e=1),n===void 0&&(n=1),i===void 0&&(i=8),t<0)throw new Error("The cylinder radiusTop cannot be negative.");if(e<0)throw new Error("The cylinder radiusBottom cannot be negative.");const s=i,o=[],a=[],l=[],c=[],u=[],d=Math.cos,h=Math.sin;o.push(new C(-e*h(0),-n*.5,e*d(0))),c.push(0),o.push(new C(-t*h(0),n*.5,t*d(0))),u.push(1);for(let p=0;p<s;p++){const v=2*Math.PI/s*(p+1),m=2*Math.PI/s*(p+.5);p<s-1?(o.push(new C(-e*h(v),-n*.5,e*d(v))),c.push(2*p+2),o.push(new C(-t*h(v),n*.5,t*d(v))),u.push(2*p+3),l.push([2*p,2*p+1,2*p+3,2*p+2])):l.push([2*p,2*p+1,1,0]),(s%2===1||p<s/2)&&a.push(new C(-h(m),0,d(m)))}l.push(c),a.push(new C(0,1,0));const f=[];for(let p=0;p<u.length;p++)f.push(u[u.length-p-1]);l.push(f),super({vertices:o,faces:l,axes:a}),this.type=It.types.CYLINDER,this.radiusTop=t,this.radiusBottom=e,this.height=n,this.numSegments=i}}new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new fn;new C;new fn;new C;new C;new C;new C;new C;new C;new C;new fn;new C;new de;new fn;class Zv{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class Kv extends Zv{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=e.bodies,c=l.length,u=t;let d,h,f,p,v,m;if(a!==0)for(let y=0;y!==c;y++)l[y].updateSolveMassProperties();const g=Jv,_=jv,x=$v;g.length=a,_.length=a,x.length=a;for(let y=0;y!==a;y++){const E=o[y];x[y]=0,_[y]=E.computeB(u),g[y]=1/E.computeC()}if(a!==0){for(let b=0;b!==c;b++){const M=l[b],S=M.vlambda,P=M.wlambda;S.set(0,0,0),P.set(0,0,0)}for(n=0;n!==i;n++){p=0;for(let b=0;b!==a;b++){const M=o[b];d=_[b],h=g[b],m=x[b],v=M.computeGWlambda(),f=h*(d-v-M.eps*m),m+f<M.minForce?f=M.minForce-m:m+f>M.maxForce&&(f=M.maxForce-m),x[b]+=f,p+=f>0?f:-f,M.addToWlambda(f)}if(p*p<s)break}for(let b=0;b!==c;b++){const M=l[b],S=M.velocity,P=M.angularVelocity;M.vlambda.vmul(M.linearFactor,M.vlambda),S.vadd(M.vlambda,S),M.wlambda.vmul(M.angularFactor,M.wlambda),P.vadd(M.wlambda,P)}let y=o.length;const E=1/u;for(;y--;)o[y].multiplier=x[y]*E}return n}}const $v=[],Jv=[],jv=[];class Qv{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class tx extends Qv{constructor(){super(...arguments),this.type=C}constructObject(){return new C}}const Ee={sphereSphere:It.types.SPHERE,spherePlane:It.types.SPHERE|It.types.PLANE,boxBox:It.types.BOX|It.types.BOX,sphereBox:It.types.SPHERE|It.types.BOX,planeBox:It.types.PLANE|It.types.BOX,convexConvex:It.types.CONVEXPOLYHEDRON,sphereConvex:It.types.SPHERE|It.types.CONVEXPOLYHEDRON,planeConvex:It.types.PLANE|It.types.CONVEXPOLYHEDRON,boxConvex:It.types.BOX|It.types.CONVEXPOLYHEDRON,sphereHeightfield:It.types.SPHERE|It.types.HEIGHTFIELD,boxHeightfield:It.types.BOX|It.types.HEIGHTFIELD,convexHeightfield:It.types.CONVEXPOLYHEDRON|It.types.HEIGHTFIELD,sphereParticle:It.types.PARTICLE|It.types.SPHERE,planeParticle:It.types.PLANE|It.types.PARTICLE,boxParticle:It.types.BOX|It.types.PARTICLE,convexParticle:It.types.PARTICLE|It.types.CONVEXPOLYHEDRON,cylinderCylinder:It.types.CYLINDER,sphereCylinder:It.types.SPHERE|It.types.CYLINDER,planeCylinder:It.types.PLANE|It.types.CYLINDER,boxCylinder:It.types.BOX|It.types.CYLINDER,convexCylinder:It.types.CONVEXPOLYHEDRON|It.types.CYLINDER,heightfieldCylinder:It.types.HEIGHTFIELD|It.types.CYLINDER,particleCylinder:It.types.PARTICLE|It.types.CYLINDER,sphereTrimesh:It.types.SPHERE|It.types.TRIMESH,planeTrimesh:It.types.PLANE|It.types.TRIMESH};class ex{get[Ee.sphereSphere](){return this.sphereSphere}get[Ee.spherePlane](){return this.spherePlane}get[Ee.boxBox](){return this.boxBox}get[Ee.sphereBox](){return this.sphereBox}get[Ee.planeBox](){return this.planeBox}get[Ee.convexConvex](){return this.convexConvex}get[Ee.sphereConvex](){return this.sphereConvex}get[Ee.planeConvex](){return this.planeConvex}get[Ee.boxConvex](){return this.boxConvex}get[Ee.sphereHeightfield](){return this.sphereHeightfield}get[Ee.boxHeightfield](){return this.boxHeightfield}get[Ee.convexHeightfield](){return this.convexHeightfield}get[Ee.sphereParticle](){return this.sphereParticle}get[Ee.planeParticle](){return this.planeParticle}get[Ee.boxParticle](){return this.boxParticle}get[Ee.convexParticle](){return this.convexParticle}get[Ee.cylinderCylinder](){return this.convexConvex}get[Ee.sphereCylinder](){return this.sphereConvex}get[Ee.planeCylinder](){return this.planeConvex}get[Ee.boxCylinder](){return this.boxConvex}get[Ee.convexCylinder](){return this.convexConvex}get[Ee.heightfieldCylinder](){return this.heightfieldCylinder}get[Ee.particleCylinder](){return this.particleCylinder}get[Ee.sphereTrimesh](){return this.sphereTrimesh}get[Ee.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new tx,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,s,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new Uv(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||t.material,u=i.material||e.material;return c&&u&&c.restitution>=0&&u.restitution>=0&&(a.restitution=c.restitution*u.restitution),a.si=s||n,a.sj=o||i,a}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,s=t.si,o=t.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const u=s.material||n.material,d=o.material||i.material;if(u&&d&&u.friction>=0&&d.friction>=0&&(c=u.friction*d.friction),c>0){const h=c*(a.frictionGravity||a.gravity).length();let f=n.invMass+i.invMass;f>0&&(f=1/f);const p=this.frictionEquationPool,v=p.length?p.pop():new oh(n,i,h*f),m=p.length?p.pop():new oh(n,i,h*f);return v.bi=m.bi=n,v.bj=m.bj=i,v.minForce=m.minForce=-h*f,v.maxForce=m.maxForce=h*f,v.ri.copy(t.ri),v.rj.copy(t.rj),m.ri.copy(t.ri),m.rj.copy(t.rj),t.ni.tangents(v.t,m.t),v.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),v.enabled=m.enabled=t.enabled,e.push(v,m),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Ii.setZero(),ji.setZero(),Qi.setZero();const s=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==s?(Ii.vadd(e.ni,Ii),ji.vadd(e.ri,ji),Qi.vadd(e.rj,Qi)):(Ii.vsub(e.ni,Ii),ji.vadd(e.rj,ji),Qi.vadd(e.ri,Qi));const o=1/t;ji.scale(o,n.ri),Qi.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Ii.normalize(),Ii.tangents(n.t,i.t)}getContacts(t,e,n,i,s,o,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const l=sx,c=rx,u=nx,d=ix;for(let h=0,f=t.length;h!==f;h++){const p=t[h],v=e[h];let m=null;p.material&&v.material&&(m=n.getContactMaterial(p.material,v.material)||null);const g=p.type&At.KINEMATIC&&v.type&At.STATIC||p.type&At.STATIC&&v.type&At.KINEMATIC||p.type&At.KINEMATIC&&v.type&At.KINEMATIC;for(let _=0;_<p.shapes.length;_++){p.quaternion.mult(p.shapeOrientations[_],l),p.quaternion.vmult(p.shapeOffsets[_],u),u.vadd(p.position,u);const x=p.shapes[_];for(let y=0;y<v.shapes.length;y++){v.quaternion.mult(v.shapeOrientations[y],c),v.quaternion.vmult(v.shapeOffsets[y],d),d.vadd(v.position,d);const E=v.shapes[y];if(!(x.collisionFilterMask&E.collisionFilterGroup&&E.collisionFilterMask&x.collisionFilterGroup)||u.distanceTo(d)>x.boundingSphereRadius+E.boundingSphereRadius)continue;let b=null;x.material&&E.material&&(b=n.getContactMaterial(x.material,E.material)||null),this.currentContactMaterial=b||m||n.defaultContactMaterial;const M=x.type|E.type,S=this[M];if(S){let P=!1;x.type<E.type?P=S.call(this,x,E,u,d,l,c,p,v,x,E,g):P=S.call(this,E,x,d,u,c,l,v,p,x,E,g),P&&g&&(n.shapeOverlapKeeper.set(x.id,E.id),n.bodyOverlapKeeper.set(p.id,v.id))}}}}}sphereSphere(t,e,n,i,s,o,a,l,c,u,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;const h=this.createContactEquation(a,l,t,e,c,u);i.vsub(n,h.ni),h.ni.normalize(),h.ri.copy(h.ni),h.rj.copy(h.ni),h.ri.scale(t.radius,h.ri),h.rj.scale(-e.radius,h.rj),h.ri.vadd(n,h.ri),h.ri.vsub(a.position,h.ri),h.rj.vadd(i,h.rj),h.rj.vsub(l.position,h.rj),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}spherePlane(t,e,n,i,s,o,a,l,c,u,d){const h=this.createContactEquation(a,l,t,e,c,u);if(h.ni.set(0,0,1),o.vmult(h.ni,h.ni),h.ni.negate(h.ni),h.ni.normalize(),h.ni.scale(t.radius,h.ri),n.vsub(i,Nr),h.ni.scale(h.ni.dot(Nr),ah),Nr.vsub(ah,h.rj),-Nr.dot(h.ni)<=t.radius){if(d)return!0;const f=h.ri,p=h.rj;f.vadd(n,f),f.vsub(a.position,f),p.vadd(i,p),p.vsub(l.position,p),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}boxBox(t,e,n,i,s,o,a,l,c,u,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,s,o,a,l,t,e,d)}sphereBox(t,e,n,i,s,o,a,l,c,u,d){const h=this.v3pool,f=Lx;n.vsub(i,Ur),e.getSideNormals(f,o);const p=t.radius;let v=!1;const m=Dx,g=Nx,_=Ux;let x=null,y=0,E=0,b=0,M=null;for(let F=0,B=f.length;F!==B&&v===!1;F++){const Y=Rx;Y.copy(f[F]);const q=Y.length();Y.normalize();const O=Ur.dot(Y);if(O<q+p&&O>0){const H=Cx,W=Px;H.copy(f[(F+1)%3]),W.copy(f[(F+2)%3]);const rt=H.length(),X=W.length();H.normalize(),W.normalize();const J=Ur.dot(H),nt=Ur.dot(W);if(J<rt&&J>-rt&&nt<X&&nt>-X){const ct=Math.abs(O-q-p);if((M===null||ct<M)&&(M=ct,E=J,b=nt,x=q,m.copy(Y),g.copy(H),_.copy(W),y++,d))return!0}}}if(y){v=!0;const F=this.createContactEquation(a,l,t,e,c,u);m.scale(-p,F.ri),F.ni.copy(m),F.ni.negate(F.ni),m.scale(x,m),g.scale(E,g),m.vadd(g,m),_.scale(b,_),m.vadd(_,F.rj),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),F.rj.vadd(i,F.rj),F.rj.vsub(l.position,F.rj),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}let S=h.get();const P=Ix;for(let F=0;F!==2&&!v;F++)for(let B=0;B!==2&&!v;B++)for(let Y=0;Y!==2&&!v;Y++)if(S.set(0,0,0),F?S.vadd(f[0],S):S.vsub(f[0],S),B?S.vadd(f[1],S):S.vsub(f[1],S),Y?S.vadd(f[2],S):S.vsub(f[2],S),i.vadd(S,P),P.vsub(n,P),P.lengthSquared()<p*p){if(d)return!0;v=!0;const q=this.createContactEquation(a,l,t,e,c,u);q.ri.copy(P),q.ri.normalize(),q.ni.copy(q.ri),q.ri.scale(p,q.ri),q.rj.copy(S),q.ri.vadd(n,q.ri),q.ri.vsub(a.position,q.ri),q.rj.vadd(i,q.rj),q.rj.vsub(l.position,q.rj),this.result.push(q),this.createFrictionEquationsFromContact(q,this.frictionResult)}h.release(S),S=null;const A=h.get(),L=h.get(),I=h.get(),D=h.get(),w=h.get(),N=f.length;for(let F=0;F!==N&&!v;F++)for(let B=0;B!==N&&!v;B++)if(F%3!==B%3){f[B].cross(f[F],A),A.normalize(),f[F].vadd(f[B],L),I.copy(n),I.vsub(L,I),I.vsub(i,I);const Y=I.dot(A);A.scale(Y,D);let q=0;for(;q===F%3||q===B%3;)q++;w.copy(n),w.vsub(D,w),w.vsub(L,w),w.vsub(i,w);const O=Math.abs(Y),H=w.length();if(O<f[q].length()&&H<p){if(d)return!0;v=!0;const W=this.createContactEquation(a,l,t,e,c,u);L.vadd(D,W.rj),W.rj.copy(W.rj),w.negate(W.ni),W.ni.normalize(),W.ri.copy(W.rj),W.ri.vadd(i,W.ri),W.ri.vsub(n,W.ri),W.ri.normalize(),W.ri.scale(p,W.ri),W.ri.vadd(n,W.ri),W.ri.vsub(a.position,W.ri),W.rj.vadd(i,W.rj),W.rj.vsub(l.position,W.rj),this.result.push(W),this.createFrictionEquationsFromContact(W,this.frictionResult)}}h.release(A,L,I,D,w)}planeBox(t,e,n,i,s,o,a,l,c,u,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,s,o,a,l,t,e,d)}convexConvex(t,e,n,i,s,o,a,l,c,u,d,h,f){const p=$x;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,i,o,p,h,f)){const v=[],m=Jx;t.clipAgainstHull(n,s,e,i,o,p,-100,100,v);let g=0;for(let _=0;_!==v.length;_++){if(d)return!0;const x=this.createContactEquation(a,l,t,e,c,u),y=x.ri,E=x.rj;p.negate(x.ni),v[_].normal.negate(m),m.scale(v[_].depth,m),v[_].point.vadd(m,y),E.copy(v[_].point),y.vsub(n,y),E.vsub(i,E),y.vadd(n,y),y.vsub(a.position,y),E.vadd(i,E),E.vsub(l.position,E),this.result.push(x),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}}sphereConvex(t,e,n,i,s,o,a,l,c,u,d){const h=this.v3pool;n.vsub(i,Fx);const f=e.faceNormals,p=e.faces,v=e.vertices,m=t.radius;let g=!1;for(let _=0;_!==v.length;_++){const x=v[_],y=kx;o.vmult(x,y),i.vadd(y,y);const E=zx;if(y.vsub(n,E),E.lengthSquared()<m*m){if(d)return!0;g=!0;const b=this.createContactEquation(a,l,t,e,c,u);b.ri.copy(E),b.ri.normalize(),b.ni.copy(b.ri),b.ri.scale(m,b.ri),y.vsub(i,b.rj),b.ri.vadd(n,b.ri),b.ri.vsub(a.position,b.ri),b.rj.vadd(i,b.rj),b.rj.vsub(l.position,b.rj),this.result.push(b),this.createFrictionEquationsFromContact(b,this.frictionResult);return}}for(let _=0,x=p.length;_!==x&&g===!1;_++){const y=f[_],E=p[_],b=Gx;o.vmult(y,b);const M=Hx;o.vmult(v[E[0]],M),M.vadd(i,M);const S=Vx;b.scale(-m,S),n.vadd(S,S);const P=Wx;S.vsub(M,P);const A=P.dot(b),L=qx;if(n.vsub(M,L),A<0&&L.dot(b)>0){const I=[];for(let D=0,w=E.length;D!==w;D++){const N=h.get();o.vmult(v[E[D]],N),i.vadd(N,N),I.push(N)}if(Ax(I,b,n)){if(d)return!0;g=!0;const D=this.createContactEquation(a,l,t,e,c,u);b.scale(-m,D.ri),b.negate(D.ni);const w=h.get();b.scale(-A,w);const N=h.get();b.scale(-m,N),n.vsub(i,D.rj),D.rj.vadd(N,D.rj),D.rj.vadd(w,D.rj),D.rj.vadd(i,D.rj),D.rj.vsub(l.position,D.rj),D.ri.vadd(n,D.ri),D.ri.vsub(a.position,D.ri),h.release(w),h.release(N),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult);for(let F=0,B=I.length;F!==B;F++)h.release(I[F]);return}else for(let D=0;D!==E.length;D++){const w=h.get(),N=h.get();o.vmult(v[E[(D+1)%E.length]],w),o.vmult(v[E[(D+2)%E.length]],N),i.vadd(w,w),i.vadd(N,N);const F=Ox;N.vsub(w,F);const B=Bx;F.unit(B);const Y=h.get(),q=h.get();n.vsub(w,q);const O=q.dot(B);B.scale(O,Y),Y.vadd(w,Y);const H=h.get();if(Y.vsub(n,H),O>0&&O*O<F.lengthSquared()&&H.lengthSquared()<m*m){if(d)return!0;const W=this.createContactEquation(a,l,t,e,c,u);Y.vsub(i,W.rj),Y.vsub(n,W.ni),W.ni.normalize(),W.ni.scale(m,W.ri),W.rj.vadd(i,W.rj),W.rj.vsub(l.position,W.rj),W.ri.vadd(n,W.ri),W.ri.vsub(a.position,W.ri),this.result.push(W),this.createFrictionEquationsFromContact(W,this.frictionResult);for(let rt=0,X=I.length;rt!==X;rt++)h.release(I[rt]);h.release(w),h.release(N),h.release(Y),h.release(H),h.release(q);return}h.release(w),h.release(N),h.release(Y),h.release(H),h.release(q)}for(let D=0,w=I.length;D!==w;D++)h.release(I[D])}}}planeConvex(t,e,n,i,s,o,a,l,c,u,d){const h=Xx,f=Yx;f.set(0,0,1),s.vmult(f,f);let p=0;const v=Zx;for(let m=0;m!==e.vertices.length;m++)if(h.copy(e.vertices[m]),o.vmult(h,h),i.vadd(h,h),h.vsub(n,v),f.dot(v)<=0){if(d)return!0;const _=this.createContactEquation(a,l,t,e,c,u),x=Kx;f.scale(f.dot(v),x),h.vsub(x,x),x.vsub(n,_.ri),_.ni.copy(f),h.vsub(i,_.rj),_.ri.vadd(n,_.ri),_.ri.vsub(a.position,_.ri),_.rj.vadd(i,_.rj),_.rj.vsub(l.position,_.rj),this.result.push(_),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}boxConvex(t,e,n,i,s,o,a,l,c,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,s,o,a,l,t,e,d)}sphereHeightfield(t,e,n,i,s,o,a,l,c,u,d){const h=e.data,f=t.radius,p=e.elementSize,v=cM,m=lM;de.pointToLocalFrame(i,o,n,m);let g=Math.floor((m.x-f)/p)-1,_=Math.ceil((m.x+f)/p)+1,x=Math.floor((m.y-f)/p)-1,y=Math.ceil((m.y+f)/p)+1;if(_<0||y<0||g>h.length||x>h[0].length)return;g<0&&(g=0),_<0&&(_=0),x<0&&(x=0),y<0&&(y=0),g>=h.length&&(g=h.length-1),_>=h.length&&(_=h.length-1),y>=h[0].length&&(y=h[0].length-1),x>=h[0].length&&(x=h[0].length-1);const E=[];e.getRectMinMax(g,x,_,y,E);const b=E[0],M=E[1];if(m.z-f>M||m.z+f<b)return;const S=this.result;for(let P=g;P<_;P++)for(let A=x;A<y;A++){const L=S.length;let I=!1;if(e.getConvexTrianglePillar(P,A,!1),de.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(I=this.sphereConvex(t,e.pillarConvex,n,v,s,o,a,l,t,e,d)),d&&I||(e.getConvexTrianglePillar(P,A,!0),de.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(I=this.sphereConvex(t,e.pillarConvex,n,v,s,o,a,l,t,e,d)),d&&I))return!0;if(S.length-L>2)return}}boxHeightfield(t,e,n,i,s,o,a,l,c,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,s,o,a,l,t,e,d)}convexHeightfield(t,e,n,i,s,o,a,l,c,u,d){const h=e.data,f=e.elementSize,p=t.boundingSphereRadius,v=oM,m=aM,g=rM;de.pointToLocalFrame(i,o,n,g);let _=Math.floor((g.x-p)/f)-1,x=Math.ceil((g.x+p)/f)+1,y=Math.floor((g.y-p)/f)-1,E=Math.ceil((g.y+p)/f)+1;if(x<0||E<0||_>h.length||y>h[0].length)return;_<0&&(_=0),x<0&&(x=0),y<0&&(y=0),E<0&&(E=0),_>=h.length&&(_=h.length-1),x>=h.length&&(x=h.length-1),E>=h[0].length&&(E=h[0].length-1),y>=h[0].length&&(y=h[0].length-1);const b=[];e.getRectMinMax(_,y,x,E,b);const M=b[0],S=b[1];if(!(g.z-p>S||g.z+p<M))for(let P=_;P<x;P++)for(let A=y;A<E;A++){let L=!1;if(e.getConvexTrianglePillar(P,A,!1),de.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(L=this.convexConvex(t,e.pillarConvex,n,v,s,o,a,l,null,null,d,m,null)),d&&L||(e.getConvexTrianglePillar(P,A,!0),de.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(L=this.convexConvex(t,e.pillarConvex,n,v,s,o,a,l,null,null,d,m,null)),d&&L))return!0}}sphereParticle(t,e,n,i,s,o,a,l,c,u,d){const h=eM;if(h.set(0,0,1),i.vsub(n,h),h.lengthSquared()<=t.radius*t.radius){if(d)return!0;const p=this.createContactEquation(l,a,e,t,c,u);h.normalize(),p.rj.copy(h),p.rj.scale(t.radius,p.rj),p.ni.copy(h),p.ni.negate(p.ni),p.ri.set(0,0,0),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}}planeParticle(t,e,n,i,s,o,a,l,c,u,d){const h=jx;h.set(0,0,1),a.quaternion.vmult(h,h);const f=Qx;if(i.vsub(a.position,f),h.dot(f)<=0){if(d)return!0;const v=this.createContactEquation(l,a,e,t,c,u);v.ni.copy(h),v.ni.negate(v.ni),v.ri.set(0,0,0);const m=tM;h.scale(h.dot(i),m),i.vsub(m,m),v.rj.copy(m),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxParticle(t,e,n,i,s,o,a,l,c,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,s,o,a,l,t,e,d)}convexParticle(t,e,n,i,s,o,a,l,c,u,d){let h=-1;const f=iM,p=sM;let v=null;const m=nM;if(m.copy(i),m.vsub(n,m),s.conjugate(lh),lh.vmult(m,m),t.pointIsInside(m)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let g=0,_=t.faces.length;g!==_;g++){const x=[t.worldVertices[t.faces[g][0]]],y=t.worldFaceNormals[g];i.vsub(x[0],ch);const E=-y.dot(ch);if(v===null||Math.abs(E)<Math.abs(v)){if(d)return!0;v=E,h=g,f.copy(y)}}if(h!==-1){const g=this.createContactEquation(l,a,e,t,c,u);f.scale(v,p),p.vadd(i,p),p.vsub(n,p),g.rj.copy(p),f.negate(g.ni),g.ri.set(0,0,0);const _=g.ri,x=g.rj;_.vadd(i,_),_.vsub(l.position,_),x.vadd(n,x),x.vsub(a.position,x),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,s,o,a,l,c,u,d){return this.convexHeightfield(e,t,i,n,o,s,l,a,c,u,d)}particleCylinder(t,e,n,i,s,o,a,l,c,u,d){return this.convexParticle(e,t,i,n,o,s,l,a,c,u,d)}sphereTrimesh(t,e,n,i,s,o,a,l,c,u,d){const h=fx,f=px,p=mx,v=gx,m=_x,g=vx,_=Sx,x=dx,y=hx,E=bx;de.pointToLocalFrame(i,o,n,m);const b=t.radius;_.lowerBound.set(m.x-b,m.y-b,m.z-b),_.upperBound.set(m.x+b,m.y+b,m.z+b),e.getTrianglesInAABB(_,E);const M=ux,S=t.radius*t.radius;for(let D=0;D<E.length;D++)for(let w=0;w<3;w++)if(e.getVertex(e.indices[E[D]*3+w],M),M.vsub(m,y),y.lengthSquared()<=S){if(x.copy(M),de.pointToWorldFrame(i,o,x,M),M.vsub(n,y),d)return!0;let N=this.createContactEquation(a,l,t,e,c,u);N.ni.copy(y),N.ni.normalize(),N.ri.copy(N.ni),N.ri.scale(t.radius,N.ri),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),N.rj.copy(M),N.rj.vsub(l.position,N.rj),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}for(let D=0;D<E.length;D++)for(let w=0;w<3;w++){e.getVertex(e.indices[E[D]*3+w],h),e.getVertex(e.indices[E[D]*3+(w+1)%3],f),f.vsub(h,p),m.vsub(f,g);const N=g.dot(p);m.vsub(h,g);let F=g.dot(p);if(F>0&&N<0&&(m.vsub(h,g),v.copy(p),v.normalize(),F=g.dot(v),v.scale(F,g),g.vadd(h,g),g.distanceTo(m)<t.radius)){if(d)return!0;const Y=this.createContactEquation(a,l,t,e,c,u);g.vsub(m,Y.ni),Y.ni.normalize(),Y.ni.scale(t.radius,Y.ri),Y.ri.vadd(n,Y.ri),Y.ri.vsub(a.position,Y.ri),de.pointToWorldFrame(i,o,g,g),g.vsub(l.position,Y.rj),de.vectorToWorldFrame(o,Y.ni,Y.ni),de.vectorToWorldFrame(o,Y.ri,Y.ri),this.result.push(Y),this.createFrictionEquationsFromContact(Y,this.frictionResult)}}const P=xx,A=Mx,L=yx,I=cx;for(let D=0,w=E.length;D!==w;D++){e.getTriangleVertices(E[D],P,A,L),e.getNormal(E[D],I),m.vsub(P,g);let N=g.dot(I);if(I.scale(N,g),m.vsub(g,g),N=g.distanceTo(m),Ce.pointInTriangle(g,P,A,L)&&N<t.radius){if(d)return!0;let F=this.createContactEquation(a,l,t,e,c,u);g.vsub(m,F.ni),F.ni.normalize(),F.ni.scale(t.radius,F.ri),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),de.pointToWorldFrame(i,o,g,g),g.vsub(l.position,F.rj),de.vectorToWorldFrame(o,F.ni,F.ni),de.vectorToWorldFrame(o,F.ri,F.ri),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}}E.length=0}planeTrimesh(t,e,n,i,s,o,a,l,c,u,d){const h=new C,f=ox;f.set(0,0,1),s.vmult(f,f);for(let p=0;p<e.vertices.length/3;p++){e.getVertex(p,h);const v=new C;v.copy(h),de.pointToWorldFrame(i,o,v,h);const m=ax;if(h.vsub(n,m),f.dot(m)<=0){if(d)return!0;const _=this.createContactEquation(a,l,t,e,c,u);_.ni.copy(f);const x=lx;f.scale(m.dot(f),x),h.vsub(x,x),_.ri.copy(x),_.ri.vsub(a.position,_.ri),_.rj.copy(h),_.rj.vsub(l.position,_.rj),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}}}const Ii=new C,ji=new C,Qi=new C,nx=new C,ix=new C,sx=new Pe,rx=new Pe,ox=new C,ax=new C,lx=new C,cx=new C,hx=new C;new C;const ux=new C,dx=new C,fx=new C,px=new C,mx=new C,gx=new C,_x=new C,vx=new C,xx=new C,Mx=new C,yx=new C,Sx=new fn,bx=[],Nr=new C,ah=new C,Ex=new C,wx=new C,Tx=new C;function Ax(r,t,e){let n=null;const i=r.length;for(let s=0;s!==i;s++){const o=r[s],a=Ex;r[(s+1)%i].vsub(o,a);const l=wx;a.cross(t,l);const c=Tx;e.vsub(o,c);const u=l.dot(c);if(n===null||u>0&&n===!0||u<=0&&n===!1){n===null&&(n=u>0);continue}else return!1}return!0}const Ur=new C,Rx=new C,Cx=new C,Px=new C,Lx=[new C,new C,new C,new C,new C,new C],Ix=new C,Dx=new C,Nx=new C,Ux=new C,Fx=new C,Ox=new C,Bx=new C,zx=new C,kx=new C,Gx=new C,Hx=new C,Vx=new C,Wx=new C,qx=new C;new C;new C;const Xx=new C,Yx=new C,Zx=new C,Kx=new C,$x=new C,Jx=new C,jx=new C,Qx=new C,tM=new C,eM=new C,lh=new Pe,nM=new C;new C;const iM=new C,ch=new C,sM=new C,rM=new C,oM=new C,aM=[0],lM=new C,cM=new C;class hh{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let o=i.length-1;o>=s;o--)i[o+1]=i[o];i[s]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,s=n.length,o=i.length;let a=0;for(let l=0;l<s;l++){let c=!1;const u=n[l];for(;u>i[a];)a++;c=u===i[a],c||uh(t,u)}a=0;for(let l=0;l<o;l++){let c=!1;const u=i[l];for(;u>n[a];)a++;c=n[a]===u,c||uh(e,u)}}}function uh(r,t){r.push((t&4294901760)>>16,t&65535)}const Jo=(r,t)=>r<t?`${r}-${t}`:`${t}-${r}`;class hM{constructor(){this.data={keys:[]}}get(t,e){const n=Jo(t,e);return this.data[n]}set(t,e,n){const i=Jo(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=Jo(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class uM extends vu{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new C,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new C,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new gv,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new Kv,this.constraints=[],this.narrowphase=new ex(this),this.collisionMatrix=new $c,this.collisionMatrixPrevious=new $c,this.bodyOverlapKeeper=new hh,this.shapeOverlapKeeper=new hh,this.contactmaterials=[],this.contactMaterialTable=new hM,this.defaultMaterial=new er("default"),this.defaultContactMaterial=new oo(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof Qr?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=Ce.ALL,n.from=t,n.to=e,n.callback=i,jo.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=Ce.ANY,n.from=t,n.to=e,n.result=i,jo.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=Ce.CLOSEST,n.from=t,n.to=e,n.result=i,jo.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof At&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let s=0;s<i.length;s++){const o=i[s];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=Ne.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=Ne.now();let s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(Ne.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=gM,i=_M,s=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,u=this.profile,d=At.DYNAMIC;let h=-1/0;const f=this.constraints,p=mM;l.length();const v=l.x,m=l.y,g=l.z;let _=0;for(c&&(h=Ne.now()),_=0;_!==s;_++){const D=o[_];if(D.type===d){const w=D.force,N=D.mass;w.x+=N*v,w.y+=N*m,w.z+=N*g}}for(let D=0,w=this.subsystems.length;D!==w;D++)this.subsystems[D].update();c&&(h=Ne.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(u.broadphase=Ne.now()-h);let x=f.length;for(_=0;_!==x;_++){const D=f[_];if(!D.collideConnected)for(let w=n.length-1;w>=0;w-=1)(D.bodyA===n[w]&&D.bodyB===i[w]||D.bodyB===n[w]&&D.bodyA===i[w])&&(n.splice(w,1),i.splice(w,1))}this.collisionMatrixTick(),c&&(h=Ne.now());const y=pM,E=e.length;for(_=0;_!==E;_++)y.push(e[_]);e.length=0;const b=this.frictionEquations.length;for(_=0;_!==b;_++)p.push(this.frictionEquations[_]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,y,this.frictionEquations,p),c&&(u.narrowphase=Ne.now()-h),c&&(h=Ne.now()),_=0;_<this.frictionEquations.length;_++)a.addEquation(this.frictionEquations[_]);const M=e.length;for(let D=0;D!==M;D++){const w=e[D],N=w.bi,F=w.bj,B=w.si,Y=w.sj;let q;if(N.material&&F.material?q=this.getContactMaterial(N.material,F.material)||this.defaultContactMaterial:q=this.defaultContactMaterial,q.friction,N.material&&F.material&&(N.material.friction>=0&&F.material.friction>=0&&N.material.friction*F.material.friction,N.material.restitution>=0&&F.material.restitution>=0&&(w.restitution=N.material.restitution*F.material.restitution)),a.addEquation(w),N.allowSleep&&N.type===At.DYNAMIC&&N.sleepState===At.SLEEPING&&F.sleepState===At.AWAKE&&F.type!==At.STATIC){const O=F.velocity.lengthSquared()+F.angularVelocity.lengthSquared(),H=F.sleepSpeedLimit**2;O>=H*2&&(N.wakeUpAfterNarrowphase=!0)}if(F.allowSleep&&F.type===At.DYNAMIC&&F.sleepState===At.SLEEPING&&N.sleepState===At.AWAKE&&N.type!==At.STATIC){const O=N.velocity.lengthSquared()+N.angularVelocity.lengthSquared(),H=N.sleepSpeedLimit**2;O>=H*2&&(F.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(N,F,!0),this.collisionMatrixPrevious.get(N,F)||(Is.body=F,Is.contact=w,N.dispatchEvent(Is),Is.body=N,F.dispatchEvent(Is)),this.bodyOverlapKeeper.set(N.id,F.id),this.shapeOverlapKeeper.set(B.id,Y.id)}for(this.emitContactEvents(),c&&(u.makeContactConstraints=Ne.now()-h,h=Ne.now()),_=0;_!==s;_++){const D=o[_];D.wakeUpAfterNarrowphase&&(D.wakeUp(),D.wakeUpAfterNarrowphase=!1)}for(x=f.length,_=0;_!==x;_++){const D=f[_];D.update();for(let w=0,N=D.equations.length;w!==N;w++){const F=D.equations[w];a.addEquation(F)}}a.solve(t,this),c&&(u.solve=Ne.now()-h),a.removeAllEquations();const S=Math.pow;for(_=0;_!==s;_++){const D=o[_];if(D.type&d){const w=S(1-D.linearDamping,t),N=D.velocity;N.scale(w,N);const F=D.angularVelocity;if(F){const B=S(1-D.angularDamping,t);F.scale(B,F)}}}this.dispatchEvent(fM),c&&(h=Ne.now());const A=this.stepnumber%(this.quatNormalizeSkip+1)===0,L=this.quatNormalizeFast;for(_=0;_!==s;_++)o[_].integrate(t,A,L);this.clearForces(),this.broadphase.dirty=!0,c&&(u.integrate=Ne.now()-h),this.stepnumber+=1,this.dispatchEvent(dM);let I=!0;if(this.allowSleep)for(I=!1,_=0;_!==s;_++){const D=o[_];D.sleepTick(this.time),D.sleepState!==At.SLEEPING&&(I=!0)}this.hasActiveBodies=I}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(Jn,jn),t){for(let s=0,o=Jn.length;s<o;s+=2)Ds.bodyA=this.getBodyById(Jn[s]),Ds.bodyB=this.getBodyById(Jn[s+1]),this.dispatchEvent(Ds);Ds.bodyA=Ds.bodyB=null}if(e){for(let s=0,o=jn.length;s<o;s+=2)Ns.bodyA=this.getBodyById(jn[s]),Ns.bodyB=this.getBodyById(jn[s+1]),this.dispatchEvent(Ns);Ns.bodyA=Ns.bodyB=null}Jn.length=jn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(Jn,jn),n){for(let s=0,o=Jn.length;s<o;s+=2){const a=this.getShapeById(Jn[s]),l=this.getShapeById(Jn[s+1]);Qn.shapeA=a,Qn.shapeB=l,a&&(Qn.bodyA=a.body),l&&(Qn.bodyB=l.body),this.dispatchEvent(Qn)}Qn.bodyA=Qn.bodyB=Qn.shapeA=Qn.shapeB=null}if(i){for(let s=0,o=jn.length;s<o;s+=2){const a=this.getShapeById(jn[s]),l=this.getShapeById(jn[s+1]);ti.shapeA=a,ti.shapeB=l,a&&(ti.bodyA=a.body),l&&(ti.bodyB=l.body),this.dispatchEvent(ti)}ti.bodyA=ti.bodyB=ti.shapeA=ti.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new fn;const jo=new Ce,Ne=globalThis.performance||{};if(!Ne.now){let r=Date.now();Ne.timing&&Ne.timing.navigationStart&&(r=Ne.timing.navigationStart),Ne.now=()=>Date.now()-r}new C;const dM={type:"postStep"},fM={type:"preStep"},Is={type:At.COLLIDE_EVENT_NAME,body:null,contact:null},pM=[],mM=[],gM=[],_M=[],Jn=[],jn=[],Ds={type:"beginContact",bodyA:null,bodyB:null},Ns={type:"endContact",bodyA:null,bodyB:null},Qn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},ti={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},rs=r=>r&&[r.x,r.y,r.z].every(Number.isFinite),dh=r=>rs(r.position)&&rs(r.velocity)&&rs(r.angularVelocity)&&rs(r.quaternion)&&Number.isFinite(r.quaternion.w);class vM{constructor(t,e){this.world=new uM({gravity:new C(0,-9.81,0),allowSleep:!0}),this.world.broadphase=new ss(this.world),this.world.solver.iterations=12,this.world.solver.tolerance=1e-4,this.world.defaultContactMaterial.friction=.55,this.world.defaultContactMaterial.restitution=.12,this.world.defaultContactMaterial.contactEquationStiffness=1e7,this.bodies=[],this.accumulator=0,this.drag=null,this.stepCount=0,this.placements=new Map;for(const n of t){const i=new At({mass:0,shape:new $s(new C(...n.size.map(s=>s/2))),position:new C(...n.pos)});n.quat&&i.quaternion.set(...n.quat),this.world.addBody(i)}for(const n of e)this.addBody(n)}addBody(t){const e=new er({friction:.6,restitution:t.restitution??.12}),n=new At({mass:t.mass,material:e,position:new C(...t.pos),linearDamping:.2,angularDamping:.4,sleepSpeedLimit:.12,sleepTimeLimit:.65});return t.shape==="sphere"?n.addShape(new Xv(t.radius)):t.shape==="cylinder"?n.addShape(new Yv(t.radius,t.radius,t.height,12)):n.addShape(new $s(new C(...t.size.map(i=>i/2)))),t.rotation&&n.quaternion.setFromEuler(...t.rotation),n.home={pos:n.position.clone(),quat:n.quaternion.clone()},n.name=t.name,n.mesh=t.mesh,this.world.addBody(n),this.bodies.push(n),t.body=n,this.syncBody(n,!0),n}suspendBody(t){t.suspended||(this.drag?.body===t&&this.endDrag({cancel:!0}),this.finishPlacement(t),this.syncBody(t,!0),t.velocity.setZero(),t.angularVelocity.setZero(),t.force.setZero(),t.torque.setZero(),t.sleep(),this.world.removeBody(t),t.suspended=!0)}resumeBody(t){t.suspended&&(t.position.copy(t.mesh.position),t.quaternion.copy(t.mesh.quaternion),t.previousPosition.copy(t.position),t.interpolatedPosition.copy(t.position),t.previousQuaternion.copy(t.quaternion),t.interpolatedQuaternion.copy(t.quaternion),t.aabbNeedsUpdate=!0,t.updateInertiaWorld(!0),t.suspended=!1,this.world.addBody(t),t.wakeUp())}startDrag(t,e){if(!this.bodies.includes(t)||t.suspended||!rs(e))return!1;this.endDrag({cancel:!0});const n=new C(e.x-t.position.x,e.y-t.position.y,e.z-t.position.z),i=new At({mass:0,collisionFilterGroup:0,collisionFilterMask:0});i.position.copy(t.position),this.placements.set(t,{fixedRotation:t.fixedRotation,quaternion:t.quaternion.clone()}),t.fixedRotation=!0,t.velocity.scale(.25,t.velocity),t.force.setZero(),this.holdOrientation(t),t.updateMassProperties();const s={stiffness:t.mass*200,damping:t.mass*22};return t.wakeUp(),this.drag={body:t,anchor:i,spring:s,offset:n},!0}moveDrag(t){if(!this.drag||!rs(t))return;const{anchor:e,offset:n}=this.drag;e.position.set(t.x-n.x,t.y-n.y,t.z-n.z)}applyDragForce(){if(!this.drag)return;const{body:t,anchor:e,spring:n}=this.drag;t.wakeUp();for(const i of["x","y","z"])t.force[i]+=n.stiffness*(e.position[i]-t.position[i])-n.damping*t.velocity[i]}endDrag({cancel:t=!1}={}){if(!this.drag)return;const{body:e}=this.drag;this.holdOrientation(e),this.drag=null,this.finishPlacement(e),e.force.setZero(),t&&e.velocity.setZero();const n=e.velocity.length();n>8&&e.velocity.scale(8/n,e.velocity),e.wakeUp()}holdOrientation(t){const e=this.placements.get(t);e&&(t.quaternion.copy(e.quaternion),t.previousQuaternion.copy(e.quaternion),t.interpolatedQuaternion.copy(e.quaternion),t.angularVelocity.setZero(),t.torque.setZero(),t.updateInertiaWorld(!0))}finishPlacement(t){const e=this.placements.get(t);e&&(this.placements.delete(t),t.fixedRotation=e.fixedRotation,t.angularVelocity.setZero(),t.torque.setZero(),t.updateMassProperties())}resetBody(t){this.drag?.body===t&&this.endDrag({cancel:!0}),this.finishPlacement(t),t.position.copy(t.home.pos),t.quaternion.copy(t.home.quat),t.previousPosition.copy(t.position),t.interpolatedPosition.copy(t.position),t.previousQuaternion.copy(t.quaternion),t.interpolatedQuaternion.copy(t.quaternion),t.velocity.setZero(),t.angularVelocity.setZero(),t.force.setZero(),t.torque.setZero(),t.aabbNeedsUpdate=!0,t.updateInertiaWorld(!0),t.wakeUp(),this.syncBody(t,!0)}reset(){this.endDrag({cancel:!0}),this.accumulator=0;for(const t of this.bodies)this.resetBody(t)}step(t){for(const i of this.bodies)!i.suspended&&!dh(i)&&this.resetBody(i);this.accumulator+=Number.isFinite(t)?Math.max(0,Math.min(t,.05)):0;let e=0;const n=1/120;for(;this.accumulator>=n&&e<6;){this.applyDragForce(),this.world.step(n),this.accumulator-=n,e++,this.stepCount++;for(const i of this.bodies){if(i.suspended)continue;this.holdOrientation(i),i.sleepState===At.SLEEPING&&this.drag?.body!==i&&this.finishPlacement(i),(!dh(i)||this.drag?.body!==i&&i.position.y<-30)&&this.resetBody(i);const s=i.velocity.length();s>8&&i.velocity.scale(8/s,i.velocity);const o=i.angularVelocity.length();o>16&&i.angularVelocity.scale(16/o,i.angularVelocity)}}for(const i of this.bodies)this.syncBody(i,!1,this.accumulator/n);return this.bodies.some(i=>!i.suspended&&i.sleepState!==At.SLEEPING)||!!this.drag}syncBody(t,e,n=1){!t.mesh||t.suspended||(e||t.sleepState===At.SLEEPING?(t.mesh.position.copy(t.position),t.mesh.quaternion.copy(this.placements.get(t)?.quaternion??t.quaternion)):(t.mesh.position.copy(t.previousPosition).lerp(t.position,n),t.previousQuaternion.slerp(t.quaternion,n,t.interpolatedQuaternion),t.mesh.quaternion.copy(this.placements.get(t)?.quaternion??t.interpolatedQuaternion)))}get awake(){return this.bodies.filter(t=>!t.suspended&&t.sleepState!==At.SLEEPING).length}}const fh=r=>{const t=He.clamp(r,0,1);return t*t*(3-2*t)},Fr=Object.freeze({firstFrameHoldMs:80,igniteMs:70,revealMs:430,reducedRevealMs:100});class xM{constructor(t,e,n,i,s){this.renderer=t,this.camera=e,this.lamp=n,this.reduced=i,this.dark=new Kr,this.dark.background=new Xt("#080907"),this.dark.add(n.group),this.lights=s.map(a=>{const l=a.clone();return this.dark.add(l),{light:l,intensity:a.intensity}}),this.stats={phase:"loading",progress:0,lampStart:null,lampEnd:null,maxLampDrift:0,materialChanges:0,sceneFrames:0,sceneTime:0},this.size=new Gt;const o=Math.min(4,t.capabilities.maxSamples);this.worldTarget=new xn(1,1,{type:Mn,samples:o}),this.lampTarget=new xn(1,1,{type:Mn,samples:o}),this.uniforms={worldMap:{value:this.worldTarget.texture},lampMap:{value:this.lampTarget.texture},origin:{value:new Gt},aspect:{value:1},progress:{value:0},reduced:{value:i?1:0}},this.material=new Si({uniforms:this.uniforms,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D worldMap,lampMap;uniform vec2 origin;uniform float aspect,progress,reduced;
      void main(){
        vec3 color=texture2D(worldMap,vUv).rgb;
        if(progress<1.){
          vec2 delta=(vUv-origin)*vec2(aspect,1.);float dist=length(delta),angle=atan(delta.y,delta.x);
          float reach=length(max(origin,1.-origin)*vec2(aspect,1.))+.2;
          float radius=mix(-.14,reach,progress);
          float edge=dist+.018*sin(angle*5.+dist*7.)+.01*sin(angle*9.-dist*11.);
          float reveal=1.-smoothstep(radius-.08,radius+.1,edge);
          reveal=mix(reveal,progress,reduced);
          color=mix(texture2D(lampMap,vUv).rgb,color,reveal);
          color+=vec3(1.,.59,.24)*exp(-dist*dist/.014)*sin(progress*3.14159)*.08;
        }
        gl_FragColor=vec4(color,1.);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),this.quad=new Me(new li(2,2),this.material),this.screen=new Kr,this.screen.add(this.quad),this.screenCamera=new _l}point(){return this.camera.updateMatrixWorld(),this.lamp.group.localToWorld(new k(0,1.96,0)).project(this.camera)}materials(){const t=[];return this.lamp.group.traverse(e=>{e.isMesh&&t.push(e.material.uuid)}),t.join(",")}resize(){this.renderer.getDrawingBufferSize(this.size),this.worldTarget.setSize(this.size.x,this.size.y),this.lampTarget?.setSize(this.size.x,this.size.y),this.uniforms.aspect.value=this.size.x/this.size.y}display(){this.renderer.setRenderTarget(null),this.renderer.render(this.screen,this.screenCamera)}render(t,e,n){const i=this.renderer;this.lamp.setPower(n);for(const{light:a,intensity:l}of this.lights)a.intensity=l*(.22+.78*n);this.uniforms.progress.value=e;const s=this.point();this.uniforms.origin.value.set(s.x*.5+.5,s.y*.5+.5),this.stats.progress=e,this.stats.maxLampDrift=Math.max(this.stats.maxLampDrift,s.distanceTo(this.initial)),this.materials()!==this.initialMaterials&&this.stats.materialChanges++;const o=this.lamp.group.parent;t&&(i.setRenderTarget(this.worldTarget),i.render(t,this.camera)),this.dark.add(this.lamp.group),i.setRenderTarget(this.lampTarget),i.render(this.dark,this.camera),o.add(this.lamp.group),t?this.uniforms.worldMap.value=this.worldTarget.texture:this.uniforms.worldMap.value=this.lampTarget.texture,this.display(),document.getElementById("loading").dataset.phase=this.stats.phase}async show(){this.initial=this.point(),this.initialMaterials=this.materials(),this.stats.lampStart=this.initial.toArray(),this.render(null,0,0),this.began=performance.now(),document.getElementById("loading").hidden=!0,await new Promise(t=>requestAnimationFrame(()=>requestAnimationFrame(t)))}async reveal(t,e){const n=this.renderer;n.setRenderTarget(this.worldTarget),await n.compileAsync(t,this.camera),n.setRenderTarget(null);let i=0;await new Promise(s=>{const o=a=>{const l=e(a);this.stats.sceneFrames++,this.stats.sceneTime=l.elapsed,i+=l.dt*1e3;const c=this.reduced?0:Fr.igniteMs,u=this.reduced?Fr.reducedRevealMs:Fr.revealMs;let d=He.clamp((i-c)/u,0,1),h=fh(d),f=fh(i/160);a-this.began<Fr.firstFrameHoldMs&&(i=0,d=h=f=0),this.stats.phase=i<c?"lighting":"revealing",this.render(t,h,f),d<1?requestAnimationFrame(o):s()};requestAnimationFrame(o)}),this.lamp.setPower(1),this.stats.phase="ready",this.stats.progress=1,this.stats.lampEnd=this.point().toArray(),this.uniforms.lampMap.value=this.worldTarget.texture,this.lampTarget.dispose(),this.lampTarget=null;for(const{light:s}of this.lights)s.shadow?.dispose();this.dark.clear(),this.lights=[],document.getElementById("loading").dataset.phase="ready"}renderScene(t){this.uniforms.progress.value=1,this.renderer.setRenderTarget(this.worldTarget),this.renderer.render(t,this.camera),this.display()}}function MM(r,t){let e=null,n=0,i=0;return{prepare(){for(let s=0;s<240;s++)r.step(1/120);t?.(0)},advance(s){const o=e===null?0:Math.max(0,Math.min((s-e)/1e3,.05));e=s,n+=o,i++;const a=r.step(o);return t?.(n),{dt:o,awake:a,elapsed:n,frames:i}},pause(){e=null},get elapsed(){return n},get frames(){return i}}}const ao=.55,xi=ao*1006/768,yM={name:"letter",section:"letter",label:"Letter · click to read, drag to throw",shape:"box",size:[.64,.028,.35],mass:.08,pos:[-1.38,1.47,-.8],rotation:[0,-.12,0]},rn=r=>(r=He.clamp(r,0,1),r*r*r*(r*(r*6-15)+10));function SM(r,t,e){const n=xi/(t.height/e.height*2*Math.tan(He.degToRad(r.fov/2))),i=2*n*Math.tan(He.degToRad(r.fov/2));return{position:new k((t.left+t.width/2-e.width/2)/e.height*i,-(t.top+t.height/2-e.height/2)/e.height*i,-n).applyQuaternion(r.quaternion).add(r.position),quaternion:r.quaternion.clone()}}function ph(r,t,e){const n=rn(e),i=new k(0,.42,0),s=t.position.clone().sub(r.position),o=r.position.clone().addScaledVector(s,.27).add(i),a=t.position.clone().addScaledVector(s,-.16).addScaledVector(i,.45);return{position:new uf(r.position,o,a,t.position).getPoint(n),quaternion:r.quaternion.clone().slerp(t.quaternion,rn(Math.min(1,e/.84)))}}function Au(r){return{outer:He.clamp(rn(r/.46),0,1),inner:He.clamp(rn((r-.54)/.46),0,1)}}function bM(){const r=xi/6,t=Array.from({length:37},(a,l)=>(l/36-.5)*xi);for(const a of[-1,1])for(const l of[0,5e-4,.001,.0015,.002,.003,.004,.005,.006,.008,.01,.012])t.push(a*(r+l));t.sort((a,l)=>a-l);const e=t.filter((a,l)=>!l||a-t[l-1]>1e-7),n=[],i=[],s=[];for(let a=0;a<e.length;a++)for(let l=0;l<=16;l++)if(n.push((l/16-.5)*ao,e[a],0),i.push(l/16,e[a]/xi+.5),a<e.length-1&&l<16){const c=a*17+l;s.push(c,c+1,c+17,c+1,c+18,c+17)}const o=new Ue;return o.setAttribute("position",new pe(n,3)),o.setAttribute("uv",new pe(i,2)),o.setIndex(s),o.computeVertexNormals(),o}function EM(r,t,e=0){const n=r.attributes.position,i=r.attributes.uv,s=xi/6,{inner:o,outer:a}=Au(t);for(let l=0;l<n.count;l++){const c=(i.getX(l)-.5)*ao,u=(i.getY(l)-.5)*xi;let d=u,h=0;if(Math.abs(u)>s){const f=u>0?1:-1,p=(1-(f>0?o:a))*Math.PI,v=f>0?.0012:.0028,m=Math.abs(u)-s,g=Math.min(p,m/v),_=Math.max(0,m-v*p);d=f*(s+v*Math.sin(g)+_*Math.cos(p)),h=v*(1-Math.cos(g))+_*Math.sin(p)}h+=e*Math.sin((d/xi+.5)*Math.PI)*(1+.35*Math.sin(i.getX(l)*Math.PI)),n.setXYZ(l,c,d,h)}n.needsUpdate=!0,r.computeVertexNormals(),r.computeBoundingSphere()}function mh(r,t,e,n){return r.updateMatrixWorld(!0),[[-1,1],[1,1],[1,-1],[-1,-1]].map(([i,s])=>{const o=r.localToWorld(new k(i*ao/2,s*xi/2,0)).project(t);return{x:(o.x*.5+.5)*e,y:(.5-o.y*.5)*n}})}const Di=Object.freeze({autoDelay:.04,shake:.32,position:.08,unseal:.12,extract:.14,flight:.67,arrival:.08}),gh={linkedin:"https://www.linkedin.com/in/rahul-hira-59892128a/",email:"mailto:rahul.hira@icloud.com"},wM="Hi! I'm Rahul, a high school senior in San Francisco. I'm planning to use this website as a personal portfolio, but it's still under development. In the mean time, here's my LinkedIn! Feel free to contact me at rahul.hira@icloud.com. Thanks for stopping by. Best, Rahul Hira.";function TM(){const r=document.createElement("canvas");r.width=r.height=256;const t=r.getContext("2d"),e=t.createImageData(256,256);let n=87123;const i=()=>(n=Math.imul(n,1664525)+1013904223>>>0,n/4294967296);for(let s=0;s<e.data.length;s+=4){const o=(i()-.5)*15;e.data[s]=231+o,e.data[s+1]=215+o,e.data[s+2]=176+o,e.data[s+3]=255}t.putImageData(e,0,0);for(let s=0;s<450;s++){t.strokeStyle=s%2?"#795c3511":"#fff6dd35",t.lineWidth=.35;const o=i()*256,a=i()*256;t.beginPath(),t.moveTo(o,a),t.lineTo(o+i()*12-6,a+i()*3-1.5),t.stroke()}return r}function _h(r,t){const e=document.createElement("canvas");e.width=768,e.height=1006;const n=e.getContext("2d");n.beginPath(),[[.5,.4],[12,.1],[23,.5],[37,0],[48,.35],[62,.1],[76,.45],[88,.05],[99.4,.5],[99.7,14],[99.3,29],[99.8,44],[99.4,59],[99.9,73],[99.5,88],[99.1,99.5],[86,99.8],[72,99.4],[59,100],[45,99.6],[30,99.9],[17,99.5],[.6,99.8],[.2,86],[.5,71],[.1,57],[.6,44],[0,29],[.4,15]].forEach(([o,a],l)=>n[l?"lineTo":"moveTo"](o*7.68,a*10.06)),n.closePath(),n.clip(),n.fillStyle=n.createPattern(r,"repeat"),n.fillRect(0,0,768,1006);const i=n.createRadialGradient(384,430,100,384,503,650);i.addColorStop(0,"#fff8df55"),i.addColorStop(1,"#79572b30"),n.fillStyle=i,n.fillRect(0,0,768,1006);for(const o of[1006/3,1006*2/3]){const a=n.createLinearGradient(0,o-7,0,o+7);a.addColorStop(0,"#79572b00"),a.addColorStop(.48,"#79572b16"),a.addColorStop(.52,"#fff8df40"),a.addColorStop(1,"#fff8df00"),n.fillStyle=a,n.fillRect(0,o-7,768,14)}t&&n.drawImage(t,38,30,692,907);const s=new io(e);return s.colorSpace=Ge,s.anisotropy=4,s}async function AM({parent:r,camera:t,canvas:e,physics:n,reduced:i,onLock:s,invalidate:o}){const a=new Image;a.src="./assets/letter-handwriting.png",await a.decode();const l=TM(),c=_h(l),u=_h(l,a),d=new on({map:c,roughness:1,side:Qe}),h=new Vn;r.add(h);const f=new Me(new oi(.64,.014,.35),d);f.castShadow=f.receiveShadow=!0,h.add(f);const p=new Ue().setFromPoints([new k(-.31,.008,.16),new k(.02,.008,-.03),new k(.31,.008,.16)]);h.add(new of(p,new Jh({color:"#a68b5f",transparent:!0,opacity:.55})));const v=new Vn;v.position.set(0,.012,-.175),h.add(v);const m=new Ue;m.setAttribute("position",new pe([-.32,0,0,.32,0,0,0,0,.235],3)),m.setAttribute("uv",new pe([0,0,1,0,.5,1],2)),m.computeVertexNormals();const g=new Me(m,d);g.castShadow=g.receiveShadow=!0,v.add(g);const _=new Me(new ai(.032,.035,.012,20),new on({color:"#8e4939",roughness:.83}));_.position.set(0,.021,.022),_.castShadow=!0,h.add(_);const x=new Me(new oi(.66,.045,.37),new Ln({visible:!1}));h.add(x);const y={...yM,mesh:h};h.userData.item=y,n.addBody(y),n.suspendBody(y.body);const E=new Kr,b=bM(),M={transparent:!0,alphaTest:.02,toneMapped:!1,depthTest:!0,depthWrite:!0},S=new Me(b,new Ln({...M,map:u,side:Mi})),P=new Me(b,new Ln({...M,map:c,side:tn}));S.add(P),E.add(S),S.visible=!1;let A=0;function L(Rt,Yt=0){A=Rt,EM(S.geometry,Rt,Yt)}const I=document.createElement("dialog");I.className="letter-dialog",I.setAttribute("aria-label","A letter from Rahul"),I.setAttribute("aria-describedby","letter-transcript"),I.innerHTML=`<div class="letter-scrim" aria-hidden="true"></div><div class="letter-sheet"><article class="letter-paper"><img class="letter-composite" alt="" draggable="false"><div class="letter-writing"><a class="letter-link letter-linkedin" href="${gh.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="Rahul Hira on LinkedIn"><span class="visually-hidden">LinkedIn</span></a><a class="letter-link letter-email" href="${gh.email}" aria-label="Email Rahul at rahul.hira@icloud.com"><span class="visually-hidden">rahul.hira@icloud.com</span></a></div><p id="letter-transcript" class="visually-hidden">${wM}</p></article><button class="letter-close" type="button" aria-label="Close letter">×</button></div>`,document.body.append(I);const D=I.querySelector(".letter-sheet"),w=I.querySelector(".letter-scrim"),N=I.querySelector(".letter-close"),F=I.querySelector(".letter-composite");F.src=u.image.toDataURL(),await F.decode();let B="dormant",Y=0,q=!1,O=0,H=null,W=null,rt=null,X=null,J=null,nt=null,ct=0,at=null;const Pt=null?.get("letter"),dt=Rt=>({position:Rt.position.clone(),quaternion:Rt.quaternion.clone()});function Ot(Rt,Yt){Rt.position.copy(Yt.position),Rt.quaternion.copy(Yt.quaternion)}function Lt(Rt){B=Rt,Y=0,ct=0,I.dataset.state=Rt}function Ct(Rt=.045){return h.updateMatrixWorld(!0),{position:h.localToWorld(new k(0,Rt,-.025)),quaternion:h.getWorldQuaternion(new vn).multiply(new vn().setFromEuler(new Pn(-Math.PI/2,0,0)))}}function Vt(){return SM(t,D.getBoundingClientRect(),{width:innerWidth,height:innerHeight})}function Wt(){D.inert=!0,D.style.opacity="0",w.style.opacity="0",I.dataset.state="flying",I.showModal(),J=Vt()}function ye(){v.rotation.x=0,_.visible=!0,S.visible=!1}function ie(Rt){if(!["dormant","waiting","closed"].includes(B))return;q=!1,s(!0),n.suspendBody(y.body),W=dt(h);const Yt=new Pn().setFromQuaternion(h.quaternion,"YXZ").y;rt={position:W.position.clone().add(new k(0,.065,0)),quaternion:new vn().setFromEuler(new Pn(0,Yt,0))},Lt(Rt&&!i?"shaking":"positioning"),o()}function it(){Ot(S,J),L(1);const Rt=mh(S,t,innerWidth,innerHeight),Yt=D.getBoundingClientRect(),z=[[Yt.left,Yt.top],[Yt.right,Yt.top],[Yt.right,Yt.bottom],[Yt.left,Yt.bottom]];nt=Math.max(...Rt.map((Kt,oe)=>Math.hypot(Kt.x-z[oe][0],Kt.y-z[oe][1]))),Lt("arriving")}function pt(){Ot(h,W),ye(),I.close(),Lt("closed"),n.resumeBody(y.body),s(!1),e.focus({preventScroll:!0}),o()}function bt(){!I.open||!["open","arriving"].includes(B)||(J=Vt(),Ot(S,J),L(1),S.material.opacity=1,S.visible=!0,at=Number(D.style.opacity)||1,D.inert=!0,Lt("departing"),o())}return N.addEventListener("click",bt),I.addEventListener("cancel",Rt=>{Rt.preventDefault(),bt()}),I.addEventListener("keydown",Rt=>Rt.stopPropagation()),window.addEventListener("resize",()=>{I.open&&(J=Vt(),["arriving","open","departing"].includes(B)&&Ot(S,J))}),{item:y,group:h,open:()=>ie(!1),close:bt,arm(){B==="dormant"&&(q=!0,Lt("waiting"),o())},render(Rt){if(!S.visible)return;P.material.opacity=S.material.opacity;const Yt=Rt.autoClear;Rt.autoClear=!1,Rt.clearDepth(),Rt.render(E,t),Rt.autoClear=Yt},update(Rt,Yt=!0){if(Y+=Rt,I.open&&["flying","arriving","departing","returning"].includes(B)&&(J=Vt()),B==="waiting")q&&Yt?Y>Di.autoDelay&&ie(!0):Y=0;else if(B==="shaking"){const z=Math.min(1,Y/Di.shake),Kt=Math.sin(z*Math.PI);Ot(h,W),h.rotateY(Math.sin(z*36)*.075*Kt),h.rotateZ(Math.sin(z*31)*.025*Kt),h.position.y+=Math.abs(Math.sin(z*28))*.025*Kt,z===1&&(Ot(h,W),Lt("positioning"))}else if(B==="positioning"){const z=i?1:Math.min(1,Y/Di.position),Kt=rn(z);h.position.lerpVectors(W.position,rt.position,Kt),h.quaternion.slerpQuaternions(W.quaternion,rt.quaternion,Kt),z===1&&Lt("unsealing")}else if(B==="unsealing"){const z=i?1:Math.min(1,Y/Di.unseal);v.rotation.x=-Math.PI*.86*rn(z),_.visible=z<.28,z===1&&(Ot(S,Ct()),L(0),S.visible=!0,S.material.opacity=0,Lt("extracting"))}else if(B==="extracting"){const z=i?1:Math.min(1,Y/Di.extract);ct=z;const Kt=Ct(),oe=Ct(.38);S.position.lerpVectors(Kt.position,oe.position,rn(z)),S.quaternion.copy(Kt.quaternion),L(rn(z)*.15),S.material.opacity=Math.min(1,z*6),z===1&&Pt!=="extract"&&(X=dt(S),Wt(),Lt("flying"))}else if(B==="flying"){const z=i?1:Math.min(1,Y/Di.flight);ct=z,Ot(S,ph(X,J,z)),L(.15+.85*rn(Math.min(1,z/.72)),Math.sin(z*Math.PI)*.025),z===1&&Pt!=="flight"&&it()}else if(B==="arriving"){const z=Math.min(1,Y/Di.arrival),Kt=rn(z);D.style.opacity=String(Kt),w.style.opacity=String(Kt),z===1&&(S.visible=!1,Lt("open"),D.inert=!1,O++,H=performance.now(),N.focus({preventScroll:!0}))}else if(B==="departing"){const z=Math.min(1,Y/.14),Kt=rn(z);D.style.opacity=String(at*(1-Kt)),w.style.opacity=String(1-Kt),z===1&&Lt("returning")}else if(B==="returning"){const z=i?1:Math.min(1,Y/.9),Kt=1-z;Ot(S,ph(X,J,Kt)),L(.15+.85*rn(Math.min(1,Kt/.7)),Math.sin(z*Math.PI)*.018),z===1&&Lt("inserting")}else if(B==="inserting"){const z=i?1:Math.min(1,Y/.35),Kt=Ct(.38),oe=Ct();S.position.lerpVectors(Kt.position,oe.position,rn(z)),S.quaternion.copy(Kt.quaternion),L(.15*(1-rn(z))),S.material.opacity=Math.min(1,(1-z)*5),z===1&&(S.visible=!1,Lt("resealing"))}else if(B==="resealing"){const z=i?1:Math.min(1,Y/.25),Kt=rn(z);v.rotation.x=-Math.PI*.86*(1-Kt),h.position.lerpVectors(rt.position,W.position,Kt),h.quaternion.slerpQuaternions(rt.quaternion,W.quaternion,Kt),_.visible=z>.8,z===1&&pt()}return!["dormant","open","closed"].includes(B)},get canDrag(){return B==="closed"},get locked(){return!["dormant","waiting","closed"].includes(B)},get diagnostics(){const Rt=h.getWorldPosition(new k).project(t);return{folds:Au(A),phase:B,progress:ct,openCount:O,shownAt:H,handoffError:nt,bodyDynamic:!y.body.suspended,pageVisible:S.visible,pageOpacity:S.material.opacity,pageCorners:S.visible?mh(S,t,innerWidth,innerHeight):null,point:{x:(Rt.x*.5+.5)*innerWidth,y:(.5-Rt.y*.5)*innerHeight}}}}}function RM(r,t){const e=new kn().setFromNormalAndCoplanarPoint(r.getWorldDirection(new k),t),n=new k(0,.32,0).applyQuaternion(r.quaternion);return{project(i,s){return i.intersectPlane(e,s)?(s.add(n),s.toArray().every(Number.isFinite)):!1}}}function vh(r,t,e){const n=t.position.clone(),i=t.quaternion.clone(),s=r.target.clone(),o=r.enableDamping;r.enabled=!1,r.disconnect(),r.enableDamping=!1,r.update(),t.position.copy(n),t.quaternion.copy(i),r.target.copy(s),r.update(),r.enableDamping=o;let a=!1;return()=>{a||(a=!0,r.connect(e),r.enabled=!0)}}function CM(r,t,e,n,i,s,o=10){const a=r.intersectObjects(t.map(u=>u.mesh),!0);if(a.length){let u=a[0].object;for(;u&&!u.userData.item;)u=u.parent;return u?{item:u.userData.item,point:a[0].point}:null}let l=null,c=1/0;for(const u of t){const d=new Ei().setFromObject(u.mesh),h=d.getCenter(new k),f=h.clone().project(e);if(f.z<-1||f.z>1)continue;let p=1/0,v=-1/0,m=1/0,g=-1/0;for(const x of[d.min.x,d.max.x])for(const y of[d.min.y,d.max.y])for(const E of[d.min.z,d.max.z]){const b=new k(x,y,E).project(e),M=(b.x*.5+.5)*s.width+s.left,S=(-b.y*.5+.5)*s.height+s.top;p=Math.min(p,M),v=Math.max(v,M),m=Math.min(m,S),g=Math.max(g,S)}if(n<p-o||n>v+o||i<m-o||i>g+o)continue;const _=Math.hypot(n-(p+v)/2,i-(m+g)/2);_<c&&(c=_,l={item:u,point:h})}return l}function PM(r){const t=document.createElement("canvas");t.width=4096,t.height=2048;const e=t.getContext("2d");e.scale(2,2);let n=41817;const i=()=>(n=Math.imul(n,1664525)+1013904223>>>0,n/4294967296),s=e.createLinearGradient(0,0,0,1024);for(const[c,u]of[[0,"#475b63"],[.22,"#657b82"],[.4,"#8c9e9f"],[.53,"#c4c5b5"],[.65,"#d4c6a3"],[1,"#a59468"]])s.addColorStop(c,u);e.fillStyle=s,e.fillRect(0,0,2048,1024),e.lineCap="round";for(let c=0;c<1400;c++){const u=i()*2048,d=70+i()*530,h=10+i()*100;e.strokeStyle=["#5e777e","#97a8a5","#d4d5c3","#909b94","#dddcca"][c%5],e.globalAlpha=.05+i()*.11,e.lineWidth=1+i()*5,e.beginPath(),e.moveTo(u,d),e.bezierCurveTo(u+h*.3,d-7,u+h*.75,d-8,u+h,d-3),e.stroke()}e.globalAlpha=.2,e.globalCompositeOperation="soft-light";const o=r.image;e.drawImage(o,o.width*.51,o.height*.51,o.width*.47,o.height*.47,0,0,2048,690),e.globalCompositeOperation="source-over",e.globalAlpha=1;function a(c,u,d,h){const f=document.createElement("canvas"),p=d+h*2,v=h*2;f.width=Math.ceil(p*2),f.height=Math.ceil(v*2);const m=f.getContext("2d");m.scale(2,2),m.translate(p/2,v/2),m.lineCap="round";const g=()=>{m.beginPath(),m.moveTo(-d*.49,h*.15),m.bezierCurveTo(-d*.32,h*.3,-d*.4,-h*.42,-d*.2,-h*.38),m.bezierCurveTo(-d*.02,-h*.36,-d*.16,h*.06,-d*.01,h*.03),m.bezierCurveTo(d*.12,-h*.43,d*.3,-h*.18,d*.37,-h*.01),m.bezierCurveTo(d*.42,h*.08,d*.49,h*.06,d*.54,h*.01)};m.strokeStyle="#dedbc7",m.lineWidth=h*.53,g(),m.stroke(),m.bezierCurveTo(d*.2,h*.34,-d*.25,h*.4,-d*.49,h*.15),m.closePath(),m.fillStyle="#dedbc7",m.fill(),m.lineWidth=h*.25,m.beginPath(),m.moveTo(-d*.42,h*.2),m.bezierCurveTo(-d*.15,h*.4,d*.24,h*.28,d*.43,h*.12),m.stroke(),m.globalCompositeOperation="source-atop";const _=m.createLinearGradient(0,-h*.62,0,h*.48);for(const[x,y]of[[0,"#e5e1cb"],[.4,"#cdc4a7"],[.66,"#b4b29e"],[1,"#8c948c"]])_.addColorStop(x,y);m.fillStyle=_,m.fillRect(-p/2,-v/2,p,v);for(let x=0;x<550;x++){const y=(i()-.5)*d*1.2,E=(i()-.5)*h*1.5,b=2+i()*12;m.strokeStyle=E>h*.08?["#8e968a","#acae9b","#c3bbae"][x%3]:["#e8e5cf","#c8b475","#d4cab3"][x%3],m.globalAlpha=.15+i()*.4,m.lineWidth=.4+i()*2,m.beginPath(),m.moveTo(y,E),m.quadraticCurveTo(y+b*.5,E-2,y+b,E-1),m.stroke()}for(let x=0;x<95;x++){const y=x%2,E=Math.PI*(.1+i()*1.65),b=d*(y?.14:.09),M=h*(y?.32:.35),S=(y?d*.2:-d*.2)+Math.cos(E)*b,P=-h*.11-Math.sin(E)*M;m.strokeStyle=x%4?"#ede7cf":"#b2ad97",m.globalAlpha=.25+i()*.45,m.lineWidth=.4+i()*1.1,m.beginPath(),m.moveTo(S,P),m.quadraticCurveTo(S+3,P-2,S+6+i()*6,P-1),m.stroke()}m.globalAlpha=.08,m.drawImage(o,0,o.height*.51,o.width*.47,o.height*.47,-p/2,-v/2,p,v);for(const x of[-2048,0,2048])e.drawImage(f,c+x-p/2,u-v/2,p,v)}for(const[c,u,d,h]of[[65,458,155,42],[250,405,130,44],[430,468,180,47],[630,430,125,36],[820,475,185,42],[1030,397,155,49],[1230,461,180,44],[1460,426,170,46],[1660,475,155,39],[1850,461,120,32],[2010,481,120,34]])a(c,u,d,h);e.globalAlpha=1;const l=new io(t);return l.colorSpace=Ge,l.anisotropy=4,new Me(new js(270,64,32),new Ln({map:l,side:tn,depthWrite:!1,fog:!1,toneMapped:!1}))}const _n={ochre:"#af8c43",saffron:"#c7a456",straw:"#bfb07a",wine:"#85513f",madder:"#a8674c",viridian:"#566548",cobalt:"#65756c",chalk:"#e3dfc9",sky:"#929d98",fog:"#b5b09c"},ts=[_n.ochre,_n.saffron,_n.viridian,_n.straw,_n.wine,_n.cobalt].map(r=>new Xt(r)),LM=new Xt("#a89861"),IM=new Xt("#8d5d42"),Or=(r,t,e)=>{const n=He.clamp((e-r)/(t-r),0,1);return n*n*(3-2*n)};function xh(r,t,e=new Xt){const i=((r*.115+t*.045+Math.sin(t*.14)*.42+Math.sin((r+t)*.09)*.16+Math.sin(r*1.4+t*.35)*Math.sin(t*.8)*.08+2.3)%ts.length+ts.length)%ts.length,s=Math.floor(i);e.copy(ts[s]).lerp(ts[(s+1)%ts.length],Or(.18,.82,i-s));const o=(1-Or(3.3,6.5,Math.hypot(r*.85,t*.95)))*.72;e.lerp(LM,o);const a=r*.81-t*.59,l=r*.59+t*.81,c=Or(1.1,3,Math.abs(a)+Math.sin(l*.65)*.5)*Or(-4,1,l);return e.lerp(IM,c*.66*(1-o*.55)),e.multiplyScalar(.91+.09*Math.sin(r*.72+t*.33)*Math.sin(t*.64-r*.21))}const Le=(r,t,e)=>{const n=He.clamp((e-r)/(t-r),0,1);return n*n*(3-2*n)},DM=new fl([[-25,-78],[-18,-60],[-15,-48],[-19,-39],[-23,-33],[-21,-27],[-25,-21],[-23,-13],[-31,-8],[-44,-10],[-57,-17],[-68,-23],[-80,-26]].map(([r,t])=>new k(r,0,t)),!1,"centripetal"),to=320,eo=100,Ya=100,NM=DM.getSpacedPoints(to),UM=new fl([[-36,-148],[-43,-123],[-35,-100],[-25,-78]].map(([r,t])=>new k(r,0,t)),!1,"centripetal"),FM=new fl([[-80,-26],[-96,-31],[-111,-45],[-131,-54],[-150,-68]].map(([r,t])=>new k(r,0,t)),!1,"centripetal"),In=[...UM.getSpacedPoints(eo).slice(0,-1),...NM,...FM.getSpacedPoints(Ya).slice(1)],Oi=[...Array.from({length:eo},(r,t)=>-.6+t/eo*.6),...Array.from({length:to+1},(r,t)=>t/to),...Array.from({length:Ya},(r,t)=>1+(t+1)/Ya*.6)],Js=In.length-1,Ru=r=>r<0?7.9-r*.6:r>1?-.3-(r-1)*.35:7.9-2.1*r-1.5*Le(.345,.39,r)-1.55*Le(.415,.46,r)-2.35*Le(.48,.535,r)-.7*Le(.54,.72,r),lo=r=>1.45+3*Le(.26,.62,r)+.35*Math.sin(r*19)**2+.4*Math.sin(r*37)**2+2*(1-Le(-.5,0,r)),Qo=r=>Math.max(Le(.335,.36,r)*(1-Le(.39,.41,r)),Le(.405,.43,r)*(1-Le(.46,.48,r)),Le(.47,.49,r)*(1-Le(.535,.55,r))),Cu=r=>Le(-.6,-.32,r)*(1-Le(1.28,1.6,r));for(let r=0;r<=Js;r++)In[r].y=Ru(Oi[r]);const Za=In.map((r,t)=>{const e=In[Math.max(0,t-1)],n=In[Math.min(Js,t+1)];return new k(-(n.z-e.z),0,n.x-e.x).normalize()});function Us(r){const t=eo+He.clamp(r,0,.999999)*to,e=Math.floor(t),n=t-e;return{position:In[e].clone().lerp(In[e+1],n),side:Za[e].clone().lerp(Za[e+1],n).normalize(),width:lo(r)}}function El(r,t){let e=1/0,n=0,i=0,s=0;for(let o=0;o<Js;o++){const a=In[o],l=In[o+1],c=l.x-a.x,u=l.z-a.z,d=He.clamp(((r-a.x)*c+(t-a.z)*u)/(c*c+u*u),0,1),h=(r-a.x-c*d)**2+(t-a.z-u*d)**2;h<e&&(e=h,n=He.lerp(Oi[o],Oi[o+1],d),i=a.x+c*d,s=a.z+u*d)}return{d:Math.sqrt(e),t:n,w:lo(n),y:Ru(n),front:(r-i)*.59+(t-s)*.81}}In.map((r,t)=>({x:r.x,z:r.z,y:r.y,halfWidth:lo(Oi[t])*1.2,visibility:Cu(Oi[t])}));function ta(r,t){const e=El(r,t);return e.d/e.w}function OM(r,t,e){const n=6.3*Math.exp(-(((t+20)/25)**2))*(1-Le(-43,-17,e)),i=1.8*Math.exp(-(((t+34)/17)**2)-((e+33)/20)**2),s=r+n+i,o=El(t,e),a=o.w+.8,l=o.front>0?24:11;if(o.d>a+l)return s;const c=o.y-.52-.2*Math.sin(o.t*35)**2,u=He.lerp(c,o.y+.035,Le(o.w*.75,a,o.d)),d=Math.min(s,o.y+.035-Math.max(0,o.front-o.w-1)*.16),h=He.lerp(d,s,Le(a+8,a+l,o.d));return He.lerp(u,h,Le(a+.7,a+5,o.d))}const BM=new Xt("#938b64");function zM(r,t,e){const n=El(r,t),i=n.d-n.w,s=(1-Le(.2,1.2,i))*Le(-.7,0,i);return e.lerp(BM,s*.7),e}function kM(r,t,e){let n=3917;const i=()=>(n=Math.imul(n,1664525)+1013904223>>>0,n/4294967296),s=(O,H,W)=>{const rt=document.createElement("canvas");rt.width=O,rt.height=H,W(rt.getContext("2d"),O,H);const X=new io(rt);return X.colorSpace=Ge,X.anisotropy=4,X},o=s(512,1024,(O,H,W)=>{const rt=O.createLinearGradient(0,0,H,0);rt.addColorStop(0,"#829989"),rt.addColorStop(.25,"#426b69"),rt.addColorStop(.55,"#355b5c"),rt.addColorStop(.85,"#5c8178"),rt.addColorStop(1,"#9ca58c"),O.fillStyle=rt,O.fillRect(0,0,H,W),O.lineCap="round";for(let X=0;X<1600;X++){const J=i()*H,nt=i()*W,ct=12+i()*130;O.strokeStyle=["#758f80","#afbdac","#344e4b","#d1cdb0","#97a894"][X%5],O.globalAlpha=.12+i()*.3,O.lineWidth=1+i()*5,O.beginPath(),O.moveTo(J,nt),O.bezierCurveTo(J-6,nt+ct*.3,J+5,nt+ct*.7,J+1,nt+ct),O.stroke()}});o.wrapT=ds;const a=[],l=[],c=[],u=[],d=[],h=12,f=new Xt;for(let O=0;O<=Js;O++){const H=Oi[O],W=In[O],rt=Za[O],X=lo(H)*(1.12+.045*Math.sin(H*91)+.025*Math.cos(H*157)),J=Qo(H);for(let nt=0;nt<=h;nt++){const ct=nt/h,at=ct*2-1,St=(Math.sin(H*430+ct*23)+Math.sin(H*239-ct*31))*.018*J;if(a.push(W.x+rt.x*X*at,W.y+St,W.z+rt.z*X*at),l.push(ct,H*22),d.push(Cu(H)),f.set("#d0d8c5").lerp(new Xt("#f2edd7"),J*(.5+.2*Math.sin(ct*21+H*30))),f.toArray(c,(O*(h+1)+nt)*3),O&&nt){const Pt=O*(h+1)+nt;u.push(Pt-h-2,Pt-h-1,Pt-1,Pt-h-1,Pt,Pt-1)}}}const p=new Ue;p.setAttribute("position",new pe(a,3)),p.setAttribute("uv",new pe(l,2)),p.setAttribute("color",new pe(c,3)),p.setIndex(u),p.computeVertexNormals(),p.setAttribute("riverVisibility",new pe(d,1));const v=new on({map:o,vertexColors:!0,roughness:.48,metalness:.08,side:Qe,transparent:!0,depthWrite:!1});v.onBeforeCompile=O=>{O.vertexShader=O.vertexShader.replace("#include <common>",`#include <common>
attribute float riverVisibility; varying float vRiverVisibility;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vRiverVisibility=riverVisibility;`),O.fragmentShader=O.fragmentShader.replace("#include <common>",`#include <common>
varying float vRiverVisibility;`).replace("#include <alphamap_fragment>",`#include <alphamap_fragment>
diffuseColor.a*=vRiverVisibility;`)};const m=new Me(p,v);m.receiveShadow=!0,r.add(m);const g=s(256,512,(O,H,W)=>{O.lineCap="round";for(let rt=0;rt<520;rt++){const X=i()*H,J=i()*W,nt=4+i()*64;O.strokeStyle=rt%3?"#ecebd4":"#b8c8b8",O.globalAlpha=.2+i()*.7,O.lineWidth=1+i()*4,O.beginPath(),O.moveTo(X,J),O.quadraticCurveTo(X+i()*8-4,J+nt*.5,X+i()*4-2,J+nt),O.stroke()}});g.wrapT=ds;const _=p.clone(),x=_.attributes.position,y=[];for(let O=0;O<=Js;O++)for(let H=0;H<=h;H++){const W=O*(h+1)+H;x.setY(W,x.getY(W)+.035);const rt=Qo(Oi[O]);y.push(rt)}_.deleteAttribute("color");const E=new Ln({map:g,transparent:!0,opacity:.87,depthWrite:!1,side:Qe,toneMapped:!1});_.setAttribute("rapid",new pe(y,1)),E.onBeforeCompile=O=>{O.vertexShader=O.vertexShader.replace("#include <common>",`#include <common>
attribute float rapid; varying float vRapid;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vRapid=rapid;`),O.fragmentShader=O.fragmentShader.replace("#include <common>",`#include <common>
varying float vRapid;`).replace("#include <alphamap_fragment>",`#include <alphamap_fragment>
diffuseColor.a*=vRapid*smoothstep(0.0,0.16,vMapUv.x)*(1.0-smoothstep(0.84,1.0,vMapUv.x));`)},r.add(new Me(_,E));const b=["#716b5e","#a1967f","#898464","#b5a783","#626b60"];function M(O,H,W,rt,X,J=0,nt=e(O,H)){const ct=new Ks(1,1),at=ct.attributes.position;for(let Pt=0;Pt<at.count;Pt++){const dt=new k().fromBufferAttribute(at,Pt);dt.multiplyScalar(1+.11*Math.sin(dt.x*9+dt.z*7)+.06*Math.cos(dt.y*11)),at.setXYZ(Pt,dt.x,dt.y,dt.z)}ct.computeVertexNormals();const St=new Me(ct,t.material(new on({color:b[J%5],roughness:1,flatShading:!0}),0,.9));St.position.set(O,nt-rt*.25,H),St.scale.set(W,rt,X),St.rotation.y=i()*6.28,St.receiveShadow=!0,r.add(St)}for(let O=0;O<42;O++){const H=.3+i()*.45,W=Us(H),rt=O%2?1:-1,X=W.width*(1.08+i()*.3),J=.18+i()*.48;M(W.position.x+W.side.x*X*rt,W.position.z+W.side.z*X*rt,J*(1.1+i()),J*.45,J,O)}for(const[O,H,W]of[[-7.6,2.7,.38],[4.4,-2.7,.31],[-7.8,3.4,.18],[4.8,-3.1,.48]])M(O,H,W,W*.6,W*.8,2,e(O,H)+W*.45);const S=t.material(new on({color:"#626c49",side:Qe}),0,3),P=new cs(new hl(.025,1,3),S,100),A=new Ie;for(let O=0;O<P.count;O++){const H=Us(.55+i()*.23),W=O%2?1:-1,rt=H.width*(1.08+i()*.13),X=H.position.x+H.side.x*rt*W,J=H.position.z+H.side.z*rt*W,nt=.3+i()*.6;A.position.set(X,e(X,J)+nt*.45,J),A.scale.set(1,nt,1),A.rotation.set(0,i()*6,(i()-.5)*.2),A.updateMatrix(),P.setMatrixAt(O,A.matrix)}r.add(P);const L=new cs(new li(1,1),new Ln({color:"#e1e4cb",transparent:!0,opacity:.6,depthWrite:!1,side:Qe,toneMapped:!1}),240),I=[];L.instanceMatrix.setUsage(Zr),L.frustumCulled=!1,r.add(L);for(let O=0;O<L.count;O++)I.push({t:.25+i()*.57,across:(i()-.5)*1.65,length:.12+i()*.5,width:.018+i()*.035});const D=new cs(new Ks(1,0),new Ln({color:"#e8e6ce",transparent:!0,opacity:.55,depthWrite:!1,toneMapped:!1}),80),w=[];D.instanceMatrix.setUsage(Zr),D.frustumCulled=!1,r.add(D);for(let O=0;O<D.count;O++)w.push({t:[.392,.462,.537][O%3],across:(i()-.5)*1.9,phase:i(),height:.16+i()*.4,size:.022+i()*.04});const N=new k(0,1,0),F=new k,B=new k,Y=new me;function q(O){o.offset.y=-O*.075,g.offset.y=-O*.19;for(let H=0;H<I.length;H++){const W=I[H],rt=.25+(W.t-.25+O*.0017)%.57,X=Us(rt),J=Us(rt+.002).position;F.copy(J).sub(X.position).normalize(),B.crossVectors(X.side,F).normalize(),B.dot(N)<0&&B.negate(),Y.makeBasis(X.side,F,B),A.quaternion.setFromRotationMatrix(Y),A.position.copy(X.position).addScaledVector(X.side,X.width*W.across),A.position.y+=.06,A.scale.set(W.width,W.length*(1+Qo(rt)*1.8),1),A.updateMatrix(),L.setMatrixAt(H,A.matrix)}L.instanceMatrix.needsUpdate=!0;for(let H=0;H<w.length;H++){const W=w[H],rt=(O*.65+W.phase)%1,X=Us(W.t+rt*.006);A.position.copy(X.position).addScaledVector(X.side,X.width*W.across),A.position.y+=.08+Math.sin(rt*Math.PI)*W.height,A.rotation.set(rt*2,H,0),A.scale.setScalar(W.size*Math.sin(rt*Math.PI)),A.updateMatrix(),D.setMatrixAt(H,A.matrix)}D.instanceMatrix.needsUpdate=!0}return q(0),{update:q}}const ea=0,Pu={x:.3,width:3.6,depth:2.35},Mh={couch:{x:-4.5,z:-.65,width:2.85,depth:1.45},coffeeTable:{x:-4.45,z:1.12,width:1.72,depth:.84}},na=(r,t,e)=>{const n=Math.max(0,Math.min(1,(e-r)/(t-r)));return n*n*(3-2*n)},Lu=(r,t)=>Math.hypot((r+1.25)/7.5,(t-.65)/6.5);function Iu(r,t){const e=Lu(r,t);if(e<=1)return ea;const n=Math.hypot(r,t),s=-.025+na(9,14,n)*(.7*Math.sin(r*.17+t*.08)+.8*Math.sin(t*.13-r*.06)+na(13,35,n)*(1.5+1.5*Math.sin(r*.08+t*.07)));return ea+(OM(s,r,t)-ea)*na(1,1.48,e)}function yh(r,t){return r>-6.35&&r<4.95&&t>-3.45&&t<4.7}const Sh=r=>{const t=Math.max(0,Math.abs(r)-42);return r+Math.sign(r)*t*t*.14};async function GM(){const r=await new Sf().loadAsync("./assets/painted-materials.png");r.colorSpace=Ge,r.anisotropy=4,r.wrapS=r.wrapT=ds;const t=r.clone();t.colorSpace=ei,t.repeat.set(.472,.472),t.offset.set(.014,.514),t.needsUpdate=!0;const e=new Map,n=new WeakSet;function i(o,a=0,l=.65){if(n.has(o))return o;const c=o.uuid+":"+a+":"+l;if(e.has(c))return e.get(c);const u=o.clone();u.metalness=0,u.roughness=.98,u.bumpMap=t,u.bumpScale=.04;const d=[[0,.5],[.5,.5],[0,0],[.5,0]];return u.onBeforeCompile=h=>{h.uniforms.uPaintAtlas={value:r},h.uniforms.uPaintRegion={value:new Gt(...d[a])},h.uniforms.uPaintScale={value:l},h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vBrushPosition; varying vec3 vBrushNormal;`),h.vertexShader=h.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vBrushPosition=position; vBrushNormal=normal;`),h.fragmentShader=h.fragmentShader.replace("#include <common>",`#include <common>
        uniform sampler2D uPaintAtlas;uniform vec2 uPaintRegion;uniform float uPaintScale;
        varying vec3 vBrushPosition;varying vec3 vBrushNormal;
        vec3 paintSample(vec2 p){vec2 uv=(1.-abs(mod(p,2.)-1.))*.472+.014+uPaintRegion;return texture2D(uPaintAtlas,uv).rgb;}
      `),h.fragmentShader=h.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
        vec3 brushWeights=pow(abs(normalize(vBrushNormal)),vec3(4.));brushWeights/=max(.001,dot(brushWeights,vec3(1.)));
        vec3 bp=vBrushPosition*uPaintScale;
        vec3 brush=paintSample(bp.yz)*brushWeights.x+paintSample(bp.xz)*brushWeights.y+paintSample(bp.xy)*brushWeights.z;
        float pigment=dot(brush,vec3(.299,.587,.114));
        ${a===0?`diffuseColor.rgb*=.3+.95*pigment;
        diffuseColor.rgb=mix(diffuseColor.rgb,diffuseColor.rgb*brush/max(.4,pigment),.65);`:"diffuseColor.rgb=mix(diffuseColor.rgb,diffuseColor.rgb*brush*1.4,.58);"}
      `)},u.customProgramCacheKey=()=>`impasto-${a}-${l}`,e.set(c,u),n.add(u),u}function s(o){o.traverse(a=>{a.isMesh&&a.material?.isMeshStandardMaterial&&(a.material=i(a.material))})}return{atlas:r,material:i,coat:s}}function HM(r,t){let e=87219;const n=()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296),i=Iu,s=new li(140,140,320,320);s.rotateX(-Math.PI/2);const o=s.attributes.position;for(let b=0;b<o.count;b++){const M=Sh(o.getX(b)),S=Sh(o.getZ(b));o.setXYZ(b,M,i(M,S),S)}s.computeVertexNormals();const a=new Float32Array(o.count*3),l=new Xt;for(let b=0;b<o.count;b++)zM(o.getX(b),o.getZ(b),xh(o.getX(b),o.getZ(b),l)),l.toArray(a,b*3);s.setAttribute("color",new Xe(a,3));const c=t.material(new on({color:"#ffffff",vertexColors:!0,roughness:1}),0,.2),u=new Me(s,c);u.receiveShadow=!0,r.add(u),r.add(PM(t.atlas));const d=new li(.09,.7,1,3);d.translate(0,.35,0);const h=d.attributes.position;for(let b=0;b<h.count;b++){const M=h.getY(b);h.setX(b,h.getX(b)*(1-M/.85)+M*M*.12)}d.computeVertexNormals();const f=new Ln({color:"#ffffff",side:Qe}),p=new cs(d,f,6e3),v=new Ie,m=new Xt;for(let b=0;b<6e3;b++){let M,S,P;do M=(n()-.5)*72,S=(n()-.5)*72,P=Math.hypot(M,S);while(yh(M,S)||P>37||ta(M,S)<1.14);v.position.set(M,i(M,S),S),v.rotation.set((n()-.5)*.25,n()*Math.PI*2,(n()-.5)*.35),v.scale.set(.65+n()*1.6,.15+n()*.45,1),v.updateMatrix(),p.setMatrixAt(b,v.matrix),xh(M,S,m).multiplyScalar(.72+n()*.65),p.setColorAt(b,m)}p.receiveShadow=!0,r.add(p);const g=new js(1,6,4),_=new cs(new ai(.005,.008,1,3),new Ln({color:"#596a45"}),1300),x=new cs(g,t.material(new on({color:"#e6dfca"}),0,5),1300);for(let b=0;b<1300;b++){let M,S;do M=(n()-.5)*50,S=(n()-.5)*50;while(yh(M,S)||ta(M,S)<1.14);const P=i(M,S),A=.025+n()*.05,L=.18+n()*.2;v.rotation.set(0,0,0),v.position.set(M,P+L*.5,S),v.scale.set(1,L,1),v.updateMatrix(),_.setMatrixAt(b,v.matrix),v.position.set(M,P+L,S),v.rotation.set(n(),n()*3,n()),v.scale.set(A*1.8,A*.6,A),v.updateMatrix(),x.setMatrixAt(b,v.matrix),m.set([_n.saffron,_n.madder,_n.wine,_n.chalk][b%4]),x.setColorAt(b,m)}r.add(_,x);function y(b,M,S){if(ta(b,M)<1.7)return;const P=i(b,M),A=new Vn;A.position.set(b,P,M);const L=new Me(new ai(.06*S,.11*S,2.8*S,6),t.material(new on({color:"#806448"}),0,2));L.position.y=1.4*S,A.add(L);for(let I=0;I<3;I++){const D=new Me(new Ks(1,2),t.material(new on({color:["#434f3b","#596346","#787744"][I%3]}),0,1.1));D.position.set(Math.cos(I*2.4)*.17*S,(1.9+I*.55)*S,Math.sin(I*2.4)*.17*S),D.scale.set((.8-I*.17)*S,1.25*S,(.65-I*.12)*S),D.rotation.set(n()*.1,n(),n()*.12),D.castShadow=!0,A.add(D)}r.add(A)}y(-28,-9,.75),y(7.5,-7.5,1.15),y(2,-23,.9);for(let b=0;b<13;b++){const M=b/13*Math.PI*2;y(Math.cos(M)*(22+n()*9),Math.sin(M)*(22+n()*9),.5+n()*.8)}r.fog=new ll(_n.fog,.009);const E=kM(r,t,i);return{height:i,update:E.update}}const VM=(()=>{const r={oakLight:[.63,.44,.27],walnut:[.31,.19,.14],brass:[.7,.52,.28],cream:[.88,.82,.69],paper:[.91,.87,.76],sage:[.38,.55,.39],ink:[.18,.25,.29],clay:[.65,.39,.28],charcoal:[.16,.18,.2]},t=Object.freeze(["Yes","No","It is certain","Most likely","Ask again later","Outlook good","Very doubtful","Signs point to yes","Cannot predict now","My reply is no"]);class e{constructor(){this.points=[],this.uv=[],this.colors=[],this.joints=[],this.triangles=[]}face(s,o,a,l=0,c=0){const u=this.points.length/3;for(let d=0;d<s.length;d++)this.points.push(...s[d]),this.uv.push(...o[d]),this.colors.push(...a,l),this.joints.push(c);s.length===4?this.triangles.push(u,u+1,u+2,u,u+2,u+3):this.triangles.push(u,u+1,u+2)}quad(s,o,a=0,l=0,c=[[0,0],[1,0],[1,1],[0,1]]){this.face(s,c,o,a,l)}box(s,o,a,l,c,u,d,h=0,f=0,p=[0,0,1,1]){const v=s-l/2,m=s+l/2,g=o-c/2,_=o+c/2,x=a-u/2,y=a+u/2,[E,b,M,S]=p;this.quad([[v,g,y],[m,g,y],[m,_,y],[v,_,y]],d,h,f,[[E,b],[M,b],[M,S],[E,S]]),this.quad([[m,g,x],[v,g,x],[v,_,x],[m,_,x]],d.map(P=>P*.63),0,f),this.quad([[v,g,x],[m,g,x],[m,g,y],[v,g,y]],d.map(P=>P*.83),0,f),this.quad([[m,_,x],[v,_,x],[v,_,y],[m,_,y]],d.map(P=>P*.7),0,f),this.quad([[v,_,x],[v,g,x],[v,g,y],[v,_,y]],d.map(P=>P*.77),0,f),this.quad([[m,g,x],[m,_,x],[m,_,y],[m,g,y]],d.map(P=>P*.86),0,f)}bevelBox(s,o,a,l,c,u,d,h=7,f=0){const p=Math.min(l,c,u)*.22,v=(y,E)=>[[s-l/2+y,o-c/2+y,E],[s+l/2-y,o-c/2+y,E],[s+l/2-y,o+c/2-y,E],[s-l/2+y,o+c/2-y,E]],m=v(p,a-u/2),g=v(0,a-u/2+p),_=v(0,a+u/2-p),x=v(p,a+u/2);this.quad(x,d,h,f),this.quad([...m].reverse(),d.map(y=>y*.65),h,f);for(let y=0;y<4;y++){const E=(y+1)%4;this.quad([m[y],m[E],g[E],g[y]],d.map(b=>b*.76),h,f),this.quad([g[y],g[E],_[E],_[y]],d.map(b=>b*.87),h,f),this.quad([_[y],_[E],x[E],x[y]],d,h,f)}}cone(s,o,a,l,c,u,d,h=0,f=0,p=24){for(let v=0;v<p;v++){const m=v*2*Math.PI/p,g=(v+1)*2*Math.PI/p,_=(x,y,E)=>[s+Math.cos(E)*x,o+Math.sin(E)*x,y];this.quad([_(c,a,m),_(c,a,g),_(u,l,g),_(u,l,m)],d,h,f),u>1e-4&&this.face([[s,o,l],_(u,l,m),_(u,l,g)],[[.5,.5],[0,0],[1,0]],d,h,f),c>1e-4&&this.face([[s,o,a],_(c,a,g),_(c,a,m)],[[.5,.5],[0,0],[1,0]],d.map(x=>x*.67),h,f)}}ring(s,o,a,l,c,u,d=0,h=0,f=40){for(let p=0;p<f;p++){const v=p*2*Math.PI/f,m=(p+1)*2*Math.PI/f,g=(_,x)=>[s+Math.cos(x)*_,o+Math.sin(x)*_,a];this.quad([g(l,v),g(c,v),g(c,m),g(l,m)],u,d,h)}}sphere(s,o,a,l,c,u,d,h=0,f=0,p=20,v=12){const m=(g,_)=>[s+l*Math.sin(g)*Math.cos(_),o+c*Math.sin(g)*Math.sin(_),a+u*Math.cos(g)];for(let g=0;g<v;g++)for(let _=0;_<p;_++){const x=g*Math.PI/v,y=(g+1)*Math.PI/v,E=_*2*Math.PI/p,b=(_+1)*2*Math.PI/p;this.quad([m(x,E),m(x,b),m(y,b),m(y,E)],d,h,f)}}cushion(s,o,a,l,c,u,d){const h=(p,v)=>Math.sign(p)*Math.abs(p)**v,f=(p,v)=>[s+l/2*h(Math.sin(p),.48)*h(Math.cos(v),.43),o+c/2*h(Math.sin(p),.48)*h(Math.sin(v),.43),a+u/2*h(Math.cos(p),.7)];for(let p=0;p<14;p++)for(let v=0;v<32;v++){const m=p*Math.PI/14,g=(p+1)*Math.PI/14,_=v*Math.PI/16,x=(v+1)*Math.PI/16;this.quad([f(m,_),f(m,x),f(g,x),f(g,_)],d,2)}}rod(s,o,a,l,c=0,u=0,d=10){const h=o.map((y,E)=>y-s[E]),f=Math.hypot(...h)||1,p=h.map(y=>y/f),v=Math.abs(p[2])<.9?[0,0,1]:[0,1,0];let m=[p[1]*v[2]-p[2]*v[1],p[2]*v[0]-p[0]*v[2],p[0]*v[1]-p[1]*v[0]],g=Math.hypot(...m)||1;m=m.map(y=>y/g);const _=[p[1]*m[2]-p[2]*m[1],p[2]*m[0]-p[0]*m[2],p[0]*m[1]-p[1]*m[0]],x=(y,E)=>y.map((b,M)=>b+a*(m[M]*Math.cos(E)+_[M]*Math.sin(E)));for(let y=0;y<d;y++){const E=y*2*Math.PI/d,b=(y+1)*2*Math.PI/d;this.quad([x(s,E),x(s,b),x(o,b),x(o,E)],l,c,u)}}fabric(s,o,a,l,c,u=0){const f=(p,v)=>{const m=(p-.5)*s,g=(v-.5)*o,_=Math.max(0,1-(m/(s*.53))**2-(g/(o*.55))**2);return[m,g,a+l*_+.003*Math.sin(p*46+v*5)*Math.sin(v*18)]};for(let p=0;p<12;p++)for(let v=0;v<20;v++){const m=v/20,g=(v+1)/20,_=p/12,x=(p+1)/12;this.quad([f(m,_),f(g,_),f(g,x),f(m,x)],c,2,u,[[m,_],[g,_],[g,x],[m,x]])}}leaf(s,o,a,l,c,u,d,h=1){const f=Math.cos(l),p=Math.sin(l),v=-p,m=f,g=(_,x)=>{const y=Math.sin(Math.PI*_)**.72*u*.5*x,E=(_-.5)*c;return[s+f*E+v*y,o+p*E+m*y,a+.008*Math.sin(Math.PI*_)+(x===0?.009:0)]};for(let _=0;_<6;_++){const x=_/6,y=(_+1)/6;this.quad([g(x,1),g(y,1),g(y,0),g(x,0)],d,5,h),this.quad([g(x,0),g(y,0),g(y,-1),g(x,-1)],d.map(E=>E*.83),5,h)}this.rod(g(0,0),g(1,0),Math.max(.001,u*.018),d.map(_=>_*.68),5,h,5)}finish(){return{local:new Float64Array(this.points),uv:new Float32Array(this.uv),colors:new Float32Array(this.colors),joints:new Uint8Array(this.joints),triangles:new Uint16Array(this.triangles)}}}function n(i,s,o){const a=new e,l=Math.min(s,o),c=r.brass,u={};switch(i){case"chair":{const h=[.64,.39,.27],f=[.75,.49,.34],p=[.84,.61,.43];for(let g=0;g<5;g++){const _=g*2*Math.PI/5;a.rod([0,0,.013],[Math.cos(_)*s*.28,Math.sin(_)*o*.28,.012],l*.014,r.charcoal,4),a.cone(Math.cos(_)*s*.28,Math.sin(_)*o*.28,.005,.018,l*.027,l*.027,r.charcoal,4)}a.cone(0,0,.017,.075,l*.065,l*.065,c,4),a.cushion(0,-o*.035,.1,s*.76,o*.74,.06,h),a.cushion(0,-o*.11,.144,s*.59,o*.55,.057,f);for(const g of[-s*.39,s*.39])a.cushion(g,-o*.015,.17,s*.19,o*.68,.072,h);const v=(g,_)=>{const x=l*.09;return[Math.cos(g)*(s*.35+x*Math.cos(_)),o*.075+Math.sin(g)*(o*.3+x*Math.cos(_)),.181+Math.sin(g)*.026+.046*Math.sin(_)]};for(let g=0;g<40;g++)for(let _=0;_<16;_++){const x=g*Math.PI/40,y=(g+1)*Math.PI/40,E=_*Math.PI/8,b=(_+1)*Math.PI/8;a.quad([v(x,E),v(y,E),v(y,b),v(x,b)],h,2)}a.cushion(0,o*.235,.202,s*.52,o*.22,.061,[.78,.56,.38]);const m=g=>[Math.sign(Math.cos(g))*Math.abs(Math.cos(g))**.43*s*.291,-o*.11+Math.sign(Math.sin(g))*Math.abs(Math.sin(g))**.43*o*.269,.158];for(let g=0;g<64;g++)a.rod(m(g*Math.PI/32),m((g+1)*Math.PI/32),l*.0018,p,2,0,6);break}case"schoolbook":{a.box(0,0,.016,s,o,.024,[.2,.32,.43],2),a.box(s*.035,o*.025,.03,s*.88,o*.89,.012,r.paper,2);for(let h=0;h<4;h++)a.box(s*.43,-o*.3+h*o*.18,.038,s*.13,o*.08,.004,h%2?r.clay:r.sage);a.box(-s*.28,0,.041,s*.13,o*.89,.008,[.12,.24,.33]);for(const h of[-o*.28,0,o*.28])a.cone(-s*.28,h,.047,.051,l*.018,l*.018,c,4);a.box(s*.02,0,.053,s*.71,o*.87,.02,[.25,.41,.55],2,1),a.box(s*.02,-o*.24,.065,s*.5,o*.07,.002,r.cream,0,1),a.box(s*.02,-o*.09,.065,s*.43,o*.018,.002,r.cream,0,1),a.box(s*.02,-o*.02,.065,s*.35,o*.018,.002,r.cream,0,1),a.cone(s*.2,o*.24,.066,.068,l*.065,l*.065,c,4,1);break}case"wateringcan":{a.cone(-s*.11,0,.005,.071,l*.27,l*.24,r.sage,4,0,32),a.ring(-s*.11,0,.073,l*.16,l*.23,[.63,.76,.6],4,0,32),a.cone(-s*.11,0,.072,.074,l*.16,l*.16,[.12,.28,.27],3,0,32),a.rod([s*.07,-o*.04,.049],[s*.36,-o*.17,.073],l*.052,r.sage,4),a.cone(s*.4,-o*.18,.067,.079,l*.095,l*.13,[.68,.8,.67],4);const h=f=>[-s*.11-l*(.18+.28*Math.sin(f)),l*.16*Math.cos(f),.049];for(let f=0;f<24;f++)a.rod(h(f*Math.PI/24),h((f+1)*Math.PI/24),l*.027,[.68,.8,.67],4,0,12);a.cone(s*.4,-o*.18,.08,.082,l*.06,l*.06,r.ink,4);break}case"coffeetable":{for(const h of[-s*.43,s*.43])for(const f of[-o*.39,o*.39])a.bevelBox(h,f,.032,s*.046,o*.085,.065,r.walnut);a.bevelBox(0,0,.097,s,o,.03,r.walnut),a.bevelBox(0,0,.116,s*.985,o*.967,.01,r.oakLight);break}case"couch":{const h=[.53,.3,.2],f=[.65,.4,.26];for(const p of[-s*.4,s*.4])for(const v of[-o*.34,o*.34])a.bevelBox(p,v,.035,s*.029,o*.065,.07,r.walnut);a.bevelBox(0,0,.073,s*.91,o*.83,.052,r.walnut),a.cushion(0,0,.108,s*.96,o*.92,.072,h);for(const p of[-s*.228,s*.228])a.cushion(p,-o*.075,.15,s*.434,o*.68,.055,f);for(const p of[-s*.47,s*.47])a.cushion(p,0,.195,s*.095,o*.95,.11,h);a.cushion(0,o*.375,.208,s*.91,o*.23,.159,h);for(const p of[-s*.23,s*.23])a.cushion(p,o*.275,.231,s*.42,o*.2,.12,f);a.cushion(-s*.29,o*.1,.207,s*.19,o*.27,.063,[.43,.47,.31]);break}default:a.box(0,0,.009,s,o,.018,r.cream)}const d=a.finish();if(i==="eightball"){const h=new Map,f=[],p=[],v=[],m=[],g=[];for(let _=0;_<d.local.length/3;_++){const x=Array.from(d.local.slice(_*3,_*3+3)),y=Array.from(d.colors.slice(_*4,_*4+4)),E=x.map(M=>M.toFixed(7)).join(",")+":"+d.joints[_]+":"+y.join(",");let b=h.get(E);b===void 0&&(b=p.length/3,h.set(E,b),p.push(...x),v.push(...d.uv.slice(_*2,_*2+2)),m.push(...y),g.push(d.joints[_])),f.push(b)}return{local:new Float64Array(p),uv:new Float32Array(v),colors:new Float32Array(m),joints:new Uint8Array(g),triangles:new Uint16Array(Array.from(d.triangles,_=>f[_]))}}return Object.assign(d,u)}return{create:n,eightBallAnswers:t}})();function WM(r,t=1){const e=r.local.length/3,n=new Float32Array(e*3),i=new Float32Array(e*3),s=new Xt;for(let a=0;a<e;a++)n.set([r.local[a*3],r.local[a*3+2]*t,-r.local[a*3+1]],a*3),s.setRGB(...r.colors.subarray(a*4,a*4+3)).convertSRGBToLinear().toArray(i,a*3);const o=new Ue;return o.setAttribute("position",new Xe(n,3)),o.setAttribute("color",new Xe(i,3)),o.setAttribute("uv",new Xe(r.uv,2)),o.setIndex(Array.from(r.triangles)),o.computeVertexNormals(),o.computeBoundingSphere(),o}function qM(r,t,e){const n=new Vn;r.add(n);const i=t.material(new on({color:"#ffffff",vertexColors:!0,roughness:1}),0,.8),s=[];function o(c,u,d,h,f,p,v=0,m=0){const g=new Me(WM(VM.create(c,u,d),h),i);return g.castShadow=g.receiveShadow=!0,g.rotation.y=m,g.geometry.computeBoundingBox(),g.position.set(f,v-g.geometry.boundingBox.min.y,p),n.add(g),s.push({name:c,mesh:g,bottom:v}),g}const a=Mh.couch;o("couch",a.width,a.depth,4.3,a.x,a.z),e.push({size:[2.78,.5,1.3],pos:[a.x,.52,a.z]},{size:[2.68,.74,.34],pos:[a.x,1,a.z-.51]});for(const c of[a.x-1.32,a.x+1.32])e.push({size:[.27,.75,1.4],pos:[c,.76,a.z]});for(const c of[a.x-1.14,a.x+1.14])for(const u of[a.z-.49,a.z+.49])e.push({size:[.1,.3,.1],pos:[c,.15,u]});const l=Mh.coffeeTable;o("coffeetable",l.width,l.depth,5,l.x,l.z),e.push({size:[1.72,.2,.84],pos:[l.x,.51,l.z]});for(const c of[l.x-.74,l.x+.74])for(const u of[l.z-.328,l.z+.328])e.push({size:[.085,.34,.085],pos:[c,.17,u]});return o("schoolbook",.45,.36,1,l.x-.24,l.z,.613,.17),o("schoolbook",.4,.32,1,l.x-.2,l.z,.679,-.08),o("wateringcan",.52,.4,4.5,3.05,-2.05),o("chair",1.33,1.26,5,3.92,-1.17,0,-.24),e.push({size:[1.3,.65,1.22],pos:[3.92,.66,-1.17]},{size:[1.15,.54,.3],pos:[3.92,1.02,-1.62]}),{group:n,supports:s}}var XM=(function(){const r=(a,l,c)=>Math.max(l,Math.min(c,a)),t={rug:{stretch:3e-8,shear:12e-8,bend:.085,damping:1.5,friction:.85},linen:{stretch:5e-8,shear:2e-7,bend:.32,damping:1.1,friction:.65},silk:{stretch:8e-8,shear:4e-7,bend:1,damping:.85,friction:.45}};function e(a,l,c,u,d,h,f,p,v,m,g,_,x){const y=f-u,E=p-d,b=v-h,M=m-u,S=g-d,P=_-h,A=a-u,L=l-d,I=c-h,D=y*A+E*L+b*I,w=M*A+S*L+P*I;let N=1,F=0,B=0;if(!(D<=0&&w<=0)){const Y=a-f,q=l-p,O=c-v,H=y*Y+E*q+b*O,W=M*Y+S*q+P*O;if(H>=0&&W<=H)N=0,F=1;else{const rt=D*W-H*w;if(rt<=0&&D>=0&&H<=0)F=D/(D-H),N=1-F;else{const X=a-m,J=l-g,nt=c-_,ct=y*X+E*J+b*nt,at=M*X+S*J+P*nt;if(at>=0&&ct<=at)N=0,B=1;else{const St=ct*w-D*at;if(St<=0&&w>=0&&at<=0)B=w/(w-at),N=1-B;else{const Pt=H*at-ct*W;if(Pt<=0&&W-H>=0&&ct-at>=0)B=(W-H)/(W-H+(ct-at)),F=1-B,N=0;else{const dt=1/(Pt+St+rt);F=St*dt,B=rt*dt,N=1-F-B}}}}}}return x[0]=u*N+f*F+m*B,x[1]=d*N+p*F+g*B,x[2]=h*N+v*F+_*B,x[3]=N,x[4]=F,x[5]=B,x}function n(a,l,c,u,d,h){l*=3,c*=3,u*=3,d*=3;const f=a[c]-a[l],p=a[c+1]-a[l+1],v=a[c+2]-a[l+2],m=f*f+p*p+v*v,g=Math.sqrt(m),_=a[u]-a[l],x=a[u+1]-a[l+1],y=a[u+2]-a[l+2],E=a[d]-a[l],b=a[d+1]-a[l+1],M=a[d+2]-a[l+2],S=p*y-v*x,P=v*_-f*y,A=f*x-p*_,L=b*v-M*p,I=M*f-E*v,D=E*p-b*f,w=S*S+P*P+A*A,N=L*L+I*I+D*D;if(g<1e-9||w<1e-16||N<1e-16)return h.fill(0),0;const F=Math.sqrt(w*N),B=r((S*L+P*I+A*D)/F,-1,1),Y=((P*D-A*I)*f+(A*L-S*D)*p+(S*I-P*L)*v)/(F*g),q=(_*f+x*p+y*v)/m,O=(E*f+b*p+M*v)/m;h[6]=-g*S/w,h[7]=-g*P/w,h[8]=-g*A/w,h[9]=-g*L/N,h[10]=-g*I/N,h[11]=-g*D/N;for(let H=0;H<3;H++)h[3+H]=-q*h[6+H]-O*h[9+H],h[H]=-h[3+H]-h[6+H]-h[9+H];return Math.atan2(Y,B)}function i(a,l=0){const c=a.center.slice(),u=a.axes||[1,0,0,0,1,0,0,0,1],d=a.half.map(f=>f+l),h=[0,1,2].map(f=>Math.abs(u[f])*d[0]+Math.abs(u[3+f])*d[1]+Math.abs(u[6+f])*d[2]);return{...a,center:c,axes:u,half:d,bottom:Number.isFinite(a.bottom)?a.bottom-l:-1/0,bounds:[c[0]-h[0],c[1]-h[1],c[2]-h[2],c[0]+h[0],c[1]+h[1],c[2]+h[2]]}}function s(a,l,c,u,d,h,f,p,v=0){if(u<=a.bottom+2e-4&&f<=a.bottom+2e-4)return!1;const m=a.bounds;if(Math.min(l,d)>m[3]||Math.max(l,d)<m[0]||Math.min(c,h)>m[4]||Math.max(c,h)<m[1]||Math.min(u,f)>m[5]||Math.max(u,f)<m[2])return!1;const g=a.axes,_=a.center,x=a.half,y=l-_[0],E=c-_[1],b=u-_[2],M=y*g[0]+E*g[1]+b*g[2],S=y*g[3]+E*g[4]+b*g[5],P=y*g[6]+E*g[7]+b*g[8],A=(d-_[0])*g[0]+(h-_[1])*g[1]+(f-_[2])*g[2],L=(d-_[0])*g[3]+(h-_[1])*g[4]+(f-_[2])*g[5],I=(d-_[0])*g[6]+(h-_[1])*g[7]+(f-_[2])*g[8];let D=0,w=0,N=0,F=0;if(a.type==="ellipsoid"){const O=M*M/(x[0]*x[0])+S*S/(x[1]*x[1])+P*P/(x[2]*x[2]),H=(M-A)/x[0],W=(S-L)/x[1],rt=(P-I)/x[2],X=A/x[0],J=L/x[1],nt=I/x[2],ct=H*H+W*W+rt*rt,at=X*H+J*W+nt*rt,St=X*X+J*J+nt*nt-1,Pt=at*at-ct*St;let dt=M,Ot=S,Lt=P;if(St>1e-8&&Pt>=0&&ct>1e-14){const Vt=(-at-Math.sqrt(Pt))/ct;if(Vt<0||Vt>1){if(O>=1)return!1}else dt=A+(M-A)*Vt,Ot=L+(S-L)*Vt,Lt=I+(P-I)*Vt}else{if(O>=1)return!1;{const Vt=Math.sqrt(O)||1;dt=M/Vt,Ot=S/Vt,Lt=P/Vt,O<1e-12&&(Lt=x[2])}}D=dt/(x[0]*x[0]),w=Ot/(x[1]*x[1]),N=Lt/(x[2]*x[2]);const Ct=Math.hypot(D,w,N)||1;D/=Ct,w/=Ct,N/=Ct,F=(dt-M)*D+(Ot-S)*w+(Lt-P)*N}else{let O=-1/0,H=1/0,W=0,rt=0,X=0;const J=(St,Pt,dt,Ot)=>{const Lt=Pt-St;if(Math.abs(Lt)<1e-12)return Math.abs(St)<=dt;let Ct=(-dt-St)/Lt,Vt=(dt-St)/Lt,Wt=-1;return Ct>Vt&&([Ct,Vt]=[Vt,Ct],Wt=1),Ct>O&&(O=Ct,W=Ot===0?Wt:0,rt=Ot===1?Wt:0,X=Ot===2?Wt:0),H=Math.min(H,Vt),O<=H};let nt=!1,ct=!1,at=!1;if(a.type==="cylinder"){const St=M*M/(x[0]*x[0])+S*S/(x[1]*x[1]),Pt=A*A/(x[0]*x[0])+L*L/(x[1]*x[1]);nt=St<1&&Math.abs(P)<x[2],ct=Pt<=1&&Math.abs(I)<=x[2];const dt=(M-A)/x[0],Ot=(S-L)/x[1],Lt=dt*dt+Ot*Ot,Ct=A/x[0]*dt+L/x[1]*Ot,Vt=Ct*Ct-Lt*(Pt-1);if(Lt>1e-14&&Vt>=0){O=(-Ct-Math.sqrt(Vt))/Lt,H=(-Ct+Math.sqrt(Vt))/Lt;const Wt=A+(M-A)*O,ye=L+(S-L)*O,ie=Math.hypot(Wt/(x[0]*x[0]),ye/(x[1]*x[1]))||1;W=Wt/(x[0]*x[0])/ie,rt=ye/(x[1]*x[1])/ie,at=J(I,P,x[2],2)}else Pt<=1&&(at=J(I,P,x[2],2));if(!ct&&at&&O>=0&&O<=1&&H>=0)D=W,w=rt,N=X,F=(A+(M-A)*O-M)*D+(L+(S-L)*O-S)*w+(I+(P-I)*O-P)*N;else if(nt){const Wt=Math.sqrt(St),ye=(1-Wt)*Math.min(x[0],x[1]),ie=x[2]-Math.abs(P);if(ie<ye&&!(P<0&&_[2]-x[2]<v-1e-7))N=P>=0?1:-1,F=ie;else{const it=Math.hypot(M/(x[0]*x[0]),S/(x[1]*x[1]))||1;D=M/(x[0]*x[0])/it,w=S/(x[1]*x[1])/it,Wt<1e-8&&(D=1),F=Wt<1e-8?x[0]:(M/Wt-M)*D+(S/Wt-S)*w}}else return!1}else if(nt=Math.abs(M)<x[0]&&Math.abs(S)<x[1]&&Math.abs(P)<x[2],ct=Math.abs(A)<=x[0]&&Math.abs(L)<=x[1]&&Math.abs(I)<=x[2],at=J(A,M,x[0],0)&&J(L,S,x[1],1)&&J(I,P,x[2],2),!ct&&at&&O>=0&&O<=1&&H>=0)D=W,w=rt,N=X,F=(A+(M-A)*O-M)*D+(L+(S-L)*O-S)*w+(I+(P-I)*O-P)*N;else if(nt){let St=1/0;for(let Pt=0;Pt<3;Pt++)for(const dt of[-1,1]){const Ot=Pt===0?M:Pt===1?S:P,Lt=x[Pt]-dt*Ot,Ct=dt*g[Pt*3+2];Ct<-.5&&u+Ct*Lt<v||Lt<St&&(St=Lt,D=Pt===0?dt:0,w=Pt===1?dt:0,N=Pt===2?dt:0)}F=St}else return!1}if(!(F>=0&&Number.isFinite(F)))return!1;const B=g[0]*D+g[3]*w+g[6]*N,Y=g[1]*D+g[4]*w+g[7]*N,q=g[2]*D+g[5]*w+g[8]*N;if(u+q*F<v-1e-5){const O=Math.hypot(l-_[0],c-_[1]);p[3]=O>1e-8?(l-_[0])/O:1,p[4]=O>1e-8?(c-_[1])/O:0,p[5]=0;const H=Math.max(x[0],x[1]);p[0]=_[0]+p[3]*(H+1e-6),p[1]=_[1]+p[4]*(H+1e-6),p[2]=u}else p[0]=l+B*(F+1e-6),p[1]=c+Y*(F+1e-6),p[2]=Math.max(v,u+q*(F+1e-6)),p[3]=B,p[4]=Y,p[5]=q;return!0}class o{constructor(l={}){this.cols=l.cols||41,this.rows=l.rows||29,this.count=this.cols*this.rows,this.width=l.width||1.3,this.height=l.height||this.width/1.48,this.origin=[l.x===void 0?.7:l.x,l.y===void 0?.35:l.y],this.position=new Float64Array(this.count*3),this.previous=new Float64Array(this.count*3),this.velocity=new Float64Array(this.count*3),this.rest=new Float64Array(this.count*3),this.inverseMass=new Float64Array(this.count).fill(1),this.normals=new Float32Array(this.count*3),this.contactNormals=new Float64Array(this.count*3),this.normalPush=new Float64Array(this.count),this.uv=new Float32Array(this.count*2),this.contact=new Uint8Array(this.count),this.material=t[l.material]?l.material:"rug",this.maxSpeed=l.maxSpeed||6.5,this.maxGrabSpeed=l.maxGrabSpeed||4.5,this.gravity=l.gravity===void 0?9.81:l.gravity,this.thickness=l.thickness||.006,this.fixedStep=1/120,this.iterations=l.iterations||5,this.accumulator=0,this.roomColliders=[],this.roomVersion=null,this._roomResult=new Float64Array(6),this.colliders=[],this.grab=null,this.active=!0,this.sleepTime=0,this.selfCollision=l.selfCollision!==!1,this.time=0,this.steps=0,this.stats={selfContacts:0,environmentContacts:0,roomContacts:0,stepMs:0},this._gradient=new Float64Array(12),this._closest=new Float64Array(6),this._hash=new Map,this._hashBuckets=[],this._stamp=new Uint32Array((this.cols-1)*(this.rows-1)*2),this._queryID=0,this._build(),this.reset()}_build(){const l=[],c=[],u=[],d=[],h=[],f=new Map,p=this.cols,v=this.rows,m=(_,x,y)=>{l.push(_,x);const E=(_%p-x%p)*this.width/(p-1),b=(Math.floor(_/p)-Math.floor(x/p))*this.height/(v-1);c.push(Math.hypot(E,b)),u.push(y)},g=(_,x,y)=>{d.push(_,x,y);for(const[E,b,M]of[[_,x,y],[x,y,_],[y,_,x]]){const S=Math.min(E,b)*this.count+Math.max(E,b),P=f.get(S);P?h.push(P[0],P[1],P[2],M):f.set(S,[E,b,M])}};for(let _=0;_<v;_++)for(let x=0;x<p;x++){const y=_*p+x;this.uv[2*y]=x/(p-1),this.uv[2*y+1]=_/(v-1),x<p-1&&m(y,y+1,0),_<v-1&&m(y,y+p,0),x<p-1&&_<v-1&&((x+_)%2===0?(m(y+1,y+p,1),g(y,y+1,y+p),g(y+1,y+p+1,y+p)):(m(y,y+p+1,1),g(y,y+1,y+p+1),g(y,y+p+1,y+p)))}this.edges=new Uint16Array(l),this.restLength=new Float64Array(c),this.edgeType=new Uint8Array(u),this.edgeLambda=new Float64Array(c.length),this.triangles=new Uint16Array(d),this.hinges=new Uint16Array(h),this.bendLambda=new Float64Array(h.length/4),this.spacing=Math.max(this.width/(p-1),this.height/(v-1)),this.hashCell=this.spacing*1.8}reset(l=this.origin[0],c=this.origin[1],u=.055){this.release(),this.origin=[l,c];for(let d=0;d<this.rows;d++)for(let h=0;h<this.cols;h++){const f=d*this.cols+h,p=f*3;this.position[p]=l+h*this.width/(this.cols-1),this.position[p+1]=c+d*this.height/(this.rows-1),this.position[p+2]=this.thickness+u+Math.sin(h*1.73+d*.61)*1e-4,this.rest[p]=h*this.width/(this.cols-1),this.rest[p+1]=d*this.height/(this.rows-1),this.rest[p+2]=0}this.previous.set(this.position),this.velocity.fill(0),this.inverseMass.fill(1),this.accumulator=0,this.wake(),this.updateNormals()}setMaterial(l){t[l]&&(this.material=l,this.wake())}setColliders(l){this.colliders=l.map(c=>({x:c.x,y:c.y,z:c.z||0,rx:c.rx||.064,ry:c.ry||.054,rz:c.rz||.055})),this.wake()}setRoomColliders(l,c){if(c!==void 0&&c===this.roomVersion)return;this.roomVersion=c,this.roomColliders=l.map(d=>i(d,this.thickness)),this.nearRoom=null,this.roomGrid=new Map;const u=.14;for(const d of this.roomColliders){const h=d.bounds;for(let f=Math.floor((h[0]-.035)/u);f<=Math.floor((h[3]+.035)/u);f++)for(let p=Math.floor((h[1]-.035)/u);p<=Math.floor((h[4]+.035)/u);p++){const v=f*4096+p,m=this.roomGrid.get(v);m?m.push(d):this.roomGrid.set(v,[d])}}this.wake()}roomBucket(l,c){return this.roomGrid?.get(Math.floor(l/.14)*4096+Math.floor(c/.14))||[]}surfaceHeight(l,c,u=1/0){const d=this.position,h=this.triangles;let f=null;for(let p=0;p<h.length;p+=3){const v=h[p]*3,m=h[p+1]*3,g=h[p+2]*3,_=d[v],x=d[v+1],y=d[m],E=d[m+1],b=d[g],M=d[g+1];if(l<Math.min(_,y,b)||l>Math.max(_,y,b)||c<Math.min(x,E,M)||c>Math.max(x,E,M))continue;const S=(E-M)*(_-b)+(b-y)*(x-M);if(Math.abs(S)<1e-10)continue;const P=((E-M)*(l-b)+(b-y)*(c-M))/S,A=((M-x)*(l-b)+(_-b)*(c-M))/S,L=1-P-A;if(P<0||A<0||L<0)continue;const I=d[v+2]*P+d[m+2]*A+d[g+2]*L;I<=u&&(f===null||I>f)&&(f=I)}return f}wake(){this.active=!0,this.sleepTime=0}translate(l,c,u=0){const d=this.roomColliders.length?Math.max(1,Math.ceil(Math.hypot(l,c,u)/.02)):1;for(let h=0;h<d;h++){this.previous.set(this.position);for(let f=0;f<this.count;f++){const p=f*3;this.position[p]+=l/d,this.position[p+1]+=c/d,this.position[p+2]=Math.max(this.thickness,this.position[p+2]+u/d)}this.roomColliders.length&&this._environment()}this.previous.set(this.position),this.origin[0]+=l,this.origin[1]+=c,this.wake(),this.updateNormals()}grabTriangle(l,c,u=.15){this.release();const d=Array.from(this.triangles.slice(l*3,l*3+3));d.sort((p,v)=>{const m=this.position;return Math.hypot(m[p*3]-c[0],m[p*3+1]-c[1],m[p*3+2]-c[2])-Math.hypot(m[v*3]-c[0],m[v*3+1]-c[1],m[v*3+2]-c[2])});const h=[d[0]],f=h.map(p=>[this.position[p*3]-c[0],this.position[p*3+1]-c[1],this.position[p*3+2]-c[2]]);this.grab={ids:h,offsets:f,current:c.slice(),target:[c[0],c[1],Math.max(this.thickness,c[2]+u)],baseHeight:c[2],lift:u};for(const p of h)this.inverseMass[p]=0;return this.wake(),this.grab}moveGrab(l){this.grab&&(this.grab.target=l.slice(),this.grab.target[2]=r(this.grab.target[2],this.thickness,1.2),this.wake())}release(){if(this.grab){for(const l of this.grab.ids)this.inverseMass[l]=1;this.grab=null,this.wake()}}_movePins(l){if(!this.grab)return;const c=this.grab,u=c.target[0]-c.current[0],d=c.target[1]-c.current[1],h=c.target[2]-c.current[2],f=Math.hypot(u,d,h),p=f?Math.min(1,this.maxGrabSpeed*l/f):1;c.current[0]+=u*p,c.current[1]+=d*p,c.current[2]+=h*p;for(let v=0;v<c.ids.length;v++){const m=c.ids[v]*3;for(let g=0;g<3;g++)this.position[m+g]=c.current[g]+c.offsets[v][g]}}_distances(l,c){const u=this.position,d=this.inverseMass,h=t[this.material],f=l*l,p=this.restLength.length;for(let v=0;v<p;v++){const m=c?p-1-v:v,g=this.edges[2*m],_=this.edges[2*m+1],x=g*3,y=_*3,E=d[g],b=d[_];if(E+b===0)continue;const M=u[x]-u[y],S=u[x+1]-u[y+1],P=u[x+2]-u[y+2],A=Math.sqrt(M*M+S*S+P*P);if(A<1e-12)continue;const L=(this.edgeType[m]?h.shear:h.stretch)/f,I=(-(A-this.restLength[m])-L*this.edgeLambda[m])/(E+b+L);this.edgeLambda[m]+=I;const D=I/A;u[x]+=E*D*M,u[x+1]+=E*D*S,u[x+2]+=E*D*P,u[y]-=b*D*M,u[y+1]-=b*D*S,u[y+2]-=b*D*P}}_bending(l){const c=this.position,u=this.inverseMass,d=this._gradient,h=t[this.material].bend/(l*l);for(let f=0;f<this.bendLambda.length;f++){const p=f*4,v=this.hinges[p],m=this.hinges[p+1],g=this.hinges[p+2],_=this.hinges[p+3],x=n(c,v,m,g,_,d);if(Math.abs(x)<1e-8&&this.bendLambda[f]===0)continue;let y=h;for(let b=0;b<4;b++){const M=u[this.hinges[p+b]],S=b*3;y+=M*(d[S]*d[S]+d[S+1]*d[S+1]+d[S+2]*d[S+2])}if(y<1e-12)continue;const E=(-x-h*this.bendLambda[f])/y;this.bendLambda[f]+=E;for(let b=0;b<4;b++){const M=this.hinges[p+b],S=M*3,P=b*3,A=u[M]*E;for(let L=0;L<3;L++)c[S+L]+=A*d[P+L]}}}_environment(){const l=this.position,c=this.contactNormals,u=this.thickness;for(let d=0;d<this.count;d++){const h=3*d;l[h+2]<u+1e-7&&(this.normalPush[d]+=Math.max(0,u-l[h+2]),l[h+2]=u,this.contact[d]=1,c[h]=0,c[h+1]=0,c[h+2]=1,this.stats.environmentContacts++);for(const f of this.roomBucket(l[h],l[h+1])){const p=this._roomResult;s(f,l[h],l[h+1],l[h+2],this.previous[h],this.previous[h+1],this.previous[h+2],p,u)&&(this.normalPush[d]+=Math.hypot(p[0]-l[h],p[1]-l[h+1],p[2]-l[h+2]),l[h]=p[0],l[h+1]=p[1],l[h+2]=p[2],c[h]=p[3],c[h+1]=p[4],c[h+2]=p[5],this.contact[d]=1,this.stats.roomContacts++)}for(const f of this.colliders){const p=f.rx+u,v=f.ry+u,m=f.rz+u,g=l[h]-f.x,_=l[h+1]-f.y,x=l[h+2]-f.z;if(Math.abs(g)>p||Math.abs(_)>v||Math.abs(x)>m)continue;const y=Math.sqrt(g*g/(p*p)+_*_/(v*v)+x*x/(m*m));if(y<1){const E=l[h],b=l[h+1],M=l[h+2];y<1e-8?l[h+2]=f.z+m:(l[h]=f.x+g/y,l[h+1]=f.y+_/y,l[h+2]=f.z+x/y),this.normalPush[d]+=Math.hypot(l[h]-E,l[h+1]-b,l[h+2]-M);const S=(l[h]-f.x)/(p*p),P=(l[h+1]-f.y)/(v*v),A=(l[h+2]-f.z)/(m*m),L=Math.hypot(S,P,A)||1;c[h]=S/L,c[h+1]=P/L,c[h+2]=A/L,this.contact[d]=1,this.stats.environmentContacts++}}}}_roomFaces(){if(!(this.nearRoom||this.roomColliders).length)return;const c=this.position,u=this.previous,d=this.triangles,h=this.inverseMass,f=this._roomResult;for(let p=0;p<d.length;p+=3){const v=d[p],m=d[p+1],g=d[p+2],_=v*3,x=m*3,y=g*3,E=h[v]+h[m]+h[g];if(!E)continue;let b=(c[_]+c[x]+c[y])/3,M=(c[_+1]+c[x+1]+c[y+1])/3,S=(c[_+2]+c[x+2]+c[y+2])/3;const P=(u[_]+u[x]+u[y])/3,A=(u[_+1]+u[x+1]+u[y+1])/3,L=(u[_+2]+u[x+2]+u[y+2])/3;for(const I of this.roomBucket(b,M))if(s(I,b,M,S,P,A,L,f,this.thickness)){const D=Math.hypot(f[0]-b,f[1]-M,f[2]-S),w=Math.min(1,this.spacing*.2/(D||1)),N=(f[0]-b)*w,F=(f[1]-M)*w,B=(f[2]-S)*w;for(const Y of[v,m,g]){const q=Y*3,O=3*h[Y]/E;c[q]+=N*O,c[q+1]+=F*O,c[q+2]+=B*O}b=f[0],M=f[1],S=f[2],this.stats.roomContacts++}}}_frictionPositions(){const l=this.position,c=this.previous,u=this.contactNormals,d=t[this.material].friction;for(let h=0;h<this.count;h++){if(!this.contact[h]||!this.inverseMass[h])continue;const f=3*h,p=l[f]-c[f],v=l[f+1]-c[f+1],m=l[f+2]-c[f+2],g=p*u[f]+v*u[f+1]+m*u[f+2],_=p-g*u[f],x=v-g*u[f+1],y=m-g*u[f+2],E=Math.sqrt(_*_+x*x+y*y),b=d*this.normalPush[h];if(E<1e-12)continue;const M=E<b*1.2?1:Math.min(1,b/E);l[f]-=_*M,l[f+1]-=x*M,l[f+2]-=y*M}}_hashKey(l,c,u){return l*73856093^c*19349663^u*83492791}_nearInRest(l,c,u,d){const h=l%this.cols,f=l/this.cols|0;return Math.abs(h-c%this.cols)<=1&&Math.abs(f-(c/this.cols|0))<=1||Math.abs(h-u%this.cols)<=1&&Math.abs(f-(u/this.cols|0))<=1||Math.abs(h-d%this.cols)<=1&&Math.abs(f-(d/this.cols|0))<=1}_selfContacts(){if(!this.selfCollision)return;const l=this.position,c=this.previous,u=this.triangles,d=this.inverseMass,h=this.thickness*1.7,f=this.hashCell,p=this._hash;let v=0;for(let _=2;_<l.length;_+=3)v=Math.max(v,l[_],c[_]);if(v<this.thickness*2.2)return;p.clear();let m=0;for(let _=0;_<u.length/3;_++){const x=u[3*_]*3,y=u[3*_+1]*3,E=u[3*_+2]*3,b=Math.floor((Math.min(l[x],l[y],l[E],c[x],c[y],c[E])-h)/f),M=Math.floor((Math.max(l[x],l[y],l[E],c[x],c[y],c[E])+h)/f),S=Math.floor((Math.min(l[x+1],l[y+1],l[E+1],c[x+1],c[y+1],c[E+1])-h)/f),P=Math.floor((Math.max(l[x+1],l[y+1],l[E+1],c[x+1],c[y+1],c[E+1])+h)/f),A=Math.floor((Math.min(l[x+2],l[y+2],l[E+2],c[x+2],c[y+2],c[E+2])-h)/f),L=Math.floor((Math.max(l[x+2],l[y+2],l[E+2],c[x+2],c[y+2],c[E+2])+h)/f);for(let I=b;I<=M;I++)for(let D=S;D<=P;D++)for(let w=A;w<=L;w++){const N=this._hashKey(I,D,w);let F=p.get(N);F||(F=this._hashBuckets[m]??(this._hashBuckets[m]=[]),F.length=0,m++,p.set(N,F)),F.push(_)}}const g=this._closest;for(let _=0;_<this.count;_++){const x=3*_;if(l[x+2]<this.thickness*1.05&&c[x+2]<this.thickness*1.05)continue;++this._queryID>4e9&&(this._stamp.fill(0),this._queryID=1);const y=this._queryID,E=Math.floor(l[x]/f),b=Math.floor(l[x+1]/f),M=Math.floor(l[x+2]/f),S=p.get(this._hashKey(E,b,M));if(S)for(const P of S){if(this._stamp[P]===y)continue;this._stamp[P]=y;const A=u[P*3],L=u[P*3+1],I=u[P*3+2];if(this._nearInRest(_,A,L,I))continue;const D=A*3,w=L*3,N=I*3;e(l[x],l[x+1],l[x+2],l[D],l[D+1],l[D+2],l[w],l[w+1],l[w+2],l[N],l[N+1],l[N+2],g);let F=l[x]-g[0],B=l[x+1]-g[1],Y=l[x+2]-g[2],q=Math.sqrt(F*F+B*B+Y*Y),O,H,W,rt;const X=l[w]-l[D],J=l[w+1]-l[D+1],nt=l[w+2]-l[D+2],ct=l[N]-l[D],at=l[N+1]-l[D+1],St=l[N+2]-l[D+2];O=J*St-nt*at,H=nt*ct-X*St,W=X*at-J*ct;const Pt=Math.sqrt(O*O+H*H+W*W);if(Pt<1e-10)continue;O/=Pt,H/=Pt,W/=Pt;const dt=F*O+B*H+Y*W,Ot=c[x]-(c[D]*g[3]+c[w]*g[4]+c[N]*g[5]),Lt=c[x+1]-(c[D+1]*g[3]+c[w+1]*g[4]+c[N+1]*g[5]),Ct=c[x+2]-(c[D+2]*g[3]+c[w+2]*g[4]+c[N+2]*g[5]),Vt=Ot*O+Lt*H+Ct*W,Wt=g[3]>1e-4&&g[4]>1e-4&&g[5]>1e-4,ye=Wt&&Vt*dt<0&&Math.abs(Vt)<this.spacing*1.2&&Math.abs(dt)<this.spacing*1.2;if(q>=h&&!ye)continue;if(Wt){const pt=Math.abs(Vt)>1e-7?Vt>0?1:-1:dt>=0?1:-1;O*=pt,H*=pt,W*=pt,rt=pt*dt-h}else{if(q<1e-8){const pt=Vt>=0?1:-1;O*=pt,H*=pt,W*=pt}else O=F/q,H=B/q,W=Y/q;rt=q-h}if(rt>=0)continue;const ie=d[_]+d[A]*g[3]*g[3]+d[L]*g[4]*g[4]+d[I]*g[5]*g[5];if(ie<1e-10)continue;const it=Math.min(-rt,this.spacing*.5)/ie;l[x]+=d[_]*it*O,l[x+1]+=d[_]*it*H,l[x+2]+=d[_]*it*W;for(let pt=0;pt<3;pt++){const bt=u[P*3+pt],Rt=bt*3,Yt=d[bt]*g[3+pt]*it;l[Rt]-=Yt*O,l[Rt+1]-=Yt*H,l[Rt+2]-=Yt*W}this.stats.selfContacts++}}}_substep(l){const c=this.position,u=this.velocity,d=this.inverseMass,h=t[this.material],f=Math.exp(-h.damping*l);this.previous.set(c),this.contact.fill(0),this.normalPush.fill(0),this.edgeLambda.fill(0),this.bendLambda.fill(0);for(let v=0;v<this.count;v++){const m=3*v;if(d[v]===0)continue;u[m]*=f,u[m+1]*=f,u[m+2]=u[m+2]*f-this.gravity*l;const g=Math.hypot(u[m],u[m+1],u[m+2]),_=this.maxSpeed;g>_&&(u[m]*=_/g,u[m+1]*=_/g,u[m+2]*=_/g),c[m]+=u[m]*l,c[m+1]+=u[m+1]*l,c[m+2]+=u[m+2]*l}this._movePins(l);for(let v=0;v<this.iterations;v++)(v===1||v===this.iterations-1)&&this._bending(l),this._distances(l,(v+this.steps)%2===1),this._environment();if(this._selfContacts(),this._roomFaces(),this._environment(),this._frictionPositions(),this._environment(),this.grab){const v=this.grab,m=v.ids[0]*3;for(let g=0;g<3;g++)v.current[g]=c[m+g]-v.offsets[0][g]}let p=0;for(let v=0;v<this.count;v++){const m=3*v;let g=(c[m]-this.previous[m])/l,_=(c[m+1]-this.previous[m+1])/l,x=(c[m+2]-this.previous[m+2])/l;if(this.contact[v]&&d[v]){const y=this.contactNormals[m],E=this.contactNormals[m+1],b=this.contactNormals[m+2],M=g*y+_*E+x*b;M<0&&(g-=M*y,_-=M*E,x-=M*b)}u[m]=g,u[m+1]=_,u[m+2]=x,p+=g*g+_*_+x*x}this.time+=l,this.steps++,!this.grab&&p/this.count<6e-6?(this.sleepTime+=l,this.sleepTime>.55&&(this.active=!1,this.velocity.fill(0))):this.sleepTime=0}advance(l){if(!this.active)return!1;this.stats.selfContacts=0,this.stats.environmentContacts=0,this.stats.roomContacts=0;let c=1/0,u=1/0,d=1/0,h=-1/0,f=-1/0,p=-1/0;for(let m=0;m<this.position.length;m+=3)c=Math.min(c,this.position[m]),u=Math.min(u,this.position[m+1]),d=Math.min(d,this.position[m+2]),h=Math.max(h,this.position[m]),f=Math.max(f,this.position[m+1]),p=Math.max(p,this.position[m+2]);this.nearRoom=this.roomColliders.filter(m=>m.bounds[3]>=c-.22&&m.bounds[0]<=h+.22&&m.bounds[4]>=u-.22&&m.bounds[1]<=f+.22&&m.bounds[5]>=d-.22&&m.bounds[2]<=p+.22),this.accumulator+=r(l,0,1/30);let v=0;for(;this.accumulator>=this.fixedStep&&v<8;)this._substep(this.fixedStep),this.accumulator-=this.fixedStep,v++;return v&&this.updateNormals(),v>0}updateNormals(){const l=this.position,c=this.normals,u=this.triangles;c.fill(0);for(let d=0;d<u.length;d+=3){const h=u[d]*3,f=u[d+1]*3,p=u[d+2]*3,v=l[f]-l[h],m=l[f+1]-l[h+1],g=l[f+2]-l[h+2],_=l[p]-l[h],x=l[p+1]-l[h+1],y=l[p+2]-l[h+2],E=m*y-g*x,b=g*_-v*y,M=v*x-m*_;c[h]+=E,c[h+1]+=b,c[h+2]+=M,c[f]+=E,c[f+1]+=b,c[f+2]+=M,c[p]+=E,c[p+1]+=b,c[p+2]+=M}for(let d=0;d<c.length;d+=3){const h=c[d],f=c[d+1],p=c[d+2],v=1/(Math.sqrt(h*h+f*f+p*p)||1);c[d]=h*v,c[d+1]=f*v,c[d+2]=p*v}}project(l=500){const c=new Float32Array(this.count*2),u=this.position;for(let d=0;d<this.count;d++)c[d*2]=(u[d*3]+u[d*3+2]*.08)*l,c[d*2+1]=(u[d*3+1]-u[d*3+2]*.36)*l;return c}pick(l,c,u=500,d=this.triangles){const h=this.position,f=d;let p=null,v=-1/0;for(let m=0;m<f.length;m+=3){const g=f[m]*3,_=f[m+1]*3,x=f[m+2]*3,y=(h[g]+h[g+2]*.08)*u,E=(h[g+1]-h[g+2]*.36)*u,b=(h[_]+h[_+2]*.08)*u,M=(h[_+1]-h[_+2]*.36)*u,S=(h[x]+h[x+2]*.08)*u,P=(h[x+1]-h[x+2]*.36)*u,A=(M-P)*(y-S)+(S-b)*(E-P);if(Math.abs(A)<1e-8)continue;const L=((M-P)*(l-S)+(S-b)*(c-P))/A,I=((P-E)*(l-S)+(y-S)*(c-P))/A,D=1-L-I;if(L<-1e-4||I<-1e-4||D<-1e-4)continue;const w=h[g+2]*L+h[_+2]*I+h[x+2]*D;w>v&&(v=w,p={triangle:m/3,point:[h[g]*L+h[_]*I+h[x]*D,h[g+1]*L+h[_+1]*I+h[x+1]*D,w],bary:[L,I,D]})}return p}diagnostics(){let l=0,c=0,u=1/0,d=-1/0,h=!0;const f=this.position;for(let p=0;p<this.restLength.length;p++){const v=this.edges[p*2]*3,m=this.edges[p*2+1]*3,g=Math.abs(Math.hypot(f[v]-f[m],f[v+1]-f[m+1],f[v+2]-f[m+2])/this.restLength[p]-1);l=Math.max(l,g),c+=g}for(let p=0;p<f.length;p++)h=h&&Number.isFinite(f[p]),p%3===2&&(u=Math.min(u,f[p]),d=Math.max(d,f[p]));return{particles:this.count,triangles:this.triangles.length/3,stretchConstraints:this.restLength.length,bendingConstraints:this.hinges.length/4,maxStrain:l,meanStrain:c/this.restLength.length,minZ:u,maxZ:d,finite:h,active:this.active}}}return{Cloth:o,MATERIALS:t,closestTriangle:e,dihedral:n,roomShape:i,roomContact:s}})();const{Cloth:YM}=XM,Du=3;function ZM(r=[]){const t=Du,e=Pu,n=new YM({cols:25,rows:17,width:e.width/t,height:e.depth/t,x:(e.x-e.width/2)/t,y:-4.175/t,iterations:4,gravity:9.81/t,maxSpeed:2.8,maxGrabSpeed:2.8,thickness:.004,selfCollision:!0});n.setRoomColliders(r.filter(s=>s.size[0]<100).map(s=>({type:"box",center:[s.pos[0]/t,-s.pos[2]/t,s.pos[1]/t],half:[s.size[0]/t/2,s.size[2]/t/2,s.size[1]/t/2]})));const i=n._environment.bind(n);n._environment=function(){i();for(let s=0;s<this.count;s++){const o=s*3,a=this.position[o]*t,l=-this.position[o+1]*t;if(Lu(a,l)<=1)continue;const c=Iu(a,l)/t+this.thickness;this.position[o+2]<c&&(this.normalPush[s]+=c-this.position[o+2],this.position[o+2]=c,this.contact[s]=1,this.contactNormals[o]=0,this.contactNormals[o+1]=0,this.contactNormals[o+2]=1)}},n.reset(n.origin[0],n.origin[1],0);for(let s=0;s<100;s++)n.advance(1/60);return n}function KM(r,t,e,n){const i=Du,s=ZM(n),o=new Ue,a=new Float32Array(s.count*3),l=new Float32Array(s.count*3);o.setAttribute("position",new Xe(a,3).setUsage(Zr)),o.setAttribute("normal",new Xe(l,3).setUsage(Zr)),o.setAttribute("uv",new Xe(s.uv,2)),o.setIndex(new Xe(s.triangles,1));const c=e.material(new on({map:t,side:Qe,roughness:1}),0,.7);c.bumpScale=.012;const u=new Me(o,c);u.castShadow=u.receiveShadow=!0,r.add(u);const d={name:"rug",section:"rug",mesh:u};u.userData.item=d;let h=0,f=0,p=0;function v(){for(let _=0;_<s.count;_++){const x=_*3;a[x]=s.position[x]*i,a[x+1]=s.position[x+2]*i,a[x+2]=-s.position[x+1]*i,l[x]=s.normals[x],l[x+1]=s.normals[x+2],l[x+2]=-s.normals[x+1]}o.attributes.position.needsUpdate=o.attributes.normal.needsUpdate=!0,o.computeBoundingSphere(),o.computeBoundingBox()}function m(_){const x=performance.now(),y=s.advance(Math.min(_,1/30));return p=performance.now()-x,y&&v(),s.active}const g=_=>[_.x/i,-_.z/i,_.y/i];return v(),{item:d,cloth:s,update:m,start(_,x){return s.grabTriangle(x,g(_),0),h++,!0},move(_){const x=g(_);x.every(Number.isFinite)&&(s.moveGrab(x),f=Math.max(f,_.y))},release(_=!1){s.release(),_&&s.velocity.fill(0)},reset(){const _=Pu;s.reset((_.x-_.width/2)/i,-4.175/i,0),v()},get diagnostics(){return{...s.diagnostics(),grabs:h,peakHeight:f,stepMs:+p.toFixed(2),steps:s.steps}}}}const ii=r=>document.getElementById(r),ue=ii("scene");let je;try{je=new b_({canvas:ue,antialias:!0,alpha:!1,powerPreference:"default"})}catch(r){ii("loading").hidden=!0,ii("fallback").hidden=!1,console.error("WebGL unavailable",r)}je&&$M().catch(r=>{ii("loading").hidden=!0,ii("fallback").hidden=!1,console.error("Painted studio could not load",r)});async function $M(){const r=matchMedia("(prefers-reduced-motion: reduce)").matches,t=new Kr;t.background=new Xt(_n.sky),je.shadowMap.enabled=!0,je.shadowMap.type=Bs,je.outputColorSpace=Ge,je.toneMapping=$a,je.toneMappingExposure=.98;const e=new gn(38,1,.08,340),n=new bf("#ded8c5","#6c4f45",1.6);t.add(n);const i=new vc("#fff1ce",2.05);i.position.set(-3,7,5),i.castShadow=!0,i.shadow.mapSize.set(1024,1024),Object.assign(i.shadow.camera,{left:-9,right:9,top:8,bottom:-8,near:.1,far:24}),i.shadow.bias=-2e-4,i.shadow.normalBias=.025,i.shadow.radius=3,t.add(i);const s=new vc("#b3b19b",.85);s.position.set(4,3,-2),t.add(s);let o=!1;const a=await GM(),l=_u();a.coat(l.group);const c=new xM(je,e,l,r,[n,i,s]);ue.style.pointerEvents="none",ii("room").setAttribute("aria-busy","true");function u(){const it=innerWidth,pt=innerHeight;je.setPixelRatio(Math.min(Math.max(1,devicePixelRatio),it<700?1.5:1.75,Math.sqrt(23e5/(it*pt)))),je.setSize(it,pt,!1),e.aspect=it/pt,e.updateProjectionMatrix();const bt=ct("room");e.position.copy(bt.position),e.lookAt(bt.target),c.resize(),c.initial&&c.render(null,0,0)}u(),window.addEventListener("resize",u),await c.show();const d=W_(t,l);a.coat(d.room);const h=HM(t,a);qM(d.room,a,d.colliders);const f=KM(d.room,d.rugMap,a,d.colliders),p=new vM(d.colliders,d.props);let v=!1,m=0;const g=MM(p,it=>{const pt=Math.max(0,it-m);m=it,r||h.update(it),v=f.update(pt)});g.prepare();let _=null;const x=await AM({parent:d.room,camera:e,canvas:ue,physics:p,reduced:r,invalidate:nt,onLock(it){it?(L=null,Wt(!0),_=vh(J,e,ue),ue.style.pointerEvents="none"):(_?.(),_=null,J.enabled=o,ue.style.pointerEvents=""),nt()}}),y=[...d.props,x.item],E=[...d.interactives.filter(it=>it.section==="lamp"),...y,f.item];for(const it of E)it.mesh.userData.item=it;const b=new Rf,M=new Gt,S=new k;let P=0,A=0,L=null,I=null,D=!1,w="room",N=!0,F=!1,B=0,Y=0,q=0,O=0,H=0;const W={};let rt=null,X=null;const J=new w_(e,ue);J.enablePan=!1,J.enableDamping=!r,J.dampingFactor=.085,J.rotateSpeed=.65,J.zoomSpeed=.7,J.minPolarAngle=.16,J.maxPolarAngle=Math.PI/2-.07,J.minDistance=2.5,J.maxDistance=36,J.addEventListener("change",nt),J.addEventListener("start",()=>{L=null,F=!0,nt()}),J.addEventListener("end",()=>{F=!1,nt()});function nt(){o&&!P&&!document.hidden&&(P=requestAnimationFrame(dt))}function ct(it){const pt=innerWidth/innerHeight,bt=Math.max(1,1.2/pt);if(it==="desk")return{target:new k(0,1.15,-.95),position:new k(3.6,4.1,4.7).multiplyScalar(Math.max(1,.82/pt)).add(new k(0,.1,-.65))};const Rt=new k(-.85,1.05,.65),Yt=new k(7.5,4,13.3).multiplyScalar(bt);return{target:Rt,position:Rt.clone().add(Yt)}}function at(it,pt=!1){w=it;const bt=ct(it);pt||r?(e.position.copy(bt.position),J.target.copy(bt.target),J.update(),L=null):L={start:performance.now(),from:e.position.clone(),targetFrom:J.target.clone(),...bt},nt()}function St(){I&&Wt(!0);const it=innerWidth,pt=innerHeight;je.setPixelRatio(Math.min(Math.max(1,devicePixelRatio),it<700?1.5:1.75,Math.sqrt(23e5/(it*pt)))),je.setSize(it,pt,!1),e.aspect=it/pt,e.updateProjectionMatrix(),at(w,!0),c.resize(),nt()}window.removeEventListener("resize",u),window.addEventListener("resize",St),St();function Pt(it){const pt={};for(const bt of E){const Rt=bt.section==="rug"?bt.mesh.geometry.boundingBox.getCenter(new k).applyMatrix4(bt.mesh.matrixWorld).project(e):bt.mesh.getWorldPosition(new k).project(e);pt[bt.name||bt.section]={x:Math.round((Rt.x*.5+.5)*innerWidth),y:Math.round((-.5*Rt.y+.5)*innerHeight)}}ii("diagnostics").textContent=JSON.stringify({rug:f.diagnostics,entrance:c.stats,letter:x.diagnostics,sceneTime:g.elapsed,sceneFrames:g.frames,held:p.drag?.body.name??null,grabs:W,lastGrab:rt,idle:it,frames:A,awake:p.awake,steps:p.stepCount,physicsMs:+B.toFixed(2),renderMs:+Y.toFixed(2),activeFps:H,drawCalls:je.info.render.calls,triangles:je.info.render.triangles,pixelRatio:je.getPixelRatio(),view:w,lampOn:N,camera:e.position.toArray().map(bt=>+bt.toFixed(2)),points:pt,bodies:p.bodies.map(bt=>({name:bt.name,position:bt.position.toArray().map(Rt=>+Rt.toFixed(3)),sleeping:bt.sleepState===2,rotation:bt.quaternion.toArray().map(Rt=>+Rt.toFixed(5)),spin:+bt.angularVelocity.length().toFixed(4)}))})}function dt(it){P=0;const pt=performance.now(),{dt:bt,awake:Rt}=g.advance(it);if(B=performance.now()-pt,L){const Jt=Math.min(1,(it-L.start)/850),ht=1-Math.pow(1-Jt,3);e.position.lerpVectors(L.from,L.position,ht),J.target.lerpVectors(L.targetFrom,L.target,ht),Jt===1&&(L=null)}const Yt=x.update(bt,!I&&!F),z=D||x.locked?!1:J.update();if(p.drag){const Jt=p.drag.body;W[Jt.name].peakLift=Math.max(W[Jt.name].peakLift,Jt.position.y-I.startY),W[Jt.name].peakSpin=Math.max(W[Jt.name].peakSpin,Jt.angularVelocity.length());const ht=Jt.mesh.getWorldQuaternion(new vn).toArray(),be=W[Jt.name],zt=Math.min(1,Math.abs(ht.reduce((Ht,U,T)=>Ht+U*be.pose[T],0)));be.peakRenderPoseChange=Math.max(be.peakRenderPoseChange,2*Math.acos(zt))}if(rt){const Jt=p.bodies.find(Ht=>Ht.name===rt),ht=W[rt],be=Jt.quaternion.toArray(),zt=Math.min(1,Math.abs(be.reduce((Ht,U,T)=>Ht+U*ht.pose[T],0)));p.drag?.body===Jt?ht.peakPoseChange=Math.max(ht.peakPoseChange,2*Math.acos(zt)):(ht.releasedPeakSpin=Math.max(ht.releasedPeakSpin,Jt.angularVelocity.length()),ht.releasePosition&&(ht.releaseTravel=Math.max(ht.releaseTravel,Math.hypot(Jt.position.x-ht.releasePosition[0],Jt.position.z-ht.releasePosition[2]))))}d.backWall.visible=!0,d.leftWall.visible=!0;const Kt=performance.now();c.renderScene(t),x.render(je),Y=performance.now()-Kt,A++,bt<.05&&(q++,O+=bt*1e3,O>500&&(H=Math.round(q*1e3/O),q=0,O=0));const oe=v||Rt||z||L||D||F||Yt;(A%15===0||!oe)&&Pt(!oe),oe?nt():!r&&!document.hidden&&setTimeout(nt,50)}function Ot(it){const pt=ue.getBoundingClientRect();M.set((it.clientX-pt.left)/pt.width*2-1,-(it.clientY-pt.top)/pt.height*2+1),b.setFromCamera(M,e)}function Lt(it){Ot(it);const pt=CM(b,y,e,it.clientX,it.clientY,ue.getBoundingClientRect(),it.pointerType==="touch"?18:10);if(pt)return pt;const bt=b.intersectObjects(E.map(Rt=>Rt.mesh),!0);for(const Rt of bt){let Yt=Rt.object;for(;Yt&&!Yt.userData.item;)Yt=Yt.parent;if(Yt)return{item:Yt.userData.item,point:Rt.point,faceIndex:Rt.faceIndex}}return null}function Ct(it){Ot(it),I.projection.project(b.ray,S)&&(I.item.section==="rug"?f.move(S):p.moveDrag(S),W[p.drag?.body.name]&&W[p.drag.body.name].pointerMoves++),nt()}ue.addEventListener("pointerdown",it=>{if(!o||x.locked||it.button!==0||I)return;const pt=Lt(it);if(L=null,!(!pt||!pt.point.toArray().every(Number.isFinite))){if(it.preventDefault(),it.stopImmediatePropagation(),X=vh(J,e,ue),F=!1,I={...pt,id:it.pointerId,x:it.clientX,y:it.clientY,moved:!1,startY:pt.item.body?.position.y},pt.item.section==="letter"){ue.setPointerCapture(it.pointerId);return}(pt.item.body||pt.item.section==="rug")&&Vt(it)}},!0);function Vt(it){if(!I||!I.item.body&&I.item.section!=="rug"||I.item.section==="letter"&&!x.canDrag)return;if(J.enabled=!1,I.projection=RM(e,I.point),I.item.section==="rug"){f.start(I.point,I.faceIndex),D=!0,ue.style.cursor="grabbing",ue.setPointerCapture(it.pointerId),Ct(it);return}if(!p.startDrag(I.item.body,I.point)){Wt(!0);return}D=!0,ue.style.cursor="grabbing",ue.setPointerCapture(it.pointerId);const pt=I.item.body,bt=pt.name;W[bt]={count:(W[bt]?.count??0)+1,peakLift:0,peakSpin:0,peakRenderPoseChange:0,pointerMoves:0,releasedPeakSpin:0,pose:pt.quaternion.toArray(),peakPoseChange:0},rt=bt,Ct(it)}ue.addEventListener("pointermove",it=>{if(I&&it.pointerId===I.id){Math.hypot(it.clientX-I.x,it.clientY-I.y)>6&&(I.moved=!0),I.moved&&!D&&I.item.section==="letter"&&Vt(it),D&&(it.preventDefault(),it.stopImmediatePropagation(),Ct(it));return}if(it.pointerType==="touch"||F)return;const pt=Lt(it);ue.style.cursor=["lamp","letter"].includes(pt?.item.section)?"pointer":"grab"},!0);function Wt(it=!1){const pt=I?.id,bt=p.drag?.body;I=null,D=!1,p.endDrag({cancel:it}),f.release(it),bt&&W[bt.name]&&Object.assign(W[bt.name],{releaseSpeed:bt.velocity.length(),releasePosition:bt.position.toArray(),releaseTravel:0,cancelled:it}),X?.(),X=null,ue.style.cursor="grab",pt!==void 0&&ue.hasPointerCapture(pt)&&ue.releasePointerCapture(pt),nt()}ue.addEventListener("pointerup",it=>{if(!I||it.pointerId!==I.id)return;const pt=I.item,bt=!I.moved;it.preventDefault(),it.stopImmediatePropagation(),Wt(bt&&pt.section==="letter"),bt&&pt.section==="lamp"&&ye(),bt&&pt.section==="letter"&&x.open()},!0),ue.addEventListener("pointercancel",()=>Wt(!0),!0),ue.addEventListener("lostpointercapture",()=>{I&&Wt(!0)}),document.addEventListener("visibilitychange",()=>{document.hidden?(Wt(!0),P&&cancelAnimationFrame(P),P=0,g.pause()):nt()}),window.addEventListener("blur",()=>{I&&Wt(!0)}),ue.addEventListener("webglcontextlost",it=>{it.preventDefault(),ii("fallback").hidden=!1}),ue.addEventListener("webglcontextrestored",()=>location.reload());function ye(){N=!N,l.setPower(N?1:0),nt()}function ie(){Wt(!0),p.reset(),f.reset(),nt()}window.addEventListener("keydown",it=>{if(!o||x.locked)return;if(it.target===ue&&it.key==="Enter"){it.preventDefault(),x.open();return}if(it.key==="Escape"&&Wt(!0),D||(it.target===ue&&it.key==="1"&&at("room"),it.target===ue&&it.key==="2"&&at("desk"),it.key.toLowerCase()==="r"&&!it.metaKey&&!it.ctrlKey&&ie(),it.key.toLowerCase()==="l"&&!it.metaKey&&!it.ctrlKey&&ye(),it.target!==ue))return;const pt=e.position.clone().sub(J.target),bt=new Wa().setFromVector3(pt);if(it.key==="ArrowLeft")bt.theta-=.14;else if(it.key==="ArrowRight")bt.theta+=.14;else if(it.key==="ArrowUp")bt.phi-=.1;else if(it.key==="ArrowDown")bt.phi+=.1;else if(it.key==="+"||it.key==="=")bt.radius*=.9;else if(it.key==="-")bt.radius*=1.1;else return;it.preventDefault(),L=null,bt.phi=He.clamp(bt.phi,J.minPolarAngle,J.maxPolarAngle),bt.radius=He.clamp(bt.radius,J.minDistance,J.maxDistance),e.position.copy(J.target).add(new k().setFromSpherical(bt)),J.update(),nt()}),J.enabled=!1,await c.reveal(t,it=>{const pt=g.advance(it);return Pt(!1),pt}),J.enabled=!0,o=!0,ue.style.pointerEvents="",ii("room").setAttribute("aria-busy","false"),x.arm(),nt()}
