import {useStores} from "../../stores";
import {StyledButton, StyledCardBoardController, StyledInformation} from "../../styles/mighty.style";
import {observer} from "mobx-react";

const CardBoardController = observer(() => {
    const {cardBoardStore} = useStores();
    return (
        <StyledCardBoardController>
            <StyledInformation>Size</StyledInformation>
            <StyledButton onClick={() => cardBoardStore.plus()} width='40px'>+</StyledButton>
            <StyledButton onClick={() => cardBoardStore.init()}>1.0</StyledButton>
            <StyledButton onClick={() => cardBoardStore.minus()} width='40px'>-</StyledButton>
        </StyledCardBoardController>
    );
});
export default CardBoardController;
