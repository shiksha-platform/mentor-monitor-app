import { H2, IconByName, Layout } from "@shiksha/common-lib";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Box, HStack, Text, VStack, Button, Actionsheet, Stack, Divider, Avatar } from "native-base";
import SchoolAddressCard from "../components/SchoolAddressCard";
import SchoolAdminDetailCard from "../components/SchoolAdminDetailCard";
import SchoolAcademicDetailCard from "../components/SchoolAcademicDetailCard";
import TeacherListCard from "../components/TeacherListCard";
import MentorVisitCard from "../components/MentorVisitCard";
import TeacherTile from "../components/TeacherTile";

export default function Myvisitspage() {
  const { t } = useTranslation();
  const [recommendedVisits, setRecommendedVisits] = useState([{}, {}, {}, {}]);
  const [teacherDetailModal, setTeacherDetailModal] = useState(false);

  const [teacherlist, setTeacherList] = useState([]);

  React.useEffect(() => {
    setTeacherList([
      {
        id: 1,
        name: "Rahul",
        class: "VI A",
      },
      {
        id: 2,
        name: "Rahul",
        class: "VI A",
      },
      {
        id: 3,
        name: "Rahul",
        class: "VI A",
      },
    ]);
  }, []);

  return (
    <Layout
      imageUrl={
        "https://via.placeholder.com/728x90.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide"
      }
      _header={{
        title: "My Visits",
        _heading: { color: "white" }
      }}
      _appBar={{ languages: ["en"] }}
      _footer={{
        menues: [
          {
            title: "HOME",
            icon: "Home4LineIcon",
            module: "Registry",
            route: "/",
            routeparameters: {},
          },
          {
            title: "VISITS",
            icon: "GovernmentLineIcon",
            module: "Registry",
            route: "/my-visits",
            routeparameters: {},
          },
          {
            title: "LEARNING",
            icon: "LightbulbFlashLineIcon",
            module: "Registry",
            route: "/",
            routeparameters: {},
          },
          {
            title: "MATERIALS",
            icon: "BookOpenLineIcon",
            module: "Registry",
            route: "/",
            routeparameters: {},
          },
          {
            title: "PROFILE",
            icon: "UserLineIcon",
            module: "Registry",
            route: "/",
            routeparameters: {},
          },
        ],
      }}
    >
      <Box p={6}>
        <VStack space={6}>
          <Box>
            <H2>Teacher’s List</H2>
            <Text fontSize="xs">
              View all allocated teachers
            </Text>
          </Box>
          <VStack space={6}>
            {teacherlist &&
            teacherlist.length &&
            teacherlist.map((teacher, index) => {
              return <TeacherTile key={`teacher${index}`} teacher={teacher} index={index} setTeacherDetailModal={setTeacherDetailModal} />
            })
            }
          </VStack>
        </VStack>
      </Box>

      <Actionsheet isOpen={teacherDetailModal} onClose={() => setTeacherDetailModal(false)}>
        <Actionsheet.Content alignItems={"left"} bg="#E0DFF6">
          <HStack justifyContent={"space-between"} alignItems="center">
            <Stack p={5} pt={2} pb="15px">
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
                      Rahul
                    </Text>
                    <Text color="gray.400" fontSize={"xs"}>
                      Class Teacher: VI A
                    </Text>
                  </VStack>
                </HStack>
              </Box>
            </Stack>
            <Stack pb="15px">
            <IconByName
              name="CloseCircleLineIcon"
              color={"#6461D2"}
              onPress={() => setTeacherDetailModal(false)}
            />
            </Stack>
          </HStack>
        </Actionsheet.Content>
        <Box w="100%" p={4} justifyContent="center" bg="white">
         <VStack space={6}>
           <Text bold>Assistant Officer</Text>
           <Box>
             <Text>Qualification</Text>
             <Text>B.Com. Hons</Text>
           </Box>
           <Box>
             <Text>Phone</Text>
             <Text>+91 1234 567 890</Text>
           </Box>
           <Box>
             <Text>Date of Joining</Text>
             <Text>10 Aug, 2013</Text>
           </Box>
         </VStack>
        </Box>
      </Actionsheet>
    </Layout>
  );
}
