import { Link } from "react-router-dom";

export default function OutLineButton({ lable, click }) {
  return (
    <div>

      <Link
        to={click}
        className="px-4 py-3 font-semibold text-sm rounded-xl border border-primary bg-transparent text-primary hover:bg-primary/10 hover:shadow-2xl">

        {lable}

      </Link>

    </div>
  )
}

