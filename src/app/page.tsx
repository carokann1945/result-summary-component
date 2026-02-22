import FinalScoreCard from '@/components/FinalScoreCard';
import SingularScoreForm from '@/components/SingularScoreForm';
import Button from '@/components/Button';
import { Reaction } from '@/components/icons/Reaction';
import { Memory } from '@/components/icons/Memory';
import { Verbal } from '@/components/icons/Verbal';
import { Visual } from '@/components/icons/Visual';

export default function Home() {
  return (
    <div className="w-[375px] flex flex-col items-center gap-[24px] bg-white md:flex-row md:w-fit">
      <div className="w-full h-[356px] md:h-fit">
        <FinalScoreCard />
      </div>
      <div className="w-[315px] flex flex-col gap-[24px] justify-between">
        <p className="w-full text-preset-4 text-navy950">Summary</p>
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
  );
}
