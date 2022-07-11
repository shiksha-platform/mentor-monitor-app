import React, { useState } from "react";
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
import StudentTile from "../AttendanceReports/StudentTile";
function AssessmentAchieverCard({ dataFor }) {
  const [studentList, setStudentList] = useState([
    {
      id: 1,
      name: "Rahul",
      class: "VI A",
      rollNo: 11,
    },
    {
      id: 2,
      name: "Rahul",
      class: "VI A",
      rollNo: 12,
    },
    {
      id: 3,
      name: "Rahul",
      class: "VI A",
      rollNo: 13,
    },
  ]);

  return (
    <Box bg="white" p={4} rounded={10}>
      <Box py={4}>
        <H2>100% Achievers</H2>
        <HStack alignItems="center">
          <Text fontSize={11} color="#666" fontWeight={300}>
            SubText-1
          </Text>
          <Text fontSize="8px" color="#666" mx={2}>
            ●
          </Text>
          <Text fontSize={11} color="#666" fontWeight={300}>
            SubText-2
          </Text>
        </HStack>
      </Box>
      <>
        <Divider mb={4} />
        <VStack space={4}>
          {studentList &&
            studentList.length &&
            studentList.map((student, index) => {
              return (
                <StudentTile
                  student={student}
                  index={index}
                  key={student.id}
                  dataFor={dataFor}
                />
              );
            })}
        </VStack>
      </>
    </Box>
  );
}
export default AssessmentAchieverCard;
