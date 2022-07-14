import {
  DEFAULT_THEME,
  FilterButton,
  H2,
  IconByName,
  Layout,
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
  Avatar,
  Input,
} from "native-base";
import TeacherFilterButton from "../../components/NewVisit/TeacherFilterButton";
import ClassFilterButton from "../../components/NewVisit/ClassFilterButton";
import SubjectFilterButton from "../../components/NewVisit/SubjectFilterButton";

let colors = DEFAULT_THEME;

export default function NewVisitPage() {
  const { t } = useTranslation();
  const [recommendedVisits, setRecommendedVisits] = useState([{}, {}, {}, {}]);
  const [teacherDetailModal, setTeacherDetailModal] = useState(false);

  const [teacherlist, setTeacherList] = useState([]);

  const [filterObject, setFilterObject] = React.useState({});

  const callBackFilterObject = React.useCallback((e) => {
    setFilterObject();
  }, []);

  React.useEffect(() => {
    setTeacherList([
      {
        id: 1,
        name: "Rahul",
        class: "VI A",
      },
      {
        id: 2,
        name: "Rahul",
        class: "VI A",
      },
      {
        id: 3,
        name: "Rahul",
        class: "VI A",
      },
    ]);
  }, []);

  return (
    <Layout
      _header={{
        title: "New Visit",
        _heading: { color: "white" },
      }}
      _appBar={{
        languages: ["en"],
        isEnableSearchBtn: true,
      }}
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
      <Box rounded={10} bg="white" shadow="md">
        <VStack>
          <Box p={4}>
            <H2>Start your visit based on</H2>
          </Box>
          <Divider />
          <Box p={6}>
            <VStack space={6}>
              <Box>
                <TeacherFilterButton
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
                />
              </Box>
              <Box>
                <ClassFilterButton
                  getObject={callBackFilterObject}
                  object={filterObject}
                  _actionSheet={{ bg: colors.cardBg }}
                  _button={{ bg: colors.primary, px: "15px", py: "2" }}
                  _filterButton={{
                    rightIcon: "",
                    bg: "white",
                  }}
                  resetButtonText={t("COLLAPSE")}
                />
              </Box>
              <Box>
                <SubjectFilterButton
                  getObject={callBackFilterObject}
                  object={filterObject}
                  _actionSheet={{ bg: colors.cardBg }}
                  _button={{ bg: colors.primary, px: "15px", py: "2" }}
                  _filterButton={{
                    rightIcon: "",
                    bg: "white",
                  }}
                  resetButtonText={t("COLLAPSE")}
                />
              </Box>
            </VStack>
          </Box>
          <Divider />
          <Box p={4}>
            <Button colorScheme="button" py={3}>
              {t("Start Visit")}
            </Button>
          </Box>
        </VStack>
      </Box>
    </Layout>
  );
}
