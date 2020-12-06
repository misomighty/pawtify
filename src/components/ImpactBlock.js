import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    margin-right: 70px;
`

const FlexWrapper = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
`

const Icon = styled.img`
    margin-right: 12px;
    height: 59px;
`

const Title = styled.h1`
    margin: 0;
    color: #ffffff;
`

const Subtitle = styled.h4`
    margin: 0;
    color: #5D62B5;
`

const ImpactBlock = ({icon, alt, title, subtitle}) => {
    return (
        <Wrapper>
            <Icon src={icon} alt={alt} />
            <FlexWrapper>
                <Title>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
            </FlexWrapper>
        </Wrapper>
    )
}

export { ImpactBlock }
