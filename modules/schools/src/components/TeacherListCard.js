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

const TeacherListCard = ({ classId, students, setHeaderDetails }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [teacherlist, setStudentlist] = useState([]);

  React.useEffect(() => {
    setStudentlist([
      {
        id: 1,
        name: "Rahul",
        class: "VI A",
      },
      {
        id: 2,
        name: "Rahul",
        class: "VI A",
      },
      {
        id: 3,
        name: "Rahul",
        class: "VI A",
      },
    ]);
  }, []);

  return (
    <Collapsible
      defaultCollapse={true}
      header={
        <Box py={4}>
          <H2>Teachers List</H2>
        </Box>
      }
    >
      {teacherlist &&
        teacherlist.length &&
        teacherlist.map((teacher, index) => {
          return (
            <React.Fragment key={`student${index}`}>
              <Box py="2">
                <Pressable onPress={() => navigate("/assessment-result")}>
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
                    <Spacer />
                  </HStack>
                </Pressable>
              </Box>

              <Divider />
            </React.Fragment>
          );
        })}
      <Box pt={4} textAlign="center">
        <Link
          to="/allocated-schools"
          style={{ color: "#6461D2", textDecoration: "none" }}
        >
          Load More
        </Link>
      </Box>
    </Collapsible>
  );
};

export default TeacherListCard;
