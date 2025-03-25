const Shimmer = () => {

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <div className="flex flex-wrap">
      {array.map(() =>
        <div className="m-4 p-4 w-[250px] h-[350px] rounded-lg bg-gray-50 shadow">
          <div className="w-5">

          </div>
        </div>
      )
      }
    </div>
  )

}
export default Shimmer;