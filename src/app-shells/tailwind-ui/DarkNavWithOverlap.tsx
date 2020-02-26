import React from "react";
import { Flex, Box, Icon, Button } from "@chakra-ui/core";

const navButtons = ["Dashboard", "Team", "Projects", "Calendar", "Reports"];

export const DarkNavWithOverlap = () => {
  return (
    <Flex height="100vh">
      <Flex as="nav" justifyContent="space-between">
        <Box>
          <Icon name="calendar" />
          {navButtons.map(b => (
            <Button as="a" variant="ghost">
              {b}
            </Button>
          ))}
        </Box>
      </Flex>
    </Flex>
  );
};
