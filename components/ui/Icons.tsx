
import { FontAwesome5 } from '@expo/vector-icons';

interface Props {
    name: string
    size: number
    color: string
}
export function ScoreIcon(props : Props) {
  return (
    <FontAwesome5 name="award" size={24} color="black"  {...props}/>
  )
}

export function HomeIcon(props: Props) {
  return (
    <FontAwesome5 name="home" size={24} color="black"  {...props}/>
  )
}
export function QuestionIcon(props: Props) {
  return (
    <FontAwesome5 name="question" size={24} color="black" {...props} />
  )
}

export function LogginIcon(props: Props) {
  return (
    <FontAwesome5 name="lock" size={24} color="black" {...props} />
  )
}

export function LogoutIcon(props: Props) {
  return (
    <FontAwesome5 name="lock-open" size={24} color="black" {...props} />
  )
}
