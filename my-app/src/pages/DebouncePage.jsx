import { useState } from "react";
import BoxList from "../components/BoxList";
import _ from "lodash";
import { styled } from "styled-components";
const Input = styled.input`
  margin-left: 15px;
`;
const Title = styled.h1`
  margin-left: 15px;
`;

function DebouncePage() {
  const [boxCount, setBoxCount] = useState(0);
  const handleUpdate = _.debounce((e) => {
    setBoxCount(e.target.value.length * 2);
  }, 1000);

  return (
    <>
      <Title>Debounce</Title>
      <Input type="text" onChange={handleUpdate} />
      <BoxList count={boxCount} />
    </>
  );
}

export default DebouncePage;
