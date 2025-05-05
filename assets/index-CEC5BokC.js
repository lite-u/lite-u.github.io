import{j as e,S as ee,g as G,d as D,r as h,C as t,T as w,a as V,I as M,b as n,c as _,e as y,f as v,h as m,B as d,R as o,i as te,k as P,l as C,m as x,N as $,n as g,u as z,L as T,M as c,o as re,P as B,p as O,D as F,q as j,F as H,s as ie,t as N,v as I,O as U,w as ne,x as le,y as ae,z as k,A as oe}from"./vendor-CNJxqsU0.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const p of u)if(p.type==="childList")for(const f of p.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function l(u){const p={};return u.integrity&&(p.integrity=u.integrity),u.referrerPolicy&&(p.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?p.credentials="include":u.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function s(u){if(u.ep)return;u.ep=!0;const p=l(u);fetch(u.href,p)}})();const R=({code:r})=>e.jsx(ee,{language:"javascript",style:{...G,hljs:{...G.hljs,backgroundColor:"transparent"}},children:r}),L=({code:r,style:i,wrapStyle:l})=>{const s=D(r),[u,p]=h.useState(!1),[f,b]=h.useState(!1),q=async()=>{try{await navigator.clipboard.writeText(s),p(!0),setTimeout(()=>p(!1),1500)}catch(W){console.error("Failed to copy code:",W)}};return e.jsxs(t,{role:"code-wrap",onMouseEnter:()=>{b(!0)},onMouseLeave:()=>{b(!1)},style:{position:"relative",border:"1px solid #dfdfdf",width:"100%",padding:"15px 0 15px 20px",display:"flex",...l},children:[e.jsx(w,{visible:f,from:{scale:0},to:{scale:1},duration:200,style:{position:"absolute",right:10,top:10,display:"inline-flex",alignItems:"center",justifyContent:"center"},children:e.jsx(V,{placement:"t",title:u?"Copied":"Copy",children:e.jsx(M,{s:!0,title:u?"Copied":"Copy",onClick:q,style:{display:"inline-flex",alignItems:"center",justifyContent:"center",backgroundColor:"#393939"},children:u?e.jsx("span",{children:"✓"}):e.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 448 512",width:14,height:14,xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"})})})})}),e.jsx(t,{style:{backgroundColor:"#fff",borderRadius:2,overflow:"auto",...i},children:e.jsx(R,{code:s})})]})},se=()=>e.jsxs(n,{id:"installation",style:{marginTop:100},children:[e.jsx(_,{tag:"button",type:"reset",tabIndex:0,onFocus:()=>{},hover:{backgroundColor:"red"},focus:{backgroundColor:"blue"},active:{backgroundColor:"green"},children:"AAAA"}),e.jsxs(_,{tag:"div",tabIndex:0,onFocus:()=>{},hover:{backgroundColor:"red"},focus:{backgroundColor:"blue"},active:{backgroundColor:"green"},children:[e.jsx(y,{h2:!0,sticky:!0,children:"Installation"}),e.jsxs(v,{children:[e.jsx(m,{value:1,children:"1"}),e.jsx(m,{value:2,children:"2"}),e.jsx(m,{value:3,children:"3"})]}),e.jsx(V,{title:"Installation",children:e.jsx(d,{children:"Hello"})}),e.jsx(o,{children:e.jsx(L,{code:"npm install @lite-u/ui"})}),e.jsx(y,{h4:!0,children:"Import"}),e.jsx(o,{children:e.jsx(L,{code:`import LiteUIProvider from '@ui/index'

