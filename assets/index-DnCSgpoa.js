import{j as e,S as ie,g as _,d as K,r as f,C as t,T as w,a as V,I as T,b as ne,c as z,B as d,e as a,R as o,f as M,h as b,N as H,i as g,u as B,k as S,l as x,L as k,M as p,m as le,P as R,n as y,o as L,D as O,p as j,F as ae,q as oe,s as W,t as P,O as F,v as X,w as se,x as de,y as ue,z as C,A as ce,E as pe}from"./vendor-DS88oCTK.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))u(l);new MutationObserver(l=>{for(const h of l)if(h.type==="childList")for(const c of h.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function n(l){const h={};return l.integrity&&(h.integrity=l.integrity),l.referrerPolicy&&(h.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?h.credentials="include":l.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function u(l){if(l.ep)return;l.ep=!0;const h=n(l);fetch(l.href,h)}})();const E=({code:i})=>e.jsx(ie,{language:"javascript",style:{..._,hljs:{..._.hljs,backgroundColor:"transparent"}},children:i}),N=({code:i,style:r,wrapStyle:n})=>{const u=K(i),[l,h]=f.useState(!1),[c,m]=f.useState(!1),v=async()=>{try{await navigator.clipboard.writeText(u),h(!0),setTimeout(()=>h(!1),1500)}catch(q){console.error("Failed to copy code:",q)}};return e.jsxs(t,{role:"code-wrap",onMouseEnter:()=>{m(!0)},onMouseLeave:()=>{m(!1)},style:{position:"relative",border:"1px solid #dfdfdf",width:"100%",padding:"15px 0 15px 20px",display:"flex",...n},children:[e.jsx(w,{visible:c,from:{scale:0},to:{scale:1},duration:200,style:{position:"absolute",right:10,top:10,display:"inline-flex",alignItems:"center",justifyContent:"center"},children:e.jsx(V,{placement:"t",title:l?"Copied":"Copy",children:e.jsx(T,{s:!0,title:l?"Copied":"Copy",onClick:v,style:{display:"inline-flex",alignItems:"center",justifyContent:"center",backgroundColor:"#393939"},children:l?e.jsx("span",{children:"✓"}):e.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 448 512",width:14,height:14,xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"})})})})}),e.jsx(t,{style:{backgroundColor:"#fff",borderRadius:2,overflow:"auto",...r},children:e.jsx(E,{code:u})})]})},s=({title:i,children:r,replacement:n,style:u})=>{let l=n||ne(r,{tabStop:2});return l=l.replace(/<(\w+)>\s*([^<]+?)\s*<\/\1>/g,(h,c,m)=>`<${c}>${m}</${c}>`),e.jsxs(t,{role:"usage-block",fz:14,fh:!0,fw:!0,border:!0,borderColor:"#bababa",textColor:"#333",rounded:!0,ib:!0,p:14,style:u,children:[i&&e.jsx("p",{children:i}),e.jsx(t,{mt:6,mb:20,h:0,style:{borderTop:"1px dashed #dfdfdf"}}),r,e.jsx(t,{mt:30,mb:10,h:0,style:{borderTop:"1px dashed #dfdfdf"}}),e.jsx(z,{open:!1,duration:200,exitDuration:100,head:e.jsx(V,{title:"Code",children:e.jsx(d,{xs:!0,style:{backgroundColor:"#f3f3f3"},children:"</>"})}),children:e.jsx(t,{pt:10,children:e.jsx(t,{fw:!0,border:!0,rounded:!0,children:e.jsx(N,{wrapStyle:{padding:0,border:"none",marginTop:10,maxHeight:200},code:`
 ${l}`})})})})]})},fe=()=>e.jsxs(a,{id:"col",children:[e.jsxs(o,{space:10,mt:10,jc:!0,between:!0,start:!0,wrap:!0,children:[e.jsx(a,{children:e.jsx(s,{title:"XS Size",style:{flex:1},children:e.jsxs(M,{xs:!0,fixed:!0,children:[e.jsxs(b,{head:!0,children:[e.jsx("span",{children:"name"}),e.jsx("span",{children:"age"})]}),e.jsxs(b,{children:[e.jsx("span",{children:"Puma"}),e.jsx("span",{children:"1970"})]}),e.jsxs(b,{children:[e.jsx("span",{children:"Nike"}),e.jsx("span",{children:"1970"})]})]})})}),e.jsx(a,{children:e.jsx(s,{title:"Small Size",style:{flex:1},children:e.jsxs(M,{s:!0,children:[e.jsxs(b,{head:!0,children:[e.jsx("span",{children:"name"}),e.jsx("span",{children:"age"})]}),e.jsxs(b,{children:[e.jsx("span",{children:"Puma"}),e.jsx("span",{children:"1970"})]}),e.jsxs(b,{children:[e.jsx("span",{children:"Nike"}),e.jsx("span",{children:"1970"})]})]})})}),e.jsx(a,{children:e.jsx(s,{title:"Medium Size (default)",style:{flex:1},children:e.jsxs(M,{m:!0,children:[e.jsxs(b,{head:!0,children:[e.jsx("span",{children:"name"}),e.jsx("span",{children:"age"})]}),e.jsxs(b,{children:[e.jsx("span",{children:"Puma"}),e.jsx("span",{children:"1970"})]}),e.jsxs(b,{children:[e.jsx("span",{children:"Nike"}),e.jsx("span",{children:"1970"})]})]})})}),e.jsx(a,{children:e.jsx(s,{title:"Large Size",style:{flex:1},children:e.jsxs(M,{l:!0,children:[e.jsxs(b,{head:!0,children:[e.jsx("span",{children:"name"}),e.jsx("span",{children:"age"})]}),e.jsxs(b,{children:[e.jsx("span",{children:"Puma"}),e.jsx("span",{children:"1970"})]}),e.jsxs(b,{children:[e.jsx("span",{children:"Nike"}),e.jsx("span",{children:"1970"})]})]})})}),e.jsx(a,{children:e.jsx(s,{title:"Custom Style Table",style:{flex:1},children:e.jsxs(M,{xs:!0,fixed:!0,style:{borderCollapse:"collapse",border:"1px solid #dfdfdf"},rowHoverStyle:{backgroundColor:"orange"},cellStyle:{padding:0,border:"1px solid #ff0000"},children:[e.jsxs(b,{head:!0,style:{fontSize:16,color:"#fff",backgroundColor:"#1c285a"},children:[e.jsx("span",{style:{padding:10},children:"brand"}),e.jsx("span",{children:"price"})]}),Array.from({length:10}).map((i,r)=>e.jsxs(b,{style:{color:"#fff",backgroundColor:r%2?"#000":"#06852f"},children:[e.jsx("span",{children:r%2?"Nike":"Puma"}),e.jsxs("span",{children:[r+1e3,e.jsx("i",{children:"$"})]})]},r))]})})}),e.jsx(a,{children:e.jsx(s,{title:"Custom Style Table 2",style:{flex:1},children:e.jsxs(M,{xs:!0,fixed:!0,style:{borderCollapse:"collapse",border:"1px solid orange"},rowStyle:{backgroundColor:"#8361ea"},rowHoverStyle:{backgroundColor:"orange",color:"green"},cellStyle:{padding:0,border:"1px solid #ff0000"},children:[e.jsxs(b,{head:!0,style:{fontSize:16,color:"#fff",backgroundColor:"#1c285a"},children:[e.jsx("span",{style:{padding:10},children:"brand"}),e.jsx("span",{children:"price"})]}),e.jsxs(b,{style:{color:"#fff",backgroundColor:"#06852f"},children:[e.jsx("span",{style:{backgroundColor:"red",color:"blue",padding:20},children:"Nike"}),e.jsx("span",{children:"1970"})]}),e.jsxs(b,{children:[e.jsx("span",{children:"Nike"}),e.jsx("span",{children:"1970"})]})]})})})]}),e.jsxs(t,{fw:!0,mt:50,fz:16,children:["See also ",e.jsx(H,{to:"/components/tablerow",children:"Table Row"})]})]}),he=()=>e.jsx(t,{children:e.jsx(o,{center:!0,between:!0,children:e.jsx(t,{w:250,children:e.jsx(s,{title:"Neutral",children:e.jsxs(o,{between:!0,center:!0,space:2,children:[e.jsx(T,{children:"D"}),e.jsx(T,{xs:!0,children:"xs"}),e.jsx(T,{s:!0,children:"s"}),e.jsx(T,{m:!0,children:"M"}),e.jsx(T,{l:!0,children:"L"})]})})})})}),me=()=>e.jsx(a,{children:e.jsxs(o,{start:!0,space:10,wrap:!0,children:[e.jsx(t,{w:200,children:e.jsx(s,{title:"xs",children:e.jsxs(a,{between:!0,center:!0,space:10,children:[e.jsx(g,{placeholder:"xs size default",xs:!0}),e.jsx(g,{placeholder:"xs size warn",warn:!0,xs:!0}),e.jsx(g,{placeholder:"xs size error",error:!0,xs:!0})]})})}),e.jsx(t,{w:200,children:e.jsx(s,{title:"Small",children:e.jsxs(a,{between:!0,center:!0,space:10,children:[e.jsx(g,{placeholder:"s size default",s:!0}),e.jsx(g,{placeholder:"s size warn",warn:!0,s:!0}),e.jsx(g,{placeholder:"s size error",error:!0,s:!0})]})})}),e.jsx(t,{w:220,children:e.jsx(s,{title:"Medium",children:e.jsxs(a,{between:!0,center:!0,space:10,children:[e.jsx(g,{placeholder:"m size default"}),e.jsx(g,{placeholder:"m size warn",warn:!0}),e.jsx(g,{placeholder:"m size error",error:!0})]})})}),e.jsx(t,{w:250,children:e.jsx(s,{title:"Large",children:e.jsxs(a,{between:!0,center:!0,space:10,children:[e.jsx(g,{placeholder:"L size default",l:!0}),e.jsx(g,{placeholder:"L size warn",warn:!0,l:!0}),e.jsx(g,{placeholder:"L size error",error:!0,l:!0})]})})}),e.jsx(t,{w:200,children:e.jsx(s,{title:"Number",children:e.jsxs(a,{between:!0,center:!0,space:10,children:[e.jsx(g,{number:!0,value:1,step:2,placeholder:"size default"}),e.jsx(g,{number:!0,value:1,step:2,placeholder:"size warn",warn:!0}),e.jsx(g,{number:!0,value:1,step:2,placeholder:"size error",error:!0})]})})}),e.jsx(t,{w:340,children:e.jsx(s,{title:"Label",children:e.jsxs(a,{between:!0,start:!0,space:10,children:[e.jsx(g,{label:"Brand： ",labelStyle:{width:50},step:2,placeholder:"Enter Brand"}),e.jsx(g,{label:"Price： ",labelStyle:{width:50},step:2,placeholder:"Enter Price",warn:!0}),e.jsx(g,{label:"SKU： ",labelStyle:{width:50},step:2,placeholder:"Enter SKU",error:!0})]})})})]})}),xe=()=>{const{add:i}=B(),[r,n]=f.useState("2");return e.jsx(a,{children:e.jsxs(o,{start:!0,space:10,wrap:!0,children:[e.jsx(t,{w:250,children:e.jsx(s,{title:"Sizes",children:e.jsxs(a,{space:10,children:[e.jsxs(o,{fw:!0,center:!0,children:[e.jsx(t,{mr:2,w:20,ib:!0,children:"xs "}),e.jsxs(S,{xs:!0,selectValue:"2",children:[e.jsx(x,{value:"1",children:"1"}),e.jsx(x,{value:"2",children:"2"}),e.jsx(x,{value:"3",children:"3"})]})]}),e.jsxs(o,{fw:!0,center:!0,children:[e.jsx(t,{mr:2,w:20,ib:!0,children:"s "}),e.jsxs(S,{s:!0,selectValue:"2",children:[e.jsx(x,{value:"1",children:"1"}),e.jsx(x,{value:"2",children:"2"}),e.jsx(x,{value:"3",children:"3"})]})]}),e.jsxs(o,{fw:!0,center:!0,children:[e.jsx(t,{mr:2,w:20,ib:!0,children:"m "}),e.jsxs(S,{selectValue:"2",children:[e.jsx(x,{value:"1",children:"1"}),e.jsx(x,{value:"2",children:"2"}),e.jsx(x,{value:"3",children:"3"})]})]}),e.jsxs(o,{fw:!0,center:!0,children:[e.jsx(t,{mr:2,w:20,ib:!0,children:"L "}),e.jsxs(S,{l:!0,selectValue:"2",children:[e.jsx(x,{value:"1",children:"1"}),e.jsx(x,{value:"2",children:"2"}),e.jsx(x,{value:"3",children:"3"})]})]})]})})}),e.jsx(t,{w:200,children:e.jsx(s,{title:"Long list",replacement:`
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
        `,children:e.jsx(o,{style:{zIndex:60},space:10,end:!0,children:e.jsx(S,{l:!0,selectValue:"12",children:Array.from({length:100}).fill(void 0).map((u,l)=>e.jsx(x,{value:l+1+"",children:e.jsxs("span",{children:["hello ",l+1]})},l))})})})}),e.jsx(t,{w:200,children:e.jsx(s,{title:"Custom Style",children:e.jsx(a,{space:10,w:100,children:e.jsxs(S,{s:!0,selectValue:"2",itemStyle:{color:"green",backgroundColor:"#000"},style:{width:166,color:"orange",backgroundColor:"green"},children:[e.jsx(x,{value:"1",children:"1"}),e.jsx(x,{value:"2",children:"2"}),e.jsx(x,{value:"3",children:"3"})]})})})}),e.jsx(t,{w:200,children:e.jsx(s,{title:"onSelectChange",children:e.jsx(a,{space:10,w:100,children:e.jsxs(S,{s:!0,selectValue:r,onSelectChange:u=>{i("New Value is: "+u),n(u)},children:[e.jsx(x,{value:"1",children:"1"}),e.jsx(x,{value:"2",children:"2"}),e.jsx(x,{value:"3",children:"3"})]})})})})]})})},be=()=>e.jsx(a,{children:e.jsxs(o,{end:!0,space:10,children:[e.jsx(t,{w:300,children:e.jsx(s,{title:"Link",children:e.jsx(k,{style:{padding:"0px 20px"},target:"_blank",href:"/components/link",children:"Click Me To Open A Tab"})})}),e.jsx(t,{mt:20,w:300,children:e.jsx(s,{title:"Wrapped by a MenuItem",children:e.jsx(p,{children:e.jsx(k,{target:"_blank",href:"/components/link",children:"Click Me To Open A Tab"})})})})]})}),ge=()=>e.jsx(a,{children:e.jsx(o,{end:!0,space:10,children:e.jsx(t,{w:300,children:e.jsx(s,{title:"Open Modal",replacement:`
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
        `,children:e.jsx(ye,{})})})})}),ye=()=>{const[i,r]=f.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(d,{onClick:()=>{r(!0)},children:"Open Modal"}),i&&e.jsx(le,{onBackdropClick:()=>{r(!1)},children:e.jsx(t,{w:"90%",h:"90%",bg:"white",children:e.jsx(o,{fw:!0,fh:!0,center:!0,jc:!0,children:e.jsx(a,{center:!0,children:e.jsx(d,{onClick:()=>{r(!1)},children:"Close Modal"})})})})})]})},je=()=>e.jsx(a,{children:e.jsxs(o,{space:10,wrap:!0,children:[e.jsx(t,{w:200,children:e.jsx(s,{title:"xs",children:e.jsxs(R,{xs:!0,mb:10,title:"Title",children:[e.jsx("p",{children:"Content 1"}),e.jsx("p",{children:"Content 2"}),e.jsx("p",{children:"Content 3"})]})})}),e.jsx(t,{w:200,children:e.jsx(s,{title:"Small",children:e.jsxs(R,{s:!0,mb:10,title:"Title",children:[e.jsx("p",{children:"Content 1"}),e.jsx("p",{children:"Content 2"}),e.jsx("p",{children:"Content 3"})]})})}),e.jsx(t,{w:200,children:e.jsx(s,{title:"Medium",children:e.jsxs(R,{mb:10,title:"Title",children:[e.jsx("p",{children:"Content 1"}),e.jsx("p",{children:"Content 2"}),e.jsx("p",{children:"Content 3"})]})})}),e.jsx(t,{w:200,children:e.jsx(s,{title:"Large",children:e.jsxs(R,{l:!0,mb:10,title:"Title",children:[e.jsx("p",{children:"Content 1"}),e.jsx("p",{children:"Content 2"}),e.jsx("p",{children:"Content 3"})]})})})]})}),we=()=>e.jsx(a,{children:e.jsx(o,{space:10,wrap:!0,children:e.jsx(t,{w:300,children:e.jsx(s,{title:"Nested Containers",children:e.jsx(t,{w:200,h:200,p:20,bg:"#0064a5",children:e.jsx(t,{fh:!0,p:20,bg:"#088312",children:e.jsx(t,{fh:!0,p:20,bg:"#980808",children:e.jsx(t,{border:!0,rounded:!0,fh:!0,p:20,mr:10,bg:"#000",box:!1})})})})})})})}),Ve=()=>e.jsx(a,{children:e.jsxs(o,{start:!0,space:10,wrap:!0,children:[e.jsx(t,{w:"auto",children:e.jsx(s,{title:"With Width",children:e.jsxs(o,{between:!0,center:!0,w:200,children:[e.jsx(d,{s:!0,primary:!0,children:"1"}),e.jsx(d,{s:!0,primary:!0,children:"2"}),e.jsx(d,{s:!0,primary:!0,children:"3"}),e.jsx(d,{s:!0,primary:!0,children:"4"})]})})}),e.jsx(t,{w:"auto",children:e.jsx(s,{title:"With Space",children:e.jsxs(o,{space:20,children:[e.jsx(d,{error:!0,children:"1"}),e.jsx(d,{error:!0,children:"2"}),e.jsx(d,{error:!0,children:"3"}),e.jsx(d,{error:!0,children:"4"})]})})}),e.jsx(t,{w:230,children:e.jsx(s,{title:"With Column",children:e.jsxs(o,{space:20,between:!0,w:200,h:200,children:[e.jsxs(a,{between:!0,fh:!0,children:[e.jsx(d,{children:"1"}),e.jsx(d,{children:"4"})]}),e.jsx(a,{fh:!0,center:!0,jc:!0,children:e.jsx(d,{children:"5"})}),e.jsxs(a,{between:!0,end:!0,fh:!0,children:[e.jsx(d,{children:"2"}),e.jsx(d,{children:"3"})]})]})})})]})}),ve=()=>e.jsx(a,{children:e.jsx(t,{w:200,children:e.jsx(s,{title:"Titles",children:e.jsxs(a,{stretch:!0,between:!0,children:[e.jsx(y,{h1:!0,textColor:"red",sticky:!0,style:{zIndex:100},children:"h1"}),e.jsx(y,{h2:!0,children:"h2"}),e.jsx(y,{h3:!0,children:"h3"}),e.jsx(y,{h4:!0,children:"h4"}),e.jsx(y,{h5:!0,children:"h5"}),e.jsx(y,{h6:!0,children:"h6"})]})})})}),qe=()=>e.jsx(a,{children:e.jsx(o,{start:!0,space:10,wrap:!0,children:e.jsx(t,{w:180,children:e.jsx(s,{title:"Space 10",children:e.jsx(t,{border:!0,children:e.jsxs(L,{space:10,children:[e.jsx(p,{s:!0,children:"Copy"}),e.jsx(p,{s:!0,children:"Paste"}),e.jsx(p,{s:!0,children:"Cut"}),e.jsx(p,{s:!0,children:"Duplicate"}),e.jsx(p,{s:!0,children:"Delete"}),e.jsx(p,{s:!0,children:e.jsxs(o,{between:!0,children:[e.jsx("span",{children:"More"}),e.jsx("span",{})]})})]})})})})})}),Ce=()=>e.jsx(a,{children:e.jsx(o,{start:!0,space:10,wrap:!0,children:e.jsx(t,{w:"auto",children:e.jsx(s,{title:"Sizes",children:e.jsxs(a,{children:[e.jsx(p,{xs:!0,children:"XS size Menu Item "}),e.jsx(p,{s:!0,children:"Small size Menu Item "}),e.jsx(p,{children:"medium size Menu Item"}),e.jsx(p,{l:!0,children:"Large size Menu Item"})]})})})})}),Se=()=>{const[i,r]=f.useState({bg:"#cab077",defaultBg:"#cab077",msg:"I accept PNG only",defaultMsg:"I accept PNG only"}),[n,u]=f.useState({bg:"#ab86cc",defaultBg:"#ab86cc",msg:"I accept IMAGE only",defaultMsg:"I accept IMAGE only"}),[l,h]=f.useState({bg:"#4de6d5",defaultBg:"#4de6d5",msg:"I accept ALL",defaultMsg:"I accept ALL"});return e.jsx(a,{children:e.jsx(o,{start:!0,space:10,wrap:!0,children:e.jsx(t,{maxW:700,w:"auto",children:e.jsx(s,{title:"Try to Drop File On Blocks",children:e.jsxs(o,{w:620,h:200,stretch:!0,space:10,children:[e.jsx(O,{accepts:["image/png"],onDropped:(c,m)=>{m&&r({...i,bg:"green",msg:c.dataTransfer.files[0].name})},onDragIsOver:c=>{r({...i,bg:c?"blue":"red",msg:c?"I Love PNG !":"I Love PNG ONLY"})},onDragIsLeave:()=>{r({...i,bg:i.defaultBg,msg:i.defaultMsg})},children:e.jsx(t,{fw:!0,fh:!0,tc:!0,bg:i.bg,children:e.jsx(o,{fh:!0,center:!0,jc:!0,children:e.jsx(j,{textColor:"white",children:i.msg})})})}),e.jsx(O,{accepts:["image/*"],onDropped:(c,m)=>{m&&u({...n,bg:"green",msg:c.dataTransfer.files[0].name})},onDragIsOver:c=>{u({...n,bg:c?"blue":"red",msg:c?"I Love IMAGE !":"I Love IMAGE ONLY"})},onDragIsLeave:()=>{u({...n,bg:n.defaultBg,msg:n.defaultMsg})},children:e.jsx(t,{fw:!0,fh:!0,tc:!0,bg:n.bg,children:e.jsx(o,{fh:!0,center:!0,jc:!0,children:e.jsx(j,{textColor:"white",children:n.msg})})})}),e.jsx(O,{onDropped:(c,m)=>{m&&h({...l,bg:"green",msg:c.dataTransfer.files[0].name})},onDragIsOver:c=>{h({...l,bg:c?"blue":"red",msg:c?"More And More !":"What Is This?"})},onDragIsLeave:()=>{h({...l,bg:l.defaultBg,msg:l.defaultMsg})},children:e.jsx(t,{fw:!0,fh:!0,tc:!0,bg:l.bg,children:e.jsx(o,{fh:!0,center:!0,jc:!0,children:e.jsx(j,{textColor:"white",children:l.msg})})})})]})})})})})},Me=()=>e.jsx(a,{children:e.jsxs(o,{start:!0,space:10,wrap:!0,children:[e.jsx(t,{w:200,children:e.jsx(s,{title:"Set Rotate",replacement:`
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
        `,children:e.jsx(o,{fw:!0,jc:!0,center:!0,children:e.jsx(ke,{})})})}),e.jsx(t,{w:300,children:e.jsx(s,{title:"Set Translates",replacement:`
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
        `,children:e.jsx(Te,{})})}),e.jsx(t,{w:200,children:e.jsx(s,{title:"Scale",replacement:`
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
        `,children:e.jsx(o,{fw:!0,jc:!0,center:!0,children:e.jsx(Ie,{})})})}),e.jsx(t,{w:200,children:e.jsx(s,{title:"Position Fixed(Screen Center)",replacement:`
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
        `,children:e.jsx(Pe,{})})}),e.jsx(t,{w:200,children:e.jsx(s,{title:"Delayed 1000ms",replacement:`
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
        `,children:e.jsx(ze,{})})}),e.jsx(t,{w:200,children:e.jsx(s,{title:"Enter 3000ms, exit 4000ms",replacement:`
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
        `,children:e.jsx(He,{})})}),e.jsx(t,{w:"auto",children:e.jsx(s,{title:"Callback Function",replacement:`
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
        `,children:e.jsx(Re,{})})}),e.jsx(t,{w:300,children:e.jsx(s,{title:"Time Function - Cubic-Bezier",replacement:`
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
        `,children:e.jsx(Be,{})})}),e.jsx(t,{w:"auto",children:e.jsx(s,{title:"Composition",replacement:`
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
        `,children:e.jsx(Le,{})})})]})}),Ie=()=>{const[i,r]=f.useState(!1);return e.jsx("div",{children:e.jsx(w,{visible:i,onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),from:{opacity:.5,scale:.5},to:{opacity:1,scale:1},children:e.jsx(o,{jc:!0,center:!0,bg:"#0b2e71",mt:10,w:100,h:100,border:!0,rounded:!0})})})},Te=()=>{const[i,r]=f.useState(!1);return e.jsxs(t,{children:[e.jsx(d,{s:!0,onClick:()=>{r(!i)},children:"Move"}),e.jsx(w,{visible:i,style:{width:50,height:50},from:{translate:"0 10px"},to:{translate:"200px -20px"},children:e.jsx(o,{fw:!0,fh:!0,center:!0,jc:!0,bg:"#ac5353",border:!0,rounded:!0})})]})},ke=()=>{const[i,r]=f.useState(!1);return e.jsx(t,{w:100,children:e.jsx(w,{onMouseEnter:()=>{r(!0)},onMouseLeave:()=>{r(!1)},visible:i,style:{width:50,height:50},from:{rotate:"0deg"},to:{rotate:"360deg"},children:e.jsx(o,{fw:!0,fh:!0,center:!0,jc:!0,bg:"#571881",rounded:!0,border:!0})})})},Pe=()=>{const[i,r]=f.useState(!1);return e.jsxs(t,{w:100,h:100,children:[e.jsx(d,{s:!0,onClick:()=>{r(!i)},children:"Toggle"}),e.jsx(t,{w:100,h:100,fixed:!0,tc:!0,t:"50%",l:"50%",style:{transform:"translate(-50%, -50%)",pointerEvents:i?"auto":"none",zIndex:9999},children:e.jsx(w,{from:{scale:0},to:{scale:1},visible:i,children:e.jsx(ae,{w:100,h:100,alignItems:"center",justifyContent:"center",border:!0,rounded:!0,textColor:"#fff",bg:"#146e18",children:"Center"})})})]})},ze=()=>{const[i,r]=f.useState(!1);return e.jsx(t,{ml:10,children:e.jsx(w,{onMouseEnter:()=>{r(!0)},onMouseLeave:()=>{r(!1)},delay:1e3,visible:i,style:{width:100,height:30,backgroundColor:"#146e18",color:"#fff",overflow:"hidden"},from:{width:100,height:20},to:{width:140,height:50},children:e.jsx(t,{p:2,bg:"#146e18",textColor:"#fff",children:"Hover On And Wait"})})})},He=()=>{const[i,r]=f.useState(!1);return e.jsx(t,{ml:10,children:e.jsx(w,{onMouseEnter:()=>{r(!0)},onMouseLeave:()=>{r(!1)},duration:3e3,exitDuration:4e3,visible:i,style:{width:50,height:50},from:{rotate:"0deg"},to:{rotate:"360deg"},children:e.jsx(o,{fw:!0,fh:!0,center:!0,jc:!0,bg:"#8e7f34",rounded:!0,border:!0})})})},Be=()=>{const[i,r]=f.useState(!1);return e.jsxs(t,{ml:10,children:[e.jsx(d,{s:!0,onClick:()=>{r(!i)},children:i?"Back":"Go"}),e.jsx(t,{w:100,h:50,children:e.jsx(w,{visible:i,effect:"cubic-bezier(0.9, 0.5, 0.1, 1)",from:{translate:"0 0",transform:{value:"skewX(-20deg)",delay:100}},to:{translate:"100px 0",transform:"skewX(0deg)"},children:e.jsx(w,{visible:i,effect:"cubic-bezier(0.9, 0.5, 0.1, 1)",from:{translate:"0 0",transform:"skewX(20deg)"},to:{translate:{value:"100px 0",duration:800},transform:{value:"skewX(-20deg)",duration:800}},children:e.jsx(o,{fw:!0,fh:!0,mt:10,w:50,h:50,center:!0,jc:!0,bg:"#61984d",rounded:!0,border:!0})})})})]})},Re=()=>{const[i,r]=f.useState(!1);return f.useEffect(()=>{let n=setInterval(()=>{i||r(!0)},1500);return()=>{clearInterval(n)}},[]),e.jsx(t,{ml:10,children:e.jsx(t,{w:100,h:100,m:30,children:e.jsx(w,{visible:i,delay:100,duration:200,exitDuration:100,from:{scale:1,opacity:.8},to:{scale:.8,opacity:1},onAnimationEntered:()=>{r(!1)},onAnimationExited:()=>{},children:e.jsx(w,{visible:i,delay:0,duration:500,exitDuration:100,from:{scale:1,opacity:.5},to:{scale:1.2,opacity:1},children:e.jsx(o,{fw:!0,fh:!0,w:100,h:100,center:!0,jc:!0,fz:100,children:"❤️"})})})})})},Le=()=>{const[i,r]=f.useState(!1);return e.jsxs(t,{ml:10,children:[e.jsx(d,{s:!0,onClick:()=>{r(!i)},children:"Toggle"}),e.jsx(t,{rela:!0,mt:20,w:100,h:100,children:e.jsx(w,{visible:i,style:{position:"absolute"},from:{marginLeft:{value:0,delay:100,duration:100},rotate:"0deg",scale:1,background:"#3cb65d",left:{value:0,delay:100,duration:200}},to:{marginLeft:{value:-50,delay:0,duration:100},backgroundColor:{value:"#e80c0c",delay:100,duration:800},scale:.5,rotate:"180deg",left:{value:200,delay:100,duration:300}},children:e.jsx(o,{fw:!0,fh:!0,w:50,h:50,center:!0,jc:!0,border:!0})})})]})},Ee=()=>e.jsx(t,{children:e.jsx(t,{w:300,children:e.jsx(s,{title:"Placements",children:e.jsxs(a,{stretch:!0,between:!0,h:300,children:[e.jsxs(o,{between:!0,children:[e.jsx(V,{placement:"tl",title:"hello world",children:e.jsx(d,{children:"tl"})}),e.jsx(V,{placement:"t",bgColor:"green",textColor:"red",title:"helloworldhelloworldhello world",children:e.jsx(d,{children:"t"})}),e.jsx(V,{placement:"tr",title:"hello world",children:e.jsx(d,{children:"tr"})})]}),e.jsxs(o,{between:!0,children:[e.jsx(V,{placement:"l",title:"hello world",children:e.jsx(d,{children:"l"})}),e.jsx(t,{}),e.jsx(V,{placement:"r",title:"hello world",children:e.jsx(d,{children:"r"})})]}),e.jsxs(o,{between:!0,children:[e.jsx(V,{placement:"bl",title:"hello world",children:e.jsx(d,{children:"bl"})}),e.jsx(V,{placement:"b",title:"hello world",children:e.jsx(d,{children:"b"})}),e.jsx(V,{placement:"br",title:"hello world",children:e.jsx(d,{children:"br"})})]})]})})})}),Ne=()=>e.jsxs(a,{id:"col",children:[e.jsx(a,{w:200,children:e.jsx(s,{title:"XS Size",style:{flex:1},children:e.jsxs(M,{xs:!0,children:[e.jsxs(b,{head:!0,children:[e.jsx("h1",{children:"name"}),e.jsx("h2",{children:"age"})]}),e.jsxs(b,{children:[e.jsx("div",{children:"Puma"}),e.jsx("p",{children:"1970"})]}),e.jsxs(b,{children:[e.jsx("span",{children:"Nike"}),e.jsx("span",{children:"1970"})]})]})})}),e.jsxs(t,{mt:50,fz:16,children:["See also ",e.jsx(H,{to:"/components/table",children:"Table"})]})]}),Ae=()=>{const i=["xs","s","m","l"];return e.jsx(a,{id:"col",children:e.jsxs(o,{space:10,mt:10,maxW:500,wrap:!0,children:[e.jsx(a,{maxW:260,children:e.jsx(s,{title:"Neutral",children:e.jsx(o,{between:!0,end:!0,space:10,children:i.map(r=>{const n={[r]:!0};return e.jsx(d,{...n,children:r},r)})})})}),e.jsx(a,{maxW:260,children:e.jsx(s,{title:"Primary",children:e.jsx(o,{between:!0,end:!0,space:10,children:i.map(r=>{const n={[r]:!0};return e.jsx(d,{primary:!0,...n,children:r},r)})})})}),e.jsx(a,{maxW:260,children:e.jsx(s,{title:"Warn",children:e.jsx(o,{between:!0,end:!0,space:10,children:i.map(r=>{const n={[r]:!0};return e.jsx(d,{warn:!0,...n,children:r},r)})})})}),e.jsx(a,{maxW:260,children:e.jsx(s,{title:"Error",children:e.jsx(o,{between:!0,end:!0,space:10,children:i.map(r=>{const n={[r]:!0};return e.jsx(d,{error:!0,...n,children:r},r)})})})})]})})},We=()=>e.jsx(a,{children:e.jsx(o,{start:!0,space:10,wrap:!0,children:e.jsx(t,{w:"auto",children:e.jsx(s,{title:"Titles",children:e.jsx(o,{w:400,children:e.jsxs(a,{fw:!0,stretch:!0,children:[e.jsx(j,{size:10,textColor:"gray",children:" Font size 10 "}),e.jsx(j,{size:12,textColor:"gray",children:" Font size 12 "}),e.jsx(j,{size:14,textColor:"gray",children:" Font size 14 "}),e.jsx(j,{size:16,textColor:"gray",children:" Font size 16 "}),e.jsx(j,{size:18,textColor:"gray",children:" Font size 18 "}),e.jsx(j,{size:20,textColor:"gray",children:" Font size 20 "}),e.jsx(j,{size:30,textColor:"gray",children:" Font size 30 "}),e.jsx(j,{size:40,textColor:"gray",children:" Font size 40 "}),e.jsx(j,{size:60,textColor:"gray",children:" Font size 60 "}),e.jsx(j,{size:20,center:!0,textColor:"gray",children:"Centered Paragraph"})]})})})})})}),Fe=()=>e.jsx(a,{children:e.jsxs(o,{start:!0,space:10,wrap:!0,children:[e.jsx(t,{w:200,children:e.jsx(s,{title:"With Height",children:e.jsxs(a,{border:!0,around:!0,center:!0,h:200,children:[e.jsx(d,{s:!0,primary:!0,children:"1"}),e.jsx(d,{s:!0,primary:!0,children:"2"}),e.jsx(d,{s:!0,primary:!0,children:"3"}),e.jsx(d,{s:!0,primary:!0,children:"4"})]})})}),e.jsx(t,{w:200,children:e.jsx(s,{title:"With Space",children:e.jsxs(a,{border:!0,center:!0,space:10,children:[e.jsx(d,{error:!0,children:"1"}),e.jsx(d,{error:!0,children:"2"}),e.jsx(d,{error:!0,children:"3"}),e.jsx(d,{error:!0,children:"4"})]})})}),e.jsx(t,{w:"auto",children:e.jsx(s,{title:"With Row",children:e.jsxs(o,{border:!0,p:10,m:"0 auto",w:115,h:150,space:2,center:!0,fz:30,textColor:"red",children:[e.jsxs(a,{start:!0,fh:!0,fz:18,children:[e.jsx("p",{children:" 8 "}),e.jsx("p",{children:" ♥ "})]}),e.jsxs(a,{center:!0,jc:!0,fh:!0,space:10,children:[e.jsx("p",{children:" ♥ "}),e.jsx("p",{children:" ♥ "}),e.jsx("p",{children:" ♥ "})]}),e.jsxs(a,{h:60,center:!0,jc:!0,fh:!0,children:[e.jsx("p",{children:" ♥ "}),e.jsx("p",{children:" ♥ "})]}),e.jsxs(a,{center:!0,jc:!0,fh:!0,space:10,children:[e.jsx("p",{children:" ♥ "}),e.jsx("p",{children:" ♥ "}),e.jsx("p",{children:" ♥ "})]}),e.jsxs(a,{je:!0,end:!0,fh:!0,fz:18,children:[e.jsx("p",{children:" ♥ "}),e.jsx("p",{children:" 8 "})]})]})})})]})}),De=()=>e.jsx(t,{children:e.jsx(t,{w:300,children:e.jsxs(o,{between:!0,space:10,children:[e.jsx(s,{title:"Default Opened",children:e.jsx(t,{w:200,children:e.jsx(o,{between:!0,border:!0,children:e.jsx(z,{head:e.jsx(p,{hoverStyle:{backgroundColor:"#012a57",color:"orange"},style:{backgroundColor:"#aa7474",color:"#fff"},children:"toggle"}),children:e.jsxs(L,{children:[e.jsx(p,{children:"1"}),e.jsx(p,{children:"2"}),e.jsx(p,{children:"3"}),e.jsx(p,{children:"4"}),e.jsx(p,{children:"5"})]})})})})}),e.jsx(s,{title:"Toggle",children:e.jsx(t,{w:200,children:e.jsx(o,{between:!0,border:!0,children:e.jsx(z,{open:!1,head:e.jsx(p,{children:"toggle"}),children:e.jsxs(L,{children:[e.jsx(p,{children:"1"}),e.jsx(p,{children:"2"}),e.jsx(p,{children:"3"}),e.jsx(p,{children:"4"}),e.jsx(p,{children:"5"})]})})})})})]})})}),D={table:{to:"table",name:"Table",apiNameKey:"Table",comp:e.jsx(fe,{})},tablerow:{to:"tablerow",name:"Table Row",apiNameKey:"TableRow",comp:e.jsx(Ne,{})},button:{to:"button",name:"Button",apiNameKey:"Button",comp:e.jsx(Ae,{})},iconbutton:{to:"iconbutton",name:"IconButton",apiNameKey:"IconButton",comp:e.jsx(he,{})},input:{to:"input",name:"Input",apiNameKey:"Input",comp:e.jsx(me,{})},select:{to:"select",name:"Select",apiNameKey:"Select",comp:e.jsx(xe,{})},link:{to:"link",name:"Link",apiNameKey:"Link",comp:e.jsx(be,{})},modal:{to:"modal",name:"Modal",apiNameKey:"Modal",comp:e.jsx(ge,{})},panel:{to:"panel",name:"Panel",apiNameKey:"Panel",comp:e.jsx(je,{})},container:{to:"container",name:"Container",apiNameKey:"Container",comp:e.jsx(we,{})},row:{to:"row",name:"Row",apiNameKey:"Row",comp:e.jsx(Ve,{})},column:{to:"column",name:"Column",apiNameKey:"Column",comp:e.jsx(Fe,{})},title:{to:"title",name:"Title",apiNameKey:"Title",comp:e.jsx(ve,{})},paragraph:{to:"paragraph",name:"Paragraph",apiNameKey:"Paragraph",comp:e.jsx(We,{})},menu:{to:"menu",name:"Menu",apiNameKey:"Menu",comp:e.jsx(qe,{})},menuitem:{to:"menuitem",name:"MenuItem",apiNameKey:"MenuItem",comp:e.jsx(Ce,{})},drop:{to:"drop",name:"Drop",apiNameKey:"Drop",comp:e.jsx(Se,{})},transition:{to:"transition",name:"Transition",apiNameKey:"Transition",comp:e.jsx(Me,{})},tooltip:{to:"tooltip",name:"Tooltip",apiNameKey:"Tooltip",comp:e.jsx(Ee,{})},collapse:{to:"collapse",name:"Collapse",apiNameKey:"Collapse",comp:e.jsx(De,{})}},A=({children:i,...r})=>e.jsx("div",{role:"markdown-block",...r,children:e.jsx(oe,{components:{code({children:n}){return e.jsx("span",{style:{padding:"2px 4px",borderRadius:3,color:" #000000",backgroundColor:"#dfdfdf",fontFamily:"monospace",fontSize:".9em"},children:n})}},children:i})}),$=({data:i})=>{if(!i)return null;const r={color:"#044e95",width:"100%",textAlign:"center",paddingLeft:10},n={maxWidth:300,width:"100%",textAlign:"left",paddingLeft:10,whiteSpace:"wrap"};return e.jsx(t,{mb:20,children:e.jsxs(M,{fw:!0,fh:!0,xs:!0,style:{fontSize:13},cellStyle:{whiteSpace:"pre-wrap",wordWrap:"break-word",wordBreak:"break-word",minWidth:100,maxWidth:300},children:[e.jsxs(b,{head:!0,children:[e.jsx(j,{style:r,textColor:"#292929",children:"Property"}),e.jsx("span",{children:"type"}),e.jsx("span",{children:"Default Value"}),e.jsx("span",{children:"required"}),e.jsx("p",{style:n,children:"description"})]}),Object.keys(i).map((u,l)=>{let{type:h,required:c,defaultValue:m,description:v}=i[u],q=m==="true"||m==="false";return e.jsxs(b,{children:[e.jsx("span",{style:{...r,fontFamily:"monospace"},children:u}),e.jsx(E,{code:h}),q?e.jsx("span",{style:{fontFamily:"monospace",color:m==="true"?"#22863a":"#a52525"},children:m}):e.jsx(t,{fz:14,pl:4,style:{...n,lineHeight:"1.5rem"},children:e.jsx(A,{style:{textAlign:"center"},children:`${m}`})}),e.jsx("span",{style:{fontFamily:"monospace",color:c?"#22863a":"#a52525"},children:c.toString()}),e.jsx(t,{fz:14,pl:4,style:{...n,lineHeight:"1.5rem"},children:e.jsx(A,{children:v})})]},l)})]})})},Oe=()=>{const i={comp:{required:!0,defaultValue:"\\-",type:"ReactNode",description:"The content to display in the notification."},type:{required:!1,defaultValue:'"info"',type:'"info" | "suc" | "warn" | "error"',description:"Notification type"},delay:{required:!1,defaultValue:2e3,type:"number | false",description:"Time in milliseconds before auto-removal. Use false to disable timeout."},Return:{required:!1,defaultValue:"\\-",type:"string",description:"Returns A unique ID for the notification"}};return e.jsxs(a,{children:[e.jsxs(o,{start:!0,space:10,wrap:!0,children:[e.jsx(t,{w:200,children:e.jsx(s,{title:"New One",replacement:`
          const NotificationSampleSimple: React.FC = () => {
            const {add} = useNotification()
          
            return <Col between>
              <Button onClick={() => { add('Hello: ' + new Date().toLocaleString('en-US')) }}>Show</Button>
            </Col>
          }
        `,children:e.jsx(Ke,{})})}),e.jsx(t,{w:200,children:e.jsx(s,{title:"Toggle a Notification",replacement:`
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
        `,children:e.jsx($e,{})})}),e.jsx(t,{w:320,children:e.jsx(s,{title:"Notification Types",replacement:`
        const NotificationSampleType: React.FC = () => {
          const {add} = useNotification()
        
          return <Row between>
            <Button onClick={() => { add('Hello', 'info') }}>Normal</Button>
            <Button primary onClick={() => { add('Hello', 'suc') }}>Warn</Button>
            <Button warn onClick={() => { add('Hello', 'warn') }}>Warn</Button>
            <Button error onClick={() => { add('Warning', 'error') }}>Error</Button>
          </Row>
        }
          `,children:e.jsx(Ue,{})})}),e.jsx(t,{w:200,children:e.jsx(s,{title:"Pass in a Component",replacement:`
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
                    `,children:e.jsx(Je,{})})})]}),e.jsx(t,{mt:100,mb:40,children:e.jsxs(a,{w:"auto",children:[e.jsx(k,{href:"#api",children:"# API"}),e.jsx(t,{mt:30,mb:40}),e.jsx(y,{h5:!0,children:"Add"}),e.jsx(E,{code:K(`
          const id = add(comp, type?, delay? )  
        `)}),e.jsx(t,{mb:30}),e.jsx($,{data:i}),e.jsx(t,{mt:30,mb:40}),e.jsx(y,{h5:!0,children:"Remove"}),e.jsx(E,{code:K(`
          const id = add(comp, type?, delay? )  
          
          remove(id)
        `)}),e.jsx(t,{mb:30}),e.jsx($,{data:{id:{required:!0,defaultValue:"\\-",type:"string",description:"ID of the notification to remove."}}})]})})]})},Ke=()=>{const{add:i}=B();return e.jsx(a,{between:!0,children:e.jsx(d,{onClick:()=>{i("Hello: "+new Date().toLocaleString("en-US"))},children:"Show"})})},$e=()=>{const{add:i,remove:r}=B(),n=f.useRef(void 0);return f.useEffect(()=>()=>{n.current&&r(n.current)},[]),e.jsx(a,{between:!0,children:n.current?e.jsx(d,{primary:!0,onClick:()=>{r(n.current),n.current=void 0},children:"Hide"}):e.jsx(d,{primary:!0,onClick:()=>{n.current&&r(n.current),n.current=i("A notification that stays centered on the screen until it is manually removed.","info",!1)},children:"Show"})})},Ue=()=>{const{add:i}=B();return e.jsxs(o,{between:!0,children:[e.jsx(d,{onClick:()=>{i("Hello","info")},children:"Normal"}),e.jsx(d,{primary:!0,onClick:()=>{i("Hello","suc")},children:"Warn"}),e.jsx(d,{warn:!0,onClick:()=>{i("Hello","warn")},children:"Warn"}),e.jsx(d,{error:!0,onClick:()=>{i("Warning","error")},children:"Error"})]})},Je=()=>{const{add:i,remove:r}=B(),n=f.useRef(void 0),u=()=>e.jsxs(t,{w:100,h:100,children:[e.jsx(t,{abs:!0,ovh:!0,w:"auto",r:5,t:5,children:e.jsx(T,{xs:!0,onClick:()=>{r(n.current),n.current=""},children:"×"})}),e.jsx(y,{children:"Title"}),e.jsx(y,{children:"Hello"})]});return e.jsx(a,{between:!0,children:e.jsx(d,{disabled:!!n.current,primary:!0,onClick:()=>{n.current||(n.current=i(e.jsx(u,{}),"info",!1))},children:"Show"})})},U={notification:{to:"notification",name:"Notification",apiNameKey:"NotificationProvider",comp:e.jsx(Oe,{})}},Ge=()=>{const{pathname:i,hash:r}=W(),n=f.useRef(null);return f.useEffect(()=>{if(n.current){if(i.indexOf("ui/components")!==-1)if(r){const l=document.querySelector(r);l==null||l.scrollIntoView()}else n.current.scroll(0,0);document.title="@lite-u/ui Library"}},[i]),e.jsxs(o,{fh:!0,ovh:!0,children:[e.jsxs(t,{fh:!0,w:300,style:{overflowY:"auto",boxShadow:"0px 0 4px 0px #b0b0b0"},children:[e.jsx(p,{children:e.jsx(P,{to:"installation",children:"Installation"})}),e.jsx(z,{head:e.jsx(p,{style:{flex:1},children:"Components"}),children:Object.values(D).map((u,l)=>e.jsx(Y,{to:`components/${u.to}`,name:u.name},l))}),e.jsx(z,{head:e.jsx(p,{style:{flex:1},children:"Hooks"}),children:Object.values(U).map((u,l)=>e.jsx(Y,{to:`hooks/${u.to}`,name:u.name},l))}),e.jsx(p,{m:!0,children:e.jsx(P,{to:"compatibility",children:"Compatibility"})}),e.jsx(p,{m:!0,children:e.jsx(P,{to:"accessibility",children:"Accessibility"})}),e.jsx(p,{m:!0,children:e.jsx(P,{to:"i18n",children:"I18n"})}),e.jsx(p,{m:!0,children:e.jsx(P,{to:"responsible",children:"Responsible Design"})}),e.jsx(p,{m:!0,children:e.jsx(P,{to:"tree",children:"Tree Shaking"})})]}),e.jsx(a,{ref:n,role:"app-main",fw:!0,fh:!0,ova:!0,maxH:"100%",children:e.jsx(a,{style:{padding:"0 50px"},children:e.jsx(F,{})})})]})},Y=({to:i,name:r})=>e.jsx(p,{m:!0,style:{padding:0,width:"100%"},children:e.jsx(H,{style:({isActive:n})=>({backgroundColor:n?"#0a2e71":"transparent",color:n?"#fff":"#000",width:"100%",height:"100%",paddingLeft:30,display:"block"}),to:i,children:e.jsx(a,{tl:!0,fh:!0,jc:!0,children:r})})}),_e=()=>e.jsxs(a,{id:"installation",style:{marginTop:100},children:[e.jsx(X,{tag:"button",type:"reset",tabIndex:0,onFocus:()=>{},hover:{backgroundColor:"red"},focus:{backgroundColor:"blue"},active:{backgroundColor:"green"},children:"AAAA"}),e.jsxs(X,{tag:"div",tabIndex:0,onFocus:()=>{},hover:{backgroundColor:"red"},focus:{backgroundColor:"blue"},active:{backgroundColor:"green"},children:[e.jsx(y,{h2:!0,sticky:!0,children:"Installation"}),e.jsxs(S,{children:[e.jsx(x,{value:1,children:"1"}),e.jsx(x,{value:2,children:"2"}),e.jsx(x,{value:3,children:"3"})]}),e.jsx(V,{title:"Installation",children:e.jsx(d,{children:"Hello"})}),e.jsx(o,{children:e.jsx(N,{code:"npm install @lite-u/ui"})}),e.jsx(y,{h4:!0,children:"Import"}),e.jsx(o,{children:e.jsx(N,{code:`import LiteUIProvider from '@ui/index'

