import styled from 'styled-components'

const Wrapper = styled.div`
  background: rgba(12, 7, 32, 0.6);
  border-radius: 8px;
  padding: 24px;
  max-width: 343px;
  width: 100%;
  height: fit-content;
`

const Date = styled.div`
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #7381FC;
  margin-bottom: 8px;
`

const Title = styled.div`
  font-family: 'Poppins';
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  color: white;
  margin-bottom: 24px;
`

const Description = styled.div`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: white;
`

const Card = (props: any) => {

  return (
    <Wrapper>
      <Date>{props.date}</Date>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
    </Wrapper>
  )
}

export default Card;