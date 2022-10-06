import "./GoogleMapsContainer.css";
export default function GoogleMapsContainer() {
  return (
    <>
      <div className="map-responsive">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.9683246015034!2d-51.153949484618835!3d-30.037766581884803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951977c44336ecaf%3A0x1c73679bd262422b!2sMarili%20R%C3%A9quia%20Corretora%20de%20Seguros!5e0!3m2!1spt-BR!2sbr!4v1660348417149!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}
