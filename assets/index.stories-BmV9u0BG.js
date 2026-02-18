import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-DXhOPygz.js";import{c as j}from"./clsx-B-dksMZM.js";const N="_module_1c3z7_1",v="_item_1c3z7_15",E="_circle_1c3z7_55",z="_thumbnail_1c3z7_85",C="_category_1c3z7_105",q="_text_1c3z7_121",w="_date_1c3z7_135",n={module:N,item:v,circle:E,thumbnail:z,category:C,text:q,date:w},S=r=>{const[a,o]=d.useState({x:0,y:0}),t=d.useRef(null),c=s=>{if(!t.current)return;const m=t.current.getBoundingClientRect(),u=s.pageX-(m.left+window.pageXOffset),l=s.pageY-(m.top+window.pageYOffset),_=u<0?0:u>t.current.clientWidth?t.current.clientWidth:u,b=l<0?0:l>t.current.clientHeight?t.current.clientHeight:l;o({x:_,y:b})},f=s=>{c(s)},y=s=>{c(s)};return e.jsx("li",{children:e.jsxs("a",{className:n.item,href:r.href,onMouseEnter:f,onMouseLeave:y,ref:t,children:[e.jsx("div",{className:n.circle,style:{left:`${a.x}px`,top:`${a.y}px`}}),e.jsx("div",{className:n.thumbnail,children:e.jsx("img",{src:r.thumbnail})}),e.jsx("p",{className:n.category,children:r.category}),e.jsx("p",{className:n.text,children:r.text}),e.jsx("p",{className:n.date,children:r.date})]})})},x=({className:r,items:a,...o})=>e.jsx("ul",{className:j(n.module,r),...o,children:a.map((t,c)=>e.jsx(S,{...t},c))});x.__docgenInfo={description:"",methods:[],displayName:"Card12",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  href: string;\r
  thumbnail: string;\r
  category: string;\r
  text: string;\r
  date: string;\r
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"thumbnail",value:{name:"string",required:!0}},{key:"category",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}},{key:"date",value:{name:"string",required:!0}}]}}],raw:"Item[]"},description:""}}};const R={title:"Card/12",component:x},i={args:{items:[{href:"#",thumbnail:"https://picsum.photos/id/1000/400/200",category:"NEWS",text:"テキストが入ります。テキストが入ります。テキストが入ります。",date:"2021.01.03"},{href:"#",thumbnail:"https://picsum.photos/id/1001/400/200",category:"BLOG",text:"テキストが入ります。テキストが入ります。テキストが入ります。",date:"2021.01.02"},{href:"#",thumbnail:"https://picsum.photos/id/1002/400/200",category:"NEWS",text:"テキストが入ります。テキストが入ります。テキストが入ります。",date:"2021.01.01"}]}};var p,h,g;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    items: [{
      href: "#",
      thumbnail: "https://picsum.photos/id/1000/400/200",
      category: "NEWS",
      text: "テキストが入ります。テキストが入ります。テキストが入ります。",
      date: "2021.01.03"
    }, {
      href: "#",
      thumbnail: "https://picsum.photos/id/1001/400/200",
      category: "BLOG",
      text: "テキストが入ります。テキストが入ります。テキストが入ります。",
      date: "2021.01.02"
    }, {
      href: "#",
      thumbnail: "https://picsum.photos/id/1002/400/200",
      category: "NEWS",
      text: "テキストが入ります。テキストが入ります。テキストが入ります。",
      date: "2021.01.01"
    }]
  }
}`,...(g=(h=i.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const B=["Default"];export{i as Default,B as __namedExportsOrder,R as default};
