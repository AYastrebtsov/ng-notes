import { cn } from "~/shared/utils";
import { forwardRef, Ref, useState } from "react";
import { Link } from "@remix-run/react";

import { StyledRipple } from "../StyledRipple/StyledRipple";

import { Checkbox } from "primereact/checkbox";
import { Divider } from "primereact/divider";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

import closeIcon from "./icons/closeIcon.svg";

interface StyledPhotoCheckboxProps {
  inputtype: "photoCheckbox";
  name: string;
  value: string[];
  onChange: (values: string[]) => void;

  options: {
    value: string;
    disabled: boolean;
    label: string;

    img: string;
    text?: string;
    details?: {
      text: string;
      details: string;
      img: string;
      link?: {
        text: string;
        path: string;
        type: "external" | "internal";
      };
    };
  }[];
  error?: string;

  validation: "default" | "none";
  heading?: string;

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

export const StyledPhotoCheckbox = forwardRef(
  (props: StyledPhotoCheckboxProps, ref: Ref<HTMLInputElement>) => {
    const [activeItem, setActiveItem] = useState<
      null | StyledPhotoCheckboxProps["options"][0]
    >(null);

    const [open, setOpen] = useState<boolean>(false);

    return (
      <div ref={ref} className={props.className}>
        {props.dividerTop ? (
          <Divider pt={{ root: { className: "bg-Grey_4 h-px mb-[22px]" } }} />
        ) : null}

        <div className={props.inputClassName}>
          {props.heading || props.error || props.helperInfo ? (
            <div className="mb-[38px]">
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

          <div className="grid grid-cols-2 gap-x-2 gap-y-[14px]">
            {props.options.map((item) => (
              <div
                className={cn("overflow-hidden", {
                  "pointer-events-none opacity-35": item.disabled,
                })}
                key={item.value}
              >
                <label htmlFor={item.label}>
                  <div className="relative mb-[10px] h-[114px] w-full overflow-hidden rounded-md">
                    <img
                      src={item.img}
                      alt="checkbox banner"
                      className="h-full w-full object-cover"
                    />
                    <Checkbox
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
                      pt={{
                        root: { className: "absolute right-2 top-2 bg-White" },
                      }}
                    />
                  </div>
                  <p className="font-Golos text-sm/4 font-bold text-Black">
                    {item.label}
                  </p>
                  {item.text ? (
                    <p className="mt-1 line-clamp-2 font-Golos text-xs font-normal text-Black">
                      {item.text}
                    </p>
                  ) : null}
                </label>

                {item.details ? (
                  <Button
                    outlined
                    label="Подробнее"
                    pt={{ root: { className: "mt-[14px]" } }}
                    onClick={() => {
                      setActiveItem(item);
                      setOpen(true);
                    }}
                  >
                    <StyledRipple
                      pt={{
                        root: {
                          style: { background: "rgba(199, 50, 155, 0.8)" },
                        },
                      }}
                    />
                  </Button>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        {props.dividerBottom ? (
          <Divider pt={{ root: { className: "bg-Grey_4 h-px mt-[22px]" } }} />
        ) : null}

        <Dialog
          visible={open}
          onHide={() => {
            setOpen(false);
          }}
        >
          {activeItem !== null ? (
            <div>
              <div className="relative mb-4 h-[176px] w-full overflow-hidden rounded-t-lg">
                <button
                  className="absolute right-3 top-3 overflow-hidden"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <img
                    className="block h-[18px] w-[18px]"
                    src={closeIcon}
                    alt="close dialog"
                  />
                  <StyledRipple
                    pt={{
                      root: {
                        style: { background: "rgba(199, 50, 155, 0.8)" },
                      },
                    }}
                  />
                </button>

                <img
                  src={activeItem.details?.img}
                  alt="checkbox banner"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="grid gap-y-2 p-4 pb-8">
                <p className="font-Golos text-lg/6 font-bold text-Black">
                  {activeItem.details?.text}
                </p>
                <p className="font-Golos text-sm/4 font-normal text-Black">
                  {activeItem.details?.details}
                </p>
                <p className="font-Golos text-xs font-normal text-Corp_1">
                  {activeItem.details?.link ? (
                    <>
                      {activeItem.details?.link?.type === "internal" ? (
                        <Link
                          className="underline"
                          to={activeItem.details?.link?.path}
                        >
                          {activeItem.details?.link?.text}
                        </Link>
                      ) : (
                        <a
                          className="underline"
                          href={activeItem.details?.link?.path}
                        >
                          {activeItem.details?.link?.text}
                        </a>
                      )}
                    </>
                  ) : null}
                </p>

                {!props.value.includes(activeItem.value) ? (
                  <Button
                    label="Выбрать"
                    onClick={() => {
                      const _values = [...props.value];
                      _values.push(activeItem.value);
                      setTimeout(() => {
                        props.onChange(_values);
                      }, 250);
                      setOpen(false);
                    }}
                  />
                ) : (
                  <div>
                    <p className="mb-[11px] mt-[18px] font-Golos text-lg/6 font-normal text-Black">
                      Отменить выбор ?
                    </p>

                    <div className="flex gap-x-1">
                      <Button
                        label="Нет"
                        outlined
                        onClick={() => {
                          setOpen(false);
                        }}
                      >
                        <StyledRipple
                          pt={{
                            root: {
                              style: { background: "rgba(199, 50, 155, 0.8)" },
                            },
                          }}
                        />
                      </Button>
                      <Button
                        label="Да"
                        onClick={() => {
                          const _values = [...props.value];
                          _values.splice(_values.indexOf(activeItem.value), 1);
                          setTimeout(() => {
                            props.onChange(_values);
                          }, 250);

                          setOpen(false);
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : null}
        </Dialog>
      </div>
    );
  },
);

StyledPhotoCheckbox.displayName = "StyledPhotoCheckbox";
