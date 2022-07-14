import {
  Actionsheet,
  Avatar,
  Box,
  Button,
  HStack,
  Pressable,
  ScrollView,
  Stack,
  Text,
  Tooltip,
  VStack,
} from "native-base";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { IconByName } from "@shiksha/common-lib";

export default function ExaminationTypeFilterButton({
  getObject,
  _box,
  _button,
  _actionSheet,
}) {
  const { t } = useTranslation();

  const value = {
    name: "Examinations",
    attributeName: "examinations",
    data: ["State Examinations", "Spot Assessments"],
  };

  const [filterData, setFilterData] = React.useState(false);
  const [selectData, setSelectData] = React.useState(value.data);

  return (
    <Box roundedBottom={"xl"} {..._box}>
      <Button
        rounded="10"
        colorScheme="button"
        px="5"
        rightIcon={
          <IconByName color="white" name="ArrowDownSLineIcon" isDisabled />
        }
        onPress={(e) => {
          if (value?.data && value?.data.length > 0) {
            setFilterData(value);
          }
        }}
        {..._button}
      >
        <Text color="white">
          {selectData && selectData.length ? selectData[0] : "Class"}
        </Text>
      </Button>
      <Actionsheet isOpen={filterData} onClose={() => setFilterData()}>
        <Actionsheet.Content
          alignItems={"left"}
          bg="classCard.500"
          {..._actionSheet}
        >
          <HStack justifyContent={"space-between"}>
            <Stack p={5} pt={2} pb="25px">
              <Text fontSize="16px" fontWeight={"600"}>
                {t("Select Assessments")}
              </Text>
            </Stack>
            <IconByName
              name="CloseCircleLineIcon"
              onPress={(e) => setFilterData()}
            />
          </HStack>
        </Actionsheet.Content>
        <Box bg="white" width={"100%"} py={4}>
          <VStack space={4}>
            {filterData?.data &&
              filterData?.data.map((value, index) => (
                <Actionsheet.Item
                  key={value}
                  onPress={(e) => {
                    setSelectData([value]);
                    setFilterData();
                  }}
                >
                  {value}
                </Actionsheet.Item>
              ))}
          </VStack>
        </Box>
      </Actionsheet>
    </Box>
  );
}
