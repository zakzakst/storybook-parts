import { Accordion01 } from "./components/accordion/01"
import { Button01 } from "./components/button/01"
// import './App.css'

function App() {
  return (
    <>
      <Accordion01 items={[
        {
          id: '1',
          text: 'テキスト',
          subText: 'サブテキスト',
          content: '内容',
          name: 'ccordion01'
        },
        {
          id: '2',
          text: 'テキスト2',
          subText: 'サブテキスト2',
          content: <>内容2</>,
          name: 'ccordion01'
        },
      ]} />
      <Button01>ボタン01</Button01>
    </>
  )
}

export default App
