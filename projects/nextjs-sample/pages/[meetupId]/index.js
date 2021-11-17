import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
}

export const getStaticProps = async (context) => {
  // fetch data for single meetup
  const meetupId = context.params.meetupId;
  // only see on the VS code terminal, not browser console
  console.log(meetupId);

  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
        title: "First Meetup",
        address: "Some Street 5, Some City",
        description: "This is a first meetup"
      }
    }
  };
};

export const getStaticPaths = async () => {
  // must declare all available ids to prerender
  return {
    fallback: false,
    paths: [
      {
        params: { meetupId: "m1" }
      },
      {
        params: { meetupId: "m2" }
      }
    ]
  };
};

export default MeetupDetails;
