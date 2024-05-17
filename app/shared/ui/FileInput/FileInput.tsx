import { Link } from "@remix-run/react";
import { Divider } from "primereact/divider";

interface FileInputProps {
  inputtype: "file";
  name: string;
  value: string;
  placeholder: string;
  validation: "default" | "none";

  disabled?: true;
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

  hint?: string;
}

export const FileInput = (props: FileInputProps) => {
  return (
    <div className={props.className}>
      {props.dividerTop ? (
        <Divider pt={{ root: { className: "bg-Grey_4 h-px mb-4" } }} />
      ) : null}

      <div className={props.inputClassName}>
        {props.heading ? (
          <p className="mb-2 font-Golos text-sm/4 font-bold text-Black">
            {props.heading}
          </p>
        ) : null}

        <p>сам инпут</p>

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
  );
};
