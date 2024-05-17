import type { StoryObj, Meta } from "@storybook/react";

import { useArgs } from "@storybook/preview-api";
import * as DocBlock from "@storybook/blocks";

import { FileInput } from "./FileInput";

// import schema from "./StyledInputText.schema.json";

/**
 * тип - file
 * <p>Основан на https://primereact.org/https://primereact.org/fileupload//</p>
 */
const meta = {
  title: "Общие компоненты/Поля ввода/file",
  component: FileInput,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <>
          <DocBlock.Title />
          <DocBlock.Description />
          {/* <h2>JSON Schema</h2>
          <DocBlock.Source
            language="json"
            code={JSON.stringify(schema, null, 2)}
          /> */}
          <DocBlock.Canvas />
          <DocBlock.ArgTypes />
          <DocBlock.Stories />
        </>
      ),
    },
  },
} satisfies Meta<typeof FileInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: "file (базовый вид)",
  args: {
    inputtype: "file",
    name: "file",
    value: "",
    placeholder: "Приложи документ",
    validation: "none",
  },
  // render: function Render(args) {
  //   const [, updateArgs] = useArgs();

  //   function onChange(evt: React.ChangeEvent<HTMLInputElement>) {
  //     updateArgs({ value: evt.target.value });
  //   }

  //   return (
  //     <StyledInputText
  //       inputtype="text"
  //       name={args.name}
  //       placeholder={args.placeholder}
  //       value={args.value}
  //       onChange={onChange}
  //       validation={args.validation}
  //     />
  //   );
  // },
};
