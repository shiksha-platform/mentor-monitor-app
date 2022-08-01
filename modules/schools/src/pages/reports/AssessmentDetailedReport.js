import { H2, IconByName, Layout } from "@shiksha/common-lib";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Box,
  HStack,
  Text,
  VStack,
  Button,
  Actionsheet,
  Stack,
  Divider,
  Avatar,
} from "native-base";

import ClassParticipationCard from "../../components/Reports/AssessmentReports/ClassParticipationCard";
import AttendanceSuccessFailureCard from "../../components/Reports/AttendanceReports/AttendanceSuccessFailureCard";
import StudentAttendanceCollapsibleCard from "../../components/Reports/AttendanceReports/StudentAttendanceCollapsibleCard";
import AssessmentAchieverCard from "../../components/Reports/AssessmentReports/AssessmentAchieverCard";
import StudentAssessmentCollapsibleCard from "../../components/Reports/AssessmentReports/StudentAssessmentCollapsibleCard";

export default function AssessmentDetailedReport({ footerLinks }) {
  const { t } = useTranslation();
  const [recommendedVisits, setRecommendedVisits] = useState([{}, {}, {}, {}]);
  const [teacherDetailModal, setTeacherDetailModal] = useState(false);

  const [teacherlist, setTeacherList] = useState([]);

  React.useEffect(() => {
    setTeacherList([
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
    <Layout
      _header={{
        title: "Report Details",
        _heading: { color: "white" },
        subHeading: (
          <VStack>
            <Text fontSize="14px" color="white">
              {t("Summative Assessment 1")}
            </Text>
            <HStack>
              <IconByName
                name="DownloadLineIcon"
                color={"white"}
                // onPress={() => setSortModal(false)}
              />
              <IconByName
                name="ShareLineIcon"
                color={"white"}
                // onPress={() => setSortModal(false)}
              />
            </HStack>
          </VStack>
        ),
        _subHeading: { color: "white" },
      }}
      _appBar={{
        languages: ["en"],
      }}
      _footer={footerLinks}
    >
      <Box p={6}>
        <VStack space={6}>
          <Box>
            <VStack>
              <H2>Science</H2>
              <HStack align="middle">
                <Text>Class I</Text>
                <Text fontSize="8px" color="#666" mx={2}>
                  ●
                </Text>
                <Text color="#666">Sec A</Text>
              </HStack>
            </VStack>
          </Box>
          <VStack space={6}>
            <ClassParticipationCard />
            <AssessmentAchieverCard />
            <StudentAssessmentCollapsibleCard />
          </VStack>
        </VStack>
      </Box>

      <Actionsheet
        isOpen={teacherDetailModal}
        onClose={() => setTeacherDetailModal(false)}
      >
        <Actionsheet.Content alignItems={"left"} bg="#E0DFF6">
          <HStack justifyContent={"space-between"} alignItems="center">
            <Stack p={5} pt={2} pb="15px">
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
                      Rahul
                    </Text>
                    <Text color="gray.400" fontSize={"xs"}>
                      Class Teacher: VI A
                    </Text>
                  </VStack>
                </HStack>
              </Box>
            </Stack>
            <Stack pb="15px">
              <IconByName
                name="CloseCircleLineIcon"
                color={"#6461D2"}
                onPress={() => setTeacherDetailModal(false)}
              />
            </Stack>
          </HStack>
        </Actionsheet.Content>
        <Box w="100%" p={4} justifyContent="center" bg="white">
          <VStack space={6}>
            <Text bold>Assistant Officer</Text>
            <Box>
              <Text>Qualification</Text>
              <Text>B.Com. Hons</Text>
            </Box>
            <Box>
              <Text>Phone</Text>
              <Text>+91 1234 567 890</Text>
            </Box>
            <Box>
              <Text>Date of Joining</Text>
              <Text>10 Aug, 2013</Text>
            </Box>
          </VStack>
        </Box>
      </Actionsheet>
    </Layout>
  );
}
