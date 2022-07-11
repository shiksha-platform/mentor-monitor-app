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
import RoundedProgressBar from "../../RoundedProgressBar";
// import StudentDetailCard from "./StudentDetail";

const PRESENT = "Present";
const ABSENT = "Absent";
const UNMARKED = "Unmarked";

const AttendanceWeeklyCard = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Box borderColor="#EEEEEE" borderWidth={1} rounded={10}>
      <Box p={4}>
        <HStack alignItems="center" justifyContent="space-between">
          <Box>
            <HStack>
              <Avatar
                size="48px"
                borderRadius="md"
                mr={4}
                source={{
                  uri: "https://via.placeholder.com/50x50.png",
                }}
              />
              <Box>
                <VStack>
                  <H2>Shah Rukh Khan</H2>
                  <HStack alignItems={"center"}>
                    <Text color={"#373839"} fontSize={"xs"} fontWeight={400}>
                      {t("Roll No. 23")}{" "}
                    </Text>
                    <Text fontSize="5px" color="#373839" fontWeight={400}>
                      {" "}
                      ●{" "}
                    </Text>
                    <Text color="#373839" fontSize={"xs"} fontWeight={400}>
                      {" "}
                      {t("Mr. Father's Name")}
                    </Text>
                  </HStack>
                </VStack>
              </Box>
            </HStack>
          </Box>
          <RoundedProgressBar
            values={[5, 2]}
            colors={["#43B13A", "#C1C0ED"]}
            title={{ text: "5", fontSize: "12px" }}
            legend={{ text: "Days", fontSize: "14px" }}
            cutout={"79%"}
            size="45px"
          />
        </HStack>
      </Box>
      <Divider />
      <Box borderColor="#EFEFEF" borderRadius={10} p={4}>
        <HStack justifyContent="space-between" flexWrap="wrap">
          <Box minW="14%" textAlign="center">
            <VStack justifyContent="center" space={2}>
              <Box>
                <Text fontSize="xs" color="#666">
                  Mon
                </Text>
                <Text fontSize="xs">10</Text>
              </Box>
              {/*<IconByName name="CheckboxCircleLineIcon" color={"#0D921B"} p={0} _icon={{ size: 20 }} mx={"auto"} />*/}
              <IconByName
                name="CloseCircleLineIcon"
                color={"#F57B7B"}
                p={0}
                _icon={{ size: 20 }}
                mx={"auto"}
              />
            </VStack>
          </Box>
          <Box minW="14%" textAlign="center">
            <VStack justifyContent="center" space={2}>
              <Box>
                <Text fontSize="xs" color="#666">
                  Tue
                </Text>
                <Text fontSize="xs">11</Text>
              </Box>
              <IconByName
                name="CheckboxCircleLineIcon"
                color={"#0D921B"}
                p={0}
                _icon={{ size: 20 }}
                mx={"auto"}
              />
              {/*<IconByName name="CloseCircleLineIcon" color={"#F57B7B"} p={0} _icon={{ size: 20 }} mx={"auto"} />*/}
            </VStack>
          </Box>
          <Box minW="14%" textAlign="center">
            <VStack justifyContent="center" space={2}>
              <Box>
                <Text fontSize="xs" color="#666">
                  Wed
                </Text>
                <Text fontSize="xs">12</Text>
              </Box>
              <IconByName
                name="CheckboxCircleLineIcon"
                color={"#0D921B"}
                p={0}
                _icon={{ size: 20 }}
                mx={"auto"}
              />
              {/*<IconByName name="CloseCircleLineIcon" color={"#F57B7B"} p={0} _icon={{ size: 20 }} mx={"auto"} />*/}
            </VStack>
          </Box>
          <Box minW="14%" textAlign="center">
            <VStack justifyContent="center" space={2}>
              <Box>
                <Text fontSize="xs" color="#666">
                  Thu
                </Text>
                <Text fontSize="xs">13</Text>
              </Box>
              <IconByName
                name="CheckboxCircleLineIcon"
                color={"#0D921B"}
                p={0}
                _icon={{ size: 20 }}
                mx={"auto"}
              />
              {/*<IconByName name="CloseCircleLineIcon" color={"#F57B7B"} p={0} _icon={{ size: 20 }} mx={"auto"} />*/}
            </VStack>
          </Box>
          <Box minW="14%" textAlign="center">
            <VStack justifyContent="center" space={2}>
              <Box>
                <Text fontSize="xs" color="#666">
                  Fri
                </Text>
                <Text fontSize="xs">14</Text>
              </Box>
              <IconByName
                name="CheckboxCircleLineIcon"
                color={"#0D921B"}
                p={0}
                _icon={{ size: 20 }}
                mx={"auto"}
              />
              {/*<IconByName name="CloseCircleLineIcon" color={"#F57B7B"} p={0} _icon={{ size: 20 }} mx={"auto"} />*/}
            </VStack>
          </Box>
          <Box minW="14%" textAlign="center">
            <VStack justifyContent="center" space={2}>
              <Box>
                <Text fontSize="xs" color="#666">
                  Sat
                </Text>
                <Text fontSize="xs">15</Text>
              </Box>
              <IconByName
                name="CheckboxBlankCircleLineIcon"
                color={"#B5B5C8"}
                p={0}
                _icon={{ size: 20 }}
                mx={"auto"}
              />
              {/*<IconByName name="CloseCircleLineIcon" color={"#F57B7B"} p={0} _icon={{ size: 20 }} mx={"auto"} />*/}
            </VStack>
          </Box>
          <Box minW="14%" textAlign="center">
            <VStack justifyContent="center" space={2}>
              <Box>
                <Text fontSize="xs" color="#D9D9D9">
                  Sun
                </Text>
                <Text fontSize="xs" color="#D9D9D9">
                  16
                </Text>
              </Box>
              <IconByName
                name="CheckboxBlankCircleLineIcon"
                color={"#eee"}
                p={0}
                _icon={{ size: 20 }}
                mx={"auto"}
              />
              {/*<IconByName name="CloseCircleLineIcon" color={"#F57B7B"} p={0} _icon={{ size: 20 }} mx={"auto"} />*/}
            </VStack>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
};

export default AttendanceWeeklyCard;
