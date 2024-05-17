import type { StoryObj, Meta } from "@storybook/react";

import { useArgs } from "@storybook/preview-api";
import * as DocBlock from "@storybook/blocks";

import { StyledRadioButton } from "./StyledRadioButton";

import schema from "./StyledRadioBUtton.schema.json";

/**
 * тип - radio
 * <p>Основан на https://primereact.org/radiobutton/</p>
 */
const meta = {
  title: "Общие компоненты/Поля ввода/radio",
  component: StyledRadioButton,
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
} satisfies Meta<typeof StyledRadioButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: "Базовый вид",
  args: {
    inputtype: "radio",
    value: "",
    name: "radio",
    validation: "none",
    // status: "warning",
    // error: "Ошибка!",
    // dividerBottom: true,
    // heading: "Заголовок раздела с радиокнопками",
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
      <StyledRadioButton
        inputtype="radio"
        validation={args.validation}
        value={args.value}
        name={args.name}
        options={args.options}
        status={args.status}
        onChange={(evt) => {
          updateArgs({ value: evt.target.value });
        }}
        heading={args.heading}
        error={args.error}
        helperInfo={args.helperInfo}
      />
    );
  },
};

export const PrimarySelected: Story = {
  name: "Выбранный пункт",
  args: {
    inputtype: "radio",
    value: "spring",
    name: "radio",
    validation: "none",
    // status: "warning",
    // error: "Ошибка!",
    // dividerBottom: true,
    // heading: "Заголовок раздела с радиокнопками",
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
    // helperInfo: {
    //   text: "Текст",
    // },
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();

    return (
      <StyledRadioButton
        inputtype="radio"
        value={args.value}
        validation={args.validation}
        name={args.name}
        options={args.options}
        status={args.status}
        onChange={(evt) => {
          updateArgs({ value: evt.target.value });
        }}
        heading={args.heading}
        error={args.error}
        helperInfo={args.helperInfo}
      />
    );
  },
};

export const PrimaryStatus: Story = {
  name: "Статус",
  args: {
    inputtype: "radio",
    value: "",
    name: "radio",
    status: "warning",
    validation: "none",
    // error: "Ошибка!",
    // dividerBottom: true,
    // heading: "Заголовок раздела с радиокнопками",
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
    // helperInfo: {
    //   text: "Текст",
    // },
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();

    return (
      <StyledRadioButton
        inputtype="radio"
        value={args.value}
        name={args.name}
        validation={args.validation}
        options={args.options}
        status={args.status}
        onChange={(evt) => {
          updateArgs({ value: evt.target.value });
        }}
        heading={args.heading}
        error={args.error}
        helperInfo={args.helperInfo}
      />
    );
  },
};

export const PrimaryError: Story = {
  name: "Ошибка",
  args: {
    inputtype: "radio",
    value: "",
    name: "radio",
    // status: "warning",
    error: "Ошибка!",
    validation: "none",
    // dividerBottom: true,
    // heading: "Заголовок раздела с радиокнопками",
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
    // helperInfo: {
    //   text: "Текст",
    // },
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();

    return (
      <StyledRadioButton
        inputtype="radio"
        value={args.value}
        name={args.name}
        validation={args.validation}
        options={args.options}
        status={args.status}
        onChange={(evt) => {
          updateArgs({ value: evt.target.value });
        }}
        heading={args.heading}
        error={args.error}
        helperInfo={args.helperInfo}
      />
    );
  },
};

export const PrimaryDisabled: Story = {
  name: "Отключенный",
  args: {
    inputtype: "radio",
    value: "",
    name: "radio",
    validation: "none",
    // status: "warning",
    // error: "Ошибка!",
    // dividerBottom: true,
    // heading: "Заголовок раздела с радиокнопками",
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
    // helperInfo: {
    //   text: "Текст",
    // },
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();

    return (
      <StyledRadioButton
        inputtype="radio"
        value={args.value}
        name={args.name}
        validation={args.validation}
        options={args.options}
        status={args.status}
        onChange={(evt) => {
          updateArgs({ value: evt.target.value });
        }}
        heading={args.heading}
        error={args.error}
        helperInfo={args.helperInfo}
      />
    );
  },
};

