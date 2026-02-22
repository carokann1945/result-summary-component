import FinalScoreCard from '@/components/FinalScoreCard';
import SingularScoreForm from '@/components/SingularScoreForm';
import Button from '@/components/Button';
import { Reaction } from '@/components/icons/Reaction';
import { Memory } from '@/components/icons/Memory';
import { Verbal } from '@/components/icons/Verbal';
import { Visual } from '@/components/icons/Visual';

export default function Home() {
  return (
    <div className="min-w-[375px] flex flex-col bg-white sm:flex-row">
      <div className="w-full h-[356px]">
        <FinalScoreCard />
      </div>
      <div className="w-[368px] h-[512px] flex justify-center items-center">
        <div className="w-[288px] flex flex-col gap-[32px] justify-center items-center">
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
    </div>
  );
}
