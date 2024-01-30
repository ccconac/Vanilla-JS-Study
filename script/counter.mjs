export const counter = (count, event) => {
  switch (event.target.id) {
    case 'decrease':
      count -= 1;
      break;
    case 'reset':
      count = 0;
      break;
    case 'increase':
      count += 1;
      break;
    default:
      return count;
  }

  return count;
};
