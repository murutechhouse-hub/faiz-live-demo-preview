import React from 'react'

function Project2Page21({ data }) {

    const project = data.page21.map((p, i) => (
        <div key={i} className="flex flex-col">

            <div>
                <h1 className="text-xl lg:text-3xl font-bold">{p.title}</h1>
            </div>

            <div className='mt-5'>
                <p>{p.prg1}</p>
            </div>

            {/* Objective */}
            <div className="mt-5">
                <h3 className="text-lg lg:text-xl font-bold mb-2">Objective</h3>

                <div className="flex flex-col gap-y-3 lg:w-11/12 ">
                    <p>{p.objctv}</p>
                    <p>{p.objctv1}</p>
                </div>

            </div>

            {/* Visibility */}
            <div className="mt-5">

                <h3 className="text-lg lg:text-xl font-bold mb-2">Visibility of System Status</h3>

                <div className="flex flex-col gap-y-3 lg:w-11/12 ">
                    <p>{p.vsblt1}</p>
                    <p>{p.vsblt2}</p>

                    <div className="flex justify-center">
                        <img src={p.vsbltimg} alt="Visibility" className="overflow-hidden rounded-md lg:h-[400px]" />
                    </div>
                </div>

            </div>

            {/* Compatibility */}
            <div className="mt-5">
                <h3 className="text-lg lg:text-xl font-bold mb-2">Compatibility between System and Real World</h3>

                <div className="flex flex-col gap-y-3 lg:w-11/12 ">
                    <p>{p.cmptblty1}</p>
                    <p>{p.cmptblty2}</p>

                    <div className="flex justify-center">
                        <img src={p.cmptbltyimg} alt="cmptblty" className="overflow-hidden rounded-md lg:h-[550px]" />
                    </div>
                </div>

            </div>

            {/* User Control */}
            <div className='mt-5'>
                <h3 className="text-lg lg:text-xl font-bold mb-2">User Control and Freedom</h3>

                <div className="flex flex-col gap-y-3 lg:w-11/12">

                    <p>{p.usr}</p>

                    <div className="flex justify-center">
                        <img src={p.usrimg} alt="" className="overflow-hidden rounded-md lg:h-[550px]" />
                    </div>

                </div>
            </div>

            {/* Consistency */}
            <div className='mt-5'>
                <h3 className="text-lg lg:text-xl font-bold mb-2">Consistency and Standard</h3>

                <div className="flex flex-col gap-y-3 lg:w-11/12 ">
                    <p>{p.cnsstn1}</p>
                    <p>{p.cnsstn2}</p>
                    <p>{p.cnsstn3}</p>

                    <div className="flex justify-center">
                        <img src={p.cnsstnimg} alt="cnsstn" className="overflow-hidden rounded-md lg:h-[550px]" />
                    </div>

                </div>

            </div>

            {/* Error */}
            <div className='mt-5'>
                <h3 className="text-lg lg:text-xl font-bold mb-2">Error and Prevention</h3>

                <div className="flex flex-col gap-y-3 lg:w-11/12 ">
                    <p>{p.err}</p>

                    <div className="flex justify-center">
                        <img src={p.errimg} alt="error" className="overflow-hidden rounded-md lg:h-[550px]" />
                    </div>
                </div>

            </div>

            {/* Recognition */}
            <div className="mt-5">
                <h3 className="text-lg lg:text-xl font-bold mb-2">Recognition rather than Recall</h3>

                <div className="flex flex-col gap-y-3 lg:w-11/12">
                    <p>{p.rcgn}</p>

                    <div className="flex justify-center">
                        <img src={p.rcgnimg} alt="rcgn" className="overflow-hidden rounded-md lg:h-[550px]" />
                    </div>
                </div>
            </div>

            {/* Flexibility */}
            <div className="mt-5">
                <h3 className="text-lg lg:text-xl font-bold mb-2">Flexibility and Efficiency of Use</h3>

                <div className="flex flex-col gap-y-3 lg:w-11/12 ">
                    <p>{p.flx1}</p>
                    <p>{p.flx2}</p>

                    <div className="flex justify-center">
                        <img src={p.flximg} alt="flx" className="overflow-hidden rounded-md lg:h-[450px]" />
                    </div>
                </div>
            </div>

            {/* Aesthetic */}
            <div className="mt-5">
                <h3 className="text-lg lg:text-xl font-bold mb-2">Aesthetic and Minimalist</h3>

                <div className="flex flex-col gap-y-3 lg:w-11/12 ">
                    <p>{p.asstc1}</p>
                    <p>{p.asstc2}</p>

                    <div className="flex justify-center">
                        <img src={p.asstcimg} alt="asstc" className="overflow-hidden rounded-md lg:h-[500px]" />
                    </div>
                </div>

            </div>

            {/* Help users */}
            <div className="nt-5">

                <h3 className="text-lg lg:text-xl font-bold mb-2">Help users to Recognize, Diagnose, and Recover from errors</h3>

                <div className="flex flex-col gap-y-3 lg:w-11/12 ">
                    <p>{p.hlpusr1}</p>
                    <p>{p.hlpusr2}</p>
                </div>

            </div>

            {/* Help */}
            <div className="mt-5">

                <h3 className="text-lg lg:text-xl font-bold mb-2">Help and Documentation</h3>

                <div className="flex flex-col gap-y-3 lg:w-11/12">
                    <p>{p.hlp}</p>

                    <div className="flex justify-center" >
                        <img src={p.hlpimg} alt="" className="overflow-hidden rounded-md lg:h-[500px]" />
                    </div>
                </div>

            </div>

            {/* Lesson */}
            <div className="mt-5">
                <h3 className="text-lg lg:text-xl font-bold mb-2">Lesson for me</h3>

                <div className="flex flex-col gap-y-3 lg:w-11/12 ">
                    <p>{p.lsn1}</p>
                    <p>{p.lsn2}</p>
                    <p>{p.lsn3}</p>
                </div>

            </div>
            
        </div >
    ))

    return (
        <div className="pt-28 bg-background">

            <div className='mx-10 lg:mx-16'>
                {project}
            </div>

        </div>
    )
}

export default Project2Page21