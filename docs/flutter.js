window.addEventListener('flutterInAppWebViewPlatformReady', function (event) {
  // Слушатель отрабатывает после того как загрузится вебвью со стороны FLutter

  window.routes5.flutterIsWorking = true // Устанавливаем глобальный флаг, для корректной работы вне окружения flutter
  // все вызовы методов от Flutter идут только после проверки даннго флага
  try {
    // В данном месте мы ищем и "подменяем" localstorage последний копией которую сохраняли
    // с помощью данного метода мы достаем все данные из БД приложения
    window.flutter_inappwebview.callHandler('handlerWstorageGetAll').then(data => {
      // делаю проверку на то что данные существуют
      // data.result Здесь массив со всеми записями из бд и если его длина больше 0 то мы будем пытаться найти наши записи связанные с сохраненнием localStorage
      if (data && data.result && data.result.length > 0) {
        // фильтруем весь list и оставляем только записи с ключом persist:root (под ним внутре приложения мы будем сохранять копию нашего localStorage )
        const array = data.result.filter(el => el['key'] === 'persist:root')
        let persist
        //если длина после фильтрации больше 0 значит тут есть данные с локалом
        if (array.length > 0) {
          persist = array[array.length - 1]
          if (persist.value) {
            // Пересохраняем в локалку только в том случае если данные точно присутсвуют (по сути они будут всегда)
            // так как сохранение происходит только в том случае если локалка с помощью persist(либа) была проинициализирована
            if (persist.value.length > 0) {
              //сохраняем локалку именно под этим ключом так как persist дефолтно работает с этим ключом
              localStorage.setItem('persist:root', persist['value'])
            }
          }
        }
      }
    })
  } catch {
    console.log('Error with flutter')
  }
})
