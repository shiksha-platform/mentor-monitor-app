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
          <Box>
            <Divider />
            <Box py={4}>
              <VStack space={6}>
                <HStack alignItems="center" justifyContent="space-between">
                  <Text>275 Students</Text>
                  <Text>All Students</Text>
                </HStack>

                <HStack alignItems="center">
                  <HStack>
                    <Text>Boys: </Text>
                    <Text bold>150</Text>
                  </HStack>
                  <HStack pl={2}>
                    <Text>Girls: </Text>
                    <Text bold>125</Text>
                  </HStack>
                </HStack>
              </VStack>
            </Box>
          </Box>

          <Box>
            <Divider />
            <Box py={4}>
              <VStack space={6}>
                <HStack alignItems="center" justifyContent="space-between">
                  <Text>08 Teachers</Text>
                  <Text>All Teachers</Text>
                </HStack>

                <HStack alignItems="center">
                  <HStack>
                    <Text>Male: </Text>
                    <Text bold>05</Text>
                  </HStack>
                  <HStack pl={2}>
                    <Text>Female: </Text>
                    <Text bold>03</Text>
                  </HStack>
                </HStack>
              </VStack>
            </Box>
          </Box>
        </VStack>
      </>
    </Collapsible>
  );
}
export default SchoolAdminDetailCard;
