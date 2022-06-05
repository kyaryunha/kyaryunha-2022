import { createContext } from 'react';

export const HamburgerContext = createContext({
  dispatch: () => {},
});

export const HAMBURGER = {
  CLICK_MENU: 'CLICK_MENU',
  CLICK_OFF: 'CLICK_OFF',
};
