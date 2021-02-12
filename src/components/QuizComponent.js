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
    <>
      <div>
        <FormLabel component="legend" style={{ marginTop: '0px' }}>
          Type of dwelling
        </FormLabel>
        <SelectOption aria-label="dwelling" name="dwelling">
          <option value="house" label="House" />
          <option value="condo" label="Condo / Townhome" />
          <option value="apartment" label="Apartment" />
        </SelectOption>
      </div>
      <div>
        <FormLabel component="legend" style={{ marginTop: '0px' }}>
          Where will the pet be when you’re not home?
        </FormLabel>
        <SelectOption aria-label="notHome" name="notHome">
          <option value="indoors" label="Indoors" />
          <option value="outdoors" label="Outdoors" />
          <option value="garage" label="Garage" />
        </SelectOption>
      </div>
    </>
  )
}

const Page2 = ({ style }) => {
  return (
    <>
      <div>
        <FormLabel component="legend" style={{ marginTop: '0px' }}>
          Do you own a pet now?
        </FormLabel>
        <SelectOption aria-label="ownPet" name="ownPet">
          <option value="yes" label="Yes" />
          <option value="no" label="No" />
        </SelectOption>
      </div>
      <div>
        <FormLabel component="legend" style={{ marginTop: '0px' }}>
          Are you looking for a playful/active pet or a laid back lounge animal?
        </FormLabel>
        <SelectOption aria-label="activePet" name="activePet">
          <option
            value="yes"
            label="I want a playful and active pet because I have an active lifestyle."
          />
          <option
            value="no"
            label="I want a laid back pet who enjoys lounging because I like to chill a lot. "
          />
        </SelectOption>
      </div>
    </>
  )
}

const Page3 = ({ style }) => {
  return (
    <>
      <div>
        <FormLabel component="legend" style={{ marginTop: '0px' }}>
          Do you need a kid-friendly pet?
        </FormLabel>
        <SelectOption aria-label="kidFriendly" name="kidFriendly">
          <option value="yes" label="Yes" />
          <option value="no" label="No" />
        </SelectOption>
      </div>
      <div>
        <FormLabel component="legend" style={{ marginTop: '0px' }}>
          How many hours does your pet need to be able to tolerate being alone per most days?
        </FormLabel>
        <SelectOption aria-label="hoursAlone" name="hoursAlone">
          <option value="0" label="2 hours or less" />
          <option value="2" label="2 to 4 hours" />
          <option value="4" label="4 to 8 hours" />
          <option value="8" label="8 to 10 hours" />
          <option value="12" label="12+ hours" />
        </SelectOption>
      </div>
    </>
  )
}

const Page4 = ({ style }) => {
  return (
    <>
      <div>
        <FormLabel component="legend" style={{ marginTop: '0px' }}>
          Are you looking for a “lap”-animal or quiet companion?
        </FormLabel>
        <SelectOption aria-label="lapPet" name="lapPet">
          <option value="yes" label="I want my pet to enjoy cuddling." />
          <option value="no" label="I don’t mind if my pet needs it’s space sometimes." />
        </SelectOption>
      </div>
      <div>
        <FormLabel component="legend" style={{ marginTop: '0px' }}>
          Are you okay with adopting a pet who has allergies and needs medication?
        </FormLabel>
        <SelectOption aria-label="medication" name="medication">
          <option value="yes" label="yes" />
          <option value="no" label="no" />
        </SelectOption>
      </div>
    </>
  )
}

const Page5 = ({ style }) => {
  return (
    <>
      <div>
        <FormLabel component="legend" style={{ marginTop: '0px' }}>
          Are you okay with adopting a pet who has pre-existing medical conditions and needs
          medication?
        </FormLabel>
        <SelectOption aria-label="preexisting" name="preexisting">
          <option value="yes" label="yes" />
          <option value="no" label="no" />
        </SelectOption>
      </div>
      <div>
        <FormLabel component="legend" style={{ marginTop: '0px' }}>
          Are you okay with a pet who has medical disabilities and needs special attention?
        </FormLabel>
        <SelectOption aria-label="disabilities" name="disabilities">
          <option value="yes" label="yes" />
          <option value="no" label="no" />
        </SelectOption>
      </div>
    </>
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
      <TransitionForm />
    </Wrapper>
  )
}

export { QuizComponent, Page1, Page2, Page3, Page4, Page5, FormTitle }