export const PrimaryHeading: Story = {
  name: "Заголовок",
  args: {
    inputtype: "radio",
    value: "",
    name: "radio",
    validation: "none",
    // status: "warning",
    // error: "Ошибка!",
    // dividerBottom: true,
    heading: "Заголовок раздела с радиокнопками",
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
    // helperInfo: {
    //   text: "Текст",
    // },
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();

    return (
      <StyledRadioButton
        inputtype="radio"
        value={args.value}
        name={args.name}
        validation={args.validation}
        options={args.options}
        status={args.status}
        onChange={(evt) => {
          updateArgs({ value: evt.target.value });
        }}
        heading={args.heading}
        error={args.error}
        helperInfo={args.helperInfo}
      />
    );
  },
};

export const PrimaryHeadingError: Story = {
  name: "Заголовок c ошибкой",
  args: {
    inputtype: "radio",
    value: "",
    name: "radio",
    // status: "warning",
    error: "Ошибка!",
    validation: "none",
    // dividerBottom: true,
    heading: "Заголовок раздела с радиокнопками",
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
    // helperInfo: {
    //   text: "Текст",
    // },
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();

    return (
      <StyledRadioButton
        inputtype="radio"
        value={args.value}
        name={args.name}
        validation={args.validation}
        options={args.options}
        status={args.status}
        onChange={(evt) => {
          updateArgs({ value: evt.target.value });
        }}
        heading={args.heading}
        error={args.error}
        helperInfo={args.helperInfo}
      />
    );
  },
};

export const PrimaryHelpingText: Story = {
  name: "Вспомогательный текст",
  args: {
    inputtype: "radio",
    value: "",
    name: "radio",
    validation: "none",
    // status: "warning",
    // error: "Ошибка!",
    // dividerBottom: true,
    // heading: "Заголовок раздела с радиокнопками",
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
    helperInfo: {
      text: "Текст",
    },
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();

    return (
      <StyledRadioButton
        inputtype="radio"
        value={args.value}
        name={args.name}
        validation={args.validation}
        options={args.options}
        status={args.status}
        onChange={(evt) => {
          updateArgs({ value: evt.target.value });
        }}
        heading={args.heading}
        error={args.error}
        helperInfo={args.helperInfo}
      />
    );
  },
};

export const PrimaryHelpingTextLink: Story = {
  name: "Вспомогательный текст и ссылка",
  args: {
    inputtype: "radio",
    value: "",
    name: "radio",
    validation: "none",
    // status: "warning",
    // error: "Ошибка!",
    // dividerBottom: true,
    // heading: "Заголовок раздела с радиокнопками",
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
      <StyledRadioButton
        inputtype="radio"
        value={args.value}
        name={args.name}
        validation={args.validation}
        options={args.options}
        status={args.status}
        onChange={(evt) => {
          updateArgs({ value: evt.target.value });
        }}
        heading={args.heading}
        error={args.error}
        helperInfo={args.helperInfo}
      />
    );
  },
};

export const PrimaryDivider: Story = {
  name: "Разделители",
  args: {
    inputtype: "radio",
    value: "",
    name: "radio",
    validation: "none",
    // status: "warning",
    // error: "Ошибка!",
    // dividerBottom: true,
    // heading: "Заголовок раздела с радиокнопками",
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
    dividerTop: true,
    dividerBottom: true,
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();

    return (
      <StyledRadioButton
        inputtype="radio"
        value={args.value}
        name={args.name}
        validation={args.validation}
        options={args.options}
        status={args.status}
        onChange={(evt) => {
          updateArgs({ value: evt.target.value });
        }}
        heading={args.heading}
        error={args.error}
        helperInfo={args.helperInfo}
        dividerTop={args.dividerTop}
        dividerBottom={args.dividerBottom}
      />
    );
  },
};