export const App() {
  return <LiteUIProvider>
    Your Code Block
  </LiteUIProvider>
}`})})]})]}),a=({title:r,children:i,replacement:l,style:s})=>{let u=l||te(i,{tabStop:2});return u=u.replace(/<(\w+)>\s*([^<]+?)\s*<\/\1>/g,(p,f,b)=>`<${f}>${b}</${f}>`),e.jsxs(t,{role:"usage-block",fz:14,fh:!0,fw:!0,border:!0,borderColor:"#bababa",textColor:"#333",rounded:!0,ib:!0,p:14,style:s,children:[r&&e.jsx("p",{children:r}),e.jsx(t,{mt:6,mb:20,h:0,style:{borderTop:"1px dashed #dfdfdf"}}),i,e.jsx(t,{mt:30,mb:10,h:0,style:{borderTop:"1px dashed #dfdfdf"}}),e.jsx(P,{open:!1,duration:200,exitDuration:100,head:e.jsx(V,{title:"Code",children:e.jsx(d,{xs:!0,style:{backgroundColor:"#f3f3f3"},children:"</>"})}),children:e.jsx(t,{pt:10,children:e.jsx(t,{fw:!0,border:!0,rounded:!0,children:e.jsx(L,{wrapStyle:{padding:0,border:"none",marginTop:10,maxHeight:200},code:`
 ${u}`})})})})]})},de=()=>e.jsxs(n,{id:"col",children:[e.jsxs(o,{space:10,mt:10,jc:!0,between:!0,start:!0,wrap:!0,children:[e.jsx(n,{children:e.jsx(a,{title:"XS Size",style:{flex:1},children:e.jsxs(C,{xs:!0,fixed:!0,children:[e.jsxs(x,{head:!0,children:[e.jsx("span",{children:"name"}),e.jsx("span",{children:"age"})]}),e.jsxs(x,{children:[e.jsx("span",{children:"Puma"}),e.jsx("span",{children:"1970"})]}),e.jsxs(x,{children:[e.jsx("span",{children:"Nike"}),e.jsx("span",{children:"1970"})]})]})})}),e.jsx(n,{children:e.jsx(a,{title:"Small Size",style:{flex:1},children:e.jsxs(C,{s:!0,children:[e.jsxs(x,{head:!0,children:[e.jsx("span",{children:"name"}),e.jsx("span",{children:"age"})]}),e.jsxs(x,{children:[e.jsx("span",{children:"Puma"}),e.jsx("span",{children:"1970"})]}),e.jsxs(x,{children:[e.jsx("span",{children:"Nike"}),e.jsx("span",{children:"1970"})]})]})})}),e.jsx(n,{children:e.jsx(a,{title:"Medium Size (default)",style:{flex:1},children:e.jsxs(C,{m:!0,children:[e.jsxs(x,{head:!0,children:[e.jsx("span",{children:"name"}),e.jsx("span",{children:"age"})]}),e.jsxs(x,{children:[e.jsx("span",{children:"Puma"}),e.jsx("span",{children:"1970"})]}),e.jsxs(x,{children:[e.jsx("span",{children:"Nike"}),e.jsx("span",{children:"1970"})]})]})})}),e.jsx(n,{children:e.jsx(a,{title:"Large Size",style:{flex:1},children:e.jsxs(C,{l:!0,children:[e.jsxs(x,{head:!0,children:[e.jsx("span",{children:"name"}),e.jsx("span",{children:"age"})]}),e.jsxs(x,{children:[e.jsx("span",{children:"Puma"}),e.jsx("span",{children:"1970"})]}),e.jsxs(x,{children:[e.jsx("span",{children:"Nike"}),e.jsx("span",{children:"1970"})]})]})})}),e.jsx(n,{children:e.jsx(a,{title:"Custom Style Table",style:{flex:1},children:e.jsxs(C,{xs:!0,fixed:!0,style:{borderCollapse:"collapse",border:"1px solid #dfdfdf"},rowHoverStyle:{backgroundColor:"orange"},cellStyle:{padding:0,border:"1px solid #ff0000"},children:[e.jsxs(x,{head:!0,style:{fontSize:16,color:"#fff",backgroundColor:"#1c285a"},children:[e.jsx("span",{style:{padding:10},children:"brand"}),e.jsx("span",{children:"price"})]}),Array.from({length:10}).map((r,i)=>e.jsxs(x,{style:{color:"#fff",backgroundColor:i%2?"#000":"#06852f"},children:[e.jsx("span",{children:i%2?"Nike":"Puma"}),e.jsxs("span",{children:[i+1e3,e.jsx("i",{children:"$"})]})]},i))]})})}),e.jsx(n,{children:e.jsx(a,{title:"Custom Style Table 2",style:{flex:1},children:e.jsxs(C,{xs:!0,fixed:!0,style:{borderCollapse:"collapse",border:"1px solid orange"},rowStyle:{backgroundColor:"#8361ea"},rowHoverStyle:{backgroundColor:"orange",color:"green"},cellStyle:{padding:0,border:"1px solid #ff0000"},children:[e.jsxs(x,{head:!0,style:{fontSize:16,color:"#fff",backgroundColor:"#1c285a"},children:[e.jsx("span",{style:{padding:10},children:"brand"}),e.jsx("span",{children:"price"})]}),e.jsxs(x,{style:{color:"#fff",backgroundColor:"#06852f"},children:[e.jsx("span",{style:{backgroundColor:"red",color:"blue",padding:20},children:"Nike"}),e.jsx("span",{children:"1970"})]}),e.jsxs(x,{children:[e.jsx("span",{children:"Nike"}),e.jsx("span",{children:"1970"})]})]})})})]}),e.jsxs(t,{fw:!0,mt:50,fz:16,children:["See also ",e.jsx($,{to:"/components/tablerow",children:"Table Row"})]})]}),ue=()=>e.jsx(t,{children:e.jsx(o,{center:!0,between:!0,children:e.jsx(t,{w:250,children:e.jsx(a,{title:"Neutral",children:e.jsxs(o,{between:!0,center:!0,space:2,children:[e.jsx(M,{children:"D"}),e.jsx(M,{xs:!0,children:"xs"}),e.jsx(M,{s:!0,children:"s"}),e.jsx(M,{m:!0,children:"M"}),e.jsx(M,{l:!0,children:"L"})]})})})})}),ce=()=>e.jsx(n,{children:e.jsxs(o,{start:!0,space:10,wrap:!0,children:[e.jsx(t,{w:200,children:e.jsx(a,{title:"xs",children:e.jsxs(n,{between:!0,center:!0,space:10,children:[e.jsx(g,{placeholder:"xs size default",xs:!0}),e.jsx(g,{placeholder:"xs size warn",warn:!0,xs:!0}),e.jsx(g,{placeholder:"xs size error",error:!0,xs:!0})]})})}),e.jsx(t,{w:200,children:e.jsx(a,{title:"Small",children:e.jsxs(n,{between:!0,center:!0,space:10,children:[e.jsx(g,{placeholder:"s size default",s:!0}),e.jsx(g,{placeholder:"s size warn",warn:!0,s:!0}),e.jsx(g,{placeholder:"s size error",error:!0,s:!0})]})})}),e.jsx(t,{w:220,children:e.jsx(a,{title:"Medium",children:e.jsxs(n,{between:!0,center:!0,space:10,children:[e.jsx(g,{placeholder:"m size default"}),e.jsx(g,{placeholder:"m size warn",warn:!0}),e.jsx(g,{placeholder:"m size error",error:!0})]})})}),e.jsx(t,{w:250,children:e.jsx(a,{title:"Large",children:e.jsxs(n,{between:!0,center:!0,space:10,children:[e.jsx(g,{placeholder:"L size default",l:!0}),e.jsx(g,{placeholder:"L size warn",warn:!0,l:!0}),e.jsx(g,{placeholder:"L size error",error:!0,l:!0})]})})}),e.jsx(t,{w:200,children:e.jsx(a,{title:"Number",children:e.jsxs(n,{between:!0,center:!0,space:10,children:[e.jsx(g,{number:!0,value:1,step:2,placeholder:"size default"}),e.jsx(g,{number:!0,value:1,step:2,placeholder:"size warn",warn:!0}),e.jsx(g,{number:!0,value:1,step:2,placeholder:"size error",error:!0})]})})}),e.jsx(t,{w:340,children:e.jsx(a,{title:"Label",children:e.jsxs(n,{between:!0,start:!0,space:10,children:[e.jsx(g,{label:"Brand： ",labelStyle:{width:50},step:2,placeholder:"Enter Brand"}),e.jsx(g,{label:"Price： ",labelStyle:{width:50},step:2,placeholder:"Enter Price",warn:!0}),e.jsx(g,{label:"SKU： ",labelStyle:{width:50},step:2,placeholder:"Enter SKU",error:!0})]})})})]})}),pe=()=>{const{add:r}=z(),[i,l]=h.useState("2");return e.jsx(n,{children:e.jsxs(o,{start:!0,space:10,wrap:!0,children:[e.jsx(t,{w:250,children:e.jsx(a,{title:"Sizes",children:e.jsxs(n,{space:10,children:[e.jsxs(o,{fw:!0,center:!0,children:[e.jsx(t,{mr:2,w:20,ib:!0,children:"xs "}),e.jsxs(v,{xs:!0,selectValue:"2",children:[e.jsx(m,{value:"1",children:"1"}),e.jsx(m,{value:"2",children:"2"}),e.jsx(m,{value:"3",children:"3"})]})]}),e.jsxs(o,{fw:!0,center:!0,children:[e.jsx(t,{mr:2,w:20,ib:!0,children:"s "}),e.jsxs(v,{s:!0,selectValue:"2",children:[e.jsx(m,{value:"1",children:"1"}),e.jsx(m,{value:"2",children:"2"}),e.jsx(m,{value:"3",children:"3"})]})]}),e.jsxs(o,{fw:!0,center:!0,children:[e.jsx(t,{mr:2,w:20,ib:!0,children:"m "}),e.jsxs(v,{selectValue:"2",children:[e.jsx(m,{value:"1",children:"1"}),e.jsx(m,{value:"2",children:"2"}),e.jsx(m,{value:"3",children:"3"})]})]}),e.jsxs(o,{fw:!0,center:!0,children:[e.jsx(t,{mr:2,w:20,ib:!0,children:"L "}),e.jsxs(v,{l:!0,selectValue:"2",children:[e.jsx(m,{value:"1",children:"1"}),e.jsx(m,{value:"2",children:"2"}),e.jsx(m,{value:"3",children:"3"})]})]})]})})}),e.jsx(t,{w:200,children:e.jsx(a,{title:"Long list",replacement:`
          <Row style={{zIndex: 60}} space={10} end>
            <Select l selectValue={'12'}>
              {
                Array.from({length: 100}).fill(undefined).map((_, index) => {
                  return <SelectItem key={index} value={(index + 1) + ''}>
                    <span>hello {index + 1}</span>
                  </SelectItem>
                })
              }
            </Select>
          </Row>
        `,children:e.jsx(o,{style:{zIndex:60},space:10,end:!0,children:e.jsx(v,{l:!0,selectValue:"12",children:Array.from({length:100}).fill(void 0).map((s,u)=>e.jsx(m,{value:u+1+"",children:e.jsxs("span",{children:["hello ",u+1]})},u))})})})}),e.jsx(t,{w:200,children:e.jsx(a,{title:"Custom Style",children:e.jsx(n,{space:10,w:100,children:e.jsxs(v,{s:!0,selectValue:"2",itemStyle:{color:"green",backgroundColor:"#000"},style:{width:166,color:"orange",backgroundColor:"green"},children:[e.jsx(m,{value:"1",children:"1"}),e.jsx(m,{value:"2",children:"2"}),e.jsx(m,{value:"3",children:"3"})]})})})}),e.jsx(t,{w:200,children:e.jsx(a,{title:"onSelectChange",children:e.jsx(n,{space:10,w:100,children:e.jsxs(v,{s:!0,selectValue:i,onSelectChange:s=>{r("New Value is: "+s),l(s)},children:[e.jsx(m,{value:"1",children:"1"}),e.jsx(m,{value:"2",children:"2"}),e.jsx(m,{value:"3",children:"3"})]})})})})]})})},fe=()=>e.jsx(n,{children:e.jsxs(o,{end:!0,space:10,children:[e.jsx(t,{w:300,children:e.jsx(a,{title:"Link",children:e.jsx(T,{style:{padding:"0px 20px"},target:"_blank",href:"/components/link",children:"Click Me To Open A Tab"})})}),e.jsx(t,{mt:20,w:300,children:e.jsx(a,{title:"Wrapped by a MenuItem",children:e.jsx(c,{children:e.jsx(T,{target:"_blank",href:"/components/link",children:"Click Me To Open A Tab"})})})})]})}),he=()=>e.jsx(n,{children:e.jsx(o,{end:!0,space:10,children:e.jsx(t,{w:300,children:e.jsx(a,{title:"Open Modal",replacement:`
          import {Button, Col, Con, Modal, Row} from '@lite-u/ui'

          const ModalSample: React.FC = () => {
            const [showModal, setShowModal] = useState(false)
          
            return <>
              <Button onClick={() => {
                setShowModal(true)
              }}>Open Modal</Button>
          
              {
                showModal && <Modal onBackdropClick={() => {
                  setShowModal(false)
                }}>
                      <Con w={'90%'} h={'90%'} bg={'white'}>
                          <Row fw fh center jc>
                              <Col center>
                                  <Button onClick={() => {
                                    setShowModal(false)
                                  }}>Close Modal</Button>
                              </Col>
                          </Row>
                      </Con>
                  </Modal>
              }
            </>
          }
        `,children:e.jsx(me,{})})})})}),me=()=>{const[r,i]=h.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(d,{onClick:()=>{i(!0)},children:"Open Modal"}),r&&e.jsx(re,{onBackdropClick:()=>{i(!1)},children:e.jsx(t,{w:"90%",h:"90%",bg:"white",children:e.jsx(o,{fw:!0,fh:!0,center:!0,jc:!0,children:e.jsx(n,{center:!0,children:e.jsx(d,{onClick:()=>{i(!1)},children:"Close Modal"})})})})})]})},xe=()=>e.jsx(n,{children:e.jsxs(o,{space:10,wrap:!0,children:[e.jsx(t,{w:200,children:e.jsx(a,{title:"xs",children:e.jsxs(B,{xs:!0,mb:10,title:"Title",children:[e.jsx("p",{children:"Content 1"}),e.jsx("p",{children:"Content 2"}),e.jsx("p",{children:"Content 3"})]})})}),e.jsx(t,{w:200,children:e.jsx(a,{title:"Small",children:e.jsxs(B,{s:!0,mb:10,title:"Title",children:[e.jsx("p",{children:"Content 1"}),e.jsx("p",{children:"Content 2"}),e.jsx("p",{children:"Content 3"})]})})}),e.jsx(t,{w:200,children:e.jsx(a,{title:"Medium",children:e.jsxs(B,{mb:10,title:"Title",children:[e.jsx("p",{children:"Content 1"}),e.jsx("p",{children:"Content 2"}),e.jsx("p",{children:"Content 3"})]})})}),e.jsx(t,{w:200,children:e.jsx(a,{title:"Large",children:e.jsxs(B,{l:!0,mb:10,title:"Title",children:[e.jsx("p",{children:"Content 1"}),e.jsx("p",{children:"Content 2"}),e.jsx("p",{children:"Content 3"})]})})})]})}),be=()=>e.jsx(n,{children:e.jsx(o,{space:10,wrap:!0,children:e.jsx(t,{w:300,children:e.jsx(a,{title:"Nested Containers",children:e.jsx(t,{w:200,h:200,p:20,bg:"#0064a5",children:e.jsx(t,{fh:!0,p:20,bg:"#088312",children:e.jsx(t,{fh:!0,p:20,bg:"#980808",children:e.jsx(t,{border:!0,rounded:!0,fh:!0,p:20,mr:10,bg:"#000",box:!1})})})})})})})}),ge=()=>e.jsx(n,{children:e.jsxs(o,{start:!0,space:10,wrap:!0,children:[e.jsx(t,{w:"auto",children:e.jsx(a,{title:"With Width",children:e.jsxs(o,{between:!0,center:!0,w:200,children:[e.jsx(d,{s:!0,primary:!0,children:"1"}),e.jsx(d,{s:!0,primary:!0,children:"2"}),e.jsx(d,{s:!0,primary:!0,children:"3"}),e.jsx(d,{s:!0,primary:!0,children:"4"})]})})}),e.jsx(t,{w:"auto",children:e.jsx(a,{title:"With Space",children:e.jsxs(o,{space:20,children:[e.jsx(d,{error:!0,children:"1"}),e.jsx(d,{error:!0,children:"2"}),e.jsx(d,{error:!0,children:"3"}),e.jsx(d,{error:!0,children:"4"})]})})}),e.jsx(t,{w:230,children:e.jsx(a,{title:"With Column",children:e.jsxs(o,{space:20,between:!0,w:200,h:200,children:[e.jsxs(n,{between:!0,fh:!0,children:[e.jsx(d,{children:"1"}),e.jsx(d,{children:"4"})]}),e.jsx(n,{fh:!0,center:!0,jc:!0,children:e.jsx(d,{children:"5"})}),e.jsxs(n,{between:!0,end:!0,fh:!0,children:[e.jsx(d,{children:"2"}),e.jsx(d,{children:"3"})]})]})})})]})}),ye=()=>e.jsx(n,{children:e.jsx(t,{w:200,children:e.jsx(a,{title:"Titles",children:e.jsxs(n,{stretch:!0,between:!0,children:[e.jsx(y,{h1:!0,textColor:"red",sticky:!0,style:{zIndex:100},children:"h1"}),e.jsx(y,{h2:!0,children:"h2"}),e.jsx(y,{h3:!0,children:"h3"}),e.jsx(y,{h4:!0,children:"h4"}),e.jsx(y,{h5:!0,children:"h5"}),e.jsx(y,{h6:!0,children:"h6"})]})})})}),je=()=>e.jsx(n,{children:e.jsx(o,{start:!0,space:10,wrap:!0,children:e.jsx(t,{w:180,children:e.jsx(a,{title:"Space 10",children:e.jsx(t,{border:!0,children:e.jsxs(O,{space:10,children:[e.jsx(c,{s:!0,children:"Copy"}),e.jsx(c,{s:!0,children:"Paste"}),e.jsx(c,{s:!0,children:"Cut"}),e.jsx(c,{s:!0,children:"Duplicate"}),e.jsx(c,{s:!0,children:"Delete"}),e.jsx(c,{s:!0,children:e.jsxs(o,{between:!0,children:[e.jsx("span",{children:"More"}),e.jsx("span",{})]})})]})})})})})}),we=()=>e.jsx(n,{children:e.jsx(o,{start:!0,space:10,wrap:!0,children:e.jsx(t,{w:"auto",children:e.jsx(a,{title:"Sizes",children:e.jsxs(n,{children:[e.jsx(c,{xs:!0,children:"XS size Menu Item "}),e.jsx(c,{s:!0,children:"Small size Menu Item "}),e.jsx(c,{children:"medium size Menu Item"}),e.jsx(c,{l:!0,children:"Large size Menu Item"})]})})})})}),Ve=()=>{const[r,i]=h.useState({bg:"#cab077",defaultBg:"#cab077",msg:"I accept PNG only",defaultMsg:"I accept PNG only"}),[l,s]=h.useState({bg:"#ab86cc",defaultBg:"#ab86cc",msg:"I accept IMAGE only",defaultMsg:"I accept IMAGE only"}),[u,p]=h.useState({bg:"#4de6d5",defaultBg:"#4de6d5",msg:"I accept ALL",defaultMsg:"I accept ALL"});return e.jsx(n,{children:e.jsx(o,{start:!0,space:10,wrap:!0,children:e.jsx(t,{maxW:700,w:"auto",children:e.jsx(a,{title:"Try to Drop File On Blocks",children:e.jsxs(o,{w:620,h:200,stretch:!0,space:10,children:[e.jsx(F,{accepts:["image/png"],onDropped:(f,b)=>{b&&i({...r,bg:"green",msg:f.dataTransfer.files[0].name})},onDragIsOver:f=>{i({...r,bg:f?"blue":"red",msg:f?"I Love PNG !":"I Love PNG ONLY"})},onDragIsLeave:()=>{i({...r,bg:r.defaultBg,msg:r.defaultMsg})},children:e.jsx(t,{fw:!0,fh:!0,tc:!0,bg:r.bg,children:e.jsx(o,{fh:!0,center:!0,jc:!0,children:e.jsx(j,{textColor:"white",children:r.msg})})})}),e.jsx(F,{accepts:["image/*"],onDropped:(f,b)=>{b&&s({...l,bg:"green",msg:f.dataTransfer.files[0].name})},onDragIsOver:f=>{s({...l,bg:f?"blue":"red",msg:f?"I Love IMAGE !":"I Love IMAGE ONLY"})},onDragIsLeave:()=>{s({...l,bg:l.defaultBg,msg:l.defaultMsg})},children:e.jsx(t,{fw:!0,fh:!0,tc:!0,bg:l.bg,children:e.jsx(o,{fh:!0,center:!0,jc:!0,children:e.jsx(j,{textColor:"white",children:l.msg})})})}),e.jsx(F,{onDropped:(f,b)=>{b&&p({...u,bg:"green",msg:f.dataTransfer.files[0].name})},onDragIsOver:f=>{p({...u,bg:f?"blue":"red",msg:f?"More And More !":"What Is This?"})},onDragIsLeave:()=>{p({...u,bg:u.defaultBg,msg:u.defaultMsg})},children:e.jsx(t,{fw:!0,fh:!0,tc:!0,bg:u.bg,children:e.jsx(o,{fh:!0,center:!0,jc:!0,children:e.jsx(j,{textColor:"white",children:u.msg})})})})]})})})})})},qe=()=>e.jsx(n,{children:e.jsxs(o,{start:!0,space:10,wrap:!0,children:[e.jsx(t,{w:200,children:e.jsx(a,{title:"Set Rotate",replacement:`
            const TransitionRotate = () => {
          const [visible, setVisible] = useState(false)
        
          return <Con w={100}>
            <Transition
              onMouseEnter={() => {
                setVisible(true)
              }}
              onMouseLeave={() => {
                setVisible(false)
              }}
              visible={visible}
              style={{width: 50, height: 50}}
              from={{rotate: '0deg'}}
              to={{rotate: '360deg'}}>
              <Row fw
                   fh
                   center
                   jc
                   bg={'#571881'}
                   rounded
                   border
              ></Row>
            </Transition>
        
          </Con>
        }
        `,children:e.jsx(o,{fw:!0,jc:!0,center:!0,children:e.jsx(Se,{})})})}),e.jsx(t,{w:300,children:e.jsx(a,{title:"Set Translates",replacement:`
            const TransitionTranslate = () => {
          const [visible, setVisible] = useState(false)
        
          return <Con>
            <Button s onClick={() => {
              setVisible(!visible)
            }}>Move</Button>
        
            <Transition
              visible={visible}
              style={{width: 50, height: 50}}
              from={{translate: '0 10px'}}
              to={{translate: '200px -20px'}}
            >
              <Row fw
                   fh
                   center
                   jc
                   bg={'#ac5353'}
                   border
                   rounded
              ></Row>
            </Transition>
        
          </Con>
        }
        `,children:e.jsx(Ce,{})})}),e.jsx(t,{w:200,children:e.jsx(a,{title:"Scale",replacement:`
            const TransitionScale = () => {
            const [visible, setVisible] = useState(false)
          
            return <div>
              <Transition visible={visible}
                          onMouseEnter={() => setVisible(true)}
                          onMouseLeave={() => setVisible(false)}
                          from={{opacity: .5, scale: 0.5}}
                          to={{opacity: 1, scale: 1}}>
                <Row jc center bg={'#0b2e71'} mt={10} w={100} h={100} border rounded></Row>
              </Transition>
            </div>
          }
        `,children:e.jsx(o,{fw:!0,jc:!0,center:!0,children:e.jsx(ve,{})})})}),e.jsx(t,{w:200,children:e.jsx(a,{title:"Position Fixed(Screen Center)",replacement:`
            const TransitionFixed = () => {
                const [visible, setVisible] = useState(false)
              
                return <Con w={100} h={100}>
                  <Button s onClick={() => {
                    setVisible(!visible)
                  }}>Toggle</Button>
                  <Con w={100} h={100} fixed tc t={'50%'} l={'50%'}
                       style={{
                         transform: 'translate(-50%, -50%)',
                         pointerEvents: visible ? 'auto' : 'none',
                         zIndex: 9999,
                       }}>
                    <Transition
                      from={{scale: 0}}
                      to={{scale: 1}}
                      visible={visible}>
                      <Flex w={100}
                            h={100}
                            alignItems="center"
                            justifyContent="center"
                            border
                            rounded
                            textColor={'#fff'}
                            bg={'#146e18'}>Center</Flex>
                    </Transition>
                  </Con>
                </Con>
              }
        `,children:e.jsx(Me,{})})}),e.jsx(t,{w:200,children:e.jsx(a,{title:"Delayed 1000ms",replacement:`
          const TransitionDelayed = () => {
            const [visible, setVisible] = useState(false)
          
            return <Con ml={10}>
              <Transition
                onMouseEnter={() => {
                  setVisible(true)
                }}
                onMouseLeave={() => {
                  setVisible(false)
                }}
                delay={1000}
                visible={visible}
                style={{width: 100, height: 30, backgroundColor: '#146e18', color: '#fff', overflow: 'hidden'}}
                from={{width: 100, height: 20}}
                to={{width: 140, height: 50}}>
                <Con p={2} bg={'#146e18'} textColor={'#fff'}>Hover On And Wait</Con>
              </Transition>
          
            </Con>
          }
        `,children:e.jsx(Te,{})})}),e.jsx(t,{w:200,children:e.jsx(a,{title:"Enter 3000ms, exit 4000ms",replacement:`
            const TransitionDuration = () => {
              const [visible, setVisible] = useState(false)
            
              return <Con ml={10}>
                <Transition
                  onMouseEnter={() => {
                    setVisible(true)
                  }}
                  onMouseLeave={() => {
                    setVisible(false)
                  }}
                  duration={3000}
                  exitDuration={4000}
                  visible={visible}
                  style={{width: 50, height: 50}}
                  from={{rotate: '0deg'}}
                  to={{rotate: '360deg'}}>
                  <Row fw
                       fh
                       center
                       jc
                       bg={'#8e7f34'}
                       rounded
                       border></Row>
                </Transition>
            
              </Con>
            }
        `,children:e.jsx(Ie,{})})}),e.jsx(t,{w:"auto",children:e.jsx(a,{title:"Callback Function",replacement:`
            const TransitionCallback = () => {
              const [visible, setVisible] = useState(false)
            
              useEffect(() => {
                let timer = setInterval(() => {
                  if (!visible) {
                    console.log('start')
                    setVisible(true)
                  }
                }, 1500)
            
                return () => {
                  clearInterval(timer)
                }
              }, [])
            
              return <Con ml={10}>
                <Con w={100} h={100} m={30}>
                  <Transition
                    visible={visible}
                    delay={100}
                    duration={200}
                    exitDuration={100}
                    from={{scale: 1, opacity: .8}}
                    to={{scale: .8, opacity: 1}}
                    onAnimationEntered={() => {
                      setVisible(false)
                      // console.log('onAnimationEntered')
                    }}
                    onAnimationExited={() => {
                      // setVisible(true)
                    }}>
                    <Transition
                      visible={visible}
                      delay={0}
                      duration={500}
                      exitDuration={100}
                      from={{scale: 1, opacity: .5}}
                      to={{scale: 1.2, opacity: 1}}>
                      <Row fw fh w={100} h={100} center jc fz={100}>❤️</Row>
                    </Transition>
                  </Transition>
                </Con>
              </Con>
            }
        `,children:e.jsx(Pe,{})})}),e.jsx(t,{w:300,children:e.jsx(a,{title:"Time Function - Cubic-Bezier",replacement:`
            const TransitionTimeFunction = () => {
              const [visible, setVisible] = useState(false)
            
              return <Con ml={10}>
                <Button s onClick={() => {
                  setVisible(!visible)
                }}>{visible ? 'Back' : 'Go'}</Button>
                <Con w={100} h={50}>
                  <Transition
                    visible={visible}
                    effect={'cubic-bezier(0.9, 0.5, 0.1, 1)'}
                    from={{
                      translate: '0 0',
                      transform: {
                        value: 'skewX(-20deg)',
                        delay: 100,
                      },
                    }}
                    to={{
                      translate: '100px 0',
                      transform: 'skewX(0deg)',
                    }}>
                    <Transition
                      visible={visible}
                      effect={'cubic-bezier(0.9, 0.5, 0.1, 1)'}
                      from={{translate: '0 0', transform: 'skewX(20deg)'}}
                      to={{
                        translate: {
                          value: '100px 0',
                          duration: 800,
                        },
                        transform: {
                          value: 'skewX(-20deg)',
                          duration: 800,
                        },
                      }}>
                      <Row fw fh mt={10} w={50} h={50} center jc bg={'#61984d'} rounded border/>
                    </Transition>
                  </Transition>
                </Con>
              </Con>
            }
        `,children:e.jsx(ke,{})})}),e.jsx(t,{w:"auto",children:e.jsx(a,{title:"Composition",replacement:`
          const TransitionComposition = () => {
            const [visible, setVisible] = useState(false)
          
            return <Con ml={10}>
              <Button s onClick={() => {
                setVisible(!visible)
              }}>Toggle</Button>
          
              <Con rela mt={20} w={100} h={100}>
                <Transition
                  visible={visible}
                  style={{position: 'absolute'}}
                  from={{
                    marginLeft: {
                      value: 0,
                      delay: 100,
                      duration: 100,
                    },
                    rotate: '0deg',
                    scale: 1,
                    background: '#3cb65d',
                    left: {
                      value: 0,
                      delay: 100,
                      duration: 200,
                    },
                  }}
                  to={{
                    marginLeft: {
                      value: -50,
                      delay: 0,
                      duration: 100,
                    },
                    backgroundColor: {
                      value: '#e80c0c',
                      delay: 100,
                      duration: 800,
                    },
                    scale: .5,
                    rotate: '180deg',
                    left: {
                      value: 200,
                      delay: 100,
                      duration: 300,
                    },
                  }}>
                  <Row fw
                       fh
                       w={50}
                       h={50}
                       center
                       jc
                       border>
                  </Row>
                </Transition>
              </Con>
            </Con>
          }
        `,children:e.jsx(ze,{})})})]})}),ve=()=>{const[r,i]=h.useState(!1);return e.jsx("div",{children:e.jsx(w,{visible:r,onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),from:{opacity:.5,scale:.5},to:{opacity:1,scale:1},children:e.jsx(o,{jc:!0,center:!0,bg:"#0b2e71",mt:10,w:100,h:100,border:!0,rounded:!0})})})},Ce=()=>{const[r,i]=h.useState(!1);return e.jsxs(t,{children:[e.jsx(d,{s:!0,onClick:()=>{i(!r)},children:"Move"}),e.jsx(w,{visible:r,style:{width:50,height:50},from:{translate:"0 10px"},to:{translate:"200px -20px"},children:e.jsx(o,{fw:!0,fh:!0,center:!0,jc:!0,bg:"#ac5353",border:!0,rounded:!0})})]})},Se=()=>{const[r,i]=h.useState(!1);return e.jsx(t,{w:100,children:e.jsx(w,{onMouseEnter:()=>{i(!0)},onMouseLeave:()=>{i(!1)},visible:r,style:{width:50,height:50},from:{rotate:"0deg"},to:{rotate:"360deg"},children:e.jsx(o,{fw:!0,fh:!0,center:!0,jc:!0,bg:"#571881",rounded:!0,border:!0})})})},Me=()=>{const[r,i]=h.useState(!1);return e.jsxs(t,{w:100,h:100,children:[e.jsx(d,{s:!0,onClick:()=>{i(!r)},children:"Toggle"}),e.jsx(t,{w:100,h:100,fixed:!0,tc:!0,t:"50%",l:"50%",style:{transform:"translate(-50%, -50%)",pointerEvents:r?"auto":"none",zIndex:9999},children:e.jsx(w,{from:{scale:0},to:{scale:1},visible:r,children:e.jsx(H,{w:100,h:100,alignItems:"center",justifyContent:"center",border:!0,rounded:!0,textColor:"#fff",bg:"#146e18",children:"Center"})})})]})},Te=()=>{const[r,i]=h.useState(!1);return e.jsx(t,{ml:10,children:e.jsx(w,{onMouseEnter:()=>{i(!0)},onMouseLeave:()=>{i(!1)},delay:1e3,visible:r,style:{width:100,height:30,backgroundColor:"#146e18",color:"#fff",overflow:"hidden"},from:{width:100,height:20},to:{width:140,height:50},children:e.jsx(t,{p:2,bg:"#146e18",textColor:"#fff",children:"Hover On And Wait"})})})},Ie=()=>{const[r,i]=h.useState(!1);return e.jsx(t,{ml:10,children:e.jsx(w,{onMouseEnter:()=>{i(!0)},onMouseLeave:()=>{i(!1)},duration:3e3,exitDuration:4e3,visible:r,style:{width:50,height:50},from:{rotate:"0deg"},to:{rotate:"360deg"},children:e.jsx(o,{fw:!0,fh:!0,center:!0,jc:!0,bg:"#8e7f34",rounded:!0,border:!0})})})},ke=()=>{const[r,i]=h.useState(!1);return e.jsxs(t,{ml:10,children:[e.jsx(d,{s:!0,onClick:()=>{i(!r)},children:r?"Back":"Go"}),e.jsx(t,{w:100,h:50,children:e.jsx(w,{visible:r,effect:"cubic-bezier(0.9, 0.5, 0.1, 1)",from:{translate:"0 0",transform:{value:"skewX(-20deg)",delay:100}},to:{translate:"100px 0",transform:"skewX(0deg)"},children:e.jsx(w,{visible:r,effect:"cubic-bezier(0.9, 0.5, 0.1, 1)",from:{translate:"0 0",transform:"skewX(20deg)"},to:{translate:{value:"100px 0",duration:800},transform:{value:"skewX(-20deg)",duration:800}},children:e.jsx(o,{fw:!0,fh:!0,mt:10,w:50,h:50,center:!0,jc:!0,bg:"#61984d",rounded:!0,border:!0})})})})]})},Pe=()=>{const[r,i]=h.useState(!1);return h.useEffect(()=>{let l=setInterval(()=>{r||i(!0)},1500);return()=>{clearInterval(l)}},[]),e.jsx(t,{ml:10,children:e.jsx(t,{w:100,h:100,m:30,children:e.jsx(w,{visible:r,delay:100,duration:200,exitDuration:100,from:{scale:1,opacity:.8},to:{scale:.8,opacity:1},onAnimationEntered:()=>{i(!1)},onAnimationExited:()=>{},children:e.jsx(w,{visible:r,delay:0,duration:500,exitDuration:100,from:{scale:1,opacity:.5},to:{scale:1.2,opacity:1},children:e.jsx(o,{fw:!0,fh:!0,w:100,h:100,center:!0,jc:!0,fz:100,children:"❤️"})})})})})},ze=()=>{const[r,i]=h.useState(!1);return e.jsxs(t,{ml:10,children:[e.jsx(d,{s:!0,onClick:()=>{i(!r)},children:"Toggle"}),e.jsx(t,{rela:!0,mt:20,w:100,h:100,children:e.jsx(w,{visible:r,style:{position:"absolute"},from:{marginLeft:{value:0,delay:100,duration:100},rotate:"0deg",scale:1,background:"#3cb65d",left:{value:0,delay:100,duration:200}},to:{marginLeft:{value:-50,delay:0,duration:100},backgroundColor:{value:"#e80c0c",delay:100,duration:800},scale:.5,rotate:"180deg",left:{value:200,delay:100,duration:300}},children:e.jsx(o,{fw:!0,fh:!0,w:50,h:50,center:!0,jc:!0,border:!0})})})]})},Be=()=>e.jsx(t,{children:e.jsx(t,{w:300,children:e.jsx(a,{title:"Placements",children:e.jsxs(n,{stretch:!0,between:!0,h:300,children:[e.jsxs(o,{between:!0,children:[e.jsx(V,{placement:"tl",title:"hello world",children:e.jsx(d,{children:"tl"})}),e.jsx(V,{placement:"t",bgColor:"green",textColor:"red",title:"helloworldhelloworldhello world",children:e.jsx(d,{children:"t"})}),e.jsx(V,{placement:"tr",title:"hello world",children:e.jsx(d,{children:"tr"})})]}),e.jsxs(o,{between:!0,children:[e.jsx(V,{placement:"l",title:"hello world",children:e.jsx(d,{children:"l"})}),e.jsx(t,{}),e.jsx(V,{placement:"r",title:"hello world",children:e.jsx(d,{children:"r"})})]}),e.jsxs(o,{between:!0,children:[e.jsx(V,{placement:"bl",title:"hello world",children:e.jsx(d,{children:"bl"})}),e.jsx(V,{placement:"b",title:"hello world",children:e.jsx(d,{children:"b"})}),e.jsx(V,{placement:"br",title:"hello world",children:e.jsx(d,{children:"br"})})]})]})})})}),He=()=>e.jsxs(n,{id:"col",children:[e.jsx(n,{w:200,children:e.jsx(a,{title:"XS Size",style:{flex:1},children:e.jsxs(C,{xs:!0,children:[e.jsxs(x,{head:!0,children:[e.jsx("h1",{children:"name"}),e.jsx("h2",{children:"age"})]}),e.jsxs(x,{children:[e.jsx("div",{children:"Puma"}),e.jsx("p",{children:"1970"})]}),e.jsxs(x,{children:[e.jsx("span",{children:"Nike"}),e.jsx("span",{children:"1970"})]})]})})}),e.jsxs(t,{mt:50,fz:16,children:["See also ",e.jsx($,{to:"/components/table",children:"Table"})]})]}),Re=()=>{const r=["xs","s","m","l"];return e.jsx(n,{id:"col",children:e.jsxs(o,{space:10,mt:10,maxW:500,wrap:!0,children:[e.jsx(n,{maxW:260,children:e.jsx(a,{title:"Neutral",children:e.jsx(o,{between:!0,end:!0,space:10,children:r.map(i=>{const l={[i]:!0};return e.jsx(d,{...l,children:i},i)})})})}),e.jsx(n,{maxW:260,children:e.jsx(a,{title:"Primary",children:e.jsx(o,{between:!0,end:!0,space:10,children:r.map(i=>{const l={[i]:!0};return e.jsx(d,{primary:!0,...l,children:i},i)})})})}),e.jsx(n,{maxW:260,children:e.jsx(a,{title:"Warn",children:e.jsx(o,{between:!0,end:!0,space:10,children:r.map(i=>{const l={[i]:!0};return e.jsx(d,{warn:!0,...l,children:i},i)})})})}),e.jsx(n,{maxW:260,children:e.jsx(a,{title:"Error",children:e.jsx(o,{between:!0,end:!0,space:10,children:r.map(i=>{const l={[i]:!0};return e.jsx(d,{error:!0,...l,children:i},i)})})})})]})})},Le=()=>e.jsx(n,{children:e.jsx(o,{start:!0,space:10,wrap:!0,children:e.jsx(t,{w:"auto",children:e.jsx(a,{title:"Titles",children:e.jsx(o,{w:400,children:e.jsxs(n,{fw:!0,stretch:!0,children:[e.jsx(j,{size:10,textColor:"gray",children:" Font size 10 "}),e.jsx(j,{size:12,textColor:"gray",children:" Font size 12 "}),e.jsx(j,{size:14,textColor:"gray",children:" Font size 14 "}),e.jsx(j,{size:16,textColor:"gray",children:" Font size 16 "}),e.jsx(j,{size:18,textColor:"gray",children:" Font size 18 "}),e.jsx(j,{size:20,textColor:"gray",children:" Font size 20 "}),e.jsx(j,{size:30,textColor:"gray",children:" Font size 30 "}),e.jsx(j,{size:40,textColor:"gray",children:" Font size 40 "}),e.jsx(j,{size:60,textColor:"gray",children:" Font size 60 "}),e.jsx(j,{size:20,center:!0,textColor:"gray",children:"Centered Paragraph"})]})})})})})}),Ee=()=>e.jsx(n,{children:e.jsxs(o,{start:!0,space:10,wrap:!0,children:[e.jsx(t,{w:200,children:e.jsx(a,{title:"With Height",children:e.jsxs(n,{border:!0,around:!0,center:!0,h:200,children:[e.jsx(d,{s:!0,primary:!0,children:"1"}),e.jsx(d,{s:!0,primary:!0,children:"2"}),e.jsx(d,{s:!0,primary:!0,children:"3"}),e.jsx(d,{s:!0,primary:!0,children:"4"})]})})}),e.jsx(t,{w:200,children:e.jsx(a,{title:"With Space",children:e.jsxs(n,{border:!0,center:!0,space:10,children:[e.jsx(d,{error:!0,children:"1"}),e.jsx(d,{error:!0,children:"2"}),e.jsx(d,{error:!0,children:"3"}),e.jsx(d,{error:!0,children:"4"})]})})}),e.jsx(t,{w:"auto",children:e.jsx(a,{title:"With Row",children:e.jsxs(o,{border:!0,p:10,m:"0 auto",w:115,h:150,space:2,center:!0,fz:30,textColor:"red",children:[e.jsxs(n,{start:!0,fh:!0,fz:18,children:[e.jsx("p",{children:" 8 "}),e.jsx("p",{children:" ♥ "})]}),e.jsxs(n,{center:!0,jc:!0,fh:!0,space:10,children:[e.jsx("p",{children:" ♥ "}),e.jsx("p",{children:" ♥ "}),e.jsx("p",{children:" ♥ "})]}),e.jsxs(n,{h:60,center:!0,jc:!0,fh:!0,children:[e.jsx("p",{children:" ♥ "}),e.jsx("p",{children:" ♥ "})]}),e.jsxs(n,{center:!0,jc:!0,fh:!0,space:10,children:[e.jsx("p",{children:" ♥ "}),e.jsx("p",{children:" ♥ "}),e.jsx("p",{children:" ♥ "})]}),e.jsxs(n,{je:!0,end:!0,fh:!0,fz:18,children:[e.jsx("p",{children:" ♥ "}),e.jsx("p",{children:" 8 "})]})]})})})]})}),Ne=()=>e.jsx(t,{children:e.jsx(t,{w:300,children:e.jsxs(o,{between:!0,space:10,children:[e.jsx(a,{title:"Default Opened",children:e.jsx(t,{w:200,children:e.jsx(o,{between:!0,border:!0,children:e.jsx(P,{head:e.jsx(c,{hoverStyle:{backgroundColor:"#012a57",color:"orange"},style:{backgroundColor:"#aa7474",color:"#fff"},children:"toggle"}),children:e.jsxs(O,{children:[e.jsx(c,{children:"1"}),e.jsx(c,{children:"2"}),e.jsx(c,{children:"3"}),e.jsx(c,{children:"4"}),e.jsx(c,{children:"5"})]})})})})}),e.jsx(a,{title:"Toggle",children:e.jsx(t,{w:200,children:e.jsx(o,{between:!0,border:!0,children:e.jsx(P,{open:!1,head:e.jsx(c,{children:"toggle"}),children:e.jsxs(O,{children:[e.jsx(c,{children:"1"}),e.jsx(c,{children:"2"}),e.jsx(c,{children:"3"}),e.jsx(c,{children:"4"}),e.jsx(c,{children:"5"})]})})})})})]})})}),A={table:{to:"table",name:"Table",apiNameKey:"Table",comp:e.jsx(de,{})},tablerow:{to:"tablerow",name:"Table Row",apiNameKey:"TableRow",comp:e.jsx(He,{})},button:{to:"button",name:"Button",apiNameKey:"Button",comp:e.jsx(Re,{})},iconbutton:{to:"iconbutton",name:"IconButton",apiNameKey:"IconButton",comp:e.jsx(ue,{})},input:{to:"input",name:"Input",apiNameKey:"Input",comp:e.jsx(ce,{})},select:{to:"select",name:"Select",apiNameKey:"Select",comp:e.jsx(pe,{})},link:{to:"link",name:"Link",apiNameKey:"Link",comp:e.jsx(fe,{})},modal:{to:"modal",name:"Modal",apiNameKey:"Modal",comp:e.jsx(he,{})},panel:{to:"panel",name:"Panel",apiNameKey:"Panel",comp:e.jsx(xe,{})},container:{to:"container",name:"Container",apiNameKey:"Container",comp:e.jsx(be,{})},row:{to:"row",name:"Row",apiNameKey:"Row",comp:e.jsx(ge,{})},column:{to:"column",name:"Column",apiNameKey:"Column",comp:e.jsx(Ee,{})},title:{to:"title",name:"Title",apiNameKey:"Title",comp:e.jsx(ye,{})},paragraph:{to:"paragraph",name:"Paragraph",apiNameKey:"Paragraph",comp:e.jsx(Le,{})},menu:{to:"menu",name:"Menu",apiNameKey:"Menu",comp:e.jsx(je,{})},menuitem:{to:"menuitem",name:"MenuItem",apiNameKey:"MenuItem",comp:e.jsx(we,{})},drop:{to:"drop",name:"Drop",apiNameKey:"Drop",comp:e.jsx(Ve,{})},transition:{to:"transition",name:"Transition",apiNameKey:"Transition",comp:e.jsx(qe,{})},tooltip:{to:"tooltip",name:"Tooltip",apiNameKey:"Tooltip",comp:e.jsx(Be,{})},collapse:{to:"collapse",name:"Collapse",apiNameKey:"Collapse",comp:e.jsx(Ne,{})}},E=({children:r,...i})=>e.jsx("div",{role:"markdown-block",...i,children:e.jsx(ie,{components:{code({children:l}){return e.jsx("span",{style:{padding:"2px 4px",borderRadius:3,color:" #000000",backgroundColor:"#dfdfdf",fontFamily:"monospace",fontSize:".9em"},children:l})}},children:r})}),K=({data:r})=>{if(!r)return null;const i={color:"#044e95",width:"100%",textAlign:"center",paddingLeft:10},l={maxWidth:300,width:"100%",textAlign:"left",paddingLeft:10,whiteSpace:"wrap"};return e.jsx(t,{mb:20,children:e.jsxs(C,{fw:!0,fh:!0,xs:!0,style:{fontSize:13},cellStyle:{whiteSpace:"pre-wrap",wordWrap:"break-word",wordBreak:"break-word",minWidth:100,maxWidth:300},children:[e.jsxs(x,{head:!0,children:[e.jsx(j,{style:i,textColor:"#292929",children:"Property"}),e.jsx("span",{children:"type"}),e.jsx("span",{children:"Default Value"}),e.jsx("span",{children:"required"}),e.jsx("p",{style:l,children:"description"})]}),Object.keys(r).map((s,u)=>{let{type:p,required:f,defaultValue:b,description:q}=r[s],W=b==="true"||b==="false";return e.jsxs(x,{children:[e.jsx("span",{style:{...i,fontFamily:"monospace"},children:s}),e.jsx(R,{code:p}),W?e.jsx("span",{style:{fontFamily:"monospace",color:b==="true"?"#22863a":"#a52525"},children:b}):e.jsx(t,{fz:14,pl:4,style:{...l,lineHeight:"1.5rem"},children:e.jsx(E,{style:{textAlign:"center"},children:`${b}`})}),e.jsx("span",{style:{fontFamily:"monospace",color:f?"#22863a":"#a52525"},children:f.toString()}),e.jsx(t,{fz:14,pl:4,style:{...l,lineHeight:"1.5rem"},children:e.jsx(E,{children:q})})]},u)})]})})},Ae=()=>{const r={comp:{required:!0,defaultValue:"\\-",type:"ReactNode",description:"The content to display in the notification."},type:{required:!1,defaultValue:'"info"',type:'"info" | "suc" | "warn" | "error"',description:"Notification type"},delay:{required:!1,defaultValue:2e3,type:"number | false",description:"Time in milliseconds before auto-removal. Use false to disable timeout."},Return:{required:!1,defaultValue:"\\-",type:"string",description:"Returns A unique ID for the notification"}};return e.jsxs(n,{children:[e.jsxs(o,{start:!0,space:10,wrap:!0,children:[e.jsx(t,{w:200,children:e.jsx(a,{title:"New One",replacement:`
          const NotificationSampleSimple: React.FC = () => {
            const {add} = useNotification()
          
            return <Col between>
              <Button onClick={() => { add('Hello: ' + new Date().toLocaleString('en-US')) }}>Show</Button>
            </Col>
          }
        `,children:e.jsx(We,{})})}),e.jsx(t,{w:200,children:e.jsx(a,{title:"Toggle a Notification",replacement:`
          const NotificationSampleToggle: React.FC = () => {
            const {add, remove} = useNotification()
            const notificationId = useRef<string>(undefined)
          
            useEffect(() => {
              return () => {
                if (notificationId.current) {
                  remove(notificationId.current)
                }
              }
            }, [])
          
            return <Col between>
              {
                !notificationId.current ?
                  <Button primary onClick={() => {
                    if (notificationId.current) {
                      remove(notificationId.current)
                    }
                    notificationId.current = add(
                      'A notification that stays centered on the screen until it is manually removed.',
                      'info',
                      false,
                    )
                  }}>Show</Button>
                  :
                  <Button primary onClick={() => {
                    remove(notificationId.current as string)
                    notificationId.current = undefined
                  }}>Hide</Button>
              }
          
            </Col>
          }
        `,children:e.jsx(Fe,{})})}),e.jsx(t,{w:320,children:e.jsx(a,{title:"Notification Types",replacement:`
        const NotificationSampleType: React.FC = () => {
          const {add} = useNotification()
        
          return <Row between>
            <Button onClick={() => { add('Hello', 'info') }}>Normal</Button>
            <Button primary onClick={() => { add('Hello', 'suc') }}>Warn</Button>
            <Button warn onClick={() => { add('Hello', 'warn') }}>Warn</Button>
            <Button error onClick={() => { add('Warning', 'error') }}>Error</Button>
          </Row>
        }
          `,children:e.jsx(De,{})})}),e.jsx(t,{w:200,children:e.jsx(a,{title:"Pass in a Component",replacement:`
                    const NotificationSampleComp: React.FC = () => {
                      const {add, remove} = useNotification()
                      const notificationId = useRef<string>(undefined)
                    
                      const NotificationComp = () => {
                        return <Con w={100} h={100}>
                          <Con abs ovh w={'auto'} r={5} t={5}>
                            <IconButton xs onClick={() => {
                              remove(notificationId.current as string)
                              notificationId.current = ''
                            }}>&times;</IconButton>
                          </Con>
                    
                          <Title>Title</Title>
                          <Title>Hello</Title>
                        </Con>
                      }
                    
                      return <Col between>
                        <Button disabled={!!notificationId.current} primary onClick={() => {
                          if (notificationId.current) {
                            return
                          }
                          notificationId.current = add(
                            <NotificationComp/>,
                            'info',
                            false,
                          )
                        }}>Show</Button>
                      </Col>
                    }
                    `,children:e.jsx(Oe,{})})})]}),e.jsx(t,{mt:100,mb:40,children:e.jsxs(n,{w:"auto",children:[e.jsx(T,{href:"#api",children:"# API"}),e.jsx(t,{mt:30,mb:40}),e.jsx(y,{h5:!0,children:"Add"}),e.jsx(R,{code:D(`
          const id = add(comp, type?, delay? )  
        `)}),e.jsx(t,{mb:30}),e.jsx(K,{data:r}),e.jsx(t,{mt:30,mb:40}),e.jsx(y,{h5:!0,children:"Remove"}),e.jsx(R,{code:D(`
          const id = add(comp, type?, delay? )  
          
          remove(id)
        `)}),e.jsx(t,{mb:30}),e.jsx(K,{data:{id:{required:!0,defaultValue:"\\-",type:"string",description:"ID of the notification to remove."}}})]})})]})},We=()=>{const{add:r}=z();return e.jsx(n,{between:!0,children:e.jsx(d,{onClick:()=>{r("Hello: "+new Date().toLocaleString("en-US"))},children:"Show"})})},Fe=()=>{const{add:r,remove:i}=z(),l=h.useRef(void 0);return h.useEffect(()=>()=>{l.current&&i(l.current)},[]),e.jsx(n,{between:!0,children:l.current?e.jsx(d,{primary:!0,onClick:()=>{i(l.current),l.current=void 0},children:"Hide"}):e.jsx(d,{primary:!0,onClick:()=>{l.current&&i(l.current),l.current=r("A notification that stays centered on the screen until it is manually removed.","info",!1)},children:"Show"})})},De=()=>{const{add:r}=z();return e.jsxs(o,{between:!0,children:[e.jsx(d,{onClick:()=>{r("Hello","info")},children:"Normal"}),e.jsx(d,{primary:!0,onClick:()=>{r("Hello","suc")},children:"Warn"}),e.jsx(d,{warn:!0,onClick:()=>{r("Hello","warn")},children:"Warn"}),e.jsx(d,{error:!0,onClick:()=>{r("Warning","error")},children:"Error"})]})},Oe=()=>{const{add:r,remove:i}=z(),l=h.useRef(void 0),s=()=>e.jsxs(t,{w:100,h:100,children:[e.jsx(t,{abs:!0,ovh:!0,w:"auto",r:5,t:5,children:e.jsx(M,{xs:!0,onClick:()=>{i(l.current),l.current=""},children:"×"})}),e.jsx(y,{children:"Title"}),e.jsx(y,{children:"Hello"})]});return e.jsx(n,{between:!0,children:e.jsx(d,{disabled:!!l.current,primary:!0,onClick:()=>{l.current||(l.current=r(e.jsx(s,{}),"info",!1))},children:"Show"})})},J={notification:{to:"notification",name:"Notification",apiNameKey:"NotificationProvider",comp:e.jsx(Ae,{})}},Ke=()=>{const{pathname:r,hash:i}=N(),l=h.useRef(null);return h.useEffect(()=>{if(l.current){if(r.split("/").length===3)if(i){const p=document.querySelector(i);p==null||p.scrollIntoView()}else l.current.scroll(0,0);document.title="@lite-u/ui Library"}},[r]),e.jsxs(H,{col:!0,fw:!0,fh:!0,ovh:!0,children:[e.jsx(H,{justifyContent:"between",style:{borderBottom:"1px solid gray"},children:e.jsx("header",{style:{height:50},children:"header"})}),e.jsxs(H,{fh:!0,ovh:!0,children:[e.jsxs(t,{fh:!0,w:300,style:{overflowY:"auto",boxShadow:"0px 0 4px 0px #b0b0b0"},children:[e.jsx(c,{children:e.jsx(I,{to:"installation",children:"Installation"})}),e.jsx(P,{head:e.jsx(c,{style:{flex:1},children:"Components"}),children:Object.values(A).map((s,u)=>e.jsx(X,{to:`components/${s.to}`,name:s.name},u))}),e.jsx(P,{head:e.jsx(c,{style:{flex:1},children:"Hooks"}),children:Object.values(J).map((s,u)=>e.jsx(X,{to:`hooks/${s.to}`,name:s.name},u))}),e.jsx(c,{s:!0,children:e.jsx(I,{to:"compatibility",children:"Compatibility"})}),e.jsx(c,{s:!0,children:e.jsx(I,{to:"accessibility",children:"Accessibility"})}),e.jsx(c,{s:!0,children:e.jsx(I,{to:"i18n",children:"I18n"})}),e.jsx(c,{s:!0,children:e.jsx(I,{to:"responsible",children:"Responsible Design"})}),e.jsx(c,{s:!0,children:e.jsx(I,{to:"tree",children:"Tree Shaking"})})]}),e.jsx(n,{ref:l,role:"app-main",fw:!0,fh:!0,ova:!0,maxH:"100%",children:e.jsx(n,{style:{padding:"0 50px"},children:e.jsx(U,{})})})]})]})},X=({to:r,name:i})=>e.jsx(c,{s:!0,style:{padding:0,width:"100%"},children:e.jsx($,{style:({isActive:l})=>({backgroundColor:l?"#0a2e71":"transparent",color:l?"#fff":"#000",width:"100%",height:"100%",paddingLeft:30,display:"block"}),to:r,children:e.jsx(n,{tl:!0,fh:!0,jc:!0,children:i})})}),Y=({apiData:r})=>Object.keys(r).length===0?null:e.jsx(t,{mt:100,mb:40,children:e.jsxs(n,{w:"auto",children:[e.jsx(y,{h4:!0,id:"api",children:e.jsx(T,{href:"#api",children:"# API"})}),e.jsx(t,{mb:30}),e.jsx(K,{data:r})]})}),$e={tags:{brief:"A styled dropdown (select) component.",intro:"Renders a `<select>` like element styled according to theme context. Supports multiple sizes\nand validation states.",example:`import { Select } from '@lite-u/ui'

