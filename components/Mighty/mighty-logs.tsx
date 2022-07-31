import {useStores} from "../../stores";
import {observer} from "mobx-react";
import {logProp} from "../../stores/card-log.store";

const GirudaCounter = observer(() => {
    const {cardLogStore} = useStores();
    return (
        <>
            <br />
            Logs: (If you click on something it will be logged here) <br />
            {
                cardLogStore.logs.map((log:logProp) => <>- {log.op} {log.content} <br/> </>).reverse()
            }
        </>
    );
});
export default GirudaCounter;
