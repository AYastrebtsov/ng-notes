import{h as n,H as a}from"./index-Dt5PkBs3.js";const i=async({api_token:e,cardNumber:o})=>{const r=new URL("https://preprod.premiya.fivecorners.ru/api/sendBlockCard");r.searchParams.append("api_token",e),r.searchParams.append("cardNumber",o);const t=await fetch(r,{method:"POST"});if(!t.ok)throw new Error("Произошел сбой запроса. Повторите попытку");const s=await t.json();if(s.status==="error"&&s.massage==="not found card number")throw new Error("Ошибка, проверьте номер карты");if(s.status==="error")throw new Error("Не удалось отправить запрос, повторите попытку");return s},u={status:"success",massage:"Запрос успешно отправлен",result:null},c={status:"error",massage:"Произошла ошибка, попробуйте ещё раз",result:null},p={status:"error",massage:"not found card number",result:null};n.post("https://preprod.premiya.fivecorners.ru/api/sendBlockCard",async({request:e})=>{const r=new URL(e.url).searchParams.get("scenario");return r==="error"?a.json(c):r==="card-number-not-found"?a.json(p):a.json(u)});export{c as a,p as b,i as p,u as r};