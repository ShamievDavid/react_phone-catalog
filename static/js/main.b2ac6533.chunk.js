(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],Array(28).concat([function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n,s=c(23),a=c.n(s),r=(c(28),c(6)),i=c(3),o=(c(29),c(30),c(31),c(0)),l={github:"https://github.com/ShamievDavid",contacts:"https://davydshamiiev.netlify.app",rights:"https://davydshamiiev.netlify.app"},d=function(){return Object(o.jsx)("nav",{className:"footer-nav",children:Object.entries(l).map((function(e){return Object(o.jsx)("a",{className:"footer-nav__link",href:e[1],target:"_blank",rel:"noreferrer",children:e[0]},e[0])}))})},j=c(7),u=c.n(j),b=(c(33),function(e){var t=e.type,c=e.disabled,n=e.handler;return Object(o.jsx)("button",{type:"button",disabled:c,onClick:n,className:u()("icon-button","icon-button--".concat(t))})});c(34);!function(e){e[e.small=0]="small",e[e.large=1]="large",e[e.checkout=2]="checkout"}(n||(n={}));var h,p=c(8),m=c(4),O=c(1),x=c.n(O),_=c(9),f=c(5),v=c.n(f),g="https://mate-academy.github.io/react_phone-catalog/_new/";function N(e){return new Promise((function(t){return setTimeout(t,e)}))}function y(){return(y=Object(_.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",N(500).then((function(){return fetch("".concat(g,"/products.json"))})).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return(k=Object(_.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",N(500).then((function(){return fetch("".concat(g,"/products/").concat(t,".json"))})).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e,t){var c=Object(O.useState)((function(){var c=localStorage.getItem(e);if(null===c)return t;try{return JSON.parse(c)}catch(n){return localStorage.removeItem(e),t}})),n=Object(m.a)(c,2),s=n[0],a=n[1];return[s,function(t){localStorage.setItem(e,JSON.stringify(t)),a(t)}]}!function(e){e.all="all",e.alphabetically="alphabetically",e.newest="newest",e.cheapest="cheapest"}(h||(h={}));var S,C=x.a.createContext({}),I=function(e){var t=e.children,c=Object(O.useState)([]),n=Object(m.a)(c,2),s=n[0],a=n[1],r=w("favourites",[]),i=Object(m.a)(r,2),l=i[0],d=i[1],j=w("cart",[]),u=Object(m.a)(j,2),b=u[0],x=u[1],_=Object(O.useState)(h.all),f=Object(m.a)(_,2),v=f[0],g=f[1],N=Object(O.useState)(""),k=Object(m.a)(N,2),S=k[0],I=k[1],P=Object(O.useState)(!1),L=Object(m.a)(P,2),F=L[0],M=L[1];Object(O.useEffect)((function(){M(!0),function(){return y.apply(this,arguments)}().then(a).finally((function(){return M(!1)}))}),[]);var B=Object(O.useMemo)((function(){var e=Object(p.a)(s);switch(v){case h.all:return e;case h.alphabetically:return e.sort((function(e,t){return e.name.localeCompare(t.name)}));case h.newest:return e.sort((function(e,t){return t.year-e.year}));case h.cheapest:return e.sort((function(e,t){return e.price-t.price}));default:return e}}),[v,s]).filter((function(e){return e.name.toLowerCase().includes(S.toLowerCase())})),T=l.filter((function(e){return e.name.toLowerCase().includes(S.toLowerCase())})),A={filteredProducts:B,products:s,favourites:T,setFavourites:d,setProducts:a,cart:b,setToCart:x,setSortBy:g,sortBy:v,query:S,setQuery:I,isLoading:F};return Object(o.jsx)(C.Provider,{value:A,children:t})},P=function(){return x.a.useContext(C)},L=function(e){var t=e.size,c=e.handler,s=e.id,a=e.disabled,r=P().cart.some((function(e){return e.itemId===s}));return Object(o.jsx)("button",{type:"button",onClick:c,disabled:a,className:u()("button",{"button--cart":t===n.small,"button--cart button--cart--large":t===n.large,"button--checkout":t===n.checkout,"button--added":r})})},F=(c(36),function(e){var t=e.title,c=e.options,n=e.setSelection,s=Object(O.useState)("Select an option"),a=Object(m.a)(s,2),r=a[0],i=a[1],l=Object(O.useState)(!1),d=Object(m.a)(l,2),j=d[0],b=d[1],h=function(e){return function(){i(e),n(e)}};return Object(o.jsxs)("div",{className:"dropdown",children:[Object(o.jsx)("label",{className:"dropdown__title",htmlFor:"select",children:t}),Object(o.jsx)("div",{className:"dropdown__input",id:"select",onClick:function(){return b(!j)},tabIndex:0,onBlur:function(){return b(!1)},children:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"dropdown__selected",children:r}),j&&Object(o.jsx)("ul",{className:"dropdown__options",children:c.map((function(e){return Object(o.jsx)("li",{value:e,className:u()("dropdown__option",{"dropdown__option--selected":r===e}),onClick:h(e),children:e},e)}))})]})})]})}),M=(c(37),function(e){var t=e.handler,c=e.disabled,n=e.id,s=e.size,a=P().favourites.some((function(e){return e.itemId===n}));return Object(o.jsx)("button",{"data-cy":"addToFavorite",type:"button",className:u()("like",{"like--selected":a,"like--large":"large"===s}),disabled:c,onClick:t})}),B=(c(38),function(e){var t=e.children;return Object(o.jsx)("div",{className:"wrapper",children:t})});!function(e){e.arrowBack="arrow-back",e.arrowNext="arrow-next",e.arrowUp="arrow-up",e.plus="plus",e.minus="minus"}(S||(S={}));var T,A=function(){return Object(o.jsx)("footer",{className:"footer",children:Object(o.jsx)(B,{children:Object(o.jsxs)("div",{className:"footer__content",children:[Object(o.jsx)(r.b,{className:"footer__logo",to:"/",children:Object(o.jsx)("img",{alt:"logo",src:"./img/icons/logo.svg"})}),Object(o.jsx)(d,{}),Object(o.jsxs)("div",{className:"footer__button-box",children:[Object(o.jsx)("span",{className:"footer__button-title",children:"back to top"}),Object(o.jsx)(b,{type:S.arrowUp,handler:function(){window.scrollTo({top:0,behavior:"smooth"})}})]})]})})})},R=(c(39),["*","cart","favourites","productId"]),q=function(){var e=function(e){var t=e.isActive;return u()("nav__link",{"nav__link--is-active":t})};return Object(o.jsxs)("nav",{className:"nav",children:[Object(o.jsx)(r.b,{className:"nav__logo",to:"/",children:Object(o.jsx)("img",{alt:"logo",className:"check",src:"./img/icons/logo.svg"})}),Object.keys(_e).map((function(t){return R.includes(t)?null:Object(o.jsx)(r.c,{to:t,className:e,children:t},t)}))]})},z=(c(40),c(41),function(e){var t=e.count;return Object(o.jsx)("div",{className:"counter",children:t})}),$=function(e){var t=e.path,c=e.alt,n=e.src,s=e.count;return Object(o.jsxs)(r.c,{className:function(e){var t=e.isActive;return u()("nav-icon",{"nav-icon__link nav-icon__link--is-active":t})},to:t,children:[Object(o.jsx)("img",{alt:c,src:n,className:"nav-icon__img"}),s>0&&Object(o.jsx)(z,{count:s})]})},E=(c(42),function(){var e=Object(i.m)(),t=P(),c=t.query,n=t.setQuery,s="/phones"===e.pathname||"/tablets"===e.pathname||"/accessories"===e.pathname||"/favourites"===e.pathname;return Object(o.jsx)(o.Fragment,{children:s&&Object(o.jsxs)("div",{className:"search",children:[Object(o.jsx)("input",{className:"search__input",placeholder:"Search in ".concat(e.pathname.substring(1)),onChange:function(e){n(e.target.value)},value:c}),c?Object(o.jsx)("img",{alt:"search icon",src:"./img/icons/closeFill.svg",className:"search__icon-close","data-cy":"searchDelete",onClick:function(){return n("")}}):Object(o.jsx)("img",{alt:"search icon",src:"./img/icons/search.svg",className:"search__icon"})]})})}),D=(c(43),function(){var e=P(),t=e.favourites,c=e.cart,n=t.length,s=c.length;return Object(o.jsxs)("header",{className:"header",children:[Object(o.jsx)(q,{}),Object(o.jsxs)("div",{className:"header__search-container",children:[Object(o.jsx)(E,{}),Object(o.jsxs)("div",{className:"header__rightside",children:[Object(o.jsx)($,{path:"favourites",alt:"like-icon",src:"./img/icons/like.svg",count:n}),Object(o.jsx)($,{path:"cart",alt:"cart-icon",src:"./img/icons/cart.svg",count:s})]})]})]})}),J=(c(44),c(45),function(e){var t=e.images,c=e.currentSlideIndex;return Object(o.jsx)("div",{className:"dots",children:t.map((function(e,t){return Object(o.jsx)("div",{className:u()("dots__dot",{"dots__dot--active":t===c})},e[0])}))})}),Q=(c(46),function(e){var t=e.fill;return Object(o.jsx)("svg",{width:"6",height:"10",viewBox:"0 0 6 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.528758 0.528606C0.789108 0.268256 1.21122 0.268256 1.47157 0.528606L5.47157 4.52861C5.73192 4.78896 5.73192 5.21107 5.47157 5.47141L1.47157 9.47141C1.21122 9.73176 0.789108 9.73176 0.528758 9.47141C0.268409 9.21107 0.268409 8.78896 0.528758 8.52861L4.05735 5.00001L0.528758 1.47141C0.268409 1.21107 0.268409 0.788955 0.528758 0.528606Z",fill:t})})}),U=function(e){var t=e.side,c=e.handleSlide,n=Object(O.useState)(!1),s=Object(m.a)(n,2),a=s[0],r=s[1];return Object(o.jsx)("button",{type:"button",className:u()("side-button",{"side-button--left":"back"===t}),onMouseEnter:function(){return r(!0)},onMouseLeave:function(){return r(!1)},onClick:function(){c(t)},children:Object(o.jsx)(Q,{fill:a?"#000":"#89939A"})})};!function(e){e[e.back=1040]="back",e[e.next=-1040]="next"}(T||(T={}));var Z={phones:"_new/img/banner-phones.png",tablets:"_new/img/banner-tablets.png",accessories:"_new/img/banner-accessories.png"},W=function(){var e=Object(O.useState)(0),t=Object(m.a)(e,2),c=t[0],n=t[1],s=Object(O.useState)(0),a=Object(m.a)(s,2),r=a[0],i=a[1],l=Object(O.useRef)(null),d=Object.entries(Z),j=function(e){"next"===e&&(r>=d.length-1?(i(0),n(0)):(i((function(e){return e+1})),n((function(e){return e+T.next})))),"back"===e&&(r<=0?(i(d.length-1),n(T.next*(d.length-1))):(i((function(e){return e-1})),n((function(e){return e+T.back}))))};return Object(O.useEffect)((function(){var e=setInterval((function(){j("next")}),5e3);return function(){clearInterval(e)}})),Object(o.jsxs)("div",{className:"banner-slider",children:[Object(o.jsxs)("div",{className:"banner-slider__upper-content",children:[Object(o.jsx)(U,{side:"back",handleSlide:j}),Object(o.jsx)("div",{className:"banner-slider__img-container",ref:l,children:d.map((function(e){return Object(o.jsx)("div",{className:"banner-slider__picture",style:{transform:"translate(".concat(c,"px)"),transition:"0.7s ease"},children:Object(o.jsx)("img",{className:"banner-slider__img",alt:e[0],src:"./".concat(e[1])})},e[0])}))}),Object(o.jsx)(U,{handleSlide:j,side:"next"})]}),Object(o.jsx)(J,{images:d,currentSlideIndex:r})]})},Y=(c(47),c(48),function(e){var t=e.product,c=P(),s=c.favourites,a=c.setFavourites,i=c.setToCart,l=c.cart,d=t.name,j=t.image,u=t.fullPrice,b=t.price,h=t.ram,m=t.capacity,O=t.screen,x=t.phoneId,_=t.itemId,f=l.some((function(e){return e.itemId===_}));return Object(o.jsxs)("div",{className:"product-card",children:[Object(o.jsxs)(r.b,{to:"/phones/".concat(x),className:"product-card__link",children:[Object(o.jsx)("img",{className:"product-card__img",alt:d,src:"/_new/".concat(j)}),Object(o.jsx)("h3",{className:"product-card__name",children:d})]}),Object(o.jsxs)("div",{className:"product-card__price-block",children:[Object(o.jsx)("p",{className:"product-card__price-w-discount",children:"$".concat(b)}),Object(o.jsx)("p",{className:"product-card__price",children:"$".concat(u)})]}),Object(o.jsxs)("div",{className:"product-card__specs",children:[Object(o.jsx)("p",{children:"Screen"}),Object(o.jsx)("p",{className:"product-card__specs--right",children:O}),Object(o.jsx)("p",{children:"Capacity"}),Object(o.jsx)("p",{className:"product-card__specs--right",children:m}),Object(o.jsx)("p",{children:"RAM"}),Object(o.jsx)("p",{className:"product-card__specs--right",children:h})]}),Object(o.jsxs)("div",{className:"product-card__buttons-block",children:[Object(o.jsx)(L,{size:n.small,handler:function(){if(f){var e=l.filter((function(e){return e.itemId!==_}));i(e)}else i([].concat(Object(p.a)(l),[t]))},id:_,disabled:f}),Object(o.jsx)(M,{handler:function(){if(s.some((function(e){return e.itemId===_}))){var e=s.filter((function(e){return e.itemId!==_}));a(e)}else a([].concat(Object(p.a)(s),[t]))},id:_})]})]})}),G=function(e){var t=e.products,c=e.title,n=Object(O.useState)(0),s=Object(m.a)(n,2),a=s[0],r=s[1],i=a+4,l=function(e){return function(){return r("dec"===e?function(e){return e-4}:function(e){return e+4})}};return Object(o.jsxs)("div",{className:"products-slider","data-cy":"cardsContainer",children:[Object(o.jsxs)("div",{className:"products-slider__upper",children:[Object(o.jsx)("h2",{className:"products-slider__title",children:c}),Object(o.jsxs)("div",{className:"products-slider__buttons",children:[Object(o.jsx)(b,{type:S.arrowBack,disabled:!a,handler:l("dec")}),Object(o.jsx)(b,{type:S.arrowNext,handler:l(null),disabled:i>=t.length})]})]}),Object(o.jsx)("div",{className:"products-slider__list",children:t.slice(a,i).map((function(e){return Object(o.jsx)(Y,{product:e},e.id)}))})]})},H=(c(49),c(50),function(e){var t=e.category,c=e.link,n=e.quantity,s=void 0===n?0:n,a=P().products.length;return Object(o.jsxs)("div",{className:"category",children:[Object(o.jsx)(r.b,{to:"/".concat(t),children:Object(o.jsx)("img",{className:"category__img",alt:t,src:c})},t),Object(o.jsx)("h3",{className:"category__title",children:"phones"===t?"Mobile phones":t}),Object(o.jsx)("p",{className:"category__quantity",children:"".concat("phones"===t?a:s," models")})]})}),K=Object.entries({phones:"_new/img/category-phones.png",tablets:"_new/img/category-tablets.png",accessories:"_new/img/category-accessories.png"}),V=function(){return Object(o.jsxs)("div",{className:"categories",children:[Object(o.jsx)("div",{className:"categories__upper",children:Object(o.jsx)("h2",{className:"categories__title",children:"Shop by category"})}),Object(o.jsx)("div",{className:"categories__list","data-cy":"categoryLinksContainer",children:K.map((function(e){return Object(o.jsx)(H,{category:e[0],link:e[1]},e[0])}))})]})},X=(c(51),function(){var e=Object(i.m)().pathname.split("/").filter((function(e){return""!==e}));return Object(o.jsxs)("div",{className:"bread-crumbs","data-cy":"breadCrumbs",children:[Object(o.jsx)(r.b,{to:"/",className:"bread-crumbs__home-icon"}),e.map((function(t,c){return c===e.length-1?Object(o.jsx)("div",{className:"bread-crumbs__link",children:t.split("-").join(" ")},t):Object(o.jsx)(r.b,{className:"bread-crumbs__link",to:"/".concat(t),children:t.split("-").join(" ")},t)}))]})}),ee=(c(52),function(){return Object(o.jsx)("button",{className:"back-button","data-cy":"backButton",onClick:function(){window.history.back()},children:"back"})}),te=(c(53),function(){return Object(o.jsx)("div",{"data-cy":"loader",className:"loader",children:Object(o.jsx)("div",{className:"loader__content"})})}),ce=(c(54),function(e){var t=e.phonesPerPage,c=e.totalPhones,n=e.setCurrentPage,s=e.currentPage,a=Math.ceil(c/t),r=Math.ceil(2.5),i=s-r+1,l=s+r;i<1&&(i=1,l=5),l>a&&(l=a,i=a-5+1),i<1&&(i=1);for(var d=[],j=i;j<=l;j+=1)d.push(j);return Object(o.jsxs)("div",{className:"pagination","data-cy":"pagination",children:[Object(o.jsx)(b,{"data-cy":"paginationLeft",type:S.arrowBack,handler:function(){1!==s&&n(s-1)}}),Object(o.jsx)("div",{className:"pagination__pages",children:d.map((function(e){return Object(o.jsx)("button",{type:"button",className:u()("pagination__btn",{"pagination__btn--selected":e===s}),onClick:(t=e,function(){n(t)}),children:e},e);var t}))}),Object(o.jsx)(b,{type:S.arrowNext,handler:function(){s!==a&&n(s+1)},"data-cy":"paginationRight"})]})}),ne=(c(55),function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(D,{}),Object(o.jsx)(i.a,{}),Object(o.jsx)(A,{})]})}),se=(c(56),function(){var e=P().products,t=Object(O.useMemo)((function(){return e.sort((function(e,t){return t.fullPrice-t.price-(e.fullPrice-e.price)}))}),[e]),c=Object(O.useMemo)((function(){return t.sort((function(e,t){return t.year-e.year}))}),[e]);return Object(o.jsx)("div",{className:"home",children:Object(o.jsxs)(B,{children:[Object(o.jsx)("div",{className:"home__banner-container",children:Object(o.jsx)(W,{})}),Object(o.jsx)("div",{className:"home__hot-prices-container",children:Object(o.jsx)(G,{products:t,title:"hot prices"})}),Object(o.jsx)("div",{className:"home__categories-container",children:Object(o.jsx)(V,{})}),Object(o.jsx)("div",{className:"home__brand-new-container",children:Object(o.jsx)(G,{products:c,title:"brand new models"})})]})})}),ae=(c(57),[h.alphabetically,h.newest,h.cheapest]),re=["all","4","8","16"],ie=function(){var e,t=P(),c=t.filteredProducts,n=t.setSortBy,s=t.isLoading,a=Object(O.useState)(h.all),r=Object(m.a)(a,2),i=r[0],l=r[1],d=Object(O.useState)(1),j=Object(m.a)(d,2),u=j[0],b=j[1],p=u*Number(i),x=p-Number(i);e=i===h.all?c:c.slice(x,p);var _=c.length;return Object(o.jsx)(o.Fragment,{children:s?Object(o.jsx)(te,{}):Object(o.jsxs)("div",{className:"phones",children:[Object(o.jsx)("div",{className:"phones__path-container",children:Object(o.jsx)(X,{})}),Object(o.jsx)("div",{className:"phones__back-button-container",children:Object(o.jsx)(ee,{})}),Object(o.jsxs)("div",{className:"phones__heading",children:[Object(o.jsx)("h1",{className:"phones__title",children:"Mobile Phones"}),Object(o.jsx)("p",{className:"phones__quantity",children:"".concat(_," items")})]}),Object(o.jsxs)("div",{className:"phones__selects-container",children:[Object(o.jsx)(F,{setSelection:function(e){n(e)},title:"Sort by",options:ae}),Object(o.jsx)(F,{title:"Items on page",options:re,setSelection:function(e){l(e)}})]}),Object(o.jsx)("div",{className:"phones__list","data-cy":"productList",children:e.map((function(e){return Object(o.jsx)(Y,{product:e},e.id)}))}),i!==h.all&&Object(o.jsx)("div",{className:"phones__pagination-container",children:Object(o.jsx)(ce,{phonesPerPage:i!==h.all?Number(i):0,totalPhones:c.length,setCurrentPage:b,currentPage:u})})]})})},oe=(c(58),function(){return Object(o.jsx)("div",{className:"tablets",children:Object(o.jsx)(B,{children:Object(o.jsx)("div",{className:"tablets__path-container",children:Object(o.jsx)(X,{})})})})}),le=(c(59),function(){return Object(o.jsx)("div",{className:"accessories",children:Object(o.jsx)(B,{children:Object(o.jsx)("div",{className:"accessories__path-container",children:Object(o.jsx)(X,{})})})})}),de=(c(60),function(){return Object(o.jsx)("h1",{className:"not-found",children:"not found"})}),je=(c(61),c(62),function(e){var t=e.capacities,c=e.currCapacity,n=e.nameSpaceId,s=e.color;return Object(o.jsx)("div",{className:"capacity",children:Object(o.jsx)("div",{className:"capacity__list",children:t.map((function(e){return Object(o.jsx)(r.b,{to:"/phones/".concat(n,"-").concat(e.toLowerCase(),"-").concat(s),type:"button",className:u()("capacity__btn",{"capacity__btn--current":e===c}),children:e},e)}))})})}),ue=(c(63),function(e){var t=e.colors,c=e.nameSpaceId,n=e.capacity,s=e.currColor;return Object(o.jsxs)("div",{className:"colors",children:[Object(o.jsx)("h2",{className:"colors__heading",children:"Available colors"}),Object(o.jsx)("div",{className:"colors__list",children:t.map((function(e){return Object(o.jsx)("div",{className:"colors__item",children:Object(o.jsx)("div",{className:u()("colors__border",{"colors__border--selected":e===s}),children:Object(o.jsx)(r.b,{to:"/phones/".concat(c,"-").concat(n.toLowerCase(),"-").concat(e),className:"colors__circle",style:{backgroundColor:"".concat(e)}})})},e)}))})]})}),be=(c(64),function(e){var t=e.images,c=Object(O.useState)(0),n=Object(m.a)(c,2),s=n[0],a=n[1];return Object(o.jsxs)("div",{className:"product-image",children:[Object(o.jsx)("div",{className:"product-image__thumbs",children:t.map((function(e,t){return Object(o.jsx)("div",{className:u()("product-image__thumb-container",{"product-image__thumb-container--selected":s===t}),children:Object(o.jsx)("img",{alt:e,src:"/_new/".concat(e),className:"product-image__img",onClick:function(){return a(t)}})},e)}))}),Object(o.jsx)("div",{className:"product-image__full-img-container",children:Object(o.jsx)("img",{src:"/_new/".concat(t[s]),alt:t[0],className:"product-image__full-img"})})]})}),he=function(){var e=Object(i.q)().productId,t=P(),c=t.products,s=t.setFavourites,a=t.favourites,r=t.cart,l=t.setToCart,d=Object(O.useState)(null),j=Object(m.a)(d,2),u=j[0],b=j[1],h=Object(O.useState)(!1),x=Object(m.a)(h,2),_=x[0],f=x[1];Object(O.useEffect)((function(){e&&(f(!0),function(e){return k.apply(this,arguments)}(e).then(b).finally((function(){return f(!1)})))}),[e]);var v=r.some((function(e){return e.itemId===(null===u||void 0===u?void 0:u.id)}));return Object(o.jsx)(o.Fragment,{children:_?Object(o.jsx)(te,{}):u&&Object(o.jsx)("div",{className:"product-details",children:Object(o.jsxs)(B,{children:[Object(o.jsx)("div",{className:"product-details__path-container",children:Object(o.jsx)(X,{})}),Object(o.jsx)("div",{className:"product-details__back-container",children:Object(o.jsx)(ee,{})}),Object(o.jsx)("h1",{className:"product-details__title",children:u.name}),Object(o.jsxs)("div",{className:"product-details__upper-block",children:[Object(o.jsx)(be,{images:u.images}),Object(o.jsxs)("div",{className:"product-details__upper-right",children:[Object(o.jsx)(ue,{colors:u.colorsAvailable,nameSpaceId:u.namespaceId,capacity:u.capacity,currColor:u.color}),Object(o.jsx)(je,{capacities:u.capacityAvailable,currCapacity:u.capacity,nameSpaceId:u.namespaceId,color:u.color}),Object(o.jsxs)("div",{className:"product-details__price-block",children:[Object(o.jsx)("p",{className:"product-details__price-discount",children:"$".concat(null===u||void 0===u?void 0:u.priceDiscount)}),Object(o.jsx)("p",{className:"product-details__price-regular",children:"$".concat(null===u||void 0===u?void 0:u.priceRegular)})]}),Object(o.jsxs)("div",{className:"product-details__btns-block",children:[Object(o.jsx)(L,{size:n.large,id:u.id,handler:function(){if(v){var e=r.filter((function(e){return e.itemId!==(null===u||void 0===u?void 0:u.id)}));l(e)}else{var t=c.filter((function(e){return e.itemId===(null===u||void 0===u?void 0:u.id)}));l([].concat(Object(p.a)(r),Object(p.a)(t)))}},disabled:v}),Object(o.jsx)(M,{size:"large",handler:function(){if(u)if(a.some((function(e){return e.itemId===u.id}))){var e=a.filter((function(e){return e.itemId!==u.id}));s(e)}else{var t=c.filter((function(e){return e.itemId===u.id}));s([].concat(Object(p.a)(a),Object(p.a)(t)))}},id:u.id})]}),Object(o.jsxs)("div",{className:"product-details__specs",children:[Object(o.jsx)("p",{children:"Screen"}),Object(o.jsx)("p",{className:"product-card__specs--right",children:u.screen}),Object(o.jsx)("p",{children:"Resolution"}),Object(o.jsx)("p",{className:"product-card__specs--right",children:null===u||void 0===u?void 0:u.resolution}),Object(o.jsx)("p",{children:"Proccessor"}),Object(o.jsx)("p",{className:"product-card__specs--right",children:u.processor}),Object(o.jsx)("p",{children:"RAM"}),Object(o.jsx)("p",{className:"product-card__specs--right",children:u.ram})]})]})]}),Object(o.jsxs)("div",{className:"product-details__lower-block",children:[Object(o.jsxs)("div",{className:"product-details__about",children:[Object(o.jsx)("h2",{className:"product-details__about-heading",children:"about"}),Object(o.jsx)("h3",{className:"product-details__about-title",children:u.description[0].title}),Object(o.jsx)("p",{className:"product-details__about-text",children:u.description[0].text}),Object(o.jsx)("h3",{className:"product-details__about-title",children:u.description[1].title}),Object(o.jsx)("p",{className:"product-details__about-text",children:u.description[1].text}),Object(o.jsx)("h3",{className:"product-details__about-title",children:u.description[2].title}),Object(o.jsx)("p",{className:"product-details__about-text",children:u.description[2].text})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{className:"product-details__about-heading",children:"tech specs"}),Object(o.jsxs)("div",{className:"product-details__tech-specs",children:[Object(o.jsx)("p",{children:"Screen"}),Object(o.jsx)("p",{className:"product-card__specs--right",children:u.screen}),Object(o.jsx)("p",{children:"Resolution"}),Object(o.jsx)("p",{className:"product-card__specs--right",children:u.resolution}),Object(o.jsx)("p",{children:"Proccessor"}),Object(o.jsx)("p",{className:"product-card__specs--right",children:u.processor}),Object(o.jsx)("p",{children:"RAM"}),Object(o.jsx)("p",{className:"product-card__specs--right",children:u.ram}),Object(o.jsx)("p",{children:"Built in memory"}),Object(o.jsx)("p",{className:"product-card__specs--right",children:u.capacity}),Object(o.jsx)("p",{children:"Camera"}),Object(o.jsx)("p",{className:"product-card__specs--right",children:u.camera}),Object(o.jsx)("p",{children:"Zoom"}),Object(o.jsx)("p",{className:"product-card__specs--right",children:u.zoom}),Object(o.jsx)("p",{children:"Cell"}),Object(o.jsx)("p",{className:"product-card__specs--right",children:u.cell.join(", ")})]})]})]}),Object(o.jsx)("div",{className:"product-details__also-like-container",children:Object(o.jsx)(G,{title:"you may also like",products:c})})]})})})},pe=(c(65),c(66),function(e){var t=e.totalPrice,c=e.setTotalPrice,n=e.product,s=Object(O.useState)(1),a=Object(m.a)(s,2),r=a[0],i=a[1];return Object(o.jsxs)("div",{className:"add-items",children:[Object(o.jsx)(b,{type:S.minus,disabled:r<2,handler:function(){var e=t-n.price;c(e),i((function(e){return e-1}))}}),Object(o.jsx)("p",{className:"add-items__quantity",children:r}),Object(o.jsx)(b,{type:S.plus,handler:function(){var e=t+n.price;c(e),i((function(e){return e+1}))}})]})}),me=(c(67),function(e){var t=e.product,c=e.totalPrice,n=e.setTotalPrice,s=P(),a=s.cart,i=s.setToCart;return Object(o.jsx)(o.Fragment,{children:t&&Object(o.jsxs)("div",{className:"cart-item",children:[Object(o.jsx)("button",{type:"button",className:"cart-item__btn",onClick:function(){var e=a.filter((function(e){return e.itemId!==t.itemId})),s=c-t.price;n(s),i(e)},"data-cy":"cartDeleteButton"}),Object(o.jsx)("img",{alt:null===t||void 0===t?void 0:t.name,src:"./_new/".concat(null===t||void 0===t?void 0:t.image),className:"cart-item__img"}),Object(o.jsx)(r.b,{to:"/phones/".concat(t.phoneId),className:"cart-item__link",children:Object(o.jsx)("h2",{className:"cart-item__title",children:t.name})}),Object(o.jsx)("div",{className:"cart-item__add-items-container",children:Object(o.jsx)(pe,{totalPrice:c,setTotalPrice:n,product:t})}),Object(o.jsx)("p",{className:"cart-item__price",children:"".concat(t.price,"$")})]})})}),Oe=function(){var e=P().cart,t=e.reduce((function(e,t){return e+t.price}),0),c=Object(O.useState)(t),s=Object(m.a)(c,2),a=s[0],r=s[1],i=Object(O.useState)(!1),l=Object(m.a)(i,2),d=l[0],j=l[1];return Object(o.jsx)("div",{className:"cart",children:Object(o.jsxs)(B,{children:[Object(o.jsx)("div",{className:"cart__back-container",children:Object(o.jsx)(ee,{})}),Object(o.jsx)("h1",{className:"cart__title",children:"Cart"}),!e.length&&Object(o.jsx)("p",{className:"cart__message",children:"Your cart is empty"}),d?Object(o.jsx)("p",{className:"cart__message",children:"We are sorry, but this feature is not implemented yet."}):Object(o.jsxs)("div",{className:"cart__content",children:[Object(o.jsx)(o.Fragment,{children:e&&e.length>0&&Object(o.jsx)("div",{className:"cart__list",children:e.map((function(e){return Object(o.jsx)(me,{product:e,totalPrice:a,setTotalPrice:r},e.id)}))})}),e&&e.length>0&&Object(o.jsxs)("div",{className:"cart__total-price-block",children:[Object(o.jsx)("p",{className:"cart__price","data-cy":"productQauntity",children:"$".concat(a)}),Object(o.jsx)("p",{className:"cart__quantity",children:"Total for ".concat(e.length," items")}),Object(o.jsx)(L,{size:n.checkout,handler:function(){return j(!0)}})]})]})]})})},xe=(c(68),function(){var e=P().favourites;return Object(o.jsx)("div",{className:"favourites",children:Object(o.jsxs)(B,{children:[Object(o.jsx)("div",{className:"favourites__path-container",children:Object(o.jsx)(X,{})}),Object(o.jsx)("h1",{className:"favourites__title",children:"Favourites"}),Object(o.jsx)("p",{className:"favourites__quantity",children:"".concat(e.length," items")}),e&&e.length>0&&Object(o.jsx)("div",{className:"favourites__list",children:e.map((function(e){return Object(o.jsx)(Y,{product:e},e.id)}))})]})})}),_e={home:Object(o.jsx)(se,{}),phones:Object(o.jsx)(ie,{}),tablets:Object(o.jsx)(oe,{}),accessories:Object(o.jsx)(le,{}),cart:Object(o.jsx)(Oe,{}),favourites:Object(o.jsx)(xe,{}),"*":Object(o.jsx)(de,{})},fe=function(){return Object(o.jsx)(I,{children:Object(o.jsx)(r.a,{children:Object(o.jsx)(i.d,{children:Object(o.jsxs)(i.b,{path:"/",element:Object(o.jsx)(ne,{}),children:[Object(o.jsx)(i.b,{index:!0,element:Object(o.jsx)(se,{})}),Object(o.jsxs)(i.b,{path:"/phones",children:[Object(o.jsx)(i.b,{index:!0,element:Object(o.jsx)(ie,{})}),Object(o.jsx)(i.b,{path:":productId",element:Object(o.jsx)(he,{})})]}),Object.entries(_e).map((function(e){return Object(o.jsx)(i.b,{path:e[0],element:e[1]},e[0])}))]})})})})};a.a.render(Object(o.jsx)(fe,{}),document.getElementById("root"))}]),[[69,1,2]]]);
//# sourceMappingURL=main.b2ac6533.chunk.js.map