import styled from "styled-components";
import { useRouter } from "next/router";
import Card from "@/components/Card/Card";
import useSWR from "swr";
import Image from "next/image";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, error } = useSWR(`/api/shoes/${id}`, fetcher);

  if (isLoading) {
    return <div>is loading...</div>;
  }

  if (error) {
    return <div>error</div>;
  }

  //   console.log(data);

  const {
    absorption,
    brand,
    _id,
    image,
    name,
    price,
    runType,
    shoeType,
    weight,
  } = data;

  return (
    <StyledBodyDiv>
      <StyledHeader>
        <StyledH1>{name}</StyledH1>
        <StyledH2>{brand}</StyledH2>
      </StyledHeader>
      <Image src={image} alt={`${name} ${brand}`} width={500} height={500} />
      <StyledArticle>
        <StyledDetailUl>
          <StyledDetailList>
            <StyledSpan>🏋️‍♂️weight:</StyledSpan> <br />
            <SytledInformation>{weight} gramm</SytledInformation>
          </StyledDetailList>
          <StyledDetailList>
            <StyledSpan>🏃‍♀️run type:</StyledSpan> <br />
            <SytledInformation>{runType}</SytledInformation>
          </StyledDetailList>
          <StyledDetailList>
            <StyledSpan>👟shoe type:</StyledSpan> <br />
            <SytledInformation>{shoeType}</SytledInformation>
          </StyledDetailList>
          <StyledDetailList>
            <StyledSpan>🦿absorption:</StyledSpan> <br />
            <SytledInformation>{absorption}</SytledInformation>
          </StyledDetailList>
          <StyledDetailList>
            <StyledSpan>💰price:</StyledSpan> <br />
            <SytledInformation>{price}</SytledInformation>
          </StyledDetailList>
        </StyledDetailUl>
      </StyledArticle>
    </StyledBodyDiv>
  );
}

const StyledH1 = styled.h1`
  font-size: 3.5rem;
  margin: 2rem auto 1rem;
`;
const StyledH2 = styled.h2`
  font-size: 2rem;
  font-style: italic;
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

const StyledArticle = styled.article`
  width: 25rem;
  text-align: center;
  margin: 1rem;
  background-color: black;
  color: white;
  list-style-type: none;
  border-radius: 10px;
  &:hover {
    border: salmon solid 2px;
  }
`;

const StyledDetailUl = styled.ul`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`;

const StyledDetailList = styled.li`
  list-style-type: none;
  padding: 0.8rem;
`;

const StyledSpan = styled.span`
  font-size: 32px;
`;

const SytledInformation = styled.span`
  font-size: 20px;
`;
