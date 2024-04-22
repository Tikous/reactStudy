import star from '../assets/star.png'
import excellent from '../assets/excellent.png'
import good from '../assets/good.png'
import { Image, ImageProps } from '@chakra-ui/react'

interface Props {
  rating: number
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: good, alt: 'good', boxSize: '25px'},
    4: { src: star, alt: 'like', boxSize: '30px'},
    5: { src: excellent, alt: 'excellent', boxSize: '25px'}
  }

  return (
    <Image {...emojiMap[rating]} marginTop={1} />
  )
}

export default Emoji