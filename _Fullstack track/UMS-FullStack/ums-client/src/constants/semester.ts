export const nameOptions = [
  {
    value :  '01',
    label :  'Autumn',
  },
  {
    value :   '02',
    label :   'Summer',
  },
  {
    value :  '03',
    label :  'Fall',
  },
]

const currentYear = new Date().getFullYear();
export const yearOptions = Array.from({ length: 7 }, (_, i) => {
  const year = (currentYear - 2 + i).toString();
  return { value: year, label: year };
});



export const monthOptions = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
].map(month=>({value :month, label:month}))


