
function ButtonIcon({ href, src, target, alt, icon }) {
    return (

        <div className="">
            <a
                href={href}
                target={target}
            >
                {icon}
                <img
                    src={src}
                    alt={alt}
                    className="w-7 h-7" />

            </a>
        </div>


    )
}

export default ButtonIcon