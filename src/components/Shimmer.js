const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center" data-testid="shimmer">
      {new Array(15).fill("").map((_, index) => (
        <div
          key={index}
          className="w-72 min-h-[350px] p-4 mx-8 my-4 bg-gray-50 shadow-lg rounded-md"
        >
          <div className="w-full h-48 my-2 bg-gray-300"></div>
          <div className="w-full h-3 my-4 bg-gray-300"></div>
          <div className="w-48 h-3 my-4 bg-gray-300"></div>
          <div className="w-32 h-3 my-4 bg-gray-300"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
