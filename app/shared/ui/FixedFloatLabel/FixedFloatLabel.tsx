import { useMemo } from "react";
import { FloatLabel, FloatLabelProps } from "primereact/floatlabel";

interface FixedFloatLabelProps {
  children?: React.ReactNode | undefined;
}

export const FixedFloatLabel = ({
  ...props
}: FixedFloatLabelProps & FloatLabelProps) =>
  useMemo(() => <FloatLabel {...props} />, [props]);
