import { useLocation } from 'react-router-dom';

export const Page1DetailB = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <h1>Page1DetailBです</h1> 
  )
}
