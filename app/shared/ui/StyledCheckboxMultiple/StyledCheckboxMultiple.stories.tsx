import type { StoryObj, Meta } from "@storybook/react";

import { useArgs } from "@storybook/preview-api";
import * as DocBlock from "@storybook/blocks";

import { StyledCheckboxMultiple } from "./StyledCheckboxMultiple";

import schema from "./StyledCheckboxMultiple.schema.json";

/**
 * тип - checkboxMultiple
 * <p>Основан на https://primereact.org/checkbox</p>
 */
const meta = {
  title: "Общие компоненты/Поля ввода/checkboxMultiple",
  component: StyledCheckboxMultiple,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <>
          <DocBlock.Title />
          <DocBlock.Description />
          <h2>JSON Schema</h2>
          <DocBlock.Source
            language="json"
            code={JSON.stringify(schema, null, 2)}
          />
          <DocBlock.Canvas />
          <DocBlock.ArgTypes />
          <DocBlock.Stories />
        </>
      ),
    },
  },
} satisfies Meta<typeof StyledCheckboxMultiple>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: "Базовый вид",
  args: {
    inputtype: "checkboxMultiple",
    name: "radio",
    value: [],
    options: [
      {
        value: "winter",
        label: "Зима",
        disabled: false,
      },
      {
        value: "spring",
        label: "Весна",
        disabled: false,
      },
      {
        value: "summer",
        label: "Лето",
        disabled: false,
      },
      {
        value: "authum",
        label: "Осень",
        disabled: false,
      },
    ],
    onChange: () => {},
    // error: "Ошибка!",
    // status: "warning",

    // dividerBottom: true,
    // dividerTop: true,
    // heading: "Заголовок раздела с радиокнопками",

    // helperInfo: {
    //   text: "Текст",
    // },
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();

    return (
      <StyledCheckboxMultiple
        inputtype={args.inputtype}
        value={args.value}
        name={args.name}
        options={args.options}
        error={args.error}
        status={args.status}
        dividerBottom={args.dividerBottom}
        dividerTop={args.dividerTop}
        heading={args.heading}
        helperInfo={args.helperInfo}
        onChange={(values) => {
          updateArgs({ value: values });
        }}
      />
    );
  },
};

export const PrimaryFilled: Story = {
  name: "Заполенный",
  args: {
    inputtype: "checkboxMultiple",
    name: "radio",
    value: ["spring"],
    options: [
      {
        value: "winter",
        label: "Зима",
        disabled: false,
      },
      {
        value: "spring",
        label: "Весна",
        disabled: false,
      },
      {
        value: "summer",
        label: "Лето",
        disabled: false,
      },
      {
        value: "authum",
        label: "Осень",
        disabled: false,
      },
    ],
    onChange: () => {},
    // error: "Ошибка!",
    // status: "warning",

    // dividerBottom: true,
    // dividerTop: true,
    // heading: "Заголовок раздела с радиокнопками",

    // helperInfo: {
    //   text: "Текст",
    // },
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();

    return (
      <StyledCheckboxMultiple
        inputtype={args.inputtype}
        value={args.value}
        name={args.name}
        options={args.options}
        error={args.error}
        status={args.status}
        dividerBottom={args.dividerBottom}
        dividerTop={args.dividerTop}
        heading={args.heading}
        helperInfo={args.helperInfo}
        onChange={(values) => {
          updateArgs({ value: values });
        }}
      />
    );
  },
};

