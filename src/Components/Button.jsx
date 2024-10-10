export const Button = ({ children, ...props }) => {
  return (
    <button
      className="px-4 py-2 text-xs md:text-base rounded-md bg-sky-950 text-stone-400 hover:bg-sky-500	 hover:text-stone-100"
      {...props}
    >
      {children}
    </button>
  )
}
