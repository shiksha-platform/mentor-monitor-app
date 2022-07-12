import React from "react";
import { Collapsible, IconByName, Layout } from "@shiksha/common-lib";
import {
  Box,
  HStack,
  VStack,
  Avatar,
  Text,
  Divider,
  Button,
} from "native-base";
import VisitedCard from "colorTheme";
import { useNavigate } from "react-router-dom";

const TeacherDetails = () => {
  const navigate = useNavigate();
  return (
    <Layout
      _header={{
        customeComponent: (
          <HStack
            alignItems="center"
            justifyContent="space-between"
            py={4}
            px={5}
          >
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
                  <Text color="white" bold>
                    Chandan Pandit
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </HStack>
        ),
      }}
      _appBar={{ languages: ["en"] }}
    >
      <Box p={5} bg={"gray.100"}>
        <Collapsible header="Teacher Details">
          <Divider marginTop={6} />
          <VStack space={6} marginTop={6}>
            <Box>
              <Text bold>Designation</Text>
              <Text>Assistant Officer</Text>
            </Box>
            <Box>
              <Text bold>Qualification</Text>
              <Text>B.Com. Hons</Text>
            </Box>
            <Box>
              <Text bold>Phone</Text>
              <Text>+91 1234 567 890</Text>
            </Box>
            <Box>
              <Text bold>Date of Joining</Text>
              <Text>10 Aug, 2013</Text>
            </Box>
          </VStack>
        </Collapsible>
      </Box>
      <Box px={5} bg={"gray.100"}>
        <Collapsible header="Attendance">
          <Divider marginY={6} />
          <HStack
            background={"#F9DEDE"}
            p={4}
            borderRadius={5}
            alignItems="center"
          >
            <Box pr={3}>
              <IconByName
                name="EmotionSadLineIcon"
                color={"#DF5B5B"}
                isDisabled
              />
            </Box>
            <Box>
              <Text color="#DF5B5B" bold>
                Very Bad
              </Text>
              <Text color="#DF5B5B" fontSize={10}>
                You have been present all days this month
              </Text>
            </Box>
          </HStack>
          <Divider marginY={6} />
          <Button
            width="100%"
            variant="outline"
            onPress={() => {
              navigate("/teacher-attendance-report");
            }}
          >
            Attendance Report
          </Button>
        </Collapsible>
      </Box>
      <Box p={5} bg={"gray.100"}>
        <Collapsible header="Perfromance"></Collapsible>
      </Box>
      <Box px={5} bg={"gray.100"}>
        <Collapsible header="Class Result">
          <Divider marginY={6} />
          <HStack
            mx={2}
            borderColor="gray.100"
            borderWidth={1}
            borderRadius={10}
            p={4}
            justifyContent="space-between"
          >
            <Box>
              <Text bold>VI A</Text>
              <Text>65 Students</Text>
            </Box>
            <IconByName name="ArrowRightSLineIcon" color="#BBBBBB" />
          </HStack>
          <HStack
            mx={2}
            my={4}
            borderColor="gray.100"
            borderWidth={1}
            borderRadius={10}
            p={4}
            justifyContent="space-between"
          >
            <Box>
              <Text bold>VII A</Text>
              <Text>69 Students</Text>
            </Box>
            <IconByName name="ArrowRightSLineIcon" color="#BBBBBB" />
          </HStack>
        </Collapsible>
      </Box>
      <Box p={5} bg={"gray.100"}>
        <Collapsible header="Mentor Visit Details">
          <Divider marginY={6} />
          <HStack
            mx={2}
            borderColor="gray.100"
            borderWidth={1}
            borderRadius={10}
            p={4}
            justifyContent="space-between"
          >
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
                  <Text bold>Chandan Pandit</Text>
                  <Text fontSize={12} color="gray.500">
                    Class Teacher: VI A
                  </Text>
                </VStack>
              </HStack>
              <HStack mt={4}>
                <VStack mr={4}>
                  <Text fontSize={12} color="gray.500">
                    <IconByName
                      name="CalendarEventLineIcon"
                      color="gray.500"
                      size={4}
                      alignItems="center"
                    />{" "}
                    Last Visited on:
                  </Text>
                  <Text fontSize={12}>30 May 2022</Text>
                </VStack>
                <VStack>
                  <Text fontSize={12} color="gray.500">
                    Last Visited by:
                  </Text>
                  <Text fontSize={12}>Kritika Kumar Gupta</Text>
                </VStack>
              </HStack>
            </Box>
            <IconByName name="ArrowRightSLineIcon" color="#BBBBBB" />
          </HStack>
          <HStack
            mx={2}
            my={4}
            borderColor="gray.100"
            borderWidth={1}
            borderRadius={10}
            p={4}
            justifyContent="space-between"
          >
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
                  <Text bold>Chandan Pandit</Text>
                  <Text fontSize={12} color="gray.500">
                    Class Teacher: VI A
                  </Text>
                </VStack>
              </HStack>
              <HStack mt={4}>
                <VStack mr={4}>
                  <Text fontSize={12} color="gray.500">
                    <IconByName
                      name="CalendarEventLineIcon"
                      color="gray.500"
                      size={4}
                      alignItems="center"
                    />{" "}
                    Last Visited on:
                  </Text>
                  <Text fontSize={12}>30 May 2022</Text>
                </VStack>
                <VStack>
                  <Text fontSize={12} color="gray.500">
                    Last Visited by:
                  </Text>
                  <Text fontSize={12}>Kritika Kumar Gupta</Text>
                </VStack>
              </HStack>
            </Box>
            <IconByName name="ArrowRightSLineIcon" color="#BBBBBB" />
          </HStack>
        </Collapsible>
      </Box>
    </Layout>
  );
};

export default TeacherDetails;
