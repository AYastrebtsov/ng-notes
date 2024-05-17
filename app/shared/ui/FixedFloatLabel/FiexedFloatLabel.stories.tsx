import type { StoryObj, Meta } from "@storybook/react";

const Example = () => <></>;

/**
 * <p>Эта утилита нужна только потому, что в библиотечном FloatLabel отсутствует prop Children</p>
 * <p>Основана на https://primereact.org/floatlabel/</p>
 */
const meta = {
  title: "Утилиты/FixedFloatLabel",
  component: Example,
  tags: ["autodocs"],
} satisfies Meta<typeof Example>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