<Select s defaultValue={'2'}>
  <SelectItem value={'1'}>1</SelectItem>
  <SelectItem value={'2'}>2</SelectItem>
  <SelectItem value={'3'}>3</SelectItem>
</Select>`},props:{xs:{type:"boolean",required:!1,defaultValue:"false",description:"Extra small size variant for the select."},s:{type:"boolean",required:!1,defaultValue:"false",description:"Small size variant for the select."},m:{type:"boolean",required:!1,defaultValue:"true",description:"Medium size variant for the select."},l:{type:"boolean",required:!1,defaultValue:"false",description:"Large size variant for the select."},itemStyle:{type:"CSSProperties",required:!1,defaultValue:"{}",description:"Custom styles applied to each `SelectItem` within the dropdown."},selectValue:{type:"string | number",required:!1,defaultValue:"\\-",description:"The initial selected value of the select component."},onSelectChange:{type:"(value: string | number) => void",required:!1,defaultValue:"\\-",description:`Callback fired when the selected value changes.
Receives the new value as a string or number.`}}},Ue={tags:{brief:"An individual selectable item used within the Select dropdown.",intro:"Displays a styled item that responds to click and keyboard interactions. Automatically highlights when selected.\nMust be used inside a `Select` component to inherit context.",example:`import { Select, SelectItem } from '@lite-u/ui'

