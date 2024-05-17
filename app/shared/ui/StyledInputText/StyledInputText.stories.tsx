import type { StoryObj, Meta } from "@storybook/react";

import { useArgs } from "@storybook/preview-api";
import * as DocBlock from "@storybook/blocks";

import { StyledInputText } from "./StyledInputText";

import schema from "./StyledInputText.schema.json";

/**
 * тип - text
 * <p>Основан на https://primereact.org/inputtext/</p>
 */
const meta = {
  title: "Общие компоненты/Поля ввода/text",
  component: StyledInputText,
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
} satisfies Meta<typeof StyledInputText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: "text (базовый вид)",
  args: {
    inputtype: "text",
    name: "text",
    value: "",
    placeholder: "Текстовое поле",
    validation: "none",
    onChange: () => {},
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();

    function onChange(evt: React.ChangeEvent<HTMLInputElement>) {
      updateArgs({ value: evt.target.value });
    }

    return (
      <StyledInputText
        inputtype="text"
        name={args.name}
        placeholder={args.placeholder}
        value={args.value}
        onChange={onChange}
        validation={args.validation}
      />
    );
  },
};

export const PrimaryError: Story = {
  name: "text (ошибка)",
  args: {
    inputtype: "text",
    name: "text",
    value: "",
    placeholder: "Текстовое поле",
    error: "Ошибка!",
    validation: "none",
    onChange: () => {},
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();

    function onChange(evt: React.ChangeEvent<HTMLInputElement>) {
      updateArgs({ value: evt.target.value });
    }

    return (
      <StyledInputText
        inputtype="text"
        name={args.name}
        placeholder={args.placeholder}
        value={args.value}
        onChange={onChange}
        error={args.error}
        validation={args.validation}
      />
    );
  },
};

export const PrimaryText: Story = {
  name: "text (вспомогательный текст)",
  args: {
    inputtype: "text",
    name: "text",
    value: "",
    placeholder: "Текстовое поле",
    onChange: () => {},
    validation: "none",
    helperInfo: {
      text: "Вспомогательный текст",
    },
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();

    function onChange(evt: React.ChangeEvent<HTMLInputElement>) {
      updateArgs({ value: evt.target.value });
    }

    return (
      <StyledInputText
        inputtype="text"
        name={args.name}
        placeholder={args.placeholder}
        value={args.value}
        onChange={onChange}
        helperInfo={args.helperInfo}
        validation={args.validation}
      />
    );
  },
};

export const PrimaryLink: Story = {
  name: "text (вспомогательная ссылка)",
  args: {
    inputtype: "text",
    name: "text",
    value: "",
    placeholder: "Текстовое поле",
    onChange: () => {},
    validation: "none",
    helperInfo: {
      link: {
        type: "external",
        path: "https://www.google.com/",
        text: "Ссылка",
      },
    },
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();

    function onChange(evt: React.ChangeEvent<HTMLInputElement>) {
      updateArgs({ value: evt.target.value });
    }

    return (
      <StyledInputText
        inputtype="text"
        name={args.name}
        placeholder={args.placeholder}
        value={args.value}
        onChange={onChange}
        helperInfo={args.helperInfo}
        validation={args.validation}
      />
    );
  },
};

export const PrimaryTextLink: Story = {
  name: "text (вспомогательные текст и ссылка)",
  args: {
    inputtype: "text",
    name: "text",
    value: "",
    placeholder: "Текстовое поле",
    onChange: () => {},
    validation: "none",
    helperInfo: {
      text: "Вспомогательный текст и",
      link: {
        type: "external",
        path: "https://www.google.com/",
        text: "ссылка",
      },
    },
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();

    function onChange(evt: React.ChangeEvent<HTMLInputElement>) {
      updateArgs({ value: evt.target.value });
    }

    return (
      <StyledInputText
        inputtype="text"
        name={args.name}
        placeholder={args.placeholder}
        value={args.value}
        onChange={onChange}
        helperInfo={args.helperInfo}
        validation={args.validation}
      />
    );
  },
};

