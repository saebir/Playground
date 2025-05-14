// data/buttonsData.js

export const regularButtons = [
  {
    label: 'Tryk her!',
    type: 'default',
    alertText: 'Du trykkede på knappen!',
    native: true, // Marker denne som en React Native <Button />
  },
  {
    label: 'Nej, tryk her!',
    type: 'outlined',
    alertText: 'Du trykkede på knappen!',
  },
];

export const fancyButtons = [
  { label: 'Skyggeknap', style: 'shadow', alertText: 'Skyggeknap' },
  { label: 'Gradient', style: 'gradient', alertText: 'Gradient' },
  { label: '🖤 Outline', style: 'outline', alertText: 'Outline' },
];

export const emojiButtons = [
  { icon: '🔍', alertText: 'Du har trykket på søg' },
  { icon: '🗑️', alertText: 'Du har trykket på skraldespand' },
  { icon: '✏️', alertText: 'Du har trykket på rediger' },
];

export const dropdownOptions = ['Mad', 'Bar', 'Scener', 'Merch', 'Toiletter'];
