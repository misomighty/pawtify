import React from 'react'
import styled from 'styled-components'
import dogLove from '../img/dog_love_24x.png'
import dogVet from '../img/dog_vet_24x.png'
import dogStream from '../img/dog_stream_24x.png'
import { Grid } from '@material-ui/core'

const Title = styled.p`
    color: #F2726F;
    font-weight: 800;
    font-size: 14px;
`

const Content = styled.p`
    color: #4B4B4B;
    width: 250px;
`

const Img = styled.img`
    margin-right: 10px;
    height: 50px;
`

const FeatureBlock = (props) => {
    return (
        <Grid container direction="row" style={props.style}>
            <Grid item>
                <Img alt="Dog inside of heart shape" src={dogLove} />
            </Grid>
            <Grid item>
                <Title>24/7 Love & Care</Title>
                <Content>
                Our hope is to get shelter pets into homes and we want to help you with taking care of a pet. Adoption is a rewarding responsibility, so thank you for caring. Contact us with your questions
                </Content>
            </Grid>
            <Grid item>
                <Img alt="Vet with dog" src={dogVet} />
            </Grid>
            <Grid item>
                <Title>On-site Veterinarian</Title>
                <Content>
                Pawtify is apart of the community. We strive to know what San Antonio needs and hope to be the change that will win us become a No-Kill City!!
                </Content>
            </Grid>
            <Grid item>
                <Img alt="Dog inside of heart shape" src={dogStream} />
            </Grid>
            <Grid item>
                <Title>Live-stream Cameras</Title>
                <Content>
                Pawtify strives to make it easy for humans to help animals get homes and not live long in cages. We hope that all pets can find somebody to love and be loved.
                </Content>
            </Grid>
        </Grid>
    )
}

export { FeatureBlock }
