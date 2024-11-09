import React from 'react';
import './Extracurriculars.css'

const Extracurriculars = () => {
    const cards = [
        [{ id: 1, semester:"Fall 2024", title: "Resident Assistant" ,content: "Utilize organizational skills to create hall prog...", skills:[["TCU Housing and Res. Life", "#f7d9c4"]], tools:[]  }, 
        { id: 2, title: "AddRan Ambassador",content: "Engaged in leadership growth events with mentors who are active in technology and law...", skills:[["AddRan College of Liberal Arts", "#c9e4de"]], tools:[]  }, 
        { id: 3, title: "Event Coordinator", content: "Coordinated guests, supplies and prepared for...", skills:[["FinTech Club", "#f9c6c9"]], tools:[]  }],
        [{ id: 4, semester:"Fall 2024", title: "College of Science and Engineering Representive", content: "Surveyed students and developed house bills...", skills:[["Student Government Associaton", "#c6def1"]], tools:[]  }, 
        { id: 5, title: "Council Advisor", content: "Hosted inter-faith dinners to engage in dialogue...", skills:[["Religious Advisory Council", "#f5d1e5"]], tools:[]  } ],
        [{ id: 6, semester:"Spring 2024", title: "Cultural Connector" ,content: "Organize monthly events on topics and issues related to DEI and act as a resource to students.", skills:[["TCU Housing and Res. Life", "#f7d9c4"]] , tools:[]  },
         { id: 7, title: "Council Advisor", content: "Hosted inter-faith dinners to engage in dialogue...", skills:[["Religious Advisory Council", "#f5d1e5"]], tools:[]  }],
        [{ id: 9, semester:"Fall 2023", title: "Cultural Connector" ,content: "Organize monthly events on topics and issues related to DEI and act as a resource to students.", skills:[["TCU Housing and Res. Life", "#f7d9c4"]] , tools:[]  }],
        [{ id: 8, semester:"Summer 2023", title: "Conference Housing Intern", content: "Developed fully-automated python scripts resulting in a workflow speed increase of 15x and improved efficiency in storing data.", skills:[["TCU Housing and Res. Life", "#f7d9c4"]], tools:[["Python", "#c6def1"], ["PyTesseract", "#faedcb"]] }],
        [{ id: 9, semester:"Spring 2023", title: "Esports Player",content: "Represent TCU in the Iron Skillet VS SMU, and volunteer as a game streaming producer for CS:GO raising charity for the American Heart Association.", skills:[["TCU Esports Club", "#d2d2cf"]] , tools:[]  }],
        [{ id: 9, semester:"Fall 2022", title: "Esports Player",content: "Participate and represent TCU in esports competitions in and around DFW for Counter-Strike and DOTA 2.", skills:[["TCU Esports Club", "#d2d2cf"]] , tools:[]  }],
      ];
    
      const handleCardClick = (id) => {
        alert(`Card ${id} clicked!`);
      };
    return (
        <div>
            <h1 class="workhist-text">Extracurriculars</h1>
            <div className="scroll-container">
            {cards.map(card => (
                <div>
                    {card.map( (view) => (
                        <div>
                            <span class="sem-name" style={{backgroundColor:view.companyColor}}>
                            {view.semester}
                            </span>
                        <div key={view.id} className="card" onClick={() => handleCardClick(view.id)}>
                            <div class="inline-flex">
                                <svg class="h-5 w-5 text-blue-600 pt-1"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="4" /></svg>                                
                                <p class="pos-title">{view.title}</p>
                            </div>
                            <div class="pos-skills">
                                    {view.skills.map( skill => (
                                        <div>
                                            <span class="pos-skill" style={{backgroundColor:skill[1]}}>{skill[0]}</span>
                                        </div>
                                    ))}
                                </div>
                            <div class="pos-content inline-flex flex-col space-y-1">
                                <p class="font-medium" style={{fontSize:"12px"}}>{view.additionalCtx}</p>
                                <p style={{fontSize:"12px"}}>{view.content}</p>
                                <p style={{fontSize:"12px"}}>{view.time}</p>
                            </div>
                            <div class="pos-skills">
                                    {view.tools.map( tool => (
                                        <div>
                                            <span class="pos-skill" style={{backgroundColor:tool[1]}}>{tool[0]}</span>
                                        </div>
                                    ))}
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

export default Extracurriculars;