import React from "react";
import "./App.css";
import { extendTheme } from "native-base";
import { DEFAULT_THEME, AppShell, initializeI18n } from "@shiksha/common-lib";
import Home from "pages/Home";

function App() {
  const theme = extendTheme(DEFAULT_THEME);
  initializeI18n(
    ["mentor"],
    `${process.env.PUBLIC_URL}/locales/{{lng}}/{{ns}}.json`
  );
  const SchoolProfile = React.lazy(() => import("schools/SchoolProfile"));
  const MyVisitsPage = React.lazy(() => import("schools/MyVisitsPage"));
  const AttendanceReportDashboard = React.lazy(() =>
    import("schools/AttendanceReportDashboard")
  );
  const AttendanceSectionWiseReport = React.lazy(() =>
    import("schools/AttendanceSectionWiseReport")
  );
  const AttendanceDetailedReport = React.lazy(() =>
    import("schools/AttendanceDetailedReport")
  );
  const AssessmentReportDashboard = React.lazy(() =>
    import("schools/AssessmentReportDashboard")
  );
  const AssessmentSectionWiseReport = React.lazy(() =>
    import("schools/AssessmentSectionWiseReport")
  );
  const AssessmentDetailedReport = React.lazy(() =>
    import("schools/AssessmentDetailedReport")
  );
  const TeacherDetails = React.lazy(() => import("schools/TeacherDetails"));
  const TeacherAttendanceReport = React.lazy(() =>
    import("schools/TeacherAttendanceReport")
  );
  const NewVisitPage = React.lazy(() => import("schools/NewVisitPage"));
  const VisitSubmit = React.lazy(() => import("schools/VisitSubmit"));
  const TeacherVisitReport = React.lazy(() =>
    import("schools/TeacherVisitReport")
  );
  const Question = React.lazy(() => import("schools/Question"));
  const Myvisits = React.lazy(() => import("visits/Myvisits"));
  const Recommendedschools = React.lazy(() =>
    import("visits/Recommended-schools")
  );
  const Allocatedschools = React.lazy(() => import("visits/Allocated-schools"));

  const MyLearning = React.lazy(() => import("mylearning/MyLearning"));
  const CourseList = React.lazy(() => import("mylearning/CourseList"));
  const CourseDetails = React.lazy(() => import("mylearning/CourseDetails"));
  const VideoList = React.lazy(() => import("mylearning/VideoList"));
  const VideoDetails = React.lazy(() => import("mylearning/VideoDetails"));
  const routes = [
    {
      path: "school-profile",
      component: SchoolProfile,
    },
    {
      path: "/",
      component: Home,
    },
    {
      path: "/schools/new-visit",
      component: NewVisitPage,
    },
    {
      path: "/schools/visit-submit",
      component: VisitSubmit,
    },
    {
      path: "/schools/teacher-visit-report",
      component: TeacherVisitReport,
    },
    {
      path: "/schools/assessment-report",
      component: AssessmentReportDashboard,
    },
    {
      path: "/schools/assessment-section-report",
      component: AssessmentSectionWiseReport,
    },
    {
      path: "/schools/assessment-detailed-report",
      component: AssessmentDetailedReport,
    },
    {
      path: "/schools/attendance-report",
      component: AttendanceReportDashboard,
    },
    {
      path: "/schools/attendance-section-report",
      component: AttendanceSectionWiseReport,
    },
    {
      path: "/schools/attendance-detailed-report",
      component: AttendanceDetailedReport,
    },
    {
      path: "/schools/my-visits",
      component: MyVisitsPage,
    },
    {
      path: "/schools",
      component: SchoolProfile,
    },
    ,
    {
      path: "/schools/teacher-details",
      component: TeacherDetails,
    },
    {
      path: "/schools/teacher-attendance-report",
      component: TeacherAttendanceReport,
    },
    {
      path: "/schools/questionnaire",
      component: Question,
    },
    {
      path: "/visits/recommended-schools",
      component: Recommendedschools,
    },
    {
      path: "/visits/allocated-schools",
      component: Allocatedschools,
    },
    {
      path: "visits",
      component: Myvisits,
    },

    { path: "/mylearning", component: MyLearning },
    {
      path: "/mylearning/list/:state",
      component: CourseList,
    },
    {
      path: "/mylearning/list",
      component: CourseList,
    },
    {
      path: "/mylearning/:id/view",
      component: CourseDetails,
    },
    {
      path: "/mylearning/video/list/:state",
      component: VideoList,
    },
    {
      path: "/mylearning/video/list",
      component: VideoList,
    },
    {
      path: "/mylearning/video/:id/view",
      component: VideoDetails,
    },
    {
      path: "*",
      component: Home,
    },
  ];
  const LoginComponent = React.lazy(() => import("core/Login"));

  return (
    <AppShell
      theme={theme}
      basename={process.env.PUBLIC_URL}
      routes={routes}
      AuthComponent={LoginComponent}
      isShowFooterLink={true}
      appName="Mentor/Monitor App"
    />
  );
}

export default App;
