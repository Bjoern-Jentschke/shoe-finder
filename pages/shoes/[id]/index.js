import styled from "styled-components";
import { useRouter } from "next/router";
import useSWR from "swr";
import Image from "next/image";
import { useEffect, useState } from "react";
import FilledStar from "@/components/FilledStar";
import Star from "@/components/Star";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function DetailsPage() {
  const [isFavorite, setIsFavorite] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, error, mutate } = useSWR(
    `/api/shoes/${id}`,
    fetcher
  );

  useEffect(() => {
    if (data) {
      setIsFavorite(data.isFavorite);
    }
  }, [data]);

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

  async function handleToggle() {
    const updatedData = { ...data, isFavorite: !isFavorite };
    setIsFavorite(!isFavorite);
    const response = await fetch(`/api/shoes/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });
    if (response.ok) {
      mutate();
    }
  }

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
          <StyledDetailList>
            <StyledSpan></StyledSpan> <br />
            <StyledFavoriteButton onClick={handleToggle}>
              {isFavorite ? <FilledStar /> : <Star />}
            </StyledFavoriteButton>
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

const StyledFavoriteButton = styled.button`
  background-color: transparent;
  border: none;
`;
