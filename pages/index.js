import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";

export default function Home(props) {
  const { data: session, status } = useSession();
  if (!session) return <Login />;

  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Facebook Clone</title>
      </Head>

      <Header />

      <main className="flex">
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        <Feed />
        {/* Widgets */}
        <Widgets />
      </main>
    </div>
  );
}
//?
export async function getServerSideProps(context) {
  //get the user
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
