import { Link } from "react-router-dom"

function Button({ lable, href }) {
  return (
    <div>
      <Link

        to={href}
        
        className="flex justify-center px-4 py-3 font-semibold  rounded-xl bg-primary text-secondary hover:shadow-2xl hover:bg-primary/90 duration-200">

        {lable}

      </Link>
    </div>
  )
}

export default Button