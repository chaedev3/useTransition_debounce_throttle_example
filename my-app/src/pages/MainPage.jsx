import { useState } from "react";
import BoxList from "../components/BoxList";
import { styled } from "styled-components";
const Input = styled.input`
  margin-left: 15px;
`;

const Title = styled.h1`
  margin-left: 15px;
`;

function MainPage() {
  const [boxCount, setBoxCount] = useState(0);

  const handleUpdate = ({ target }) => {
    setBoxCount(target.value.length * 2);
  };
  return (
    <>
      <Title>기본</Title>
      <Input type="text" onChange={handleUpdate} />
      <BoxList count={boxCount} />
    </>
  );
}

export default MainPage;
