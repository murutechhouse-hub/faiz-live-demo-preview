

export default function PrimarySection({ lable, click }) {
  return (
    <div>

      <a

        href={click}

        className="flex justify-center px-4 py-3 font-semibold text-sm rounded-xl bg-primary text-secondary hover:shadow-2xl hover:bg-primary/90 duration-200">

        {lable}

      </a>

    </div>
  )
}

