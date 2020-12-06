import React from 'react'
import styled from 'styled-components'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid'
import MailIcon from '@material-ui/icons/Mail'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import YouTubeIcon from '@material-ui/icons/YouTube'

const Wrapper = styled.div`
    padding-top: 170px;
    padding-left: 170px;
    padding-bottom: 120px;
    padding-right: 170px;
`

const FlexRow = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
`

const FlexColumn = styled.div`
    display: flex;
    flex-flow: column nowrap;
`

const AboutTitle = styled.h2`
    color: #4B4B4B;
    font-weight: 900;
    font-size: 21px;
    text-align: center;
    margin-top: 0;
    margin-bottom: 26px;
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
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 132px;
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 11px;
    width: 160px;
`

const EmailLink = styled.a``

const Left = styled.div``

const Middle = styled.div``

const Right = styled.div`
    display: flex;
    flex-flow: column nowrap;
`

const ContactFlexRow = styled.div`
    display: flex;
    margin-bottom: 16px;
`

const Sitemap = () => {
    return(
        <Wrapper>
            <FlexRow>
                <Left>
                    <AboutTitle>Logo Ipsum</AboutTitle>
                    <AboutText>
                    Pawtify is a new management system currently being developed to help streamline the paper process with a one cloud enterprise for both the adopter and shelter involved.  
                    </AboutText>
                    <SocialMedia>
                        <FacebookIcon style={{ color: '#F2726F' }} />
                        <TwitterIcon style={{ color: '#F2726F' }} />
                        <InstagramIcon style={{ color: '#F2726F' }} />
                        <YouTubeIcon style={{ color: '#F2726F' }} />
                    </SocialMedia>
                </Left>
                <Middle>
                    <LinkTitle>explore links</LinkTitle>
                    <LinkRow>
                        <Link href="#" alt="">About</Link>
                        <Link href="#" alt="">Reviews</Link>
                    </LinkRow>
                    <LinkRow>
                        <Link href="#" alt="">Services</Link>
                        <Link href="#" alt="">Shop</Link>
                    </LinkRow>
                    <LinkRow>
                        <Link href="#" alt="">Specials</Link>
                        <Link href="#" alt="">Careers</Link>
                    </LinkRow>
                    <LinkRow>
                        <Link href="#" alt="">Estimates</Link>
                        <Link href="#" alt="">FAQs</Link>
                    </LinkRow>
                </Middle>
                <Right>
                    <LinkTitle>Contact</LinkTitle>
                    <ContactFlexRow>
                        <LocationOnIcon style={{ color: '#F2726F', marginRight: '24px', height: '20px' }} />
                        <FlexColumn>
                            <span>123 BEE ST</span>
                            <span>San Antonio, TX, 78208</span>
                        </FlexColumn>
                    </ContactFlexRow>
                    <ContactFlexRow>
                        <PhoneAndroidIcon style={{ color: '#F2726F', marginRight: '24px', height: '17px' }} />
                        <span>(210) 373-6730</span>
                    </ContactFlexRow>
                    <ContactFlexRow>
                        <MailIcon style={{ color: '#F2726F', marginRight: '24px', height: '17px' }} />
                        <EmailLink href="mailto: pawtifysa@gmail.com">pawtifysa@gmail.com</EmailLink>
                    </ContactFlexRow>
                    <ContactFlexRow>
                        <AccessAlarmIcon style={{ color: '#F2726F', marginRight: '24px', height: '17px' }} />
                        <span>Mon - Fri 11am - 7:30pm</span>
                    </ContactFlexRow>
                </Right>
            </FlexRow>
        </Wrapper>
    )
}

export { Sitemap }