export const App() {
  return <LiteUIProvider>
    Your Code Block
  </LiteUIProvider>
}`})})]})]}),Q=({apiData:i})=>Object.keys(i).length===0?null:e.jsx(t,{mt:100,mb:40,children:e.jsxs(a,{w:"auto",children:[e.jsx(y,{h4:!0,id:"api",children:e.jsx(k,{href:"#api",children:"# API"})}),e.jsx(t,{mb:30}),e.jsx($,{data:i})]})}),Xe={tags:{brief:"A styled dropdown (select) component.",intro:"Renders a `<select>` like element styled according to theme context. Supports multiple sizes\nand validation states.",example:`import { Select } from '@lite-u/ui'

<Select s defaultValue={'2'}>
  <SelectItem value={'1'}>1</SelectItem>
  <SelectItem value={'2'}>2</SelectItem>
  <SelectItem value={'3'}>3</SelectItem>
</Select>`},props:{xs:{type:"boolean",required:!1,defaultValue:"false",description:"Extra small size variant for the select."},s:{type:"boolean",required:!1,defaultValue:"false",description:"Small size variant for the select."},m:{type:"boolean",required:!1,defaultValue:"true",description:"Medium size variant for the select."},l:{type:"boolean",required:!1,defaultValue:"false",description:"Large size variant for the select."},itemStyle:{type:"CSSProperties",required:!1,defaultValue:"{}",description:"Custom styles applied to each `SelectItem` within the dropdown."},selectValue:{type:"string | number",required:!1,defaultValue:"\\-",description:"The initial selected value of the select component."},onSelectChange:{type:"(value: string | number) => void",required:!1,defaultValue:"\\-",description:`Callback fired when the selected value changes.
Receives the new value as a string or number.`}}},Ye={tags:{brief:"An individual selectable item used within the Select dropdown.",intro:"Displays a styled item that responds to click and keyboard interactions. Automatically highlights when selected.\nMust be used inside a `Select` component to inherit context.",example:`import { Select, SelectItem } from '@lite-u/ui'

