import TextButton from "../components/Button/TextButton"

export default function ProjectTwo({ data }) {

    const project2 = data.project2.map(p => (

        <div className="flex flex-col">

            <div>
                <h1 className="text-xl lg:text-3xl font-bold">{p.title}</h1>

                <div className="flex justify-center mt-5">
                    <img src={p.prjct_image} alt={p.title} className="overflow-hidden rounded-xl lg:h-80" />
                </div>
            </div>

            <div className="mt-8">
                <p className="bg-primary/10 border-l border-l-primary mb-3 p-5 rounded-md">📌 {p.dscl}</p>
            </div>

            <div className="flex flex-col gap-y-3 lg:w-11/12">
                <p>{p.prg1}</p>
                <p>{p.prg2}</p>
                <p>{p.prg3}</p>
                <p>{p.prg4}</p>

                <div className=" flex flex-col gap-y-3">
                    <TextButton click={p.link1} lable={p.lable1} />
                    <TextButton click={p.link2} lable={p.lable2} />
                </div>
            </div>

        </div>

    ))

    if (!data) return null
    return (
        <div className="bg-background py-24">

            <div className="mx-10 lg:mx-14">
                {project2}
            </div>

        </div>
    )
}
