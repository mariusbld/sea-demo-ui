import React, { FC } from 'react';
import { usePayment } from '../../hooks/usePayment';
import { BackButton } from '../buttons/BackButton';
import { TransactionsLink } from '../buttons/TransactionsLink';
import { PoweredBy } from '../sections/PoweredBy';
import { Progress } from '../sections/Progress';
import * as css from './TryAgainRoute.module.pcss';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export const TryAgainRoute: FC = () => {
    const { reset } = usePayment();

    return (
        <div className={css.root}>
            <div className={css.header}>
                <BackButton onClick={reset}>Start Over</BackButton>
                <TransactionsLink />
            </div>
            <div className={css.main}>
                <Container>
                    <Typography variant="h2" component="div" sx={{textAlign: "center"}}>
                        🐶 You did not win the raffle 🐶
                    </Typography>
                    <Typography gutterBottom variant="h2" component="div" sx={{textAlign: "center"}}>
                        Better luck next time!
                    </Typography>
                </Container>
            </div>
            <div className={css.footer}>
                <PoweredBy />
            </div>
        </div>
    );
};
