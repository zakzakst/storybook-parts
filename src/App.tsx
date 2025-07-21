// import { Accordion01 } from "./components/accordion/01";
import { Card12 } from "./components/card/12";

function App() {
  return (
    <>
      <Card12 items={[
        {
          href: "#",
          thumbnail: "https://picsum.photos/id/1000/400/200",
          category: "NEWS",
          text: "テキストが入ります。テキストが入ります。テキストが入ります。",
          date: "2021.01.01",
        },
        {
          href: "#",
          thumbnail: "https://picsum.photos/id/1000/400/200",
          category: "NEWS",
          text: "テキストが入ります。テキストが入ります。テキストが入ります。",
          date: "2021.01.01",
        },
        {
          href: "#",
          thumbnail: "https://picsum.photos/id/1000/400/200",
          category: "NEWS",
          text: "テキストが入ります。テキストが入ります。テキストが入ります。",
          date: "2021.01.01",
        },
      ]} />
      {/* <Accordion01
        items={[
          {
            id: "1",
            text: "テキスト",
            subText: "サブテキスト",
            content: "内容",
            name: "ccordion01",
          },
          {
            id: "2",
            text: "テキスト2",
            subText: "サブテキスト2",
            content: <>内容2</>,
            name: "ccordion01",
          },
        ]}
      /> */}
    </>
  );
}

export default App;
