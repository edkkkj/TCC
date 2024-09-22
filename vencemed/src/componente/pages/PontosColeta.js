import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

// Lista de pontos de coleta
const pontos = [
  { id: 1, nome: "Farmácia Central", endereco: "Rua das Flores, 123, São Paulo", lat: -23.5505, lng: -46.6333 },
  { id: 2, nome: "Supermercado Verde", endereco: "Avenida do Sol, 456, São Paulo", lat: -23.5515, lng: -46.6343 },
  // Adicione mais pontos conforme necessário
];

const pointIcon = L.icon({
  iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Marker_icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

// Função para calcular distância
const haversine = (coords1, coords2) => {
  const toRad = (x) => (x * Math.PI) / 180;
  const lat1 = coords1.lat;
  const lon1 = coords1.lng;
  const lat2 = coords2.lat;
  const lon2 = coords2.lng;
  const R = 6371; // Raio da Terra em km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distância em km
};

const ChangeView = ({ center }) => {
  const map = useMap();
  map.setView(center, map.getZoom());
  return null;
};

const PontosColeta = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState({ lat: -23.5505, lng: -46.6333 });
  const [endereco, setEndereco] = useState("");
  const [pontosProximos, setPontosProximos] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [agendamento, setAgendamento] = useState({ ponto: null, data: "", hora: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(endereco)}&format=json`);
    const data = await response.json();

    if (data && data.length > 0) {
      const { lat, lon } = data[0];
      const newLocation = { lat: parseFloat(lat), lng: parseFloat(lon) };
      setLocation(newLocation);

      // Filtrar pontos de coleta próximos
      const proximos = pontos.filter((ponto) => {
        const distancia = haversine(newLocation, { lat: ponto.lat, lng: ponto.lng });
        return distancia <= 5; // 5 km
      });

      setPontosProximos(proximos);
    } else {
      alert("Endereço não encontrado. Tente novamente.");
    }
  };

  const handleAgendar = (ponto) => {
    setAgendamento({ ...agendamento, ponto });
    setModalIsOpen(true); // Abre a modal
  };

  const handleSubmitAgendamento = (e) => {
    e.preventDefault();
    const novoAgendamento = {
      id: new Date().getTime(), // Um ID único baseado na hora atual
      ponto: agendamento.ponto,
      data: agendamento.data,
      hora: agendamento.hora,
    };

    const storedAgendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];
    storedAgendamentos.push(novoAgendamento);
    localStorage.setItem("agendamentos", JSON.stringify(storedAgendamentos));

    alert(`Agendamento realizado para ${agendamento.ponto.nome} em ${agendamento.data} às ${agendamento.hora}`);
    
    // Redirecionar para a página de Agendamentos
    navigate("/agendamentos", { state: { agendamento: novoAgendamento } });
    setModalIsOpen(false); // Fecha a modal
    setAgendamento({ ponto: null, data: "", hora: "" });
  };

  return (
    <div className="PontosColeta">
      <section className="map-section">
        <h1>Pontos de Coleta de Medicamentos</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            placeholder="Digite seu endereço"
            required
          />
          <button type="submit">Buscar</button>
        </form>

        <MapContainer center={location} zoom={13} style={{ height: "400px", width: "100%", borderRadius: '10px', overflow: 'hidden' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {pontosProximos.map((ponto) => (
            <Marker key={ponto.id} position={[ponto.lat, ponto.lng]} icon={pointIcon}>
              <Popup>
                <strong>{ponto.nome}</strong><br />
                {ponto.endereco}<br />
                <button onClick={() => handleAgendar(ponto)}>Agendar Descarte</button>
              </Popup>
            </Marker>
          ))}
          <ChangeView center={location} />
          <Marker position={[location.lat, location.lng]} icon={pointIcon}>
            <Popup>
              Sua localização
            </Popup>
          </Marker>
        </MapContainer>

        <Modal
  isOpen={modalIsOpen}
  onRequestClose={() => setModalIsOpen(false)}
  contentLabel="Agendar Descarte"
  ariaHideApp={false}
  style={{
    overlay: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)', // Para centralizar
      margin: '0',
      padding: '20px',
      width: '300px',
      height: '300px',
      borderRadius: '10px',
    },
  }}
>

          <h2>Agendar Descarte</h2>
          <form onSubmit={handleSubmitAgendamento}>
            <p>Você escolheu: {agendamento.ponto?.nome}</p>
            <input
              type="date"
              value={agendamento.data}
              onChange={(e) => setAgendamento({ ...agendamento, data: e.target.value })}
              required
            />
            <input
              type="time"
              value={agendamento.hora}
              onChange={(e) => setAgendamento({ ...agendamento, hora: e.target.value })}
              required
            />
            <button type="submit">Confirmar Agendamento</button>
            <button type="button" onClick={() => setModalIsOpen(false)}>Cancelar</button>
          </form>
        </Modal>
      </section>
    </div>
  );
};

export default PontosColeta;
