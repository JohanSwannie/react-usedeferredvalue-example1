import React, { useMemo, useDeferredValue } from "react";

const List = ({ inputData }) => {
  const deferredInput = useDeferredValue(inputData);
  const INPUT_SIZE = 15000;

  const list = useMemo(() => {
    const items = [];
    for (let i = 0; i < INPUT_SIZE; i++) {
      items.push(<li key={i}>{deferredInput}</li>);
    }
    return items;
  }, [deferredInput]);
  return list;
};

export default List;
