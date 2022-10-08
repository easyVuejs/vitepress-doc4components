import{_ as q,o as L,c as N,a as C,w as v,b as t,d as a,e as V,r as _,V as A}from"./app.ce223eaf.js";const K={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:p,createVNode:u,createTextVNode:k,withCtx:o,toDisplayString:d,createElementVNode:c,openBlock:h,createElementBlock:g}=A,E=k("skeleton\u9AA8\u67B6\u5C4F"),B=k("spin\u52A0\u8F7D"),f=c("a",{href:"#"},"More",-1),D={style:{margin:"20px"}},x=c("br",null,null,-1);function T(n,s){const m=p("a-switch"),r=p("a-radio-button"),i=p("a-radio-group"),b=p("geely-card");return h(),g("div",null,[c("div",null,[u(m,{checked:n.checked,"onUpdate:checked":s[0]||(s[0]=e=>n.checked=e),"checked-children":"\u5F00","un-checked-children":"\u5173",style:{margin:"20px 20px 20px 0"}},null,8,["checked"]),u(i,{value:n.loadType,"onUpdate:value":s[1]||(s[1]=e=>n.loadType=e)},{default:o(()=>[u(r,{value:"skeleton"},{default:o(()=>[E]),_:1}),u(r,{value:"spin"},{default:o(()=>[B]),_:1})]),_:1},8,["value"]),u(b,{height:"250px",threshold:"200px",rows:5,type:n.loadType,loading:n.checked,maxWaitingTime:3e3,title:{width:100},avatar:{shape:"square",size:30},cardOption:{title:"Card title",tabList:n.tabList,bordered:!1},onTabChange:s[2]||(s[2]=e=>n.onTabChange(e,"noTitleKey"))},{customRender:o(e=>[c("span",null," first-"+d(e.key),1)]),extra:o(()=>[f]),default:o(()=>[c("p",D,d(n.contentList[n.tabKey]),1)]),_:1},8,["type","loading","cardOption"])]),x])}const{ref:l}=A;return{render:T,...{setup(n,{expose:s}){s();const m=l(!1),r=l("skeleton"),i=l("tab1"),y={checked:m,loadType:r,tabKey:i,tabList:[{key:"tab1",slots:{tab:"customRender"}},{key:"tab2",tab:"tab2"}],contentList:{tab1:"content1",tab2:"content2"},onTabChange:(F,w)=>{console.log("onTabChange--->",F,w),i.value=F},ref:l};return Object.defineProperty(y,"__isScriptSetup",{enumerable:!1,value:!0}),y}}}}()}},J='{"title":"GeelyCard","description":"","frontmatter":{},"headers":[{"level":2,"title":"GeelyCard","slug":"geelycard"},{"level":3,"title":"API","slug":"api"}],"relativePath":"components/GeelyCard/index.md"}',O=t("br",null,null,-1),P=t("h2",{id:"geelycard",tabindex:"-1"},[a("GeelyCard "),t("a",{class:"header-anchor",href:"#geelycard","aria-hidden":"true"},"#")],-1),S=t("br",null,null,-1),M=t("ul",null,[t("li",null,"\u652F\u6301\u61D2\u52A0\u8F7D"),t("li",null,"\u652F\u6301\u9AA8\u67B6\u5C4F\u5C55\u793A")],-1),R=t("br",null,null,-1),z=t("h4",{id:"\u57FA\u672C\u7528\u6CD5",tabindex:"-1"},[a("\u57FA\u672C\u7528\u6CD5 "),t("a",{class:"header-anchor",href:"#\u57FA\u672C\u7528\u6CD5","aria-hidden":"true"},"#")],-1),G=t("br",null,null,-1),W=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[a(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("div")]),t("span",{class:"token punctuation"},">")]),a(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("a-switch")]),a(` 
    `),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),a("checked")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("checked"),t("span",{class:"token punctuation"},'"')]),a(` 
    `),t("span",{class:"token attr-name"},"checked-children"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("\u5F00"),t("span",{class:"token punctuation"},'"')]),a(` 
    `),t("span",{class:"token attr-name"},"un-checked-children"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("\u5173"),t("span",{class:"token punctuation"},'"')]),a(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"margin"),t("span",{class:"token punctuation"},":"),a(" 20px 20px 20px 0")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},"/>")]),a(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("a-radio-group")]),a(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),a("value")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("loadType"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),a(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("a-radio-button")]),a(),t("span",{class:"token attr-name"},"value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("skeleton"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),a("skeleton\u9AA8\u67B6\u5C4F"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("a-radio-button")]),t("span",{class:"token punctuation"},">")]),a(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("a-radio-button")]),a(),t("span",{class:"token attr-name"},"value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("spin"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),a("spin\u52A0\u8F7D"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("a-radio-button")]),t("span",{class:"token punctuation"},">")]),a(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("a-radio-group")]),t("span",{class:"token punctuation"},">")]),a(` 
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("geely-card")]),a(` 
    `),t("span",{class:"token attr-name"},"height"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("250px"),t("span",{class:"token punctuation"},'"')]),a(`
    `),t("span",{class:"token attr-name"},"threshold"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("200px"),t("span",{class:"token punctuation"},'"')]),a(` 
    `),t("span",{class:"token attr-name"},":rows"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("5"),t("span",{class:"token punctuation"},'"')]),a(` 
    `),t("span",{class:"token attr-name"},":type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("loadType"),t("span",{class:"token punctuation"},'"')]),a(`
    `),t("span",{class:"token attr-name"},":loading"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("checked"),t("span",{class:"token punctuation"},'"')]),a(`
    `),t("span",{class:"token attr-name"},":maxWaitingTime"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("3000"),t("span",{class:"token punctuation"},'"')]),a(` 
    `),t("span",{class:"token attr-name"},":title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("{ width: 100 }"),t("span",{class:"token punctuation"},'"')]),a(`
    `),t("span",{class:"token attr-name"},":avatar"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("{ shape: "),t("span",{class:"token punctuation"},"'"),a("square"),t("span",{class:"token punctuation"},"'"),a(", size: 30 }"),t("span",{class:"token punctuation"},'"')]),a(` 
    `),t("span",{class:"token attr-name"},":cardOption"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("{ title: "),t("span",{class:"token punctuation"},"'"),a("Card title"),t("span",{class:"token punctuation"},"'"),a(", tabList: tabList, bordered: false }"),t("span",{class:"token punctuation"},'"')]),a(`
    `),t("span",{class:"token attr-name"},"@tabChange"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("key => onTabChange(key, "),t("span",{class:"token punctuation"},"'"),a("noTitleKey"),t("span",{class:"token punctuation"},"'"),a(")"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),a(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("template")]),a(),t("span",{class:"token attr-name"},"#customRender"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("item"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),a(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("span")]),t("span",{class:"token punctuation"},">")]),a(`
          first-{{ item.key }}
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("span")]),t("span",{class:"token punctuation"},">")]),a(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("template")]),a(),t("span",{class:"token attr-name"},"#extra"),t("span",{class:"token punctuation"},">")]),a(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("a")]),a(),t("span",{class:"token attr-name"},"href"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("#"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),a("More"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("a")]),t("span",{class:"token punctuation"},">")]),a(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("p")]),a(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"margin"),t("span",{class:"token punctuation"},":"),a(" 20px")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),a("{{ contentList[tabKey] }}"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("p")]),t("span",{class:"token punctuation"},">")]),a(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("geely-card")]),t("span",{class:"token punctuation"},">")]),a(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("div")]),t("span",{class:"token punctuation"},">")]),a(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("script")]),a(),t("span",{class:"token attr-name"},"setup"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[a(`
  `),t("span",{class:"token keyword"},"import"),a(),t("span",{class:"token punctuation"},"{"),a(" ref "),t("span",{class:"token punctuation"},"}"),a(),t("span",{class:"token keyword"},"from"),a(),t("span",{class:"token string"},"'vue'"),a(`
  `),t("span",{class:"token keyword"},"const"),a(" checked "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},")"),a(`
  `),t("span",{class:"token keyword"},"const"),a(" loadType "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'skeleton'"),t("span",{class:"token punctuation"},")"),a(`
  `),t("span",{class:"token keyword"},"const"),a(" tabKey "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'tab1'"),t("span",{class:"token punctuation"},")"),a(`
  `),t("span",{class:"token keyword"},"const"),a(" tabList "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token punctuation"},"["),a(`
    `),t("span",{class:"token punctuation"},"{"),a(`
      `),t("span",{class:"token literal-property property"},"key"),t("span",{class:"token operator"},":"),a(),t("span",{class:"token string"},"'tab1'"),t("span",{class:"token punctuation"},","),a(`
      `),t("span",{class:"token comment"},"// tab: 'tab1',"),a(`
      `),t("span",{class:"token literal-property property"},"slots"),t("span",{class:"token operator"},":"),a(),t("span",{class:"token punctuation"},"{"),a(),t("span",{class:"token literal-property property"},"tab"),t("span",{class:"token operator"},":"),a(),t("span",{class:"token string"},"'customRender'"),a(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),a(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),a(`
    `),t("span",{class:"token punctuation"},"{"),a(`
      `),t("span",{class:"token literal-property property"},"key"),t("span",{class:"token operator"},":"),a(),t("span",{class:"token string"},"'tab2'"),t("span",{class:"token punctuation"},","),a(`
      `),t("span",{class:"token literal-property property"},"tab"),t("span",{class:"token operator"},":"),a(),t("span",{class:"token string"},"'tab2'"),t("span",{class:"token punctuation"},","),a(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),a(`
  `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),a(`
  `),t("span",{class:"token keyword"},"const"),a(" contentList "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token punctuation"},"{"),a(`
    `),t("span",{class:"token literal-property property"},"tab1"),t("span",{class:"token operator"},":"),a(),t("span",{class:"token string"},"'content1'"),t("span",{class:"token punctuation"},","),a(`
    `),t("span",{class:"token literal-property property"},"tab2"),t("span",{class:"token operator"},":"),a(),t("span",{class:"token string"},"'content2'"),a(`
  `),t("span",{class:"token punctuation"},"}"),a(`
  `),t("span",{class:"token keyword"},"const"),a(),t("span",{class:"token function-variable function"},"onTabChange"),a(),t("span",{class:"token operator"},"="),a(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[a("value"),t("span",{class:"token punctuation"},","),a(" type")]),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token operator"},"=>"),a(),t("span",{class:"token punctuation"},"{"),a(`
    console`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'onTabChange--->'"),t("span",{class:"token punctuation"},","),a(" value"),t("span",{class:"token punctuation"},","),a(" type"),t("span",{class:"token punctuation"},")"),a(`
    tabKey`),t("span",{class:"token punctuation"},"."),a("value "),t("span",{class:"token operator"},"="),a(` value
  `),t("span",{class:"token punctuation"},"}"),a(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("script")]),t("span",{class:"token punctuation"},">")]),a(`  
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("br")]),t("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),$=V('<h3 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>active</td><td>\u9AA8\u67B6\u5C4F\u662F\u5426\u5C55\u793A\u52A8\u753B\u6548\u679C</td><td>Boolean</td><td>true</td></tr><tr><td>avatar</td><td>\u9AA8\u67B6\u5C4F\u662F\u5426\u663E\u793A\u5934\u50CF\u5360\u4F4D\u56FE</td><td>Boolean | AvatarProps</td><td>false</td></tr><tr><td>loading</td><td>\u4E3A true \u65F6\uFF0C\u663E\u793A\u9AA8\u67B6\u5C4F\u5360\u4F4D\u56FE\uFF0C\u53CD\u4E4B\u5219\u76F4\u63A5\u5C55\u793A\u5B50\u7EC4\u4EF6</td><td>Boolean</td><td>-</td></tr><tr><td>rows</td><td>\u9AA8\u67B6\u5C4F\u6BB5\u843D\u5360\u4F4D\u884C\u6570</td><td>Number</td><td>3</td></tr><tr><td>title</td><td>\u9AA8\u67B6\u5C4F\u662F\u5426\u663E\u793A\u6807\u9898\u5360\u4F4D\u56FE</td><td>Boolean | TitleProps</td><td>true</td></tr><tr><td>timeout</td><td>\u7B49\u5F85\u65F6\u95F4\uFF0C\u5982\u679C\u6307\u5B9A\u4E86\u65F6\u95F4\uFF0C\u65E0\u8BBA\u662F\u5426\u53EF\u89C1\uFF0C\u90FD\u5C06\u5728\u6307\u5B9A\u65F6\u95F4\u540E\u81EA\u52A8\u52A0\u8F7D</td><td>Number</td><td>-</td></tr><tr><td>maxWaitingTime</td><td>\u6700\u5927\u7B49\u5F85\u65F6\u95F4, \u7EC4\u4EF6\u89C6\u53E3\u53EF\u89C1\u540E\uFF0C\u5728\u6307\u5B9A\u65F6\u95F4\u540E\u81EA\u52A8\u52A0\u8F7D</td><td>Number</td><td>80</td></tr><tr><td>threshold</td><td>\u6EDA\u52A8\u9884\u52A0\u8F7D\u9608\u503C,\u9700\u5E26px\u5355\u4F4D</td><td>String</td><td>0px</td></tr><tr><td>direction</td><td>\u89C6\u53E3\u7684\u6EDA\u52A8\u65B9\u5411\uFF0Cvertical\u8868\u793A\u5782\u76F4\u65B9\u5411\uFF0Chorizontal\u8868\u793A\u6C34\u5E73\u65B9\u5411</td><td>String</td><td>vertical</td></tr><tr><td>viewport</td><td>DOM\u5143\u7D20\uFF0C\u4F46\u9ED8\u8BA4\u503C\u4E5F\u5C31\u662F\u89C6\u53E3\u533A\u57DF, \u5982\u679C\u8BBE\u7F6E\u4E86DOM\u5143\u7D20\uFF0C\u90A3\u4E48\u89C6\u53E3\u5C31\u53D8\u4E3A\u8BE5\u5143\u7D20</td><td>typeof window !== &#39;undefined&#39; ? window.HTMLElement : Object</td><td>null</td></tr></tbody></table><h4 id="avatarprops" tabindex="-1">AvatarProps <a class="header-anchor" href="#avatarprops" aria-hidden="true">#</a></h4><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>size</td><td>\u8BBE\u7F6E\u5934\u50CF\u5360\u4F4D\u56FE\u7684\u5927\u5C0F</td><td>number | large | small | default</td><td>-</td></tr><tr><td>shape</td><td>\u6307\u5B9A\u5934\u50CF\u7684\u5F62\u72B6</td><td>circle | square</td><td>-</td></tr></tbody></table><h4 id="titleprops" tabindex="-1">TitleProps <a class="header-anchor" href="#titleprops" aria-hidden="true">#</a></h4><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>width</td><td>\u8BBE\u7F6E\u6807\u9898\u5360\u4F4D\u56FE\u7684\u5BBD\u5EA6</td><td>number | string</td><td>-</td></tr></tbody></table>',6);function j(p,u,k,o,d,c){const h=_("render-demo-0"),g=_("demo");return L(),N("div",null,[O,P,S,M,R,z,G,C(g,{sourceCode:`
<div>
  <a-switch 
    v-model:checked="checked" 
    checked-children="\u5F00" 
    un-checked-children="\u5173" style="margin: 20px 20px 20px 0"/>
  <a-radio-group v-model:value="loadType">
    <a-radio-button value="skeleton">skeleton\u9AA8\u67B6\u5C4F</a-radio-button>
    <a-radio-button value="spin">spin\u52A0\u8F7D</a-radio-button>
  </a-radio-group> 
  <geely-card 
    height="250px"
    threshold="200px" 
    :rows="5" 
    :type="loadType"
    :loading="checked"
    :maxWaitingTime="3000" 
    :title="{ width: 100 }"
    :avatar="{ shape: 'square', size: 30 }" 
    :cardOption="{ title: 'Card title', tabList: tabList, bordered: false }"
    @tabChange="key => onTabChange(key, 'noTitleKey')">
      <template #customRender="item">
        <span>
          first-{{ item.key }}
        </span>
      </template>
      <template #extra>
        <a href="#">More</a>
      </template>
      <p style="margin: 20px">{{ contentList[tabKey] }}</p>
  </geely-card>
</div>

<script setup>
  import { ref } from 'vue'
  const checked = ref(false)
  const loadType = ref('skeleton')
  const tabKey = ref('tab1')
  const tabList = [
    {
      key: 'tab1',
      // tab: 'tab1',
      slots: { tab: 'customRender' },
    },
    {
      key: 'tab2',
      tab: 'tab2',
    },
  ];
  const contentList = {
    tab1: 'content1',
    tab2: 'content2'
  }
  const onTabChange = (value, type) => {
    console.log('onTabChange--->', value, type)
    tabKey.value = value
  }
<\/script>  
<br>
`},{highlight:v(()=>[W]),default:v(()=>[C(h)]),_:1}),$])}var Q=q(K,[["render",j]]);export{J as __pageData,Q as default};
