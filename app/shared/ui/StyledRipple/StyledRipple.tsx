import { Ripple, RippleProps } from "primereact/ripple";

interface StyledRippleProps {
  pt?: {
    root: {
      style: {
        [key: string]: string;
      };
    };
  };
}

export const StyledRipple = ({ ...props }: StyledRippleProps & RippleProps) => (
  <Ripple {...props} />
);
