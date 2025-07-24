---
to: 'src/components/<%= component_type %>/<%= number %>/index.tsx'
---
import clsx from "clsx";

import styles from "./styles.module.css";

type OwnProps = {
  text: string;
};

type Props = Omit<React.ComponentProps<"div">, "children"> & OwnProps;

export const <%= name %> = ({
  className,
  text,
  ...rest
}: Props) => {
  return (
    <div className={clsx(styles.module, className)} {...rest}>{text}</div>
  );
};