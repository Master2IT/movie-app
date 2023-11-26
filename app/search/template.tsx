import SearchNav from "@components/SearchNav";

const SearchLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SearchNav />
      <main>
        <div className="container px-4 mx-auto">{children}</div>
      </main>
    </>
  );
};

export default SearchLayout;