<Select>
  <SelectItem value="1">Option 1</SelectItem>
  <SelectItem value="2">Option 2</SelectItem>
</Select>`},props:{}},Je={tags:{},props:{}},Ge={tags:{brief:"A customizable button component that supports size and color variants.",intro:"Supports four sizes (xs, s, m, l) and four variants (primary, neutral, warn, error).",example:`import { Button } from '@lite-u/ui'

<Button>Default</Button>
<Button primary xs>Confirm</Button>
<Button error l>Delete</Button>`},props:{xs:{type:"boolean",required:!1,defaultValue:"false",description:"Extra small button. Sizing depends on theme."},s:{type:"boolean",required:!1,defaultValue:"false",description:"Small button. Sizing depends on theme."},m:{type:"boolean",required:!1,defaultValue:"true",description:"Medium button. Sizing depends on theme."},l:{type:"boolean",required:!1,defaultValue:"false",description:"Large button. Sizing depends on theme."},primary:{type:"boolean",required:!1,defaultValue:"false",description:"If true, applies the primary color style."},neutral:{type:"boolean",required:!1,defaultValue:"true",description:"If true, applies the neutral color style."},warn:{type:"boolean",required:!1,defaultValue:"false",description:"If true, applies the warning color style."},error:{type:"boolean",required:!1,defaultValue:"false",description:"If true, applies the error color style."}}},_e={tags:{brief:"A square-shaped button designed to contain only an icon, not text.",intro:`Renders a circular or square icon-only button with predefined size variants.
Supports four sizes and applies consistent styling from theme context.`,example:`import { IconButton } from '@lite-u/ui'
import { Icon } from '@lite-u/icons'

