export default function Button(props) {
	return (
		<button
			className="bg-red text-white py-3 px-5 mt-9 rounded body-text-md"
			type={props.type}
		>{props.output}</button>
	)
}