import { startTransition, useState, useTransition } from "react";
import BoxList from "../components/BoxList";
import { styled } from "styled-components";
const Input = styled.input`
  margin-left: 15px;
`;
const Title = styled.h1`
  margin-left: 15px;
`;

function StartTransitionPage() {
  const [isPending, startTransition] = useTransition();
  const [boxCount, setBoxCount] = useState(0);
  const handleUpdate = ({ target }) => {
    startTransition(() => {
      setBoxCount(target.value.length * 2);
    });
  };
  return (
    <>
      <Title>StartTransition</Title>
      <Input type="text" onChange={handleUpdate} />
      {isPending && <h1>Pending@!!</h1>}
      <BoxList count={boxCount} />
    </>
  );
}

export default StartTransitionPage;
