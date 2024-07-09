(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{99870:function(e,n,t){Promise.resolve().then(t.bind(t,2928))},41114:function(e,n,t){"use strict";t.d(n,{F:function(){return a},default:function(){return d}});var o=t(57437),r=t(37540),l=t(63941),c=t(83339),i=t(2265);let s=(0,i.createContext)();function a(){return(0,i.useContext)(s)}function d(e){let n=e.children,[t,i]=(0,c.useLocalStorage)({key:"theme",defaultValue:(0,r.j)({primaryColor:"blue",fontFamily:"Poppins"})});return(0,o.jsx)(s.Provider,{value:{theme:t,setTheme:i},children:(0,o.jsx)(l.MantineProvider,{theme:t,defaultColorScheme:"dark",children:n})})}},2928:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return R}});var o=t(57437),r=t(2265),l=t(16472),c=t(37063),i=t(18849),s=t(99942),a=t(58323),d=t(70132),u=t(37540),h=t(765),x=t(90438),j=t(20126),p=t(91905),f=t(41114);function m(){let{colorScheme:e,setColorScheme:n}=(0,l.useMantineColorScheme)(),t=(0,c.useMantineTheme)(),{setTheme:r}=(0,f.F)();return(0,o.jsx)(i.Affix,{position:{bottom:20,left:20},children:(0,o.jsxs)(s.Popover,{width:"5vh",trapFocus:!0,position:"bottom",withArrow:!0,shadow:"md",children:[(0,o.jsx)(s.Popover.Target,{children:(0,o.jsx)(a.ActionIcon,{size:"xl",children:(0,o.jsx)(x.Z,{})})}),(0,o.jsx)(s.Popover.Dropdown,{children:(0,o.jsxs)(d.Stack,{align:"center",children:[(0,o.jsxs)(a.ActionIcon,{size:"3vh",onClick:()=>{n("light"===e?"dark":"light")},variant:"default",children:[(0,o.jsx)(j.Z,{color:"var(--mantine-color-yellow-4)",display:"light"==e?"none":"block"}),(0,o.jsx)(p.Z,{color:"var(--mantine-color-blue-6)",display:"dark"==e?"none":"block"})]}),Object.keys(t.colors).map((e,n)=>(0,o.jsx)(a.ActionIcon,{size:"3vh",color:e,variant:"filled",onClick:()=>{let n=(0,u.j)({primaryColor:e});r((0,h.n0)(t,n))}},n))]})})]})})}var g=t(29128),k=t(24012),C=t(86608),b=t(96293),v=t(6925),w=t(79842),S=t(45896),y=t(97293);function I(e){let n=(0,r.useRef)(null),t=e.data.map((e,n,t)=>{let o=t.length-n-1;return{...e,i:-o}}),l=Object.keys(e.data[0]).filter(e=>"i"!==e),c=["indigo.6","red.6","green.6","blue.6","yellow.6","purple.6","cyan.6","teal.6","lime.6","pink.6"].slice(0,l.length),i=l.map((e,n)=>({name:e,color:c[n%c.length]}));return(0,o.jsxs)(k.Card,{children:[(0,o.jsxs)(C.Group,{children:[(0,o.jsx)(b.Text,{children:e.sensorkey.toUpperCase()}),(0,o.jsx)(a.ActionIcon,{color:"violet",onClick:()=>{(0,y.YM)(n.current,{cacheBust:!1}).then(e=>{let n=document.createElement("a");n.download="graph.png",n.href=e,n.click()}).catch(e=>{console.log(e)})},children:(0,o.jsx)(w.Z,{})}),(0,o.jsx)(a.ActionIcon,{color:"green",onClick:()=>{let n=document.createElement("a");n.target="_blank",n.href="http://".concat(e.ip,"/").concat(encodeURIComponent(e.sensorkey),"/data.csv"),n.click()},children:(0,o.jsx)(S.Z,{})})]}),(0,o.jsx)(v.Space,{h:"xs"}),(0,o.jsx)(g.w,{ref:n,h:400,data:t,dataKey:"i",series:i,withLegend:!0})]})}var P=t(87520),A=t(80021),O=t(32924),E=t(31921),L=t(11736),T=t(75036),D=t(91601),Z=t(51888),F=t(59629),W=t(91920),M=t(84926),N=t(43487),_=t(88220),U=t(93059);function R(){let[e,n]=(0,r.useState)(null),[t,l]=(0,r.useState)(WebSocket.CLOSED),[c,i]=(0,r.useState)({}),[s,u]=(0,r.useState)(50),[h,{open:x,close:j}]=(0,U.useDisclosure)(!1),p=(0,r.useRef)(s);p.current=s;let f=(0,Z.U)({initialValue:"localhost:8080",validateOnChange:!1,validate:function(t){return new Promise(o=>{try{null==e||e.close(),i({});let r=new WebSocket("ws://".concat(t));n(r),o(null)}catch(n){n instanceof DOMException&&n.message.includes("insecure")&&(null==e||e.close(),x()),console.error(n.code),o("Can't reach wiresense client. Check if IP is valid and client can be reached!")}})}});return(0,r.useEffect)(()=>(e&&(e.onopen=()=>l(WebSocket.OPEN),e.onclose=()=>l(WebSocket.CLOSED),e.onmessage=e=>{(function(e){let{key:n,data:t}=e;i(e=>{let o={...e};for(o[n]||(o[n]=[]),o[n].push(t);o[n].length>p.current;)o[n].shift();return o})})(JSON.parse(e.data),s)},e.onerror=n=>{l(WebSocket.CLOSED),null==e||e.close()}),()=>{null==e||e.close(),i({})}),[e]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(m,{}),(0,o.jsxs)(P.Modal,{opened:h,onClose:j,title:"Update Settings",centered:!0,children:[(0,o.jsx)(b.Text,{children:"Modern browsers prevent connections to ws (WebSocket) URLs when accessed from HTTPS sites due to security protocols. To resolve this issue and enable the tool&aps;s functionality, please follow our guides below to update your settings and allow these connections:"}),(0,o.jsxs)(A.Accordion,{multiple:!0,defaultValue:["undefined"!=typeof navigator&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)?"chrominum":null,"undefined"!=typeof InstallTrigger?"firefox":null].filter(e=>""!==e),children:[(0,o.jsxs)(A.Accordion.Item,{value:"chrominum",children:[(0,o.jsx)(A.Accordion.Control,{icon:(0,o.jsx)(F.Z,{}),children:"Chrome / Edge / Opera"}),(0,o.jsx)(A.Accordion.Panel,{children:(0,o.jsxs)(O.List,{type:"ordered",withPadding:!0,children:[(0,o.jsxs)(O.List.Item,{children:["Click on the padlock icon ",(0,o.jsx)(E.Code,{children:"\uD83D\uDD12"})," or the ",(0,o.jsx)(E.Code,{children:"Secure"})," label in the address bar."]}),(0,o.jsxs)(O.List.Item,{children:["Click on ",(0,o.jsx)(E.Code,{children:"Site settings"}),"; "]}),(0,o.jsxs)(O.List.Item,{children:["Under ",(0,o.jsx)(E.Code,{children:"Insecure conten"}),", select ",(0,o.jsx)(E.Code,{children:"Allow"})]})]})})]}),(0,o.jsxs)(A.Accordion.Item,{value:"firefox",children:[(0,o.jsx)(A.Accordion.Control,{icon:(0,o.jsx)(W.Z,{}),children:"Firefox"}),(0,o.jsx)(A.Accordion.Panel,{children:(0,o.jsxs)(O.List,{type:"ordered",withPadding:!0,children:[(0,o.jsxs)(O.List.Item,{children:["Open Firefox and type ",(0,o.jsx)(E.Code,{children:"about:config"})," in the address bar, then press Enter."]}),(0,o.jsx)(O.List.Item,{children:"Accept the risk warning if prompted."}),(0,o.jsxs)(O.List.Item,{children:["Search for ",(0,o.jsx)(E.Code,{children:"network.websocket.allowInsecureFromHTTPS"}),"."]}),(0,o.jsxs)(O.List.Item,{children:["Set ",(0,o.jsx)(E.Code,{children:"network.websocket.allowInsecureFromHTTPS"})," to ",(0,o.jsx)(E.Code,{children:"true"})," by double-clicking it or using the context menu."]})]})})]})]}),(0,o.jsx)(v.Space,{h:"xs"}),(0,o.jsx)(b.Text,{children:"If you're uncertain about making changes, you can always revert them later after using the tool."})]}),(0,o.jsxs)(C.Group,{justify:"center",grow:!0,children:[(0,o.jsx)(L.TextInput,{required:!0,...f.getInputProps(),variant:"filled",label:"IP of the Wiresense Client",placeholder:"localhost:8080",rightSection:t===WebSocket.OPEN?(0,o.jsx)(a.ActionIcon,{onClick:function(){null==e||e.close(),i({})},color:"red",children:(0,o.jsx)(M.Z,{})}):(0,o.jsx)(a.ActionIcon,{onClick:f.validate,children:(0,o.jsx)(N.Z,{})}),leftSection:t===WebSocket.OPEN?(0,o.jsx)(_.Z,{color:"green"}):(0,o.jsx)(M.Z,{color:"red"})}),(0,o.jsx)(T.NumberInput,{value:s,onChange:e=>{e>=5&&e<=100&&u(e)},min:5,max:100,label:"Max. ammount of data per graph"})]}),(0,o.jsx)(D.Divider,{my:"md",label:"Settings"}),(0,o.jsx)(d.Stack,{align:"stretch",children:Object.entries(c).map(e=>{let[n,t]=e;return(0,o.jsx)(I,{sensorkey:n,data:t,ip:f.getValue()},n)})})]})}}},function(e){e.O(0,[501,316,53,971,23,744],function(){return e(e.s=99870)}),_N_E=e.O()}]);