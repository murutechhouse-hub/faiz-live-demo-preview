
export default function ProjectOne({ data }) {

  const project = data.project1.map(p => (

    <div className="flex flex-col">

      <div>
        <h1>{p.title}</h1>

        <div >
          <img src={p.prjct_image} alt={p.title} />
        </div>

      </div>

      <div>
        <h3>Background</h3>
        <p>{p.background}</p>
        <p>{p.backgroundPoint}</p>
        <p>1. {p.backgroundPoint_1}</p>
        <p>2. {p.backgroundPoint_2}</p>
        <p>3. {p.backgroundPoint_3}</p>
      </div>

      <div>
        <h3>Evaluation</h3>
        <p>{p.evaluation_1}</p>

        <div className="lg:mx-48">
          <img src={p.evaluation_image1} alt={p.evaluation_image1} />
        </div>

        <p>{p.evaluation_2}</p>

        <div className="lg:mx-56">
          <img src={p.evaluation_image2} alt={p.evaluation_image1} />
        </div>

        <p>{p.evaluation_3}</p>

        <h3>Audit & Compilation</h3>
        <p>{p.audit1}</p>
        <p>{p.audit2}</p>
        <p>{p.audit3}</p>
        <p>1. {p.auditpoint1}</p>
        <p>2. {p.auditpoint2}</p>
        <p>3. {p.auditpoint3}</p>
        <p>{p.audit4}</p>
        <p>{p.audit5}</p>
        <p>{p.audit6}</p>

        <h3>Craft</h3>
        <p>{p.craft}</p>

        <div>
          <img src={p.craftimage1} alt={p.craftimage1} />
        </div>
        <div>
          <img src={p.craftimage2} alt={p.craftimage2} />
        </div>

        <p>{p.craft2}</p>

        <div>
          <img src={p.craftimage3} alt={p.craftimage3} />
        </div>
        <div>
          <img src={p.craftimage4} alt={p.craftimage4} />
        </div>
        <div>
          <img src={p.craftimage5} alt={p.craftimage5} />
        </div>

        <h3>Discussion</h3>

        <p>{p.discussion}</p>

        <h3>Conclusion and Lesson</h3>

        <p>{p.cunclusion}</p>
        <p>{p.improve}</p>
        <p>1. {p.improvepoint1}</p>
        <p>2. {p.improvepoint2}</p>
        <p>3. {p.improvepoint3}</p>
        <p>4. {p.improvepoint4}</p>

        <p>{p.goodpoint}</p>
        <p>1. {p.goodpoint1}</p>
        <p>2. {p.goodpoint2}</p>
        <p>3. {p.goodpoint3}</p>
        <p>4. {p.goodpoint4}</p>
      </div>


    </div>

  ))

  if (!data) return null

  return (
    <section id="project">

      <div className="py-28  bg-background">

        <div className="mx-12">

          {project}

        </div>

      </div>

    </section>

  )
}
