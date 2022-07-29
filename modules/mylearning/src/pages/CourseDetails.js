import React from "react";
import {
  BodySmall,
  H2,
  IconByName,
  Layout,
  overrideColorTheme,
  Collapsible,
  Subtitle,
  BodyLarge,
} from "@shiksha/common-lib";
import { Box, HStack, VStack, Pressable, Avatar } from "native-base";
import manifestLocal from "../manifest.json";
import { courses as coursesData } from "../config/mylearning";
import colorTheme from "../colorTheme";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CourseBox from "../components/CourseBox";
import VideoBox from "../components/VideoBox";
import LikeActionsheet from "../components/Actionsheet/LikeActionsheet";
import CommentActionsheet from "../components/Actionsheet/CommentActionsheet";

const colors = overrideColorTheme(colorTheme);

export default function CourseDetails({ footerLinks, appName }) {
  const { t } = useTranslation();
  const [course, setCourse] = React.useState({});
  const [showModule, setShowModule] = React.useState(false);
  const [like, setLike] = React.useState({});
  const { id } = useParams();
  const [showModuleComments, setShowModuleComments] = React.useState(false);
  const [comments, setCommets] = React.useState([]);
  const [showModuleLike, setShowModuleLike] = React.useState(false);
  const [commentCount, setCommentCount] = React.useState(0);
  const [likeCount, setLikeCount] = React.useState(0);

  const handleLikeModuleOpen = () => {
    setShowModuleLike(true);
  };
  const handleLikeModuleClose = () => {
    setShowModuleLike(false);
  };

  const handleCommentModuleOpen = () => {
    setShowModuleComments(true);
  };

  const handleCommentModuleClose = () => {
    setShowModuleComments(false);
  };

  const handleLike = async () => {
    if (like.id) {
      //   const result = await likeRegistryService.distory({
      //     id: like.id,
      //   });
      setLike({});
    } else {
      //   let newData = {
      //     contextId: id,
      //     context: "course",
      //     type: "like",
      //   };
      //   const { osid } = await likeRegistryService.create(newData);
      //   setLike({ ...newData, id: osid });
      setLike({});
    }
  };

  React.useEffect(async () => {
    setCourse(coursesData.find((e) => e.id == id));
  }, []);

  return (
    <Layout
      _stack={{ space: 0 }}
      _header={{
        title: <H2 color={colors.white}>{course?.name}</H2>,
      }}
      _subHeader={{ bg: colors.cardBg }}
      bg={colors.white}
      _appBar={{
        languages: manifestLocal.languages,
        rightIcon: (
          <HStack justifycontent={"center"}>
            <IconByName
              name={like.id ? "Heart3FillIcon" : "Heart3LineIcon"}
              color={like.id ? colors.primary : colors.white}
              onPress={handleLike}
            />
            <IconByName name="ShareLineIcon" color={colors.white} pr="0" />
          </HStack>
        ),
      }}
      _footer={footerLinks}
    >
      <VStack space="2">
        <Box bg={colors.white} p="5">
          <CourseBox
            {...{
              canShowButtonArray: [],
              item: course,
              appName,
              isHeaderHide: true,
              _box: { p: "0", borderWidth: "0", bg: "transparent", style: {} },
            }}
          />
          <HStack
            bg="transparent"
            pt="5"
            space={5}
            alignItems="center"
            justifyContent={"space-between"}
          >
            <Pressable
              onPress={(e) =>
                handleLikeModuleOpen
                  ? handleLikeModuleOpen()
                  : console.log("not found handleLikeModuleOpen")
              }
            >
              <HStack alignItems="center" space="1">
                <IconByName
                  name="Heart3FillIcon"
                  color={colors.eventError}
                  _icon={{ size: 12 }}
                  isDisabled
                />
                <Subtitle>
                  {likeCount} {t("TEACHERS_LIKE_THIS")}
                </Subtitle>
              </HStack>
            </Pressable>
            <Pressable
              onPress={(e) =>
                handleCommentModuleOpen
                  ? handleCommentModuleOpen()
                  : console.log("not found handleCommentModuleOpen")
              }
            >
              <HStack alignItems="center" space="1">
                <Avatar.Group
                  _avatar={{
                    size: "md",
                  }}
                >
                  <Avatar
                    size="xs"
                    bg="green.500"
                    source={{
                      uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                    }}
                  >
                    AJ
                  </Avatar>
                </Avatar.Group>
                <Subtitle color={colors.primary}>
                  {commentCount} {t("COMMENTS")}
                </Subtitle>
              </HStack>
            </Pressable>
          </HStack>
          <LikeActionsheet
            {...{
              setShowModuleLike: handleLikeModuleClose,
              showModuleLike,
              likeUsers: ["1", "2", "3", "4"],
            }}
          />
          <CommentActionsheet
            {...{
              item: course,
              setShowModuleComments: handleCommentModuleClose,
              showModuleComments,
              context: "Courses",
              comments,
              setCommets,
            }}
          />
        </Box>
        <Box bg={colors.white}>
          <Collapsible
            defaultCollapse={true}
            header={
              <VStack>
                <H2 px={2} fontWeight={600}>
                  {t("Video 1")}
                </H2>
              </VStack>
            }
            fontSize="2px"
          ></Collapsible>
        </Box>
        <Box bg={colors.white}>
          <Collapsible
            defaultCollapse={true}
            header={
              <VStack>
                <H2 px={2} fontWeight={600}>
                  {t("Video 2")}
                </H2>
              </VStack>
            }
            fontSize="2px"
          >
            <Box py="5">
              <VideoBox
                appName={appName}
                canShare={true}
                {...{
                  item: course,
                  url: `/mylearning/video/${course.id}/view`,
                }}
              />
            </Box>
          </Collapsible>
        </Box>
        <Box bg={colors.white}>
          <Collapsible
            defaultCollapse={true}
            header={
              <VStack>
                <H2 px={2}>{t("Class Test")}</H2>
              </VStack>
            }
            fontSize="2px"
          ></Collapsible>
        </Box>

        <Box bg={colors.white}>
          <Collapsible
            defaultCollapse={true}
            header={
              <VStack>
                <H2 px={2}>{t("Surprise test")}</H2>
              </VStack>
            }
            fontSize="2px"
          ></Collapsible>
        </Box>
      </VStack>
    </Layout>
  );
}
