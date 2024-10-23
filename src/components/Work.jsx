import React from 'react';
import './Work.css'

const Work = () => {
    const cards = [
        [{ id: 1, company:"Children's Health", companyColor: "#f9c6c9", title: "AI Researcher", time:"May 2024 - Present" ,content: "Develop and deploy an AI tool...", skills:[["Python", "#c6def1"],["LangChain", "#e2cfc4"], ["PyTorch","#e2cfc4"], ["React", "#e2cfc4"], ["ChromaDB", "#e2cfc4"], ["Linux", "#f9c6c9"]] }],
        [{ id: 5, company:"TCU Burnett School of Medicine", companyColor:"#c9e4de", title: "Data Analytics Research Assistant", time:"Oct 2023 - March 2024", content: "Visualized data collected for over 150 survey...", skills:[["Python", "#c6def1"], ["IBM SPSS", "#faedcb"], ["Tableau", "#faedcb"], ["Matplotlib", "#e2cfc4"], ["Linux", "#f9c6c9"]] }],
        [{id: 2, company:"Texas Christian University", companyColor: "#dbcdf0", title: "Peer Tutor", time:"Aug 2023 - Present", additionalCtx: "MATH 10273 & ECON 10233",content: "Tutor students in Applied Calc...", skills:[]}],
        [{id: 3, company:"Texas Christian University", companyColor: "#dbcdf0", title: "Teaching Assistant", additionalCtx: "COSC 10403: Introduction to Programming",content: "Tutor students in Applied Calc...", skills:[["Java", "#c6def1"]]}],
        [{id: 4, company:"Texas Christian University", companyColor: "#dbcdf0", title: "IT Support Specialist", time:"Oct 2022 - Aug 2023",content: "Diagnosed and resolved over 300 requests...", skills:[]}],
      ];
    
      const handleCardClick = (id) => {
        alert(`Card ${id} clicked!`);
      };
    return (
        <div>
            <h1 class="workhist-text">Work History</h1>
            <div className="scroll-container">
            {cards.map(card => (
                <div>
                    {card.map( (view) => (
                        <div>
                            <span class="company-name" style={{backgroundColor:view.companyColor}}>
                            {view.company}
                            </span>
                        <div key={view.id} className="card" onClick={() => handleCardClick(view.id)}>
                            <div class="inline-flex">
                                <svg class="h-5 w-5 text-blue-600 pt-1"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="4" /></svg>                                
                                <p class="pos-title">{view.title}</p>
                            </div>
                            <div class="pos-content inline-flex flex-col space-y-1">
                                <p class="font-medium" style={{fontSize:"12px"}}>{view.additionalCtx}</p>
                                <p style={{fontSize:"12px"}}>{view.content}</p>
                                <p style={{fontSize:"12px"}}>{view.time}</p>
                                <div class="pos-skills">
                                    {view.skills.map( skill => (
                                        <div>
                                            <span class="pos-skill" style={{backgroundColor:skill[1]}}>{skill[0]}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        </div>
                    ))}
                </div>
            ))}
            </div>
        </div>
    );
};

export default Work;