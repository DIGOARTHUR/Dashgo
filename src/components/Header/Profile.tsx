import { Avatar, Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  
    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text> Diego Arthur</Text>
                    <Text color="gray.300" fontSize="small">digo.arthur@hotmail.com</Text>
                </Box>
            )

            }

            <Avatar size="md" name="Diego Arthur" src="https://github.com/digoarthur.png" />
        </Flex>
    );
}