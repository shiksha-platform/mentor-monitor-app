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
import SectionWiseSubjectProgress from "./SectionWiseSubjectProgress";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
function ClassSectionCollapsibleCard() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const routes = [
    {
      title: t("SCIENCE"),
      component: (
        <Box py={4}>
          <SectionWiseSubjectProgress />
        </Box>
      ),
    },
    {
      title: t("MATHEMATICS"),
      component: (
        <Box py={4}>
          <SectionWiseSubjectProgress />
        </Box>
      ),
    },
    {
      title: t("ENGLISH"),
      component: (
        <Box py={4}>
          <SectionWiseSubjectProgress />
        </Box>
      ),
    },
    {
      title: t("HISTORY"),
      component: (
        <Box py={4}>
          <SectionWiseSubjectProgress />
        </Box>
      ),
    },
    {
      title: t("GEOGRAPHY"),
      component: (
        <Box py={4}>
          <SectionWiseSubjectProgress />
        </Box>
      ),
    },
  ];

  return (
    <Collapsible
      defaultCollapse={true}
      header={
        <Box py={4}>
          <H2 fontWeight={400}>
            <HStack align="middle">
              <Text>Class I</Text>
              <Text fontSize="8px" color="#666" mx={2}>
                ●
              </Text>
              <Text color="#666">Sec A</Text>
            </HStack>
          </H2>
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
                <Tab routes={routes} />
                <Divider m={0} />
              </Box>
            </VStack>
          </Box>

          {/*bordered box*/}
          <Box p={2}>
            <Button
              variant={"outline"}
              onPress={() => {
                navigate("/assessment-detailed-report");
              }}
            >
              See Full Report
            </Button>
          </Box>
        </VStack>
      </>
    </Collapsible>
  );
}
export default ClassSectionCollapsibleCard;
