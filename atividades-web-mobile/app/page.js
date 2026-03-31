import Link from "next/link";

export default function Home() {
  return (
    <main style={styles.page}>
      <h1 style={styles.title}>Atividades - Web Mobile</h1>

      <div style={styles.grid}>
        <Link href="/atividade1" style={styles.card}>
          <h2>Atividade 1</h2>
          <p>
            Fundo e Bordas <br />
            Margem, Padding <br />
            Largura e Altura <br />
            Fontes <br />
            Transparência
          </p>
          <span style={styles.button}>Abrir atividade →</span>
        </Link>
        <div style={styles.grid}>
          <Link href="/atividade2" style={styles.card}>
          <h2>Atividade 2</h2>
          <p>Editar descricão da lista <br /></p>
          <span style={styles.button}>Abrir atividade →</span>
          </Link>
          </div>
      </div>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    color: "white",
    padding: "60px",
    fontFamily: "Arial",
  },

  title: {
    fontSize: "40px",
    marginBottom: "40px",
  },

  grid: {
    display: "flex",
    gap: "30px",
    flexWrap: "wrap",
  },

  card: {
    background: "#1e293b",
    padding: "25px",
    borderRadius: "10px",
    width: "280px",
    textDecoration: "none",
    color: "white",
    border: "1px solid #334155",
    transition: "0.3s",
  },

  button: {
    display: "inline-block",
    marginTop: "15px",
    padding: "8px 12px",
    background: "#3b82f6",
    borderRadius: "6px",
  },
};