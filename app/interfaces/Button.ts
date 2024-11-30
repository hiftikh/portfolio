import dynamicIconImports from "lucide-react/dynamicIconImports";

export default interface ButtonInterface {
  text: string;
  href: string;
  external?: boolean;
  variant?: any;
  icon?: keyof typeof dynamicIconImports;
  className?: string;
}
