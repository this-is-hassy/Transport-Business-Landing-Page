import Image from "next/image";

type ButtonProps = {
  children? : any;
  type?: 'button' | 'submit';
  title: string;
  icon?: string;
  className?: string;
}

const Button = ({ type, title, icon,  className, children }: ButtonProps) => {
  return (
    <button
    className={`flex gap-4 ${className}`}
      type={type}
    >
      <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
    </button>
  )
}

export default Button