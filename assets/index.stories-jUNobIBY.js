import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{S as f,C as g}from"./storybook-decorators-ba0aOUtK.js";import{r as e}from"./iframe-DXhOPygz.js";import{c as h,a as _,o as A}from"./anime.esm-BPO733l5.js";import{c as F}from"./clsx-B-dksMZM.js";const R="_module_x9ia_1",S="_text_x9ia_13",y="_isAnimated_x9ia_37",a={module:R,text:S,isAnimated:y},d=({className:x,texts:j,...p})=>{const o=e.useRef(null),t=e.useRef(null),[u,b]=e.useState(!1);return e.useEffect(()=>(t.current=h({root:o}).add(()=>{_(".animejs",{autoplay:A({enter:"bottom-=100 top",leave:"top+=100 bottom",onEnter:s=>{b(!0),s.revert()}})})}),()=>{t.current&&t.current.revert()}),[]),r.jsx("div",{ref:o,children:r.jsx("div",{className:F("animejs",a.module,u&&a.isAnimated,x),...p,children:j.map((s,c)=>r.jsx("p",{className:a.text,style:{"--text-index":c},children:s},c))})})};d.__docgenInfo={description:"",methods:[],displayName:"ScrollAnim09",props:{texts:{required:!0,tsType:{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"},description:""}}};const C={title:"ScrollAnim/09",component:d,decorators:[f,g]},n={args:{texts:[r.jsxs(r.Fragment,{children:["1 テキストが入ります。テキストが入ります。",r.jsx("br",{}),"テキストが入ります。"]}),r.jsxs(r.Fragment,{children:["2 テキストが入ります。テキストが入ります。",r.jsx("br",{}),"テキストが入ります。"]}),r.jsxs(r.Fragment,{children:["3 テキストが入ります。テキストが入ります。",r.jsx("br",{}),"テキストが入ります。"]}),r.jsxs(r.Fragment,{children:["4 テキストが入ります。テキストが入ります。",r.jsx("br",{}),"テキストが入ります。"]}),r.jsxs(r.Fragment,{children:["5 テキストが入ります。テキストが入ります。",r.jsx("br",{}),"テキストが入ります。"]}),r.jsxs(r.Fragment,{children:["6 テキストが入ります。テキストが入ります。",r.jsx("br",{}),"テキストが入ります。"]}),r.jsxs(r.Fragment,{children:["7 テキストが入ります。テキストが入ります。",r.jsx("br",{}),"テキストが入ります。"]}),r.jsxs(r.Fragment,{children:["8 テキストが入ります。テキストが入ります。",r.jsx("br",{}),"テキストが入ります。"]}),r.jsxs(r.Fragment,{children:["9 テキストが入ります。テキストが入ります。",r.jsx("br",{}),"テキストが入ります。"]}),r.jsxs(r.Fragment,{children:["10 テキストが入ります。テキストが入ります。",r.jsx("br",{}),"テキストが入ります。"]})]}};var m,i,l;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    texts: [<>\r
        1 テキストが入ります。テキストが入ります。\r
        <br />\r
        テキストが入ります。\r
      </>, <>\r
        2 テキストが入ります。テキストが入ります。\r
        <br />\r
        テキストが入ります。\r
      </>, <>\r
        3 テキストが入ります。テキストが入ります。\r
        <br />\r
        テキストが入ります。\r
      </>, <>\r
        4 テキストが入ります。テキストが入ります。\r
        <br />\r
        テキストが入ります。\r
      </>, <>\r
        5 テキストが入ります。テキストが入ります。\r
        <br />\r
        テキストが入ります。\r
      </>, <>\r
        6 テキストが入ります。テキストが入ります。\r
        <br />\r
        テキストが入ります。\r
      </>, <>\r
        7 テキストが入ります。テキストが入ります。\r
        <br />\r
        テキストが入ります。\r
      </>, <>\r
        8 テキストが入ります。テキストが入ります。\r
        <br />\r
        テキストが入ります。\r
      </>, <>\r
        9 テキストが入ります。テキストが入ります。\r
        <br />\r
        テキストが入ります。\r
      </>, <>\r
        10 テキストが入ります。テキストが入ります。\r
        <br />\r
        テキストが入ります。\r
      </>]
  }
}`,...(l=(i=n.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const I=["Default"];export{n as Default,I as __namedExportsOrder,C as default};
