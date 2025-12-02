
export default function Project2Page1({ data }) {

    const project2 = data.detail.map(p => (

        <div>
            <h1>{p.title}</h1>
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
