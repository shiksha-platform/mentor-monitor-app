import { Collapsible, H2, IconByName, Layout } from "@shiksha/common-lib";
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
  Avatar, Spacer
} from "native-base";
import TeacherTile from "../components/TeacherTile";

export default function TeacherVisitReport() {
  const { t } = useTranslation();
  const [recommendedVisits, setRecommendedVisits] = useState([{}, {}, {}, {}]);
  const [teacherDetailModal, setTeacherDetailModal] = useState(false);

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
                <Text color="white" fontSize={"xs"}>
                  Past Visit Records
                </Text>
                <Text
                  color="white"
                  bold
                >
                  Mr. Dhananjay Tripathi
                </Text>
              </VStack>
              <Spacer />
            </HStack>
          </Box>
        ),
        _heading: { color: "white" },
      }}
      _appBar={{ languages: ["en"] }}
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
      <Collapsible
        defaultCollapse={true}
        header={
          <Box py={4}>
            <H2>Past Visit Details</H2>
          </Box>
        }
      >
        <Divider />
        <Box py={4}>
          <VStack space={8}>
            <Box>
              <Text bold color="#333333">Q1. Is the teacher aware of nipun lakshyas for their respective subejct & grades?</Text>
              <Text>Whiteboard</Text>
            </Box>

            <Box>
              <Text bold color="#333333">Q2. Does the classroom have NIPUN Lakshya   charts pasted on walls?</Text>
              <Text>Answer as in ODK</Text>
            </Box>
            <Box>
              <Text bold color="#333333">Q1. Is the teacher aware of nipun lakshyas for their respective subejct & grades?</Text>
              <Text>Whiteboard</Text>
            </Box>

            <Box>
              <Text bold color="#333333">Q2. Does the classroom have NIPUN Lakshya   charts pasted on walls?</Text>
              <Text>Answer as in ODK</Text>
            </Box>
            <Box>
              <Text bold color="#333333">Q1. Is the teacher aware of nipun lakshyas for their respective subejct & grades?</Text>
              <Text>Whiteboard</Text>
            </Box>

            <Box>
              <Text bold color="#333333">Q2. Does the classroom have NIPUN Lakshya   charts pasted on walls?</Text>
              <Text>Answer as in ODK</Text>
            </Box>
            <Box>
              <Text bold color="#333333">Q1. Is the teacher aware of nipun lakshyas for their respective subejct & grades?</Text>
              <Text>Whiteboard</Text>
            </Box>

            <Box>
              <Text bold color="#333333">Q2. Does the classroom have NIPUN Lakshya   charts pasted on walls?</Text>
              <Text>Answer as in ODK</Text>
            </Box>
          </VStack>
        </Box>
      </Collapsible>
    </Layout>
  );
}
