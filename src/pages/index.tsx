import { Button, Flex, Input, Stack } from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" alignItems="center" justify="center">
      <Flex as="form" width="100%" maxWidth={360} bg="gray.800" p="8" borderRadius={8} flexDirection="column">
        <Stack spacing="4">
          <Input name="email" type="email" placeholder="E-mail" focusBorderColor="pink.500" bgColor="gray.900" variant="filled" _hover={{ bgColor: 'gray.900' }} size="lg" />
          <Input name="password" type="password" placeholder="Password" focusBorderColor="pink.500" bgColor="gray.900" variant="filled" _hover={{ bgColor: 'gray.900' }} size="lg" />
        </Stack>
        <Button type="submit" mt="6" colorScheme="pink" size="lg"> Entrar</Button>
      </Flex>
    </Flex>
  )
}
