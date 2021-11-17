import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Browse React meetups!" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

// with this function, data is pre-rendered during the first buils process on server and
// data is available for seo (useful when data changes not so often)
export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://jose:Perrito1978*@cluster0.p2lad.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString()
      }))
    },
    revalidate: 10
  };
};

// with this function, data is pre-rendered during every ncoming request and data is available for seo
// (useful when data changes often)
/* export const getServerSideProps = async (context) => {
  const req = context.req;
  const res = context.res;

  return {
    props: {
      meetups: DUMMY_MEETUPS
    }
  };
}; */

export default HomePage;
