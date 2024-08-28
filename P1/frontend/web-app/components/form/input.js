export default function Input(props) {
	return (
		<input
			className="h-full w-full border-b border-gray bg-transparent pl-5 pb-4 text-white body-text-md outline outline-0 transition-all placeholder-shown:border-gray focus:border-white focus:outline-0 disabled:border-0 caret-red"
			type={props.type}
			name={props.name}
			placeholder={props.placeholder} />
	)
}