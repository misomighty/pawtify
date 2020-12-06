import React from 'react'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import { PawtifyForm } from './ContactUsForm'

const QuizBody = styled.div`
    background: #5D62B5;
    border-radius: 40px;
    padding: 35px;
    width: 50vw;
    max-width: 550px;
`

const XBTN = styled.button`
    background: none;
    border: none;
    color: #ffffff;
    align-self: flex-end;
`

const QuizTitle = styled.h1`
    color: #ffffff;
    font-family: Roboto;
    font-weight: 900;
    font-size: 36px;
`

const StyledSelect = styled(Select)`
    width: 350px;
    color: #fff !important;
`

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        color: '#fff',
      },
      '& label.Mui-focused': {
        fontSize: '20px',
      },
      '&:last-of-type': {
          marginBottom: '10px;'
      }
    },
  }));

const Quiz = () => {
    const classes = useStyles()
    return(
        <QuizBody>
            <XBTN><CloseIcon /></XBTN>
            <QuizTitle>Pet Profile</QuizTitle>
            <PawtifyForm>
            <TextField id="filled-basic" label="Name" variant="filled" color="secondary" className={classes.root} />
            <TextField id="filled-basic" label="Email" variant="filled" color="secondary" className={classes.root} />
            <TextField id="filled-basic" label="Phone number" variant="filled" color="secondary" className={classes.root} />
        <FormControl variant="filled">
        <InputLabel id="demo-simple-select-outlined-label" style={{ color: '#fff'}}>Number of people in your home</InputLabel>
        <StyledSelect
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="Age"
          style={{ color: '#fff' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={2}>1 to 2 persons</MenuItem>
          <MenuItem value={4}>3 to 4 persons</MenuItem>
          <MenuItem value={5}>5+ persons</MenuItem>
        </StyledSelect>
      </FormControl>
            <FormLabel component="legend">Number of people in your home</FormLabel>
                <RadioGroup aria-label="household" name="household">
                    <FormControlLabel value="2" control={<Radio />} label="1 to 2 persons" />
                    <FormControlLabel value="4" control={<Radio />} label="3 to 4 persons" />
                    <FormControlLabel value="5" control={<Radio />} label="5+ persons" />
                </RadioGroup>
                <FormLabel component="legend">Do you live with any children in your home?</FormLabel>
                <RadioGroup aria-label="haschildren" name="hasChildren">
                    <FormControlLabel value="yes" control={<Radio />} label="yes" />
                    <FormControlLabel value="4" control={<Radio />} label="no" />
                </RadioGroup>
                <FormLabel component="legend">Type of dwelling</FormLabel>
                <RadioGroup aria-label="housing" name="housing">
                    <FormControlLabel value="house" control={<Radio />} label="House" />
                    <FormControlLabel value="condo" control={<Radio />} label="Condo" />
                    <FormControlLabel value="apartment" control={<Radio />} label="Apartment" />
                </RadioGroup>
                <FormLabel component="legend">How many hours during the working days will you typically be away from home?
                </FormLabel>
                <RadioGroup aria-label="hoursaway" name="hoursAway">
                    <FormControlLabel value="3" control={<Radio />} label="1 to 3 hours" />
                    <FormControlLabel value="5" control={<Radio />} label="3 to 5 hours" />
                    <FormControlLabel value="7" control={<Radio />} label="5 to 7 hours" />
                    <FormControlLabel value="8" control={<Radio />} label="8+ hours" />
                </RadioGroup>
                <FormLabel component="legend">Where will the pet be when you’re not home?</FormLabel>
                <RadioGroup aria-label="whereWillPetLive" name="whereWillPetLive">
                    <FormControlLabel value="indoor" control={<Radio />} label="Indoor" />
                    <FormControlLabel value="outdoor" control={<Radio />} label="Outdoor" />
                    <FormControlLabel value="garage" control={<Radio />} label="Garage" />
                </RadioGroup>
            </PawtifyForm>
        </QuizBody>
    )
}

export { Quiz }
