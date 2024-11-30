import Link from "next/link";
import { cn } from "@/lib/utils";

import ButtonInterface from "@/app/interfaces/Button";

import { Button as ButtonUI } from "@/components/ui/button";
import Icon from "@/components/Icon";

export default function Button({
  external = false,
  ...props
}: ButtonInterface) {
  return (
    <ButtonUI
      variant={props.variant}
      aria-label={props.text}
      className={cn(props.className)}
      asChild
    >
      <Link href={props.href} target={external ? "_blank" : "_self"}>
        {props.text} {props.icon && <Icon name={props?.icon} />}
      </Link>
    </ButtonUI>
  );
}
