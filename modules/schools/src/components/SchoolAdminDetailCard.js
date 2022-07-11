import React from "react";
import {
  Box,
  Center,
  VStack,
  Text,
  HStack,
  Avatar,
  Divider,
} from "native-base";
import {
  DEFAULT_THEME,
  H2,
  IconByName,
  Collapsible,
} from "@shiksha/common-lib";
import SchoolAdminTile from "./SchoolAdminTile";
function SchoolAdminDetailCard() {
  return (
    <Collapsible
      defaultCollapse={true}
      header={
        <Box py={4}>
          <H2>Administrative Details</H2>
        </Box>
      }
    >
      <>
        <VStack space={0}>
          <Divider />
          <SchoolAdminTile title={"275 Students"} />

          <Divider />
          <SchoolAdminTile title={"08 Teachers"} />
        </VStack>
      </>
    </Collapsible>
  );
}
export default SchoolAdminDetailCard;
