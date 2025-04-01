import Link from "next/link";
import { cn } from "@/lib/utils";

import ButtonInterface from "@/app/interfaces/Button";

import { Button as ButtonUI } from "@/components/ui/button";
import Icon from "@/components/Icon";

export default function Button({ ...props }: ButtonInterface) {
  return (
    <ButtonUI
      variant={props.variant}
      aria-label={props.text}
      className={cn(props.className)}
      asChild
      size={props.size}
    >
      {props.external ? (
        <a href={props.href} target="_blank">
          {props.text}
          {props.icon && <Icon name={props?.icon} />}
        </a>
      ) : (
        <Link href={props.href}>
          {props.text}
          {props.icon && <Icon name={props?.icon} />}
        </Link>
      )}
    </ButtonUI>
  );
}
