import { Link, useHistory } from 'react-router-dom';
export const Page1 = () => {
  const detailA= 'detailAです';
  const history = useHistory();
  const onClickDetailA = () => history.push('page1/detailA');
  return (
    <>
      <h1>Page1です</h1>
      <Link to={{pathname: "page1/detailA", state: detailA}}>DetailA</Link>
      <Link to="page1/detailB">DetailB</Link>
      <br />
      <button onClick={onClickDetailA}>Page1に遷移</button>
    </>
  )
}
