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
    margin-bottom: 25px;
    text-align: center;
`

const StyledSelect = styled(Select)`
    width: 35vw;
    color: #fff !important;
    margin-bottom: 25px;
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
            <PawtifyForm buttonLabel="Submit">
            <TextField id="filled-basic" label="First" variant="filled" className={classes.root} />
            <TextField id="filled-basic" label="Last" variant="filled" className={classes.root} />
            <TextField id="filled-basic" label="Email" variant="filled" className={classes.root} />
            <TextField id="filled-basic" label="Phone number" variant="filled" className={classes.root} />
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

      <FormControl variant="filled">
        <InputLabel id="demo-simple-select-outlined-label" style={{ color: '#fff'}}>Do you live with any children in your home?</InputLabel>
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

      <FormControl variant="filled">
        <InputLabel id="demo-simple-select-outlined-label" style={{ color: '#fff'}}>Do you live with any children in your home?</InputLabel>
        <StyledSelect
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="Age"
          style={{ color: '#fff' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'yes'}>Yes</MenuItem>
          <MenuItem value={'no'}>No</MenuItem>
        </StyledSelect>
      </FormControl>

      <FormControl variant="filled">
        <InputLabel id="demo-simple-select-outlined-label" style={{ color: '#fff'}}>Type of dwelling</InputLabel>
        <StyledSelect
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="Age"
          style={{ color: '#fff' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="house">House</MenuItem>
          <MenuItem value="condo">Condo</MenuItem>
          <MenuItem value="apartment">Apartment</MenuItem>
        </StyledSelect>
      </FormControl>

      <FormControl variant="filled">
        <InputLabel id="demo-simple-select-outlined-label" style={{ color: '#fff'}}>How long are you typically away from home?</InputLabel>
        <StyledSelect
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="hoursaway"
          style={{ color: '#fff' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="3">1 to 3 hours</MenuItem>
            <MenuItem value="5">3 to 5 hours</MenuItem>
            <MenuItem value="7">5 to 7 hours</MenuItem>
            <MenuItem value="8">8+ hours</MenuItem>
        </StyledSelect>
      </FormControl>

      <FormControl variant="filled">
        <InputLabel id="demo-simple-select-outlined-label" style={{ color: '#fff'}}>Where will the pet be when you’re not home?</InputLabel>
        <StyledSelect
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="whereWillPetLive"
          style={{ color: '#fff' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="indoor">Indoor</MenuItem>
            <MenuItem value="outdoor">Outdoor</MenuItem>
            <MenuItem value="garage">garage</MenuItem>
        </StyledSelect>
      </FormControl>
            </PawtifyForm>
        </QuizBody>
    )
}

export { Quiz }
