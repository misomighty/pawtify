import React from 'react'
import styled from 'styled-components'
import { Animated } from 'react-animated-css'
import ScrollAnimation from 'react-animate-on-scroll'
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
import logo from './img/PawtifyLogo10_27_2020.png'
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
import { QuizComponent } from './components/QuizComponent'

const Body = styled.div``

const UniversalPadding = styled.div`
  padding: 0 110px;
`

const StyledContainer = styled(Container)`
  background: #f5f5f5;
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
  width: 100%;
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
  z-index: 10;
  background: #f5f5f5;
  position: relative;
`

const FloatingContentSection = styled.div`
  position: relative;
  bottom: 133px;
  background-color: #5d62b5;
  background-image: ${({ noBg }) => (noBg ? '' : `url(${blob1})`)};
  background-repeat: no-repeat;
  background-position: -2em 12em;
  background-size: 73%;
  border-radius: 40px;
  max-height: 1000px;
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
  line-height: 100%;
`

const CTA2 = styled.div`
  position: relative;
  background-color: #29c3be;
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
  color: #ffffff;
  margin-bottom: 42px;
`

const CardSection = styled.div`
  margin-bottom: 75px;
`

const ContactUsSection = styled.div`
  position: relative;
  background-image: url(${blob3}), url(${StylizedCircles}), url(${field});
  height: 80vh;
  min-height: 1050px;
  background-position: 2em -2em, 9em 20em, 0 0;
  background-size: 765px, 317px, cover;
  background-repeat: no-repeat;
`

const VideoSection = styled(CenterContent)`
  background-image: url(${blob4});
  background-size: cover;
  background-position: bottom;
`

const Testimonials = styled.div`
  height: 450px;
  z-index: 3;
  position: relative;
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
  justify-content: space-between;
  margin-top: 80px;
  float: left;
  margin: 0 auto;
  width: 100%;
`
const Cat2 = styled.img`
  position: absolute;
  height: 273px;
  border-radius: 40px;
  bottom: 4em;
  right: 2em;
`

const QuizComponentContainer = styled.div`
  width: 100%;
  background-image: url(/static/media/kittens.53421956.png);
  background-position: center;
  padding: 100px 0;
  background-attachment: fixed;
`

const Footer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  background: #5d62b5;
  padding: 8px 180px;
  color: #ffffff;
  font-size: 10px;
`

const NoStyleLink = styled.a`
  color: inherit; /* blue colors for links too */
  text-decoration: inherit; /* no underline */
