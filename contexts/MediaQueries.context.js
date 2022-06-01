import {createContext} from "react";

export const MediaQueriesContext = createContext({
    dispatch: () => {},
});

export const MEDIA_QUERIES = {
    WINDOW_RESIZE: 'WINDOW_RESIZE',
};
