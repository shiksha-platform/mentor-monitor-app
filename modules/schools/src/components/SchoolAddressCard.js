import React from "react";
import {
  Box,
  Center,
  VStack,
  Text,
  HStack,
  Avatar,
  Divider,
} from "native-base";
import { DEFAULT_THEME, H2, IconByName } from "@shiksha/common-lib";
function SchoolAddressCard({ isVisited }) {
  return (
    <>
      <VStack space={6}>
        <Box bg={isVisited ? "#C5DCC3" : "white"} borderRadius={10}>
          <Box p={4}>
            <Text bold fontSize={14}>
              Address
            </Text>
          </Box>
          <Divider />
          <Box p={4}>
            <VStack space={6}>
              <Box>
                <Text color="#666">Address</Text>
                <Text>
                  Silicon Hills, Near DLF Cybercity, Patia, Bhubaneswar, Odisha
                  751024.
                </Text>
              </Box>

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
                      marginBottom: 12,
                    }}
                  >
                    <Text color="#666">District</Text>
                    <Text>Khordha</Text>
                  </Box>
                  <Box
                    style={{
                      flex: "0 0 50%",
                      maxWidth: "50%",
                      marginBottom: 12,
                    }}
                  >
                    <Text color="#666">Block</Text>
                    <Text>East</Text>
                  </Box>
                  <Box
                    style={{
                      flex: "0 0 50%",
                      maxWidth: "50%",
                      marginBottom: 12,
                    }}
                  >
                    <Text color="#666">Headmaster</Text>
                    <Text>Siddhant Chaturvedi</Text>
                  </Box>
                </HStack>
              </Box>

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
                      marginBottom: 12,
                    }}
                  >
                    <Text color="#666">Contact</Text>
                    <Text>+91 9654788934</Text>
                  </Box>
                </HStack>
              </Box>

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
                      marginBottom: 12,
                    }}
                  >
                    <Text color="#666">Medium</Text>
                    <Text>English</Text>
                  </Box>
                  <Box
                    style={{
                      flex: "0 0 50%",
                      maxWidth: "50%",
                      marginBottom: 12,
                    }}
                  >
                    <Text color="#666">Board</Text>
                    <Text>CBSE</Text>
                  </Box>
                </HStack>
              </Box>
            </VStack>
          </Box>
        </Box>
      </VStack>
    </>
  );
}
export default SchoolAddressCard;
