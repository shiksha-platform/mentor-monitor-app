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

export default function TeacherFilterButton({
  getObject,
  _box,
  _button,
  _actionSheet,
}) {
  const { t } = useTranslation();

  const value = {
    name: "Teacher",
    attributeName: "teacher",
    data: ["Teacher1", "Teacher2", "Teacher3", "Teacher4", "Teacher5"],
  };

  const [filterData, setFilterData] = React.useState(false);
  const [selectData, setSelectData] = React.useState([]);

  return (
    <Box roundedBottom={"xl"} {..._box}>
      <VStack space={2}>
        <Text>Teacher Name</Text>
        <Button
          rounded="10"
          colorScheme="button"
          variant="outline"
          px="5"
          rightIcon={
            <IconByName
              color="button.500"
              name="ArrowDownSLineIcon"
              isDisabled
            />
          }
          onPress={(e) => {
            if (value?.data && value?.data.length > 0) {
              setFilterData(value);
            }
          }}
          {..._button}
        >
          <Text color="button.500">
            {selectData && selectData.length ? selectData[0] : "Teacher"}
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
                  {t("Choose Teacher")}
                </Text>
              </Stack>
              <IconByName
                name="CloseCircleLineIcon"
                onPress={(e) => setFilterData()}
              />
            </HStack>
          </Actionsheet.Content>
          <Box bg="white" width={"100%"} pt={4}>
            <VStack space={4}>
              {filterData?.data &&
                filterData?.data.map((value, index) => (
                  <Pressable
                    px="5"
                    key={value}
                    onPress={(e) => {
                      setSelectData([value]);
                    }}
                  >
                    <Box bg={"white"}>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between"
                      >
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
                              <Text
                                color="coolGray.800"
                                _dark={{
                                  color: "warmGray.50",
                                }}
                                bold
                              >
                                {value}
                              </Text>
                              <Text color="gray.400" fontSize={"xs"}>
                                Class Teacher: Vi A
                              </Text>
                            </VStack>
                          </HStack>
                        </Box>

                        <IconByName
                          name="ArrowRightSLineIcon"
                          // onPress={() => setSortModal(false)}
                        />
                      </HStack>
                    </Box>
                  </Pressable>
                ))}
            </VStack>
            <Box p="5">
              <Button
                colorScheme="button"
                _text={{ color: "white" }}
                onPress={() => {
                  setFilterData({});
                  if (getObject) getObject(selectData);
                }}
              >
                {t("Done")}
              </Button>
            </Box>
          </Box>
        </Actionsheet>
      </VStack>
    </Box>
  );
}
