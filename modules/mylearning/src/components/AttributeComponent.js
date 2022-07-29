import { useTranslation } from "react-i18next";
import colorTheme from "../colorTheme";

const {
  IconByName,
  BodyMedium,
  overrideColorTheme,
} = require("@shiksha/common-lib");
const { VStack, HStack } = require("native-base");
const colors = overrideColorTheme(colorTheme);

export default function AttributeComponent({ data, object }) {
  const { t } = useTranslation();

  const elements = data.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 2);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);

  return (
    <VStack space="5">
      {elements.map((attributes, index) => (
        <HStack key={index} space="2">
          {attributes.map((item, subIndex) => (
            <VStack flex={1} space="1" key={subIndex}>
              <HStack space="1" alignItems="center">
                <IconByName
                  isDisabled
                  name={item.icon}
                  _icon={{ size: 14 }}
                  color={colors.gray}
                  p="0"
                />
                <BodyMedium color={colors.gray}>
                  {`${t(item?.label)} : `}
                </BodyMedium>
              </HStack>
              <BodyMedium color={colors.worksheetBoxText}>
                {object?.[item.attribute]
                  ? Array.isArray(object?.[item.attribute])
                    ? object?.[item.attribute].length
                    : object?.[item.attribute]
                  : ""}
              </BodyMedium>
            </VStack>
          ))}
        </HStack>
      ))}
    </VStack>
  );
}
