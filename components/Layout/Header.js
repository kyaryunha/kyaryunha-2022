import {StyledHeader, StyledHeaderInner, StyledHeaderTitle, StyledMenuItem} from '../../styles/Layout.style';
import {createContext, useMemo, useReducer} from "react";
import Menu from "./Menu";
import Link from "next/link";
import {HAMBURGER, HamburgerContext} from "../../contexts/Hamburger.context";

const initialState = {
    menuOpen: false,
}

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
        <StyledHeaderInner>
            <div>
                <Link href='/' >
                    <a target='_self'>
                        <StyledHeaderTitle>S.Hyun</StyledHeaderTitle>
                        {/*<img src='/logo.png' alt='logo'/>*/}
                    </a>
                </Link>
            </div>
            <HamburgerContext.Provider value={value}>
                <Menu />
            </HamburgerContext.Provider>
        </StyledHeaderInner>
    </StyledHeader>
};


export default Header;
