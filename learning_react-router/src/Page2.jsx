import { Link } from 'react-router-dom';
export const Page2 = () => {
  return (
    <>
      <h1>Page2です</h1>
      <Link to='/page2/100'>UrlParameter</Link>
      <Link to='/page2/100?name=hoge'>QueryParameter</Link>
    </>
  )
}
