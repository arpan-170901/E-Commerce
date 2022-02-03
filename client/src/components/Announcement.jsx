import styled from "styled-components";

const Container = styled.div`
  height: 40px;
  background-color: teal;
  color: yellow;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 8000;
`;

const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders Over ₹400, with offers upto 60% in each Product. HURRY!</Container>;
};

export default Announcement;
