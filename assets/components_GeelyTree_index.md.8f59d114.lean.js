import{_ as f,o as C,c as B,a as g,w as F,e as D,r as E,V as m,b as t,d as n}from"./app.ee22e100.js";const b={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:p,createVNode:l,createElementVNode:u,openBlock:c,createElementBlock:r}=m;function i(a,d){const y=p("geely-tree");return c(),r("div",null,[u("div",null,[l(y,{edit:"",draggable:"","tree-data":a.treeData,"expanded-keys":["0-0"],search:{width:300,allowClear:!0},onDel:a.onDel,onSearch:a.onSearch,onDrop:a.onDrop,onAdd:a.onAdd,onOut:a.onOut},null,8,["tree-data","onDel","onSearch","onDrop","onAdd","onOut"])])])}const{ref:o}=m;return{render:i,...{setup(a,{expose:d}){d();const h={treeData:o([{title:"parent 1",key:"0-0",children:[{title:"parent 1-0",key:"0-0-0",children:[{title:"leaf",key:"0-0-0-0"},{title:"leaf1",key:"0-0-0-1"},{title:"leaf2",key:"0-0-0-2"},{title:"leaf3",key:"0-0-0-3"},{title:"leaf4",key:"0-0-0-4"}]},{title:"parent 1-1",key:"0-0-1",children:[{key:"0-0-1-0",title:"sss"}]}]},{title:"parent 2",key:"0-2",children:[{title:"parent 2-0",key:"0-0-2",children:[{title:"leaf",key:"0-0-2-0"},{title:"2222",key:"0-0-2-1"},{title:"3333",key:"0-0-2-2"},{title:"4444",key:"0-0-2-3"},{title:"5555",key:"0-0-2-4"}]},{title:"parent 2-1",key:"0-0-23",children:[{key:"0-0-1-2",title:"s77777ss"}]}]}]),onSearch:(s,e)=>{console.log("onSearch-->",s,e)},onDrop:(s,e)=>{console.log("onDrop--->",s,e)},onAdd:(s,e)=>{console.log("onAdd-->",s,e)},onOut:s=>{console.log("onOut-->",s)},ref:o};return Object.defineProperty(h,"__isScriptSetup",{enumerable:!1,value:!0}),h}}}}()}},V='{"title":"GeelyTree","description":"","frontmatter":{},"headers":[{"level":2,"title":"GeelyTree","slug":"geelytree"},{"level":3,"title":"API","slug":"api"},{"level":3,"title":"\u4E8B\u4EF6","slug":"\u4E8B\u4EF6"},{"level":3,"title":"\u63CF\u8FF0","slug":"\u63CF\u8FF0"}],"relativePath":"components/GeelyTree/index.md"}',A=D('<h2 id="geelytree" tabindex="-1">GeelyTree <a class="header-anchor" href="#geelytree" aria-hidden="true">#</a></h2><br><ul><li>\u652F\u6301\u641C\u7D22</li><li>\u652F\u6301\u5220\u9664</li><li>\u652F\u6301\u62D6\u62FD\u6392\u5E8F</li><li>Antd Tree\u7EC4\u4EF6api\u53EF\u4EE5\u6B63\u5E38\u4F7F\u7528</li></ul><br><br><h4 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h4>',6),v=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("geely-tree")]),n(` 
      `),t("span",{class:"token attr-name"},"edit"),n(`
      `),t("span",{class:"token attr-name"},"draggable"),n(`
      `),t("span",{class:"token attr-name"},":tree-data"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("treeData"),t("span",{class:"token punctuation"},'"')]),n(` 
      `),t("span",{class:"token attr-name"},":expanded-keys"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("['0-0']"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":search"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{ width: 300, allowClear: true }"),t("span",{class:"token punctuation"},'"')]),n(`      
      `),t("span",{class:"token attr-name"},"@del"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("onDel"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},"@search"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("onSearch"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},"@drop"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("onDrop"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},"@add"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("onAdd"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},"@out"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("onOut"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("geely-tree")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"setup"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
  `),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token comment"},"// import { DownOutlined } from '@ant-design/icons-vue';"),n(`
  `),t("span",{class:"token comment"},"// import { GeelyTree } from 'geely-business-components'"),n(`
  `),t("span",{class:"token keyword"},"const"),n(" treeData "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),n(`
    `),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'parent 1'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token literal-property property"},"key"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'0-0'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'parent 1-0'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"key"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'0-0-0'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
            `),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'leaf'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token literal-property property"},"key"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'0-0-0-0'"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'leaf1'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token literal-property property"},"key"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'0-0-0-1'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'leaf2'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token literal-property property"},"key"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'0-0-0-2'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'leaf3'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token literal-property property"},"key"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'0-0-0-3'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'leaf4'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token literal-property property"},"key"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'0-0-0-4'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'parent 1-1'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"key"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'0-0-1'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"key"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'0-0-1-0'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'sss'"),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'parent 2'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token literal-property property"},"key"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'0-2'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'parent 2-0'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"key"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'0-0-2'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
            `),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'leaf'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token literal-property property"},"key"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'0-0-2-0'"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2222'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token literal-property property"},"key"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'0-0-2-1'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'3333'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token literal-property property"},"key"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'0-0-2-2'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'4444'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token literal-property property"},"key"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'0-0-2-3'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'5555'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token literal-property property"},"key"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'0-0-2-4'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'parent 2-1'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"key"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'0-0-23'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"key"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'0-0-1-2'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'s77777ss'"),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
  `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

  `),t("span",{class:"token comment"},"// \u641C\u7D22"),n(`
  `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"onSearch"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[n("searchVal"),t("span",{class:"token punctuation"},","),n(" allTreeDataList")]),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
    console`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'onSearch-->'"),t("span",{class:"token punctuation"},","),n(" searchVal"),t("span",{class:"token punctuation"},","),n(" allTreeDataList"),t("span",{class:"token punctuation"},")"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`

  `),t("span",{class:"token comment"},"// \u62D6\u62FD"),n(`
  `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"onDrop"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[n("info"),t("span",{class:"token punctuation"},","),n(" allList")]),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
    console`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'onDrop--->'"),t("span",{class:"token punctuation"},","),n(" info"),t("span",{class:"token punctuation"},","),n(" allList"),t("span",{class:"token punctuation"},")"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`

  `),t("span",{class:"token comment"},"// \u65B0\u589E"),n(`
  `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"onAdd"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[n("treekey"),t("span",{class:"token punctuation"},","),n(" allList")]),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
    console`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'onAdd-->'"),t("span",{class:"token punctuation"},","),n("treekey"),t("span",{class:"token punctuation"},","),n(" allList"),t("span",{class:"token punctuation"},")"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`

  `),t("span",{class:"token comment"},"// \u9000\u51FA\u7F16\u8F91\u6A21\u5F0F"),n(`
  `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"onOut"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"allList"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
    console`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'onOut-->'"),t("span",{class:"token punctuation"},","),n(" allList"),t("span",{class:"token punctuation"},")"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(` 

