import { Button as ButtonUI } from "@/components/ui/button";
import Icon from "@/components/Icon";
import Link from "next/link";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import { cn } from "@/lib/utils";

export interface ButtonInterface {
  text: string;
  href: string;
  external?: boolean;
  variant?: any;
  icon?: keyof typeof dynamicIconImports;
  className?: string;
}

export default function Button({
  external = false,
  ...props
}: ButtonInterface) {
  return (
    <ButtonUI
      asChild
      variant={props.variant}
      aria-label={props.text}
      className={cn("cursor-pointer", props.className)}
    >
      <Link
        href={props.href}
        target={external ? "_blank" : "_self"}
        scroll={false}
      >
        {props.text} {props.icon && <Icon name={props?.icon} />}
      </Link>
    </ButtonUI>
  );
}
