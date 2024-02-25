import FilledStar from "../Favorite/FilledStar";
import Star from "../Favorite/Star";

export default function FavoriteButton({}) {
  return (
    <button
      className="favorite-button"
      onClick={() => onToggleFavorite(id)}
      aria-label="favorite"
    >
      {isFavorite ? <FilledStar /> : <Star />}
    </button>
  );
}

StyledButton = styled.button`
  appearance: none;
  background: none;
  border: none;
  padding: 0;
  border-radius: 999px;
  aspect-ratio: 1;
  transition: background-color 0.2s ease-in-out;
  background-color: transparent;
  margin: -6px;
  padding: 6px;
`;
