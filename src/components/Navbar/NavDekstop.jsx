import { nav } from "../../data/route.js"

export default function NavDekstop() {
    return (
        <div>

            <div>
                {/* <ul className="p-4 w-96 bg-gray-500/30 backdrop-blur-lg rounded-full flex justify-center space-x-5"> */}
                <ul className="flex justify-center space-x-5">

                    {nav.map(v => (
                        <li key={v.title}>
                            <a href={v.href} className="text-secondary text-lg  font-semibold hover:text-secondary/50   duration-300 ">{v.title}</a>
                        </li>
                    ))}



                </ul>
            </div>

        </div>

    )
}