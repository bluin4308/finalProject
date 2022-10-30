import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ITEMS } from "../../apollo";
import CategoryLayout from "../components/CategoryLayout";

const PaginationButtons = ({ backwardPagination, forwardPagination }) => {
  return (
    <div className="my-4 flex gap-x-3">
      <button
        className="rounded-xl bg-black p-1 px-2 text-white outline outline-black transition hover:bg-white hover:text-black hover:outline-2"
        onClick={backwardPagination}
      >
        Prev
      </button>
      <button
        className="rounded-xl bg-black p-1 px-2 text-white outline outline-black transition hover:bg-white hover:text-black hover:outline-2"
        onClick={forwardPagination}
      >
        Next
      </button>
    </div>
  );
};

const Category = (props) => {
  const [first, setFirst] = useState(2);
  const [last, setLast] = useState(props.first);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [hasPrevPage, setHasPrevPage] = useState(false);
  const [endCursor, setEndCursor] = useState("");
  const [startCursor, setStartCursor] = useState("");
  const [variables, setVariables] = useState({
    tags: props.tags || "",
    first: 2,
  });

  const { data, loading, refetch } = useQuery(GET_ITEMS, {
    variables: variables,
    // variables: variables,
  });

  const forwardPagination = () => {
    setFirst(2);
    setEndCursor(data.clothes.pageInfo.endCursor);
    setVariables({
      tags: props.tags || "",
      first: first,
      after: endCursor,
    });
    refetch(variables);
  };

  const backwardPagination = () => {
    setLast(2);
    setStartCursor(data.clothes.pageInfo.startCursor);
    setVariables({
      tags: props.tags || "",
      last: last,
      before: startCursor,
    });
    refetch(variables);
  };

  useEffect(() => {
    refetch({
      first: first,
      after: endCursor,
    });
  }, [first, endCursor]);

  useEffect(() => {
    refetch({
      last: last,
      before: startCursor,
    });
  }, [last, startCursor]);

  if (loading) {
    console.log("Loading");
    return <p>Loading</p>;
  }

  return (
    <div>
      <div class="flex gap-x-1">
        <p>Items per page</p>
        <select name="perPage" id="perPage">
          <option value="6">6</option>
          <option value="9">9</option>
          <option value="12">12</option>
        </select>
      </div>
      <PaginationButtons
        forwardPagination={forwardPagination}
        backwardPagination={backwardPagination}
      />
      <CategoryLayout data={data.clothes.nodes} />
    </div>
  );
};

export default Category;
