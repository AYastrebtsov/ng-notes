/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import * as Yup from "yup";
import {
  Controller,
  Control,
  UseFormSetValue,
  FieldValues,
  FieldErrors,
} from "react-hook-form";

import { StyledInputText } from "../ui/StyledInputText/StyledInputText";
import { StyledSelect } from "../ui/StyledSelect/StyledSelect";
import { StyledRadioButton } from "../ui/StyledRadioButton/StyledRadioButton";
import { StyledCheckbox } from "../ui/StyledCheckbox/StyledCheckbox";
import { StyledCheckboxMultiple } from "../ui/StyledCheckboxMultiple/StyledCheckboxMultiple";
import { StyledPhotoCheckbox } from "../ui/StyledPhotoCheckbox/StyledPhotoCheckbox";

const inputMap = {
  text: StyledInputText,
  select: StyledSelect,
  radio: StyledRadioButton,
  checkbox: StyledCheckbox,
  checkboxMultiple: StyledCheckboxMultiple,
  photoCheckbox: StyledPhotoCheckbox,
};

const validationMap: {
  // [key: string]: {
  //   [key: string]:
  //     | Yup.ISchema<unknown>
  //     | ((value: string, error: string) => Yup.ISchema<unknown>);
  // };
  [key: string]: {
    [key: string]: Yup.ISchema<unknown>;
  };
} = {
  text: {
    none: Yup.string().default("").notRequired(),
    default: Yup.string().required("Обязатльное поле"),
    // wrongValue: (value: string, error: string) =>
    //   Yup.string().test(
    //     "wrong",
    //     error,
    //     (currentValue) => currentValue !== value,
    //   ),
  },
  select: {
    none: Yup.string().default("").notRequired(),
    default: Yup.string().required("Обязатльное поле"),
  },
  radio: {
    none: Yup.string().default("").notRequired(),
    default: Yup.string().required("Обязатльное поле"),
  },
  checkbox: {
    none: Yup.boolean(),
    checked: Yup.boolean().oneOf([true], "Поле должно быть отмечено"),
    unchecked: Yup.boolean().oneOf([false], "Поле не должно быть отмечено"),
  },
  checkboxMultiple: {
    none: Yup.array().notRequired(),
    default: Yup.array().min(1, "Обязатльное полe"),
  },
  photoCheckbox: {
    none: Yup.array().notRequired(),
    default: Yup.array().min(1, "Обязатльное полe"),
  },
  file: {
    none: Yup.string().default("").notRequired(),
    default: Yup.string().required("Обязатльное поле"),
  },
};

export const generateDefaultValues = (
  items: { name: string; value: unknown }[],
) => {
  const defaultValues: {
    [key: string]: unknown;
  } = {};

  items.forEach((item) => {
    defaultValues[item.name] = item.value;
  });

  return defaultValues;
};

export const generateValidationSchema = (
  items: {
    inputtype: string;
    name: string;
    // value: string;
    // error: string;
    validation: string;
  }[],
) => {
  const validationSchema: Yup.ObjectShape = {};

  items.forEach((item) => {
    validationSchema[item.name] =
      validationMap[item.inputtype][item.validation];

    // if (item.validation === "wrongValue") {
    //   validationSchema[item.name] = validationMap[item.inputtype][
    //     item.validation
    //   ](item.value, item.error);
    // } else {
    //   validationSchema[item.name] =
    //     validationMap[item.inputtype][item.validation];
    // }
  });

  return validationSchema;
};

export const generateInputsMarkup = (
  items: { inputtype: string; name: string; error?: string }[],
  errors: FieldErrors,
  control: Control<FieldValues>,
  setValue: UseFormSetValue,
) =>
  items.map((item, index: number) => {
    // приходится делать отдельную проверку, так как в данном случае необходимо програмно установить значение в поле
    if (item.inputtype === "file") {
      return <>File Input</>;
    } else {
      const Input = inputMap[item.inputtype as keyof typeof inputMap];

      return (
        <Controller
          key={index}
          name={item.name}
          control={control}
          render={({ field }) => (
            <Input {...item} error={errors[item.name]?.message} {...field} />
          )}
        />
      );
    }
  });
