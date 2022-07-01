import React from 'react'
import { HStack, Text, Box, VStack, Avatar } from 'native-base'

export default function Header({
  title,
  iconComponent,
  headingComponent,
  subHeadingComponent,
  avatar,
  subHeading,
  isDisabledHeader,
  customeComponent,
  _box,
  _heading,
  _subHeading
}: any) {
  let newAvatar = localStorage.getItem('firstName')
  return !isDisabledHeader ? (
    !customeComponent ? (
      <Box {..._box} py={7} px={5}>
        <HStack justifyContent='space-between' alignItems='center'>
          <VStack>
            {headingComponent ? (
              headingComponent
            ) : (
              <Text bold fontSize='18px' {..._heading}>
                {title}
              </Text>
            )}
            {subHeadingComponent ? (
              subHeadingComponent
            ) : (
              <Text fontSize='14px' {..._subHeading}>
                {subHeading}
              </Text>
            )}
          </VStack>
          {iconComponent ? (
            iconComponent
          ) : avatar ? (
            <Avatar bg='amber.500' borderRadius='5px'>
              {newAvatar?.toUpperCase().substr(0, 2)}
              {/* <Avatar.Badge bg='green.500'  /> */}
            </Avatar>
          ) : (
            <React.Fragment />
          )}
        </HStack>
      </Box>
    ) : (
      customeComponent
    )
  ) : (
    <React.Fragment />
  )
}
