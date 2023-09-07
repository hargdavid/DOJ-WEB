type Props = {
  text: string;
};

const Bullet = ({ text }: Props) => {
  return <li>{text}</li>;
};

export default Bullet;
