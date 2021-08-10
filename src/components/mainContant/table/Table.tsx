import React, { useMemo  } from 'react';
import type { FC } from 'react';
import type { RootState } from 'src/redux/reducers/rootReducer';
import { useSelector } from 'react-redux';
import THead from "./THead/THead";
import TRow from "./TRow/TRow";
import c from "./Table.module.css"
import ButtonAct from "../../Button/ButtonAct";
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    makeStyles
 } from '@material-ui/core';
import { deleteBook } from 'src/redux/reducers/bookReducer';

const styles = makeStyles(() => ({
    root: {
        '& > td': {
            textAlign: 'center'
        }
    }
}));

const TableComponent: FC = () =>{
    const { books } = useSelector(({ books }: RootState) => books);
    const classes = styles();
    const renderBooks: React.ReactNode = useMemo(
        () => books.map((book) => (
            <TableRow className={classes.root}>
                <TableCell>{book.Title}</TableCell>
                <TableCell>{book.Author}</TableCell>
                <TableCell>{book.Price} &#8381;</TableCell>
                <TableCell>{book.Published}</TableCell>
                <TableCell>{!book.inStock ? "Нет в наличии" : "Есть в наличии"}</TableCell>
                <TableCell className={c.act}>
                    <ButtonAct type="edit" bookId={book.id} />
                    <ButtonAct type="del"
                                del={deleteBook}
                                bookId={book.id}
                    />
                </TableCell>
            </TableRow>
            )),[books]
    );
    return(
        <Table className={c.wrapper}>
            <TableHead>
                <THead />
            </TableHead>
            <TableBody>
            {renderBooks}
            </TableBody>
        </Table>
    )
}


export default TableComponent;