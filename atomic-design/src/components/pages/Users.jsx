import styled from "styled-components"
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((value) => {
  return {
    id: value+1,
    name : `テストユーザー#${value+1}`,
    image : 'https://source.unsplash.com/NE0XGVKTmcA',
    email: 'test@example.com',
    phone: '090-1234-5678',
    company: {
      name: '株式会社Hoge',
    },
    website: 'https://google.com'
  }
});

export const Users = ()=> {
  return (
    <Scontainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </Scontainer>
  )
}

const Scontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repert(auto-fit, minmax(200px, 1fr));
  grid-grap: 20px;
`
