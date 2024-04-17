import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModSwitch from './ColorModSwitch'

const NavBar = () => {
  return (
    // horizontal stack
    <HStack justifyContent='space-between' padding='10px'>
      <Image src={logo} boxSize='60px' />
      <ColorModSwitch />
    </HStack>
  )
}

export default NavBar