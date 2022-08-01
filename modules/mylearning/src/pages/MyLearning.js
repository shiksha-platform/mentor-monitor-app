import React from "react";
import {
  Layout,
  Tab,
  H2,
  overrideColorTheme,
  BodySmall,
} from "@shiksha/common-lib";
import { useTranslation } from "react-i18next";
import { Box, VStack } from "native-base";
import manifest from "../manifest.json";
import colorTheme from "../colorTheme";
import MyCoursesRoute from "../components/MyCoursesRoute";
import MyVideosRoute from "../components/MyVideosRoute";
const colors = overrideColorTheme(colorTheme);

export default function App({ footerLinks, appName }) {
  const { t } = useTranslation();

  return (
    <Layout
      _stack={{ space: 0 }}
      _header={{
        title: (
          <VStack>
            <H2 color={colors.white}>{t("MY_LEARNING")}</H2>
            <BodySmall color={colors.white}>
              {t("ACCESS_ALL_TRAINING_COURSES")}
            </BodySmall>
          </VStack>
        ),
      }}
      _appBar={{ languages: manifest.languages }}
      _footer={footerLinks}
    >
      <Box pb="5">
        <Tab
          _shadow={{ style: {} }}
          _scrollView={{ horizontal: false }}
          _box={{ bg: colors.primary, px: "5", pt: "5" }}
          _tabBox={{
            activeBorderColor: colors.white,
            borderColor: colors.primary,
            borderBottomWidth: "5px",
            roundedTopLeft: "16px",
            roundedTopRight: "16px",
          }}
          _text={{ activeColor: colors.white, color: colors.primaryLight }}
          routes={[
            {
              title: t("MY_COURSES"),
              component: <MyCoursesRoute {...{ appName }} />,
            },
            { title: t("MY_VIDEOS"), component: <MyVideosRoute /> },
          ]}
        />
      </Box>
    </Layout>
  );
}
