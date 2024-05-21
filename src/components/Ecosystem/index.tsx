import styled from 'styled-components'
import { Typography, Link } from '@mui/material'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 120px 5%;
  background-color: #0C0720;

  @media (max-width: 820px) {
    flex-direction: column;
  }
`

const Join = styled.div`
  margin-right: 40px;
  max-width: 640px;
  width: 60%;
  @media (max-width: 820px) {
    min-width: 100%;
  }
`

const Detail = styled.div`
  max-width: 420px;
  width: 40%;
  @media (max-width: 820px) {
    min-width: 100%;
    margin-top: 32px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`

const Title = styled(Typography)`
  background: linear-gradient(90deg, #5F47EE 0%, #89FFE3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  @media (max-width: 485px) {
    font-size: 38px !important;
    line-height: 54px !important;
    letter-spacing: -1px !important;
  }
`

const Description = styled.div`
  font-size: 20px;
  font-weight: 300;
  line-height: 24px;
  letter-spacing: 1px;
  color: #E0E0E0;
  margin-top: 32px;
  max-width: 604px;
  width: 100%;
  @media (max-width: 820px) {
    min-width: 100%;
  }
`

const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 800;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #ffffff;
`

const TokInfo = styled.div`
  font-size: 34px;
  font-weight: 600;
  line-height: 40px;
  letter-spacing: 0.5px;
  color: #E354FA;
`

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

const TokenCard = styled.div`
  border-top: 4px solid #ffffff;
  padding: 16px 0px 24px 0px;
  @media (max-width: 820px) {
    max-width: 416px;
    min-width: 280px;
    width: calc(40% - 40px);
  }
  @media (max-width: 640px) {
    min-width: 100%;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none !important;
  &:hover{
    text-decoration: none;
    .swap {
      color: white;
    }
    .share {
      fill: white;
    }
  }
`

const Image = styled.img`
  margin-top: 24px;
`

const Ecosystem = () => {
  return (
    <Wrapper id="The ecosystem">
      <Join>
        <Title variant='h2'>JOIN THE ROBUST PROTOCOL ECOSYSTEM</Title>
        <Description>
          Every time a RBT transaction occurs, 1% of the total amount of the transaction is deducted, burned, and converted into RBW.
        </Description>
        <Description>
          RBW will be used for the governance of the ecosystem and confer voting rights to the holder. RBW will also be the primary token for bootstrapping all future projects under the Robust Protocol ecosystem.
        </Description>
      </Join>
      <Detail>
        <TokenCard>
          <SubTitle>Live projects</SubTitle>
          <TokInfo>3 Tokens</TokInfo>
        </TokenCard>
        <TokenCard>
          <SubTitle>dApps</SubTitle>
          <StyledLink href='https://robustswap.com' target='_blank'>
            <Flex style={{ alignItems: 'center', marginTop: '24px' }}>
              <TokInfo className='swap'>ROBUSTSWAP</TokInfo>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className='share' d="M16.6667 5V8.33333H8.33333V31.6667H31.6667V23.3333H35V33.3333C35 33.7754 34.8244 34.1993 34.5118 34.5118C34.1993 34.8244 33.7754 35 33.3333 35H6.66667C6.22464 35 5.80072 34.8244 5.48816 34.5118C5.17559 34.1993 5 33.7754 5 33.3333V6.66667C5 6.22464 5.17559 5.80072 5.48816 5.48816C5.80072 5.17559 6.22464 5 6.66667 5H16.6667ZM29.5117 12.845L20 22.3567L17.6433 20L27.155 10.4883L21.6667 5H35V18.3333L29.5117 12.845Z" fill="#E354FA" />
              </svg>
            </Flex>
          </StyledLink>
        </TokenCard>
        <TokenCard>
          <SubTitle>$RBT holders</SubTitle>
          <TokInfo>64,201</TokInfo>
        </TokenCard>
        <TokenCard>
          <SubTitle>Community members</SubTitle>
          <TokInfo>5,201</TokInfo>
        </TokenCard>
      </Detail>
    </Wrapper >
  )
}

export default Ecosystem