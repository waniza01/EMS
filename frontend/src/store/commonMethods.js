export const addItem = (items, payload) => {
  const existingItemIndex = items.findIndex((item) => item.id === payload.id);

  if (existingItemIndex === -1) {
    const { name, cost, image } = payload;
    const updateItem = {
      id: "" + Math.floor(Math.random() * 9999),
      name,
      cost,
      image,
    };

    items.push(updateItem);
  } else {
    items[existingItemIndex] = payload;
  }
};

export const removeItem = (items, id) => {
  const existingItemIndex = items.findIndex((item) => item.id === id);

  items.splice(existingItemIndex, 1);
};

export const setItem = (items, id) => {
  const existingItem = items.find((item) => item.id === id);
  return existingItem;
};
