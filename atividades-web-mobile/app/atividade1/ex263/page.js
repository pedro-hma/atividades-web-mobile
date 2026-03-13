export default function Ex263() {
  const produtos = [
    { nome: "Tênis Nike", preco: "R$ 399" },
    { nome: "Adidas Run", preco: "R$ 349" },
    { nome: "Puma Sport", preco: "R$ 299" },
    { nome: "Vans Classic", preco: "R$ 279" },
    { nome: "New Balance", preco: "R$ 459" },
  ];
  return (
    <main style={{ padding: "40px" }}>
      <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        {produtos.map((p, i) => (
          <div
            key={i}
            style={{
              backgroundColor: "green",
              padding: "15px",
              width: "180px",
              color: "white",
              textAlign: "center",
            }}
          >
            <img
              src="https://static.nike.com/a/images/t_default/6b7c1f5a-1f9b-4f38-bc28-23a603e0b4f3/air-force-1-07-mens-shoes-jBrhbr.png"
              width="150"
            />
            <h3>{p.nome}</h3>
            <p>{p.preco}</p>
          </div>
        ))}
      </div>
      <footer
        style={{
          backgroundColor: "gray",
          marginTop: "40px",
          padding: "20px",
          textAlign: "center",
          color: "white",
        }}
      >
        Loja de Calçados Pedro
      </footer>
    </main>
  );
}