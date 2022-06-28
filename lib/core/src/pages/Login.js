import React, { useState } from "react";
import {
  HStack,
  Text,
  Button,
  Box,
  FormControl,
  Input,
  VStack,
  Alert,
  IconButton,
  CloseIcon,
  Center,
} from "native-base";
import { useTranslation } from "react-i18next";
import manifest from "../manifest";
import {
  fetchToken,
  eventBus,
  useWindowSize,
  teacherRegistryService,
  BodyMedium,
  Heading,
  Subtitle,
} from "@shiksha/common-lib";

const styles = {
  box: {
    background:
      "linear-gradient(135deg, #e2f2fc -10%, #faf6f3 35%, #faf6f3 60%,#faf6f3 70%, #e2f2fc 110%)",
  },
};

export default function Login() {
  const [credentials, setCredentials] = useState();
  const [errors, setErrors] = React.useState({});
  const { t } = useTranslation();
  const [width, Height] = useWindowSize();

  const validate = () => {
    let arr = {};
    if (
      typeof credentials?.username === "undefined" ||
      credentials?.username === ""
    ) {
      arr = { ...arr, username: "Username is required" };
    }

    if (
      typeof credentials?.password === "undefined" ||
      credentials?.password === ""
    ) {
      arr = { ...arr, password: "Password is required" };
    }

    setErrors(arr);
    if (arr.username || arr.password) {
      return false;
    }
    return true;
  };

  const handleLogin = async () => {
    if (validate()) {
      const result = await fetchToken(
        manifest.auth_url,
        credentials?.username,
        credentials?.password
      );
      if (result?.data) {
        let token = result.data.access_token;
        const resultTeacher = await teacherRegistryService.getOne(
          {},
          { Authorization: "Bearer " + token }
        );

        if (resultTeacher) {
          let id = resultTeacher.id.replace("1-", "");
          localStorage.setItem("id", id);
          localStorage.setItem(
            "fullName",
            resultTeacher.fullName
              ? resultTeacher.fullName
              : `${resultTeacher.firstName} ${resultTeacher.lastName}`
          );
          localStorage.setItem("firstName", resultTeacher.firstName);
          localStorage.setItem("lastName", resultTeacher.lastName);
          localStorage.setItem("schoolId", resultTeacher.schoolId);
          //window.location.reload();

          localStorage.setItem("token", token);
          eventBus.publish("AUTH", {
            eventType: "LOGIN_SUCCESS",
            data: {
              token: token,
            },
          });
        }
      } else {
        localStorage.removeItem("token");
        setErrors({ alert: "Please enter valid credentials" });
      }
    }
  };

  return (
    <Box style={styles.box}>
      <Center
        _text={{
          color: "white",
          fontWeight: "bold",
        }}
        height={Height}
      >
        <Center width={width}>
          <VStack space="50px" w="300px">
            <Box>
              <Heading>{t("SIGN_IN")}</Heading>
              <BodyMedium textTransform="inherit">
                Hello, welcome back to our your account !
              </BodyMedium>
            </Box>
            <VStack space={2}>
              {"alert" in errors ? (
                <Alert w="100%" status={"error"}>
                  <VStack space={2} flexShrink={1} w="100%">
                    <HStack
                      flexShrink={1}
                      space={2}
                      justifyContent="space-between"
                    >
                      <HStack space={2} flexShrink={1}>
                        <Alert.Icon mt="1" />
                        <Subtitle color="coolGray.800">{errors.alert}</Subtitle>
                      </HStack>
                      <IconButton
                        variant="unstyled"
                        icon={<CloseIcon size="3" color="coolGray.600" />}
                        onPress={(e) => setErrors({})}
                      />
                    </HStack>
                  </VStack>
                </Alert>
              ) : (
                <></>
              )}
              <VStack space="30px">
                <FormControl isRequired isInvalid={"username" in errors}>
                  <FormControl.Label
                    _text={{ fontSize: "14px", fontWeight: "400" }}
                    mb="10px"
                  >
                    {t("USERNAME")}
                  </FormControl.Label>
                  <Input
                    rounded="lg"
                    height="48px"
                    bg="white"
                    variant="unstyled"
                    p={"10px"}
                    placeholder={t("ENTER") + " " + t("USERNAME")}
                    onChange={(e) =>
                      setCredentials({
                        ...credentials,
                        username: e.target.value,
                      })
                    }
                  />
                  {"username" in errors ? (
                    <FormControl.ErrorMessage
                      _text={{
                        fontSize: "xs",
                        color: "error.500",
                        fontWeight: 500,
                      }}
                    >
                      {errors.username}
                    </FormControl.ErrorMessage>
                  ) : (
                    <></>
                  )}
                </FormControl>
                <FormControl isRequired isInvalid={"password" in errors}>
                  <FormControl.Label
                    _text={{ fontSize: "14px", fontWeight: "400" }}
                  >
                    {t("PASSWORD")}
                  </FormControl.Label>
                  <Input
                    rounded="lg"
                    height="48px"
                    bg="white"
                    variant="unstyled"
                    p={"10px"}
                    placeholder={t("ENTER") + " " + t("PASSWORD")}
                    type="password"
                    onChange={(e) =>
                      setCredentials({
                        ...credentials,
                        password: e.target.value,
                      })
                    }
                  />
                  {"password" in errors ? (
                    <FormControl.ErrorMessage
                      _text={{
                        fontSize: "xs",
                        color: "error.500",
                        fontWeight: 500,
                      }}
                    >
                      {errors.password}
                    </FormControl.ErrorMessage>
                  ) : (
                    <></>
                  )}
                </FormControl>
                <Button
                  colorScheme="button"
                  p="3"
                  _text={{ color: "white" }}
                  onPress={handleLogin}
                >
                  {t("SUBMIT")}
                </Button>
                <BodyMedium color="button.500" textAlign="center">
                  Forgot Password?
                </BodyMedium>
                <HStack alignItems="center" space="2">
                  <BodyMedium textTransform="inherit">
                    Dont have an account?
                  </BodyMedium>
                  <BodyMedium color="button.500">{t("SIGN_UP")}</BodyMedium>
                </HStack>
              </VStack>
            </VStack>
          </VStack>
        </Center>
      </Center>
    </Box>
  );
}
