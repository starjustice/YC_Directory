import { Search } from "lucide-react";
import Form from "next/form";
import SearchFormReset from "./SearchFormReset";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    // form action will add query to uri ex localhost:3000/?query=test
    <Form action="/" scroll={false} className="search-form">
      <input
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Search Startups"
      />

      <div className="flex gap-2">
        {query && <SearchFormReset />}{" "}
        <button type="submit" className="search-btn text-white">
          <Search />
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;
