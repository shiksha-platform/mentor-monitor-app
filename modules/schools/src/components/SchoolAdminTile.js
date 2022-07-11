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
  Button,
} from "native-base";
import {
  DEFAULT_THEME,
  H2,
  IconByName,
  Collapsible,
} from "@shiksha/common-lib";
import { useTranslation } from "react-i18next";
function SchoolAdminTile({ title }) {
  const { t } = useTranslation();
  const [academicDetailModal, setAcademicDetailModal] = useState(false);
  const [viewBy, setViewBy] = useState("grade");
  return (
    <>
      {viewBy === "grade" && (
        <Box>
          <Box py={4}>
            <VStack space={2}>
              <HStack alignItems="center" justifyContent="space-between">
                <Text>{title || ""}</Text>
                <Button
                  variant="ghost"
                  rightIcon={<IconByName name="ArrowDownSLineIcon" p={0} />}
                  onPress={() => {
                    setAcademicDetailModal(true);
                  }}
                >
                  Grade
                </Button>
              </HStack>

              <Box>
                <VStack space={4}>
                  <HStack alignItems="center">
                    <HStack alignItems="center">
                      <Text bold>Grade 1 : </Text>
                      <Text>50</Text>
                    </HStack>
                    <HStack alignItems="center" ml={10}>
                      <Text bold>Grade 2 : </Text>
                      <Text>125</Text>
                    </HStack>
                  </HStack>

                  <HStack alignItems="center">
                    <HStack alignItems="center">
                      <Text bold>Grade 3 : </Text>
                      <Text>50</Text>
                    </HStack>
                    <HStack alignItems="center" ml={10}>
                      <Text bold>Grade 4 : </Text>
                      <Text>125</Text>
                    </HStack>
                  </HStack>
                </VStack>
              </Box>
            </VStack>
          </Box>
        </Box>
      )}

      {viewBy === "gender" && (
        <Box>
          <Box py={4}>
            <VStack space={6}>
              <HStack alignItems="center" justifyContent="space-between">
                <Text>{title || ""}</Text>
                <Button
                  variant="ghost"
                  rightIcon={<IconByName name="ArrowDownSLineIcon" p={0} />}
                  onPress={() => {
                    setAcademicDetailModal(true);
                  }}
                >
                  Gender
                </Button>
              </HStack>

              <HStack alignItems="center">
                <HStack alignItems="center">
                  <Box
                    bg="#3498DB"
                    style={{ width: "12px", height: "12px" }}
                  ></Box>
                  <Text mx={2}>Boys:</Text>
                  <Text bold>150</Text>
                </HStack>
                <HStack ml={4} alignItems="center">
                  <Box
                    bg="#BB6BD9"
                    style={{ width: "12px", height: "12px" }}
                  ></Box>
                  <Text mx={2}>Girls:</Text>
                  <Text bold>125</Text>
                </HStack>
              </HStack>
            </VStack>
          </Box>
        </Box>
      )}

      {viewBy === "category" && (
        <Box>
          <Box py={4}>
            <VStack space={2}>
              <HStack alignItems="center" justifyContent="space-between">
                <Text>{title || ""}</Text>
                <Button
                  variant="ghost"
                  rightIcon={<IconByName name="ArrowDownSLineIcon" p={0} />}
                  onPress={() => {
                    setAcademicDetailModal(true);
                  }}
                >
                  Category
                </Button>
              </HStack>

              <Box>
                <VStack space={4}>
                  <HStack alignItems="center">
                    <Text bold>Scheduled Caste (SC) : </Text>
                    <Text>50</Text>
                  </HStack>
                  <HStack alignItems="center">
                    <Text bold>scheduled Tribe (ST) : </Text>
                    <Text>125</Text>
                  </HStack>

                  <HStack alignItems="center">
                    <Text bold>Other Backward Class (OBC) : </Text>
                    <Text>90</Text>
                  </HStack>
                  <HStack alignItems="center">
                    <Text bold>General Category (GC) : </Text>
                    <Text>95</Text>
                  </HStack>
                </VStack>
              </Box>
            </VStack>
          </Box>
        </Box>
      )}

      <Actionsheet
        isOpen={academicDetailModal}
        onClose={() => setAcademicDetailModal(false)}
      >
        <Actionsheet.Content alignItems={"left"} bg="#E0DFF6">
          <HStack justifyContent={"space-between"}>
            <Stack p={5} pt={2} pb="25px">
              <Text fontSize="16px" fontWeight={"600"}>
                {t("View By")}
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
            onPress={() => {
              setViewBy("grade");
              setAcademicDetailModal(false);
            }}
          >
            Grade
          </Actionsheet.Item>
          <Actionsheet.Item
            onPress={() => {
              setViewBy("gender");
              setAcademicDetailModal(false);
            }}
          >
            Gender
          </Actionsheet.Item>
          <Actionsheet.Item
            onPress={() => {
              setViewBy("category");
              setAcademicDetailModal(false);
            }}
          >
            Category
          </Actionsheet.Item>
        </Box>
      </Actionsheet>
    </>
  );
}
export default SchoolAdminTile;
