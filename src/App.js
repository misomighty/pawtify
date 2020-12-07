import React from 'react'
import styled from 'styled-components'
import heroImg from './img/hero_img.png'
import blob1 from './img/Blob1.png'
import blob3 from './img/Blob3.png'
import blob4 from './img/Blob4.png'
import pupBallBg from './img/pup_with_ball.png'
import cat1 from './img/cat1.png'
import cat2 from './img/bags_the_cat.png'
import field from './img/dogs_field.png'
import kittens from './img/kittens.png'
import StylizedCircles from './img/StylizedCircles.png'
import testimony1 from './img/testimony1.png'
import testimony2 from './img/testimony2.png'
import impactbg from './img/impact_bg.png'
import impactDuck from './img/impact_duck.png'
import impactHouse from './img/impact_house.png'
import impactWhistle from './img/impact_whistle.png'
import impactFood from './img/impact_food.png'
import { Container, Grid } from '@material-ui/core'
import { MenuBar } from './components/MenuBar'
import { LogoBar } from './components/LogoBar'
import { PrimaryButton } from './components/PrimaryButton'
import { ChevronIcon } from './components/ChevronIcon'
import { FeatureBlock } from './components/FeatureBlock'
import { Cards } from './components/Cards'
import { ContactUsForm } from './components/ContactUsForm'
import { Statistic } from './components/Statistic'
import { Testimony } from './components/Testimony'
import { ImpactBlock } from './components/ImpactBlock'
import { Sitemap } from './components/Sitemap'
import { CtaBanner } from './components/CtaBanner'
import { QuizModal } from './components/QuizModal'

const Body = styled.div``

const UniversalPadding = styled.div`
  padding: 0 110px;
`

const StyledContainer = styled(Container)`
  background: #F5F5F5;
  padding: 0;
`

const HeroComponent = styled.div`
  background: url(${heroImg});
  height: 715px;
  background-size: cover;
`

const HeroContents = styled(Grid)``

const CTAWrapper = styled.div`
  margin-top: 135px;
  width: 450px;
`

const HeroTitle = styled.h1`
  font-size: 'Roboto', sans-serif;
  color: #ffffff;
  font-weight: 800;
  font-size: 56px;
`

const Header = styled.h1`
  font-size: 36px;
  font-weight: 900;
  font-family: 'Roboto, sans-serif';
`

const CenterContent = styled.div`
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 0;
  margin-bottom: 50px;
`

const FloatingContentSection = styled.div`
  position: relative;
  bottom: 133px;
  background-color: #5D62B5;
  background-image: ${({ noBg }) => noBg ? '' : `url(${blob1})`};
  background-repeat: no-repeat;
  background-position: -2em 12em;
  background-size: 73%;
  border-radius: 40px;
  height: 640px;
  margin: 0 auto;
`

const FloatingContent = styled.div`
  position: relative;
  z-index: 3;
  width: 75%;
  padding-top: 100px;
  margin-left: auto;
  margin-right: auto;
  color: #ffffff;
`

const Cat1 = styled.img`
  position: relative;
  width: 75%;
  border-radius: 40px;
  margin-left: 111px;
  top: 71px; 
  z-index: 2;
`

const FloatingContentHeader = styled.h1`
  color: #ffffff;
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 25px;
  width: 75%;
  line-height: 34px;
`

const CTA2 = styled.div`
  position: relative;
  background-color: #29C3BE;
  background-image: url(${pupBallBg});
  background-size: contain;
  background-repeat: no-repeat;
  height: 428px;
`

const CTA2ContentWrapper = styled.div`
  position: absolute;
  right: 177px;
  top: 112px;
  width: 411px;
`

const CTA2Text = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 42px;
  color: #FFFFFF;
  margin-bottom: 42px;
`

const CardSection = styled.div`
  margin-bottom: 75px;
`

const ContactUsSection = styled.div`
  position: relative;
  background-image: url(${blob3}), url(${StylizedCircles}), url(${field});
  height: 80vh;
  height: 850px;
  background-position: 4em 1em,9em 11em,0 0;
  background-size: 765px,317px,cover;
  background-repeat: no-repeat;
`

const VideoSection = styled(CenterContent)`
  background-image: url(${blob4});
  background-size: cover;
  background-position: bottom;
`

const Testimonials = styled.div`
  margin-top: 120px;
  height: 450px;
`

const FlexRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
`

const ImpactSection = styled.div`
  height: 600px;
  background-image: url(${impactbg});
  background-size: cover;
  position: relative;
`
const ImpactBlockRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin-top: 80px;
  width: 90%
`
const Cat2 = styled.img`
  position: absolute;
  height: 273px;
  border-radius: 40px;
  bottom: 13em;
  right: 12em;
`
const Footer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    background: #5D62B5;
    padding: 8px 180px;
    color: #ffffff;
    font-size: 10px;
`

