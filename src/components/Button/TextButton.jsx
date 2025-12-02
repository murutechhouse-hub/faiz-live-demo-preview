import { Link } from "react-router-dom"

export default function TextButton({ lable, click }) {
    return (
        <div>

            <Link

                to={click}

                className="">

                {lable}

            </Link>

        </div>
    )
}
