
const Button = ({Children}) => {
    return (
        <button className="w-32 h-10 focus:outline-none flex items-center justify-center rounded-full border border-yellow-600 hover:bg-yellow-600 hover:text-white text-yellow-700" type="submit">{Children}</button>
    )
}

export default Button
