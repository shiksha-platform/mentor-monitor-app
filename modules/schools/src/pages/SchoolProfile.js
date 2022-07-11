import { H2, IconByName, Layout } from "@shiksha/common-lib";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Box, HStack, Text, VStack, Button } from "native-base";
import SchoolAddressCard from "../components/SchoolAddressCard";
import SchoolAdminDetailCard from "../components/SchoolAdminDetailCard";
import SchoolAcademicDetailCard from "../components/SchoolAcademicDetailCard";
import TeacherListCard from "../components/TeacherListCard";
import MentorVisitCard from "../components/MentorVisitCard";

export default function SchoolProfile() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [recommendedVisits, setRecommendedVisits] = useState([{}, {}, {}, {}]);

  return (
    <Layout
      imageUrl={
        "https://via.placeholder.com/728x90.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide"
      }
      _header={{
        title: "Delhi Public School, Ghaziabad",
        _heading: { color: "white" },
        isEnableSearchBtn: true,
        // setSearch: setSearch,
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
      subHeader={
        <Box bg={"white"} px={2}>
          <HStack>
            <Button
              leftIcon={<IconByName name="ArrowRightSFillIcon" p={0} />}
              onPress={() => {
                navigate("/my-visits");
              }}
            >
              Start a Visit
            </Button>
          </HStack>
        </Box>
      }
      _subHeader={{ bg: "white" }}
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
              <SchoolAddressCard />
              <SchoolAdminDetailCard />
              <SchoolAcademicDetailCard />
              <TeacherListCard />
              <MentorVisitCard />

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
