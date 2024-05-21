import styled from 'styled-components'
import { Link } from '@mui/material'

import LOGO from '../../png/footerlogo.png'
import TELEGRAM from '../../png/telegram.png'
import TWITTER from '../../png/twitter.png'
import MEDIUM from '../../png/medium.png'
import DISCORD from '../../png/discord.png'

const Wrapper = styled.div`
  width:100%;
  background: #0C0720;
  padding:72px 0px 52px;
  position:relative;
  top:0px;
  margin-top: -3px;
`

const StyledLink = styled(Link)`
  text-decoration: none !important;
  color: #5F47EE !important;
  &:hover{
    text-decoration: none;
  }
`

const Inner = styled.div`
  max-width:1311px;
  width:90%;
  margin:0 auto;
`
const Topside = styled.div`
  display:flex;
  justify-content:space-between;
  flex-direction:row;
  @media(max-width:768px){
    flex-direction:column;
  }
`
const Bottomside = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #FCFCFC;
  text-align:center;
  margin-top:102px;
`
const Subwrapper = styled.div`
  display:block;
  @media(max-width:768px){
    margin-bottom:30px;
  }
`
const Subwrapper2 = styled.div`
  display:flex;
  justify-content:center;
  width:304px;
  @media(max-width:768px){
    margin:0 auto;
  }
`
const Logo = styled.img`
  width:230px;
  height:72px;
  margin-bottom:40px;
`
const Social = styled.img`
  width:32px;
  height:32px;
  margin:0px 12px;
  cursor:pointer;
`
const LogoText = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  color: #FCFCFC;
`
const LogoSubtext = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
  color: #E0E0E0;
  margin-top:16px;
`
const LinkHeader = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #5F47EE;
  margin-bottom:8px;
  @media(max-width:768px){
    margin-top:70px;
  }
`
const LinkContent = styled.a`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 46px;
  color: #A0B9FB;
  cursor:pointer;
  text-decoration:none !important;
`
const Icon = styled.img`
  width:18px;
  height:18px;
  margin-left:4px;
`
const Button = styled.div`
  border: 1px solid #5F47EE;
  box-sizing: border-box;
  border-radius: 28px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  text-align:center;
  padding:20px 0px 20px;
  width:304px;
  margin-bottom:36px;
  cursor:pointer;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
  text-transform: uppercase;
  color: #5F47EE;
  @media(max-width:768px){
    width:100%;
  }
`
const Footer = () => {
  return (
    <Wrapper>
      <Inner>
        <Topside>
          <Subwrapper>
            <Logo src={LOGO} />
            <LogoText>
              Extremely limited supply,<br />rigid deflationary<br />mechanism
            </LogoText>
            <LogoSubtext>
              Original concept token on the Binance Smart<br /> Chain with a limited supply of 100 000 RBT.
            </LogoSubtext>
          </Subwrapper>

          <Subwrapper>
            <LinkHeader>Learn</LinkHeader>
            {
              Link1.map((link, index) => (
                <LinkContent key={index} href={`#${link}`}> {link}<br /></LinkContent>
              ))
            }
          </Subwrapper>

          <Subwrapper>
            <LinkHeader>Trading Charts</LinkHeader>
            {
              Link2.map((link, index) => (
                <LinkContent key={index}>{link}<br /></LinkContent>
              ))
            }
          </Subwrapper>

          <Subwrapper>
            <Button>
              <StyledLink href='https://exchange.robustswap.com/#/swap?outputCurrency=0x891e4554227385c5c740f9b483e935e3cbc29f01' target='_blank'>
                BUY $RBT
              </StyledLink>
            </Button>
            <Button>
              <StyledLink href='https://robustswap.com' target='_blank'>
                ROBUSTSWAP
                <Icon src="assets/svg/gointo.png" />
              </StyledLink>
            </Button>
            <Subwrapper2>
              <Social src={TELEGRAM} />
              <Social src={TWITTER} />
              <Social src={MEDIUM} />
              <Social src={DISCORD} />
            </Subwrapper2>
          </Subwrapper>
        </Topside>
        <Bottomside>
          © copyright 2022 Robust Protocol | All right reserved.
        </Bottomside>
      </Inner>
    </Wrapper >
  )
}

const Link1 = ["The ecosystem", "Roadmap", "Features", "Token Distribution", "Contract Address"];
const Link2 = ["Poocoin", "Dex Guru", "Dex Tools", "Bogged"];
export default Footer