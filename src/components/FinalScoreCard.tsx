export default function FinalScoreCard() {
  return (
    <div className="w-[368px] h-[512px] bg-gradient2 flex justify-center items-center rounded-[32px]">
      <div className="w-[260px] flex flex-col gap-400 items-center text-center">
        <p className="text-preset-4 text-navy200">Your Result</p>
        <div className="w-[200px] h-[200px] rounded-full bg-gradient1 flex justify-center items-center">
          <div className="w-[81px] flex flex-col items-center justify-center">
            <p className="text-preset-1 text-white">76</p>
            <p className="text-preset-5-bold text-navy200 opacity-[51.68%]">of 100</p>
          </div>
        </div>
        <div className="w-[260px] h-[127px] flex flex-col justify-between">
          <p className="text-preset-3 text-white">Great</p>
          <p className="text-preset-5-medium text-navy200">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
      </div>
    </div>
  );
}
