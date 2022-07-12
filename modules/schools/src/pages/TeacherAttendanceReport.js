import React from "react";
import { Layout } from "@shiksha/common-lib";
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

const TeacherAttendanceReport = () => {
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
    <Layout
      _header={{
        title: "Attendance Report",
        _heading: { color: "white" },
      }}
      _appBar={{ languages: ["en"] }}
    >
      <Box p={5} bg={"gray.100"}>
        <Collapsible
          defaultCollapse={true}
          header={
            <Box py={4}>
              <H2>Daily Attendance</H2>
            </Box>
          }
        >
          <Divider mb={4} />
          <VStack space={6}>
            <HStack alignItems="center" justifyContent="space-between">
              <Text w={"20%"} fontSize={12}>
                Jan 2022
              </Text>
              <Box w={"80%"} pr={3}>
                <ProgressBar data={progressData} />
              </Box>
            </HStack>
            <HStack alignItems="center" justifyContent="space-between">
              <Text w={"20%"} fontSize={12}>
                Dec 2021
              </Text>
              <Box w={"80%"} pr={3}>
                <ProgressBar data={progressData} />
              </Box>
            </HStack>
            <HStack alignItems="center" justifyContent="space-between">
              <Text w={"20%"} fontSize={12}>
                Nov 2021
              </Text>
              <Box w={"80%"} pr={3}>
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
          </VStack>
        </Collapsible>
      </Box>
      <Box px={5} bg={"gray.100"}>
        <Collapsible
          defaultCollapse={true}
          header={
            <Box py={4}>
              <H2>Monthly Attendance</H2>
            </Box>
          }
        >
          <Divider mb={4} />
          <VStack space={6}>
            <HStack alignItems="center" justifyContent="space-between">
              <Text w={"20%"} fontSize={12}>
                Jan 2022
              </Text>
              <Box w={"80%"} pr={3}>
                <ProgressBar data={progressData} />
              </Box>
            </HStack>
            <HStack alignItems="center" justifyContent="space-between">
              <Text w={"20%"} fontSize={12}>
                Dec 2021
              </Text>
              <Box w={"80%"} pr={3}>
                <ProgressBar data={progressData} />
              </Box>
            </HStack>
            <HStack alignItems="center" justifyContent="space-between">
              <Text w={"20%"} fontSize={12}>
                Nov 2021
              </Text>
              <Box w={"80%"} pr={3}>
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
          </VStack>
        </Collapsible>
      </Box>
    </Layout>
  );
};

export default TeacherAttendanceReport;