<IconButton s onClick={handleClick}>
  <Icon name="search" />
</IconButton>`},props:{xs:{type:"boolean",required:!1,defaultValue:"false",description:"Applies the extra small size variant to the button."},s:{type:"boolean",required:!1,defaultValue:"false",description:"Applies the small size variant to the button."},m:{type:"boolean",required:!1,defaultValue:"true",description:"Applies the small size variant to the button."},l:{type:"boolean",required:!1,defaultValue:"false",description:"Applies the large size variant to the button."}}},Xe={tags:{brief:"A stylized input field supporting text and number types with size and color variants.",intro:`Renders either a text or number input with support for theming, sizing, and validation states.
Styling is pulled from the Lite UI theme context and adjusted according to provided props.`,example:`import { Input } from '@lite-u/ui'

<Input placeholder="Your name" />
<Input number step={0.1} error />
<Input label="Username" s primary />`},props:{label:{type:"string",required:!1,defaultValue:"''",description:"Optional label to display as the `<label>`."},xs:{type:"boolean",required:!1,defaultValue:"false",description:"Extra small size variant for the input."},s:{type:"boolean",required:!1,defaultValue:"false",description:"Small size variant for the input."},m:{type:"boolean",required:!1,defaultValue:"true",description:"Medium size variant for the input."},l:{type:"boolean",required:!1,defaultValue:"false",description:"Large size variant for the input."},number:{type:"boolean",required:!1,defaultValue:"false",description:"If true, renders a number input instead of a text input."},primary:{type:"boolean",required:!1,defaultValue:"false",description:"Applies primary styling to the input field."},warn:{type:"boolean",required:!1,defaultValue:"false",description:"Applies warning styling to the input field."},error:{type:"boolean",required:!1,defaultValue:"false",description:"Applies error styling to the input field."},neutral:{type:"boolean",required:!1,defaultValue:"true",description:"Applies neutral styling to the input field."},labelStyle:{type:"{}",required:!1,defaultValue:"{}",description:"Inline styles to customize the label."}}},Ye={tags:{brief:"Represents a hyperlink component with consistent styling and optional behavior controls.",intro:"Renders a styled `<a>` element for internal or external navigation, supporting accessibility and customization options.",example:`import { Link } from '@lite-u/ui'

<Link href="https://example.com" target="_blank">
    Visit Example
</Link>`},props:{fw:{type:"boolean",required:!1,defaultValue:"true",description:"If true, the link will take up the full width of its container."},fh:{type:"boolean",required:!1,defaultValue:"true",description:"If true, the link will take up the full height of its container."}}},Qe={tags:{},props:{}},Ze={tags:{brief:"Animates itself.",intro:"To apply animations to elements typically requires external libraries or CSS files. For simplicity and control, `Transition` implements inline animations, putting all animation-related properties under your direct management.\n\n\\\n✅️ `Tips`: Always remember: `Transition` is the direct receiver of the animation and serves as the true boundary between the wrapped component and its parent. If you wrap a component with `Transition`, be sure to apply the corresponding styles directly to `Transition`.",example:`import { Con, Button, Transition } from '@lite-u/ui'

const Sample = () => {
  const [show, setShow] = useState(false)

  return <Con w={100} h={100}>
    <Button onClick={() => setShow(!show)}>Toggle</Button>
    <Transition from={{opacity: 0, scale: 0.9}} to={{opacity: 1, scale: 1}} visible={show}>
      <div>Hello world</div>
    </Transition>
  )
}`},props:{visible:{type:"boolean",required:!1,defaultValue:"true",description:"Whether the transition should be visible.\nIf true, transition animates to `to` styles; otherwise, animates to `from`."},from:{type:"FromType",required:!1,defaultValue:"{}",description:`The initial styles before transition starts.
Can contain raw CSS values or detailed timing configurations.`},to:{type:"FromType",required:!1,defaultValue:"{}",description:"The target styles to animate toward when `visible` is true.\nCan contain raw CSS values or detailed timing configurations."},transformOrigin:{type:"string",required:!1,defaultValue:"center",description:"CSS `transform-origin` value for the transition.\nControls the origin point of scaling/rotating transforms."},effect:{type:"TimingFunction",required:!1,defaultValue:"ease",description:"Default timing function for all transitions unless overridden per-property."},duration:{type:"number",required:!1,defaultValue:"300",description:"Default duration in milliseconds for entering transitions unless overridden per-property."},exitDuration:{type:"number",required:!1,defaultValue:"300",description:"Default duration in milliseconds for leaving transitions unless overridden per-property."},delay:{type:"number",required:!1,defaultValue:"0",description:"Default delay in milliseconds before starting the transition unless overridden per-property."},onAnimationEntered:{type:"VoidFunction",required:!1,defaultValue:"",description:"Called when the enter transition finishes."},onAnimationExited:{type:"VoidFunction",required:!1,defaultValue:"",description:"Called when the exit transition finishes."},onAnimationEnterCancel:{type:"VoidFunction",required:!1,defaultValue:"",description:"Called if the enter transition is canceled (e.g., unmount during enter)."},onAnimationExitCancel:{type:"VoidFunction",required:!1,defaultValue:"",description:"Called if the exit transition is canceled (e.g., re-enter during exit)."}}},et={tags:{brief:"A flexible modal dialog component that overlays content on top of the existing UI.",intro:`Renders children inside a centered modal container with a customizable backdrop and style.
Supports optional backdrop click handling.`,example:`import { Modal } from '@lite-u/ui'

<Modal onBackdropClick={() => setOpen(false)}>
  <div>Modal Content</div>
</Modal>`},props:{onBackdropClick:{type:"VoidFunction",required:!1,defaultValue:"\\-",description:"Callback invoked when the backdrop is clicked."},backdropBg:{type:"BackgroundColor",required:!1,defaultValue:"rgba(0,0,0,.5)",description:"Background color of the backdrop overlay."}}},tt={tags:{brief:"A flexible container component used to group and visually separate content within the layout.",intro:`Provides a styled block container with customizable margin, padding, and background options.
Commonly used to structure and emphasize content sections in a UI.`,example:`import { Panel } from '@lite-u/ui'

<Panel p={20} bg="#fff">
  <h2>Section Title</h2>
  <p>This is a section of content within a panel.</p>
</Panel>`},props:{xs:{type:"boolean",required:!1,defaultValue:"false",description:"If true, sets the panel size to extra small (`xs`)."},s:{type:"boolean",required:!1,defaultValue:"false",description:"If true, sets the panel size to small (`sm`)."},m:{type:"never",required:!1,defaultValue:`false
\\-`,description:"If true, sets the panel size to medium (`md`).\nMargin of the container."},l:{type:"never",required:!1,defaultValue:`false
\\-`,description:"If true, sets the panel size to large (`lg`).\nThe CSS `left` value."},title:{type:"string",required:!1,defaultValue:"\\-",description:"The title text displayed in the panel header."},titleStyle:{type:"CSSProperties",required:!1,defaultValue:"{}",description:"Optional custom styles for the title container."},titleClass:{type:"string",required:!1,defaultValue:"\\-",description:"Optional class name for the title container."},contentStyle:{type:"CSSProperties",required:!1,defaultValue:"{}",description:"Optional custom styles for the panel content container."},contentClass:{type:"string",required:!1,defaultValue:"\\-",description:"Optional class name for the panel content container."},box:{type:"boolean",required:!1,defaultValue:"true",description:"If true, applies `box-sizing: border-box` to the container."},ovh:{type:"boolean",required:!1,defaultValue:"false",description:"If true, applies `overflow: hidden`."},ova:{type:"boolean",required:!1,defaultValue:"false",description:"If true, applies `overflow: auto`."},fw:{type:"boolean",required:!1,defaultValue:"true",description:"If true, sets width to 100%."},fh:{type:"boolean",required:!1,defaultValue:"false",description:"If true, sets height to 100%."},tl:{type:"boolean",required:!1,defaultValue:"false",description:"If true, aligns text to the left."},tc:{type:"boolean",required:!1,defaultValue:"false",description:"If true, aligns text to the center."},tr:{type:"boolean",required:!1,defaultValue:"false",description:"If true, aligns text to the right."},bg:{type:"BackgroundColor",required:!1,defaultValue:"\\-",description:"Background color of the container."},textColor:{type:"Color",required:!1,defaultValue:"\\-",description:"Text color of the container."},fz:{type:"FontSize<string | number>",required:!1,defaultValue:"14",description:"Font size of the container text."},rounded:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, applies border-radius of 5px."},border:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, applies a 1px solid border with the specified border color."},ib:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets display to inline-block."},abs:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets position to absolute."},rela:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets position to relative."},fixed:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets position to fixed."},t:{type:"Top<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `top` value."},r:{type:"Right<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `right` value."},b:{type:"Bottom<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `bottom` value."},borderColor:{type:"BorderColor",required:!1,defaultValue:"#dfdfdf",description:"Color of the border."},p:{type:"Padding<string | number>",required:!1,defaultValue:"\\-",description:"Padding of the container."},pt:{type:"PaddingTop<string | number>",required:!1,defaultValue:"\\-",description:"Padding top of the container."},pr:{type:"PaddingRight<string | number>",required:!1,defaultValue:"\\-",description:"Padding right of the container."},pb:{type:"PaddingBottom<string | number>",required:!1,defaultValue:"\\-",description:"Padding bottom of the container."},pl:{type:"PaddingLeft<string | number>",required:!1,defaultValue:"\\-",description:"Padding left of the container."},mt:{type:"MarginTop<string | number>",required:!1,defaultValue:"\\-",description:"Margin top of the container."},mr:{type:"MarginRight<string | number>",required:!1,defaultValue:"\\-",description:"Margin right of the container."},mb:{type:"MarginBottom<string | number>",required:!1,defaultValue:"\\-",description:"Margin bottom of the container."},ml:{type:"MarginLeft<string | number>",required:!1,defaultValue:"\\-",description:"Margin left of the container."},maxW:{type:"MaxWidth<string | number>",required:!1,defaultValue:"\\-",description:"Maximum width of the container."},maxH:{type:"MaxHeight<string | number>",required:!1,defaultValue:"\\-",description:"Maximum height of the container."},minW:{type:"MinWidth<string | number>",required:!1,defaultValue:"\\-",description:"Minimum width of the container."},minH:{type:"MinHeight<string | number>",required:!1,defaultValue:"\\-",description:"Minimum height of the container."},w:{type:"Width<string | number>",required:!1,defaultValue:"\\-",description:"Width of the container."},h:{type:"Height<string | number>",required:!1,defaultValue:"\\-",description:"Height of the container."}}},rt={tags:{brief:"A horizontal flex container with shorthand alignment and spacing props.",intro:"A layout component built on top of `Flex`, providing horizontal flow and useful alignment helpers like `start`, `center`, `stretch`, `wrap`, and `space`.\nSupports extended `ContainerProps`.",example:`import { Container } from '@lite-u/ui'

