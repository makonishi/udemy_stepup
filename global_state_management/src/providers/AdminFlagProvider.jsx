import { createContext, useState } from "react";

export const AdminFlagContext = createContext({}); // contextを参照する側で使用するためexport

export const AdminFlagProvider = props => { // グローバルStateを扱いたいコンポーネントを囲むためexport
  const { children } = props;

  const [isAdmin, setIsAdmin] = useState(false);

  // グローバルに扱いたい値をvalueにpropsとして設定
  return (
    <AdminFlagContext.Provider value={{isAdmin, setIsAdmin}}>
      {children}
    </AdminFlagContext.Provider>
  )
}

