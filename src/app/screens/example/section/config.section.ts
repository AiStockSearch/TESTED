import yaml from 'yaml';
import {
  TANSWER_SINGLE,
  TANSWER_SINGLE_T3,
  TANSWER_SINGLE_T4,
  TANSWER_T2,
  TANSWER_T8,
  TQ,
} from './config.list';

export type TQuestionConfig = {
  title: string;
  description: string;
  article: boolean;
  back: boolean;
  mode?: Array<TANSWER_SINGLE | TANSWER_T8 | TANSWER_T2 | TANSWER_SINGLE_T3 | TANSWER_SINGLE_T4>;
  single?: boolean;
  input?: {
    input: {
      autofocus: boolean;
      clearTextOnFocus: boolean;
      blurOnSubmit: boolean;
      keyboardType: string;
      placeholder: string;
      name: string;
    };
    placeholder: {
      placeholderName: string;
    };
  }[];
  button: string;
};

export type TConfig = {
  [key in TQ]: TQuestionConfig;
};

export const CONFIG_CTX: TConfig = yaml.parse(`
q0:
  title: 'Приветствие'
  article: false
  back: false
  desciption: Привет я твой персональный помощник. Хотел бы тебе предложить собрать свой портфель или разработать стратегию для автоматизации торговли на бирже.
  button: Начнем !
q1:
  title: Выберите рынок
  desciption: Выберите рынок, в котором вы хотите торговать или получать информацию о нем.
  article: true
  back: true
  mode: 
    - Долговой рынок
    - Фондовый рынок
    - Товарный рынок
    - Валютный рынок
    - Криптовалютный рынок
    - Венчурный рынок
    - Внебиржевой рынок
    - Деривативный рынок
  button: Продолжить
q2:
  title: Выберите тип торговли
  desciption: Выберите стиль вашей торговли ?
  article: true
  back: true
  mode: 
    - Поиск не эффективностей
    - Свинг трейд
    - Теория максимумов и минимумов
    - Портфельное инвестирование
    - Контр (разворотный) трейд
    - Волновой анализ
    - Свечной анализ
    - Новостной тип торговли
  button: Продолжить
q3:
  title: Выберите тип портфеля
  desciption: Какой максимальный срок удержания позиций в рынке вы рассматриваете ?
  article: true
  back: true
  mode: 
    - Арбитражные сделки
    - Спекулятивные сделки
    - Краткосрочный сделки
    - Среднесрочный сделки
    - Долгосрочные сделки
  button: Продолжить
q4:
  title: Маржинальные трейды
  desciption: Работаем с маржинальными трейдами ?
  article: true
  back: true
  single: true
  mode: 
    - Да
    - Нет
  button: Продолжить
q5:
  title: Моделирование портфеля
  desciption: Необходимо моделировать портфель ?
  article: true
  back: true
  single: true
  mode: 
    - Да
    - Нет
  button: Продолжить
q6:
  title: Рекомендации и стратегии
  desciption: Предлогать наши рекомендации и стратегии в отдельном моделированном портфеле ?
  article: true
  back: true
  single: true
  mode: 
    - Да
    - Нет
  button: Продолжить
q7:
  title: Компания
  desciption: Хотели бы вы монетизировать свой контент со своими стратегиями и портфелями ?
  article: true
  back: true
  mode: 
    - Ограниченный контент только аналитикой
    - Введение только дневника инвестора
    - Видеоконтент, автоследование и дневник инвестора
    - Персональный сервер для линчной организации
    - Открыть персональный канал для торгов
    - Полный доступ к ресурсу
  button: Продолжить
q8:
  title: Персональные данные
  desciption: Введите персональные данные для создания персонального торгового дневника ?
  article: false
  back: true
  input:
    - 
      input:
        autofocus: true
        clearTextOnFocus: true
        blurOnSubmit: true
        keyboardType: default
        placeholder: Ваше имя
        name: PERSONAL_NAME
      placeholder:
        placeholderName: Ваше имя
    - 
      input:
        autofocus: false
        clearTextOnFocus: true
        blurOnSubmit: true
        keyboardType: default
        placeholder: Ваш номер телефона
        name: PERSONAL_PHONE
      placeholder:
        placeholderName: Ваш номер телефона
    - 
      input:
        autofocus: false
        clearTextOnFocus: true
        blurOnSubmit: true
        keyboardType: email-address
        placeholder: Ваш электронный адрес
        name: PERSONAL_EMAIL
      placeholder:
        placeholderName: Ваш электронный адрес
  button: Продолжить
q9:
  title: Канал
  desciption: Введите назвние для создания своего платного канала по торгвле финансовыми инструментами ?
  article: false
  back: true
  input:
    - 
      input:
        autofocus: true
        clearTextOnFocus: true
        blurOnSubmit: true
        keyboardType: default
        placeholder: Название вашего канала
        name: PERSONAL_CHANNEL_NAME
      placeholder:
        placeholderName: Название вашего канала
  button: Продолжить
`);
