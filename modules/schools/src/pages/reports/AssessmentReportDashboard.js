import { H2, IconByName, Layout } from "@shiksha/common-lib";
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
} from "native-base";

import ClassCollapsibleCard from "../../components/Reports/AssessmentReports/ClassCollapsibleCard";
import ExaminationTypeFilterButton from "../../components/Reports/AssessmentReports/ExaminationTypeFilterButton";

export default function AssessmentReportDashboard({ footerLinks }) {
  const { t } = useTranslation();
  const [teacherlist, setTeacherList] = useState([]);

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
        title: "Class I Assessment Reports",
        _heading: { color: "white" },
      }}
      _appBar={{
        languages: ["en"],
        isEnableSearchBtn: true,
      }}
      _footer={footerLinks}
    >
      <Box p={6}>
        <VStack space={6}>
          <Box>
            <HStack justifyContent="end">
              <ExaminationTypeFilterButton />
            </HStack>
          </Box>
          <VStack space={6}>
            <ClassCollapsibleCard />
            <ClassCollapsibleCard />
            <ClassCollapsibleCard />
          </VStack>
        </VStack>
      </Box>
    </Layout>
  );
}
