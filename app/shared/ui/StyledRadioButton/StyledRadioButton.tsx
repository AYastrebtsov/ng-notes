import { cn } from "~/shared/utils";
import { Ref, forwardRef } from "react";
import {
  RadioButton,
  RadioButtonChangeEvent,
  RadioButtonProps,
} from "primereact/radiobutton";
import { Link } from "@remix-run/react";
import { Divider } from "primereact/divider";

import telegram from "./icons/telegram.svg";
import whatsapp from "./icons/whatsapp.svg";
import viber from "./icons/viber.svg";

const iconMap = { telegram, whatsapp, viber };

interface ExtendedRadioButtonProps extends RadioButtonProps {
  status?: "warning";
}

const ExtendedRadioButton = ({ ...props }: ExtendedRadioButtonProps) => (
  <RadioButton {...props} />
);

export interface StyledRadioButtonProps extends ExtendedRadioButtonProps {
  inputtype: "radio";
  name: string;
  value: string;
  onChange: (event: RadioButtonChangeEvent) => void;
  options: {
    value: string;
    label: string;
    icon?: "telegram" | "viber" | "whatsapp";
    disabled: boolean;
  }[];

  validation: "default" | "none";

  heading?: string;
  error?: string;
  helperInfo?: {
    text?: string;
    link?: {
      text: string;
      path: string;
      type: "external" | "internal";
    };
  };

  dividerTop?: true;
  dividerBottom?: true;
  className?: string;
  inputClassName?: string;
}

export const StyledRadioButton = forwardRef(
  (props: StyledRadioButtonProps, ref: Ref<HTMLInputElement>) => (
    <div ref={ref} className={props.className}>
      {props.dividerTop ? (
        <Divider pt={{ root: { className: "bg-Grey_4 h-px mb-4" } }} />
      ) : null}

      <div className={props.inputClassName}>
        {props.heading || props.error || props.helperInfo ? (
          <div className="mb-3">
            {props.heading ? (
              <p
                className={cn("font-Golos text-sm/4 font-bold text-Black", {
                  "text-Red": props.error,
                })}
              >
                {props.heading}
              </p>
            ) : null}

            {props.error ? (
              <p className="font-Golos text-xs font-normal text-Red">
                {props.error}
              </p>
            ) : null}
            {props.helperInfo ? (
              <p className="font-Golos text-xs font-normal text-Corp_1">
                {props.helperInfo.text}{" "}
                {props.helperInfo.link ? (
                  <>
                    {props.helperInfo.link.type === "internal" ? (
                      <Link
                        className="underline"
                        to={props.helperInfo.link.path}
                      >
                        {props.helperInfo.link.text}
                      </Link>
                    ) : (
                      <a
                        className="underline"
                        href={props.helperInfo.link.path}
                      >
                        {props.helperInfo.link.text}
                      </a>
                    )}
                  </>
                ) : null}
              </p>
            ) : null}
          </div>
        ) : null}

        <div className="grid gap-y-2">
          {props.options.map((item) => (
            <div
              className={cn("relative flex items-center gap-x-2", {
                "pointer-events-none opacity-35": item.disabled,
              })}
              key={item.value}
            >
              <ExtendedRadioButton
                name={props.name}
                inputId={item.label}
                value={item.value}
                onChange={props.onChange}
                checked={props.value === item.value}
                disabled={item.disabled}
                invalid={props.error ? true : false}
                status={props.status}
              />
              <label
                htmlFor={item.label}
                className="flex items-center gap-x-[6px] font-Golos text-sm/4 font-normal text-Black"
              >
                {item.icon ? (
                  <img
                    className="block h-[18px] w-[18px]"
                    src={iconMap[item.icon]}
                    alt="socal network"
                  />
                ) : null}
                <span>{item.label}</span>
              </label>
            </div>
          ))}
        </div>
      </div>

      {props.dividerBottom ? (
        <Divider pt={{ root: { className: "bg-Grey_4 h-px mt-4" } }} />
      ) : null}
    </div>
  ),
);

StyledRadioButton.displayName = "StyledRadioButton";