export const PrimaryDisabled: Story = {
  name: "Отключенный",
  args: {
    inputtype: "checkboxMultiple",
    name: "radio",
    value: ["summer"],
    options: [
      {
        value: "winter",
        label: "Зима",
        disabled: true,
      },
      {
        value: "spring",
        label: "Весна",
        disabled: true,
      },
      {
        value: "summer",
        label: "Лето",
        disabled: true,
      },
      {
        value: "authum",
        label: "Осень",
        disabled: true,
      },
    ],
    onChange: () => {},
    // error: "Ошибка!",
    // status: "warning",

    // dividerBottom: true,
    // dividerTop: true,
    // heading: "Заголовок раздела с радиокнопками",

    // helperInfo: {
    //   text: "Текст",
    // },
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();

    return (
      <StyledCheckboxMultiple
        inputtype={args.inputtype}
        value={args.value}
        name={args.name}
        options={args.options}
        error={args.error}
        status={args.status}
        dividerBottom={args.dividerBottom}
        dividerTop={args.dividerTop}
        heading={args.heading}
        helperInfo={args.helperInfo}
        onChange={(values) => {
          updateArgs({ value: values });
        }}
      />
    );
  },
};

export const PrimaryError: Story = {
  name: "Ошибка",
  args: {
    inputtype: "checkboxMultiple",
    name: "radio",
    value: ["summer"],
    options: [
      {
        value: "winter",
        label: "Зима",
        disabled: false,
      },
      {
        value: "spring",
        label: "Весна",
        disabled: false,
      },
      {
        value: "summer",
        label: "Лето",
        disabled: false,
      },
      {
        value: "authum",
        label: "Осень",
        disabled: false,
      },
    ],
    onChange: () => {},
    error: "Ошибка!",
    // status: "warning",

    // dividerBottom: true,
    // dividerTop: true,
    // heading: "Заголовок раздела с радиокнопками",

    // helperInfo: {
    //   text: "Текст",
    // },
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();

    return (
      <StyledCheckboxMultiple
        inputtype={args.inputtype}
        value={args.value}
        name={args.name}
        options={args.options}
        error={args.error}
        status={args.status}
        dividerBottom={args.dividerBottom}
        dividerTop={args.dividerTop}
        heading={args.heading}
        helperInfo={args.helperInfo}
        onChange={(values) => {
          updateArgs({ value: values });
        }}
      />
    );
  },
};

export const PrimaryStatus: Story = {
  name: "Статус",
  args: {
    inputtype: "checkboxMultiple",
    name: "radio",
    value: ["summer"],
    options: [
      {
        value: "winter",
        label: "Зима",
        disabled: false,
      },
      {
        value: "spring",
        label: "Весна",
        disabled: false,
      },
      {
        value: "summer",
        label: "Лето",
        disabled: false,
      },
      {
        value: "authum",
        label: "Осень",
        disabled: false,
      },
    ],
    onChange: () => {},
    // error: "Ошибка!",
    status: "warning",

    // dividerBottom: true,
    // dividerTop: true,
    // heading: "Заголовок раздела с радиокнопками",

    // helperInfo: {
    //   text: "Текст",
    // },
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();

    return (
      <StyledCheckboxMultiple
        inputtype={args.inputtype}
        value={args.value}
        name={args.name}
        options={args.options}
        error={args.error}
        status={args.status}
        dividerBottom={args.dividerBottom}
        dividerTop={args.dividerTop}
        heading={args.heading}
        helperInfo={args.helperInfo}
        onChange={(values) => {
          updateArgs({ value: values });
        }}
      />
    );
  },
};

export const PrimaryHeading: Story = {
  name: "Заголовок",
  args: {
    inputtype: "checkboxMultiple",
    name: "radio",
    value: ["summer"],
    options: [
      {
        value: "winter",
        label: "Зима",
        disabled: false,
      },
      {
        value: "spring",
        label: "Весна",
        disabled: false,
      },
      {
        value: "summer",
        label: "Лето",
        disabled: false,
      },
      {
        value: "authum",
        label: "Осень",
        disabled: false,
      },
    ],
    onChange: () => {},
    // error: "Ошибка!",
    // status: "warning",

    // dividerBottom: true,
    // dividerTop: true,
    heading: "Заголовок",

    // helperInfo: {
    //   text: "Текст",
    // },
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();

    return (
      <StyledCheckboxMultiple
        inputtype={args.inputtype}
        value={args.value}
        name={args.name}
        options={args.options}
        error={args.error}
        status={args.status}
        dividerBottom={args.dividerBottom}
        dividerTop={args.dividerTop}
        heading={args.heading}
        helperInfo={args.helperInfo}
        onChange={(values) => {
          updateArgs({ value: values });
        }}
      />
    );
  },
};

