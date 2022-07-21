import { DEFAULT_THEME, FilterButton, H2, Layout } from "@shiksha/common-lib";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { Avatar, Box, HStack, Text, VStack, Divider } from "native-base";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const defaultInputs = [
  {
    name: "Year",
    attributeName: "year",
    data: ["2020", "2021", "2022", "2023", "2024"],
  },
  {
    name: "Month",
    attributeName: "month",
    data: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },
  {
    name: "District",
    attributeName: "year",
    data: ["District1", "District2", "District3", "District4", "District5"],
  },
  {
    name: "Block",
    attributeName: "block",
    data: [
      "Block 1",
      "Block 2",
      "Block 3",
      "Block 4",
      "Block 5",
      "Block 6",
      "Block 7",
      "Block 8",
      "Block 9",
      "Block 10",
    ],
  },
];
let colors = DEFAULT_THEME;

export default function Home({ footerLinks, appName }) {
  const { t } = useTranslation();
  const [recommendedVisits, setRecommendedVisits] = useState([{}, {}, {}, {}]);
  const [filterObject, setFilterObject] = React.useState({});

  const callBackFilterObject = React.useCallback((e) => {
    setFilterObject();
  }, []);

  return (
    <Layout
      _header={{
        title: (
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
                <Text fontWeight={300} fontSize={"xs"}>
                  Welcome
                </Text>
                <Text>Mr. Dhananjay Tripathi</Text>
              </VStack>
            </HStack>
          </Box>
        ),
        _heading: { color: "white" },
      }}
      _appBar={{ languages: ["en"], isShowNotificationButton: true }}
      _footer={{
        menues: [
          {
            title: "HOME",
            icon: "Home4LineIcon",
            module: "Registry",
            route: "/",
            routeparameters: {},
          },
          {
            title: "VISITS",
            icon: "GovernmentLineIcon",
            module: "Registry",
            route: "/visits",
            routeparameters: {},
          },
          {
            title: "LEARNING",
            icon: "LightbulbFlashLineIcon",
            module: "Registry",
            route: "/",
            routeparameters: {},
          },
          {
            title: "MATERIALS",
            icon: "BookOpenLineIcon",
            module: "Registry",
            route: "/",
            routeparameters: {},
          },
          {
            title: "PROFILE",
            icon: "UserLineIcon",
            module: "Registry",
            route: "/",
            routeparameters: {},
          },
        ],
      }}
    >
      <Box p={6}>
        <VStack space={6}>
          <Box rounded={10} bg="white" shadow="md">
            <VStack>
              <Box alignItems="center" p={4}>
                <H2>Your monthly review</H2>
              </Box>
              <Divider />
              <Box p={6}>
                <HStack justifyContent="space-around">
                  <Box w="100px" h="100px">
                    <CircularProgressbarWithChildren
                      value={24}
                      maxValue={60}
                      styles={buildStyles({
                        pathColor: "#BB6BD9",
                        textColor: "#f88",
                        trailColor: "#F3F3F3",
                      })}
                    >
                      <Box textAlign="center">
                        <VStack>
                          <Text color="#BB6BD9" fontSize={18}>
                            <Text fontSize={18} bold>
                              24/
                            </Text>
                            <Text fontSize={15}>60</Text>
                          </Text>
                          <Text fontSize={11}>Teachers Mentored</Text>
                        </VStack>
                      </Box>
                    </CircularProgressbarWithChildren>
                  </Box>

                  <Box w="100px" h="100px">
                    <CircularProgressbarWithChildren
                      value={7}
                      maxValue={14}
                      styles={buildStyles({
                        pathColor: "#3498DB",
                        textColor: "#f88",
                        trailColor: "#F3F3F3",
                      })}
                    >
                      <Box textAlign="center">
                        <VStack>
                          <Text color="#3498DB" fontSize={18}>
                            <Text fontSize={18} bold>
                              07/
                            </Text>
                            <Text fontSize={15}>14</Text>
                          </Text>
                          <Text fontSize={11}>
                            Schools
                            <br />
                            Covered
                          </Text>
                        </VStack>
                      </Box>
                    </CircularProgressbarWithChildren>
                  </Box>
                </HStack>
              </Box>
              <Divider />
              <Box p={4}>
                <HStack alignItems="center" justifyContent="space-between">
                  <Text fontSize="xs">Average Mentoring Time</Text>
                  <Text fontSize={16} color="#43B13A">
                    2.5 Hrs
                  </Text>
                </HStack>
              </Box>
            </VStack>
          </Box>

          <Box>
            <H2>Performance Overview of the District / Block</H2>
            <FilterButton
              getObject={callBackFilterObject}
              object={filterObject}
              _actionSheet={{ bg: colors.cardBg }}
              _box={{ pt: 5 }}
              _button={{ bg: colors.primary, px: "15px", py: "2" }}
              _filterButton={{
                rightIcon: "",
                bg: "white",
              }}
              resetButtonText={t("COLLAPSE")}
              filters={defaultInputs}
            />
          </Box>

          <Box>
            <HStack space="20px">
              <Box
                bg="white"
                rounded={10}
                flexGrow={1}
                alignItems="center"
                textAlign="center"
                py={4}
              >
                <VStack space={4} alignItems="center">
                  <Box w="50px" h="50px">
                    <CircularProgressbarWithChildren
                      value={0}
                      maxValue={756}
                      styles={buildStyles({
                        pathColor: "#BB6BD9",
                        textColor: "#f88",
                        trailColor: "#F3F3F3",
                      })}
                    >
                      <Text>756</Text>
                    </CircularProgressbarWithChildren>
                  </Box>
                  <Text>No of Mentors</Text>
                </VStack>
              </Box>
              <Box
                bg="white"
                rounded={10}
                flexGrow={1}
                alignItems="center"
                textAlign="center"
                py={4}
              >
                <VStack space={4} alignItems="center">
                  <Box w="50px" h="50px">
                    <CircularProgressbarWithChildren
                      value={450}
                      maxValue={600}
                      styles={buildStyles({
                        pathColor: "#6461D2",
                        trailColor: "#F3F3F3",
                      })}
                    >
                      <Text color="#6461D2">450</Text>
                    </CircularProgressbarWithChildren>
                  </Box>
                  <Text>
                    No of
                    <br />
                    Monthly Targets
                    <br />
                    achievers
                  </Text>
                </VStack>
              </Box>
              <Box
                bg="white"
                rounded={10}
                flexGrow={1}
                alignItems="center"
                textAlign="center"
                py={4}
              >
                <VStack space={4} alignItems="center">
                  <Box w="50px" h="50px">
                    <CircularProgressbarWithChildren
                      value={45}
                      maxValue={100}
                      styles={buildStyles({
                        pathColor: "#6461D2",
                        trailColor: "#F3F3F3",
                      })}
                    >
                      <Text color="#6461D2">45%</Text>
                    </CircularProgressbarWithChildren>
                  </Box>
                  <Text>
                    Percentage of
                    <br />
                    monthly target
                    <br />
                    achievers
                  </Text>
                </VStack>
              </Box>
            </HStack>
          </Box>
        </VStack>
      </Box>
    </Layout>
  );
}
