import { createContext } from 'react';

export const MightyContext = createContext({
  dispatch: () => {},
});

export const MIGHTY = {
  CLICK_CARD: 'CLICK_CARD',
};
