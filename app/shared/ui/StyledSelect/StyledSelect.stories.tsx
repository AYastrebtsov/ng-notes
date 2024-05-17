import type { StoryObj, Meta } from "@storybook/react";

import { useArgs } from "@storybook/preview-api";
import * as DocBlock from "@storybook/blocks";

import { StyledSelect } from "./StyledSelect";

import { DropdownChangeEvent } from "primereact/dropdown";

import schema from "./StyledSelect.schema.json";

/**
 * тип - select
 * <p>Основан на https://primereact.org/dropdown</p>
 */
const meta = {
  title: "Общие компоненты/Поля ввода/select",
  component: StyledSelect,
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
} satisfies Meta<typeof StyledSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: "Выпадающее меню (базовый вид)",
  args: {
    inputtype: "select",
    name: "select",
    value: null,
    placeholder: "Выберете пункт",
    onChange: () => {},
    options: [
      {
        value: "first",
        label: "Первый",
        disabled: true,
      },
      {
        value: "second",
        label: "Второй",
        disabled: false,
      },
      {
        value: "third",
        label: "Третий",
        disabled: false,
      },
      {
        value: "fourth",
        label: "Четвёртый",
        disabled: false,
      },
      {
        value: "fifth",
        label: "Пятый",
        disabled: false,
      },
    ],
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();

    function onChange(evt: DropdownChangeEvent) {
      updateArgs({ value: evt.value });
    }

    return (
      <StyledSelect
        inputtype="select"
        name={args.name}
        value={args.value}
        placeholder={args.placeholder}
        onChange={onChange}
        options={args.options}
      />
    );
  },
};

export const PrimaryDisabled: Story = {
  name: "Выпадающее меню (отключенный)",
  args: {
    inputtype: "select",
    name: "select",
    value: null,
    placeholder: "Выберете пункт",
    onChange: () => {},
    options: [
      {
        value: "first",
        label: "Первый",
        disabled: true,
      },
      {
        value: "second",
        label: "Второй",
        disabled: false,
      },
      {
        value: "third",
        label: "Третий",
        disabled: false,
      },
      {
        value: "fourth",
        label: "Четвёртый",
        disabled: false,
      },
      {
        value: "fifth",
        label: "Пятый",
        disabled: false,
      },
    ],
    disabled: true,
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();

    function onChange(evt: DropdownChangeEvent) {
      updateArgs({ value: evt.value });
    }

    return (
      <StyledSelect
        inputtype="select"
        name={args.name}
        value={args.value}
        placeholder={args.placeholder}
        onChange={onChange}
        options={args.options}
        disabled={args.disabled}
      />
    );
  },
};

export const PrimaryHeading: Story = {
  name: "Выпадающее меню (с заголовком)",
  args: {
    inputtype: "select",
    name: "select",
    value: null,
    placeholder: "Выберете пункт",
    onChange: () => {},
    options: [
      {
        value: "first",
        label: "Первый",
        disabled: true,
      },
      {
        value: "second",
        label: "Второй",
        disabled: false,
      },
      {
        value: "third",
        label: "Третий",
        disabled: false,
      },
      {
        value: "fourth",
        label: "Четвёртый",
        disabled: false,
      },
      {
        value: "fifth",
        label: "Пятый",
        disabled: false,
      },
    ],
    heading: "Заголовок",
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();

    function onChange(evt: DropdownChangeEvent) {
      updateArgs({ value: evt.value });
    }

    return (
      <StyledSelect
        inputtype="select"
        name={args.name}
        value={args.value}
        placeholder={args.placeholder}
        onChange={onChange}
        options={args.options}
        heading={args.heading}
      />
    );
  },
};

