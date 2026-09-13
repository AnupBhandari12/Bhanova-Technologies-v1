export function SectionIntro({ eyebrow, title, description, inverse = false }) {
  return (
    <div className={inverse ? "section-intro inverse" : "section-intro"}>
      <div>
        <span className="kicker">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      <p>{description}</p>
    </div>
  );
}
