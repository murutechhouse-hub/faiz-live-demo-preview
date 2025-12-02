import TextButton from "../components/Button/TextButton"

export default function ProjectTwo({ data }) {

    const project2 = data.project2.map(p => (

        <div>
            <h1>{p.title}</h1>

            <div>
                <img src={p.prjct_image} alt={p.title} />
            </div>

            <p>📌 {p.dscl}</p>
            <p>{p.prg1}</p>
            <p>{p.prg2}</p>
            <p>{p.prg3}</p>
            <p>{p.prg4}</p>

            <TextButton click={p.link1} lable={p.lable1} />
            <TextButton click={p.link2} lable={p.lable2} />

        </div>

    ))

    if (!data) return null
    return (
        <div className="bg-background py-28">

            <div className="mx-12">
                {project2}
            </div>

        </div>
    )
}
