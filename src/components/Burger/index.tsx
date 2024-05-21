import styled from 'styled-components'
import { Link } from '@mui/material'

import TELEGRAM from '../../png/telegram.png'
import TWITTER from '../../png/twitter.png'
import MEDIUM from '../../png/medium.png'
import DISCORD from '../../png/discord.png'

const Wrapper = styled.div`
  width:100%;
  height: calc(100vh - 75px);
  margin: -5px 0px;
  overflow:auto;
  background:#5F47EE;
  position:absolute;
  z-index:11;
`
const Inner = styled.div`
  max-width:1086px;
  width:90%;
  margin:106px auto 0px auto;
  display:flex;
  justify-content:space-between;
  align-items:center;
  flex-wrap:wrap;
`
const Header = styled.a`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 64px;
  letter-spacing: -1px;
  text-transform: uppercase;
  text-decoration:none !important;
  color: #FCFCFC;
  margin-top:24px;
  cursor:pointer;
  &:hover{
    color:#A0B9FB;
  }
`
const Subheader = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #F0EFEF;
  margin-bottom:8px;
  @media(max-width:857px){
    margin-top:30px;
  }
`
const Subcontent = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
  color: #A0B9FB;
  margin-top:24px;
  cursor:pointer;
`
const Icon = styled.img`
  width:18px;
  height:18px;
  margin-left:4px;
`
const Button = styled.div`
  border: 1px solid #FCFCFC;
  box-sizing: border-box;
  border-radius: 28px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  text-align:center;
  padding:20px 0px 20px;
  width:304px;
  margin:18px 0px;
  cursor:pointer;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
  text-transform: uppercase;
  color: #FCFCFC;
  @media(max-width:768px){
    width:100%;
  }
`
const StyledLink = styled(Link)`
  text-decoration: none !important;
  color: white !important;
  &:hover{
    text-decoration: none;
  }
`
const Social = styled.img`
  width:32px;
  height:32px;
  margin:0px 12px;
  cursor:pointer;
`
const Leftside = styled.div`
  display:block;
`
const Rightside = styled.div`
  display:block;
  @media(max-width:768px){
    width:100%;
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
const Image = styled.img`
  display:none;
  @media(max-width:705px){
    display:block;
    margin-bottom:40px;
  }
`
interface Props {
  isburger: boolean,
  SetIsBurger: React.Dispatch<React.SetStateAction<boolean>>;
}
const Burger = (props: Props) => {
  const handle = () => {
    props.SetIsBurger(!props.isburger);
  }
  return (
    <Wrapper>
      <Inner>
        <Leftside>
          <Image src="assets/svg/contract.png" />
          {Link1.map((link, index) => (
            <Header key={index} href={`#${link}`} onClick={handle}>{link}<br /></Header>
          ))}
        </Leftside>
        <Rightside>
          <Subheader>Trading Charts</Subheader>
          {Link2.map((link, index) => (
            <Subcontent key={index}>{link}</Subcontent>
          ))}
          <Button>
            <StyledLink href='https://exchange.robustswap.com/#/swap?outputCurrency=0x891e4554227385c5c740f9b483e935e3cbc29f01' target='_blank'>
              BUY $RBT
            </StyledLink>
          </Button>
          <Button>
            <StyledLink href='https://robustswap.com' target='_blank'>
              ROBUST SWAP
            </StyledLink>
            <Icon src="assets/svg/gointo2.png" />
          </Button>
          <Subwrapper2>
            <Social src={TELEGRAM} />
            <Social src={TWITTER} />
            <Social src={MEDIUM} />
            <Social src={DISCORD} />
          </Subwrapper2>
        </Rightside>
      </Inner>
    </Wrapper>
  )
}

const Link1 = ["The ecosystem", "Roadmap", "Features", "Token Distribution", "Contract Address"];
const Link2 = ["Poocoin", "Dex Guru", "Dex Tools", "Bogged"];
export default Burger;