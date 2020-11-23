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

'''
import React, { useEffect } from "react";

//mount や再描画(再レンダリング)されたタイミングで呼び出される。
useEffect( () => {
console.log('this is useEffect')
})

'''
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
