"use strict";(self.webpackChunkternary_club=self.webpackChunkternary_club||[]).push([[89],{44428:function(e,a,t){t.r(a),t.d(a,{default:function(){return g}});var r=t(67294),l=t(52263),n=t(16016),i=t(43146),m=t(36742),s=t(24973);var c=function(e){var a=e.metadata,t=a.previousPage,l=a.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,s.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},r.createElement("div",{className:"pagination-nav__item"},t&&r.createElement(m.Z,{className:"pagination-nav__link",to:t},r.createElement("div",{className:"pagination-nav__label"},"\xab"," ",r.createElement(s.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},l&&r.createElement(m.Z,{className:"pagination-nav__link",to:l},r.createElement("div",{className:"pagination-nav__label"},r.createElement(s.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},o=t(95601),d=t(39306);var g=function(e){var a=e.metadata,t=e.items,m=e.sidebar,s=(0,l.Z)().siteConfig.title,g=a.blogDescription,u=a.blogTitle,p="/"===a.permalink?s:u;return r.createElement(n.Z,{title:p,description:g,wrapperClassName:d.kM.wrapper.blogPages,pageClassName:d.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"}},r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement("aside",{className:"col col--3"},r.createElement(o.Z,{sidebar:m})),r.createElement("main",{className:"col col--7"},t.map((function(e){var a=e.content;return r.createElement(i.Z,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:a.metadata.truncated},r.createElement(a,null))})),r.createElement(c,{metadata:a})))))}},43146:function(e,a,t){t.d(a,{Z:function(){return v}});var r=t(67294),l=t(86010),n=t(3905),i=t(24973),m=t(36742),s=t(39306),c=t(67933),o=t(41217),d=t(86146),g="blogPostTitle_d4p0",u="blogPostData_-Im+",p="blogPostDetailsFull_xD8n";var v=function(e){var a,t,v,E=(t=(0,s.c2)().selectMessage,function(e){var a=Math.ceil(e);return t(a,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}),b=e.children,h=e.frontMatter,_=e.metadata,N=e.truncated,f=e.isBlogPostPage,Z=void 0!==f&&f,k=_.date,T=_.formattedDate,w=_.permalink,I=_.tags,L=_.readingTime,P=_.title,y=_.editUrl,M=h.author,x=h.image,C=h.keywords,A=h.author_url||h.authorURL,F=h.author_title||h.authorTitle,R=h.author_image_url||h.authorImageURL;return r.createElement(r.Fragment,null,r.createElement(o.Z,{keywords:C,image:x}),r.createElement("article",{className:Z?void 0:"margin-bottom--xl"},(v=Z?"h1":"h2",r.createElement("header",null,r.createElement(v,{className:g},Z?P:r.createElement(m.Z,{to:w},P)),r.createElement("div",{className:(0,l.Z)(u,"margin-vert--md")},r.createElement("time",{dateTime:k},T),L&&r.createElement(r.Fragment,null," \xb7 ",E(L))),r.createElement("div",{className:"avatar margin-vert--md"},R&&r.createElement(m.Z,{className:"avatar__photo-link avatar__photo",href:A},r.createElement("img",{src:R,alt:M})),r.createElement("div",{className:"avatar__intro"},M&&r.createElement(r.Fragment,null,r.createElement("div",{className:"avatar__name"},r.createElement(m.Z,{href:A},M)),r.createElement("small",{className:"avatar__subtitle"},F)))))),r.createElement("div",{className:"markdown"},r.createElement(n.Zo,{components:c.Z},b)),(I.length>0||N)&&r.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",(a={},a[p]=Z,a))},I.length>0&&r.createElement("div",{className:"col"},r.createElement("b",null,r.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),I.map((function(e){var a=e.label,t=e.permalink;return r.createElement(m.Z,{key:t,className:"margin-horiz--sm",to:t},a)}))),Z&&y&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(d.Z,{editUrl:y})),!Z&&N&&r.createElement("div",{className:"col text--right"},r.createElement(m.Z,{to:_.permalink,"aria-label":"Read more about "+P},r.createElement("b",null,r.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},95601:function(e,a,t){t.d(a,{Z:function(){return u}});var r=t(67294),l=t(86010),n=t(36742),i="sidebar_q+wC",m="sidebarItemTitle_9G5K",s="sidebarItemList_6T4b",c="sidebarItem_cjdF",o="sidebarItemLink_zyXk",d="sidebarItemLinkActive_wcJs",g=t(24973);function u(e){var a=e.sidebar;return 0===a.items.length?null:r.createElement("nav",{className:(0,l.Z)(i,"thin-scrollbar"),"aria-label":(0,g.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(m,"margin-bottom--md")},a.title),r.createElement("ul",{className:s},a.items.map((function(e){return r.createElement("li",{key:e.permalink,className:c},r.createElement(n.Z,{isNavLink:!0,to:e.permalink,className:o,activeClassName:d},e.title))}))))}},86146:function(e,a,t){t.d(a,{Z:function(){return d}});var r=t(67294),l=t(24973),n=t(87462),i=t(63366),m=t(86010),s="iconEdit_mS5F",c=["className"],o=function(e){var a=e.className,t=(0,i.Z)(e,c);return r.createElement("svg",(0,n.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,m.Z)(s,a),"aria-hidden":"true"},t),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function d(e){var a=e.editUrl;return r.createElement("a",{href:a,target:"_blank",rel:"noreferrer noopener"},r.createElement(o,null),r.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}}}]);