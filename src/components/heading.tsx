'use client'
import { Link } from '@chakra-ui/next-js'
import { Flex, HStack, Text, Button, Img, useColorMode, useColorModeValue, Spacer } from '@chakra-ui/react'
import { ImContrast } from "react-icons/im"

export default function Heading() {
    const { toggleColorMode } = useColorMode()
    const logocolor = useColorModeValue('black', 'white')
    const bgcolor = useColorModeValue('white', 'black')
    return (<><Flex bg={bgcolor} width='100%' justify='space-between' borderRadius='md' shadow='lg' align='center' p={2}>
    <Img src='/sarmalogo.png' alt='SarmaZK' width='50px'/>
    <Text fontWeight='bold' color={logocolor}>SarmaZK</Text>
    <Spacer/>
    <HStack>
    <Link href='/' color='blue.400' _hover={{ color: 'blue.500' }}>
        Home
        </Link>
        <Link href='/whitepaper' color='blue.400' _hover={{ color: 'blue.500' }}>
        Whitepaper
        </Link>
        <Link href='/about' color='blue.400' _hover={{ color: 'blue.500' }}>
        About
        </Link>
        <Button leftIcon={<ImContrast />} onClick={toggleColorMode}/>
    </HStack>
    </Flex><br/><br/></>)
}