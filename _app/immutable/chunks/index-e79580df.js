function w(){}function I(t,n){for(const e in n)t[e]=n[e];return t}function T(t){return t()}function k(){return Object.create(null)}function y(t){t.forEach(T)}function D(t){return typeof t=="function"}function lt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let x;function ut(t,n){return x||(x=document.createElement("a")),x.href=n,t===x.href}function G(t){return Object.keys(t).length===0}function J(t,...n){if(t==null)return w;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ot(t,n,e){t.$$.on_destroy.push(J(n,e))}function st(t,n,e,i){if(t){const r=O(t,n,e,i);return t[0](r)}}function O(t,n,e,i){return t[1]&&i?I(e.ctx.slice(),t[1](i(n))):e.ctx}function ft(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const s=[],c=Math.max(n.dirty.length,r.length);for(let o=0;o<c;o+=1)s[o]=n.dirty[o]|r[o];return s}return n.dirty|r}return n.dirty}function at(t,n,e,i,r,s){if(r){const c=O(n,e,i,s);t.p(c,r)}}function _t(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}let v=!1;function K(){v=!0}function L(){v=!1}function W(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function Q(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<n.length;u++){const a=n[u];a.claim_order!==void 0&&l.push(a)}n=l}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let l=0;l<n.length;l++){const u=n[l].claim_order,a=(r>0&&n[e[r]].claim_order<=u?r+1:W(1,r,g=>n[e[g]].claim_order,u))-1;i[l]=e[a]+1;const f=a+1;e[f]=l,r=Math.max(f,r)}const s=[],c=[];let o=n.length-1;for(let l=e[r]+1;l!=0;l=i[l-1]){for(s.push(n[l-1]);o>=l;o--)c.push(n[o]);o--}for(;o>=0;o--)c.push(n[o]);s.reverse(),c.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<c.length;l++){for(;u<s.length&&c[l].claim_order>=s[u].claim_order;)u++;const a=u<s.length?s[u]:null;t.insertBefore(c[l],a)}}function R(t,n){if(v){for(Q(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function dt(t,n,e){v&&!e?R(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function U(t){t.parentNode&&t.parentNode.removeChild(t)}function ht(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function V(t){return document.createElement(t)}function S(t){return document.createTextNode(t)}function mt(){return S(" ")}function pt(){return S("")}function yt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function X(t){return Array.from(t.childNodes)}function Y(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function P(t,n,e,i,r=!1){Y(t);const s=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(n(o)){const l=e(o);return l===void 0?t.splice(c,1):t[c]=l,r||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(n(o)){const l=e(o);return l===void 0?t.splice(c,1):t[c]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function Z(t,n,e,i){return P(t,r=>r.nodeName===n,r=>{const s=[];for(let c=0;c<r.attributes.length;c++){const o=r.attributes[c];e[o.name]||s.push(o.name)}s.forEach(c=>r.removeAttribute(c))},()=>i(n))}function gt(t,n,e){return Z(t,n,e,V)}function tt(t,n){return P(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>S(n),!0)}function xt(t){return tt(t," ")}function bt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function $t(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function wt(t,n){return new t(n)}let p;function m(t){p=t}function j(){if(!p)throw new Error("Function called outside component initialization");return p}function vt(t){j().$$.on_mount.push(t)}function Et(t){j().$$.after_update.push(t)}function Nt(t){j().$$.on_destroy.push(t)}const h=[],q=[],b=[],B=[],z=Promise.resolve();let N=!1;function F(){N||(N=!0,z.then(H))}function At(){return F(),z}function A(t){b.push(t)}const E=new Set;let d=0;function H(){if(d!==0)return;const t=p;do{try{for(;d<h.length;){const n=h[d];d++,m(n),nt(n.$$)}}catch(n){throw h.length=0,d=0,n}for(m(null),h.length=0,d=0;q.length;)q.pop()();for(let n=0;n<b.length;n+=1){const e=b[n];E.has(e)||(E.add(e),e())}b.length=0}while(h.length);for(;B.length;)B.pop()();N=!1,E.clear(),m(t)}function nt(t){if(t.fragment!==null){t.update(),y(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}const $=new Set;let _;function St(){_={r:0,c:[],p:_}}function jt(){_.r||y(_.c),_=_.p}function et(t,n){t&&t.i&&($.delete(t),t.i(n))}function Ct(t,n,e,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Mt(t){t&&t.c()}function kt(t,n){t&&t.l(n)}function it(t,n,e,i){const{fragment:r,after_update:s}=t.$$;r&&r.m(n,e),i||A(()=>{const c=t.$$.on_mount.map(T).filter(D);t.$$.on_destroy?t.$$.on_destroy.push(...c):y(c),t.$$.on_mount=[]}),s.forEach(A)}function rt(t,n){const e=t.$$;e.fragment!==null&&(y(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ct(t,n){t.$$.dirty[0]===-1&&(h.push(t),F(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function qt(t,n,e,i,r,s,c,o=[-1]){const l=p;m(t);const u=t.$$={fragment:null,ctx:[],props:s,update:w,not_equal:r,bound:k(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(l?l.$$.context:[])),callbacks:k(),dirty:o,skip_bound:!1,root:n.target||l.$$.root};c&&c(u.root);let a=!1;if(u.ctx=e?e(t,n.props||{},(f,g,...C)=>{const M=C.length?C[0]:g;return u.ctx&&r(u.ctx[f],u.ctx[f]=M)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](M),a&&ct(t,f)),g}):[],u.update(),a=!0,y(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){K();const f=X(n.target);u.fragment&&u.fragment.l(f),f.forEach(U)}else u.fragment&&u.fragment.c();n.intro&&et(t.$$.fragment),it(t,n.target,n.anchor,n.customElement),L(),H()}m(l)}class Bt{$destroy(){rt(this,1),this.$destroy=w}$on(n,e){if(!D(e))return w;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!G(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{At as A,w as B,st as C,at as D,_t as E,ft as F,R as G,ot as H,ht as I,Nt as J,ut as K,Bt as S,mt as a,dt as b,xt as c,jt as d,pt as e,et as f,St as g,U as h,qt as i,Et as j,V as k,gt as l,X as m,yt as n,vt as o,$t as p,S as q,tt as r,lt as s,Ct as t,bt as u,wt as v,Mt as w,kt as x,it as y,rt as z};
