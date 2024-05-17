import { cn } from "~/shared/utils";
import { forwardRef, Ref } from "react";
import { Checkbox, CheckboxProps } from "primereact/checkbox";
import { Divider } from "primereact/divider";
import { Link } from "@remix-run/react";

type status = "warning";
export interface ExtendedCheckboxProps extends CheckboxProps {
  status?: status;
}

const ExtendedCheckbox = ({ ...props }: ExtendedCheckboxProps) => (
  <Checkbox {...props} />
);

interface StyledCheckboxMultipleProps {
  inputtype: "checkboxMultiple";
  name: string;
  value: string[];
  onChange: (values: string[]) => void;
  options: {
    value: string;
    label: string;
    disabled: boolean;
  }[];

  validation?: "default" | "none";
  heading?: string;
  error?: string;
  status?: status;

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

export const StyledCheckboxMultiple = forwardRef(
  (props: StyledCheckboxMultipleProps, ref: Ref<HTMLInputElement>) => (
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
          {" "}
          {props.options.map((item) => (
            <div
              className={cn("relative flex items-center gap-x-2", {
                "pointer-events-none opacity-35": item.disabled,
              })}
              key={item.value}
            >
              <ExtendedCheckbox
                onChange={(evt) => {
                  const _values = [...props.value];

                  if (evt.checked) _values.push(evt.value);
                  else _values.splice(_values.indexOf(evt.value), 1);

                  props.onChange(_values);
                }}
                checked={props.value.includes(item.value)}
                name={props.name}
                value={item.value}
                inputId={item.label}
                disabled={item.disabled}
                invalid={props.error ? true : false}
                status={props.status}
              />
              <label
                htmlFor={item.label}
                className="font-Golos text-sm/4 font-normal text-Black"
              >
                {item.label}
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

StyledCheckboxMultiple.displayName = "StyledCheckboxMultiple";
