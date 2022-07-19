import React, { useState } from "react";
import {
  Box,
  Center,
  VStack,
  Text,
  HStack,
  Avatar,
  Divider,
  Actionsheet,
  Stack,
  Pressable,
} from "native-base";
import {
  DEFAULT_THEME,
  H2,
  IconByName,
  Collapsible,
} from "@shiksha/common-lib";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function SchoolAcademicDetailCard() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [academicDetailModal, setAcademicDetailModal] = useState(false);
  return (
    <>
      <Collapsible
        defaultCollapse={true}
        header={
          <Box py={4}>
            <H2>Academic Details</H2>
          </Box>
        }
      >
        <>
          <Divider mb={4} />
          <VStack space={6}>
            <Box p={6} borderColor={"#eee"} borderWidth={1} rounded={10}>
              <HStack alignItems="center" justifyContent="space-between">
                <Box>
                  <VStack>
                    <Text bold>Grade I</Text>
                    <Text color="#666">65 Students</Text>
                  </VStack>
                </Box>
                <IconByName
                  name="ArrowRightSLineIcon"
                  onPress={() => setAcademicDetailModal(true)}
                />
              </HStack>
            </Box>

            <Box p={6} borderColor={"#eee"} borderWidth={1} rounded={10}>
              <HStack alignItems="center" justifyContent="space-between">
                <Box>
                  <VStack>
                    <Text bold>Grade II</Text>
                    <Text color="#666">69 Students</Text>
                  </VStack>
                </Box>
                <IconByName
                  name="ArrowRightSLineIcon"
                  onPress={() => setAcademicDetailModal(true)}
                />
              </HStack>
            </Box>
          </VStack>
        </>
      </Collapsible>
      <Actionsheet
        isOpen={academicDetailModal}
        onClose={() => setAcademicDetailModal(false)}
      >
        <Actionsheet.Content alignItems={"left"} bg="#E0DFF6">
          <HStack justifyContent={"space-between"}>
            <Stack p={5} pt={2} pb="25px">
              <Text fontSize="16px" fontWeight={"600"}>
                {t("Select Academic Details")}
              </Text>
            </Stack>
            <IconByName
              name="CloseCircleLineIcon"
              color={"#6461D2"}
              onPress={() => setAcademicDetailModal(false)}
            />
          </HStack>
        </Actionsheet.Content>
        <Box w="100%" p={4} justifyContent="center" bg="white">
          <Actionsheet.Item
            onPress={() => navigate("/schools/attendance-report")}
          >
            Attendance Reports
          </Actionsheet.Item>
          <Actionsheet.Item
            onPress={() => navigate("/schools/assessment-report")}
          >
            Assessment Reports
          </Actionsheet.Item>
        </Box>
      </Actionsheet>
    </>
  );
}
