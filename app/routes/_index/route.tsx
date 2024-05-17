import type { MetaFunction } from "@remix-run/node";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useEffect } from "react";

import {
  generateDefaultValues,
  generateValidationSchema,
  generateInputsMarkup,
} from "~/shared/constructor/constructor";

import Ajv from "ajv";

import schema from "../../shared/ui/StyledInputText/StyledInputText.schema.json";
import { json, useLoaderData, useFetcher } from "@remix-run/react";

const ajv = new Ajv();

const validate = ajv.compile(schema);

const data = {
  inputtype: "text",
  name: "qui",
  value: "proident",
  placeholder: "ut",
  validation: "none",
  disabled: false,
  heading: "quis voluptate",
  error: "velit est officia",
  status: "test",
  helperInfo: {
    text: "culpa dolor Duis",
    link: {
      text: "do sint",
      path: "ea cupidatat est",
      type: "internal",
    },
  },
};

if (validate(data)) {
  // data is Foo here
  console.log("VALID");
} else {
  console.log(validate.errors);
}

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

// const json = [
//   {
//     inputtype: "text",
//     name: "text",
//     value: "test",
//     validation: "default",
//     placeholder: "Текстовое поле",
//     error: "Произошла ошибка!",
//   },
//   {
//     inputtype: "select",
//     name: "select",
//     value: "second",
//     placeholder: "Выберете пункт",
//     validation: "default",
//     options: [
//       {
//         value: "first",
//         label: "Первый",
//         disabled: true,
//       },
//       {
//         value: "second",
//         label: "Второй",
//         disabled: false,
//       },
//       {
//         value: "third",
//         label: "Третий",
//         disabled: false,
//       },
//       {
//         value: "fourth",
//         label: "Четвёртый",
//         disabled: false,
//       },
//       {
//         value: "fifth",
//         label: "Пятый",
//         disabled: false,
//       },
//     ],
//     heading: "Заголовок",
//     helperInfo: {
//       text: "Вспомогатеьный текст",
//       link: {
//         text: "гугл",
//         path: "https://www.google.com/",
//         type: "external",
//       },
//     },
//   },
//   {
//     inputtype: "checkboxMultiple",
//     name: "checkboxMultiple",
//     validation: "default",
//     value: [],
//     options: [
//       {
//         value: "winter",
//         label: "Зима",
//         disabled: false,
//       },
//       {
//         value: "spring",
//         label: "Весна",
//         disabled: false,
//       },
//       {
//         value: "summer",
//         label: "Лето",
//         disabled: false,
//       },
//       {
//         value: "authum",
//         label: "Осень",
//         disabled: false,
//       },
//     ],
//   },
//   {
//     inputtype: "radio",
//     name: "radio",
//     validation: "default",
//     value: "",
//     options: [
//       {
//         value: "winter2",
//         label: "Зима2",
//         disabled: false,
//       },
//       {
//         value: "spring2",
//         label: "Весна2",
//         disabled: false,
//       },
//       {
//         value: "summer2",
//         label: "Лето2",
//         disabled: false,
//       },
//       {
//         value: "authum2",
//         label: "Осень2",
//         disabled: false,
//       },
//     ],
//   },
//   {
//     inputtype: "checkbox",
//     name: "checkboxSingle",
//     validation: "unChecked",
//     value: true,
//     label: "Согласен?",
//   },
// ];

let test = 1;

export const clientLoader = async () => {
  if (test === 1) {
    const request = await fetch(
      "https://run.mocky.io/v3/e7e7e158-72e5-464b-8c11-19f7cfbe5224",
    );

    const data = await request.json();

    return data;
  } else {
    const request = await fetch(
      "https://run.mocky.io/v3/e23e3aa7-e357-4b2e-b04e-442ae2df5751",
    );

    const data = await request.json();

    return data;
  }
};

export const clientAction = async () => {
  test = 2;

  return json({ lala: "success" });
};

export default function Index() {
  // const data = useActionData<typeof clientAction>();

  const data = useLoaderData<typeof clientLoader>();
  const fetcher = useFetcher();

  console.log(data);

  const {
    control,
    handleSubmit,
    setError,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: generateDefaultValues(data),
    resolver: yupResolver(Yup.object(generateValidationSchema(data))),
  });

  useEffect(() => {
    data.forEach((element: { error: string | undefined; name: string }) => {
      if (element.error !== undefined) {
        setError(element.name, {
          type: "custom",
          message: element.error,
        });
      }
    });
  }, [setError, data]);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1 className="p-4 pt-2 text-red-600">Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>

      <form
        onSubmit={handleSubmit((values) => {
          console.log(typeof values);
          fetcher.submit(values, {
            method: "post",
            encType: "application/json",
          });
        })}
      >
        {generateInputsMarkup(data, errors, control, setValue)}

        <button type="submit">submit</button>
      </form>
    </div>
  );
}
