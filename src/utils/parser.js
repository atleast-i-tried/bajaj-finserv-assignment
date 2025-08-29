export function parseData(data) {
  let odd_numbers = [];
  let even_numbers = [];
  let alphabets = [];
  let special_characters = [];
  let sum = 0;

  data.forEach((item) => {
    if (!isNaN(item)) {
      let num = parseInt(item, 10);
      if (num % 2 === 0) {
        even_numbers.push(item.toString());
      } else {
        odd_numbers.push(item.toString());
      }
      sum += num;
    } else if (/^[a-zA-Z]+$/.test(item)) {
      alphabets.push(item.toUpperCase());
    } else {
      special_characters.push(item);
    }
  });

  return { odd_numbers, even_numbers, alphabets, special_characters, sum };
}
