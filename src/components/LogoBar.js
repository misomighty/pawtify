import React from 'react'
import styled from 'styled-components'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import Phone from '@material-ui/icons/Phone'
import { Grid } from '@material-ui/core'
import { ContactCard } from './ContactCard'
import { PrimaryButton } from './PrimaryButton'

const StyledGrid = styled(Grid)`
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
`

const Logo = styled.h1`
  color: #ffffff;
  font-size: 26px;
  font-weight: 800;
  font-family: 'Roboto', sans-serif;
`

const LogoBar = () => {
    return (
    <Grid
        container
        direction="row"
        alignContent="center"
        justify="center"
        spacing={9}
      >
      <Grid item md={1}><Logo>logoipsum</Logo></Grid>
      <Grid container item direction="row" alignItems="center" justify="flex-end" md={11}>
        <Grid item>
            <ContactCard icon={Phone} header="CALL US" subheader="(210) 373-6730" />
        </Grid>
        <Grid item>
            <ContactCard icon={AccessTimeIcon} header="HOURS" subheader="Mon-Fri 11am - 7:30pm" />
        </Grid>
        <Grid item>
            <PrimaryButton variant="contained" color="secondary" style={{ width: '211px'}}>
                Contact Us
            </PrimaryButton>
        </Grid>
      </Grid>
      </Grid>
    )
}

export { LogoBar }
