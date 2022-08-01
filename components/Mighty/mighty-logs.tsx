import {useStores} from "../../stores";
import {observer} from "mobx-react";
import {logProp} from "../../stores/card-log.store";
import {StyledButton} from "../../styles/mighty.style";

const GirudaCounter = observer(() => {
    const {cardLogStore} = useStores();
    return (
        <>
            <br />
            Logs: (If you click on something it will be logged here) <br />
            {
                cardLogStore.logs.map((log:logProp, idx) =>
                    <div key={log.id}>
                        {log.createdAt.toString().slice(15, 24)} - {log.op} {log.content}
                        {log.content !== 'init' && <StyledButton padding="2px" margin="2px" onClick={() => cardLogStore.rollback(idx)}>rollback</StyledButton>}
                        <br/>
                    </div>
                ).reverse()
            }
        </>
    );
});
export default GirudaCounter;
