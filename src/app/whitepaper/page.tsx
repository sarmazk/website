'use client'
import { Link } from '@chakra-ui/next-js'
import { Flex, VStack, Text, useColorModeValue } from '@chakra-ui/react'

import Heading from '../../components/heading'

export default function Page() {
  const textcolor = useColorModeValue('black', 'white')
  const bgcolor = useColorModeValue('white', 'black')
    

  return (
    <VStack width='100%' height='100%' p={4}>
      <Heading/>
      <iframe
        title='SarmaZK Whitepaper'
        width='100%'
        height='10000'
        src='/SarmaZKWhitepaper.pdf'>
      </iframe>
    </VStack>
  )
}