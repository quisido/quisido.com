(this["webpackJsonpquisido.com"]=this["webpackJsonpquisido.com"]||[]).push([[3],{214:function(e,t,i){},215:function(e,t,i){e.exports={author:"quote-card-definition_author__2CuHU",image:"quote-card-definition_image__3vgOt"}},216:function(e,t,i){e.exports={root:"quotes_root__1K7Wz"}},217:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return L}));var a=i(1),r=i(3),c=i(0),s=i.n(c),n=(i(214),{"card-inner":"_card-inner_p8a6i_67z7i_3",root:"_root_p8a6i_67z7i_19",header:"_header_p8a6i_67z7i_34",list:"_list_p8a6i_67z7i_38","list-grid-1":"_list-grid-1_p8a6i_67z7i_46",card:"_card_p8a6i_67z7i_3","list-grid-2":"_list-grid-2_p8a6i_67z7i_49","list-grid-3":"_list-grid-3_p8a6i_67z7i_52","list-grid-4":"_list-grid-4_p8a6i_67z7i_55","list-grid-5":"_list-grid-5_p8a6i_67z7i_58","list-grid-6":"_list-grid-6_p8a6i_67z7i_61","list-grid-7":"_list-grid-7_p8a6i_67z7i_64","list-grid-8":"_list-grid-8_p8a6i_67z7i_67","list-grid-9":"_list-grid-9_p8a6i_67z7i_70","list-grid-10":"_list-grid-10_p8a6i_67z7i_73","list-grid-11":"_list-grid-11_p8a6i_67z7i_76","list-grid-12":"_list-grid-12_p8a6i_67z7i_79","list-grid-13":"_list-grid-13_p8a6i_67z7i_82","list-grid-14":"_list-grid-14_p8a6i_67z7i_85","list-grid-15":"_list-grid-15_p8a6i_67z7i_88","list-grid-16":"_list-grid-16_p8a6i_67z7i_91","list-grid-17":"_list-grid-17_p8a6i_67z7i_94","list-grid-18":"_list-grid-18_p8a6i_67z7i_97","list-grid-19":"_list-grid-19_p8a6i_67z7i_100","list-grid-20":"_list-grid-20_p8a6i_67z7i_103","selection-control":"_selection-control_p8a6i_67z7i_107",loading:"_loading_p8a6i_67z7i_116",empty:"_empty_p8a6i_67z7i_117","has-header":"_has-header_p8a6i_67z7i_124","card-header":"_card-header_p8a6i_67z7i_160","card-header-inner":"_card-header-inner_p8a6i_67z7i_164","card-selectable":"_card-selectable_p8a6i_67z7i_168","card-selected":"_card-selected_p8a6i_67z7i_171",section:"_section_p8a6i_67z7i_180","section-header":"_section-header_p8a6i_67z7i_186","section-content":"_section-content_p8a6i_67z7i_189"}),o=[1920,1400,1200,992,768].map((function(e,t,i){return{minWidth:e,cards:i.length+1-t}})),d=i(6),l=i(83),A=i(116),g=i(18),f=i(54),h=i(85),p=i(84),m=i(117),j=i(11),k=i(10),y=i(93),u=i(62),b=s.a.forwardRef((function(e,t){var i=e.items,g=void 0===i?[]:i,h=e.cardDefinition,k=e.cardsPerRow,b=void 0===k?[]:k,I=e.header,S=e.filter,x=e.pagination,O=e.preferences,H=e.empty,N=e.loading,E=e.loadingText,Q=e.trackBy,F=e.selectedItems,B=e.selectionType,K=e.isItemDisabled,C=e.onSelectionChange,T=e.ariaLabels,J=e.visibleSections,R=e.stickyHeader,L=e.stickyHeaderVerticalOffset,w=Object(a.b)(e,["items","cardDefinition","cardsPerRow","header","filter","pagination","preferences","empty","loading","loadingText","trackBy","selectedItems","selectionType","isItemDisabled","onSelectionChange","ariaLabels","visibleSections","stickyHeader","stickyHeaderVerticalOffset"]);Object(j.a)("Cards");var W=Object(d.a)(w),P=Object(l.a)((function(e){return function(e,t){0===t.length&&(t=o);var i=1;return t.slice().map((function(e){return{minWidth:e.minWidth||0,cards:e.cards}})).sort((function(e,t){return t.minWidth-e.minWidth})).some((function(t){if(e>=t.minWidth)return i=t.cards,!0})),i}(e.width,b)}),[b]),q=P[0],z=P[1],M=Object(f.c)({items:g,trackBy:Q,selectedItems:F,selectionType:B,isItemDisabled:K,onSelectionChange:C,ariaLabels:T}),V=M.isItemSelected,D=M.getItemSelectionProps,X=M.updateShiftToggle,Y=I||S||x||O,U=Object(c.useRef)(null),G=Object(y.b)(z,U,1),Z=G.scrollToTop,_=G.scrollToItem;R=Object(u.c)()&&R;var $;return Object(c.useImperativeHandle)(t,(function(){return{scrollToTop:function(){R&&Z()}}}),[R,Z]),N?$=s.a.createElement("div",{className:n.loading},s.a.createElement(m.a,{type:"loading"},E)):H&&!g.length&&($=s.a.createElement("div",{className:n.empty},H)),s.a.createElement("div",Object(a.a)({},W,{className:Object(r.a)(W.className,n.root),ref:z}),s.a.createElement(p.a,{header:Y&&s.a.createElement("div",{className:Object(r.a)(n.header),ref:U},s.a.createElement(A.a,{header:I,filter:S,pagination:x,preferences:O})),__stickyHeader:R,__stickyOffset:L,disableHeaderPaddings:!0,disableContentPaddings:!0,__disableContentBorders:!0},s.a.createElement("div",{className:Object(r.a)(Y&&n["has-header"])},null!==$&&void 0!==$?$:s.a.createElement(v,{items:g,cardDefinition:h,trackBy:Q,selectionType:B,columns:q,isItemSelected:V,getItemSelectionProps:D,visibleSections:J,updateShiftToggle:X,onFocus:function(e){R&&_(e.currentTarget)}}))))})),I=b,v=function(e){var t=e.items,i=e.cardDefinition,c=e.trackBy,o=e.selectionType,d=e.columns,l=e.isItemSelected,A=e.getItemSelectionProps,p=e.visibleSections,m=e.updateShiftToggle,j=e.onFocus,k=!!o,y=Object(f.b)(o,t.length),u=y.moveFocusDown,b=y.moveFocusUp,I=i.sections||[];return I=p?I.filter((function(e){return e.id&&-1!==p.indexOf(e.id)})):I,s.a.createElement("ol",Object(a.a)({className:Object(r.a)(n.list,n["list-grid-"+(d||1)])},f.a&&f.a.root),t.map((function(e,t){var o;return s.a.createElement("li",Object(a.a)({className:Object(r.a)(n.card,(o={},o[n["card-selectable"]]=k,o[n["card-selected"]]=k&&l(e),o)),key:Object(g.c)(c,e,t),onFocus:j},f.a&&f.a.item),s.a.createElement("div",{className:n["card-inner"]},s.a.createElement("div",{className:n["card-header"]},s.a.createElement("span",{className:n["card-header-inner"]},i.header?i.header(e):""),k&&s.a.createElement(h.a,Object(a.a)({className:n["selection-control"],rootTag:"div",onFocusDown:u,onFocusUp:b,onShiftToggle:m},A(e)))),I.map((function(t,i){var a=t.width,r=void 0===a?100:a,c=t.header,o=t.content,d=t.id;return s.a.createElement("div",{key:d||i,className:n.section,style:{width:r+"%"}},c?s.a.createElement("div",{className:n["section-header"]},c):"",o?s.a.createElement("div",{className:n["section-content"]},o(e)):"")}))))})))};Object(k.a)(b,"Cards");var S=i(31),x=i(77),O=i(8),H=i(215),N=i.n(H),E=i(4),Q={bottom:"n",left:"l"},F={header:function(e){var t=e.author;return Object(E.jsx)(x.a,{direction:"horizontal",size:"s",children:Object(E.jsx)(S.a,{className:N.a.author,color:"text-label",children:Object(E.jsx)(O.b,{author:t,children:"Review by $author"})})})},sections:[{id:"quote",content:function(e){var t=e.age,i=e.author,a=e.gender,r=e.image,c=e.quote;return Object(E.jsxs)(E.Fragment,{children:[r&&Object(E.jsx)(S.a,{float:"right",margin:Q,children:Object(E.jsx)("img",{alt:i,className:N.a.image,height:64,src:r,title:i,width:64})}),Object(E.jsx)("span",{"data-ssml-voice-age":t,"data-ssml-voice-gender":a,children:c})]})}}]},B=i(86),K=i.p+"static/media/charles-stover.831e9222.jpg",C=[{age:25,author:"Matt McClelland",gender:"male",image:"data:image/jpeg;base64,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",quote:Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)(S.a,{variant:"p",children:["Ace is an innovative, detail-oriented, and multi-talented artist. Over the past year, I have had the pleasure of working with them on a number of projects. From"," ",Object(E.jsx)(B.a,{to:"/projects/dark-souls-darkroot/artorias",children:"painting models"})," ","and"," ",Object(E.jsxs)(B.a,{to:"https://acealters.com",children:["altering popular ",Object(E.jsx)("abbr",{title:"Magic: the Gathering",children:"MTG"})," cards"]})," ","to creating"," ",Object(E.jsx)(B.a,{to:"/projects/wooden-deck-box",children:"custom wooden deck boxes"}),", they have proven time and again to be extraordinarily versatile in their artistic abilities. And that's just the tip of the iceberg when it comes to what they are capable of."]}),Object(E.jsx)(S.a,{variant:"p",children:"They are very receptive to feedback and insightful with their own. Their attention to detail is exceptional and her ability to give each project they work on a unique accent and distinction is truly remarkable."}),Object(E.jsx)(S.a,{variant:"p",children:"They are a trusted and capable individual who would benefit a wide range of businesses with their broad skill set and will continue to be my go-to creative for any future artistic needs."})]})},{age:30,author:"Charles Stover",gender:"male",image:K,quote:Object(E.jsxs)(S.a,{variant:"p",children:["I have hired Ace on multiple occasions over the last few years to"," ",Object(E.jsx)(B.a,{to:"https://acealters.com",children:"alter and extend existing artwork"}),". Each time, they exceeded my expectations with their outstanding attention to detail and vivid imagery. With very little instruction, they were able to envision, design, and finish each project with better results than I could have hoped. They will remain my go-to artist for a long time to come."]})}],T=i(216),J=i.n(T),R=[{cards:1}];function L(){return Object(E.jsx)(I,{cardDefinition:F,cardsPerRow:R,className:J.a.root,items:C,trackBy:"author"})}}}]);
//# sourceMappingURL=3.c7624794.chunk.js.map