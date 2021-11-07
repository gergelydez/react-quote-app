import { Fragment, useEffect } from "react";
import {  useParams } from "react-router";

import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import HighlightedQuotes from "../quotes/HighlightedQuote";
import LoadingSpinner from "../UI/LoadingSpinner";

const QuoteDetail = (props) => {
  const params = useParams();
  const { quoteId } = params;
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);
  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);
  if (status === "pending") {
    return (
      <div className="centered ">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (!loadedQuote.text) {
    return <p>No qoute foud!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuotes text={loadedQuote.text} author={loadedQuote.author} />
      
    </Fragment>
  );
};
export default QuoteDetail;
