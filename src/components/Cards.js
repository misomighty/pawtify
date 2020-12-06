import React from 'react'
import styled from 'styled-components'
import boarding from '.././img/dog_boarding_24x.png'
import collar from '.././img/dog_collar_24x.png'
import daycare from '.././img/dog_daycare_24x.png'
import food from '.././img/dog_food_24x.png'
import grooming from '.././img/dog_grooming_24x.png'
import training from '.././img/dog_training_24x.png'
import { PrimaryButton } from './PrimaryButton'

const CenterContent = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-content: center;
    align-items: center;
    justify-content: center;
`

const CardContainer = styled.div`
    margin-top: 78px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`

const Wrapper = styled.div`
    background: #ffffff;
    border-radius: 20px;
    padding-left: 24px;
    padding-bottom: 24px;
    padding-right: 24px;
    text-align: center;
    padding-top: 50px;
    margin-left: 24px;
    margin-bottom: 24px;
`

const Icon = styled.img`
    height: 50px;
`

const Title = styled.h2`
    color: #F2726F;
    font-family: Roboto;
    font-style: normal;
    font-weight: 900;
    font-size: 18px;
    line-height: 26px;
    margin-top: 30px;
`

const Content = styled.p`
    color: #4B4B4B;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.15px;
    width: 218px;
    margin: 0 auto;
`

const Card = (props) => {
    return (
        <Wrapper>
            <Icon src={props.icon} />
            <Title>{props.title}</Title>
            <Content>
            {props.children}
            </Content>
        </Wrapper>
    )
}

const Cards = () => {
    return (
        <CenterContent>
                    <CardContainer>
            <Card icon={boarding} title="Pet Profile">
            This is your starting point for letting the shelter know what you want and need in a rescue pet. <em>Highly recommended</em>
            </Card>
            <Card icon={daycare} title="Education">
            Please feel free to contact us anytime. We are here to support you in the process of adopting and owning a pet.
            </Card>
            <Card icon={grooming} title="Coming Soon">
            Check out our newsletter to learn more about our story and behind the scenes on our up-and-coming products!
            </Card>
            <Card icon={food} title="Support Group">
            Owning a pet is a responsibility that takes a good heap of patience. Many questions can be found and answered through our forum.
            </Card>
            <Card icon={training} title="Pet Training">
            Also check out training videos from our partners.
            </Card>
            <Card icon={collar} title="Shop Willie & Roo">
            <a href="https://www.willieandroo.com/" target="_blank">Go to shop</a>
            </Card>
        </CardContainer>
            <PrimaryButton variant="contained" color="secondary" style={{ width: '124px', marginTop: '75px' }}>Learn More</PrimaryButton>
        </CenterContent>

    )
}

export { Cards }
