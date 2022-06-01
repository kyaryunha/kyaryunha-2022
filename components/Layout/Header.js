import { StyledHeader } from '../../styles/Layout.style';
import {createContext, useMemo, useReducer} from "react";
import Menu from "./Menu";

export const HamburgerContext = createContext({
    dispatch: () => {},
});

const initialState = {
    menuOpen: false,
}
export const HAMBURGER = {
    CLICK_MENU: 'CLICK_MENU',
    CLICK_OFF: 'CLICK_OFF',
};

const reducer = (state, action) => {
    switch (action.type) {
        case HAMBURGER.CLICK_MENU:
            return {
                ...state,
                menuOpen: !state.menuOpen
            }
        case HAMBURGER.CLICK_OFF:
            return {
                ...state,
                menuOpen: false,
            }
        default:
            return state;
    }
}

const Header = ({headerInterval}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { menuOpen } = state;
    const value = useMemo(() => ({
        menuOpen, dispatch
    }),[menuOpen]);
    return <StyledHeader headerInterval={headerInterval}>
        <div>
            <img src='/logo.png' alt='logo'/>
        </div>
        <>
            <HamburgerContext.Provider value={value}>
                <Menu />
            </HamburgerContext.Provider>
        </>
    </StyledHeader>
};


export default Header;
