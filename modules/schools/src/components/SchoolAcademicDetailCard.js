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
function SchoolAcademicDetailCard() {
  return (
    <Collapsible
      defaultCollapse={true}
      header={
        <Box py={4}>
          <H2>Academic Details</H2>
        </Box>
      }
    >
      <>
        <Divider mb={4} />
        <VStack space={6}>
          <Box p={6} borderColor={"#eee"} borderWidth={1} rounded={10}>
            <HStack alignItems="center" justifyContent="space-between">
              <Box>
                <VStack>
                  <Text bold>Grade I</Text>
                  <Text color="#666">65 Students</Text>
                </VStack>
              </Box>
              <IconByName
                name="ArrowRightSLineIcon"
                // onPress={() => setSortModal(false)}
              />
            </HStack>
          </Box>

          <Box p={6} borderColor={"#eee"} borderWidth={1} rounded={10}>
            <HStack alignItems="center" justifyContent="space-between">
              <Box>
                <VStack>
                  <Text bold>Grade II</Text>
                  <Text color="#666">69 Students</Text>
                </VStack>
              </Box>
              <IconByName
                name="ArrowRightSLineIcon"
                // onPress={() => setSortModal(false)}
              />
            </HStack>
          </Box>
        </VStack>
      </>
    </Collapsible>
  );
}
export default SchoolAcademicDetailCard;