<Select>
  <SelectItem value="1">Option 1</SelectItem>
  <SelectItem value="2">Option 2</SelectItem>
</Select>`},props:{}},Qe={tags:{},props:{}},Ze={tags:{brief:"A customizable button component that supports size and color variants.",intro:"Supports four sizes (xs, s, m, l) and four variants (primary, neutral, warn, error).",example:`import { Button } from '@lite-u/ui'

<Button>Default</Button>
<Button primary xs>Confirm</Button>
<Button error l>Delete</Button>`},props:{xs:{type:"boolean",required:!1,defaultValue:"false",description:"Extra small button. Sizing depends on theme."},s:{type:"boolean",required:!1,defaultValue:"false",description:"Small button. Sizing depends on theme."},m:{type:"boolean",required:!1,defaultValue:"true",description:"Medium button. Sizing depends on theme."},l:{type:"boolean",required:!1,defaultValue:"false",description:"Large button. Sizing depends on theme."},primary:{type:"boolean",required:!1,defaultValue:"false",description:"If true, applies the primary color style."},neutral:{type:"boolean",required:!1,defaultValue:"true",description:"If true, applies the neutral color style."},warn:{type:"boolean",required:!1,defaultValue:"false",description:"If true, applies the warning color style."},error:{type:"boolean",required:!1,defaultValue:"false",description:"If true, applies the error color style."}}},et={tags:{brief:"A square-shaped button designed to contain only an icon, not text.",intro:`Renders a circular or square icon-only button with predefined size variants.
Supports four sizes and applies consistent styling from theme context.`,example:`import { IconButton } from '@lite-u/ui'
import { Icon } from '@lite-u/icons'

