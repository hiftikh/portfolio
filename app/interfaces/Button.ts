import dynamicIconImports from "lucide-react/dynamicIconImports";

export default interface ButtonInterface {
  text: string;
  href: string;
  variant?: any;
  icon?: keyof typeof dynamicIconImports;
  className?: string;
  size?: any;
  external: boolean;
}
