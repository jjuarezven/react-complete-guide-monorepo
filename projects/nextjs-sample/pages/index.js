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

// with this function, data is pre-rendered during the first prerender process on server and
// data is available for seo
export const getStaticProps = async () => {
  return {
    props: {
      meetups: DUMMY_MEETUPS
    }
  };
};

export default HomePage;
