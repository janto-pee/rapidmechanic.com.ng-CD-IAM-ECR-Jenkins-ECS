export default function PageHero({title}: {title: string}) {
  return (
    <div className="text-gray-100 w-[95%] sm:w-[90%] mx-auto">
      <div className=" flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold leading-none lg:text-[56px]">
          {title}
        </h1>
      </div>
    </div>
  );
}
