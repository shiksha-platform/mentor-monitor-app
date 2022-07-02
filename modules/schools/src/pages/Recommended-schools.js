import {
  H2,
  IconByName,
  Layout,
  FilterButton,
  DEFAULT_THEME,
} from "@shiksha/common-lib";
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
} from "native-base";
import RecommendedVisitsCard from "../components/RecommendedVisitsCard";
import MySchoolsCard from "../components/MySchoolsCard";

const defaultInputs = [
  {
    name: "District",
    attributeName: "year",
    data: ["2021", "2022", "2023", "2024", "2025"],
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

export default function Recommendedschools() {
  const { t } = useTranslation();
  const [recommendedVisits, setRecommendedVisits] = useState([{}, {}, {}, {}]);
  const [sortModal, setSortModal] = useState(false);

  const [filterObject, setFilterObject] = React.useState({});

  const callBackFilterObject = React.useCallback((e) => {
    setFilterObject();
  }, []);

  return (
    <Layout
      _header={{
        title: "Recommended Schools",
        _heading: { color: "white" },
        isEnableSearchBtn: true,
        subHeading: t("See all your recommended schools for visits here"),
        _subHeading: { color: "white" },
      }}
      _appBar={{ languages: ["en"] }}
      _subHeader={{ bg: "attendanceCard.500" }}
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
            route: "/my-visits",
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
          <Box>
            <VStack space={6}>
              <Box>
                <HStack alignItems="center" justifyContent="space-between">
                  <Box>
                    <H2>Schools</H2>
                    <Text fontSize="xs">
                      05 Schools not visited in last 2 months
                    </Text>
                  </Box>
                  <Button
                    variant="outline"
                    onPress={() => {
                      setSortModal(true);
                    }}
                  >
                    Sort
                  </Button>
                </HStack>
              </Box>

              <Box>
                <FilterButton
                  getObject={callBackFilterObject}
                  object={filterObject}
                  _actionSheet={{ bg: colors.cardBg }}
                  _box={{ pt: 5, px: 5 }}
                  _button={{ bg: colors.primary, px: "15px", py: "2" }}
                  _filterButton={{
                    rightIcon: "",
                    bg: "white",
                  }}
                  resetButtonText={t("COLLAPSE")}
                  filters={defaultInputs}
                />
              </Box>
              {recommendedVisits &&
                recommendedVisits.length &&
                recommendedVisits.map(() => {
                  return <RecommendedVisitsCard isVisited={false} />;
                })}
            </VStack>
          </Box>
        </VStack>
      </Box>

      <Actionsheet isOpen={sortModal} onClose={() => setSortModal(false)}>
        <Actionsheet.Content alignItems={"left"} bg="#E0DFF6">
          <HStack justifyContent={"space-between"}>
            <Stack p={5} pt={2} pb="25px">
              <Text fontSize="16px" fontWeight={"600"}>
                {t("Sort")}
              </Text>
            </Stack>
            <IconByName
              name="CloseCircleLineIcon"
              color={"#6461D2"}
              onPress={() => setSortModal(false)}
            />
          </HStack>
        </Actionsheet.Content>
        <Box w="100%" p={4} justifyContent="center" bg="white">
          {/*<Actionsheet.Item>Mathematics</Actionsheet.Item>*/}
          <Box pt="0">
            <Text fontSize={12} color="#666666">
              By last visited
            </Text>
            <Actionsheet.Item>
              <HStack alignItems="center" p={0}>
                <IconByName size="sm" name="ArrowRightUpLineIcon" />
                <Text>Latest to oldest</Text>
              </HStack>
            </Actionsheet.Item>
            <Actionsheet.Item>
              <HStack alignItems="center" p={0}>
                <IconByName size="sm" name="ArrowRightDownLineIcon" />
                <Text>Oldest to Latest</Text>
              </HStack>
            </Actionsheet.Item>
          </Box>

          <Divider my={4}></Divider>

          <Box pt="0">
            <Text fontSize={12} color="#666666">
              By Completed
            </Text>
            <Actionsheet.Item>
              <HStack alignItems="center" p={0}>
                <IconByName size="sm" name="ArrowRightUpLineIcon" />
                <Text>Complete to Incomplete</Text>
              </HStack>
            </Actionsheet.Item>
            <Actionsheet.Item>
              <HStack alignItems="center" p={0}>
                <IconByName size="sm" name="ArrowRightDownLineIcon" />
                <Text>Incomplete to Complete</Text>
              </HStack>
            </Actionsheet.Item>
          </Box>
        </Box>
      </Actionsheet>
    </Layout>
  );
}
