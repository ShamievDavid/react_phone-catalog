(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],Array(28).concat([function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n,s=c(23),r=c.n(s),a=(c(28),c(9)),i=c(3),o=(c(29),c(30),c(31),c(1)),l={github:"https://github.com/ShamievDavid",contacts:"https://davydshamiiev.netlify.app",rights:"https://davydshamiiev.netlify.app"},j=function(){return Object(o.jsx)("nav",{className:"footer-nav",children:Object.entries(l).map((function(e){return Object(o.jsx)("a",{className:"footer-nav__link",href:e[1],target:"_blank",rel:"noreferrer",children:e[0]},e[0])}))})},u=c(8),d=c.n(u),b=(c(33),function(e){var t=e.type,c=e.disabled,n=e.handler;return Object(o.jsx)("button",{type:"button",disabled:c,onClick:n,className:d()("icon-button","icon-button--".concat(t))})});c(34);!function(e){e[e.large=0]="large",e[e.cart=1]="cart"}(n||(n={}));var h,O=function(e){var t=e.size;return Object(o.jsx)("button",{type:"button",className:d()("button",{"button--cart":t===n.cart,"button--large":t===n.large})})},f=(c(35),function(e){var t=e.children;return Object(o.jsx)("div",{className:"wrapper",children:t})});!function(e){e.arrowBack="arrow-back",e.arrowNext="arrow-next",e.arrowUp="arrow-up",e.fav="fav"}(h||(h={}));var x,p=function(){return Object(o.jsx)("footer",{className:"footer",children:Object(o.jsx)(f,{children:Object(o.jsxs)("div",{className:"footer__content",children:[Object(o.jsx)(a.b,{className:"footer__logo",to:"/",children:Object(o.jsx)("img",{alt:"logo",src:"./img/icons/logo.svg"})}),Object(o.jsx)(j,{}),Object(o.jsxs)("div",{className:"footer__button-box",children:[Object(o.jsx)("span",{className:"footer__button-title",children:"back to top"}),Object(o.jsx)(b,{type:h.arrowUp,handler:function(){window.scrollTo({top:0,behavior:"smooth"})}})]})]})})})},m=(c(37),c(38),function(e){var t=e.path,c=e.alt,n=e.src;return Object(o.jsx)(a.c,{className:function(e){var t=e.isActive;return d()("nav-icon",{"nav__link nav__link--is-active":t})},to:t,children:Object(o.jsx)("img",{alt:c,src:n})})}),v=["*","cart","favourites"],_=function(){var e=function(e){var t=e.isActive;return d()("nav__link",{"nav__link--is-active":t})};return Object(o.jsxs)("nav",{className:"nav",children:[Object(o.jsxs)("div",{className:"nav__leftside",children:[Object(o.jsx)(a.b,{className:"nav__logo",to:"/",children:Object(o.jsx)("img",{alt:"logo",className:"check",src:"./img/icons/logo.svg"})}),Object.keys(Q).map((function(t){return v.includes(t)?null:Object(o.jsx)(a.c,{to:t,className:e,children:t},t)}))]}),Object(o.jsxs)("div",{className:"nav__rigthside",children:[Object(o.jsx)(m,{path:"favourites",alt:"like-icon",src:"./img/icons/like.svg"}),Object(o.jsx)(m,{path:"cart",alt:"cart-icon",src:"./img/icons/cart.svg"})]})]})},g=(c(39),function(){return Object(o.jsx)("header",{className:"header",children:Object(o.jsx)(_,{})})}),N=c(5),y=c(0),w=(c(40),c(41),function(e){var t=e.images,c=e.currentSlideIndex;return Object(o.jsx)("div",{className:"dots",children:t.map((function(e,t){return Object(o.jsx)("div",{className:d()("dots__dot",{"dots__dot--active":t===c})},e[0])}))})}),k=(c(42),function(e){var t=e.fill;return Object(o.jsx)("svg",{width:"6",height:"10",viewBox:"0 0 6 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.528758 0.528606C0.789108 0.268256 1.21122 0.268256 1.47157 0.528606L5.47157 4.52861C5.73192 4.78896 5.73192 5.21107 5.47157 5.47141L1.47157 9.47141C1.21122 9.73176 0.789108 9.73176 0.528758 9.47141C0.268409 9.21107 0.268409 8.78896 0.528758 8.52861L4.05735 5.00001L0.528758 1.47141C0.268409 1.21107 0.268409 0.788955 0.528758 0.528606Z",fill:t})})}),S=function(e){var t=e.side,c=e.handleSlide,n=Object(y.useState)(!1),s=Object(N.a)(n,2),r=s[0],a=s[1];return Object(o.jsx)("button",{type:"button",className:d()("side-button",{"side-button--left":"back"===t}),onMouseEnter:function(){return a(!0)},onMouseLeave:function(){return a(!1)},onClick:function(){c(t)},children:Object(o.jsx)(k,{fill:r?"#000":"#89939A"})})};!function(e){e[e.back=1040]="back",e[e.next=-1040]="next"}(x||(x={}));var C={phones:"_new/img/banner-phones.png",tablets:"_new/img/banner-tablets.png",accessories:"_new/img/banner-accessories.png"},A=function(){var e=Object(y.useState)(0),t=Object(N.a)(e,2),c=t[0],n=t[1],s=Object(y.useState)(0),r=Object(N.a)(s,2),a=r[0],i=r[1],l=Object(y.useRef)(null),j=Object.entries(C),u=function(e){"next"===e&&(a>=j.length-1?(i(0),n(0)):(i((function(e){return e+1})),n((function(e){return e+x.next})))),"back"===e&&(a<=0?(i(j.length-1),n(x.next*(j.length-1))):(i((function(e){return e-1})),n((function(e){return e+x.back}))))};return Object(y.useEffect)((function(){var e=setInterval((function(){u("next")}),5e3);return function(){clearInterval(e)}})),Object(o.jsxs)("div",{className:"banner-slider",children:[Object(o.jsxs)("div",{className:"banner-slider__upper-content",children:[Object(o.jsx)(S,{side:"back",handleSlide:u}),Object(o.jsx)("div",{className:"banner-slider__img-container",ref:l,children:j.map((function(e){return Object(o.jsx)("div",{className:"banner-slider__picture",style:{transform:"translate(".concat(c,"px)"),transition:"0.7s ease"},children:Object(o.jsx)("img",{className:"banner-slider__img",alt:e[0],src:"./".concat(e[1])})},e[0])}))}),Object(o.jsx)(S,{handleSlide:u,side:"next"})]}),Object(o.jsx)(w,{images:j,currentSlideIndex:a})]})},B=(c(43),c(44),function(e){var t=e.product,c=t.name,s=t.imageUrl,r=t.price,a=t.discount;return Object(o.jsxs)("div",{className:"product-card",children:[Object(o.jsx)("img",{className:"product-card__img",alt:c,src:"./".concat(s)}),Object(o.jsx)("h3",{className:"product-card__name",children:c}),Object(o.jsxs)("div",{className:"product-card__price-block",children:[Object(o.jsx)("p",{className:"product-card__price-w-discount",children:"$".concat(r-r/100*a)}),!a&&Object(o.jsx)("p",{className:"product-card__price",children:"$".concat(r)})]}),Object(o.jsxs)("div",{className:"product-card__specs",children:[Object(o.jsx)("p",{children:"Screen"}),Object(o.jsx)("p",{className:"product-card__specs--right",children:"5.8\u201d OLED"}),Object(o.jsx)("p",{children:"Capacity"}),Object(o.jsx)("p",{className:"product-card__specs--right",children:"64 GB"}),Object(o.jsx)("p",{children:"RAM"}),Object(o.jsx)("p",{className:"product-card__specs--right",children:"4 GB"})]}),Object(o.jsxs)("div",{className:"product-card__buttons-block",children:[Object(o.jsx)(O,{size:n.cart}),Object(o.jsx)(b,{type:h.fav})]})]})}),L=function(e){var t=e.products,c=e.title,n=Object(y.useState)(0),s=Object(N.a)(n,2),r=s[0],a=s[1],i=r+4,l=function(e){return function(){return a("dec"===e?function(e){return e-4}:function(e){return e+4})}};return Object(o.jsxs)("div",{className:"products-slider","data-cy":"cardsContainer",children:[Object(o.jsxs)("div",{className:"products-slider__upper",children:[Object(o.jsx)("h2",{className:"products-slider__title",children:c}),Object(o.jsxs)("div",{className:"products-slider__buttons",children:[Object(o.jsx)(b,{type:h.arrowBack,disabled:!r,handler:l("dec")}),Object(o.jsx)(b,{type:h.arrowNext,handler:l(null),disabled:i===t.length})]})]}),Object(o.jsx)("div",{className:"products-slider__list",children:t.slice(r,i).map((function(e){return Object(o.jsx)(B,{product:e},e.id)}))})]})},E=(c(45),c(46),function(e){var t=e.category,c=e.link,n=e.quantity,s=void 0===n?0:n;return Object(o.jsxs)("div",{className:"category",children:[Object(o.jsx)(a.b,{to:"/".concat(t),children:Object(o.jsx)("img",{className:"category__img",alt:t,src:c})},t),Object(o.jsx)("h3",{className:"category__title",children:"phones"===t?"Mobile phones":t}),Object(o.jsx)("p",{className:"category__quantity",children:"".concat(s," models")})]})}),I=Object.entries({phones:"/_new/img/category-phones.png",tablets:"/_new/img/category-tablets.png",accessories:"/_new/img/category-accessories.png"}),M=function(){return Object(o.jsxs)("div",{className:"categories",children:[Object(o.jsx)("div",{className:"categories__upper",children:Object(o.jsx)("h2",{className:"categories__title",children:"Shop by category"})}),Object(o.jsx)("div",{className:"categories__list",children:I.map((function(e){return Object(o.jsx)(E,{category:e[0],link:e[1]},e[0])}))})]})},P=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(g,{}),Object(o.jsx)(i.a,{}),Object(o.jsx)(p,{})]})},R=(c(47),c(6)),T=c(4),U=c.n(T),q="https://mate-academy.github.io/react_phone-catalog/api/products.json";function z(e){return new Promise((function(t){return setTimeout(t,e)}))}function D(){return(D=Object(R.a)(U.a.mark((function e(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",z(500).then((function(){return fetch(q)})).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var F=function(){var e=Object(y.useState)([]),t=Object(N.a)(e,2),c=t[0],n=t[1];return Object(y.useEffect)((function(){(function(){return D.apply(this,arguments)})().then(n)}),[]),Object(o.jsx)("div",{className:"home",children:Object(o.jsxs)(f,{children:[Object(o.jsx)(A,{}),Object(o.jsx)(M,{}),Object(o.jsx)(L,{products:c,title:"hot prices"}),Object(o.jsx)(L,{products:c,title:"brand new models"})]})})},G=(c(48),function(){return Object(o.jsx)("div",{className:"phones",children:"Phones Page"})}),J=(c(49),function(){return Object(o.jsx)("div",{className:"tablets",children:"TabletsPage"})}),$=(c(50),function(){return Object(o.jsx)("div",{className:"accessories",children:" Accessories Page"})}),Z=(c(51),function(){return Object(o.jsx)("h1",{className:"not-found",children:"not found"})}),H=(c(52),function(){return Object(o.jsx)("div",{className:"cart",children:"Cart"})}),K=(c(53),function(){return Object(o.jsx)("div",{className:"favourites",children:"Favourites"})}),Q={home:Object(o.jsx)(F,{}),phones:Object(o.jsx)(G,{}),tablets:Object(o.jsx)(J,{}),accessories:Object(o.jsx)($,{}),cart:Object(o.jsx)(H,{}),favourites:Object(o.jsx)(K,{}),"*":Object(o.jsx)(Z,{})},V=function(){return Object(o.jsx)(a.a,{children:Object(o.jsx)(i.d,{children:Object(o.jsxs)(i.b,{path:"/",element:Object(o.jsx)(P,{}),children:[Object(o.jsx)(i.b,{index:!0,element:Object(o.jsx)(F,{})}),Object.entries(Q).map((function(e){return Object(o.jsx)(i.b,{path:e[0],element:e[1]},e[0])}))]})})})};r.a.render(Object(o.jsx)(V,{}),document.getElementById("root"))}]),[[54,1,2]]]);
//# sourceMappingURL=main.11e1f9c3.chunk.js.map