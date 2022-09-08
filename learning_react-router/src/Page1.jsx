import { Link } from 'react-router-dom';
export const Page1 = () => {
  const detailA= 'detailAです';
  return (
    <>
      <h1>Page1です</h1>
      <Link to={{pathname: "page1/detailA", state: detailA}}>DetailA</Link>
      <Link to="page1/detailB">DetailB</Link>
      <br />
    </>
  )
}
