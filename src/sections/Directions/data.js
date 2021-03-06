import at from '../../images/flags/at.png';
import cz from '../../images/flags/cz.svg';
import de from '../../images/flags/de.png';
import hr from '../../images/flags/hr.png';
import hu from '../../images/flags/hu.png';
import it from '../../images/flags/it.png';
import pl from '../../images/flags/pl.png';
import sk from '../../images/flags/sk.png';

const data = [
  {
    flag: cz,
    country: 'Чехія',
    route: [
      'Прага', 'Оломоуц', 'Брно', 'Їглава', 'Плзень', 'Карлові Вари', 'Градец Кралове', 'Фридек Мистек', 'Острава',
      'Опава', 'Злін', 'Літомишль', 'Пардубице', 'Млада Болеслав', 'Ліберець', 'та інші',
    ],
    documents: [
      'Біометричний паспорт', 'тест ПЛР або сертифікат вакцинації', 'віза країни', 'паспорт ЄС', 'ВНЖ', 'ПМЖ',
    ],
    phone: '+380991234567',
  },
  {
    flag: pl,
    country: 'Польща',
    route: [
      'Варшава', 'Краків', 'Катовице', 'Люблін', 'Радом', 'Жешув', 'Позань', 'Вроцлав', 'Гданьськ', 'Лодзь', 'інші',
    ],
    documents: [
      'Біометричний паспорт', 'тест ПЛР або сертифікат вакцинації', 'віза країни', 'паспорт ЄС', 'ВНЖ', 'ПМЖ',
    ],
    phone: '+380991234567',
  },
  {
    flag: de,
    country: 'Німеччина',
    route: ['Берлін', 'Франкфурт', 'Штутґарт', 'Мюнхен', 'Нюрнберг', 'Гамбург', 'Ґановер', 'Кельн', 'та  інші'],
    documents: [
      'Біометричний паспорт', 'тест ПЛР або сертифікат вакцинації', 'віза країни', 'паспорт ЄС', 'ВНЖ', 'ПМЖ',
    ],
    phone: '+380991234567',
  },
  {
    flag: sk,
    country: 'Словаччина',
    route: ['Братислава', 'Сенець', 'Трнава', 'Тренчин', 'Жиліна', 'Дольний Кубін', 'Топольчани', 'Нітра', 'інші'],
    documents: [
      'Біометричний паспорт', 'тест ПЛР або сертифікат вакцинації', 'віза країни', 'паспорт ЄС', 'ВНЖ', 'ПМЖ',
    ],
    phone: '+380991234567',
  },
  {
    flag: hu,
    country: 'Угорщина',
    route: ['Будапешт', 'Татабанья', 'Шарвар', 'Сомбатхей', 'Комаром', 'Дьер', 'Мошонмадяровар', 'інші'],
    documents: [
      'Біометричний паспорт', 'тест ПЛР або сертифікат вакцинації', 'віза країни', 'паспорт ЄС', 'ВНЖ', 'ПМЖ',
    ],
    phone: '+380991234567',
  },
  {
    flag: at,
    country: 'Австрія',
    route: [],
    documents: [
      'Біометричний паспорт', 'тест ПЛР або сертифікат вакцинації', 'віза країни', 'паспорт ЄС', 'ВНЖ', 'ПМЖ',
    ],
    phone: '+380991234567',
  },
  {
    flag: it,
    country: 'Італія',
    route: [],
    documents: [
      'Біометричний паспорт', 'тест ПЛР або сертифікат вакцинації', 'віза країни', 'паспорт ЄС', 'ВНЖ', 'ПМЖ',
    ],
    phone: '+380991234567',
  },
  {
    flag: hr,
    country: 'Хорватія',
    route: ['Загреб', 'Рієка', 'Карлобаг', 'інші'],
    documents: [
      'Біометричний паспорт', 'тест ПЛР або сертифікат вакцинації', 'віза країни', 'паспорт ЄС', 'ВНЖ', 'ПМЖ',
    ],
    phone: '+380991234567',
  },
];

export default data;
