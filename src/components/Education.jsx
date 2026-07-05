import { GraduationCap } from "lucide-react";

export default function Education({ content }) {
  return (
    <section id="education" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="section-heading">
          <span>{content.kicker}</span>
          <h2>{content.title}</h2>
          <p>{content.body}</p>
        </div>

        <div className="edu-timeline">
          {content.items.map((item, index) => (
            <div key={item.title} className={`edu-timeline-row ${index % 2 === 0 ? "edu-row-left" : "edu-row-right"}`}>
              {/* Connector dot */}
              <div className="edu-connector" aria-hidden="true">
                <div className="edu-connector-dot">
                  <GraduationCap size={14} />
                </div>
              </div>

              {/* Card */}
              <article className="edu-card glass-card">
                <div className="edu-card-inner">
                  <p className="edu-period">{item.period}</p>
                  <h3 className="edu-school">{item.title}</h3>
                  {item.degree && (
                    <div className="edu-degree-badge">{item.degree}</div>
                  )}
                  <p className="edu-detail">{item.detail}</p>
                </div>
              </article>
            </div>
          ))}

          {/* Center spine */}
          <div className="edu-spine" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
