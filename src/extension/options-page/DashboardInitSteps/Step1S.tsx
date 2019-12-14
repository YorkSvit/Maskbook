import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import StepBase from './StepBase'
import { TextField, makeStyles, createStyles } from '@material-ui/core'
import { geti18nString } from '../../../utils/i18n'
import ActionButton from '../DashboardComponents/ActionButton'
import Services from '../../service'

const header = geti18nString('dashboard_init_step_1')
const subheader = geti18nString('dashboard_init_step_1_hint')

const useStyles = makeStyles(theme =>
    createStyles({
        input: {
            width: '100%',
            maxWidth: '320px',
        },
        container: {
            alignSelf: 'stretch',
            textAlign: 'center',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
        },
    }),
)

export default function InitStep1S() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const classes = useStyles()
    const history = useHistory()

    const createPersonaAndNext = async () => {
        const persona = await Services.Identity.createPersonaByMnemonic(name, password)
        history.replace(`2s?identifier=${encodeURIComponent(persona.toText())}`)
    }

    const actions = (
        <>
            <ActionButton variant="outlined" color="default" component={Link} to="start">
                {geti18nString('back')}
            </ActionButton>
            <ActionButton variant="contained" color="primary" onClick={createPersonaAndNext} component={'a'}>
                {geti18nString('next')}
            </ActionButton>
        </>
    )
    const content = (
        <div className={classes.container}>
            <TextField
                autoFocus
                required
                className={classes.input}
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                value={name}
                onChange={e => setName(e.target.value)}
                label="Name"
                helperText=" "></TextField>
            <TextField
                required
                className={classes.input}
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                value={password}
                placeholder={geti18nString('dashboard_password_hint')}
                type="password"
                onChange={e => setPassword(e.target.value)}
                label="Password"
                helperText={geti18nString('dashboard_password_helper_text')}></TextField>
        </div>
    )

    return (
        <StepBase header={header} subheader={subheader} actions={actions}>
            {content}
        </StepBase>
    )
}