function App() {
  return (
    <Body>
      <StyledContainer maxWidth="lg" disableGutters>
        <HeroComponent>
          <UniversalPadding>
            <HeroContents style={{ paddingTop: '15px'}}>
          <Grid container direction="column">
            <Grid item style={{ height: '70px' }}><LogoBar /></Grid>
            <Grid item><MenuBar /></Grid>
          </Grid>
         <CTAWrapper>
           <HeroTitle>Find your new best friend</HeroTitle>
           <QuizModal>Create your pet profile</QuizModal>
        </CTAWrapper> 
        </HeroContents>
          </UniversalPadding>
        </HeroComponent>
        <CenterContent>
          <FloatingContentSection>
              <FloatingContent>
                <ChevronIcon>Who we are</ChevronIcon>
                <FloatingContentHeader>
                We are what convenience and innovation could look like
                </FloatingContentHeader>
                <p>
                The world is evolving fast. With years of experience, working in a animal shelter as well as years of software development, we have a vision to make the adoption process smooth for both the adopter and the shelter through a one cloud management system.
                </p>
              </FloatingContent>
              <Cat1 alt="curious cat with yellow eyes" src={cat1} />
          </FloatingContentSection>
        </CenterContent>
        <CenterContent>
          <ChevronIcon color="#5D62B5">our promise to you</ChevronIcon>
          <h1 style={{ fontSize: '36px', fontWeight: 900, fontFamily: 'Roboto, sans-serif'}}>Pawtify wants pets in homes.</h1>
          <FeatureBlock style={{ marginBottom: '120px'}} />
        </CenterContent>
        <CTA2>
          <CTA2ContentWrapper>
            <CTA2Text>In order to protect both the public and our staff in support of safe social distancing, ACS shelter is currently operating by appointment only. To adopt a pet, please make an appointment.</CTA2Text>
            <PrimaryButton variant="contained" color="secondary" style={{ width: '211px'}}>Make an Appointment</PrimaryButton>
          </CTA2ContentWrapper>
        </CTA2>
        <CardSection>
          <CenterContent>
            <ChevronIcon color="#5D62B5" style={{ marginTop: '100px' }}>Our services</ChevronIcon>
            <h1 style={{ fontSize: '36px', fontWeight: 900, fontFamily: 'Roboto, sans-serif'}}>Services</h1>
            <Cards />
          </CenterContent>
        </CardSection>
        <ContactUsSection>
            <ContactUsForm />
            <Statistic />
        </ContactUsSection>
        <VideoSection>
          <FloatingContentSection noBg>
              <FloatingContent>
                <ChevronIcon>Education Videos</ChevronIcon>
                <FloatingContentHeader>
                  Training Videos
                </FloatingContentHeader>
                <p>
                <larger>Check out our featured training videos</larger>
<smaller> You can find more videos on our <a>YouTube</a> Page </smaller>
                </p>
              </FloatingContent>
              <Cat1 alt="3 kittens in a basket" src={kittens} />
          </FloatingContentSection>
          <Testimonials>
          <UniversalPadding>
            <FlexRow>
              <div style={{ flex: '1 0 34%' }}>
                <ChevronIcon color="#5D62B5">Our customers</ChevronIcon>
                <Header>We are here for you and them...</Header>
              </div>
              <FlexRow>
                <Testimony name="Cullen Bohannon" img={testimony2} style={{ marginLeft: '24px' }}>
                “Pawtify really helped me prepare for owning a pet. Using the Pet Profiler to create my form for the shelter was informative not just for the rescue shelter but really helped me think about all the things I need to do to prepare to own a dog.”
                </Testimony>
                <Testimony name="Jennifer Thomas" img={testimony1}>
                “Once I created my Pet Profile, I knew exactly what to ask the rescue shelter. It had me think about stuff, I hadn't thought of. I found it very helpful in bridging the conversation between me and the shelter.”
                </Testimony>
              </FlexRow>
            </FlexRow>
            
          </UniversalPadding>
        </Testimonials>
        </VideoSection>
        <ImpactSection>
          <UniversalPadding style={{ position: 'relative '}}>
            <Cat2 src={cat2} alt="friendly black cat" />
            <ChevronIcon style={{ marginTop: '110px' }}>Our impact</ChevronIcon>
            <Header style={{ marginTop: '32px', color: '#ffffff', fontSize: '48px', width: '50%' }}>We are working hard to make our impact</Header>
            <ImpactBlockRow>
              <ImpactBlock icon={impactDuck} alt="rubby duck icon" title="171" subtitle="surveys" />
              <ImpactBlock icon={impactHouse} alt="house icon" title="2020" subtitle="established" />
              <ImpactBlock icon={impactWhistle} alt="dog whistle" title="1,969" subtitle="hours" />
              <ImpactBlock icon={impactFood} alt="pet food" title="12k+" subtitle="hopes and dreams" />
            </ImpactBlockRow>
          </UniversalPadding>
          <CtaBanner>Adopting a pet through Pawtify is a fun experience!</CtaBanner>
        </ImpactSection>
        <Sitemap />
        <Footer>
          <p>
          Tagline lorem ipsum dolor sit amet, consectetur adipiscing eiusmod
          </p>
          <p>
          © 2020 Pawtify.   Privacy Policy | Terms & Conditions
          </p>
        </Footer>
      </StyledContainer>
    </Body>
  );
}

export default App;
