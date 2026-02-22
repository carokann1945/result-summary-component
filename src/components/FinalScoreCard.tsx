export default function FinalScoreCard() {
  return (
    <div
      className="w-full h-full bg-gradient2 flex justify-center items-center rounded-b-[32px]
      md:w-[338px] md:h-[512px] md:shrink-0 md:rounded-[32px]
      xl:w-[368px]">
      <div
        className="w-[260px] flex flex-col gap-[24px] items-center text-center
        md:w-[200px] md:gap-[32px] xl:w-[260px]">
        <p className="text-preset-5-bold text-navy200 md:text-preset-4">Your Result</p>
        <div
          className="w-[140px] h-[140px] rounded-full bg-gradient1 flex justify-center items-center
          md:w-full md:h-[200px] xl:w-[200px] xl:h-[200px]">
          <div className="w-[63px] flex flex-col items-center justify-center md:w-[84px] xl:w-[81px]">
            <p className="text-preset-2 text-white md:text-preset-1">76</p>
            <p className="text-preset-6-bold text-navy200 opacity-[51.68%] md:text-preset-5-bold">of 100</p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-[8px] md:gap-[16px]">
          <p className="text-preset-4 text-white md:text-preset-3">Great</p>
          <p className="text-preset-6-medium text-navy200 md:text-preset-5-medium">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
      </div>
    </div>
  );
}
