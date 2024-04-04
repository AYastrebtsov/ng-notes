export const ROUTES = {
  // adminAlert
  flutterIsWorking: false,
  adminAlerts: {
    // запросы
    requests: {
      getAdminAlertMessage: {
        //POST
        //params: {api_token: string}
        // локальный
        urlLocal: 'https://preprod.premiya.fivecorners.ru/api/getMessage',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/getMessage'
      }
    }
  },
  blockAccount: {
    // запросы
    requests: {
      delAccountSendCode: {
        //POST
        //    params: {
        // api_token: string}
        // локальный
        urlLocal: 'https://preprod.premiya.fivecorners.ru/api/page/delAccountSendCode',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/page/delAccountSendCode'
      },
      deleteAccount: {
        //POST
        //  params: {
        //      api_token: string}
        //  body :{
        //    code: code,
        //    message: message,}
        // локальный
        urlLocal: 'https://preprod.premiya.fivecorners.ru/api/page/delAccount',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/page/delAccount'
      }
    }
  },
  cardBlock: {
    // запросы
    requests: {
      setBlockCard: {
        //GET
        // params :{
        //  api_token : string
        //  cardId : number
        //  password : string
        //  reason: 'Блокировка из МП',
        // }
        // локальный
        urlLocal: 'https://preprod.premiya.fivecorners.ru/api/loymax/cardChangeBlockState',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/loymax/cardChangeBlockState'
      }
    }
  },
  catalogGoods: {
    // запросы
    requests: {
      getCatalogGoods: {
        // POST
        // params: {
        // api_token: string
        // },
        // body: {
        // type: string,
        // page: number,
        // orderBy: string,
        // category: string[],
        // search: string,
        // minPrice: number,
        // maxPrice: number,
        // }
        // локальный
        urlLocal: 'https://preprod.premiya.fivecorners.ru/api/page/catalogPage',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/page/catalogPage'
      },
      getDetailPage: {
        // POST
        // params: {
        // api_token: string
        // },
        // body: {
        // productId: number,
        // shopId: string
        // } || {
        // productId: number,
        // }
        // локальный
        urlLocal: 'https://preprod.premiya.fivecorners.ru/api/page/getDetailPage',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/page/getDetailPage'
      },
      getGoodsCategories: {
        // POST
        // params: {
        // api_token: string
        // },
        // локальный
        urlLocal: 'https://preprod.premiya.fivecorners.ru/api/page/getProductCategory',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/page/getProductCategory'
      }
    }
  },
  goalsData: {
    // запросы
    requests: {
      getGoalData: {
        // POST
        // params: {
        // api_token: string
        // },

        // локальный
        // urlLocal: 'https://preprod.premiya.fivecorners.ru/api/page/userGoal',
        urlLocal: 'https://run.mocky.io/v3/b4c9e239-cea1-4f38-9b5a-372cb9215d65',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/page/userGoal'
      }
    }
  },
  home: {
    // запросы
    requests: {
      getCardStatus: {
        // POST
        // params: {
        // api_token: string
        // },

        // локальный
        urlLocal: 'https://preprod.premiya.fivecorners.ru/api/page/userStatus',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/page/userStatus'
      },
      getCardSBonus: {
        // POST
        // params: {
        // api_token: string
        // },

        // локальный
        urlLocal: 'https://preprod.premiya.fivecorners.ru/api/page/userBonus',
        // urlLocal: 'https://run.mocky.io/v3/df796364-0ba0-405b-b1f8-e44f7a0822f1',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/page/userBonus'
      },
      getCardQrCode: {
        // POST
        // params: {
        // api_token: string
        // },

        // локальный
        urlLocal: 'https://preprod.premiya.fivecorners.ru/api/page/userQR',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/page/userQR'
      },
      getDynamicQrCode: {
        // POST
        // params: {
        // api_token: string
        // },

        // локальный
        urlLocal: 'https://run.mocky.io/v3/db229846-0f8f-4b55-b149-194538434f49',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/page/generateQrCode'
      },
      getProductBaners: {
        // POST
        // params: {
        // api_token: string
        // },

        // локальный
        // urlLocal: 'https://preprod.premiya.fivecorners.ru/api/page/userAttr',
        urlLocal: 'https://run.mocky.io/v3/64d0a976-e4bc-4985-b431-e29587c5771d',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/page/userAttr'
      },
      getReadySlider: {
        // POST
        // params: {
        // api_token: string
        // },

        // локальный
        urlLocal: 'https://preprod.premiya.fivecorners.ru/api/page/slider',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/page/slider'
      },
      getCatalogRow: {
        // POST
        // params: {
        // api_token: string
        // },

        // локальный
        urlLocal: 'https://preprod.premiya.fivecorners.ru/api/page/userCatalog',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/page/userCatalog'
      },
      getStoresData: {
        // POST
        // params: {
        // api_token: string
        // },

        // локальный
        urlLocal: 'https://preprod.premiya.fivecorners.ru/api/page/getShop',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/page/getShop'
      },
      getElectronicChips: {
        // POST
        // params: {
        // api_token: string
        // },

        // локальный
        urlLocal: 'https://preprod.premiya.fivecorners.ru/api/page/userElectronicChips',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/page/userElectronicChips'
      },
      getBanner: {
        // локальный
        urlLocal: 'https://premialoyality.ru/api/page/userUId',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/page/userUId'
      },
      getBannerAdmin: {
        //успешный ответ
        // $response['status'] = 'Success';
        // $response['result'] = [
        //    'img'=>$banner->img,
        //    'link'=>$banner->link,
        // ];
        // не успешный ответ
        // $response['status'] = 'error';
        // $response['result'] = [];

        // локальный
        urlLocal: 'https://run.mocky.io/v3/1596c40d-9503-4709-b634-c3e78b1b7f41',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/page/getPromoBanner'
      }
    }
  },
  info: {
    // запросы
    requests: {
      getInfoPage: {
        // POST

        // локальный
        urlLocal: 'https://preprod.premiya.fivecorners.ru/api/page/getInfoPage',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/page/getInfoPage'
      },
      postQuestion: {
        // POST
        //body {
        // email: string,
        // text: string,
        // phone: string,
        // }
        // локальный
        urlLocal: 'https://preprod.premiya.fivecorners.ru/api/callBack',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/callBack'
      }
    }
  },
  userDevice: {
    requests: {
      sendUserDevice: {
        urlLocal: 'https://preprod.premiya.fivecorners.ru/api/page/sendUserDevice',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/page/sendUserDevice'
      }
    }
  },
  notifications: {
    // запросы
    requests: {
      getNotificationsPage: {
        // POST
        // params: {
        // api_token: string
        // },

        // локальный
        urlLocal: 'https://preprod.premiya.fivecorners.ru/api/page/getMassageLa',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/page/getMassageLa'
      },
      readNotification: {
        // POST
        // params: {
        // api_token: string
        // },
        // body: {
        // messageId: number
        // },
        // локальный
        urlLocal: 'https://preprod.premiya.fivecorners.ru/api/page/reedMassage',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/page/reedMassage'
      },
      readAllNotification: {
        // POST
        // params: {
        // api_token: string
        // },

        // локальный
        urlLocal: 'https://preprod.premiya.fivecorners.ru/api/page/reedAllMassage',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/page/reedAllMassage'
      }
    }
  },
  paymontSlip: {
    // запросы
    requests: {
      getPaymontSlip: {
        // method: 'POST',
        // params: {
        // api_token: string
        // },
        // body:{
        // chequeNumber: number
        // }
        // локальный
        urlLocal: 'https://preprod.premiya.fivecorners.ru/api/page/getPurchaseHistoryDetail',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/page/getPurchaseHistoryDetail'
      },
      setProductRating: {
        // method: 'POST',
        // params: {
        // api_token: string
        // },
        // body:{
        // product_id: string,
        // product_evaluation: number,
        // description: string,
        // shop: string,
        // check_number: string,
        // }
        // локальный
        urlLocal: 'https://preprod.premiya.fivecorners.ru/api/page/createNewEvaluation',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/page/createNewEvaluation'
      },
      getCategoryEvaluation: {
        // method: 'POST',
        // params: {
        // api_token: string
        // },
        // локальный
        urlLocal: 'https://preprod.premiya.fivecorners.ru/api/page/getCategoryEvaluation',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/page/getCategoryEvaluation'
      }
    }
  },
  personalProfileContent: {
    // запросы
    requests: {
      getPersonalProfileContent: {
        //GET
        // params: {
        // api_token: string
        // },
        // локальный
        urlLocal: 'https://preprod.premiya.fivecorners.ru/api/getUserInfo',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/getUserInfo'
      },
      setPersonalProfileContent: {
        //POST
        // params: {
        // api_token: string
        // },
        //body:{
        // name?: string,
        // last_name?: string,
        // email?: string,
        // phone?: string,
        // birthday?: string | null,
        // second_name?: string,
        // gender?: string | null,
        // city?: string | null,
        // street?: string | null,
        // check_email?: string | boolean,
        // marital_status?: string | null,
        // children?: string | null,
        // sms?: boolean,
        // car?: boolean,
        // email_notification?: boolean,
        // push?: boolean,
        //}
        // локальный
        urlLocal: 'https://preprod.premiya.fivecorners.ru/api/updateUserInfo',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/updateUserInfo'
      },
      setConfirmationEmail: {
        //POST
        // params: {
        // api_token: string
        // },
        // body :{email: string}
        // локальный
        urlLocal: 'https://preprod.premiya.fivecorners.ru/api/loymax/setEmail',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/loymax/setEmail'
      },
      sendCodeForConfirmEmail: {
        //POST
        // params: {
        // api_token: string
        // },
        // body :{code: string}
        // локальный
        urlLocal: 'https://preprod.premiya.fivecorners.ru/api/loymax/confirmEmail',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/loymax/confirmEmail'
      },
      newCodeSend: {
        //POST
        // params: {
        // api_token: string
        // },
        // локальный
        urlLocal: 'https://preprod.premiya.fivecorners.ru/api/loymax/newCodeSend',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/loymax/newCodeSend'
      }
    }
  },
  promoDetail: {
    // запросы
    requests: {
      getPromoDetailPage: {
        //POST
        // params: {
        // api_token: string
        // },
        // локальный
        urlLocal: 'https://preprod.premiya.fivecorners.ru/api/page/getElectronicChipsPage',
        // urlLocal: 'https://run.mocky.io/v3/b40fcbc3-f88a-4c81-beaf-bba7708ada7b',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/page/getElectronicChipsPage'
      }
    }
  },
  purchaseHistory: {
    // запросы
    requests: {
      getPurchaseHistory: {
        //POST
        // params: {
        // api_token: string
        // },
        // body:{
        // fromDate: string
        //}
        // локальный
        urlLocal: 'https://preprod.premiya.fivecorners.ru/api/page/purchaseHistoryPage',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/page/purchaseHistoryPage'
      },
      setOnePurchase: {
        //POST
        // params: {
        // api_token: string
        // },
        // body:{
        // check_number?: string
        // check_evaluation?: number | null
        // description?: string
        // shop?: string
        // }
        // локальный
        urlLocal: 'https://preprod.premiya.fivecorners.ru/api/page/createNewEvaluation',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/page/createNewEvaluation'
      }
    }
  },
  rewie: {
    // запросы
    requests: {
      getRewieList: {
        //POST
        // params: {
        // api_token: string
        // },
        // локальный
        urlLocal: 'https://preprod.premiya.fivecorners.ru/api/intraservice/getReviews',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/intraservice/getReviews'
      },
      getListStores: {
        //POST
        // params: {
        // api_token: string
        // },
        // локальный
        urlLocal: 'https://preprod.premiya.fivecorners.ru/api/intraservice/getListStores',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/intraservice/getListStores'
      },
      sendExpressRewie: {
        //POST
        // params: {
        // api_token: string
        // },
        // body: {
        // serviceId: string,
        // taskTypeId: string,
        // shop_id: string,
        // message: string,
        // need_answer: string,
        // file0: binary,
        // file1: binary, //и так далее
        //} // это все объект FormData
        // локальный
        urlLocal: 'https://preprod.premiya.fivecorners.ru/api/intraservice/setPackReviews',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/intraservice/setPackReviews'
      }
    }
  },
  status: {
    // запросы
    requests: {
      getStatusPage: {
        //POST
        // params: {
        // api_token: string
        // },
        // локальный
        // urlLocal: 'https://preprod.premiya.fivecorners.ru/api/page/statusPage',
        // без статуса
        // urlLocal: 'https://run.mocky.io/v3/72c0e774-9c84-4678-8490-42aee77e7804',
        // со статусом
        urlLocal: 'https://run.mocky.io/v3/de46ae2e-330c-45d8-8d91-f0bc701fb94f',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/page/statusPage'
      },
      setSelectedSet: {
        //POST
        // params: {
        // api_token: string
        // },
        // body: {
        // kit: string
        // },
        // локальный
        urlLocal: 'https://preprod.premiya.fivecorners.ru/api/page/setUserSets',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/page/setUserSets'
      },
      setSelection: {
        //POST
        // params: {
        // api_token: string
        // },
        // body: {
        // messageId: number
        // },
        // локальный
        urlLocal: 'https://preprod.premiya.fivecorners.ru/api/page/reedMassage',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/page/reedMassage'
      }
    }
  },
  viewPdf: {
    // запросы
    requests: {
      getViewPdfPage: {
        //POST
        // params: {
        // api_token: string
        // },
        // параметризированный запрос !!!!!!!!!!!!
        // локальный
        urlLocal: 'https://preprod.premiya.fivecorners.ru/api/page/slider/', // после /slider/:bannerId
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/page/slider/' // после /slider/:bannerId параметр передаю в коде
      }
    }
  },
  userSlice: {
    // запросы
    requests: {
      authWitPasswordAndLogin: {
        //GET
        // params: {
        // login: string,
        // password: string
        // },
        // локальный
        urlLocal: 'https://preprod.premiya.fivecorners.ru/api/loymax/auth',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/loymax/auth'
      },
      passwordRecoveryStart: {
        //GET
        // params: {
        // notifierIdentity: string,
        // },
        // локальный
        urlLocal: 'https://preprod.premiya.fivecorners.ru/api/loymax/resetPasswordStart',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/loymax/resetPasswordStart'
      },
      passwordRecoveryFinish: {
        //GET
        // params: {
        // notifierIdentity: string,
        // confirmCode: string,
        // newPassword: string
        // },
        // локальный
        urlLocal: 'https://preprod.premiya.fivecorners.ru/api/loymax/resetPassword',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/loymax/resetPassword'
      },
      registrationStart: {
        //GET
        // params: {
        // login: string,
        // },
        // локальный
        urlLocal: 'https://preprod.premiya.fivecorners.ru/api/loymax/beginRegister',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/loymax/beginRegister'
      },
      sendSms: {
        //GET
        // params: {
        // api_token: string,
        // code: string,
        // },
        // локальный
        urlLocal: 'https://preprod.premiya.fivecorners.ru/api/loymax/phoneCode',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/loymax/phoneCode'
      },
      sendPassword: {
        //POST
        // params: {
        // api_token: string,
        // password: string,
        // },
        // локальный
        urlLocal: 'https://preprod.premiya.fivecorners.ru/api/loymax/setPassword',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/loymax/setPassword'
      },
      finishRegistration: {
        //POST
        // params: {
        // api_token: string,
        // password: string,
        // },
        // локальный
        urlLocal: 'https://preprod.premiya.fivecorners.ru/api/loymax/finishRegister',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/loymax/finishRegister'
      },
      sendCard: {
        //GET
        // params: {
        // api_token: string,
        // cardNumber: string,
        // },
        // локальный
        urlLocal: 'https://preprod.premiya.fivecorners.ru/api/loymax/setCard',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/loymax/setCard'
      },
      sendPersonalData: {
        //POST
        // params: {
        // api_token: string,
        // name: string,
        // birthday: string,
        // },
        // локальный
        urlLocal: 'https://preprod.premiya.fivecorners.ru/api/page/setNameAndDate',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/page/setNameAndDate'
      },
      sendEmail: {
        // GET
        // params: {
        // api_token: string,
        // email: string,
        // },
        // локальный
        urlLocal: 'https://preprod.premiya.fivecorners.ru/api/loymax/setEmail',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/loymax/setEmail'
      },
      sendCityStore: {
        //POST
        // params: {
        // api_token: string,
        // shop_name: string,
        // shop_id: string,
        // },
        // локальный
        urlLocal: 'https://preprod.premiya.fivecorners.ru/api/page/setShop',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/page/setShop'
      },
      getUserShop: {
        //POST
        // params: {
        // api_token: string,
        // },
        // локальный
        urlLocal: 'https://preprod.premiya.fivecorners.ru/api/page/getUserShop',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/page/getUserShop'
      },
      getUserRealCard: {
        //POST
        // params: {
        // api_token: string,
        // },
        // локальный
        urlLocal: 'https://preprod.premiya.fivecorners.ru/api/page/realCard',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/page/realCard'
      },
      getWelcomeData: {
        //POST
        // params: {
        // api_token: string,
        // },
        // локальный
        urlLocal: 'https://preprod.premiya.fivecorners.ru/api/page/welcomeScreenPage',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/page/welcomeScreenPage'
      },
      getStores: {
        //POST
        // params: {
        // api_token: string,
        // },
        // локальный
        urlLocal: 'https://preprod.premiya.fivecorners.ru/api/page/getShop',
        // удаленный
        urlRemote: 'https://premialoyality.ru/api/page/getShop'
      }
    }
  }
}
window.routes5 = ROUTES
