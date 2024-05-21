import styled from 'styled-components'
import { Box, Button, Link, IconButton, Typography } from '@mui/material'
import Marquee from 'react-fast-marquee'

const Info = styled.div`
  background: #84FF70;
  padding: 20px 0px;
  margin-top: -7px;
`

const Menu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px 20px;
  max-width: 1310px;
  width: 100%;
  margin-left: 3%;
  margin:0 auto;
`

const Wrapper = styled.div`
  width:100%;
`

const Content = styled.div`
  margin: 0 auto;
  height: fit-content;
  max-width: 1088px;
  width: 90%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.div`
  font-size: 96px;
  font-weight: 700;
  line-height: 104px;
  text-transform: uppercase;
  color: white;
  margin-top: 210px;

  @media (max-width: 705px) {
    font-size: 48px;
    line-height: 52px;
  }
`

const Video = styled.video`
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  min-width: 100%;
  min-height: 100%;
`

const MButton = styled(Button)`
  padding: 16px 48px !important;
  border-radius: 28px !important;
  max-width: 403px !important;
  width: 95% !important;
`

const StyledLink = styled(Link)`
  font-family: 'Poppins' !important;
  font-size: 18px !important;
  font-weight: 800 !important;
  color: #7381FC !important;
  text-decoration: none !important;
  @media (max-width: 705px) {
    display: none;
  }
`

const StyledButtonLink = styled(Link)`
  text-decoration: none !important;
  color: white !important;
  &:hover{
    text-decoration: none;
  }
`

const Image = styled.img`
`
interface Props {
  isburger: boolean,
  SetIsBurger: React.Dispatch<React.SetStateAction<boolean>>;
}
const Header = (props: Props) => {
  const infoText = "RBT $12.32 | RBS $10.56 | BNB $376.88 | BTC $39,180 | ETH $2,590.53"
  const title = "Extremely limited supply, rigid deflationary mechanism"
  const subTitle = "Robust Token is an original concept token on the Binance Smart Chain with a limited supply of 100 000 RBT and a 1% burn per transaction that gets converted into Robust Reward (RBW)."

  const handle = () => {
    props.SetIsBurger(!props.isburger);
  }

  return (
    <>
      {!props.isburger ?
        <Wrapper style={{ backgroundColor: '#5F47EE' }}>
          <Menu>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              {!props.isburger ? <Image src="assets/svg/logoHD.svg" alt="logoHD" /> : <Image src="assets/svg/logo.png" alt="logoHD" />}
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <StyledLink href='https://bscscan.com/address/0x891e4554227385c5c740f9b483e935e3cbc29f01' target='_blank'>
                  {!props.isburger ? <Image src="assets/svg/contract2.png" alt="share" style={{ marginLeft: 11 }} /> : <Image src="assets/svg/contract.png" alt="share" style={{ marginLeft: 11 }} />}
                </StyledLink>
                {!props.isburger ?
                  <IconButton sx={{ ml: '55px', padding: '0px' }} onClick={handle}>
                    <Image src="assets/svg/hamburger.svg" alt="logoHD" />
                  </IconButton> :
                  <IconButton sx={{ ml: '55px', padding: '0px' }} onClick={handle}>
                    <Image src="assets/svg/close.png" alt="logoHD" />
                  </IconButton>
                }
              </Box>
            </Box>
          </Menu>
        </Wrapper> :
        <Wrapper style={{ backgroundColor: '#5F47EE' }} >
          <Menu style={{ position: 'unset', background: '#5F47EE' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              {!props.isburger ? <Image src="assets/svg/logoHD.svg" alt="logoHD" /> : <Image src="assets/svg/logo.png" alt="logoHD" />}
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <StyledLink href='https://bscscan.com/address/0x891e4554227385c5c740f9b483e935e3cbc29f01' target='_blank'>
                  {!props.isburger ? <Image src="assets/svg/contract2.png" alt="share" style={{ marginLeft: 11 }} /> : <Image src="assets/svg/contract.png" alt="share" style={{ marginLeft: 11 }} />}
                </StyledLink>
                {!props.isburger ?
                  <IconButton sx={{ ml: '55px', padding: '0px' }} onClick={handle}>
                    <Image src="assets/svg/hamburger.svg" alt="logoHD" />
                  </IconButton> :
                  <IconButton sx={{ ml: '55px', padding: '0px' }} onClick={handle}>
                    <Image src="assets/svg/close.png" alt="logoHD" />
                  </IconButton>
                }
              </Box>
            </Box>
          </Menu>
        </Wrapper>
      }
      {!props.isburger &&
        <Wrapper>
          <Video autoPlay loop muted>
            <source src="assets/video/robust.mp4" type="video/mp4" />
          </Video>
          <Content>
            <Title>{title}</Title>
            <Typography variant='h6' color='white' sx={{ mb: '48px' }}>{subTitle}</Typography>
            <MButton variant="contained"
              sx={{
                color: 'white',
                fontSize: 18,
                mb: '8px',
                background: '#5F47EE',
                boxShadow: 'none',
                '&:hover': {
                  background: '#5F47EE',
                  boxShadow: 'none'
                }
              }}>
              <StyledButtonLink href='https://exchange.robustswap.com/#/swap?outputCurrency=0x891e4554227385c5c740f9b483e935e3cbc29f01' target='_blank'>
                BUY $RBT
              </StyledButtonLink>
            </MButton>
            <MButton sx={{ color: 'white', fontSize: 18, mb: '42px' }}>See Whitepaper</MButton>
          </Content>
          <Info>
            <Marquee gradient={false}>
              {infoText}
            </Marquee>
          </Info>
        </Wrapper>
      }
    </>
  )
}

export default Header