<IconButton s onClick={handleClick}>
  <Icon name="search" />
</IconButton>`},props:{xs:{type:"boolean",required:!1,defaultValue:"false",description:"Applies the extra small size variant to the button."},s:{type:"boolean",required:!1,defaultValue:"false",description:"Applies the small size variant to the button."},m:{type:"boolean",required:!1,defaultValue:"true",description:"Applies the small size variant to the button."},l:{type:"boolean",required:!1,defaultValue:"false",description:"Applies the large size variant to the button."}}},tt={tags:{brief:"A stylized input field supporting text and number types with size and color variants.",intro:`Renders either a text or number input with support for theming, sizing, and validation states.
Styling is pulled from the Lite UI theme context and adjusted according to provided props.`,example:`import { Input } from '@lite-u/ui'

<Input placeholder="Your name" />
<Input number step={0.1} error />
<Input label="Username" s primary />`},props:{label:{type:"string",required:!1,defaultValue:"''",description:"Optional label to display as the `<label>`."},xs:{type:"boolean",required:!1,defaultValue:"false",description:"Extra small size variant for the input."},s:{type:"boolean",required:!1,defaultValue:"false",description:"Small size variant for the input."},m:{type:"boolean",required:!1,defaultValue:"true",description:"Medium size variant for the input."},l:{type:"boolean",required:!1,defaultValue:"false",description:"Large size variant for the input."},number:{type:"boolean",required:!1,defaultValue:"false",description:"If true, renders a number input instead of a text input."},primary:{type:"boolean",required:!1,defaultValue:"false",description:"Applies primary styling to the input field."},warn:{type:"boolean",required:!1,defaultValue:"false",description:"Applies warning styling to the input field."},error:{type:"boolean",required:!1,defaultValue:"false",description:"Applies error styling to the input field."},neutral:{type:"boolean",required:!1,defaultValue:"true",description:"Applies neutral styling to the input field."},labelStyle:{type:"{}",required:!1,defaultValue:"{}",description:"Inline styles to customize the label."}}},rt={tags:{brief:"Represents a hyperlink component with consistent styling and optional behavior controls.",intro:"Renders a styled `<a>` element for internal or external navigation, supporting accessibility and customization options.",example:`import { Link } from '@lite-u/ui'

