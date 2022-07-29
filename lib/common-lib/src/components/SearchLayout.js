import React from 'react'
import { Box, Center, HStack, Stack, Input } from 'native-base'
import { useWindowSize } from './helper'
import IconByName from './IconByName'
import { useNavigate } from 'react-router-dom'
import { DEFAULT_THEME, FilterButton } from '../..'
import { useTranslation } from 'react-i18next'

export default function SearchLayout({
  filters,
  minStringLength,
  searchPlaceholder,
  notFoundMessage,
  imageUrl,
  children,
  search,
  setSearch,
  onCloseSearch
}) {
  const { t } = useTranslation()
  const [width, Height] = useWindowSize()
  const [refSearchBar, setRefSearchBar] = React.useState({})
  const navigate = useNavigate()

  const [filterObject, setFilterObject] = React.useState({})

  const callBackFilterObject = React.useCallback((e) => {
    setFilterObject()
  }, [])

  const defaultInputs = filters
    ? filters
    : [
        {
          name: 'District',
          attributeName: 'year',
          data: [
            'District1',
            'District2',
            'District3',
            'District4',
            'District5'
          ]
        },
        {
          name: 'Block',
          attributeName: 'block',
          data: [
            'Block 1',
            'Block 2',
            'Block 3',
            'Block 4',
            'Block 5',
            'Block 6',
            'Block 7',
            'Block 8',
            'Block 9',
            'Block 10'
          ]
        }
      ]

  let colors = DEFAULT_THEME

  return (
    <Center>
      <Box minH={Height} w={width}>
        <Stack
          width={'100%'}
          style={{
            backgroundImage: imageUrl
              ? 'url(' + imageUrl + ')'
              : 'url(' + window.location.origin + '/header.png)',
            backgroundColor: 'transparent',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
          space={5}
          ref={(e) => setRefSearchBar(e)}
        >
          <HStack bg='white' space='1' alignItems='center' p='5'>
            <IconByName
              size='sm'
              name='ArrowLeftLineIcon'
              color='button.500'
              onPress={(e) => {
                if (onCloseSearch) {
                  onCloseSearch()
                } else {
                  navigate(-1)
                }
              }}
            />
            <Input
              flex='1'
              variant='unstyled'
              bg='gray.100'
              // InputRightElement={
              //   <React.Fragment>
              //     <IconByName
              //       _icon={{ size: '23' }}
              //       color='coolGray.500'
              //       w='1/8'
              //       name='MicLineIcon'
              //       pl='0'
              //       onPress={(e) => console.log('not found mic fuction')}
              //     />
              //   </React.Fragment>
              // }
              placeholder={
                searchPlaceholder
                  ? searchPlaceholder
                  : `Type ${
                      minStringLength ? 'min ' + minStringLength : ''
                    } to search `
              }
            />
          </HStack>
        </Stack>
        <Box px='5'>
          <FilterButton
            getObject={callBackFilterObject}
            object={filterObject}
            _actionSheet={{ bg: colors.cardBg }}
            _box={{ pt: 5 }}
            _button={{ bg: colors.primary, px: '15px', py: '2' }}
            _filterButton={{
              rightIcon: '',
              bg: 'white'
            }}
            resetButtonText={t('COLLAPSE')}
            filters={defaultInputs}
          />
        </Box>
        {search && (!minStringLength || search.length >= minStringLength) ? (
          children
        ) : (
          <Center
            minH={
              Height -
              (refSearchBar?.clientHeight ? refSearchBar?.clientHeight : 79)
            }
            w={width}
          >
            <Stack space='10' alignItems='center'>
              <IconByName
                _icon={{ size: '100' }}
                color='coolGray.200'
                w='1/8'
                name='FileSearchLineIcon'
                pl='0'
                onPress={(e) => setSearchInput(false)}
              />
              <Box _text={{ color: 'coolGray.300' }}>{notFoundMessage}</Box>
            </Stack>
          </Center>
        )}
      </Box>
    </Center>
  )
}
