import{f as n,o as a,c as s,b as e,g as t,h as p,e as o,d as l}from"./app.c1d33732.js";const u='{"title":"Démarrage rapide","description":"","frontmatter":{"title":"Démarrage rapide"},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":3,"title":"Importation complète","slug":"importation-complete"},{"level":3,"title":"Importation à la demande","slug":"importation-a-la-demande"},{"level":2,"title":"Modèle de démarrage","slug":"modele-de-demarrage"},{"level":3,"title":"Vue CLI","slug":"vue-cli"},{"level":3,"title":"Utilisation du kit de démarrage","slug":"utilisation-du-kit-de-demarrage"},{"level":2,"title":"Configuration globale","slug":"configuration-globale"},{"level":2,"title":"Utilisation de Nuxt.js","slug":"utilisation-de-nuxt-js"},{"level":2,"title":"Commençons","slug":"commencons"}],"relativePath":"fr-FR/guide/quickstart.md","lastUpdated":1631811216731}',r={},c=o('<h1 id="demarrage-rapide" tabindex="-1">Démarrage rapide <a class="header-anchor" href="#demarrage-rapide" aria-hidden="true">#</a></h1><p>Cette section décrit comment utiliser Element Plus dans votre projet.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><h3 id="importation-complete" tabindex="-1">Importation complète <a class="header-anchor" href="#importation-complete" aria-hidden="true">#</a></h3><p>Si vous ne vous souciez pas tant de la taille du paquet, il est plus pratique d’utiliser l’importation complète.</p><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">import</span> ElementPlus <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>\n<span class="token keyword">import</span> <span class="token string">&#39;element-plus/dist/index.css&#39;</span>\n<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>\n\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>\n\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementPlus<span class="token punctuation">)</span>\napp<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>\n</code></pre></div><h3 id="importation-a-la-demande" tabindex="-1">Importation à la demande <a class="header-anchor" href="#importation-a-la-demande" aria-hidden="true">#</a></h3><p>Vous devez utiliser un plugin supplémentaire pour importer des composants que vous avez utilisés.</p>',8),i={id:"importation-automatique-recommander",tabindex:"-1"},d=l("Importation automatique "),k=l("Recommander"),m=l(),g=e("a",{class:"header-anchor",href:"#importation-automatique-recommander","aria-hidden":"true"},"#",-1),h=o('<p>Tout d&#39;abord, vous devez installer <code>unplugin-vue-components</code>.</p><div class="language-shell"><pre><code><span class="token function">npm</span> <span class="token function">install</span> unplugin-vue-components\n</code></pre></div><p>Ensuite, ajoutez le code ci-dessous dans votre fichier de configuration <code>Vite</code> ou <code>webpack</code>.</p><h5 id="vite" tabindex="-1">Vite <a class="header-anchor" href="#vite" aria-hidden="true">#</a></h5><div class="language-ts"><pre><code><span class="token comment">// vite.config.ts</span>\n<span class="token keyword">import</span> Components <span class="token keyword">from</span> <span class="token string">&#39;unplugin-vue-components/vite&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ElementPlusResolver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;unplugin-vue-components/resolvers&#39;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token comment">// ...</span>\n    <span class="token function">Composants</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      resolvers<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">ElementPlusResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h5 id="webpack" tabindex="-1">Webpack <a class="header-anchor" href="#webpack" aria-hidden="true">#</a></h5><div class="language-ts"><pre><code><span class="token comment">// webpack.config.js</span>\n<span class="token keyword">const</span> Components <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;unplugin-vue-components/webpack&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> ElementPlusResolver <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;unplugin-vue-components/resolvers&#39;</span><span class="token punctuation">)</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token function">Components</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      resolvers<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">ElementPlusResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>Pour plus de bundlers (<a href="https://rollupjs.org/" target="_blank" rel="noopener noreferrer">Rollup</a>, <a href="https://cli.vuejs.org/" target="_blank" rel="noopener noreferrer">Vue CLI</a>) et les configs veuillez consulter <a href="https://github.com/antfu/unplugin-vue-components#readme" target="_blank" rel="noopener noreferrer">unplugin-vue-components</a>.</p><h4 id="importer-manuellement" tabindex="-1">Importer manuellement <a class="header-anchor" href="#importer-manuellement" aria-hidden="true">#</a></h4><p>Element Plus fournit des fonctionnalités <a href="https://webpack.js.org/guides/tree-shaking/" target="_blank" rel="noopener noreferrer">Secouage d&#39;arbre</a> basées sur le module ES.</p><p>Mais vous devez installer <a href="https://github.com/element-plus/unplugin-element-plus" target="_blank" rel="noopener noreferrer">unplugin-element-plus</a> pour l&#39;importation de style. Reportez-vous à la documentation <a href="https://github.com/element-plus/unplugin-element-plus#readme" target="_blank" rel="noopener noreferrer"></a> pour savoir comment la configurer.</p><blockquote><p>App.vue</p></blockquote><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span><span class="token punctuation">&gt;</span></span>je suis ElButton<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  importation <span class="token punctuation">{</span> ElButton <span class="token punctuation">}</span> depuis <span class="token string">&#39;element-plus&#39;</span>\n  <span class="token keyword">export</span> par défaut <span class="token punctuation">{</span>\n    composantes <span class="token operator">:</span> <span class="token punctuation">{</span> ElButton <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><div class="language-ts"><pre><code><span class="token comment">// vite.config.ts</span>\nimporter ElementPlus depuis <span class="token string">&#39;unplugin-element-plus/vite&#39;</span>\n\nexporter par défaut <span class="token punctuation">{</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">ElementPlus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="modele-de-demarrage" tabindex="-1">Modèle de démarrage <a class="header-anchor" href="#modele-de-demarrage" aria-hidden="true">#</a></h2><h3 id="vue-cli" tabindex="-1">Vue CLI <a class="header-anchor" href="#vue-cli" aria-hidden="true">#</a></h3><p>Nous avons préparé un plugin <a href="https://github.com/element-plus/vue-cli-plugin-element-plus" target="_blank" rel="noopener noreferrer">Element Plus VueCLI plugin</a>. Pour <a href="https://cli.vuejs.org/" target="_blank" rel="noopener noreferrer">vue-cli</a>, vous pouvez configurer facilement un projet basé sur sur Element Plus.</p><h3 id="utilisation-du-kit-de-demarrage" tabindex="-1">Utilisation du kit de démarrage <a class="header-anchor" href="#utilisation-du-kit-de-demarrage" aria-hidden="true">#</a></h3><p>Nous fournissons des <a href="https://github.com/element-plus/element-plus-starter" target="_blank" rel="noopener noreferrer">modèles de projet génériques </a> que vous pouvez utiliser directement, et nous fournissons également les éléments suivants vite <a href="https://github.com/element-plus/element-plus-vite-starter" target="_blank" rel="noopener noreferrer">modèle</a>. Pour Utilisateurs de Laravel, nous disposons également d&#39;un <a href="https://github.com/element-plus/element-plus-in-laravel-starter" target="_blank" rel="noopener noreferrer">modèle correspondant</a> que vous pouvez également télécharger et utiliser directement.</p><h2 id="configuration-globale" tabindex="-1">Configuration globale <a class="header-anchor" href="#configuration-globale" aria-hidden="true">#</a></h2><p>Lors de l&#39;enregistrement de l&#39;élément Plus, vous pouvez passer un objet de configuration global avec <code>size</code> et <code>zIndex</code> pour définir la taille par défaut `` pour les composants de formulaire, et <code>zIndex</code> pour composants popup, la valeur par défaut pour <code>zIndex</code> est <code>2000</code>.</p><p>Présentation complète d&#39;ElementPlus.</p><div class="language-ts"><pre><code>importer <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> depuis <span class="token string">&#39;vue&#39;</span>\nimporter ElementPlus depuis <span class="token string">&#39;element-plus&#39;</span>\nimporter App depuis <span class="token string">&#39;./App.vue&#39;</span>\n\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementPlus<span class="token punctuation">,</span> <span class="token punctuation">{</span> size<span class="token operator">:</span> <span class="token string">&#39;small&#39;</span><span class="token punctuation">,</span> zIndex<span class="token operator">:</span> <span class="token number">3000</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><p>À la demande :</p><div class="language-ts"><pre><code>importer <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> depuis <span class="token string">&#39;vue&#39;</span>\nimporter <span class="token punctuation">{</span> ElButton <span class="token punctuation">}</span> depuis <span class="token string">&#39;element-plus&#39;</span>\ndepuis <span class="token string">&#39;./App. ue&#39;</span>\n\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>\napp<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span>$<span class="token constant">ELEMENT</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// options</span>\n<span class="token punctuation">}</span>\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElButton<span class="token punctuation">)</span>\n</code></pre></div><h2 id="utilisation-de-nuxt-js" tabindex="-1">Utilisation de Nuxt.js <a class="header-anchor" href="#utilisation-de-nuxt-js" aria-hidden="true">#</a></h2><p>Avec les paramètres ci-dessus, tous les composants du projet ayant la propriété <code>size</code> auront une taille par défaut de &#39;small&#39; et l&#39;index z initial de la boîte pop-up sera de 3000.</p><div class="glitch-embed-wrap" style="height:420px;width:100%;"><iframe src="https://glitch.com/embed/#!/embed/nuxt-with-element?path=nuxt.config.js&amp;previewSize=0&amp;attributionHidden=true" alt="nuxt-with-element on glitch" style="height:100%;width:100%;border:0;"></iframe></div><h2 id="commencons" tabindex="-1">Commençons <a class="header-anchor" href="#commencons" aria-hidden="true">#</a></h2><p>Nous pouvons également utiliser <a href="https://nuxtjs.org" target="_blank" rel="noopener noreferrer">Nuxt.js</a> pour.</p>',30);r.render=function(o,l,u,r,v,f){const b=n("el-tag");return a(),s("div",null,[c,e("h4",i,[d,t(b,{type:"primary",style:{"vertical-align":"middle"},effect:"dark",size:"small"},{default:p((()=>[k])),_:1}),m,g]),h])};export{u as __pageData,r as default};