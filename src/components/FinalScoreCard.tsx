export default function FinalScoreCard() {
  return (
    <div className="w-full h-full bg-gradient2 flex justify-center items-center rounded-b-[32px]">
      <div className="w-[260px] h-[292px] flex flex-col gap-[24px] items-center text-center">
        <p className="text-preset-5-bold text-navy200">Your Result</p>
        <div className="w-[140px] h-[140px] rounded-full bg-gradient1 flex justify-center items-center">
          <div className="w-[63px] flex flex-col items-center justify-center">
            <p className="text-preset-2 text-white">76</p>
            <p className="text-preset-6-bold text-navy200 opacity-[51.68%]">of 100</p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-[8px]">
          <p className="text-preset-4 text-white">Great</p>
          <p className="text-preset-6-medium text-navy200">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
      </div>
    </div>
  );
}
