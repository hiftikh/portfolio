import dynamic from "next/dynamic";
import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";

interface IconProps extends LucideProps {
  name: keyof typeof dynamicIconImports;
}

const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = dynamic(dynamicIconImports[name]);
  props.size = props.size ? props.size : 14;

  return (
    <>
      <LucideIcon {...props} className="inline box-content pl-1" />
    </>
  );
};

export default Icon;
