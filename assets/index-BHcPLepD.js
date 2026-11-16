(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const el="187",cs={ROTATE:0,DOLLY:1,PAN:2},rs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ku=0,Hl=1,$u=2,Hs=1,Ju=2,ks=3,bi=0,tn=1,je=2,hs=0,Vs=1,Vl=2,Wl=3,ql=4,Qu=5,ss=100,ju=101,td=102,ed=103,nd=104,id=200,sd=201,rd=202,od=203,Ch=204,Ph=205,ad=206,ld=207,cd=208,hd=209,ud=210,dd=211,fd=212,pd=213,md=214,aa=0,la=1,ca=2,Zs=3,ha=4,ua=5,da=6,fa=7,Lh=0,gd=1,_d=2,ri=0,Ih=1,Nh=2,Dh=3,nl=4,Uh=5,Fh=6,Oh=7,Bh=300,ms=301,Ks=302,_o=303,vo=304,gs=1e3,ii=1001,pa=1002,qe=1003,vd=1004,hr=1005,hn=1006,xo=1007,xi=1008,fn=1009,zh=1010,kh=1011,$s=1012,il=1013,qn=1014,Ln=1015,Sn=1016,sl=1017,rl=1018,_s=1020,Gh=35902,Hh=35899,Vh=1021,Wh=1022,Wn=1023,Ei=1026,yi=1027,ol=1028,al=1029,Bi=1030,ll=1031,cl=1033,Vr=33776,Wr=33777,qr=33778,Xr=33779,ma=35840,ga=35841,_a=35842,va=35843,xa=36196,ya=37492,Ma=37496,Sa=37488,ba=37489,Kr=37490,Ea=37491,wa=37808,Ta=37809,Aa=37810,Ra=37811,Ca=37812,Pa=37813,La=37814,Ia=37815,Na=37816,Da=37817,Ua=37818,Fa=37819,Oa=37820,Ba=37821,za=36492,ka=36494,Ga=36495,Ha=36283,Va=36284,$r=36285,Wa=36286,xd=3200,qa=0,yd=1,ni="",He="srgb",Jr="srgb-linear",Qr="linear",ve="srgb",yo=7680,Md=519,Sd=512,bd=513,Ed=514,qh=515,wd=516,Td=517,Xh=518,Yh=519,Ad=35044,jr=35048,Xl="300 es",In=2e3,Js=2001;function Rd(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Qs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Cd(){const r=Qs("canvas");return r.style.display="block",r}const Yl={};function Zl(...r){const t="THREE."+r.shift();console.log(t,...r)}function Zh(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Wt(...r){r=Zh(r);const t="THREE."+r.shift();{const e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function ce(...r){r=Zh(r);const t="THREE."+r.shift();{const e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function Yr(...r){const t=r.join(" ");t in Yl||(Yl[t]=!0,Wt(...r))}function Pd(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const Ld={[aa]:aa,[ca]:da,[ha]:ha,[Zs]:ua,[la]:la,[da]:ca,[fa]:fa,[ua]:Zs};class Ti{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const $e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Kl=1234567;const Ws=Math.PI/180,js=180/Math.PI;function ys(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($e[r&255]+$e[r>>8&255]+$e[r>>16&255]+$e[r>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[e&63|128]+$e[e>>8&255]+"-"+$e[e>>16&255]+$e[e>>24&255]+$e[n&255]+$e[n>>8&255]+$e[n>>16&255]+$e[n>>24&255]).toLowerCase()}function ee(r,t,e){return Math.max(t,Math.min(e,r))}function hl(r,t){return(r%t+t)%t}function Id(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Nd(r,t,e){return r!==t?(e-r)/(t-r):0}function qs(r,t,e){return(1-e)*r+e*t}function Dd(r,t,e,n){return qs(r,t,1-Math.exp(-e*n))}function Ud(r,t=1){return t-Math.abs(hl(r,t*2)-t)}function Fd(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Od(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Bd(r,t){return r+Math.floor(Math.random()*(t-r+1))}function zd(r,t){return r+Math.random()*(t-r)}function kd(r){return r*(.5-Math.random())}function Gd(r){r!==void 0&&(Kl=r);let t=Kl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Hd(r){return r*Ws}function Vd(r){return r*js}function Wd(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function qd(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Kh(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Xd(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),u=o((t+n)/2),d=s((t-n)/2),h=o((t-n)/2),f=s((n-t)/2),p=o((n-t)/2);switch(i){case"XYX":r.set(a*u,l*d,l*h,a*c);break;case"YZY":r.set(l*h,a*u,l*d,a*c);break;case"ZXZ":r.set(l*d,l*h,a*u,a*c);break;case"XZX":r.set(a*u,l*p,l*f,a*c);break;case"YXY":r.set(l*f,a*u,l*p,a*c);break;case"ZYZ":r.set(l*p,l*f,a*u,a*c);break;default:Wt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ul(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function $h(r,t){if(t.constructor===Float32Array)return r;const e=ul(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/e,-1)}function Jh(r,t){if(t.constructor===Float32Array)return r;const e=ul(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*e)}const Ee={DEG2RAD:Ws,RAD2DEG:js,generateUUID:ys,clamp:ee,euclideanModulo:hl,mapLinear:Id,inverseLerp:Nd,lerp:qs,damp:Dd,pingpong:Ud,smoothstep:Fd,smootherstep:Od,randInt:Bd,randFloat:zd,randFloatSpread:kd,seededRandom:Gd,degToRad:Hd,radToDeg:Vd,isPowerOfTwo:Wd,ceilPowerOfTwo:qd,floorPowerOfTwo:Kh,setQuaternionFromProperEuler:Xd,normalize:Jh,denormalize:$h};class At{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}let yn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3],h=s[o+0],f=s[o+1],p=s[o+2],v=s[o+3];if(d!==v||l!==h||c!==f||u!==p){let m=l*h+c*f+u*p+d*v;m<0&&(h=-h,f=-f,p=-p,v=-v,m=-m);let g=1-a;if(m<.9995){const _=Math.acos(m),x=Math.sin(_);g=Math.sin(g*_)/x,a=Math.sin(a*_)/x,l=l*g+h*a,c=c*g+f*a,u=u*g+p*a,d=d*g+v*a}else{l=l*g+h*a,c=c*g+f*a,u=u*g+p*a,d=d*g+v*a;const _=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=_,c*=_,u*=_,d*=_}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[o],h=s[o+1],f=s[o+2],p=s[o+3];return t[e]=a*p+u*d+l*f-c*h,t[e+1]=l*p+u*h+c*d-a*f,t[e+2]=c*p+u*f+a*h-l*d,t[e+3]=u*p-a*d-l*h-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),d=a(s/2),h=l(n/2),f=l(i/2),p=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"YXZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"ZXY":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"ZYX":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"YZX":this._x=h*u*d+c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d-h*f*p;break;case"XZY":this._x=h*u*d-c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d+h*f*p;break;default:Wt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=n+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ee(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class z{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($l.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($l.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),u=2*(a*e-s*i),d=2*(s*n-o*e);return this.x=e+l*c+o*d-a*u,this.y=n+l*u+a*c-s*d,this.z=i+l*d+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Mo.copy(this).projectOnVector(t),this.sub(Mo)}reflect(t){return this.sub(Mo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mo=new z,$l=new yn;class Zt{static{this.prototype.isMatrix3=!0}constructor(t,e,n,i,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],p=n[8],v=i[0],m=i[3],g=i[6],_=i[1],x=i[4],M=i[7],E=i[2],b=i[5],y=i[8];return s[0]=o*v+a*_+l*E,s[3]=o*m+a*x+l*b,s[6]=o*g+a*M+l*y,s[1]=c*v+u*_+d*E,s[4]=c*m+u*x+d*b,s[7]=c*g+u*M+d*y,s[2]=h*v+f*_+p*E,s[5]=h*m+f*x+p*b,s[8]=h*g+f*M+p*y,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=u*o-a*c,h=a*l-u*s,f=c*s-o*l,p=e*d+n*h+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return t[0]=d*v,t[1]=(i*c-u*n)*v,t[2]=(a*n-i*o)*v,t[3]=h*v,t[4]=(u*e-i*l)*v,t[5]=(i*s-a*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Yr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(So.makeScale(t,e)),this}rotate(t){return Yr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(So.makeRotation(-t)),this}translate(t,e){return Yr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(So.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const So=new Zt,Jl=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ql=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yd(){const r={enabled:!0,workingColorSpace:Jr,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ve&&(i.r=oi(i.r),i.g=oi(i.g),i.b=oi(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ve&&(i.r=us(i.r),i.g=us(i.g),i.b=us(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ni?Qr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Jr]:{primaries:t,whitePoint:n,transfer:Qr,toXYZ:Jl,fromXYZ:Ql,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:He},outputColorSpaceConfig:{drawingBufferColorSpace:He}},[He]:{primaries:t,whitePoint:n,transfer:ve,toXYZ:Jl,fromXYZ:Ql,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:He}}}),r}const oe=Yd();function oi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function us(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Gi;class Zd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Gi===void 0&&(Gi=Qs("canvas")),Gi.width=t.width,Gi.height=t.height;const i=Gi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Gi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Qs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=oi(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(oi(e[n]/255)*255):e[n]=oi(e[n]);return{data:e,width:t.width,height:t.height}}else return Wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Kd=0;class dl{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=ys(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(bo(i[o].image)):s.push(bo(i[o]))}else s=bo(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function bo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Zd.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Wt("Texture: Unable to serialize Texture."),{})}let $d=0;const Eo=new z;class Ye extends Ti{constructor(t=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,n=ii,i=ii,s=hn,o=xi,a=Wn,l=fn,c=Ye.DEFAULT_ANISOTROPY,u=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=ys(),this.name="",this.source=new dl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Eo).x}get height(){return this.source.getSize(Eo).y}get depth(){return this.source.getSize(Eo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Wt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Wt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gs:t.x=t.x-Math.floor(t.x);break;case ii:t.x=t.x<0?0:1;break;case pa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gs:t.y=t.y-Math.floor(t.y);break;case ii:t.y=t.y<0?0:1;break;case pa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=Bh;Ye.DEFAULT_ANISOTROPY=1;class Ae{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],p=l[9],v=l[2],m=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,M=(f+1)/2,E=(g+1)/2,b=(u+h)/4,y=(d+v)/4,S=(p+m)/4;return x>M&&x>E?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=b/n,s=y/n):M>E?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=b/i,s=S/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=y/s,i=S/s),this.set(n,i,s,e),this}let _=Math.sqrt((m-p)*(m-p)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(m-p)/_,this.y=(d-v)/_,this.z=(h-u)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this.w=ee(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this.w=ee(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Jd extends Ti{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e),this.textures=[];const i=n.count;for(let s=0;s<i;s++)this.textures[s]=new Ye({width:t,height:e,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new dl(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mn extends Jd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Qh extends Ye{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=qe,this.minFilter=qe,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qd extends Ye{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=qe,this.minFilter=qe,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}class me{static{this.prototype.isMatrix4=!0}constructor(t,e,n,i,s,o,a,l,c,u,d,h,f,p,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,u,d,h,f,p,v,m)}set(t,e,n,i,s,o,a,l,c,u,d,h,f,p,v,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=h,g[3]=f,g[7]=p,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,i=1/Hi.setFromMatrixColumn(t,0).length(),s=1/Hi.setFromMatrixColumn(t,1).length(),o=1/Hi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const h=o*u,f=o*d,p=a*u,v=a*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=h-v*c,e[9]=-a*l,e[2]=v-h*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){const h=l*u,f=l*d,p=c*u,v=c*d;e[0]=h+v*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=f*a-p,e[6]=v+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*u,f=l*d,p=c*u,v=c*d;e[0]=h-v*a,e[4]=-o*d,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*u,e[9]=v-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*u,f=o*d,p=a*u,v=a*d;e[0]=l*u,e[4]=p*c-f,e[8]=h*c+v,e[1]=l*d,e[5]=v*c+h,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,f=o*c,p=a*l,v=a*c;e[0]=l*u,e[4]=v-h*d,e[8]=p*d+f,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=f*d+p,e[10]=h-v*d}else if(t.order==="XZY"){const h=o*l,f=o*c,p=a*l,v=a*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+v,e[5]=o*u,e[9]=f*d-p,e[2]=p*d-f,e[6]=a*u,e[10]=v*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jd,t,tf)}lookAt(t,e,n){const i=this.elements;return un.subVectors(t,e),un.lengthSq()===0&&(un.z=1),un.normalize(),fi.crossVectors(n,un),fi.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),fi.crossVectors(n,un)),fi.normalize(),ur.crossVectors(un,fi),i[0]=fi.x,i[4]=ur.x,i[8]=un.x,i[1]=fi.y,i[5]=ur.y,i[9]=un.y,i[2]=fi.z,i[6]=ur.z,i[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],p=n[2],v=n[6],m=n[10],g=n[14],_=n[3],x=n[7],M=n[11],E=n[15],b=i[0],y=i[4],S=i[8],P=i[12],A=i[1],I=i[5],N=i[9],L=i[13],w=i[2],D=i[6],F=i[10],k=i[14],Y=i[3],W=i[7],O=i[11],H=i[15];return s[0]=o*b+a*A+l*w+c*Y,s[4]=o*y+a*I+l*D+c*W,s[8]=o*S+a*N+l*F+c*O,s[12]=o*P+a*L+l*k+c*H,s[1]=u*b+d*A+h*w+f*Y,s[5]=u*y+d*I+h*D+f*W,s[9]=u*S+d*N+h*F+f*O,s[13]=u*P+d*L+h*k+f*H,s[2]=p*b+v*A+m*w+g*Y,s[6]=p*y+v*I+m*D+g*W,s[10]=p*S+v*N+m*F+g*O,s[14]=p*P+v*L+m*k+g*H,s[3]=_*b+x*A+M*w+E*Y,s[7]=_*y+x*I+M*D+E*W,s[11]=_*S+x*N+M*F+E*O,s[15]=_*P+x*L+M*k+E*H,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],f=t[14],p=t[3],v=t[7],m=t[11],g=t[15],_=l*f-c*h,x=a*f-c*d,M=a*h-l*d,E=o*f-c*u,b=o*h-l*u,y=o*d-a*u;return e*(v*_-m*x+g*M)-n*(p*_-m*E+g*b)+i*(p*x-v*E+g*y)-s*(p*M-v*b+m*y)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return e*(o*u-a*c)-n*(s*u-a*l)+i*(s*c-o*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],f=t[11],p=t[12],v=t[13],m=t[14],g=t[15],_=e*a-n*o,x=e*l-i*o,M=e*c-s*o,E=n*l-i*a,b=n*c-s*a,y=i*c-s*l,S=u*v-d*p,P=u*m-h*p,A=u*g-f*p,I=d*m-h*v,N=d*g-f*v,L=h*g-f*m,w=_*L-x*N+M*I+E*A-b*P+y*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/w;return t[0]=(a*L-l*N+c*I)*D,t[1]=(i*N-n*L-s*I)*D,t[2]=(v*y-m*b+g*E)*D,t[3]=(h*b-d*y-f*E)*D,t[4]=(l*A-o*L-c*P)*D,t[5]=(e*L-i*A+s*P)*D,t[6]=(m*M-p*y-g*x)*D,t[7]=(u*y-h*M+f*x)*D,t[8]=(o*N-a*A+c*S)*D,t[9]=(n*A-e*N-s*S)*D,t[10]=(p*b-v*M+g*_)*D,t[11]=(d*M-u*b-f*_)*D,t[12]=(a*P-o*I-l*S)*D,t[13]=(e*I-n*P+i*S)*D,t[14]=(v*x-p*E-m*_)*D,t[15]=(u*E-d*x+h*_)*D,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,d=a+a,h=s*c,f=s*u,p=s*d,v=o*u,m=o*d,g=a*d,_=l*c,x=l*u,M=l*d,E=n.x,b=n.y,y=n.z;return i[0]=(1-(v+g))*E,i[1]=(f+M)*E,i[2]=(p-x)*E,i[3]=0,i[4]=(f-M)*b,i[5]=(1-(h+g))*b,i[6]=(m+_)*b,i[7]=0,i[8]=(p+x)*y,i[9]=(m-_)*y,i[10]=(1-(h+v))*y,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=Hi.set(i[0],i[1],i[2]).length();const a=Hi.set(i[4],i[5],i[6]).length(),l=Hi.set(i[8],i[9],i[10]).length();s<0&&(o=-o),En.copy(this);const c=1/o,u=1/a,d=1/l;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=u,En.elements[5]*=u,En.elements[6]*=u,En.elements[8]*=d,En.elements[9]*=d,En.elements[10]*=d,e.setFromRotationMatrix(En),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,s,o,a=In,l=!1){const c=this.elements,u=2*s/(e-t),d=2*s/(n-i),h=(e+t)/(e-t),f=(n+i)/(n-i);let p,v;if(l)p=s/(o-s),v=o*s/(o-s);else if(a===In)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Js)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=In,l=!1){const c=this.elements,u=2/(e-t),d=2/(n-i),h=-(e+t)/(e-t),f=-(n+i)/(n-i);let p,v;if(l)p=1/(o-s),v=o/(o-s);else if(a===In)p=-2/(o-s),v=-(o+s)/(o-s);else if(a===Js)p=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Hi=new z,En=new me,jd=new z(0,0,0),tf=new z(1,1,1),fi=new z,ur=new z,un=new z,jl=new me,tc=new yn;class Dn{constructor(t=0,e=0,n=0,i=Dn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ee(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ee(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ee(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return jl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(jl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return tc.setFromEuler(this),this.setFromQuaternion(tc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dn.DEFAULT_ORDER="XYZ";class fl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ef=0;const ec=new z,Vi=new yn,Yn=new me,dr=new z,ws=new z,nf=new z,sf=new yn,nc=new z(1,0,0),ic=new z(0,1,0),sc=new z(0,0,1),rc={type:"added"},rf={type:"removed"},Wi={type:"childadded",child:null},wo={type:"childremoved",child:null};class Ne extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DEFAULT_UP.clone();const t=new z,e=new Dn,n=new yn,i=new z(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new me},normalMatrix:{value:new Zt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=Ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.premultiply(Vi),this}rotateX(t){return this.rotateOnAxis(nc,t)}rotateY(t){return this.rotateOnAxis(ic,t)}rotateZ(t){return this.rotateOnAxis(sc,t)}translateOnAxis(t,e){return ec.copy(t).applyQuaternion(this.quaternion),this.position.add(ec.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nc,t)}translateY(t){return this.translateOnAxis(ic,t)}translateZ(t){return this.translateOnAxis(sc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?dr.copy(t):dr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(ws,dr,this.up):Yn.lookAt(dr,ws,this.up),this.quaternion.setFromRotationMatrix(Yn),i&&(Yn.extractRotation(i.matrixWorld),Vi.setFromRotationMatrix(Yn),this.quaternion.premultiply(Vi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ce("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(rc),Wi.child=t,this.dispatchEvent(Wi),Wi.child=null):ce("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(rf),wo.child=t,this.dispatchEvent(wo),wo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(rc),Wi.child=t,this.dispatchEvent(Wi),Wi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,t,nf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,sf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,i=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),d=o(t.shapes),h=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ne.DEFAULT_UP=new z(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class xn extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const of={type:"move"};class To{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),g=this._getHandJoint(c,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&h>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(of)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new xn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const jh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},fr={h:0,s:0,l:0};function Ao(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=He){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=oe.workingColorSpace){if(t=hl(t,1),e=ee(e,0,1),n=ee(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Ao(o,s,t+1/3),this.g=Ao(o,s,t),this.b=Ao(o,s,t-1/3)}return oe.colorSpaceToWorking(this,i),this}setStyle(t,e=He){function n(s){s!==void 0&&parseFloat(s)<1&&Wt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,e);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Wt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Wt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=He){const n=jh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Wt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=oi(t.r),this.g=oi(t.g),this.b=oi(t.b),this}copyLinearToSRGB(t){return this.r=us(t.r),this.g=us(t.g),this.b=us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=He){return oe.workingToColorSpace(Je.copy(this),t),Math.round(ee(Je.r*255,0,255))*65536+Math.round(ee(Je.g*255,0,255))*256+Math.round(ee(Je.b*255,0,255))}getHexString(t=He){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.workingToColorSpace(Je.copy(this),e);const n=Je.r,i=Je.g,s=Je.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=oe.workingColorSpace){return oe.workingToColorSpace(Je.copy(this),e),t.r=Je.r,t.g=Je.g,t.b=Je.b,t}getStyle(t=He){oe.workingToColorSpace(Je.copy(this),t);const e=Je.r,n=Je.g,i=Je.b;return t!==He?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(pi),this.setHSL(pi.h+t,pi.s+e,pi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(pi),t.getHSL(fr);const n=qs(pi.h,fr.h,e),i=qs(pi.s,fr.s,e),s=qs(pi.l,fr.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Je=new qt;qt.NAMES=jh;class pl{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new qt(t),this.density=e}clone(){return new pl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class to extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const wn=new z,Zn=new z,Ro=new z,Kn=new z,qi=new z,Xi=new z,oc=new z,Co=new z,Po=new z,Lo=new z,Io=new Ae,No=new Ae,Do=new Ae;class Pn{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),wn.subVectors(t,e),i.cross(wn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){wn.subVectors(i,e),Zn.subVectors(n,e),Ro.subVectors(t,e);const o=wn.dot(wn),a=wn.dot(Zn),l=wn.dot(Ro),c=Zn.dot(Zn),u=Zn.dot(Ro),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(c*l-a*u)*h,p=(o*u-a*l)*h;return s.set(1-f-p,p,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Kn.x),l.addScaledVector(o,Kn.y),l.addScaledVector(a,Kn.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return Io.setScalar(0),No.setScalar(0),Do.setScalar(0),Io.fromBufferAttribute(t,e),No.fromBufferAttribute(t,n),Do.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Io,s.x),o.addScaledVector(No,s.y),o.addScaledVector(Do,s.z),o}static isFrontFacing(t,e,n,i){return wn.subVectors(n,e),Zn.subVectors(t,e),wn.cross(Zn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),wn.cross(Zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Pn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return Pn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;qi.subVectors(i,n),Xi.subVectors(s,n),Co.subVectors(t,n);const l=qi.dot(Co),c=Xi.dot(Co);if(l<=0&&c<=0)return e.copy(n);Po.subVectors(t,i);const u=qi.dot(Po),d=Xi.dot(Po);if(u>=0&&d<=u)return e.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),e.copy(n).addScaledVector(qi,o);Lo.subVectors(t,s);const f=qi.dot(Lo),p=Xi.dot(Lo);if(p>=0&&f<=p)return e.copy(s);const v=f*c-l*p;if(v<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Xi,a);const m=u*p-f*d;if(m<=0&&d-u>=0&&f-p>=0)return oc.subVectors(s,i),a=(d-u)/(d-u+(f-p)),e.copy(i).addScaledVector(oc,a);const g=1/(m+v+h);return o=v*g,a=h*g,e.copy(n).addScaledVector(qi,o).addScaledVector(Xi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ai{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Tn):Tn.fromBufferAttribute(s,o),Tn.applyMatrix4(t.matrixWorld),this.expandByPoint(Tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pr.copy(n.boundingBox)),pr.applyMatrix4(t.matrixWorld),this.union(pr)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Tn),Tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ts),mr.subVectors(this.max,Ts),Yi.subVectors(t.a,Ts),Zi.subVectors(t.b,Ts),Ki.subVectors(t.c,Ts),mi.subVectors(Zi,Yi),gi.subVectors(Ki,Zi),Li.subVectors(Yi,Ki);let e=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Li.z,Li.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Li.z,0,-Li.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Li.y,Li.x,0];return!Uo(e,Yi,Zi,Ki,mr)||(e=[1,0,0,0,1,0,0,0,1],!Uo(e,Yi,Zi,Ki,mr))?!1:(gr.crossVectors(mi,gi),e=[gr.x,gr.y,gr.z],Uo(e,Yi,Zi,Ki,mr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const $n=[new z,new z,new z,new z,new z,new z,new z,new z],Tn=new z,pr=new Ai,Yi=new z,Zi=new z,Ki=new z,mi=new z,gi=new z,Li=new z,Ts=new z,mr=new z,gr=new z,Ii=new z;function Uo(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Ii.fromArray(r,s);const a=i.x*Math.abs(Ii.x)+i.y*Math.abs(Ii.y)+i.z*Math.abs(Ii.z),l=t.dot(Ii),c=e.dot(Ii),u=n.dot(Ii);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ce=new z,_r=new At;let af=0;class Xe extends Ti{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:af++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ad,this.updateRanges=[],this.gpuType=Ln,this.version=0,this._normalizationScale=t!==void 0?ul(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)_r.fromBufferAttribute(this,e),_r.applyMatrix3(t),this.setXY(e,_r.x,_r.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):$h(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):Jh(t,this.array)}}class tu extends Xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class eu extends Xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ae extends Xe{constructor(t,e,n){super(new Float32Array(t),e,n)}}const lf=new Ai,As=new z,Fo=new z;let Ms=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):lf.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;As.subVectors(t,this.center);const e=As.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(As,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(As.copy(t.center).add(Fo)),this.expandByPoint(As.copy(t.center).sub(Fo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},cf=0;const mn=new me,Oo=new Ne,$i=new z,dn=new Ai,Rs=new Ai,Ge=new z;class De extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=ys(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Rd(t)?eu:tu)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Zt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return mn.makeRotationFromQuaternion(t),this.applyMatrix4(mn),this}rotateX(t){return mn.makeRotationX(t),this.applyMatrix4(mn),this}rotateY(t){return mn.makeRotationY(t),this.applyMatrix4(mn),this}rotateZ(t){return mn.makeRotationZ(t),this.applyMatrix4(mn),this}translate(t,e,n){return mn.makeTranslation(t,e,n),this.applyMatrix4(mn),this}scale(t,e,n){return mn.makeScale(t,e,n),this.applyMatrix4(mn),this}lookAt(t){return Oo.lookAt(t),Oo.updateMatrix(),this.applyMatrix4(Oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ae(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&Wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ai);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ms);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){const n=this.boundingSphere.center;if(dn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Rs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ge.addVectors(dn.min,Rs.min),dn.expandByPoint(Ge),Ge.addVectors(dn.max,Rs.max),dn.expandByPoint(Ge)):(dn.expandByPoint(Rs.min),dn.expandByPoint(Rs.max))}dn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Ge.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ge));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ge.fromBufferAttribute(a,c),l&&($i.fromBufferAttribute(t,c),Ge.add($i)),i=Math.max(i,n.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Xe(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[],c=new Uint8Array(n.count);for(let P=0;P<n.count;P++)a[P]=new z,l[P]=new z;const u=new z,d=new z,h=new z,f=new At,p=new At,v=new At,m=new z,g=new z;function _(P,A,I){c[P]=c[A]=c[I]=1,u.fromBufferAttribute(n,P),d.fromBufferAttribute(n,A),h.fromBufferAttribute(n,I),f.fromBufferAttribute(s,P),p.fromBufferAttribute(s,A),v.fromBufferAttribute(s,I),d.sub(u),h.sub(u),p.sub(f),v.sub(f);const N=1/(p.x*v.y-v.x*p.y);isFinite(N)&&(m.copy(d).multiplyScalar(v.y).addScaledVector(h,-p.y).multiplyScalar(N),g.copy(h).multiplyScalar(p.x).addScaledVector(d,-v.x).multiplyScalar(N),a[P].add(m),a[A].add(m),a[I].add(m),l[P].add(g),l[A].add(g),l[I].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let P=0,A=x.length;P<A;++P){const I=x[P],N=I.start,L=I.count;for(let w=N,D=N+L;w<D;w+=3)_(t.getX(w+0),t.getX(w+1),t.getX(w+2))}const M=new z,E=new z,b=new z,y=new z;function S(P){b.fromBufferAttribute(i,P),y.copy(b);const A=a[P];M.copy(A),M.sub(b.multiplyScalar(b.dot(A))).normalize(),E.crossVectors(y,A);const N=E.dot(l[P])<0?-1:1;o.setXYZW(P,M.x,M.y,M.z,N)}for(let P=0,A=n.count;P<A;++P)c[P]&&S(P);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const i=new z,s=new z,o=new z,a=new z,l=new z,c=new z,u=new z,d=new z;if(t)for(let h=0,f=t.count;h<f;h+=3){const p=t.getX(h+0),v=t.getX(h+1),m=t.getX(h+2);i.fromBufferAttribute(e,p),s.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=e.count;h<f;h+=3)i.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let f=0,p=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*u;for(let g=0;g<u;g++)h[p++]=c[f++]}return new Xe(h,u,d)}if(this.index===null)return Wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new De,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=t(h,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bo=new z,hf=new z,uf=new Zt;class Rn{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Bo.subVectors(n,e).cross(hf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const i=t.delta(Bo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||uf.getNormalMatrix(t),i=this.coplanarPoint(Bo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let df=0,Ss=class extends Ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=ys(),this.name="",this.type="Material",this.blending=Vs,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ch,this.blendDst=Ph,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Md,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yo,this.stencilZFail=yo,this.stencilZPass=yo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Wt(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Wt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Rn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new At().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new At().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};const Jn=new z,zo=new z,vr=new z,xr=new z;let ao=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Jn.copy(this.origin).addScaledVector(this.direction,e),Jn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){zo.copy(t).add(e).multiplyScalar(.5),vr.copy(e).sub(t).normalize(),xr.copy(this.origin).sub(zo);const s=t.distanceTo(e)*.5,o=-this.direction.dot(vr),a=xr.dot(this.direction),l=-xr.dot(vr),c=xr.lengthSq(),u=Math.abs(1-o*o);let d,h,f,p;if(u>0)if(d=o*l-a,h=o*a-l,p=s*u,d>=0)if(h>=-p)if(h<=p){const v=1/u;d*=v,h*=v,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-p?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c):h<=p?(d=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(zo).addScaledVector(vr,h),f}intersectSphere(t,e){if(t.radius<0)return null;Jn.subVectors(t.center,this.origin);const n=Jn.dot(this.direction),i=Jn.dot(Jn)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,i=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,i=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Jn)!==null}intersectTriangle(t,e,n,i,s){const o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,d=t.x-o.x,h=t.y-o.y,f=t.z-o.z,p=e.x-o.x,v=e.y-o.y,m=e.z-o.z,g=n.x-o.x,_=n.y-o.y,x=n.z-o.z,M=Math.abs(l),E=Math.abs(c),b=Math.abs(u);let y,S,P,A,I,N,L,w,D,F,k,Y;if(M>=E&&M>=b?(P=l,N=d,D=p,Y=g,l>=0?(y=c,S=u,A=h,I=f,L=v,w=m,F=_,k=x):(y=u,S=c,A=f,I=h,L=m,w=v,F=x,k=_)):E>=b?(P=c,N=h,D=v,Y=_,c>=0?(y=u,S=l,A=f,I=d,L=m,w=p,F=x,k=g):(y=l,S=u,A=d,I=f,L=p,w=m,F=g,k=x)):(P=u,N=f,D=m,Y=x,u>=0?(y=l,S=c,A=d,I=h,L=p,w=v,F=g,k=_):(y=c,S=l,A=h,I=d,L=v,w=p,F=_,k=g)),P===0)return null;const W=y/P,O=S/P,H=1/P,X=A-W*N,ot=I-O*N,q=L-W*D,Q=w-O*D,lt=F-W*Y,et=k-O*Y,st=lt*Q-et*q,bt=X*et-ot*lt,Pt=q*ot-Q*X;if(i){if(st<0||bt<0||Pt<0)return null}else if((st<0||bt<0||Pt<0)&&(st>0||bt>0||Pt>0))return null;const ft=st+bt+Pt;if(ft===0)return null;const Bt=H*(st*N+bt*D+Pt*Y);return(ft>0?Bt<0:Bt>0)?null:this.at(Bt/ft,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class on extends Ss{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=Lh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ac=new me,Ni=new ao,yr=new Ms,lc=new z,Mr=new z,Sr=new z,br=new z,ko=new z,Er=new z,cc=new z,wr=new z;class pe extends Ne{constructor(t=new De,e=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){Er.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(ko.fromBufferAttribute(d,t),o?Er.addScaledVector(ko,u):Er.addScaledVector(ko.sub(e),u))}e.add(Er)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere),yr.applyMatrix4(s),Ni.copy(t.ray).recast(t.near),!(yr.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(yr,lc)===null||Ni.origin.distanceToSquared(lc)>(t.far-t.near)**2))&&(ac.copy(s).invert(),Ni.copy(t.ray).applyMatrix4(ac),!(n.boundingBox!==null&&Ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ni)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,v=h.length;p<v;p++){const m=h[p],g=o[m.materialIndex],_=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=_,E=x;M<E;M+=3){const b=a.getX(M),y=a.getX(M+1),S=a.getX(M+2);i=Tr(this,g,t,n,c,u,d,b,y,S),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const p=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=p,g=v;m<g;m+=3){const _=a.getX(m),x=a.getX(m+1),M=a.getX(m+2);i=Tr(this,o,t,n,c,u,d,_,x,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,v=h.length;p<v;p++){const m=h[p],g=o[m.materialIndex],_=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=_,E=x;M<E;M+=3){const b=M,y=M+1,S=M+2;i=Tr(this,g,t,n,c,u,d,b,y,S),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const p=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=p,g=v;m<g;m+=3){const _=m,x=m+1,M=m+2;i=Tr(this,o,t,n,c,u,d,_,x,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function ff(r,t,e,n,i,s,o,a){let l;if(t.side===tn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===bi,a),l===null)return null;wr.copy(a),wr.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(wr);return c<e.near||c>e.far?null:{distance:c,point:wr.clone(),object:r}}function Tr(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,Mr),r.getVertexPosition(l,Sr),r.getVertexPosition(c,br);const u=ff(r,t,e,n,Mr,Sr,br,cc);if(u){const d=new z;Pn.getBarycoord(cc,Mr,Sr,br,d),i&&(u.uv=Pn.getInterpolatedAttribute(i,a,l,c,d,new At)),s&&(u.uv1=Pn.getInterpolatedAttribute(s,a,l,c,d,new At)),o&&(u.normal=Pn.getInterpolatedAttribute(o,a,l,c,d,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new z,materialIndex:0};Pn.getNormal(Mr,Sr,br,h.normal),u.face=h,u.barycoord=d}return u}class nu extends Ye{constructor(t=null,e=1,n=1,i,s,o,a,l,c=qe,u=qe,d,h){super(null,o,a,l,c,u,i,s,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hc extends Xe{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ji=new me,uc=new me,Ar=[],dc=new Ai,pf=new me,Cs=new pe,Ps=new Ms;class ds extends pe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new hc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,pf)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ai),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ji),dc.copy(t.boundingBox).applyMatrix4(Ji),this.boundingBox.union(dc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ms),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ji),Ps.copy(t.boundingSphere).applyMatrix4(Ji),this.boundingSphere.union(Ps)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Cs.geometry=this.geometry,Cs.material=this.material,Cs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ps.copy(this.boundingSphere),Ps.applyMatrix4(n),t.ray.intersectsSphere(Ps)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ji),uc.multiplyMatrices(n,Ji),Cs.matrixWorld=uc,Cs.raycast(t,Ar);for(let o=0,a=Ar.length;o<a;o++){const l=Ar[o];l.instanceId=s,l.object=this,e.push(l)}Ar.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new hc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new nu(new Float32Array(i*this.count),i,this.count,ol,Ln));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;return s[l]=a,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Di=new Ms,mf=new At(.5,.5),Rr=new z;class tr{constructor(t=new Rn,e=new Rn,n=new Rn,i=new Rn,s=new Rn,o=new Rn){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=In,n=!1){const i=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],d=s[5],h=s[6],f=s[7],p=s[8],v=s[9],m=s[10],g=s[11],_=s[12],x=s[13],M=s[14],E=s[15];if(i[0].setComponents(c-o,f-u,g-p,E-_).normalize(),i[1].setComponents(c+o,f+u,g+p,E+_).normalize(),i[2].setComponents(c+a,f+d,g+v,E+x).normalize(),i[3].setComponents(c-a,f-d,g-v,E-x).normalize(),n)i[4].setComponents(l,h,m,M).normalize(),i[5].setComponents(c-l,f-h,g-m,E-M).normalize();else if(i[4].setComponents(c-l,f-h,g-m,E-M).normalize(),e===In)i[5].setComponents(c+l,f+h,g+m,E+M).normalize();else if(e===Js)i[5].setComponents(l,h,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(t){Di.center.set(0,0,0);const e=mf.distanceTo(t.center);return Di.radius=.7071067811865476+e,Di.applyMatrix4(t.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Rr.x=i.normal.x>0?t.max.x:t.min.x,Rr.y=i.normal.y>0?t.max.y:t.min.y,Rr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Rr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const fc=new me;class ml{constructor(){this.coordinateSystem=In,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){const s=e[i];fc.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0&&(n[i]=new tr),n[i].setFromProjectionMatrix(fc,s.coordinateSystem,s.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new tr),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new ml().copy(this)}}class iu extends Ss{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const eo=new z,no=new z,pc=new me,Ls=new ao,Cr=new Ms,Go=new z,mc=new z;class gf extends Ne{constructor(t=new De,e=new iu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)eo.fromBufferAttribute(e,i-1),no.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=eo.distanceTo(no);t.setAttribute("lineDistance",new ae(n,1))}else Wt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(i),Cr.radius+=s,t.ray.intersectsSphere(Cr)===!1)return;pc.copy(i).invert(),Ls.copy(t.ray).applyMatrix4(pc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let v=f,m=p-1;v<m;v+=c){const g=u.getX(v),_=u.getX(v+1),x=Pr(this,t,Ls,l,g,_,v);x&&e.push(x)}if(this.isLineLoop){const v=u.getX(p-1),m=u.getX(f),g=Pr(this,t,Ls,l,v,m,p-1);g&&e.push(g)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let v=f,m=p-1;v<m;v+=c){const g=Pr(this,t,Ls,l,v,v+1,v);g&&e.push(g)}if(this.isLineLoop){const v=Pr(this,t,Ls,l,p-1,f,p-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Pr(r,t,e,n,i,s,o){const a=r.geometry.attributes.position;if(eo.fromBufferAttribute(a,i),no.fromBufferAttribute(a,s),e.distanceSqToSegment(eo,no,Go,mc)>n)return;Go.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Go);if(!(c<t.near||c>t.far))return{distance:c,point:mc.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}class su extends Ye{constructor(t=[],e=ms,n,i,s,o,a,l,c,u){super(t,e,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class lo extends Ye{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vs extends Ye{constructor(t,e,n=qn,i,s,o,a=qe,l=qe,c,u=Ei,d=1){if(u!==Ei&&u!==yi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:d};super(h,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new dl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class ru extends vs{constructor(t,e=qn,n=ms,i,s,o=qe,a=qe,l,c=Ei){const u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,n,i,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class ou extends Ye{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ai extends De{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,f=0;p("z","y","x",-1,-1,n,e,t,o,s,0),p("z","y","x",1,-1,n,e,-t,o,s,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,s,4),p("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(u,3)),this.setAttribute("uv",new ae(d,2));function p(v,m,g,_,x,M,E,b,y,S,P){const A=M/y,I=E/S,N=M/2,L=E/2,w=b/2,D=y+1,F=S+1;let k=0,Y=0;const W=new z;for(let O=0;O<F;O++){const H=O*I-L;for(let X=0;X<D;X++){const ot=X*A-N;W[v]=ot*_,W[m]=H*x,W[g]=w,c.push(W.x,W.y,W.z),W[v]=0,W[m]=0,W[g]=b>0?1:-1,u.push(W.x,W.y,W.z),d.push(X/y),d.push(1-O/S),k+=1}}for(let O=0;O<S;O++)for(let H=0;H<y;H++){const X=h+H+D*O,ot=h+H+D*(O+1),q=h+(H+1)+D*(O+1),Q=h+(H+1)+D*O;l.push(X,ot,Q),l.push(ot,q,Q),Y+=6}a.addGroup(f,Y,P),f+=Y,h+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ai(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class li extends De{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],d=[],h=[],f=[];let p=0;const v=[],m=n/2;let g=0;_(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new ae(d,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(f,2));function _(){const M=new z,E=new z;let b=0;const y=(e-t)/n;for(let S=0;S<=s;S++){const P=[],A=S/s,I=A*(e-t)+t;for(let N=0;N<=i;N++){const L=N/i,w=L*l+a,D=Math.sin(w),F=Math.cos(w);E.x=I*D,E.y=-A*n+m,E.z=I*F,d.push(E.x,E.y,E.z),M.set(D,y,F).normalize(),h.push(M.x,M.y,M.z),f.push(L,1-A),P.push(p++)}v.push(P)}for(let S=0;S<i;S++)for(let P=0;P<s;P++){const A=v[P][S],I=v[P+1][S],N=v[P+1][S+1],L=v[P][S+1];(t>0||P!==0)&&(u.push(A,I,L),b+=3),(e>0||P!==s-1)&&(u.push(I,N,L),b+=3)}c.addGroup(g,b,0),g+=b}function x(M){const E=p,b=new At,y=new z;let S=0;const P=M===!0?t:e,A=M===!0?1:-1;for(let N=1;N<=i;N++)d.push(0,m*A,0),h.push(0,A,0),f.push(.5,.5),p++;const I=p;for(let N=0;N<=i;N++){const w=N/i*l+a,D=Math.cos(w),F=Math.sin(w);y.x=P*F,y.y=m*A,y.z=P*D,d.push(y.x,y.y,y.z),h.push(0,A,0),b.x=D*.5+.5,b.y=F*.5*A+.5,f.push(b.x,b.y),p++}for(let N=0;N<i;N++){const L=E+N,w=I+N;M===!0?u.push(w,w+1,L):u.push(w+1,w,L),S+=3}c.addGroup(g,S,M===!0?1:2),g+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new li(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class gl extends li{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new gl(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class _l extends De{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],o=[];a(i),c(n),u(),this.setAttribute("position",new ae(s,3)),this.setAttribute("normal",new ae(s.slice(),3)),this.setAttribute("uv",new ae(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const x=new z,M=new z,E=new z;for(let b=0;b<e.length;b+=3)f(e[b+0],x),f(e[b+1],M),f(e[b+2],E),l(x,M,E,_)}function l(_,x,M,E){const b=E+1,y=[];for(let S=0;S<=b;S++){y[S]=[];const P=_.clone().lerp(M,S/b),A=x.clone().lerp(M,S/b),I=b-S;for(let N=0;N<=I;N++)N===0&&S===b?y[S][N]=P:y[S][N]=P.clone().lerp(A,N/I)}for(let S=0;S<b;S++)for(let P=0;P<2*(b-S)-1;P++){const A=Math.floor(P/2);P%2===0?(h(y[S][A+1]),h(y[S+1][A]),h(y[S][A])):(h(y[S][A+1]),h(y[S+1][A+1]),h(y[S+1][A]))}}function c(_){const x=new z;for(let M=0;M<s.length;M+=3)x.x=s[M+0],x.y=s[M+1],x.z=s[M+2],x.normalize().multiplyScalar(_),s[M+0]=x.x,s[M+1]=x.y,s[M+2]=x.z}function u(){const _=new z;for(let x=0;x<s.length;x+=3){_.x=s[x+0],_.y=s[x+1],_.z=s[x+2];const M=m(_)/2/Math.PI+.5,E=g(_)/Math.PI+.5;o.push(M,1-E)}p(),d()}function d(){for(let _=0;_<o.length;_+=6){const x=o[_+0],M=o[_+2],E=o[_+4],b=Math.max(x,M,E),y=Math.min(x,M,E);b>.9&&y<.1&&(x<.2&&(o[_+0]+=1),M<.2&&(o[_+2]+=1),E<.2&&(o[_+4]+=1))}}function h(_){s.push(_.x,_.y,_.z)}function f(_,x){const M=_*3;x.x=t[M+0],x.y=t[M+1],x.z=t[M+2]}function p(){const _=new z,x=new z,M=new z,E=new z,b=new At,y=new At,S=new At;for(let P=0,A=0;P<s.length;P+=9,A+=6){_.set(s[P+0],s[P+1],s[P+2]),x.set(s[P+3],s[P+4],s[P+5]),M.set(s[P+6],s[P+7],s[P+8]),b.set(o[A+0],o[A+1]),y.set(o[A+2],o[A+3]),S.set(o[A+4],o[A+5]),E.copy(_).add(x).add(M).divideScalar(3);const I=m(E);v(b,A+0,_,I),v(y,A+2,x,I),v(S,A+4,M,I)}}function v(_,x,M,E){E<0&&_.x===1&&(o[x]=_.x-1),M.x===0&&M.z===0&&(o[x]=E/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function g(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _l(t.vertices,t.indices,t.radius,t.detail)}}class hi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Wt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const u=n[i],h=n[i+1]-u,f=(o-u)/h;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new At:new z);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new z,i=[],s=[],o=[],a=new z,l=new me;for(let f=0;f<=t;f++){const p=f/t;i[f]=this.getTangentAt(p,new z)}s[0]=new z,o[0]=new z;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),d=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(ee(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(ee(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let p=1;p<=t;p++)s[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),o[p].crossVectors(i[p],s[p])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}}class au extends hi{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new At){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class _f extends au{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function vl(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,d){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+d)+(l-a)/d;h*=u,f*=u,i(o,a,h,f)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const gc=new z,_c=new z,Ho=new vl,Vo=new vl,Wo=new vl;class sr extends hi{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new z){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%s]:(_c.subVectors(i[0],i[1]).add(i[0]),c=_c);const d=i[a%s],h=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(gc.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=gc),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);v<1e-4&&(v=1),p<1e-4&&(p=v),m<1e-4&&(m=v),Ho.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,p,v,m),Vo.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,p,v,m),Wo.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,p,v,m)}else this.curveType==="catmullrom"&&(Ho.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),Vo.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),Wo.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(Ho.calc(l),Vo.calc(l),Wo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new z().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function vc(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function vf(r,t){const e=1-r;return e*e*t}function xf(r,t){return 2*(1-r)*r*t}function yf(r,t){return r*r*t}function Xs(r,t,e,n){return vf(r,t)+xf(r,e)+yf(r,n)}function Mf(r,t){const e=1-r;return e*e*e*t}function Sf(r,t){const e=1-r;return 3*e*e*r*t}function bf(r,t){return 3*(1-r)*r*r*t}function Ef(r,t){return r*r*r*t}function Ys(r,t,e,n,i){return Mf(r,t)+Sf(r,e)+bf(r,n)+Ef(r,i)}class wf extends hi{constructor(t=new At,e=new At,n=new At,i=new At){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new At){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ys(t,i.x,s.x,o.x,a.x),Ys(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class lu extends hi{constructor(t=new z,e=new z,n=new z,i=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new z){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ys(t,i.x,s.x,o.x,a.x),Ys(t,i.y,s.y,o.y,a.y),Ys(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Tf extends hi{constructor(t=new At,e=new At){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new At){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new At){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Af extends hi{constructor(t=new z,e=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new z){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Rf extends hi{constructor(t=new At,e=new At,n=new At){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new At){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Xs(t,i.x,s.x,o.x),Xs(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class cu extends hi{constructor(t=new z,e=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new z){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Xs(t,i.x,s.x,o.x),Xs(t,i.y,s.y,o.y),Xs(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cf extends hi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new At){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(vc(a,l.x,c.x,u.x,d.x),vc(a,l.y,c.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new At().fromArray(i))}return this}}var Pf=Object.freeze({__proto__:null,ArcCurve:_f,CatmullRomCurve3:sr,CubicBezierCurve:wf,CubicBezierCurve3:lu,EllipseCurve:au,LineCurve:Tf,LineCurve3:Af,QuadraticBezierCurve:Rf,QuadraticBezierCurve3:cu,SplineCurve:Cf});class er extends _l{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new er(t.radius,t.detail)}}class ci extends De{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,d=t/a,h=e/l,f=[],p=[],v=[],m=[];for(let g=0;g<u;g++){const _=g*h-o;for(let x=0;x<c;x++){const M=x*d-s;p.push(M,-_,0),v.push(0,0,1),m.push(x/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<a;_++){const x=_+c*g,M=_+c*(g+1),E=_+1+c*(g+1),b=_+1+c*g;f.push(x,M,b),f.push(M,E,b)}this.setIndex(f),this.setAttribute("position",new ae(p,3)),this.setAttribute("normal",new ae(v,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ci(t.width,t.height,t.widthSegments,t.heightSegments)}}class Mi extends De{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new z,h=new z,f=[],p=[],v=[],m=[];for(let g=0;g<=n;g++){const _=[],x=g/n,M=o+x*a,E=t*Math.cos(M),b=Math.sqrt(t*t-E*E);let y=0;g===0&&o===0?y=.5/e:g===n&&l===Math.PI&&(y=-.5/e);for(let S=0;S<=e;S++){const P=S/e,A=i+P*s;d.x=-b*Math.cos(A),d.y=E,d.z=b*Math.sin(A),p.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),m.push(P+y,1-x),_.push(c++)}u.push(_)}for(let g=0;g<n;g++)for(let _=0;_<e;_++){const x=u[g][_+1],M=u[g][_],E=u[g+1][_],b=u[g+1][_+1];(g!==0||o>0)&&f.push(x,M,b),(g!==n-1||l<Math.PI)&&f.push(M,E,b)}this.setIndex(f),this.setAttribute("position",new ae(p,3)),this.setAttribute("normal",new ae(v,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class xl extends De{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],u=[],d=[],h=new z,f=new z,p=new z;for(let v=0;v<=n;v++){const m=o+v/n*a;for(let g=0;g<=i;g++){const _=g/i*s;f.x=(t+e*Math.cos(m))*Math.cos(_),f.y=(t+e*Math.cos(m))*Math.sin(_),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),p.subVectors(f,h).normalize(),u.push(p.x,p.y,p.z),d.push(g/i),d.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=i;m++){const g=(i+1)*v+m-1,_=(i+1)*(v-1)+m-1,x=(i+1)*(v-1)+m,M=(i+1)*v+m;l.push(g,_,M),l.push(_,x,M)}this.setIndex(l),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(u,3)),this.setAttribute("uv",new ae(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xl(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class yl extends De{constructor(t=new cu(new z(-1,-1,0),new z(-1,1,0),new z(1,1,0)),e=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:s};const o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new z,l=new z,c=new At;let u=new z;const d=[],h=[],f=[],p=[];v(),this.setIndex(p),this.setAttribute("position",new ae(d,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(f,2));function v(){for(let x=0;x<e;x++)m(x);m(s===!1?e:0),_(),g()}function m(x){u=t.getPointAt(x/e,u);const M=o.normals[x],E=o.binormals[x];for(let b=0;b<=i;b++){const y=b/i*Math.PI*2,S=Math.sin(y),P=-Math.cos(y);l.x=P*M.x+S*E.x,l.y=P*M.y+S*E.y,l.z=P*M.z+S*E.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,d.push(a.x,a.y,a.z)}}function g(){for(let x=1;x<=e;x++)for(let M=1;M<=i;M++){const E=(i+1)*(x-1)+(M-1),b=(i+1)*x+(M-1),y=(i+1)*x+M,S=(i+1)*(x-1)+M;p.push(E,b,S),p.push(b,y,S)}}function _(){for(let x=0;x<=e;x++)for(let M=0;M<=i;M++)c.x=x/e,c.y=M/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new yl(new Pf[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function xs(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];if(xc(i))i.isRenderTargetTexture?(Wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(xc(i[0])){const s=[];for(let o=0,a=i.length;o<a;o++)s[o]=i[o].clone();t[e][n]=s}else t[e][n]=i.slice();else t[e][n]=i}}return t}function nn(r){const t={};for(let e=0;e<r.length;e++){const n=xs(r[e]);for(const i in n)t[i]=n[i]}return t}function xc(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Lf(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function hu(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}const If={clone:xs,merge:nn};var Nf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Df=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wi extends Ss{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nf,this.fragmentShader=Df,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xs(t.uniforms),this.uniformsGroups=Lf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new qt().setHex(i.value);break;case"v2":this.uniforms[n].value=new At().fromArray(i.value);break;case"v3":this.uniforms[n].value=new z().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Ae().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Zt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new me().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Uf extends wi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class an extends Ss{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qa,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ff extends Ss{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Of extends Ss{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const qo={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(yc(r)||(this.files[r]=t))},get:function(r){if(this.enabled!==!1&&!yc(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function yc(r){try{const t=r.slice(r.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class Bf{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const zf=new Bf;class Ml{constructor(t){this.manager=t!==void 0?t:zf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}}Ml.DEFAULT_MATERIAL_NAME="__DEFAULT";const Qi=new WeakMap;class kf extends Ml{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=qo.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);else{let d=Qi.get(o);d===void 0&&(d=[],Qi.set(o,d)),d.push({onLoad:e,onError:i})}return o}const a=Qs("img");function l(){u(),e&&e(this);const d=Qi.get(this)||[];for(let h=0;h<d.length;h++){const f=d[h];f.onLoad&&f.onLoad(this)}Qi.delete(this),s.manager.itemEnd(t)}function c(d){u(),i&&i(d),qo.remove(`image:${t}`);const h=Qi.get(this)||[];for(let f=0;f<h.length;f++){const p=h[f];p.onError&&p.onError(d)}Qi.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),qo.add(`image:${t}`,a),s.manager.itemStart(t),a.fetchPriority=this.priority,a.src=t,a}}class Gf extends Ml{constructor(t){super(t)}load(t,e,n,i){const s=new Ye,o=new kf(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class Sl extends Ne{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Hf extends Sl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Xo=new me,Mc=new z,Sc=new z;class uu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.mapType=fn,this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tr,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Mc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Mc),Sc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Sc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Xo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Xo,t.coordinateSystem,t.reversedDepth);const s=this._frameExtents,o=i?i.z/s.x:1,a=i?i.w/s.y:1,l=i?i.x/s.x:0,c=i?i.y/s.y:0;t.coordinateSystem===Js||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Xo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Lr=new z,Ir=new yn,Fn=new z;class bl extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Lr,Ir,Fn),Fn.x===1&&Fn.y===1&&Fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lr,Ir,Fn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Lr,Ir,Fn),Fn.x===1&&Fn.y===1&&Fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lr,Ir,Fn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const _i=new z,bc=new At,Ec=new At;class _n extends bl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=js*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ws*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return js*2*Math.atan(Math.tan(Ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_i.x,_i.y).multiplyScalar(-t/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_i.x,_i.y).multiplyScalar(-t/_i.z)}getViewSize(t,e){return this.getViewBounds(t,bc,Ec),e.subVectors(Ec,bc)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ws*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Vf extends uu{constructor(){super(new _n(90,1,.5,500)),this.isPointLightShadow=!0}}class Wf extends Sl{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Vf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class du extends bl{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class qf extends uu{constructor(){super(new du(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wc extends Sl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new qf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const ji=-90,ts=1;class Xa extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new _n(ji,ts,t,e);i.layers=this.layers,this.add(i);const s=new _n(ji,ts,t,e);s.layers=this.layers,this.add(s);const o=new _n(ji,ts,t,e);o.layers=this.layers,this.add(o);const a=new _n(ji,ts,t,e);a.layers=this.layers,this.add(a);const l=new _n(ji,ts,t,e);l.layers=this.layers,this.add(l);const c=new _n(ji,ts,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===In)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Js)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=v,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Xf extends _n{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}const Tc=new me;class fu{constructor(t,e,n=0,i=1/0){this.ray=new ao(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new fl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ce("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Tc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Tc),this}intersectObject(t,e=!0,n=[]){return Ya(t,this,n,e),n.sort(Ac),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)Ya(t[i],this,n,e);return n.sort(Ac),n}}function Ac(r,t){return r.distance-t.distance}function Ya(r,t,e,n){let i=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)Ya(s[o],t,e,!0)}}class Za{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ee(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ee(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Yf extends Ti{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Rc(r,t,e,n){const i=Zf(n);switch(e){case Vh:return r*t;case ol:return r*t/i.components*i.byteLength;case al:return r*t/i.components*i.byteLength;case Bi:return r*t*2/i.components*i.byteLength;case ll:return r*t*2/i.components*i.byteLength;case Wh:return r*t*3/i.components*i.byteLength;case Wn:return r*t*4/i.components*i.byteLength;case cl:return r*t*4/i.components*i.byteLength;case Vr:case Wr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case qr:case Xr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ga:case va:return Math.max(r,16)*Math.max(t,8)/4;case ma:case _a:return Math.max(r,8)*Math.max(t,8)/2;case xa:case ya:case Sa:case ba:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ma:case Kr:case Ea:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case wa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ta:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Aa:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Ca:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Pa:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case La:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Ia:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Na:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Da:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Ua:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Fa:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Oa:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Ba:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case za:case ka:case Ga:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Ha:case Va:return Math.ceil(r/4)*Math.ceil(t/4)*8;case $r:case Wa:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Zf(r){switch(r){case fn:case zh:return{byteLength:1,components:1};case $s:case kh:case Sn:return{byteLength:2,components:1};case sl:case rl:return{byteLength:2,components:4};case qn:case il:case Ln:return{byteLength:4,components:1};case Gh:case Hh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:el}}));typeof window<"u"&&(window.__THREE__?Wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=el);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function pu(){let r=null,t=!1,e=null,n=null;function i(s,o){n=r.requestAnimationFrame(i),e(s,o)}return{start:function(){t!==!0&&e!==null&&r!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Kf(r){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const u=l.array,d=l.updateRanges;if(r.bindBuffer(c,a),d.length===0)r.bufferSubData(c,0,u);else{d.sort((f,p)=>f.start-p.start);let h=0;for(let f=1;f<d.length;f++){const p=d[h],v=d[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++h,d[h]=v)}d.length=h+1;for(let f=0,p=d.length;f<p;f++){const v=d[f];r.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var $f=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jf=`#ifdef USE_ALPHAHASH
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
#endif`,Qf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ep=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,np=`#ifdef USE_AOMAP
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
#endif`,ip=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sp=`#ifdef USE_BATCHING
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
#endif`,rp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,op=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ap=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cp=`#ifdef USE_IRIDESCENCE
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
#endif`,hp=`#ifdef USE_BUMPMAP
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
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_p=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,xp=`#define PI 3.141592653589793
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
} // validated`,yp=`vec3 transformedNormal = objectNormal;
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
#endif`,Mp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ep=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ap=`#ifdef USE_ENVMAP
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
#endif`,Rp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Pp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lp=`#ifdef USE_ENVMAP
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
#endif`,Ip=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Np=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Up=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fp=`#ifdef USE_GRADIENTMAP
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
}`,Op=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Gp=`#ifdef USE_ENVMAP
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
#endif`,Hp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xp=`PhysicalMaterial material;
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
#endif`,Yp=`uniform sampler2D dfgLUT;
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
}`,Zp=`
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
#endif`,Kp=`#if defined( RE_IndirectDiffuse )
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
#endif`,$p=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jp=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Qp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,em=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,im=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rm=`#if defined( USE_POINTS_UV )
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
#endif`,om=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,am=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cm=`#if defined( USE_MORPHCOLORS )
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
#endif`,hm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,um=`#ifdef USE_MORPHTARGETS
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
#endif`,dm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_m=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,vm=`#ifdef USE_NORMALMAP
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
#endif`,xm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ym=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Em=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Am=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Im=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Dm=`float getShadowMask() {
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
}`,Um=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fm=`#ifdef USE_SKINNING
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
#endif`,Om=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bm=`#ifdef USE_SKINNING
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
#endif`,zm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,km=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vm=`#ifdef USE_TRANSMISSION
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
#endif`,Wm=`#ifdef USE_TRANSMISSION
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
#endif`,qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Km=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$m=`uniform sampler2D t2D;
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
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qm=`uniform float backgroundBlurriness;
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
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e0=`#include <common>
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
}`,n0=`#if DEPTH_PACKING == 3200
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
}`,i0=`#define DISTANCE
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
}`,s0=`#define DISTANCE
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
}`,r0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,o0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a0=`uniform float scale;
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
}`,l0=`uniform vec3 diffuse;
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
}`,c0=`#include <common>
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
}`,h0=`uniform vec3 diffuse;
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
}`,u0=`#define LAMBERT
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
}`,d0=`#define LAMBERT
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
}`,f0=`#define MATCAP
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
}`,p0=`#define MATCAP
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
}`,m0=`#define NORMAL
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
}`,g0=`#define NORMAL
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
}`,_0=`#define PHONG
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
}`,v0=`#define PHONG
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
}`,x0=`#define STANDARD
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
}`,y0=`#define STANDARD
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
}`,M0=`#define TOON
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
}`,S0=`#define TOON
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
}`,b0=`uniform float size;
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
}`,E0=`uniform vec3 diffuse;
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
}`,w0=`#include <common>
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
}`,T0=`uniform vec3 color;
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
}`,A0=`uniform float rotation;
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
}`,R0=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:$f,alphahash_pars_fragment:Jf,alphamap_fragment:Qf,alphamap_pars_fragment:jf,alphatest_fragment:tp,alphatest_pars_fragment:ep,aomap_fragment:np,aomap_pars_fragment:ip,batching_pars_vertex:sp,batching_vertex:rp,begin_vertex:op,beginnormal_vertex:ap,bsdfs:lp,iridescence_fragment:cp,bumpmap_pars_fragment:hp,clipping_planes_fragment:up,clipping_planes_pars_fragment:dp,clipping_planes_pars_vertex:fp,clipping_planes_vertex:pp,color_fragment:mp,color_pars_fragment:gp,color_pars_vertex:_p,color_vertex:vp,common:xp,defaultnormal_vertex:yp,displacementmap_pars_vertex:Mp,displacementmap_vertex:Sp,emissivemap_fragment:bp,emissivemap_pars_fragment:Ep,colorspace_fragment:wp,colorspace_pars_fragment:Tp,envmap_fragment:Ap,envmap_common_pars_fragment:Rp,envmap_pars_fragment:Cp,envmap_pars_vertex:Pp,envmap_physical_pars_fragment:Gp,envmap_vertex:Lp,fog_vertex:Ip,fog_pars_vertex:Np,fog_fragment:Dp,fog_pars_fragment:Up,gradientmap_pars_fragment:Fp,lightmap_pars_fragment:Op,lights_lambert_fragment:Bp,lights_lambert_pars_fragment:zp,lights_pars_begin:kp,lights_toon_fragment:Hp,lights_toon_pars_fragment:Vp,lights_phong_fragment:Wp,lights_phong_pars_fragment:qp,lights_physical_fragment:Xp,lights_physical_pars_fragment:Yp,lights_fragment_begin:Zp,lights_fragment_maps:Kp,lights_fragment_end:$p,lightprobes_pars_fragment:Jp,logdepthbuf_fragment:Qp,logdepthbuf_pars_fragment:jp,logdepthbuf_pars_vertex:tm,logdepthbuf_vertex:em,map_fragment:nm,map_pars_fragment:im,map_particle_fragment:sm,map_particle_pars_fragment:rm,metalnessmap_fragment:om,metalnessmap_pars_fragment:am,morphinstance_vertex:lm,morphcolor_vertex:cm,morphnormal_vertex:hm,morphtarget_pars_vertex:um,morphtarget_vertex:dm,normal_fragment_begin:fm,normal_fragment_maps:pm,normal_pars_fragment:mm,normal_pars_vertex:gm,normal_vertex:_m,normalmap_pars_fragment:vm,clearcoat_normal_fragment_begin:xm,clearcoat_normal_fragment_maps:ym,clearcoat_pars_fragment:Mm,iridescence_pars_fragment:Sm,opaque_fragment:bm,packing:Em,premultiplied_alpha_fragment:wm,project_vertex:Tm,dithering_fragment:Am,dithering_pars_fragment:Rm,roughnessmap_fragment:Cm,roughnessmap_pars_fragment:Pm,shadowmap_pars_fragment:Lm,shadowmap_pars_vertex:Im,shadowmap_vertex:Nm,shadowmask_pars_fragment:Dm,skinbase_vertex:Um,skinning_pars_vertex:Fm,skinning_vertex:Om,skinnormal_vertex:Bm,specularmap_fragment:zm,specularmap_pars_fragment:km,tonemapping_fragment:Gm,tonemapping_pars_fragment:Hm,transmission_fragment:Vm,transmission_pars_fragment:Wm,uv_pars_fragment:qm,uv_pars_vertex:Xm,uv_vertex:Ym,worldpos_vertex:Zm,background_vert:Km,background_frag:$m,backgroundCube_vert:Jm,backgroundCube_frag:Qm,cube_vert:jm,cube_frag:t0,depth_vert:e0,depth_frag:n0,distance_vert:i0,distance_frag:s0,equirect_vert:r0,equirect_frag:o0,linedashed_vert:a0,linedashed_frag:l0,meshbasic_vert:c0,meshbasic_frag:h0,meshlambert_vert:u0,meshlambert_frag:d0,meshmatcap_vert:f0,meshmatcap_frag:p0,meshnormal_vert:m0,meshnormal_frag:g0,meshphong_vert:_0,meshphong_frag:v0,meshphysical_vert:x0,meshphysical_frag:y0,meshtoon_vert:M0,meshtoon_frag:S0,points_vert:b0,points_frag:E0,shadow_vert:w0,shadow_frag:T0,sprite_vert:A0,sprite_frag:R0},wt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Vn={basic:{uniforms:nn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:nn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new qt(0)},envMapIntensity:{value:1}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:nn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:nn([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:nn([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new qt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:nn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:nn([wt.points,wt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:nn([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:nn([wt.common,wt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:nn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:nn([wt.sprite,wt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distance:{uniforms:nn([wt.common,wt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distance_vert,fragmentShader:te.distance_frag},shadow:{uniforms:nn([wt.lights,wt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};Vn.physical={uniforms:nn([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Zt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};const Nr={r:0,b:0,g:0},C0=new me,mu=new Zt;mu.set(-1,0,0,0,1,0,0,0,1);function P0(r,t,e,n,i,s){const o=new qt(0);let a=i===!0?0:1,l,c,u=null,d=0,h=null;function f(_){let x=_.isScene===!0?_.background:null;if(x&&x.isTexture){const M=_.backgroundBlurriness>0;x=t.get(x,M)}return x}function p(_){let x=!1;const M=f(_);M===null?m(o,a):M&&M.isColor&&(m(M,1),x=!0);const E=r.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||x)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function v(_,x){const M=f(x);M&&M.isCubeTexture?(c===void 0&&(c=new pe(new ai(1,1,1),new wi({name:"BackgroundCubeMaterial",uniforms:xs(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,b,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(C0.makeRotationFromEuler(x.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(mu),c.material.toneMapped=oe.getTransfer(M.colorSpace)!==ve,(u!==M||d!==M.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,h=r.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new pe(new ci(2,2),new wi({name:"BackgroundMaterial",uniforms:xs(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=oe.getTransfer(M.colorSpace)!==ve,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,h=r.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,x){_.getRGB(Nr,hu(r)),e.buffers.color.setClear(Nr.r,Nr.g,Nr.b,x,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,x=1){o.set(_),a=x,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,m(o,a)},render:p,addToRenderList:v,dispose:g}}function L0(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,o=!1;function a(I,N,L,w,D){let F=!1;const k=d(I,w,L,N);s!==k&&(s=k,c(s.object)),F=f(I,w,L,D),F&&p(I,w,L,D),D!==null&&t.update(D,r.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,M(I,N,L,w),D!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function l(){return r.createVertexArray()}function c(I){return r.bindVertexArray(I)}function u(I){return r.deleteVertexArray(I)}function d(I,N,L,w){const D=w.wireframe===!0;let F=n[N.id];F===void 0&&(F={},n[N.id]=F);const k=I.isInstancedMesh===!0?I.id:0;let Y=F[k];Y===void 0&&(Y={},F[k]=Y);let W=Y[L.id];W===void 0&&(W={},Y[L.id]=W);let O=W[D];return O===void 0&&(O=h(l()),W[D]=O),O}function h(I){const N=[],L=[],w=[];for(let D=0;D<e;D++)N[D]=0,L[D]=0,w[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:L,attributeDivisors:w,object:I,attributes:{},index:null}}function f(I,N,L,w){const D=s.attributes,F=N.attributes;let k=0;const Y=L.getAttributes();for(const W in Y)if(Y[W].location>=0){const H=D[W];let X=F[W];if(X===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(X=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(X=I.instanceColor)),H===void 0||H.attribute!==X||X&&H.data!==X.data)return!0;k++}return s.attributesNum!==k||s.index!==w}function p(I,N,L,w){const D={},F=N.attributes;let k=0;const Y=L.getAttributes();for(const W in Y)if(Y[W].location>=0){let H=F[W];H===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(H=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(H=I.instanceColor));const X={};X.attribute=H,H&&H.data&&(X.data=H.data),D[W]=X,k++}s.attributes=D,s.attributesNum=k,s.index=w}function v(){const I=s.newAttributes;for(let N=0,L=I.length;N<L;N++)I[N]=0}function m(I){g(I,0)}function g(I,N){const L=s.newAttributes,w=s.enabledAttributes,D=s.attributeDivisors;L[I]=1,w[I]===0&&(r.enableVertexAttribArray(I),w[I]=1),D[I]!==N&&(r.vertexAttribDivisor(I,N),D[I]=N)}function _(){const I=s.newAttributes,N=s.enabledAttributes;for(let L=0,w=N.length;L<w;L++)N[L]!==I[L]&&(r.disableVertexAttribArray(L),N[L]=0)}function x(I,N,L,w,D,F,k){k===!0?r.vertexAttribIPointer(I,N,L,D,F):r.vertexAttribPointer(I,N,L,w,D,F)}function M(I,N,L,w){v();const D=w.attributes,F=L.getAttributes(),k=N.defaultAttributeValues;for(const Y in F){const W=F[Y];if(W.location>=0){let O=D[Y];if(O===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(O=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(O=I.instanceColor)),O!==void 0){const H=O.normalized,X=O.itemSize,ot=t.get(O);if(ot===void 0)continue;const q=ot.buffer,Q=ot.type,lt=ot.bytesPerElement,et=Q===r.INT||Q===r.UNSIGNED_INT||O.gpuType===il;if(O.isInterleavedBufferAttribute){const st=O.data,bt=st.isInterleavedBuffer===!0?st.stride:st.itemSize,Pt=O.offset;if(st.isInstancedInterleavedBuffer||st.isInstancedBufferAttribute){for(let ft=0;ft<W.locationSize;ft++)g(W.location+ft,st.meshPerAttribute);I.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let ft=0;ft<W.locationSize;ft++)m(W.location+ft);r.bindBuffer(r.ARRAY_BUFFER,q);for(let ft=0;ft<W.locationSize;ft++)x(W.location+ft,X/W.locationSize,Q,H,bt*lt,(Pt+X/W.locationSize*ft)*lt,et)}else{if(O.isInstancedBufferAttribute){for(let st=0;st<W.locationSize;st++)g(W.location+st,O.meshPerAttribute);I.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let st=0;st<W.locationSize;st++)m(W.location+st);r.bindBuffer(r.ARRAY_BUFFER,q);for(let st=0;st<W.locationSize;st++)x(W.location+st,X/W.locationSize,Q,H,X*lt,X/W.locationSize*st*lt,et)}}else if(k!==void 0){const H=k[Y];if(H!==void 0)switch(H.length){case 2:r.vertexAttrib2fv(W.location,H);break;case 3:r.vertexAttrib3fv(W.location,H);break;case 4:r.vertexAttrib4fv(W.location,H);break;default:r.vertexAttrib1fv(W.location,H)}}}}_()}function E(){P();for(const I in n){const N=n[I];for(const L in N){const w=N[L];for(const D in w){const F=w[D];for(const k in F)u(F[k].object),delete F[k];delete w[D]}}delete n[I]}}function b(I){if(n[I.id]===void 0)return;const N=n[I.id];for(const L in N){const w=N[L];for(const D in w){const F=w[D];for(const k in F)u(F[k].object),delete F[k];delete w[D]}}delete n[I.id]}function y(I){for(const N in n){const L=n[N];for(const w in L){const D=L[w];if(D[I.id]===void 0)continue;const F=D[I.id];for(const k in F)u(F[k].object),delete F[k];delete D[I.id]}}}function S(I){for(const N in n){const L=n[N],w=I.isInstancedMesh===!0?I.id:0,D=L[w];if(D!==void 0){for(const F in D){const k=D[F];for(const Y in k)u(k[Y].object),delete k[Y];delete D[F]}delete L[w],Object.keys(L).length===0&&delete n[N]}}}function P(){A(),o=!0,s!==i&&(s=i,c(s.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:A,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfObject:S,releaseStatesOfProgram:y,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function I0(r,t,e){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,u){u!==0&&(r.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];e.update(h,n,1)}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function N0(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const y=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(y){return!(y!==Wn&&n.convert(y)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(y){const S=y===Sn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(y!==fn&&y!==Ln&&!S&&n.convert(y)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(y){if(y==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(Wt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),h=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Wt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Wt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),E=r.getParameter(r.MAX_SAMPLES),b=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:_,maxVaryings:x,maxFragmentUniforms:M,maxSamples:E,samples:b}}function D0(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Rn,a=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||i;return i=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){const p=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,g=r.get(d);if(!i||p===null||p.length===0||s&&!m)s?u(null):c();else{const _=s?0:n,x=_*4;let M=g.clippingState||null;l.value=M,M=u(p,h,x,f);for(let E=0;E!==x;++E)M[E]=e[E];g.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,f,p){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,p!==!0||m===null){const g=f+v*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<g)&&(m=new Float32Array(g));for(let x=0,M=f;x!==v;++x,M+=4)o.copy(d[x]).applyMatrix4(_,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}class El extends Mn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new su(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ai(5,5,5),s=new wi({name:"CubemapFromEquirect",uniforms:xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:hs});s.uniforms.tEquirect.value=e;const o=new pe(i,s),a=e.minFilter;return e.minFilter===xi&&(e.minFilter=hn),new Xa(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const Cc=256,U0=3,F0=20,gu=256,_u=16,O0=3,B0=new z,z0=new qt;class io{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Xa(1,10,null),this._boxMesh=new pe(new ai(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){const{size:o=256,position:a=B0}=s,l=this._renderer;this._setSize(o);const c=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);const d=l.autoClear,h=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,v=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(t.background=l.getClearColor(z0));const m=new Xa(n,i,u);return m.position.copy(a),m.update(l,t),l.autoClear=d,l.autoClearColor=h,l.autoClearDepth=f,l.autoClearStencil=p,t.background=v,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ic(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Cc,Kh(t))}_fromTexture(t,e){t.mapping===ms||t.mapping===Ks?this._setSize(t.image.length===0?Cc:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=Pc(t,!1,!1),n=Math.log2(t)-U0;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Pc(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=t,s.activeMipmapLevel=e;const o=t.width>>e;t.viewport.set(0,0,o,o),s.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===ms||t.mapping===Ks?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ic()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Lc()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=k0(),this._integrationMaterial=G0());const e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(e/_u);for(let o=0;o<=n;o++){const a=io.lodToRoughness(o,n);if(o>n-O0)s.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{const l=a>0?Math.log2(e)+.5*Math.log2(6/(gu*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=H0());const n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(s,0,n)}}function Pc(r,t,e){return new El(r,{minFilter:xi,generateMipmaps:t,type:Sn,colorSpace:Jr,depthBuffer:e})}function rr(r,t,e){return new wi({name:r,uniforms:t,vertexShader:te.cube_vert,fragmentShader:e,side:tn,blending:hs,depthTest:!1,depthWrite:!1})}function k0(){return rr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${gu}u

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
	`)}function G0(){return rr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:_u}},`

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
	`)}function H0(){return rr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${F0}
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
	`)}function Lc(){return rr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Ic(){return rr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function V0(r){let t=new WeakMap,e=new WeakMap,n=null;function i(h,f=!1){return h==null?null:f?o(h):s(h)}function s(h){if(h&&h.isTexture){const f=h.mapping;if(f===_o||f===vo)if(t.has(h)){const p=t.get(h).texture;return a(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const v=new El(p.height);return v.fromEquirectangularTexture(r,h),t.set(h,v),h.addEventListener("dispose",c),a(v.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){const f=h.mapping,p=f===_o||f===vo,v=f===ms||f===Ks;if(p||v){let m=e.get(h);const g=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return n===null&&(n=new io(r)),m=p?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const _=h.image;return p&&_&&_.height>0||v&&_&&l(_)?(n===null&&(n=new io(r)),m=p?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,f){return f===_o?h.mapping=ms:f===vo&&(h.mapping=Ks),h}function l(h){let f=0;const p=6;for(let v=0;v<p;v++)h[v]!==void 0&&f++;return f===p}function c(h){const f=h.target;f.removeEventListener("dispose",c);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function W0(r){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Yr("WebGLRenderer: "+n+" extension not supported."),i}}}function q0(r,t,e,n){const i={},s=new WeakMap,o=new FinalizationRegistry(p=>delete i[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(const m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete i[p.id],o.unregister(p);const v=s.get(p);v&&(t.remove(v),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,v){return i[v.id]!==void 0||(v.addEventListener("dispose",a),i[v.id]=new WeakRef(v),o.register(v,v.id,v),e.memory.geometries++),v}function u(p){const v=p.attributes;for(const m in v)t.update(v[m],r.ARRAY_BUFFER)}function d(p){const v=p.index,m=p.attributes.position;let g=0;if(m===void 0)return;const _=v!==null?v.array.length:m.array.length/3-1,x=m.count>=65535?eu:tu,M=new x(Math.ceil(_/3)*6,1),E=M.array;if(v!==null){const y=v.array;g=v.version;for(let S=0,P=0;S<_;S+=3){const A=y[S+0],I=y[S+1],N=y[S+2];E[P++]=A,E[P++]=I,E[P++]=I,E[P++]=N,E[P++]=N,E[P++]=A}}else{g=m.version;for(let y=0,S=0;y<_;y+=3){const P=y+0,A=y+1,I=y+2;E[S++]=P,E[S++]=A,E[S++]=A,E[S++]=I,E[S++]=I,E[S++]=P}}M.version=g;const b=s.get(p);b&&t.remove(b),s.set(p,M)}function h(p){const v=s.get(p);if(v){const m=p.index;m!==null&&v.version<m.version&&d(p)}else d(p);return s.get(p)}function f(){for(const p in i){const v=i[p].deref();v!==void 0&&l(v)}}return{get:c,update:u,getWireframeAttribute:h,dispose:f}}function X0(r,t,e){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,h){r.drawElements(n,h,s,d*o),e.update(h,n,1)}function c(d,h,f){f!==0&&(r.drawElementsInstanced(n,h,s,d*o,f),e.update(h,n,f))}function u(d,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,d,0,f);let v=0;for(let m=0;m<f;m++)v+=h[m];e.update(v,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Y0(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:ce("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Z0(r,t,e){const n=new WeakMap,i=new Ae;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let A=function(){S.dispose(),n.delete(a),a.removeEventListener("dispose",A)};var f=A;h!==void 0&&h.texture.dispose();const p=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let M=0;p===!0&&(M=1),v===!0&&(M=2),m===!0&&(M=3);let E=a.attributes.position.count*M,b=1;E>t.maxTextureSize&&(b=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const y=new Float32Array(E*b*4*d),S=new Qh(y,E,b,d);S.type=Ln,S.needsUpdate=!0;const P=M*4;for(let I=0;I<d;I++){const N=g[I],L=_[I],w=x[I],D=E*b*4*I;for(let F=0;F<N.count;F++){const k=F*P;p===!0&&(i.fromBufferAttribute(N,F),y[D+k+0]=i.x,y[D+k+1]=i.y,y[D+k+2]=i.z,y[D+k+3]=0),v===!0&&(i.fromBufferAttribute(L,F),y[D+k+4]=i.x,y[D+k+5]=i.y,y[D+k+6]=i.z,y[D+k+7]=0),m===!0&&(i.fromBufferAttribute(w,F),y[D+k+8]=i.x,y[D+k+9]=i.y,y[D+k+10]=i.z,y[D+k+11]=w.itemSize===4?i.w:1)}}h={count:d,texture:S,size:new At(E,b)},n.set(a,h),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let p=0;for(let m=0;m<c.length;m++)p+=c[m];const v=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(r,"morphTargetBaseInfluence",v),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function K0(r,t,e,n,i){let s=new WeakMap;function o(c){const u=i.render.frame,d=c.geometry,h=t.get(c,d);if(s.get(h)!==u&&(t.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return h}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}const $0={[Ih]:"LINEAR_TONE_MAPPING",[Nh]:"REINHARD_TONE_MAPPING",[Dh]:"CINEON_TONE_MAPPING",[nl]:"ACES_FILMIC_TONE_MAPPING",[Fh]:"AGX_TONE_MAPPING",[Oh]:"NEUTRAL_TONE_MAPPING",[Uh]:"CUSTOM_TONE_MAPPING"};function J0(r,t,e,n,i,s){const o=new Mn(t,e,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null,c=null;const u=new De;u.setAttribute("position",new ae([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new ae([0,2,0,0,2,0],2));const d=new Uf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new pe(u,d),f=new du(-1,1,1,-1,0,1);let p=null,v=null,m=!1,g,_=null,x=[],M=!1;this.setSize=function(E,b){o.setSize(E,b),a!==null&&a.setSize(E,b),l!==null&&l.setSize(E,b);for(let y=0;y<x.length;y++){const S=x[y];S.setSize&&S.setSize(E,b)}},this.setEffects=function(E){x=E,M=x.length>0&&x[0].isRenderPass===!0;const b=o.width,y=o.height;x.length>0&&a===null&&(a=new Mn(b,y,{type:Sn,depthBuffer:!1,stencilBuffer:!1}),l=new Mn(b,y,{type:Sn,depthBuffer:!1,stencilBuffer:!1}));const S=i===!0&&x.some(P=>P.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&c===null&&(c=new vs(b,y),s===!0&&(c.format=yi,c.type=_s)),o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let P=0;P<x.length;P++){const A=x[P];A.setSize&&A.setSize(b,y),S&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(E,b){if(m||E.toneMapping===ri&&x.length===0)return!1;if(_=b,b!==null){const y=b.width,S=b.height;(o.width!==y||o.height!==S)&&this.setSize(y,S)}return M===!1&&E.setRenderTarget(o),g=E.toneMapping,E.toneMapping=ri,!0},this.hasRenderPass=function(){return M},this.end=function(E,b){E.toneMapping=g,m=!0;let y=o,S=a;for(let P=0;P<x.length;P++){const A=x[P];A.enabled!==!1&&(A.render(E,S,y,b),A.needsSwap!==!1&&(y=S,S=S===a?l:a))}if(p!==E.outputColorSpace||v!==E.toneMapping){p=E.outputColorSpace,v=E.toneMapping,d.defines={},oe.getTransfer(p)===ve&&(d.defines.SRGB_TRANSFER="");const P=$0[v];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=y.texture,E.setRenderTarget(_),E.render(h,f),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),d.dispose()}}const vu=new Ye,xu=new vs(1,1),yu=new ru(1),Mu=new Qh,Su=new Qd,bu=new su,Nc=[],Dc=[],Uc=new Float32Array(16),Fc=new Float32Array(9),Oc=new Float32Array(4);function bs(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Nc[i];if(s===void 0&&(s=new Float32Array(i),Nc[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Oe(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Be(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function co(r,t){let e=Dc[t];e===void 0&&(e=new Int32Array(t),Dc[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Q0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function j0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;r.uniform2fv(this.addr,t),Be(e,t)}}function tg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;r.uniform3fv(this.addr,t),Be(e,t)}}function eg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;r.uniform4fv(this.addr,t),Be(e,t)}}function ng(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;Oc.set(n),r.uniformMatrix2fv(this.addr,!1,Oc),Be(e,n)}}function ig(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;Fc.set(n),r.uniformMatrix3fv(this.addr,!1,Fc),Be(e,n)}}function sg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;Uc.set(n),r.uniformMatrix4fv(this.addr,!1,Uc),Be(e,n)}}function rg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function og(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;r.uniform2iv(this.addr,t),Be(e,t)}}function ag(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;r.uniform3iv(this.addr,t),Be(e,t)}}function lg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;r.uniform4iv(this.addr,t),Be(e,t)}}function cg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function hg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;r.uniform2uiv(this.addr,t),Be(e,t)}}function ug(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;r.uniform3uiv(this.addr,t),Be(e,t)}}function dg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;r.uniform4uiv(this.addr,t),Be(e,t)}}function ho(r){return r.version===0&&(r.compareFunction=Yh,r.needsUpdate=!0),r}function fg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?s=ho(xu):s=vu,e.setTexture2D(t||s,i)}function pg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Su,i)}function mg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_CUBE_SHADOW?s=ho(yu):s=bu,e.setTextureCube(t||s,i)}function gg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Mu,i)}function _g(r){switch(r){case 5126:return Q0;case 35664:return j0;case 35665:return tg;case 35666:return eg;case 35674:return ng;case 35675:return ig;case 35676:return sg;case 5124:case 35670:return rg;case 35667:case 35671:return og;case 35668:case 35672:return ag;case 35669:case 35673:return lg;case 5125:return cg;case 36294:return hg;case 36295:return ug;case 36296:return dg;case 35678:case 36198:case 36298:case 36306:case 35682:return fg;case 35679:case 36299:case 36307:return pg;case 35680:case 36300:case 36308:case 36293:return mg;case 36289:case 36303:case 36311:case 36292:return gg}}function vg(r,t){r.uniform1fv(this.addr,t)}function xg(r,t){const e=bs(t,this.size,2);r.uniform2fv(this.addr,e)}function yg(r,t){const e=bs(t,this.size,3);r.uniform3fv(this.addr,e)}function Mg(r,t){const e=bs(t,this.size,4);r.uniform4fv(this.addr,e)}function Sg(r,t){const e=bs(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function bg(r,t){const e=bs(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Eg(r,t){const e=bs(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function wg(r,t){r.uniform1iv(this.addr,t)}function Tg(r,t){r.uniform2iv(this.addr,t)}function Ag(r,t){r.uniform3iv(this.addr,t)}function Rg(r,t){r.uniform4iv(this.addr,t)}function Cg(r,t){r.uniform1uiv(this.addr,t)}function Pg(r,t){r.uniform2uiv(this.addr,t)}function Lg(r,t){r.uniform3uiv(this.addr,t)}function Ig(r,t){r.uniform4uiv(this.addr,t)}function Ng(r,t,e){const n=this.cache,i=t.length,s=co(e,i);Oe(n,s)||(r.uniform1iv(this.addr,s),Be(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=ho(xu):o=vu;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,s[a])}function Dg(r,t,e){const n=this.cache,i=t.length,s=co(e,i);Oe(n,s)||(r.uniform1iv(this.addr,s),Be(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Su,s[o])}function Ug(r,t,e){const n=this.cache,i=t.length,s=co(e,i);Oe(n,s)||(r.uniform1iv(this.addr,s),Be(n,s));let o;this.type===r.SAMPLER_CUBE_SHADOW?o=ho(yu):o=bu;for(let a=0;a!==i;++a)e.setTextureCube(t[a]||o,s[a])}function Fg(r,t,e){const n=this.cache,i=t.length,s=co(e,i);Oe(n,s)||(r.uniform1iv(this.addr,s),Be(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Mu,s[o])}function Og(r){switch(r){case 5126:return vg;case 35664:return xg;case 35665:return yg;case 35666:return Mg;case 35674:return Sg;case 35675:return bg;case 35676:return Eg;case 5124:case 35670:return wg;case 35667:case 35671:return Tg;case 35668:case 35672:return Ag;case 35669:case 35673:return Rg;case 5125:return Cg;case 36294:return Pg;case 36295:return Lg;case 36296:return Ig;case 35678:case 36198:case 36298:case 36306:case 35682:return Ng;case 35679:case 36299:case 36307:return Dg;case 35680:case 36300:case 36308:case 36293:return Ug;case 36289:case 36303:case 36311:case 36292:return Fg}}class Bg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=_g(e.type)}}class zg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Og(e.type)}}class kg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const Yo=/(\w+)(\])?(\[|\.)?/g;function Bc(r,t){r.seq.push(t),r.map[t.id]=t}function Gg(r,t,e){const n=r.name,i=n.length;for(Yo.lastIndex=0;;){const s=Yo.exec(n),o=Yo.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Bc(e,c===void 0?new Bg(a,r,t):new zg(a,r,t));break}else{let d=e.map[a];d===void 0&&(d=new kg(a),Bc(e,d)),e=d}}}class Zr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Gg(a,l,this)}const i=[],s=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function zc(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const Hg=37297;let Vg=0;function Wg(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const kc=new Zt;function qg(r){oe._getMatrix(kc,oe.workingColorSpace,r);const t=`mat3( ${kc.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(r)){case Qr:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return Wt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Gc(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Wg(r.getShaderSource(t),a)}else return s}function Xg(r,t){const e=qg(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Yg={[Ih]:"Linear",[Nh]:"Reinhard",[Dh]:"Cineon",[nl]:"ACESFilmic",[Fh]:"AgX",[Oh]:"Neutral",[Uh]:"Custom"};function Zg(r,t){const e=Yg[t];return e===void 0?(Wt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Dr=new z;function Kg(){oe.getLuminanceCoefficients(Dr);const r=Dr.x.toFixed(4),t=Dr.y.toFixed(4),e=Dr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $g(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gs).join(`
`)}function Jg(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Qg(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Gs(r){return r!==""}function Hc(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Vc(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const jg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ka(r){return r.replace(jg,t_)}function t_(r,t){const e=te[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Ka(e)}const e_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wc(r){return r.replace(e_,n_)}function n_(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function qc(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const i_={[Hs]:"SHADOWMAP_TYPE_PCF",[ks]:"SHADOWMAP_TYPE_VSM"};function s_(r){return i_[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const r_={[Ks]:"ENVMAP_MODE_REFRACTION"};function o_(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":r_[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const a_={[Lh]:"ENVMAP_BLENDING_MULTIPLY",[gd]:"ENVMAP_BLENDING_MIX",[_d]:"ENVMAP_BLENDING_ADD"};function l_(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":a_[r.combine]||"ENVMAP_BLENDING_NONE"}function c_(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=s_(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=o_(e),d=l_(e),h=$g(e),f=Jg(s),p=i.createProgram();let v,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Gs).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Gs).join(`
`),m.length>0&&(m+=`
`)):(v=[qc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),m=[qc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ri?"#define TONE_MAPPING":"",e.toneMapping!==ri?te.tonemapping_pars_fragment:"",e.toneMapping!==ri?Zg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,Xg("linearToOutputTexel",e.outputColorSpace),Kg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gs).join(`
`)),o=Ka(o),o=Hc(o,e),o=Vc(o,e),a=Ka(a),a=Hc(a,e),a=Vc(a,e),o=Wc(o),a=Wc(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,v=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",e.glslVersion===Xl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=g+v+o,x=g+m+a,M=zc(i,i.VERTEX_SHADER,_),E=zc(i,i.FRAGMENT_SHADER,x);i.attachShader(p,M),i.attachShader(p,E),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function b(A){if(r.debug.checkShaderErrors){const I=i.getProgramInfoLog(p)||"",N=i.getShaderInfoLog(M)||"",L=i.getShaderInfoLog(E)||"",w=I.trim(),D=N.trim(),F=L.trim();let k=!0,Y=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(k=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,p,M,E);else{const W=Gc(i,M,"vertex"),O=Gc(i,E,"fragment");ce("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+w+`
`+W+`
`+O)}else w!==""?Wt("WebGLProgram: Program Info Log:",w):(D===""||F==="")&&(Y=!1);Y&&(A.diagnostics={runnable:k,programLog:w,vertexShader:{log:D,prefix:v},fragmentShader:{log:F,prefix:m}})}i.deleteShader(M),i.deleteShader(E),y=new Zr(i,p),S=Qg(i,p)}let y;this.getUniforms=function(){return y===void 0&&b(this),y};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(p,Hg)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Vg++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=E,this}let h_=0;class u_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new d_(t),e.set(t,n)),n}}class d_{constructor(t){this.id=h_++,this.code=t,this.usedTimes=0}}function f_(r){return r===Bi||r===Kr||r===$r}function p_(r,t,e,n,i,s){const o=new fl,a=new u_,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(y){return l.add(y),y===0?"uv":`uv${y}`}function p(y,S,P,A,I,N){const L=A.fog,w=I.geometry,D=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?A.environment:null,F=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,k=t.get(y.envMap||D,F),Y=h[y.type];let W=n.precision;y.precision!==null&&(W=n.getMaxPrecision(y.precision),W!==y.precision&&Wt("WebGLProgram.getParameters:",y.precision,"not supported, using",W,"instead."));const O=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,H=O!==void 0?O.length:0;let X=0;w.morphAttributes.position!==void 0&&(X=1),w.morphAttributes.normal!==void 0&&(X=2),w.morphAttributes.color!==void 0&&(X=3);let ot,q,Q,lt;if(Y){const Et=Vn[Y];ot=Et.vertexShader,q=Et.fragmentShader}else{ot=y.vertexShader,q=y.fragmentShader;const Et=a.getVertexShaderStage(y),_e=a.getFragmentShaderStage(y);a.update(y,Et,_e),Q=Et.id,lt=_e.id}const et=r.getRenderTarget(),st=r.state.buffers.depth.getReversed(),bt=I.isInstancedMesh===!0,Pt=I.isBatchedMesh===!0,ft=!!y.map,Bt=!!y.matcap,Nt=!!k,Lt=Nt&&k.isPMREMTexture===!0,Vt=!!y.aoMap,Kt=!!y.lightMap,ye=!!y.bumpMap&&y.wireframe===!1,Xt=!!y.normalMap,we=!!y.displacementMap,ie=!!y.emissiveMap,nt=!!y.metalnessMap,ct=!!y.roughnessMap,ut=y.anisotropy>0,B=y.clearcoat>0,kt=y.diffuseRoughness>0,Qt=y.dispersion>0,Me=y.retroreflectivity>0,xt=y.iridescence>0,$t=y.sheen>0,Rt=y.transmission>0,Ht=ut&&!!y.anisotropyMap,U=B&&!!y.clearcoatMap,T=B&&!!y.clearcoatNormalMap,Z=B&&!!y.clearcoatRoughnessMap,ht=kt&&!!y.diffuseRoughnessMap,at=xt&&!!y.iridescenceMap,mt=xt&&!!y.iridescenceThicknessMap,Mt=$t&&!!y.sheenColorMap,tt=$t&&!!y.sheenRoughnessMap,it=!!y.specularMap,_t=!!y.specularColorMap,G=!!y.specularIntensityMap,rt=Rt&&!!y.transmissionMap,j=Rt&&!!y.thicknessMap,vt=!!y.gradientMap,pt=!!y.alphaMap,gt=y.alphaTest>0,zt=!!y.alphaHash,jt=!!y.extensions;let dt=ri;y.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(dt=r.toneMapping);const Gt=Lt?k.isCompressedCubeTexture?k.image[0].mipmaps:k.mipmaps:null,Jt={shaderID:Y,shaderType:y.type,shaderName:y.name,vertexShader:ot,fragmentShader:q,defines:y.defines,customVertexShaderID:Q,customFragmentShaderID:lt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:W,batching:Pt,batchingColor:Pt&&I._colorsTexture!==null,instancing:bt,instancingColor:bt&&I.instanceColor!==null,instancingMorph:bt&&I.morphTexture!==null,outputColorSpace:et===null?r.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:oe.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:ft,matcap:Bt,envMap:Nt,envMapMode:Nt&&k.mapping,envMapPMREM:Lt,envMapMaxLod:Lt?Gt.length-1:null,envMapSize:Lt?Gt[0].width:null,aoMap:Vt,lightMap:Kt,bumpMap:ye,normalMap:Xt,displacementMap:we,emissiveMap:ie,normalMapObjectSpace:Xt&&y.normalMapType===yd,normalMapTangentSpace:Xt&&y.normalMapType===qa,packedNormalMap:Xt&&y.normalMapType===qa&&f_(y.normalMap.format),metalnessMap:nt,roughnessMap:ct,anisotropy:ut,anisotropyMap:Ht,clearcoat:B,clearcoatMap:U,clearcoatNormalMap:T,clearcoatRoughnessMap:Z,diffuseRoughness:kt,diffuseRoughnessMap:ht,dispersion:Qt,retroreflection:Me,iridescence:xt,iridescenceMap:at,iridescenceThicknessMap:mt,sheen:$t,sheenColorMap:Mt,sheenRoughnessMap:tt,specularMap:it,specularColorMap:_t,specularIntensityMap:G,transmission:Rt,transmissionMap:rt,thicknessMap:j,gradientMap:vt,opaque:y.transparent===!1&&y.blending===Vs&&y.alphaToCoverage===!1,alphaMap:pt,alphaTest:gt,alphaHash:zt,combine:y.combine,mapUv:ft&&f(y.map.channel),aoMapUv:Vt&&f(y.aoMap.channel),lightMapUv:Kt&&f(y.lightMap.channel),bumpMapUv:ye&&f(y.bumpMap.channel),normalMapUv:Xt&&f(y.normalMap.channel),displacementMapUv:we&&f(y.displacementMap.channel),emissiveMapUv:ie&&f(y.emissiveMap.channel),metalnessMapUv:nt&&f(y.metalnessMap.channel),roughnessMapUv:ct&&f(y.roughnessMap.channel),anisotropyMapUv:Ht&&f(y.anisotropyMap.channel),clearcoatMapUv:U&&f(y.clearcoatMap.channel),clearcoatNormalMapUv:T&&f(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&f(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ht&&f(y.diffuseRoughnessMap.channel),iridescenceMapUv:at&&f(y.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&f(y.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&f(y.sheenColorMap.channel),sheenRoughnessMapUv:tt&&f(y.sheenRoughnessMap.channel),specularMapUv:it&&f(y.specularMap.channel),specularColorMapUv:_t&&f(y.specularColorMap.channel),specularIntensityMapUv:G&&f(y.specularIntensityMap.channel),transmissionMapUv:rt&&f(y.transmissionMap.channel),thicknessMapUv:j&&f(y.thicknessMap.channel),alphaMapUv:pt&&f(y.alphaMap.channel),vertexTangents:!!w.attributes.tangent&&(Xt||ut),vertexNormals:!!w.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!w.attributes.uv&&(ft||pt),fog:!!L,useFog:y.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||w.attributes.normal===void 0&&Xt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:st,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:w.attributes.position!==void 0,morphTargets:w.morphAttributes.position!==void 0,morphNormals:w.morphAttributes.normal!==void 0,morphColors:w.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:X,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:N.filter(Et=>Et.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:dt,decodeVideoTexture:ft&&y.map.isVideoTexture===!0&&oe.getTransfer(y.map.colorSpace)===ve,decodeVideoTextureEmissive:ie&&y.emissiveMap.isVideoTexture===!0&&oe.getTransfer(y.emissiveMap.colorSpace)===ve,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===je,flipSided:y.side===tn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:jt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(jt&&y.extensions.multiDraw===!0||Pt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Jt.vertexUv1s=l.has(1),Jt.vertexUv2s=l.has(2),Jt.vertexUv3s=l.has(3),l.clear(),Jt}function v(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)S.push(P),S.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(m(S,y),g(S,y),S.push(r.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function m(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapPMREM),y.push(S.envMapMaxLod),y.push(S.envMapSize),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.diffuseRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.numSunLights),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numSunLightShadows),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.numLightProbeGrids),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function g(y,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function _(y){const S=h[y.type];let P;if(S){const A=Vn[S];P=If.clone(A.uniforms)}else P=y.uniforms;return P}function x(y,S){let P=u.get(S);return P!==void 0?++P.usedTimes:(P=new c_(r,S,y,i),c.push(P),u.set(S,P)),P}function M(y){if(--y.usedTimes===0){const S=c.indexOf(y);c[S]=c[c.length-1],c.pop(),u.delete(y.cacheKey),y.destroy()}}function E(y){a.remove(y)}function b(){a.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:_,acquireProgram:x,releaseProgram:M,releaseShaderCache:E,programs:c,dispose:b}}function m_(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function g_(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Xc(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Yc(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,p,v,m,g){let _=r[t];return _===void 0?(_={id:h.id,object:h,geometry:f,material:p,materialVariant:o(h),groupOrder:v,renderOrder:h.renderOrder,z:m,group:g},r[t]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=p,_.materialVariant=o(h),_.groupOrder=v,_.renderOrder=h.renderOrder,_.z=m,_.group=g),t++,_}function l(h,f,p,v,m,g,_){_.reversedDepth===!0&&(m=-m);const x=a(h,f,p,v,m,g);p.transmission>0?n.push(x):p.transparent===!0?i.push(x):e.push(x)}function c(h,f,p,v,m,g){const _=a(h,f,p,v,m,g);p.transmission>0?n.unshift(_):p.transparent===!0?i.unshift(_):e.unshift(_)}function u(h,f){e.length>1&&e.sort(h||g_),n.length>1&&n.sort(f||Xc),i.length>1&&i.sort(f||Xc)}function d(){for(let h=t,f=r.length;h<f;h++){const p=r[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:u}}function __(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new Yc,r.set(n,[o])):i>=s.length?(o=new Yc,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function v_(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new z,color:new qt};break;case"SpotLight":e={position:new z,direction:new z,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new z,halfWidth:new z,halfHeight:new z};break}return r[t.id]=e,e}}}function x_(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let y_=0;function M_(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function S_(r){const t=new v_,e=x_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);const i=new z,s=new me,o=new me;function a(c){let u=0,d=0,h=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let f=0,p=0,v=0,m=0,g=0,_=0,x=0,M=0,E=0,b=0,y=0,S=0,P=0,A=0;c.sort(M_);for(let N=0,L=c.length;N<L;N++){const w=c[N],D=w.color,F=w.intensity,k=w.distance;let Y=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===Bi?Y=w.shadow.map.texture:Y=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)u+=D.r*F,d+=D.g*F,h+=D.b*F;else if(w.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(w.sh.coefficients[W],F);A++}else if(w.isSunLight){const W=t.get(w);if(W.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const O=w.shadow,H=e.get(w);H.shadowIntensity=O.intensity,H.shadowBias=O.bias,H.shadowNormalBias=O.normalBias,H.shadowRadius=O.radius,H.shadowMapSize.copy(O.mapSize).multiply(O.getFrameExtents()),n.sunShadow[p]=H,n.sunShadowMap[p]=Y;const X=O.getViewportCount();for(let ot=0;ot<X;ot++)n.sunShadowMatrix[v+ot]=O.getMatrix(ot),n.sunShadowCascade[v+ot]=O._cascadeData[ot];v+=X,p++}n.sun[f]=W,f++}else if(w.isDirectionalLight){const W=t.get(w);if(W.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const O=w.shadow,H=e.get(w);H.shadowIntensity=O.intensity,H.shadowBias=O.bias,H.shadowNormalBias=O.normalBias,H.shadowRadius=O.radius,H.shadowMapSize=O.mapSize,n.directionalShadow[m]=H,n.directionalShadowMap[m]=Y,n.directionalShadowMatrix[m]=w.shadow.matrix,E++}n.directional[m]=W,m++}else if(w.isSpotLight){const W=t.get(w);W.position.setFromMatrixPosition(w.matrixWorld),W.color.copy(D).multiplyScalar(F),W.distance=k,W.coneCos=Math.cos(w.angle),W.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),W.decay=w.decay,n.spot[_]=W;const O=w.shadow;if(w.map&&(n.spotLightMap[S]=w.map,S++,O.updateMatrices(w),w.castShadow&&P++),n.spotLightMatrix[_]=O.matrix,w.castShadow){const H=e.get(w);H.shadowIntensity=O.intensity,H.shadowBias=O.bias,H.shadowNormalBias=O.normalBias,H.shadowRadius=O.radius,H.shadowMapSize=O.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=Y,y++}_++}else if(w.isRectAreaLight){const W=t.get(w);W.color.copy(D).multiplyScalar(F),W.halfWidth.set(w.width*.5,0,0),W.halfHeight.set(0,w.height*.5,0),n.rectArea[x]=W,x++}else if(w.isPointLight){const W=t.get(w);if(W.color.copy(w.color).multiplyScalar(w.intensity),W.distance=w.distance,W.decay=w.decay,w.castShadow){const O=w.shadow,H=e.get(w);H.shadowIntensity=O.intensity,H.shadowBias=O.bias,H.shadowNormalBias=O.normalBias,H.shadowRadius=O.radius,H.shadowMapSize=O.mapSize,H.shadowCameraNear=O.camera.near,H.shadowCameraFar=O.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=w.shadow.matrix,b++}n.point[g]=W,g++}else if(w.isHemisphereLight){const W=t.get(w);W.skyColor.copy(w.color).multiplyScalar(F),W.groundColor.copy(w.groundColor).multiplyScalar(F),n.hemi[M]=W,M++}}x>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=wt.LTC_FLOAT_1,n.rectAreaLTC2=wt.LTC_FLOAT_2):(n.rectAreaLTC1=wt.LTC_HALF_1,n.rectAreaLTC2=wt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const I=n.hash;(I.sunLength!==f||I.directionalLength!==m||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==x||I.hemiLength!==M||I.numSunShadows!==p||I.numDirectionalShadows!==E||I.numPointShadows!==b||I.numSpotShadows!==y||I.numSpotMaps!==S||I.numLightProbes!==A)&&(n.sun.length=f,n.directional.length=m,n.spot.length=_,n.rectArea.length=x,n.point.length=g,n.hemi.length=M,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=y,n.spotShadowMap.length=y,n.spotLightMatrix.length=y+S-P,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=A,I.sunLength=f,I.directionalLength=m,I.pointLength=g,I.spotLength=_,I.rectAreaLength=x,I.hemiLength=M,I.numSunShadows=p,I.numDirectionalShadows=E,I.numPointShadows=b,I.numSpotShadows=y,I.numSpotMaps=S,I.numLightProbes=A,n.version=y_++)}function l(c,u){let d=0,h=0,f=0,p=0,v=0,m=0;const g=u.matrixWorldInverse;for(let _=0,x=c.length;_<x;_++){const M=c[_];if(M.isSunLight){const E=n.sun[d];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(g),d++}else if(M.isDirectionalLight){const E=n.directional[h];E.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(g),h++}else if(M.isSpotLight){const E=n.spot[p];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(g),p++}else if(M.isRectAreaLight){const E=n.rectArea[v];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(g),o.identity(),s.copy(M.matrixWorld),s.premultiply(g),o.extractRotation(s),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),v++}else if(M.isPointLight){const E=n.point[f];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(g),f++}else if(M.isHemisphereLight){const E=n.hemi[m];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function Zc(r){const t=new S_(r),e=[],n=[],i=[];function s(d){u.camera=d,e.length=0,n.length=0,i.length=0}function o(d){d.isLightProbeGrid?i.push(d):e.push(d)}function a(d){n.push(d)}function l(){t.setup(e),i.sort((d,h)=>d.priority-h.priority||d.id-h.id)}function c(d){t.setupView(e,d)}const u={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function b_(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new Zc(r),t.set(i,[a])):s>=o.length?(a=new Zc(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const E_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w_=`uniform sampler2D shadow_pass;
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
}`,T_=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],A_=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Kc=new me,Is=new z,Zo=new z;function R_(r,t,e){let n=new tr;const i=new At,s=new At,o=new Ae,a=new Ff,l=new Of,c={},u=e.maxTextureSize,d={[bi]:tn,[tn]:bi,[je]:je},h=new wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:E_,fragmentShader:w_}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const p=new De;p.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new pe(p,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hs;let g=this.type;this.render=function(b,y,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===Ju&&(Wt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Hs);const P=r.getRenderTarget(),A=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),N=r.state;N.setBlending(hs),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const L=g!==this.type;L&&y.traverse(function(w){w.material&&(Array.isArray(w.material)?w.material.forEach(D=>D.needsUpdate=!0):w.material.needsUpdate=!0)});for(let w=0,D=b.length;w<D;w++){const F=b[w],k=F.shadow;if(k===void 0){Wt("WebGLShadowMap:",F,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const Y=k.getFrameExtents();i.multiply(Y),s.copy(k.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/Y.x),i.x=s.x*Y.x,k.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/Y.y),i.y=s.y*Y.y,k.mapSize.y=s.y));const W=r.state.buffers.depth.getReversed();if(k.camera._reversedDepth=W,k.map===null||L===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===ks){if(F.isPointLight){Wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Mn(i.x,i.y,{format:Bi,type:Sn,minFilter:hn,magFilter:hn,generateMipmaps:!1}),k.map.texture.name=F.name+".shadowMap",k.map.depthTexture=new vs(i.x,i.y,Ln),k.map.depthTexture.name=F.name+".shadowMapDepth",k.map.depthTexture.format=Ei,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=qe,k.map.depthTexture.magFilter=qe}else F.isPointLight?(k.map=new El(i.x),k.map.depthTexture=new ru(i.x,qn)):(k.map=new Mn(i.x,i.y),k.map.depthTexture=new vs(i.x,i.y,qn)),k.map.depthTexture.name=F.name+".shadowMap",k.map.depthTexture.format=Ei,this.type===Hs?(k.map.depthTexture.compareFunction=W?Xh:qh,k.map.depthTexture.minFilter=hn,k.map.depthTexture.magFilter=hn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=qe,k.map.depthTexture.magFilter=qe);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==i.x||k.map.height!==i.y)&&k.map.setSize(i.x,i.y);const O=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();F.isPointLight!==!0&&k.updateMatrices(F,S);const H=(k.camera.layers.mask&4294967294)!==0?k.camera.layers:S.layers;for(let X=0;X<O;X++){const ot=k.getCamera(X);if(F.isPointLight){const q=k.camera,Q=k.matrix,lt=F.distance||q.far;lt!==q.far&&(q.far=lt,q.updateProjectionMatrix()),Is.setFromMatrixPosition(F.matrixWorld),q.position.copy(Is),Zo.copy(q.position),Zo.add(T_[X]),q.up.copy(A_[X]),q.lookAt(Zo),q.updateMatrixWorld(),Q.makeTranslation(-Is.x,-Is.y,-Is.z),Kc.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Kc,q.coordinateSystem,q.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)r.setRenderTarget(k.map,X),r.clear();else{X===0&&(r.setRenderTarget(k.map),r.clear());const q=k.getViewport(X);o.set(s.x*q.x,s.y*q.y,s.x*q.z,s.y*q.w),N.viewport(o)}n=k.getFrustum(X),M(y,S,ot,F,H,this.type)}k.isPointLightShadow!==!0&&this.type===ks&&_(k,S),k.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(P,A,I)};function _(b,y){const S=t.update(v);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new Mn(i.x,i.y,{format:Bi,type:Sn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(y,null,S,h,v,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(y,null,S,f,v,null)}function x(b,y,S,P){let A=null;const I=S.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)A=I;else if(A=S.isPointLight===!0?l:a,r.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){const N=A.uuid,L=y.uuid;let w=c[N];w===void 0&&(w={},c[N]=w);let D=w[L];D===void 0&&(D=A.clone(),w[L]=D,y.addEventListener("dispose",E)),A=D}if(A.visible=y.visible,A.wireframe=y.wireframe,P===ks?A.side=y.shadowSide!==null?y.shadowSide:y.side:A.side=y.shadowSide!==null?y.shadowSide:d[y.side],A.alphaMap=y.alphaMap,A.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,A.map=y.map,A.clipShadows=y.clipShadows,A.clippingPlanes=y.clippingPlanes,A.clipIntersection=y.clipIntersection,A.displacementMap=y.displacementMap,A.displacementScale=y.displacementScale,A.displacementBias=y.displacementBias,A.wireframeLinewidth=y.wireframeLinewidth,A.linewidth=y.linewidth,S.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const N=r.properties.get(A);N.light=S}return A}function M(b,y,S,P,A,I){if(b.visible===!1)return;if(b.layers.test(A)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&I===ks)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,b.matrixWorld);const w=t.update(b),D=b.material;if(Array.isArray(D)){const F=w.groups;for(let k=0,Y=F.length;k<Y;k++){const W=F[k],O=D[W.materialIndex];if(O&&O.visible){const H=x(b,O,P,I);b.onBeforeShadow(r,b,y,S,w,H,W),r.renderBufferDirect(S,null,w,H,b,W),b.onAfterShadow(r,b,y,S,w,H,W)}}}else if(D.visible){const F=x(b,D,P,I);b.onBeforeShadow(r,b,y,S,w,F,null),r.renderBufferDirect(S,null,w,F,b,null),b.onAfterShadow(r,b,y,S,w,F,null)}}const L=b.children;for(let w=0,D=L.length;w<D;w++)M(L[w],y,S,P,A,I)}function E(b){b.target.removeEventListener("dispose",E);for(const S in c){const P=c[S],A=b.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}function C_(r,t){function e(){let G=!1;const rt=new Ae;let j=null;const vt=new Ae(0,0,0,0);return{setMask:function(pt){j!==pt&&!G&&(r.colorMask(pt,pt,pt,pt),j=pt)},setLocked:function(pt){G=pt},setClear:function(pt,gt,zt,jt,dt){dt===!0&&(pt*=jt,gt*=jt,zt*=jt),rt.set(pt,gt,zt,jt),vt.equals(rt)===!1&&(r.clearColor(pt,gt,zt,jt),vt.copy(rt))},reset:function(){G=!1,j=null,vt.set(-1,0,0,0)}}}function n(){let G=!1,rt=!1,j=null,vt=null,pt=null;return{setReversed:function(gt){if(rt!==gt){const zt=t.get("EXT_clip_control");gt?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT),rt=gt;const jt=pt;pt=null,this.setClear(jt)}},getReversed:function(){return rt},setTest:function(gt){gt?st(r.DEPTH_TEST):bt(r.DEPTH_TEST)},setMask:function(gt){j!==gt&&!G&&(r.depthMask(gt),j=gt)},setFunc:function(gt){if(rt&&(gt=Ld[gt]),vt!==gt){switch(gt){case aa:r.depthFunc(r.NEVER);break;case la:r.depthFunc(r.ALWAYS);break;case ca:r.depthFunc(r.LESS);break;case Zs:r.depthFunc(r.LEQUAL);break;case ha:r.depthFunc(r.EQUAL);break;case ua:r.depthFunc(r.GEQUAL);break;case da:r.depthFunc(r.GREATER);break;case fa:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}vt=gt}},setLocked:function(gt){G=gt},setClear:function(gt){pt!==gt&&(pt=gt,rt&&(gt=1-gt),r.clearDepth(gt))},reset:function(){G=!1,j=null,vt=null,pt=null,rt=!1}}}function i(){let G=!1,rt=null,j=null,vt=null,pt=null,gt=null,zt=null,jt=null,dt=null;return{setTest:function(Gt){G||(Gt?st(r.STENCIL_TEST):bt(r.STENCIL_TEST))},setMask:function(Gt){rt!==Gt&&!G&&(r.stencilMask(Gt),rt=Gt)},setFunc:function(Gt,Jt,Et){(j!==Gt||vt!==Jt||pt!==Et)&&(r.stencilFunc(Gt,Jt,Et),j=Gt,vt=Jt,pt=Et)},setOp:function(Gt,Jt,Et){(gt!==Gt||zt!==Jt||jt!==Et)&&(r.stencilOp(Gt,Jt,Et),gt=Gt,zt=Jt,jt=Et)},setLocked:function(Gt){G=Gt},setClear:function(Gt){dt!==Gt&&(r.clearStencil(Gt),dt=Gt)},reset:function(){G=!1,rt=null,j=null,vt=null,pt=null,gt=null,zt=null,jt=null,dt=null}}}const s=new e,o=new n,a=new i;let l={};const c=new WeakMap;let u={},d={},h={},f=new WeakMap,p=[],v=null,m=!1,g=null,_=null,x=null,M=null,E=null,b=null,y=null,S=new qt(0,0,0),P=0,A=!1,I=null,N=null,L=null,w=null,D=null;const F=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,Y=0;const W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(W)[1]),k=Y>=1):W.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),k=Y>=2);let O=null,H={};const X=r.getParameter(r.SCISSOR_BOX),ot=r.getParameter(r.VIEWPORT),q=new Ae().fromArray(X),Q=new Ae().fromArray(ot);function lt(G,rt,j,vt){const pt=new Uint8Array(4),gt=r.createTexture();r.bindTexture(G,gt),r.texParameteri(G,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(G,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let zt=0;zt<j;zt++)G===r.TEXTURE_3D||G===r.TEXTURE_2D_ARRAY?r.texImage3D(rt,0,r.RGBA,1,1,vt,0,r.RGBA,r.UNSIGNED_BYTE,pt):r.texImage2D(rt+zt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,pt);return gt}const et={};et[r.TEXTURE_2D]=lt(r.TEXTURE_2D,r.TEXTURE_2D,1),et[r.TEXTURE_CUBE_MAP]=lt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[r.TEXTURE_2D_ARRAY]=lt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),et[r.TEXTURE_3D]=lt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(r.DEPTH_TEST),o.setFunc(Zs),ye(!1),Xt(Hl),st(r.CULL_FACE),Vt(hs);function st(G){u[G]!==!0&&(r.enable(G),u[G]=!0)}function bt(G){u[G]!==!1&&(r.disable(G),u[G]=!1)}function Pt(G,rt){return h[G]!==rt?(r.bindFramebuffer(G,rt),h[G]=rt,G===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=rt),G===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=rt),!0):!1}function ft(G,rt){let j=p,vt=!1;if(G){j=f.get(rt),j===void 0&&(j=[],f.set(rt,j));const pt=G.textures;if(j.length!==pt.length||j[0]!==r.COLOR_ATTACHMENT0){for(let gt=0,zt=pt.length;gt<zt;gt++)j[gt]=r.COLOR_ATTACHMENT0+gt;j.length=pt.length,vt=!0}}else j[0]!==r.BACK&&(j[0]=r.BACK,vt=!0);vt&&r.drawBuffers(j)}function Bt(G){return v!==G?(r.useProgram(G),v=G,!0):!1}const Nt={[ss]:r.FUNC_ADD,[ju]:r.FUNC_SUBTRACT,[td]:r.FUNC_REVERSE_SUBTRACT};Nt[ed]=r.MIN,Nt[nd]=r.MAX;const Lt={[id]:r.ZERO,[sd]:r.ONE,[rd]:r.SRC_COLOR,[Ch]:r.SRC_ALPHA,[ud]:r.SRC_ALPHA_SATURATE,[cd]:r.DST_COLOR,[ad]:r.DST_ALPHA,[od]:r.ONE_MINUS_SRC_COLOR,[Ph]:r.ONE_MINUS_SRC_ALPHA,[hd]:r.ONE_MINUS_DST_COLOR,[ld]:r.ONE_MINUS_DST_ALPHA,[dd]:r.CONSTANT_COLOR,[fd]:r.ONE_MINUS_CONSTANT_COLOR,[pd]:r.CONSTANT_ALPHA,[md]:r.ONE_MINUS_CONSTANT_ALPHA};function Vt(G,rt,j,vt,pt,gt,zt,jt,dt,Gt){if(G===hs){m===!0&&(bt(r.BLEND),m=!1);return}if(m===!1&&(st(r.BLEND),m=!0),G!==Qu){if(G!==g||Gt!==A){if((_!==ss||E!==ss)&&(r.blendEquation(r.FUNC_ADD),_=ss,E=ss),Gt)switch(G){case Vs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Vl:r.blendFunc(r.ONE,r.ONE);break;case Wl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ql:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:ce("WebGLState: Invalid blending: ",G);break}else switch(G){case Vs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Vl:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Wl:ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ql:ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ce("WebGLState: Invalid blending: ",G);break}x=null,M=null,b=null,y=null,S.set(0,0,0),P=0,g=G,A=Gt}return}pt=pt||rt,gt=gt||j,zt=zt||vt,(rt!==_||pt!==E)&&(r.blendEquationSeparate(Nt[rt],Nt[pt]),_=rt,E=pt),(j!==x||vt!==M||gt!==b||zt!==y)&&(r.blendFuncSeparate(Lt[j],Lt[vt],Lt[gt],Lt[zt]),x=j,M=vt,b=gt,y=zt),(jt.equals(S)===!1||dt!==P)&&(r.blendColor(jt.r,jt.g,jt.b,dt),S.copy(jt),P=dt),g=G,A=!1}function Kt(G,rt){G.side===je?bt(r.CULL_FACE):st(r.CULL_FACE);let j=G.side===tn;rt&&(j=!j),ye(j),G.blending===Vs&&G.transparent===!1?Vt(hs):Vt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),s.setMask(G.colorWrite);const vt=G.stencilWrite;a.setTest(vt),vt&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),ie(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?st(r.SAMPLE_ALPHA_TO_COVERAGE):bt(r.SAMPLE_ALPHA_TO_COVERAGE)}function ye(G){I!==G&&(G?r.frontFace(r.CW):r.frontFace(r.CCW),I=G)}function Xt(G){G!==Ku?(st(r.CULL_FACE),G!==N&&(G===Hl?r.cullFace(r.BACK):G===$u?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):bt(r.CULL_FACE),N=G}function we(G){G!==L&&(k&&r.lineWidth(G),L=G)}function ie(G,rt,j){G?(st(r.POLYGON_OFFSET_FILL),(w!==rt||D!==j)&&(w=rt,D=j,o.getReversed()&&(rt=-rt,j=-j),r.polygonOffset(rt,j))):bt(r.POLYGON_OFFSET_FILL)}function nt(G){G?st(r.SCISSOR_TEST):bt(r.SCISSOR_TEST)}function ct(G){G===void 0&&(G=r.TEXTURE0+F-1),O!==G&&(r.activeTexture(G),O=G)}function ut(G,rt,j){j===void 0&&(O===null?j=r.TEXTURE0+F-1:j=O);let vt=H[j];vt===void 0&&(vt={type:void 0,texture:void 0},H[j]=vt),(vt.type!==G||vt.texture!==rt)&&(O!==j&&(r.activeTexture(j),O=j),r.bindTexture(G,rt||et[G]),vt.type=G,vt.texture=rt)}function B(){const G=H[O];G!==void 0&&G.type!==void 0&&(r.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function kt(){try{r.compressedTexImage2D(...arguments)}catch(G){ce("WebGLState:",G)}}function Qt(){try{r.compressedTexImage3D(...arguments)}catch(G){ce("WebGLState:",G)}}function Me(){try{r.texSubImage2D(...arguments)}catch(G){ce("WebGLState:",G)}}function xt(){try{r.texSubImage3D(...arguments)}catch(G){ce("WebGLState:",G)}}function $t(){try{r.compressedTexSubImage2D(...arguments)}catch(G){ce("WebGLState:",G)}}function Rt(){try{r.compressedTexSubImage3D(...arguments)}catch(G){ce("WebGLState:",G)}}function Ht(){try{r.texStorage2D(...arguments)}catch(G){ce("WebGLState:",G)}}function U(){try{r.texStorage3D(...arguments)}catch(G){ce("WebGLState:",G)}}function T(){try{r.texImage2D(...arguments)}catch(G){ce("WebGLState:",G)}}function Z(){try{r.texImage3D(...arguments)}catch(G){ce("WebGLState:",G)}}function ht(G){return d[G]!==void 0?d[G]:r.getParameter(G)}function at(G,rt){d[G]!==rt&&(r.pixelStorei(G,rt),d[G]=rt)}function mt(G){q.equals(G)===!1&&(r.scissor(G.x,G.y,G.z,G.w),q.copy(G))}function Mt(G){Q.equals(G)===!1&&(r.viewport(G.x,G.y,G.z,G.w),Q.copy(G))}function tt(G,rt){let j=c.get(rt);j===void 0&&(j=new WeakMap,c.set(rt,j));let vt=j.get(G);vt===void 0&&(vt=r.getUniformBlockIndex(rt,G.name),r.uniformBlockBinding(rt,vt,vt),j.set(G,vt))}function it(G,rt,j){const pt=c.get(rt).get(G);l[pt]!==j&&(r.bindBufferBase(r.UNIFORM_BUFFER,pt,j),l[pt]=j)}function _t(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),u={},d={},O=null,H={},h={},l={},f=new WeakMap,p=[],v=null,m=!1,g=null,_=null,x=null,M=null,E=null,b=null,y=null,S=new qt(0,0,0),P=0,A=!1,I=null,N=null,L=null,w=null,D=null,q.set(0,0,r.canvas.width,r.canvas.height),Q.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:st,disable:bt,bindFramebuffer:Pt,drawBuffers:ft,useProgram:Bt,setBlending:Vt,setMaterial:Kt,setFlipSided:ye,setCullFace:Xt,setLineWidth:we,setPolygonOffset:ie,setScissorTest:nt,activeTexture:ct,bindTexture:ut,unbindTexture:B,compressedTexImage2D:kt,compressedTexImage3D:Qt,texImage2D:T,texImage3D:Z,pixelStorei:at,getParameter:ht,updateUBOMapping:tt,uniformBlockBinding:it,texStorage2D:Ht,texStorage3D:U,texSubImage2D:Me,texSubImage3D:xt,compressedTexSubImage2D:$t,compressedTexSubImage3D:Rt,scissor:mt,viewport:Mt,reset:_t}}function P_(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new At,u=new WeakMap,d=new Set;let h;const f=new WeakMap,p=new Set,v=new FinalizationRegistry(U=>p.delete(U));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(U,T){return m?new OffscreenCanvas(U,T):Qs("canvas")}function _(U,T,Z){let ht=1;const at=Ht(U);if((at.width>Z||at.height>Z)&&(ht=Z/Math.max(at.width,at.height)),ht<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const mt=Math.floor(ht*at.width),Mt=Math.floor(ht*at.height);h===void 0&&(h=g(mt,Mt));const tt=T?g(mt,Mt):h;return tt.width=mt,tt.height=Mt,tt.getContext("2d").drawImage(U,0,0,mt,Mt),Wt("WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+mt+"x"+Mt+")."),tt}else return"data"in U&&Wt("WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),U;return U}function x(U){return U.generateMipmaps}function M(U){r.generateMipmap(U)}function E(U){return U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?r.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function b(U,T,Z,ht,at,mt=!1){if(U!==null){if(r[U]!==void 0)return r[U];Wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Mt;ht&&(Mt=t.get("EXT_texture_norm16"),Mt||Wt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let tt=T;if(T===r.RED&&(Z===r.FLOAT&&(tt=r.R32F),Z===r.HALF_FLOAT&&(tt=r.R16F),Z===r.UNSIGNED_BYTE&&(tt=r.R8),Z===r.UNSIGNED_SHORT&&Mt&&(tt=Mt.R16_EXT),Z===r.SHORT&&Mt&&(tt=Mt.R16_SNORM_EXT)),T===r.RED_INTEGER&&(Z===r.UNSIGNED_BYTE&&(tt=r.R8UI),Z===r.UNSIGNED_SHORT&&(tt=r.R16UI),Z===r.UNSIGNED_INT&&(tt=r.R32UI),Z===r.BYTE&&(tt=r.R8I),Z===r.SHORT&&(tt=r.R16I),Z===r.INT&&(tt=r.R32I)),T===r.RG&&(Z===r.FLOAT&&(tt=r.RG32F),Z===r.HALF_FLOAT&&(tt=r.RG16F),Z===r.UNSIGNED_BYTE&&(tt=r.RG8),Z===r.UNSIGNED_SHORT&&Mt&&(tt=Mt.RG16_EXT),Z===r.SHORT&&Mt&&(tt=Mt.RG16_SNORM_EXT)),T===r.RG_INTEGER&&(Z===r.UNSIGNED_BYTE&&(tt=r.RG8UI),Z===r.UNSIGNED_SHORT&&(tt=r.RG16UI),Z===r.UNSIGNED_INT&&(tt=r.RG32UI),Z===r.BYTE&&(tt=r.RG8I),Z===r.SHORT&&(tt=r.RG16I),Z===r.INT&&(tt=r.RG32I)),T===r.RGB_INTEGER&&(Z===r.UNSIGNED_BYTE&&(tt=r.RGB8UI),Z===r.UNSIGNED_SHORT&&(tt=r.RGB16UI),Z===r.UNSIGNED_INT&&(tt=r.RGB32UI),Z===r.BYTE&&(tt=r.RGB8I),Z===r.SHORT&&(tt=r.RGB16I),Z===r.INT&&(tt=r.RGB32I)),T===r.RGBA_INTEGER&&(Z===r.UNSIGNED_BYTE&&(tt=r.RGBA8UI),Z===r.UNSIGNED_SHORT&&(tt=r.RGBA16UI),Z===r.UNSIGNED_INT&&(tt=r.RGBA32UI),Z===r.BYTE&&(tt=r.RGBA8I),Z===r.SHORT&&(tt=r.RGBA16I),Z===r.INT&&(tt=r.RGBA32I)),T===r.RGB&&(Z===r.UNSIGNED_SHORT&&Mt&&(tt=Mt.RGB16_EXT),Z===r.SHORT&&Mt&&(tt=Mt.RGB16_SNORM_EXT),Z===r.UNSIGNED_INT_5_9_9_9_REV&&(tt=r.RGB9_E5),Z===r.UNSIGNED_INT_10F_11F_11F_REV&&(tt=r.R11F_G11F_B10F)),T===r.RGBA){const it=mt?Qr:oe.getTransfer(at);Z===r.FLOAT&&(tt=r.RGBA32F),Z===r.HALF_FLOAT&&(tt=r.RGBA16F),Z===r.UNSIGNED_BYTE&&(tt=it===ve?r.SRGB8_ALPHA8:r.RGBA8),Z===r.UNSIGNED_SHORT&&Mt&&(tt=Mt.RGBA16_EXT),Z===r.SHORT&&Mt&&(tt=Mt.RGBA16_SNORM_EXT),Z===r.UNSIGNED_SHORT_4_4_4_4&&(tt=r.RGBA4),Z===r.UNSIGNED_SHORT_5_5_5_1&&(tt=r.RGB5_A1)}return(tt===r.R16F||tt===r.R32F||tt===r.RG16F||tt===r.RG32F||tt===r.RGBA16F||tt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function y(U,T){let Z;return U?T===null||T===qn||T===_s?Z=r.DEPTH24_STENCIL8:T===Ln?Z=r.DEPTH32F_STENCIL8:T===$s&&(Z=r.DEPTH24_STENCIL8,Wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===qn||T===_s?Z=r.DEPTH_COMPONENT24:T===Ln?Z=r.DEPTH_COMPONENT32F:T===$s&&(Z=r.DEPTH_COMPONENT16),Z}function S(U,T){return x(U)===!0||U.isFramebufferTexture&&U.minFilter!==qe&&U.minFilter!==hn?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function P(U){const T=new WeakRef(U);n.get(U).__ref=T,p.add(T),v.register(U,T,T)}function A(U){const T=n.get(U).__ref;T!==void 0&&(p.delete(T),v.unregister(T))}function I(U){L(U.target)}function N(U){w(U.target)}function L(U){U.removeEventListener("dispose",I),A(U),F(U),U.isVideoTexture&&u.delete(U),U.isHTMLTexture&&d.delete(U)}function w(U){U.removeEventListener("dispose",N),A(U),Y(U)}function D(){for(const U of p){const T=U.deref();T!==void 0&&(T.isRenderTarget===!0?w(T):L(T))}p.clear(),d.clear()}function F(U){const T=n.get(U);if(T.__webglInit===void 0)return;const Z=U.source,ht=f.get(Z);if(ht){const at=ht[T.__cacheKey];at.usedTimes--,at.usedTimes===0&&k(U),Object.keys(ht).length===0&&f.delete(Z)}n.remove(U)}function k(U){const T=n.get(U);r.deleteTexture(T.__webglTexture);const Z=U.source,ht=f.get(Z);delete ht[T.__cacheKey],o.memory.textures--}function Y(U){const T=n.get(U);T.__depthDisposeCallback&&T.__depthDisposeCallback();const Z=U.depthTexture;if(Z&&Z.renderTarget===U&&L(Z),U.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(T.__webglFramebuffer[at]))for(let mt=0;mt<T.__webglFramebuffer[at].length;mt++)r.deleteFramebuffer(T.__webglFramebuffer[at][mt]);else r.deleteFramebuffer(T.__webglFramebuffer[at]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[at])}else{if(Array.isArray(T.__webglFramebuffer))for(let at=0;at<T.__webglFramebuffer.length;at++)r.deleteFramebuffer(T.__webglFramebuffer[at]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let at=0;at<T.__webglColorRenderbuffer.length;at++)T.__webglColorRenderbuffer[at]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[at]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const ht=U.textures;for(let at=0,mt=ht.length;at<mt;at++){const Mt=n.get(ht[at]);Mt.__webglTexture&&(r.deleteTexture(Mt.__webglTexture),o.memory.textures--),n.remove(ht[at])}n.remove(U)}let W=0;function O(){W=0}function H(){return W}function X(U){W=U}function ot(){const U=W;return U>=i.maxTextures&&Wt("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+i.maxTextures),W+=1,U}function q(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.mipmapsAutoUpdate),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function Q(U,T){const Z=n.get(U);if(U.isVideoTexture&&$t(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&Z.__version!==U.version){const ht=U.image;if(ht===null)Wt("WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)Wt("WebGLRenderer: Texture marked for update but image is incomplete");else{Kt(Z,U,T);return}}else U.isExternalTexture&&(Z.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,Z.__webglTexture,r.TEXTURE0+T)}function lt(U,T){const Z=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Z.__version!==U.version){Kt(Z,U,T);return}else U.isExternalTexture&&(Z.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,Z.__webglTexture,r.TEXTURE0+T)}function et(U,T){const Z=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Z.__version!==U.version){Kt(Z,U,T);return}e.bindTexture(r.TEXTURE_3D,Z.__webglTexture,r.TEXTURE0+T)}function st(U,T){const Z=n.get(U);if(U.version>0&&Z.__version!==U.version){ye(Z,U,T);return}e.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture,r.TEXTURE0+T)}const bt={[gs]:r.REPEAT,[ii]:r.CLAMP_TO_EDGE,[pa]:r.MIRRORED_REPEAT},Pt={[qe]:r.NEAREST,[vd]:r.NEAREST_MIPMAP_NEAREST,[hr]:r.NEAREST_MIPMAP_LINEAR,[hn]:r.LINEAR,[xo]:r.LINEAR_MIPMAP_NEAREST,[xi]:r.LINEAR_MIPMAP_LINEAR},ft={[Sd]:r.NEVER,[Yh]:r.ALWAYS,[bd]:r.LESS,[qh]:r.LEQUAL,[Ed]:r.EQUAL,[Xh]:r.GEQUAL,[wd]:r.GREATER,[Td]:r.NOTEQUAL};function Bt(U,T){if(T.type===Ln&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===hn||T.magFilter===xo||T.magFilter===hr||T.magFilter===xi||T.minFilter===hn||T.minFilter===xo||T.minFilter===hr||T.minFilter===xi)&&Wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,bt[T.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,bt[T.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,bt[T.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,Pt[T.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,Pt[T.minFilter]),T.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,ft[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===qe||T.minFilter!==hr&&T.minFilter!==xi||T.type===Ln&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const Z=t.get("EXT_texture_filter_anisotropic");r.texParameterf(U,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Nt(U,T){let Z=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",I),P(T));const ht=T.source;let at=f.get(ht);at===void 0&&(at={},f.set(ht,at));const mt=q(T);if(mt!==U.__cacheKey){at[mt]===void 0&&(at[mt]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),at[mt].usedTimes++;const Mt=at[U.__cacheKey];Mt!==void 0&&(at[U.__cacheKey].usedTimes--,Mt.usedTimes===0&&k(T)),U.__cacheKey=mt,U.__webglTexture=at[mt].texture}return Z}function Lt(U,T,Z){return Math.floor(Math.floor(U/Z)/T)}function Vt(U,T,Z,ht){const mt=U.updateRanges;if(mt.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,Z,ht,T.data);else{mt.sort((G,rt)=>G.start-rt.start);let Mt=0;for(let G=1;G<mt.length;G++){const rt=mt[Mt],j=mt[G],vt=rt.start+rt.count,pt=Lt(j.start,T.width,4),gt=Lt(rt.start,T.width,4);j.start<=vt+1&&pt===gt&&Lt(j.start+j.count-1,T.width,4)===pt?rt.count=Math.max(rt.count,j.start+j.count-rt.start):(++Mt,mt[Mt]=j)}mt.length=Mt+1;const tt=e.getParameter(r.UNPACK_ROW_LENGTH),it=e.getParameter(r.UNPACK_SKIP_PIXELS),_t=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let G=0,rt=mt.length;G<rt;G++){const j=mt[G],vt=Math.floor(j.start/4),pt=Math.ceil(j.count/4),gt=vt%T.width,zt=Math.floor(vt/T.width),jt=pt,dt=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,gt),e.pixelStorei(r.UNPACK_SKIP_ROWS,zt),e.texSubImage2D(r.TEXTURE_2D,0,gt,zt,jt,dt,Z,ht,T.data)}U.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,tt),e.pixelStorei(r.UNPACK_SKIP_PIXELS,it),e.pixelStorei(r.UNPACK_SKIP_ROWS,_t)}}function Kt(U,T,Z){let ht=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ht=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ht=r.TEXTURE_3D);const at=Nt(U,T),mt=T.source;e.bindTexture(ht,U.__webglTexture,r.TEXTURE0+Z);const Mt=n.get(mt);if(mt.version!==Mt.__version||at===!0){if(e.activeTexture(r.TEXTURE0+Z),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const dt=oe.getPrimaries(oe.workingColorSpace),Gt=T.colorSpace===ni?null:oe.getPrimaries(T.colorSpace),Jt=T.colorSpace===ni||dt===Gt?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt)}e.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment);let it=_(T.image,!1,i.maxTextureSize);it=Rt(T,it);const _t=s.convert(T.format,T.colorSpace),G=s.convert(T.type);let rt=b(T.internalFormat,_t,G,T.normalized,T.colorSpace,T.isVideoTexture);Bt(ht,T);let j;const vt=T.mipmaps,pt=T.isVideoTexture!==!0,gt=Mt.__version===void 0||at===!0,zt=mt.dataReady,jt=S(T,it);if(T.isDepthTexture)rt=y(T.format===yi,T.type),gt&&(pt?e.texStorage2D(r.TEXTURE_2D,1,rt,it.width,it.height):e.texImage2D(r.TEXTURE_2D,0,rt,it.width,it.height,0,_t,G,null));else if(T.isDataTexture)if(vt.length>0){pt&&gt&&e.texStorage2D(r.TEXTURE_2D,jt,rt,vt[0].width,vt[0].height);for(let dt=0,Gt=vt.length;dt<Gt;dt++)j=vt[dt],pt?zt&&e.texSubImage2D(r.TEXTURE_2D,dt,0,0,j.width,j.height,_t,G,j.data):e.texImage2D(r.TEXTURE_2D,dt,rt,j.width,j.height,0,_t,G,j.data);T.generateMipmaps=!1}else pt?(gt&&e.texStorage2D(r.TEXTURE_2D,jt,rt,it.width,it.height),zt&&Vt(T,it,_t,G)):e.texImage2D(r.TEXTURE_2D,0,rt,it.width,it.height,0,_t,G,it.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){pt&&gt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,jt,rt,vt[0].width,vt[0].height,it.depth);for(let dt=0,Gt=vt.length;dt<Gt;dt++)if(j=vt[dt],T.format!==Wn)if(_t!==null)if(pt){if(zt)if(T.layerUpdates.size>0){const Jt=Rc(j.width,j.height,T.format,T.type);for(const Et of T.layerUpdates){const _e=j.data.subarray(Et*Jt/j.data.BYTES_PER_ELEMENT,(Et+1)*Jt/j.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,dt,0,0,Et,j.width,j.height,1,_t,_e)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,dt,0,0,0,j.width,j.height,it.depth,_t,j.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,dt,rt,j.width,j.height,it.depth,0,j.data,0,0);else Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pt?zt&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,dt,0,0,0,j.width,j.height,it.depth,_t,G,j.data):e.texImage3D(r.TEXTURE_2D_ARRAY,dt,rt,j.width,j.height,it.depth,0,_t,G,j.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{pt&&gt&&e.texStorage2D(r.TEXTURE_2D,jt,rt,vt[0].width,vt[0].height);for(let dt=0,Gt=vt.length;dt<Gt;dt++)j=vt[dt],T.format!==Wn?_t!==null?pt?zt&&e.compressedTexSubImage2D(r.TEXTURE_2D,dt,0,0,j.width,j.height,_t,j.data):e.compressedTexImage2D(r.TEXTURE_2D,dt,rt,j.width,j.height,0,j.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pt?zt&&e.texSubImage2D(r.TEXTURE_2D,dt,0,0,j.width,j.height,_t,G,j.data):e.texImage2D(r.TEXTURE_2D,dt,rt,j.width,j.height,0,_t,G,j.data)}else if(T.isDataArrayTexture)if(pt){if(gt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,jt,rt,it.width,it.height,it.depth),zt)if(T.layerUpdates.size>0){const dt=Rc(it.width,it.height,T.format,T.type);for(const Gt of T.layerUpdates){const Jt=it.data.subarray(Gt*dt/it.data.BYTES_PER_ELEMENT,(Gt+1)*dt/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Gt,it.width,it.height,1,_t,G,Jt)}T.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,_t,G,it.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,rt,it.width,it.height,it.depth,0,_t,G,it.data);else if(T.isData3DTexture)pt?(gt&&e.texStorage3D(r.TEXTURE_3D,jt,rt,it.width,it.height,it.depth),zt&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,_t,G,it.data)):e.texImage3D(r.TEXTURE_3D,0,rt,it.width,it.height,it.depth,0,_t,G,it.data);else if(T.isFramebufferTexture){if(gt)if(pt)e.texStorage2D(r.TEXTURE_2D,jt,rt,it.width,it.height);else{let dt=it.width,Gt=it.height;for(let Jt=0;Jt<jt;Jt++)e.texImage2D(r.TEXTURE_2D,Jt,rt,dt,Gt,0,_t,G,null),dt>>=1,Gt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in r){const dt=r.canvas;if(dt.hasAttribute("layoutsubtree")||dt.setAttribute("layoutsubtree","true"),it.parentNode!==dt){dt.appendChild(it),d.add(T),dt.onpaint=Gt=>{const Jt=Gt.changedElements;for(const Et of d)Jt.includes(Et.image)&&(Et.needsUpdate=!0)},dt.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,it);else{const Jt=r.RGBA,Et=r.RGBA,_e=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Jt,Et,_e,it)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(vt.length>0){if(pt&&gt){const dt=Ht(vt[0]);e.texStorage2D(r.TEXTURE_2D,jt,rt,dt.width,dt.height)}for(let dt=0,Gt=vt.length;dt<Gt;dt++)j=vt[dt],pt?zt&&e.texSubImage2D(r.TEXTURE_2D,dt,0,0,_t,G,j):e.texImage2D(r.TEXTURE_2D,dt,rt,_t,G,j);T.generateMipmaps=!1}else if(pt){if(gt){const dt=Ht(it);e.texStorage2D(r.TEXTURE_2D,jt,rt,dt.width,dt.height)}zt&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,_t,G,it)}else e.texImage2D(r.TEXTURE_2D,0,rt,_t,G,it);x(T)&&T.mipmapsAutoUpdate===!0&&M(ht),Mt.__version=mt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function ye(U,T,Z){if(T.image.length!==6)return;const ht=Nt(U,T),at=T.source;e.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+Z);const mt=n.get(at);if(at.version!==mt.__version||ht===!0){e.activeTexture(r.TEXTURE0+Z);const Mt=oe.getPrimaries(oe.workingColorSpace),tt=T.colorSpace===ni?null:oe.getPrimaries(T.colorSpace),it=T.colorSpace===ni||Mt===tt?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);const _t=T.isCompressedTexture||T.image[0].isCompressedTexture,G=T.image[0]&&T.image[0].isDataTexture,rt=[];for(let Et=0;Et<6;Et++)!_t&&!G?rt[Et]=_(T.image[Et],!0,i.maxCubemapSize):rt[Et]=G?T.image[Et].image:T.image[Et],rt[Et]=Rt(T,rt[Et]);const j=rt[0],vt=s.convert(T.format,T.colorSpace),pt=s.convert(T.type);let gt=b(T.internalFormat,vt,pt,T.normalized,T.colorSpace);const zt=T.isVideoTexture!==!0,jt=mt.__version===void 0||ht===!0,dt=at.dataReady;let Gt=S(T,j);Bt(r.TEXTURE_CUBE_MAP,T);let Jt;if(T.isDepthTexture){if(gt=y(T.format===yi,T.type),jt)if(zt)e.texStorage2D(r.TEXTURE_CUBE_MAP,1,gt,j.width,j.height);else for(let Et=0;Et<6;Et++)e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,gt,j.width,j.height,0,vt,pt,null)}else if(_t){zt&&jt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,Gt,gt,j.width,j.height);for(let Et=0;Et<6;Et++){Jt=rt[Et].mipmaps;for(let _e=0;_e<Jt.length;_e++){const ze=Jt[_e];T.format!==Wn?vt!==null?zt?dt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,_e,0,0,ze.width,ze.height,vt,ze.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,_e,gt,ze.width,ze.height,0,ze.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?dt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,_e,0,0,ze.width,ze.height,vt,pt,ze.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,_e,gt,ze.width,ze.height,0,vt,pt,ze.data)}}}else{if(Jt=T.mipmaps,zt&&jt){Jt.length>0&&Gt++;const Et=Ht(rt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,Gt,gt,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(G){zt?dt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,rt[Et].width,rt[Et].height,vt,pt,rt[Et].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,gt,rt[Et].width,rt[Et].height,0,vt,pt,rt[Et].data);for(let _e=0;_e<Jt.length;_e++){const ui=Jt[_e].image[Et].image;zt?dt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,_e+1,0,0,ui.width,ui.height,vt,pt,ui.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,_e+1,gt,ui.width,ui.height,0,vt,pt,ui.data)}}else{zt?dt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,vt,pt,rt[Et]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,gt,vt,pt,rt[Et]);for(let _e=0;_e<Jt.length;_e++){const ze=Jt[_e];zt?dt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,_e+1,0,0,vt,pt,ze.image[Et]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,_e+1,gt,vt,pt,ze.image[Et])}}}x(T)&&T.mipmapsAutoUpdate===!0&&M(r.TEXTURE_CUBE_MAP),mt.__version=at.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function Xt(U,T,Z,ht,at,mt){const Mt=s.convert(Z.format,Z.colorSpace),tt=s.convert(Z.type),it=b(Z.internalFormat,Mt,tt,Z.normalized,Z.colorSpace),_t=n.get(T),G=n.get(Z);if(G.__renderTarget=T,!_t.__hasExternalTextures){const rt=Math.max(1,T.width>>mt),j=Math.max(1,T.height>>mt);at===r.TEXTURE_3D||at===r.TEXTURE_2D_ARRAY?e.texImage3D(at,mt,it,rt,j,T.depth,0,Mt,tt,null):e.texImage2D(at,mt,it,rt,j,0,Mt,tt,null)}e.bindFramebuffer(r.FRAMEBUFFER,U),xt(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ht,at,G.__webglTexture,0,Me(T)):(at===r.TEXTURE_2D||at>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ht,at,G.__webglTexture,mt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function we(U,T,Z){if(r.bindRenderbuffer(r.RENDERBUFFER,U),T.depthBuffer){const ht=T.depthTexture,at=ht&&ht.isDepthTexture?ht.type:null,mt=y(T.stencilBuffer,at),Mt=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;xt(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Me(T),mt,T.width,T.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,Me(T),mt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,mt,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Mt,r.RENDERBUFFER,U)}else{const ht=T.textures;for(let at=0;at<ht.length;at++){const mt=ht[at],Mt=s.convert(mt.format,mt.colorSpace),tt=s.convert(mt.type),it=b(mt.internalFormat,Mt,tt,mt.normalized,mt.colorSpace);xt(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Me(T),it,T.width,T.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,Me(T),it,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,it,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ie(U,T,Z){const ht=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const at=n.get(T.depthTexture);at.__renderTarget=T;const mt=ht?T.depthTexture.image[0]:T.depthTexture.image;(!at.__webglTexture||mt.width!==T.width||mt.height!==T.height)&&(mt.width=T.width,mt.height=T.height,T.depthTexture.needsUpdate=!0),ht?st(T.depthTexture,0):Q(T.depthTexture,0);const Mt=at.__webglTexture,tt=Me(T),it=ht?r.TEXTURE_CUBE_MAP_POSITIVE_X+Z:r.TEXTURE_2D,_t=T.depthTexture.format===yi?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(T.depthTexture.format===Ei)xt(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_t,it,Mt,0,tt):r.framebufferTexture2D(r.FRAMEBUFFER,_t,it,Mt,0);else if(T.depthTexture.format===yi)xt(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_t,it,Mt,0,tt):r.framebufferTexture2D(r.FRAMEBUFFER,_t,it,Mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(U){const T=n.get(U),Z=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const ht=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ht){const at=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ht.removeEventListener("dispose",at)};ht.addEventListener("dispose",at),T.__depthDisposeCallback=at}T.__boundDepthTexture=ht}if(U.depthTexture&&!T.__autoAllocateDepthBuffer)if(Z)for(let ht=0;ht<6;ht++)ie(T.__webglFramebuffer[ht],U,ht);else U.texture.mipmaps.length>0?ie(T.__webglFramebuffer[0],U,0):ie(T.__webglFramebuffer,U,0);else if(Z){T.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[ht]),T.__webglDepthbuffer[ht]===void 0)T.__webglDepthbuffer[ht]=r.createRenderbuffer(),we(T.__webglDepthbuffer[ht],U,!1);else{const at=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,mt=T.__webglDepthbuffer[ht];r.bindRenderbuffer(r.RENDERBUFFER,mt),r.framebufferRenderbuffer(r.FRAMEBUFFER,at,r.RENDERBUFFER,mt)}}else if(U.texture.mipmaps.length>0?e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),we(T.__webglDepthbuffer,U,!1);else{const at=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,mt=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,mt),r.framebufferRenderbuffer(r.FRAMEBUFFER,at,r.RENDERBUFFER,mt)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function ct(U,T,Z){const ht=n.get(U);T!==void 0&&Xt(ht.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Z!==void 0&&nt(U)}function ut(U){const T=U.texture,Z=n.get(U),ht=n.get(T);U.addEventListener("dispose",N),P(U);const at=U.textures,mt=U.isWebGLCubeRenderTarget===!0,Mt=at.length>1;if(Mt||(ht.__webglTexture===void 0&&(ht.__webglTexture=r.createTexture()),ht.__version=T.version,o.memory.textures++),mt){Z.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(T.mipmaps.length>0){Z.__webglFramebuffer[tt]=[];for(let it=0;it<T.mipmaps.length;it++)Z.__webglFramebuffer[tt][it]=r.createFramebuffer()}else Z.__webglFramebuffer[tt]=r.createFramebuffer()}else{if(T.mipmaps.length>0){Z.__webglFramebuffer=[];for(let tt=0;tt<T.mipmaps.length;tt++)Z.__webglFramebuffer[tt]=r.createFramebuffer()}else Z.__webglFramebuffer=r.createFramebuffer();if(Mt)for(let tt=0,it=at.length;tt<it;tt++){const _t=n.get(at[tt]);_t.__webglTexture===void 0&&(_t.__webglTexture=r.createTexture(),o.memory.textures++)}if(U.samples>0&&xt(U)===!1){Z.__webglMultisampledFramebuffer=r.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let tt=0;tt<at.length;tt++){const it=at[tt];Z.__webglColorRenderbuffer[tt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Z.__webglColorRenderbuffer[tt]);const _t=s.convert(it.format,it.colorSpace),G=s.convert(it.type),rt=b(it.internalFormat,_t,G,it.normalized,it.colorSpace,U.isXRRenderTarget===!0),j=Me(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,j,rt,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+tt,r.RENDERBUFFER,Z.__webglColorRenderbuffer[tt])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(Z.__webglDepthRenderbuffer=r.createRenderbuffer(),we(Z.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(mt){e.bindTexture(r.TEXTURE_CUBE_MAP,ht.__webglTexture),Bt(r.TEXTURE_CUBE_MAP,T);for(let tt=0;tt<6;tt++)if(T.mipmaps.length>0)for(let it=0;it<T.mipmaps.length;it++)Xt(Z.__webglFramebuffer[tt][it],U,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,it);else Xt(Z.__webglFramebuffer[tt],U,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);x(T)?M(r.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}else if(Mt){for(let tt=0,it=at.length;tt<it;tt++){const _t=at[tt],G=n.get(_t);let rt=r.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(rt=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(rt,G.__webglTexture),Bt(rt,_t),Xt(Z.__webglFramebuffer,U,_t,r.COLOR_ATTACHMENT0+tt,rt,0),x(_t)&&M(rt)}e.unbindTexture()}else{let tt=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(tt=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(tt,ht.__webglTexture),Bt(tt,T),T.mipmaps.length>0)for(let it=0;it<T.mipmaps.length;it++)Xt(Z.__webglFramebuffer[it],U,T,r.COLOR_ATTACHMENT0,tt,it);else Xt(Z.__webglFramebuffer,U,T,r.COLOR_ATTACHMENT0,tt,0);x(T)?M(tt):T.mipmaps.length>0&&r.texParameteri(tt,r.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}U.depthBuffer&&nt(U)}function B(U){const T=U.textures;for(let Z=0,ht=T.length;Z<ht;Z++){const at=T[Z];if(x(at)&&at.mipmapsAutoUpdate===!0){const mt=E(U),Mt=n.get(at).__webglTexture;e.bindTexture(mt,Mt),M(mt),e.unbindTexture()}}}const kt=[];function Qt(U){if(U.samples>0){if(xt(U)===!1){const T=U.textures,Z=U.width,ht=U.height;let at=r.COLOR_BUFFER_BIT;const mt=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Mt=n.get(U),tt=T.length>1;if(tt)for(let _t=0;_t<T.length;_t++)e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),U.texture.mipmaps.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let _t=0;_t<T.length;_t++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(at|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(at|=r.STENCIL_BUFFER_BIT)),tt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Mt.__webglColorRenderbuffer[_t]);const G=n.get(T[_t]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,G,0)}r.blitFramebuffer(0,0,Z,ht,0,0,Z,ht,at,r.NEAREST),l===!0&&(kt.length=0,kt.push(r.COLOR_ATTACHMENT0+_t),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&kt.push(mt),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,kt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),tt)for(let _t=0;_t<T.length;_t++){e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.RENDERBUFFER,Mt.__webglColorRenderbuffer[_t]);const G=n.get(T[_t]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.TEXTURE_2D,G,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&l){const T=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function Me(U){return Math.min(i.maxSamples,U.samples)}function xt(U){const T=n.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function $t(U){const T=o.render.frame;u.get(U)!==T&&(u.set(U,T),U.update())}function Rt(U,T){const Z=U.colorSpace,ht=U.format,at=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||Z!==Jr&&Z!==ni&&(oe.getTransfer(Z)===ve?(ht!==Wn||at!==fn)&&Wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ce("WebGLTextures: Unsupported texture color space:",Z)),T}function Ht(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=ot,this.resetTextureUnits=O,this.getTextureUnits=H,this.setTextureUnits=X,this.setTexture2D=Q,this.setTexture2DArray=lt,this.setTexture3D=et,this.setTextureCube=st,this.rebindTextures=ct,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=Qt,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=Xt,this.useMultisampledRTT=xt,this.dispose=D}function L_(r,t){function e(n,i=ni){let s;const o=oe.getTransfer(i);if(n===fn)return r.UNSIGNED_BYTE;if(n===sl)return r.UNSIGNED_SHORT_4_4_4_4;if(n===rl)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Gh)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Hh)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===zh)return r.BYTE;if(n===kh)return r.SHORT;if(n===$s)return r.UNSIGNED_SHORT;if(n===il)return r.INT;if(n===qn)return r.UNSIGNED_INT;if(n===Ln)return r.FLOAT;if(n===Sn)return r.HALF_FLOAT;if(n===Vh)return r.ALPHA;if(n===Wh)return r.RGB;if(n===Wn)return r.RGBA;if(n===Ei)return r.DEPTH_COMPONENT;if(n===yi)return r.DEPTH_STENCIL;if(n===ol)return r.RED;if(n===al)return r.RED_INTEGER;if(n===Bi)return r.RG;if(n===ll)return r.RG_INTEGER;if(n===cl)return r.RGBA_INTEGER;if(n===Vr||n===Wr||n===qr||n===Xr)if(o===ve)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Vr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Wr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Vr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Wr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ma||n===ga||n===_a||n===va)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ma)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ga)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_a)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===va)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xa||n===ya||n===Ma||n===Sa||n===ba||n===Kr||n===Ea)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===xa||n===ya)return o===ve?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ma)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Sa)return s.COMPRESSED_R11_EAC;if(n===ba)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Kr)return s.COMPRESSED_RG11_EAC;if(n===Ea)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===wa||n===Ta||n===Aa||n===Ra||n===Ca||n===Pa||n===La||n===Ia||n===Na||n===Da||n===Ua||n===Fa||n===Oa||n===Ba)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===wa)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ta)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Aa)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ra)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ca)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Pa)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===La)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ia)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Na)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Da)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ua)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fa)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Oa)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ba)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===za||n===ka||n===Ga)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===za)return o===ve?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ka)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ga)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ha||n===Va||n===$r||n===Wa)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ha)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Va)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$r)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_s?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}const I_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,N_=`
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

}`;class D_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new ou(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new wi({vertexShader:I_,fragmentShader:N_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new pe(new ci(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class U_ extends Ti{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,p=null;const v=typeof XRWebGLBinding<"u",m=new D_,g={},_=e.getContextAttributes();let x=null,M=null;const E=[],b=[],y=new At;let S=null,P=null;const A=new _n;A.viewport=new Ae;const I=new _n;I.viewport=new Ae;const N=[A,I],L=new Xf;let w=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=E[q];return Q===void 0&&(Q=new To,E[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=E[q];return Q===void 0&&(Q=new To,E[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=E[q];return Q===void 0&&(Q=new To,E[q]=Q),Q.getHandSpace()};function F(q){const Q=b.indexOf(q.inputSource);if(Q===-1)return;const lt=E[Q];lt!==void 0&&(lt.update(q.inputSource,q.frame,c||o),lt.dispatchEvent({type:q.type,data:q.inputSource}))}function k(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",Y);for(let q=0;q<E.length;q++){const Q=b[q];Q!==null&&(b[q]=null,E[q].disconnect(Q))}w=null,D=null,m.reset();for(const q in g)delete g[q];if(t.setRenderTarget(x),f=null,h=null,d=null,i=null,M=null,ot.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(y.width,y.height,!1),P!==null){const q=P.camera;q.fov=P.fov,q.zoom=P.zoom,q.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&Wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&Wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(x=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",k),i.addEventListener("inputsourceschange",Y),_.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(y),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let lt=null,et=null,st=null;_.depth&&(st=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=_.stencil?yi:Ei,et=_.stencil?_s:qn);const bt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(bt),i.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),M=new Mn(h.textureWidth,h.textureHeight,{format:Wn,type:fn,depthTexture:new vs(h.textureWidth,h.textureHeight,et,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const lt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,lt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Mn(f.framebufferWidth,f.framebufferHeight,{format:Wn,type:fn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ot.setContext(i),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(q){for(let Q=0;Q<q.removed.length;Q++){const lt=q.removed[Q],et=b.indexOf(lt);et>=0&&(b[et]=null,E[et].disconnect(lt))}for(let Q=0;Q<q.added.length;Q++){const lt=q.added[Q];let et=b.indexOf(lt);if(et===-1){for(let bt=0;bt<E.length;bt++)if(bt>=b.length){b.push(lt),et=bt;break}else if(b[bt]===null){b[bt]=lt,et=bt;break}if(et===-1)break}const st=E[et];st&&st.connect(lt)}}function W(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let Q=q.near,lt=q.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(lt=m.depthFar)),L.near=I.near=A.near=Q,L.far=I.far=A.far=lt,(w!==L.near||D!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),w=L.near,D=L.far),L.layers.mask=q.layers.mask|6,A.layers.mask=L.layers.mask&-5,I.layers.mask=L.layers.mask&-3;const et=q.parent,st=L.cameras;W(L,et);for(let bt=0;bt<st.length;bt++)W(st[bt],et);L.projectionMatrix.copy(A.projectionMatrix),L.projectionMatrixInverse.copy(A.projectionMatrixInverse),P===null&&q.isPerspectiveCamera&&(P={camera:q,fov:q.fov,zoom:q.zoom}),O(q,L,et)};function O(q,Q,lt){lt===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(lt.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=js*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(q){return g[q]};let H=null;function X(q,Q){if(u=Q.getViewerPose(c||o),p=Q,u!==null){const lt=u.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let et=!1;lt.length!==L.cameras.length&&(L.cameras.length=0,et=!0);for(let ft=0;ft<lt.length;ft++){const Bt=lt[ft];let Nt=null;if(f!==null)Nt=f.getViewport(Bt);else{const Vt=d.getViewSubImage(h,Bt);Nt=Vt.viewport,ft===0&&(t.setRenderTargetTextures(M,Vt.colorTexture,Vt.depthStencilTexture),t.setRenderTarget(M))}let Lt=N[ft];Lt===void 0&&(Lt=new _n,Lt.layers.enable(ft),Lt.viewport=new Ae,N[ft]=Lt),Lt.matrix.fromArray(Bt.transform.matrix),Lt.matrix.decompose(Lt.position,Lt.quaternion,Lt.scale),Lt.projectionMatrix.fromArray(Bt.projectionMatrix),Lt.projectionMatrixInverse.copy(Lt.projectionMatrix).invert(),Lt.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),ft===0&&(L.matrix.copy(Lt.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),et===!0&&L.cameras.push(Lt)}const st=i.enabledFeatures;if(st&&st.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){d=n.getBinding();const ft=d.getDepthInformation(lt[0]);ft&&ft.isValid&&ft.texture&&m.init(ft,i.renderState)}if(st&&st.includes("camera-access")&&v){t.state.unbindTexture(),d=n.getBinding();for(let ft=0;ft<lt.length;ft++){const Bt=lt[ft].camera;if(Bt){let Nt=g[Bt];Nt||(Nt=new ou,g[Bt]=Nt);const Lt=d.getCameraImage(Bt);Nt.sourceTexture=Lt}}}}for(let lt=0;lt<E.length;lt++){const et=b[lt],st=E[lt];et!==null&&st!==void 0&&st.update(et,Q,c||o)}H&&H(q,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),p=null}const ot=new pu;ot.setAnimationLoop(X),this.setAnimationLoop=function(q){H=q},this.dispose=function(){}}}const F_=new me,Eu=new Zt;Eu.set(-1,0,0,0,1,0,0,0,1);function O_(r,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,hu(r)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,_,x,M){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(m,g):g.isMeshLambertMaterial?(s(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(m,g),d(m,g)):g.isMeshPhongMaterial?(s(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(m,g),h(m,g),g.isMeshPhysicalMaterial&&f(m,g,M)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),v(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,_,x):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===tn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===tn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const _=t.get(g),x=_.envMap,M=_.envMapRotation;x&&(m.envMap.value=x,m.envMapRotation.value.setFromMatrix4(F_.makeRotationFromEuler(M)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Eu),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,_,x){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*_,m.scale.value=x*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function h(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,_){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===tn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function v(m,g){const _=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function B_(r,t,e,n){let i={},s={};function o(_,x){const M=x.program;n.uniformBlockBinding(_,M,i[_.id])}function a(_,x){let M=i[_.id];M===void 0&&(p(_),M=l(_),i[_.id]=M,_.addEventListener("dispose",m));const E=x.program;n.updateUBOMapping(_,E);const b=t.render.frame;s[_.id]!==b&&(c(_),s[_.id]=b)}function l(_){const x=r.createBuffer(),M=_.__size,E=_.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,M,E),r.bindBuffer(r.UNIFORM_BUFFER,null),x}function c(_){const x=i[_.id],M=_.uniforms,E=_.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let b=0,y=M.length;b<y;b++){const S=M[b];if(Array.isArray(S))for(let P=0,A=S.length;P<A;P++)u(S[P],b,P,E);else u(S,b,0,E)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function u(_,x,M,E){if(h(_,x,M,E)===!0){const b=_.__offset,y=_.value;if(Array.isArray(y)){let S=0;for(let P=0;P<y.length;P++){const A=y[P],I=v(A,!0);d(A,_.__data,S),S+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else d(y,_.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,b,_.__data)}}function d(_,x,M){typeof _=="number"||typeof _=="boolean"?x[M]=_:_.isMatrix3?(x[M]=_.elements[0],x[M+1]=_.elements[1],x[M+2]=_.elements[2],x[M+3]=0,x[M+4]=_.elements[3],x[M+5]=_.elements[4],x[M+6]=_.elements[5],x[M+7]=0,x[M+8]=_.elements[6],x[M+9]=_.elements[7],x[M+10]=_.elements[8],x[M+11]=0):ArrayBuffer.isView(_)?x.set(_.subarray(0,x.length-M),M):_.toArray(x,M)}function h(_,x,M,E){const b=_.value,y=x+"_"+M;if(Array.isArray(b)){E[y]===void 0&&(E[y]=[]);const S=E[y];let P=!1;for(let A=0;A<b.length;A++)f(b[A],S,A)===!0&&(P=!0);return P}return f(b,E,y)}function f(_,x,M){if(x[M]===void 0)return typeof _=="number"||typeof _=="boolean"?x[M]=_:ArrayBuffer.isView(_)?x[M]=_.slice():x[M]=_.clone(),!0;{const E=x[M];if(typeof _=="number"||typeof _=="boolean"){if(E!==_)return x[M]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(E.equals(_)===!1)return E.copy(_),!0}}return!1}function p(_){const x=_.uniforms;let M=0;const E=16;for(let y=0,S=x.length;y<S;y++){const P=Array.isArray(x[y])?x[y]:[x[y]];for(let A=0,I=P.length;A<I;A++){const N=P[A],L=Array.isArray(N.value)?N.value:[N.value],w=Array.isArray(x[y])||Array.isArray(N.value);let D=M;for(let k=0,Y=L.length;k<Y;k++){const W=L[k],O=v(W,w),H=M%E,X=H%O.boundary,ot=H+X;M+=X,ot!==0&&E-ot<O.storage&&(M+=E-ot),k===0&&(D=M),M+=O.storage}const F=N.type==="int"?Int32Array:N.type==="uint"?Uint32Array:Float32Array;N.__data=new F((M-D)/Float32Array.BYTES_PER_ELEMENT),N.__offset=D}}const b=M%E;return b>0&&(M+=E-b),_.__size=M,_.__cache={},this}function v(_,x){const M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=16,M.storage=48):_.isMatrix4?(M.boundary=16,M.storage=64):_.isTexture?Wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(M.boundary=16,M.storage=_.byteLength):Wt("WebGLRenderer: Unsupported uniform value type.",_),x===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function m(_){const x=_.target;x.removeEventListener("dispose",m),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function g(){for(const _ in i)r.deleteBuffer(i[_]);i={},s={}}return{bind:o,update:a,dispose:g}}const z_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let On=null;function k_(){return On===null&&(On=new nu(z_,16,16,Bi,Sn),On.name="DFG_LUT",On.minFilter=hn,On.magFilter=hn,On.wrapS=ii,On.wrapT=ii,On.generateMipmaps=!1,On.needsUpdate=!0),On}class G_{constructor(t={}){const{canvas:e=Cd(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=fn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const v=f,m=new Set([cl,ll,al]),g=new Set([fn,qn,$s,_s,sl,rl]),_=new Uint32Array(4),x=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]};let E=null,b=null;const y=[],S=[];let P=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let I=!1,N=null,L=null,w=null,D=null;this._outputColorSpace=He;let F=0,k=0,Y=null,W=-1,O=null;const H=new Ae,X=new Ae;let ot=null;const q=new qt(0);let Q=0,lt=e.width,et=e.height,st=1,bt=null,Pt=null;const ft=new Ae(0,0,lt,et),Bt=new Ae(0,0,lt,et);let Nt=!1;const Lt=new tr,Vt=new ml;let Kt=!1,ye=!1;const Xt=new me,we=new z,ie=new Ae,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function ut(){return Y===null?st:1}let B=n;function kt(R,V){return e.getContext(R,V)}let Qt,Me,xt,$t,Rt,Ht,U,T,Z,ht,at,mt,Mt,tt,it,_t,G,rt,j,vt,pt,gt,zt;try{const R={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${el}`),e.addEventListener("webglcontextlost",Gt,!1),e.addEventListener("webglcontextrestored",Jt,!1),e.addEventListener("webglcontextcreationerror",Et,!1),B===null){const V="webgl2";if(B=kt(V,R),B===null)throw kt(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}jt()}catch(R){throw e.removeEventListener("webglcontextlost",Gt,!1),e.removeEventListener("webglcontextrestored",Jt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),ce("WebGLRenderer: "+R.message),R}function jt(){Qt=new W0(B),Qt.init(),pt=new L_(B,Qt),Me=new N0(B,Qt,t,pt),xt=new C_(B,Qt),Me.reversedDepthBuffer&&h&&xt.buffers.depth.setReversed(!0),L=B.createFramebuffer(),w=B.createFramebuffer(),D=B.createFramebuffer(),$t=new Y0(B),Rt=new m_,Ht=new P_(B,Qt,xt,Rt,Me,pt,$t),U=new V0(A),T=new Kf(B),gt=new L0(B,T),Z=new q0(B,T,$t,gt),ht=new K0(B,Z,T,gt,$t),rt=new Z0(B,Me,Ht),it=new D0(Rt),at=new p_(A,U,Qt,Me,gt,it),mt=new O_(A,Rt),Mt=new __,tt=new b_(Qt),G=new P0(A,U,xt,ht,p,l),_t=new R_(A,ht,Me),zt=new B_(B,$t,Me,xt),j=new I0(B,Qt,$t),vt=new X0(B,Qt,$t),$t.programs=at.programs,A.capabilities=Me,A.extensions=Qt,A.properties=Rt,A.renderLists=Mt,A.shadowMap=_t,A.state=xt,A.info=$t}v!==fn&&(P=new J0(v,e.width,e.height,a,i,s));const dt=new U_(A,B);this.xr=dt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const R=Qt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Qt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(R){R!==void 0&&(st=R,this.setSize(lt,et,!1))},this.getSize=function(R){return R.set(lt,et)},this.setSize=function(R,V,J=!0){if(dt.isPresenting){Wt("WebGLRenderer: Can't change size while VR device is presenting.");return}lt=R,et=V,e.width=Math.floor(R*st),e.height=Math.floor(V*st),J===!0&&(e.style.width=R+"px",e.style.height=V+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,R,V)},this.getDrawingBufferSize=function(R){return R.set(lt*st,et*st).floor()},this.setDrawingBufferSize=function(R,V,J){lt=R,et=V,st=J,e.width=Math.floor(R*J),e.height=Math.floor(V*J),this.setViewport(0,0,R,V)},this.setEffects=function(R){if(v===fn){ce("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let V=0;V<R.length;V++)if(R[V].isOutputPass===!0){Wt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(H)},this.getViewport=function(R){return R.copy(ft)},this.setViewport=function(R,V,J,K){R.isVector4?ft.set(R.x,R.y,R.z,R.w):ft.set(R,V,J,K),xt.viewport(H.copy(ft).multiplyScalar(ut()).round())},this.getScissor=function(R){return R.copy(Bt)},this.setScissor=function(R,V,J,K){R.isVector4?Bt.set(R.x,R.y,R.z,R.w):Bt.set(R,V,J,K),xt.scissor(X.copy(Bt).multiplyScalar(ut()).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(R){xt.setScissorTest(Nt=R)},this.setOpaqueSort=function(R){bt=R},this.setTransparentSort=function(R){Pt=R},this.getClearColor=function(R){return R.copy(G.getClearColor())},this.setClearColor=function(){G.setClearColor(...arguments)},this.getClearAlpha=function(){return G.getClearAlpha()},this.setClearAlpha=function(){G.setClearAlpha(...arguments)},this.clear=function(R=!0,V=!0,J=!0){let K=0;if(R){let $=!1;if(Y!==null){const St=Y.texture.format;$=m.has(St)}if($){const St=Y.texture.type,Dt=g.has(St),yt=G.getClearColor(),Tt=G.getClearAlpha(),Ot=yt.r,Yt=yt.g,se=yt.b;Dt?(_[0]=Ot,_[1]=Yt,_[2]=se,_[3]=Tt,B.clearBufferuiv(B.COLOR,0,_)):(x[0]=Ot,x[1]=Yt,x[2]=se,x[3]=Tt,B.clearBufferiv(B.COLOR,0,x))}else K|=B.COLOR_BUFFER_BIT}V&&(K|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(K|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&B.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),N=R},this.dispose=function(){e.removeEventListener("webglcontextlost",Gt,!1),e.removeEventListener("webglcontextrestored",Jt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),G.dispose(),Mt.dispose(),tt.dispose(),Ht.dispose(),Rt.dispose(),U.dispose(),ht.dispose(),Z.dispose(),gt.dispose(),zt.dispose(),at.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",Il),dt.removeEventListener("sessionend",Nl),Ri.stop()};function Gt(R){R.preventDefault(),Zl("WebGLRenderer: Context Lost."),I=!0}function Jt(){Zl("WebGLRenderer: Context Restored."),I=!1;const R=$t.autoReset,V=_t.enabled,J=_t.autoUpdate,K=_t.needsUpdate,$=_t.type;jt(),$t.autoReset=R,_t.enabled=V,_t.autoUpdate=J,_t.needsUpdate=K,_t.type=$}function Et(R){ce("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function _e(R){const V=R.target;V.removeEventListener("dispose",_e),ze(V)}function ze(R){ui(R),Rt.remove(R)}function ui(R){const V=Rt.get(R).programs;V!==void 0&&(V.forEach(function(J){at.releaseProgram(J)}),R.isShaderMaterial&&at.releaseShaderCache(R))}this.renderBufferDirect=function(R,V,J,K,$,St){V===null&&(V=nt);const Dt=$.isMesh&&$.matrixWorld.determinantAffine()<0,yt=Xu(R,V,J,K,$);xt.setMaterial(K,Dt);let Tt=J.index,Ot=1;if(K.wireframe===!0){if(Tt=Z.getWireframeAttribute(J),Tt===void 0)return;Ot=2}const Yt=J.drawRange,se=J.attributes.position;let Ut=Yt.start*Ot,re=(Yt.start+Yt.count)*Ot;St!==null&&(Ut=Math.max(Ut,St.start*Ot),re=Math.min(re,(St.start+St.count)*Ot)),Tt!==null?(Ut=Math.max(Ut,0),re=Math.min(re,Tt.count)):se!=null&&(Ut=Math.max(Ut,0),re=Math.min(re,se.count));const Re=re-Ut;if(Re<0||Re===1/0)return;gt.setup($,K,yt,J,Tt);let Se,xe=j;if(Tt!==null&&(Se=T.get(Tt),xe=vt,xe.setIndex(Se)),$.isMesh)K.wireframe===!0?(xt.setLineWidth(K.wireframeLinewidth*ut()),xe.setMode(B.LINES)):xe.setMode(B.TRIANGLES);else if($.isLine){let Ze=K.linewidth;Ze===void 0&&(Ze=1),xt.setLineWidth(Ze*ut()),$.isLineSegments?xe.setMode(B.LINES):$.isLineLoop?xe.setMode(B.LINE_LOOP):xe.setMode(B.LINE_STRIP)}else $.isPoints?xe.setMode(B.POINTS):$.isSprite&&xe.setMode(B.TRIANGLES);if($.isBatchedMesh)if(Qt.get("WEBGL_multi_draw"))xe.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Ze=$._multiDrawStarts,Ft=$._multiDrawCounts,en=$._multiDrawCount,he=Tt?T.get(Tt).bytesPerElement:1,Ci=Rt.get(K).currentProgram.getUniforms();for(let Ke=0;Ke<en;Ke++)Ci.setValue(B,"_gl_DrawID",Ke),xe.render(Ze[Ke]/he,Ft[Ke])}else if($.isInstancedMesh)xe.renderInstances(Ut,Re,$.count);else if(J.isInstancedBufferGeometry){const Ze=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ft=Math.min(J.instanceCount,Ze);xe.renderInstances(Ut,Re,Ft)}else xe.render(Ut,Re)};function Ll(R,V,J,K){N!==null&&R.isNodeMaterial&&N.setObject(K,R),Kt===!0&&it.setState(R,J,!1),R.transparent===!0&&R.side===je&&R.forceSinglePass===!1?(R.side=tn,R.needsUpdate=!0,Es(R,V,K),R.side=bi,R.needsUpdate=!0,Es(R,V,K),R.side=je):Es(R,V,K)}this.compile=function(R,V,J=null){J===null&&(J=R),N!==null&&N.renderStart(R,V,J),b=tt.get(J),b.init(V),S.push(b),J.traverseVisible(function($){$.isLight&&$.layers.test(V.layers)&&(b.pushLight($),$.castShadow&&b.pushShadow($))}),R!==J&&R.traverseVisible(function($){$.isLight&&$.layers.test(V.layers)&&(b.pushLight($),$.castShadow&&b.pushShadow($))}),b.setupLights(),N!==null&&N.updateLights(b.state.lightsArray),ye=this.localClippingEnabled,Kt=it.init(this.clippingPlanes,ye),Kt===!0&&it.setGlobalState(this.clippingPlanes,V),N!==null&&_t.render(b.state.shadowsArray,J,V);const K=new Set;return R.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const St=$.material;if(St)if(Array.isArray(St))for(let Dt=0;Dt<St.length;Dt++){const yt=St[Dt];Ll(yt,J,V,$),K.add(yt)}else Ll(St,J,V,$),K.add(St)}),b=S.pop(),N!==null&&N.renderEnd(),K},this.compileAsync=function(R,V,J=null){const K=this.compile(R,V,J);return new Promise($=>{function St(){if(K.forEach(function(Dt){const Tt=Rt.get(Dt).currentProgram;(Tt===void 0||Tt.isReady())&&K.delete(Dt)}),K.size===0){$(R);return}setTimeout(St,10)}Qt.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let mo=null;function Wu(R){mo&&mo(R)}function Il(){Ri.stop()}function Nl(){Ri.start()}const Ri=new pu;Ri.setAnimationLoop(Wu),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(R){mo=R,dt.setAnimationLoop(R),R===null?Ri.stop():Ri.start()},dt.addEventListener("sessionstart",Il),dt.addEventListener("sessionend",Nl),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0){ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;N!==null&&N.renderStart(R,V);const J=dt.enabled===!0&&dt.isPresenting===!0,K=P!==null&&(Y===null||J)&&P.begin(A,Y);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(V),V=dt.getCamera()),R.isScene===!0&&R.onBeforeRender(A,R,V,Y),b=tt.get(R,S.length),b.init(V),b.state.textureUnits=Ht.getTextureUnits(),S.push(b),Xt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),V.isArrayCamera?Vt.setFromArrayCamera(V):Lt.setFromProjectionMatrix(Xt,In,V.reversedDepth),ye=this.localClippingEnabled,Kt=it.init(this.clippingPlanes,ye),E=Mt.get(R,y.length),E.init(),y.push(E),this.info.render.frame++,dt.enabled===!0&&dt.isPresenting===!0){const Dt=A.xr.getDepthSensingMesh();Dt!==null&&go(Dt,V,-1/0,A.sortObjects)}go(R,V,0,A.sortObjects),E.finish(),N!==null&&N.updateLights(b.state.lightsArray),A.sortObjects===!0&&E.sort(bt,Pt),ct=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,ct&&G.addToRenderList(E,R),this.info.autoReset===!0&&this.info.reset(),Kt===!0&&it.beginShadows();const $=b.state.shadowsArray;if(_t.render($,R,V),Kt===!0&&it.endShadows(),(K&&P.hasRenderPass())===!1){const Dt=E.opaque,yt=E.transmissive;if(b.setupLights(),V.isArrayCamera){const Tt=V.cameras;if(yt.length>0)for(let Ot=0,Yt=Tt.length;Ot<Yt;Ot++){const se=Tt[Ot];Ul(Dt,yt,R,se)}ct&&G.render(R);for(let Ot=0,Yt=Tt.length;Ot<Yt;Ot++){const se=Tt[Ot];Dl(E,R,se,se.viewport)}}else yt.length>0&&Ul(Dt,yt,R,V),ct&&G.render(R),Dl(E,R,V)}Y!==null&&k===0&&(Ht.updateMultisampleRenderTarget(Y),Ht.updateRenderTargetMipmap(Y)),K&&P.end(A),R.isScene===!0&&R.onAfterRender(A,R,V),gt.resetDefaultState(),W=-1,O=null,S.pop(),S.length>0?(b=S[S.length-1],Ht.setTextureUnits(b.state.textureUnits),Kt===!0&&it.setGlobalState(A.clippingPlanes,b.state.camera)):b=null,y.pop(),y.length>0?E=y[y.length-1]:E=null,N!==null&&N.renderEnd()};function go(R,V,J,K){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)J=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLight)b.pushLight(R),R.castShadow&&b.pushShadow(R);else if(R.isSprite){const Dt=V.isArrayCamera?Vt:Lt;if(!R.frustumCulled||R.intersectsFrustum(Dt)){K&&ie.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Xt);const yt=ht.update(R),Tt=R.material;Tt.visible&&E.push(R,yt,Tt,J,ie.z,null,V)}}else if(R.isMesh||R.isLine||R.isPoints){const Dt=V.isArrayCamera?Vt:Lt;if(!R.frustumCulled||R.intersectsFrustum(Dt)){const yt=ht.update(R),Tt=R.material;if(K&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ie.copy(R.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),ie.copy(yt.boundingSphere.center)),ie.applyMatrix4(R.matrixWorld).applyMatrix4(Xt)),Array.isArray(Tt)){const Ot=yt.groups;for(let Yt=0,se=Ot.length;Yt<se;Yt++){const Ut=Ot[Yt],re=Tt[Ut.materialIndex];re&&re.visible&&E.push(R,yt,re,J,ie.z,Ut,V)}}else Tt.visible&&E.push(R,yt,Tt,J,ie.z,null,V)}}}const St=R.children;for(let Dt=0,yt=St.length;Dt<yt;Dt++)go(St[Dt],V,J,K)}function Dl(R,V,J,K){const{opaque:$,transmissive:St,transparent:Dt}=R;b.setupLightsView(J),Kt===!0&&it.setGlobalState(A.clippingPlanes,J),K&&xt.viewport(H.copy(K)),$.length>0&&lr($,V,J),St.length>0&&lr(St,V,J),Dt.length>0&&lr(Dt,V,J),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function Ul(R,V,J,K){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[K.id]===void 0){const Ut=Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[K.id]=new Mn(1,1,{generateMipmaps:!0,type:Ut?Sn:fn,minFilter:xi,samples:Math.max(4,Me.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:oe.workingColorSpace})}const St=b.state.transmissionRenderTarget[K.id],Dt=K.viewport||H;St.setSize(Dt.z*A.transmissionResolutionScale,Dt.w*A.transmissionResolutionScale);const yt=A.getRenderTarget(),Tt=A.getActiveCubeFace(),Ot=A.getActiveMipmapLevel();A.setRenderTarget(St),A.getClearColor(q),Q=A.getClearAlpha(),Q<1&&A.setClearColor(16777215,.5),A.clear(),ct&&G.render(J);const Yt=A.toneMapping;A.toneMapping=ri;const se=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),b.setupLightsView(K),Kt===!0&&it.setGlobalState(A.clippingPlanes,K),lr(R,J,K),Ht.updateMultisampleRenderTarget(St),Ht.updateRenderTargetMipmap(St),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let re=0,Re=V.length;re<Re;re++){const Se=V[re],{object:xe,geometry:Ze,material:Ft,group:en}=Se;if(Ft.side===je&&xe.layers.test(K.layers)){const he=Ft.side;Ft.side=tn,Ft.needsUpdate=!0,Fl(xe,J,K,Ze,Ft,en),Ft.side=he,Ft.needsUpdate=!0,Ut=!0}}Ut===!0&&(Ht.updateMultisampleRenderTarget(St),Ht.updateRenderTargetMipmap(St))}A.setRenderTarget(yt,Tt,Ot),A.setClearColor(q,Q),se!==void 0&&(K.viewport=se),A.toneMapping=Yt}function lr(R,V,J){const K=V.isScene===!0?V.overrideMaterial:null;for(let $=0,St=R.length;$<St;$++){const Dt=R[$],{object:yt,geometry:Tt,group:Ot}=Dt;let Yt=Dt.material;Yt.allowOverride===!0&&K!==null&&(Yt=K),yt.layers.test(J.layers)&&Fl(yt,V,J,Tt,Yt,Ot)}}function Fl(R,V,J,K,$,St){N!==null&&$.isNodeMaterial&&N.setObject(R,$),R.onBeforeRender(A,V,J,K,$,St),R.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),$.onBeforeRender(A,V,J,K,R,St),$.transparent===!0&&$.side===je&&$.forceSinglePass===!1?($.side=tn,$.needsUpdate=!0,A.renderBufferDirect(J,V,K,$,R,St),$.side=bi,$.needsUpdate=!0,A.renderBufferDirect(J,V,K,$,R,St),$.side=je):A.renderBufferDirect(J,V,K,$,R,St),R.onAfterRender(A,V,J,K,$,St)}function Ol(R){let V=0;for(const J of R)J.texture!==null&&V++;return V}function Es(R,V,J){V.isScene!==!0&&(V=nt);const K=Rt.get(R),$=b.state.lights,St=b.state.shadowsArray,Dt=$.state.version,yt=at.getParameters(R,$.state,St,V,J,b.state.lightProbeGridArray),Tt=at.getProgramCacheKey(yt);let Ot=K.programs;K.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?V.environment:null,K.fog=V.fog;const Yt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;K.envMap=U.get(R.envMap||K.environment,Yt),K.envMapRotation=K.environment!==null&&R.envMap===null?V.environmentRotation:R.envMapRotation,Ot===void 0&&(R.addEventListener("dispose",_e),Ot=new Map,K.programs=Ot,K.programVariants=new Map);let se=Ot.get(Tt);if(se!==void 0){if(K.currentProgram===se&&K.lightsStateVersion===Dt)return zl(R,yt),se}else yt.uniforms=at.getUniforms(R),N!==null&&R.isNodeMaterial&&N.build(R,J,yt),R.onBeforeCompile(yt,A),se=at.acquireProgram(yt,Tt),Ot.set(Tt,se),K.uniforms=yt.uniforms;const Ut=K.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ut.clippingPlanes=it.uniform),zl(R,yt),K.needsLights=Zu(R),K.lightsStateVersion=Dt,K.needsLights&&(Ut.ambientLightColor.value=$.state.ambient,Ut.lightProbe.value=$.state.probe,Ut.sunLights.value=$.state.sun,Ut.sunLightShadows.value=$.state.sunShadow,Ut.directionalLights.value=$.state.directional,Ut.directionalLightShadows.value=$.state.directionalShadow,Ut.spotLights.value=$.state.spot,Ut.spotLightShadows.value=$.state.spotShadow,Ut.rectAreaLights.value=$.state.rectArea,Ut.ltc_1.value=$.state.rectAreaLTC1,Ut.ltc_2.value=$.state.rectAreaLTC2,Ut.pointLights.value=$.state.point,Ut.pointLightShadows.value=$.state.pointShadow,Ut.hemisphereLights.value=$.state.hemi,Ut.sunShadowMatrix.value=$.state.sunShadowMatrix,Ut.sunShadowCascade.value=$.state.sunShadowCascade,Ut.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ut.spotLightMatrix.value=$.state.spotLightMatrix,Ut.spotLightMap.value=$.state.spotLightMap,Ut.pointShadowMatrix.value=$.state.pointShadowMatrix),K.numLightProbeGrids=Ol(b.state.lightProbeGridArray),K.currentProgram=se,K.uniformsList=null,se}function qu(R,V,J,K,$){const St=Rt.get(R),Dt=St.currentProgram.id+","+K+","+$;let yt=St.programVariants.get(Dt);return yt===void 0?(yt=Es(R,V,J),St.programVariants.set(Dt,yt)):(St.currentProgram=yt,St.uniformsList=null,St.outputColorSpace=K,St.toneMapping=$),yt}function Bl(R){if(R.uniformsList===null){const V=R.currentProgram.getUniforms();R.uniformsList=Zr.seqWithValue(V.seq,R.uniforms)}return R.uniformsList}function zl(R,V){const J=Rt.get(R);J.outputColorSpace=V.outputColorSpace,J.batching=V.batching,J.batchingColor=V.batchingColor,J.instancing=V.instancing,J.instancingColor=V.instancingColor,J.instancingMorph=V.instancingMorph,J.skinning=V.skinning,J.morphTargets=V.morphTargets,J.morphNormals=V.morphNormals,J.morphColors=V.morphColors,J.morphTargetsCount=V.morphTargetsCount,J.numClippingPlanes=V.numClippingPlanes,J.numIntersection=V.numClipIntersection,J.vertexAlphas=V.vertexAlphas,J.vertexTangents=V.vertexTangents,J.toneMapping=V.toneMapping}function Xu(R,V,J,K,$){V.isScene!==!0&&(V=nt),Ht.resetTextureUnits();const St=V.fog,Dt=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?V.environment:null,yt=Y===null?A.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:oe.workingColorSpace,Tt=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,Ot=U.get(K.envMap||Dt,Tt),Yt=K.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,se=!!J.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ut=!!J.morphAttributes.position,re=!!J.morphAttributes.normal,Re=!!J.morphAttributes.color;let Se=ri;K.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Se=A.toneMapping);const xe=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Ze=xe!==void 0?xe.length:0,Ft=Rt.get(K),en=b.state.lights;if(Kt===!0&&(ye===!0||R!==O)){const Te=R===O&&K.id===W;it.setState(K,R,Te)}let he=!1,Ci=!1;K.version===Ft.__version?Ft.needsLights&&Ft.lightsStateVersion!==en.state.version||$.isBatchedMesh&&Ft.batching===!1||!$.isBatchedMesh&&Ft.batching===!0||$.isBatchedMesh&&Ft.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Ft.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Ft.instancing===!1||!$.isInstancedMesh&&Ft.instancing===!0||$.isSkinnedMesh&&Ft.skinning===!1||!$.isSkinnedMesh&&Ft.skinning===!0||$.isInstancedMesh&&Ft.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ft.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ft.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ft.instancingMorph===!1&&$.morphTexture!==null||Ft.envMap!==Ot||K.fog===!0&&Ft.fog!==St||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==it.numPlanes||Ft.numIntersection!==it.numIntersection)||Ft.vertexAlphas!==Yt||Ft.vertexTangents!==se||Ft.morphTargets!==Ut||Ft.morphNormals!==re||Ft.morphColors!==Re||Ft.morphTargetsCount!==Ze||Ft.numLightProbeGrids!==Ol(b.state.lightProbeGridArray)?he=!0:(Ft.outputColorSpace!==yt||Ft.toneMapping!==Se)&&(Ci=!0):(he=!0,Ft.__version=K.version);let Ke=Ft.currentProgram;(he===!0||Ci===!0)&&(Ke=Ci===!0?qu(K,V,$,yt,Se):Es(K,V,$),N&&K.isNodeMaterial&&N.onUpdateProgram(K,Ke,Ft));let cr=!1,di=!1,Pi=!1;const le=Ke.getUniforms(),Ve=Ft.uniforms;if(xt.useProgram(Ke.program)&&(cr=!0,di=!0,Pi=!0),K.id!==W&&(W=K.id,di=!0),cr||O!==R){xt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),le.setValue(B,"projectionMatrix",R.projectionMatrix),le.setValue(B,"viewMatrix",R.matrixWorldInverse);const ke=le.map.cameraPosition;ke!==void 0&&ke.setValue(B,we.setFromMatrixPosition(R.matrixWorld)),Me.logarithmicDepthBuffer&&le.setValue(B,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&le.setValue(B,"isOrthographic",R.isOrthographicCamera===!0),O!==R&&(O=R,di=!0,Pi=!0)}if(Ft.needsLights&&(en.state.sunShadowMap.length>0&&le.setValue(B,"sunShadowMap",en.state.sunShadowMap,Ht),en.state.directionalShadowMap.length>0&&le.setValue(B,"directionalShadowMap",en.state.directionalShadowMap,Ht),en.state.spotShadowMap.length>0&&le.setValue(B,"spotShadowMap",en.state.spotShadowMap,Ht),en.state.pointShadowMap.length>0&&le.setValue(B,"pointShadowMap",en.state.pointShadowMap,Ht)),$.isSkinnedMesh){le.setOptional(B,$,"bindMatrix"),le.setOptional(B,$,"bindMatrixInverse");const Te=$.skeleton;Te&&(Te.boneTexture===null&&Te.computeBoneTexture(),le.setValue(B,"boneTexture",Te.boneTexture,Ht))}$.isBatchedMesh&&(le.setOptional(B,$,"batchingTexture"),le.setValue(B,"batchingTexture",$._matricesTexture,Ht),le.setOptional(B,$,"batchingIdTexture"),le.setValue(B,"batchingIdTexture",$._indirectTexture,Ht),le.setOptional(B,$,"batchingColorTexture"),$._colorsTexture!==null&&le.setValue(B,"batchingColorTexture",$._colorsTexture,Ht));const bn=J.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&rt.update($,J,Ke),(di||Ft.receiveShadow!==$.receiveShadow)&&(Ft.receiveShadow=$.receiveShadow,le.setValue(B,"receiveShadow",$.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&V.environment!==null&&(Ve.envMapIntensity.value=V.environmentIntensity),Ve.dfgLUT!==void 0&&(Ve.dfgLUT.value=k_()),di){if(le.setValue(B,"toneMappingExposure",A.toneMappingExposure),Ft.needsLights&&Yu(Ve,Pi),St&&K.fog===!0&&mt.refreshFogUniforms(Ve,St),mt.refreshMaterialUniforms(Ve,K,st,et,b.state.transmissionRenderTarget[R.id]),Ft.needsLights&&Ft.numLightProbeGrids>0){const Te=M;let ke=0;for(const Xn of b.state.lightProbeGridArray)Xn.texture!==null&&(Te.textures[ke]=Xn.texture,Te.min[ke]=Xn.boundingBox.min,Te.max[ke]=Xn.boundingBox.max,Te.resolution[ke]=Xn.resolution,ke++);for(const Xn in Te)Te[Xn].length=ke;Ve.probesSH.value=Te.textures,Ve.probesMin.value=Te.min,Ve.probesMax.value=Te.max,Ve.probesResolution.value=Te.resolution}Zr.upload(B,Bl(Ft),Ve,Ht)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Zr.upload(B,Bl(Ft),Ve,Ht),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&le.setValue(B,"center",$.center),le.setValue(B,"modelViewMatrix",$.modelViewMatrix),le.setValue(B,"normalMatrix",$.normalMatrix),le.setValue(B,"modelMatrix",$.matrixWorld),K.uniformsGroups!==void 0){const Te=K.uniformsGroups;for(let ke=0,Xn=Te.length;ke<Xn;ke++){const Gl=Te[ke];zt.update(Gl,Ke),zt.bind(Gl,Ke)}}return Ke}function Yu(R,V){R.ambientLightColor.needsUpdate=V,R.lightProbe.needsUpdate=V,R.sunLights.needsUpdate=V,R.sunLightShadows.needsUpdate=V,R.directionalLights.needsUpdate=V,R.directionalLightShadows.needsUpdate=V,R.pointLights.needsUpdate=V,R.pointLightShadows.needsUpdate=V,R.spotLights.needsUpdate=V,R.spotLightShadows.needsUpdate=V,R.rectAreaLights.needsUpdate=V,R.hemisphereLights.needsUpdate=V}function Zu(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(R,V,J){const K=Rt.get(R);K.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),Rt.get(R.texture).__webglTexture=V,Rt.get(R.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:J,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,V){const J=Rt.get(R);J.__webglFramebuffer=V,J.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(R,V=0,J=0){Y=R,F=V,k=J;let K=null,$=!1,St=!1;if(R){const yt=Rt.get(R);if(yt.__useDefaultFramebuffer!==void 0){xt.bindFramebuffer(B.FRAMEBUFFER,yt.__webglFramebuffer),H.copy(R.viewport),X.copy(R.scissor),ot=R.scissorTest,xt.viewport(H),xt.scissor(X),xt.setScissorTest(ot),W=-1;return}else if(yt.__webglFramebuffer===void 0)Ht.setupRenderTarget(R);else if(yt.__hasExternalTextures)Ht.rebindTextures(R,Rt.get(R.texture).__webglTexture,Rt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Yt=R.depthTexture;if(yt.__boundDepthTexture!==Yt){if(Yt!==null&&Rt.has(Yt)&&(R.width!==Yt.image.width||R.height!==Yt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ht.setupDepthRenderbuffer(R)}}const Tt=R.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(St=!0);const Ot=Rt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ot[V])?K=Ot[V][J]:K=Ot[V],$=!0):R.samples>0&&Ht.useMultisampledRTT(R)===!1?K=Rt.get(R).__webglMultisampledFramebuffer:Array.isArray(Ot)?K=Ot[J]:K=Ot,H.copy(R.viewport),X.copy(R.scissor),ot=R.scissorTest}else H.copy(ft).multiplyScalar(st).floor(),X.copy(Bt).multiplyScalar(st).floor(),ot=Nt;if(J!==0&&(K=L),xt.bindFramebuffer(B.FRAMEBUFFER,K)&&xt.drawBuffers(R,K),xt.viewport(H),xt.scissor(X),xt.setScissorTest(ot),$){const yt=Rt.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+V,yt.__webglTexture,J)}else if(St){const yt=V;for(let Tt=0;Tt<R.textures.length;Tt++){const Ot=Rt.get(R.textures[Tt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Tt,Ot.__webglTexture,J,yt)}}else if(R!==null&&J!==0){const yt=Rt.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,yt.__webglTexture,J)}W=-1};function kl(R){const V=Rt.get(R);return(V.__readFormat!==R.format||V.__readType!==R.type)&&(V.__readFormat=R.format,V.__readType=R.type,V.__formatReadable=Me.textureFormatReadable(R.format),V.__typeReadable=Me.textureTypeReadable(R.type)),V}this.readRenderTargetPixels=function(R,V,J,K,$,St,Dt,yt=0){if(!(R&&R.isWebGLRenderTarget)){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=Rt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Dt!==void 0&&(Tt=Tt[Dt],Array.isArray(Tt)&&(Tt=Tt[0])),Tt){xt.bindFramebuffer(B.FRAMEBUFFER,Tt);try{const Ot=R.textures[yt],Yt=Ot.format,se=Ot.type;R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+yt);const Ut=kl(Ot);if(Ut.__formatReadable===!1){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ut.__typeReadable===!1){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=R.width-K&&J>=0&&J<=R.height-$&&B.readPixels(V,J,K,$,pt.convert(Yt),pt.convert(se),St)}finally{const Ot=Y!==null?Rt.get(Y).__webglFramebuffer:null;xt.bindFramebuffer(B.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(R,V,J,K,$,St,Dt,yt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=Rt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Dt!==void 0&&(Tt=Tt[Dt],Array.isArray(Tt)&&(Tt=Tt[0])),Tt)if(V>=0&&V<=R.width-K&&J>=0&&J<=R.height-$){xt.bindFramebuffer(B.FRAMEBUFFER,Tt);const Ot=R.textures[yt],Yt=Ot.format,se=Ot.type;R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+yt);const Ut=kl(Ot);if(Ut.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ut.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const re=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,re),B.bufferData(B.PIXEL_PACK_BUFFER,St.byteLength,B.STREAM_READ),B.readPixels(V,J,K,$,pt.convert(Yt),pt.convert(se),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);const Re=Y!==null?Rt.get(Y).__webglFramebuffer:null;xt.bindFramebuffer(B.FRAMEBUFFER,Re);const Se=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Pd(B,Se,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,re),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,St),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(re),B.deleteSync(Se),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,V=null,J=0){const K=Math.pow(2,-J),$=Math.floor(R.image.width*K),St=Math.floor(R.image.height*K),Dt=V!==null?V.x:0,yt=V!==null?V.y:0;Ht.setTexture2D(R,0),B.copyTexSubImage2D(B.TEXTURE_2D,J,0,0,Dt,yt,$,St),xt.unbindTexture()},this.copyTextureToTexture=function(R,V,J=null,K=null,$=0,St=0){let Dt,yt,Tt,Ot,Yt,se,Ut,re,Re;const Se=R.isCompressedTexture?R.mipmaps[St]:R.image;if(J!==null)Dt=J.max.x-J.min.x,yt=J.max.y-J.min.y,Tt=J.isBox3?J.max.z-J.min.z:1,Ot=J.min.x,Yt=J.min.y,se=J.isBox3?J.min.z:0;else{const le=Math.pow(2,-$);Dt=Math.floor(Se.width*le),yt=Math.floor(Se.height*le),R.isDataArrayTexture?Tt=Se.depth:R.isData3DTexture?Tt=Math.floor(Se.depth*le):Tt=1,Ot=0,Yt=0,se=0}K!==null?(Ut=K.x,re=K.y,Re=K.z):(Ut=0,re=0,Re=0);const xe=pt.convert(V.format),Ze=pt.convert(V.type);let Ft;V.isData3DTexture?(Ht.setTexture3D(V,0),Ft=B.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(Ht.setTexture2DArray(V,0),Ft=B.TEXTURE_2D_ARRAY):(Ht.setTexture2D(V,0),Ft=B.TEXTURE_2D),xt.activeTexture(B.TEXTURE0),xt.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,V.flipY),xt.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),xt.pixelStorei(B.UNPACK_ALIGNMENT,V.unpackAlignment);const en=xt.getParameter(B.UNPACK_ROW_LENGTH),he=xt.getParameter(B.UNPACK_IMAGE_HEIGHT),Ci=xt.getParameter(B.UNPACK_SKIP_PIXELS),Ke=xt.getParameter(B.UNPACK_SKIP_ROWS),cr=xt.getParameter(B.UNPACK_SKIP_IMAGES);xt.pixelStorei(B.UNPACK_ROW_LENGTH,Se.width),xt.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Se.height),xt.pixelStorei(B.UNPACK_SKIP_PIXELS,Ot),xt.pixelStorei(B.UNPACK_SKIP_ROWS,Yt),xt.pixelStorei(B.UNPACK_SKIP_IMAGES,se);const di=R.isDataArrayTexture||R.isData3DTexture,Pi=V.isDataArrayTexture||V.isData3DTexture;if(R.isDepthTexture){const le=Rt.get(R),Ve=Rt.get(V),bn=Rt.get(le.__renderTarget),Te=Rt.get(Ve.__renderTarget);xt.bindFramebuffer(B.READ_FRAMEBUFFER,bn.__webglFramebuffer),xt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let ke=0;ke<Tt;ke++)di&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Rt.get(R).__webglTexture,$,se+ke),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Rt.get(V).__webglTexture,St,Re+ke)),B.blitFramebuffer(Ot,Yt,Ot+Dt,Yt+yt,Ut,re,Ut+Dt,re+yt,B.DEPTH_BUFFER_BIT,B.NEAREST);xt.bindFramebuffer(B.READ_FRAMEBUFFER,null),xt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if($!==0||R.isRenderTargetTexture||Rt.has(R)){const le=Rt.get(R),Ve=Rt.get(V);xt.bindFramebuffer(B.READ_FRAMEBUFFER,w),xt.bindFramebuffer(B.DRAW_FRAMEBUFFER,D);for(let bn=0;bn<Tt;bn++)di?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,le.__webglTexture,$,se+bn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,le.__webglTexture,$),Pi?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ve.__webglTexture,St,Re+bn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ve.__webglTexture,St),$!==0?B.blitFramebuffer(Ot,Yt,Ot+Dt,Yt+yt,Ut,re,Ut+Dt,re+yt,B.COLOR_BUFFER_BIT,B.NEAREST):Pi?B.copyTexSubImage3D(Ft,St,Ut,re,Re+bn,Ot,Yt,Dt,yt):B.copyTexSubImage2D(Ft,St,Ut,re,Ot,Yt,Dt,yt);xt.bindFramebuffer(B.READ_FRAMEBUFFER,null),xt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Pi?R.isDataTexture||R.isData3DTexture?B.texSubImage3D(Ft,St,Ut,re,Re,Dt,yt,Tt,xe,Ze,Se.data):V.isCompressedArrayTexture?B.compressedTexSubImage3D(Ft,St,Ut,re,Re,Dt,yt,Tt,xe,Se.data):B.texSubImage3D(Ft,St,Ut,re,Re,Dt,yt,Tt,xe,Ze,Se):R.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,St,Ut,re,Dt,yt,xe,Ze,Se.data):R.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,St,Ut,re,Se.width,Se.height,xe,Se.data):B.texSubImage2D(B.TEXTURE_2D,St,Ut,re,Dt,yt,xe,Ze,Se);xt.pixelStorei(B.UNPACK_ROW_LENGTH,en),xt.pixelStorei(B.UNPACK_IMAGE_HEIGHT,he),xt.pixelStorei(B.UNPACK_SKIP_PIXELS,Ci),xt.pixelStorei(B.UNPACK_SKIP_ROWS,Ke),xt.pixelStorei(B.UNPACK_SKIP_IMAGES,cr),St===0&&V.generateMipmaps===!0&&V.mipmapsAutoUpdate===!0&&B.generateMipmap(Ft),xt.unbindTexture()},this.initRenderTarget=function(R){Rt.get(R).__webglFramebuffer===void 0&&Ht.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Ht.setTextureCube(R,0):R.isData3DTexture?Ht.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Ht.setTexture2DArray(R,0):Ht.setTexture2D(R,0),xt.unbindTexture()},this.resetState=function(){F=0,k=0,Y=null,xt.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}}const $c={type:"change"},wl={type:"start"},wu={type:"end"},Ur=new ao,Jc=new Rn,H_=Math.cos(70*Ee.DEG2RAD),Ue=new z,ln=2*Math.PI,fe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ko=1e-6;class V_ extends Yf{constructor(t,e=null){super(t,e),this.state=fe.NONE,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:cs.ROTATE,MIDDLE:cs.DOLLY,RIGHT:cs.PAN},this.touches={ONE:rs.ROTATE,TWO:rs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new z,this._lastQuaternion=new yn,this._lastTargetPosition=new z,this._quat=new yn().setFromUnitVectors(t.up,new z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Za,this._sphericalDelta=new Za,this._scale=1,this._panOffset=new z,this._rotateStart=new At,this._rotateEnd=new At,this._rotateDelta=new At,this._panStart=new At,this._panEnd=new At,this._panDelta=new At,this._dollyStart=new At,this._dollyEnd=new At,this._dollyDelta=new At,this._dollyDirection=new z,this._mouse=new At,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=q_.bind(this),this._onPointerDown=W_.bind(this),this._onPointerUp=X_.bind(this),this._onContextMenu=j_.bind(this),this._onMouseWheel=K_.bind(this),this._onKeyDown=$_.bind(this),this._onTouchStart=J_.bind(this),this._onTouchMove=Q_.bind(this),this._onMouseDown=Y_.bind(this),this._onMouseMove=Z_.bind(this),this._interceptControlDown=tv.bind(this),this._interceptControlUp=ev.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=fe.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent($c),this.update(),this.state=fe.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Ue.copy(e).sub(this.target),Ue.applyQuaternion(this._quat),this._spherical.setFromVector3(Ue),this.autoRotate&&this.state===fe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=ln:n>Math.PI&&(n-=ln),i<-Math.PI?i+=ln:i>Math.PI&&(i-=ln),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Ue.setFromSpherical(this._spherical),Ue.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ue),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ue.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new z(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new z(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ue.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ur.origin.copy(this.object.position),Ur.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ur.direction))<H_?this.object.lookAt(this.target):(Jc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ur.intersectPlane(Jc,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Ko||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ko||this._lastTargetPosition.distanceToSquared(this.target)>Ko?(this.dispatchEvent($c),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ln/60*this.autoRotateSpeed*t:ln/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ue.setFromMatrixColumn(e,0),Ue.multiplyScalar(-t),this._panOffset.add(Ue)}_panUp(t,e){this.screenSpacePanning===!0?Ue.setFromMatrixColumn(e,1):(Ue.setFromMatrixColumn(e,0),Ue.crossVectors(this.object.up,Ue)),Ue.multiplyScalar(t),this._panOffset.add(Ue)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Ue.copy(i).sub(this.target);let s=Ue.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,s=e-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/e.clientHeight),this._rotateUp(ln*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/e.clientHeight),this._rotateUp(ln*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new At,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function W_(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function q_(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function X_(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(wu),this.state=fe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Y_(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case cs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=fe.DOLLY;break;case cs.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=fe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=fe.ROTATE}break;case cs.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=fe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=fe.PAN}break;default:this.state=fe.NONE}this.state!==fe.NONE&&this.dispatchEvent(wl)}function Z_(r){switch(this.state){case fe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case fe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case fe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function K_(r){this.enabled===!1||this.enableZoom===!1||this.state!==fe.NONE||(r.preventDefault(),this.dispatchEvent(wl),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(wu))}function $_(r){this.enabled!==!1&&this._handleKeyDown(r)}function J_(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case rs.ROTATE:if(this.enableRotate===!1){this.state=fe.NONE;break}this._handleTouchStartRotate(r),this.state=fe.TOUCH_ROTATE;break;case rs.PAN:if(this.enablePan===!1){this.state=fe.NONE;break}this._handleTouchStartPan(r),this.state=fe.TOUCH_PAN;break;default:this.state=fe.NONE}break;case 2:switch(this.touches.TWO){case rs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=fe.TOUCH_DOLLY_PAN;break;case rs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=fe.TOUCH_DOLLY_ROTATE;break;default:this.state=fe.NONE}break;default:this.state=fe.NONE}this.state!==fe.NONE&&this.dispatchEvent(wl)}function Q_(r){switch(this._trackPointer(r),this.state){case fe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case fe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case fe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case fe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=fe.NONE}}function j_(r){this.enabled!==!1&&r.preventDefault()}function tv(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ev(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Tu(){const r=new xn;r.position.set(2.26,0,.68);const t=(u,d={})=>new an({color:u,roughness:.78,...d}),e=t("#344739"),n=t("#a5915a",{metalness:.5,roughness:.4}),i=t("#c5b58f");function s(u,d,h,f,p,v=24){const m=new pe(new li(u,d,h,v),f);return m.position.set(...p),m.castShadow=m.receiveShadow=!0,r.add(m),m}function o(u,d,h,f){const p=new z(...u),v=new z(...d),m=v.clone().sub(p);s(h,h,m.length(),f,p.add(v).multiplyScalar(.5).toArray()).quaternion.setFromUnitVectors(new z(0,1,0),m.normalize())}s(.3,.32,.055,e,[0,.0275,0]),o([0,.08,0],[0,2.04,0],.025,n);const a=s(.32,.47,.5,t("#e6d7b4",{emissive:"#e6bd73",emissiveIntensity:0}),[0,1.96,0],40),l=s(.44,.44,.015,t("#f5e8c7",{emissive:"#e6bd73",emissiveIntensity:0}),[0,1.711,0]);for(let u=0;u<20;u++){const d=u*Math.PI/10;o([Math.cos(d)*.325,2.205,Math.sin(d)*.325],[Math.cos(d)*.466,1.715,Math.sin(d)*.466],.004,i)}const c=new Wf("#ffce85",0,5,2);return c.position.set(0,1.7,0),r.add(c),{group:r,light:c,setPower(u){c.intensity=6*u,a.material.emissiveIntensity=.15*u,l.material.emissiveIntensity=.55*u}}}const Ns=new z;function gn(r,t,e,n,i,s){const o=2*Math.PI*i/4,a=Math.max(s-2*i,0),l=Math.PI/4;Ns.copy(t),Ns[n]=0,Ns.normalize();const c=.5*o/(o+a),u=1-Ns.angleTo(r)/l;return Math.sign(Ns[e])===1?u*c:a/(o+a)+c+c*(1-u)}class Tl extends ai{constructor(t=1,e=1,n=1,i=2,s=.1){const o=i*2+1;if(s=Math.min(t/2,e/2,n/2,s),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:s},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const l=new z,c=new z,u=new z(t,e,n).divideScalar(2).subScalar(s),d=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,p=d.length/6,v=new z,m=.5/o;for(let g=0,_=0;g<d.length;g+=3,_+=2)switch(l.fromArray(d,g),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[g+0]=u.x*Math.sign(l.x)+c.x*s,d[g+1]=u.y*Math.sign(l.y)+c.y*s,d[g+2]=u.z*Math.sign(l.z)+c.z*s,h[g+0]=c.x,h[g+1]=c.y,h[g+2]=c.z,Math.floor(g/p)){case 0:v.set(1,0,0),f[_+0]=gn(v,c,"z","y",s,n),f[_+1]=1-gn(v,c,"y","z",s,e);break;case 1:v.set(-1,0,0),f[_+0]=1-gn(v,c,"z","y",s,n),f[_+1]=1-gn(v,c,"y","z",s,e);break;case 2:v.set(0,1,0),f[_+0]=1-gn(v,c,"x","z",s,t),f[_+1]=gn(v,c,"z","x",s,n);break;case 3:v.set(0,-1,0),f[_+0]=1-gn(v,c,"x","z",s,t),f[_+1]=1-gn(v,c,"z","x",s,n);break;case 4:v.set(0,0,1),f[_+0]=1-gn(v,c,"x","y",s,t),f[_+1]=1-gn(v,c,"y","x",s,e);break;case 5:v.set(0,0,-1),f[_+0]=gn(v,c,"x","y",s,t),f[_+1]=1-gn(v,c,"y","x",s,e);break}}static fromJSON(t){return new Tl(t.width,t.height,t.depth,t.segments,t.radius)}}function nv(r,t=!1){const e=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},o={},a=r[0].morphTargetsRelative,l=new De;l.morphTargetsRelative=a;let c=0;for(let u=0;u<r.length;++u){const d=r[u];let h=0,f=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(d.attributes[p]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[p].length!==r[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.morphAttributes[p]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(t){let p;if(e)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(e){let u=0;const d=[];for(let h=0;h<r.length;++h){const f=r[h].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+u);u+=r[h].attributes.position.count}l.setIndex(d)}for(const u in s){const d=Qc(s[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(const u in o){const d=o[u][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<d;++h){const f=[];for(let v=0;v<o[u].length;++v)f.push(o[u][v][h]);const p=Qc(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}}return l}function Qc(r){let t,e,n,i=-1,s=0;for(let c=0;c<r.length;++c){const u=r[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*e}const o=new t(s),a=new Xe(o,e,n);let l=0;for(let c=0;c<r.length;++c){const u=r[c];if(u.isInterleavedBufferAttribute){const d=l/e;for(let h=0,f=u.count;h<f;h++)for(let p=0;p<e;p++){const v=u.getComponent(h,p);a.setComponent(h+d,p,v)}}else o.set(u.array,l);l+=u.count*e}return i!==void 0&&(a.gpuType=i),a}const $o=new Map,iv={cream:"#e5ddc8",plaster:"#e0dccb",sage:"#7c8a72",dark:"#344739",oak:"#9a6840",walnut:"#514745",brass:"#a5915a",clay:"#9f6462",paper:"#e8dfc8",black:"#202c28"};function ne(r,t={}){r=iv[r]||r;const e=r+JSON.stringify(t);return $o.has(e)||$o.set(e,new an({color:r,roughness:.78,...t})),$o.get(e)}function zi(r,t,e,n=[0,0,0],i=[0,0,0]){const s=new pe(t,e);return s.position.set(...n),s.rotation.set(...i),s.castShadow=s.receiveShadow=!0,r.add(s),s}function ge(r,t,e,n,i=.015,s){return zi(r,i?new Tl(...t,2,Math.min(i,...t.map(o=>o/2))):new ai(...t),e,n,s)}function sn(r,t,e,n,i,s,o,a=24){return zi(r,new li(t,e,n,a),i,s,o)}function $a(r,t,e,n,i=[1,1,1]){const s=zi(r,new Mi(t,16,12),e,n);return s.scale.set(...i),s}function Hn(r,t,e,n,i){const s=new z(...t),o=new z(...e),a=o.clone().sub(s),l=sn(r,n,n,a.length(),i,s.clone().add(o).multiplyScalar(.5).toArray());return l.quaternion.setFromUnitVectors(new z(0,1,0),a.normalize()),l}function os(r,t,e){const n=document.createElement("canvas");n.width=r,n.height=t,e(n.getContext("2d"),r,t);const i=new lo(n);return i.colorSpace=He,i.anisotropy=4,i}function sv(r=1){return()=>(r=r*1664525+1013904223>>>0,r/4294967296)}const Fr=sv(42);function rv(){return os(512,512,(r,t,e)=>{r.fillStyle="#9b8664",r.fillRect(0,0,t,e);for(let n=0;n<1100;n++){const i=Fr()*e;r.strokeStyle=`rgba(${Fr()>.5?"66,39,18":"234,203,155"},${.03+Fr()*.09})`,r.lineWidth=.4+Fr()*1.6,r.beginPath(),r.moveTo(0,i);for(let s=0;s<=t;s+=24)r.lineTo(s,i+Math.sin(s/95+n)*2.2);r.stroke()}})}function jc(r){return os(512,640,(t,e,n)=>{if(t.fillStyle="#dcd9c5",t.fillRect(0,0,e,n),r==="art")t.fillStyle="#9a6045",t.beginPath(),t.arc(256,241,132,Math.PI,0),t.lineTo(388,453),t.lineTo(124,453),t.fill(),t.fillStyle="#345e68",t.beginPath(),t.arc(286,319,87,0,Math.PI*2),t.fill(),t.fillStyle="#cdb15b",t.beginPath(),t.arc(210,312,69,0,Math.PI*2),t.fill();else{t.strokeStyle="#b6b99f",t.lineWidth=2;for(let i=100;i<580;i+=48)t.beginPath(),t.moveTo(55,i),t.lineTo(457,i),t.stroke()}})}function Ds(r,t,e,n,i,s=[0,0,0],o=!1){return zi(r,new ci(t,e),new an({map:n,roughness:.9,...o?{emissive:16777215,emissiveMap:n,emissiveIntensity:.32}:{}}),i,s)}function Bn(r){r.updateMatrixWorld(!0);const t=r.matrixWorld.clone().invert(),e=new Map;r.traverse(n=>{if(!n.isMesh||Array.isArray(n.material))return;const i=n.geometry.clone();i.applyMatrix4(new me().multiplyMatrices(t,n.matrixWorld));const s=i.index?i.toNonIndexed():i;for(const a of Object.keys(s.attributes))["position","normal","uv"].includes(a)||s.deleteAttribute(a);const o=e.get(n.material)||[];o.push(s),e.set(n.material,o)}),r.clear();for(const[n,i]of e){const s=nv(i);if(s){const o=zi(r,s,n);o.frustumCulled=!0}for(const o of i)o.dispose()}return r}function We(r,t=[0,0,0],e=0){const n=new xn;return n.position.set(...t),n.rotation.y=e,r.add(n),n}function ov(r,t,e=1){const n=We(r,t);n.scale.setScalar(e),sn(n,.25,.19,.4,ne("clay"),[0,.2,0]),sn(n,.255,.255,.045,ne("#99735f"),[0,.39,0]),sn(n,.226,.226,.015,ne("#3f3c2a"),[0,.407,0]);for(let i=0;i<9;i++){const s=i*2.4,o=.85+i%3*.27,a=Math.cos(s)*.28,l=Math.sin(s)*.28;Hn(n,[0,.4,0],[a,o,l],.013,ne("dark")),$a(n,.24,ne(i%2?"#305e50":"#797f45"),[a,o,l],[.52,1.5,.17]).rotation.set(Math.sin(s)*.6,s,Math.cos(s)*.5)}return n}function av(r,t,e,n,i=0){const s=We(r,t,i);return ge(s,e,ne("paper"),[0,0,0],.005),ge(s,[e[0]+.025,.018,e[2]+.025],ne(n),[0,e[1]/2,0]),ge(s,[e[0]+.025,.018,e[2]+.025],ne(n),[0,-e[1]/2,0]),ge(s,[.025,e[1],e[2]+.025],ne(n),[-e[0]/2,0,0]),s}function lv(r,t=Tu()){const e=We(r),n=We(e),i=We(e),s=We(e),o=[],a=[],l=[],c=new an({map:rv(),color:"#b5a17c",roughness:.73}),u=ne("walnut"),d=ne("cream");ne("sage");const h=ne("brass",{metalness:.5,roughness:.4}),f=(w,D,F)=>l.push({size:w,pos:D,quat:F});f([140,.2,140],[0,-.1,0]),ge(i,[.97,1.2,.055],u,[.65,2.01,-2.34]),ge(i,[.9,1.13,.015],d,[.65,2.01,-2.303]),Ds(i,.82,1.04,jc("art"),[.65,2.01,-2.29]);for(const w of[.26,1.04])Hn(i,[w,.02,-2.16],[w,2.55,-2.38],.035,u);Hn(i,[.65,.02,-2.88],[.65,2.15,-2.38],.04,u),ge(i,[1.08,.065,.18],c,[.65,1.39,-2.28]),f([1.05,1.3,.12],[.65,2,-2.34]),ge(n,[3.45,.13,1.3],c,[0,1.38,-1.27],.04),f([3.45,.13,1.3],[0,1.38,-1.27]),ge(n,[3.35,.11,.07],u,[0,1.49,-1.89]);for(const w of[-1.48,1.48])for(const D of[-1.76,-.79])Hn(n,[w,1.32,D],[w*1.06,.055,D+.02],.055,u),f([.13,1.32,.13],[w,.66,D]);ge(n,[.73,.58,1.04],c,[-1.06,1.02,-1.3],.025),f([.73,.58,1.04],[-1.06,1.02,-1.3]);for(let w=0;w<2;w++)ge(n,[.68,.255,.04],c,[-1.06,.88+w*.28,-.755]),ge(n,[.18,.023,.035],h,[-1.06,.91+w*.28,-.724]);const p=os(1024,768,(w,D,F)=>{w.fillStyle="#80553f",w.fillRect(0,0,D,F),w.strokeStyle="#d7ba83",w.lineWidth=26,w.strokeRect(39,39,D-78,F-78),w.strokeStyle="#465a47",w.lineWidth=12,w.strokeRect(66,66,D-132,F-132);for(let k=120;k<F-80;k+=100)for(let Y=130;Y<D-90;Y+=120)w.save(),w.translate(Y,k),w.rotate(Math.PI/4),w.fillStyle="#d1ae7b",w.fillRect(-23,-23,46,46),w.fillStyle="#6c7454",w.fillRect(-10,-10,20,20),w.restore();for(let k=0;k<F;k+=3)w.fillStyle=k%2?"#ffffff0b":"#33251912",w.fillRect(0,k,D,1)}),v=We(n,[.25,0,.38],-.25);ge(v,[.86,.13,.8],u,[0,.77,0],.06),ge(v,[.81,.14,.75],ne("#62694b"),[0,.87,0],.08),ge(v,[.87,.55,.13],u,[0,1.26,.36],.075,[-.13,0,0]),ge(v,[.79,.44,.12],ne("#62694b"),[0,1.28,.285],.07,[-.13,0,0]);for(const w of[-.35,.35])for(const D of[-.3,.3])Hn(v,[w,.79,D],[w*1.25,.037,D*1.4],.037,u);for(const w of[-.36,.36])Hn(v,[w,.7,.29],[w,1.28,.36],.03,u);f([.95,.9,.95],[.25,.48,.38]),f([.95,.5,.16],[.34,1.22,.72]);const m=We(n,[-2.22,0,.63]);ge(m,[.94,.55,1.18],c,[0,.47,0],.025);for(const w of[-.34,.34])for(const D of[-.45,.45])ge(m,[.07,.24,.07],u,[w,.12,D]);for(let w=0;w<7;w++)ge(m,[.07,.37,.65],ne(["#4f6252","#ae5e48","#d2bf94","#b38c55"][w%4]),[-.31+w*.088,.46,.12],.006);ge(m,[.86,.075,1.05],u,[0,.79,0]),sn(m,.325,.325,.023,ne("black"),[0,.841,-.06]),sn(m,.11,.11,.025,ne("clay"),[0,.854,-.06]),sn(m,.018,.018,.034,h,[0,.87,-.06]),Hn(m,[.32,.88,-.4],[.3,.88,.14],.012,h),ge(m,[.07,.027,.08],ne("black"),[.28,.87,.18]),f([.94,.86,1.18],[-2.22,.43,.63]),ov(n,[2.35,0,-1.67],1.15),f([.65,.5,.65],[2.35,.25,-1.67]),e.add(t.group);const g=t.light;t.setPower(1),f([.64,.055,.64],[2.26,.0275,.68]),f([.055,1.96,.055],[2.26,1.06,.68]),f([.94,.5,.94],[2.26,1.96,.68]);const _=zi(e,new li(.33,.47,.5,24),new on({visible:!1}),[2.26,1.96,.68]);o.push({mesh:_,label:"Lamp · hide the world",section:"lamp"});const x=We(e,[-.2,1.465,-1.36],.04);ge(x,[.83,.035,.56],ne("#b8bdb3",{metalness:.55,roughness:.4}),[0,.019,0],.02),ge(x,[.7,.006,.25],ne("#405047"),[0,.039,-.065],.01);for(let w=0;w<4;w++)for(let D=0;D<11;D++)ge(x,[.048,.004,.035],ne("#919b91"),[-.31+D*.062,.044,-.16+w*.053],.004);ge(x,[.25,.003,.12],ne("#a2aa9e"),[0,.04,.16],.01);const M=We(x,[0,.04,-.255]);M.rotation.x=-.19,ge(M,[.83,.54,.033],ne("#a7afa4"),[0,.27,0],.025);const E=os(768,480,(w,D,F)=>{w.fillStyle="#344c60",w.fillRect(0,0,D,F),w.fillStyle="#bfae77",w.beginPath(),w.arc(384,224,83,Math.PI,0),w.lineTo(467,356),w.lineTo(301,356),w.fill(),w.fillStyle="#ded8be",w.beginPath(),w.arc(446,154,33,0,Math.PI*2),w.fill()});Ds(M,.76,.467,E,[0,.278,.019],void 0,!0),Bn(x),o.push({mesh:x,label:"Laptop · selected work",section:"work"}),f([.85,.56,.25],[-.2,1.72,-1.65]),f([.85,.05,.56],[-.2,1.47,-1.36]);const b=We(n,[-1.36,1.66,-1.63]);sn(b,.17,.17,.075,d,[0,0,0],[Math.PI/2,0,0]),sn(b,.149,.149,.008,ne("#f7efd8"),[0,0,.041],[Math.PI/2,0,0]),Hn(b,[0,0,.049],[-.065,.045,.049],.007,ne("dark")),Hn(b,[0,0,.05],[.015,.1,.05],.006,ne("dark")),ge(b,[.15,.04,.1],u,[0,-.18,0]),sn(n,.075,.07,.18,ne("clay"),[1.37,1.54,-1.72]);for(let w=0;w<4;w++)Hn(n,[1.34+w*.022,1.52,-1.72],[1.33+w*.03,1.85-w%2*.06,-1.72],.009,ne(w%2?"sage":"#cda35b"));const y=We(e);av(y,[0,0,0],[.48,.045,.34],"#99735f"),Ds(y,.42,.29,jc("notes"),[0,.034,0],[-Math.PI/2,0,0]),a.push({mesh:Bn(y),name:"notebook",label:"Notebook · notes / drag to pick up",section:"notes",shape:"box",size:[.5,.07,.36],mass:.7,pos:[.85,1.52,-1.12],rotation:[0,-.18,0]});const S=We(e);sn(S,.112,.092,.23,ne("#e7ddc5"),[0,0,0]),sn(S,.096,.096,.012,ne("#61442d"),[0,.119,0]),zi(S,new xl(.079,.023,8,20),d,[.122,.017,0]),a.push({mesh:Bn(S),name:"mug",label:"Coffee · pick me up",shape:"cylinder",radius:.115,height:.25,mass:1.8,pos:[-.91,1.61,-1.05]});const P=We(e);$a(P,.115,ne("#25302b",{roughness:.4}),[0,0,0]);const A=os(128,128,w=>{w.fillStyle="#f4ecd6",w.fillRect(0,0,128,128)});Ds(P,.115,.115,A,[0,.045,.108],[-.4,0,0]),a.push({mesh:Bn(P),name:"eight-ball",label:"Eight ball · give it a nudge",shape:"sphere",radius:.115,mass:.45,restitution:.55,pos:[1.3,1.58,-.88]});const I=We(e);ge(I,[.23,.045,.43],ne("clay"),[0,0,0],.03),ge(I,[.197,.005,.36],ne("#273c32"),[0,.026,0],.02),Ds(I,.17,.3,os(192,320,w=>{w.fillStyle="#314a3a",w.fillRect(0,0,192,320),w.fillStyle="#ded8be",w.beginPath(),w.arc(96,160,30,0,Math.PI*2),w.fill()}),[0,.03,0],[-Math.PI/2,0,0],!0),a.push({mesh:Bn(I),name:"phone",label:"Phone · about / drag to pick up",section:"about",shape:"box",size:[.23,.06,.43],mass:.8,pos:[.37,1.51,-.8],rotation:[0,.2,0]});const N=We(e);sn(N,.013,.013,.42,ne("#d4a251"),[0,0,0],[0,0,Math.PI/2],6),sn(N,.013,0,.055,ne("#dbc5a0"),[.236,0,0],[0,0,Math.PI/2],6),sn(N,.014,.014,.055,ne("clay"),[-.235,0,0],[0,0,Math.PI/2]),a.push({mesh:Bn(N),name:"pencil",label:"Pencil · pick me up",shape:"box",size:[.53,.028,.028],mass:.12,pos:[.93,1.49,-.79],rotation:[0,.15,0]});const L=We(e);ge(L,[.19,.19,.19],ne("sage"),[0,0,0],.025);for(let w of[-1,1])for(let D of[-1,1])$a(L,.018,d,[w*.047,.097,D*.047],[1,.2,1]);return a.push({mesh:Bn(L),name:"wooden-die",label:"Wooden die · toss it",shape:"box",size:[.19,.19,.19],mass:.4,restitution:.24,pos:[1.18,1.57,-1.39]}),Bn(n),Bn(i),Bn(s),{rugMap:p,room:e,props:a,colliders:l,interactives:o,backWall:i,leftWall:s,lamp:g}}class Nn{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new C);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new C);const n=this.elements,i=t.x,s=t.y,o=t.z;return e.x=n[0]*i+n[1]*s+n[2]*o,e.y=n[3]*i+n[4]*s+n[5]*o,e.z=n[6]*i+n[7]*s+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new Nn);const n=this.elements,i=t.elements,s=e.elements,o=n[0],a=n[1],l=n[2],c=n[3],u=n[4],d=n[5],h=n[6],f=n[7],p=n[8],v=i[0],m=i[1],g=i[2],_=i[3],x=i[4],M=i[5],E=i[6],b=i[7],y=i[8];return s[0]=o*v+a*_+l*E,s[1]=o*m+a*x+l*b,s[2]=o*g+a*M+l*y,s[3]=c*v+u*_+d*E,s[4]=c*m+u*x+d*b,s[5]=c*g+u*M+d*y,s[6]=h*v+f*_+p*E,s[7]=h*m+f*x+p*b,s[8]=h*g+f*M+p*y,e}scale(t,e){e===void 0&&(e=new Nn);const n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new C);const n=3,i=4,s=[];let o,a;for(o=0;o<n*i;o++)s.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)s[o+i*a]=this.elements[o+3*a];s[3]=t.x,s[7]=t.y,s[11]=t.z;let l=3;const c=l;let u;const d=4;let h;do{if(o=c-l,s[o+i*o]===0){for(a=o+1;a<c;a++)if(s[o+i*a]!==0){u=d;do h=d-u,s[h+i*o]+=s[h+i*a];while(--u);break}}if(s[o+i*o]!==0)for(a=o+1;a<c;a++){const f=s[o+i*a]/s[o+i*o];u=d;do h=d-u,s[h+i*a]=h<=o?0:s[h+i*a]-s[h+i*o]*f;while(--u)}}while(--l);if(e.z=s[2*i+3]/s[2*i+2],e.y=(s[1*i+3]-s[1*i+2]*e.z)/s[1*i+1],e.x=(s[0*i+3]-s[0*i+2]*e.z-s[0*i+1]*e.y)/s[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";for(let n=0;n<9;n++)t+=this.elements[n]+",";return t}reverse(t){t===void 0&&(t=new Nn);const e=3,n=6,i=cv;let s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)i[s+n*o]=this.elements[s+3*o];i[3]=1,i[9]=0,i[15]=0,i[4]=0,i[10]=1,i[16]=0,i[5]=0,i[11]=0,i[17]=1;let a=3;const l=a;let c;const u=n;let d;do{if(s=l-a,i[s+n*s]===0){for(o=s+1;o<l;o++)if(i[s+n*o]!==0){c=u;do d=u-c,i[d+n*s]+=i[d+n*o];while(--c);break}}if(i[s+n*s]!==0)for(o=s+1;o<l;o++){const h=i[s+n*o]/i[s+n*s];c=u;do d=u-c,i[d+n*o]=d<=s?0:i[d+n*o]-i[d+n*s]*h;while(--c)}}while(--a);s=2;do{o=s-1;do{const h=i[s+n*o]/i[s+n*s];c=n;do d=n-c,i[d+n*o]=i[d+n*o]-i[d+n*s]*h;while(--c)}while(o--)}while(--s);s=2;do{const h=1/i[s+n*s];c=n;do d=n-c,i[d+n*s]=i[d+n*s]*h;while(--c)}while(s--);s=2;do{o=2;do{if(d=i[e+o+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,o,d)}while(o--)}while(s--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,s=t.w,o=e+e,a=n+n,l=i+i,c=e*o,u=e*a,d=e*l,h=n*a,f=n*l,p=i*l,v=s*o,m=s*a,g=s*l,_=this.elements;return _[0]=1-(h+p),_[1]=u-g,_[2]=d+m,_[3]=u+g,_[4]=1-(c+p),_[5]=f-v,_[6]=d-m,_[7]=f+v,_[8]=1-(c+h),this}transpose(t){t===void 0&&(t=new Nn);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const cv=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class C{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new C);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,l=this.z;return e.x=a*s-l*i,e.y=l*n-o*s,e.z=o*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new C(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new C(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new Nn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new C);const e=this.x,n=this.y,i=this.z;let s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return Math.sqrt((s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return(s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i)}scale(t,e){e===void 0&&(e=new C);const n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new C),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new C),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new C),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=hv,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const o=uv;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,s=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(th),th.almostEquals(t,e)}clone(){return new C(this.x,this.y,this.z)}}C.ZERO=new C(0,0,0);C.UNIT_X=new C(1,0,0);C.UNIT_Y=new C(0,1,0);C.UNIT_Z=new C(0,0,1);const hv=new C,uv=new C,th=new C;class pn{constructor(t){t===void 0&&(t={}),this.lowerBound=new C,this.upperBound=new C,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const s=this.lowerBound,o=this.upperBound,a=n;s.copy(t[0]),a&&a.vmult(s,s),o.copy(s);for(let l=1;l<t.length;l++){let c=t[l];a&&(a.vmult(c,eh),c=eh),c.x>o.x&&(o.x=c.x),c.x<s.x&&(s.x=c.x),c.y>o.y&&(o.y=c.y),c.y<s.y&&(s.y=c.y),c.z>o.z&&(o.z=c.z),c.z<s.z&&(s.z=c.z)}return e&&(e.vadd(s,s),e.vadd(o,o)),i&&(s.x-=i,s.y-=i,s.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new pn().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,o=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,a=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,l=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return o&&a&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,o,a,l){const c=this.lowerBound,u=this.upperBound;t.copy(c),e.set(u.x,c.y,c.z),n.set(u.x,u.y,c.z),i.set(c.x,u.y,u.z),s.set(u.x,c.y,u.z),o.set(c.x,u.y,c.z),a.set(c.x,c.y,u.z),l.copy(u)}toLocalFrame(t,e){const n=nh,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],d=n[7];this.getCorners(i,s,o,a,l,c,u,d);for(let h=0;h!==8;h++){const f=n[h];t.pointToLocal(f,f)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=nh,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],d=n[7];this.getCorners(i,s,o,a,l,c,u,d);for(let h=0;h!==8;h++){const f=n[h];t.pointToWorld(f,f)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,s=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*s,u=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*o,h=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,l),Math.min(c,u)),Math.min(d,h)),p=Math.min(Math.min(Math.max(a,l),Math.max(c,u)),Math.max(d,h));return!(p<0||f>p)}}const eh=new C,nh=[new C,new C,new C,new C,new C,new C,new C,new C];class ih{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:s}=e;if(s>i){const o=s;s=i,i=o}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class Au{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}}class Le{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new C),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=dv,i=fv;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new Le);const n=this.x,i=this.y,s=this.z,o=this.w,a=t.x,l=t.y,c=t.z,u=t.w;return e.x=n*u+o*a+i*c-s*l,e.y=i*u+o*l+s*a-n*c,e.z=s*u+o*c+n*l-i*a,e.w=o*u-n*a-i*l-s*c,e}inverse(t){t===void 0&&(t=new Le);const e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);const o=1/(e*e+n*n+i*i+s*s);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new Le),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new C);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,l=this.z,c=this.w,u=c*n+a*s-l*i,d=c*i+l*n-o*s,h=c*s+o*i-a*n,f=-o*n-a*i-l*s;return e.x=u*c+f*-o+d*-l-h*-a,e.y=d*c+f*-a+h*-o-u*-l,e.z=h*c+f*-l+u*-a-d*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,s;const o=this.x,a=this.y,l=this.z,c=this.w;switch(e){case"YZX":const u=o*a+l*c;if(u>.499&&(n=2*Math.atan2(o,c),i=Math.PI/2,s=0),u<-.499&&(n=-2*Math.atan2(o,c),i=-Math.PI/2,s=0),n===void 0){const d=o*o,h=a*a,f=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*h-2*f),i=Math.asin(2*u),s=Math.atan2(2*o*c-2*a*l,1-2*d-2*f)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const s=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),u=Math.sin(n/2);return i==="XYZ"?(this.x=l*o*a+s*c*u,this.y=s*c*a-l*o*u,this.z=s*o*u+l*c*a,this.w=s*o*a-l*c*u):i==="YXZ"?(this.x=l*o*a+s*c*u,this.y=s*c*a-l*o*u,this.z=s*o*u-l*c*a,this.w=s*o*a+l*c*u):i==="ZXY"?(this.x=l*o*a-s*c*u,this.y=s*c*a+l*o*u,this.z=s*o*u+l*c*a,this.w=s*o*a-l*c*u):i==="ZYX"?(this.x=l*o*a-s*c*u,this.y=s*c*a+l*o*u,this.z=s*o*u-l*c*a,this.w=s*o*a+l*c*u):i==="YZX"?(this.x=l*o*a+s*c*u,this.y=s*c*a+l*o*u,this.z=s*o*u-l*c*a,this.w=s*o*a-l*c*u):i==="XZY"&&(this.x=l*o*a-s*c*u,this.y=s*c*a-l*o*u,this.z=s*o*u+l*c*a,this.w=s*o*a+l*c*u),this}clone(){return new Le(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new Le);const i=this.x,s=this.y,o=this.z,a=this.w;let l=t.x,c=t.y,u=t.z,d=t.w,h,f,p,v,m;return f=i*l+s*c+o*u+a*d,f<0&&(f=-f,l=-l,c=-c,u=-u,d=-d),1-f>1e-6?(h=Math.acos(f),p=Math.sin(h),v=Math.sin((1-e)*h)/p,m=Math.sin(e*h)/p):(v=1-e,m=e),n.x=v*i+m*l,n.y=v*s+m*c,n.z=v*o+m*u,n.w=v*a+m*d,n}integrate(t,e,n,i){i===void 0&&(i=new Le);const s=t.x*n.x,o=t.y*n.y,a=t.z*n.z,l=this.x,c=this.y,u=this.z,d=this.w,h=e*.5;return i.x+=h*(s*d+o*u-a*c),i.y+=h*(o*d+a*l-s*u),i.z+=h*(a*d+s*c-o*l),i.w+=h*(-s*l-o*c-a*u),i}}const dv=new C,fv=new C,pv={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class It{constructor(t){t===void 0&&(t={}),this.id=It.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}It.idCounter=0;It.types=pv;class de{constructor(t){t===void 0&&(t={}),this.position=new C,this.quaternion=new Le,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return de.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return de.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new C),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new C),n.vsub(t,i),e.conjugate(sh),sh.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new C),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new C),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new C),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const sh=new Le;class fs extends It{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:o}=t;super({type:It.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new C;for(let s=0;s!==t.length;s++){const o=t[s],a=o.length;for(let l=0;l!==a;l++){const c=(l+1)%a;e[o[l]].vsub(e[o[c]],i),i.normalize();let u=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){u=!0;break}u||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new C;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],o=this.vertices[n[2]];fs.computeNormal(i,s,o,e)}static computeNormal(t,e,n,i){const s=new C,o=new C;e.vsub(t,o),n.vsub(e,s),s.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,o,a,l,c){const u=new C;let d=-1,h=-Number.MAX_VALUE;for(let p=0;p<n.faces.length;p++){u.copy(n.faceNormals[p]),s.vmult(u,u);const v=u.dot(o);v>h&&(h=v,d=p)}const f=[];for(let p=0;p<n.faces[d].length;p++){const v=n.vertices[n.faces[d][p]],m=new C;m.copy(v),s.vmult(m,m),i.vadd(m,m),f.push(m)}d>=0&&this.clipFaceAgainstHull(o,t,e,f,a,l,c)}findSeparatingAxis(t,e,n,i,s,o,a,l){const c=new C,u=new C,d=new C,h=new C,f=new C,p=new C;let v=Number.MAX_VALUE;const m=this;if(m.uniqueAxes)for(let g=0;g!==m.uniqueAxes.length;g++){n.vmult(m.uniqueAxes[g],c);const _=m.testSepAxis(c,t,e,n,i,s);if(_===!1)return!1;_<v&&(v=_,o.copy(c))}else{const g=a?a.length:m.faces.length;for(let _=0;_<g;_++){const x=a?a[_]:_;c.copy(m.faceNormals[x]),n.vmult(c,c);const M=m.testSepAxis(c,t,e,n,i,s);if(M===!1)return!1;M<v&&(v=M,o.copy(c))}}if(t.uniqueAxes)for(let g=0;g!==t.uniqueAxes.length;g++){s.vmult(t.uniqueAxes[g],u);const _=m.testSepAxis(u,t,e,n,i,s);if(_===!1)return!1;_<v&&(v=_,o.copy(u))}else{const g=l?l.length:t.faces.length;for(let _=0;_<g;_++){const x=l?l[_]:_;u.copy(t.faceNormals[x]),s.vmult(u,u);const M=m.testSepAxis(u,t,e,n,i,s);if(M===!1)return!1;M<v&&(v=M,o.copy(u))}}for(let g=0;g!==m.uniqueEdges.length;g++){n.vmult(m.uniqueEdges[g],h);for(let _=0;_!==t.uniqueEdges.length;_++)if(s.vmult(t.uniqueEdges[_],f),h.cross(f,p),!p.almostZero()){p.normalize();const x=m.testSepAxis(p,t,e,n,i,s);if(x===!1)return!1;x<v&&(v=x,o.copy(p))}}return i.vsub(e,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,i,s,o){const a=this;fs.project(a,t,n,i,Jo),fs.project(e,t,s,o,Qo);const l=Jo[0],c=Jo[1],u=Qo[0],d=Qo[1];if(l<d||u<c)return!1;const h=l-d,f=u-c;return h<f?h:f}calculateLocalInertia(t,e){const n=new C,i=new C;this.computeLocalAABB(i,n);const s=n.x-i.x,o=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*s*2*s+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,o,a){const l=new C,c=new C,u=new C,d=new C,h=new C,f=new C,p=new C,v=new C,m=this,g=[],_=i,x=g;let M=-1,E=Number.MAX_VALUE;for(let A=0;A<m.faces.length;A++){l.copy(m.faceNormals[A]),n.vmult(l,l);const I=l.dot(t);I<E&&(E=I,M=A)}if(M<0)return;const b=m.faces[M];b.connectedFaces=[];for(let A=0;A<m.faces.length;A++)for(let I=0;I<m.faces[A].length;I++)b.indexOf(m.faces[A][I])!==-1&&A!==M&&b.connectedFaces.indexOf(A)===-1&&b.connectedFaces.push(A);const y=b.length;for(let A=0;A<y;A++){const I=m.vertices[b[A]],N=m.vertices[b[(A+1)%y]];I.vsub(N,c),u.copy(c),n.vmult(u,u),e.vadd(u,u),d.copy(this.faceNormals[M]),n.vmult(d,d),e.vadd(d,d),u.cross(d,h),h.negate(h),f.copy(I),n.vmult(f,f),e.vadd(f,f);const L=b.connectedFaces[A];p.copy(this.faceNormals[L]);const w=this.getPlaneConstantOfFace(L);v.copy(p),n.vmult(v,v);const D=w-v.dot(e);for(this.clipFaceAgainstPlane(_,x,v,D);_.length;)_.shift();for(;x.length;)_.push(x.shift())}p.copy(this.faceNormals[M]);const S=this.getPlaneConstantOfFace(M);v.copy(p),n.vmult(v,v);const P=S-v.dot(e);for(let A=0;A<_.length;A++){let I=v.dot(_[A])+P;if(I<=s&&(console.log(`clamped: depth=${I} to minDist=${s}`),I=s),I<=o){const N=_[A];if(I<=1e-6){const L={point:N,normal:v,depth:I};a.push(L)}}}}clipFaceAgainstPlane(t,e,n,i){let s,o;const a=t.length;if(a<2)return e;let l=t[t.length-1],c=t[0];s=n.dot(l)+i;for(let u=0;u<a;u++){if(c=t[u],o=n.dot(c)+i,s<0)if(o<0){const d=new C;d.copy(c),e.push(d)}else{const d=new C;l.lerp(c,s/(s-o),d),e.push(d)}else if(o<0){const d=new C;l.lerp(c,s/(s-o),d),e.push(d),e.push(c)}l=c,s=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new C);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new C);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const s=this.vertices;let o,a,l,c,u,d,h=new C;for(let f=0;f<s.length;f++){h.copy(s[f]),e.vmult(h,h),t.vadd(h,h);const p=h;(o===void 0||p.x<o)&&(o=p.x),(c===void 0||p.x>c)&&(c=p.x),(a===void 0||p.y<a)&&(a=p.y),(u===void 0||p.y>u)&&(u=p.y),(l===void 0||p.z<l)&&(l=p.z),(d===void 0||p.z>d)&&(d=p.z)}n.set(o,a,l),i.set(c,u,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new C);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){const o=i[s];e.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){const o=this.faceNormals[s];e.vmult(o,o)}}if(t)for(let s=0;s<n;s++){const o=i[s];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,s=new C;this.getAveragePointLocal(s);for(let o=0;o<this.faces.length;o++){let a=i[o];const l=e[n[o][0]],c=new C;t.vsub(l,c);const u=a.dot(c),d=new C;s.vsub(l,d);const h=a.dot(d);if(u<0&&h>0||u>0&&h<0)return!1}return-1}static project(t,e,n,i,s){const o=t.vertices.length,a=mv;let l=0,c=0;const u=gv,d=t.vertices;u.setZero(),de.vectorToLocalFrame(n,i,e,a),de.pointToLocalFrame(n,i,u,u);const h=u.dot(a);c=l=d[0].dot(a);for(let f=1;f<o;f++){const p=d[f].dot(a);p>l&&(l=p),p<c&&(c=p)}if(c-=h,l-=h,c>l){const f=c;c=l,l=f}s[0]=l,s[1]=c}}const Jo=[],Qo=[];new C;const mv=new C,gv=new C;class nr extends It{constructor(t){super({type:It.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=C,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new fs({vertices:s,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new C),nr.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<s.length;o++)vi.set(s[o][0],s[o][1],s[o][2]),e.vmult(vi,vi),t.vadd(vi,vi),n(vi.x,vi.y,vi.z)}calculateWorldAABB(t,e,n,i){const s=this.halfExtents;zn[0].set(s.x,s.y,s.z),zn[1].set(-s.x,s.y,s.z),zn[2].set(-s.x,-s.y,s.z),zn[3].set(-s.x,-s.y,-s.z),zn[4].set(s.x,-s.y,-s.z),zn[5].set(s.x,s.y,-s.z),zn[6].set(-s.x,s.y,-s.z),zn[7].set(s.x,-s.y,s.z);const o=zn[0];e.vmult(o,o),t.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const l=zn[a];e.vmult(l,l),t.vadd(l,l);const c=l.x,u=l.y,d=l.z;c>i.x&&(i.x=c),u>i.y&&(i.y=u),d>i.z&&(i.z=d),c<n.x&&(n.x=c),u<n.y&&(n.y=u),d<n.z&&(n.z=d)}}}const vi=new C,zn=[new C,new C,new C,new C,new C,new C,new C,new C],Al={DYNAMIC:1,STATIC:2,KINEMATIC:4},Rl={AWAKE:0,SLEEPY:1,SLEEPING:2};class Ct extends Au{constructor(t){t===void 0&&(t={}),super(),this.id=Ct.idCounter++,this.index=-1,this.world=null,this.vlambda=new C,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new C,this.previousPosition=new C,this.interpolatedPosition=new C,this.initPosition=new C,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new C,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new C,this.force=new C;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?Ct.STATIC:Ct.DYNAMIC,typeof t.type==typeof Ct.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=Ct.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new C,this.quaternion=new Le,this.initQuaternion=new Le,this.previousQuaternion=new Le,this.interpolatedQuaternion=new Le,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new C,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new C,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new C,this.invInertia=new C,this.invInertiaWorld=new Nn,this.invMassSolve=0,this.invInertiaSolve=new C,this.invInertiaWorldSolve=new Nn,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new C(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new C(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new pn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new C,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=Ct.AWAKE,this.wakeUpAfterNarrowphase=!1,t===Ct.SLEEPING&&this.dispatchEvent(Ct.wakeupEvent)}sleep(){this.sleepState=Ct.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===Ct.AWAKE&&n<i?(this.sleepState=Ct.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(Ct.sleepyEvent)):e===Ct.SLEEPY&&n>i?this.wakeUp():e===Ct.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(Ct.sleepEvent))}}updateSolveMassProperties(){this.sleepState===Ct.SLEEPING||this.type===Ct.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new C),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new C),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new C),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new C),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new C,s=new Le;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let s=0;s!==n;s++){const o=t[s];o.updateBoundingSphereRadius();const a=e[s].length(),l=o.boundingSphereRadius;a+l>i&&(i=a+l)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=_v,o=vv,a=this.quaternion,l=this.aabb,c=xv;for(let u=0;u!==i;u++){const d=t[u];a.vmult(e[u],s),s.vadd(this.position,s),a.mult(n[u],o),d.calculateWorldAABB(s,o,c.lowerBound,c.upperBound),u===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=yv,i=Mv;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new C),this.type!==Ct.DYNAMIC)return;this.sleepState===Ct.SLEEPING&&this.wakeUp();const n=Sv;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new C),this.type!==Ct.DYNAMIC)return;const n=bv,i=Ev;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===Ct.DYNAMIC&&(this.sleepState===Ct.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new C),this.type!==Ct.DYNAMIC)return;this.sleepState===Ct.SLEEPING&&this.wakeUp();const n=e,i=wv;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=Tv;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new C),this.type!==Ct.DYNAMIC)return;const n=Av,i=Rv;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=Cv;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),nr.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new C;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===Ct.DYNAMIC||this.type===Ct.KINEMATIC)||this.sleepState===Ct.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,u=this.invMass,d=this.invInertiaWorld,h=this.linearFactor,f=u*t;i.x+=a.x*f*h.x,i.y+=a.y*f*h.y,i.z+=a.z*f*h.z;const p=d.elements,v=this.angularFactor,m=l.x*v.x,g=l.y*v.y,_=l.z*v.z;s.x+=t*(p[0]*m+p[1]*g+p[2]*_),s.y+=t*(p[3]*m+p[4]*g+p[5]*_),s.z+=t*(p[6]*m+p[7]*g+p[8]*_),o.x+=i.x*t,o.y+=i.y*t,o.z+=i.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}Ct.idCounter=0;Ct.COLLIDE_EVENT_NAME="collide";Ct.DYNAMIC=Al.DYNAMIC;Ct.STATIC=Al.STATIC;Ct.KINEMATIC=Al.KINEMATIC;Ct.AWAKE=Rl.AWAKE;Ct.SLEEPY=Rl.SLEEPY;Ct.SLEEPING=Rl.SLEEPING;Ct.wakeupEvent={type:"wakeup"};Ct.sleepyEvent={type:"sleepy"};Ct.sleepEvent={type:"sleep"};const _v=new C,vv=new Le,xv=new pn,yv=new Nn,Mv=new Nn;new Nn;const Sv=new C,bv=new C,Ev=new C,wv=new C,Tv=new C,Av=new C,Rv=new C,Cv=new C;class Ru{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!((t.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&t.collisionFilterMask)===0||((t.type&Ct.STATIC)!==0||t.sleepState===Ct.SLEEPING)&&((e.type&Ct.STATIC)!==0||e.sleepState===Ct.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const s=Pv;e.position.vsub(t.position,s);const o=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=Lv,i=Iv,s=Nv,o=t.length;for(let a=0;a!==o;a++)i[a]=t[a],s[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){const l=i[a].id,c=s[a].id,u=l<c?`${l},${c}`:`${c},${l}`;n[u]=a,n.keys.push(u)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];t.push(i[c]),e.push(s[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new C;t.position.vsub(e.position,n);const i=t.shapes[0],s=e.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const Pv=new C;new C;new Le;new C;const Lv={keys:[]},Iv=[],Nv=[];new C;new C;new C;class Dv extends Ru{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,s=i.length;let o,a;for(let l=0;l!==s;l++)for(let c=0;c!==l;c++)o=i[l],a=i[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const s=t.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}}class so{constructor(){this.rayFromWorld=new C,this.rayToWorld=new C,this.hitNormalWorld=new C,this.hitPointWorld=new C,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=o,this.distance=a}}let Cu,Pu,Lu,Iu,Nu,Du,Uu;const Cl={CLOSEST:1,ANY:2,ALL:4};Cu=It.types.SPHERE;Pu=It.types.PLANE;Lu=It.types.BOX;Iu=It.types.CYLINDER;Nu=It.types.CONVEXPOLYHEDRON;Du=It.types.HEIGHTFIELD;Uu=It.types.TRIMESH;class Pe{get[Cu](){return this._intersectSphere}get[Pu](){return this._intersectPlane}get[Lu](){return this._intersectBox}get[Iu](){return this._intersectConvex}get[Nu](){return this._intersectConvex}get[Du](){return this._intersectHeightfield}get[Uu](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new C),e===void 0&&(e=new C),this.from=t.clone(),this.to=e.clone(),this.direction=new C,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Pe.ANY,this.result=new so,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||Pe.ANY,this.result=e.result||new so,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(rh),jo.length=0,t.broadphase.aabbQuery(t,rh,jo),this.intersectBodies(jo),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||(this.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&this.collisionFilterMask)===0)return;const i=Uv,s=Fv;for(let o=0,a=t.shapes.length;o<a;o++){const l=t.shapes[o];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],s),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(l,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const s=this.from;if($v(s,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){const o=this.from,a=this.to,l=this.direction,c=new C(0,0,1);e.vmult(c,c);const u=new C;o.vsub(n,u);const d=u.dot(c);a.vsub(n,u);const h=u.dot(c);if(d*h>0||o.distanceTo(a)<d)return;const f=c.dot(l);if(Math.abs(f)<this.precision)return;const p=new C,v=new C,m=new C;o.vsub(n,p);const g=-c.dot(p)/f;l.scale(g,v),o.vadd(v,m),this.reportIntersection(c,m,s,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;const o=Ov;o.from.copy(this.from),o.to.copy(this.to),de.pointToLocalFrame(n,e,o.from,o.from),de.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();const a=Bv;let l,c,u,d;l=c=0,u=d=t.data.length-1;const h=new pn;o.getAABB(h),t.getIndexOfPosition(h.lowerBound.x,h.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),t.getIndexOfPosition(h.upperBound.x,h.upperBound.y,a,!0),u=Math.min(u,a[0]+1),d=Math.min(d,a[1]+1);for(let f=l;f<u;f++)for(let p=c;p<d;p++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(f,p,h),!!h.overlapsRay(o)){if(t.getConvexTrianglePillar(f,p,!1),de.pointToWorldFrame(n,e,t.pillarOffset,Or),this._intersectConvex(t.pillarConvex,e,Or,i,s,oh),this.result.shouldStop)return;t.getConvexTrianglePillar(f,p,!0),de.pointToWorldFrame(n,e,t.pillarOffset,Or),this._intersectConvex(t.pillarConvex,e,Or,i,s,oh)}}}_intersectSphere(t,e,n,i,s){const o=this.from,a=this.to,l=t.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,u=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,h=u**2-4*c*d,f=zv,p=kv;if(!(h<0))if(h===0)o.lerp(a,h,f),f.vsub(n,p),p.normalize(),this.reportIntersection(p,f,s,i,-1);else{const v=(-u-Math.sqrt(h))/(2*c),m=(-u+Math.sqrt(h))/(2*c);if(v>=0&&v<=1&&(o.lerp(a,v,f),f.vsub(n,p),p.normalize(),this.reportIntersection(p,f,s,i,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,f),f.vsub(n,p),p.normalize(),this.reportIntersection(p,f,s,i,-1))}}_intersectConvex(t,e,n,i,s,o){const a=Gv,l=ah,c=o&&o.faceList||null,u=t.faces,d=t.vertices,h=t.faceNormals,f=this.direction,p=this.from,v=this.to,m=p.distanceTo(v),g=c?c.length:u.length,_=this.result;for(let x=0;!_.shouldStop&&x<g;x++){const M=c?c[x]:x,E=u[M],b=h[M],y=e,S=n;l.copy(d[E[0]]),y.vmult(l,l),l.vadd(S,l),l.vsub(p,l),y.vmult(b,a);const P=f.dot(a);if(Math.abs(P)<this.precision)continue;const A=a.dot(l)/P;if(!(A<0)){f.scale(A,cn),cn.vadd(p,cn),An.copy(d[E[0]]),y.vmult(An,An),S.vadd(An,An);for(let I=1;!_.shouldStop&&I<E.length-1;I++){kn.copy(d[E[I]]),Gn.copy(d[E[I+1]]),y.vmult(kn,kn),y.vmult(Gn,Gn),S.vadd(kn,kn),S.vadd(Gn,Gn);const N=cn.distanceTo(p);!(Pe.pointInTriangle(cn,An,kn,Gn)||Pe.pointInTriangle(cn,kn,An,Gn))||N>m||this.reportIntersection(a,cn,s,i,M)}}}}_intersectTrimesh(t,e,n,i,s,o){const a=Hv,l=Zv,c=Kv,u=ah,d=Vv,h=Wv,f=qv,p=Yv,v=Xv,m=t.indices;t.vertices;const g=this.from,_=this.to,x=this.direction;c.position.copy(n),c.quaternion.copy(e),de.vectorToLocalFrame(n,e,x,d),de.pointToLocalFrame(n,e,g,h),de.pointToLocalFrame(n,e,_,f),f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,h.x*=t.scale.x,h.y*=t.scale.y,h.z*=t.scale.z,f.vsub(h,d),d.normalize();const M=h.distanceSquared(f);t.tree.rayQuery(this,c,l);for(let E=0,b=l.length;!this.result.shouldStop&&E!==b;E++){const y=l[E];t.getNormal(y,a),t.getVertex(m[y*3],An),An.vsub(h,u);const S=d.dot(a),P=a.dot(u)/S;if(P<0)continue;d.scale(P,cn),cn.vadd(h,cn),t.getVertex(m[y*3+1],kn),t.getVertex(m[y*3+2],Gn);const A=cn.distanceSquared(h);!(Pe.pointInTriangle(cn,kn,An,Gn)||Pe.pointInTriangle(cn,An,kn,Gn))||A>M||(de.vectorToWorldFrame(e,a,v),de.pointToWorldFrame(n,e,cn,p),this.reportIntersection(v,p,s,i,y))}l.length=0}reportIntersection(t,e,n,i,s){const o=this.from,a=this.to,l=o.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case Pe.ALL:this.hasHit=!0,c.set(o,a,t,e,n,i,l),c.hasHit=!0,this.callback(c);break;case Pe.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,i,l));break;case Pe.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,Oi),n.vsub(e,Us),t.vsub(e,ta);const s=Oi.dot(Oi),o=Oi.dot(Us),a=Oi.dot(ta),l=Us.dot(Us),c=Us.dot(ta);let u,d;return(u=l*a-o*c)>=0&&(d=s*c-o*a)>=0&&u+d<s*l-o*o}}Pe.CLOSEST=Cl.CLOSEST;Pe.ANY=Cl.ANY;Pe.ALL=Cl.ALL;const rh=new pn,jo=[],Us=new C,ta=new C,Uv=new C,Fv=new Le,cn=new C,An=new C,kn=new C,Gn=new C;new C;new so;const oh={faceList:[0]},Or=new C,Ov=new Pe,Bv=[],zv=new C,kv=new C,Gv=new C;new C;new C;const ah=new C,Hv=new C,Vv=new C,Wv=new C,qv=new C,Xv=new C,Yv=new C;new pn;const Zv=[],Kv=new de,Oi=new C,Br=new C;function $v(r,t,e){e.vsub(r,Oi);const n=Oi.dot(t);return t.scale(n,Br),Br.vadd(r,Br),e.distanceTo(Br)}class as extends Ru{static checkBounds(t,e,n){let i,s;n===0?(i=t.position.x,s=e.position.x):n===1?(i=t.position.y,s=e.position.y):n===2&&(i=t.position.z,s=e.position.z);const o=t.boundingRadius,a=e.boundingRadius,l=i+o;return s-a<l}static insertionSortX(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.x<=i.aabb.lowerBound.x);s--)t[s+1]=t[s];t[s+1]=i}return t}static insertionSortY(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.y<=i.aabb.lowerBound.y);s--)t[s+1]=t[s];t[s+1]=i}return t}static insertionSortZ(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.z<=i.aabb.lowerBound.z);s--)t[s+1]=t[s];t[s+1]=i}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;const e=this.axisList;this._addBodyHandler=n=>{e.push(n.body)},this._removeBodyHandler=n=>{const i=e.indexOf(n.body);i!==-1&&e.splice(i,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let e=0;e<t.bodies.length;e++)this.axisList.push(t.bodies[e]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,e,n){const i=this.axisList,s=i.length,o=this.axisIndex;let a,l;for(this.dirty&&(this.sortList(),this.dirty=!1),a=0;a!==s;a++){const c=i[a];for(l=a+1;l<s;l++){const u=i[l];if(this.needBroadphaseCollision(c,u)){if(!as.checkBounds(c,u,o))break;this.intersectionTest(c,u,e,n)}}}}sortList(){const t=this.axisList,e=this.axisIndex,n=t.length;for(let i=0;i!==n;i++){const s=t[i];s.aabbNeedsUpdate&&s.updateAABB()}e===0?as.insertionSortX(t):e===1?as.insertionSortY(t):e===2&&as.insertionSortZ(t)}autoDetectAxis(){let t=0,e=0,n=0,i=0,s=0,o=0;const a=this.axisList,l=a.length,c=1/l;for(let f=0;f!==l;f++){const p=a[f],v=p.position.x;t+=v,e+=v*v;const m=p.position.y;n+=m,i+=m*m;const g=p.position.z;s+=g,o+=g*g}const u=e-t*t*c,d=i-n*n*c,h=o-s*s*c;u>d?u>h?this.axisIndex=0:this.axisIndex=2:d>h?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,e,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);const i=this.axisIndex;let s="x";i===1&&(s="y"),i===2&&(s="z");const o=this.axisList;e.lowerBound[s],e.upperBound[s];for(let a=0;a<o.length;a++){const l=o[a];l.aabbNeedsUpdate&&l.updateAABB(),l.aabb.overlaps(e)&&n.push(l)}return n}}class Jv{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class lh{constructor(){this.spatial=new C,this.rotational=new C}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class or{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=or.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new lh,this.jacobianElementB=new lh,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,s=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*s*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*t-i*e-o*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,o=i.position;return t.spatial.dot(s)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,o=i.velocity,a=n.angularVelocity,l=i.angularVelocity;return t.multiplyVectors(s,a)+e.multiplyVectors(o,l)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,o=i.vlambda,a=n.wlambda,l=i.wlambda;return t.multiplyVectors(s,a)+e.multiplyVectors(o,l)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,o=n.torque,a=i.force,l=i.torque,c=n.invMassSolve,u=i.invMassSolve;return s.scale(c,ch),a.scale(u,hh),n.invInertiaWorldSolve.vmult(o,uh),i.invInertiaWorldSolve.vmult(l,dh),t.multiplyVectors(ch,uh)+e.multiplyVectors(hh,dh)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=s+o;return a.vmult(t.rotational,zr),c+=zr.dot(t.rotational),l.vmult(e.rotational,zr),c+=zr.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,o=Qv;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}or.idCounter=0;const ch=new C,hh=new C,uh=new C,dh=new C,zr=new C,Qv=new C;class jv extends or{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new C,this.rj=new C,this.ni=new C}computeB(t){const e=this.a,n=this.b,i=this.bi,s=this.bj,o=this.ri,a=this.rj,l=tx,c=ex,u=i.velocity,d=i.angularVelocity;i.force,i.torque;const h=s.velocity,f=s.angularVelocity;s.force,s.torque;const p=nx,v=this.jacobianElementA,m=this.jacobianElementB,g=this.ni;o.cross(g,l),a.cross(g,c),g.negate(v.spatial),l.negate(v.rotational),m.spatial.copy(g),m.rotational.copy(c),p.copy(s.position),p.vadd(a,p),p.vsub(i.position,p),p.vsub(o,p);const _=g.dot(p),x=this.restitution+1,M=x*h.dot(g)-x*u.dot(g)+f.dot(c)-d.dot(l),E=this.computeGiMf();return-_*e-M*n-t*E}getImpactVelocityAlongNormal(){const t=ix,e=sx,n=rx,i=ox,s=ax;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,s),this.ni.dot(s)}}const tx=new C,ex=new C,nx=new C,ix=new C,sx=new C,rx=new C,ox=new C,ax=new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;class fh extends or{constructor(t,e,n){super(t,e,-n,n),this.ri=new C,this.rj=new C,this.t=new C}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=lx,o=cx,a=this.t;n.cross(a,s),i.cross(a,o);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),s.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);const u=this.computeGW(),d=this.computeGiMf();return-u*e-t*d}}const lx=new C,cx=new C;class uo{constructor(t,e,n){n=Jv.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=uo.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}uo.idCounter=0;class ar{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=ar.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}ar.idCounter=0;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new Pe;new C;new C;new C;new C(1,0,0),new C(0,1,0),new C(0,0,1);new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;class hx extends It{constructor(t){if(super({type:It.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new C);const n=2*t*this.radius*this.radius/5;return e.x=n,e.y=n,e.z=n,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,n,i){const s=this.radius,o=["x","y","z"];for(let a=0;a<o.length;a++){const l=o[a];n[l]=t[l]-s,i[l]=t[l]+s}}}new C;new C;new C;new C;new C;new C;new C;new C;new C;class ux extends fs{constructor(t,e,n,i){if(t===void 0&&(t=1),e===void 0&&(e=1),n===void 0&&(n=1),i===void 0&&(i=8),t<0)throw new Error("The cylinder radiusTop cannot be negative.");if(e<0)throw new Error("The cylinder radiusBottom cannot be negative.");const s=i,o=[],a=[],l=[],c=[],u=[],d=Math.cos,h=Math.sin;o.push(new C(-e*h(0),-n*.5,e*d(0))),c.push(0),o.push(new C(-t*h(0),n*.5,t*d(0))),u.push(1);for(let p=0;p<s;p++){const v=2*Math.PI/s*(p+1),m=2*Math.PI/s*(p+.5);p<s-1?(o.push(new C(-e*h(v),-n*.5,e*d(v))),c.push(2*p+2),o.push(new C(-t*h(v),n*.5,t*d(v))),u.push(2*p+3),l.push([2*p,2*p+1,2*p+3,2*p+2])):l.push([2*p,2*p+1,1,0]),(s%2===1||p<s/2)&&a.push(new C(-h(m),0,d(m)))}l.push(c),a.push(new C(0,1,0));const f=[];for(let p=0;p<u.length;p++)f.push(u[u.length-p-1]);l.push(f),super({vertices:o,faces:l,axes:a}),this.type=It.types.CYLINDER,this.radiusTop=t,this.radiusBottom=e,this.height=n,this.numSegments=i}}new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new pn;new C;new pn;new C;new C;new C;new C;new C;new C;new C;new pn;new C;new de;new pn;class dx{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class fx extends dx{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=e.bodies,c=l.length,u=t;let d,h,f,p,v,m;if(a!==0)for(let M=0;M!==c;M++)l[M].updateSolveMassProperties();const g=mx,_=gx,x=px;g.length=a,_.length=a,x.length=a;for(let M=0;M!==a;M++){const E=o[M];x[M]=0,_[M]=E.computeB(u),g[M]=1/E.computeC()}if(a!==0){for(let b=0;b!==c;b++){const y=l[b],S=y.vlambda,P=y.wlambda;S.set(0,0,0),P.set(0,0,0)}for(n=0;n!==i;n++){p=0;for(let b=0;b!==a;b++){const y=o[b];d=_[b],h=g[b],m=x[b],v=y.computeGWlambda(),f=h*(d-v-y.eps*m),m+f<y.minForce?f=y.minForce-m:m+f>y.maxForce&&(f=y.maxForce-m),x[b]+=f,p+=f>0?f:-f,y.addToWlambda(f)}if(p*p<s)break}for(let b=0;b!==c;b++){const y=l[b],S=y.velocity,P=y.angularVelocity;y.vlambda.vmul(y.linearFactor,y.vlambda),S.vadd(y.vlambda,S),y.wlambda.vmul(y.angularFactor,y.wlambda),P.vadd(y.wlambda,P)}let M=o.length;const E=1/u;for(;M--;)o[M].multiplier=x[M]*E}return n}}const px=[],mx=[],gx=[];class _x{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class vx extends _x{constructor(){super(...arguments),this.type=C}constructObject(){return new C}}const be={sphereSphere:It.types.SPHERE,spherePlane:It.types.SPHERE|It.types.PLANE,boxBox:It.types.BOX|It.types.BOX,sphereBox:It.types.SPHERE|It.types.BOX,planeBox:It.types.PLANE|It.types.BOX,convexConvex:It.types.CONVEXPOLYHEDRON,sphereConvex:It.types.SPHERE|It.types.CONVEXPOLYHEDRON,planeConvex:It.types.PLANE|It.types.CONVEXPOLYHEDRON,boxConvex:It.types.BOX|It.types.CONVEXPOLYHEDRON,sphereHeightfield:It.types.SPHERE|It.types.HEIGHTFIELD,boxHeightfield:It.types.BOX|It.types.HEIGHTFIELD,convexHeightfield:It.types.CONVEXPOLYHEDRON|It.types.HEIGHTFIELD,sphereParticle:It.types.PARTICLE|It.types.SPHERE,planeParticle:It.types.PLANE|It.types.PARTICLE,boxParticle:It.types.BOX|It.types.PARTICLE,convexParticle:It.types.PARTICLE|It.types.CONVEXPOLYHEDRON,cylinderCylinder:It.types.CYLINDER,sphereCylinder:It.types.SPHERE|It.types.CYLINDER,planeCylinder:It.types.PLANE|It.types.CYLINDER,boxCylinder:It.types.BOX|It.types.CYLINDER,convexCylinder:It.types.CONVEXPOLYHEDRON|It.types.CYLINDER,heightfieldCylinder:It.types.HEIGHTFIELD|It.types.CYLINDER,particleCylinder:It.types.PARTICLE|It.types.CYLINDER,sphereTrimesh:It.types.SPHERE|It.types.TRIMESH,planeTrimesh:It.types.PLANE|It.types.TRIMESH};class xx{get[be.sphereSphere](){return this.sphereSphere}get[be.spherePlane](){return this.spherePlane}get[be.boxBox](){return this.boxBox}get[be.sphereBox](){return this.sphereBox}get[be.planeBox](){return this.planeBox}get[be.convexConvex](){return this.convexConvex}get[be.sphereConvex](){return this.sphereConvex}get[be.planeConvex](){return this.planeConvex}get[be.boxConvex](){return this.boxConvex}get[be.sphereHeightfield](){return this.sphereHeightfield}get[be.boxHeightfield](){return this.boxHeightfield}get[be.convexHeightfield](){return this.convexHeightfield}get[be.sphereParticle](){return this.sphereParticle}get[be.planeParticle](){return this.planeParticle}get[be.boxParticle](){return this.boxParticle}get[be.convexParticle](){return this.convexParticle}get[be.cylinderCylinder](){return this.convexConvex}get[be.sphereCylinder](){return this.sphereConvex}get[be.planeCylinder](){return this.planeConvex}get[be.boxCylinder](){return this.boxConvex}get[be.convexCylinder](){return this.convexConvex}get[be.heightfieldCylinder](){return this.heightfieldCylinder}get[be.particleCylinder](){return this.particleCylinder}get[be.sphereTrimesh](){return this.sphereTrimesh}get[be.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new vx,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,s,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new jv(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||t.material,u=i.material||e.material;return c&&u&&c.restitution>=0&&u.restitution>=0&&(a.restitution=c.restitution*u.restitution),a.si=s||n,a.sj=o||i,a}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,s=t.si,o=t.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const u=s.material||n.material,d=o.material||i.material;if(u&&d&&u.friction>=0&&d.friction>=0&&(c=u.friction*d.friction),c>0){const h=c*(a.frictionGravity||a.gravity).length();let f=n.invMass+i.invMass;f>0&&(f=1/f);const p=this.frictionEquationPool,v=p.length?p.pop():new fh(n,i,h*f),m=p.length?p.pop():new fh(n,i,h*f);return v.bi=m.bi=n,v.bj=m.bj=i,v.minForce=m.minForce=-h*f,v.maxForce=m.maxForce=h*f,v.ri.copy(t.ri),v.rj.copy(t.rj),m.ri.copy(t.ri),m.rj.copy(t.rj),t.ni.tangents(v.t,m.t),v.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),v.enabled=m.enabled=t.enabled,e.push(v,m),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Ui.setZero(),es.setZero(),ns.setZero();const s=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==s?(Ui.vadd(e.ni,Ui),es.vadd(e.ri,es),ns.vadd(e.rj,ns)):(Ui.vsub(e.ni,Ui),es.vadd(e.rj,es),ns.vadd(e.ri,ns));const o=1/t;es.scale(o,n.ri),ns.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Ui.normalize(),Ui.tangents(n.t,i.t)}getContacts(t,e,n,i,s,o,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const l=Sx,c=bx,u=yx,d=Mx;for(let h=0,f=t.length;h!==f;h++){const p=t[h],v=e[h];let m=null;p.material&&v.material&&(m=n.getContactMaterial(p.material,v.material)||null);const g=p.type&Ct.KINEMATIC&&v.type&Ct.STATIC||p.type&Ct.STATIC&&v.type&Ct.KINEMATIC||p.type&Ct.KINEMATIC&&v.type&Ct.KINEMATIC;for(let _=0;_<p.shapes.length;_++){p.quaternion.mult(p.shapeOrientations[_],l),p.quaternion.vmult(p.shapeOffsets[_],u),u.vadd(p.position,u);const x=p.shapes[_];for(let M=0;M<v.shapes.length;M++){v.quaternion.mult(v.shapeOrientations[M],c),v.quaternion.vmult(v.shapeOffsets[M],d),d.vadd(v.position,d);const E=v.shapes[M];if(!(x.collisionFilterMask&E.collisionFilterGroup&&E.collisionFilterMask&x.collisionFilterGroup)||u.distanceTo(d)>x.boundingSphereRadius+E.boundingSphereRadius)continue;let b=null;x.material&&E.material&&(b=n.getContactMaterial(x.material,E.material)||null),this.currentContactMaterial=b||m||n.defaultContactMaterial;const y=x.type|E.type,S=this[y];if(S){let P=!1;x.type<E.type?P=S.call(this,x,E,u,d,l,c,p,v,x,E,g):P=S.call(this,E,x,d,u,c,l,v,p,x,E,g),P&&g&&(n.shapeOverlapKeeper.set(x.id,E.id),n.bodyOverlapKeeper.set(p.id,v.id))}}}}}sphereSphere(t,e,n,i,s,o,a,l,c,u,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;const h=this.createContactEquation(a,l,t,e,c,u);i.vsub(n,h.ni),h.ni.normalize(),h.ri.copy(h.ni),h.rj.copy(h.ni),h.ri.scale(t.radius,h.ri),h.rj.scale(-e.radius,h.rj),h.ri.vadd(n,h.ri),h.ri.vsub(a.position,h.ri),h.rj.vadd(i,h.rj),h.rj.vsub(l.position,h.rj),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}spherePlane(t,e,n,i,s,o,a,l,c,u,d){const h=this.createContactEquation(a,l,t,e,c,u);if(h.ni.set(0,0,1),o.vmult(h.ni,h.ni),h.ni.negate(h.ni),h.ni.normalize(),h.ni.scale(t.radius,h.ri),n.vsub(i,kr),h.ni.scale(h.ni.dot(kr),ph),kr.vsub(ph,h.rj),-kr.dot(h.ni)<=t.radius){if(d)return!0;const f=h.ri,p=h.rj;f.vadd(n,f),f.vsub(a.position,f),p.vadd(i,p),p.vsub(l.position,p),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}boxBox(t,e,n,i,s,o,a,l,c,u,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,s,o,a,l,t,e,d)}sphereBox(t,e,n,i,s,o,a,l,c,u,d){const h=this.v3pool,f=Kx;n.vsub(i,Gr),e.getSideNormals(f,o);const p=t.radius;let v=!1;const m=Jx,g=Qx,_=jx;let x=null,M=0,E=0,b=0,y=null;for(let F=0,k=f.length;F!==k&&v===!1;F++){const Y=Xx;Y.copy(f[F]);const W=Y.length();Y.normalize();const O=Gr.dot(Y);if(O<W+p&&O>0){const H=Yx,X=Zx;H.copy(f[(F+1)%3]),X.copy(f[(F+2)%3]);const ot=H.length(),q=X.length();H.normalize(),X.normalize();const Q=Gr.dot(H),lt=Gr.dot(X);if(Q<ot&&Q>-ot&&lt<q&&lt>-q){const et=Math.abs(O-W-p);if((y===null||et<y)&&(y=et,E=Q,b=lt,x=W,m.copy(Y),g.copy(H),_.copy(X),M++,d))return!0}}}if(M){v=!0;const F=this.createContactEquation(a,l,t,e,c,u);m.scale(-p,F.ri),F.ni.copy(m),F.ni.negate(F.ni),m.scale(x,m),g.scale(E,g),m.vadd(g,m),_.scale(b,_),m.vadd(_,F.rj),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),F.rj.vadd(i,F.rj),F.rj.vsub(l.position,F.rj),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}let S=h.get();const P=$x;for(let F=0;F!==2&&!v;F++)for(let k=0;k!==2&&!v;k++)for(let Y=0;Y!==2&&!v;Y++)if(S.set(0,0,0),F?S.vadd(f[0],S):S.vsub(f[0],S),k?S.vadd(f[1],S):S.vsub(f[1],S),Y?S.vadd(f[2],S):S.vsub(f[2],S),i.vadd(S,P),P.vsub(n,P),P.lengthSquared()<p*p){if(d)return!0;v=!0;const W=this.createContactEquation(a,l,t,e,c,u);W.ri.copy(P),W.ri.normalize(),W.ni.copy(W.ri),W.ri.scale(p,W.ri),W.rj.copy(S),W.ri.vadd(n,W.ri),W.ri.vsub(a.position,W.ri),W.rj.vadd(i,W.rj),W.rj.vsub(l.position,W.rj),this.result.push(W),this.createFrictionEquationsFromContact(W,this.frictionResult)}h.release(S),S=null;const A=h.get(),I=h.get(),N=h.get(),L=h.get(),w=h.get(),D=f.length;for(let F=0;F!==D&&!v;F++)for(let k=0;k!==D&&!v;k++)if(F%3!==k%3){f[k].cross(f[F],A),A.normalize(),f[F].vadd(f[k],I),N.copy(n),N.vsub(I,N),N.vsub(i,N);const Y=N.dot(A);A.scale(Y,L);let W=0;for(;W===F%3||W===k%3;)W++;w.copy(n),w.vsub(L,w),w.vsub(I,w),w.vsub(i,w);const O=Math.abs(Y),H=w.length();if(O<f[W].length()&&H<p){if(d)return!0;v=!0;const X=this.createContactEquation(a,l,t,e,c,u);I.vadd(L,X.rj),X.rj.copy(X.rj),w.negate(X.ni),X.ni.normalize(),X.ri.copy(X.rj),X.ri.vadd(i,X.ri),X.ri.vsub(n,X.ri),X.ri.normalize(),X.ri.scale(p,X.ri),X.ri.vadd(n,X.ri),X.ri.vsub(a.position,X.ri),X.rj.vadd(i,X.rj),X.rj.vsub(l.position,X.rj),this.result.push(X),this.createFrictionEquationsFromContact(X,this.frictionResult)}}h.release(A,I,N,L,w)}planeBox(t,e,n,i,s,o,a,l,c,u,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,s,o,a,l,t,e,d)}convexConvex(t,e,n,i,s,o,a,l,c,u,d,h,f){const p=py;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,i,o,p,h,f)){const v=[],m=my;t.clipAgainstHull(n,s,e,i,o,p,-100,100,v);let g=0;for(let _=0;_!==v.length;_++){if(d)return!0;const x=this.createContactEquation(a,l,t,e,c,u),M=x.ri,E=x.rj;p.negate(x.ni),v[_].normal.negate(m),m.scale(v[_].depth,m),v[_].point.vadd(m,M),E.copy(v[_].point),M.vsub(n,M),E.vsub(i,E),M.vadd(n,M),M.vsub(a.position,M),E.vadd(i,E),E.vsub(l.position,E),this.result.push(x),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}}sphereConvex(t,e,n,i,s,o,a,l,c,u,d){const h=this.v3pool;n.vsub(i,ty);const f=e.faceNormals,p=e.faces,v=e.vertices,m=t.radius;let g=!1;for(let _=0;_!==v.length;_++){const x=v[_],M=sy;o.vmult(x,M),i.vadd(M,M);const E=iy;if(M.vsub(n,E),E.lengthSquared()<m*m){if(d)return!0;g=!0;const b=this.createContactEquation(a,l,t,e,c,u);b.ri.copy(E),b.ri.normalize(),b.ni.copy(b.ri),b.ri.scale(m,b.ri),M.vsub(i,b.rj),b.ri.vadd(n,b.ri),b.ri.vsub(a.position,b.ri),b.rj.vadd(i,b.rj),b.rj.vsub(l.position,b.rj),this.result.push(b),this.createFrictionEquationsFromContact(b,this.frictionResult);return}}for(let _=0,x=p.length;_!==x&&g===!1;_++){const M=f[_],E=p[_],b=ry;o.vmult(M,b);const y=oy;o.vmult(v[E[0]],y),y.vadd(i,y);const S=ay;b.scale(-m,S),n.vadd(S,S);const P=ly;S.vsub(y,P);const A=P.dot(b),I=cy;if(n.vsub(y,I),A<0&&I.dot(b)>0){const N=[];for(let L=0,w=E.length;L!==w;L++){const D=h.get();o.vmult(v[E[L]],D),i.vadd(D,D),N.push(D)}if(qx(N,b,n)){if(d)return!0;g=!0;const L=this.createContactEquation(a,l,t,e,c,u);b.scale(-m,L.ri),b.negate(L.ni);const w=h.get();b.scale(-A,w);const D=h.get();b.scale(-m,D),n.vsub(i,L.rj),L.rj.vadd(D,L.rj),L.rj.vadd(w,L.rj),L.rj.vadd(i,L.rj),L.rj.vsub(l.position,L.rj),L.ri.vadd(n,L.ri),L.ri.vsub(a.position,L.ri),h.release(w),h.release(D),this.result.push(L),this.createFrictionEquationsFromContact(L,this.frictionResult);for(let F=0,k=N.length;F!==k;F++)h.release(N[F]);return}else for(let L=0;L!==E.length;L++){const w=h.get(),D=h.get();o.vmult(v[E[(L+1)%E.length]],w),o.vmult(v[E[(L+2)%E.length]],D),i.vadd(w,w),i.vadd(D,D);const F=ey;D.vsub(w,F);const k=ny;F.unit(k);const Y=h.get(),W=h.get();n.vsub(w,W);const O=W.dot(k);k.scale(O,Y),Y.vadd(w,Y);const H=h.get();if(Y.vsub(n,H),O>0&&O*O<F.lengthSquared()&&H.lengthSquared()<m*m){if(d)return!0;const X=this.createContactEquation(a,l,t,e,c,u);Y.vsub(i,X.rj),Y.vsub(n,X.ni),X.ni.normalize(),X.ni.scale(m,X.ri),X.rj.vadd(i,X.rj),X.rj.vsub(l.position,X.rj),X.ri.vadd(n,X.ri),X.ri.vsub(a.position,X.ri),this.result.push(X),this.createFrictionEquationsFromContact(X,this.frictionResult);for(let ot=0,q=N.length;ot!==q;ot++)h.release(N[ot]);h.release(w),h.release(D),h.release(Y),h.release(H),h.release(W);return}h.release(w),h.release(D),h.release(Y),h.release(H),h.release(W)}for(let L=0,w=N.length;L!==w;L++)h.release(N[L])}}}planeConvex(t,e,n,i,s,o,a,l,c,u,d){const h=hy,f=uy;f.set(0,0,1),s.vmult(f,f);let p=0;const v=dy;for(let m=0;m!==e.vertices.length;m++)if(h.copy(e.vertices[m]),o.vmult(h,h),i.vadd(h,h),h.vsub(n,v),f.dot(v)<=0){if(d)return!0;const _=this.createContactEquation(a,l,t,e,c,u),x=fy;f.scale(f.dot(v),x),h.vsub(x,x),x.vsub(n,_.ri),_.ni.copy(f),h.vsub(i,_.rj),_.ri.vadd(n,_.ri),_.ri.vsub(a.position,_.ri),_.rj.vadd(i,_.rj),_.rj.vsub(l.position,_.rj),this.result.push(_),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}boxConvex(t,e,n,i,s,o,a,l,c,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,s,o,a,l,t,e,d)}sphereHeightfield(t,e,n,i,s,o,a,l,c,u,d){const h=e.data,f=t.radius,p=e.elementSize,v=Ay,m=Ty;de.pointToLocalFrame(i,o,n,m);let g=Math.floor((m.x-f)/p)-1,_=Math.ceil((m.x+f)/p)+1,x=Math.floor((m.y-f)/p)-1,M=Math.ceil((m.y+f)/p)+1;if(_<0||M<0||g>h.length||x>h[0].length)return;g<0&&(g=0),_<0&&(_=0),x<0&&(x=0),M<0&&(M=0),g>=h.length&&(g=h.length-1),_>=h.length&&(_=h.length-1),M>=h[0].length&&(M=h[0].length-1),x>=h[0].length&&(x=h[0].length-1);const E=[];e.getRectMinMax(g,x,_,M,E);const b=E[0],y=E[1];if(m.z-f>y||m.z+f<b)return;const S=this.result;for(let P=g;P<_;P++)for(let A=x;A<M;A++){const I=S.length;let N=!1;if(e.getConvexTrianglePillar(P,A,!1),de.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(N=this.sphereConvex(t,e.pillarConvex,n,v,s,o,a,l,t,e,d)),d&&N||(e.getConvexTrianglePillar(P,A,!0),de.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(N=this.sphereConvex(t,e.pillarConvex,n,v,s,o,a,l,t,e,d)),d&&N))return!0;if(S.length-I>2)return}}boxHeightfield(t,e,n,i,s,o,a,l,c,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,s,o,a,l,t,e,d)}convexHeightfield(t,e,n,i,s,o,a,l,c,u,d){const h=e.data,f=e.elementSize,p=t.boundingSphereRadius,v=Ey,m=wy,g=by;de.pointToLocalFrame(i,o,n,g);let _=Math.floor((g.x-p)/f)-1,x=Math.ceil((g.x+p)/f)+1,M=Math.floor((g.y-p)/f)-1,E=Math.ceil((g.y+p)/f)+1;if(x<0||E<0||_>h.length||M>h[0].length)return;_<0&&(_=0),x<0&&(x=0),M<0&&(M=0),E<0&&(E=0),_>=h.length&&(_=h.length-1),x>=h.length&&(x=h.length-1),E>=h[0].length&&(E=h[0].length-1),M>=h[0].length&&(M=h[0].length-1);const b=[];e.getRectMinMax(_,M,x,E,b);const y=b[0],S=b[1];if(!(g.z-p>S||g.z+p<y))for(let P=_;P<x;P++)for(let A=M;A<E;A++){let I=!1;if(e.getConvexTrianglePillar(P,A,!1),de.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(I=this.convexConvex(t,e.pillarConvex,n,v,s,o,a,l,null,null,d,m,null)),d&&I||(e.getConvexTrianglePillar(P,A,!0),de.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(I=this.convexConvex(t,e.pillarConvex,n,v,s,o,a,l,null,null,d,m,null)),d&&I))return!0}}sphereParticle(t,e,n,i,s,o,a,l,c,u,d){const h=xy;if(h.set(0,0,1),i.vsub(n,h),h.lengthSquared()<=t.radius*t.radius){if(d)return!0;const p=this.createContactEquation(l,a,e,t,c,u);h.normalize(),p.rj.copy(h),p.rj.scale(t.radius,p.rj),p.ni.copy(h),p.ni.negate(p.ni),p.ri.set(0,0,0),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}}planeParticle(t,e,n,i,s,o,a,l,c,u,d){const h=gy;h.set(0,0,1),a.quaternion.vmult(h,h);const f=_y;if(i.vsub(a.position,f),h.dot(f)<=0){if(d)return!0;const v=this.createContactEquation(l,a,e,t,c,u);v.ni.copy(h),v.ni.negate(v.ni),v.ri.set(0,0,0);const m=vy;h.scale(h.dot(i),m),i.vsub(m,m),v.rj.copy(m),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxParticle(t,e,n,i,s,o,a,l,c,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,s,o,a,l,t,e,d)}convexParticle(t,e,n,i,s,o,a,l,c,u,d){let h=-1;const f=My,p=Sy;let v=null;const m=yy;if(m.copy(i),m.vsub(n,m),s.conjugate(mh),mh.vmult(m,m),t.pointIsInside(m)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let g=0,_=t.faces.length;g!==_;g++){const x=[t.worldVertices[t.faces[g][0]]],M=t.worldFaceNormals[g];i.vsub(x[0],gh);const E=-M.dot(gh);if(v===null||Math.abs(E)<Math.abs(v)){if(d)return!0;v=E,h=g,f.copy(M)}}if(h!==-1){const g=this.createContactEquation(l,a,e,t,c,u);f.scale(v,p),p.vadd(i,p),p.vsub(n,p),g.rj.copy(p),f.negate(g.ni),g.ri.set(0,0,0);const _=g.ri,x=g.rj;_.vadd(i,_),_.vsub(l.position,_),x.vadd(n,x),x.vsub(a.position,x),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,s,o,a,l,c,u,d){return this.convexHeightfield(e,t,i,n,o,s,l,a,c,u,d)}particleCylinder(t,e,n,i,s,o,a,l,c,u,d){return this.convexParticle(e,t,i,n,o,s,l,a,c,u,d)}sphereTrimesh(t,e,n,i,s,o,a,l,c,u,d){const h=Lx,f=Ix,p=Nx,v=Dx,m=Ux,g=Fx,_=kx,x=Px,M=Rx,E=Gx;de.pointToLocalFrame(i,o,n,m);const b=t.radius;_.lowerBound.set(m.x-b,m.y-b,m.z-b),_.upperBound.set(m.x+b,m.y+b,m.z+b),e.getTrianglesInAABB(_,E);const y=Cx,S=t.radius*t.radius;for(let L=0;L<E.length;L++)for(let w=0;w<3;w++)if(e.getVertex(e.indices[E[L]*3+w],y),y.vsub(m,M),M.lengthSquared()<=S){if(x.copy(y),de.pointToWorldFrame(i,o,x,y),y.vsub(n,M),d)return!0;let D=this.createContactEquation(a,l,t,e,c,u);D.ni.copy(M),D.ni.normalize(),D.ri.copy(D.ni),D.ri.scale(t.radius,D.ri),D.ri.vadd(n,D.ri),D.ri.vsub(a.position,D.ri),D.rj.copy(y),D.rj.vsub(l.position,D.rj),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}for(let L=0;L<E.length;L++)for(let w=0;w<3;w++){e.getVertex(e.indices[E[L]*3+w],h),e.getVertex(e.indices[E[L]*3+(w+1)%3],f),f.vsub(h,p),m.vsub(f,g);const D=g.dot(p);m.vsub(h,g);let F=g.dot(p);if(F>0&&D<0&&(m.vsub(h,g),v.copy(p),v.normalize(),F=g.dot(v),v.scale(F,g),g.vadd(h,g),g.distanceTo(m)<t.radius)){if(d)return!0;const Y=this.createContactEquation(a,l,t,e,c,u);g.vsub(m,Y.ni),Y.ni.normalize(),Y.ni.scale(t.radius,Y.ri),Y.ri.vadd(n,Y.ri),Y.ri.vsub(a.position,Y.ri),de.pointToWorldFrame(i,o,g,g),g.vsub(l.position,Y.rj),de.vectorToWorldFrame(o,Y.ni,Y.ni),de.vectorToWorldFrame(o,Y.ri,Y.ri),this.result.push(Y),this.createFrictionEquationsFromContact(Y,this.frictionResult)}}const P=Ox,A=Bx,I=zx,N=Ax;for(let L=0,w=E.length;L!==w;L++){e.getTriangleVertices(E[L],P,A,I),e.getNormal(E[L],N),m.vsub(P,g);let D=g.dot(N);if(N.scale(D,g),m.vsub(g,g),D=g.distanceTo(m),Pe.pointInTriangle(g,P,A,I)&&D<t.radius){if(d)return!0;let F=this.createContactEquation(a,l,t,e,c,u);g.vsub(m,F.ni),F.ni.normalize(),F.ni.scale(t.radius,F.ri),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),de.pointToWorldFrame(i,o,g,g),g.vsub(l.position,F.rj),de.vectorToWorldFrame(o,F.ni,F.ni),de.vectorToWorldFrame(o,F.ri,F.ri),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}}E.length=0}planeTrimesh(t,e,n,i,s,o,a,l,c,u,d){const h=new C,f=Ex;f.set(0,0,1),s.vmult(f,f);for(let p=0;p<e.vertices.length/3;p++){e.getVertex(p,h);const v=new C;v.copy(h),de.pointToWorldFrame(i,o,v,h);const m=wx;if(h.vsub(n,m),f.dot(m)<=0){if(d)return!0;const _=this.createContactEquation(a,l,t,e,c,u);_.ni.copy(f);const x=Tx;f.scale(m.dot(f),x),h.vsub(x,x),_.ri.copy(x),_.ri.vsub(a.position,_.ri),_.rj.copy(h),_.rj.vsub(l.position,_.rj),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}}}const Ui=new C,es=new C,ns=new C,yx=new C,Mx=new C,Sx=new Le,bx=new Le,Ex=new C,wx=new C,Tx=new C,Ax=new C,Rx=new C;new C;const Cx=new C,Px=new C,Lx=new C,Ix=new C,Nx=new C,Dx=new C,Ux=new C,Fx=new C,Ox=new C,Bx=new C,zx=new C,kx=new pn,Gx=[],kr=new C,ph=new C,Hx=new C,Vx=new C,Wx=new C;function qx(r,t,e){let n=null;const i=r.length;for(let s=0;s!==i;s++){const o=r[s],a=Hx;r[(s+1)%i].vsub(o,a);const l=Vx;a.cross(t,l);const c=Wx;e.vsub(o,c);const u=l.dot(c);if(n===null||u>0&&n===!0||u<=0&&n===!1){n===null&&(n=u>0);continue}else return!1}return!0}const Gr=new C,Xx=new C,Yx=new C,Zx=new C,Kx=[new C,new C,new C,new C,new C,new C],$x=new C,Jx=new C,Qx=new C,jx=new C,ty=new C,ey=new C,ny=new C,iy=new C,sy=new C,ry=new C,oy=new C,ay=new C,ly=new C,cy=new C;new C;new C;const hy=new C,uy=new C,dy=new C,fy=new C,py=new C,my=new C,gy=new C,_y=new C,vy=new C,xy=new C,mh=new Le,yy=new C;new C;const My=new C,gh=new C,Sy=new C,by=new C,Ey=new C,wy=[0],Ty=new C,Ay=new C;class _h{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let o=i.length-1;o>=s;o--)i[o+1]=i[o];i[s]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,s=n.length,o=i.length;let a=0;for(let l=0;l<s;l++){let c=!1;const u=n[l];for(;u>i[a];)a++;c=u===i[a],c||vh(t,u)}a=0;for(let l=0;l<o;l++){let c=!1;const u=i[l];for(;u>n[a];)a++;c=n[a]===u,c||vh(e,u)}}}function vh(r,t){r.push((t&4294901760)>>16,t&65535)}const ea=(r,t)=>r<t?`${r}-${t}`:`${t}-${r}`;class Ry{constructor(){this.data={keys:[]}}get(t,e){const n=ea(t,e);return this.data[n]}set(t,e,n){const i=ea(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=ea(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class Cy extends Au{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new C,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new C,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new Dv,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new fx,this.constraints=[],this.narrowphase=new xx(this),this.collisionMatrix=new ih,this.collisionMatrixPrevious=new ih,this.bodyOverlapKeeper=new _h,this.shapeOverlapKeeper=new _h,this.contactmaterials=[],this.contactMaterialTable=new Ry,this.defaultMaterial=new ar("default"),this.defaultContactMaterial=new uo(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof so?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=Pe.ALL,n.from=t,n.to=e,n.callback=i,na.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=Pe.ANY,n.from=t,n.to=e,n.result=i,na.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=Pe.CLOSEST,n.from=t,n.to=e,n.result=i,na.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof Ct&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let s=0;s<i.length;s++){const o=i[s];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=Fe.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=Fe.now();let s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(Fe.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=Dy,i=Uy,s=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,u=this.profile,d=Ct.DYNAMIC;let h=-1/0;const f=this.constraints,p=Ny;l.length();const v=l.x,m=l.y,g=l.z;let _=0;for(c&&(h=Fe.now()),_=0;_!==s;_++){const L=o[_];if(L.type===d){const w=L.force,D=L.mass;w.x+=D*v,w.y+=D*m,w.z+=D*g}}for(let L=0,w=this.subsystems.length;L!==w;L++)this.subsystems[L].update();c&&(h=Fe.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(u.broadphase=Fe.now()-h);let x=f.length;for(_=0;_!==x;_++){const L=f[_];if(!L.collideConnected)for(let w=n.length-1;w>=0;w-=1)(L.bodyA===n[w]&&L.bodyB===i[w]||L.bodyB===n[w]&&L.bodyA===i[w])&&(n.splice(w,1),i.splice(w,1))}this.collisionMatrixTick(),c&&(h=Fe.now());const M=Iy,E=e.length;for(_=0;_!==E;_++)M.push(e[_]);e.length=0;const b=this.frictionEquations.length;for(_=0;_!==b;_++)p.push(this.frictionEquations[_]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,M,this.frictionEquations,p),c&&(u.narrowphase=Fe.now()-h),c&&(h=Fe.now()),_=0;_<this.frictionEquations.length;_++)a.addEquation(this.frictionEquations[_]);const y=e.length;for(let L=0;L!==y;L++){const w=e[L],D=w.bi,F=w.bj,k=w.si,Y=w.sj;let W;if(D.material&&F.material?W=this.getContactMaterial(D.material,F.material)||this.defaultContactMaterial:W=this.defaultContactMaterial,W.friction,D.material&&F.material&&(D.material.friction>=0&&F.material.friction>=0&&D.material.friction*F.material.friction,D.material.restitution>=0&&F.material.restitution>=0&&(w.restitution=D.material.restitution*F.material.restitution)),a.addEquation(w),D.allowSleep&&D.type===Ct.DYNAMIC&&D.sleepState===Ct.SLEEPING&&F.sleepState===Ct.AWAKE&&F.type!==Ct.STATIC){const O=F.velocity.lengthSquared()+F.angularVelocity.lengthSquared(),H=F.sleepSpeedLimit**2;O>=H*2&&(D.wakeUpAfterNarrowphase=!0)}if(F.allowSleep&&F.type===Ct.DYNAMIC&&F.sleepState===Ct.SLEEPING&&D.sleepState===Ct.AWAKE&&D.type!==Ct.STATIC){const O=D.velocity.lengthSquared()+D.angularVelocity.lengthSquared(),H=D.sleepSpeedLimit**2;O>=H*2&&(F.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(D,F,!0),this.collisionMatrixPrevious.get(D,F)||(Fs.body=F,Fs.contact=w,D.dispatchEvent(Fs),Fs.body=D,F.dispatchEvent(Fs)),this.bodyOverlapKeeper.set(D.id,F.id),this.shapeOverlapKeeper.set(k.id,Y.id)}for(this.emitContactEvents(),c&&(u.makeContactConstraints=Fe.now()-h,h=Fe.now()),_=0;_!==s;_++){const L=o[_];L.wakeUpAfterNarrowphase&&(L.wakeUp(),L.wakeUpAfterNarrowphase=!1)}for(x=f.length,_=0;_!==x;_++){const L=f[_];L.update();for(let w=0,D=L.equations.length;w!==D;w++){const F=L.equations[w];a.addEquation(F)}}a.solve(t,this),c&&(u.solve=Fe.now()-h),a.removeAllEquations();const S=Math.pow;for(_=0;_!==s;_++){const L=o[_];if(L.type&d){const w=S(1-L.linearDamping,t),D=L.velocity;D.scale(w,D);const F=L.angularVelocity;if(F){const k=S(1-L.angularDamping,t);F.scale(k,F)}}}this.dispatchEvent(Ly),c&&(h=Fe.now());const A=this.stepnumber%(this.quatNormalizeSkip+1)===0,I=this.quatNormalizeFast;for(_=0;_!==s;_++)o[_].integrate(t,A,I);this.clearForces(),this.broadphase.dirty=!0,c&&(u.integrate=Fe.now()-h),this.stepnumber+=1,this.dispatchEvent(Py);let N=!0;if(this.allowSleep)for(N=!1,_=0;_!==s;_++){const L=o[_];L.sleepTick(this.time),L.sleepState!==Ct.SLEEPING&&(N=!0)}this.hasActiveBodies=N}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(Qn,jn),t){for(let s=0,o=Qn.length;s<o;s+=2)Os.bodyA=this.getBodyById(Qn[s]),Os.bodyB=this.getBodyById(Qn[s+1]),this.dispatchEvent(Os);Os.bodyA=Os.bodyB=null}if(e){for(let s=0,o=jn.length;s<o;s+=2)Bs.bodyA=this.getBodyById(jn[s]),Bs.bodyB=this.getBodyById(jn[s+1]),this.dispatchEvent(Bs);Bs.bodyA=Bs.bodyB=null}Qn.length=jn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(Qn,jn),n){for(let s=0,o=Qn.length;s<o;s+=2){const a=this.getShapeById(Qn[s]),l=this.getShapeById(Qn[s+1]);ti.shapeA=a,ti.shapeB=l,a&&(ti.bodyA=a.body),l&&(ti.bodyB=l.body),this.dispatchEvent(ti)}ti.bodyA=ti.bodyB=ti.shapeA=ti.shapeB=null}if(i){for(let s=0,o=jn.length;s<o;s+=2){const a=this.getShapeById(jn[s]),l=this.getShapeById(jn[s+1]);ei.shapeA=a,ei.shapeB=l,a&&(ei.bodyA=a.body),l&&(ei.bodyB=l.body),this.dispatchEvent(ei)}ei.bodyA=ei.bodyB=ei.shapeA=ei.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new pn;const na=new Pe,Fe=globalThis.performance||{};if(!Fe.now){let r=Date.now();Fe.timing&&Fe.timing.navigationStart&&(r=Fe.timing.navigationStart),Fe.now=()=>Date.now()-r}new C;const Py={type:"postStep"},Ly={type:"preStep"},Fs={type:Ct.COLLIDE_EVENT_NAME,body:null,contact:null},Iy=[],Ny=[],Dy=[],Uy=[],Qn=[],jn=[],Os={type:"beginContact",bodyA:null,bodyB:null},Bs={type:"endContact",bodyA:null,bodyB:null},ti={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},ei={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},ls=r=>r&&[r.x,r.y,r.z].every(Number.isFinite),xh=r=>ls(r.position)&&ls(r.velocity)&&ls(r.angularVelocity)&&ls(r.quaternion)&&Number.isFinite(r.quaternion.w);class Fy{constructor(t,e){this.world=new Cy({gravity:new C(0,-9.81,0),allowSleep:!0}),this.world.broadphase=new as(this.world),this.world.solver.iterations=12,this.world.solver.tolerance=1e-4,this.world.defaultContactMaterial.friction=.55,this.world.defaultContactMaterial.restitution=.12,this.world.defaultContactMaterial.contactEquationStiffness=1e7,this.bodies=[],this.accumulator=0,this.drag=null,this.stepCount=0,this.placements=new Map;for(const n of t){const i=new Ct({mass:0,shape:new nr(new C(...n.size.map(s=>s/2))),position:new C(...n.pos)});n.quat&&i.quaternion.set(...n.quat),this.world.addBody(i)}for(const n of e)this.addBody(n)}addBody(t){const e=new ar({friction:.6,restitution:t.restitution??.12}),n=new Ct({mass:t.mass,material:e,position:new C(...t.pos),linearDamping:.2,angularDamping:.4,sleepSpeedLimit:.12,sleepTimeLimit:.65});return t.shape==="sphere"?n.addShape(new hx(t.radius)):t.shape==="cylinder"?n.addShape(new ux(t.radius,t.radius,t.height,12)):n.addShape(new nr(new C(...t.size.map(i=>i/2)))),t.rotation&&n.quaternion.setFromEuler(...t.rotation),n.home={pos:n.position.clone(),quat:n.quaternion.clone()},n.name=t.name,n.mesh=t.mesh,this.world.addBody(n),this.bodies.push(n),t.body=n,this.syncBody(n,!0),n}suspendBody(t){t.suspended||(this.drag?.body===t&&this.endDrag({cancel:!0}),this.finishPlacement(t),this.syncBody(t,!0),t.velocity.setZero(),t.angularVelocity.setZero(),t.force.setZero(),t.torque.setZero(),t.sleep(),this.world.removeBody(t),t.suspended=!0)}resumeBody(t){t.suspended&&(t.position.copy(t.mesh.position),t.quaternion.copy(t.mesh.quaternion),t.previousPosition.copy(t.position),t.interpolatedPosition.copy(t.position),t.previousQuaternion.copy(t.quaternion),t.interpolatedQuaternion.copy(t.quaternion),t.aabbNeedsUpdate=!0,t.updateInertiaWorld(!0),t.suspended=!1,this.world.addBody(t),t.wakeUp())}startDrag(t,e){if(!this.bodies.includes(t)||t.suspended||!ls(e))return!1;this.endDrag({cancel:!0});const n=new C(e.x-t.position.x,e.y-t.position.y,e.z-t.position.z),i=new Ct({mass:0,collisionFilterGroup:0,collisionFilterMask:0});i.position.copy(t.position),this.placements.set(t,{fixedRotation:t.fixedRotation,quaternion:t.quaternion.clone()}),t.fixedRotation=!0,t.velocity.scale(.25,t.velocity),t.force.setZero(),this.holdOrientation(t),t.updateMassProperties();const s={stiffness:t.mass*200,damping:t.mass*22};return t.wakeUp(),this.drag={body:t,anchor:i,spring:s,offset:n},!0}moveDrag(t){if(!this.drag||!ls(t))return;const{anchor:e,offset:n}=this.drag;e.position.set(t.x-n.x,t.y-n.y,t.z-n.z)}applyDragForce(){if(!this.drag)return;const{body:t,anchor:e,spring:n}=this.drag;t.wakeUp();for(const i of["x","y","z"])t.force[i]+=n.stiffness*(e.position[i]-t.position[i])-n.damping*t.velocity[i]}endDrag({cancel:t=!1}={}){if(!this.drag)return;const{body:e}=this.drag;this.holdOrientation(e),this.drag=null,this.finishPlacement(e),e.force.setZero(),t&&e.velocity.setZero();const n=e.velocity.length();n>8&&e.velocity.scale(8/n,e.velocity),e.wakeUp()}holdOrientation(t){const e=this.placements.get(t);e&&(t.quaternion.copy(e.quaternion),t.previousQuaternion.copy(e.quaternion),t.interpolatedQuaternion.copy(e.quaternion),t.angularVelocity.setZero(),t.torque.setZero(),t.updateInertiaWorld(!0))}finishPlacement(t){const e=this.placements.get(t);e&&(this.placements.delete(t),t.fixedRotation=e.fixedRotation,t.angularVelocity.setZero(),t.torque.setZero(),t.updateMassProperties())}resetBody(t){this.drag?.body===t&&this.endDrag({cancel:!0}),this.finishPlacement(t),t.position.copy(t.home.pos),t.quaternion.copy(t.home.quat),t.previousPosition.copy(t.position),t.interpolatedPosition.copy(t.position),t.previousQuaternion.copy(t.quaternion),t.interpolatedQuaternion.copy(t.quaternion),t.velocity.setZero(),t.angularVelocity.setZero(),t.force.setZero(),t.torque.setZero(),t.aabbNeedsUpdate=!0,t.updateInertiaWorld(!0),t.wakeUp(),this.syncBody(t,!0)}reset(){this.endDrag({cancel:!0}),this.accumulator=0;for(const t of this.bodies)this.resetBody(t)}step(t){for(const i of this.bodies)!i.suspended&&!xh(i)&&this.resetBody(i);this.accumulator+=Number.isFinite(t)?Math.max(0,Math.min(t,.05)):0;let e=0;const n=1/120;for(;this.accumulator>=n&&e<6;){this.applyDragForce(),this.world.step(n),this.accumulator-=n,e++,this.stepCount++;for(const i of this.bodies){if(i.suspended)continue;this.holdOrientation(i),i.sleepState===Ct.SLEEPING&&this.drag?.body!==i&&this.finishPlacement(i),(!xh(i)||this.drag?.body!==i&&i.position.y<-30)&&this.resetBody(i);const s=i.velocity.length();s>8&&i.velocity.scale(8/s,i.velocity);const o=i.angularVelocity.length();o>16&&i.angularVelocity.scale(16/o,i.angularVelocity)}}for(const i of this.bodies)this.syncBody(i,!1,this.accumulator/n);return this.bodies.some(i=>!i.suspended&&i.sleepState!==Ct.SLEEPING)||!!this.drag}syncBody(t,e,n=1){!t.mesh||t.suspended||(e||t.sleepState===Ct.SLEEPING?(t.mesh.position.copy(t.position),t.mesh.quaternion.copy(this.placements.get(t)?.quaternion??t.quaternion)):(t.mesh.position.copy(t.previousPosition).lerp(t.position,n),t.previousQuaternion.slerp(t.quaternion,n,t.interpolatedQuaternion),t.mesh.quaternion.copy(this.placements.get(t)?.quaternion??t.interpolatedQuaternion)))}get awake(){return this.bodies.filter(t=>!t.suspended&&t.sleepState!==Ct.SLEEPING).length}}const ps=r=>{const t=Ee.clamp(r,0,1);return t*t*(3-2*t)},si=Object.freeze({firstFrameHoldMs:80,igniteMs:70,revealMs:430,reducedRevealMs:100}),Oy=si.igniteMs+si.revealMs,Ja=920,Qa=1100,Fu=280,By=r=>ps((r-Qa)/Fu);function zy(r,t=0){const e=r-t;return e<0?{active:!1,progress:0}:{active:!0,progress:e%Ja/Ja}}function ky(r,t,e=!1){const n=e?si.reducedRevealMs:Oy,i=Ee.clamp(t?r:n-r,0,n);if(e){const s=ps(i/n);return{progress:s,power:s,done:r>=n}}return{progress:ps((i-si.igniteMs)/si.revealMs),power:ps(i/160),done:r>=n}}function Gy(r,t){const e=t.clone().sub(r),n=new z(-e.z,0,e.x).normalize();return[r.clone(),r.clone().lerp(t,.24).addScaledVector(n,.12),r.clone().lerp(t,.51).addScaledVector(n,-.17),r.clone().lerp(t,.77).addScaledVector(n,.09),t.clone()]}class Hy{constructor(t,e,n,i,s){this.renderer=t,this.camera=e,this.lamp=n,this.reduced=i,this.dark=new to,this.dark.background=new qt("#080907"),this.dark.add(n.group),this.lights=s.map(l=>{const c=l.clone();return this.dark.add(c),{light:c,intensity:l.intensity}}),this.stats={phase:"loading",progress:0,lampStart:null,lampEnd:null,maxLampDrift:0,materialChanges:0,sceneFrames:0,sceneTime:0,cableVisible:!1,cableDelayMs:Qa,energyProgress:0,energyCycles:0},this.runtimeProgress=0,this.runtimePower=0,this.charge=new xn,this.charge.name="painted power cable",this.dark.add(this.charge),this.cableMaterial=new on({color:"#201a16",transparent:!0,opacity:.92,depthWrite:!1,toneMapped:!1}),this.connectorMaterial=new on({color:"#e09a51",transparent:!0,opacity:.22,depthWrite:!1,toneMapped:!1}),this.connector=new pe(new Mi(.052,12,8),this.connectorMaterial),this.connector.name="lamp cable connector",this.charge.add(this.connector),this.pulses=[];const o=[0,34,68];for(let l=0;l<o.length;l++){const c=new xn,u=l%3===0,d=new on({color:u?"#ffe2a1":"#f3a45c",transparent:!0,opacity:1,depthWrite:!1,toneMapped:!1}),h=new on({color:"#e56934",transparent:!0,opacity:.18,depthWrite:!1,toneMapped:!1}),f=new pe(new Mi(u?.038:.026,12,8),d),p=new pe(new Mi(u?.075:.052,12,8),h);c.name="traveling power fleck",c.visible=!1,c.add(p,f),this.charge.add(c),this.pulses.push({group:c,delay:o[l],coreMaterial:d,haloMaterial:h,lead:u})}this.size=new At;const a=Math.min(4,t.capabilities.maxSamples);this.worldTarget=new Mn(1,1,{type:Sn,samples:a}),this.lampTarget=new Mn(1,1,{type:Sn,samples:a}),this.uniforms={worldMap:{value:this.worldTarget.texture},lampMap:{value:this.lampTarget.texture},origin:{value:new At},aspect:{value:1},progress:{value:0},reduced:{value:i?1:0}},this.material=new wi({uniforms:this.uniforms,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D worldMap,lampMap;uniform vec2 origin;uniform float aspect,progress,reduced;
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
      }`}),this.quad=new pe(new ci(2,2),this.material),this.screen=new to,this.screen.add(this.quad),this.screenCamera=new bl}point(){return this.camera.updateMatrixWorld(),this.lamp.group.localToWorld(new z(0,1.96,0)).project(this.camera)}materials(){const t=[];return this.lamp.group.traverse(e=>{e.isMesh&&t.push(e.material.uuid)}),t.join(",")}layoutCable(){this.camera.updateMatrixWorld();const t=this.lamp.group.localToWorld(new z(0,.045,0)),e=t.clone().project(this.camera),n=new fu;n.setFromCamera(new At(-1.18,Ee.clamp(e.y+.025,-.86,.42)),this.camera);const i=new z;n.ray.intersectPlane(new Rn(new z(0,1,0),-.045),i)||i.copy(t).add(new z(-10,0,1)),this.curve=new sr(Gy(i,t),!1,"catmullrom",.28),this.cable&&(this.charge.remove(this.cable),this.cable.geometry.dispose()),this.cable=new pe(new yl(this.curve,128,.018,8,!1),this.cableMaterial),this.cable.name="cable from beyond the left edge",this.cable.renderOrder=-1,this.charge.add(this.cable),this.connector.position.copy(t);const s=i.clone().project(this.camera),o=t.clone().project(this.camera);this.stats.cableStartScreen=[+s.x.toFixed(3),+s.y.toFixed(3)],this.stats.cableEndScreen=[+o.x.toFixed(3),+o.y.toFixed(3)]}updateCharge(t,e=1,n=1){if(!this.curve)return 0;const i=Math.max(0,t-this.chargeBegan);let s=0,o=0;for(const a of this.pulses){const l=zy(i,a.delay),c=l.progress,u=Ee.smoothstep(c,0,.085)*(1-Ee.smoothstep(c,.91,1)),d=l.active?e*u:0;a.group.visible=l.active&&e>.01,a.group.position.copy(this.curve.getPointAt(c)),a.group.quaternion.setFromUnitVectors(new z(0,0,1),this.curve.getTangentAt(c)),a.group.scale.set(1,1,a.lead?1.65:1.3),a.coreMaterial.opacity=d*(a.lead?1:.72),a.haloMaterial.opacity=d*(a.lead?.2:.1),s=Math.max(s,Ee.smoothstep(c,.84,1)),a.lead&&a.delay===0&&l.active&&(o=c)}return this.cableMaterial.opacity=.92*n,this.connectorMaterial.opacity=n*(.16+.62*s*e),this.connector.scale.setScalar(1+s*e*.42),this.charge.visible=n>.01,this.stats.cableVisible=this.charge.visible,this.stats.energyProgress=+o.toFixed(3),this.stats.energyCycles=Math.floor(i/Ja),s}resize(){this.renderer.getDrawingBufferSize(this.size),this.worldTarget.setSize(this.size.x,this.size.y),this.lampTarget?.setSize(this.size.x,this.size.y),this.uniforms.aspect.value=this.size.x/this.size.y,this.initial&&this.layoutCable()}display(){this.renderer.setRenderTarget(null),this.renderer.render(this.screen,this.screenCamera)}render(t,e,n){const i=this.renderer;this.lamp.setPower(n);for(const{light:a,intensity:l}of this.lights)a.intensity=l*(.22+.78*n);this.uniforms.progress.value=e;const s=this.point();this.uniforms.origin.value.set(s.x*.5+.5,s.y*.5+.5),this.stats.progress=e,this.stats.maxLampDrift=Math.max(this.stats.maxLampDrift,s.distanceTo(this.initial)),this.materials()!==this.initialMaterials&&this.stats.materialChanges++;const o=this.lamp.group.parent;t&&(i.setRenderTarget(this.worldTarget),i.render(t,this.camera)),this.dark.add(this.lamp.group),i.setRenderTarget(this.lampTarget),i.render(this.dark,this.camera),o.add(this.lamp.group),t?this.uniforms.worldMap.value=this.worldTarget.texture:this.uniforms.worldMap.value=this.lampTarget.texture,this.display(),document.getElementById("loading").dataset.phase=this.stats.phase}setRuntimeState(t,e,n){this.runtimeProgress=Ee.clamp(t,0,1),this.runtimePower=Ee.clamp(e,0,1),n&&(this.stats.phase=n),this.stats.progress=this.runtimeProgress}async show(){this.initial=this.point(),this.initialMaterials=this.materials(),this.stats.lampStart=this.initial.toArray(),this.began=performance.now(),this.chargeBegan=this.began+Qa+Fu,this.loadingVisibility=0,this.layoutCable(),this.updateCharge(this.began,0,1),this.render(null,0,0),document.getElementById("loading").hidden=!0,this.loading=!0;const t=e=>{if(!this.loading)return;this.loadingVisibility=By(e-this.began);const n=this.updateCharge(e,this.loadingVisibility,1);this.render(null,0,this.loadingVisibility*(.008+n*.028)),this.loadingFrame=requestAnimationFrame(t)};this.loadingFrame=requestAnimationFrame(t),await new Promise(e=>requestAnimationFrame(()=>requestAnimationFrame(e)))}async reveal(t,e){const n=this.renderer;n.setRenderTarget(this.worldTarget),await n.compileAsync(t,this.camera),n.setRenderTarget(null),this.loading=!1,this.loadingFrame&&cancelAnimationFrame(this.loadingFrame);const i=this.loadingVisibility;let s=0;await new Promise(o=>{const a=l=>{const c=e(l);this.stats.sceneFrames++,this.stats.sceneTime=c.elapsed,s+=c.dt*1e3;const u=this.reduced?0:si.igniteMs,d=this.reduced?si.reducedRevealMs:si.revealMs;let h=Ee.clamp((s-u)/d,0,1),f=ps(h),p=ps(s/160);l-this.began<si.firstFrameHoldMs&&(s=0,h=f=p=0),this.stats.phase=s<u?"lighting":"revealing",this.updateCharge(l,i*(1-f),1-f),this.render(t,f,p),h<1?requestAnimationFrame(a):o()};requestAnimationFrame(a)}),this.lamp.setPower(1),this.charge.visible=!1,this.stats.cableVisible=!1,this.setRuntimeState(1,1,"ready"),this.stats.lampEnd=this.point().toArray(),document.getElementById("loading").dataset.phase="ready"}renderScene(t){if(this.runtimeProgress>=1&&this.runtimePower>=1){this.lamp.setPower(1),this.uniforms.progress.value=1,this.renderer.setRenderTarget(this.worldTarget),this.renderer.render(t,this.camera),this.display();return}this.render(this.runtimeProgress<=0?null:t,this.runtimeProgress,this.runtimePower)}}function Vy(r,t){let e=null,n=0,i=0;return{prepare(){for(let s=0;s<240;s++)r.step(1/120);t?.(0)},advance(s){const o=e===null?0:Math.max(0,Math.min((s-e)/1e3,.05));e=s,n+=o,i++;const a=r.step(o);return t?.(n),{dt:o,awake:a,elapsed:n,frames:i}},pause(){e=null},get elapsed(){return n},get frames(){return i}}}const fo=.55,Si=fo*1006/768,Wy={name:"letter",section:"letter",label:"Letter · click to read, drag to throw",shape:"box",size:[.64,.028,.35],mass:.08,pos:[-1.38,1.47,-.8],rotation:[0,-.12,0]},rn=r=>(r=Ee.clamp(r,0,1),r*r*r*(r*(r*6-15)+10));function qy(r,t,e){const n=Si/(t.height/e.height*2*Math.tan(Ee.degToRad(r.fov/2))),i=2*n*Math.tan(Ee.degToRad(r.fov/2));return{position:new z((t.left+t.width/2-e.width/2)/e.height*i,-(t.top+t.height/2-e.height/2)/e.height*i,-n).applyQuaternion(r.quaternion).add(r.position),quaternion:r.quaternion.clone()}}function yh(r,t,e){const n=rn(e),i=new z(0,.42,0),s=t.position.clone().sub(r.position),o=r.position.clone().addScaledVector(s,.27).add(i),a=t.position.clone().addScaledVector(s,-.16).addScaledVector(i,.45);return{position:new lu(r.position,o,a,t.position).getPoint(n),quaternion:r.quaternion.clone().slerp(t.quaternion,rn(Math.min(1,e/.84)))}}function Ou(r){return{outer:Ee.clamp(rn(r/.46),0,1),inner:Ee.clamp(rn((r-.54)/.46),0,1)}}function Xy(){const r=Si/6,t=Array.from({length:37},(a,l)=>(l/36-.5)*Si);for(const a of[-1,1])for(const l of[0,5e-4,.001,.0015,.002,.003,.004,.005,.006,.008,.01,.012])t.push(a*(r+l));t.sort((a,l)=>a-l);const e=t.filter((a,l)=>!l||a-t[l-1]>1e-7),n=[],i=[],s=[];for(let a=0;a<e.length;a++)for(let l=0;l<=16;l++)if(n.push((l/16-.5)*fo,e[a],0),i.push(l/16,e[a]/Si+.5),a<e.length-1&&l<16){const c=a*17+l;s.push(c,c+1,c+17,c+1,c+18,c+17)}const o=new De;return o.setAttribute("position",new ae(n,3)),o.setAttribute("uv",new ae(i,2)),o.setIndex(s),o.computeVertexNormals(),o}function Yy(r,t,e=0){const n=r.attributes.position,i=r.attributes.uv,s=Si/6,{inner:o,outer:a}=Ou(t);for(let l=0;l<n.count;l++){const c=(i.getX(l)-.5)*fo,u=(i.getY(l)-.5)*Si;let d=u,h=0;if(Math.abs(u)>s){const f=u>0?1:-1,p=(1-(f>0?o:a))*Math.PI,v=f>0?.0012:.0028,m=Math.abs(u)-s,g=Math.min(p,m/v),_=Math.max(0,m-v*p);d=f*(s+v*Math.sin(g)+_*Math.cos(p)),h=v*(1-Math.cos(g))+_*Math.sin(p)}h+=e*Math.sin((d/Si+.5)*Math.PI)*(1+.35*Math.sin(i.getX(l)*Math.PI)),n.setXYZ(l,c,d,h)}n.needsUpdate=!0,r.computeVertexNormals(),r.computeBoundingSphere()}function Mh(r,t,e,n){return r.updateMatrixWorld(!0),[[-1,1],[1,1],[1,-1],[-1,-1]].map(([i,s])=>{const o=r.localToWorld(new z(i*fo/2,s*Si/2,0)).project(t);return{x:(o.x*.5+.5)*e,y:(.5-o.y*.5)*n}})}const Fi=Object.freeze({autoDelay:.04,shake:.32,position:.08,unseal:.12,extract:.14,flight:.67,arrival:.08}),Sh={linkedin:"https://www.linkedin.com/in/rahul-hira-59892128a/",email:"mailto:rahul.hira@icloud.com"},Zy="Hi! I'm Rahul, a high school senior in San Francisco. I'm planning to use this website as a personal portfolio, but it's still under development. In the mean time, here's my LinkedIn! Feel free to contact me at rahul.hira@icloud.com. Thanks for stopping by. Best, Rahul Hira.";function Ky(){const r=document.createElement("canvas");r.width=r.height=256;const t=r.getContext("2d"),e=t.createImageData(256,256);let n=87123;const i=()=>(n=Math.imul(n,1664525)+1013904223>>>0,n/4294967296);for(let s=0;s<e.data.length;s+=4){const o=(i()-.5)*15;e.data[s]=231+o,e.data[s+1]=215+o,e.data[s+2]=176+o,e.data[s+3]=255}t.putImageData(e,0,0);for(let s=0;s<450;s++){t.strokeStyle=s%2?"#795c3511":"#fff6dd35",t.lineWidth=.35;const o=i()*256,a=i()*256;t.beginPath(),t.moveTo(o,a),t.lineTo(o+i()*12-6,a+i()*3-1.5),t.stroke()}return r}function bh(r,t){const e=document.createElement("canvas");e.width=768,e.height=1006;const n=e.getContext("2d");n.beginPath(),[[.5,.4],[12,.1],[23,.5],[37,0],[48,.35],[62,.1],[76,.45],[88,.05],[99.4,.5],[99.7,14],[99.3,29],[99.8,44],[99.4,59],[99.9,73],[99.5,88],[99.1,99.5],[86,99.8],[72,99.4],[59,100],[45,99.6],[30,99.9],[17,99.5],[.6,99.8],[.2,86],[.5,71],[.1,57],[.6,44],[0,29],[.4,15]].forEach(([o,a],l)=>n[l?"lineTo":"moveTo"](o*7.68,a*10.06)),n.closePath(),n.clip(),n.fillStyle=n.createPattern(r,"repeat"),n.fillRect(0,0,768,1006);const i=n.createRadialGradient(384,430,100,384,503,650);i.addColorStop(0,"#fff8df55"),i.addColorStop(1,"#79572b30"),n.fillStyle=i,n.fillRect(0,0,768,1006);for(const o of[1006/3,1006*2/3]){const a=n.createLinearGradient(0,o-7,0,o+7);a.addColorStop(0,"#79572b00"),a.addColorStop(.48,"#79572b16"),a.addColorStop(.52,"#fff8df40"),a.addColorStop(1,"#fff8df00"),n.fillStyle=a,n.fillRect(0,o-7,768,14)}t&&n.drawImage(t,38,30,692,907);const s=new lo(e);return s.colorSpace=He,s.anisotropy=4,s}async function $y({parent:r,camera:t,canvas:e,physics:n,reduced:i,onLock:s,invalidate:o}){const a=new Image;a.src="./assets/letter-handwriting.png",await a.decode();const l=Ky(),c=bh(l),u=bh(l,a),d=new an({map:c,roughness:1,side:je}),h=new xn;r.add(h);const f=new pe(new ai(.64,.014,.35),d);f.castShadow=f.receiveShadow=!0,h.add(f);const p=new De().setFromPoints([new z(-.31,.008,.16),new z(.02,.008,-.03),new z(.31,.008,.16)]);h.add(new gf(p,new iu({color:"#a68b5f",transparent:!0,opacity:.55})));const v=new xn;v.position.set(0,.012,-.175),h.add(v);const m=new De;m.setAttribute("position",new ae([-.32,0,0,.32,0,0,0,0,.235],3)),m.setAttribute("uv",new ae([0,0,1,0,.5,1],2)),m.computeVertexNormals();const g=new pe(m,d);g.castShadow=g.receiveShadow=!0,v.add(g);const _=new pe(new li(.032,.035,.012,20),new an({color:"#8e4939",roughness:.83}));_.position.set(0,.021,.022),_.castShadow=!0,h.add(_);const x=new pe(new ai(.66,.045,.37),new on({visible:!1}));h.add(x);const M={...Wy,mesh:h};h.userData.item=M,n.addBody(M),n.suspendBody(M.body);const E=new to,b=Xy(),y={transparent:!0,alphaTest:.02,toneMapped:!1,depthTest:!0,depthWrite:!0},S=new pe(b,new on({...y,map:u,side:bi})),P=new pe(b,new on({...y,map:c,side:tn}));S.add(P),E.add(S),S.visible=!1;let A=0;function I(ct,ut=0){A=ct,Yy(S.geometry,ct,ut)}const N=document.createElement("dialog");N.className="letter-dialog",N.setAttribute("aria-label","A letter from Rahul"),N.setAttribute("aria-describedby","letter-transcript"),N.innerHTML=`<div class="letter-scrim" aria-hidden="true"></div><div class="letter-sheet"><article class="letter-paper"><img class="letter-composite" alt="" draggable="false"><div class="letter-writing"><a class="letter-link letter-linkedin" href="${Sh.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="Rahul Hira on LinkedIn"><span class="visually-hidden">LinkedIn</span></a><a class="letter-link letter-email" href="${Sh.email}" aria-label="Email Rahul at rahul.hira@icloud.com"><span class="visually-hidden">rahul.hira@icloud.com</span></a></div><p id="letter-transcript" class="visually-hidden">${Zy}</p></article><button class="letter-close" type="button" aria-label="Close letter">×</button></div>`,document.body.append(N);const L=N.querySelector(".letter-sheet"),w=N.querySelector(".letter-scrim"),D=N.querySelector(".letter-close"),F=N.querySelector(".letter-composite");F.src=u.image.toDataURL(),await F.decode();let k="dormant",Y=0,W=!1,O=0,H=null,X=null,ot=null,q=null,Q=null,lt=null,et=0,st=null;const Pt=null?.get("letter"),ft=ct=>({position:ct.position.clone(),quaternion:ct.quaternion.clone()});function Bt(ct,ut){ct.position.copy(ut.position),ct.quaternion.copy(ut.quaternion)}function Nt(ct){k=ct,Y=0,et=0,N.dataset.state=ct}function Lt(ct=.045){return h.updateMatrixWorld(!0),{position:h.localToWorld(new z(0,ct,-.025)),quaternion:h.getWorldQuaternion(new yn).multiply(new yn().setFromEuler(new Dn(-Math.PI/2,0,0)))}}function Vt(){return qy(t,L.getBoundingClientRect(),{width:innerWidth,height:innerHeight})}function Kt(){L.inert=!0,L.style.opacity="0",w.style.opacity="0",N.dataset.state="flying",N.showModal(),Q=Vt()}function ye(){v.rotation.x=0,_.visible=!0,S.visible=!1}function Xt(ct){if(!["dormant","waiting","closed"].includes(k))return;W=!1,s(!0),n.suspendBody(M.body),X=ft(h);const ut=new Dn().setFromQuaternion(h.quaternion,"YXZ").y;ot={position:X.position.clone().add(new z(0,.065,0)),quaternion:new yn().setFromEuler(new Dn(0,ut,0))},Nt(ct&&!i?"shaking":"positioning"),o()}function we(){Bt(S,Q),I(1);const ct=Mh(S,t,innerWidth,innerHeight),ut=L.getBoundingClientRect(),B=[[ut.left,ut.top],[ut.right,ut.top],[ut.right,ut.bottom],[ut.left,ut.bottom]];lt=Math.max(...ct.map((kt,Qt)=>Math.hypot(kt.x-B[Qt][0],kt.y-B[Qt][1]))),Nt("arriving")}function ie(){Bt(h,X),ye(),N.close(),Nt("closed"),n.resumeBody(M.body),s(!1),e.focus({preventScroll:!0}),o()}function nt(){!N.open||!["open","arriving"].includes(k)||(Q=Vt(),Bt(S,Q),I(1),S.material.opacity=1,S.visible=!0,st=Number(L.style.opacity)||1,L.inert=!0,Nt("departing"),o())}return D.addEventListener("click",nt),N.addEventListener("cancel",ct=>{ct.preventDefault(),nt()}),N.addEventListener("keydown",ct=>ct.stopPropagation()),window.addEventListener("resize",()=>{N.open&&(Q=Vt(),["arriving","open","departing"].includes(k)&&Bt(S,Q))}),{item:M,group:h,open:()=>Xt(!1),close:nt,arm(){k==="dormant"&&(W=!0,Nt("waiting"),o())},render(ct){if(!S.visible)return;P.material.opacity=S.material.opacity;const ut=ct.autoClear;ct.autoClear=!1,ct.clearDepth(),ct.render(E,t),ct.autoClear=ut},update(ct,ut=!0){if(Y+=ct,N.open&&["flying","arriving","departing","returning"].includes(k)&&(Q=Vt()),k==="waiting")W&&ut?Y>Fi.autoDelay&&Xt(!0):Y=0;else if(k==="shaking"){const B=Math.min(1,Y/Fi.shake),kt=Math.sin(B*Math.PI);Bt(h,X),h.rotateY(Math.sin(B*36)*.075*kt),h.rotateZ(Math.sin(B*31)*.025*kt),h.position.y+=Math.abs(Math.sin(B*28))*.025*kt,B===1&&(Bt(h,X),Nt("positioning"))}else if(k==="positioning"){const B=i?1:Math.min(1,Y/Fi.position),kt=rn(B);h.position.lerpVectors(X.position,ot.position,kt),h.quaternion.slerpQuaternions(X.quaternion,ot.quaternion,kt),B===1&&Nt("unsealing")}else if(k==="unsealing"){const B=i?1:Math.min(1,Y/Fi.unseal);v.rotation.x=-Math.PI*.86*rn(B),_.visible=B<.28,B===1&&(Bt(S,Lt()),I(0),S.visible=!0,S.material.opacity=0,Nt("extracting"))}else if(k==="extracting"){const B=i?1:Math.min(1,Y/Fi.extract);et=B;const kt=Lt(),Qt=Lt(.38);S.position.lerpVectors(kt.position,Qt.position,rn(B)),S.quaternion.copy(kt.quaternion),I(rn(B)*.15),S.material.opacity=Math.min(1,B*6),B===1&&Pt!=="extract"&&(q=ft(S),Kt(),Nt("flying"))}else if(k==="flying"){const B=i?1:Math.min(1,Y/Fi.flight);et=B,Bt(S,yh(q,Q,B)),I(.15+.85*rn(Math.min(1,B/.72)),Math.sin(B*Math.PI)*.025),B===1&&Pt!=="flight"&&we()}else if(k==="arriving"){const B=Math.min(1,Y/Fi.arrival),kt=rn(B);L.style.opacity=String(kt),w.style.opacity=String(kt),B===1&&(S.visible=!1,Nt("open"),L.inert=!1,O++,H=performance.now(),D.focus({preventScroll:!0}))}else if(k==="departing"){const B=Math.min(1,Y/.14),kt=rn(B);L.style.opacity=String(st*(1-kt)),w.style.opacity=String(1-kt),B===1&&Nt("returning")}else if(k==="returning"){const B=i?1:Math.min(1,Y/.9),kt=1-B;Bt(S,yh(q,Q,kt)),I(.15+.85*rn(Math.min(1,kt/.7)),Math.sin(B*Math.PI)*.018),B===1&&Nt("inserting")}else if(k==="inserting"){const B=i?1:Math.min(1,Y/.35),kt=Lt(.38),Qt=Lt();S.position.lerpVectors(kt.position,Qt.position,rn(B)),S.quaternion.copy(kt.quaternion),I(.15*(1-rn(B))),S.material.opacity=Math.min(1,(1-B)*5),B===1&&(S.visible=!1,Nt("resealing"))}else if(k==="resealing"){const B=i?1:Math.min(1,Y/.25),kt=rn(B);v.rotation.x=-Math.PI*.86*(1-kt),h.position.lerpVectors(ot.position,X.position,kt),h.quaternion.slerpQuaternions(ot.quaternion,X.quaternion,kt),_.visible=B>.8,B===1&&ie()}return!["dormant","open","closed"].includes(k)},get canDrag(){return k==="closed"},get locked(){return!["dormant","waiting","closed"].includes(k)},get diagnostics(){const ct=h.getWorldPosition(new z).project(t);return{folds:Ou(A),phase:k,progress:et,openCount:O,shownAt:H,handoffError:lt,bodyDynamic:!M.body.suspended,pageVisible:S.visible,pageOpacity:S.material.opacity,pageCorners:S.visible?Mh(S,t,innerWidth,innerHeight):null,point:{x:(ct.x*.5+.5)*innerWidth,y:(.5-ct.y*.5)*innerHeight}}}}}function Jy(r,t){const e=new Rn().setFromNormalAndCoplanarPoint(r.getWorldDirection(new z),t),n=new z(0,.32,0).applyQuaternion(r.quaternion);return{project(i,s){return i.intersectPlane(e,s)?(s.add(n),s.toArray().every(Number.isFinite)):!1}}}function Eh(r,t,e){const n=t.position.clone(),i=t.quaternion.clone(),s=r.target.clone(),o=r.enableDamping;r.enabled=!1,r.disconnect(),r.enableDamping=!1,r.update(),t.position.copy(n),t.quaternion.copy(i),r.target.copy(s),r.update(),r.enableDamping=o;let a=!1;return()=>{a||(a=!0,r.connect(e),r.enabled=!0)}}function Qy(r,t,e,n,i,s,o=10){const a=r.intersectObjects(t.map(u=>u.mesh),!0);if(a.length){let u=a[0].object;for(;u&&!u.userData.item;)u=u.parent;return u?{item:u.userData.item,point:a[0].point}:null}let l=null,c=1/0;for(const u of t){const d=new Ai().setFromObject(u.mesh),h=d.getCenter(new z),f=h.clone().project(e);if(f.z<-1||f.z>1)continue;let p=1/0,v=-1/0,m=1/0,g=-1/0;for(const x of[d.min.x,d.max.x])for(const M of[d.min.y,d.max.y])for(const E of[d.min.z,d.max.z]){const b=new z(x,M,E).project(e),y=(b.x*.5+.5)*s.width+s.left,S=(-b.y*.5+.5)*s.height+s.top;p=Math.min(p,y),v=Math.max(v,y),m=Math.min(m,S),g=Math.max(g,S)}if(n<p-o||n>v+o||i<m-o||i>g+o)continue;const _=Math.hypot(n-(p+v)/2,i-(m+g)/2);_<c&&(c=_,l={item:u,point:h})}return l}function jy(r){const t=document.createElement("canvas");t.width=4096,t.height=2048;const e=t.getContext("2d");e.scale(2,2);let n=41817;const i=()=>(n=Math.imul(n,1664525)+1013904223>>>0,n/4294967296),s=e.createLinearGradient(0,0,0,1024);for(const[c,u]of[[0,"#475b63"],[.22,"#657b82"],[.4,"#8c9e9f"],[.53,"#c4c5b5"],[.65,"#d4c6a3"],[1,"#a59468"]])s.addColorStop(c,u);e.fillStyle=s,e.fillRect(0,0,2048,1024),e.lineCap="round";for(let c=0;c<1400;c++){const u=i()*2048,d=70+i()*530,h=10+i()*100;e.strokeStyle=["#5e777e","#97a8a5","#d4d5c3","#909b94","#dddcca"][c%5],e.globalAlpha=.05+i()*.11,e.lineWidth=1+i()*5,e.beginPath(),e.moveTo(u,d),e.bezierCurveTo(u+h*.3,d-7,u+h*.75,d-8,u+h,d-3),e.stroke()}e.globalAlpha=.2,e.globalCompositeOperation="soft-light";const o=r.image;e.drawImage(o,o.width*.51,o.height*.51,o.width*.47,o.height*.47,0,0,2048,690),e.globalCompositeOperation="source-over",e.globalAlpha=1;function a(c,u,d,h){const f=document.createElement("canvas"),p=d+h*2,v=h*2;f.width=Math.ceil(p*2),f.height=Math.ceil(v*2);const m=f.getContext("2d");m.scale(2,2),m.translate(p/2,v/2),m.lineCap="round";const g=()=>{m.beginPath(),m.moveTo(-d*.49,h*.15),m.bezierCurveTo(-d*.32,h*.3,-d*.4,-h*.42,-d*.2,-h*.38),m.bezierCurveTo(-d*.02,-h*.36,-d*.16,h*.06,-d*.01,h*.03),m.bezierCurveTo(d*.12,-h*.43,d*.3,-h*.18,d*.37,-h*.01),m.bezierCurveTo(d*.42,h*.08,d*.49,h*.06,d*.54,h*.01)};m.strokeStyle="#dedbc7",m.lineWidth=h*.53,g(),m.stroke(),m.bezierCurveTo(d*.2,h*.34,-d*.25,h*.4,-d*.49,h*.15),m.closePath(),m.fillStyle="#dedbc7",m.fill(),m.lineWidth=h*.25,m.beginPath(),m.moveTo(-d*.42,h*.2),m.bezierCurveTo(-d*.15,h*.4,d*.24,h*.28,d*.43,h*.12),m.stroke(),m.globalCompositeOperation="source-atop";const _=m.createLinearGradient(0,-h*.62,0,h*.48);for(const[x,M]of[[0,"#e5e1cb"],[.4,"#cdc4a7"],[.66,"#b4b29e"],[1,"#8c948c"]])_.addColorStop(x,M);m.fillStyle=_,m.fillRect(-p/2,-v/2,p,v);for(let x=0;x<550;x++){const M=(i()-.5)*d*1.2,E=(i()-.5)*h*1.5,b=2+i()*12;m.strokeStyle=E>h*.08?["#8e968a","#acae9b","#c3bbae"][x%3]:["#e8e5cf","#c8b475","#d4cab3"][x%3],m.globalAlpha=.15+i()*.4,m.lineWidth=.4+i()*2,m.beginPath(),m.moveTo(M,E),m.quadraticCurveTo(M+b*.5,E-2,M+b,E-1),m.stroke()}for(let x=0;x<95;x++){const M=x%2,E=Math.PI*(.1+i()*1.65),b=d*(M?.14:.09),y=h*(M?.32:.35),S=(M?d*.2:-d*.2)+Math.cos(E)*b,P=-h*.11-Math.sin(E)*y;m.strokeStyle=x%4?"#ede7cf":"#b2ad97",m.globalAlpha=.25+i()*.45,m.lineWidth=.4+i()*1.1,m.beginPath(),m.moveTo(S,P),m.quadraticCurveTo(S+3,P-2,S+6+i()*6,P-1),m.stroke()}m.globalAlpha=.08,m.drawImage(o,0,o.height*.51,o.width*.47,o.height*.47,-p/2,-v/2,p,v);for(const x of[-2048,0,2048])e.drawImage(f,c+x-p/2,u-v/2,p,v)}for(const[c,u,d,h]of[[65,458,155,42],[250,405,130,44],[430,468,180,47],[630,430,125,36],[820,475,185,42],[1030,397,155,49],[1230,461,180,44],[1460,426,170,46],[1660,475,155,39],[1850,461,120,32],[2010,481,120,34]])a(c,u,d,h);e.globalAlpha=1;const l=new lo(t);return l.colorSpace=He,l.anisotropy=4,new pe(new Mi(270,64,32),new on({map:l,side:tn,depthWrite:!1,fog:!1,toneMapped:!1}))}const vn={ochre:"#af8c43",saffron:"#c7a456",straw:"#bfb07a",wine:"#85513f",madder:"#a8674c",viridian:"#566548",cobalt:"#65756c",chalk:"#e3dfc9",sky:"#929d98",fog:"#b5b09c"},is=[vn.ochre,vn.saffron,vn.viridian,vn.straw,vn.wine,vn.cobalt].map(r=>new qt(r)),tM=new qt("#a89861"),eM=new qt("#8d5d42"),Hr=(r,t,e)=>{const n=Ee.clamp((e-r)/(t-r),0,1);return n*n*(3-2*n)};function wh(r,t,e=new qt){const i=((r*.115+t*.045+Math.sin(t*.14)*.42+Math.sin((r+t)*.09)*.16+Math.sin(r*1.4+t*.35)*Math.sin(t*.8)*.08+2.3)%is.length+is.length)%is.length,s=Math.floor(i);e.copy(is[s]).lerp(is[(s+1)%is.length],Hr(.18,.82,i-s));const o=(1-Hr(3.3,6.5,Math.hypot(r*.85,t*.95)))*.72;e.lerp(tM,o);const a=r*.81-t*.59,l=r*.59+t*.81,c=Hr(1.1,3,Math.abs(a)+Math.sin(l*.65)*.5)*Hr(-4,1,l);return e.lerp(eM,c*.66*(1-o*.55)),e.multiplyScalar(.91+.09*Math.sin(r*.72+t*.33)*Math.sin(t*.64-r*.21))}const Ie=(r,t,e)=>{const n=Ee.clamp((e-r)/(t-r),0,1);return n*n*(3-2*n)},nM=new sr([[-25,-78],[-18,-60],[-15,-48],[-19,-39],[-23,-33],[-21,-27],[-25,-21],[-23,-13],[-31,-8],[-44,-10],[-57,-17],[-68,-23],[-80,-26]].map(([r,t])=>new z(r,0,t)),!1,"centripetal"),ro=320,oo=100,ja=100,iM=nM.getSpacedPoints(ro),sM=new sr([[-36,-148],[-43,-123],[-35,-100],[-25,-78]].map(([r,t])=>new z(r,0,t)),!1,"centripetal"),rM=new sr([[-80,-26],[-96,-31],[-111,-45],[-131,-54],[-150,-68]].map(([r,t])=>new z(r,0,t)),!1,"centripetal"),Un=[...sM.getSpacedPoints(oo).slice(0,-1),...iM,...rM.getSpacedPoints(ja).slice(1)],ki=[...Array.from({length:oo},(r,t)=>-.6+t/oo*.6),...Array.from({length:ro+1},(r,t)=>t/ro),...Array.from({length:ja},(r,t)=>1+(t+1)/ja*.6)],ir=Un.length-1,Bu=r=>r<0?7.9-r*.6:r>1?-.3-(r-1)*.35:7.9-2.1*r-1.5*Ie(.345,.39,r)-1.55*Ie(.415,.46,r)-2.35*Ie(.48,.535,r)-.7*Ie(.54,.72,r),po=r=>1.45+3*Ie(.26,.62,r)+.35*Math.sin(r*19)**2+.4*Math.sin(r*37)**2+2*(1-Ie(-.5,0,r)),ia=r=>Math.max(Ie(.335,.36,r)*(1-Ie(.39,.41,r)),Ie(.405,.43,r)*(1-Ie(.46,.48,r)),Ie(.47,.49,r)*(1-Ie(.535,.55,r))),zu=r=>Ie(-.6,-.32,r)*(1-Ie(1.28,1.6,r));for(let r=0;r<=ir;r++)Un[r].y=Bu(ki[r]);const tl=Un.map((r,t)=>{const e=Un[Math.max(0,t-1)],n=Un[Math.min(ir,t+1)];return new z(-(n.z-e.z),0,n.x-e.x).normalize()});function zs(r){const t=oo+Ee.clamp(r,0,.999999)*ro,e=Math.floor(t),n=t-e;return{position:Un[e].clone().lerp(Un[e+1],n),side:tl[e].clone().lerp(tl[e+1],n).normalize(),width:po(r)}}function Pl(r,t){let e=1/0,n=0,i=0,s=0;for(let o=0;o<ir;o++){const a=Un[o],l=Un[o+1],c=l.x-a.x,u=l.z-a.z,d=Ee.clamp(((r-a.x)*c+(t-a.z)*u)/(c*c+u*u),0,1),h=(r-a.x-c*d)**2+(t-a.z-u*d)**2;h<e&&(e=h,n=Ee.lerp(ki[o],ki[o+1],d),i=a.x+c*d,s=a.z+u*d)}return{d:Math.sqrt(e),t:n,w:po(n),y:Bu(n),front:(r-i)*.59+(t-s)*.81}}Un.map((r,t)=>({x:r.x,z:r.z,y:r.y,halfWidth:po(ki[t])*1.2,visibility:zu(ki[t])}));function sa(r,t){const e=Pl(r,t);return e.d/e.w}function oM(r,t,e){const n=6.3*Math.exp(-(((t+20)/25)**2))*(1-Ie(-43,-17,e)),i=1.8*Math.exp(-(((t+34)/17)**2)-((e+33)/20)**2),s=r+n+i,o=Pl(t,e),a=o.w+.8,l=o.front>0?24:11;if(o.d>a+l)return s;const c=o.y-.52-.2*Math.sin(o.t*35)**2,u=Ee.lerp(c,o.y+.035,Ie(o.w*.75,a,o.d)),d=Math.min(s,o.y+.035-Math.max(0,o.front-o.w-1)*.16),h=Ee.lerp(d,s,Ie(a+8,a+l,o.d));return Ee.lerp(u,h,Ie(a+.7,a+5,o.d))}const aM=new qt("#938b64");function lM(r,t,e){const n=Pl(r,t),i=n.d-n.w,s=(1-Ie(.2,1.2,i))*Ie(-.7,0,i);return e.lerp(aM,s*.7),e}function cM(r,t,e){let n=3917;const i=()=>(n=Math.imul(n,1664525)+1013904223>>>0,n/4294967296),s=(O,H,X)=>{const ot=document.createElement("canvas");ot.width=O,ot.height=H,X(ot.getContext("2d"),O,H);const q=new lo(ot);return q.colorSpace=He,q.anisotropy=4,q},o=s(512,1024,(O,H,X)=>{const ot=O.createLinearGradient(0,0,H,0);ot.addColorStop(0,"#829989"),ot.addColorStop(.25,"#426b69"),ot.addColorStop(.55,"#355b5c"),ot.addColorStop(.85,"#5c8178"),ot.addColorStop(1,"#9ca58c"),O.fillStyle=ot,O.fillRect(0,0,H,X),O.lineCap="round";for(let q=0;q<1600;q++){const Q=i()*H,lt=i()*X,et=12+i()*130;O.strokeStyle=["#758f80","#afbdac","#344e4b","#d1cdb0","#97a894"][q%5],O.globalAlpha=.12+i()*.3,O.lineWidth=1+i()*5,O.beginPath(),O.moveTo(Q,lt),O.bezierCurveTo(Q-6,lt+et*.3,Q+5,lt+et*.7,Q+1,lt+et),O.stroke()}});o.wrapT=gs;const a=[],l=[],c=[],u=[],d=[],h=12,f=new qt;for(let O=0;O<=ir;O++){const H=ki[O],X=Un[O],ot=tl[O],q=po(H)*(1.12+.045*Math.sin(H*91)+.025*Math.cos(H*157)),Q=ia(H);for(let lt=0;lt<=h;lt++){const et=lt/h,st=et*2-1,bt=(Math.sin(H*430+et*23)+Math.sin(H*239-et*31))*.018*Q;if(a.push(X.x+ot.x*q*st,X.y+bt,X.z+ot.z*q*st),l.push(et,H*22),d.push(zu(H)),f.set("#d0d8c5").lerp(new qt("#f2edd7"),Q*(.5+.2*Math.sin(et*21+H*30))),f.toArray(c,(O*(h+1)+lt)*3),O&&lt){const Pt=O*(h+1)+lt;u.push(Pt-h-2,Pt-h-1,Pt-1,Pt-h-1,Pt,Pt-1)}}}const p=new De;p.setAttribute("position",new ae(a,3)),p.setAttribute("uv",new ae(l,2)),p.setAttribute("color",new ae(c,3)),p.setIndex(u),p.computeVertexNormals(),p.setAttribute("riverVisibility",new ae(d,1));const v=new an({map:o,vertexColors:!0,roughness:.48,metalness:.08,side:je,transparent:!0,depthWrite:!1});v.onBeforeCompile=O=>{O.vertexShader=O.vertexShader.replace("#include <common>",`#include <common>
attribute float riverVisibility; varying float vRiverVisibility;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vRiverVisibility=riverVisibility;`),O.fragmentShader=O.fragmentShader.replace("#include <common>",`#include <common>
varying float vRiverVisibility;`).replace("#include <alphamap_fragment>",`#include <alphamap_fragment>
diffuseColor.a*=vRiverVisibility;`)};const m=new pe(p,v);m.receiveShadow=!0,r.add(m);const g=s(256,512,(O,H,X)=>{O.lineCap="round";for(let ot=0;ot<520;ot++){const q=i()*H,Q=i()*X,lt=4+i()*64;O.strokeStyle=ot%3?"#ecebd4":"#b8c8b8",O.globalAlpha=.2+i()*.7,O.lineWidth=1+i()*4,O.beginPath(),O.moveTo(q,Q),O.quadraticCurveTo(q+i()*8-4,Q+lt*.5,q+i()*4-2,Q+lt),O.stroke()}});g.wrapT=gs;const _=p.clone(),x=_.attributes.position,M=[];for(let O=0;O<=ir;O++)for(let H=0;H<=h;H++){const X=O*(h+1)+H;x.setY(X,x.getY(X)+.035);const ot=ia(ki[O]);M.push(ot)}_.deleteAttribute("color");const E=new on({map:g,transparent:!0,opacity:.87,depthWrite:!1,side:je,toneMapped:!1});_.setAttribute("rapid",new ae(M,1)),E.onBeforeCompile=O=>{O.vertexShader=O.vertexShader.replace("#include <common>",`#include <common>
attribute float rapid; varying float vRapid;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vRapid=rapid;`),O.fragmentShader=O.fragmentShader.replace("#include <common>",`#include <common>
varying float vRapid;`).replace("#include <alphamap_fragment>",`#include <alphamap_fragment>
diffuseColor.a*=vRapid*smoothstep(0.0,0.16,vMapUv.x)*(1.0-smoothstep(0.84,1.0,vMapUv.x));`)},r.add(new pe(_,E));const b=["#716b5e","#a1967f","#898464","#b5a783","#626b60"];function y(O,H,X,ot,q,Q=0,lt=e(O,H)){const et=new er(1,1),st=et.attributes.position;for(let Pt=0;Pt<st.count;Pt++){const ft=new z().fromBufferAttribute(st,Pt);ft.multiplyScalar(1+.11*Math.sin(ft.x*9+ft.z*7)+.06*Math.cos(ft.y*11)),st.setXYZ(Pt,ft.x,ft.y,ft.z)}et.computeVertexNormals();const bt=new pe(et,t.material(new an({color:b[Q%5],roughness:1,flatShading:!0}),0,.9));bt.position.set(O,lt-ot*.25,H),bt.scale.set(X,ot,q),bt.rotation.y=i()*6.28,bt.receiveShadow=!0,r.add(bt)}for(let O=0;O<42;O++){const H=.3+i()*.45,X=zs(H),ot=O%2?1:-1,q=X.width*(1.08+i()*.3),Q=.18+i()*.48;y(X.position.x+X.side.x*q*ot,X.position.z+X.side.z*q*ot,Q*(1.1+i()),Q*.45,Q,O)}for(const[O,H,X]of[[-7.6,2.7,.38],[4.4,-2.7,.31],[-7.8,3.4,.18],[4.8,-3.1,.48]])y(O,H,X,X*.6,X*.8,2,e(O,H)+X*.45);const S=t.material(new an({color:"#626c49",side:je}),0,3),P=new ds(new gl(.025,1,3),S,100),A=new Ne;for(let O=0;O<P.count;O++){const H=zs(.55+i()*.23),X=O%2?1:-1,ot=H.width*(1.08+i()*.13),q=H.position.x+H.side.x*ot*X,Q=H.position.z+H.side.z*ot*X,lt=.3+i()*.6;A.position.set(q,e(q,Q)+lt*.45,Q),A.scale.set(1,lt,1),A.rotation.set(0,i()*6,(i()-.5)*.2),A.updateMatrix(),P.setMatrixAt(O,A.matrix)}r.add(P);const I=new ds(new ci(1,1),new on({color:"#e1e4cb",transparent:!0,opacity:.6,depthWrite:!1,side:je,toneMapped:!1}),240),N=[];I.instanceMatrix.setUsage(jr),I.frustumCulled=!1,r.add(I);for(let O=0;O<I.count;O++)N.push({t:.25+i()*.57,across:(i()-.5)*1.65,length:.12+i()*.5,width:.018+i()*.035});const L=new ds(new er(1,0),new on({color:"#e8e6ce",transparent:!0,opacity:.55,depthWrite:!1,toneMapped:!1}),80),w=[];L.instanceMatrix.setUsage(jr),L.frustumCulled=!1,r.add(L);for(let O=0;O<L.count;O++)w.push({t:[.392,.462,.537][O%3],across:(i()-.5)*1.9,phase:i(),height:.16+i()*.4,size:.022+i()*.04});const D=new z(0,1,0),F=new z,k=new z,Y=new me;function W(O){o.offset.y=-O*.075,g.offset.y=-O*.19;for(let H=0;H<N.length;H++){const X=N[H],ot=.25+(X.t-.25+O*.0017)%.57,q=zs(ot),Q=zs(ot+.002).position;F.copy(Q).sub(q.position).normalize(),k.crossVectors(q.side,F).normalize(),k.dot(D)<0&&k.negate(),Y.makeBasis(q.side,F,k),A.quaternion.setFromRotationMatrix(Y),A.position.copy(q.position).addScaledVector(q.side,q.width*X.across),A.position.y+=.06,A.scale.set(X.width,X.length*(1+ia(ot)*1.8),1),A.updateMatrix(),I.setMatrixAt(H,A.matrix)}I.instanceMatrix.needsUpdate=!0;for(let H=0;H<w.length;H++){const X=w[H],ot=(O*.65+X.phase)%1,q=zs(X.t+ot*.006);A.position.copy(q.position).addScaledVector(q.side,q.width*X.across),A.position.y+=.08+Math.sin(ot*Math.PI)*X.height,A.rotation.set(ot*2,H,0),A.scale.setScalar(X.size*Math.sin(ot*Math.PI)),A.updateMatrix(),L.setMatrixAt(H,A.matrix)}L.instanceMatrix.needsUpdate=!0}return W(0),{update:W}}const ra=0,ku={x:.3,width:3.6,depth:2.35},Th={couch:{x:-4.5,z:-.65,width:2.85,depth:1.45},coffeeTable:{x:-4.45,z:1.12,width:1.72,depth:.84}},oa=(r,t,e)=>{const n=Math.max(0,Math.min(1,(e-r)/(t-r)));return n*n*(3-2*n)},Gu=(r,t)=>Math.hypot((r+1.25)/7.5,(t-.65)/6.5);function Hu(r,t){const e=Gu(r,t);if(e<=1)return ra;const n=Math.hypot(r,t),s=-.025+oa(9,14,n)*(.7*Math.sin(r*.17+t*.08)+.8*Math.sin(t*.13-r*.06)+oa(13,35,n)*(1.5+1.5*Math.sin(r*.08+t*.07)));return ra+(oM(s,r,t)-ra)*oa(1,1.48,e)}function Ah(r,t){return r>-6.35&&r<4.95&&t>-3.45&&t<4.7}const Rh=r=>{const t=Math.max(0,Math.abs(r)-42);return r+Math.sign(r)*t*t*.14};async function hM(){const r=await new Gf().loadAsync("./assets/painted-materials.png");r.colorSpace=He,r.anisotropy=4,r.wrapS=r.wrapT=gs;const t=r.clone();t.colorSpace=ni,t.repeat.set(.472,.472),t.offset.set(.014,.514),t.needsUpdate=!0;const e=new Map,n=new WeakSet;function i(o,a=0,l=.65){if(n.has(o))return o;const c=o.uuid+":"+a+":"+l;if(e.has(c))return e.get(c);const u=o.clone();u.metalness=0,u.roughness=.98,u.bumpMap=t,u.bumpScale=.04;const d=[[0,.5],[.5,.5],[0,0],[.5,0]];return u.onBeforeCompile=h=>{h.uniforms.uPaintAtlas={value:r},h.uniforms.uPaintRegion={value:new At(...d[a])},h.uniforms.uPaintScale={value:l},h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
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
      `)},u.customProgramCacheKey=()=>`impasto-${a}-${l}`,e.set(c,u),n.add(u),u}function s(o){o.traverse(a=>{a.isMesh&&a.material?.isMeshStandardMaterial&&(a.material=i(a.material))})}return{atlas:r,material:i,coat:s}}function uM(r,t){let e=87219;const n=()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296),i=Hu,s=new ci(140,140,320,320);s.rotateX(-Math.PI/2);const o=s.attributes.position;for(let b=0;b<o.count;b++){const y=Rh(o.getX(b)),S=Rh(o.getZ(b));o.setXYZ(b,y,i(y,S),S)}s.computeVertexNormals();const a=new Float32Array(o.count*3),l=new qt;for(let b=0;b<o.count;b++)lM(o.getX(b),o.getZ(b),wh(o.getX(b),o.getZ(b),l)),l.toArray(a,b*3);s.setAttribute("color",new Xe(a,3));const c=t.material(new an({color:"#ffffff",vertexColors:!0,roughness:1}),0,.2),u=new pe(s,c);u.receiveShadow=!0,r.add(u),r.add(jy(t.atlas));const d=new ci(.09,.7,1,3);d.translate(0,.35,0);const h=d.attributes.position;for(let b=0;b<h.count;b++){const y=h.getY(b);h.setX(b,h.getX(b)*(1-y/.85)+y*y*.12)}d.computeVertexNormals();const f=new on({color:"#ffffff",side:je}),p=new ds(d,f,6e3),v=new Ne,m=new qt;for(let b=0;b<6e3;b++){let y,S,P;do y=(n()-.5)*72,S=(n()-.5)*72,P=Math.hypot(y,S);while(Ah(y,S)||P>37||sa(y,S)<1.14);v.position.set(y,i(y,S),S),v.rotation.set((n()-.5)*.25,n()*Math.PI*2,(n()-.5)*.35),v.scale.set(.65+n()*1.6,.15+n()*.45,1),v.updateMatrix(),p.setMatrixAt(b,v.matrix),wh(y,S,m).multiplyScalar(.72+n()*.65),p.setColorAt(b,m)}p.receiveShadow=!0,r.add(p);const g=new Mi(1,6,4),_=new ds(new li(.005,.008,1,3),new on({color:"#596a45"}),1300),x=new ds(g,t.material(new an({color:"#e6dfca"}),0,5),1300);for(let b=0;b<1300;b++){let y,S;do y=(n()-.5)*50,S=(n()-.5)*50;while(Ah(y,S)||sa(y,S)<1.14);const P=i(y,S),A=.025+n()*.05,I=.18+n()*.2;v.rotation.set(0,0,0),v.position.set(y,P+I*.5,S),v.scale.set(1,I,1),v.updateMatrix(),_.setMatrixAt(b,v.matrix),v.position.set(y,P+I,S),v.rotation.set(n(),n()*3,n()),v.scale.set(A*1.8,A*.6,A),v.updateMatrix(),x.setMatrixAt(b,v.matrix),m.set([vn.saffron,vn.madder,vn.wine,vn.chalk][b%4]),x.setColorAt(b,m)}r.add(_,x);function M(b,y,S){if(sa(b,y)<1.7)return;const P=i(b,y),A=new xn;A.position.set(b,P,y);const I=new pe(new li(.06*S,.11*S,2.8*S,6),t.material(new an({color:"#806448"}),0,2));I.position.y=1.4*S,A.add(I);for(let N=0;N<3;N++){const L=new pe(new er(1,2),t.material(new an({color:["#434f3b","#596346","#787744"][N%3]}),0,1.1));L.position.set(Math.cos(N*2.4)*.17*S,(1.9+N*.55)*S,Math.sin(N*2.4)*.17*S),L.scale.set((.8-N*.17)*S,1.25*S,(.65-N*.12)*S),L.rotation.set(n()*.1,n(),n()*.12),L.castShadow=!0,A.add(L)}r.add(A)}M(-28,-9,.75),M(7.5,-7.5,1.15),M(2,-23,.9);for(let b=0;b<13;b++){const y=b/13*Math.PI*2;M(Math.cos(y)*(22+n()*9),Math.sin(y)*(22+n()*9),.5+n()*.8)}r.fog=new pl(vn.fog,.009);const E=cM(r,t,i);return{height:i,update:E.update}}const dM=(()=>{const r={oakLight:[.63,.44,.27],walnut:[.31,.19,.14],brass:[.7,.52,.28],cream:[.88,.82,.69],paper:[.91,.87,.76],sage:[.38,.55,.39],ink:[.18,.25,.29],clay:[.65,.39,.28],charcoal:[.16,.18,.2]},t=Object.freeze(["Yes","No","It is certain","Most likely","Ask again later","Outlook good","Very doubtful","Signs point to yes","Cannot predict now","My reply is no"]);class e{constructor(){this.points=[],this.uv=[],this.colors=[],this.joints=[],this.triangles=[]}face(s,o,a,l=0,c=0){const u=this.points.length/3;for(let d=0;d<s.length;d++)this.points.push(...s[d]),this.uv.push(...o[d]),this.colors.push(...a,l),this.joints.push(c);s.length===4?this.triangles.push(u,u+1,u+2,u,u+2,u+3):this.triangles.push(u,u+1,u+2)}quad(s,o,a=0,l=0,c=[[0,0],[1,0],[1,1],[0,1]]){this.face(s,c,o,a,l)}box(s,o,a,l,c,u,d,h=0,f=0,p=[0,0,1,1]){const v=s-l/2,m=s+l/2,g=o-c/2,_=o+c/2,x=a-u/2,M=a+u/2,[E,b,y,S]=p;this.quad([[v,g,M],[m,g,M],[m,_,M],[v,_,M]],d,h,f,[[E,b],[y,b],[y,S],[E,S]]),this.quad([[m,g,x],[v,g,x],[v,_,x],[m,_,x]],d.map(P=>P*.63),0,f),this.quad([[v,g,x],[m,g,x],[m,g,M],[v,g,M]],d.map(P=>P*.83),0,f),this.quad([[m,_,x],[v,_,x],[v,_,M],[m,_,M]],d.map(P=>P*.7),0,f),this.quad([[v,_,x],[v,g,x],[v,g,M],[v,_,M]],d.map(P=>P*.77),0,f),this.quad([[m,g,x],[m,_,x],[m,_,M],[m,g,M]],d.map(P=>P*.86),0,f)}bevelBox(s,o,a,l,c,u,d,h=7,f=0){const p=Math.min(l,c,u)*.22,v=(M,E)=>[[s-l/2+M,o-c/2+M,E],[s+l/2-M,o-c/2+M,E],[s+l/2-M,o+c/2-M,E],[s-l/2+M,o+c/2-M,E]],m=v(p,a-u/2),g=v(0,a-u/2+p),_=v(0,a+u/2-p),x=v(p,a+u/2);this.quad(x,d,h,f),this.quad([...m].reverse(),d.map(M=>M*.65),h,f);for(let M=0;M<4;M++){const E=(M+1)%4;this.quad([m[M],m[E],g[E],g[M]],d.map(b=>b*.76),h,f),this.quad([g[M],g[E],_[E],_[M]],d.map(b=>b*.87),h,f),this.quad([_[M],_[E],x[E],x[M]],d,h,f)}}cone(s,o,a,l,c,u,d,h=0,f=0,p=24){for(let v=0;v<p;v++){const m=v*2*Math.PI/p,g=(v+1)*2*Math.PI/p,_=(x,M,E)=>[s+Math.cos(E)*x,o+Math.sin(E)*x,M];this.quad([_(c,a,m),_(c,a,g),_(u,l,g),_(u,l,m)],d,h,f),u>1e-4&&this.face([[s,o,l],_(u,l,m),_(u,l,g)],[[.5,.5],[0,0],[1,0]],d,h,f),c>1e-4&&this.face([[s,o,a],_(c,a,g),_(c,a,m)],[[.5,.5],[0,0],[1,0]],d.map(x=>x*.67),h,f)}}ring(s,o,a,l,c,u,d=0,h=0,f=40){for(let p=0;p<f;p++){const v=p*2*Math.PI/f,m=(p+1)*2*Math.PI/f,g=(_,x)=>[s+Math.cos(x)*_,o+Math.sin(x)*_,a];this.quad([g(l,v),g(c,v),g(c,m),g(l,m)],u,d,h)}}sphere(s,o,a,l,c,u,d,h=0,f=0,p=20,v=12){const m=(g,_)=>[s+l*Math.sin(g)*Math.cos(_),o+c*Math.sin(g)*Math.sin(_),a+u*Math.cos(g)];for(let g=0;g<v;g++)for(let _=0;_<p;_++){const x=g*Math.PI/v,M=(g+1)*Math.PI/v,E=_*2*Math.PI/p,b=(_+1)*2*Math.PI/p;this.quad([m(x,E),m(x,b),m(M,b),m(M,E)],d,h,f)}}cushion(s,o,a,l,c,u,d){const h=(p,v)=>Math.sign(p)*Math.abs(p)**v,f=(p,v)=>[s+l/2*h(Math.sin(p),.48)*h(Math.cos(v),.43),o+c/2*h(Math.sin(p),.48)*h(Math.sin(v),.43),a+u/2*h(Math.cos(p),.7)];for(let p=0;p<14;p++)for(let v=0;v<32;v++){const m=p*Math.PI/14,g=(p+1)*Math.PI/14,_=v*Math.PI/16,x=(v+1)*Math.PI/16;this.quad([f(m,_),f(m,x),f(g,x),f(g,_)],d,2)}}rod(s,o,a,l,c=0,u=0,d=10){const h=o.map((M,E)=>M-s[E]),f=Math.hypot(...h)||1,p=h.map(M=>M/f),v=Math.abs(p[2])<.9?[0,0,1]:[0,1,0];let m=[p[1]*v[2]-p[2]*v[1],p[2]*v[0]-p[0]*v[2],p[0]*v[1]-p[1]*v[0]],g=Math.hypot(...m)||1;m=m.map(M=>M/g);const _=[p[1]*m[2]-p[2]*m[1],p[2]*m[0]-p[0]*m[2],p[0]*m[1]-p[1]*m[0]],x=(M,E)=>M.map((b,y)=>b+a*(m[y]*Math.cos(E)+_[y]*Math.sin(E)));for(let M=0;M<d;M++){const E=M*2*Math.PI/d,b=(M+1)*2*Math.PI/d;this.quad([x(s,E),x(s,b),x(o,b),x(o,E)],l,c,u)}}fabric(s,o,a,l,c,u=0){const f=(p,v)=>{const m=(p-.5)*s,g=(v-.5)*o,_=Math.max(0,1-(m/(s*.53))**2-(g/(o*.55))**2);return[m,g,a+l*_+.003*Math.sin(p*46+v*5)*Math.sin(v*18)]};for(let p=0;p<12;p++)for(let v=0;v<20;v++){const m=v/20,g=(v+1)/20,_=p/12,x=(p+1)/12;this.quad([f(m,_),f(g,_),f(g,x),f(m,x)],c,2,u,[[m,_],[g,_],[g,x],[m,x]])}}leaf(s,o,a,l,c,u,d,h=1){const f=Math.cos(l),p=Math.sin(l),v=-p,m=f,g=(_,x)=>{const M=Math.sin(Math.PI*_)**.72*u*.5*x,E=(_-.5)*c;return[s+f*E+v*M,o+p*E+m*M,a+.008*Math.sin(Math.PI*_)+(x===0?.009:0)]};for(let _=0;_<6;_++){const x=_/6,M=(_+1)/6;this.quad([g(x,1),g(M,1),g(M,0),g(x,0)],d,5,h),this.quad([g(x,0),g(M,0),g(M,-1),g(x,-1)],d.map(E=>E*.83),5,h)}this.rod(g(0,0),g(1,0),Math.max(.001,u*.018),d.map(_=>_*.68),5,h,5)}finish(){return{local:new Float64Array(this.points),uv:new Float32Array(this.uv),colors:new Float32Array(this.colors),joints:new Uint8Array(this.joints),triangles:new Uint16Array(this.triangles)}}}function n(i,s,o){const a=new e,l=Math.min(s,o),c=r.brass,u={};switch(i){case"chair":{const h=[.64,.39,.27],f=[.75,.49,.34],p=[.84,.61,.43];for(let g=0;g<5;g++){const _=g*2*Math.PI/5;a.rod([0,0,.013],[Math.cos(_)*s*.28,Math.sin(_)*o*.28,.012],l*.014,r.charcoal,4),a.cone(Math.cos(_)*s*.28,Math.sin(_)*o*.28,.005,.018,l*.027,l*.027,r.charcoal,4)}a.cone(0,0,.017,.075,l*.065,l*.065,c,4),a.cushion(0,-o*.035,.1,s*.76,o*.74,.06,h),a.cushion(0,-o*.11,.144,s*.59,o*.55,.057,f);for(const g of[-s*.39,s*.39])a.cushion(g,-o*.015,.17,s*.19,o*.68,.072,h);const v=(g,_)=>{const x=l*.09;return[Math.cos(g)*(s*.35+x*Math.cos(_)),o*.075+Math.sin(g)*(o*.3+x*Math.cos(_)),.181+Math.sin(g)*.026+.046*Math.sin(_)]};for(let g=0;g<40;g++)for(let _=0;_<16;_++){const x=g*Math.PI/40,M=(g+1)*Math.PI/40,E=_*Math.PI/8,b=(_+1)*Math.PI/8;a.quad([v(x,E),v(M,E),v(M,b),v(x,b)],h,2)}a.cushion(0,o*.235,.202,s*.52,o*.22,.061,[.78,.56,.38]);const m=g=>[Math.sign(Math.cos(g))*Math.abs(Math.cos(g))**.43*s*.291,-o*.11+Math.sign(Math.sin(g))*Math.abs(Math.sin(g))**.43*o*.269,.158];for(let g=0;g<64;g++)a.rod(m(g*Math.PI/32),m((g+1)*Math.PI/32),l*.0018,p,2,0,6);break}case"schoolbook":{a.box(0,0,.016,s,o,.024,[.2,.32,.43],2),a.box(s*.035,o*.025,.03,s*.88,o*.89,.012,r.paper,2);for(let h=0;h<4;h++)a.box(s*.43,-o*.3+h*o*.18,.038,s*.13,o*.08,.004,h%2?r.clay:r.sage);a.box(-s*.28,0,.041,s*.13,o*.89,.008,[.12,.24,.33]);for(const h of[-o*.28,0,o*.28])a.cone(-s*.28,h,.047,.051,l*.018,l*.018,c,4);a.box(s*.02,0,.053,s*.71,o*.87,.02,[.25,.41,.55],2,1),a.box(s*.02,-o*.24,.065,s*.5,o*.07,.002,r.cream,0,1),a.box(s*.02,-o*.09,.065,s*.43,o*.018,.002,r.cream,0,1),a.box(s*.02,-o*.02,.065,s*.35,o*.018,.002,r.cream,0,1),a.cone(s*.2,o*.24,.066,.068,l*.065,l*.065,c,4,1);break}case"wateringcan":{a.cone(-s*.11,0,.005,.071,l*.27,l*.24,r.sage,4,0,32),a.ring(-s*.11,0,.073,l*.16,l*.23,[.63,.76,.6],4,0,32),a.cone(-s*.11,0,.072,.074,l*.16,l*.16,[.12,.28,.27],3,0,32),a.rod([s*.07,-o*.04,.049],[s*.36,-o*.17,.073],l*.052,r.sage,4),a.cone(s*.4,-o*.18,.067,.079,l*.095,l*.13,[.68,.8,.67],4);const h=f=>[-s*.11-l*(.18+.28*Math.sin(f)),l*.16*Math.cos(f),.049];for(let f=0;f<24;f++)a.rod(h(f*Math.PI/24),h((f+1)*Math.PI/24),l*.027,[.68,.8,.67],4,0,12);a.cone(s*.4,-o*.18,.08,.082,l*.06,l*.06,r.ink,4);break}case"coffeetable":{for(const h of[-s*.43,s*.43])for(const f of[-o*.39,o*.39])a.bevelBox(h,f,.032,s*.046,o*.085,.065,r.walnut);a.bevelBox(0,0,.097,s,o,.03,r.walnut),a.bevelBox(0,0,.116,s*.985,o*.967,.01,r.oakLight);break}case"couch":{const h=[.53,.3,.2],f=[.65,.4,.26];for(const p of[-s*.4,s*.4])for(const v of[-o*.34,o*.34])a.bevelBox(p,v,.035,s*.029,o*.065,.07,r.walnut);a.bevelBox(0,0,.073,s*.91,o*.83,.052,r.walnut),a.cushion(0,0,.108,s*.96,o*.92,.072,h);for(const p of[-s*.228,s*.228])a.cushion(p,-o*.075,.15,s*.434,o*.68,.055,f);for(const p of[-s*.47,s*.47])a.cushion(p,0,.195,s*.095,o*.95,.11,h);a.cushion(0,o*.375,.208,s*.91,o*.23,.159,h);for(const p of[-s*.23,s*.23])a.cushion(p,o*.275,.231,s*.42,o*.2,.12,f);a.cushion(-s*.29,o*.1,.207,s*.19,o*.27,.063,[.43,.47,.31]);break}default:a.box(0,0,.009,s,o,.018,r.cream)}const d=a.finish();if(i==="eightball"){const h=new Map,f=[],p=[],v=[],m=[],g=[];for(let _=0;_<d.local.length/3;_++){const x=Array.from(d.local.slice(_*3,_*3+3)),M=Array.from(d.colors.slice(_*4,_*4+4)),E=x.map(y=>y.toFixed(7)).join(",")+":"+d.joints[_]+":"+M.join(",");let b=h.get(E);b===void 0&&(b=p.length/3,h.set(E,b),p.push(...x),v.push(...d.uv.slice(_*2,_*2+2)),m.push(...M),g.push(d.joints[_])),f.push(b)}return{local:new Float64Array(p),uv:new Float32Array(v),colors:new Float32Array(m),joints:new Uint8Array(g),triangles:new Uint16Array(Array.from(d.triangles,_=>f[_]))}}return Object.assign(d,u)}return{create:n,eightBallAnswers:t}})();function fM(r,t=1){const e=r.local.length/3,n=new Float32Array(e*3),i=new Float32Array(e*3),s=new qt;for(let a=0;a<e;a++)n.set([r.local[a*3],r.local[a*3+2]*t,-r.local[a*3+1]],a*3),s.setRGB(...r.colors.subarray(a*4,a*4+3)).convertSRGBToLinear().toArray(i,a*3);const o=new De;return o.setAttribute("position",new Xe(n,3)),o.setAttribute("color",new Xe(i,3)),o.setAttribute("uv",new Xe(r.uv,2)),o.setIndex(Array.from(r.triangles)),o.computeVertexNormals(),o.computeBoundingSphere(),o}function pM(r,t,e){const n=new xn;r.add(n);const i=t.material(new an({color:"#ffffff",vertexColors:!0,roughness:1}),0,.8),s=[];function o(c,u,d,h,f,p,v=0,m=0){const g=new pe(fM(dM.create(c,u,d),h),i);return g.castShadow=g.receiveShadow=!0,g.rotation.y=m,g.geometry.computeBoundingBox(),g.position.set(f,v-g.geometry.boundingBox.min.y,p),n.add(g),s.push({name:c,mesh:g,bottom:v}),g}const a=Th.couch;o("couch",a.width,a.depth,4.3,a.x,a.z),e.push({size:[2.78,.5,1.3],pos:[a.x,.52,a.z]},{size:[2.68,.74,.34],pos:[a.x,1,a.z-.51]});for(const c of[a.x-1.32,a.x+1.32])e.push({size:[.27,.75,1.4],pos:[c,.76,a.z]});for(const c of[a.x-1.14,a.x+1.14])for(const u of[a.z-.49,a.z+.49])e.push({size:[.1,.3,.1],pos:[c,.15,u]});const l=Th.coffeeTable;o("coffeetable",l.width,l.depth,5,l.x,l.z),e.push({size:[1.72,.2,.84],pos:[l.x,.51,l.z]});for(const c of[l.x-.74,l.x+.74])for(const u of[l.z-.328,l.z+.328])e.push({size:[.085,.34,.085],pos:[c,.17,u]});return o("schoolbook",.45,.36,1,l.x-.24,l.z,.613,.17),o("schoolbook",.4,.32,1,l.x-.2,l.z,.679,-.08),o("wateringcan",.52,.4,4.5,3.05,-2.05),o("chair",1.33,1.26,5,3.92,-1.17,0,-.24),e.push({size:[1.3,.65,1.22],pos:[3.92,.66,-1.17]},{size:[1.15,.54,.3],pos:[3.92,1.02,-1.62]}),{group:n,supports:s}}var mM=(function(){const r=(a,l,c)=>Math.max(l,Math.min(c,a)),t={rug:{stretch:3e-8,shear:12e-8,bend:.085,damping:1.5,friction:.85},linen:{stretch:5e-8,shear:2e-7,bend:.32,damping:1.1,friction:.65},silk:{stretch:8e-8,shear:4e-7,bend:1,damping:.85,friction:.45}};function e(a,l,c,u,d,h,f,p,v,m,g,_,x){const M=f-u,E=p-d,b=v-h,y=m-u,S=g-d,P=_-h,A=a-u,I=l-d,N=c-h,L=M*A+E*I+b*N,w=y*A+S*I+P*N;let D=1,F=0,k=0;if(!(L<=0&&w<=0)){const Y=a-f,W=l-p,O=c-v,H=M*Y+E*W+b*O,X=y*Y+S*W+P*O;if(H>=0&&X<=H)D=0,F=1;else{const ot=L*X-H*w;if(ot<=0&&L>=0&&H<=0)F=L/(L-H),D=1-F;else{const q=a-m,Q=l-g,lt=c-_,et=M*q+E*Q+b*lt,st=y*q+S*Q+P*lt;if(st>=0&&et<=st)D=0,k=1;else{const bt=et*w-L*st;if(bt<=0&&w>=0&&st<=0)k=w/(w-st),D=1-k;else{const Pt=H*st-et*X;if(Pt<=0&&X-H>=0&&et-st>=0)k=(X-H)/(X-H+(et-st)),F=1-k,D=0;else{const ft=1/(Pt+bt+ot);F=bt*ft,k=ot*ft,D=1-F-k}}}}}}return x[0]=u*D+f*F+m*k,x[1]=d*D+p*F+g*k,x[2]=h*D+v*F+_*k,x[3]=D,x[4]=F,x[5]=k,x}function n(a,l,c,u,d,h){l*=3,c*=3,u*=3,d*=3;const f=a[c]-a[l],p=a[c+1]-a[l+1],v=a[c+2]-a[l+2],m=f*f+p*p+v*v,g=Math.sqrt(m),_=a[u]-a[l],x=a[u+1]-a[l+1],M=a[u+2]-a[l+2],E=a[d]-a[l],b=a[d+1]-a[l+1],y=a[d+2]-a[l+2],S=p*M-v*x,P=v*_-f*M,A=f*x-p*_,I=b*v-y*p,N=y*f-E*v,L=E*p-b*f,w=S*S+P*P+A*A,D=I*I+N*N+L*L;if(g<1e-9||w<1e-16||D<1e-16)return h.fill(0),0;const F=Math.sqrt(w*D),k=r((S*I+P*N+A*L)/F,-1,1),Y=((P*L-A*N)*f+(A*I-S*L)*p+(S*N-P*I)*v)/(F*g),W=(_*f+x*p+M*v)/m,O=(E*f+b*p+y*v)/m;h[6]=-g*S/w,h[7]=-g*P/w,h[8]=-g*A/w,h[9]=-g*I/D,h[10]=-g*N/D,h[11]=-g*L/D;for(let H=0;H<3;H++)h[3+H]=-W*h[6+H]-O*h[9+H],h[H]=-h[3+H]-h[6+H]-h[9+H];return Math.atan2(Y,k)}function i(a,l=0){const c=a.center.slice(),u=a.axes||[1,0,0,0,1,0,0,0,1],d=a.half.map(f=>f+l),h=[0,1,2].map(f=>Math.abs(u[f])*d[0]+Math.abs(u[3+f])*d[1]+Math.abs(u[6+f])*d[2]);return{...a,center:c,axes:u,half:d,bottom:Number.isFinite(a.bottom)?a.bottom-l:-1/0,bounds:[c[0]-h[0],c[1]-h[1],c[2]-h[2],c[0]+h[0],c[1]+h[1],c[2]+h[2]]}}function s(a,l,c,u,d,h,f,p,v=0){if(u<=a.bottom+2e-4&&f<=a.bottom+2e-4)return!1;const m=a.bounds;if(Math.min(l,d)>m[3]||Math.max(l,d)<m[0]||Math.min(c,h)>m[4]||Math.max(c,h)<m[1]||Math.min(u,f)>m[5]||Math.max(u,f)<m[2])return!1;const g=a.axes,_=a.center,x=a.half,M=l-_[0],E=c-_[1],b=u-_[2],y=M*g[0]+E*g[1]+b*g[2],S=M*g[3]+E*g[4]+b*g[5],P=M*g[6]+E*g[7]+b*g[8],A=(d-_[0])*g[0]+(h-_[1])*g[1]+(f-_[2])*g[2],I=(d-_[0])*g[3]+(h-_[1])*g[4]+(f-_[2])*g[5],N=(d-_[0])*g[6]+(h-_[1])*g[7]+(f-_[2])*g[8];let L=0,w=0,D=0,F=0;if(a.type==="ellipsoid"){const O=y*y/(x[0]*x[0])+S*S/(x[1]*x[1])+P*P/(x[2]*x[2]),H=(y-A)/x[0],X=(S-I)/x[1],ot=(P-N)/x[2],q=A/x[0],Q=I/x[1],lt=N/x[2],et=H*H+X*X+ot*ot,st=q*H+Q*X+lt*ot,bt=q*q+Q*Q+lt*lt-1,Pt=st*st-et*bt;let ft=y,Bt=S,Nt=P;if(bt>1e-8&&Pt>=0&&et>1e-14){const Vt=(-st-Math.sqrt(Pt))/et;if(Vt<0||Vt>1){if(O>=1)return!1}else ft=A+(y-A)*Vt,Bt=I+(S-I)*Vt,Nt=N+(P-N)*Vt}else{if(O>=1)return!1;{const Vt=Math.sqrt(O)||1;ft=y/Vt,Bt=S/Vt,Nt=P/Vt,O<1e-12&&(Nt=x[2])}}L=ft/(x[0]*x[0]),w=Bt/(x[1]*x[1]),D=Nt/(x[2]*x[2]);const Lt=Math.hypot(L,w,D)||1;L/=Lt,w/=Lt,D/=Lt,F=(ft-y)*L+(Bt-S)*w+(Nt-P)*D}else{let O=-1/0,H=1/0,X=0,ot=0,q=0;const Q=(bt,Pt,ft,Bt)=>{const Nt=Pt-bt;if(Math.abs(Nt)<1e-12)return Math.abs(bt)<=ft;let Lt=(-ft-bt)/Nt,Vt=(ft-bt)/Nt,Kt=-1;return Lt>Vt&&([Lt,Vt]=[Vt,Lt],Kt=1),Lt>O&&(O=Lt,X=Bt===0?Kt:0,ot=Bt===1?Kt:0,q=Bt===2?Kt:0),H=Math.min(H,Vt),O<=H};let lt=!1,et=!1,st=!1;if(a.type==="cylinder"){const bt=y*y/(x[0]*x[0])+S*S/(x[1]*x[1]),Pt=A*A/(x[0]*x[0])+I*I/(x[1]*x[1]);lt=bt<1&&Math.abs(P)<x[2],et=Pt<=1&&Math.abs(N)<=x[2];const ft=(y-A)/x[0],Bt=(S-I)/x[1],Nt=ft*ft+Bt*Bt,Lt=A/x[0]*ft+I/x[1]*Bt,Vt=Lt*Lt-Nt*(Pt-1);if(Nt>1e-14&&Vt>=0){O=(-Lt-Math.sqrt(Vt))/Nt,H=(-Lt+Math.sqrt(Vt))/Nt;const Kt=A+(y-A)*O,ye=I+(S-I)*O,Xt=Math.hypot(Kt/(x[0]*x[0]),ye/(x[1]*x[1]))||1;X=Kt/(x[0]*x[0])/Xt,ot=ye/(x[1]*x[1])/Xt,st=Q(N,P,x[2],2)}else Pt<=1&&(st=Q(N,P,x[2],2));if(!et&&st&&O>=0&&O<=1&&H>=0)L=X,w=ot,D=q,F=(A+(y-A)*O-y)*L+(I+(S-I)*O-S)*w+(N+(P-N)*O-P)*D;else if(lt){const Kt=Math.sqrt(bt),ye=(1-Kt)*Math.min(x[0],x[1]),Xt=x[2]-Math.abs(P);if(Xt<ye&&!(P<0&&_[2]-x[2]<v-1e-7))D=P>=0?1:-1,F=Xt;else{const we=Math.hypot(y/(x[0]*x[0]),S/(x[1]*x[1]))||1;L=y/(x[0]*x[0])/we,w=S/(x[1]*x[1])/we,Kt<1e-8&&(L=1),F=Kt<1e-8?x[0]:(y/Kt-y)*L+(S/Kt-S)*w}}else return!1}else if(lt=Math.abs(y)<x[0]&&Math.abs(S)<x[1]&&Math.abs(P)<x[2],et=Math.abs(A)<=x[0]&&Math.abs(I)<=x[1]&&Math.abs(N)<=x[2],st=Q(A,y,x[0],0)&&Q(I,S,x[1],1)&&Q(N,P,x[2],2),!et&&st&&O>=0&&O<=1&&H>=0)L=X,w=ot,D=q,F=(A+(y-A)*O-y)*L+(I+(S-I)*O-S)*w+(N+(P-N)*O-P)*D;else if(lt){let bt=1/0;for(let Pt=0;Pt<3;Pt++)for(const ft of[-1,1]){const Bt=Pt===0?y:Pt===1?S:P,Nt=x[Pt]-ft*Bt,Lt=ft*g[Pt*3+2];Lt<-.5&&u+Lt*Nt<v||Nt<bt&&(bt=Nt,L=Pt===0?ft:0,w=Pt===1?ft:0,D=Pt===2?ft:0)}F=bt}else return!1}if(!(F>=0&&Number.isFinite(F)))return!1;const k=g[0]*L+g[3]*w+g[6]*D,Y=g[1]*L+g[4]*w+g[7]*D,W=g[2]*L+g[5]*w+g[8]*D;if(u+W*F<v-1e-5){const O=Math.hypot(l-_[0],c-_[1]);p[3]=O>1e-8?(l-_[0])/O:1,p[4]=O>1e-8?(c-_[1])/O:0,p[5]=0;const H=Math.max(x[0],x[1]);p[0]=_[0]+p[3]*(H+1e-6),p[1]=_[1]+p[4]*(H+1e-6),p[2]=u}else p[0]=l+k*(F+1e-6),p[1]=c+Y*(F+1e-6),p[2]=Math.max(v,u+W*(F+1e-6)),p[3]=k,p[4]=Y,p[5]=W;return!0}class o{constructor(l={}){this.cols=l.cols||41,this.rows=l.rows||29,this.count=this.cols*this.rows,this.width=l.width||1.3,this.height=l.height||this.width/1.48,this.origin=[l.x===void 0?.7:l.x,l.y===void 0?.35:l.y],this.position=new Float64Array(this.count*3),this.previous=new Float64Array(this.count*3),this.velocity=new Float64Array(this.count*3),this.rest=new Float64Array(this.count*3),this.inverseMass=new Float64Array(this.count).fill(1),this.normals=new Float32Array(this.count*3),this.contactNormals=new Float64Array(this.count*3),this.normalPush=new Float64Array(this.count),this.uv=new Float32Array(this.count*2),this.contact=new Uint8Array(this.count),this.material=t[l.material]?l.material:"rug",this.maxSpeed=l.maxSpeed||6.5,this.maxGrabSpeed=l.maxGrabSpeed||4.5,this.gravity=l.gravity===void 0?9.81:l.gravity,this.thickness=l.thickness||.006,this.fixedStep=1/120,this.iterations=l.iterations||5,this.accumulator=0,this.roomColliders=[],this.roomVersion=null,this._roomResult=new Float64Array(6),this.colliders=[],this.grab=null,this.active=!0,this.sleepTime=0,this.selfCollision=l.selfCollision!==!1,this.time=0,this.steps=0,this.stats={selfContacts:0,environmentContacts:0,roomContacts:0,stepMs:0},this._gradient=new Float64Array(12),this._closest=new Float64Array(6),this._hash=new Map,this._hashBuckets=[],this._stamp=new Uint32Array((this.cols-1)*(this.rows-1)*2),this._queryID=0,this._build(),this.reset()}_build(){const l=[],c=[],u=[],d=[],h=[],f=new Map,p=this.cols,v=this.rows,m=(_,x,M)=>{l.push(_,x);const E=(_%p-x%p)*this.width/(p-1),b=(Math.floor(_/p)-Math.floor(x/p))*this.height/(v-1);c.push(Math.hypot(E,b)),u.push(M)},g=(_,x,M)=>{d.push(_,x,M);for(const[E,b,y]of[[_,x,M],[x,M,_],[M,_,x]]){const S=Math.min(E,b)*this.count+Math.max(E,b),P=f.get(S);P?h.push(P[0],P[1],P[2],y):f.set(S,[E,b,y])}};for(let _=0;_<v;_++)for(let x=0;x<p;x++){const M=_*p+x;this.uv[2*M]=x/(p-1),this.uv[2*M+1]=_/(v-1),x<p-1&&m(M,M+1,0),_<v-1&&m(M,M+p,0),x<p-1&&_<v-1&&((x+_)%2===0?(m(M+1,M+p,1),g(M,M+1,M+p),g(M+1,M+p+1,M+p)):(m(M,M+p+1,1),g(M,M+1,M+p+1),g(M,M+p+1,M+p)))}this.edges=new Uint16Array(l),this.restLength=new Float64Array(c),this.edgeType=new Uint8Array(u),this.edgeLambda=new Float64Array(c.length),this.triangles=new Uint16Array(d),this.hinges=new Uint16Array(h),this.bendLambda=new Float64Array(h.length/4),this.spacing=Math.max(this.width/(p-1),this.height/(v-1)),this.hashCell=this.spacing*1.8}reset(l=this.origin[0],c=this.origin[1],u=.055){this.release(),this.origin=[l,c];for(let d=0;d<this.rows;d++)for(let h=0;h<this.cols;h++){const f=d*this.cols+h,p=f*3;this.position[p]=l+h*this.width/(this.cols-1),this.position[p+1]=c+d*this.height/(this.rows-1),this.position[p+2]=this.thickness+u+Math.sin(h*1.73+d*.61)*1e-4,this.rest[p]=h*this.width/(this.cols-1),this.rest[p+1]=d*this.height/(this.rows-1),this.rest[p+2]=0}this.previous.set(this.position),this.velocity.fill(0),this.inverseMass.fill(1),this.accumulator=0,this.wake(),this.updateNormals()}setMaterial(l){t[l]&&(this.material=l,this.wake())}setColliders(l){this.colliders=l.map(c=>({x:c.x,y:c.y,z:c.z||0,rx:c.rx||.064,ry:c.ry||.054,rz:c.rz||.055})),this.wake()}setRoomColliders(l,c){if(c!==void 0&&c===this.roomVersion)return;this.roomVersion=c,this.roomColliders=l.map(d=>i(d,this.thickness)),this.nearRoom=null,this.roomGrid=new Map;const u=.14;for(const d of this.roomColliders){const h=d.bounds;for(let f=Math.floor((h[0]-.035)/u);f<=Math.floor((h[3]+.035)/u);f++)for(let p=Math.floor((h[1]-.035)/u);p<=Math.floor((h[4]+.035)/u);p++){const v=f*4096+p,m=this.roomGrid.get(v);m?m.push(d):this.roomGrid.set(v,[d])}}this.wake()}roomBucket(l,c){return this.roomGrid?.get(Math.floor(l/.14)*4096+Math.floor(c/.14))||[]}surfaceHeight(l,c,u=1/0){const d=this.position,h=this.triangles;let f=null;for(let p=0;p<h.length;p+=3){const v=h[p]*3,m=h[p+1]*3,g=h[p+2]*3,_=d[v],x=d[v+1],M=d[m],E=d[m+1],b=d[g],y=d[g+1];if(l<Math.min(_,M,b)||l>Math.max(_,M,b)||c<Math.min(x,E,y)||c>Math.max(x,E,y))continue;const S=(E-y)*(_-b)+(b-M)*(x-y);if(Math.abs(S)<1e-10)continue;const P=((E-y)*(l-b)+(b-M)*(c-y))/S,A=((y-x)*(l-b)+(_-b)*(c-y))/S,I=1-P-A;if(P<0||A<0||I<0)continue;const N=d[v+2]*P+d[m+2]*A+d[g+2]*I;N<=u&&(f===null||N>f)&&(f=N)}return f}wake(){this.active=!0,this.sleepTime=0}translate(l,c,u=0){const d=this.roomColliders.length?Math.max(1,Math.ceil(Math.hypot(l,c,u)/.02)):1;for(let h=0;h<d;h++){this.previous.set(this.position);for(let f=0;f<this.count;f++){const p=f*3;this.position[p]+=l/d,this.position[p+1]+=c/d,this.position[p+2]=Math.max(this.thickness,this.position[p+2]+u/d)}this.roomColliders.length&&this._environment()}this.previous.set(this.position),this.origin[0]+=l,this.origin[1]+=c,this.wake(),this.updateNormals()}grabTriangle(l,c,u=.15){this.release();const d=Array.from(this.triangles.slice(l*3,l*3+3));d.sort((p,v)=>{const m=this.position;return Math.hypot(m[p*3]-c[0],m[p*3+1]-c[1],m[p*3+2]-c[2])-Math.hypot(m[v*3]-c[0],m[v*3+1]-c[1],m[v*3+2]-c[2])});const h=[d[0]],f=h.map(p=>[this.position[p*3]-c[0],this.position[p*3+1]-c[1],this.position[p*3+2]-c[2]]);this.grab={ids:h,offsets:f,current:c.slice(),target:[c[0],c[1],Math.max(this.thickness,c[2]+u)],baseHeight:c[2],lift:u};for(const p of h)this.inverseMass[p]=0;return this.wake(),this.grab}moveGrab(l){this.grab&&(this.grab.target=l.slice(),this.grab.target[2]=r(this.grab.target[2],this.thickness,1.2),this.wake())}release(){if(this.grab){for(const l of this.grab.ids)this.inverseMass[l]=1;this.grab=null,this.wake()}}_movePins(l){if(!this.grab)return;const c=this.grab,u=c.target[0]-c.current[0],d=c.target[1]-c.current[1],h=c.target[2]-c.current[2],f=Math.hypot(u,d,h),p=f?Math.min(1,this.maxGrabSpeed*l/f):1;c.current[0]+=u*p,c.current[1]+=d*p,c.current[2]+=h*p;for(let v=0;v<c.ids.length;v++){const m=c.ids[v]*3;for(let g=0;g<3;g++)this.position[m+g]=c.current[g]+c.offsets[v][g]}}_distances(l,c){const u=this.position,d=this.inverseMass,h=t[this.material],f=l*l,p=this.restLength.length;for(let v=0;v<p;v++){const m=c?p-1-v:v,g=this.edges[2*m],_=this.edges[2*m+1],x=g*3,M=_*3,E=d[g],b=d[_];if(E+b===0)continue;const y=u[x]-u[M],S=u[x+1]-u[M+1],P=u[x+2]-u[M+2],A=Math.sqrt(y*y+S*S+P*P);if(A<1e-12)continue;const I=(this.edgeType[m]?h.shear:h.stretch)/f,N=(-(A-this.restLength[m])-I*this.edgeLambda[m])/(E+b+I);this.edgeLambda[m]+=N;const L=N/A;u[x]+=E*L*y,u[x+1]+=E*L*S,u[x+2]+=E*L*P,u[M]-=b*L*y,u[M+1]-=b*L*S,u[M+2]-=b*L*P}}_bending(l){const c=this.position,u=this.inverseMass,d=this._gradient,h=t[this.material].bend/(l*l);for(let f=0;f<this.bendLambda.length;f++){const p=f*4,v=this.hinges[p],m=this.hinges[p+1],g=this.hinges[p+2],_=this.hinges[p+3],x=n(c,v,m,g,_,d);if(Math.abs(x)<1e-8&&this.bendLambda[f]===0)continue;let M=h;for(let b=0;b<4;b++){const y=u[this.hinges[p+b]],S=b*3;M+=y*(d[S]*d[S]+d[S+1]*d[S+1]+d[S+2]*d[S+2])}if(M<1e-12)continue;const E=(-x-h*this.bendLambda[f])/M;this.bendLambda[f]+=E;for(let b=0;b<4;b++){const y=this.hinges[p+b],S=y*3,P=b*3,A=u[y]*E;for(let I=0;I<3;I++)c[S+I]+=A*d[P+I]}}}_environment(){const l=this.position,c=this.contactNormals,u=this.thickness;for(let d=0;d<this.count;d++){const h=3*d;l[h+2]<u+1e-7&&(this.normalPush[d]+=Math.max(0,u-l[h+2]),l[h+2]=u,this.contact[d]=1,c[h]=0,c[h+1]=0,c[h+2]=1,this.stats.environmentContacts++);for(const f of this.roomBucket(l[h],l[h+1])){const p=this._roomResult;s(f,l[h],l[h+1],l[h+2],this.previous[h],this.previous[h+1],this.previous[h+2],p,u)&&(this.normalPush[d]+=Math.hypot(p[0]-l[h],p[1]-l[h+1],p[2]-l[h+2]),l[h]=p[0],l[h+1]=p[1],l[h+2]=p[2],c[h]=p[3],c[h+1]=p[4],c[h+2]=p[5],this.contact[d]=1,this.stats.roomContacts++)}for(const f of this.colliders){const p=f.rx+u,v=f.ry+u,m=f.rz+u,g=l[h]-f.x,_=l[h+1]-f.y,x=l[h+2]-f.z;if(Math.abs(g)>p||Math.abs(_)>v||Math.abs(x)>m)continue;const M=Math.sqrt(g*g/(p*p)+_*_/(v*v)+x*x/(m*m));if(M<1){const E=l[h],b=l[h+1],y=l[h+2];M<1e-8?l[h+2]=f.z+m:(l[h]=f.x+g/M,l[h+1]=f.y+_/M,l[h+2]=f.z+x/M),this.normalPush[d]+=Math.hypot(l[h]-E,l[h+1]-b,l[h+2]-y);const S=(l[h]-f.x)/(p*p),P=(l[h+1]-f.y)/(v*v),A=(l[h+2]-f.z)/(m*m),I=Math.hypot(S,P,A)||1;c[h]=S/I,c[h+1]=P/I,c[h+2]=A/I,this.contact[d]=1,this.stats.environmentContacts++}}}}_roomFaces(){if(!(this.nearRoom||this.roomColliders).length)return;const c=this.position,u=this.previous,d=this.triangles,h=this.inverseMass,f=this._roomResult;for(let p=0;p<d.length;p+=3){const v=d[p],m=d[p+1],g=d[p+2],_=v*3,x=m*3,M=g*3,E=h[v]+h[m]+h[g];if(!E)continue;let b=(c[_]+c[x]+c[M])/3,y=(c[_+1]+c[x+1]+c[M+1])/3,S=(c[_+2]+c[x+2]+c[M+2])/3;const P=(u[_]+u[x]+u[M])/3,A=(u[_+1]+u[x+1]+u[M+1])/3,I=(u[_+2]+u[x+2]+u[M+2])/3;for(const N of this.roomBucket(b,y))if(s(N,b,y,S,P,A,I,f,this.thickness)){const L=Math.hypot(f[0]-b,f[1]-y,f[2]-S),w=Math.min(1,this.spacing*.2/(L||1)),D=(f[0]-b)*w,F=(f[1]-y)*w,k=(f[2]-S)*w;for(const Y of[v,m,g]){const W=Y*3,O=3*h[Y]/E;c[W]+=D*O,c[W+1]+=F*O,c[W+2]+=k*O}b=f[0],y=f[1],S=f[2],this.stats.roomContacts++}}}_frictionPositions(){const l=this.position,c=this.previous,u=this.contactNormals,d=t[this.material].friction;for(let h=0;h<this.count;h++){if(!this.contact[h]||!this.inverseMass[h])continue;const f=3*h,p=l[f]-c[f],v=l[f+1]-c[f+1],m=l[f+2]-c[f+2],g=p*u[f]+v*u[f+1]+m*u[f+2],_=p-g*u[f],x=v-g*u[f+1],M=m-g*u[f+2],E=Math.sqrt(_*_+x*x+M*M),b=d*this.normalPush[h];if(E<1e-12)continue;const y=E<b*1.2?1:Math.min(1,b/E);l[f]-=_*y,l[f+1]-=x*y,l[f+2]-=M*y}}_hashKey(l,c,u){return l*73856093^c*19349663^u*83492791}_nearInRest(l,c,u,d){const h=l%this.cols,f=l/this.cols|0;return Math.abs(h-c%this.cols)<=1&&Math.abs(f-(c/this.cols|0))<=1||Math.abs(h-u%this.cols)<=1&&Math.abs(f-(u/this.cols|0))<=1||Math.abs(h-d%this.cols)<=1&&Math.abs(f-(d/this.cols|0))<=1}_selfContacts(){if(!this.selfCollision)return;const l=this.position,c=this.previous,u=this.triangles,d=this.inverseMass,h=this.thickness*1.7,f=this.hashCell,p=this._hash;let v=0;for(let _=2;_<l.length;_+=3)v=Math.max(v,l[_],c[_]);if(v<this.thickness*2.2)return;p.clear();let m=0;for(let _=0;_<u.length/3;_++){const x=u[3*_]*3,M=u[3*_+1]*3,E=u[3*_+2]*3,b=Math.floor((Math.min(l[x],l[M],l[E],c[x],c[M],c[E])-h)/f),y=Math.floor((Math.max(l[x],l[M],l[E],c[x],c[M],c[E])+h)/f),S=Math.floor((Math.min(l[x+1],l[M+1],l[E+1],c[x+1],c[M+1],c[E+1])-h)/f),P=Math.floor((Math.max(l[x+1],l[M+1],l[E+1],c[x+1],c[M+1],c[E+1])+h)/f),A=Math.floor((Math.min(l[x+2],l[M+2],l[E+2],c[x+2],c[M+2],c[E+2])-h)/f),I=Math.floor((Math.max(l[x+2],l[M+2],l[E+2],c[x+2],c[M+2],c[E+2])+h)/f);for(let N=b;N<=y;N++)for(let L=S;L<=P;L++)for(let w=A;w<=I;w++){const D=this._hashKey(N,L,w);let F=p.get(D);F||(F=this._hashBuckets[m]??(this._hashBuckets[m]=[]),F.length=0,m++,p.set(D,F)),F.push(_)}}const g=this._closest;for(let _=0;_<this.count;_++){const x=3*_;if(l[x+2]<this.thickness*1.05&&c[x+2]<this.thickness*1.05)continue;++this._queryID>4e9&&(this._stamp.fill(0),this._queryID=1);const M=this._queryID,E=Math.floor(l[x]/f),b=Math.floor(l[x+1]/f),y=Math.floor(l[x+2]/f),S=p.get(this._hashKey(E,b,y));if(S)for(const P of S){if(this._stamp[P]===M)continue;this._stamp[P]=M;const A=u[P*3],I=u[P*3+1],N=u[P*3+2];if(this._nearInRest(_,A,I,N))continue;const L=A*3,w=I*3,D=N*3;e(l[x],l[x+1],l[x+2],l[L],l[L+1],l[L+2],l[w],l[w+1],l[w+2],l[D],l[D+1],l[D+2],g);let F=l[x]-g[0],k=l[x+1]-g[1],Y=l[x+2]-g[2],W=Math.sqrt(F*F+k*k+Y*Y),O,H,X,ot;const q=l[w]-l[L],Q=l[w+1]-l[L+1],lt=l[w+2]-l[L+2],et=l[D]-l[L],st=l[D+1]-l[L+1],bt=l[D+2]-l[L+2];O=Q*bt-lt*st,H=lt*et-q*bt,X=q*st-Q*et;const Pt=Math.sqrt(O*O+H*H+X*X);if(Pt<1e-10)continue;O/=Pt,H/=Pt,X/=Pt;const ft=F*O+k*H+Y*X,Bt=c[x]-(c[L]*g[3]+c[w]*g[4]+c[D]*g[5]),Nt=c[x+1]-(c[L+1]*g[3]+c[w+1]*g[4]+c[D+1]*g[5]),Lt=c[x+2]-(c[L+2]*g[3]+c[w+2]*g[4]+c[D+2]*g[5]),Vt=Bt*O+Nt*H+Lt*X,Kt=g[3]>1e-4&&g[4]>1e-4&&g[5]>1e-4,ye=Kt&&Vt*ft<0&&Math.abs(Vt)<this.spacing*1.2&&Math.abs(ft)<this.spacing*1.2;if(W>=h&&!ye)continue;if(Kt){const ie=Math.abs(Vt)>1e-7?Vt>0?1:-1:ft>=0?1:-1;O*=ie,H*=ie,X*=ie,ot=ie*ft-h}else{if(W<1e-8){const ie=Vt>=0?1:-1;O*=ie,H*=ie,X*=ie}else O=F/W,H=k/W,X=Y/W;ot=W-h}if(ot>=0)continue;const Xt=d[_]+d[A]*g[3]*g[3]+d[I]*g[4]*g[4]+d[N]*g[5]*g[5];if(Xt<1e-10)continue;const we=Math.min(-ot,this.spacing*.5)/Xt;l[x]+=d[_]*we*O,l[x+1]+=d[_]*we*H,l[x+2]+=d[_]*we*X;for(let ie=0;ie<3;ie++){const nt=u[P*3+ie],ct=nt*3,ut=d[nt]*g[3+ie]*we;l[ct]-=ut*O,l[ct+1]-=ut*H,l[ct+2]-=ut*X}this.stats.selfContacts++}}}_substep(l){const c=this.position,u=this.velocity,d=this.inverseMass,h=t[this.material],f=Math.exp(-h.damping*l);this.previous.set(c),this.contact.fill(0),this.normalPush.fill(0),this.edgeLambda.fill(0),this.bendLambda.fill(0);for(let v=0;v<this.count;v++){const m=3*v;if(d[v]===0)continue;u[m]*=f,u[m+1]*=f,u[m+2]=u[m+2]*f-this.gravity*l;const g=Math.hypot(u[m],u[m+1],u[m+2]),_=this.maxSpeed;g>_&&(u[m]*=_/g,u[m+1]*=_/g,u[m+2]*=_/g),c[m]+=u[m]*l,c[m+1]+=u[m+1]*l,c[m+2]+=u[m+2]*l}this._movePins(l);for(let v=0;v<this.iterations;v++)(v===1||v===this.iterations-1)&&this._bending(l),this._distances(l,(v+this.steps)%2===1),this._environment();if(this._selfContacts(),this._roomFaces(),this._environment(),this._frictionPositions(),this._environment(),this.grab){const v=this.grab,m=v.ids[0]*3;for(let g=0;g<3;g++)v.current[g]=c[m+g]-v.offsets[0][g]}let p=0;for(let v=0;v<this.count;v++){const m=3*v;let g=(c[m]-this.previous[m])/l,_=(c[m+1]-this.previous[m+1])/l,x=(c[m+2]-this.previous[m+2])/l;if(this.contact[v]&&d[v]){const M=this.contactNormals[m],E=this.contactNormals[m+1],b=this.contactNormals[m+2],y=g*M+_*E+x*b;y<0&&(g-=y*M,_-=y*E,x-=y*b)}u[m]=g,u[m+1]=_,u[m+2]=x,p+=g*g+_*_+x*x}this.time+=l,this.steps++,!this.grab&&p/this.count<6e-6?(this.sleepTime+=l,this.sleepTime>.55&&(this.active=!1,this.velocity.fill(0))):this.sleepTime=0}advance(l){if(!this.active)return!1;this.stats.selfContacts=0,this.stats.environmentContacts=0,this.stats.roomContacts=0;let c=1/0,u=1/0,d=1/0,h=-1/0,f=-1/0,p=-1/0;for(let m=0;m<this.position.length;m+=3)c=Math.min(c,this.position[m]),u=Math.min(u,this.position[m+1]),d=Math.min(d,this.position[m+2]),h=Math.max(h,this.position[m]),f=Math.max(f,this.position[m+1]),p=Math.max(p,this.position[m+2]);this.nearRoom=this.roomColliders.filter(m=>m.bounds[3]>=c-.22&&m.bounds[0]<=h+.22&&m.bounds[4]>=u-.22&&m.bounds[1]<=f+.22&&m.bounds[5]>=d-.22&&m.bounds[2]<=p+.22),this.accumulator+=r(l,0,1/30);let v=0;for(;this.accumulator>=this.fixedStep&&v<8;)this._substep(this.fixedStep),this.accumulator-=this.fixedStep,v++;return v&&this.updateNormals(),v>0}updateNormals(){const l=this.position,c=this.normals,u=this.triangles;c.fill(0);for(let d=0;d<u.length;d+=3){const h=u[d]*3,f=u[d+1]*3,p=u[d+2]*3,v=l[f]-l[h],m=l[f+1]-l[h+1],g=l[f+2]-l[h+2],_=l[p]-l[h],x=l[p+1]-l[h+1],M=l[p+2]-l[h+2],E=m*M-g*x,b=g*_-v*M,y=v*x-m*_;c[h]+=E,c[h+1]+=b,c[h+2]+=y,c[f]+=E,c[f+1]+=b,c[f+2]+=y,c[p]+=E,c[p+1]+=b,c[p+2]+=y}for(let d=0;d<c.length;d+=3){const h=c[d],f=c[d+1],p=c[d+2],v=1/(Math.sqrt(h*h+f*f+p*p)||1);c[d]=h*v,c[d+1]=f*v,c[d+2]=p*v}}project(l=500){const c=new Float32Array(this.count*2),u=this.position;for(let d=0;d<this.count;d++)c[d*2]=(u[d*3]+u[d*3+2]*.08)*l,c[d*2+1]=(u[d*3+1]-u[d*3+2]*.36)*l;return c}pick(l,c,u=500,d=this.triangles){const h=this.position,f=d;let p=null,v=-1/0;for(let m=0;m<f.length;m+=3){const g=f[m]*3,_=f[m+1]*3,x=f[m+2]*3,M=(h[g]+h[g+2]*.08)*u,E=(h[g+1]-h[g+2]*.36)*u,b=(h[_]+h[_+2]*.08)*u,y=(h[_+1]-h[_+2]*.36)*u,S=(h[x]+h[x+2]*.08)*u,P=(h[x+1]-h[x+2]*.36)*u,A=(y-P)*(M-S)+(S-b)*(E-P);if(Math.abs(A)<1e-8)continue;const I=((y-P)*(l-S)+(S-b)*(c-P))/A,N=((P-E)*(l-S)+(M-S)*(c-P))/A,L=1-I-N;if(I<-1e-4||N<-1e-4||L<-1e-4)continue;const w=h[g+2]*I+h[_+2]*N+h[x+2]*L;w>v&&(v=w,p={triangle:m/3,point:[h[g]*I+h[_]*N+h[x]*L,h[g+1]*I+h[_+1]*N+h[x+1]*L,w],bary:[I,N,L]})}return p}diagnostics(){let l=0,c=0,u=1/0,d=-1/0,h=!0;const f=this.position;for(let p=0;p<this.restLength.length;p++){const v=this.edges[p*2]*3,m=this.edges[p*2+1]*3,g=Math.abs(Math.hypot(f[v]-f[m],f[v+1]-f[m+1],f[v+2]-f[m+2])/this.restLength[p]-1);l=Math.max(l,g),c+=g}for(let p=0;p<f.length;p++)h=h&&Number.isFinite(f[p]),p%3===2&&(u=Math.min(u,f[p]),d=Math.max(d,f[p]));return{particles:this.count,triangles:this.triangles.length/3,stretchConstraints:this.restLength.length,bendingConstraints:this.hinges.length/4,maxStrain:l,meanStrain:c/this.restLength.length,minZ:u,maxZ:d,finite:h,active:this.active}}}return{Cloth:o,MATERIALS:t,closestTriangle:e,dihedral:n,roomShape:i,roomContact:s}})();const{Cloth:gM}=mM,Vu=3;function _M(r=[]){const t=Vu,e=ku,n=new gM({cols:25,rows:17,width:e.width/t,height:e.depth/t,x:(e.x-e.width/2)/t,y:-4.175/t,iterations:4,gravity:9.81/t,maxSpeed:2.8,maxGrabSpeed:2.8,thickness:.004,selfCollision:!0});n.setRoomColliders(r.filter(s=>s.size[0]<100).map(s=>({type:"box",center:[s.pos[0]/t,-s.pos[2]/t,s.pos[1]/t],half:[s.size[0]/t/2,s.size[2]/t/2,s.size[1]/t/2]})));const i=n._environment.bind(n);n._environment=function(){i();for(let s=0;s<this.count;s++){const o=s*3,a=this.position[o]*t,l=-this.position[o+1]*t;if(Gu(a,l)<=1)continue;const c=Hu(a,l)/t+this.thickness;this.position[o+2]<c&&(this.normalPush[s]+=c-this.position[o+2],this.position[o+2]=c,this.contact[s]=1,this.contactNormals[o]=0,this.contactNormals[o+1]=0,this.contactNormals[o+2]=1)}},n.reset(n.origin[0],n.origin[1],0);for(let s=0;s<100;s++)n.advance(1/60);return n}function vM(r,t,e,n){const i=Vu,s=_M(n),o=new De,a=new Float32Array(s.count*3),l=new Float32Array(s.count*3);o.setAttribute("position",new Xe(a,3).setUsage(jr)),o.setAttribute("normal",new Xe(l,3).setUsage(jr)),o.setAttribute("uv",new Xe(s.uv,2)),o.setIndex(new Xe(s.triangles,1));const c=e.material(new an({map:t,side:je,roughness:1}),0,.7);c.bumpScale=.012;const u=new pe(o,c);u.castShadow=u.receiveShadow=!0,r.add(u);const d={name:"rug",section:"rug",mesh:u};u.userData.item=d;let h=0,f=0,p=0;function v(){for(let _=0;_<s.count;_++){const x=_*3;a[x]=s.position[x]*i,a[x+1]=s.position[x+2]*i,a[x+2]=-s.position[x+1]*i,l[x]=s.normals[x],l[x+1]=s.normals[x+2],l[x+2]=-s.normals[x+1]}o.attributes.position.needsUpdate=o.attributes.normal.needsUpdate=!0,o.computeBoundingSphere(),o.computeBoundingBox()}function m(_){const x=performance.now(),M=s.advance(Math.min(_,1/30));return p=performance.now()-x,M&&v(),s.active}const g=_=>[_.x/i,-_.z/i,_.y/i];return v(),{item:d,cloth:s,update:m,start(_,x){return s.grabTriangle(x,g(_),0),h++,!0},move(_){const x=g(_);x.every(Number.isFinite)&&(s.moveGrab(x),f=Math.max(f,_.y))},release(_=!1){s.release(),_&&s.velocity.fill(0)},reset(){const _=ku;s.reset((_.x-_.width/2)/i,-4.175/i,0),v()},get diagnostics(){return{...s.diagnostics(),grabs:h,peakHeight:f,stepMs:+p.toFixed(2),steps:s.steps}}}}const Cn=r=>document.getElementById(r),ue=Cn("scene");let Qe;try{Qe=new G_({canvas:ue,antialias:!0,alpha:!1,powerPreference:"default"})}catch(r){Cn("loading").hidden=!0,Cn("fallback").hidden=!1,console.error("WebGL unavailable",r)}Qe&&xM().catch(r=>{Cn("loading").hidden=!0,Cn("fallback").hidden=!1,console.error("Painted studio could not load",r)});async function xM(){const r=matchMedia("(prefers-reduced-motion: reduce)").matches,t=new to;t.background=new qt(vn.sky),Qe.shadowMap.enabled=!0,Qe.shadowMap.type=Hs,Qe.outputColorSpace=He,Qe.toneMapping=nl,Qe.toneMappingExposure=.98;const e=new _n(38,1,.08,340),n=new Hf("#ded8c5","#6c4f45",1.6);t.add(n);const i=new wc("#fff1ce",2.05);i.position.set(-3,7,5),i.castShadow=!0,i.shadow.mapSize.set(1024,1024),Object.assign(i.shadow.camera,{left:-9,right:9,top:8,bottom:-8,near:.1,far:24}),i.shadow.bias=-2e-4,i.shadow.normalBias=.025,i.shadow.radius=3,t.add(i);const s=new wc("#b3b19b",.85);s.position.set(4,3,-2),t.add(s);let o=!1;const a=await hM(),l=Tu();a.coat(l.group);const c=new Hy(Qe,e,l,r,[n,i,s]);ue.style.pointerEvents="none",Cn("room").setAttribute("aria-busy","true");function u(){const nt=innerWidth,ct=innerHeight;Qe.setPixelRatio(Math.min(Math.max(1,devicePixelRatio),nt<700?1.5:1.75,Math.sqrt(23e5/(nt*ct)))),Qe.setSize(nt,ct,!1),e.aspect=nt/ct,e.updateProjectionMatrix();const ut=bt("room");e.position.copy(ut.position),e.lookAt(ut.target),c.resize(),c.initial&&c.render(null,0,0)}u(),window.addEventListener("resize",u),await c.show();const d=lv(t,l);a.coat(d.room);const h=uM(t,a);pM(d.room,a,d.colliders);const f=vM(d.room,d.rugMap,a,d.colliders),p=new Fy(d.colliders,d.props);let v=!1,m=0;const g=Vy(p,nt=>{const ct=Math.max(0,nt-m);m=nt,r||h.update(nt),v=f.update(ct)});g.prepare();let _=null;const x=await $y({parent:d.room,camera:e,canvas:ue,physics:p,reduced:r,invalidate:st,onLock(nt){nt?(N=null,Xt(!0),_=Eh(et,e,ue),ue.style.pointerEvents="none"):(_?.(),_=null,et.enabled=o,ue.style.pointerEvents=""),st()}}),M=[...d.props,x.item],E=d.interactives.filter(nt=>nt.section==="lamp"),b=[...E,...M,f.item];for(const nt of b)nt.mesh.userData.item=nt;const y=new fu,S=new At,P=new z;let A=0,I=0,N=null,L=null,w=null,D=!1,F="room",k=!0,Y=!1,W=0,O=0,H=0,X=0,ot=0;const q={};let Q=null,lt=null;const et=new V_(e,ue);et.enablePan=!1,et.enableDamping=!r,et.dampingFactor=.085,et.rotateSpeed=.65,et.zoomSpeed=.7,et.minPolarAngle=.16,et.maxPolarAngle=Math.PI/2-.07,et.minDistance=2.5,et.maxDistance=36,et.addEventListener("change",st),et.addEventListener("start",()=>{N=null,Y=!0,st()}),et.addEventListener("end",()=>{Y=!1,st()});function st(){o&&!A&&!document.hidden&&(A=requestAnimationFrame(Nt))}function bt(nt){const ct=innerWidth/innerHeight,ut=Math.max(1,1.2/ct);if(nt==="desk")return{target:new z(0,1.15,-.95),position:new z(3.6,4.1,4.7).multiplyScalar(Math.max(1,.82/ct)).add(new z(0,.1,-.65))};const B=new z(-.85,1.05,.65),kt=new z(7.5,4,13.3).multiplyScalar(ut);return{target:B,position:B.clone().add(kt)}}function Pt(nt,ct=!1){F=nt;const ut=bt(nt);ct||r?(e.position.copy(ut.position),et.target.copy(ut.target),et.update(),N=null):N={start:performance.now(),from:e.position.clone(),targetFrom:et.target.clone(),...ut},st()}function ft(){w&&Xt(!0);const nt=innerWidth,ct=innerHeight;Qe.setPixelRatio(Math.min(Math.max(1,devicePixelRatio),nt<700?1.5:1.75,Math.sqrt(23e5/(nt*ct)))),Qe.setSize(nt,ct,!1),e.aspect=nt/ct,e.updateProjectionMatrix(),Pt(F,!0),c.resize(),st()}window.removeEventListener("resize",u),window.addEventListener("resize",ft),ft();function Bt(nt){const ct={};for(const ut of b){const B=ut.section==="rug"?ut.mesh.geometry.boundingBox.getCenter(new z).applyMatrix4(ut.mesh.matrixWorld).project(e):ut.mesh.getWorldPosition(new z).project(e);ct[ut.name||ut.section]={x:Math.round((B.x*.5+.5)*innerWidth),y:Math.round((-.5*B.y+.5)*innerHeight)}}Cn("diagnostics").textContent=JSON.stringify({rug:f.diagnostics,entrance:c.stats,letter:x.diagnostics,sceneTime:g.elapsed,sceneFrames:g.frames,held:p.drag?.body.name??null,grabs:q,lastGrab:Q,idle:nt,frames:I,awake:p.awake,steps:p.stepCount,physicsMs:+W.toFixed(2),renderMs:+O.toFixed(2),activeFps:ot,drawCalls:Qe.info.render.calls,triangles:Qe.info.render.triangles,pixelRatio:Qe.getPixelRatio(),view:F,lampOn:k,camera:e.position.toArray().map(ut=>+ut.toFixed(2)),points:ct,bodies:p.bodies.map(ut=>({name:ut.name,position:ut.position.toArray().map(B=>+B.toFixed(3)),sleeping:ut.sleepState===2,rotation:ut.quaternion.toArray().map(B=>+B.toFixed(5)),spin:+ut.angularVelocity.length().toFixed(4)}))})}function Nt(nt){A=0;const ct=performance.now(),{dt:ut,awake:B}=g.advance(nt);if(W=performance.now()-ct,N){const $t=Math.min(1,(nt-N.start)/850),Rt=1-Math.pow(1-$t,3);e.position.lerpVectors(N.from,N.position,Rt),et.target.lerpVectors(N.targetFrom,N.target,Rt),$t===1&&(N=null)}if(L){const $t=ky(nt-L.start,L.turningOn,r),Rt=L.turningOn?"relighting":"darkening";c.setRuntimeState($t.progress,$t.power,Rt),$t.done&&(c.setRuntimeState(k?1:0,k?1:0,k?"ready":"dark"),L=null,et.enabled=k&&!x.locked,Cn("room").setAttribute("aria-busy","false"))}const kt=x.update(ut,!w&&!Y),Qt=D||x.locked?!1:et.update();if(p.drag){const $t=p.drag.body;q[$t.name].peakLift=Math.max(q[$t.name].peakLift,$t.position.y-w.startY),q[$t.name].peakSpin=Math.max(q[$t.name].peakSpin,$t.angularVelocity.length());const Rt=$t.mesh.getWorldQuaternion(new yn).toArray(),Ht=q[$t.name],U=Math.min(1,Math.abs(Rt.reduce((T,Z,ht)=>T+Z*Ht.pose[ht],0)));Ht.peakRenderPoseChange=Math.max(Ht.peakRenderPoseChange,2*Math.acos(U))}if(Q){const $t=p.bodies.find(T=>T.name===Q),Rt=q[Q],Ht=$t.quaternion.toArray(),U=Math.min(1,Math.abs(Ht.reduce((T,Z,ht)=>T+Z*Rt.pose[ht],0)));p.drag?.body===$t?Rt.peakPoseChange=Math.max(Rt.peakPoseChange,2*Math.acos(U)):(Rt.releasedPeakSpin=Math.max(Rt.releasedPeakSpin,$t.angularVelocity.length()),Rt.releasePosition&&(Rt.releaseTravel=Math.max(Rt.releaseTravel,Math.hypot($t.position.x-Rt.releasePosition[0],$t.position.z-Rt.releasePosition[2]))))}d.backWall.visible=!0,d.leftWall.visible=!0;const Me=performance.now();c.renderScene(t),x.render(Qe),O=performance.now()-Me,I++,ut<.05&&(H++,X+=ut*1e3,X>500&&(ot=Math.round(H*1e3/X),H=0,X=0));const xt=v||B||Qt||N||L||D||Y||kt;(I%15===0||!xt)&&Bt(!xt),xt?st():!r&&!document.hidden&&setTimeout(st,50)}function Lt(nt){const ct=ue.getBoundingClientRect();S.set((nt.clientX-ct.left)/ct.width*2-1,-(nt.clientY-ct.top)/ct.height*2+1),y.setFromCamera(S,e)}function Vt(nt){Lt(nt);const ct=k&&!L;if(ct){const kt=Qy(y,M,e,nt.clientX,nt.clientY,ue.getBoundingClientRect(),nt.pointerType==="touch"?18:10);if(kt)return kt}const ut=ct?b:E,B=y.intersectObjects(ut.map(kt=>kt.mesh),!0);for(const kt of B){let Qt=kt.object;for(;Qt&&!Qt.userData.item;)Qt=Qt.parent;if(Qt)return{item:Qt.userData.item,point:kt.point,faceIndex:kt.faceIndex}}return null}function Kt(nt){Lt(nt),w.projection.project(y.ray,P)&&(w.item.section==="rug"?f.move(P):p.moveDrag(P),q[p.drag?.body.name]&&q[p.drag.body.name].pointerMoves++),st()}ue.addEventListener("pointerdown",nt=>{if(!o||x.locked||nt.button!==0||w)return;const ct=Vt(nt);if(N=null,!(!ct||!ct.point.toArray().every(Number.isFinite))){if(nt.preventDefault(),nt.stopImmediatePropagation(),lt=Eh(et,e,ue),Y=!1,w={...ct,id:nt.pointerId,x:nt.clientX,y:nt.clientY,moved:!1,startY:ct.item.body?.position.y},ct.item.section==="letter"){ue.setPointerCapture(nt.pointerId);return}(ct.item.body||ct.item.section==="rug")&&ye(nt)}},!0);function ye(nt){if(!w||!w.item.body&&w.item.section!=="rug"||w.item.section==="letter"&&!x.canDrag)return;if(et.enabled=!1,w.projection=Jy(e,w.point),w.item.section==="rug"){f.start(w.point,w.faceIndex),D=!0,ue.style.cursor="grabbing",ue.setPointerCapture(nt.pointerId),Kt(nt);return}if(!p.startDrag(w.item.body,w.point)){Xt(!0);return}D=!0,ue.style.cursor="grabbing",ue.setPointerCapture(nt.pointerId);const ct=w.item.body,ut=ct.name;q[ut]={count:(q[ut]?.count??0)+1,peakLift:0,peakSpin:0,peakRenderPoseChange:0,pointerMoves:0,releasedPeakSpin:0,pose:ct.quaternion.toArray(),peakPoseChange:0},Q=ut,Kt(nt)}ue.addEventListener("pointermove",nt=>{if(w&&nt.pointerId===w.id){Math.hypot(nt.clientX-w.x,nt.clientY-w.y)>6&&(w.moved=!0),w.moved&&!D&&w.item.section==="letter"&&ye(nt),D&&(nt.preventDefault(),nt.stopImmediatePropagation(),Kt(nt));return}if(nt.pointerType==="touch"||Y)return;const ct=Vt(nt);ue.style.cursor=["lamp","letter"].includes(ct?.item.section)?"pointer":"grab"},!0);function Xt(nt=!1){const ct=w?.id,ut=p.drag?.body;w=null,D=!1,p.endDrag({cancel:nt}),f.release(nt),ut&&q[ut.name]&&Object.assign(q[ut.name],{releaseSpeed:ut.velocity.length(),releasePosition:ut.position.toArray(),releaseTravel:0,cancelled:nt}),lt?.(),lt=null,ue.style.cursor="grab",ct!==void 0&&ue.hasPointerCapture(ct)&&ue.releasePointerCapture(ct),st()}ue.addEventListener("pointerup",nt=>{if(!w||nt.pointerId!==w.id)return;const ct=w.item,ut=!w.moved;nt.preventDefault(),nt.stopImmediatePropagation(),Xt(ut&&ct.section==="letter"),ut&&ct.section==="lamp"&&we(),ut&&ct.section==="letter"&&x.open()},!0),ue.addEventListener("pointercancel",()=>Xt(!0),!0),ue.addEventListener("lostpointercapture",()=>{w&&Xt(!0)}),document.addEventListener("visibilitychange",()=>{document.hidden?(Xt(!0),A&&cancelAnimationFrame(A),A=0,g.pause()):st()}),window.addEventListener("blur",()=>{w&&Xt(!0)}),ue.addEventListener("webglcontextlost",nt=>{nt.preventDefault(),Cn("fallback").hidden=!1}),ue.addEventListener("webglcontextrestored",()=>location.reload());function we(){if(!L){k=!k,N=null,et.enabled=!1,Cn("room").setAttribute("aria-busy","true");for(const nt of E)nt.label=k?"Lamp · hide the world":"Lamp · reveal the world";L={start:performance.now(),turningOn:k},st()}}function ie(){Xt(!0),p.reset(),f.reset(),st()}window.addEventListener("keydown",nt=>{if(!o||x.locked)return;if(nt.target===ue&&nt.key==="Enter"){nt.preventDefault(),x.open();return}if(nt.key==="Escape"&&Xt(!0),D||(nt.target===ue&&nt.key==="1"&&Pt("room"),nt.target===ue&&nt.key==="2"&&Pt("desk"),nt.key.toLowerCase()==="r"&&!nt.metaKey&&!nt.ctrlKey&&ie(),nt.key.toLowerCase()==="l"&&!nt.metaKey&&!nt.ctrlKey&&we(),nt.target!==ue))return;const ct=e.position.clone().sub(et.target),ut=new Za().setFromVector3(ct);if(nt.key==="ArrowLeft")ut.theta-=.14;else if(nt.key==="ArrowRight")ut.theta+=.14;else if(nt.key==="ArrowUp")ut.phi-=.1;else if(nt.key==="ArrowDown")ut.phi+=.1;else if(nt.key==="+"||nt.key==="=")ut.radius*=.9;else if(nt.key==="-")ut.radius*=1.1;else return;nt.preventDefault(),N=null,ut.phi=Ee.clamp(ut.phi,et.minPolarAngle,et.maxPolarAngle),ut.radius=Ee.clamp(ut.radius,et.minDistance,et.maxDistance),e.position.copy(et.target).add(new z().setFromSpherical(ut)),et.update(),st()}),et.enabled=!1,await c.reveal(t,nt=>{const ct=g.advance(nt);return Bt(!1),ct}),et.enabled=!0,o=!0,ue.style.pointerEvents="",Cn("room").setAttribute("aria-busy","false"),x.arm(),st()}
