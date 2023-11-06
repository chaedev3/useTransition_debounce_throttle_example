import { useState } from "react";
import _ from "lodash";
import { styled } from "styled-components";
import BoxList from "../components/BoxList";

const Input = styled.input`
  margin-left: 15px;
`;

const Title = styled.h1`
  margin-left: 15px;
`;

function ThrottlePage() {
  const [boxCount, setBoxCount] = useState(0);

  const throttle = _.throttle((e) => {
    console.log(e.target.value);
    // setBoxCount(e.target.value.length * 2);
  }, 500);

  return (
    <>
      <Title>Throttle</Title>
      <Input type="text" onChange={throttle} />
      <BoxList count={boxCount} />
    </>
  );
}

export default ThrottlePage;
