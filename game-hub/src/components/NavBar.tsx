import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModSwitch from './ColorModSwitch'
import SearchInput from './SearchInput'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    // horizontal stack
    <HStack padding='10px'>
      <Link to='/'>
        <Image src={logo} boxSize='60px' objectFit='cover' />
      </Link>
      <SearchInput />
      <ColorModSwitch />
    </HStack>
  )
}

export default NavBar