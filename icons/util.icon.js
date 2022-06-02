import styled from "@emotion/styled";
import {Menu} from "@emotion-icons/boxicons-regular/Menu";
import {Link} from "@emotion-icons/boxicons-regular/Link";
import {Buildings} from "@emotion-icons/boxicons-regular/Buildings";
import {Pencil} from "@emotion-icons/boxicons-regular/Pencil";
import {PeopleFill} from "@emotion-icons/bootstrap/PeopleFill";
import { kyaColor } from "../styles/Layout.style";
export const IconHamburger = styled(Menu)`
    color: white;
`;

export const IconLink = styled(Link)`
    color: kyaColor.yellow;
    height: 15px;
`;

export const IconBuilding = styled(Buildings)`
  width: 20px;
  color: white;
  background-color: rgba(0, 0, 255, 0.5);
  border-radius: 3px;
`;
export const IconPeopleFill = styled(PeopleFill)`
  width: 20px;
  color: white;
  background-color: rgba(0, 255, 0, 0.5);
  border-radius: 3px;
`;

export const IconPencil = styled(Pencil)`
  width: 20px;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 3px;
`;
export const IconSkill = ({type}) => {
    console.log(type)
    if(type==='company') return <IconBuilding />
    else if(type==='team') return <IconPeopleFill />
    else if(type==='personal') return <IconPencil />
}
