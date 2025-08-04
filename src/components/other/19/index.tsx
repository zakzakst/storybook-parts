import clsx from "clsx";

import { Bookmark } from "./parts/Bookmark";
import { Heart } from "./parts/Heart";
import { Star } from "./parts/Star";
import styles from "./styles.module.css";

type Props = Omit<React.ComponentProps<"div">, "children">;

export const Other19 = ({ className, ...rest }: Props) => {
  return (
    <div className={clsx(styles.module, className)} {...rest}>
      <Heart />
      <Star />
      <Bookmark />
    </div>
  );
};
