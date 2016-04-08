export default function logger (store) {
  return next => action => {
    const result = next(action);
    return result;
  }
}
