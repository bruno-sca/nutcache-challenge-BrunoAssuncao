export const maskCPF = (value) => {
  if (!value) {
    return value;
  }

  const nums = value.toString().replace(/[^\d]/g, '');

  if (nums.length <= 3) {
    return nums;
  }
  if (nums.length <= 6) {
    return `${nums.slice(0, 3)}.${nums.slice(3)}`;
  }
  if (nums.length <= 9) {
    return `${nums.slice(0, 3)}.${nums.slice(3, 6)}.${nums.slice(6)}`;
  } else {
    return `${nums.slice(0, 3)}.${nums.slice(3, 6)}.${nums.slice(
      6,
      9
    )}-${nums.slice(9, 11)}`;
  }
};
