const checkEmpty = (data) => {
  if (!data) return "Required feild is empty";
  if (data.length <= 0) return "Required feild is empty";
  return false;
};

const checkPattern = (data, pattern, msg) => {
  if (checkEmpty(data)) return checkEmpty(data);
  if (!pattern.test(data)) return msg;
  return false;
};

const checkMin = (min, max) => {
  if (checkEmpty(min)) return checkEmpty(min);
  if (max && Number(min) >= Number(max)) return "Should be less than maximum";
  return false;
};

const checkMax = (min, max) => {
  if (checkEmpty(max)) return checkEmpty(max);
  if (min && Number(min) >= Number(max)) return "Should be more than minimum";
  return false;
};

export { checkEmpty, checkPattern, checkMin, checkMax };
