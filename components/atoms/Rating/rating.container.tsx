import { RatingComponent } from "./rating.component"
type Props = {
  value: number
  text: string
}
export const RatingContainer = (props: Props) => <RatingComponent {...props} />
