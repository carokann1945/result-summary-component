import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  title: string;
  score: string;
  titleColor: string;
};

export default function SingularScoreForm({ children, title, score, titleColor }: Props) {
  return (
    <div className="w-full h-[56px] flex justify-center items-center bg-red50 rounded-[12px]">
      <div className="w-[283px] flex justify-between">
        <div className="flex gap-[16px]">
          {children}
          <p className={`text-preset-6-medium ${titleColor}`}>{title}</p>
        </div>
        <div className="flex justify-between gap-[8px]">
          <p className="text-preset-6-bold text-navy950">{score}</p>
          <p className="text-preset-6-bold text-navy950 opacity-50">/&nbsp;100</p>
        </div>
      </div>
    </div>
  );
}
