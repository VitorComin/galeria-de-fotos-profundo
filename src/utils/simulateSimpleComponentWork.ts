export const simulateSimpleComponentWork = () => {
  let total = 0;
  for (let i = 0; i < 100000000; i++) {
    total += i;
  }
  return total;
};
