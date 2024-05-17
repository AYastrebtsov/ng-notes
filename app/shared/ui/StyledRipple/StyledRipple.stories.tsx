import type { StoryObj, Meta } from "@storybook/react";

import { StyledRipple } from "./StyledRipple";

const Example = () => (
  <div className="card justify-content-center align-items-center flex gap-2">
    <div className="p-ripple border-round border-radius-10 shadow-2 p-5">
      Green
      <StyledRipple
        pt={{
          root: { style: { background: "rgba(75, 175, 80, 0.3)" } },
        }}
      />
    </div>
    <div className="p-ripple border-round border-radius-10 shadow-2 p-5">
      Orange
      <StyledRipple
        pt={{
          root: { style: { background: "rgba(255, 193, 6, 0.3)" } },
        }}
      />
    </div>
    <div className="p-ripple border-round border-radius-10 shadow-2 p-5">
      Purple
      <StyledRipple
        pt={{
          root: { style: { background: "rgba(156, 39, 176, 0.3)" } },
        }}
      />
    </div>
  </div>
);

/**
 * <p>Эта утилита нужна только потому, что в библиотечном Ripple не прописаны типы для пропа PT. Нужен для того чтобы добвить Ripple не только кнопкам, но и ссылкам, и иметь возможность перекрасить цвет самого Ripple</p>
 * <p>Основана на https://primereact.org/ripple/</p>
 */
const meta = {
  title: "Утилиты/StyledRipple",
  component: Example,
  tags: ["autodocs"],
} satisfies Meta<typeof Example>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: "StyledRipple c разными цветами",
};
