import React from "react";
import Project from "../Organism/Project";
import Repository from "../Organism/Repository";

function Projects({ projects, repositories }) {
  return (
    <>
      <h1 className="title">
        <span>Courses</span>
      </h1>

      <div className="projects-wrapper">
        {projects &&
          projects.map(() => {
            return <Project></Project>;
          })}
      </div>

      {/* <h1 className="title">Project &amp; Study</h1>
      {% if site.projects.sort_by == 'stars' %}
    {% assign sort_order = 'stargazers_count', 'last' %}
  {% else %}
    {% assign sort_order = 'pushed_at' %}
  {% endif %}

  {% if site.projects.exclude.archived && site.projects.exclude.forks %}
    {% assign filtered_repos = site.github.public_repositories | where:'archived', false | where:'fork', false | sort: sort_order | reverse %}
  {% elsif site.projects.exclude.archived %}
    {% assign filtered_repos = site.github.public_repositories | where:'archived', false | sort: sort_order | reverse %}
  {% elsif site.projects.exclude.forks %}
    {% assign filtered_repos = site.github.public_repositories | where:'fork', false | sort: sort_order | reverse %}
  {% else %}
    {% assign filtered_repos = site.github.public_repositories | sort: sort_order | reverse %}
  {% endif %} */}

      <div className="projects-wrapper">
        {repositories &&
          repositories.map(() => {
            return <Repository></Repository>;
          })}
      </div>
    </>
  );
}

export default Projects;