<Row center space={10} wrap>
  <span>1</span>
  <span>2</span>
  <span>3</span>
</Row>`},props:{start:{type:"boolean",required:!1,defaultValue:"true",description:"Align items to the start vertically."},center:{type:"boolean",required:!1,defaultValue:"false",description:"Align items to the center vertically."},stretch:{type:"boolean",required:!1,defaultValue:"false",description:"Stretch items to fill the container vertically."},end:{type:"boolean",required:!1,defaultValue:"false",description:"Align items to the end vertically."},wrap:{type:"boolean",required:!1,defaultValue:"false",description:"If true, allows child elements to wrap onto multiple lines."},around:{type:"boolean",required:!1,defaultValue:"false",description:"Justify content with space around."},jc:{type:"boolean",required:!1,defaultValue:"false",description:"Justify content to the center horizontally."},js:{type:"boolean",required:!1,defaultValue:"false",description:"Justifies children to the start horizontally."},je:{type:"boolean",required:!1,defaultValue:"false",description:"Justifies children to the end horizontally."},between:{type:"boolean",required:!1,defaultValue:"false",description:"Justify content with space between items."},space:{type:"Gap<string | number>",required:!1,defaultValue:"0",description:"Gap between child elements."},m:{type:"Margin<string | number>",required:!1,defaultValue:"\\-",description:"Margin of the container."},l:{type:"Left<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `left` value."},fw:{type:"boolean",required:!1,defaultValue:"true",description:"If true, sets width to 100%."},fh:{type:"boolean",required:!1,defaultValue:"false",description:"If true, sets height to 100%."},border:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, applies a 1px solid border with the specified border color."},borderColor:{type:"BorderColor",required:!1,defaultValue:"#dfdfdf",description:"Color of the border."},box:{type:"boolean",required:!1,defaultValue:"true",description:"If true, applies `box-sizing: border-box` to the container."},ovh:{type:"boolean",required:!1,defaultValue:"false",description:"If true, applies `overflow: hidden`."},ova:{type:"boolean",required:!1,defaultValue:"false",description:"If true, applies `overflow: auto`."},tl:{type:"boolean",required:!1,defaultValue:"false",description:"If true, aligns text to the left."},tc:{type:"boolean",required:!1,defaultValue:"false",description:"If true, aligns text to the center."},tr:{type:"boolean",required:!1,defaultValue:"false",description:"If true, aligns text to the right."},bg:{type:"BackgroundColor",required:!1,defaultValue:"\\-",description:"Background color of the container."},textColor:{type:"Color",required:!1,defaultValue:"\\-",description:"Text color of the container."},fz:{type:"FontSize<string | number>",required:!1,defaultValue:"14",description:"Font size of the container text."},rounded:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, applies border-radius of 5px."},ib:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets display to inline-block."},abs:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets position to absolute."},rela:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets position to relative."},fixed:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets position to fixed."},t:{type:"Top<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `top` value."},r:{type:"Right<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `right` value."},b:{type:"Bottom<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `bottom` value."},p:{type:"Padding<string | number>",required:!1,defaultValue:"\\-",description:"Padding of the container."},pt:{type:"PaddingTop<string | number>",required:!1,defaultValue:"\\-",description:"Padding top of the container."},pr:{type:"PaddingRight<string | number>",required:!1,defaultValue:"\\-",description:"Padding right of the container."},pb:{type:"PaddingBottom<string | number>",required:!1,defaultValue:"\\-",description:"Padding bottom of the container."},pl:{type:"PaddingLeft<string | number>",required:!1,defaultValue:"\\-",description:"Padding left of the container."},mt:{type:"MarginTop<string | number>",required:!1,defaultValue:"\\-",description:"Margin top of the container."},mr:{type:"MarginRight<string | number>",required:!1,defaultValue:"\\-",description:"Margin right of the container."},mb:{type:"MarginBottom<string | number>",required:!1,defaultValue:"\\-",description:"Margin bottom of the container."},ml:{type:"MarginLeft<string | number>",required:!1,defaultValue:"\\-",description:"Margin left of the container."},maxW:{type:"MaxWidth<string | number>",required:!1,defaultValue:"\\-",description:"Maximum width of the container."},maxH:{type:"MaxHeight<string | number>",required:!1,defaultValue:"\\-",description:"Maximum height of the container."},minW:{type:"MinWidth<string | number>",required:!1,defaultValue:"\\-",description:"Minimum width of the container."},minH:{type:"MinHeight<string | number>",required:!1,defaultValue:"\\-",description:"Minimum height of the container."},w:{type:"Width<string | number>",required:!1,defaultValue:"\\-",description:"Width of the container."},h:{type:"Height<string | number>",required:!1,defaultValue:"\\-",description:"Height of the container."}}},it={tags:{brief:"A flexible vertical layout container built on top of the Flex component.",intro:"Arranges children in a column direction using Flexbox. Supports alignment props\nlike `start`, `center`, `end`, and spacing between items using the `space` prop.",example:`import { Column } from '@lite-u/ui'
// Col is an alias of Column
import { Col } from '@lite-u/ui'

<Column center space={16}>
  <div>Item 1</div>
  <div>Item 2</div>
</Column>`},props:{start:{type:"boolean",required:!1,defaultValue:"true",description:"Aligns children to the start of the column (left by default)."},center:{type:"boolean",required:!1,defaultValue:"false",description:"Aligns children to the center of the column."},stretch:{type:"boolean",required:!1,defaultValue:"false",description:"Stretches children to fill the column width."},end:{type:"boolean",required:!1,defaultValue:"false",description:"Aligns children to the end of the column (right by default)."},space:{type:"Gap<string | number>",required:!1,defaultValue:"0",description:"Defines spacing between children using the CSS `gap` property."},wrap:{type:"never",required:!1,defaultValue:"false",description:"If true, allows child elements to wrap onto multiple columns."},around:{type:"boolean",required:!1,defaultValue:"false",description:"Justifies children with space around them."},between:{type:"boolean",required:!1,defaultValue:"false",description:"Justifies children with space between them."},jc:{type:"boolean",required:!1,defaultValue:"false",description:"Justifies children to the center vertically."},js:{type:"boolean",required:!1,defaultValue:"false",description:"Justifies children to the start vertically."},je:{type:"boolean",required:!1,defaultValue:"false",description:"Justifies children to the end vertically."},m:{type:"Margin<string | number>",required:!1,defaultValue:"\\-",description:"Margin of the container."},l:{type:"Left<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `left` value."},fw:{type:"boolean",required:!1,defaultValue:"true",description:"If true, sets width to 100%."},fh:{type:"boolean",required:!1,defaultValue:"false",description:"If true, sets height to 100%."},border:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, applies a 1px solid border with the specified border color."},borderColor:{type:"BorderColor",required:!1,defaultValue:"#dfdfdf",description:"Color of the border."},box:{type:"boolean",required:!1,defaultValue:"true",description:"If true, applies `box-sizing: border-box` to the container."},ovh:{type:"boolean",required:!1,defaultValue:"false",description:"If true, applies `overflow: hidden`."},ova:{type:"boolean",required:!1,defaultValue:"false",description:"If true, applies `overflow: auto`."},tl:{type:"boolean",required:!1,defaultValue:"false",description:"If true, aligns text to the left."},tc:{type:"boolean",required:!1,defaultValue:"false",description:"If true, aligns text to the center."},tr:{type:"boolean",required:!1,defaultValue:"false",description:"If true, aligns text to the right."},bg:{type:"BackgroundColor",required:!1,defaultValue:"\\-",description:"Background color of the container."},textColor:{type:"Color",required:!1,defaultValue:"\\-",description:"Text color of the container."},fz:{type:"FontSize<string | number>",required:!1,defaultValue:"14",description:"Font size of the container text."},rounded:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, applies border-radius of 5px."},ib:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets display to inline-block."},abs:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets position to absolute."},rela:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets position to relative."},fixed:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets position to fixed."},t:{type:"Top<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `top` value."},r:{type:"Right<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `right` value."},b:{type:"Bottom<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `bottom` value."},p:{type:"Padding<string | number>",required:!1,defaultValue:"\\-",description:"Padding of the container."},pt:{type:"PaddingTop<string | number>",required:!1,defaultValue:"\\-",description:"Padding top of the container."},pr:{type:"PaddingRight<string | number>",required:!1,defaultValue:"\\-",description:"Padding right of the container."},pb:{type:"PaddingBottom<string | number>",required:!1,defaultValue:"\\-",description:"Padding bottom of the container."},pl:{type:"PaddingLeft<string | number>",required:!1,defaultValue:"\\-",description:"Padding left of the container."},mt:{type:"MarginTop<string | number>",required:!1,defaultValue:"\\-",description:"Margin top of the container."},mr:{type:"MarginRight<string | number>",required:!1,defaultValue:"\\-",description:"Margin right of the container."},mb:{type:"MarginBottom<string | number>",required:!1,defaultValue:"\\-",description:"Margin bottom of the container."},ml:{type:"MarginLeft<string | number>",required:!1,defaultValue:"\\-",description:"Margin left of the container."},maxW:{type:"MaxWidth<string | number>",required:!1,defaultValue:"\\-",description:"Maximum width of the container."},maxH:{type:"MaxHeight<string | number>",required:!1,defaultValue:"\\-",description:"Maximum height of the container."},minW:{type:"MinWidth<string | number>",required:!1,defaultValue:"\\-",description:"Minimum width of the container."},minH:{type:"MinHeight<string | number>",required:!1,defaultValue:"\\-",description:"Minimum height of the container."},w:{type:"Width<string | number>",required:!1,defaultValue:"\\-",description:"Width of the container."},h:{type:"Height<string | number>",required:!1,defaultValue:"\\-",description:"Height of the container."}}},nt={tags:{},props:{start:{type:"boolean",required:!1,defaultValue:"true",description:"Aligns children to the start of the column (left by default)."},center:{type:"boolean",required:!1,defaultValue:"false",description:"Aligns children to the center of the column."},stretch:{type:"boolean",required:!1,defaultValue:"false",description:"Stretches children to fill the column width."},end:{type:"boolean",required:!1,defaultValue:"false",description:"Aligns children to the end of the column (right by default)."},space:{type:"Gap<string | number>",required:!1,defaultValue:"0",description:"Defines spacing between children using the CSS `gap` property."},wrap:{type:"never",required:!1,defaultValue:"false",description:"If true, allows child elements to wrap onto multiple columns."},around:{type:"boolean",required:!1,defaultValue:"false",description:"Justifies children with space around them."},between:{type:"boolean",required:!1,defaultValue:"false",description:"Justifies children with space between them."},jc:{type:"boolean",required:!1,defaultValue:"false",description:"Justifies children to the center vertically."},js:{type:"boolean",required:!1,defaultValue:"false",description:"Justifies children to the start vertically."},je:{type:"boolean",required:!1,defaultValue:"false",description:"Justifies children to the end vertically."},m:{type:"Margin<string | number>",required:!1,defaultValue:"\\-",description:"Margin of the container."},l:{type:"Left<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `left` value."},fw:{type:"boolean",required:!1,defaultValue:"true",description:"If true, sets width to 100%."},fh:{type:"boolean",required:!1,defaultValue:"false",description:"If true, sets height to 100%."},border:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, applies a 1px solid border with the specified border color."},borderColor:{type:"BorderColor",required:!1,defaultValue:"#dfdfdf",description:"Color of the border."},box:{type:"boolean",required:!1,defaultValue:"true",description:"If true, applies `box-sizing: border-box` to the container."},ovh:{type:"boolean",required:!1,defaultValue:"false",description:"If true, applies `overflow: hidden`."},ova:{type:"boolean",required:!1,defaultValue:"false",description:"If true, applies `overflow: auto`."},tl:{type:"boolean",required:!1,defaultValue:"false",description:"If true, aligns text to the left."},tc:{type:"boolean",required:!1,defaultValue:"false",description:"If true, aligns text to the center."},tr:{type:"boolean",required:!1,defaultValue:"false",description:"If true, aligns text to the right."},bg:{type:"BackgroundColor",required:!1,defaultValue:"\\-",description:"Background color of the container."},textColor:{type:"Color",required:!1,defaultValue:"\\-",description:"Text color of the container."},fz:{type:"FontSize<string | number>",required:!1,defaultValue:"14",description:"Font size of the container text."},rounded:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, applies border-radius of 5px."},ib:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets display to inline-block."},abs:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets position to absolute."},rela:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets position to relative."},fixed:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets position to fixed."},t:{type:"Top<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `top` value."},r:{type:"Right<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `right` value."},b:{type:"Bottom<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `bottom` value."},p:{type:"Padding<string | number>",required:!1,defaultValue:"\\-",description:"Padding of the container."},pt:{type:"PaddingTop<string | number>",required:!1,defaultValue:"\\-",description:"Padding top of the container."},pr:{type:"PaddingRight<string | number>",required:!1,defaultValue:"\\-",description:"Padding right of the container."},pb:{type:"PaddingBottom<string | number>",required:!1,defaultValue:"\\-",description:"Padding bottom of the container."},pl:{type:"PaddingLeft<string | number>",required:!1,defaultValue:"\\-",description:"Padding left of the container."},mt:{type:"MarginTop<string | number>",required:!1,defaultValue:"\\-",description:"Margin top of the container."},mr:{type:"MarginRight<string | number>",required:!1,defaultValue:"\\-",description:"Margin right of the container."},mb:{type:"MarginBottom<string | number>",required:!1,defaultValue:"\\-",description:"Margin bottom of the container."},ml:{type:"MarginLeft<string | number>",required:!1,defaultValue:"\\-",description:"Margin left of the container."},maxW:{type:"MaxWidth<string | number>",required:!1,defaultValue:"\\-",description:"Maximum width of the container."},maxH:{type:"MaxHeight<string | number>",required:!1,defaultValue:"\\-",description:"Maximum height of the container."},minW:{type:"MinWidth<string | number>",required:!1,defaultValue:"\\-",description:"Minimum width of the container."},minH:{type:"MinHeight<string | number>",required:!1,defaultValue:"\\-",description:"Minimum height of the container."},w:{type:"Width<string | number>",required:!1,defaultValue:"\\-",description:"Width of the container."},h:{type:"Height<string | number>",required:!1,defaultValue:"\\-",description:"Height of the container."}}},lt={tags:{},props:{col:{type:"boolean",required:!1,defaultValue:"",description:""},row:{type:"boolean",required:!1,defaultValue:"true",description:""},flexWrap:{type:"FlexWrap",required:!1,defaultValue:"initial",description:""},alignItems:{type:"AlignItems",required:!1,defaultValue:"start",description:""},justifyContent:{type:"JustifyContent",required:!1,defaultValue:"normal",description:""},space:{type:"Gap<string | number>",required:!1,defaultValue:"0",description:""},box:{type:"boolean",required:!1,defaultValue:"true",description:"If true, applies `box-sizing: border-box` to the container."},ovh:{type:"boolean",required:!1,defaultValue:"false",description:"If true, applies `overflow: hidden`."},ova:{type:"boolean",required:!1,defaultValue:"false",description:"If true, applies `overflow: auto`."},fw:{type:"boolean",required:!1,defaultValue:"true",description:"If true, sets width to 100%."},fh:{type:"boolean",required:!1,defaultValue:"false",description:"If true, sets height to 100%."},tl:{type:"boolean",required:!1,defaultValue:"false",description:"If true, aligns text to the left."},tc:{type:"boolean",required:!1,defaultValue:"false",description:"If true, aligns text to the center."},tr:{type:"boolean",required:!1,defaultValue:"false",description:"If true, aligns text to the right."},bg:{type:"BackgroundColor",required:!1,defaultValue:"\\-",description:"Background color of the container."},textColor:{type:"Color",required:!1,defaultValue:"\\-",description:"Text color of the container."},fz:{type:"FontSize<string | number>",required:!1,defaultValue:"14",description:"Font size of the container text."},rounded:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, applies border-radius of 5px."},border:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, applies a 1px solid border with the specified border color."},ib:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets display to inline-block."},abs:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets position to absolute."},rela:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets position to relative."},fixed:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets position to fixed."},t:{type:"Top<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `top` value."},r:{type:"Right<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `right` value."},b:{type:"Bottom<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `bottom` value."},l:{type:"Left<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `left` value."},borderColor:{type:"BorderColor",required:!1,defaultValue:"#dfdfdf",description:"Color of the border."},p:{type:"Padding<string | number>",required:!1,defaultValue:"\\-",description:"Padding of the container."},pt:{type:"PaddingTop<string | number>",required:!1,defaultValue:"\\-",description:"Padding top of the container."},pr:{type:"PaddingRight<string | number>",required:!1,defaultValue:"\\-",description:"Padding right of the container."},pb:{type:"PaddingBottom<string | number>",required:!1,defaultValue:"\\-",description:"Padding bottom of the container."},pl:{type:"PaddingLeft<string | number>",required:!1,defaultValue:"\\-",description:"Padding left of the container."},m:{type:"Margin<string | number>",required:!1,defaultValue:"\\-",description:"Margin of the container."},mt:{type:"MarginTop<string | number>",required:!1,defaultValue:"\\-",description:"Margin top of the container."},mr:{type:"MarginRight<string | number>",required:!1,defaultValue:"\\-",description:"Margin right of the container."},mb:{type:"MarginBottom<string | number>",required:!1,defaultValue:"\\-",description:"Margin bottom of the container."},ml:{type:"MarginLeft<string | number>",required:!1,defaultValue:"\\-",description:"Margin left of the container."},maxW:{type:"MaxWidth<string | number>",required:!1,defaultValue:"\\-",description:"Maximum width of the container."},maxH:{type:"MaxHeight<string | number>",required:!1,defaultValue:"\\-",description:"Maximum height of the container."},minW:{type:"MinWidth<string | number>",required:!1,defaultValue:"\\-",description:"Minimum width of the container."},minH:{type:"MinHeight<string | number>",required:!1,defaultValue:"\\-",description:"Minimum height of the container."},w:{type:"Width<string | number>",required:!1,defaultValue:"\\-",description:"Width of the container."},h:{type:"Height<string | number>",required:!1,defaultValue:"\\-",description:"Height of the container."}}},at={tags:{brief:"Renders a heading (`<h1>`–`<h6>`) with automatic theming and optional sticky positioning.",intro:`Automatically selects a heading level (h1–h6) based on the given boolean props.
Styles the heading with a themed font size and margin. Supports sticky behavior for fixed headers.`,example:`import { Title } from '@lite-u/ui'

