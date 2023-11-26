import VideoIcon from "@/components/icons/video.icon";

const LoadingMovies = (props) => {
  return (
    <div className="md:grid md:grid-cols-3 gap-3">
      {[...new Array(6)].map(() => (
        <div
          role="status"
          className="animate-pulse space-y-0 space-x-4 flex md:items-center mb-5"
        >
          <div className="flex items-center justify-center w-full h-72 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
            <VideoIcon stroke="#facc15" width="3em" height="3em" />
          </div>
          <div className="w-full">
            <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
            <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-4"></div>
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-36 mb-2.5"></div>
            <div className="flex flex-wrap gap-3 my-11">
              <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-12"></div>
              <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-12"></div>
              <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
            <div className="flex">
              <div className="h-7 bg-gray-200 rounded dark:bg-gray-700 w-16"></div>
              <div className="h-7 ml-2 bg-gray-200 rounded dark:bg-gray-700 w-16"></div>
            </div>
            <div className="h-12 mt-4 bg-gray-200 rounded dark:bg-gray-700 w-full"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingMovies;
