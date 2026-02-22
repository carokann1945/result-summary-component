import FinalScoreCard from '@/components/FinalScoreCard';
import SingularScoreForm from '@/components/SingularScoreForm';
import Button from '@/components/Button';

export default function Home() {
  return (
    <div className="flex">
      <FinalScoreCard />
      <div>
        <SingularScoreForm />
        <Button />
      </div>
    </div>
  );
}
