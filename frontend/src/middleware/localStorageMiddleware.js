const localStorageMiddleware = (store) => (next) => (action) => {
  console.log('Middleware triggered:', action.type);

  const result = next(action); // Pass action to the next middleware or reducer
  const state = store.getState(); // Get the updated state after the action

  // Save cart state to localStorage if the action affects the cart
  if (action.type.startsWith('cart/')) {
    try {
      localStorage.setItem('cart', JSON.stringify(state.cart));
    } catch (error) {
      console.error('Failed to save cart to localStorage:', error);
    }
  }

  return result; // Return the result of `next(action)`
};

export default localStorageMiddleware;
