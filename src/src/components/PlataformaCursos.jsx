export default function PlataformaCursos() {
  const cursos = [
    {
      titulo: "Emprego Administrativo do Zero",
      descricao: "Aprenda tudo para conquistar seu primeiro emprego administrativo mesmo sem experiência.",
      preco: "R$ 97,00"
    },
    {
      titulo: "Contabilidade na Prática",
      descricao: "Aprenda contabilidade do zero de forma simples e prática.",
      preco: "R$ 97,00"
    },
    {
      titulo: "Pacote Emprego Garantido",
      descricao: "Combo com Administração + Contabilidade + Certificados.",
      preco: "R$ 147,00"
    }
  ];

  return (
    <div style={{ padding: "40px", fontFamily: "Arial", background: "#fff0f6", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", color: "#e91e63" }}>
        Academia do Emprego
      </h1>

      <p style={{ textAlign: "center", marginBottom: "40px" }}>
        Cursos profissionais para entrar no mercado de trabalho
      </p>

      <div style={{ display: "grid", gap: "20px" }}>
        {cursos.map((curso, index) => (
          <div
            key={index}
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "16px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
            }}
          >
            <h2 style={{ color: "#d81b60" }}>{curso.titulo}</h2>
            <p>{curso.descricao}</p>
            <h3>{curso.preco}</h3>
            <button
              style={{
                background: "#e91e63",
                color: "white",
                border: "none",
                padding: "12px 20px",
                borderRadius: "10px",
                cursor: "pointer"
              }}
            >
              Comprar Agora
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
