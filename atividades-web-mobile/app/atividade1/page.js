import Link from "next/link";

export default function Atividade1() {
  return (
    <main style={styles.page}>
      <h1 style={styles.title}>Atividade 1</h1>

      <p style={styles.subtitle}>
        Fundo e Bordas / Margem / Padding / Largura e Altura / Fontes / Transparência
      </p>

      <div style={styles.grid}>

        <Link href="/atividade1/ex210" style={styles.card}>
          <h3>Exercício</h3>
          <p>Página 210</p>
          <span style={styles.button}>Abrir →</span>
        </Link>

        <Link href="/atividade1/ex231" style={styles.card}>
          <h3>Exercício</h3>
          <p>Página 231</p>
          <span style={styles.button}>Abrir →</span>
        </Link>

        <Link href="/atividade1/ex246" style={styles.card}>
          <h3>Exercício</h3>
          <p>Página 246</p>
          <span style={styles.button}>Abrir →</span>
        </Link>

        <Link href="/atividade1/ex263" style={styles.card}>
          <h3>Exercício</h3>
          <p>Página 263</p>
          <span style={styles.button}>Abrir →</span>
        </Link>

      </div>

      <Link href="/" style={styles.back}>
        ← Voltar para atividades
      </Link>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg,#0f172a,#1e293b)",
    color: "white",
    padding: "60px",
    fontFamily: "Arial",
  },

  title: {
    fontSize: "36px",
    marginBottom: "10px",
  },

  subtitle: {
    marginBottom: "40px",
    color: "#cbd5f5",
  },

  grid: {
    display: "flex",
    gap: "25px",
    flexWrap: "wrap",
  },

  card: {
    background: "#1e293b",
    padding: "25px",
    borderRadius: "10px",
    width: "200px",
    textDecoration: "none",
    color: "white",
    border: "1px solid #334155",
  },

  button: {
    display: "inline-block",
    marginTop: "10px",
    padding: "6px 10px",
    background: "#3b82f6",
    borderRadius: "6px",
    fontSize: "14px",
  },

  back: {
    display: "block",
    marginTop: "40px",
    color: "#60a5fa",
    textDecoration: "none",
  },
};