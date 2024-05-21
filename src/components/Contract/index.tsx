import styled from 'styled-components'
import { useMedia } from 'react-use'
import { Typography, Link } from '@mui/material'

const Wrapper = styled.div`
	background: #0C0720;
	display: flex;
	padding:208px 0px 108px 0px;
	flex-direction: column;
	align-items: center;
	text-align: center;
	position:relative;
	margin-top: -5px;
`

const Card = styled.div`
	padding: 24px;
	background-color: #0C0720;
	border-radius: 10px;
	text-align:left;

	@media (max-width: 585px) {
		max-width: 100%;
	}
`

const CardWrapper = styled.div`
	min-width: 486px;
	background-image: linear-gradient(to left, #00C853, #B2FF59);
	border-radius: 10px;
	padding: 1px;
	margin-bottom: 8px;

	@media (max-width: 585px) {
		min-width: 100%;
		max-width: 100%;
	}
`

const StyledLink = styled(Link)`
  text-decoration: none !important;
  &:hover{
    text-decoration: none;
    .addr {
      color: white;
    }
    .share {
      fill: white;
    }
  }
`

const Flex = styled.div`
	display: flex;
`

const Image = styled.img`
	width: 64px;
	height: 64px;
`
const Image2 = styled.img`
	width:56px;
	height:56px;
	cursor:pointer;
	margin:20px 45px;
`

const ContCard = (props: any) => {
	const below600 = useMedia('(max-width:600px)')

	return (
		<CardWrapper>
			<Card>
				<Flex>
					{props.symbol &&
						<Flex>
							<Image src={`assets/svg/${props.symbol}.svg`} />
							<Flex style={{ flexDirection: 'column', textAlign: 'left' }}>
								<Typography variant="subtitle1" color="#E354FA" sx={{ mr: '8px', ml: '24px', fontSize: below600 ? '28px' : '50px', lineHeight: below600 ? '35px' : '64px' }}>{props.symbol}</Typography>
								{below600 && <Typography variant='h5' color='white' sx={{ ml: '24px' }}>{props.title}</Typography>}
							</Flex>
						</Flex>
					}
					{!below600 && <Typography variant='h5' color='white' sx={{ margin: 'auto 0' }}>{props.title}</Typography>}
				</Flex>
				<StyledLink href={`https://bscscan.com/address/${props.address}`} target='_blank'>
					<Flex style={{ marginTop: 16, justifyContent: 'space-between', alignItems: 'center' }}>
						<Typography className="addr" variant='h6' color='#A0B9FB' sx={{ margin: 'auto 0', fontSize: 16, overflowWrap: 'anywhere', textAlign: 'left', width: '95%' }}>{props.address}</Typography>
						<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path className="share" d="M16 16H2V2H9V0H0V18H18V9H16V16ZM11 0V2H14.59L4.76 11.83L6.17 13.24L16 3.41V7H18V0H11Z" fill="#A0B9FB" />
						</svg>
					</Flex>
				</StyledLink>
				{props.description && <Typography variant='h6' color='#FCFCFC' sx={{ mt: '24px', maxWidth: '430px' }}>{props.description}</Typography>}
			</Card>
		</CardWrapper>
	)
}
const ContCard2 = (props: any) => {

	return (
		<CardWrapper>
			<Card>
				<Flex>
					<Typography variant='h5' color='white' sx={{ margin: 'auto 0' }}>{props.title}</Typography>
				</Flex>
				<StyledLink href={`https://bscscan.com/address/${props.address}`} target='_blank'>
					<Flex style={{ marginTop: 16, justifyContent: 'space-between', alignItems: 'center' }}>
						<Typography className='addr' variant='h6' color='#A0B9FB' sx={{ margin: 'auto 0', fontSize: 16, overflowWrap: 'anywhere', textAlign: 'left', width: '95%' }}>{props.address}</Typography>
						<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path className='share' d="M16 16H2V2H9V0H0V18H18V9H16V16ZM11 0V2H14.59L4.76 11.83L6.17 13.24L16 3.41V7H18V0H11Z" fill="#A0B9FB" />
						</svg>
					</Flex>
				</StyledLink>
				{props.description && <Typography variant='h6' color='#FCFCFC' sx={{ mt: '24px', maxWidth: '430px' }}>{props.description}</Typography>}
			</Card>
		</CardWrapper>
	)
}

const Contract = () => {
	const below600 = useMedia('(max-width:600px)')

	return (
		<Wrapper id="Contract Address">
			<Typography variant='subtitle1' color='white' sx={{ textTransform: 'uppercase', mb: '16px' }}>Contract addresses</Typography>
			<Typography variant='h6' color='#FCFCFC' sx={{ maxWidth: '816px', textAlign: 'center', mb: '40px' }}>To avoid loss of funds, please verify that you are interacting with the correct smart contract as listed below</Typography>
			<Flex style={{ flexWrap: 'wrap', justifyContent: 'space-between', width: '90%', maxWidth: '995px' }}>
				<Flex style={{ flexDirection: 'column', width: below600 ? '100%' : 'auto' }}>
					<ContCard symbol="RBT" title="Robust Token" address="0x891e4554227385c5c740f9b483e935e3cbc29f01" />
					<ContCard symbol="RBW" title="Robust Reward" address="0x4cc23264e1ef8dd8173e4ec07e6a01cc7476d997" />
					<ContCard symbol="RBS" title="Robust Swap" address="0x95336aC5f7E840e7716781313e1607F7C9D6BE25" />
				</Flex>
				<Flex style={{ flexDirection: 'column', width: below600 ? '100%' : 'auto' }}>
					<ContCard2 title="RBT Reserve" address="0xb3095c1C74737cCefc0a8D7D4b9Dfb7446D3415B" />
					<ContCard2 title="RBT Timelock" address="0x9733f3838c013468165E7Cf69eA87A8Dd2e976Fb" />
					<ContCard2 title="RBT-BNB (Burned)" address="0xfb3a3e8e9a1fbfdfb237442168a96ec84a331b1f" description="When buying from Pancakeswap, slippage tolerance must be set to above 1% for the transaction to go through. This is to make allowance for the 1% transaction fee." />
				</Flex>
			</Flex>

			<div style={{
				fontFamily: 'Poppins',
				fontStyle: 'normal',
				fontWeight: '800',
				fontSize: '20px',
				lineHeight: '24px',
				textAlign: 'center',
				letterSpacing: '0.5px',
				marginBottom: '32px',
				marginTop: '92px',
				color: '#7381FC'
			}}>Find us on</div>
			<Flex style={{ justifyContent: 'center', maxWidth: '1170px', width: '90%', flexWrap: 'wrap' }}>
				<Image2 src='assets/svg/market.png' />
				<Image2 src='assets/svg/animal.png' />
				<Image2 src='assets/svg/circle.png' />
				<Image2 src='assets/svg/bscscan.png' />
				<Image2 src='assets/svg/crypto.png' />
				<Image2 src='assets/svg/up.png' />
				<Image2 src='assets/svg/tri.png' />
				<Image2 src='assets/svg/target.png' />
			</Flex>
		</Wrapper>
	)
}

export default Contract