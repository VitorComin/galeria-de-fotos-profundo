export const simulateSimpleComponentWork = () => {
  let total = 0;
  for (let i = 0; i < 10000; i++) {
    total += i;
  }
  return total;
};
