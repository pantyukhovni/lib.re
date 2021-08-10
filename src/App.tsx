import React from 'react';
import type { FC } from 'react';
import {
    Card,
    makeStyles,
    Box
} from '@material-ui/core';
import Content from "./components/mainContant/Contant";
import Header from 'src/components/header/Header';

const styles = makeStyles(() => ({
    root: {
        maxWidth: 1200,
        margin: '0 auto',
        padding: 20
    }
}));

const App: FC = () => {
    const classes = styles();
    return (
        <Box pt={6}>
            <Card className={classes.root}>
                <Header/>
                <Content/>
            </Card>
        </Box>
    );
}

export default App;
