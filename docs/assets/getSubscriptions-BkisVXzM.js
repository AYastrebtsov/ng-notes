import{h as o,H as n}from"./index-Dt5PkBs3.js";const m=["subscriptions"],g=async e=>{var r;const t=new URL("https://preprod.premiya.fivecorners.ru/api/page/getSubscriptions");t.searchParams.append("api_token",e);const s=await fetch(t);if(!s.ok)throw new Error("произошла ошибка сервера");const i=await s.json();if(i.status==="error"&&i.message==="Invalid api token")throw new Error("не был передан ключ api");if((r=i.result)!=null&&r.subscriptions)return i;throw new Error("No data received from the server")},c={status:"success",result:{subscriptions:[{id:1,name:"10% скидка на овощи",description:`Овощная революция в вашем магазине!
 С 1 по 31 мая заходите в наш магазин и выбирайте свежие, натуральные и полезные овощи по самым выгодным ценам. Морковь, капуста, перец, помидоры – все это и многое другое станет еще доступнее с нашей акцией.
 Не упустите свой шанс сделать правильный выбор и позаботиться о своем здоровье!
 Акция действует во всех магазинах сети и не суммируется с другими предложениями.
 Мы ждем вас!`,img:"/mockImages/carrot.png",price:133,day:1,nextMonthId:2,subscriptions_id:"test_podpiska",isActiveSubscription:!1},{id:2,name:"5% скидка на фрукты",description:`Овощная революция в вашем магазине!
 С 1 по 31 мая заходите в наш магазин и выбирайте свежие, натуральные и полезные овощи по самым выгодным ценам. Морковь, капуста, перец, помидоры – все это и многое другое станет еще доступнее с нашей акцией.
 Не упустите свой шанс сделать правильный выбор и позаботиться о своем здоровье!
 Акция действует во всех магазинах сети и не суммируется с другими предложениями.
 Мы ждем вас!`,img:"/mockImages/watermelon.png",price:133,day:1,nextMonthId:3,subscriptions_id:"test_podpiska2",isActiveSubscription:!1},{id:3,name:"7% скидка на готовую еду",description:`Овощная революция в вашем магазине!
 С 1 по 31 мая заходите в наш магазин и выбирайте свежие, натуральные и полезные овощи по самым выгодным ценам. Морковь, капуста, перец, помидоры – все это и многое другое станет еще доступнее с нашей акцией.
 Не упустите свой шанс сделать правильный выбор и позаботиться о своем здоровье!
 Акция действует во всех магазинах сети и не суммируется с другими предложениями.
 Мы ждем вас!`,img:"/mockImages/sandwich.png",price:133,day:1,nextMonthId:4,subscriptions_id:"test_podpiska3",isActiveSubscription:!1},{id:4,name:"15% скидка на посуду",description:`Овощная революция в вашем магазине!
 С 1 по 31 мая заходите в наш магазин и выбирайте свежие, натуральные и полезные овощи по самым выгодным ценам. Морковь, капуста, перец, помидоры – все это и многое другое станет еще доступнее с нашей акцией.
 Не упустите свой шанс сделать правильный выбор и позаботиться о своем здоровье!
 Акция действует во всех магазинах сети и не суммируется с другими предложениями.
 Мы ждем вас!`,img:"/mockImages/pan.png",price:133,day:1,nextMonthId:5,subscriptions_id:"test_podpiska4",isActiveSubscription:!1}]}},p={status:"success",result:{subscriptions:[]}},a={status:"success",result:{subscriptions:[{id:1,name:"10% скидка на овощи",description:`Овощная революция в вашем магазине!
 С 1 по 31 мая заходите в наш магазин и выбирайте свежие, натуральные и полезные овощи по самым выгодным ценам. Морковь, капуста, перец, помидоры – все это и многое другое станет еще доступнее с нашей акцией.
 Не упустите свой шанс сделать правильный выбор и позаботиться о своем здоровье!
 Акция действует во всех магазинах сети и не суммируется с другими предложениями.
 Мы ждем вас!`,img:"/mockImages/carrot.png",price:133,day:1,nextMonthId:2,subscriptions_id:"test_podpiska",isActiveSubscription:!0},{id:2,name:"5% скидка на фрукты",description:`Овощная революция в вашем магазине!
 С 1 по 31 мая заходите в наш магазин и выбирайте свежие, натуральные и полезные овощи по самым выгодным ценам. Морковь, капуста, перец, помидоры – все это и многое другое станет еще доступнее с нашей акцией.
 Не упустите свой шанс сделать правильный выбор и позаботиться о своем здоровье!
 Акция действует во всех магазинах сети и не суммируется с другими предложениями.
 Мы ждем вас!`,img:"/mockImages/watermelon.png",price:133,day:1,nextMonthId:3,subscriptions_id:"test_podpiska2",isActiveSubscription:!1},{id:3,name:"7% скидка на готовую еду",description:`Овощная революция в вашем магазине!
 С 1 по 31 мая заходите в наш магазин и выбирайте свежие, натуральные и полезные овощи по самым выгодным ценам. Морковь, капуста, перец, помидоры – все это и многое другое станет еще доступнее с нашей акцией.
 Не упустите свой шанс сделать правильный выбор и позаботиться о своем здоровье!
 Акция действует во всех магазинах сети и не суммируется с другими предложениями.
 Мы ждем вас!`,img:"/mockImages/sandwich.png",price:133,day:1,nextMonthId:4,subscriptions_id:"test_podpiska3",isActiveSubscription:!1},{id:4,name:"15% скидка на посуду",description:`Овощная революция в вашем магазине!
 С 1 по 31 мая заходите в наш магазин и выбирайте свежие, натуральные и полезные овощи по самым выгодным ценам. Морковь, капуста, перец, помидоры – все это и многое другое станет еще доступнее с нашей акцией.
 Не упустите свой шанс сделать правильный выбор и позаботиться о своем здоровье!
 Акция действует во всех магазинах сети и не суммируется с другими предложениями.
 Мы ждем вас!`,img:"/mockImages/pan.png",price:133,day:1,nextMonthId:5,subscriptions_id:"test_podpiska4",isActiveSubscription:!1}]}},u={status:"error",result:{massage:"Subscription not found"}};o.get("https://preprod.premiya.fivecorners.ru/api/page/getSubscriptions",({request:e})=>{const s=new URL(e.url).searchParams.get("scenario");return s==="error"?n.json(u):s==="subscription"?n.json(a):s==="no-subscription"?n.json(p):n.json(c)});export{a,p as b,u as c,g as d,m as g,c as r};
