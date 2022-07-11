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

const TeacherTile = ({ index, teacher, setTeacherDetailModal }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Pressable onPress={() => setTeacherDetailModal(true)}>
        <Box bg={"white"} p={4} rounded={10}>
          <HStack alignItems="center" justifyContent="space-between">
            <Box>
              <HStack alignItems="center" space={3}>
                <Avatar
                  size="48px"
                  borderRadius="md"
                  source={{
                    uri: "https://via.placeholder.com/50x50.png",
                  }}
                />
                <VStack>
                  <Text
                    color="coolGray.800"
                    _dark={{
                      color: "warmGray.50",
                    }}
                    bold
                  >
                    {index + 1} . {teacher.name}
                  </Text>
                  <Text color="gray.400" fontSize={"xs"}>
                    Class Teacher: {teacher.class}
                  </Text>
                </VStack>
              </HStack>
            </Box>

            <IconByName
              name="ArrowRightSLineIcon"
              // onPress={() => setSortModal(false)}
            />
          </HStack>
        </Box>
      </Pressable>
    </React.Fragment>
  );
};

export default TeacherTile;
