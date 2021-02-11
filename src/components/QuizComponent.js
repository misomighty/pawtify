import React from 'react'
import styled from 'styled-components'
import { animated, useSpring } from 'react-spring'
import { PrimaryButton } from './PrimaryButton'
import { TransitionForm } from './TransitionForm'

const Wrapper = styled.div`
  max-width: 700px;
  text-align: center;
  margin: 100px auto 0 auto;
  background: #5d62b5;
  border-radius: 40px;
  padding: 20px 40px 40px 40px;
`

const FormTitle = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 20px;
`

const FormLabel = styled.label`
  border-radius: 10px;
  color: #fff;
  background: transparent;
  float: none;
  clear: both;
  display: block;
  width: 80%;
  height: 100%;
  text-align: center;
  margin: 0 0 10px 10%;
  &::placeholder {
    color: #fff;
  }
`

const SelectOption = styled.select`
  padding: 5px;
  color: #fff;
  background: transparent;
  border: 2px solid #fff;
  border-radius: 10px;
  width: 80%;
  height: 35px;
  font-size: 14px;
  margin-bottom: 20px;

  option {
    color: #fff;
    background: #5d62b5;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
  &::placeholder {
    color: #fff;
  }
`

const Page1 = ({ style }) => {
  return (
    <div>
      <FormLabel component="legend" style={{ marginTop: '0px' }}>
        Number of People in Your Home
      </FormLabel>
      <SelectOption aria-label="household" name="household">
        <option value="2" label="1 to 2 persons" />
        <option value="4" label="3 to 4 persons" />
        <option value="5" label="5+ persons" />
      </SelectOption>
    </div>
  )
}

const Page2 = ({ style }) => {
  return (
    <div>
      <FormLabel component="legend">Do you live with any children in your home?</FormLabel>
      <SelectOption aria-label="haschildren" name="hasChildren">
          <option value="yes" label="Yes" />
          <option value="4" label="No" />
      </SelectOption>
    </div>
  )
}

const Page3 = ({ style }) => {
  return (
    <div>
      <FormLabel component="legend">Do you live with any children in your home?</FormLabel>
      <SelectOption aria-label="haschildren" name="hasChildren">
          <option value="yes" label="Yes" />
          <option value="4" label="No" />
      </SelectOption>
    </div>
  )
}

const Page4 = ({ style }) => {
  return (
    <div>
      <FormLabel component="legend">ETC PUT MORE QUESTIONS HERE...</FormLabel>
    </div>
  )
}

const QuizComponent = () => {
  const [clicked, setClicked] = React.useState(false)
  const springProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  })
  return (
    <Wrapper>
      {/* <FormTitle>Find the Perfect Pet for You</FormTitle>

            <FormLabel component="legend" style={{ marginTop:"0px" }}>Number of People in Your Home</FormLabel>
            <SelectOption aria-label="household" name="household">
                <option value="2" label="1 to 2 persons" />
                <option value="4" label="3 to 4 persons" />
                <option value="5" label="5+ persons" />
            </SelectOption>

            <FormLabel component="legend">Do you live with any children in your home?</FormLabel>
            <SelectOption aria-label="haschildren" name="hasChildren">
                <option value="yes" label="Yes" />
                <option value="4" label="No" />
            </SelectOption>

            <FormLabel component="legend">Type of Dwelling</FormLabel>
            <SelectOption aria-label="housing" name="housing">
                <option value="house" label="House" />
                <option value="condo" label="Condo" />
                <option value="apartment" label="Apartment" />
            </SelectOption>

            <FormLabel component="legend">
                How many hours during the working days will you typically be away from home?
            </FormLabel>
            <SelectOption aria-label="hoursaway" name="hoursAway">
                <option value="3" label="1 to 3 hours" />
                <option value="5" label="3 to 5 hours" />
                <option value="7" label="5 to 7 hours" />
                <option value="8" label="8+ hours" />
            </SelectOption>

            <FormLabel component="legend">Where will the pet be when you’re not home?</FormLabel>
            <SelectOption aria-label="whereWillPetLive" name="whereWillPetLive">
                <option value="indoor" label="Indoor" />
                <option value="outdoor" label="Outdoor" />
                <option value="garage" label="Garage" />
            </SelectOption>

            <PrimaryButton>Submit Answers</PrimaryButton> */}

      <TransitionForm />
    </Wrapper>
  )
}

export { QuizComponent, Page1, Page2, Page3, Page4, FormTitle }
