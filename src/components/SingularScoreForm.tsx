import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  title: string;
  score: string;
  titleColor: string;
};

export default function SingularScoreForm({ children, title, score, titleColor }: Props) {
  return (
    <div className="w-[288px] h-[56px] flex justify-center items-center bg-red50 rounded-[12px]">
      <div className="w-[250px] h-[23px] flex justify-between">
        <div className="h-[23px] flex gap-[16px]">
          {children}
          <p className={`text-preset-5-medium ${titleColor}`}>{title}</p>
        </div>
        <div className="w-[72px] h-[23px] flex justify-between">
          <p className="text-preset-5-bold text-navy950">{score}</p>
          <p className="text-preset-5-bold text-navy950 opacity-50">/ 100</p>
        </div>
      </div>
    </div>
  );
}