<Link href="https://example.com" target="_blank">
    Visit Example
</Link>`},props:{fw:{type:"boolean",required:!1,defaultValue:"true",description:"If true, the link will take up the full width of its container."},fh:{type:"boolean",required:!1,defaultValue:"true",description:"If true, the link will take up the full height of its container."}}},it={tags:{},props:{}},nt={tags:{brief:"Animates itself.",intro:"To apply animations to elements typically requires external libraries or CSS files. For simplicity and control, `Transition` implements inline animations, putting all animation-related properties under your direct management.\n\n\\\n✅️ `Tips`: Always remember: `Transition` is the direct receiver of the animation and serves as the true boundary between the wrapped component and its parent. If you wrap a component with `Transition`, be sure to apply the corresponding styles directly to `Transition`.",example:`import { Con, Button, Transition } from '@lite-u/ui'

const Sample = () => {
  const [show, setShow] = useState(false)

  return <Con w={100} h={100}>
    <Button onClick={() => setShow(!show)}>Toggle</Button>
    <Transition from={{opacity: 0, scale: 0.9}} to={{opacity: 1, scale: 1}} visible={show}>
      <div>Hello world</div>
    </Transition>
  )
}`},props:{visible:{type:"boolean",required:!1,defaultValue:"true",description:"Whether the transition should be visible.\nIf true, transition animates to `to` styles; otherwise, animates to `from`."},from:{type:"FromType",required:!1,defaultValue:"{}",description:`The initial styles before transition starts.
Can contain raw CSS values or detailed timing configurations.`},to:{type:"FromType",required:!1,defaultValue:"{}",description:"The target styles to animate toward when `visible` is true.\nCan contain raw CSS values or detailed timing configurations."},transformOrigin:{type:"string",required:!1,defaultValue:"center",description:"CSS `transform-origin` value for the transition.\nControls the origin point of scaling/rotating transforms."},effect:{type:"TimingFunction",required:!1,defaultValue:"ease",description:"Default timing function for all transitions unless overridden per-property."},duration:{type:"number",required:!1,defaultValue:"300",description:"Default duration in milliseconds for entering transitions unless overridden per-property."},exitDuration:{type:"number",required:!1,defaultValue:"300",description:"Default duration in milliseconds for leaving transitions unless overridden per-property."},delay:{type:"number",required:!1,defaultValue:"0",description:"Default delay in milliseconds before starting the transition unless overridden per-property."},onAnimationEntered:{type:"VoidFunction",required:!1,defaultValue:"",description:"Called when the enter transition finishes."},onAnimationExited:{type:"VoidFunction",required:!1,defaultValue:"",description:"Called when the exit transition finishes."},onAnimationEnterCancel:{type:"VoidFunction",required:!1,defaultValue:"",description:"Called if the enter transition is canceled (e.g., unmount during enter)."},onAnimationExitCancel:{type:"VoidFunction",required:!1,defaultValue:"",description:"Called if the exit transition is canceled (e.g., re-enter during exit)."}}},lt={tags:{brief:"A flexible modal dialog component that overlays content on top of the existing UI.",intro:`Renders children inside a centered modal container with a customizable backdrop and style.
Supports optional backdrop click handling.`,example:`import { Modal } from '@lite-u/ui'

<Modal onBackdropClick={() => setOpen(false)}>
  <div>Modal Content</div>
</Modal>`},props:{onBackdropClick:{type:"VoidFunction",required:!1,defaultValue:"\\-",description:"Callback invoked when the backdrop is clicked."},backdropBg:{type:"BackgroundColor",required:!1,defaultValue:"rgba(0,0,0,.5)",description:"Background color of the backdrop overlay."}}},at={tags:{brief:"A flexible container component used to group and visually separate content within the layout.",intro:`Provides a styled block container with customizable margin, padding, and background options.
Commonly used to structure and emphasize content sections in a UI.`,example:`import { Panel } from '@lite-u/ui'

<Panel p={20} bg="#fff">
  <h2>Section Title</h2>
  <p>This is a section of content within a panel.</p>
</Panel>`},props:{xs:{type:"boolean",required:!1,defaultValue:"false",description:"If true, sets the panel size to extra small (`xs`)."},s:{type:"boolean",required:!1,defaultValue:"false",description:"If true, sets the panel size to small (`sm`)."},m:{type:"never",required:!1,defaultValue:`false
\\-`,description:"If true, sets the panel size to medium (`md`).\nMargin of the container."},l:{type:"never",required:!1,defaultValue:`false
\\-`,description:"If true, sets the panel size to large (`lg`).\nThe CSS `left` value."},title:{type:"string",required:!1,defaultValue:"\\-",description:"The title text displayed in the panel header."},titleStyle:{type:"CSSProperties",required:!1,defaultValue:"{}",description:"Optional custom styles for the title container."},titleClass:{type:"string",required:!1,defaultValue:"\\-",description:"Optional class name for the title container."},contentStyle:{type:"CSSProperties",required:!1,defaultValue:"{}",description:"Optional custom styles for the panel content container."},contentClass:{type:"string",required:!1,defaultValue:"\\-",description:"Optional class name for the panel content container."},box:{type:"boolean",required:!1,defaultValue:"true",description:"If true, applies `box-sizing: border-box` to the container."},ovh:{type:"boolean",required:!1,defaultValue:"false",description:"If true, applies `overflow: hidden`."},ova:{type:"boolean",required:!1,defaultValue:"false",description:"If true, applies `overflow: auto`."},fw:{type:"boolean",required:!1,defaultValue:"true",description:"If true, sets width to 100%."},fh:{type:"boolean",required:!1,defaultValue:"false",description:"If true, sets height to 100%."},tl:{type:"boolean",required:!1,defaultValue:"false",description:"If true, aligns text to the left."},tc:{type:"boolean",required:!1,defaultValue:"false",description:"If true, aligns text to the center."},tr:{type:"boolean",required:!1,defaultValue:"false",description:"If true, aligns text to the right."},bg:{type:"BackgroundColor",required:!1,defaultValue:"\\-",description:"Background color of the container."},textColor:{type:"Color",required:!1,defaultValue:"\\-",description:"Text color of the container."},fz:{type:"FontSize<string | number>",required:!1,defaultValue:"14",description:"Font size of the container text."},rounded:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, applies border-radius of 5px."},border:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, applies a 1px solid border with the specified border color."},ib:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets display to inline-block."},abs:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets position to absolute."},rela:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets position to relative."},fixed:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets position to fixed."},t:{type:"Top<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `top` value."},r:{type:"Right<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `right` value."},b:{type:"Bottom<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `bottom` value."},borderColor:{type:"BorderColor",required:!1,defaultValue:"#dfdfdf",description:"Color of the border."},p:{type:"Padding<string | number>",required:!1,defaultValue:"\\-",description:"Padding of the container."},pt:{type:"PaddingTop<string | number>",required:!1,defaultValue:"\\-",description:"Padding top of the container."},pr:{type:"PaddingRight<string | number>",required:!1,defaultValue:"\\-",description:"Padding right of the container."},pb:{type:"PaddingBottom<string | number>",required:!1,defaultValue:"\\-",description:"Padding bottom of the container."},pl:{type:"PaddingLeft<string | number>",required:!1,defaultValue:"\\-",description:"Padding left of the container."},mt:{type:"MarginTop<string | number>",required:!1,defaultValue:"\\-",description:"Margin top of the container."},mr:{type:"MarginRight<string | number>",required:!1,defaultValue:"\\-",description:"Margin right of the container."},mb:{type:"MarginBottom<string | number>",required:!1,defaultValue:"\\-",description:"Margin bottom of the container."},ml:{type:"MarginLeft<string | number>",required:!1,defaultValue:"\\-",description:"Margin left of the container."},maxW:{type:"MaxWidth<string | number>",required:!1,defaultValue:"\\-",description:"Maximum width of the container."},maxH:{type:"MaxHeight<string | number>",required:!1,defaultValue:"\\-",description:"Maximum height of the container."},minW:{type:"MinWidth<string | number>",required:!1,defaultValue:"\\-",description:"Minimum width of the container."},minH:{type:"MinHeight<string | number>",required:!1,defaultValue:"\\-",description:"Minimum height of the container."},w:{type:"Width<string | number>",required:!1,defaultValue:"\\-",description:"Width of the container."},h:{type:"Height<string | number>",required:!1,defaultValue:"\\-",description:"Height of the container."}}},ot={tags:{brief:"A horizontal flex container with shorthand alignment and spacing props.",intro:"A layout component built on top of `Flex`, providing horizontal flow and useful alignment helpers like `start`, `center`, `stretch`, `wrap`, and `space`.\nSupports extended `ContainerProps`.",example:`import { Container } from '@lite-u/ui'

<Row center space={10} wrap>
  <span>1</span>
  <span>2</span>
  <span>3</span>
</Row>`},props:{start:{type:"boolean",required:!1,defaultValue:"true",description:"Align items to the start vertically."},center:{type:"boolean",required:!1,defaultValue:"false",description:"Align items to the center vertically."},stretch:{type:"boolean",required:!1,defaultValue:"false",description:"Stretch items to fill the container vertically."},end:{type:"boolean",required:!1,defaultValue:"false",description:"Align items to the end vertically."},wrap:{type:"boolean",required:!1,defaultValue:"false",description:"If true, allows child elements to wrap onto multiple lines."},around:{type:"boolean",required:!1,defaultValue:"false",description:"Justify content with space around."},jc:{type:"boolean",required:!1,defaultValue:"false",description:"Justify content to the center horizontally."},js:{type:"boolean",required:!1,defaultValue:"false",description:"Justifies children to the start horizontally."},je:{type:"boolean",required:!1,defaultValue:"false",description:"Justifies children to the end horizontally."},between:{type:"boolean",required:!1,defaultValue:"false",description:"Justify content with space between items."},space:{type:"Gap<string | number>",required:!1,defaultValue:"0",description:"Gap between child elements."},m:{type:"Margin<string | number>",required:!1,defaultValue:"\\-",description:"Margin of the container."},l:{type:"Left<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `left` value."},fw:{type:"boolean",required:!1,defaultValue:"true",description:"If true, sets width to 100%."},fh:{type:"boolean",required:!1,defaultValue:"false",description:"If true, sets height to 100%."},border:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, applies a 1px solid border with the specified border color."},borderColor:{type:"BorderColor",required:!1,defaultValue:"#dfdfdf",description:"Color of the border."},box:{type:"boolean",required:!1,defaultValue:"true",description:"If true, applies `box-sizing: border-box` to the container."},ovh:{type:"boolean",required:!1,defaultValue:"false",description:"If true, applies `overflow: hidden`."},ova:{type:"boolean",required:!1,defaultValue:"false",description:"If true, applies `overflow: auto`."},tl:{type:"boolean",required:!1,defaultValue:"false",description:"If true, aligns text to the left."},tc:{type:"boolean",required:!1,defaultValue:"false",description:"If true, aligns text to the center."},tr:{type:"boolean",required:!1,defaultValue:"false",description:"If true, aligns text to the right."},bg:{type:"BackgroundColor",required:!1,defaultValue:"\\-",description:"Background color of the container."},textColor:{type:"Color",required:!1,defaultValue:"\\-",description:"Text color of the container."},fz:{type:"FontSize<string | number>",required:!1,defaultValue:"14",description:"Font size of the container text."},rounded:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, applies border-radius of 5px."},ib:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets display to inline-block."},abs:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets position to absolute."},rela:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets position to relative."},fixed:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets position to fixed."},t:{type:"Top<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `top` value."},r:{type:"Right<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `right` value."},b:{type:"Bottom<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `bottom` value."},p:{type:"Padding<string | number>",required:!1,defaultValue:"\\-",description:"Padding of the container."},pt:{type:"PaddingTop<string | number>",required:!1,defaultValue:"\\-",description:"Padding top of the container."},pr:{type:"PaddingRight<string | number>",required:!1,defaultValue:"\\-",description:"Padding right of the container."},pb:{type:"PaddingBottom<string | number>",required:!1,defaultValue:"\\-",description:"Padding bottom of the container."},pl:{type:"PaddingLeft<string | number>",required:!1,defaultValue:"\\-",description:"Padding left of the container."},mt:{type:"MarginTop<string | number>",required:!1,defaultValue:"\\-",description:"Margin top of the container."},mr:{type:"MarginRight<string | number>",required:!1,defaultValue:"\\-",description:"Margin right of the container."},mb:{type:"MarginBottom<string | number>",required:!1,defaultValue:"\\-",description:"Margin bottom of the container."},ml:{type:"MarginLeft<string | number>",required:!1,defaultValue:"\\-",description:"Margin left of the container."},maxW:{type:"MaxWidth<string | number>",required:!1,defaultValue:"\\-",description:"Maximum width of the container."},maxH:{type:"MaxHeight<string | number>",required:!1,defaultValue:"\\-",description:"Maximum height of the container."},minW:{type:"MinWidth<string | number>",required:!1,defaultValue:"\\-",description:"Minimum width of the container."},minH:{type:"MinHeight<string | number>",required:!1,defaultValue:"\\-",description:"Minimum height of the container."},w:{type:"Width<string | number>",required:!1,defaultValue:"\\-",description:"Width of the container."},h:{type:"Height<string | number>",required:!1,defaultValue:"\\-",description:"Height of the container."}}},st={tags:{brief:"A flexible vertical layout container built on top of the Flex component.",intro:"Arranges children in a column direction using Flexbox. Supports alignment props\nlike `start`, `center`, `end`, and spacing between items using the `space` prop.",example:`import { Column } from '@lite-u/ui'
// Col is an alias of Column
import { Col } from '@lite-u/ui'

