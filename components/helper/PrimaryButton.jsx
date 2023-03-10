export default function PrimaryButton(props) {
    return (
        props.type === 'dark' ?
            <button className="bg-black hover:bg-blue-500 text-white shadow-lg shadow-slate-800 text-2xl font-bold py-4 px-6 rounded-full select-none flex gap-3 justify-center items-center" {...props}>
                {props.children}
            </button>
        :
            <button className="bg-blue-500 hover:bg-blue-700 text-white text-2xl font-bold py-4 px-6 rounded-full select-none whitespace-nowrap	flex gap-3 justify-center items-center" {...props}>
                {props.children}
            </button>
    )
}