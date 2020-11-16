import React from "react";

function Skill() {
  return (
    <>
      <h1 className="title">Skills</h1>

      <div id="skills">
        {/* <input type="radio" id="all" name="filter" checked/>
  <label className="filter-button neumorphism-button" for="all">All</label>
  <input type="radio" id="language" name="filter" />
  <label className="filter-button neumorphism-button" for="language">Languages</label>
  <input type="radio" id="framework" name="filter" />
  <label className="filter-button neumorphism-button" for="framework">Frameworks</label>
  <input type="radio" id="tool" name="filter" />
  <label className="filter-button neumorphism-button" for="tool">Tools</label> */}

        {/* {% for language in site.data.skills-languages %}
    <div skill-type="language" skill-weight="{{language.weight}}" data-aos="zoom-in">
      {{language.name}}
    </div>
  {% endfor %}
  {% for framework in site.data.skills-frameworks %}
    <div skill-type="framework" skill-weight="{{framework.weight}}" data-aos="zoom-in">
      {{framework.name}}
    </div>
  {% endfor %}
  {% for tool in site.data.skills-tools %}
    <div skill-type="tool" skill-weight="{{tool.weight}}" data-aos="zoom-in">
      {{tool.name}}
    </div>
  {% endfor %} */}
      </div>
    </>
  );
}

export default Skill;
