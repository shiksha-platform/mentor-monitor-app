import { H2, IconByName, Layout, SearchLayout } from "@shiksha/common-lib";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Box, HStack, Text, VStack, Button } from "native-base";
import SchoolAddressCard from "../components/SchoolAddressCard";
import SchoolAdminDetailCard from "../components/SchoolAdminDetailCard";
import SchoolAcademicDetailCard from "../components/SchoolAcademicDetailCard";
import TeacherListCard from "../components/TeacherListCard";
import PastVisitCard from "../components/PastVisitCard";

export default function SchoolProfile({ footerLinks }) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Layout
      imageUrl={
        "https://via.placeholder.com/728x90.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide"
      }
      _header={{
        title: "Delhi Public School, Ghaziabad",
        _heading: { color: "white" },
        subHeading: (
          <VStack>
            <Text fontSize="14px" color="white">
              {t("Ghaziabad, Uttar Pradesh")}
            </Text>
            <HStack>
              <IconByName
                name="CameraLineIcon"
                color={"white"}
                // onPress={() => setSortModal(false)}
              />
              <IconByName
                name="MapPinLineIcon"
                color={"white"}
                // onPress={() => setSortModal(false)}
              />
            </HStack>
          </VStack>
        ),
        _subHeading: { color: "white" },
      }}
      _appBar={{
        languages: ["en"],
        // isEnableSearchBtn: true,
        // setSearch,
        // setSearchState,
      }}
      subHeader={
        <Box bg={"white"} px={2}>
          <HStack alignItems="center" justifyContent="space-between">
            <Button
              leftIcon={<IconByName name="ArrowRightSFillIcon" p={0} />}
              onPress={() => {
                navigate("/schools/new-visit");
              }}
            >
              Start a Visit
            </Button>
            <Button
              variant="outline"
              leftIcon={<IconByName name="CalendarEventLineIcon" p={0} />}
            >
              See Calendar
            </Button>
          </HStack>
        </Box>
      }
      _subHeader={{ bg: "white" }}
      _footer={footerLinks}
    >
      <Box p={6}>
        <VStack space={6}>
          <Box>
            <VStack space={6}>
              <SchoolAddressCard />
              <SchoolAdminDetailCard />
              <SchoolAcademicDetailCard />
              <TeacherListCard />
              <PastVisitCard />

              <Box>
                <Button variant="outline">See All Allocated Teachers</Button>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </Box>
    </Layout>
  );
}
