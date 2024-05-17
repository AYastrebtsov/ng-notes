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

interface StyledCheckboxProps {
  inputtype: "checkbox";
  name: string;
  value: boolean;
  label: string;
  onChange: CheckboxProps["onChange"];

  validation: "none" | "checked" | "unchecked";

  heading?: string;
  error?: string;
  status?: status;
  disabled?: true;

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

export const StyledCheckbox = forwardRef(
  (props: StyledCheckboxProps, ref: Ref<HTMLInputElement>) => (
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
          <div
            className={cn("relative flex items-center gap-x-2", {
              "pointer-events-none opacity-35": props.disabled,
            })}
          >
            <ExtendedCheckbox
              onChange={props.onChange}
              checked={props.value}
              name={props.name}
              value={props.value}
              inputId={props.label}
              disabled={props.disabled}
              invalid={props.error ? true : false}
              status={props.status}
            />
            <label
              htmlFor={props.label}
              className="font-Golos text-sm/4 font-normal text-Black"
            >
              {props.label}
            </label>
          </div>
        </div>
      </div>

      {props.dividerBottom ? (
        <Divider pt={{ root: { className: "bg-Grey_4 h-px mt-4" } }} />
      ) : null}
    </div>
  ),
);

StyledCheckbox.displayName = "StyledCheckbox";
