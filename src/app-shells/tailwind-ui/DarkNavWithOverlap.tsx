import { Avatar, Box, Divider, Flex, Grid, Icon, PseudoBox, Text } from "@chakra-ui/core";
import React from "react";

const navButtons = ["Dashboard", "Team", "Projects", "Calendar", "Reports"];

export const DarkNavWithOverlap = () => {
  return (
    <Grid gridTemplateRows={["auto 1fr"]} gridTemplateColumns={['100%']} maxHeight="100%" width={"100%"} position='relative' bg="gray.100">
      <Grid gridTemplateColumns={["auto 1fr auto auto"]} alignItems={"center"} gridGap={[3]} py={[3]} px={[8]} bg={"purple.700"} color={"white"}>
        <Icon name="calendar" mr={[6]} color="blue.200" size={"8"} />

        <Flex role="toolbar">
          {navButtons.map((b, ind) => (
            <PseudoBox as="button" p={[3]} aria-setsize={navButtons.length} aria-posinset={ind + 1} _hover={{
              bg: 'purple.900'
            }}>
              {b}
            </PseudoBox>
          ))}
        </Flex>

        <Icon size={"6"} name="bell" />

        <Avatar size={"sm"} />
      </Grid>

      <Box gridArea="2 / 1 / 3 / 2" width={'100%'} px={[8]} zIndex={2} position="relative" height="100%">
        <Text color="white" as="h1" fontSize="2xl" py={[12]}>
          Dashboard
        </Text>

        <Box bg="white" width={'100%'} borderRadius={'xl'} shadow='lg' p={[6]} overflow="auto" height="100%">
          <Box height='120vh'>
            <Text>
              Boats axes the kracken the kracken scandinavia scandinavia lack the table bjorn the chair. Ikea longship tall blond women Leif Erikson loot terror bork bork bork lack the table lack the table. Skald swords sailing berserker raiding swords, lack the table scandinavia bjorn the chair loot loot viking. Viking bjorn the chair ikea sea skald, horns boats bork bork bork Beowulf swords sailing. Lack the table berserker raiding viking Beowulf sea, scandinavia bjorn the chair skald swords bork bork bork sailing scandinavia. Ikea terror horns bork bork bork ikea axes loot viking boats, Leif Erikson longship viking scandinavia bork bork bork. Sea ikea loot ocean horns lack the table boats, skald terror Beowulf viking axes Beowulf. Berserker lack the table bjorn the chair terror sea viking berserker. Skald tall blond women skald sailing viking the kracken bjorn the chair ocean, loot swords terror longship.
          </Text>
          </Box>
        </Box>
      </Box>

      <Box gridArea="2 / 1 / 3 / 2" bg={"purple.700"} height={'64'} px={[8]} >
        <Divider m={0} />
      </Box>
    </Grid>
  )
    ;
};
