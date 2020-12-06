import React from 'react'
import styled from 'styled-components'
import { PrimaryButton } from './PrimaryButton'

const Wrapper = styled.div`
    background: #5D62B5;
    border-radius: 20px;
    padding: 40px 70px;
    width: 65%;
    position: absolute;
    top: 34em;
    left: 9em;
`

const Content = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
`

const Text = styled.h3`
    margin: 0;
    font-family: Roboto;
    font-weight: 900;
    font-size: 24px;
    line-height: 30px;
    color: #ffffff;
    width: 65%;
`

const CtaBanner = ({ children }) => {
    return(
        <Wrapper>
            <Content>
                <Text>
                    {children}
                </Text>
                <PrimaryButton>Contact Us</PrimaryButton>
            </Content>
        </Wrapper>
    )
}

export { CtaBanner }
