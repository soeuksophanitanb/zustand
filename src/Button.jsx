import { useCounter } from "./zustand/store";

const Button = () => {
  const { increase } = useCounter();
  return <button onClick={increase}>Inc</button>;
};

export default Button;
