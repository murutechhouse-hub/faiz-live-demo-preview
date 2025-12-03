
export default function ProjectOne({ data }) {

  const project = data.project1.map((p ,i) => (

    <div key={i} className="flex flex-col">

      <div>
        <h1 className="text-xl lg:text-3xl font-bold">{p.title}</h1>

        <div className="flex justify-center  mt-5">
          <img src={p.prjct_image} alt={p.title} className="overflow-hidden rounded-xl lg:h-80" />
        </div>
      </div>

      {/* Backgroud */}
      <div className="mt-5">

        <h3 className="text-lg lg:text-xl font-bold mb-2">Background</h3>

        <div className="bg-secondary/10 border-l border-l-secondary20  mb-3 py-8 px-5 rounded-md">
          <p>{p.background}</p>
        </div>

        <div className="flex flex-col gap-y-2 lg:w-11/12">
          <p>{p.backgroundPoint}</p>
          <p>1. {p.backgroundPoint_1}</p>
          <p>2. {p.backgroundPoint_2}</p>
          <p>3. {p.backgroundPoint_3}</p>
        </div>

      </div>

      {/* Evaluation */}
      <div className="mt-5">

        <h3 className="text-lg lg:text-xl font-bold mb-2">Evaluation</h3>

        <div className="flex flex-col gap-y-3 lg:w-11/12 ">
          <p>{p.evaluation_1}</p>

          <div className="flex justify-center">
            <img src={p.evaluation_image1} alt={p.evaluation_image1} className="overflow-hidden rounded-md lg:h-60" />
          </div>

          <p>{p.evaluation_2}</p>

          <div className="flex justify-center">
            <img src={p.evaluation_image2} alt={p.evaluation_image1} className="overflow-hidden rounded-md lg:h-60" />
          </div>

          <p>{p.evaluation_3}</p>
        </div>

      </div>

      {/* Audit & Compilation */}
      <div className="mt-5">
        <h3 className="text-lg lg:text-xl font-bold mb-2">Audit & Compilation</h3>

        <div className="flex flex-col gap-y-3 lg:w-11/12 mb-2">
          <p>{p.audit1}</p>
          <p>{p.audit2}</p>
          <p>{p.audit3}</p>
          <p>1. {p.auditpoint1}</p>
          <p>2. {p.auditpoint2}</p>
          <p>3. {p.auditpoint3}</p>
          <p>{p.audit4}</p>
          <p>{p.audit5}</p>
          <p>{p.audit6}</p>
        </div>

      </div>

      {/* Craft */}
      <div className="mt-5">
        <h3 className="text-lg lg:text-xl font-bold mb-2">Craft</h3>

        <div className="flex flex-col gap-y-3 lg:w-11/12">
          <p>{p.craft}</p>

          <div className="flex justify-center">
            <img src={p.craftimage1} alt={p.craftimage1} className="overflow-hidden rounded-md lg:h-96" />
          </div>

          <div className="flex justify-center">
            <img src={p.craftimage2} alt={p.craftimage2} className="overflow-hidden rounded-md  lg:h-96" />
          </div>

          <p>{p.craft2}</p>

          <div className="flex justify-center">
            <img src={p.craftimage3} alt={p.craftimage3} className="overflow-hidden rounded-md lg:h-96" />
          </div>

          <div className="flex justify-center">
            <img src={p.craftimage4} alt={p.craftimage4} className="overflow-hidden rounded-md lg:h-80" />
          </div>

          <div className="flex justify-center">
            <img src={p.craftimage5} alt={p.craftimage5} className="overflow-hidden rounded-md h-96" />
          </div>

        </div>

      </div>

      {/* Discussion */}
      <div className="mt-5">
        <h3 className="text-lg lg:text-xl font-bold mb-2">Discussion</h3>

        <div className="lg:w-11/12">
          <p>{p.discussion}</p>
        </div>
      </div>

      {/* Conclusion */}
      <div className="mt-5">
        <h3 className="text-lg lg:text-xl font-bold mb-2">Conclusion and Lesson</h3>

        <div className="mb-4">
          <p>{p.cunclusion}</p>
        </div>

        <div className="flex flex-col gap-y-2 lg:w-11/12 mb-4">
          <p>{p.improve}</p>
          <p>1. {p.improvepoint1}</p>
          <p>2. {p.improvepoint2}</p>
          <p>3. {p.improvepoint3}</p>
          <p>4. {p.improvepoint4}</p>
        </div>

        <div className="flex flex-col gap-y-2 lg:w-11/12">
          <p>{p.goodpoint}</p>
          <p>1. {p.goodpoint1}</p>
          <p>2. {p.goodpoint2}</p>
          <p>3. {p.goodpoint3}</p>
          <p>4. {p.goodpoint4}</p>
        </div>

      </div>

    </div>

  ))

  if (!data) return null

  return (
    <section id="project">

      <div className="pt-24  bg-background">

        <div className="mx-10 lg:mx-14">

          {project}

        </div>

      </div>

    </section>

  )
}
