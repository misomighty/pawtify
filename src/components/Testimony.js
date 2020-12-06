import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    background: #ffffff;
    border-radius: 20px;
    padding: 45px;
    width: 224px;
    margin-left: 24px;
`

const Text = styled.p`
    margin-top: 0;
    margin-bottom: 18px;
`

const FlexRow = styled.div`
    display: flex;
    flex-flow: row nowrap;
    margin-top: 30px;
    align-items: center;
`

const Img = styled.img`
    border-radius: 100%;
    margin-right: 17px;
`

const Name = styled.h6`
    margin: 0;
    color: #F2726F;
    font-family: Roboto;
    font-weight: bold;
    font-size: 16px;
`

const Testimony = ({ img, name, children, style }) => {
    return (
        <Wrapper style={style}>
            <Text>{children}</Text>
            <FlexRow>
                <Img src={img} alt="Photo of smiling person" />
                <Name>{name}</Name>
            </FlexRow>
        </Wrapper>
    )
}

export { Testimony }