`)])])],-1),_=D('<br><br><h3 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>treeData</td><td>\u7EC4\u4EF6\u6570\u636E\u6E90</td><td>array&lt;{key, title, children, [disabled, selectable]}&gt;</td><td>--</td></tr><tr><td>delete</td><td>\u662F\u5426\u5C55\u793A\u5220\u9664\u6A21\u5F0F</td><td>Boolean | DeleteProps</td><td>-</td></tr><tr><td>search</td><td>\u662F\u5426\u5C55\u793A\u641C\u7D22\u6A21\u5F0F</td><td>Boolean | SearchProps</td><td>-</td></tr><tr><td>draggable</td><td>\u662F\u5426\u5F00\u542F\u62D6\u62FD</td><td>Boolean</td><td>false</td></tr></tbody></table><h4 id="deleteprops" tabindex="-1">DeleteProps <a class="header-anchor" href="#deleteprops" aria-hidden="true">#</a></h4><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>size</td><td>\u8BBE\u7F6E\u6309\u94AE\u5927\u5C0F</td><td>large | middle | small</td><td>small</td></tr><tr><td>type</td><td>\u8BBE\u7F6E\u6309\u94AE\u7C7B\u578B</td><td>primary | ghost | dashed | link | text</td><td>default</td></tr><tr><td>title</td><td>\u5220\u9664\u786E\u8BA4\u6846\u7684\u63CF\u8FF0</td><td>string</td><td>\u786E\u8BA4\u8981\u5220\u9664\u5417?</td></tr><tr><td>cancelText</td><td>\u5220\u9664\u786E\u8BA4\u6846\u53D6\u6D88\u6309\u94AE\u6587\u5B57</td><td>string</td><td>\u53D6\u6D88</td></tr><tr><td>okText</td><td>\u5220\u9664\u786E\u8BA4\u6846\u786E\u8BA4\u6309\u94AE\u6587\u5B57</td><td>string</td><td>\u786E\u8BA4</td></tr></tbody></table><h4 id="searchprops" tabindex="-1">SearchProps <a class="header-anchor" href="#searchprops" aria-hidden="true">#</a></h4><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>placeholder</td><td>\u641C\u7D22\u6846\u63D0\u793A</td><td>string</td><td>\u8BF7\u8F93\u5165\u641C\u7D22\u6587\u6848</td></tr><tr><td>width</td><td>\u641C\u7D22\u6846\u5BBD\u5EA6</td><td>Number</td><td>200</td></tr></tbody></table><h3 id="\u4E8B\u4EF6" tabindex="-1">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a></h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>del</td><td>\u5220\u9664\u540E\u89E6\u53D1</td><td>Function(checkedNodes, allTreeDataList)</td></tr><tr><td>sarch</td><td>\u641C\u7D22\u540E\u89E6\u53D1</td><td>Function(searchVal, allTreeDataList)</td></tr><tr><td>drop</td><td>drop \u89E6\u53D1\u65F6\u8C03\u7528</td><td>Function({event, node, dragNode, dragNodesKeys}, allTreeDataList)</td></tr></tbody></table><h3 id="\u63CF\u8FF0" tabindex="-1">\u63CF\u8FF0 <a class="header-anchor" href="#\u63CF\u8FF0" aria-hidden="true">#</a></h3><ol><li>\u5BF9antd Tree\u7EC4\u4EF6\u8FDB\u884C\u4E8C\u6B21\u5C01\u88C5\uFF0C\u96C6\u6210\u641C\u7D22\u548C\u5220\u9664\uFF0CTree\u7EC4\u4EF6api\u53EF\u4EE5\u6B63\u5E38\u4F7F\u7528</li><li>DeleteProps\u4E2D\uFF0Cantd Button\u548CPopconfirm \u7EC4\u4EF6api\u53EF\u4EE5\u6B63\u5E38\u4F7F\u7528</li><li>SearchProps\u4E2D\uFF0Cantd input \u7EC4\u4EF6api\u53EF\u4EE5\u6B63\u5E38\u4F7F\u7528</li></ol>',12);function L(p,l,u,c,r,i){const o=E("render-demo-0"),k=E("demo");return C(),B("div",null,[A,g(k,{sourceCode:`<div>
  <geely-tree 
      edit
      draggable
      :tree-data="treeData" 
      :expanded-keys="['0-0']"
      :search="{ width: 300, allowClear: true }"      
      @del="onDel"
      @search="onSearch"
      @drop="onDrop"
      @add="onAdd"
      @out="onOut"
      >
    </geely-tree>
