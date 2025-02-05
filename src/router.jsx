import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { News } from "./pages/information/news-newsLetter-section";
import { Member } from "./pages/information/member";
import { Admin } from "./pages/adm";
import { Login } from "./pages/login";
import { Table } from "./components/tables/table";
import { NotFound } from "./pages/Error404";
import { AddTeamMemberForm } from "./components/form/sign-up";
import { AddNewsForm } from "./components/form/news";
import { ManageContentForm } from "./components/form/content-page";
import { SkillsInformation } from "./pages/information/skills.information";
import { ValuesInformation } from "./pages/information/values.information";
import { AboutUsInformation } from "./pages/information/about-us.information";
import { WhyLfaInformation } from "./pages/information/why-lfa.information";
import { TeamInformation } from "./pages/information/team.information";
import { ArticleInformation } from "./pages/information/article.information";
import { ContactInformation } from "./pages/information/contacts.information";
import TermsOfUse from "./pages/termsOfUse";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "information/skills",
    element: <SkillsInformation />,
  },
  {
    path: "information/values",
    element: <ValuesInformation />,
  },
  {
    path: "information/team",
    element: <TeamInformation />,
  },
  {
    path: "information/contact",
    element: <ContactInformation />,
  },
  {
    path: "information/article",
    element: <ArticleInformation />,
  },
  {
    path: "information/about-us",
    element: <AboutUsInformation />,
  },
  {
    path: "information/why-lfa",
    element: <WhyLfaInformation />,
  },
  {
    path: "information/news/:id",
    element: <News />,
  },
  {
    path: "information/member/:id",
    element: <Member />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/terms-of-use",
    element: <TermsOfUse />,
  },
  {
    path: "/login/",
    element: <Login />,
  },
  {
    path: "/admin/news/",
    element: <Table />,
  },
  {
    path: "admin/add/member/",
    element: <AddTeamMemberForm />,
  },
  {
    path: "admin/add/news/",
    element: <AddNewsForm />,
  },
  {
    path: "admin/manage/content/",
    element: <ManageContentForm />,
  },
  {
    path: "/admin/members/",
    element: <Table />,
  },
]);
