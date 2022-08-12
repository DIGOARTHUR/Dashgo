import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from 'react-icons/ri';
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function Sidebar() {
    return (

        <Box as="aside" w="64" mr="8">
            <Stack spacing="12" align="flex-start">
                <NavSection title='GERAL'>
                    <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
                    <NavLink icon={RiContactsLine}>Usuários</NavLink>
                </NavSection>

                <NavSection title='AUTOMAÇÃO'>
                    <NavLink icon={RiInputMethodLine}>Formulários</NavLink>
                    <NavLink icon={RiGitMergeLine}>Automação</NavLink>
                </NavSection>
            </Stack>
        </Box>
    )
}