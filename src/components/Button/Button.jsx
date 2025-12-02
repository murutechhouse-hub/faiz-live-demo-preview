
function Button({ lable, href, click }) {
  return (
    <div>
      <a

        href={href}
        target="_blank"
        className="flex justify-center px-4 py-3 font-semibold  rounded-xl bg-primary text-secondary hover:shadow-2xl hover:bg-primary/90 duration-200">

        {lable}

      </a>
    </div>
  )
}

export default Button