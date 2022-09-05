const style = {
  width: '100%',
  height: '200px',
  backgroundColor: 'khaki'
}

export const ChildArea = (props) => {
  console.log('ChildArea');
  const { open } = props;
  return(
    <>
      { open ? (
        <p style={style}>子コンポーネント</p>
      ) : null }
    </>
  )
}
