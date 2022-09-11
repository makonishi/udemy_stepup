import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/organisms/user/UserCard';
import { DefaultLayout } from './components/templates/DefaultLayout';

const user = {
  name : 'テストユーザー',
  image : 'https://source.unsplash.com/NE0XGVKTmcA',
  email: 'test@example.com',
  phone: '090-1234-5678',
  company: {
    name: '株式会社Hoge',
  },
  website: 'https://google.com'
}
function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} ></UserCard>
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;
