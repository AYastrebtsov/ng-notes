import{j as e}from"./jsx-dev-runtime-BETcGmrp.js";import{T as i,D as a,d as r}from"./index-DmOLfB1G.js";import{r as p,a as l}from"./postUpdateUserInfo-BdjCGWJc.js";import"./index-BdMw_Ax9.js";import"./iframe-DNwh6oNd.js";import"../sb-preview/runtime.js";import"./index-BSE0ybse.js";import"./mapValues-BXPElCjX.js";import"./index-BU6WCtrf.js";import"./index-C-I6vmrZ.js";import"./index-BvvlT_10.js";import"./index-DrFu-skq.js";import"./index-Dt5PkBs3.js";import"./index-zmhHS-aW.js";import"./delay-DW_e480v.js";const m=()=>e.jsxDEV(e.Fragment,{},void 0,!1,{fileName:"/Users/andrey/Documents/work/client_premia/src/app/requests/postUpdateUserInfo/postUpdateUserInfo.stories.tsx",lineNumber:6,columnNumber:20},void 0),E={title:"Сетевые запросы/postUpdateUserInfo",component:m,tags:["autodocs"]},s={parameters:{docs:{page:()=>e.jsxDEV(e.Fragment,{children:[e.jsxDEV(i,{},void 0,!1,{fileName:"/Users/andrey/Documents/work/client_premia/src/app/requests/postUpdateUserInfo/postUpdateUserInfo.stories.tsx",lineNumber:22,columnNumber:11},void 0),e.jsxDEV(a,{},void 0,!1,{fileName:"/Users/andrey/Documents/work/client_premia/src/app/requests/postUpdateUserInfo/postUpdateUserInfo.stories.tsx",lineNumber:23,columnNumber:11},void 0),e.jsxDEV("h1",{children:"method: POST"},void 0,!1,{fileName:"/Users/andrey/Documents/work/client_premia/src/app/requests/postUpdateUserInfo/postUpdateUserInfo.stories.tsx",lineNumber:25,columnNumber:11},void 0),e.jsxDEV("h3",{children:"переменная: VITE_POST_UPDATE_USER_INFO"},void 0,!1,{fileName:"/Users/andrey/Documents/work/client_premia/src/app/requests/postUpdateUserInfo/postUpdateUserInfo.stories.tsx",lineNumber:26,columnNumber:11},void 0),e.jsxDEV("h3",{children:["адрес: ","https://preprod.premiya.fivecorners.ru/api/updateUserInfo"]},void 0,!0,{fileName:"/Users/andrey/Documents/work/client_premia/src/app/requests/postUpdateUserInfo/postUpdateUserInfo.stories.tsx",lineNumber:27,columnNumber:11},void 0),e.jsxDEV("h2",{children:"Принимаемые парметры"},void 0,!1,{fileName:"/Users/andrey/Documents/work/client_premia/src/app/requests/postUpdateUserInfo/postUpdateUserInfo.stories.tsx",lineNumber:29,columnNumber:11},void 0),e.jsxDEV(r,{language:"json",code:JSON.stringify({urlSearchParams:{api_token:"string"},body:{JSON:{"name?":"string","last_name?":"string","email?":"string","phone?":"string","birthday?":"string","second_name?":"string","gender?":"string","city?":"string","street?":"string","check_email?":"string","marital_status?":"string","children?":"string","sms?":"boolean","car?":"boolean","email_notification?":"boolean","push?":"boolean"}}},null,2)},void 0,!1,{fileName:"/Users/andrey/Documents/work/client_premia/src/app/requests/postUpdateUserInfo/postUpdateUserInfo.stories.tsx",lineNumber:30,columnNumber:11},void 0),e.jsxDEV("h2",{children:"успешный запрос"},void 0,!1,{fileName:"/Users/andrey/Documents/work/client_premia/src/app/requests/postUpdateUserInfo/postUpdateUserInfo.stories.tsx",lineNumber:63,columnNumber:11},void 0),e.jsxDEV(r,{language:"json",code:JSON.stringify(p,null,2)},void 0,!1,{fileName:"/Users/andrey/Documents/work/client_premia/src/app/requests/postUpdateUserInfo/postUpdateUserInfo.stories.tsx",lineNumber:64,columnNumber:11},void 0),e.jsxDEV("h2",{children:"запрос с ошибкой"},void 0,!1,{fileName:"/Users/andrey/Documents/work/client_premia/src/app/requests/postUpdateUserInfo/postUpdateUserInfo.stories.tsx",lineNumber:65,columnNumber:11},void 0),e.jsxDEV(r,{language:"json",code:JSON.stringify(l,null,2)},void 0,!1,{fileName:"/Users/andrey/Documents/work/client_premia/src/app/requests/postUpdateUserInfo/postUpdateUserInfo.stories.tsx",lineNumber:66,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/andrey/Documents/work/client_premia/src/app/requests/postUpdateUserInfo/postUpdateUserInfo.stories.tsx",lineNumber:21,columnNumber:9},void 0)}}};var n,o,t;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  parameters: {
    docs: {
      page: () => <>
          <DocBlock.Title />
          <DocBlock.Description />

          <h1>method: POST</h1>
          <h3>переменная: VITE_POST_UPDATE_USER_INFO</h3>
          <h3>адрес: {import.meta.env.VITE_POST_UPDATE_USER_INFO}</h3>

          <h2>Принимаемые парметры</h2>
          <DocBlock.Source language='json' code={JSON.stringify({
          urlSearchParams: {
            api_token: 'string'
          },
          body: {
            JSON: {
              'name?': 'string' || null,
              // имя
              'last_name?': 'string',
              // фамилия
              'email?': 'string',
              // почта
              'phone?': 'string',
              // телефон
              'birthday?': 'string' || null,
              // дата рождения
              'second_name?': 'string',
              // отчество
              'gender?': 'string' || null,
              // пол
              'city?': 'string' || null,
              // город
              'street?': 'string' || null,
              // улица
              'check_email?': 'string' || 'boolean',
              // отправка чеков на почту
              'marital_status?': 'string' || null,
              // семейное положение
              'children?': 'string' || null,
              // даты рождения детей, если не прриходят то детей нет
              'sms?': 'boolean',
              // отправка по смс
              'car?': 'boolean',
              // машина
              'email_notification?': 'boolean',
              // уведомление на почту
              'push?': 'boolean' // push уведомления
            }
          }
        }, null, 2)} />

          <h2>успешный запрос</h2>
          <DocBlock.Source language='json' code={JSON.stringify(responseSuccess, null, 2)} />
          <h2>запрос с ошибкой</h2>
          <DocBlock.Source language='json' code={JSON.stringify(responseError, null, 2)} />
        </>
    }
  }
}`,...(t=(o=s.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const S=["Basic"];export{s as Basic,S as __namedExportsOrder,E as default};
