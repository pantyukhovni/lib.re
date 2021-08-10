import React from 'react';
import type { FC } from 'react';
import {
    TableRow,
    TableCell,
    makeStyles
} from '@material-ui/core';
import c from "../Table.module.css"

const styles = makeStyles(() => ({
    root: {
        '& > th': {
            textAlign: 'center'
        }
    }
}));

const THead: FC = ()=>{
    const classes = styles();
    return(
        <TableRow className={classes.root}>
            <TableCell>Название</TableCell>
            <TableCell>Автор</TableCell>
            <TableCell>Стоимость</TableCell>
            <TableCell>Дата выпуска</TableCell>
            <TableCell>Статус</TableCell>
            <TableCell>Действие</TableCell>
        </TableRow>
    )
}
export default THead;