<Column center space={16}>
  <div>Item 1</div>
  <div>Item 2</div>
</Column>`},props:{start:{type:"boolean",required:!1,defaultValue:"true",description:"Aligns children to the start of the column (left by default)."},center:{type:"boolean",required:!1,defaultValue:"false",description:"Aligns children to the center of the column."},stretch:{type:"boolean",required:!1,defaultValue:"false",description:"Stretches children to fill the column width."},end:{type:"boolean",required:!1,defaultValue:"false",description:"Aligns children to the end of the column (right by default)."},space:{type:"Gap<string | number>",required:!1,defaultValue:"0",description:"Defines spacing between children using the CSS `gap` property."},wrap:{type:"never",required:!1,defaultValue:"false",description:"If true, allows child elements to wrap onto multiple columns."},around:{type:"boolean",required:!1,defaultValue:"false",description:"Justifies children with space around them."},between:{type:"boolean",required:!1,defaultValue:"false",description:"Justifies children with space between them."},jc:{type:"boolean",required:!1,defaultValue:"false",description:"Justifies children to the center vertically."},js:{type:"boolean",required:!1,defaultValue:"false",description:"Justifies children to the start vertically."},je:{type:"boolean",required:!1,defaultValue:"false",description:"Justifies children to the end vertically."},m:{type:"Margin<string | number>",required:!1,defaultValue:"\\-",description:"Margin of the container."},l:{type:"Left<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `left` value."},fw:{type:"boolean",required:!1,defaultValue:"true",description:"If true, sets width to 100%."},fh:{type:"boolean",required:!1,defaultValue:"false",description:"If true, sets height to 100%."},border:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, applies a 1px solid border with the specified border color."},borderColor:{type:"BorderColor",required:!1,defaultValue:"#dfdfdf",description:"Color of the border."},box:{type:"boolean",required:!1,defaultValue:"true",description:"If true, applies `box-sizing: border-box` to the container."},ovh:{type:"boolean",required:!1,defaultValue:"false",description:"If true, applies `overflow: hidden`."},ova:{type:"boolean",required:!1,defaultValue:"false",description:"If true, applies `overflow: auto`."},tl:{type:"boolean",required:!1,defaultValue:"false",description:"If true, aligns text to the left."},tc:{type:"boolean",required:!1,defaultValue:"false",description:"If true, aligns text to the center."},tr:{type:"boolean",required:!1,defaultValue:"false",description:"If true, aligns text to the right."},bg:{type:"BackgroundColor",required:!1,defaultValue:"\\-",description:"Background color of the container."},textColor:{type:"Color",required:!1,defaultValue:"\\-",description:"Text color of the container."},fz:{type:"FontSize<string | number>",required:!1,defaultValue:"14",description:"Font size of the container text."},rounded:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, applies border-radius of 5px."},ib:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets display to inline-block."},abs:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets position to absolute."},rela:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets position to relative."},fixed:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets position to fixed."},t:{type:"Top<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `top` value."},r:{type:"Right<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `right` value."},b:{type:"Bottom<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `bottom` value."},p:{type:"Padding<string | number>",required:!1,defaultValue:"\\-",description:"Padding of the container."},pt:{type:"PaddingTop<string | number>",required:!1,defaultValue:"\\-",description:"Padding top of the container."},pr:{type:"PaddingRight<string | number>",required:!1,defaultValue:"\\-",description:"Padding right of the container."},pb:{type:"PaddingBottom<string | number>",required:!1,defaultValue:"\\-",description:"Padding bottom of the container."},pl:{type:"PaddingLeft<string | number>",required:!1,defaultValue:"\\-",description:"Padding left of the container."},mt:{type:"MarginTop<string | number>",required:!1,defaultValue:"\\-",description:"Margin top of the container."},mr:{type:"MarginRight<string | number>",required:!1,defaultValue:"\\-",description:"Margin right of the container."},mb:{type:"MarginBottom<string | number>",required:!1,defaultValue:"\\-",description:"Margin bottom of the container."},ml:{type:"MarginLeft<string | number>",required:!1,defaultValue:"\\-",description:"Margin left of the container."},maxW:{type:"MaxWidth<string | number>",required:!1,defaultValue:"\\-",description:"Maximum width of the container."},maxH:{type:"MaxHeight<string | number>",required:!1,defaultValue:"\\-",description:"Maximum height of the container."},minW:{type:"MinWidth<string | number>",required:!1,defaultValue:"\\-",description:"Minimum width of the container."},minH:{type:"MinHeight<string | number>",required:!1,defaultValue:"\\-",description:"Minimum height of the container."},w:{type:"Width<string | number>",required:!1,defaultValue:"\\-",description:"Width of the container."},h:{type:"Height<string | number>",required:!1,defaultValue:"\\-",description:"Height of the container."}}},dt={tags:{},props:{start:{type:"boolean",required:!1,defaultValue:"true",description:"Aligns children to the start of the column (left by default)."},center:{type:"boolean",required:!1,defaultValue:"false",description:"Aligns children to the center of the column."},stretch:{type:"boolean",required:!1,defaultValue:"false",description:"Stretches children to fill the column width."},end:{type:"boolean",required:!1,defaultValue:"false",description:"Aligns children to the end of the column (right by default)."},space:{type:"Gap<string | number>",required:!1,defaultValue:"0",description:"Defines spacing between children using the CSS `gap` property."},wrap:{type:"never",required:!1,defaultValue:"false",description:"If true, allows child elements to wrap onto multiple columns."},around:{type:"boolean",required:!1,defaultValue:"false",description:"Justifies children with space around them."},between:{type:"boolean",required:!1,defaultValue:"false",description:"Justifies children with space between them."},jc:{type:"boolean",required:!1,defaultValue:"false",description:"Justifies children to the center vertically."},js:{type:"boolean",required:!1,defaultValue:"false",description:"Justifies children to the start vertically."},je:{type:"boolean",required:!1,defaultValue:"false",description:"Justifies children to the end vertically."},m:{type:"Margin<string | number>",required:!1,defaultValue:"\\-",description:"Margin of the container."},l:{type:"Left<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `left` value."},fw:{type:"boolean",required:!1,defaultValue:"true",description:"If true, sets width to 100%."},fh:{type:"boolean",required:!1,defaultValue:"false",description:"If true, sets height to 100%."},border:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, applies a 1px solid border with the specified border color."},borderColor:{type:"BorderColor",required:!1,defaultValue:"#dfdfdf",description:"Color of the border."},box:{type:"boolean",required:!1,defaultValue:"true",description:"If true, applies `box-sizing: border-box` to the container."},ovh:{type:"boolean",required:!1,defaultValue:"false",description:"If true, applies `overflow: hidden`."},ova:{type:"boolean",required:!1,defaultValue:"false",description:"If true, applies `overflow: auto`."},tl:{type:"boolean",required:!1,defaultValue:"false",description:"If true, aligns text to the left."},tc:{type:"boolean",required:!1,defaultValue:"false",description:"If true, aligns text to the center."},tr:{type:"boolean",required:!1,defaultValue:"false",description:"If true, aligns text to the right."},bg:{type:"BackgroundColor",required:!1,defaultValue:"\\-",description:"Background color of the container."},textColor:{type:"Color",required:!1,defaultValue:"\\-",description:"Text color of the container."},fz:{type:"FontSize<string | number>",required:!1,defaultValue:"14",description:"Font size of the container text."},rounded:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, applies border-radius of 5px."},ib:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets display to inline-block."},abs:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets position to absolute."},rela:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets position to relative."},fixed:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets position to fixed."},t:{type:"Top<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `top` value."},r:{type:"Right<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `right` value."},b:{type:"Bottom<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `bottom` value."},p:{type:"Padding<string | number>",required:!1,defaultValue:"\\-",description:"Padding of the container."},pt:{type:"PaddingTop<string | number>",required:!1,defaultValue:"\\-",description:"Padding top of the container."},pr:{type:"PaddingRight<string | number>",required:!1,defaultValue:"\\-",description:"Padding right of the container."},pb:{type:"PaddingBottom<string | number>",required:!1,defaultValue:"\\-",description:"Padding bottom of the container."},pl:{type:"PaddingLeft<string | number>",required:!1,defaultValue:"\\-",description:"Padding left of the container."},mt:{type:"MarginTop<string | number>",required:!1,defaultValue:"\\-",description:"Margin top of the container."},mr:{type:"MarginRight<string | number>",required:!1,defaultValue:"\\-",description:"Margin right of the container."},mb:{type:"MarginBottom<string | number>",required:!1,defaultValue:"\\-",description:"Margin bottom of the container."},ml:{type:"MarginLeft<string | number>",required:!1,defaultValue:"\\-",description:"Margin left of the container."},maxW:{type:"MaxWidth<string | number>",required:!1,defaultValue:"\\-",description:"Maximum width of the container."},maxH:{type:"MaxHeight<string | number>",required:!1,defaultValue:"\\-",description:"Maximum height of the container."},minW:{type:"MinWidth<string | number>",required:!1,defaultValue:"\\-",description:"Minimum width of the container."},minH:{type:"MinHeight<string | number>",required:!1,defaultValue:"\\-",description:"Minimum height of the container."},w:{type:"Width<string | number>",required:!1,defaultValue:"\\-",description:"Width of the container."},h:{type:"Height<string | number>",required:!1,defaultValue:"\\-",description:"Height of the container."}}},ut={tags:{},props:{col:{type:"boolean",required:!1,defaultValue:"",description:""},row:{type:"boolean",required:!1,defaultValue:"true",description:""},flexWrap:{type:"FlexWrap",required:!1,defaultValue:"initial",description:""},alignItems:{type:"AlignItems",required:!1,defaultValue:"start",description:""},justifyContent:{type:"JustifyContent",required:!1,defaultValue:"normal",description:""},space:{type:"Gap<string | number>",required:!1,defaultValue:"0",description:""},box:{type:"boolean",required:!1,defaultValue:"true",description:"If true, applies `box-sizing: border-box` to the container."},ovh:{type:"boolean",required:!1,defaultValue:"false",description:"If true, applies `overflow: hidden`."},ova:{type:"boolean",required:!1,defaultValue:"false",description:"If true, applies `overflow: auto`."},fw:{type:"boolean",required:!1,defaultValue:"true",description:"If true, sets width to 100%."},fh:{type:"boolean",required:!1,defaultValue:"false",description:"If true, sets height to 100%."},tl:{type:"boolean",required:!1,defaultValue:"false",description:"If true, aligns text to the left."},tc:{type:"boolean",required:!1,defaultValue:"false",description:"If true, aligns text to the center."},tr:{type:"boolean",required:!1,defaultValue:"false",description:"If true, aligns text to the right."},bg:{type:"BackgroundColor",required:!1,defaultValue:"\\-",description:"Background color of the container."},textColor:{type:"Color",required:!1,defaultValue:"\\-",description:"Text color of the container."},fz:{type:"FontSize<string | number>",required:!1,defaultValue:"14",description:"Font size of the container text."},rounded:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, applies border-radius of 5px."},border:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, applies a 1px solid border with the specified border color."},ib:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets display to inline-block."},abs:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets position to absolute."},rela:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets position to relative."},fixed:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets position to fixed."},t:{type:"Top<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `top` value."},r:{type:"Right<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `right` value."},b:{type:"Bottom<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `bottom` value."},l:{type:"Left<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `left` value."},borderColor:{type:"BorderColor",required:!1,defaultValue:"#dfdfdf",description:"Color of the border."},p:{type:"Padding<string | number>",required:!1,defaultValue:"\\-",description:"Padding of the container."},pt:{type:"PaddingTop<string | number>",required:!1,defaultValue:"\\-",description:"Padding top of the container."},pr:{type:"PaddingRight<string | number>",required:!1,defaultValue:"\\-",description:"Padding right of the container."},pb:{type:"PaddingBottom<string | number>",required:!1,defaultValue:"\\-",description:"Padding bottom of the container."},pl:{type:"PaddingLeft<string | number>",required:!1,defaultValue:"\\-",description:"Padding left of the container."},m:{type:"Margin<string | number>",required:!1,defaultValue:"\\-",description:"Margin of the container."},mt:{type:"MarginTop<string | number>",required:!1,defaultValue:"\\-",description:"Margin top of the container."},mr:{type:"MarginRight<string | number>",required:!1,defaultValue:"\\-",description:"Margin right of the container."},mb:{type:"MarginBottom<string | number>",required:!1,defaultValue:"\\-",description:"Margin bottom of the container."},ml:{type:"MarginLeft<string | number>",required:!1,defaultValue:"\\-",description:"Margin left of the container."},maxW:{type:"MaxWidth<string | number>",required:!1,defaultValue:"\\-",description:"Maximum width of the container."},maxH:{type:"MaxHeight<string | number>",required:!1,defaultValue:"\\-",description:"Maximum height of the container."},minW:{type:"MinWidth<string | number>",required:!1,defaultValue:"\\-",description:"Minimum width of the container."},minH:{type:"MinHeight<string | number>",required:!1,defaultValue:"\\-",description:"Minimum height of the container."},w:{type:"Width<string | number>",required:!1,defaultValue:"\\-",description:"Width of the container."},h:{type:"Height<string | number>",required:!1,defaultValue:"\\-",description:"Height of the container."}}},ct={tags:{brief:"Renders a heading (`<h1>`–`<h6>`) with automatic theming and optional sticky positioning.",intro:`Automatically selects a heading level (h1–h6) based on the given boolean props.
Styles the heading with a themed font size and margin. Supports sticky behavior for fixed headers.`,example:`import { Title } from '@lite-u/ui'

