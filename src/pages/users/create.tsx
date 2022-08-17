
import { VStack, HStack, Checkbox, Flex, SimpleGrid, Box, Text, theme, Heading, Button, Icon, Table, Thead, Tr, Th, Tbody, Td, Divider } from "@chakra-ui/react"
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Input } from "../../components/Form/Input";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import Link from "next/link";
export default function CreateUser() {
    return (
        <Box>
            <Header />
            <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />
                <Box flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]}>
                    <Heading size="lg" fontWeight="normal"> Criar Usuário</Heading>
                    <Divider my="6" borderColor="gray.700" />
                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input placeholder="Nome Completo" name="name" label="Nome Completo" />
                            <Input placeholder="E-mail" name="email" type="email" label="E-mail" />
                        </SimpleGrid>
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input placeholder="Senha" name="password" type="password" label="Password" />
                            <Input placeholder="Confirmação de Senha" name="password_confirmation" type="password" label="Confirmação de senha" />
                        </SimpleGrid>
                    </VStack>

                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/users" passHref>
                                <Button colorScheme="whiteAlpha" flex="1">
                                    Cancelar
                                </Button>
                            </Link>
                            <Button colorScheme="pink">
                                Salvar
                            </Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex >
        </Box>
    )
}