<Title h2 sticky>Section Title</Title>`},props:{textColor:{type:"Color",required:!1,defaultValue:"inherit",description:"Set text color the element."},sticky:{type:"boolean",required:!1,defaultValue:"false",description:"Makes the heading position sticky at the top of its container."},h1:{type:"boolean",required:!1,defaultValue:"false",description:"If true, renders an h1 element."},h2:{type:"boolean",required:!1,defaultValue:"false",description:"If true, renders an h2 element."},h3:{type:"boolean",required:!1,defaultValue:"false",description:"If true, renders an h3 element."},h4:{type:"boolean",required:!1,defaultValue:"false",description:"If true, renders an h4 element."},h5:{type:"boolean",required:!1,defaultValue:"false",description:"If true, renders an h5 element."},h6:{type:"boolean",required:!1,defaultValue:"false",description:"If true, renders an h6 element."}}},ot={tags:{brief:"Renders a styled `<p>` tag with configurable font size, color, alignment, and word-break behavior.",intro:`Applies theming defaults for spacing and base typography, while allowing per-instance customization
for text alignment, font size, color, and word-breaking strategy.`,example:`import { Paragraph } from '@lite-u/ui'
P is an alias of Paragraph
import { P } from '@lite-u/ui'

<Paragraph size={14} textColor="gray" center>
  This is a centered paragraph with custom styling.
</Paragraph>`},props:{size:{type:"number",required:!1,defaultValue:"16",description:"Custom font size for the paragraph text."},textColor:{type:"Color",required:!1,defaultValue:"inherit",description:"Text color of the paragraph."},center:{type:"boolean",required:!1,defaultValue:"false",description:"Centers the paragraph text."},wb:{type:"WordBreak",required:!1,defaultValue:"break-word",description:"Controls word-break behavior (e.g., 'break-word', 'normal')."}}},st={tags:{},props:{size:{type:"number",required:!1,defaultValue:"16",description:"Custom font size for the paragraph text."},textColor:{type:"Color",required:!1,defaultValue:"inherit",description:"Text color of the paragraph."},center:{type:"boolean",required:!1,defaultValue:"false",description:"Centers the paragraph text."},wb:{type:"WordBreak",required:!1,defaultValue:"break-word",description:"Controls word-break behavior (e.g., 'break-word', 'normal')."}}},dt={tags:{brief:"A vertical stack layout component designed for navigation or grouped UI items.",intro:`Arranges its children in a column using Flexbox with configurable spacing.
Useful for building vertical menus, lists, or grouped controls. Automatically
sets cursor to pointer and full width, promoting interactive layout.`,example:`import { Menu, MenuItem } from '@lite-u/ui'

<Menu space={12}>
  <MenuItem>Item 1</MenuItem>
  <MenuItem>Item 2</MenuItem>
</Menu>`},props:{space:{type:"number",required:!1,defaultValue:"4",description:"Vertical spacing (gap) between children, in pixels."}}},ut={tags:{brief:"A flexible interactive item used within menus or lists, with optional size variants and hover transitions.",intro:"Applies consistent dimensions and padding based on selected size (`xs`, `s`, `m`, `l`),\nand shows a transition effect on hover. Integrates theming from Lite UI context.",example:`import { MenuItem } from '@lite-u/ui'

<MenuItem m hoverStyle={{ backgroundColor: 'lightgray' }}>
  Settings
</MenuItem>`},props:{xs:{type:"boolean",required:!1,defaultValue:"false",description:"Renders the item in extra-small size."},s:{type:"boolean",required:!1,defaultValue:"false",description:"Renders the item in small size."},m:{type:"boolean",required:!1,defaultValue:"true",description:"Renders the item in medium size."},l:{type:"boolean",required:!1,defaultValue:"false",description:"Renders the item in large size."},hoverStyle:{type:"FromType",required:!1,defaultValue:`{
          backgroundColor: '#dfdfdf',
        }`,description:"CSS styles to apply on hover transition."},hoverEnterDuration:{type:"number",required:!1,defaultValue:"200",description:"Duration of the hover transition entering, in milliseconds."},hoverLeaveDuration:{type:"number",required:!1,defaultValue:"300",description:"Duration of the hover transition leaving, in milliseconds."}}},ct={tags:{brief:"Displays a floating label with helpful information when the user hovers over or focuses on the target element.",intro:"Renders a customizable tooltip using React Portals for positioning and transition animations. It calculates the correct position based on the specified direction and adjusts dynamically if the target element moves.",example:`import { Tooltip } from '@lite-u/ui'

<Tooltip title="Hello" placement="t">
  <button>Hover me</button>
</Tooltip>`},props:{bgColor:{type:"string",required:!1,defaultValue:"#333",description:"The background color of the tooltip. Defaults to a neutral color."},textColor:{type:"string",required:!1,defaultValue:"#fff",description:"The text color of the tooltip. Defaults to a readable color."},placement:{type:"TooltipPlacement",required:!1,defaultValue:"t",description:"The placement of the tooltip relative to its children. Can be one of:\n`t` , `r` , `b` , `l` , `tl` , `tr` , `bl` , `br`"}}},pt={tags:{},props:{box:{type:"boolean",required:!1,defaultValue:"true",description:"If true, applies `box-sizing: border-box` to the container."},ovh:{type:"boolean",required:!1,defaultValue:"false",description:"If true, applies `overflow: hidden`."},ova:{type:"boolean",required:!1,defaultValue:"false",description:"If true, applies `overflow: auto`."},fw:{type:"boolean",required:!1,defaultValue:"true",description:"If true, sets width to 100%."},fh:{type:"boolean",required:!1,defaultValue:"false",description:"If true, sets height to 100%."},tl:{type:"boolean",required:!1,defaultValue:"false",description:"If true, aligns text to the left."},tc:{type:"boolean",required:!1,defaultValue:"false",description:"If true, aligns text to the center."},tr:{type:"boolean",required:!1,defaultValue:"false",description:"If true, aligns text to the right."},bg:{type:"BackgroundColor",required:!1,defaultValue:"\\-",description:"Background color of the container."},textColor:{type:"Color",required:!1,defaultValue:"\\-",description:"Text color of the container."},fz:{type:"FontSize<string | number>",required:!1,defaultValue:"14",description:"Font size of the container text."},rounded:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, applies border-radius of 5px."},border:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, applies a 1px solid border with the specified border color."},ib:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets display to inline-block."},abs:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets position to absolute."},rela:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets position to relative."},fixed:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets position to fixed."},t:{type:"Top<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `top` value."},r:{type:"Right<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `right` value."},b:{type:"Bottom<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `bottom` value."},l:{type:"Left<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `left` value."},borderColor:{type:"BorderColor",required:!1,defaultValue:"#dfdfdf",description:"Color of the border."},p:{type:"Padding<string | number>",required:!1,defaultValue:"\\-",description:"Padding of the container."},pt:{type:"PaddingTop<string | number>",required:!1,defaultValue:"\\-",description:"Padding top of the container."},pr:{type:"PaddingRight<string | number>",required:!1,defaultValue:"\\-",description:"Padding right of the container."},pb:{type:"PaddingBottom<string | number>",required:!1,defaultValue:"\\-",description:"Padding bottom of the container."},pl:{type:"PaddingLeft<string | number>",required:!1,defaultValue:"\\-",description:"Padding left of the container."},m:{type:"Margin<string | number>",required:!1,defaultValue:"\\-",description:"Margin of the container."},mt:{type:"MarginTop<string | number>",required:!1,defaultValue:"\\-",description:"Margin top of the container."},mr:{type:"MarginRight<string | number>",required:!1,defaultValue:"\\-",description:"Margin right of the container."},mb:{type:"MarginBottom<string | number>",required:!1,defaultValue:"\\-",description:"Margin bottom of the container."},ml:{type:"MarginLeft<string | number>",required:!1,defaultValue:"\\-",description:"Margin left of the container."},maxW:{type:"MaxWidth<string | number>",required:!1,defaultValue:"\\-",description:"Maximum width of the container."},maxH:{type:"MaxHeight<string | number>",required:!1,defaultValue:"\\-",description:"Maximum height of the container."},minW:{type:"MinWidth<string | number>",required:!1,defaultValue:"\\-",description:"Minimum width of the container."},minH:{type:"MinHeight<string | number>",required:!1,defaultValue:"\\-",description:"Minimum height of the container."},w:{type:"Width<string | number>",required:!1,defaultValue:"\\-",description:"Width of the container."},h:{type:"Height<string | number>",required:!1,defaultValue:"\\-",description:"Height of the container."}}},ft={tags:{brief:"A flexible layout and style container that adapts to various UI layout needs.",intro:"Provides dynamic box, margin, padding, overflow, and size styling through a rich set of shorthand props.\nUseful as a base layout block across components or pages.\n`Con` is an Alias of Container",example:`import { Container } from '@lite-u/ui'
// Con is an Alias of Container
import { Con } from '@lite-u/ui'

<Container p={20} bg="#f9f9f9" fw fh>
  <h2>Content</h2>
