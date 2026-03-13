import Link from "next/link";
export default function Atividade1() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Atividade 1</h1>
      <h2>
        Fundo e Bordas / Margem, padding, largura e altura / Fontes / Transparência
      </h2>
      <ul>
        <li><Link href="/atividade1/ex210">Exercício Página 210</Link></li>
        <li><Link href="/atividade1/ex231">Exercício Página 231</Link></li>
        <li><Link href="/atividade1/ex246">Exercício Página 246</Link></li>
        <li><Link href="/atividade1/ex263">Exercício Página 263</Link></li>
      </ul>
      <br />
      <Link href="/">⬅ Voltar</Link>
    </main>
  );
}