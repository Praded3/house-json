!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i);var s=i("bpxeT"),c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var l=i("2TvXO"),r={backdrop:document.querySelector(".backdrop"),modalFormBtn:document.querySelector(".modal__btn"),modalCloseBtn:document.querySelector(".modal__close-btn"),body:document.querySelector("body"),modal:document.querySelector(".modal")},d={heroBtn:document.querySelector(".hero__btn"),advantagesBtn:document.querySelector(".advantages__btn"),nationwideBtn:document.querySelector(".nationwide__btn"),questionBtn:document.querySelector(".question__btn")},a={modalFirst:document.querySelector(".modal__first-step"),modalCorrectZip:document.querySelector(".modal__correct-zip"),modalUpdateZip:document.querySelector(".modal__update-zip"),modalSecondStep:document.querySelector(".modal__second-step"),modalThirdStep:document.querySelector(".modal__third-step"),modalFourthStep:document.querySelector(".modal__fourth-step"),modalFifthStep:document.querySelector(".modal__fifth-step"),modalSixthStep:document.querySelector(".modal__sixth-step"),modalListing:document.querySelector(".modal__listing"),modalSevenStep:document.querySelector(".modal__seven-step"),modalContract:document.querySelector(".modal__contract"),modalEighthStep:document.querySelector(".modal__eighth-step"),modalAndStep:document.querySelector(".modal__and-step"),modalThanksPage:document.querySelector(".modal__thanks-page")},u=new Date;function v(e){return e>=0&&e<=9?"0"+e:e}console.log(u);var m=v(u.getFullYear())+"-"+v(u.getMonth()+1)+"-"+v(u.getDate()),p=new Date(u.setDate(u.getDate()+150));console.log(p);var g=v(p.getFullYear()+1)+"-"+v(p.getMonth()+1)+"-"+v(p.getDate());console.log(g);var L="-1001887598395",y="https://api.telegram.org/bot".concat("6279094717:AAEINNI-WB8PTYW-nQglKgNdX6lALH6T6A0","/sendMessage"),k=document.querySelector(".modal__form");function h(e){13==e.keyCode&&e.preventDefault(),37==e.keyCode&&e.preventDefault(),38==e.keyCode&&e.preventDefault(),39==e.keyCode&&e.preventDefault(),40==e.keyCode&&e.preventDefault()}function f(e){return _.apply(this,arguments)}function _(){return(_=e(s)(e(l).mark((function t(n){var o,i,s,c,r,d,a,u,v,m;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=function(){var e=!0,t=!1,n=void 0;try{for(var i,c=o.entries()[Symbol.iterator]();!(e=(i=c.next()).done);e=!0){var l=i.value;console.log(l),""!=l[1]&&(s+=" ".concat(l.join(" : "),"\n"),console.log(s))}}catch(e){t=!0,n=e}finally{try{e||null==c.return||c.return()}finally{if(t)throw n}}return s},r=function(e){var t=0,n=document.querySelectorAll("._req-big");console.log(n);for(var o=0;o<n.length;o++){var i=n[o];a(i),i.classList.contains("_req-big-mail")&&(v(i)?(d(i),t++,b.mail.classList.add("mistake")):b.mail.classList.remove("mistake")),i.classList.contains("_req-big-tel")&&(m(i)?(d(i),t++,b.tel.classList.add("mistake")):b.tel.classList.remove("mistake")),i.classList.contains("_req-big-name")&&(u(i)?(d(i),t++,b.name.classList.add("mistake")):b.name.classList.remove("mistake"))}return t},d=function(e){e.classList.add("_error"),e.classList.add("_error")},a=function(e){e.classList.remove("_error"),e.classList.remove("_error")},u=function(e){return!/^([A-zа-яё-]+[\s]{0,1}[A-zа-яё-]+[\s]{0,1}[A-zа-яё-]+)$/.test(e.value)},v=function(e){return!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value)},m=function(e){return!/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(e.value)},n.preventDefault(),(o=new FormData(n.currentTarget)).append("object",ve.formatted_address),console.log(o),console.log(ve.formatted_address),i=r(),o.forEach((function(e,t){console.log(e),console.log(t)})),0===i&&(le(),s="<b>New action</b>\n",c(),axios.post(y,{chat_id:L,parse_mode:"html",text:s}));case 22:case"end":return e.stop()}}),t)})))).apply(this,arguments)}k.addEventListener("submit",f);var b={tel:document.querySelector(".mistake-tel-message"),mail:document.querySelector(".mistake-mail-message"),name:document.querySelector(".mistake-name-message")};console.log(b.tel);var E=function(){r.backdrop.classList.toggle("is-hiden"),r.body.classList.toggle("lock"),r.backdrop.removeEventListener("click",q),window.removeEventListener("keydown",x),k.removeEventListener("keydown",h),d.heroBtn.addEventListener("click",S),d.advantagesBtn.addEventListener("click",S),d.nationwideBtn.addEventListener("click",S),d.questionBtn.addEventListener("click",S),ue.input.removeEventListener("input",Le)};r.modalCloseBtn.addEventListener("click",E);var S=function(){k.addEventListener("submit",f),autocomplete.addListener("place_changed",me),r.backdrop.classList.toggle("is-hiden"),r.body.classList.toggle("lock"),window.addEventListener("keydown",x),k.addEventListener("keydown",h),d.heroBtn.removeEventListener("click",S),d.advantagesBtn.removeEventListener("click",S),d.nationwideBtn.removeEventListener("click",S),d.questionBtn.removeEventListener("click",S),ue.input.addEventListener("input",Le),r.backdrop.addEventListener("click",q)};function x(e){"Escape"===e.code&&E()}function q(e){e.target===e.currentTarget&&E()}d.heroBtn.addEventListener("click",S),d.advantagesBtn.addEventListener("click",S),d.nationwideBtn.addEventListener("click",S),d.questionBtn.addEventListener("click",S);var B={timeList:document.querySelector(".time-list"),buttonPrev:document.querySelector(".eighth-previous-step__btn")};function w(e){console.log("prev8"),U.checkBoxYes.addEventListener("click",I),U.checkBoxNo.addEventListener("click",M),U.buttonPrev.addEventListener("click",O),a.modalSevenStep.classList.toggle("is-not-displayed"),a.modalEighthStep.classList.toggle("is-not-displayed"),B.buttonPrev.removeEventListener("click",w)}function N(e){"INPUT"==e.target.nodeName&&(a.modalEighthStep.classList.toggle("is-not-displayed"),a.modalAndStep.classList.toggle("is-not-displayed"),B.buttonPrev.removeEventListener("click",w),B.timeList.removeEventListener("click",N))}var P,C={input:document.querySelector(".contract-expired-date"),buttonNext:document.querySelector(".contract-expired-step__btn"),buttonPrev:document.querySelector(".contract-expired-previous-step__btn")};function T(e){console.log("next lose"),C.input.removeEventListener("input",F),C.buttonPrev.removeEventListener("click",A),a.modalContract.classList.toggle("is-not-displayed"),a.modalAndStep.classList.toggle("is-not-displayed"),C.buttonNext.removeEventListener("click",T)}function A(e){console.log(" back lose"),C.buttonNext.removeEventListener("click",T),C.input.removeEventListener("input",F),a.modalSevenStep.classList.toggle("is-not-displayed"),a.modalContract.classList.toggle("is-not-displayed"),U.checkBoxYes.addEventListener("click",I),U.checkBoxNo.addEventListener("click",M),U.buttonPrev.addEventListener("click",O),C.buttonPrev.removeEventListener("click",A)}function F(e){P=e.currentTarget.value,C.buttonNext.disabled=!P,console.log(P),P>=m&&P<=g&&C.buttonNext.addEventListener("click",T)}var Y,D={input:document.querySelector(".listing-expired-date"),buttonNext:document.querySelector(".listing-expired-step__btn"),buttonPrev:document.querySelector(".listing-expired-previous-step__btn")};function z(e){console.log("asdfd"),D.input.removeEventListener("input",X),D.buttonPrev.removeEventListener("click",Z),a.modalListing.classList.toggle("is-not-displayed"),a.modalAndStep.classList.toggle("is-not-displayed"),D.buttonNext.removeEventListener("click",z)}function X(e){Y=e.currentTarget.value,D.buttonNext.disabled=!Y,Y>=m&&Y<=g&&D.buttonNext.addEventListener("click",z),console.log(pe)}function Z(e){console.log("XXXXXXXXX"),D.input.removeEventListener("input",X),a.modalListing.classList.toggle("is-not-displayed"),a.modalSixthStep.classList.toggle("is-not-displayed"),j.checkBoxYes.addEventListener("click",$),j.buttonPrev.addEventListener("click",W),j.checkBoxNo.addEventListener("click",R),D.buttonNext.removeEventListener("click",z),D.buttonPrev.removeEventListener("click",Z)}var U={checkBoxYes:document.querySelector(".with-wholesaler"),checkBoxNo:document.querySelector(".no-wholesaler"),buttonPrev:document.querySelector(".seven-revious-step__btn")};function I(e){console.log("yes wholesaler"),U.buttonPrev.removeEventListener("click",O),j.checkBoxNo.addEventListener("click",R),a.modalSevenStep.classList.toggle("is-not-displayed"),a.modalContract.classList.toggle("is-not-displayed"),C.input.addEventListener("input",F),C.buttonPrev.addEventListener("click",A),C.input.value=m,U.checkBoxYes.removeEventListener("click",I)}function M(e){console.log("no wholesaler"),U.buttonPrev.removeEventListener("click",O),U.checkBoxYes.removeEventListener("click",I),a.modalSevenStep.classList.toggle("is-not-displayed"),a.modalEighthStep.classList.toggle("is-not-displayed"),B.buttonPrev.addEventListener("click",w),B.timeList.addEventListener("click",N),U.checkBoxNo.removeEventListener("click",M)}function O(e){console.log("prev wholesaler"),U.checkBoxYes.removeEventListener("click",I),U.checkBoxNo.removeEventListener("click",M),a.modalSixthStep.classList.toggle("is-not-displayed"),a.modalSevenStep.classList.toggle("is-not-displayed"),j.checkBoxYes.addEventListener("click",$),j.checkBoxNo.addEventListener("click",R),j.buttonPrev.addEventListener("click",W),U.buttonPrev.removeEventListener("click",O)}var j={checkBoxYes:document.querySelector(".with-agent"),checkBoxNo:document.querySelector(".no-agent"),buttonPrev:document.querySelector(".sixth-previous-step__btn")};function $(e){console.log("yes agent"),a.modalSixthStep.classList.toggle("is-not-displayed"),a.modalListing.classList.toggle("is-not-displayed"),j.checkBoxNo.removeEventListener("click",R),j.buttonPrev.removeEventListener("click",W),D.input.addEventListener("input",X),D.buttonPrev.addEventListener("click",Z),D.input.value=m,console.log("qweqweqweqweqwe"),j.checkBoxYes.removeEventListener("click",$)}function R(e){console.log("no agent"),a.modalSixthStep.classList.toggle("is-not-displayed"),a.modalSevenStep.classList.toggle("is-not-displayed"),j.checkBoxYes.removeEventListener("click",$),j.buttonPrev.removeEventListener("click",W),U.checkBoxYes.addEventListener("click",I),U.checkBoxNo.addEventListener("click",M),U.buttonPrev.addEventListener("click",O),j.checkBoxNo.removeEventListener("click",R)}function W(e){a.modalSixthStep.classList.toggle("is-not-displayed"),a.modalFifthStep.classList.toggle("is-not-displayed"),H.buttonNext.addEventListener("click",K),j.checkBoxNo.removeEventListener("click",R),j.checkBoxYes.removeEventListener("click",$),j.buttonPrev.removeEventListener("click",W)}console.log(!0);var H={checkBox:document.querySelector(".repairs"),buttonNext:document.querySelector(".fifth-step__btn"),buttonPrev:document.querySelector(".previous-fifth-step__btn")};function K(e){console.log("er"),a.modalFifthStep.classList.toggle("is-not-displayed"),a.modalSixthStep.classList.toggle("is-not-displayed"),H.checkBox.removeEventListener("click",G),j.checkBoxYes.addEventListener("click",$),j.checkBoxNo.addEventListener("click",R),j.buttonPrev.addEventListener("click",W),H.buttonNext.removeEventListener("click",K)}function Q(e){console.log("er"),a.modalFourthStep.classList.toggle("is-not-displayed"),a.modalFifthStep.classList.toggle("is-not-displayed"),J.buttonPrev.addEventListener("click",te),V(),J.buttonNext.addEventListener("click",ee),H.buttonPrev.removeEventListener("click",Q)}function G(e){var t="INPUT"==e.target.nodeName;H.buttonNext.disabled=!t,t&&H.buttonNext.addEventListener("click",K)}var J={checkBox:document.querySelector(".reasons"),buttonNext:document.querySelector(".fourth-step__btn"),buttonPrev:document.querySelector(".previous-fourth-step__btn")};function V(){r.modal.scrollTo(0,0)}function ee(e){a.modalFifthStep.classList.toggle("is-not-displayed"),a.modalFourthStep.classList.toggle("is-not-displayed"),J.checkBox.removeEventListener("click",ne),H.checkBox.addEventListener("click",G),H.buttonPrev.addEventListener("click",Q),V(),J.buttonNext.removeEventListener("click",ee)}function te(e){console.log("er"),a.modalThirdStep.classList.toggle("is-not-displayed"),a.modalFourthStep.classList.toggle("is-not-displayed"),oe.livingList.addEventListener("click",ie),J.buttonPrev.removeEventListener("click",te)}function ne(e){var t="INPUT"==e.target.nodeName;J.buttonNext.disabled=!t,t&&J.buttonNext.addEventListener("click",ee)}console.log(J.checkBox);var oe={radios:document.querySelectorAll(".living-radio"),livingList:document.querySelector(".is-living")};function ie(e){"INPUT"==e.target.nodeName&&(a.modalThirdStep.classList.toggle("is-not-displayed"),a.modalFourthStep.classList.toggle("is-not-displayed"),J.checkBox.addEventListener("click",ne),J.buttonPrev.addEventListener("click",te),oe.livingList.removeEventListener("click",ie))}console.log(oe.livingList);var se={input:document.querySelectorAll(".last-step-input"),btn:document.querySelector(".submit-btn"),clientName:document.querySelector(".thanks-page-name"),closeBtn:document.querySelector(".modal__form-close-btn")};function ce(e){r.backdrop.classList.toggle("is-hiden"),r.body.classList.toggle("lock"),se.closeBtn.removeEventListener("click",ce)}function le(e){console.log("qqqq"),a.modalAndStep.classList.toggle("is-not-displayed"),a.modalThanksPage.classList.toggle("is-not-displayed"),se.clientName.textContent="Dear ".concat(se.input[0].value,","),se.closeBtn.addEventListener("click",ce),se.btn.removeEventListener("click",le)}var re={ownerCheckBoxes:document.querySelectorAll(".owner-check-boxes"),ownerList:document.querySelector(".is-owner")};function de(e){re.ownerCheckBoxes.forEach((function(e,t){e.addEventListener("click",(function(){"is-owner"===e.id?(a.modalSecondStep.classList.toggle("is-not-displayed"),a.modalThirdStep.classList.toggle("is-not-displayed"),oe.livingList.addEventListener("click",ie)):(a.modalSecondStep.classList.toggle("is-not-displayed"),a.modalAndStep.classList.toggle("is-not-displayed"))}))}))}var ae,ue={btn:document.querySelector(".first-step__btn"),input:document.querySelector(".modal-zip"),zipCodeCheck:document.querySelector(".correct-zip-code"),correctZip:document.querySelectorAll(".correct-zip")},ve={};function me(){ae=autocomplete.getPlace(),console.log(ae),console.log(ae.address_components),ge(ae)}var pe,ge=function(e){if(console.log(ve),!Array.isArray(e.address_components))throw Error("Address Components is not an array");if(!e.address_components.length)throw Error("Address Components is empty");var t=function(e){return e.types.includes("route")},n=function(e){return!!(e.types.includes("locality")||e.types.includes("sublocality")||e.types.includes("administrative_area_level_3"))||!(!e.types.includes("neighborhood")||!e.types.includes("political"))&&(ve.prev_city_component="neighborhood",!0)},o=function(e){return e.types.includes("administrative_area_level_1")},i=function(e){return e.types.includes("country")},s=function(e){return e.types.includes("administrative_area_level_2")},c=function(e){return e.types.includes("postal_code")},l=!0,r=!1,d=void 0;try{for(var a,u=e.address_components[Symbol.iterator]();!(l=(a=u.next()).done);l=!0){var v=a.value;v.types.includes("street_number")&&(ve.street_number=v.long_name),t(v)&&(ve.street_name=v.long_name),!n(v)||ve.city&&"neighborhood"!==ve.prev_city_component||(ve.city=v.long_name),i(v)&&(ve.country=v.long_name),s(v)&&(ve.county=v.long_name),o(v)&&(ve.state=v.long_name),c(v)&&(ve.postal_code=v.long_name)}}catch(e){r=!0,d=e}finally{try{l||null==u.return||u.return()}finally{if(r)throw d}}return e.types.includes("locality")?ve.type="city":e.types.includes("administrative_area_level_1")?ve.type="state":e.types.includes("street_address")||e.types.includes("route")||e.types.includes("premise")?ve.type="street_address":e.types.includes("lcountry")?ve.type="country":ve.type=null,ve.formatted_address=e.formatted_address,console.log(ve),ve};function Le(e){pe=e.currentTarget.value,ue.btn.disabled=!pe,pe&&ue.btn.addEventListener("click",ye)}function ye(e){a.modalFirst.classList.toggle("is-not-displayed"),console.log(ve.formatted_address),ue.btn.removeEventListener("click",ye),ue.input.removeEventListener("input",Le),ve.formatted_address?(a.modalCorrectZip.classList.toggle("is-not-displayed"),ue.zipCodeCheck.textContent=ve.formatted_address,ue.correctZip,ue.correctZip.forEach((function(e,t){function n(){"zip-is-correct"===e.id?(a.modalCorrectZip.classList.toggle("is-not-displayed"),a.modalSecondStep.classList.toggle("is-not-displayed"),de(re.ownerCheckBoxes)):(a.modalCorrectZip.classList.toggle("is-not-displayed"),a.modalUpdateZip.classList.toggle("is-not-displayed"),he(ke.input)),e.removeEventListener("click",n)}e.addEventListener("click",n)}))):(a.modalUpdateZip.classList.toggle("is-not-displayed"),he(ke.input))}console.log(ue.input),console.log(ue.input.value);var ke={input:document.querySelectorAll(".modal__update-zip-input"),btn:document.querySelector(".update__btn"),message:document.querySelector(".modal__required-message")};function he(){ke.input.forEach((function(e){e.addEventListener("input",fe)})),ke.btn.addEventListener("click",_e)}function fe(e){ke.btn.addEventListener("click",_e),console.log(ke.input[1].value.length),"State *"!=ke.input[0].value&&ke.input[1].value.length>2&&ke.input[2].value.length>=5&&ke.input[3].value.length>=5&&(ke.btn.removeEventListener("click",_e),ke.btn.addEventListener("click",be))}function _e(e){console.log(e.target),console.log(e.currentTarget),e.target===e.currentTarget&&(ke.message.classList.remove("is-not-displayed"),console.log("pqpqpqpqp"))}function be(e){ke.btn.removeEventListener("click",be),ke.input.forEach((function(e){e.removeEventListener("input",fe)})),a.modalUpdateZip.classList.toggle("is-not-displayed"),a.modalSecondStep.classList.toggle("is-not-displayed"),ke.btn.removeEventListener("click",_e),de(re.ownerCheckBoxes)}C.input.min=m,D.input.min=m,C.input.max=g,D.input.max=g,console.log(C.input.min),console.log(void 0===m?"undefined":e(c)(m))}();
//# sourceMappingURL=index.f7fd1648.js.map
