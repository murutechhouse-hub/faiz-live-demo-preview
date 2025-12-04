
export default function TextOnlyButton({ lable, click }) {
    return (
        <div>

            <a

                
                href={click}
                target="_blank"

                className="text-primary pb-0.5 hover:border-b hover:border-b-secondary">

                {lable}

            </a>

        </div>
    )
}
