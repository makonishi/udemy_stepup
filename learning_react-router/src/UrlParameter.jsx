import { useParams } from 'react-router-dom';

export const UrlParameter = () => {
  const { id } = useParams();
  return(
    <>
      <h1>UrlParameterです</h1>
      <p>パラメーターは{ id }だ</p>
    </>
  )
}
