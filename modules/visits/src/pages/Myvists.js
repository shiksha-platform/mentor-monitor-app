import { H2, IconByName, Layout } from "@shiksha/common-lib";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Box, HStack, Text, VStack } from "native-base";
import RecommendedVisitsCard from "../components/RecommendedVisitsCard";
import MySchoolsCard from "../components/MySchoolsCard";

export default function Myvists() {
  const { t } = useTranslation();
  const [recommendedVisits, setRecommendedVisits] = useState([{}, {}, {}, {}]);

  return (
    <Layout
      _header={{
        title: "My Visits",
        _heading: { color: "white" },
        isEnableSearchBtn: true,
        // setSearch: setSearch,
        subHeading: t("View your allocated schools with recommended visits"),
        _subHeading: { color: "white" },
        /*iconComponent: (
          <Link
            to="/classes/attendance/report"
            style={{ color: "rgb(63, 63, 70)", textDecoration: "none" }}
          >
            <Box
              rounded="full"
              borderColor="button.500"
              borderWidth="1"
              _text={{ color: "button.500" }}
              px={6}
              py={2}
            >
              {t("REPORT")}
            </Box>
          </Link>
        ),*/
      }}
      _appBar={{ languages: ["en"] }}
      /*subHeader={
        <Link
          to={"/students/class/" + classId}
          style={{ color: "rgb(63, 63, 70)", textDecoration: "none" }}
        >
          <HStack space="4" justifyContent="space-between">
            <VStack>
              <Text fontSize={"lg"}>
                {classObject?.title ? classObject?.title : ""}
              </Text>
              <Text fontSize={"sm"}>
                {t("TOTAL") + " " + students.length + " " + t("STUDENTS")}
              </Text>
            </VStack>
            <IconByName size="sm" name="ArrowRightSLineIcon" />
          </HStack>
        </Link>
      }*/
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
                <H2>Recommended Visits</H2>
                <Text fontSize="xs">Schools not visited in last 2 months</Text>
              </Box>
              {recommendedVisits &&
                recommendedVisits.length &&
                recommendedVisits.map((visit, visitIndex) => {
                  return <RecommendedVisitsCard key={`recommended${visitIndex}`} />;
                })}
              <Box textAlign="center">
                <Link
                  to="/recommended-schools"
                  style={{ color: "#6461D2", textDecoration: "none" }}
                >
                  Show More
                </Link>
              </Box>
            </VStack>
          </Box>

          <Box>
            <VStack space={6}>
              <Box>
                <H2>My Schools</H2>
              </Box>
              {recommendedVisits &&
                recommendedVisits.length &&
                recommendedVisits.map((visit, visitIndex) => {
                  return <MySchoolsCard isVisited={true} key={`myvisit${visitIndex}`} />;
                })}
              <Box textAlign="center">
                <Link
                  to="/allocated-schools"
                  style={{ color: "#6461D2", textDecoration: "none" }}
                >
                  Show More
                </Link>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </Box>
    </Layout>
  );
}
