import styled from "styled-components";

export const StyleCompornent = () => {
  return (
    <Container>
      <Title>StyleCompornent</Title>
      <Button>perfect!</Button>
    </Container>
  );
};

const Container = styled.div`
  border: solid 2px #e8d3d1;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Title = styled.p`
  margin: 0;
  color: #c8b3b1;
`;
const Button = styled.button`
  background-color: #f8e3e1;
  border: none;
  padding: 8px;
  border-radius: 8px;
`;
