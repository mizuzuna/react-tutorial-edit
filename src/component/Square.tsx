import { Icon } from "../interface"; //中括弧忘れない

interface SquareProps {
  value: Icon;
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void;
}

const Square: React.FC<SquareProps> = (props) => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
};
export default Square;

/*export default function Square(props: SquareProps) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}*/