`

function App() {
  return (
    <Body>
      <StyledContainer maxWidth="false" disableGutters>
        <HeroComponent>
          <UniversalPadding>
            <HeroContents style={{ paddingTop: '15px' }}>
              <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                <Grid container direction="column" className="header-container">
                  <Grid item style={{ height: '70px' }}>
                    <LogoBar />
                  </Grid>
                  <Grid
                    item
                    style={{
                      width: '280px',
                      textAlign: 'center',
                      alignSelf: 'flex-end',
                      margin: '10px 0',
                    }}
                  >
                    <MenuBar />
                  </Grid>
                </Grid>
              </Animated>
              <Animated
                animationIn="fadeIn"
                animationOut="fadeOut"
                animationInDelay="500"
                isVisible={true}
              >
                <CTAWrapper>
                  <HeroTitle>Find your new best friend</HeroTitle>
                  <NoStyleLink href="#quiz">
                    <PrimaryButton>Create your pet profile</PrimaryButton>
                  </NoStyleLink>
                </CTAWrapper>
              </Animated>
            </HeroContents>
          </UniversalPadding>
        </HeroComponent>
        <Animated
          animationIn="fadeIn"
          animationOut="fadeOut"
          animationInDelay="1000"
          isVisible={true}
        >
          <CenterContent>
            <FloatingContentSection>
              <FloatingContent>
                <ChevronIcon>Who we are</ChevronIcon>
                <FloatingContentHeader style={{ fontSize: '3vw' }}>
                  We are what convenience and innovation could look like
                </FloatingContentHeader>
                <p style={{ fontSize: '1.5vw' }}>
                  The world is evolving fast. With years of experience, working in a animal shelter
                  as well as years of software development, we have a vision to make the adoption
                  process smooth for both the adopter and the shelter through a one cloud management
                  system.
                </p>
              </FloatingContent>
              <Cat1 alt="curious cat with yellow eyes" src={cat1} />
            </FloatingContentSection>
          </CenterContent>
        </Animated>
        <ScrollAnimation animateIn="fadeInLeft" delay="250">
          <CenterContent>
            <ChevronIcon color="#5D62B5">our promise to you</ChevronIcon>
            <h1 style={{ fontSize: '36px', fontWeight: 900, fontFamily: 'Roboto, sans-serif' }}>
              Pawtify wants pets in homes.
            </h1>
            <FeatureBlock style={{ marginBottom: '120px' }} />
          </CenterContent>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight" delay="500">
          <CTA2>
            <CTA2ContentWrapper>
              <CTA2Text>
                In order to protect both the public and our staff in support of safe social
                distancing, ACS shelter is currently operating by appointment only. To adopt a pet,
                please make an appointment.
              </CTA2Text>
              <PrimaryButton variant="contained" color="secondary" style={{ width: '211px' }}>
                Make an Appointment
              </PrimaryButton>
            </CTA2ContentWrapper>
          </CTA2>
        </ScrollAnimation>
        <CardSection>
          <CenterContent>
            <ChevronIcon color="#5D62B5" style={{ marginTop: '100px' }}>
              Our services
            </ChevronIcon>
            <h1 style={{ fontSize: '36px', fontWeight: 900, fontFamily: 'Roboto, sans-serif' }}>
              Services
            </h1>
            <Cards />
          </CenterContent>
        </CardSection>
        <ScrollAnimation animateIn="fadeIn" delay="500">
          <ContactUsSection>
            <ContactUsForm />
            <Statistic />
          </ContactUsSection>
        </ScrollAnimation>
        <VideoSection>
          <ScrollAnimation animateIn="fadeIn" delay="500">
            <FloatingContentSection noBg>
              <FloatingContent>
                <ChevronIcon>Education Videos</ChevronIcon>
                <FloatingContentHeader>Training Videos</FloatingContentHeader>
                <p>
                  <larger>Check out our featured training videos</larger>
                  <smaller>
                    {' '}
                    You can find more videos on our <a>YouTube</a> Page{' '}
                  </smaller>
                </p>
              </FloatingContent>
              <Cat1 alt="3 kittens in a basket" src={kittens} />
            </FloatingContentSection>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" delay="500">
            <Testimonials className="testimonials-parent">
              <UniversalPadding>
                <FlexRow>
                  <ChevronIcon color="#5D62B5" style={{ zIndex: '3' }}>
                    Our customers
                  </ChevronIcon>
                </FlexRow>
                <FlexRow style={{ float: 'left', maxWidth: '1300px' }} className="testimonials">
                  <Header
                    style={{
                      fontFamily: 'Roboto',
                      background: 'rgb(245 245 245 / .5)',
                      paddingTop: '20px',
                      paddingRight: '20px',
                      paddingBottom: '20px',
                      paddingLeft: '20px',
                      marginLeft: '20px',
                      borderRadius: '25px',
                      width: '73%',
                    }}
                  >
                    We are here for you and them...
                  </Header>
                  <Testimony
                    name="Cullen Bohannon"
                    img={testimony2}
                    style={{ marginLeft: '24px', float: 'left', width: 'width;' }}
                  >
                    “Pawtify really helped me prepare for owning a pet. Using the Pet Profiler to
                    create my form for the shelter was informative not just for the rescue shelter
                    but really helped me think about all the things I need to do to prepare to own a
                    dog.”
                  </Testimony>
                  <Testimony name="Jennifer Thomas" img={testimony1} style={{ float: 'left' }}>
                    “Once I created my Pet Profile, I knew exactly what to ask the rescue shelter.
                    It had me think about stuff, I hadn't thought of. I found it very helpful in
                    bridging the conversation between me and the shelter.”
                  </Testimony>
                </FlexRow>
              </UniversalPadding>
            </Testimonials>
          </ScrollAnimation>
        </VideoSection>
        <ImpactSection>
          <UniversalPadding style={{ position: 'relative ' }}>
            <Cat2 src={cat2} alt="friendly black cat" />
            <ScrollAnimation animateIn="fadeIn" delay="500">
              <ChevronIcon style={{ marginTop: '110px' }}>Our impact</ChevronIcon>
              <Header
                style={{
                  fontFamily: 'Roboto',
                  marginTop: '32px',
                  marginBottom: '90px',
                  color: '#ffffff',
                  fontSize: '4vw',
                  width: '50%',
                }}
              >
                We are working hard to make our impact
              </Header>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" delay="1000">
              <ImpactBlockRow>
                <ImpactBlock
                  icon={impactDuck}
                  alt="rubby duck icon"
                  title="171"
                  subtitle="surveys"
                />
                <ImpactBlock
                  icon={impactHouse}
                  alt="house icon"
                  title="2020"
                  subtitle="established"
                />
                <ImpactBlock
                  icon={impactWhistle}
                  alt="dog whistle"
                  title="1,969"
                  subtitle="hours"
                />
                <ImpactBlock
                  icon={impactFood}
                  alt="pet food"
                  title="12k+"
                  subtitle="hopes and dreams"
                />
              </ImpactBlockRow>
            </ScrollAnimation>
          </UniversalPadding>
          <CtaBanner className="cta-banner">
            Adopting a pet through Pawtify is a fun experience!
          </CtaBanner>
        </ImpactSection>
        <QuizComponentContainer id="quiz">
          <QuizComponent />
        </QuizComponentContainer>
        <Sitemap />
        <Footer>
          <p>Tagline lorem ipsum dolor sit amet, consectetur adipiscing eiusmod</p>
          <p>© 2020 Pawtify. Privacy Policy | Terms & Conditions</p>
        </Footer>
      </StyledContainer>
    </Body>
  )
}

export default App
