import Image from 'next/image';

function RightSection() {
  return (
    <div className="flex items-center justify-center p-4 md:p-0 md:m-8 w-full">
      <Image src="/hero2.svg" alt="Crypto Arbitrage Scanner Bot" width={500} height={300} className="object-cover" />
    </div>
  );
}

export default RightSection;
