import type { PartialStoryFn } from "storybook/internal/csf";

export const ScrollAnimDecorator = (Story: PartialStoryFn) => (
  <div>
    <div style={{ height: "100vh", backgroundColor: "#eee" }}>
      <p style={{ textAlign: "center" }}>▼▼▼ スクロールしてください ▼▼▼</p>
    </div>
    <Story />
    <div style={{ height: "100vh", backgroundColor: "#eee" }} />
  </div>
);

export const ContainerQueryDecorator = (Story: PartialStoryFn) => (
  <div style={{ containerType: "inline-size" }}>
    <Story />
  </div>
);
