import { jsx, css } from '@emotion/react'

export const BREAKPOINTS = [1200];

export const MediaQueries = BREAKPOINTS.map(
    bp => `@media (min-width: ${bp}px)`
);
