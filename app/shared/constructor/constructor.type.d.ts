/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * @minItems 1
 */
export type SchemaForConstructor = [
  (
    | {
        inputtype: "select";
        name: string;
        value: string | null;
        placeholder: string;
        options: {
          value: string;
          label: string;
          disabled: boolean;
          [k: string]: unknown;
        }[];
        disabled?: true;
        validation: "none" | "default";
        heading?: string;
        error?: string;
        status?: "warning";
        dividerTop?: true;
        dividerBottom?: true;
        helperInfo?: {
          text?: string;
          link?: {
            text: string;
            path: string;
            type: "internal" | "external";
            [k: string]: unknown;
          };
        };
        [k: string]: unknown;
      }
    | {
        inputtype: "text";
        name: string;
        value: string;
        placeholder: string;
        validation: "none" | "default";
        disabled?: true;
        heading?: string;
        error?: string;
        status?: "warning";
        dividerTop?: true;
        dividerBottom?: true;
        helperInfo?: {
          text?: string;
          link?: {
            text: string;
            path: string;
            type: "internal" | "external";
            [k: string]: unknown;
          };
        };
        [k: string]: unknown;
      }
  ),
  ...(
    | {
        inputtype: "select";
        name: string;
        value: string | null;
        placeholder: string;
        options: {
          value: string;
          label: string;
          disabled: boolean;
          [k: string]: unknown;
        }[];
        disabled?: true;
        validation: "none" | "default";
        heading?: string;
        error?: string;
        status?: "warning";
        dividerTop?: true;
        dividerBottom?: true;
        helperInfo?: {
          text?: string;
          link?: {
            text: string;
            path: string;
            type: "internal" | "external";
            [k: string]: unknown;
          };
        };
        [k: string]: unknown;
      }
    | {
        inputtype: "text";
        name: string;
        value: string;
        placeholder: string;
        validation: "none" | "default";
        disabled?: true;
        heading?: string;
        error?: string;
        status?: "warning";
        dividerTop?: true;
        dividerBottom?: true;
        helperInfo?: {
          text?: string;
          link?: {
            text: string;
            path: string;
            type: "internal" | "external";
            [k: string]: unknown;
          };
        };
        [k: string]: unknown;
      }
  )[],
];
