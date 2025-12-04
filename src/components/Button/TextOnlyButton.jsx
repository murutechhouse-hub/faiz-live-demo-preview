import { Link } from "react-router-dom"

export default function TextOnlyButton({ lable, click }) {
    return (
        <div>

            <Link

                to={click}

                className="text-primary pb-0.5 hover:border-b hover:border-b-secondary">

                {lable}

            </Link>

        </div>
    )
}
