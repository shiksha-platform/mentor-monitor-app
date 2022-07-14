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
import { useNavigate } from "react-router-dom";
function ClassCollapsibleCard() {
  const navigate = useNavigate();
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
          <H2>Class I</H2>
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

          <Divider m={0} />

          {/*bordered box*/}
          <Box p={2}>
            <Button
              variant={"outline"}
              onPress={() => {
                navigate("/schools/attendance-section-report");
              }}
            >
              See Section Wise Report
            </Button>
          </Box>
        </VStack>
      </>
    </Collapsible>
  );
}
export default ClassCollapsibleCard;
