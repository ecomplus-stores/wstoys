(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{412:function(e,t,r){"use strict";r.r(t);var a=r(140),n=r(80),o=r(92);t.default=(e={})=>{const{compreConfieStoreId:t}=e;if(t){const e=window.storefrontApp&&window.storefrontApp.router;if(e){const r=({name:e,params:r})=>{if("confirmation"===e&&r.json){let e;const i=decodeURIComponent(r.json);if(i)try{e=JSON.parse(i)}catch(e){}if(e){const r=o.a.getCustomer(),i=e.transactions&&e.transactions[0],c=i&&i.payer,s=Object(a.a)(r),d=new Date;let l=`orderSellerID=${t}&orderPlatform=ecomplus&orderTotalSpent=${e.amount.total}&orderDeliveryTax=${e.amount.freight||0}&orderID=${e.number||e._id}&consumerEmail=${r.main_email}&billingEmail=${r.main_email}&consumerName=${encodeURIComponent(s)}&orderDate=${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()} | ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;if("m"===r.gender?l+="&consumerGender=Masculino&billingGender=Masculino":"f"===r.gender&&(l+="&consumerGender=Feminino&billingGender=Feminino"),"p"===r.registry_type&&r.doc_number&&(l+=`&consumerCPF=${r.doc_number}&billingCPF=${c&&c.doc_number||r.doc_number}`),r.birth_date){const{day:e,month:t,year:a}=r.birth_date;l+=`&consumerBirthDate=${e.toString().padStart(2,"0")}/${t.toString().padStart(2,"0")}/${a}`}const{items:m}=e;if(m&&m.length){let e=m[0].sku,t=Object(n.a)(m[0]),r=m[0].quantity,a=encodeURIComponent(m[0].name),o="0";for(let i=1;i<m.length;i++)e+=`|${m[i].sku}`,t+=`|${Object(n.a)(m[i])}`,r+=`|${m[i].quantity}`,a+=`|${encodeURIComponent(m[i].name)}`,o+="|0";l+=`&productSKU=${e}&productValue=${t}&productQuantity=${r}&ProductName=${a}&ProductMktSaleID=${o}`}if(e.shipping_lines&&e.shipping_lines[0]){const t=e.shipping_lines[0];if(t.app&&t.app.label)switch(l+="&orderDeliveryType=",t.app.label.toLowerCase()){case"pac":l+="0";break;case"sedex":l+="1";break;case"retirar na loja":l+="3";break;default:l+="4"}t.delivery_time&&t.delivery_time.days&&(l+=`&orderDeliveryTime=${t.delivery_time.days}&productDeliveryTime=${t.delivery_time.days}`),l+=`&consumerZipcode=${t.to.zip}&billingZipcode=${t.to.zip}`}if(i){switch(i.app&&i.app.intermediator&&i.app.intermediator.name&&(l+=`&orderPartnerPayment=${i.app.intermediator.name}`),l+=`&billingName=${encodeURIComponent(c&&c.fullname||s)}`,l+=`&orderParcels=${i.installments&&i.installments.number||1}`,l+="&orderPaymentType=",i.payment_method.code){case"credit_card":l+="1";break;case"banking_billet":l+="2";break;case"debit_card":case"online_debit":l+="9";break;case"account_deposit":l+="6";break;case"loyalty_points":l+="8";break;default:l+="3"}if(i.credit_card&&i.credit_card.company)switch(l+="&orderCardFlag=",i.credit_card.company.toLowerCase()){case"visa":l+=3;break;case"mastercard":l+=2;break;case"american express":case"amex":l+=5;break;case"elo":l+=8;break;case"aura":l+=7;break;case"hipercard":l+=6;break;case"diners club":l+=1;break;default:l+=9}}const p=setInterval((()=>{const e=document.getElementById("confirmation");if(e){e.insertAdjacentHTML("beforeend",`<a id="bannerEconfy"></a> <param id="TagEConfy" value="${l}">`);const r=document.createElement("script");r.id="getData",r.type="text/javascript",r.src=`https://banner.compreconfie.com.br/scripts/tagBanner.min.js?${t}&lightbox=true`,document.body.appendChild(r),clearInterval(p)}}),200)}}};e.currentRoute&&r(e.currentRoute),e.afterEach(r)}}else console.error(new Error("Can't show lightbox without `compreConfieStoreId` option"))}}}]);
//# sourceMappingURL=chunk.c81918076c5f1e39c47e.js.map