import styled from 'styled-components'
import { Box, Button } from '@mui/material'
import Card from '../Card'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0C0720;
  margin-top: -5px;
  padding: 0 5%;
`

const Title = styled.div`
  font-size: 96px;
  line-height: 104px;
  font-weight: 700;
  color: #84FF70;
  letter-spacing: -1px;
  text-transform: uppercase;

  @media (max-width: 480px) {
    font-size: 64px;
  }
`

const SubTitle = styled.div`
  font-weight: 700;
  font-size: 40px;
  line-height: 64px;
  color: #7381FC;
  margin-top: 250px;
`

const Vtext = styled.div<{ size: number, color: string }>`
  font-weight: 300;
  font-size: ${({ size }) => size}px;
  line-height: 22px;
  color: ${({ color }) => color};
  max-width: 638px;
  width: 95%;
  text-align: center;
  margin-top: 24px;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1150px;
  width: 90%;
  margin: 0 auto;
`
const Side = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
`
const StyledButton = styled(Button)`
  border: 1px solid #7381FC !important;
  border-radius: 8px !important;
  padding: 16px 24px !important;
  font-family: 'Poppins' !important;
  font-weight: 500 !important;
  font-size: 18px !important;
  line-height: 22px !important;
  color: #E354FA !important;
  text-transform: none !important;
`

const Image = styled.img`
  margin: 30px 10px 80px 10px;
`

const Flex = styled.div`
  display: flex;
`

const Roadmap = () => {
  return (
    <Wrapper id="Roadmap">
      <Title>Roadmap</Title>
      <Vtext size={18} color="#FCFCFC">
        We are proudly accomplish what we promised to our community, here are the items we have completed so far
      </Vtext>
      <Box sx={{ backgroundImage: 'url(assets/svg/img-parallax-bg.svg)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: '100%', mt: '144px' }}>
        <Container>
          <Side>
            <Card date="Completed at Q2-2020" title="Robust Protocol Launch" description="Robust Protocol was launched as a platform for creating innovative blockchain & DeFi projects." />
            <Card date="Completed at Q2-2020" title="Robust Token (RBT)" description="Robust Protocol Token (RBT) is the flagship token of the Robust Protocol ecosystem. It features an extremely limited and deflating supply with other original concepts that makes it a rare gem in a DeFi landscape inundated with quadrillion supply meme tokens." />
            <Card date="Completed at Q2-2020" title="Robust Reward (RBW)" description="RBW is used to reward users who assist in ensuring that the supply of RBT deflates. The token will be used for governance of the ecosystem." />
          </Side>
          <Side>
            <Card date="Completed at Q2-2020" title="Marketing and Listings" description="Engaging in various marketing campaigns including Reddit, Twitter, YouTube, TikTok and others. Listings on multiple analytic platforms including CoinGecko, CoinMarketCap, CoinSniper many more." />
            <Card date="Completed at Q2-2020" title="RobustSwap Launch" description="RobustSwap is the pilot Decentralized Exchange (DEX) of the Robust Protocol ecosystem. It includes yield farming, staking, liquidity mining, swapping and other exciting features." />
            <Card date="Completed at Q2-2020" title="RobustSwap Token (RBS)" description="Robust Protocol was launched as a platform for creating innovative blockchain & DeFi projects." />
            <Card date="Completed at Q2-2020" title="RobustSwap Addons" description="Automated Market Market (AMM) Trade Mining." />
          </Side>
        </Container>
      </Box>
      <SubTitle>UPCOMING</SubTitle>
      <Vtext size={18} color="#FCFCFC">
        Our clear vision and the support from our community, we have planned the following item to enhance the ecosystem
      </Vtext>
      <StyledButton variant='outlined' sx={{ mt: '32px' }}>Stablecoin (Robust Protocol Dollar)</StyledButton>
      <Flex>
        <Image src="assets/svg/arrow-up-line.svg" />
        <Image src="assets/svg/arrow-down-line.svg" />
      </Flex>
      <Vtext size={18} color="#7381FC">
        Please note that this roadmap is subject to change without prior notice and any estimated delivery dates are only guidelines and not guarantees.
      </Vtext>
    </Wrapper>
  )
}

export default Roadmap