export const PrimaryHelpingText: Story = {
  name: "Вспомогательный текст",
  args: {
    inputtype: "checkboxMultiple",
    name: "radio",
    value: ["summer"],
    options: [
      {
        value: "winter",
        label: "Зима",
        disabled: false,
      },
      {
        value: "spring",
        label: "Весна",
        disabled: false,
      },
      {
        value: "summer",
        label: "Лето",
        disabled: false,
      },
      {
        value: "authum",
        label: "Осень",
        disabled: false,
      },
    ],
    onChange: () => {},
    // error: "Ошибка!",
    // status: "warning",

    // dividerBottom: true,
    // dividerTop: true,
    // heading: "Заголовок",

    helperInfo: {
      text: "Текст",
    },
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();

    return (
      <StyledCheckboxMultiple
        inputtype={args.inputtype}
        value={args.value}
        name={args.name}
        options={args.options}
        error={args.error}
        status={args.status}
        dividerBottom={args.dividerBottom}
        dividerTop={args.dividerTop}
        heading={args.heading}
        helperInfo={args.helperInfo}
        onChange={(values) => {
          updateArgs({ value: values });
        }}
      />
    );
  },
};

export const PrimaryHelpingTextLink: Story = {
  name: "Вспомогательный текст и ссылка",
  args: {
    inputtype: "checkboxMultiple",
    name: "radio",
    value: ["summer"],
    options: [
      {
        value: "winter",
        label: "Зима",
        disabled: false,
      },
      {
        value: "spring",
        label: "Весна",
        disabled: false,
      },
      {
        value: "summer",
        label: "Лето",
        disabled: false,
      },
      {
        value: "authum",
        label: "Осень",
        disabled: false,
      },
    ],
    onChange: () => {},
    // error: "Ошибка!",
    // status: "warning",

    // dividerBottom: true,
    // dividerTop: true,
    // heading: "Заголовок",

    helperInfo: {
      text: "Текст и ",
      link: {
        type: "external",
        path: "https://www.google.com/",
        text: "cсылка",
      },
    },
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();

    return (
      <StyledCheckboxMultiple
        inputtype={args.inputtype}
        value={args.value}
        name={args.name}
        options={args.options}
        error={args.error}
        status={args.status}
        dividerBottom={args.dividerBottom}
        dividerTop={args.dividerTop}
        heading={args.heading}
        helperInfo={args.helperInfo}
        onChange={(values) => {
          updateArgs({ value: values });
        }}
      />
    );
  },
};

export const PrimaryDivider: Story = {
  name: "Разделители",
  args: {
    inputtype: "checkboxMultiple",
    name: "radio",
    value: ["summer"],
    options: [
      {
        value: "winter",
        label: "Зима",
        disabled: false,
      },
      {
        value: "spring",
        label: "Весна",
        disabled: false,
      },
      {
        value: "summer",
        label: "Лето",
        disabled: false,
      },
      {
        value: "authum",
        label: "Осень",
        disabled: false,
      },
    ],
    onChange: () => {},
    // error: "Ошибка!",
    // status: "warning",

    dividerBottom: true,
    dividerTop: true,
    // heading: "Заголовок",

    // helperInfo: {
    //   text: "Текст и ",
    //   link: {
    //     type: "external",
    //     path: "https://www.google.com/",
    //     text: "cсылка",
    //   },
    // },
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();

    return (
      <StyledCheckboxMultiple
        inputtype={args.inputtype}
        value={args.value}
        name={args.name}
        options={args.options}
        error={args.error}
        status={args.status}
        dividerBottom={args.dividerBottom}
        dividerTop={args.dividerTop}
        heading={args.heading}
        helperInfo={args.helperInfo}
        onChange={(values) => {
          updateArgs({ value: values });
        }}
      />
    );
  },
};
