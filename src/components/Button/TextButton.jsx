import { Link } from "react-router-dom"

export default function TextButton({ lable, click }) {
    return (
        <div>

            <Link

                to={click}

                className="pb-1 px-2 rounded-lg font-medium text-primary border-b border-b-secondary10 hover:border-b-2">

                {lable}

            </Link>

        </div>
    )
}
