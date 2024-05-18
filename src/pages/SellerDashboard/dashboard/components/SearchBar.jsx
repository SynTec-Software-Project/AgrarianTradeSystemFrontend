import { Navbar, Typography, Input } from "@material-tailwind/react";

export function SearchBar({ setSearch }) {
  return (
    <Navbar
      variant="gradient"
      color="blue-gray"
      className="mx-auto max-w-screen-xl from-blue-gray-900 to-blue-gray-800 px-4 py-3"
    >
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 ml-2 cursor-pointer py-1.5"
        >
          Search Courier
        </Typography>
        
        <div className="relative flex w-full gap-2 md:w-max">
          <Input
            type="search"
            color="white"
            label="Type here..."
            containerProps={{
              className: "min-w-[288px]",
            }}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
    </Navbar>
  );
}
