

export default function Project2Page2({ data }) {

  const project = data.page2.map(p => (
    <div>
      <h1>{p.title}</h1>

      <h3>Process</h3>
      <p>{p.process}</p>

      <div>
        <img src={p.processimg} alt={p.processimg} />
      </div>

      <h3>Outcome</h3>
      <p>{p.outcome}</p>

      <div>
        <img src={p.outcomeimg1} alt={p.outcomeimg1} />
      </div>

      <div>
        <img src={p.outcomeimg2} alt={p.outcomeimg2} />
      </div>

<p>{p.outcome2}</p>

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

