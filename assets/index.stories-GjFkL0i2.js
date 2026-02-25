import{S as y}from"./storybook-decorators-ba0aOUtK.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./iframe-CITwF8Ix.js";import{c as b,a as x,o as j}from"./anime.esm-BPO733l5.js";import{c as g}from"./clsx-B-dksMZM.js";import{F as A}from"./index-CVPPKpss.js";const S="_module_cmims_1",v="_item_cmims_11",k="_link_cmims_21",w="_thumbnail_cmims_29",N="_text_cmims_51",E="_arrow_cmims_67",q="_isAnimated_cmims_101",t={module:S,item:v,link:k,thumbnail:w,text:N,arrow:E,isAnimated:q},u=({className:p,items:h,...d})=>{const i=s.useRef(null),a=s.useRef(null),[f,_]=s.useState(!1);return s.useEffect(()=>(a.current=b({root:i}).add(()=>{x(".animejs",{autoplay:j({enter:"bottom-=100 top",leave:"top+=100 bottom",onEnter:r=>{_(!0),r.revert()}})})}),()=>{a.current&&a.current.revert()}),[]),e.jsx("div",{ref:i,children:e.jsx("ul",{className:g("animejs",t.module,f&&t.isAnimated,p),...d,children:h.map((r,m)=>e.jsx("li",{className:t.item,style:{"--item-num":m},children:e.jsxs("a",{className:t.link,href:r.href,children:[e.jsx("div",{className:t.thumbnail,children:e.jsx("img",{src:r.thumbnail,alt:""})}),e.jsxs("p",{className:t.text,children:[r.year,e.jsx(A,{className:t.arrow})]})]})},m))})})};u.__docgenInfo={description:"",methods:[],displayName:"ScrollAnim08",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  href: string;\r
  thumbnail: string;\r
  year: number;\r
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"thumbnail",value:{name:"string",required:!0}},{key:"year",value:{name:"number",required:!0}}]}}],raw:"Item[]"},description:""}}};const z={title:"ScrollAnim/08",component:u,decorators:[y]},n={args:{items:[{href:"#",thumbnail:"https://picsum.photos/id/1010/200/300",year:2020},{href:"#",thumbnail:"https://picsum.photos/id/1011/200/300",year:2019},{href:"#",thumbnail:"https://picsum.photos/id/1012/200/300",year:2018},{href:"#",thumbnail:"https://picsum.photos/id/1013/200/300",year:2017},{href:"#",thumbnail:"https://picsum.photos/id/1014/200/300",year:2016}]}};var o,c,l;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    items: [{
      href: "#",
      thumbnail: "https://picsum.photos/id/1010/200/300",
      year: 2020
    }, {
      href: "#",
      thumbnail: "https://picsum.photos/id/1011/200/300",
      year: 2019
    }, {
      href: "#",
      thumbnail: "https://picsum.photos/id/1012/200/300",
      year: 2018
    }, {
      href: "#",
      thumbnail: "https://picsum.photos/id/1013/200/300",
      year: 2017
    }, {
      href: "#",
      thumbnail: "https://picsum.photos/id/1014/200/300",
      year: 2016
    }]
  }
}`,...(l=(c=n.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const B=["Default"];export{n as Default,B as __namedExportsOrder,z as default};
