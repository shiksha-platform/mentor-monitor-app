import React from 'react'
import { Text, Box, Pressable, VStack, ScrollView, HStack } from 'native-base'
import { Animated } from 'react-native-web'

const styles = {
  shadow: { style: { boxShadow: 'inset 0px -1px 0px #dfdfe8' }, px: '3' }
}

export default function Tab({
  routes,
  _box,
  _scrollView,
  _tabBox,
  _text,
  _shadow
}) {
  const [index, setIndex] = React.useState(0)
  console.log({ _scrollView })
  return (
    <VStack w={'100%'}>
      <ScrollView horizontal={true} {..._scrollView}>
        <HStack {..._box} w={'100%'}>
          {routes.map((route, i) => {
            return (
              <Pressable key={i} flex={1} onPress={() => setIndex(i)}>
                <Box alignItems='center' p='3' cursor='pointer'>
                  <Animated.Text>
                    <Text
                      {..._text}
                      {...{
                        color:
                          index === i
                            ? _text?.activeColor
                              ? _text.activeColor
                              : 'button.500'
                            : _text?.color
                            ? _text.color
                            : '#a1a1aa'
                      }}
                    >
                      {route.title}
                    </Text>
                  </Animated.Text>
                </Box>
                <Box {...styles.shadow} {..._shadow}>
                  <Box
                    bg={index === i ? 'button.500' : ''}
                    roundedTopLeft='16px'
                    roundedTopRight='16px'
                    alignItems='center'
                    h='5px'
                    cursor='pointer'
                    {..._tabBox}
                    borderColor={
                      index === i
                        ? _tabBox?.activeBorderColor
                          ? _tabBox.activeBorderColor
                          : 'button.500'
                        : _tabBox?.borderColor
                        ? _tabBox.borderColor
                        : 'coolGray.200'
                    }
                  />
                </Box>
              </Pressable>
            )
          })}
        </HStack>
      </ScrollView>
      {routes[index]?.component}
    </VStack>
  )
}
