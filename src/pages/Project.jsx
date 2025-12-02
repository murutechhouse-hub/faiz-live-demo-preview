import { useNavigate } from "react-router-dom"
import Button from "../components/Button/Button"

export default function Project({ data }) {

  if (!data) return null

  const myProject =
    <div className="flex flex-wrap ">

      {data.project.map((prj, i) => (

        <div className="lg:w-[480px] mt-6 mr-3 ">

          <div className="rounded-xl lg:rounded-3xl shadow-lg overflow-hidden">

            <img src={prj.image} alt={prj.title} />

            <div className="flex flex-col items-start p-5 lg:p-6">

              <h1 className="text-lg lg:text-xl font-bold mb-3">{prj.title}</h1>

              <div className="self-end">
                <Button href={prj.link} lable="Read More" />
              </div>

            </div>

          </div>

        </div>
      ))
      }

    </div >

  return (

    <section id='project' className='pt-16 bg-background'>

      <div>
        <div className='mx-5 lg:mx-10'>

          <h1 className='text-primary text-3xl lg:text-4xl font-bold mx-8 lg:mx-0'>Project<span className="text-5xl text-secondary20">.</span></h1>

          <div className="mt-5">
            {myProject}
          </div>

        </div>
      </div>

    </section>
  )
}