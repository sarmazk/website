'use client'
import { Link } from '@chakra-ui/next-js'
import { Flex, VStack, Text, useColorModeValue } from '@chakra-ui/react'

import Heading from '../../components/heading'

export default function Page() {
  const textcolor = useColorModeValue('black', 'white')
  const bgcolor = useColorModeValue('white', 'black')
    

  return (
    <VStack width='100%' p={4}>
      <Heading/>
      <Text color={textcolor} width='60%'>
      Contacts
      <br/><br/>
      Founder: Jordan Stojanovski
      <br/>
      Email: <a href='mailto:jordan@sarmazk.xyz'>jordan@sarmazk.xyz</a>
      <br/>
      Telegram: <a href='https://t.me/JordanSto' target="_blank" rel="noopener noreferrer">@JordanSto (https://t.me/JordanSto)</a>
      <br/><br/>
      SarmaZK:
      <br/>
      Documentation: <a href='https://docs.sarmazk.xyz' target="_blank" rel="noopener noreferrer">https://docs.sarmazk.xyz</a>
      <br/>
      Whitepaper: <a href='/whitepaper'>https://sarmazk.xyz/whitepaper</a>
      <br/>
      Linkedin: <a href='https://www.linkedin.com/company/sarma-zk' target="_blank" rel="noopener noreferrer">https://www.linkedin.com/company/sarma-zk</a>
      <br/>
      Github: <a href='https://github.com/sarmazk' target="_blank" rel="noopener noreferrer">https://github.com/sarmazk</a>
      <br/>
      Twitter/X: <a href='https://twitter.com/sarmazk' target="_blank" rel="noopener noreferrer">https://twitter.com/sarmazk</a>
      </Text>
    </VStack>
  )
}