export const PrimaryError: Story = {
  name: "Выпадающее меню (ошибка)",
  args: {
    inputtype: "select",
    name: "select",
    value: null,
    placeholder: "Выберете пункт",
    onChange: () => {},
    options: [
      {
        value: "first",
        label: "Первый",
        disabled: true,
      },
      {
        value: "second",
        label: "Второй",
        disabled: false,
      },
      {
        value: "third",
        label: "Третий",
        disabled: false,
      },
      {
        value: "fourth",
        label: "Четвёртый",
        disabled: false,
      },
      {
        value: "fifth",
        label: "Пятый",
        disabled: false,
      },
    ],
    error: "Ошибка!",
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();

    function onChange(evt: DropdownChangeEvent) {
      updateArgs({ value: evt.value });
    }

    return (
      <StyledSelect
        inputtype="select"
        name={args.name}
        value={args.value}
        placeholder={args.placeholder}
        onChange={onChange}
        options={args.options}
        error={args.error}
      />
    );
  },
};

export const PrimaryStatus: Story = {
  name: "Выпадающее меню (статус)",
  args: {
    inputtype: "select",
    name: "select",
    value: null,
    placeholder: "Выберете пункт",
    onChange: () => {},
    options: [
      {
        value: "first",
        label: "Первый",
        disabled: true,
      },
      {
        value: "second",
        label: "Второй",
        disabled: false,
      },
      {
        value: "third",
        label: "Третий",
        disabled: false,
      },
      {
        value: "fourth",
        label: "Четвёртый",
        disabled: false,
      },
      {
        value: "fifth",
        label: "Пятый",
        disabled: false,
      },
    ],
    status: "warning",
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();

    function onChange(evt: DropdownChangeEvent) {
      updateArgs({ value: evt.value });
    }

    return (
      <StyledSelect
        inputtype="select"
        name={args.name}
        value={args.value}
        placeholder={args.placeholder}
        onChange={onChange}
        options={args.options}
        status={args.status}
      />
    );
  },
};

export const PrimaryHelper: Story = {
  name: "Выпадающее меню (вспомогательная информация)",
  args: {
    inputtype: "select",
    name: "select",
    value: null,
    placeholder: "Выберете пункт",
    onChange: () => {},
    options: [
      {
        value: "first",
        label: "Первый",
        disabled: true,
      },
      {
        value: "second",
        label: "Второй",
        disabled: false,
      },
      {
        value: "third",
        label: "Третий",
        disabled: false,
      },
      {
        value: "fourth",
        label: "Четвёртый",
        disabled: false,
      },
      {
        value: "fifth",
        label: "Пятый",
        disabled: false,
      },
    ],
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

    function onChange(evt: DropdownChangeEvent) {
      updateArgs({ value: evt.value });
    }

    return (
      <StyledSelect
        inputtype="select"
        name={args.name}
        value={args.value}
        placeholder={args.placeholder}
        onChange={onChange}
        options={args.options}
        helperInfo={args.helperInfo}
      />
    );
  },
};

export const PrimaryDividers: Story = {
  name: "Выпадающее меню (разделители)",
  args: {
    inputtype: "select",
    name: "select",
    value: null,
    placeholder: "Выберете пункт",
    onChange: () => {},
    options: [
      {
        value: "first",
        label: "Первый",
        disabled: true,
      },
      {
        value: "second",
        label: "Второй",
        disabled: false,
      },
      {
        value: "third",
        label: "Третий",
        disabled: false,
      },
      {
        value: "fourth",
        label: "Четвёртый",
        disabled: false,
      },
      {
        value: "fifth",
        label: "Пятый",
        disabled: false,
      },
    ],
    dividerTop: true,
    dividerBottom: true,
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();

    function onChange(evt: DropdownChangeEvent) {
      updateArgs({ value: evt.value });
    }

    return (
      <StyledSelect
        inputtype="select"
        name={args.name}
        value={args.value}
        placeholder={args.placeholder}
        onChange={onChange}
        options={args.options}
        dividerTop={args.dividerTop}
        dividerBottom={args.dividerBottom}
      />
    );
  },
};
