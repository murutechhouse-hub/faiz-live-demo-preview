
export default function ProjectOne({ data }) {

  const project = data.projectDetail.map(prj => (

    <div className="flex flex-col">

      <div>
        <h1>{prj.title}</h1>

        <div className="flex items-center overflow-hidden object-cover rounded-xl h-96">
          <img src={prj.prjct_image} alt={prj.title} />
        </div>

      </div>

      <div>
        <h3>Background</h3>
        <p>{prj.background}</p>
        <p>{prj.backgroundPoint}</p>
        <p>1. {prj.backgroundPoint_1}</p>
        <p>2. {prj.backgroundPoint_2}</p>
        <p>3. {prj.backgroundPoint_3}</p>
      </div>

      <div>
        <h3>Evaluation</h3>
        <p>{prj.evaluation_1}</p>

        <div className="mx-48">
          <img src={prj.evaluation_image1} alt={prj.evaluation_image1} />
        </div>

        <p>{prj.evaluation_2}</p>

        <div className="mx-56">
          <img src={prj.evaluation_image2} alt="" />
        </div>

        <p>{prj.evaluation_3}</p>
      </div>


    </div>

  ))

  if (!data) return null

  return (

    <div className="py-28  bg-background">

      <div className="mx-16">

        {project}

      </div>

    </div>

  )
}
