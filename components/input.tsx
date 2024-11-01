
interface InputProps {
  label: string;
  type: string
  name: string;
}

export function InputField(props:InputProps) {

return (
  <label className="flex flex-col gap-2">
  <span>{props.label}</span>
  <input className="border outline-orange-400 rounded-md px-4 py-2" type={props.type} name={props.name} />
</label>
)
}

