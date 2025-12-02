
export default function TextButton({ lable, click }) {
    return (
        <div >
            <button onClick={click} className="" >

                {lable}

            </button>
        </div>
    )
}

