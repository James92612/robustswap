import styled, { css } from 'styled-components'
import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import "./styles.css";
import DonutChart from "react-donut-chart";
import { Item } from 'react-donut-chart/dist/DonutChart';
// import MyChart from './Chart'

const MyChart = styled(DonutChart)`
  width:528px;
  height:528px;
`

const SupplyWrapper = styled.div`
  color: white;
  font-family: 'Poppins';
  position: absolute;
  top: 138px;
  left: 126px;
  right: 0;
  bottom: 0;
  height: 200px;
  width: 250px;
`

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  @media(max-width:505px){
    .ttlNumber {
      font-size: 24px;
    }
  }
`
const Wrapper = styled.div`
  width:100%;
  padding:186px 0px 0px;
  background:#0C0720;
  position:relative;
  top:-4px;
`
const Inner = styled.div`
  max-width:1200px;
  width:90%;
  margin:0 auto;
  display:flex;
  justify-content:space-between;
  flex-wrap:wrap;
`
const Leftside = styled.div`
  display:block;
`
const Rightside = styled.div`
  display:block;
  @media(max-width:1144px){
    margin-top:72px;
  }
  position:relative;
`
const Chart = styled(MyChart)`
  @media(max-width:768px){
    position:relative;
    left:200px;
  }
`
const Header = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 72px;
  display: inherit;
  line-height: 80px;
  letter-spacing: -1px;
  text-transform: uppercase;
  color: #FF7070;
  margin-bottom:24px;
  max-width: 530px;
  @media(max-width:1144px){
    max-width: 100%;
  }
  @media(max-width:535px){
    font-size:50px;
  }
  @media(max-width:360px){
    font-size:45px;
  }
`
const Text = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 1px;
  color: #FCFCFC;
  margin-bottom:56px;
`
const Title = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #FCFCFC;
`
const Circle = styled.div < { color?: any } > `
  width:24px;
  height:24px;
  border-radius:100%;
  background:${({ color }) => color};
  margin-right:24px;
`
const TitleBar = styled.div`
  display:flex;
  margin-top:16px;
`
const Modal = styled.div`
  padding:12px 16px 16px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  background: #151745;
  border: 1px solid #FF7070;
  box-sizing: border-box;
  border-radius: 8px;
  text-align:left;
  
  width:221px;
  height:108px;
  z-index:-1px;

  position:absolute;
  ${(props: { mode?: any }) => {
    switch (props.mode) {
      case "Approved":
        return css`
          top:230px;
          left:160px;
        `
      case "Rejected":
        return css`
          top:170px;
          left:160px;
        `
      case "Acknowledged":
        return css`
          top:230px;
          left:120px;
        `
      case "on Hold":
        return css`
          top:170px;
          left:120px;
        `
    }
  }}
  transition: top 0.3s, left 0.3s;
`
const ModalText = styled.div`
  color:#FCFCFC;
  font-size:18px;
  line-height:24px;
  font-family:'Poppins';
  font-weight:600;
  margin-top:4px;
`

const Features = () => {
  let modalobj: Element | null;
  useEffect(() => {
    const svg = document.getElementsByClassName("dchart")[0];
    svg.setAttribute("viewBox", "0,0,500,500")
    modalobj = document.querySelector("#moodal");
  }, [])

  const [data, SetData] = useState<Item>();
  const [isover, SetIsOver] = useState<boolean>(false);
  const [posX, SetPosX] = useState<any>();
  const [posY, SetPosY] = useState<any>();

  return (
    <Wrapper id="Token Distribution">
      <Inner>
        <Leftside>
          <Header>DISTRIBUTION OF THE RBT TOKEN</Header><br />
          <div style={{ height: '24px' }} />
          <Text> Here is overview of the token distribution</Text>
          {
            Chartinfos.map((info, index) => (
              <TitleBar key={index}>
                <Circle color={info.color} />
                <Title>{info.text}</Title>
              </TitleBar>
            ))
          }

        </Leftside>
        <Rightside onMouseMove={(e) => {
          if (isover) {
            SetPosX(e.pageX);
            SetPosY(e.pageY - 5200);
            // console.log('x : ', posX);
            // console.log('y : ', posY);
          }
        }}>
          {/* <div className="App">
            <div className="chart_container" style={{ position: 'relative' }}> */}
          <MyChart
            className="dchart"
            innerRadius={1}
            selectedOffset={0}
            outerRadius={0.55}
            colors={["#E354FA", "#84FF70", "#6C60F6", "#D6EE47"]}
            data={[
              {
                label: "Approved",
                value: 35
              },
              {
                label: "Acknowledged",
                value: 20
              },
              {
                label: "on Hold",
                value: 20
              },
              {
                label: "Rejected",
                value: 25
              }
            ]}
            onMouseEnter={(e) => {
              SetIsOver(true);
              SetData(e);
              console.log(e)
            }}
            onMouseLeave={() => {
              SetIsOver(false);
            }}
          />
          <SupplyWrapper>
            <Flex>
              <div style={{ textAlign: 'center' }}>
                <Typography variant='button' sx={{ fontWeight: 300, textTransform: 'none' }}>Total supply</Typography>
                <Typography className="ttlNumber" variant='subtitle2'>100,000 RBT</Typography>
              </div>
            </Flex>
          </SupplyWrapper>

          {/* </div>
          </div > */}
          {/* <MyChart /> */}
          {isover ?
            <Modal mode={`${data?.label}`} className="modal">
              <ModalText>{data?.value}%</ModalText>
              <ModalText>{data?.label}</ModalText>
              <ModalText>5 000 RBT (Burned)</ModalText>
            </Modal> :
            <Modal style={{ display: 'none' }} mode={`${data?.label}`} className="modal">
              <ModalText>{data?.value}%</ModalText>
              <ModalText>{data?.label}</ModalText>
              <ModalText>5 000 RBT (Burned)</ModalText>
            </Modal>
          }
        </Rightside>

      </Inner>

    </Wrapper>
  )
}

const Chartinfos = [
  {
    color: "#E354FA",
    text: "Ecosystem Fund (Burn)"
  },
  {
    color: "#84FF70",
    text: "Initial Liquidity (Burn)"
  },
  {
    color: "#6C60F6",
    text: "RBT Reserve (Time-locked)"
  },
  {
    color: "#D6EE47",
    text: "Marketing Fund"
  }
]

export default Features