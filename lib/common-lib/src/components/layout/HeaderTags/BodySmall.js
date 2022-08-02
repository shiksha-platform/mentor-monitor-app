import React from 'react'
import { Text } from 'native-base'

const BodySmall = ({ children, ...props }) => {
  return (
    <Text {...props} fontSize='10px' fontWeight='500'>
      {children}
    </Text>
  )
}
export default React.memo(BodySmall)
