import React, { useState } from "react";
import {
  Grid,
  Box,
  Flex,
  Text,
  Icon,
  PseudoBox,
  IconProps
} from "@chakra-ui/core";

import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

const menuItems: {
  label: string;
  icon: IconProps["name"];
  active?: boolean;
}[] = [
  { label: "Dashboard", icon: "settings", active: true },
  { label: "Team", icon: "check" },
  { label: "Project", icon: "edit" },
  { label: "Calendar", icon: "calendar" }
];

const activeMenuItemStyle = {
  bg: "gray.800",
  cursor: "pointer",
  borderRadius: "md"
};

export const DarkSidebarLightHeader = () => {
  const [sideBarCollapsed, setSideBarCollapsed] = useState(false);

  return (
    <Grid
      gridTemplateColumns={["auto 1fr"]}
      gridTemplateRows={["auto 1fr"]}
      width="100%"
      height="100%"
      fontFamily="sans"
    >
      <Flex
        bg="gray.800"
        p={[4]}
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex mr={sideBarCollapsed ? [0] : [8]} alignItems="center">
          <Icon name="calendar" color="purple.400" size="8" mr={[3]} />
          {!sideBarCollapsed && (
            <Text color="white" fontSize="2xl" fontWeight="bolder">
              workflow
            </Text>
          )}
        </Flex>
        <PseudoBox
          transition="all 0.2s"
          _hover={{
            color: "gray.300",
            cursor: "pointer"
          }}
          as={sideBarCollapsed ? FiChevronsRight : FiChevronsLeft}
          color="gray.500"
          size="6"
          onClick={() => setSideBarCollapsed(!sideBarCollapsed)}
        />
      </Flex>
      <Box
        bg="white"
        p={[4]}
        shadow="lg"
        borderY="gray.1px"
        borderRight="gray.1px"
      />
      <Flex
        bg="gray.700"
        direction="column"
        color="white"
        alignItems={sideBarCollapsed ? "center" : "unset"}
      >
        {menuItems.map(x => (
          <PseudoBox
            m={[2]}
            _hover={{ ...activeMenuItemStyle, ml: 4 }}
            key={x.label}
            transition="all 0.2s"
          >
            <Flex
              px={[4]}
              py={[2]}
              alignItems="center"
              {...(x.active ? activeMenuItemStyle : {})}
            >
              <Icon name={x.icon} mr={sideBarCollapsed ? [0] : [4]} size="5" />
              {!sideBarCollapsed && <Text>{x.label}</Text>}
            </Flex>
          </PseudoBox>
        ))}
      </Flex>
      <Box bg="gray.50" p={[4]} overflowY="auto">
        <Box height="120vh">
          <Text color="black">{JSON.stringify(sideBarCollapsed)}</Text>
        </Box>
      </Box>
    </Grid>
  );
};
