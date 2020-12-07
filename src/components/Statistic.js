import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    position: absolute;
    right: 5em;
    top: 14em;
    text-align: center;
    color: #ffffff;
    font-weight: 900;
    font-family: Roboto;
    width: 375px;
`

const Line1 = styled.h2`
    font-size: 1.8em;
    margin-bottom: 46px;
`

const Line2 = styled.h1`
    font-size: 5em;
    margin-top: 0;
    margin-bottom: 46px;
`

const Line3 = styled.h4`
    font-size: 1em;
`

const Statistic = () => {
    return (
        <Wrapper>
            <Line1>Shelter animals are adopted each year in USA!</Line1>
            <Line2>3,200,000+</Line2>
        </Wrapper>
    )
}

export { Statistic }
