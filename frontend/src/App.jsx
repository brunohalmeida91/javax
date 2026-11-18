import React, { useState } from "react";
import "./app.css";

export default function JavaXLandingPage() {
  // const [model, setModel] = useState("Java X-S");
  // const [sent, setSent] = useState(false);
  // const [form, setForm] = useState({ nome: "", email: "", telefone: "" });

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensagem("Salvando...");

    try {
      const response = await fetch("http://localhost:3001/api/contatos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, telefone }),
      });

      if (response.ok) {
        setMensagem("Salvo com sucesso! Verifique no pgAdmin 4.");
        setNome("");
        setEmail("");
      } else {
        setMensagem("Erro ao salvar os dados.");
      }
    } catch (error) {
      setMensagem("Erro de conexão com o servidor Node.");
    }
  };

  return (
    <div className="page">
      <nav className="navbar">
        <div className="logo">JAVA X</div>
        <a href="#drive">Test Drive</a>
      </nav>

      <header className="hero">
        <span className="badge">Elétrico</span>
        <h1>
          O Futuro da <span>Mobilidade</span>
        </h1>
        <p>Potência e tecnologia em três veículos de alta performance.</p>
        <a href="#drive" className="btn">
          Agendar Test Drive
        </a>
      </header>

      <section className="grid">
        <div className="card">
          🚗 <h3>Java X-C</h3>
          <span>Compacto</span>
        </div>
        <div className="card">
          🏎️ <h3>Java X-S</h3>
          <span>Sedan</span>
        </div>
        <div className="card">
          🚙 <h3>Java X-W</h3>
          <span>SUV</span>
        </div>
      </section>

      <section id="drive" className="form-section">
        <div className="box">
          <h2>Test Drive</h2>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "10px" }}>
              <label>Nome: </label>
              <input
                type="text"
                placeholder="Seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </div>

            <div style={{ marginBottom: "10px" }}>
              <label>E-mail: </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div style={{ marginBottom: "10px" }}>
              <label>Telefone: </label>
              <input
                type="tel"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn full">
              Confirmar
            </button>
          </form>

          {mensagem && <p>{mensagem}</p>}
        </div>
      </section>
    </div>
  );
}
