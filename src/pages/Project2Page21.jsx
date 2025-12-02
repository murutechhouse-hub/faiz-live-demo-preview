import React from 'react'

function Project2Page21({ data }) {

    const project = data.page21.map((p ,i)=> (
        <div key={i}>
            <h1>{p.title}</h1>
            <p>{p.prg1}</p>

            <h3>Objective</h3>
            <p>{p.objctv}</p>
            <p>{p.objctv1}</p>

            <h3>Visibility of System Status</h3>
            <p>{p.vsblt1}</p>
            <p>{p.vsblt2}</p>

            <div>
                <img src={p.vsbltimg} alt="Visibility" />
            </div>

            <h3>Compatibility between System and Real World</h3>
            <p>{p.cmptblty1}</p>
            <p>{p.cmptblty2}</p>

            <div>
                <img src={p.cmptbltyimg} alt="cmptblty" />
            </div>

            <h3>User Control and Freedom</h3>
            <p>{p.usr}</p>

            <div>
                <img src={p.usrimg} alt="" />
            </div>

            <h3>Consistency and Standard</h3>
            <p>{p.cnsstn1}</p>
            <p>{p.cnsstn2}</p>
            <p>{p.cnsstn3}</p>
            <div>
                <img src={p.cnsstnimg} alt="cnsstn" />
            </div>

            <h3>Error and Prevention</h3>
            <p>{p.err}</p>

            <div>
                <img src={p.errimg} alt="" />
            </div>

            <h3>Recognition rather than Recall</h3>
            <p>{p.rcgn}</p>

            <div>
                <img src={p.rcgnimg} alt="rcgn" />
            </div>


            <h3>Flexibility and Efficiency of Use</h3>
            <p>{p.flx1}</p>
            <p>{p.flx2}</p>

            <div>
                <img src={p.flximg} alt="flx" />
            </div>

            <h3>Aesthetic and Minimalist</h3>
            <p>{p.asstc1}</p>
            <p>{p.asstc2}</p>

            <div><img src={p.asstcimg} alt="asstc" /></div>

            <h3>Help users to Recognize, Diagnose, and Recover from errors</h3>
            <p>{p.hlpusr1}</p>
            <p>{p.hlpusr2}</p>
            <h3>Help and Documentation</h3>
            <p>{p.hlp}</p>

            <div>
                <img src={p.hlpimg} alt="" />
            </div>

            <h3>Lesson for me</h3>
            <p>{p.lsn1}</p>
            <p>{p.lsn2}</p>
            <p>{p.lsn3}</p>
        </div>
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