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
} from "native-base";
import {
  DEFAULT_THEME,
  H2,
  IconByName,
  Collapsible,
} from "@shiksha/common-lib";
function MentorVisitCard() {
  return (
    <Collapsible
      defaultCollapse={true}
      header={
        <Box py={4}>
          <H2>Mentor Visit Details</H2>
        </Box>
      }
    >
      <>
        <Divider mb={4} />
        <VStack space={6}>
          {/*bordered box*/}
          <Box p={6} borderColor={"#eee"} borderWidth={1} rounded={10}>
            <VStack space={6}>
              {/*row 1 box*/}
              <Box>
                <HStack alignItems="center" justifyContent="space-between">
                  {/*Image and name box*/}
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
                          Snehal Verma
                        </Text>
                        <Text color="gray.400" fontSize={"xs"}>
                          Class Teacher: VI A
                        </Text>
                      </VStack>
                      <Spacer />
                    </HStack>
                  </Box>
                  <IconByName name="ArrowRightSLineIcon" />
                </HStack>
              </Box>
              {/*row 2 box*/}
              <Box>
                <HStack
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  flexWrap={"wrap"}
                >
                  <Box
                    style={{
                      flex: "0 0 50%",
                      maxWidth: "50%",
                    }}
                  >
                    <HStack alignItems="center">
                      <IconByName
                        size="12px"
                        mr={2}
                        name="CalendarEventLineIcon"
                      />
                      <Text color="#666" fontSize="12">
                        Last visited On:
                      </Text>
                    </HStack>
                    <Text>30/5/2022</Text>
                  </Box>
                  <Box
                    style={{
                      flex: "0 0 50%",
                      maxWidth: "50%",
                    }}
                  >
                    <HStack alignItems="center">
                      <IconByName size="12px" mr={2} name="BarChart2LineIcon" />
                      <Text color="#666" fontSize="12">
                        Last visited By:
                      </Text>
                    </HStack>
                    <Text>Kritika Kumar Gupta</Text>
                  </Box>
                </HStack>
              </Box>
            </VStack>
          </Box>

          {/*bordered box*/}
          <Box p={6} borderColor={"#eee"} borderWidth={1} rounded={10}>
            <VStack space={6}>
              {/*row 1 box*/}
              <Box>
                <HStack alignItems="center" justifyContent="space-between">
                  {/*Image and name box*/}
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
                          Snehal Verma
                        </Text>
                        <Text color="gray.400" fontSize={"xs"}>
                          Class Teacher: VI A
                        </Text>
                      </VStack>
                      <Spacer />
                    </HStack>
                  </Box>
                  <IconByName name="ArrowRightSLineIcon" />
                </HStack>
              </Box>
              {/*row 2 box*/}
              <Box>
                <HStack
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  flexWrap={"wrap"}
                >
                  <Box
                    style={{
                      flex: "0 0 50%",
                      maxWidth: "50%",
                    }}
                  >
                    <HStack alignItems="center">
                      <IconByName
                        size="12px"
                        mr={2}
                        name="CalendarEventLineIcon"
                      />
                      <Text color="#666" fontSize="12">
                        Last visited On:
                      </Text>
                    </HStack>
                    <Text>30/5/2022</Text>
                  </Box>
                  <Box
                    style={{
                      flex: "0 0 50%",
                      maxWidth: "50%",
                    }}
                  >
                    <HStack alignItems="center">
                      <IconByName size="12px" mr={2} name="BarChart2LineIcon" />
                      <Text color="#666" fontSize="12">
                        Last visited By:
                      </Text>
                    </HStack>
                    <Text>Kritika Kumar Gupta</Text>
                  </Box>
                </HStack>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </>
    </Collapsible>
  );
}
export default MentorVisitCard;
