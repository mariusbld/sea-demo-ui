import React, { FC, useEffect, useState } from 'react';
import { PoweredBy } from '../sections/PoweredBy';
import Button from '@mui/material/Button';
import * as css from './RaffleRoute.module.pcss';
import Typography from '@mui/material/Typography';

export const RaffleRoute: FC = () => {
    const [counter, setCounter] = useState(0);
    const [winner, setWinner] = useState('');

    const pickWinner = async () => {
        const resp = await fetch('https://phoria-demo.herokuapp.com/pick-winner', {
            method: 'POST'
        });
        const respJson = await resp.json();
        if (respJson.winner) {
            setWinner(respJson.winner);
        }
    }

    useEffect(() => {
        setInterval(async () => {
            const resp = await fetch('https://phoria-demo.herokuapp.com/get-contestants');
            setCounter((await resp.json()).contestants.length); 
        }, 1000);
    }, [setCounter]);

    return (
        <div className={css.root}>
            <div className={css.main}>
                {counter}
            </div>
            {
                (winner === '') ? (
                    <div className={css.winnerButton}>
                        <Button variant="contained" size="large" onClick={() => pickWinner()}>Pick Winner</Button>
                    </div>
                ) : (
                    <Typography gutterBottom variant="h2" component="div" sx={{textAlign: "center"}}>Winner is {winner.substring(0, 4) + "..."}</Typography>
                )
            }
            <div className={css.footer}>
                <PoweredBy />
            </div>
        </div>
    );
};
