import {
  H1,
  IconByName,
  Layout,
  Loading,
  useWindowSize,
  H2,
  H3,
  ProgressBar,
  telemetryFactory,
  capture,
} from "@shiksha/common-lib";
import {
  Button,
  Box,
  VStack,
  Text,
  HStack,
  Divider,
  Avatar,
} from "native-base";
import React from "react";
import { useTranslation } from "react-i18next";
import manifest from "../../manifest.json";
import { useNavigate } from "react-router-dom";
export default function VisitSubmit({
                                                   handleBackButton,
                                                   formObject,
                                                 }) {
  const [width, height] = useWindowSize();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [progressAssessment, setProgressAssessment] = React.useState([
    {
      name: "12 Assessed",
      color: "#0D921B",
      value: 12,
    },
    {
      name: "6 pending",
      color: "#DDDDDD",
      value: 6,
    },
  ]);

  const _handleSpotAssessmentNotificationSend = () => {
    /*const telemetryData = telemetryFactory.interact({
      appName,
      type: "Spot-Assessment-Notification-Send",
    });
    capture("INTERACT", telemetryData);*/
  };

  return (
    <Layout
      isDisabledAppBar={true}
      pageBgColor={'#D9EFD8'}
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
      <Loading
        width={width}
        height={height}
        customComponent={
          <VStack space="0" flex="1" width={width}>
            <VStack bg="#D9EFD8" pb="100px" pt="32px">
              <IconByName
                alignSelf="center"
                name="CheckboxCircleFillIcon"
                color="successAlertText.500"
                _icon={{ size: 40 }}
              />

              <Box alignItems="center">
                <H1
                  fontSize="18px"
                  fontWeight="600"
                  color="successAlertText.500"
                >
                  Submitted
                </H1>
                <Text color="successAlertText.500" mt={4}>
                  Your visit details has been sent successfully
                </Text>
              </Box>

              <Box textAlign="center" mt={10}>
                <VStack space={3}>
                  <Box mx="auto">
                    <Avatar
                      size="60px"
                      borderRadius="md"
                      source={{
                        uri: "https://via.placeholder.com/80x80.png",
                      }}
                    />
                  </Box>
                  <Box alignItems="center">
                    <Text fontSize="14" fontWeight="600">
                      Chandan KrishnaKumar Pandit
                    </Text>
                    <HStack align="middle">
                      <Text color="#333333">VI A</Text>
                      <Text fontSize='8px' color="#B5B5C8" mx={2}>●</Text>
                      <Text color="#333333">Mathematics</Text>
                    </HStack>
                  </Box>
                </VStack>
              </Box>
            </VStack>

            <Box px={4}>
              <Box bg="white" p={4} rounded={10} pb={100}>
                <>
                  <Text bold fontSize={'sm'}>
                    <Box py={4}>
                      <H2>Visit Review</H2>
                    </Box>
                  </Text>
                  <Divider mb={4} />
                  <VStack space={4}>
                    {/*bordered box*/}
                    <Box>
                      <VStack space={6}>
                        {/*row 1 box*/}
                        <Box>
                          <VStack space={6}>
                            <Box bg={'#F9DEDE'} rounded={5} p={2}>
                              <HStack alignItems={'center'}>
                                <IconByName
                                  name="EmotionSadLineIcon"
                                  color={"#DF5B5B"}
                                  // onPress={() => setSortModal(false)}
                                />
                                <Box borderLeftWidth={2} borderLeftColor={'#DF5B5B'} pl={2}>
                                  <Text fontSize={11} color="#DF5B5B">You spent only 10 minutes on this visit!</Text>
                                </Box>
                              </HStack>
                            </Box>
                            <VStack space={8}>
                              <Box>
                                <Text bold>Q1. Is the teacher aware of nipun lakshyas for their respective subejct & grades?</Text>
                                <Text>Whiteboard</Text>
                              </Box>

                              <Box>
                                <Text bold>Q2. Does the classroom have NIPUN Lakshya   charts pasted on walls?</Text>
                                <Text>Answer as in ODK</Text>
                              </Box>
                              <Box>
                                <Text bold>Q1. Is the teacher aware of nipun lakshyas for their respective subejct & grades?</Text>
                                <Text>Whiteboard</Text>
                              </Box>

                              <Box>
                                <Text bold>Q2. Does the classroom have NIPUN Lakshya   charts pasted on walls?</Text>
                                <Text>Answer as in ODK</Text>
                              </Box>
                              <Box>
                                <Text bold>Q1. Is the teacher aware of nipun lakshyas for their respective subejct & grades?</Text>
                                <Text>Whiteboard</Text>
                              </Box>

                              <Box>
                                <Text bold>Q2. Does the classroom have NIPUN Lakshya   charts pasted on walls?</Text>
                                <Text>Answer as in ODK</Text>
                              </Box>
                              <Box>
                                <Text bold>Q1. Is the teacher aware of nipun lakshyas for their respective subejct & grades?</Text>
                                <Text>Whiteboard</Text>
                              </Box>

                              <Box>
                                <Text bold>Q2. Does the classroom have NIPUN Lakshya   charts pasted on walls?</Text>
                                <Text>Answer as in ODK</Text>
                              </Box>
                            </VStack>
                            <Box
                              bg="white"
                              p="5"
                              shadow={2}
                            >
                              <HStack justifyContent={'space-between'}>
                                <Button
                                  colorScheme="button"
                                  variant="outline"
                                  _text={{
                                    fontSize: '14px',
                                    p:'1'
                                  }}
                                  // onPress={()=> setSelectedStudent()}
                                >
                                  {t("Close")}
                                </Button>

                                <Button
                                  colorScheme="button"
                                  _text={{
                                    color: '#fff',
                                    fontSize: '14px',
                                    p:'1'
                                  }}
                                >
                                  {t("Start Another Visit")}
                                </Button>
                              </HStack>
                            </Box>
                          </VStack>
                        </Box>
                      </VStack>
                    </Box>
                  </VStack>
                </>
              </Box>
            </Box>

          </VStack>
        }
      />

    </Layout>
  );
}
