import React from "react";
import {
  Box,
  Center,
  VStack,
  Text,
  HStack,
  Avatar,
  Divider,
  Spacer,
  Pressable,
  Button,
} from "native-base";
import {
  DEFAULT_THEME,
  H2,
  IconByName,
  Collapsible,
  ProgressBar,
} from "@shiksha/common-lib";
function ClassParticipationCollapsibleCard() {
  const [progressData, setProgressData] = React.useState([
    {
      name: "22 Present",
      color: "#43B13A",
      value: 22,
    },
    {
      name: "4 Absent",
      color: "#DF5B5B",
      value: 4,
    },
    {
      name: "1 Unmarked",
      color: "#C1C0ED",
      value: 1,
    },
  ]);
  return (
    <Collapsible
      defaultCollapse={true}
      header={
        <Box py={4}>
          <H2>Class Participation</H2>
          <HStack align="middle">
            <Text color="#666" fontSize="11px" fontWeight={300}>
              Total 34
            </Text>
            <Text fontSize="8px" color="#666" mx={2}>
              ●
            </Text>
            <Text color="#666" fontSize="11px" fontWeight={300}>
              Present 28
            </Text>
          </HStack>
        </Box>
      }
    >
      <>
        <Divider mb={4} />
        <VStack space={4}>
          {/*bordered box*/}
          <Box>
            <VStack space={6}>
              {/*row 1 box*/}
              <Box>
                <VStack space={6}>
                  <HStack alignItems="center" justifyContent="space-between">
                    <Text w={"20%"}>Girls</Text>
                    <Box w={"80%"}>
                      <ProgressBar data={progressData} />
                    </Box>
                  </HStack>

                  <HStack alignItems="center" justifyContent="space-between">
                    <Text w={"20%"}>Boys</Text>
                    <Box w={"80%"}>
                      <ProgressBar data={progressData} />
                    </Box>
                  </HStack>

                  <HStack alignItems="center" justifyContent="space-between">
                    <Text w={"20%"}>Total</Text>
                    <Box w={"80%"}>
                      <ProgressBar data={progressData} />
                    </Box>
                  </HStack>

                  <HStack alignItems="center" justifyContent="space-between">
                    <HStack alignItems="center">
                      <Box bg="#2BB639" w="15px" h="15px" rounded={4} />
                      <Text mx={2}>Present</Text>
                    </HStack>
                    <HStack alignItems="center">
                      <Box bg="#F57B7B" w="15px" h="15px" rounded={4} />
                      <Text mx={2}>Absent</Text>
                    </HStack>
                    <HStack alignItems="center">
                      <Box bg="#B5B5C8" w="15px" h="15px" rounded={4} />
                      <Text mx={2}>Unmarked</Text>
                    </HStack>
                  </HStack>

                  <Text>
                    <Text bold>Note:</Text>{" "}
                    <Text color="#333333">
                      Monthly Report will be generated on the last day of every
                      month.
                    </Text>
                  </Text>
                </VStack>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </>
    </Collapsible>
  );
}
export default ClassParticipationCollapsibleCard;
