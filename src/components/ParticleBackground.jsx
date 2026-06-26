export default function ParticleBackground() {
  return (
    <div className="particle-layer" aria-hidden="true">
      {Array.from({ length: 28 }, (_, index) => (
        <span key={index} style={{ '--i': index }} />
      ))}
    </div>
  );
}
