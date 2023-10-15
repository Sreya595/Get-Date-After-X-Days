var addDays = require("date-fns/addDays");

const newDate = (noOfDays) => {
  const date = addDays(new Date(2020, 7, 22), noOfDays);
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
};

newDate(8);

module.exports = newDate;
