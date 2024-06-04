'use client'
import { Link } from '@chakra-ui/next-js'
import { Flex, VStack, Text, useColorModeValue } from '@chakra-ui/react'

import Heading from '../components/heading'

export default function Page() {
  const textcolor = useColorModeValue('black', 'white')
  const bgcolor = useColorModeValue('white', 'black')
    

  return (
    <VStack width='100%' p={4}>
      <Heading/>
      <Text color={textcolor} width='60%'>
        SarmaZK introduces a groundbreaking solution for private transactions
        within the Ethereum Virtual Machine (EVM), leveraging Zero Knowledge
        (ZK) proofs for secure and private data movement across EVM
        blockchains. Our technology, which utilizes the encrypted data structure
        'Sarma', enables private smart contract
        interactions without relinquishing the security and transparency of public
        blockchains. This innovation addresses significant privacy challenges in
        blockchain applications, enhancing both security and usability, making
        SarmaZK a pioneering solution in the realm of blockchain privacy and
        cross-chain functionality.
        <br/><br/>
        Importantly, Sarmas can also travel cross-chain, enhancing bridge security
        by concealing the nature of the data being transferred, thereby significantly
        boosting overall blockchain interoperability and privacy.
        <br/><br/>
        Looking ahead, SarmaZK aims to implement idempotent transitions,
        allowing Sarmas to be managed off-chain effectively, significantly reducing
        on-chain storage needs and optimizing transactional efficiency. This
        innovative approach ensures that only the final results need to be stored,
        enhancing scalability and privacy across transactions.
      </Text>
    </VStack>
  )
}