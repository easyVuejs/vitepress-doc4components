import{_ as n,o as s,c as a,e as t}from"./app.ee22e100.js";const m='{"title":"\u5FEB\u901F\u4E0A\u624B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5FEB\u901F\u4E0A\u624B","slug":"\u5FEB\u901F\u4E0A\u624B"},{"level":3,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":3,"title":"\u6CE8\u518C","slug":"\u6CE8\u518C"}],"relativePath":"guide/quickstart/index.md"}',p={},e=t(`<br><h2 id="\u5FEB\u901F\u4E0A\u624B" tabindex="-1">\u5FEB\u901F\u4E0A\u624B <a class="header-anchor" href="#\u5FEB\u901F\u4E0A\u624B" aria-hidden="true">#</a></h2><br><h3 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h3><div class="language-sh"><pre><code><span class="token function">npm</span> <span class="token function">install</span> geely-business-components <span class="token parameter variable">-D</span>
</code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><br> Node \u8BF7\u4F7F\u7528\`v8.9\`\u6216\u4EE5\u4E0A\u7248\u672C <br><br></div><br><h3 id="\u6CE8\u518C" tabindex="-1">\u6CE8\u518C <a class="header-anchor" href="#\u6CE8\u518C" aria-hidden="true">#</a></h3><p><strong>\u5168\u5C40\u5B8C\u6574\u6CE8\u518C</strong></p><div class="language-js"><pre><code>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Antd <span class="token keyword">from</span> <span class="token string">&#39;ant-design-vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;ant-design-vue/dist/antd.css&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> GeelyBC <span class="token keyword">from</span> <span class="token string">&quot;geely-business-components&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;geely-business-components/assets/style.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Antd<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>GeelyBC<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><p><strong>\u5C40\u90E8\u6CE8\u518C\u7EC4\u4EF6</strong></p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>geely-search</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> GeelySearch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;geely-business-components&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> GeelySearchGroup <span class="token operator">=</span> GeelySearch<span class="token punctuation">.</span>Group<span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,12),o=[e];function c(l,u,i,r,k,d){return s(),a("div",null,o)}var h=n(p,[["render",c]]);export{m as __pageData,h as default};