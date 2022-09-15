import { Icon } from "../interface"; //中括弧忘れない

interface SquareProps {
  value: Icon;
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void;
}

const Square: React.FC<SquareProps> = ({value, onClick}) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};
export default Square;