</Container>`},props:{box:{type:"boolean",required:!1,defaultValue:"true",description:"If true, applies `box-sizing: border-box` to the container."},ovh:{type:"boolean",required:!1,defaultValue:"false",description:"If true, applies `overflow: hidden`."},ova:{type:"boolean",required:!1,defaultValue:"false",description:"If true, applies `overflow: auto`."},fw:{type:"boolean",required:!1,defaultValue:"true",description:"If true, sets width to 100%."},fh:{type:"boolean",required:!1,defaultValue:"false",description:"If true, sets height to 100%."},tl:{type:"boolean",required:!1,defaultValue:"false",description:"If true, aligns text to the left."},tc:{type:"boolean",required:!1,defaultValue:"false",description:"If true, aligns text to the center."},tr:{type:"boolean",required:!1,defaultValue:"false",description:"If true, aligns text to the right."},bg:{type:"BackgroundColor",required:!1,defaultValue:"\\-",description:"Background color of the container."},textColor:{type:"Color",required:!1,defaultValue:"\\-",description:"Text color of the container."},fz:{type:"FontSize<string | number>",required:!1,defaultValue:"14",description:"Font size of the container text."},rounded:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, applies border-radius of 5px."},border:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, applies a 1px solid border with the specified border color."},ib:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets display to inline-block."},abs:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets position to absolute."},rela:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets position to relative."},fixed:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets position to fixed."},t:{type:"Top<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `top` value."},r:{type:"Right<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `right` value."},b:{type:"Bottom<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `bottom` value."},l:{type:"Left<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `left` value."},borderColor:{type:"BorderColor",required:!1,defaultValue:"#dfdfdf",description:"Color of the border."},p:{type:"Padding<string | number>",required:!1,defaultValue:"\\-",description:"Padding of the container."},pt:{type:"PaddingTop<string | number>",required:!1,defaultValue:"\\-",description:"Padding top of the container."},pr:{type:"PaddingRight<string | number>",required:!1,defaultValue:"\\-",description:"Padding right of the container."},pb:{type:"PaddingBottom<string | number>",required:!1,defaultValue:"\\-",description:"Padding bottom of the container."},pl:{type:"PaddingLeft<string | number>",required:!1,defaultValue:"\\-",description:"Padding left of the container."},m:{type:"Margin<string | number>",required:!1,defaultValue:"\\-",description:"Margin of the container."},mt:{type:"MarginTop<string | number>",required:!1,defaultValue:"\\-",description:"Margin top of the container."},mr:{type:"MarginRight<string | number>",required:!1,defaultValue:"\\-",description:"Margin right of the container."},mb:{type:"MarginBottom<string | number>",required:!1,defaultValue:"\\-",description:"Margin bottom of the container."},ml:{type:"MarginLeft<string | number>",required:!1,defaultValue:"\\-",description:"Margin left of the container."},maxW:{type:"MaxWidth<string | number>",required:!1,defaultValue:"\\-",description:"Maximum width of the container."},maxH:{type:"MaxHeight<string | number>",required:!1,defaultValue:"\\-",description:"Maximum height of the container."},minW:{type:"MinWidth<string | number>",required:!1,defaultValue:"\\-",description:"Minimum width of the container."},minH:{type:"MinHeight<string | number>",required:!1,defaultValue:"\\-",description:"Minimum height of the container."},w:{type:"Width<string | number>",required:!1,defaultValue:"\\-",description:"Width of the container."},h:{type:"Height<string | number>",required:!1,defaultValue:"\\-",description:"Height of the container."}}},ht={tags:{brief:"A collapsible container that shows or hides its content with a smooth transition.",intro:`Renders a toggleable header and a content area that expands or collapses with animation.
Useful for accordion-like UI components or sections where content needs to be shown/hidden on demand.`,example:`import Collapse from '@lite-u/ui'

<Collapse head="Click me">
  <p>This content is hidden or shown based on the collapse state.</p>
</Collapse>`},props:{head:{type:"ReactNode",required:!0,defaultValue:"\\-",description:"The clickable header element that toggles the collapse."},headStyle:{type:"CSSProperties",required:!1,defaultValue:"\\-",description:"Inline styles applied to the clickable header element."},contentStyle:{type:"CSSProperties",required:!1,defaultValue:"\\-",description:"Inline styles applied to the collapsible content container."},duration:{type:"number",required:!1,defaultValue:"\\-",description:"Duration of the enter transition in milliseconds."},exitDuration:{type:"number",required:!1,defaultValue:"\\-",description:"Duration of the leave transition in milliseconds."}}},mt={tags:{brief:"A drag-and-drop file drop zone with file type validation and customizable events.",intro:"In React, applying visual cues during drag-over can sometimes cause flickering—especially when styles update frequently. The Drop component simplifies handling such interactions by managing drag-over feedback smoothly and supporting MIME-type restrictions. It also provides hooks for custom logic when files are dropped, making it an easy and reliable way to implement drag-and-drop functionality.\n\n\\\n⚠️ `Caution`: Safari `CANNOT` detect files during the drag phase, so use `onDropped` ONLY for any functionality that needs to work reliably across all browsers.",example:`import { Drop } from '@lite-u/ui'

<Drop accepts={['image/png']}
  onDragIsOver={(f) => {})
  onDropped={(e, isValid) => console.log(e, isValid)}
>
  <p>Drop image files here</p>
</Drop>`},props:{accepts:{type:"string[]",required:!1,defaultValue:"[]",description:"List of accepted MIME types. Wildcards like 'image/*' are supported."},onDragIsOver:{type:"(isFileTypeValid: boolean) => void",required:!1,defaultValue:"\\-",description:"Callback triggered when a valid drag enters the drop zone."},onDragIsLeave:{type:"() => void",required:!1,defaultValue:"\\-",description:`Callback triggered when dragging leaves the drop zone.

>Note: Safari does not reliably detect dragged files, and the onDragIsOver event is not supported in this browser.`},onDropped:{type:"(e: DragEvent<HTMLDivElement>, isFileTypeValid: boolean) => void",required:!1,defaultValue:"\\-",description:`Callback triggered when a file is dropped.
Provides the event and a flag indicating file type validity.`}}},xt={tags:{brief:"Provides notification context and renders toasts with animation and auto-dismiss(optional) behavior.",intro:`Wraps an application with a notification system. Allows components to trigger toast messages
with customizable content, type, and duration. Renders floating notifications using portals
with enter/exit animations, and removes them after a timeout(optional).`,example:`import { useNotification } from '@lite-u/ui'

const NotificationSampleSimple: React.FC = () => {
   const { add, remove } = useNotification()

   return <div onClick={()=>add('hello')}></div>
}`},props:{}},bt={tags:{},props:{tag:{type:"keyof HTMLElementTagNameMap",required:!1,defaultValue:"",description:""},hover:{type:"CSSProperties",required:!1,defaultValue:"",description:""},focus:{type:"CSSProperties",required:!1,defaultValue:"",description:""},active:{type:"CSSProperties",required:!1,defaultValue:"",description:""},style:{type:"CSSProperties",required:!1,defaultValue:"",description:""},onMouseEnter:{type:"(MouseEventHandler<HTMLElementTagNameMap[T]> & MouseEventHandler<HTMLObjectElement>) | ... 59 more ... | (MouseEventHandler<...> & MouseEventHandler<...>)",required:!1,defaultValue:"",description:""},onMouseLeave:{type:"(MouseEventHandler<HTMLElementTagNameMap[T]> & MouseEventHandler<HTMLObjectElement>) | ... 59 more ... | (MouseEventHandler<...> & MouseEventHandler<...>)",required:!1,defaultValue:"",description:""},onFocus:{type:"(FocusEventHandler<HTMLElementTagNameMap[T]> & FocusEventHandler<HTMLObjectElement>) | ... 59 more ... | (FocusEventHandler<...> & FocusEventHandler<...>)",required:!1,defaultValue:"",description:""},onBlur:{type:"(FocusEventHandler<HTMLElementTagNameMap[T]> & FocusEventHandler<HTMLObjectElement>) | ... 59 more ... | (FocusEventHandler<...> & FocusEventHandler<...>)",required:!1,defaultValue:"",description:""},onMouseDown:{type:"(MouseEventHandler<HTMLElementTagNameMap[T]> & MouseEventHandler<HTMLObjectElement>) | ... 59 more ... | (MouseEventHandler<...> & MouseEventHandler<...>)",required:!1,defaultValue:"",description:""},onMouseUp:{type:"(MouseEventHandler<HTMLElementTagNameMap[T]> & MouseEventHandler<HTMLObjectElement>) | ... 59 more ... | (MouseEventHandler<...> & MouseEventHandler<...>)",required:!1,defaultValue:"",description:""},onClick:{type:"(MouseEventHandler<HTMLElementTagNameMap[T]> & MouseEventHandler<HTMLObjectElement>) | ... 59 more ... | (MouseEventHandler<...> & MouseEventHandler<...>)",required:!1,defaultValue:"",description:""},onKeyDown:{type:"(KeyboardEventHandler<HTMLElementTagNameMap[T]> & KeyboardEventHandler<HTMLObjectElement>) | ... 59 more ... | (KeyboardEventHandler<...> & KeyboardEventHandler<...>)",required:!1,defaultValue:"",description:""}}},gt={tags:{brief:"A simple and easy-to-use table component with a minimal design.",intro:"Table accepts [TableRow](./tablerow) Component as children only",example:`import { Table, TableRow } from '@lite-u/ui'

<Table>
  <TableRow head>
    <span>th cell 0</span>
    <span>th cell 1</span>
  </TableRow>
  <TableRow>
    <span>td cell 0</span>
    <span>td cell 1</span>
  </TableRow>
</Table>`},props:{xs:{type:"boolean",required:!1,defaultValue:"false",description:"Render the table with extra small (`xs`) size styling."},s:{type:"boolean",required:!1,defaultValue:"false",description:"Render the table with small (`s`) size styling."},m:{type:"boolean",required:!1,defaultValue:"true",description:"Render the table with medium (`s`) size styling."},l:{type:"boolean",required:!1,defaultValue:"false",description:"Render the table with large (`l`) size styling."},fw:{type:"boolean",required:!1,defaultValue:"true",description:"Whether the table should take up the full width of its parent"},fh:{type:"boolean",required:!1,defaultValue:"false",description:"Whether the table should take up the full height of its parent"},fixed:{type:"boolean",required:!1,defaultValue:"false",description:"Whether the [tableLayout](https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout) should be set to `fixed`"},rowStyle:{type:"CSSProperties",required:!1,defaultValue:"{}",description:"Convenience way to style all table rows"},rowHoverStyle:{type:"CSSProperties",required:!1,defaultValue:"{}",description:"Convenience way to style Hovered body rows"},cellStyle:{type:"CSSProperties",required:!1,defaultValue:"{}",description:"Style object for table cells"}}},yt={tags:{brief:"Represents a table row for use within the Table component.",intro:"Renders a styled `<tr>` element with automatically applied context-based row and cell styling.\n\nCan optionally render as a header row using the `head` prop.\n\nTableRow with `head` prop: recognized as a `thead` row\n\nTableRow without `head` prop: recognized as a `tbody` row\n\nTableRow doesn’t require `td`(or `th`) — its children are automatically wrapped in <td>(or `th`) tags.",example:`import { Table, TableRow } from '@lite-u/ui'

<Table>
    <TableRow head>
      <h1>th cell 0</h1>
      <h2>th cell 1</h2>
    </TableRow>
    <TableRow>
      <div>td cell 0</div>
      <p>td cell 1</p>
    </TableRow>
</Table>`},props:{head:{type:"boolean",required:!1,defaultValue:"false",description:"If true, renders the row using `<th>` elements instead of `<td>`, and wrap into `<thead>` rather than `<tbody>`."}}},jt={tags:{},props:{}},S={Select:$e,SelectItem:Ue,ButtonBase:Je,Button:Ge,IconButton:_e,Input:Xe,Link:Ye,LiteUIProvider:Qe,Transition:Ze,Modal:et,Panel:tt,Row:rt,Column:it,Col:nt,Flex:lt,Title:at,Paragraph:ot,P:st,Menu:dt,MenuItem:ut,Tooltip:ct,Con:pt,Container:ft,Collapse:ht,Drop:mt,NotificationProvider:xt,Interactable:bt,Table:gt,TableRow:yt,src:jt},Q=({to:r,name:i,brief:l,intro:s,example:u})=>e.jsx(t,{maxW:620,children:e.jsxs(n,{children:[e.jsx(t,{mt:10}),e.jsx(y,{id:r,children:i}),e.jsx(t,{fz:15,pl:4,textColor:"#3f3f3f",style:{lineHeight:"1.5rem"},children:e.jsx(E,{children:l})}),e.jsx(t,{mt:100}),e.jsx(y,{h4:!0,id:"description",children:e.jsx(T,{href:"#description",children:"# Description"})}),e.jsx(t,{mt:10}),e.jsx(t,{pl:0,fz:15,textColor:"#3f3f3f",style:{lineHeight:"1.5rem"},children:e.jsx(E,{children:s})}),e.jsx(t,{mt:100}),e.jsx(y,{h4:!0,id:"usage",children:e.jsx(T,{href:"#usage",children:"# Usage"})}),e.jsx(t,{mt:10}),e.jsx(L,{wrapStyle:{maxWidth:600},code:`
 ${u}`}),e.jsx(t,{m:"0 0 20px 0"}),e.jsx(t,{mt:100}),e.jsx(y,{h4:!0,id:"examples",children:e.jsx(T,{href:"#examples",children:"# Examples"})})]})}),Z=()=>{const i=N().pathname.split("/")[2];if(A[i])return e.jsx("div",{})},wt=()=>{const{pathname:r}=N(),i=location.pathname.split("/"),l=i[i.length-1],s=A[l];if(!s||!S[s.apiNameKey]||!s||!S[s.apiNameKey])return;const u=s.to,p=S[s.apiNameKey].tags.brief,f=S[s.apiNameKey].tags.intro,b=S[s.apiNameKey].tags.example,q=S[s.apiNameKey].props;return h.useEffect(()=>{},[r]),e.jsxs("div",{children:[e.jsx(Q,{to:u,name:s.name,brief:p,intro:f,example:b}),e.jsx(U,{}),e.jsx(Y,{apiData:q}),e.jsx(Z,{})]})},Vt=()=>{const{pathname:r}=N(),i=location.pathname.split("/")[2],l=J[i],s=S[l.apiNameKey],u=l.to,p=s==null?void 0:s.tags.brief,f=s==null?void 0:s.tags.intro,b=s==null?void 0:s.tags.example,q=s==null?void 0:s.props;return h.useEffect(()=>{},[r]),e.jsxs("div",{children:[p&&e.jsx(Q,{to:u,name:l.name,brief:p,intro:f,example:b}),e.jsx(U,{}),q&&e.jsx(Y,{apiData:q}),e.jsx(Z,{})]})};function qt(){return e.jsx(ne,{children:e.jsx(le,{children:e.jsx(ae,{children:e.jsxs(k,{path:"/ui",element:e.jsx(Ke,{}),children:[e.jsx(k,{path:"/ui/installation",element:e.jsx(se,{})}),e.jsx(k,{path:"/ui/components",element:e.jsx(wt,{}),children:Object.values(A).map((r,i)=>e.jsx(k,{path:r.to,element:r.comp},i))}),e.jsx(k,{path:"/ui/hooks",element:e.jsx(Vt,{}),children:Object.values(J).map((r,i)=>e.jsx(k,{path:r.to,element:r.comp},i))})]})})})})}oe.createRoot(document.getElementById("root")).render(e.jsx(qt,{}));
