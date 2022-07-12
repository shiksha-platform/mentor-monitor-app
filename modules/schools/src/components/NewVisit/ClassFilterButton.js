import {
  Actionsheet, Avatar,
  Box,
  Button,
  HStack,
  Pressable,
  ScrollView,
  Stack,
  Text,
  Tooltip, VStack
} from "native-base";
import React, {useEffect} from 'react'
import { useTranslation } from 'react-i18next'
import {IconByName} from "@shiksha/common-lib"

export default function ClassFilterButton({
                                       getObject,
                                       _box,
                                       _button,
                                       _actionSheet
                                     }) {
  const { t } = useTranslation();

  const value = {
    name: "Class",
    attributeName: "class",
    data: ["Class1", "Class2", "Class3", "Class4", "Class5"],
  };

  const [filterData, setFilterData] = React.useState(false)
  const [selectData, setSelectData] = React.useState([])


  return (
    <Box roundedBottom={'xl'} {..._box}>
      <VStack space={2}>
        <Text>Class</Text>
        <Button
          rounded='10'
          colorScheme='button'
          variant= 'outline'
          px='5'
          rightIcon={
            <IconByName
              color="button.500"
              name='ArrowDownSLineIcon'
              isDisabled
            />
          }
          onPress={(e) => {
            if (value?.data && value?.data.length > 0) {
              setFilterData(value)
            }
          }}
          {..._button}
        >
          <Text color="button.500">
            {
              selectData && selectData.length ? selectData[0] : 'Class'
            }
          </Text>
        </Button>
        <Actionsheet isOpen={filterData} onClose={() => setFilterData()}>
          <Actionsheet.Content
            alignItems={'left'}
            bg='classCard.500'
            {..._actionSheet}
          >
            <HStack justifyContent={'space-between'}>
              <Stack p={5} pt={2} pb='25px'>
                <Text fontSize='16px' fontWeight={'600'}>
                  {t('Choose Teacher')}
                </Text>
              </Stack>
              <IconByName
                name='CloseCircleLineIcon'
                onPress={(e) => setFilterData()}
              />
            </HStack>
          </Actionsheet.Content>
          <Box bg='white' width={'100%'} pt={4}>
            <VStack space={4}>
              {filterData?.data &&
              filterData?.data.map((value, index) => (
                <Actionsheet.Item key={value} onPress={(e) => {
                  setSelectData([value])
                }}>
                  {value}
                </Actionsheet.Item>
              ))}
            </VStack>
            <Box p='5'>
              <Button
                colorScheme='button'
                _text={{ color: 'white' }}
                onPress={()=> {
                  setFilterData({})
                  if (getObject)
                    getObject(selectData);
                }}
              >
                {t('Done')}
              </Button>
            </Box>
          </Box>
        </Actionsheet>
      </VStack>
    </Box>
  )
}
