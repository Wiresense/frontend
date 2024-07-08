(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{99870:function(e,n,t){Promise.resolve().then(t.bind(t,2928))},41114:function(e,n,t){"use strict";t.d(n,{F:function(){return s},default:function(){return u}});var o=t(57437),r=t(37540),l=t(63941),c=t(83339),i=t(2265);let a=(0,i.createContext)();function s(){return(0,i.useContext)(a)}function u(e){let n=e.children,[t,i]=(0,c.useLocalStorage)({key:"theme",defaultValue:(0,r.j)({primaryColor:"blue",fontFamily:"Poppins"})});return(0,o.jsx)(a.Provider,{value:{theme:t,setTheme:i},children:(0,o.jsx)(l.MantineProvider,{theme:t,defaultColorScheme:"dark",children:n})})}},2928:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return _}});var o=t(57437),r=t(2265),l=t(16472),c=t(37063),i=t(18849),a=t(99942),s=t(58323),u=t(70132),d=t(37540),h=t(765),x=t(90438),f=t(20126),p=t(91905),j=t(41114);function k(){let{colorScheme:e,setColorScheme:n}=(0,l.useMantineColorScheme)(),t=(0,c.useMantineTheme)(),{setTheme:r}=(0,j.F)();return(0,o.jsx)(i.Affix,{position:{bottom:20,left:20},children:(0,o.jsxs)(a.Popover,{width:"5vh",trapFocus:!0,position:"bottom",withArrow:!0,shadow:"md",children:[(0,o.jsx)(a.Popover.Target,{children:(0,o.jsx)(s.ActionIcon,{size:"xl",children:(0,o.jsx)(x.Z,{})})}),(0,o.jsx)(a.Popover.Dropdown,{children:(0,o.jsxs)(u.Stack,{align:"center",children:[(0,o.jsxs)(s.ActionIcon,{size:"3vh",onClick:()=>{n("light"===e?"dark":"light")},variant:"default",children:[(0,o.jsx)(f.Z,{color:"var(--mantine-color-yellow-4)",display:"light"==e?"none":"block"}),(0,o.jsx)(p.Z,{color:"var(--mantine-color-blue-6)",display:"dark"==e?"none":"block"})]}),Object.keys(t.colors).map((e,n)=>(0,o.jsx)(s.ActionIcon,{size:"3vh",color:e,variant:"filled",onClick:()=>{let n=(0,d.j)({primaryColor:e});r((0,h.n0)(t,n))}},n))]})})]})})}var m=t(29128),g=t(24012),v=t(86608),b=t(96293),C=t(6925),S=t(79842),y=t(45896),w=t(97293);function P(e){let n=(0,r.useRef)(null),t=e.data.map((e,n,t)=>{let o=t.length-n-1;return{...e,i:-o}}),l=Object.keys(e.data[0]).filter(e=>"i"!==e),c=["indigo.6","red.6","green.6","blue.6","yellow.6","purple.6","cyan.6","teal.6","lime.6","pink.6"].slice(0,l.length),i=l.map((e,n)=>({name:e,color:c[n%c.length]}));return(0,o.jsxs)(g.Card,{children:[(0,o.jsxs)(v.Group,{children:[(0,o.jsx)(b.Text,{children:e.sensorkey.toUpperCase()}),(0,o.jsx)(s.ActionIcon,{color:"violet",onClick:()=>{(0,w.YM)(n.current,{cacheBust:!1}).then(e=>{let n=document.createElement("a");n.download="graph.png",n.href=e,n.click()}).catch(e=>{console.log(e)})},children:(0,o.jsx)(S.Z,{})}),(0,o.jsx)(s.ActionIcon,{color:"green",onClick:()=>{let n=document.createElement("a");n.target="_blank",n.href="http://".concat(e.ip,"/").concat(encodeURIComponent(e.sensorkey),"/data.csv"),n.click()},children:(0,o.jsx)(y.Z,{})})]}),(0,o.jsx)(C.Space,{h:"xs"}),(0,o.jsx)(m.w,{ref:n,h:400,data:t,dataKey:"i",series:i,withLegend:!0})]})}var I=t(11736),O=t(75036),E=t(91601),A=t(51888),Z=t(84926),N=t(43487),W=t(88220);function _(){let[e,n]=(0,r.useState)(null),[t,l]=(0,r.useState)(WebSocket.CLOSED),[c,i]=(0,r.useState)({}),[a,d]=(0,r.useState)(50),h=(0,r.useRef)(a);h.current=a;let x=(0,A.U)({initialValue:"localhost:8080",validateOnChange:!1,validate:function(t){return new Promise(o=>{try{null==e||e.close(),i({});let r=new WebSocket("ws://".concat(t));n(r),o(null)}catch(e){o("Can't reach wiresense client. Check if IP is valid and client can be reached!"),console.error(e)}})}});return(0,r.useEffect)(()=>(e&&(e.onopen=()=>l(WebSocket.OPEN),e.onclose=()=>l(WebSocket.CLOSED),e.onerror=()=>l(WebSocket.CLOSED),e.onmessage=e=>{(function(e){let{key:n,data:t}=e;i(e=>{let o={...e};for(o[n]||(o[n]=[]),o[n].push(t);o[n].length>h.current;)o[n].shift();return o})})(JSON.parse(e.data),a)}),()=>{null==e||e.close(),i({})}),[e]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(k,{}),(0,o.jsxs)(v.Group,{justify:"center",grow:!0,children:[(0,o.jsx)(I.TextInput,{required:!0,...x.getInputProps(),variant:"filled",label:"IP of the Wiresense Client",placeholder:"localhost:8080",rightSection:t===WebSocket.OPEN?(0,o.jsx)(s.ActionIcon,{onClick:function(){null==e||e.close(),i({})},color:"red",children:(0,o.jsx)(Z.Z,{})}):(0,o.jsx)(s.ActionIcon,{onClick:x.validate,children:(0,o.jsx)(N.Z,{})}),leftSection:t===WebSocket.OPEN?(0,o.jsx)(W.Z,{color:"green"}):(0,o.jsx)(Z.Z,{color:"red"})}),(0,o.jsx)(O.NumberInput,{value:a,onChange:e=>{e>=5&&e<=100&&d(e)},min:5,max:100,label:"Max. ammount of data per graph"})]}),(0,o.jsx)(E.Divider,{my:"md",label:"Settings"}),(0,o.jsx)(u.Stack,{align:"stretch",children:Object.entries(c).map(e=>{let[n,t]=e;return(0,o.jsx)(P,{sensorkey:n,data:t,ip:x.getValue()},n)})})]})}}},function(e){e.O(0,[501,662,957,971,23,744],function(){return e(e.s=99870)}),_N_E=e.O()}]);