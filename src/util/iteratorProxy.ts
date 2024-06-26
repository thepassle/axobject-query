function iteratorProxy<T>(this: Array<any>): Iterator<T> {
  const values = this;
  let index = 0;
  const iter = {
    "@@iterator": function (): Iterator<T> {
      return iter;
    },
    next: function (): IteratorResult<T> {
      if (index < values.length) {
        const value = values[index];
        index = index + 1;
        return { done: false, value };
      } else {
        return { done: true, value: undefined as any };
      }
    },
  };
  return iter;
}
export default iteratorProxy;
