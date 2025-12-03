import { Link } from "react-router-dom"

function LargeButton({ click, lable }) {
    return (
        <div>
            <Link
                to={click}
                className="px-6 py-4 rounded-full bg-primary text-secondary hover:shadow-2xl hover:bg-primary/90 duration-200">
                {lable}
            </Link>
        </div>
    )
}

export default LargeButton