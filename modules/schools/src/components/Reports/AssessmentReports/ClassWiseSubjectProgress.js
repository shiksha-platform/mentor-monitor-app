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
  Tab,
} from "@shiksha/common-lib";
import { useTranslation } from "react-i18next";

function ClassWiseSubjectProgress() {
  const { t } = useTranslation();
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
    <React.Fragment>
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
            <Text mx={2}>Passed</Text>
          </HStack>
          <HStack alignItems="center">
            <Box bg="#F57B7B" w="15px" h="15px" rounded={4} />
            <Text mx={2}>Failed</Text>
          </HStack>
          <HStack alignItems="center">
            <Box bg="#B5B5C8" w="15px" h="15px" rounded={4} />
            <Text mx={2}>Not attempted</Text>
          </HStack>
        </HStack>
      </VStack>
    </React.Fragment>
  );
}
export default ClassWiseSubjectProgress;
