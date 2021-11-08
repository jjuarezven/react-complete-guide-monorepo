import { useParams } from "react-router-dom";
import { Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DummyQuotes = [
  { id: "q1", author: "Max", text: "Learning React is fun!" },
  { id: "q2", author: "Maxi", text: "Learning React is great!" }
];

const QuoteDetail = () => {
  const params = useParams();
  const quote = DummyQuotes.find((quote) => quote.id === params.quoteId);
  const match = useRouteMatch();

  if (!quote) {
    return <p>No quote found</p>;
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