<Title h2 sticky>Section Title</Title>`},props:{textColor:{type:"Color",required:!1,defaultValue:"inherit",description:"Set text color the element."},sticky:{type:"boolean",required:!1,defaultValue:"false",description:"Makes the heading position sticky at the top of its container."},h1:{type:"boolean",required:!1,defaultValue:"false",description:"If true, renders an h1 element."},h2:{type:"boolean",required:!1,defaultValue:"false",description:"If true, renders an h2 element."},h3:{type:"boolean",required:!1,defaultValue:"false",description:"If true, renders an h3 element."},h4:{type:"boolean",required:!1,defaultValue:"false",description:"If true, renders an h4 element."},h5:{type:"boolean",required:!1,defaultValue:"false",description:"If true, renders an h5 element."},h6:{type:"boolean",required:!1,defaultValue:"false",description:"If true, renders an h6 element."}}},pt={tags:{brief:"Renders a styled `<p>` tag with configurable font size, color, alignment, and word-break behavior.",intro:`Applies theming defaults for spacing and base typography, while allowing per-instance customization
for text alignment, font size, color, and word-breaking strategy.`,example:`import { Paragraph } from '@lite-u/ui'
P is an alias of Paragraph
import { P } from '@lite-u/ui'

<Paragraph size={14} textColor="gray" center>
  This is a centered paragraph with custom styling.
</Paragraph>`},props:{size:{type:"number",required:!1,defaultValue:"16",description:"Custom font size for the paragraph text."},textColor:{type:"Color",required:!1,defaultValue:"inherit",description:"Text color of the paragraph."},center:{type:"boolean",required:!1,defaultValue:"false",description:"Centers the paragraph text."},wb:{type:"WordBreak",required:!1,defaultValue:"break-word",description:"Controls word-break behavior (e.g., 'break-word', 'normal')."}}},ft={tags:{},props:{size:{type:"number",required:!1,defaultValue:"16",description:"Custom font size for the paragraph text."},textColor:{type:"Color",required:!1,defaultValue:"inherit",description:"Text color of the paragraph."},center:{type:"boolean",required:!1,defaultValue:"false",description:"Centers the paragraph text."},wb:{type:"WordBreak",required:!1,defaultValue:"break-word",description:"Controls word-break behavior (e.g., 'break-word', 'normal')."}}},ht={tags:{brief:"A vertical stack layout component designed for navigation or grouped UI items.",intro:`Arranges its children in a column using Flexbox with configurable spacing.
Useful for building vertical menus, lists, or grouped controls. Automatically
sets cursor to pointer and full width, promoting interactive layout.`,example:`import { Menu, MenuItem } from '@lite-u/ui'

<Menu space={12}>
  <MenuItem>Item 1</MenuItem>
  <MenuItem>Item 2</MenuItem>
</Menu>`},props:{space:{type:"number",required:!1,defaultValue:"4",description:"Vertical spacing (gap) between children, in pixels."}}},mt={tags:{brief:"A flexible interactive item used within menus or lists, with optional size variants and hover transitions.",intro:"Applies consistent dimensions and padding based on selected size (`xs`, `s`, `m`, `l`),\nand shows a transition effect on hover. Integrates theming from Lite UI context.",example:`import { MenuItem } from '@lite-u/ui'

<MenuItem m hoverStyle={{ backgroundColor: 'lightgray' }}>
  Settings
</MenuItem>`},props:{xs:{type:"boolean",required:!1,defaultValue:"false",description:"Renders the item in extra-small size."},s:{type:"boolean",required:!1,defaultValue:"false",description:"Renders the item in small size."},m:{type:"boolean",required:!1,defaultValue:"true",description:"Renders the item in medium size."},l:{type:"boolean",required:!1,defaultValue:"false",description:"Renders the item in large size."},hoverStyle:{type:"FromType",required:!1,defaultValue:`{
          backgroundColor: '#dfdfdf',
        }`,description:"CSS styles to apply on hover transition."},hoverEnterDuration:{type:"number",required:!1,defaultValue:"200",description:"Duration of the hover transition entering, in milliseconds."},hoverLeaveDuration:{type:"number",required:!1,defaultValue:"300",description:"Duration of the hover transition leaving, in milliseconds."}}},xt={tags:{brief:"Displays a floating label with helpful information when the user hovers over or focuses on the target element.",intro:"Renders a customizable tooltip using React Portals for positioning and transition animations. It calculates the correct position based on the specified direction and adjusts dynamically if the target element moves.",example:`import { Tooltip } from '@lite-u/ui'

<Tooltip title="Hello" placement="t">
  <button>Hover me</button>
</Tooltip>`},props:{bgColor:{type:"string",required:!1,defaultValue:"#333",description:"The background color of the tooltip. Defaults to a neutral color."},textColor:{type:"string",required:!1,defaultValue:"#fff",description:"The text color of the tooltip. Defaults to a readable color."},placement:{type:"TooltipPlacement",required:!1,defaultValue:"t",description:"The placement of the tooltip relative to its children. Can be one of:\n`t` , `r` , `b` , `l` , `tl` , `tr` , `bl` , `br`"}}},bt={tags:{},props:{box:{type:"boolean",required:!1,defaultValue:"true",description:"If true, applies `box-sizing: border-box` to the container."},ovh:{type:"boolean",required:!1,defaultValue:"false",description:"If true, applies `overflow: hidden`."},ova:{type:"boolean",required:!1,defaultValue:"false",description:"If true, applies `overflow: auto`."},fw:{type:"boolean",required:!1,defaultValue:"true",description:"If true, sets width to 100%."},fh:{type:"boolean",required:!1,defaultValue:"false",description:"If true, sets height to 100%."},tl:{type:"boolean",required:!1,defaultValue:"false",description:"If true, aligns text to the left."},tc:{type:"boolean",required:!1,defaultValue:"false",description:"If true, aligns text to the center."},tr:{type:"boolean",required:!1,defaultValue:"false",description:"If true, aligns text to the right."},bg:{type:"BackgroundColor",required:!1,defaultValue:"\\-",description:"Background color of the container."},textColor:{type:"Color",required:!1,defaultValue:"\\-",description:"Text color of the container."},fz:{type:"FontSize<string | number>",required:!1,defaultValue:"14",description:"Font size of the container text."},rounded:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, applies border-radius of 5px."},border:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, applies a 1px solid border with the specified border color."},ib:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets display to inline-block."},abs:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets position to absolute."},rela:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets position to relative."},fixed:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets position to fixed."},t:{type:"Top<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `top` value."},r:{type:"Right<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `right` value."},b:{type:"Bottom<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `bottom` value."},l:{type:"Left<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `left` value."},borderColor:{type:"BorderColor",required:!1,defaultValue:"#dfdfdf",description:"Color of the border."},p:{type:"Padding<string | number>",required:!1,defaultValue:"\\-",description:"Padding of the container."},pt:{type:"PaddingTop<string | number>",required:!1,defaultValue:"\\-",description:"Padding top of the container."},pr:{type:"PaddingRight<string | number>",required:!1,defaultValue:"\\-",description:"Padding right of the container."},pb:{type:"PaddingBottom<string | number>",required:!1,defaultValue:"\\-",description:"Padding bottom of the container."},pl:{type:"PaddingLeft<string | number>",required:!1,defaultValue:"\\-",description:"Padding left of the container."},m:{type:"Margin<string | number>",required:!1,defaultValue:"\\-",description:"Margin of the container."},mt:{type:"MarginTop<string | number>",required:!1,defaultValue:"\\-",description:"Margin top of the container."},mr:{type:"MarginRight<string | number>",required:!1,defaultValue:"\\-",description:"Margin right of the container."},mb:{type:"MarginBottom<string | number>",required:!1,defaultValue:"\\-",description:"Margin bottom of the container."},ml:{type:"MarginLeft<string | number>",required:!1,defaultValue:"\\-",description:"Margin left of the container."},maxW:{type:"MaxWidth<string | number>",required:!1,defaultValue:"\\-",description:"Maximum width of the container."},maxH:{type:"MaxHeight<string | number>",required:!1,defaultValue:"\\-",description:"Maximum height of the container."},minW:{type:"MinWidth<string | number>",required:!1,defaultValue:"\\-",description:"Minimum width of the container."},minH:{type:"MinHeight<string | number>",required:!1,defaultValue:"\\-",description:"Minimum height of the container."},w:{type:"Width<string | number>",required:!1,defaultValue:"\\-",description:"Width of the container."},h:{type:"Height<string | number>",required:!1,defaultValue:"\\-",description:"Height of the container."}}},gt={tags:{brief:"A flexible layout and style container that adapts to various UI layout needs.",intro:"Provides dynamic box, margin, padding, overflow, and size styling through a rich set of shorthand props.\nUseful as a base layout block across components or pages.\n`Con` is an Alias of Container",example:`import { Container } from '@lite-u/ui'
// Con is an Alias of Container
import { Con } from '@lite-u/ui'

<Container p={20} bg="#f9f9f9" fw fh>
  <h2>Content</h2>
</Container>`},props:{box:{type:"boolean",required:!1,defaultValue:"true",description:"If true, applies `box-sizing: border-box` to the container."},ovh:{type:"boolean",required:!1,defaultValue:"false",description:"If true, applies `overflow: hidden`."},ova:{type:"boolean",required:!1,defaultValue:"false",description:"If true, applies `overflow: auto`."},fw:{type:"boolean",required:!1,defaultValue:"true",description:"If true, sets width to 100%."},fh:{type:"boolean",required:!1,defaultValue:"false",description:"If true, sets height to 100%."},tl:{type:"boolean",required:!1,defaultValue:"false",description:"If true, aligns text to the left."},tc:{type:"boolean",required:!1,defaultValue:"false",description:"If true, aligns text to the center."},tr:{type:"boolean",required:!1,defaultValue:"false",description:"If true, aligns text to the right."},bg:{type:"BackgroundColor",required:!1,defaultValue:"\\-",description:"Background color of the container."},textColor:{type:"Color",required:!1,defaultValue:"\\-",description:"Text color of the container."},fz:{type:"FontSize<string | number>",required:!1,defaultValue:"14",description:"Font size of the container text."},rounded:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, applies border-radius of 5px."},border:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, applies a 1px solid border with the specified border color."},ib:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets display to inline-block."},abs:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets position to absolute."},rela:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets position to relative."},fixed:{type:"boolean",required:!1,defaultValue:"\\-",description:"If true, sets position to fixed."},t:{type:"Top<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `top` value."},r:{type:"Right<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `right` value."},b:{type:"Bottom<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `bottom` value."},l:{type:"Left<string | number>",required:!1,defaultValue:"\\-",description:"The CSS `left` value."},borderColor:{type:"BorderColor",required:!1,defaultValue:"#dfdfdf",description:"Color of the border."},p:{type:"Padding<string | number>",required:!1,defaultValue:"\\-",description:"Padding of the container."},pt:{type:"PaddingTop<string | number>",required:!1,defaultValue:"\\-",description:"Padding top of the container."},pr:{type:"PaddingRight<string | number>",required:!1,defaultValue:"\\-",description:"Padding right of the container."},pb:{type:"PaddingBottom<string | number>",required:!1,defaultValue:"\\-",description:"Padding bottom of the container."},pl:{type:"PaddingLeft<string | number>",required:!1,defaultValue:"\\-",description:"Padding left of the container."},m:{type:"Margin<string | number>",required:!1,defaultValue:"\\-",description:"Margin of the container."},mt:{type:"MarginTop<string | number>",required:!1,defaultValue:"\\-",description:"Margin top of the container."},mr:{type:"MarginRight<string | number>",required:!1,defaultValue:"\\-",description:"Margin right of the container."},mb:{type:"MarginBottom<string | number>",required:!1,defaultValue:"\\-",description:"Margin bottom of the container."},ml:{type:"MarginLeft<string | number>",required:!1,defaultValue:"\\-",description:"Margin left of the container."},maxW:{type:"MaxWidth<string | number>",required:!1,defaultValue:"\\-",description:"Maximum width of the container."},maxH:{type:"MaxHeight<string | number>",required:!1,defaultValue:"\\-",description:"Maximum height of the container."},minW:{type:"MinWidth<string | number>",required:!1,defaultValue:"\\-",description:"Minimum width of the container."},minH:{type:"MinHeight<string | number>",required:!1,defaultValue:"\\-",description:"Minimum height of the container."},w:{type:"Width<string | number>",required:!1,defaultValue:"\\-",description:"Width of the container."},h:{type:"Height<string | number>",required:!1,defaultValue:"\\-",description:"Height of the container."}}},yt={tags:{brief:"A collapsible container that shows or hides its content with a smooth transition.",intro:`Renders a toggleable header and a content area that expands or collapses with animation.
Useful for accordion-like UI components or sections where content needs to be shown/hidden on demand.`,example:`import Collapse from '@lite-u/ui'

<Collapse head="Click me">
  <p>This content is hidden or shown based on the collapse state.</p>
