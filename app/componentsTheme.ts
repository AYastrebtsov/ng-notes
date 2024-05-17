import { cn } from "./shared/utils";

import { PrimeReactPTOptions } from "primereact/api";

import { StyledInputTextProps } from "./shared/ui/StyledInputText/StyledInputText";
import { StyledSelectProps } from "./shared/ui/StyledSelect/StyledSelect";
import { StyledRadioButtonProps } from "./shared/ui/StyledRadioButton/StyledRadioButton";
import { ExtendedCheckboxProps } from "./shared/ui/StyledCheckboxMultiple/StyledCheckboxMultiple";
import { DropdownContext } from "primereact/dropdown";
import { CheckboxContext } from "primereact/checkbox";
import { ButtonPassThroughMethodOptions } from "primereact/button";
import { DialogPassThroughMethodOptions } from "primereact/dialog";

//тут можно посмотреть базовые стили для всех компонентов
// import Tailwind from "primereact/passthrough/tailwind";
// console.log(Tailwind.dialog);
//тут можно посмотреть базовые стили для всех компонентов

export const componentsTheme: PrimeReactPTOptions = {
  global: {
    css: () => `
        /* для глобального Ripple */
        *[data-pd-ripple="true"]{
            overflow: hidden;
            position: relative;
        }
        span[data-p-ink-active="true"]{
            animation: ripple 0.4s linear;
        }
        @keyframes ripple {
            100% {
                opacity: 0;
                transform: scale(2.5);
            }
        }
        span[data-pc-name="ripple"]{
          display: block;
          position: absolute;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 100%;
          transform: scale(0);
        }
        button[data-pc-name="button"] {
          position: relative;
          overflow: hidden;
        }
        .p-ink-active {
          background-color: rgba(255, 255, 255, 0.32);
        }
        /* для глобального Ripple 
    `,
  },
  button: {
    root: ({ props }: ButtonPassThroughMethodOptions) => ({
      className: cn(
        "flex justify-center items-center gap-x-1 font-Golos w-full rounded bg-Corp_1 py-3 px-2 transition-colors",
        {
          "pointer-events-none cursor-default": props.loading,
        },
        {
          "bg-White active:bg-White border border-Corp_1": props.outlined,
        },
        {
          "bg-Grey_4 border-Grey_4  pointer-events-none cursor-default":
            props.disabled,
        },
        {
          "bg-White border-White  pointer-events-none cursor-default":
            props.disabled && props.outlined,
        },
      ),
    }),
    label: ({ props }: ButtonPassThroughMethodOptions) => ({
      className: cn(
        "font-Golos font-bold text-base/5 text-White transition-colors",
        { "text-Corp_1": props.outlined },
        { "text-Grey_3": props.disabled },
      ),
    }),
    loadingIcon: ({ props }: ButtonPassThroughMethodOptions) => ({
      className: cn("text-White pointer-events-none", {
        "text-Corp_1": props.outlined,
      }),
    }),
  },
  inputtext: {
    root: ({ props }: { props: StyledInputTextProps }) => ({
      className: cn(
        "font-Golos text-Black bg-Grey_5 w-full rounded-md px-3 py-5 pb-[11px] pt-[29px] text-sm/4 font-normal border border-transparent outline-none",
        {
          "p-filled": props.value !== "",
        },
        { "text-Grey_2 pointer-events-none": props.disabled },
        { "border-Yellow_Light": props.status === "warning" },
        { "border-Red text-Red": props.invalid },
      ),
    }),
  },
  dropdown: {
    root: ({ props }: { props: StyledSelectProps }) => ({
      className: cn(
        "flex w-full justify-between rounded-md border border-transparent bg-Grey_5 py-5 pb-[11px] pl-3 pr-9 pt-[29px] font-Golos text-sm/4 font-normal text-Black outline-none transition-colors duration-200 ease-in-out",
        {
          "p-filled": props.value !== null,
        },
        { "text-Grey_2 pointer-events-none": props.disabled },
        { "border-Yellow_Light": props.status === "warning" },
        { "border-Red text-Red": props.invalid },
      ),
    }),
    input: {
      className: "h-4 overflow-hidden overflow-ellipsis whitespace-nowrap",
    },
    trigger: ({ props }: { props: StyledSelectProps }) => ({
      className: cn(
        "absolute right-3 top-0 bottom-0 m-auto flex w-6 h-6 justify-center items-center text-Grey_2 bg-transparent rounded-tr-md rounded-br-md transition-all aria-expanded:rotate-180",
        {
          "[margin:unset] [top:unset] bottom-2": props.value !== null,
        },
      ),
    }),
    wrapper: {
      className: cn(
        "max-h-[200px] mt-1 py-3 overflow-auto",
        "bg-Grey_5 text-gray-700 border-0 rounded-md",
      ),
    },
    list: { className: "grid gap-y-[6px]" },
    item: ({ context }: { context: DropdownContext }) => ({
      className: cn(
        "relative overflow-hidden px-4 py-[6px] font-Golos text-[0.875rem]/4 font-normal text-Black whitespace-nowrap",
        {
          "text-Corp_1": context.selected,
        },
        {
          "text-Grey_3 pointer-events-none": context.disabled,
        },
      ),
    }),
    transition: {
      timeout: 120,
      classNames: {
        enter: "opacity-0 scale-y-90",
        enterActive:
          "opacity-100 !scale-100 transition-transform transition-opacity duration-120 ease-in",
        exit: "opacity-100",
        exitActive: "!opacity-0 transition-opacity duration-100 ease-linear",
      },
    },
  },
  radiobutton: {
    root: {
      className: cn(
        "relative",
        "inline-flex",
        "align-bottom",
        "w-[1rem] h-[1rem]",
        "cursor-pointer",
        "select-none",
      ),
    },
    box: ({ props }: { props: StyledRadioButtonProps }) => ({
      className: cn(
        // Flexbox
        "flex justify-center items-center",
        // Size
        "w-[1rem] h-[1rem]",
        // Shape
        "border border-Grey_3",
        "rounded-full",
        // Transition
        "transition duration-200 ease-in-out",
        // Colors

        // State
        { "border-Corp_1": props.checked },
        { "border-Yellow_Light": props.status === "warning" },
        { "border-Red": props.invalid },
      ),
    }),
    input: {
      className: cn(
        "peer",
        "w-full",
        "h-full",
        "absolute",
        "top-0 left-0",
        "z-10",
        "p-0",
        "m-0",
        "opacity-0",
        "rounded-md",
        "outline-none",
        "border-2 border-surface-200",
        "appearance-none",
        "cursor-pointer",
      ),
    },
    icon: ({ props }: { props: StyledRadioButtonProps }) => ({
      className: cn(
        "block",
        // Shape
        "rounded-full",
        // Size
        "w-[0.5rem] h-[0.5rem]",
        // Colors
        "bg-surface-0",
        // Conditions
        {
          "backface-hidden scale-10 invisible": !props.checked,
          "transform visible bg-Corp_1 scale-1": props.checked,
        },
        { "bg-Yellow_Light": props.status === "warning" },
        { "bg-Red": props.invalid },
        // Transition
        "transition duration-200",
      ),
    }),
  },
  checkbox: {
    root: {
      className: cn(
        "peer",
        "relative",
        "inline-flex",
        "align-bottom",
        "w-[1rem] h-[1rem]",
        "cursor-pointer",
        "select-none",
        "rounded-md",
      ),
    },
    input: {
      className: cn(
        "peer",
        "w-full",
        "h-full",
        "absolute",
        "top-0 left-0",
        "z-10",
        "p-0",
        "m-0",
        "opacity-0",
        "rounded-md",
        "outline-none",
        "border-2 border-surface-200",
        "appearance-none",
        "cursor-pointer",
      ),
    },
    box: ({
      props,
      context,
    }: {
      props: ExtendedCheckboxProps;
      context: CheckboxContext;
    }) => ({
      className: cn(
        // Alignment
        "flex",
        "items-center",
        "justify-center",
        // Size
        "w-[1rem] h-[1rem]",
        // Shape
        "rounded-[2px]",
        "border-2 border-Grey_3",
        // Colors
        {
          "border-primary bg-Corp_1 border-Corp_1": context.checked,
        },
        // Invalid State
        { "border-Yellow_Light": props.status === "warning" },
        { "border-Red": props.invalid },
        {
          "bg-Yellow_Light": props.status === "warning" && context.checked,
        },
        { "bg-Red": props.invalid && context.checked },

        // Transitions
        "transition-colors",
        "duration-200",
      ),
    }),
    icon: {
      className: "w-3 h-3 transition-all duration-200 text-white text-base",
    },
  },
  dialog: {
    root: ({ state }: DialogPassThroughMethodOptions) => ({
      className: cn(
        "rounded-lg shadow-lg border-0",
        "max-h-[90%] transform scale-100",
        "m-0 w-[90vw]",
        {
          "transition-none transform-none !w-screen !h-screen !max-h-full !top-0 !left-0":
            state.maximized,
        },
      ),
    }),
    mask: () => ({
      className: "transition duration-200 bg-black/35",
    }),
    content: {
      className: "bg-white rounded-2xl",
    },
    closeButton: {
      className: "hidden",
    },

    transition: {
      timeout: 200,
      classNames: {
        enter: "opacity-0 scale-75",
        enterActive:
          "!opacity-100 !scale-100 transition-all duration-200 ease-out",
        exit: "opacity-100 scale-100 transition-all duration-200 ease-out",
        exitActive: "!opacity-0 scale-75",
      },
    },
  },
};
