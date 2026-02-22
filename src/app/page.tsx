import FinalScoreCard from '@/components/FinalScoreCard';
import SingularScoreForm from '@/components/SingularScoreForm';
import Button from '@/components/Button';
import { Reaction } from '@/components/icons/Reaction';
import { Memory } from '@/components/icons/Memory';
import { Verbal } from '@/components/icons/Verbal';
import { Visual } from '@/components/icons/Visual';

export default function Home() {
  return (
    <div
      className="w-[375px] flex flex-col items-center gap-[24px] bg-white 
    md:flex-row md:w-fit md:rounded-[32px]
    xl:w-[736px] xl:h-[512px]">
      <div className="w-full h-[356px] md:w-[338px] md:h-fit xl:w-[368px] xl:h-[512px]">
        <FinalScoreCard />
      </div>
      <div className="flex justify-center items-center md:w-[348px] md:h-[512px] xl:w-[368px]">
        <div className="flex flex-col w-[315px] gap-[24px] justify-between md:w-[268px] md:gap-[32px] xl:w-[288px]">
          <p className="w-full text-preset-5-bold text-navy950 md:text-preset-4">Summary</p>
          <div className="flex flex-col gap-[16px]">
            <SingularScoreForm title="Reaction" score="80" titleColor="text-red400">
              <Reaction />
            </SingularScoreForm>
            <SingularScoreForm title="Memory" score="92" titleColor="text-yellow400">
              <Memory />
            </SingularScoreForm>
            <SingularScoreForm title="Verbal" score="61" titleColor="text-green500">
              <Verbal />
            </SingularScoreForm>
            <SingularScoreForm title="Visual" score="73" titleColor="text-blue800">
              <Visual />
            </SingularScoreForm>
          </div>
          <Button />
        </div>
      </div>
    </div>
  );
}
