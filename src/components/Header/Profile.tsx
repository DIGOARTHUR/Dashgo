import { Avatar, Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text> Diego Arthur</Text>
                <Text color="gray.300" fontSize="small">digo.arthur@hotmail.com</Text>
            </Box>
            <Avatar size="md" name="Diego Arthur" src="https://github.com/digoarthur.png" />
        </Flex>
    );
}