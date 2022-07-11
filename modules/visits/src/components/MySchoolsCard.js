import React, { useEffect } from "react";
import {
  Box,
  Center,
  VStack,
  Text,
  HStack,
  Avatar,
  Divider,
} from "native-base";
import {
  DEFAULT_THEME,
  H2,
  IconByName,
  overrideColorTheme,
} from "@shiksha/common-lib";
import { visitedCard } from "../colorTheme";

let colors = DEFAULT_THEME;

function MySchoolsCard({ isVisited }) {
  useEffect(() => {
    if (isVisited) {
      colors = overrideColorTheme(visitedCard);
    }
  }, [isVisited]);
  return (
    <>
      <VStack space={6}>
        <Box
          bg={colors.cardBg}
          borderRadius={10}
          borderColor={colors.visitedCardBorderColor}
        >
          <Box p={4}>
            <VStack space={6}>
              <HStack alignItems="center">
                <Avatar
                  size="60px"
                  mr={4}
                  borderRadius="md"
                  source={{
                    uri: "https://via.placeholder.com/50x50.png",
                  }}
                />
                <VStack>
                  <Text bold fontSize={14}>
                    Delhi Public School, Ghaziabad
                  </Text>
                  <Text bold fontSize={12} color="#666">
                    Ghaziabad, Uttar Pradesh
                  </Text>
                </VStack>
              </HStack>
            </VStack>
          </Box>
          <Divider />
          <Box p={4}>
            <HStack
              alignItems={"center"}
              justifyContent={"space-between"}
              flexWrap={"wrap"}
            >
              <div
                style={{
                  flex: "0 0 50%",
                  maxWidth: "50%",
                  marginBottom: "10px",
                }}
              >
                <VStack>
                  <HStack alignItems="center">
                    <IconByName size="12px" mr={2} name="MapPinLineIcon" />
                    <Text color="#666" fontSize="12">
                      District
                    </Text>
                  </HStack>
                  <Text fontSize="12">Ghaziabad</Text>
                </VStack>
              </div>

              <div
                style={{
                  flex: "0 0 50%",
                  maxWidth: "50%",
                  marginBottom: "10px",
                }}
              >
                <VStack>
                  <HStack alignItems="center">
                    <IconByName size="12px" mr={2} name="GovernmentLineIcon" />
                    <Text color="#666" fontSize="12">
                      Block
                    </Text>
                  </HStack>
                  <Text fontSize="12">Not Available</Text>
                </VStack>
              </div>

              <div
                style={{
                  flex: "0 0 50%",
                  maxWidth: "50%",
                  marginBottom: "10px",
                }}
              >
                <VStack>
                  <HStack alignItems="center">
                    <IconByName
                      size="12px"
                      mr={2}
                      name="CalendarEventLineIcon"
                    />
                    <Text color="#666" fontSize="12">
                      Last Visited
                    </Text>
                  </HStack>
                  <Text fontSize="12">30 May 2022</Text>
                </VStack>
              </div>
            </HStack>
          </Box>
        </Box>
      </VStack>
    </>
  );
}
export default MySchoolsCard;
