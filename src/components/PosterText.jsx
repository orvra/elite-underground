function PosterText({ text, color }) {
  return (
    <h1
      className="lg:text-6xl md:text-5xl text-4xl font-bold tracking-tighter"
      style={{ color }}
    >
      {text}
    </h1>
  );
}

export default PosterText;
