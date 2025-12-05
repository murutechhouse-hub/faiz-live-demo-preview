
function ButtonIcon({ href, src, target, alt, icon }) {
    return (

        <div className="">
            <a
                href={href}
                target={target}
            >
                {icon}
              

            </a>
        </div>


    )
}

export default ButtonIcon