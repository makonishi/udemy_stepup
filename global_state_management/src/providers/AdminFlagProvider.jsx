import { createContext } from "react";

export const AdminFlagContext = createContext({}); // contextを参照する側で使用するためexport

export const AdminFlagProvider = props => { // グローバルStateを扱いたいコンポーネントを囲むためexport
  const { children } = props;

  const sampleObj = { sampleValue: 'テスト' };

  // グローバルに扱いたい値をvalueにpropsとして設定
  return (
    <AdminFlagContext.Provider value={sampleObj}>
      {children}
    </AdminFlagContext.Provider>
  )
}

