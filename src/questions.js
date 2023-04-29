import img1 from "@/components/icons/-2.png";
import img2 from "@/components/icons/3.png";
import img3 from "@/components/icons/2.png";
const questions = [
  {
    id: 1,
    question: "Ваш пол:",
    options: [
      { id: "1", text: "мужчина", value: "male" },
      { id: "2", text: "женщина", value: "female" },
    ],
  },
  {
    id: 2,
    question: "Укажите ваш возраст:",
    options: [
      { id: "1", text: "До 18", value: "under_18" },
      { id: "2", text: "От 18 до 28", value: "18_28" },
      { id: "3", text: "от 29 до 35", value: "29_35" },
      { id: "4", text: "От 36", value: "above_36" },
    ],
  },
  {
    id: 3,
    question: "Выберите лишнее:",
    options: [
      { id: "1", text: "Дом", value: "Дом" },
      { id: "2", text: "Шалаш ", value: "Шалаш " },
      { id: "3", text: "Бунгало ", value: "Бунгало " },
      { id: "4", text: "Скамейка ", value: "Скамейка " },
      { id: "5", text: "Хижина ", value: "Хижина " },
    ],
  },
  {
    id: 4,
    question: "Продолжите числовой ряд: 18 20 24 32",
    options: [
      { id: "1", text: "62", value: "62" },
      { id: "2", text: "48", value: "48" },
      { id: "3", text: "74", value: "74" },
      { id: "4", text: "57", value: "57" },
      { id: "5", text: "60", value: "60" },
      { id: "6", text: "77", value: "77" },
    ],
  },
  {
    id: 5,
    question: "Продолжите числовой ряд: 18 20 24 32",
    options: [
      { id: "1", text: "62", value: "62" },
      { id: "2", text: "48", value: "48" },
      { id: "3", text: "74", value: "74" },
      { id: "4", text: "57", value: "57" },
      { id: "5", text: "60", value: "60" },
      { id: "6", text: "77", value: "77" },
    ],
  },
  {
    id: 6,
    question: "Выберите цвет, который сейчас наиболее Вам приятен:",
    options: [
      { id: "1", text: "grey", value: "grey" },
      { id: "2", text: "blue", value: "blue" },
      { id: "3", text: "green", value: "green" },
      { id: "4", text: "red", value: "red" },
      { id: "5", text: "yellow", value: "yellow" },
      { id: "6", text: "brown", value: "brown" },
      { id: "7", text: "pink", value: "pink" },
      { id: "8", text: "light green", value: "light green" },
      { id: "9", text: "black", value: "black" },
    ],
  },
  {
    id: 7,
    question:
      "Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:",
    options: [
      { id: "1", text: "grey", value: "grey" },
      { id: "2", text: "blue", value: "blue" },
      { id: "3", text: "green", value: "green" },
      { id: "4", text: "red", value: "red" },
      { id: "5", text: "yellow", value: "yellow" },
      { id: "6", text: "brown", value: "brown" },
      { id: "7", text: "pink", value: "pink" },
      { id: "8", text: "light green", value: "light green" },
      { id: "9", text: "black", value: "black" },
    ],
  },
  {
    id: 8,
    question: "Какой из городов лишний?",
    options: [
      { id: "1", text: "    Вашингтон ", value: "    Вашингтон " },
      { id: "2", text: "Лондон ", value: "Лондон " },
      { id: "3", text: "Париж ", value: "Париж " },
      { id: "4", text: "Нью-Йорк ", value: "Нью-Йорк " },
      { id: "5", text: "Москва ", value: "Москва " },
      { id: "6", text: "Оттава", value: "Оттава" },
    ],
  },
  {
    id: 9,
    question: "Выберите правильную фигуру из четырёх пронумерованных.",
    imgSrc: img1,
    options: [
      { id: "1", text: "1", value: "1" },
      { id: "2", text: "2", value: "2" },
      { id: "3", text: "3", value: "3" },
      { id: "4", text: "4", value: "4" },
    ],
  },
  {
    id: 10,
    question: "Вам привычнее и важнее:",
    options: [
      {
        id: "1",
        text: "Наслаждаться каждой минутой  проведенного времени",
        value: "1",
      },
      { id: "2", text: "Быть устремленными мыслями в будущее", value: "2" },
      {
        id: "3",
        text: "Учитывать в ежедневной практике прошлый опыт",
        value: "3",
      },
    ],
  },
  {
    id: 11,
    imgSrc: img2,
    question:
      "Какое определение, по-Вашему, больше подходит к этому геометрическому изображению: ",
    options: [
      {
        id: "1",
        text: "оно остроконечное",
        value: "1",
      },
      { id: "2", text: "оно устойчиво", value: "2" },
      {
        id: "3",
        text: "оно-находится в состоянии равновесия",
        value: "3",
      },
    ],
  },
  {
    id: 12,
    imgSrc: img3,
    question: "Вставьте подходящее число ",
    options: [
      {
        id: "1",
        text: "34",
        value: "34",
      },
      { id: "2", text: "36", value: "36" },
      {
        id: "3",
        text: "53",
        value: "53",
      },
      {
        id: "4",
        text: "44",
        value: "44",
      },
      {
        id: "5",
        text: "66",
        value: "42",
      },
    ],
  },
  {
    id: 13,
    question: "Вставьте подходящее число ",
    options: [
      {
        id: "1",
        text: "34",
        value: "34",
      },
      { id: "2", text: "36", value: "36" },
      {
        id: "3",
        text: "53",
        value: "53",
      },
      {
        id: "4",
        text: "44",
        value: "44",
      },
      {
        id: "5",
        text: "66",
        value: "42",
      },
    ],
  },
];

export default questions;
