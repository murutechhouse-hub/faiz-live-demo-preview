import { Link } from "react-router-dom";

export default function IconTextButton({ lable, href, src, alt, icon, icon2 }) {
  return (
    <div>
      <Link
        href={href}
        className="flex flex-row items-center justify-center gap-1 px-4 py-3 font-semibold text-sm rounded-xl border border-primary bg-transparent text-primary hover:bg-primary/10  hover:shadow-2xl duration-200">
        
        {icon}
        <img src={src} alt={alt} />
        {lable}
        {icon2}
        
      </Link>
    </div>
  )
}
