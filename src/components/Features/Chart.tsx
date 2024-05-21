
import { useEffect } from 'react';
import { Typography } from '@mui/material';
import "./styles.css";
import DonutChart from "react-donut-chart";
import styled from 'styled-components';

const MyChart = styled(DonutChart)`
  width:528px;
  height:528px;
`

const SupplyWrapper = styled.div`
  color: white;
  font-family: 'Poppins';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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

export default function App() {
  useEffect(() => {
    const svg = document.getElementsByClassName("dchart")[0];
    svg.setAttribute("viewBox", "0,0,500,500")
  }, [])

  return (
    <div className="App">
      <div className="chart_container" style={{ position: 'relative' }}>
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
        />
        <SupplyWrapper>
          <Flex>
            <div style={{ textAlign: 'center' }}>
              <Typography variant='button' sx={{ fontWeight: 300, textTransform: 'none' }}>Total supply</Typography>
              <Typography className="ttlNumber" variant='subtitle2'>100,000 RBT</Typography>
            </div>
          </Flex>
        </SupplyWrapper>
      </div>
    </div >
  );
}