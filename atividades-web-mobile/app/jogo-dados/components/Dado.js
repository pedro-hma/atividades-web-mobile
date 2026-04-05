import Image from 'next/image';

export default function Dado({ valor }) {
  if (valor < 1 || valor > 6) {
    return <div>Valor inválido</div>;
  }
  return (
    <Image src={`/dice/dice${valor}.svg`}alt={`Dado ${valor}`}width={100}height={100}/>
  );
}