import React, { FC } from 'react';
import { usePayment } from '../../hooks/usePayment';
import { BackButton } from '../buttons/BackButton';
import { TransactionsLink } from '../buttons/TransactionsLink';
import { PoweredBy } from '../sections/PoweredBy';
import { Progress } from '../sections/Progress';
import * as css from './WinnerRoute.module.pcss';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export const WinnerRoute: FC = () => {
    const { reset } = usePayment();

    window.showConfetti();

    return (
        <div className={css.root}>
            <div className={css.header}>
                <BackButton onClick={reset}>Start Over</BackButton>
                <TransactionsLink />
            </div>
            <div className={css.main}>
                <Container>
                    <Typography variant="h2" component="div" sx={{textAlign: "center"}}>
                        🎉 Congratulations 🎉
                    </Typography>
                    <Typography gutterBottom variant="h2" component="div" sx={{textAlign: "center"}}>
                        You won 0.1 SOL ($9)!
                    </Typography>
                </Container>
            </div>
            <div className={css.footer}>
                <PoweredBy />
            </div>
        </div>
    );
};
