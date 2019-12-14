import React from 'react'
import StepBase from './StepBase'
import { Box, Typography, styled, Theme } from '@material-ui/core'
import { geti18nString } from '../../../utils/i18n'
import { Link } from 'react-router-dom'
import ActionButton from '../DashboardComponents/ActionButton'

const VerticalCenter = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 180,
})
const LinedBox = styled('div')(({ theme }: { theme: Theme }) => ({
    border: '1px solid #ddd',
    borderRadius: theme.shape.borderRadius,
    textAlign: 'start',
    width: '100%',
    padding: '1rem 1.25rem',
    display: 'flex',
    flexWrap: 'wrap',
    [theme.breakpoints.down('xs')]: {
        '& > *': { minWidth: '100%' },
        textAlign: 'center',
    },
    '&:not(:first-child)': {
        marginTop: theme.spacing(4),
    },
}))

export default function InitStep0() {
    const header = geti18nString('dashboard_init_header')

    const content = (
        <div style={{ width: '100%' }}>
            <LinedBox>
                <Box flex={1}>
                    <Typography variant="h6">{geti18nString('dashboard_new_user')}</Typography>
                    <Typography variant="body1">{geti18nString('dashboard_new_user_hint')}</Typography>
                </Box>
                <VerticalCenter>
                    <ActionButton variant="contained" color="primary" component={Link} to="1s">
                        {geti18nString('set_up')}
                    </ActionButton>
                </VerticalCenter>
            </LinedBox>
            <LinedBox>
                <Box flex={1}>
                    <Typography variant="h6">{geti18nString('dashboard_returning_user')}</Typography>
                    <Typography variant="body1">{geti18nString('dashboard_returning_user_hint')}</Typography>
                </Box>
                <VerticalCenter>
                    <ActionButton variant="outlined" component={Link} to="1r">
                        {geti18nString('restore')}
                    </ActionButton>
                </VerticalCenter>
            </LinedBox>
        </div>
    )
    return <StepBase subheader={header}>{content}</StepBase>
}