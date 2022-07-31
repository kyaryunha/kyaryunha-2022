import {createContext, useContext} from "react";
import { MightyStore } from "./mighty.store";
import {CardBoardStore} from "./card-board.store";
import {GirudaStore} from "./giruda,store";

export const rootStoreContext = createContext({
    cardBoardStore: new CardBoardStore(),
    girudaStore: new GirudaStore(),
    mightyStore: new MightyStore(),
});

export const useStores = () => useContext(rootStoreContext);
