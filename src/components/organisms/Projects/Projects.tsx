import React, { useState } from "react";
import { SectionHeader } from "../../molecules/SectionHeader";
import { FilterGroup } from "../../molecules/FilterGroup";
import { ExpandableCard } from "../ExpandableCard";
import { Lightbox, type LightboxState } from "../Lightbox";
import { ExternalLink } from "../../atoms/ExternalLink";
import { projectsContent, type ProjectType } from "../../../content/portfolioContent";
import styles from "./Projects.module.css";

// Plan 16: Filter types
const filterOptions = projectsContent.filterOptions;

type FilterKey = (typeof filterOptions)[number]["key"];

const typeLabel: Record<ProjectType, string> = projectsContent.typeLabel;

const Projects: React.FC = () => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const [previewState, setPreviewState] = useState<LightboxState | null>(null);

  const toggleExpand = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filtered =
    activeFilter === "all"
      ? projectsContent.projects
      : projectsContent.projects.filter((p) => p.type.some((t) => t === activeFilter));

  return (
    <div id="projects" className={styles.projects}>
      <div className="section-container">
        <SectionHeader
          label={projectsContent.header.label}
          title={projectsContent.header.title}
          subtitle={projectsContent.header.subtitle}
        />

        {/* Plan 16: Filter tabs — Notion-style */}
        <FilterGroup<FilterKey>
          options={filterOptions}
          activeKey={activeFilter}
          onChange={setActiveFilter}
        />

        {/* Plan 12: Narrative card flow — no timeline nodes or vertical lines */}
        <div key={activeFilter} className={styles.list}>
          {filtered.map((project) => (
            <ExpandableCard
              key={project.id}
              id={project.id}
              period={project.period}
              typeLabels={project.type.map((t) => typeLabel[t])}
              title={project.name}
              subtitle={project.tagline}
              tags={project.tags}
              isExpanded={!!expanded[project.id]}
              onToggle={toggleExpand}
            >
              {project.story && <p className={styles.story}>{project.story}</p>}

              {/* Plan 15: Images */}
              {project.images && (
                <div className={styles.images}>
                  {project.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={`${import.meta.env.BASE_URL}${img}`}
                      alt={`${project.name} screenshot ${idx + 1}`}
                      className={styles.thumbnail}
                      onClick={() =>
                        setPreviewState({
                          images: project.images!,
                          index: idx,
                          direction: null,
                        })
                      }
                    />
                  ))}
                </div>
              )}

              {project.link && (
                <ExternalLink href={project.link} className="project-link">
                  {project.linkLabel || projectsContent.defaultLinkLabel} →
                </ExternalLink>
              )}
            </ExpandableCard>
          ))}
        </div>

        {/* Bottom philosophy */}
        <div className={styles.footer}>
          <p className={styles.quote}>
            {projectsContent.footerQuote}
          </p>
        </div>
      </div>

      {/* Plan 15: Lightbox */}
      <Lightbox
        state={previewState}
        onClose={() => setPreviewState(null)}
        onChangeState={setPreviewState}
      />
    </div>
  );
};

export default Projects;