</div>
<script setup>
  import { ref } from 'vue';
  // import { DownOutlined } from '@ant-design/icons-vue';
  // import { GeelyTree } from 'geely-business-components'
  const treeData = ref([
    {
      title: 'parent 1',
      key: '0-0',
      children: [
        {
          title: 'parent 1-0',
          key: '0-0-0',
          children: [
            { title: 'leaf', key: '0-0-0-0'},
            { title: 'leaf1', key: '0-0-0-1', },
            { title: 'leaf2', key: '0-0-0-2', },
            { title: 'leaf3', key: '0-0-0-3', },
            { title: 'leaf4', key: '0-0-0-4', },
          ],
        },
        {
          title: 'parent 1-1',
          key: '0-0-1',
          children: [{ key: '0-0-1-0', title: 'sss' }],
        },
      ],
    },
    {
      title: 'parent 2',
      key: '0-2',
      children: [
        {
          title: 'parent 2-0',
          key: '0-0-2',
          children: [
            { title: 'leaf', key: '0-0-2-0'},
            { title: '2222', key: '0-0-2-1', },
            { title: '3333', key: '0-0-2-2', },
            { title: '4444', key: '0-0-2-3', },
            { title: '5555', key: '0-0-2-4', },
          ],
        },
        {
          title: 'parent 2-1',
          key: '0-0-23',
          children: [{ key: '0-0-1-2', title: 's77777ss' }],
        },
      ],
    },
  ]);

  // \u641C\u7D22
  const onSearch = (searchVal, allTreeDataList) => {
    console.log('onSearch-->', searchVal, allTreeDataList)
  }

  // \u62D6\u62FD
  const onDrop = (info, allList) => {
    console.log('onDrop--->', info, allList)
  }

  // \u65B0\u589E
  const onAdd = (treekey, allList) => {
    console.log('onAdd-->',treekey, allList)
  }

  // \u9000\u51FA\u7F16\u8F91\u6A21\u5F0F
  const onOut = (allList) => {
    console.log('onOut-->', allList)
  }
<\/script> 

`},{highlight:F(()=>[v]),default:F(()=>[g(o)]),_:1}),_])}var N=f(b,[["render",L]]);export{V as __pageData,N as default};
