import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Atividades - Web Mobile</h1>
      <ul>
        <li>
          <Link href="/atividade1">
            Fundo e Bordas / Margem, padding, largura e altura / Fontes / Transparência
          </Link>
        </li>
      </ul>
    </main>
  );
}