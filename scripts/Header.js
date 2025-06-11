//Код пишем в синтаксисе JS классов

class Header {
  //Заполняем тело сущностями
  selectors = { //Нужно для того, чтобы не обращаться дальше к строкам напрямую. Обращаясь не к строкам, а к свойствам объекта в значении которых
    //содержатся строки мы уменьшаем риски возникновения нежелательных ошибок в коде

    //Хранит свойства с css селекторами в значениях
    root:'[data-js-header]',
    overlay: '[data-js-header-overlay]',
    burgerButton: '[data-js-header-burger-button]',
  }

  stateClasses = {
    //тут хранятся css классы состояния
    isActive: 'is-active', //JS имена свойств пишем в camelCase нотации, 1букваМаленькаяЗатемБольшие; //CSS - кебаб-кейс-нотация
    isLock: 'is-lock',
  }

  //в рамках тела класса Header добавляем конструктор, который автоматически выполняет код при инициализации класс. Т.е. когда мы написали new Header()
  constructor() {
    //ссылка на корневой компонент элемента, который сейчас разрабатывается
    this.rootElement = document.querySelector(this.selectors.root) //Ссылаемся на поле root из селекторов выше по атрибуту
    this.overlayElement = this.rootElement.querySelector(this.selectors.overlay)
    this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerButton)
    this.bindEvents()
  }

  onBurgerButtonClick = () => { //Вставляем через стрелочную запись? Зачем? что это
    this.burgerButtonElement.classList.toggle(this.stateClasses.isActive)
    this.overlayElement.classList.toggle(this.stateClasses.isActive)
    document.documentElement.classList.toggle(this.stateClasses.isLock)
  }

  bindEvents() { //Привязка событий к DOM элементам
    this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick)//Добавляем к burgerButtonElement обработчик события клика
  }
}

export default Header

//отдельно экспортируем его по умолчанию