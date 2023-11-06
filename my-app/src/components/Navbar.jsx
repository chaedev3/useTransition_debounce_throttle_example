import { Link } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div`
  width: 100vw;
`;
const Button = styled.button`
  background: white;
  color: black;
  padding: 0.25em 1em;
  margin: 1em;
  font-size: 1em;
  border: 2px solid black;
  border-radius: 3px;
`;

export default function Navbar() {
  return (
    <Container>
      <Link to="/">
        <Button>기본</Button>
      </Link>
      <Link to="/debounce">
        <Button>Debounce</Button>
      </Link>
      <Link to="/throttle">
        <Button>Throttle</Button>
      </Link>
      <Link to="/starttransition">
        <Button>StartTransition</Button>
      </Link>
    </Container>
  );
}
