import TextButton from "../components/Button/TextButton"

export default function Project2Page1({ data }) {

    const project2 = data.detail.map(p => (

        <div>
            <h1>{p.title}</h1>
            <p>📌 {p.dscl}</p>
            <p>{p.prg1}</p>
            <p>{p.prg2}</p>
            <p>{p.prg3}</p>
            <p>{p.prg4}</p>

            <TextButton lable={p.link1} />
            <TextButton lable={p.link2} />

        </div>

    ))

    if (!data) return null
    return (
        <div className="bg-background py-28">

            <div className="mx-16">
                {project2}
            </div>

        </div>
    )
}
