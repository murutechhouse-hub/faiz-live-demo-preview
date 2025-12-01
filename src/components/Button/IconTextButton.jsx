
export default function IconTextButton({ lable, href, src, alt, icon, icon2 }) {
  return (
    <div>
      <a
        href={href}
        className="flex flex-row items-center justify-center gap-1 px-4 py-3 rounded-xl bg-primary text-secondary hover:shadow-2xl hover:bg-primary/90 duration-200">
        
        {icon}
        <img src={src} alt={alt} />
        {lable}
        {icon2}
        
      </a>
    </div>
  )
}
