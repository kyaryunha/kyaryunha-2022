import { useContext } from 'react';
import { IconGithub, IconTwitter } from '../../icons/sns.icon';
import { HAMBURGER, HamburgerContext } from '../../contexts/Hamburger.context';
import MenuItem from './MenuItem';
import { IconHamburger } from '../../icons/util.icon';
import {
  StyledMenuItemsHamburger,
  StyledMenuItemsNoHamburger,
  StyledHamburger,
  StyledMenuOpen, StyledMenuTitle,
} from '../../styles/Layout.style';

function Menu() {
  const menuItems = [
    {
      content: 'CV',
      url: '/',
    },
    {
      content: 'Project',
      url: '/projects',
    },
    {
      content: 'Skill',
      url: '/skills',
    },
    {
      content: <IconGithub />,
      url: 'https://github.com/kyaryunha',
      target: '_blank',
    },
    {
      content: <IconTwitter />,
      url: 'https://twitter.com/shinhyun_main',
      target: '_blank',
    },
  ];
  const { menuOpen, dispatch } = useContext(HamburgerContext);
  const onClickHamburger = () => {
    dispatch({
      type: HAMBURGER.CLICK_MENU,
    });
  };
  const closeHamburger = () => {
    dispatch({
      type: HAMBURGER.CLICK_OFF,
    });
  };
  return (
    <>
      <StyledMenuItemsNoHamburger>
        {
                menuItems.map((val, index) => (
                  <MenuItem
                    key={index}
                    contents={val}
                  />
                ))
            }
      </StyledMenuItemsNoHamburger>
      <StyledMenuItemsHamburger>
        <StyledHamburger>
          <IconHamburger onClick={onClickHamburger} />
        </StyledHamburger>
        {
                menuOpen && (
                <StyledMenuOpen onClick={closeHamburger}>
                  <StyledMenuTitle> Menu </StyledMenuTitle>
                    {
                        menuItems.map((val, index) => (
                          <MenuItem
                            key={index}
                            contents={val}
                          />
                        ))
                    }
                </StyledMenuOpen>
                )
            }
      </StyledMenuItemsHamburger>
    </>
  );
}
export default Menu;
