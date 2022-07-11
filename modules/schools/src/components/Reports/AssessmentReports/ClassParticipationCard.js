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
function ClassParticipationCard() {
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
  const [progressData2, setProgressData2] = React.useState([
    {
      name: "16 Assessed",
      color: "#0D921B",
      value: 16,
    },
    {
      name: "4 Pending",
      color: "#DDDDDD",
      value: 4,
    },
  ]);
  return (
    <Box bg="white" p={4} rounded={10}>
      <>
        <Text bold fontSize={"sm"}>
          <Box py={4}>
            <H2>Class Participation</H2>
          </Box>
        </Text>
        <Divider mb={4} />
        <VStack space={4}>
          {/*bordered box*/}
          <Box>
            <VStack space={6}>
              {/*row 1 box*/}
              <Box>
                <VStack space={6}>
                  <Box bg={"#F9DEDE"} rounded={5} p={2}>
                    <HStack alignItems={"center"}>
                      <IconByName
                        name="EmotionSadLineIcon"
                        color={"#DF5B5B"}
                        // onPress={() => setSortModal(false)}
                      />
                      <Box
                        borderLeftWidth={2}
                        borderLeftColor={"#DF5B5B"}
                        pl={2}
                      >
                        <VStack>
                          <Text color="#DF5B5B">Very Bad</Text>
                          <Text fontSize={11} color="#DF5B5B">
                            Below average performance
                          </Text>
                        </VStack>
                      </Box>
                    </HStack>
                  </Box>
                  <Text>
                    Average Class Score is <Text bold>18/25</Text>
                  </Text>
                  <ProgressBar
                    isTextShow
                    legendType="separated"
                    h="35px"
                    _bar={{ rounded: "md" }}
                    isLabelCountHide
                    data={progressData2}
                  />

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
    </Box>
  );
}
export default ClassParticipationCard;
