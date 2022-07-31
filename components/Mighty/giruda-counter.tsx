import {useStores} from "../../stores";
import {observer} from "mobx-react";
import {StyledButton, StyledGirudaCounter, StyledInformation} from "../../styles/mighty.style";

const GirudaCounter = observer(() => {
    const {girudaStore} = useStores();
    const girudaArr = [5, 4, 3, 2, 1];
    return (
        <StyledGirudaCounter>
            <StyledInformation>
                {girudaStore.giruda}
            </StyledInformation>
            {
                girudaArr.map((num) => <StyledButton key={`giruda-${num}`} onClick={() => girudaStore.girudaCheck(num)} width='40px'>{num}</StyledButton>)
            }
        </StyledGirudaCounter>
    );
});
export default GirudaCounter;
