import styled from "styled-components";
import Card from "@/components/Card/Card";
import useSWR from "swr";
import { useState } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, error, isLoading } = useSWR(`/api/shoes`, fetcher);
  const [FilterButtonClicked, setFilterButtonClicked] = useState(false);
  const [resetButtonClicked, setResetButtonClicked] = useState(false);
  const [filterByWeight, setFilterByWeight] = useState("all");
  const [filterByRunType, setFilterByRunType] = useState("all");
  const [filterByShoeType, setFilterByShoeType] = useState("all");

  if (error) {
    return <div>error</div>;
  }

  if (isLoading) {
    return <div>is loading...</div>;
  }

  function handleFilterButtonClick() {
    return setFilterButtonClicked(!FilterButtonClicked);
  }

  function handleResetButtonClick() {
    setFilterByWeight("all");
    setFilterByRunType("all");
    setFilterByShoeType("all");
    setResetButtonClicked(!resetButtonClicked);
  }

  const filteredData = data.filter((shoe) => {
    const weightFilter =
      filterByWeight === "all" ||
      (filterByWeight === "under" && shoe.weight < 250) ||
      (filterByWeight === "over" && shoe.weight >= 250);

    const runTypeFilter =
      filterByRunType === "all" ||
      (filterByRunType === "long" && shoe.runType === "long") ||
      (filterByRunType === "short" && shoe.runType === "short");

    const shoeTypeFilter =
      filterByShoeType === "all" ||
      (filterByShoeType === "neutral" && shoe.shoeType === "Neutral") ||
      (filterByShoeType === "stability" && shoe.shoeType === "Stability");

    return weightFilter && runTypeFilter && shoeTypeFilter;
  });

  console.log(data);

  return (
    <StyledBodyDiv>
      <StyledHeader>
        {" "}
        <StyledH1>Step-Step</StyledH1>
        <StyledH2>Find your perfect running shoe</StyledH2>
      </StyledHeader>
      <StyledButtonDiv>
        {" "}
        <StyledButton onClick={handleFilterButtonClick}>Filter</StyledButton>
        <StyledButton onClick={handleResetButtonClick}>Reset</StyledButton>
      </StyledButtonDiv>
      <article style={{ display: FilterButtonClicked ? "none" : "grid" }}>
        <StyledDropdown>
          <label>Weight:</label>
          <select
            onChange={(e) => setFilterByWeight(e.target.value)}
            value={filterByWeight}
          >
            <option value="all">All</option>
            <option value="under">Under 250g</option>
            <option value="over">Over 250g</option>
          </select>
        </StyledDropdown>

        {/* Dropdown for Run Type */}
        <StyledDropdown>
          <label>Run Type:</label>
          <select
            onChange={(e) => setFilterByRunType(e.target.value)}
            value={filterByRunType}
          >
            <option value="all">All</option>
            <option value="long">Long</option>
            <option value="short">Short</option>
          </select>
        </StyledDropdown>

        {/* Dropdown for Shoe Type */}
        <StyledDropdown>
          <label>Shoe Type:</label>
          <select
            onChange={(e) => setFilterByShoeType(e.target.value)}
            value={filterByShoeType}
          >
            <option value="all">All</option>
            <option value="neutral">Neutral</option>
            <option value="stability">Stability</option>
          </select>
        </StyledDropdown>
      </article>
      {filteredData.map((shoe) => {
        return (
          <StyledList key={shoe._id}>
            <Card name={shoe.name} brand={shoe.brand} id={shoe._id} />
          </StyledList>
        );
      })}
    </StyledBodyDiv>
  );
}

const StyledH1 = styled.h1`
  font-size: 3.5rem;
  margin: 2rem auto 1rem;
`;
const StyledH2 = styled.h2`
  font-size: 2rem;
  color: salmon;
`;

const StyledBodyDiv = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  background-color: black;
  color: white;
  padding-bottom: 1rem;
`;

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const StyledList = styled.li`
  list-style-type: none;
  margin: 1rem;
`;

const StyledDropdown = styled.div`
  margin: 10px;

  label {
    margin-right: 5px;
  }

  select {
    padding: 5px;
  }
`;

const StyledButtonDiv = styled.div`
  display: flex;
  gap: 3rem;
  margin: 1.5rem;
`;

const StyledButton = styled.button`
  color: white;
  background-color: black;
  font-size: 20px;
  border: none;
  width: 6rem;
  height: 3rem;
  border-radius: 10px;

  &:hover {
    background-color: salmon;
  }
`;
