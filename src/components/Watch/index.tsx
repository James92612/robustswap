import styled from 'styled-components'

const Wrapper = styled.div`
  width:100%;
  background: #D6EE47;
  padding:91px 0px 92px;
  position:relative;
  top:-3px;
`
const Inner = styled.div`
  max-width:1084px;
  width:90%;
  margin:0 auto;
  display:flex;
  justify-content:space-between;
  flex-wrap:wrap;
`
const Leftside = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 72px;
  line-height: 80px;
  letter-spacing: -1px;
  text-transform: uppercase;
  color: #0F0F0E;
  @media(max-width:500px){
    font-size:50px;
  }
  @media(max-width:360px){
    font-size:45px;
  }
`
const Button = styled.div`
  max-width:523px;
  width:100%;
  background:#5F47EE;
  border-radius:28px;
  padding:16px 0px;
  text-align:center;
  margin-top:40px;
  
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;
  color: #FCFCFC;
  cursor:pointer;
`
const Text = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 1px;
  color: #0F0F0E;
`
const Rightside = styled.div`
  padding:120px 0 0;
  display:block;
`
const Watch = () => {
  return (
    <Wrapper>
      <Inner>
        <Leftside>what the<br /> community<br /> is saying</Leftside>

        <Rightside>
          <Text>A curated video playlist about Robust protocol</Text>
          <Button>WATCH</Button>
        </Rightside>
      </Inner>
    </Wrapper>
  )
}

export default Watch