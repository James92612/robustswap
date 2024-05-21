import styled from 'styled-components'
import { Typography, Box } from '@mui/material'
import Marquee from 'react-fast-marquee'
import { useMedia } from 'react-use'

const Wrapper = styled.div`
	background: #0C0720;
	display: flex;
	flex-direction: column;
	align-items: center;
	position:relative;
	top:-3px;
	padding:200px 0px;
`

const Card = styled.div`
	max-width: 408px;
	background: #5F47EE;
	border-radius: 8px;
	padding: 32px;
	width: 100%;
	height:542px;
	display: flex;
	flex-direction: column;
	margin: 0px 12px;
	@media(max-width:705px){
		margin: 0px;
	}
`
const Title = styled.div`
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 700;
	font-size: 50px;
	line-height: 64px;
	letter-spacing: -1px;
	text-transform: uppercase;
	color: #FCFCFC;
	@media(max-width:768px){
		font-size:40px;
	}
`
const Image = styled.img`
	width: 240px;
	height: 240px;
	margin: 16px auto;
`

const Slider = styled(Marquee)`
	margin-top: 94px;
	max-width: 100%;
	overflow-x: hidden;
	display: flex;
	
`
const Shadow = styled.div`
	width: 320px;
	height: 700px;
	background:  linear-gradient(269.11deg, rgba(12, 7, 32, 0) 8.41%, #0C0720 91.68%);
`
const Shadow2 = styled.div`
	width: 320px;
	height: 700px;
	background:  linear-gradient(269.11deg, #0C0720 8.41%, rgba(12, 7, 32, 0) 91.68%);
`
const ShadowArea = styled.div`
	position:absolute;
	max-width:1450px;
	width:100%;
	z-index:10;
	display:flex;
	justify-content:space-between;
`
const SupplyCard = (props: any) => {
	return (
		<Card>
			<Title>{props.title}</Title>
			<Image src={`assets/svg/deco-${props.index}.png`} />
			<Typography variant='button' color='#FCFCFC' sx={{ textTransform: 'none', fontWeight: '300' }}>{props.description}</Typography>
		</Card>
	)
}

const Distribution = () => {
	const isMobile = useMedia('(max-width:705px)')

	return (
		<Wrapper id="Features">
			<Typography variant='h3' color='white' sx={{ textAlign: 'center' }}>Why people love Robust?</Typography>
			<Typography variant='h6' color='#FCFCFC' sx={{ maxWidth: '816px', textAlign: 'center', mt: '16px' }}>Designed with an aggressive deflationary mechanism with the aim of growing the value of the token as the project matures.</Typography>
			{!isMobile
				?
				<div style={{ maxWidth: '1440px', width: '100%' }}>
					<ShadowArea>
						<Shadow />
						<Shadow2 />
					</ShadowArea>
					<Slider gradient={false}>
						<SupplyCard index={1} title='100% Fixed Supply' description='At launch, a total of 100 000 RBT was created, with 50 000 deposited and locked into the RBT Reserve. No more RBT can ever be created.' />
						<SupplyCard index={2} title='Deflation-ary forces' description='Every RBT transfer incurs a 1% fee that gets burned. Effectively, every transaction contributes to the reduction of the total supply of RBT.' />
						<SupplyCard index={3} title='Community Governed' description='RBT and all subsequent project will be community governed project. As shareholders, RBW holders will have voting rights.' />
						<SupplyCard index={4} title='Loyalty Reward' description='Every time a RBT transaction occurs, 1% of the total amount of the transaction is deducted, burned, and converted into RBW.' />
						<SupplyCard index={5} title='fair share, No Presale' description='40% of the total supply of RBT was provided as liquidity on Pancakeswap and burned. While 50% is time-locked in theRBT Reserve.' />
						<SupplyCard index={6} title='15-day Timelock' description='There is a 15-day timelock delay on both the RBT and Reserve smart contracts. RBW holders can vote to implement some changes.' />
					</Slider>
				</div>
				:
				<div className="container">
					<div id="myCarousel" className="carousel slide" data-ride="carousel">

						<ol className="carousel-indicators" style={{ position: 'relative', top: '582px' }}>
							<li data-target="#myCarousel" data-slide-to="0" style={{ backgroundColor: '#5F47EE', border: 'none', width: '8px', height: '8px', margin: '0px 4px' }}></li>
							<li data-target="#myCarousel" data-slide-to="1" style={{ backgroundColor: '#5F47EE', border: 'none', width: '8px', height: '8px', margin: '0px 4px' }}></li>
							<li data-target="#myCarousel" data-slide-to="2" style={{ backgroundColor: '#5F47EE', border: 'none', width: '8px', height: '8px', margin: '0px 4px' }}></li>
							<li data-target="#myCarousel" data-slide-to="3" style={{ backgroundColor: '#5F47EE', border: 'none', width: '8px', height: '8px', margin: '0px 4px' }}></li>
							<li data-target="#myCarousel" data-slide-to="4" style={{ backgroundColor: '#5F47EE', border: 'none', width: '8px', height: '8px', margin: '0px 4px' }}></li>
							<li data-target="#myCarousel" data-slide-to="5" style={{ backgroundColor: '#5F47EE', border: 'none', width: '8px', height: '8px', margin: '0px 4px' }}></li>
						</ol>

						<div className="carousel-inner">
							<div className="item active">
								<SupplyCard index={1} title='100% Fixed Supply' description='At launch, a total of 100 000 RBT was created, with 50 000 deposited and locked into the RBT Reserve. No more RBT can ever be created.' />
							</div>
							<div className="item">
								<SupplyCard index={2} title='Deflation-ary forces' description='Every RBT transfer incurs a 1% fee that gets burned. Effectively, every transaction contributes to the reduction of the total supply of RBT.' />
							</div>
							<div className="item">
								<SupplyCard index={3} title='Community Governed' description='RBT and all subsequent project will be community governed project. As shareholders, RBW holders will have voting rights.' />
							</div>
							<div className="item">
								<SupplyCard index={4} title='Loyalty Reward' description='Every time a RBT transaction occurs, 1% of the total amount of the transaction is deducted, burned, and converted into RBW.' />
							</div>
							<div className="item">
								<SupplyCard index={5} title='fair share, No Presale' description='40% of the total supply of RBT was provided as liquidity on Pancakeswap and burned. While 50% is time-locked in theRBT Reserve.' />
							</div>
							<div className="item">
								<SupplyCard index={6} title='15-day Timelock' description='There is a 15-day timelock delay on both the RBT and Reserve smart contracts. RBW holders can vote to implement some changes.' />
							</div>
						</div>
					</div>
				</div>
			}

		</Wrapper>
	)
}

export default Distribution