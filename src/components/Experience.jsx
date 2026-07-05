import { Briefcase, Building2, CalendarDays, CheckCircle2 } from "lucide-react";

export default function Experience({ content }) {
  return (
    <section id="experience" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="section-heading">
          <span>{content.kicker}</span>
          <h2>{content.title}</h2>
          <p>{content.body}</p>
        </div>

        <div className="experience-timeline">
          {content.items.map((item) => (
            <article key={item.title} className="experience-card glass-card">
              {/* Left accent bar */}
              <div className="experience-accent-bar" aria-hidden="true" />

              <div className="experience-content">
                {/* Header */}
                <div className="experience-header">
                  <div className="experience-icon-wrap" aria-hidden="true">
                    <Briefcase size={22} />
                  </div>
                  <div className="experience-meta">
                    <div className="experience-badge">
                      {item.type === "internship" ? "Thực tập" : "Kinh nghiệm"}
                    </div>
                    <h3 className="experience-title">{item.title}</h3>
                    <div className="experience-company">
                      <Building2 size={14} />
                      <span>{item.company}</span>
                    </div>
                    <div className="experience-period">
                      <CalendarDays size={14} />
                      <span>
                        {item.period}
                        {item.duration && <em> · {item.duration}</em>}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="experience-detail">{item.detail}</p>

                {/* Achievements */}
                {item.achievements && (
                  <ul className="experience-achievements">
                    {item.achievements.map((ach) => (
                      <li key={ach} className="experience-achievement-item">
                        <CheckCircle2 size={15} className="experience-check-icon" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
