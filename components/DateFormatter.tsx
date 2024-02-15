import { parseISO, format } from 'date-fns'

type Props = {
  dateString: string
}

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString)
  const formattedDate = format(date, 'LLLL d, yyyy')
  const textWithDate = `Last updated on ${formattedDate}`

  return <time dateTime={dateString}>{textWithDate}</time>
}

export default DateFormatter