</Collapse>`},props:{head:{type:"ReactNode",required:!0,defaultValue:"\\-",description:"The clickable header element that toggles the collapse."},headStyle:{type:"CSSProperties",required:!1,defaultValue:"\\-",description:"Inline styles applied to the clickable header element."},contentStyle:{type:"CSSProperties",required:!1,defaultValue:"\\-",description:"Inline styles applied to the collapsible content container."},duration:{type:"number",required:!1,defaultValue:"\\-",description:"Duration of the enter transition in milliseconds."},exitDuration:{type:"number",required:!1,defaultValue:"\\-",description:"Duration of the leave transition in milliseconds."}}},jt={tags:{brief:"A drag-and-drop file drop zone with file type validation and customizable events.",intro:"In React, applying visual cues during drag-over can sometimes cause flickering—especially when styles update frequently. The Drop component simplifies handling such interactions by managing drag-over feedback smoothly and supporting MIME-type restrictions. It also provides hooks for custom logic when files are dropped, making it an easy and reliable way to implement drag-and-drop functionality.\n\n\\\n⚠️ `Caution`: Safari `CANNOT` detect files during the drag phase, so use `onDropped` ONLY for any functionality that needs to work reliably across all browsers.",example:`import { Drop } from '@lite-u/ui'

<Drop accepts={['image/png']}
  onDragIsOver={(f) => {})
  onDropped={(e, isValid) => console.log(e, isValid)}
>
  <p>Drop image files here</p>
</Drop>`},props:{accepts:{type:"string[]",required:!1,defaultValue:"[]",description:"List of accepted MIME types. Wildcards like 'image/*' are supported."},onDragIsOver:{type:"(isFileTypeValid: boolean) => void",required:!1,defaultValue:"\\-",description:"Callback triggered when a valid drag enters the drop zone."},onDragIsLeave:{type:"() => void",required:!1,defaultValue:"\\-",description:`Callback triggered when dragging leaves the drop zone.

>Note: Safari does not reliably detect dragged files, and the onDragIsOver event is not supported in this browser.`},onDropped:{type:"(e: DragEvent<HTMLDivElement>, isFileTypeValid: boolean) => void",required:!1,defaultValue:"\\-",description:`Callback triggered when a file is dropped.
Provides the event and a flag indicating file type validity.`}}},wt={tags:{brief:"Provides notification context and renders toasts with animation and auto-dismiss(optional) behavior.",intro:`Wraps an application with a notification system. Allows components to trigger toast messages
with customizable content, type, and duration. Renders floating notifications using portals
with enter/exit animations, and removes them after a timeout(optional).`,example:`import { useNotification } from '@lite-u/ui'

const NotificationSampleSimple: React.FC = () => {
   const { add, remove } = useNotification()

   return <div onClick={()=>add('hello')}></div>
}`},props:{}},Vt={tags:{},props:{tag:{type:"keyof HTMLElementTagNameMap",required:!1,defaultValue:"",description:""},hover:{type:"CSSProperties",required:!1,defaultValue:"",description:""},focus:{type:"CSSProperties",required:!1,defaultValue:"",description:""},active:{type:"CSSProperties",required:!1,defaultValue:"",description:""},style:{type:"CSSProperties",required:!1,defaultValue:"",description:""},onMouseEnter:{type:"(MouseEventHandler<HTMLElementTagNameMap[T]> & MouseEventHandler<HTMLObjectElement>) | ... 59 more ... | (MouseEventHandler<...> & MouseEventHandler<...>)",required:!1,defaultValue:"",description:""},onMouseLeave:{type:"(MouseEventHandler<HTMLElementTagNameMap[T]> & MouseEventHandler<HTMLObjectElement>) | ... 59 more ... | (MouseEventHandler<...> & MouseEventHandler<...>)",required:!1,defaultValue:"",description:""},onFocus:{type:"(FocusEventHandler<HTMLElementTagNameMap[T]> & FocusEventHandler<HTMLObjectElement>) | ... 59 more ... | (FocusEventHandler<...> & FocusEventHandler<...>)",required:!1,defaultValue:"",description:""},onBlur:{type:"(FocusEventHandler<HTMLElementTagNameMap[T]> & FocusEventHandler<HTMLObjectElement>) | ... 59 more ... | (FocusEventHandler<...> & FocusEventHandler<...>)",required:!1,defaultValue:"",description:""},onMouseDown:{type:"(MouseEventHandler<HTMLElementTagNameMap[T]> & MouseEventHandler<HTMLObjectElement>) | ... 59 more ... | (MouseEventHandler<...> & MouseEventHandler<...>)",required:!1,defaultValue:"",description:""},onMouseUp:{type:"(MouseEventHandler<HTMLElementTagNameMap[T]> & MouseEventHandler<HTMLObjectElement>) | ... 59 more ... | (MouseEventHandler<...> & MouseEventHandler<...>)",required:!1,defaultValue:"",description:""},onClick:{type:"(MouseEventHandler<HTMLElementTagNameMap[T]> & MouseEventHandler<HTMLObjectElement>) | ... 59 more ... | (MouseEventHandler<...> & MouseEventHandler<...>)",required:!1,defaultValue:"",description:""},onKeyDown:{type:"(KeyboardEventHandler<HTMLElementTagNameMap[T]> & KeyboardEventHandler<HTMLObjectElement>) | ... 59 more ... | (KeyboardEventHandler<...> & KeyboardEventHandler<...>)",required:!1,defaultValue:"",description:""}}},vt={tags:{brief:"A simple and easy-to-use table component with a minimal design.",intro:"Table accepts [TableRow](./tablerow) Component as children only",example:`import { Table, TableRow } from '@lite-u/ui'

<Table>
  <TableRow head>
    <span>th cell 0</span>
    <span>th cell 1</span>
  </TableRow>
  <TableRow>
    <span>td cell 0</span>
    <span>td cell 1</span>
  </TableRow>
</Table>`},props:{xs:{type:"boolean",required:!1,defaultValue:"false",description:"Render the table with extra small (`xs`) size styling."},s:{type:"boolean",required:!1,defaultValue:"false",description:"Render the table with small (`s`) size styling."},m:{type:"boolean",required:!1,defaultValue:"true",description:"Render the table with medium (`s`) size styling."},l:{type:"boolean",required:!1,defaultValue:"false",description:"Render the table with large (`l`) size styling."},fw:{type:"boolean",required:!1,defaultValue:"true",description:"Whether the table should take up the full width of its parent"},fh:{type:"boolean",required:!1,defaultValue:"false",description:"Whether the table should take up the full height of its parent"},fixed:{type:"boolean",required:!1,defaultValue:"false",description:"Whether the [tableLayout](https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout) should be set to `fixed`"},rowStyle:{type:"CSSProperties",required:!1,defaultValue:"{}",description:"Convenience way to style all table rows"},rowHoverStyle:{type:"CSSProperties",required:!1,defaultValue:"{}",description:"Convenience way to style Hovered body rows"},cellStyle:{type:"CSSProperties",required:!1,defaultValue:"{}",description:"Style object for table cells"}}},qt={tags:{brief:"Represents a table row for use within the Table component.",intro:"Renders a styled `<tr>` element with automatically applied context-based row and cell styling.\n\nCan optionally render as a header row using the `head` prop.\n\nTableRow with `head` prop: recognized as a `thead` row\n\nTableRow without `head` prop: recognized as a `tbody` row\n\nTableRow doesn’t require `td`(or `th`) — its children are automatically wrapped in <td>(or `th`) tags.",example:`import { Table, TableRow } from '@lite-u/ui'

<Table>
    <TableRow head>
      <h1>th cell 0</h1>
      <h2>th cell 1</h2>
    </TableRow>
    <TableRow>
      <div>td cell 0</div>
      <p>td cell 1</p>
    </TableRow>
</Table>`},props:{head:{type:"boolean",required:!1,defaultValue:"false",description:"If true, renders the row using `<th>` elements instead of `<td>`, and wrap into `<thead>` rather than `<tbody>`."}}},Ct={tags:{},props:{}},I={Select:Xe,SelectItem:Ye,ButtonBase:Qe,Button:Ze,IconButton:et,Input:tt,Link:rt,LiteUIProvider:it,Transition:nt,Modal:lt,Panel:at,Row:ot,Column:st,Col:dt,Flex:ut,Title:ct,Paragraph:pt,P:ft,Menu:ht,MenuItem:mt,Tooltip:xt,Con:bt,Container:gt,Collapse:yt,Drop:jt,NotificationProvider:wt,Interactable:Vt,Table:vt,TableRow:qt,src:Ct},Z=({to:i,name:r,brief:n,intro:u,example:l})=>e.jsx(t,{maxW:620,children:e.jsxs(a,{children:[e.jsx(t,{mt:10}),e.jsx(y,{id:i,children:r}),e.jsx(t,{fz:15,pl:4,textColor:"#3f3f3f",style:{lineHeight:"1.5rem"},children:e.jsx(A,{children:n})}),e.jsx(t,{mt:100}),e.jsx(y,{h4:!0,id:"description",children:e.jsx(k,{href:"#description",children:"# Description"})}),e.jsx(t,{mt:10}),e.jsx(t,{pl:0,fz:15,textColor:"#3f3f3f",style:{lineHeight:"1.5rem"},children:e.jsx(A,{children:u})}),e.jsx(t,{mt:100}),e.jsx(y,{h4:!0,id:"usage",children:e.jsx(k,{href:"#usage",children:"# Usage"})}),e.jsx(t,{mt:10}),e.jsx(N,{wrapStyle:{maxWidth:600},code:`
 ${l}`}),e.jsx(t,{m:"0 0 20px 0"}),e.jsx(t,{mt:100}),e.jsx(y,{h4:!0,id:"examples",children:e.jsx(k,{href:"#examples",children:"# Examples"})})]})}),ee=()=>{const r=W().pathname.split("/")[2];if(D[r])return e.jsx("div",{})},St=()=>{const{pathname:i}=W(),r=location.pathname.split("/"),n=r[r.length-1],u=D[n];if(!u||!I[u.apiNameKey]||!u||!I[u.apiNameKey])return;const l=u.to,h=I[u.apiNameKey].tags.brief,c=I[u.apiNameKey].tags.intro,m=I[u.apiNameKey].tags.example,v=I[u.apiNameKey].props;return f.useEffect(()=>{},[i]),e.jsxs("div",{children:[e.jsx(Z,{to:l,name:u.name,brief:h,intro:c,example:m}),e.jsx(F,{}),e.jsx(Q,{apiData:v}),e.jsx(ee,{})]})},Mt=()=>{const{pathname:i}=W(),r=location.pathname.split("/"),n=r[r.length-1],u=U[n],l=I[u.apiNameKey],h=u.to,c=l==null?void 0:l.tags.brief,m=l==null?void 0:l.tags.intro,v=l==null?void 0:l.tags.example,q=l==null?void 0:l.props;return f.useEffect(()=>{},[i]),e.jsxs("div",{children:[c&&e.jsx(Z,{to:h,name:u.name,brief:c,intro:m,example:v}),e.jsx(F,{}),q&&e.jsx(Q,{apiData:q}),e.jsx(ee,{})]})},te=({children:i})=>{const{onMouseEnter:r,onMouseLeave:n}=f.useContext(J);return e.jsx("div",{onMouseEnter:()=>{r==null||r()},onMouseLeave:()=>{n==null||n()},children:i})},re=({children:i})=>{const{show:r}=f.useContext(J);if(r)return e.jsx("div",{children:i})},J=f.createContext({show:!1,onMouseEnter:()=>{},onMouseLeave:()=>{}}),It=({children:i,delay:r,headOnly:n=!1})=>{const[u,l]=f.useState(!1),h=[],c=f.useRef(0);f.Children.forEach(i,q=>{const G=q&&q.type;G===te||G===re?h.push(q):console.error()});const m=()=>{clearTimeout(c.current),l(!0)},v=()=>{clearTimeout(c.current),typeof r=="number"?c.current=window.setTimeout(()=>{l(!1)},r):l(!1)};return e.jsx(J.Provider,{value:{show:u,onMouseEnter:n?m:null,onMouseLeave:n?v:null},children:e.jsx("div",{onMouseEnter:()=>{n||m()},onMouseLeave:()=>{n||v()},children:h})})},Tt=()=>e.jsxs(a,{fw:!0,fh:!0,ovh:!0,children:[e.jsx(o,{stretch:!0,style:{borderBottom:"1px solid gray",flex:0},children:e.jsx(se,{style:{height:50},children:e.jsxs(o,{fw:!0,fh:!0,center:!0,between:!0,pr:100,children:[e.jsx("span",{}),e.jsx(t,{style:{flex:0},rela:!0,bg:"#000",children:e.jsxs(It,{delay:1e3,children:[e.jsx(te,{children:"head"}),e.jsx(re,{children:e.jsx(t,{abs:!0,w:100,t:"100%",r:0,border:!0,children:e.jsxs(L,{children:[e.jsxs(p,{children:[" ",e.jsx(H,{to:"/ui-kit/components/table",children:" UI "})," "]}),e.jsxs(p,{children:[" ",e.jsx(H,{to:"/ui-kit/components/table",children:" Editor "})," "]})]})})})]})})]})})}),e.jsx(F,{})]}),kt=()=>e.jsx(a,{fw:!0,fh:!0,ovh:!0,children:"Hello Index"}),Pt=()=>e.jsx(de,{children:e.jsx(ue,{children:e.jsxs(C,{path:"/",element:e.jsx(Tt,{}),children:[e.jsx(C,{index:!0,element:e.jsx(kt,{})}),e.jsxs(C,{path:"/ui-kit",element:e.jsx(Ge,{}),children:[e.jsx(C,{path:"/ui-kit/installation",element:e.jsx(_e,{})}),e.jsx(C,{path:"/ui-kit/components",element:e.jsx(St,{}),children:Object.values(D).map((i,r)=>e.jsx(C,{path:i.to,element:i.comp},r))}),e.jsx(C,{path:"/ui-kit/hooks",element:e.jsx(Mt,{}),children:Object.values(U).map((i,r)=>e.jsx(C,{path:i.to,element:i.comp},r))})]})]})})});function zt(){return e.jsx(ce,{children:e.jsx(Pt,{})})}pe.createRoot(document.getElementById("root")).render(e.jsx(zt,{}));
