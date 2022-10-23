(this["webpackJsonplightence-admin"]=this["webpackJsonplightence-admin"]||[]).push([[22],{2340:function(e,n,t){"use strict";t.d(n,"a",(function(){return j}));var a=t(16),r=t(23),c=t(32),i=(t(0),t(68)),o=t(2341),s=t(328),d=t(329),l=t(330),u=t(2),b=["form","isFieldsChanged","setFieldsChanged","footer","loading","children"],j=function(e){var n=e.form,t=e.isFieldsChanged,s=e.setFieldsChanged,d=e.footer,l=e.loading,j=void 0!==l&&l,m=e.children,p=Object(c.a)(e,b),O=i.a.useForm(),g=Object(r.a)(O,1)[0],h=n||g;return Object(u.jsxs)(i.a,Object(a.a)(Object(a.a)({form:h},p),{},{children:[m,t&&(d||Object(u.jsx)(o.a,{loading:j,onCancel:function(){null===h||void 0===h||h.resetFields(),s&&s(!1)}}))]}))};j.Title=s.a,j.Item=d.a,j.List=l.a,j.useForm=i.a.useForm,j.Provider=i.a.Provider},2341:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t(16),r=t(32),c=(t(0),t(2291)),i=t(2292),o=t(48),s=t(2283),d=t(2),l=["className","onCancel","loading"],u=function(e){var n=e.className,t=e.onCancel,u=e.loading,b=Object(r.a)(e,l),j=Object(s.a)().t;return Object(d.jsxs)(c.a,{className:n,gutter:[10,10],wrap:!1,children:[Object(d.jsx)(i.a,{span:12,children:Object(d.jsx)(o.a,Object(a.a)(Object(a.a)({block:!0,type:"ghost",onClick:t},b),{},{children:j("common.cancel")}))}),Object(d.jsx)(i.a,{span:12,children:Object(d.jsx)(o.a,Object(a.a)(Object(a.a)({block:!0,type:"primary",loading:u,htmlType:"submit"},b),{},{children:j("common.save")}))})]})}},2368:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));t(0);var a,r=t(11),c=t(9),i=t(462),o=t(7),s=Object(c.default)(i.a)(a||(a=Object(r.a)(["\n  padding: 0.375rem 0;\n  min-width: 7.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n\n  @media only screen and "," {\n    min-width: 6.5rem;\n  }\n"])),o.h.md),d=t(2),l=function(e){var n=e.color,t=e.text;return Object(d.jsx)(s,{color:n,children:t})}},2579:function(e,n,t){"use strict";t.r(n);var a,r,c,i,o,s,d,l,u,b,j,m,p,O,g,h,f,x,y=t(0),v=t(2283),k=t(81),C=t(2291),F=t(2292),_=t(23),w=t(68),I=t(80),M=t(2308),z=t(25),T=t(205),D=[{id:1,name:"profile.nav.payments.status.paid",priority:T.a.LOW},{id:2,name:"profile.nav.payments.status.scheduled",priority:T.a.INFO},{id:3,name:"profile.nav.payments.status.pending",priority:T.a.MEDIUM},{id:4,name:"profile.nav.payments.status.failed",priority:T.a.HIGH}],E=t(42),A=t(2368),N=t(11),U=t(9),q=t(2284),S=U.default.div(a||(a=Object(N.a)(["\n  padding: 1.5rem 3.5rem;\n  display: flex;\n  align-items: center;\n\n  background-color: var(--secondary-background-color);\n"]))),H=U.default.div(r||(r=Object(N.a)(["\n  width: 2rem;\n  margin-right: 1.25rem;\n"]))),V=Object(U.default)(q.a.Text)(c||(c=Object(N.a)(["\n  font-weight: 600;\n"]))),L=U.default.div(i||(i=Object(N.a)(["\n  padding: 1rem 2rem;\n  position: relative;\n\n  &::after {\n    content: '';\n    position: absolute;\n    top: 100%;\n    left: 0;\n    width: 100%;\n    height: 1px;\n\n    background-color: 1px solid rgba(var(--primary-rgb-color), 0.3);\n  }\n"]))),J=U.default.div(o||(o=Object(N.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n\n  &:nth-last-of-type(1) {\n    margin-bottom: 0;\n  }\n"]))),R=Object(U.default)(q.a.Text)(s||(s=Object(N.a)(["\n  font-weight: 500;\n  font-size: 0.75rem;\n\n  color: var(--primary-color);\n"]))),P=U.default.div(d||(d=Object(N.a)(["\n  padding: 0.8rem;\n  text-align: center;\n"]))),$=t(48),B=t(2),G=function(e){var n=e.src,t=e.recipient,a=e.date,r=e.status,c=e.price,i=e.currency,o=Object(v.a)().t,s=Object(y.useMemo)((function(){return D.find((function(e){return e.id===r}))}),[r]);return s?Object(B.jsxs)(B.Fragment,{children:[Object(B.jsxs)(S,{children:[Object(B.jsx)(H,{children:Object(B.jsx)(M.a,{src:n,alt:t,shape:"circle"})}),Object(B.jsx)(V,{children:t})]}),Object(B.jsxs)(L,{children:[Object(B.jsxs)(J,{children:[Object(B.jsx)(R,{children:o("profile.nav.payments.date")}),Object(B.jsx)(V,{children:E.a.format(a,"LL")})]}),Object(B.jsxs)(J,{children:[Object(B.jsx)(R,{children:o("profile.nav.payments.status.title")}),Object(B.jsx)(A.a,{color:Object(z.c)(s.priority),text:o(s.name)})]}),Object(B.jsxs)(J,{children:[Object(B.jsx)(R,{children:o("profile.nav.payments.date")}),Object(B.jsx)(V,{children:Object(z.f)(c,i)})]})]}),Object(B.jsx)(P,{children:Object(B.jsx)($.a,{type:"link",children:o("profile.nav.payments.details")})})]}):null},Q=t(2301),W=Object(U.default)(Q.a)(l||(l=Object(N.a)(["\n  .ant-table-thead > tr > th {\n    border-top: 1px solid rgba(var(--primary-rgb-color), 0.3);\n\n    border-bottom: 1px solid rgba(var(--primary-rgb-color), 0.3);\n\n    color: var(--primary-color);\n\n    text-align: center;\n\n    &::before {\n      display: none;\n    }\n  }\n\n  .ant-table-tbody > tr > td {\n    border-bottom: 1px solid rgba(var(--primary--rgb-color), 0.3);\n\n    font-weight: 600;\n    font-size: 1rem;\n  }\n"]))),Y=U.default.div(u||(u=Object(N.a)(["\n  display: flex;\n  align-items: center;\n  text-align: left;\n\n  & > span:first-of-type {\n    margin-right: 0.5rem;\n  }\n"]))),X=function(e){var n=e.payments,t=Object(v.a)().t,a=Object(y.useMemo)((function(){return[{title:t("profile.nav.payments.recipient"),dataIndex:"recipient",key:"recipient",render:function(e){return Object(B.jsxs)(Y,{children:[Object(B.jsx)(M.a,{src:e.img,alt:e.name}),e.name]})},align:"center"},{title:t("profile.nav.payments.date"),dataIndex:"date",key:"date",render:function(e){return E.a.format(e,"LL")},sorter:function(e,n){return e.date-n.date},align:"center"},{title:t("profile.nav.payments.status.title"),dataIndex:"status",key:"status",render:function(e){return Object(B.jsx)(A.a,{color:Object(z.c)(e.priority),text:t(e.name).toUpperCase()})},align:"center"},{title:t("profile.nav.payments.totalAmount"),dataIndex:"totalAmount",key:"totalAmount",align:"center"},{title:"",dataIndex:"details",key:"details",align:"center",render:function(){return Object(B.jsx)($.a,{type:"link",children:t("profile.nav.payments.details")})}}]}),[t]),r=Object(y.useMemo)((function(){return n.map((function(e,n){return{key:n,recipient:{name:e.recipient,img:e.imgUrl},date:e.date,status:D.find((function(n){return n.id===e.status})),totalAmount:Object(z.f)(e.amount,e.currency),details:e}}))}),[n]);return Object(B.jsx)(W,{size:"middle",columns:a,dataSource:r,pagination:!1})},K=t(35),Z=t(276),ee=t(7),ne=U.default.div(b||(b=Object(N.a)(["\n  ",";\n\n  @media only screen and "," {\n    ",";\n  }\n\n  @media only screen and "," {\n    margin: 0;\n  }\n"])),(function(e){return!e.isEmptyHistory&&"margin: 0 -".concat(Z.a.mobile[1],"px -").concat(Z.a.mobile[0],"px -").concat(Z.a.mobile[1],"px")}),ee.h.md,(function(e){return!e.isEmptyHistory&&"margin: 0 -".concat(Z.a.tablet[1],"px -").concat(Z.a.tablet[0],"px -").concat(Z.a.tablet[1],"px")}),ee.h.xl),te=Object(U.default)(q.a.Text)(j||(j=Object(N.a)(["\n  @media only screen and "," {\n    font-size: 1rem;\n  }\n"])),ee.h.md),ae=function(){var e=Object(y.useState)([]),n=Object(_.a)(e,2),t=n[0],a=n[1],r=Object(K.a)(),c=r.mobileOnly,i=r.isTablet,o=Object(v.a)().t,s=Object(y.useMemo)((function(){return t.map((function(e){return Object(B.jsx)(G,{src:e.imgUrl,recipient:e.recipient,date:e.date,status:e.status,price:e.amount,currency:e.currency},e.id)}))}),[t]);Object(y.useEffect)((function(){new Promise((function(e){setTimeout((function(){e([{id:1,recipient:"IBM Transactions",date:16260372e5,status:1,amount:500,currency:"USD",imgUrl:"https://res.cloudinary.com/lapkinthegod/image/upload/v1632988451/Ellipse_72_hwxejr.png"},{id:2,recipient:"Citigroup",date:16304436e5,status:2,amount:40,currency:"USD",imgUrl:"https://res.cloudinary.com/lapkinthegod/image/upload/v1632988456/Ellipse_73_zanfs3.png"},{id:3,recipient:"Netflix",date:162837e7,status:3,amount:1200,currency:"USD",imgUrl:"https://res.cloudinary.com/lapkinthegod/image/upload/v1632988460/Ellipse_73_1_hhfpzj.png"},{id:4,recipient:"IBM Transactions",date:16226676e5,status:4,amount:190,currency:"USD",imgUrl:"https://res.cloudinary.com/lapkinthegod/image/upload/v1632988451/Ellipse_72_hwxejr.png"}])}),0)})).then((function(e){return a(e)}))}),[]);var d=Object(y.useMemo)((function(){return Object(B.jsxs)(C.a,{gutter:[32,32],children:[Object(B.jsx)(F.a,{span:24,children:Object(B.jsx)(w.a.Title,{children:o("profile.nav.payments.paymentHistory")})}),Object(B.jsx)(F.a,{span:24,children:Object(B.jsxs)(ne,{isEmptyHistory:0===t.length,children:[c&&(t.length>0?s:Object(B.jsx)(te,{children:o("profile.nav.payments.noHistory")})),i&&Object(B.jsx)(X,{payments:t})]})})]})}),[i,t,s,c,o]);return i?d:Object(B.jsx)(I.a,{children:d})},re=t(327),ce=t(16),ie=t(2533),oe=(t(2538),U.default.div(m||(m=Object(N.a)(["\n  & > .rccs > .rccs__card--unknown > div {\n    background: ",";\n    background-size: cover;\n    transition: all 0.5s ease;\n  }\n\n  & > .rccs > .rccs__card {\n    & .rccs__card--front,\n    & .rccs__card--back {\n      box-shadow: none;\n    }\n\n    & > .rccs__card--front .rccs__issuer {\n      right: unset;\n      left: 10%;\n      background-position: left;\n    }\n\n    & > div {\n      color: var(--text-secondary-color);\n\n      & > .rccs__chip {\n        display: none;\n      }\n\n      & > div:first-of-type {\n        background: ",";\n        background-size: cover;\n        transition: all 0.5s ease;\n      }\n    }\n  }\n"])),(function(e){return"url(".concat(e.$background,")")}),(function(e){return"url(".concat(e.$background,")")}))),se=function(e){var n=e.className,t=e.cardData,a=e.children;return Object(B.jsxs)(oe,{className:n,$background:t.background,children:[Object(B.jsx)(ie.a,Object(ce.a)({},t)),a]})},de=t(2435),le=t(93),ue=t(2437),be=U.default.div(p||(p=Object(N.a)(["\n  display: flex;\n  position: absolute;\n  column-gap: 1rem;\n  top: 13%;\n  right: 7%;\n\n  & > button {\n    padding: 0;\n    width: unset;\n    height: unset;\n\n    color: var(--text-secondary-color);\n  }\n"]))),je=function(e){var n=e.onRemove,t=Object(v.a)().t;return Object(B.jsx)(be,{children:Object(B.jsx)(de.a,{title:t("common.deleteQuestion"),onConfirm:n,children:Object(B.jsx)(le.a,{type:"link",icon:Object(B.jsx)(ue.a,{})})})})},me=Object(U.default)($.a)(O||(O=Object(N.a)(["\n  width: 290px;\n  height: 182.86px;\n  font-size: 2rem;\n  border-radius: 14.5px;\n"]))),pe=t(171),Oe=t(326),ge=t(221),he=t(2340),fe=t(2341),xe=t(2392),ye=function(e){var n=e.disabled,t=e.handleInputFocus,a=Object(v.a)().t;return Object(B.jsx)(he.a.Item,{name:"number",label:a("profile.nav.payments.cardNumber"),rules:[{required:!0,message:a("common.requiredField")}],children:Object(B.jsx)(xe.a,{placeholderChar:" ",placeholder:a("profile.nav.payments.yourCardNumber"),name:"number",mask:"1111 1111 1111 1111",onFocus:t,disabled:n})})},ve=t(321),ke=function(e){var n=e.disabled,t=e.handleInputFocus,a=Object(v.a)().t;return Object(B.jsx)(he.a.Item,{name:"name",label:a("profile.nav.payments.cardholderName"),rules:[{required:!0,message:a("common.requiredField")}],children:Object(B.jsx)(ve.a,{name:"name",placeholder:a("profile.nav.payments.yourName"),onFocus:t,disabled:n})})},Ce=function(e){var n=e.disabled,t=e.handleInputFocus,a=Object(v.a)().t;return Object(B.jsx)(he.a.Item,{name:"expiry",label:a("profile.nav.payments.expDate"),rules:[{required:!0,message:a("common.requiredField")}],children:Object(B.jsx)(xe.a,{placeholderChar:" ",placeholder:"MM/YY",mask:"11/11",name:"expiry",onFocus:t,disabled:n})})},Fe=function(e){var n=e.disabled,t=e.handleInputFocus,a=Object(v.a)().t;return Object(B.jsx)(he.a.Item,{name:"cvc",label:a("profile.nav.payments.CVV"),rules:[{required:!0,message:a("common.requiredField")}],children:Object(B.jsx)(xe.a,{placeholderChar:" ",placeholder:"***",mask:"111",name:"cvc",onFocus:t,disabled:n})})},_e=[{id:1,background:"https://res.cloudinary.com/lapkinthegod/image/upload/v1633425628/horizontal-wide-red-pink-blue-blurred-background_136277-125_bk9drb.jpg"},{id:2,background:"https://res.cloudinary.com/lapkinthegod/image/upload/v1633007324/vivid-blurred-colorful-wallpaper-background_1_h1k9sc.png"},{id:3,background:"https://res.cloudinary.com/lapkinthegod/image/upload/v1633007328/43064_1_z6kdji.png"},{id:4,background:"https://res.cloudinary.com/lapkinthegod/image/upload/v1633007330/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1_x81z7y.png"},{id:5,background:"https://res.cloudinary.com/lapkinthegod/image/upload/v1633102260/Mask_Group_1_cr4x7l.png"},{id:6,background:"https://res.cloudinary.com/lapkinthegod/image/upload/v1633102263/Rectangle_917_1_ssqdbc.png"}],we=U.default.div(g||(g=Object(N.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  width: 3.125rem;\n  height: 3.125rem;\n  margin: 0 auto;\n  transition: all 0.5s ease;\n\n  border-radius: ",";\n\n  ",";\n  background-size: cover;\n\n  & > div {\n    background: ",";\n    background-size: cover;\n  }\n\n  &:hover {\n    opacity: 0.7;\n\n    ",";\n    background-size: cover;\n  }\n"])),ee.b,(function(e){return e.isActive&&"background: url(".concat(e.background,")")}),(function(e){return"url(".concat(e.background,")")}),(function(e){return"background: url(".concat(e.background,")")})),Ie=U.default.div(h||(h=Object(N.a)(["\n  width: calc(100% - 0.4rem);\n  height: calc(100% - 0.4rem);\n  margin: 0.2rem;\n\n  border: 5px solid var(--background-color);\n\n  border-radius: ",";\n"])),ee.b),Me=function(e){var n=e.cardData,t=e.setCardData,a=Object(v.a)().t,r=Object(y.useCallback)((function(e){return function(){t(Object(ce.a)(Object(ce.a)({},n),{},{background:e.background}))}}),[t,n]),c=Object(y.useMemo)((function(){return _e.map((function(e){return Object(B.jsx)(F.a,{xs:8,md:4,children:Object(B.jsx)(we,{background:e.background,isActive:n.background===e.background,children:Object(B.jsx)(Ie,{tabIndex:0,onClick:r(e)})})},e.id)}))}),[n,r]);return Object(B.jsx)(he.a.Item,{label:a("profile.nav.payments.cardTheme"),children:Object(B.jsx)(C.a,{gutter:[10,10],children:c})})},ze=Object(U.default)(se)(f||(f=Object(N.a)(["\n  position: absolute;\n  top: -5rem;\n  left: 50%;\n  transform: translateX(-50%);\n"]))),Te=U.default.div(x||(x=Object(N.a)(["\n  padding-top: 7.5rem;\n"]))),De={name:"",cvc:"",expiry:"",number:"",focused:"",background:_e[0].background,isEdit:!1},Ee=function(e){var n=e.closeModal,t=e.onFormFinish,a=Object(y.useState)(De),r=Object(_.a)(a,2),c=r[0],i=r[1],o=Object(y.useState)(!1),s=Object(_.a)(o,2),d=s[0],l=s[1],u=Object(y.useState)(!1),b=Object(_.a)(u,2),j=b[0],m=b[1],p=ge.a.useForm(),O=Object(_.a)(p,1)[0],g=Object(y.useCallback)((function(e){i(Object(ce.a)(Object(ce.a)({},c),{},{focused:e.target.name}))}),[i,c]),h=Object(y.useCallback)((function(e){l(!0),setTimeout((function(){l(!1),m(!1);var a=Object(ce.a)(Object(ce.a)({},e),{},{background:c.background});t(a),i(De),n(),O.setFieldsValue(De)}),1e3)}),[c.background,n,O,t]);return Object(B.jsxs)(he.a,{form:O,requiredMark:"optional",name:"paymentCard",onFinish:h,footer:Object(B.jsx)(fe.a,{loading:d,onCancel:n}),initialValues:De,onValuesChange:function(e){var n=Object.entries(e)[0];i(Object(ce.a)(Object(ce.a)({},c),{},Object(Oe.a)({},n[0],n[1])))},isFieldsChanged:j,onFieldsChange:function(){return m(!0)},children:[Object(B.jsx)(ze,{cardData:c}),Object(B.jsxs)(Te,{children:[Object(B.jsx)(ye,{handleInputFocus:g}),Object(B.jsx)(ke,{handleInputFocus:g}),Object(B.jsxs)(C.a,{gutter:[20,0],children:[Object(B.jsx)(F.a,{span:12,children:Object(B.jsx)(Ce,{handleInputFocus:g})}),Object(B.jsx)(F.a,{span:12,children:Object(B.jsx)(Fe,{handleInputFocus:g})})]}),Object(B.jsx)(Me,{cardData:c,setCardData:i})]})]})},Ae=function(e){var n=e.isModalVisible,t=e.closeModal,a=e.onCardAdd;return Object(B.jsx)(pe.c,{destroyOnClose:!0,size:"small",visible:n,onCancel:t,footer:null,closable:!1,children:Object(B.jsx)(Ee,{closeModal:t,onFormFinish:a})})},Ne=function(e){var n=e.onCardAdd,t=Object(y.useState)(!1),a=Object(_.a)(t,2),r=a[0],c=a[1],i=Object(v.a)().t;return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(me,{type:"ghost",onClick:function(){return c(!0)},children:i("profile.nav.payments.addNewCard")}),Object(B.jsx)(Ae,{isModalVisible:r,closeModal:function(){return c(!1)},onCardAdd:n})]})},Ue=function(e){var n=e.cards,t=e.onCardRemove,a=e.onCardAdd,r=(0,Object(K.a)().useMediaQuery)({query:"(min-width: ".concat(659.98,"px)")})?"start":"space-around";return Object(B.jsxs)(C.a,{justify:r,gutter:[16,16],children:[n.map((function(e){return Object(B.jsx)(F.a,{children:Object(B.jsx)(se,{cardData:e,children:Object(B.jsx)(je,{onRemove:function(){return t(e.number)}})})},e.number)})),Object(B.jsx)(F.a,{children:Object(B.jsx)(Ne,{onCardAdd:a})})]})},qe=[{name:"Dean James",cvc:"144",expiry:"11/24",number:"4255 2003 0168 9006",focused:"",background:_e[0].background,isEdit:!1},{name:"Walker Alan",cvc:"179",expiry:"05/23",number:"5245 0017 2000 0164",focused:"",background:_e[3].background,isEdit:!1},{name:"Jackson Michael",cvc:"345",expiry:"12/22",number:"4255 1000 2046 8006",focused:"",background:_e[5].background,isEdit:!1},{name:"Chris Johnson",cvc:"222",expiry:"09/24",number:"5205 0024 2535 5235",focused:"",background:_e[4].background,isEdit:!1}],Se=function(){var e=Object(v.a)().t,n=Object(y.useState)(qe),t=Object(_.a)(n,2),a=t[0],r=t[1],c=Object(K.a)().isTablet,i=Object(B.jsxs)(C.a,{gutter:[32,32],children:[Object(B.jsx)(F.a,{span:24,children:Object(B.jsx)(w.a.Title,{children:e("profile.nav.payments.paymentMethod")})}),Object(B.jsx)(F.a,{span:24,children:Object(B.jsx)(Ue,{cards:a,onCardRemove:function(e){return r(a.filter((function(n){return n.number!==e})))},onCardAdd:function(e){r([].concat(Object(re.a)(a),[e]))}})})]});return c?i:Object(B.jsx)(I.a,{children:i})},He=function(){var e=Object(K.a)().isTablet,n=Object(y.useMemo)((function(){return Object(B.jsxs)(C.a,{gutter:[0,30],children:[Object(B.jsx)(F.a,{span:24,children:Object(B.jsx)(Se,{})}),Object(B.jsx)(F.a,{span:24,children:Object(B.jsx)(ae,{})})]})}),[]);return e?Object(B.jsx)(I.a,{children:n}):n};n.default=function(){var e=Object(v.a)().t;return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(k.a,{children:e("profile.nav.payments.title")}),Object(B.jsx)(He,{})]})}}}]);
//# sourceMappingURL=22.98bc77ff.chunk.js.map