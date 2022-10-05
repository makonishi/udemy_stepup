import { useContext } from "react";
import { AdminFlagContext } from "../providers/AdminFlagProvider";

const style = {
  width: '100px',
  padding: '6px',
  borderRadius: '8px'
}

export const EditButton = props => {

  // グローバルのstateを参照したい特定のコンポーネントに対して、useContextの引数に作成したcontextを渡す
  const { isAdmin } = useContext(AdminFlagContext);
  
  // isAdminがfalse(管理者でない)時にボタンを非活性にする
  return (
    <button style={style} disabled={!isAdmin}>編集</button>
  )
}
