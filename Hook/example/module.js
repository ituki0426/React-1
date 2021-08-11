import React from 'react';
import { useState } from 'react';
function App() {
  const [count, setCoust] = useState(0);
  return(
    <div>
      <p>You clicked {count} times</p>
      <button onClick={()=>setCoust(count + 1)}>
        click me
      </button>
     </div>
  );
}
export default App;
/*この例のuseStateがフックです。関数のコンポーネントの中でローカルなstateを使うために呼び出しています。
このstateは以降の再レンダーの間にもReactによって保持されます。
useStateは現在のstateの値と、それを更新するための関数とをペアにして返す
*/
