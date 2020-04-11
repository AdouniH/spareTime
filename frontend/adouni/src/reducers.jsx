
export const loginReducer = (state, action) => {
    switch (action.type) {
        case 'connect':
            localStorage.setItem('token', action.key);
            return action.key;
        case 'disconnect':
            localStorage.removeItem('token');
            return false;
        default: throw new Error('Unexpected action');
  }
};
