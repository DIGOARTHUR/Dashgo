
import { Stack, Checkbox, Flex, SimpleGrid, Box, Text, theme, Heading, Button, Icon, Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react"
import { PaginationItem } from "./PaginationItem"
export function Pagination() {
    return (
        <Stack direction="row" mt="8" justify="space-between" align="center">
            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>
            <Stack direction="row" spacing="2">
                <PaginationItem number={1} isCurrent/>
                <PaginationItem number={2} />
                <PaginationItem number={3} />
                <PaginationItem number={4} />
                <PaginationItem number={5} />
                <PaginationItem number={6} />
            </Stack>
        </Stack>
    )
}