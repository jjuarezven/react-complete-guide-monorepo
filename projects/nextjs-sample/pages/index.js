import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG",
    address: "Calle 40A sur # 24B-105",
    description: "First meetup"
  },
  {
    id: "m2",
    title: "A second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a6/Brandenburger_Tor_abends.jpg",
    address: "Calle 40A sur # 24B-105",
    description: "Second meetup"
  }
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// with this function, data is pre-rendered during the first buils process on server and
// data is available for seo (useful when data changes not so often)
/* export const getStaticProps = async () => {
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 10
  };
}; */

// with this function, data is pre-rendered during every ncoming request and data is available for seo
// (useful when data changes often)
export const getServerSideProps = async (context) => {
  const req = context.req;
  const res = context.res;

  return {
    props: {
      meetups: DUMMY_MEETUPS
    }
  };
};

export default HomePage;
