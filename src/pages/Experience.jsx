import OutLineButton from "../components/Button/SecondaryButton/SecondaryButton"


export default function Experience({ data }) {
    

    if (!data) return null

    const myExperience =
        <div className="flex flex-wrap lg:justify-center ">

            {data.experience.map((ex, i) => {
                return (

                    <div key={i} className="mt-8 ">

                        <h1 className="text-lg font-bold lg:w-[352px]">
                            {ex.position} - {ex.company}
                        </h1>

                        <p className="  lg:font-medium text-slate-400">
                            {ex.date}
                        </p>

                    </div>

                )
            }
            )}



        </div>

    return (
        <section className="pt-16 bg-background">

            <div >

                <div className="mx-8 lg:mx-10 ">

                    <h1 className='text-primary text-3xl lg:text-4xl font-bold'>Experience<span className="text-5xl text-secondary20">.</span></h1>

                    <div >
                        {myExperience}
                    </div>

                    <div className=" flex justify-center mt-10">
                        <OutLineButton href="https://drive.google.com/drive/folders/1rg9GioRG2ZKG45LN2odWKof5gwG6ehBd?usp=sharing" lable="Resume Details" />
                    </div>

                </div>

            </div>

        </section>
    )
}
