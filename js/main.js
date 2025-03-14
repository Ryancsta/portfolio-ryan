// ====== Skills Data ======
// Versão atualizada do array skillsData para o arquivo main.js
// Substitua o array skillsData existente por este código

const skillsData = [
  {
      icon: 'fa-robot',
      title: 'Testes Automatizados',
      description: 'Experiência em criação e manutenção de testes automatizados usando ferramentas como Selenium, Cypress e JUnit. Capacidade de desenvolver frameworks de automação escaláveis.',
      level: 4
  },
  {
      icon: 'fa-clipboard-check',
      title: 'Testes Manuais',
      description: 'Habilidade em testes exploratórios, casos de teste detalhados e estratégias de teste abrangentes. Atenção meticulosa aos detalhes e experiência do usuário.',
      level: 5
  },
  {
      icon: 'fa-network-wired',
      title: 'Testes de API',
      description: 'Proficiência em testar APIs REST usando Postman, RestAssured e outras ferramentas de teste de API. Experiência em validação de contrato e testes de integração.',
      level: 4
  },
  {
      icon: 'fa-headset',
      title: 'Suporte Técnico',
      description: 'Sólida experiência em atendimento e resolução de chamados técnicos, diagnóstico de problemas e comunicação efetiva com usuários de diferentes níveis de conhecimento técnico.',
      level: 5
  },
  {
      icon: 'fa-bug',
      title: 'Gerenciamento de Bugs',
      description: 'Experiência com ferramentas como Jira, Bugzilla e TestRail para documentação e acompanhamento de defeitos. Habilidade em priorizar e comunicar problemas de forma eficaz.',
      level: 4
  },
  {
      icon: 'fa-comments',
      title: 'Comunicação Cliente-Equipe',
      description: 'Capacidade de traduzir necessidades técnicas para linguagem de negócios e vice-versa, facilitando a comunicação entre usuários finais e equipe de desenvolvimento.',
      level: 5
  },
  {
      icon: 'fa-code',
      title: 'Programação',
      description: 'Conhecimento de Java, Python e JavaScript para criar scripts de teste eficientes. Capacidade de analisar código para identificar potenciais problemas.',
      level: 3
  },
  {
      icon: 'fa-tasks',
      title: 'Metodologias Ágeis',
      description: 'Familiaridade com Scrum e Kanban, adaptando-se facilmente a diferentes fluxos de trabalho. Experiência em integração contínua e entrega contínua (CI/CD).',
      level: 4
  }
];

// Versão atualizada do array projectsData para o arquivo main.js
// Substitua o array projectsData existente por este código

const projectsData = [
  {
      title: 'Framework de Automação de Testes',
      description: 'Desenvolvimento de um framework de automação de testes personalizado para aplicações web, utilizando Selenium WebDriver e Java.',
      image: '/assets/img/project1.jpg',
      category: 'automation',
      tags: ['Selenium', 'Java', 'TestNG', 'Maven']
  },
  {
      title: 'Sistema de Gerenciamento de Bugs',
      description: 'Implementação de um sistema interno para rastreamento de bugs e gestão de casos de teste, melhorando a eficiência do time de QA.',
      image: '/assets/img/project2.jpg',
      category: 'automation',
      tags: ['JavaScript', 'Node.js', 'MongoDB', 'Express']
  },
  {
      title: 'Testes de API RESTful',
      description: 'Desenvolvimento de uma suíte completa de testes para validar APIs RESTful de um sistema de e-commerce.',
      image: '/assets/img/project3.jpg',
      category: 'api',
      tags: ['Postman', 'Newman', 'CI/CD', 'JSON Schema']
  },
  {
      title: 'Automação de Processos de Suporte',
      description: 'Desenvolvimento de scripts para automatizar tarefas repetitivas de suporte técnico, aumentando a eficiência em 40% e reduzindo o tempo de resolução de chamados.',
      image: '/assets/img/project4.jpg',
      category: 'automation',
      tags: ['Python', 'PowerShell', 'Automação', 'Suporte']
  },
  {
      title: 'Base de Conhecimento Técnico',
      description: 'Criação e estruturação de uma base de conhecimento interna para documentação de soluções recorrentes, melhorando o tempo de resposta do suporte técnico.',
      image: '/assets/img/project5.jpg',
      category: 'documentation',
      tags: ['Documentação', 'Wiki', 'Suporte', 'Treinamento']
  },
  {
      title: 'Testes de Integração para Microserviços',
      description: 'Desenvolvimento de testes de integração para uma arquitetura de microserviços, garantindo a comunicação correta entre os componentes.',
      image: '/assets/img/project6.jpg',
      category: 'api',
      tags: ['Docker', 'Kubernetes', 'REST', 'gRPC']
  }
];

