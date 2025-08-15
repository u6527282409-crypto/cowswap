import{a as m,b as f,x as a}from"./index.js";import{c as p}from"./chunk.if-defined-Cm4VnrCK.js";import"./chunk.index-CP3nanSh.js";import"https://esm.sh/react@18.3.1";import"https://esm.sh/react-dom@18.3.1";import"https://esm.sh/viem@2.26.2";import"./chunk.index-B8xruEqP.js";import"./chunk.index-DjNDzx_B.js";import"./chunk.index-l-pPUC4P.js";import"./chunk.index-C4zanXWC.js";import"./chunk.index-DC1lEsHD.js";const d=m`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var u=function(o,e,i,r){var n=arguments.length,t=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(o,e,i,r);else for(var s=o.length-1;s>=0;s--)(l=o[s])&&(t=(n<3?l(t):n>3?l(e,i,t):l(e,i))||t);return n>3&&t&&Object.defineProperty(e,i,t),t};let c=class extends f{render(){return a`
      <wui-flex flexDirection="column" .padding=${["0","m","m","m"]} gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};c.styles=d;c=u([p("w3m-transactions-view")],c);export{c as W3mTransactionsView};
