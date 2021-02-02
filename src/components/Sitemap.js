import React from 'react'
import styled from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid'
import MailIcon from '@material-ui/icons/Mail'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import YouTubeIcon from '@material-ui/icons/YouTube'

const Wrapper = styled.div`
    width:auto;
    margin:0 auto;
    padding-top: 100px;
    padding-left: 40px;
    padding-bottom: 50px;
    padding-right: 40px;
`

const FlexRow = styled.div`

`

const FlexColumn = styled.div`

`

const AboutTitle = styled.h2`
    color: #4B4B4B;
    font-weight: 900;
    font-size: 21px;
    text-align: center;
    width: 200px;
    margin: 10px auto;
`

const AboutText = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.15px;
    color: #4B4B4B;
    width: 262px;
    margin-bottom: 36px;
`

const SocialMedia = styled.div`
    width: 268px;
`

const Link = styled.a`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.15px;
    color: #4B4B4B;
`

const LinkTitle = styled.h3`
    margin-top: 0;
    text-transform: uppercase;
    margin-bottom: 24px;
    font-family: Roboto;
    font-weight: bold;
    font-size: 14px;
    color: #4B4B4B;
`

const LinkRow = styled.div`
    margin-bottom: 11px;
    width: 160px;
`

const EmailLink = styled.a``

const Left = styled.div`
    width: 264px;
    margin: 0 auto;
    text-align: center;
    margin-bottom:20px;
`

const Middle = styled.div``

const Right = styled.div`
    width:200px;
    margin: 0 auto;
    text-align: center;
    margin-bottom:20px;
`

const ContactFlexRow = styled.div`

    margin-bottom: 16px;
`

const Sitemap = () => {
    return(
        <Wrapper>
            <FlexRow>
                <ScrollAnimation animateIn="fadeIn" delay="500">
                    <Left>
                        <AboutTitle>Logo Ipsum</AboutTitle>
                        <AboutText>
                        Pawtify is a new management system currently being developed to help streamline the paper process with a one cloud enterprise for both the adopter and shelter involved.  
                        </AboutText>
                        <SocialMedia>
                            <FacebookIcon style={{ color: '#F2726F' }} />
                            <TwitterIcon style={{ color: '#F2726F', marginLeft:'10px' }} />
                            <InstagramIcon style={{ color: '#F2726F', marginLeft:'10px' }} />
                            <YouTubeIcon style={{ color: '#F2726F', marginLeft:'10px' }} />
                        </SocialMedia>
                    </Left>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" delay="750">
                    <Right>
                        <LinkTitle>Contact</LinkTitle>
                        <ContactFlexRow>
                            <LocationOnIcon style={{ color: '#F2726F', height: '20px' }} />
                            <FlexColumn>
                                <span>123 BEE ST</span>
                                <span>San Antonio, TX, 78208</span>
                            </FlexColumn>
                        </ContactFlexRow>
                        <ContactFlexRow>
                            <PhoneAndroidIcon style={{ color: '#F2726F', height: '17px' }} />
                            <span>(210) 373-6730</span>
                        </ContactFlexRow>
                        <ContactFlexRow>
                            <MailIcon style={{ color: '#F2726F', marginTop: '2px', height: '17px' }} />
                            <EmailLink href="mailto: pawtifysa@gmail.com">pawtifysa@gmail.com</EmailLink>
                        </ContactFlexRow>
                        <ContactFlexRow>
                            <AccessAlarmIcon style={{ color: '#F2726F', height: '17px' }} />
                            <span>Mon - Fri 11am - 7:30pm</span>
                        </ContactFlexRow>
                    </Right>
                </ScrollAnimation>
            </FlexRow>
        </Wrapper>
    )
}

export { Sitemap }