// ====== DOM Elements ======
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');
const backToTop = document.querySelector('.back-to-top');
const skillsGrid = document.querySelector('.skills-grid');
const projectsGrid = document.querySelector('.projects-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const sections = document.querySelectorAll('section[id]');
const contactForm = document.getElementById('contactForm');

// ====== Event Listeners ======
document.addEventListener('DOMContentLoaded', initializeApp);
window.addEventListener('scroll', scrollFunction);
hamburger.addEventListener('click', toggleNavbar);
navLinksItems.forEach(item => item.addEventListener('click', closeNavbar));
filterBtns.forEach(btn => btn.addEventListener('click', filterProjects));
backToTop.addEventListener('click', scrollToTop);
if (contactForm) {
  contactForm.addEventListener('submit', handleFormSubmit);
}

// ====== Functions ======
function initializeApp() {
  populateSkills();
  populateProjects();
  highlightActiveNavLink();
  
  // Create placeholder images for projects
  document.querySelectorAll('.project-img img').forEach((img, index) => {
      if (img.getAttribute('src') === 'assets/img/project' + (index + 1) + '.jpg') {
          img.setAttribute('src', 'https://via.placeholder.com/350x220?text=Projeto+' + (index + 1));
      }
  });
  
  // Create placeholder image for about section
  const aboutImg = document.querySelector('.about-img img');
  if (aboutImg && aboutImg.getAttribute('src') === 'assets/img/placeholder.jpg') {
      aboutImg.setAttribute('src', 'https://via.placeholder.com/500x500?text=Ryan+Costa');
  }
}

function populateSkills() {
  skillsGrid.innerHTML = '';
  
  skillsData.forEach(skill => {
      const skillCard = document.createElement('div');
      skillCard.className = 'skill-card animate';
      
      let levelHtml = '';
      for (let i = 1; i <= 5; i++) {
          levelHtml += `<span class="${i <= skill.level ? 'active' : ''}"></span>`;
      }
      
      skillCard.innerHTML = `
          <div class="skill-icon">
              <i class="fas ${skill.icon}"></i>
          </div>
          <h4>${skill.title}</h4>
          <p>${skill.description}</p>
          <div class="skill-level">
              ${levelHtml}
          </div>
      `;
      
      skillsGrid.appendChild(skillCard);
  });
}

function populateProjects() {
  projectsGrid.innerHTML = '';
  
  projectsData.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card animate';
      projectCard.dataset.category = project.category;
      
      let tagsHtml = '';
      project.tags.forEach(tag => {
          tagsHtml += `<span class="project-tag">${tag}</span>`;
      });
      
      projectCard.innerHTML = `
          <div class="project-img">
              <img src="${project.image}" alt="${project.title}">
              <div class="project-overlay">
                  <div class="project-links">
                      <a href="#" title="Ver Detalhes"><i class="fas fa-link"></i></a>
                      <a href="#" title="Ver Código"><i class="fas fa-code"></i></a>
                  </div>
              </div>
          </div>
          <div class="project-content">
              <h4>${project.title}</h4>
              <p>${project.description}</p>
              <div class="project-tags">
                  ${tagsHtml}
              </div>
          </div>
      `;
      
      projectsGrid.appendChild(projectCard);
  });
}

function filterProjects(e) {
  const category = e.target.dataset.filter;
  
  // Update active button
  filterBtns.forEach(btn => btn.classList.remove('active'));
  e.target.classList.add('active');
  
  // Filter projects
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
          card.style.display = 'flex';
      } else {
          card.style.display = 'none';
      }
  });
}

function scrollFunction() {
  // Back to top button
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      backToTop.classList.add('active');
  } else {
      backToTop.classList.remove('active');
  }
  
  // Highlight active navigation link
  highlightActiveNavLink();
  
  // Animate elements when in viewport
  animateOnScroll();
}

function highlightActiveNavLink() {
  const scrollPosition = window.scrollY + 100;
  
  sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLinksItems.forEach(link => {
              link.classList.remove('active');
              if (link.getAttribute('href') === '#' + sectionId) {
                  link.classList.add('active');
              }
          });
      }
  });
}

function animateOnScroll() {
  const animateElements = document.querySelectorAll('.animate');
  
  animateElements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 50) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
      }
  });
}

function toggleNavbar() {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
}

function closeNavbar() {
  hamburger.classList.remove('active');
  navLinks.classList.remove('active');
}

function scrollToTop(e) {
  e.preventDefault();
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}

function handleFormSubmit(e) {
  e.preventDefault();
  
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  
  // Validate form
  if (!name || !email || !subject || !message) {
      alert('Por favor, preencha todos os campos do formulário.');
      return;
  }
  
  // Simulate form submission
  alert(`Mensagem enviada com sucesso! Obrigado, ${name}. Entrarei em contato em breve.`);
  contactForm.reset();
}

// Initialize animations for elements
document.querySelectorAll('.animate').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'all 0.6s ease-out';
});

// Initial scroll check
scrollFunction();