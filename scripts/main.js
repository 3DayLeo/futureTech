//Мы НЕ используем сборщик проектов? Поэтому в пути важно указывать относительность пути ./ и разрешение .js
import Header from './Header.js'
import TabsCollection from "./Tabs.js"; //Подключение определенного класса, а не всего документа

new Header()
new TabsCollection() //Инициализация классов