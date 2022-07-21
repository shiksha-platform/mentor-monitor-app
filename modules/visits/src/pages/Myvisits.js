import { H2, IconByName, Layout, SearchLayout } from "@shiksha/common-lib";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Box, HStack, Text, VStack } from "native-base";
import RecommendedVisitsCard from "../components/RecommendedVisitsCard";
import MySchoolsCard from "../components/MySchoolsCard";

export default function Myvisits() {
  const { t } = useTranslation();
  const [recommendedVisits, setRecommendedVisits] = useState([{}, {}, {}, {}]);
  const [searchState, setSearchState] = React.useState(false);
  const [search, setSearch] = React.useState(true);

  if (searchState) {
    return (
      <SearchLayout
        {...{
          search,
          setSearch,
          minStringLength: 3,
          notFoundMessage: t("TYPE_TO_START_SEARCHING_WORKSHEETS"),
          onCloseSearch: setSearchState,
        }}
      >
        <Box p={6}>
          <VStack space={6}>
            {recommendedVisits &&
              recommendedVisits.length &&
              recommendedVisits.map((visit, visitIndex) => {
                return (
                  <RecommendedVisitsCard key={`recommended${visitIndex}`} />
                );
              })}
          </VStack>
        </Box>
      </SearchLayout>
    );
  }

  return (
    <Layout
      _header={{
        title: "My Visits",
        _heading: { color: "white" },
        subHeading: t("View recommended and allocated schools for your visits"),
        _subHeading: { color: "white" },
      }}
      _appBar={{
        languages: ["en"],
        isEnableSearchBtn: true,
        setSearch,
        setSearchState,
      }}
      _subHeader={{ bg: "attendanceCard.500" }}
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
                  return (
                    <Box textDecoration="none">
                      <RecommendedVisitsCard key={`recommended${visitIndex}`} />
                    </Box>
                  );
                })}
              <Box textAlign="center">
                <Link
                  to="/visits/recommended-schools"
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
                  return (
                    <MySchoolsCard
                      isVisited={true}
                      key={`myvisit${visitIndex}`}
                    />
                  );
                })}
              <Box textAlign="center">
                <Link
                  to="/visits/allocated-schools"
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
