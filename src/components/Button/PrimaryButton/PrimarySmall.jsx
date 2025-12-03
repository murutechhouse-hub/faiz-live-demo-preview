import { Link } from "react-router-dom";

export default function SmallButton({ lable, click }) {
  return (
    <div>

      <Link

        to={click}

        className="flex justify-center px-3 py-2 rounded-xl bg-primary text-secondary hover:shadow-2xl hover:bg-primary/90 duration-200">

        {lable}

      </Link>

    </div>
  )
}
