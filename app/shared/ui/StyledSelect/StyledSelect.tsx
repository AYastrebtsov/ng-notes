import { cn } from "../../utils";
import { Ref, forwardRef } from "react";
import { Dropdown, DropdownProps } from "primereact/dropdown";
import { Divider } from "primereact/divider";
import { FixedFloatLabel } from "../FixedFloatLabel/FixedFloatLabel";
import { Link } from "@remix-run/react";

export interface StyledSelectProps extends DropdownProps {
  inputtype: "select";
  name: string;
  value: null | string;
  placeholder: string;
  options: {
    value: string;
    label: string;
    disabled: boolean;
  }[];

  disabled?: true;
  validation?: "default" | "none";
  heading?: string;
  error?: string;
  status?: "warning";
  helperInfo?: {
    text?: string;
    link?: {
      text: string;
      path: string;
      type: "external" | "internal";
    };
  };
  onChange: DropdownProps["onChange"];
  onBlur?: DropdownProps["onBlur"];
  dividerTop?: true;
  dividerBottom?: true;
  className?: string;
  inputClassName?: string;
}

const ExtendedDropdown = ({ ...props }: StyledSelectProps) => (
  <Dropdown {...props} />
);

export const StyledSelect = forwardRef(
  (props: StyledSelectProps, ref: Ref<HTMLInputElement>) => (
    <div ref={ref} className={props.className}>
      {props.dividerTop ? (
        <Divider pt={{ root: { className: "bg-Grey_4 h-px mb-4" } }} />
      ) : null}

      <div className={props.inputClassName}>
        {props.heading ? (
          <p className="mb-2 font-Golos text-sm/4 font-bold text-Black">
            {props.heading}
          </p>
        ) : null}
        <FixedFloatLabel
          pt={{
            root: {
              className: cn(
                "block relative",
                "[&>*:last-child]:absolute",
                "[&>*:last-child]:top-1/2",
                "[&>*:last-child]:-translate-y-1/2",
                "[&>*:last-child]:left-3",
                "[&>*:last-child]:pointer-events-none",
                "[&>*:last-child]:transition-all",
                "[&>*:last-child]:duration-200",
                "[&>*:last-child]:ease",
                "[&>*:last-child]:has-[:focus]:top-[30%]",
                "[&>*:last-child]:has-[:focus]:text-sm",
                "[&>*:last-child]:has-[.p-filled]:top-[30%]",
                "[&>*:last-child]:has-[.p-filled]:text-sm",
              ),
            },
          }}
        >
          <ExtendedDropdown
            inputtype="select"
            id={props.name}
            name={props.name}
            value={props.value}
            options={props.options}
            invalid={props.error ? true : false}
            disabled={props.disabled}
            onBlur={props.onBlur}
            onChange={props.onChange}
            optionDisabled={(option) => option.disabled === true}
            status={props.status}
            optionLabel="label"
            optionValue="value"
            placeholder=" "
          />
          <label
            className={cn(
              "bg-Grey_5 font-Golos text-sm/4  font-normal text-Grey_2",
              { "text-Red": props.value === null && props.error },
            )}
            htmlFor={props.name}
          >
            {props.placeholder}
          </label>
        </FixedFloatLabel>
        {props.error ? (
          <p className="mt-1  font-Golos text-xs font-normal text-Red">
            {props.error}
          </p>
        ) : null}
        {props.helperInfo ? (
          <p className="mt-1 font-Golos text-xs font-normal text-Corp_1">
            {props.helperInfo.text}{" "}
            {props.helperInfo.link ? (
              <>
                {props.helperInfo.link.type === "internal" ? (
                  <Link className="underline" to={props.helperInfo.link.path}>
                    {props.helperInfo.link.text}
                  </Link>
                ) : (
                  <a className="underline" href={props.helperInfo.link.path}>
                    {props.helperInfo.link.text}
                  </a>
                )}
              </>
            ) : null}
          </p>
        ) : null}
      </div>

      {props.dividerBottom ? (
        <Divider pt={{ root: { className: "bg-Grey_4 h-px mt-4" } }} />
      ) : null}
    </div>
  ),
);

StyledSelect.displayName = "StyledSelect";
