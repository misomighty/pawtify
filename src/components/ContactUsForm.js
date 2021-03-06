import React from 'react'
import styled from 'styled-components'
import { TextField } from '@material-ui/core'
import { PrimaryButton } from './PrimaryButton'

const FormContainer = styled.div`
    background: #5D62B5;
    border-radius: 40px;
    top: 136px;
    left: 0;
    width: 34%;
    margin-left: 80px;
`

const ContactUsFormContainer = styled(FormContainer)`
    position: absolute;
`

const FormTitle = styled.h1`
    font-family: Roboto;
    font-style: normal;
    font-weight: 900;
    font-size: 36px;
    line-height: 42px;
    text-align: center;
    color: #FFFFFF;
    margin-top: 76px;
    margin-bottom: 0;
`

const Form = styled.form`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
`

const InputWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
`

const Row = styled.div`
    width: 100%;
    text-align:center;
`

const Input = styled.input`
    border-radius: 10px;
    padding: 10px;
    border: 2px solid #fff;
    color: #fff;
    background: transparent;
    margin-top: 20px; 
    margin-right: 5px;
    margin-left: 5px;
    min-width: 190px;
    &::placeholder {
        color: #fff;
    }
`

const Textarea = styled.textarea`
    color: #fff;
    border: 2px solid #fff;
    border-radius: 10px;
    background: transparent;
    margin-top: 22px;
    margin-left: 5px;
    margin-right: 5px;
    width: 66%;
    height: 175px;
    padding: 10px;
    font-family: Roboto;
    font-size: 14px;
    min-width: 190px;
    &::placeholder {
        color: #fff;
    }
`

const PawtifyForm = ({ title, children, buttonLabel }) => {
    return (
        <FormContainer>
            <form noValidate autoComplete="off">
                    {children}
            <PrimaryButton>{buttonLabel}</PrimaryButton>
            </form>
        </FormContainer>
    )
}

const ContactUsForm = () => {
    return (
        <div style={{ position: 'relative' }}>        
            <ContactUsFormContainer>
                <FormTitle>Contact Us</FormTitle>
                <Form noValidate autoComplete="off">
                <InputWrapper>
                    <Row>
                        <Input placeholder="Name" />
                        <Input placeholder="Email" />
                    </Row>
                    <Row>
                        <Input placeholder="Phone Number" />
                        <Input placeholder="Services" />
                    </Row>
                        <Textarea placeholder="Tell us about your pets" />
                </InputWrapper>
                <PrimaryButton>Schedule an appointment</PrimaryButton>
                </Form>
            </ContactUsFormContainer>
        </div>

    )
}

export { ContactUsForm, PawtifyForm, Input }
