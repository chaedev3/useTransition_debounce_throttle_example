import React from "react";
import BoxItem from "./BoxItem";
import { styled } from "styled-components";
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(10px, 1fr)
  ); /* Adjust column sizing as needed */
  gap: 25px; /* Adjust gap as needed */
  margin: 15px;
`;
function BoxList(props) {
  const boxCount = props.count;

  // Create an array to hold the repeated BoxItem components
  const boxItems = Array.from({ length: boxCount }, (_, index) => (
    <BoxItem key={index} />
  ));

  // Define the Container styled component
  return <Container>{boxItems}</Container>;
}

export default BoxList;
