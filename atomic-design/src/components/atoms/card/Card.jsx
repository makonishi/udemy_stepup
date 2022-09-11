import styled from "styled-components"

export const Card = (props) => {
  const { children } = props;
  return (
    <div>
      <Scard>{children}</Scard>
    </div>
  )
}

const Scard = styled.div`
  background-color: #fff;
  box-shadow: #ddd 0px 0px 4px 2px;
  border-radius: 8px;
  padding: 16px;
`;
