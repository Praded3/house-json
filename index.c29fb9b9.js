const e={backdrop:document.querySelector(".backdrop"),modalFormBtn:document.querySelector(".modal__btn"),modalCloseBtn:document.querySelector(".modal__close-btn"),body:document.querySelector("body"),modal:document.querySelector(".modal")},t={heroBtn:document.querySelector(".hero__btn"),advantagesBtn:document.querySelector(".advantages__btn"),nationwideBtn:document.querySelector(".nationwide__btn"),questionBtn:document.querySelector(".question__btn")},o={modalFirst:document.querySelector(".modal__first-step"),modalCorrectZip:document.querySelector(".modal__correct-zip"),modalUpdateZip:document.querySelector(".modal__update-zip"),modalSecondStep:document.querySelector(".modal__second-step"),modalThirdStep:document.querySelector(".modal__third-step"),modalFourthStep:document.querySelector(".modal__fourth-step"),modalFifthStep:document.querySelector(".modal__fifth-step"),modalSixthStep:document.querySelector(".modal__sixth-step"),modalListing:document.querySelector(".modal__listing"),modalSevenStep:document.querySelector(".modal__seven-step"),modalContract:document.querySelector(".modal__contract"),modalEighthStep:document.querySelector(".modal__eighth-step"),modalAndStep:document.querySelector(".modal__and-step"),modalThanksPage:document.querySelector(".modal__thanks-page")},n=new Date;function s(e){return e>=0&&e<=9?"0"+e:e}console.log(n);const i=s(n.getFullYear())+"-"+s(n.getMonth()+1)+"-"+s(n.getDate()),c=new Date(n.setDate(n.getDate()+150));console.log(c);const l=s(c.getFullYear()+1)+"-"+s(c.getMonth()+1)+"-"+s(c.getDate());console.log(l);let r=document.querySelector(".modal__form");function d(e){13==e.keyCode&&e.preventDefault(),37==e.keyCode&&e.preventDefault(),38==e.keyCode&&e.preventDefault(),39==e.keyCode&&e.preventDefault(),40==e.keyCode&&e.preventDefault()}async function a(e){e.preventDefault();const t=new FormData(e.currentTarget);t.append("object",ee.formatted_address),console.log(t),console.log(ee.formatted_address);let o=function(e){let t=0,o=document.querySelectorAll("._req-big");console.log(o);for(let e=0;e<o.length;e++){const r=o[e];s(r),r.classList.contains("_req-big-mail")&&(c(r)?(n(r),t++,u.mail.classList.add("mistake")):u.mail.classList.remove("mistake")),r.classList.contains("_req-big-tel")&&(l(r)?(n(r),t++,u.tel.classList.add("mistake")):u.tel.classList.remove("mistake")),r.classList.contains("_req-big-name")&&(i(r)?(n(r),t++,u.name.classList.add("mistake")):u.name.classList.remove("mistake"))}return t}();if(t.forEach(((e,t)=>{console.log(e),console.log(t)})),0===o){J();let e="<b>New action</b>\n";!function(){for(let o of t.entries())console.log(o),""!=o[1]&&(e+=` ${o.join(" : ")}\n`,console.log(e))}(),axios.post("https://api.telegram.org/bot6279094717:AAEINNI-WB8PTYW-nQglKgNdX6lALH6T6A0/sendMessage",{chat_id:"-1001887598395",parse_mode:"html",text:e})}function n(e){e.classList.add("_error"),e.classList.add("_error")}function s(e){e.classList.remove("_error"),e.classList.remove("_error")}function i(e){return!/^([A-zа-яё-]+[\s]{0,1}[A-zа-яё-]+)$/.test(e.value)}function c(e){return!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value)}function l(e){return!/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(e.value)}}r.addEventListener("submit",a);const u={tel:document.querySelector(".mistake-tel-message"),mail:document.querySelector(".mistake-mail-message"),name:document.querySelector(".mistake-name-message")};console.log(u.tel);const m=()=>{e.backdrop.classList.toggle("is-hiden"),e.body.classList.toggle("lock"),e.backdrop.removeEventListener("click",g),window.removeEventListener("keydown",p),r.removeEventListener("keydown",d),t.heroBtn.addEventListener("click",v),t.advantagesBtn.addEventListener("click",v),t.nationwideBtn.addEventListener("click",v),t.questionBtn.addEventListener("click",v),V.input.removeEventListener("input",ie)};e.modalCloseBtn.addEventListener("click",m);const v=()=>{r.addEventListener("submit",a),autocomplete.addListener("place_changed",oe),e.backdrop.classList.toggle("is-hiden"),e.body.classList.toggle("lock"),window.addEventListener("keydown",p),r.addEventListener("keydown",d),t.heroBtn.removeEventListener("click",v),t.advantagesBtn.removeEventListener("click",v),t.nationwideBtn.removeEventListener("click",v),t.questionBtn.removeEventListener("click",v),V.input.addEventListener("input",ie),e.backdrop.addEventListener("click",g)};function p(e){"Escape"===e.code&&m()}function g(e){e.target===e.currentTarget&&m()}t.heroBtn.addEventListener("click",v),t.advantagesBtn.addEventListener("click",v),t.nationwideBtn.addEventListener("click",v),t.questionBtn.addEventListener("click",v);const L={timeList:document.querySelector(".time-list"),buttonPrev:document.querySelector(".eighth-previous-step__btn")};function k(e){console.log("prev8"),w.checkBoxYes.addEventListener("click",P),w.checkBoxNo.addEventListener("click",C),w.buttonPrev.addEventListener("click",A),o.modalSevenStep.classList.toggle("is-not-displayed"),o.modalEighthStep.classList.toggle("is-not-displayed"),L.buttonPrev.removeEventListener("click",k)}function y(e){"INPUT"==e.target.nodeName&&(o.modalEighthStep.classList.toggle("is-not-displayed"),o.modalAndStep.classList.toggle("is-not-displayed"),L.buttonPrev.removeEventListener("click",k),L.timeList.removeEventListener("click",y))}const E={input:document.querySelector(".contract-expired-date"),buttonNext:document.querySelector(".contract-expired-step__btn"),buttonPrev:document.querySelector(".contract-expired-previous-step__btn")};function h(e){console.log("next lose"),E.input.removeEventListener("input",b),E.buttonPrev.removeEventListener("click",_),o.modalContract.classList.toggle("is-not-displayed"),o.modalAndStep.classList.toggle("is-not-displayed"),E.buttonNext.removeEventListener("click",h)}function _(e){console.log(" back lose"),E.buttonNext.removeEventListener("click",h),E.input.removeEventListener("input",b),o.modalSevenStep.classList.toggle("is-not-displayed"),o.modalContract.classList.toggle("is-not-displayed"),w.checkBoxYes.addEventListener("click",P),w.checkBoxNo.addEventListener("click",C),w.buttonPrev.addEventListener("click",A),E.buttonPrev.removeEventListener("click",_)}let S;function b(e){S=e.currentTarget.value,E.buttonNext.disabled=!S,console.log(S),S>=i&&S<=l&&E.buttonNext.addEventListener("click",h)}const f={input:document.querySelector(".listing-expired-date"),buttonNext:document.querySelector(".listing-expired-step__btn"),buttonPrev:document.querySelector(".listing-expired-previous-step__btn")};function q(e){console.log("asdfd"),f.input.removeEventListener("input",B),f.buttonPrev.removeEventListener("click",N),o.modalListing.classList.toggle("is-not-displayed"),o.modalAndStep.classList.toggle("is-not-displayed"),f.buttonNext.removeEventListener("click",q)}let x;function B(e){x=e.currentTarget.value,f.buttonNext.disabled=!x,x>=i&&x<=l&&f.buttonNext.addEventListener("click",q),console.log(se)}function N(e){console.log("XXXXXXXXX"),f.input.removeEventListener("input",B),o.modalListing.classList.toggle("is-not-displayed"),o.modalSixthStep.classList.toggle("is-not-displayed"),T.checkBoxYes.addEventListener("click",Y),T.buttonPrev.addEventListener("click",D),T.checkBoxNo.addEventListener("click",F),f.buttonNext.removeEventListener("click",q),f.buttonPrev.removeEventListener("click",N)}const w={checkBoxYes:document.querySelector(".with-wholesaler"),checkBoxNo:document.querySelector(".no-wholesaler"),buttonPrev:document.querySelector(".seven-revious-step__btn")};function P(e){console.log("yes wholesaler"),w.buttonPrev.removeEventListener("click",A),T.checkBoxNo.addEventListener("click",F),o.modalSevenStep.classList.toggle("is-not-displayed"),o.modalContract.classList.toggle("is-not-displayed"),E.input.addEventListener("input",b),E.buttonPrev.addEventListener("click",_),E.input.value=i,w.checkBoxYes.removeEventListener("click",P)}function C(e){console.log("no wholesaler"),w.buttonPrev.removeEventListener("click",A),w.checkBoxYes.removeEventListener("click",P),o.modalSevenStep.classList.toggle("is-not-displayed"),o.modalEighthStep.classList.toggle("is-not-displayed"),L.buttonPrev.addEventListener("click",k),L.timeList.addEventListener("click",y),w.checkBoxNo.removeEventListener("click",C)}function A(e){console.log("prev wholesaler"),w.checkBoxYes.removeEventListener("click",P),w.checkBoxNo.removeEventListener("click",C),o.modalSixthStep.classList.toggle("is-not-displayed"),o.modalSevenStep.classList.toggle("is-not-displayed"),T.checkBoxYes.addEventListener("click",Y),T.checkBoxNo.addEventListener("click",F),T.buttonPrev.addEventListener("click",D),w.buttonPrev.removeEventListener("click",A)}const T={checkBoxYes:document.querySelector(".with-agent"),checkBoxNo:document.querySelector(".no-agent"),buttonPrev:document.querySelector(".sixth-previous-step__btn")};function Y(e){console.log("yes agent"),o.modalSixthStep.classList.toggle("is-not-displayed"),o.modalListing.classList.toggle("is-not-displayed"),T.checkBoxNo.removeEventListener("click",F),T.buttonPrev.removeEventListener("click",D),f.input.addEventListener("input",B),f.buttonPrev.addEventListener("click",N),f.input.value=i,console.log("qweqweqweqweqwe"),T.checkBoxYes.removeEventListener("click",Y)}function F(e){console.log("no agent"),o.modalSixthStep.classList.toggle("is-not-displayed"),o.modalSevenStep.classList.toggle("is-not-displayed"),T.checkBoxYes.removeEventListener("click",Y),T.buttonPrev.removeEventListener("click",D),w.checkBoxYes.addEventListener("click",P),w.checkBoxNo.addEventListener("click",C),w.buttonPrev.addEventListener("click",A),T.checkBoxNo.removeEventListener("click",F)}function D(e){o.modalSixthStep.classList.toggle("is-not-displayed"),o.modalFifthStep.classList.toggle("is-not-displayed"),z.buttonNext.addEventListener("click",Z),T.checkBoxNo.removeEventListener("click",F),T.checkBoxYes.removeEventListener("click",Y),T.buttonPrev.removeEventListener("click",D)}console.log(!0);const z={checkBox:document.querySelector(".repairs"),buttonNext:document.querySelector(".fifth-step__btn"),buttonPrev:document.querySelector(".previous-fifth-step__btn")};function Z(e){console.log("er"),o.modalFifthStep.classList.toggle("is-not-displayed"),o.modalSixthStep.classList.toggle("is-not-displayed"),z.checkBox.removeEventListener("click",U),T.checkBoxYes.addEventListener("click",Y),T.checkBoxNo.addEventListener("click",F),T.buttonPrev.addEventListener("click",D),z.buttonNext.removeEventListener("click",Z)}function X(e){console.log("er"),o.modalFourthStep.classList.toggle("is-not-displayed"),o.modalFifthStep.classList.toggle("is-not-displayed"),I.buttonPrev.addEventListener("click",j),$(),I.buttonNext.addEventListener("click",M),z.buttonPrev.removeEventListener("click",X)}function U(e){const t="INPUT"==e.target.nodeName;z.buttonNext.disabled=!t,t&&z.buttonNext.addEventListener("click",Z)}const I={checkBox:document.querySelector(".reasons"),buttonNext:document.querySelector(".fourth-step__btn"),buttonPrev:document.querySelector(".previous-fourth-step__btn")};function $(){e.modal.scrollTo(0,0)}function M(e){o.modalFifthStep.classList.toggle("is-not-displayed"),o.modalFourthStep.classList.toggle("is-not-displayed"),I.checkBox.removeEventListener("click",W),z.checkBox.addEventListener("click",U),z.buttonPrev.addEventListener("click",X),$(),I.buttonNext.removeEventListener("click",M)}function j(e){console.log("er"),o.modalThirdStep.classList.toggle("is-not-displayed"),o.modalFourthStep.classList.toggle("is-not-displayed"),H.livingList.addEventListener("click",K),I.buttonPrev.removeEventListener("click",j)}function W(e){const t="INPUT"==e.target.nodeName;I.buttonNext.disabled=!t,t&&I.buttonNext.addEventListener("click",M)}console.log(I.checkBox);const H={radios:document.querySelectorAll(".living-radio"),livingList:document.querySelector(".is-living")};function K(e){"INPUT"==e.target.nodeName&&(o.modalThirdStep.classList.toggle("is-not-displayed"),o.modalFourthStep.classList.toggle("is-not-displayed"),I.checkBox.addEventListener("click",W),I.buttonPrev.addEventListener("click",j),H.livingList.removeEventListener("click",K))}console.log(H.livingList);const Q={input:document.querySelectorAll(".last-step-input"),btn:document.querySelector(".submit-btn"),clientName:document.querySelector(".thanks-page-name"),closeBtn:document.querySelector(".modal__form-close-btn")};function G(t){e.backdrop.classList.toggle("is-hiden"),e.body.classList.toggle("lock"),Q.closeBtn.removeEventListener("click",G)}function J(e){console.log("qqqq"),o.modalAndStep.classList.toggle("is-not-displayed"),o.modalThanksPage.classList.toggle("is-not-displayed"),Q.clientName.textContent=`Dear ${Q.input[0].value},`,Q.closeBtn.addEventListener("click",G),Q.btn.removeEventListener("click",J)}const O={ownerCheckBoxes:document.querySelectorAll(".owner-check-boxes"),ownerList:document.querySelector(".is-owner")};function R(e){O.ownerCheckBoxes.forEach((function(e,t){e.addEventListener("click",(function(){"is-owner"===e.id?(o.modalSecondStep.classList.toggle("is-not-displayed"),o.modalThirdStep.classList.toggle("is-not-displayed"),H.livingList.addEventListener("click",K)):(o.modalSecondStep.classList.toggle("is-not-displayed"),o.modalAndStep.classList.toggle("is-not-displayed"))}))}))}const V={btn:document.querySelector(".first-step__btn"),input:document.querySelector(".modal-zip"),zipCodeCheck:document.querySelector(".correct-zip-code"),correctZip:document.querySelectorAll(".correct-zip")},ee={};let te;function oe(){te=autocomplete.getPlace(),console.log(te),console.log(te.address_components),ne(te)}const ne=e=>{if(console.log(ee),!Array.isArray(e.address_components))throw Error("Address Components is not an array");if(!e.address_components.length)throw Error("Address Components is empty");const t=e=>e.types.includes("street_number"),o=e=>e.types.includes("route"),n=e=>!!(e.types.includes("locality")||e.types.includes("sublocality")||e.types.includes("administrative_area_level_3"))||!(!e.types.includes("neighborhood")||!e.types.includes("political"))&&(ee.prev_city_component="neighborhood",!0),s=e=>e.types.includes("administrative_area_level_1"),i=e=>e.types.includes("country"),c=e=>e.types.includes("administrative_area_level_2"),l=e=>e.types.includes("postal_code");for(const r of e.address_components){const e=r;t(e)&&(ee.street_number=e.long_name),o(e)&&(ee.street_name=e.long_name),!n(e)||ee.city&&"neighborhood"!==ee.prev_city_component||(ee.city=e.long_name),i(e)&&(ee.country=e.long_name),c(e)&&(ee.county=e.long_name),s(e)&&(ee.state=e.long_name),l(e)&&(ee.postal_code=e.long_name)}return e.types.includes("locality")?ee.type="city":e.types.includes("administrative_area_level_1")?ee.type="state":e.types.includes("street_address")||e.types.includes("route")||e.types.includes("premise")?ee.type="street_address":e.types.includes("lcountry")?ee.type="country":ee.type=null,ee.formatted_address=e.formatted_address,console.log(ee),ee};let se;function ie(e){se=e.currentTarget.value,V.btn.disabled=!se,se&&V.btn.addEventListener("click",ce)}function ce(e){o.modalFirst.classList.toggle("is-not-displayed"),console.log(ee.formatted_address),V.btn.removeEventListener("click",ce),V.input.removeEventListener("input",ie),ee.formatted_address?(o.modalCorrectZip.classList.toggle("is-not-displayed"),V.zipCodeCheck.textContent=ee.formatted_address,V.correctZip,V.correctZip.forEach((function(e,t){function n(){"zip-is-correct"===e.id?(o.modalCorrectZip.classList.toggle("is-not-displayed"),o.modalSecondStep.classList.toggle("is-not-displayed"),R(O.ownerCheckBoxes)):(o.modalCorrectZip.classList.toggle("is-not-displayed"),o.modalUpdateZip.classList.toggle("is-not-displayed"),re(le.input)),e.removeEventListener("click",n)}e.addEventListener("click",n)}))):(o.modalUpdateZip.classList.toggle("is-not-displayed"),re(le.input))}console.log(V.input),console.log(V.input.value);const le={input:document.querySelectorAll(".modal__update-zip-input"),btn:document.querySelector(".update__btn"),message:document.querySelector(".modal__required-message")};function re(){le.input.forEach((function(e){e.addEventListener("input",de)})),le.btn.addEventListener("click",ae)}function de(e){le.btn.addEventListener("click",ae),console.log(le.input[1].value.length),"State *"!=le.input[0].value&&le.input[1].value.length>2&&le.input[2].value.length>=5&&le.input[3].value.length>=5&&(le.btn.removeEventListener("click",ae),le.btn.addEventListener("click",ue))}function ae(e){console.log(e.target),console.log(e.currentTarget),e.target===e.currentTarget&&(le.message.classList.remove("is-not-displayed"),console.log("pqpqpqpqp"))}function ue(e){le.btn.removeEventListener("click",ue),le.input.forEach((function(e){e.removeEventListener("input",de)})),o.modalUpdateZip.classList.toggle("is-not-displayed"),o.modalSecondStep.classList.toggle("is-not-displayed"),le.btn.removeEventListener("click",ae),R(O.ownerCheckBoxes)}E.input.min=i,f.input.min=i,E.input.max=l,f.input.max=l,console.log(E.input.min),console.log(typeof i);
//# sourceMappingURL=index.c29fb9b9.js.map