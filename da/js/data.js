const user = {
  name: "Anton",
  surname: "Dzyad",
  userPhoto: "Anton.jpg",
  qrQode: "qr-code.svg",
  dreams: [
    { src: "B.jpg", alt: "Bugatti" },
    { src: "photo7.jpg", alt: "Переїхати в Лос Анджелес" },
    { src: "Вільний.jpg", alt: "Відчути себе вільною людиною" },
  ],
};

// arr це середня місячна платня по рокам
const arr = [
  500,
  700,
  800,
  1000,
  1200,
  1500,
  1800,
  2100,
  2400,
  2700,
  3000,
  3300,
];

const necessaryExpenses = 800;

const todo = [
  { month: "Червень", skill: "JavaScript" },
  { month: "Липень", skill: "Java" },
  { month: "Серпень", skill: "Логіку" },
  { month: "Вересень", skill: "Самостійність" },
  { month: "Жовтень", skill: "витривалість" },
  { month: "Листопад", skill: "Емоційний інтелект" },
  { month: "Грудень", skill: "Креативність" },
  { month: "Січень", skill: "Лідерство" },
  { month: "Лютий", skill: "Фізичну силу" },
  { month: "Березень", skill: "Особистий бренд" },
  { month: "Квітень", skill: "Управління фінансами" },
  { month: "Травень", skill: "Публічні виступи" },
];

export { user, arr, necessaryExpenses, todo };
