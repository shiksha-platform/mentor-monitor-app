import React, { useState } from "react";
import {
  Collapsible,
  IconByName,
  attendanceRegistryService,
  ProgressBar,
  getUniqAttendance,
} from "@shiksha/common-lib";
import {
  HStack,
  Text,
  VStack,
  Stack,
  Box,
  Progress,
  Button,
  Divider,
  Actionsheet,
  Checkbox,
  Avatar,
  Spacer,
  Pressable,
} from "native-base";
import { useTranslation } from "react-i18next";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";
import { H2 } from "@shiksha/common-lib";
// import StudentDetailCard from "./StudentDetail";

const PRESENT = "Present";
const ABSENT = "Absent";
const UNMARKED = "Unmarked";

const StudentTile = ({ index, student, dataFor }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  if (dataFor === "success") {
    return (
      <React.Fragment>
        <Box
          bg={"#D9EFD8"}
          p={4}
          rounded={5}
          borderColor="#43B13A"
          borderWidth={1}
        >
          <HStack alignItems="center" space={3}>
            <Avatar
              size="48px"
              borderRadius="md"
              source={{
                uri: "https://via.placeholder.com/50x50.png",
              }}
            />
            <VStack>
              <HStack alignItems="center">
                <Text color="#666">{student.name}</Text>
                <Text fontSize="8px" color="#666" mx={2}>
                  ●
                </Text>
                <Text color="#43B13A">100%</Text>
              </HStack>
              <Text color="gray.400" fontSize={"xs"}>
                Roll No: {student.rollNo}
              </Text>
            </VStack>
          </HStack>
        </Box>
      </React.Fragment>
    );
  } else if (dataFor === "failure") {
    return (
      <React.Fragment>
        <Box
          bg={"#F9DEDE"}
          p={4}
          rounded={5}
          borderColor="#DF5B5B"
          borderWidth={1}
        >
          <HStack alignItems="center" space={3}>
            <Avatar
              size="48px"
              borderRadius="md"
              source={{
                uri: "https://via.placeholder.com/50x50.png",
              }}
            />
            <VStack>
              <HStack alignItems="center">
                <Text color="#666">{student.name}</Text>
                <Text fontSize="8px" color="#666" mx={2}>
                  ●
                </Text>
                <Text color="#DF5B5B">14 days</Text>
              </HStack>
              <Text color="gray.400" fontSize={"xs"}>
                Roll No: {student.rollNo}
              </Text>
            </VStack>
          </HStack>
        </Box>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Box bg={"white"} py={1}>
          <HStack alignItems="center" space={3}>
            <Avatar
              size="48px"
              borderRadius="md"
              source={{
                uri: "https://via.placeholder.com/50x50.png",
              }}
            />
            <VStack>
              <Text color="#666">{student.name}</Text>
              <Text color="gray.400" fontSize={"xs"}>
                Roll No: {student.rollNo}
              </Text>
            </VStack>
          </HStack>
        </Box>
      </React.Fragment>
    );
  }
};

export default StudentTile;
