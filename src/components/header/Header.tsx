import React, { useState, useEffect } from "react"
import type { FC } from 'react';
import c from "./Header.module.css"
import {
    Box,
    Button,
    Typography
} from '@material-ui/core';
import Modal from "../Modal/Modal";
import THead from "../mainContant/table/THead/THead";
import NewBook from "../Modal/modalForm/modulForm";



const Header: FC = (props)=>{

    const [modaleActive, setModaleActive] = useState<boolean>(false)

    const openModal = () => {
        setModaleActive(true);
    };

    return (
        <Box className={c.wrapper}>
            <Box>
                <Typography variant="h5">Библиотека книг</Typography>
            </Box>
            <Box>
                <Button
                    onClick={openModal}
                    variant="outlined"
                >
                    Добавить новую книгу
                </Button>
            </Box>
            {/* <Modal active={modaleActive} setActive={setModaleActive}>
                <NewBook setActive={setModaleActive}/>
            </Modal> */}
        </Box>
    )
}
export default Header;