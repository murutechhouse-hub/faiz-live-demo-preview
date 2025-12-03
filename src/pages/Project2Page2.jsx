

export default function Project2Page2({ data }) {

  const project = data.page2.map(p => (

    <div className="flex flex-col">
      {/* Tittle */}
      <div>
        <h1 className="text-xl lg:text-3xl font-bold">{p.title}</h1>
      </div>

      {/* Process */}
      <div className="mt-5">

        <h3 className="text-lg lg:text-xl font-bold mb-2">Process</h3>

        <div className="flex flex-col gap-y-3 lg:w-11/12 ">
          <p>{p.process}</p>

          <div className="flex justify-center">
            <img src={p.processimg} alt={p.processimg} className="overflow-hidden rounded-md lg:h-[600px]" />
          </div>
        </div>

      </div>

      {/* Outcome */}
      <div className="mt-5">

        <h3 className="text-lg lg:text-xl font-bold mb-2">Outcome</h3>

        <div className="flex flex-col gap-y-3 lg:w-11/12">
          <p>{p.outcome}</p>

          <div className="flex justify-center">
            <img src={p.outcomeimg1} alt={p.outcomeimg1} className="overflow-hidden rounded-md lg:h-[536px]" />
          </div>

          <div className="flex justify-center">
            <img src={p.outcomeimg2} alt={p.outcomeimg2} className="overflow-hidden rounded-md lg:h-[600px]" />
          </div>

          <p>{p.outcome2}</p>
        </div>

      </div>

    </div>
  ))

  return (
    <section id="project">

      <div className="py-28 bg-background">

        <div className="mx-10 lg:mx-16">
          {project}
        </div>

      </div>
    </section>
  )
}

