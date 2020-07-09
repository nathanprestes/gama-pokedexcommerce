import { createStore } from 'redux';
import index from './ducks';

const store = createStore(
  index,
);

export default store;
