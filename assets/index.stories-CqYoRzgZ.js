import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as u}from"./clsx-B-dksMZM.js";const _="_card_9l90p_1",x="_body_9l90p_21",f="_thumbnail_9l90p_31",k="_heading_9l90p_61",b="_content_9l90p_75",y="_foot_9l90p_87",j="_links_9l90p_95",N="_link_9l90p_95",t={card:_,body:x,thumbnail:f,heading:k,content:b,foot:y,links:j,link:N},c=({className:r,thumbnail:d,heading:l,content:p,links:m,...h})=>e.jsxs("div",{className:u(t.card,r),...h,children:[e.jsxs("div",{className:t.body,children:[e.jsx("div",{className:t.thumbnail,children:e.jsx("img",{src:d,width:"200",height:"200",alt:""})}),e.jsx("p",{className:t.heading,children:l}),e.jsx("div",{className:t.content,children:p})]}),e.jsx("div",{className:t.foot,children:e.jsx("div",{className:t.links,children:m.map((a,g)=>e.jsx("a",{className:t.link,href:a.href,target:a.target,children:e.jsx("span",{children:a.text})},g))})})]});c.__docgenInfo={description:"",methods:[],displayName:"Card03",props:{thumbnail:{required:!0,tsType:{name:"string"},description:""},heading:{required:!0,tsType:{name:"string"},description:""},content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},links:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  href: string;\r
  text: string;\r
  target?: React.ComponentProps<"a">["target"];\r
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}},{key:"target",value:{name:'ReactComponentProps["target"]',raw:'React.ComponentProps<"a">["target"]',required:!1}}]}}],raw:"Link[]"},description:""}}};const q={title:"Card/03",component:c,decorators:[r=>e.jsx("div",{style:{padding:"40px 40px 80px",background:"#EFF4F7"},children:e.jsx(r,{})})],argTypes:{heading:{control:"text"}}},n={args:{thumbnail:"https://picsum.photos/id/1000/200/200",heading:"見出しが入ります",content:"テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。",links:[{href:"#",text:"アドオン",target:"_blank"},{href:"#",text:"インテグレーション",target:"_blank"}]}};var s,i,o;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    thumbnail: "https://picsum.photos/id/1000/200/200",
    heading: "見出しが入ります",
    content: "テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。",
    links: [{
      href: "#",
      text: "アドオン",
      target: "_blank"
    }, {
      href: "#",
      text: "インテグレーション",
      target: "_blank"
    }]
  }
}`,...(o=(i=n.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const C=["Default"];export{n as Default,C as __namedExportsOrder,q as default};
