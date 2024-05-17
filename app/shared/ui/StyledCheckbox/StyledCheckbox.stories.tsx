import type { StoryObj, Meta } from "@storybook/react";

import { useArgs } from "@storybook/preview-api";
import * as DocBlock from "@storybook/blocks";

import { StyledCheckbox } from "./StyledCheckbox";

import schema from "./StyledCheckbox.schema.json";

/**
 * тип - checkbox
 * <p>Основан на https://primereact.org/checkbox</p>
 */
const meta = {
  title: "Общие компоненты/Поля ввода/checkbox",
  component: StyledCheckbox,
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
} satisfies Meta<typeof StyledCheckbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: "Базовый вид",
  args: {
    inputtype: "checkbox",
    validation: "none",
    name: "radio",
    value: false,
    label: "Моё доверенное лицо",
    onChange: () => {},
    // error: "Ошибка!",
    // status: "warning",
    // disabled: true,

    // heading: "Заголовок раздела с радиокнопками",

    // dividerBottom: true,
    // dividerTop: true,

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
      <StyledCheckbox
        inputtype={args.inputtype}
        value={args.value}
        name={args.name}
        label={args.label}
        error={args.error}
        validation={args.validation}
        status={args.status}
        disabled={args.disabled}
        dividerBottom={args.dividerBottom}
        dividerTop={args.dividerTop}
        heading={args.heading}
        helperInfo={args.helperInfo}
        onChange={(evt) => {
          updateArgs({ value: !evt.target.value });
        }}
      />
    );
  },
};

export const PrimaryChecked: Story = {
  name: "Заполненный",
  args: {
    inputtype: "checkbox",
    name: "radio",
    value: true,
    validation: "none",
    label: "Моё доверенное лицо",
    onChange: () => {},
    // error: "Ошибка!",
    // status: "warning",
    // disabled: true,

    // heading: "Заголовок раздела с радиокнопками",

    // dividerBottom: true,
    // dividerTop: true,

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
      <StyledCheckbox
        inputtype={args.inputtype}
        value={args.value}
        name={args.name}
        label={args.label}
        error={args.error}
        validation={args.validation}
        status={args.status}
        disabled={args.disabled}
        dividerBottom={args.dividerBottom}
        dividerTop={args.dividerTop}
        heading={args.heading}
        helperInfo={args.helperInfo}
        onChange={(evt) => {
          updateArgs({ value: !evt.target.value });
        }}
      />
    );
  },
};

export const PrimaryError: Story = {
  name: "Ошибка",
  args: {
    inputtype: "checkbox",
    name: "radio",
    value: false,
    validation: "none",
    label: "Моё доверенное лицо",
    onChange: () => {},
    error: "Ошибка!",
    // status: "warning",
    // disabled: true,

    // heading: "Заголовок раздела с радиокнопками",

    // dividerBottom: true,
    // dividerTop: true,

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
      <StyledCheckbox
        inputtype={args.inputtype}
        value={args.value}
        name={args.name}
        label={args.label}
        error={args.error}
        validation={args.validation}
        status={args.status}
        disabled={args.disabled}
        dividerBottom={args.dividerBottom}
        dividerTop={args.dividerTop}
        heading={args.heading}
        helperInfo={args.helperInfo}
        onChange={(evt) => {
          updateArgs({ value: !evt.target.value });
        }}
      />
    );
  },
};

export const PrimaryStatus: Story = {
  name: "Статус",
  args: {
    inputtype: "checkbox",
    name: "radio",
    value: false,
    validation: "none",
    label: "Моё доверенное лицо",
    onChange: () => {},
    // error: "Ошибка!",
    status: "warning",
    // disabled: true,

    // heading: "Заголовок раздела с радиокнопками",

    // dividerBottom: true,
    // dividerTop: true,

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
      <StyledCheckbox
        inputtype={args.inputtype}
        value={args.value}
        name={args.name}
        label={args.label}
        error={args.error}
        status={args.status}
        validation={args.validation}
        disabled={args.disabled}
        dividerBottom={args.dividerBottom}
        dividerTop={args.dividerTop}
        heading={args.heading}
        helperInfo={args.helperInfo}
        onChange={(evt) => {
          updateArgs({ value: !evt.target.value });
        }}
      />
    );
  },
};

