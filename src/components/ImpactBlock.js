import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    float:left;
    min-width: 24%;
`

const FlexWrapper = styled.div`
    align-items: center;
    justify-content: center;
    float:left;
    font-size: 1vw;
`

const Icon = styled.img`
    margin-right: 12px;
    margin-left:30px;
    height: 59px;
    float:left;
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
