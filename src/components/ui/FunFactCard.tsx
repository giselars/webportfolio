interface FunFactProps {
  icon: string;
  text: string;
}

export const FunFactCard = ({ icon, text }: FunFactProps) => {
  return (
    <div className="flex flex-col items-center gap-2 text-center p-4">
      <span className="text-3xl">{icon}</span>
      <p className="text-sm text-gray-700">{text}</p>
    </div>
  );
};
