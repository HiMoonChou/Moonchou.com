type Props = {
  myRole: string
  category: string
  status: string
}

const Description = ({ myRole, category,status }: Props) => {
  return (
    <div className="items-left">
      <div className="text-lg ">{myRole}</div>
      <div className="text-lg">{category}</div>
      <div className="text-lg">{status}</div>
    </div>
)}

export default Description;