export const PrimaryDisabled: Story = {
  name: "Отключенный",
  args: {
    inputtype: "checkbox",
    name: "radio",
    value: false,
    validation: "none",
    label: "Моё доверенное лицо",
    onChange: () => {},
    // error: "Ошибка!",
    // status: "warning",
    disabled: true,

    // heading: "Заголовок раздела с радиокнопками",

    // dividerBottom: true,
    // dividerTop: true,

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
      <StyledCheckbox
        inputtype={args.inputtype}
        value={args.value}
        name={args.name}
        label={args.label}
        error={args.error}
        status={args.status}
        disabled={args.disabled}
        validation={args.validation}
        dividerBottom={args.dividerBottom}
        dividerTop={args.dividerTop}
        heading={args.heading}
        helperInfo={args.helperInfo}
        onChange={(evt) => {
          updateArgs({ value: !evt.target.value });
        }}
      />
    );
  },
};

export const PrimaryHeading: Story = {
  name: "Заголовок",
  args: {
    inputtype: "checkbox",
    name: "radio",
    value: false,
    validation: "none",
    label: "Моё доверенное лицо",
    onChange: () => {},
    // error: "Ошибка!",
    // status: "warning",
    // disabled: true,

    heading: "Заголовок",

    // dividerBottom: true,
    // dividerTop: true,

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
      <StyledCheckbox
        inputtype={args.inputtype}
        value={args.value}
        name={args.name}
        label={args.label}
        error={args.error}
        status={args.status}
        validation={args.validation}
        disabled={args.disabled}
        dividerBottom={args.dividerBottom}
        dividerTop={args.dividerTop}
        heading={args.heading}
        helperInfo={args.helperInfo}
        onChange={(evt) => {
          updateArgs({ value: !evt.target.value });
        }}
      />
    );
  },
};

export const PrimaryText: Story = {
  name: "Вспомогательный текст",
  args: {
    inputtype: "checkbox",
    name: "radio",
    value: false,
    validation: "none",
    label: "Моё доверенное лицо",
    onChange: () => {},
    // error: "Ошибка!",
    // status: "warning",
    // disabled: true,

    // heading: "Заголовок",

    // dividerBottom: true,
    // dividerTop: true,

    helperInfo: {
      text: "Текст",
      // link: {
      //   type: "external",
      //   path: "https://www.google.com/",
      //   text: "cсылка",
      // },
    },
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();

    return (
      <StyledCheckbox
        inputtype={args.inputtype}
        value={args.value}
        name={args.name}
        label={args.label}
        error={args.error}
        validation={args.validation}
        status={args.status}
        disabled={args.disabled}
        dividerBottom={args.dividerBottom}
        dividerTop={args.dividerTop}
        heading={args.heading}
        helperInfo={args.helperInfo}
        onChange={(evt) => {
          updateArgs({ value: !evt.target.value });
        }}
      />
    );
  },
};

export const PrimaryTextAndLink: Story = {
  name: "Вспомогательный текст и ссылка",
  args: {
    inputtype: "checkbox",
    name: "radio",
    value: false,
    validation: "none",
    label: "Моё доверенное лицо",
    onChange: () => {},
    // error: "Ошибка!",
    // status: "warning",
    // disabled: true,

    // heading: "Заголовок",

    // dividerBottom: true,
    // dividerTop: true,

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
      <StyledCheckbox
        inputtype={args.inputtype}
        value={args.value}
        name={args.name}
        label={args.label}
        error={args.error}
        validation={args.validation}
        status={args.status}
        disabled={args.disabled}
        dividerBottom={args.dividerBottom}
        dividerTop={args.dividerTop}
        heading={args.heading}
        helperInfo={args.helperInfo}
        onChange={(evt) => {
          updateArgs({ value: !evt.target.value });
        }}
      />
    );
  },
};

export const PrimaryTextDividers: Story = {
  name: "Разделители",
  args: {
    inputtype: "checkbox",
    name: "radio",
    value: false,
    validation: "none",
    label: "Моё доверенное лицо",
    onChange: () => {},
    // error: "Ошибка!",
    // status: "warning",
    // disabled: true,

    // heading: "Заголовок",

    dividerBottom: true,
    dividerTop: true,

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
      <StyledCheckbox
        inputtype={args.inputtype}
        value={args.value}
        validation={args.validation}
        name={args.name}
        label={args.label}
        error={args.error}
        status={args.status}
        disabled={args.disabled}
        dividerBottom={args.dividerBottom}
        dividerTop={args.dividerTop}
        heading={args.heading}
        helperInfo={args.helperInfo}
        onChange={(evt) => {
          updateArgs({ value: !evt.target.value });
        }}
      />
    );
  },
};
