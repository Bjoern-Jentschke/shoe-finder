import Link from "next/link";
import styled from "styled-components";
import FilledStar from "../FilledStar";
import Star from "../Star";

export default function Card({ name, brand, id, onToggle, isFavorite }) {
  return (
    <StyledLink href={`shoes/${id}`}>
      <StyledArticle>
        {/* <StyledFavoriteButton onClick={onToggle}>
          {isFavorite ? <FilledStar /> : <Star />}
        </StyledFavoriteButton> */}
        <StyledName>{name}</StyledName>
        <StyledBrand>{brand}</StyledBrand>
      </StyledArticle>
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledArticle = styled.article`
  width: 20rem;
  height: 5rem;
  text-align: center;
  background-color: white;
  color: black;
  list-style-type: none;
  margin: 1rem, 0, 1rem, 0;
  padding: 0.5rem;
  border-radius: 10px;
  &:hover {
    border: salmon solid 2px;
  }
`;

const StyledName = styled.p`
  font-size: 1.2rem;
  margin: 0.5rem auto 0.25rem auto;
`;
const StyledBrand = styled.p`
  font-size: 1rem;
  font-style: italic;
  margin: 0.5rem auto 1rem auto;
`;

const StyledFavoriteButton = styled.button`
  background-color: transparent;
  border: none;
`;
