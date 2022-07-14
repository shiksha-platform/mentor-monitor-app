import React from "react";
import {
  Box,
  Center,
  VStack,
  Text,
  HStack,
  Avatar,
  Divider,
  Spacer,
  Pressable,
  Button,
} from "native-base";
import {
  DEFAULT_THEME,
  H2,
  IconByName,
  Collapsible,
  ProgressBar,
  Tab,
} from "@shiksha/common-lib";
import { useTranslation } from "react-i18next";
import ClassWiseSubjectProgress from "./ClassWiseSubjectProgress";
import { useNavigate } from "react-router-dom";

// const MyClassRoute = React.lazy(() => import("classes/MyClassRoute"));
// const TimeTableRoute = React.lazy(() => import("calendar/TimeTableRoute"));
function ClassCollapsibleCard() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const routes = [
    {
      title: t("SCIENCE"),
      component: (
        <Box py={4}>
          <ClassWiseSubjectProgress />
        </Box>
      ),
    },
    {
      title: t("MATHEMATICS"),
      component: (
        <Box py={4}>
          <ClassWiseSubjectProgress />
        </Box>
      ),
    },
    {
      title: t("ENGLISH"),
      component: (
        <Box py={4}>
          <ClassWiseSubjectProgress />
        </Box>
      ),
    },
    {
      title: t("HISTORY"),
      component: (
        <Box py={4}>
          <ClassWiseSubjectProgress />
        </Box>
      ),
    },
    {
      title: t("GEOGRAPHY"),
      component: (
        <Box py={4}>
          <ClassWiseSubjectProgress />
        </Box>
      ),
    },
  ];

  const [progressData2, setProgressData2] = React.useState([
    {
      name: "16 Assessed",
      color: "#0D921B",
      value: 16,
    },
    {
      name: "4 Pending",
      color: "#DDDDDD",
      value: 4,
    },
  ]);
  return (
    <Collapsible
      defaultCollapse={true}
      header={
        <Box py={4}>
          <H2>Class I</H2>
        </Box>
      }
    >
      <>
        <Divider mb={4} />
        <VStack space={4}>
          {/*bordered box*/}
          <Box>
            <VStack space={6}>
              {/*row 1 box*/}
              <Box>
                <VStack space={6}>
                  <Box>
                    <Tab routes={routes} />
                    <Divider />
                  </Box>
                  <Box>
                    <VStack space={4}>
                      <Text>
                        Average Class Score is <Text bold>{"18/25"}</Text>
                      </Text>
                      <ProgressBar
                        isTextShow
                        legendType="separated"
                        h="35px"
                        _bar={{ rounded: "md" }}
                        isLabelCountHide
                        data={progressData2}
                      />
                    </VStack>
                  </Box>
                </VStack>
              </Box>
            </VStack>
          </Box>

          <Divider m={0} />

          {/*bordered box*/}
          <Box p={2}>
            <Button
              variant={"outline"}
              onPress={() => {
                navigate("/assessment-section-report");
              }}
            >
              See Section Wise Report
            </Button>
          </Box>
        </VStack>
      </>
    </Collapsible>
  );
}
export default ClassCollapsibleCard;
