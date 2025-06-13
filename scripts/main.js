//Мы НЕ используем сборщик проектов? Поэтому в пути важно указывать относительность пути ./ и разрешение .js
import Header from './Header.js'
import TabsCollection from './Tabs.js' //Подключение определенного класса, а не всего документа
import SliderCollection from './Slider.js'

new Header()
new TabsCollection()
new SliderCollection() //Инициализация классов

