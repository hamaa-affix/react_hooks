# react_hooks

## useState

- component での状態管理に用いる
- 配列としてデータは格納している。
- rendering が開始される時はコードの上から順に読み込まれているためトップレベルに定義する必要がある。

```
import React, {useState} from 'react';

const Demo = () => {
  //配列へ分割代入している。
  const [value, setVule] = useState(0)
}
```

上記のコードは const [] 初めの要素は*データ*,次の要素が*データを上書きするメソッド*となっている。
useState()の引数は*データの初期化(default 値)*

実験的に console.log で見てみると,上記の内容が内部的に設定されている

```
const value = useState("test");
  console.log(value);

//console
  ["test", ƒ bound dispatchAction()]
    0: "test"
    1: ƒ bound dispatchAction() {}
```

usaState はデータをオブジェクトとしてうけることもできる。
下記のコードオブジェクトを props として渡すしている。

```
~中略~
const App = (props) => {
  const [ state, setState ] = useState(props);
  const { name, price } = state;
  return (
    <>
      <p>商品：　{name}, 値段：{price}円</p>
      <input
        value={name}
        onChange={() => setState({...state, name:e.target.value})}
      />
    </>
  );
}

//propsとしてオブジェクトごと渡す。
App.defaultProps = {
  name: ''
  price: 1000
}
```

## useEffect

- Vue で言うところの mounted
- rendring された後に実行される
- 第１引数に関数を取れる。第２引数に配列が取れる
-

```
import React, { useEffect } from "react";

//mount や再描画(再レンダリング)されたタイミングで呼び出される。
useEffect( () => {
console.log('this is useEffect')
})
```

useEffect を mounted のタイミングで呼び出したい時は空の配列を第２引数に渡す。

```
useEffect(() => console.log('only mouted'), [])
```

特定の propaty(state)の状態が変わったタイミングで実行をする場合は d 第二引数の配列の中に state をいれる。そうすることでデータの監視を行ってくれる。

```
const [name, setName] = useState;
useEffect(() => console.log('watch data'), [name])
```

## useReducer

- componet の状態管理の１つ
- ローバルに呼び出せる
- 1 回の更新で、複雑な演算が入ってオブジェクトのプロパティが多数書き換わるようなものを作る場合は、「(前の値, 変更内容) => 新しい値」という一定の書式で扱える reducer が便利

管理するには reducers/index.js ファイルを作成

```
reduers/index.js

//
const events = (state = [], action) => {
  switch (action.type) {
    case "CREATE_EVENT":
      const event = { title: action.title, body: action.body };
      const length = state.length;
      let id = length === 0 ? 1 : state[length - 1].id + 1;
      return [...state, { id, ...event }];
    case "DELETE_EVENT":
      return state.filter((event) => event.id !== action.id);
    case "DELETE_ALL_EVENTS":
      return state;
    default:
      return state;
  }
};

export default events;
```

コンポーネントで useReducer をインポートし、使用する。

- state、状態を管理する dispach を分割代入する。
- useReducer の引数は第一引数に reducer をうける。第２引数に初期値を設定

```
import React, {useReducer} from 'react';
import reducer from './reducer/index.js';

const [state, deispatch] = useReducer(reducer, [])

const chageState = (e) => {
  //dispatchの引数はオブジェクト。dispatchが実行されると、reducer(index.js)が呼び出され、処理が走る。
  dispatch({
    id:
    title:
    body:
  })
}
```

## useContext

use constext とは
親から子コンポーネント間でのデータ受け渡しを階層に関係なくデータを渡せる機能。
基本的に親 → ひ孫にデータを渡す際は props を利用して親 → 子 → ひ孫といった流れでデータを渡していたが、useContext を利用することで親 → ひ孫と行った経路でデータを渡すことができる。

### 実際の記述

context 用の js ファイルを作成し管理、それを import する
下記の内容でひとまず OK

```
contexts/AppContext.jsx
import { createContexzt } from  'react';

const AppContext = createContext();

export default AppContext;
```

親コンポーネントで usaeContext 定義したファイルをを使用できるようにする。そしてそれをコンポーネントとして活用する。

```
App.jsx

import AppContext from './contexts/AppContext';

const App = () => {
  return() {
    <>
    //value属性として渡したいデータを登録。
      <AppContext　value={'this is useContex'}>
        登録してる子のコンポーネントとか
      </AppContext>
    </>
  }
}
```

データを受けたいコンポーネントで useContex を使用するように宣言する

```
import React, {useContext} from 'react';

cosnt Children = () => {
  const value = useContex(AppContext);

  return (
    <>
    //これでデータを受け取る子とることができる
      <div>{value}</div>
    </>
  );
}
```
