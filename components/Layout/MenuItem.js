import Link from 'next/link';
import { useContext } from 'react';
import { HAMBURGER, HamburgerContext } from '../../contexts/Hamburger.context';
import { StyledMenuItem } from '../../styles/Layout.style';

function MenuItem({ contents }) {
  const { dispatch } = useContext(HamburgerContext);
  const onClick = () => {
    dispatch({
      type: HAMBURGER.CLICK_LINK,
    });
  };
  return (
    <Link href={contents.url}>
      <a target={contents.target ? contents.target : '_self'}>
        <StyledMenuItem onClick={() => onClick()}>
          {contents.content}
        </StyledMenuItem>
      </a>
    </Link>

  );
}
export default MenuItem;