export const PrimaryTextLinkError: Story = {
  name: "text (вспомогательные текст и ссылка и ошибка)",
  args: {
    inputtype: "text",
    name: "text",
    value: "",
    placeholder: "Текстовое поле",
    onChange: () => {},
    error: "Ошибка!",
    validation: "none",
    helperInfo: {
      text: "Вспомогательный текст и",
      link: {
        type: "external",
        path: "https://www.google.com/",
        text: "ссылка",
      },
    },
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();

    function onChange(evt: React.ChangeEvent<HTMLInputElement>) {
      updateArgs({ value: evt.target.value });
    }

    return (
      <StyledInputText
        inputtype="text"
        name={args.name}
        placeholder={args.placeholder}
        value={args.value}
        onChange={onChange}
        error={args.error}
        helperInfo={args.helperInfo}
        validation={args.validation}
      />
    );
  },
};

export const PrimaryTextStatus: Story = {
  name: "text (статус поля)",
  args: {
    inputtype: "text",
    name: "text",
    value: "",
    placeholder: "Текстовое поле",
    onChange: () => {},
    validation: "none",
    status: "warning",
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();

    function onChange(evt: React.ChangeEvent<HTMLInputElement>) {
      updateArgs({ value: evt.target.value });
    }

    return (
      <StyledInputText
        inputtype="text"
        name={args.name}
        placeholder={args.placeholder}
        value={args.value}
        onChange={onChange}
        status={args.status}
        validation={args.validation}
      />
    );
  },
};

export const PrimaryTextDisabled: Story = {
  name: "text (отключенное поле)",
  args: {
    inputtype: "text",
    name: "text",
    value: "",
    placeholder: "Текстовое поле",
    onChange: () => {},
    validation: "none",
    disabled: true,
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();

    function onChange(evt: React.ChangeEvent<HTMLInputElement>) {
      updateArgs({ value: evt.target.value });
    }

    return (
      <StyledInputText
        inputtype="text"
        name={args.name}
        placeholder={args.placeholder}
        value={args.value}
        onChange={onChange}
        disabled={args.disabled}
        validation={args.validation}
      />
    );
  },
};

export const PrimaryTextValue: Story = {
  name: "text (заполненное поле)",
  args: {
    inputtype: "text",
    name: "text",
    value: "заполненное поле",
    placeholder: "Текстовое поле",
    validation: "none",
    onChange: () => {},
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();

    function onChange(evt: React.ChangeEvent<HTMLInputElement>) {
      updateArgs({ value: evt.target.value });
    }

    return (
      <StyledInputText
        inputtype="text"
        name={args.name}
        placeholder={args.placeholder}
        value={args.value}
        onChange={onChange}
        validation={args.validation}
      />
    );
  },
};

export const PrimaryTextheading: Story = {
  name: "text (заголовок)",
  args: {
    inputtype: "text",
    name: "text",
    value: "",
    placeholder: "Текстовое поле",
    validation: "none",
    onChange: () => {},
    heading: "Заголовок поля",
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();

    function onChange(evt: React.ChangeEvent<HTMLInputElement>) {
      updateArgs({ value: evt.target.value });
    }

    return (
      <StyledInputText
        inputtype="text"
        name={args.name}
        placeholder={args.placeholder}
        value={args.value}
        onChange={onChange}
        heading={args.heading}
        validation={args.validation}
      />
    );
  },
};

export const PrimaryDividers: Story = {
  name: "text (разделители)",
  args: {
    inputtype: "text",
    name: "text",
    value: "",
    placeholder: "Текстовое поле",
    validation: "none",
    onChange: () => {},
    dividerTop: true,
    dividerBottom: true,
    inputClassName: "ml-4",
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();

    function onChange(evt: React.ChangeEvent<HTMLInputElement>) {
      updateArgs({ value: evt.target.value });
    }

    return (
      <StyledInputText
        inputtype="text"
        name={args.name}
        placeholder={args.placeholder}
        value={args.value}
        onChange={onChange}
        validation={args.validation}
        dividerTop={args.dividerTop}
        dividerBottom={args.dividerBottom}
        inputClassName={args.inputClassName}
      />
    );
  },
};
