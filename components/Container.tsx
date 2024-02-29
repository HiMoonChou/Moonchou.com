type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return <div className=" w-auto px-4 md:px-16 rounded-b-xl">{children}</div>
}

export default Container
