import React from 'react';
import type { FC } from 'react';
import Title from "./title/Title";
import TableContainer from "./table/TableContainer";
import { Box } from "@material-ui/core";

const Content: FC = ()=>{
    return(
        <Box>
            <Box>Хранилище книг</Box>
            <TableContainer />
        </Box>
    )
}

export default Content;