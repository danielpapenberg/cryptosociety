export default function PrimaryButton(props) {
    return (
        props.type === 'dark' ?
            <button className="bg-black m-auto hover:bg-blue-400 text-white shadow-lg shadow-slate-800 text-2xl font-bold py-4 px-6 rounded-full select-none flex gap-3 justify-center items-center" {...props}>
                {props.children}
            </button>
        :
            <button className="bg-blue-400 hover:bg-blue-700 text-white text-2xl font-bold py-4 px-6 rounded-full select-none whitespace-nowrap	flex gap-3 justify-center items-center" {...props}>
                {props.children}
            </button>
    )
}