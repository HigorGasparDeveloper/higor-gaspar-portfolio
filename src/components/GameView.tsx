import { useState } from 'react';
import { motion } from 'framer-motion';
import { audio } from '../utils/AudioService';
import { Mail } from 'lucide-react';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const TABS = ['Sobre Mim', 'Arsenal (Skills)', 'Fases (Carreira)', 'Missões Extras (Projetos)'];

export function GameView() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index: number) => {
    if (activeTab !== index) {
      audio.playSelect();
      setActiveTab(index);
    }
  };

  return (
    <div className="w-full max-w-5xl h-[85vh] flex flex-col bg-game-panel pixel-borders p-4 md:p-8 relative">
      <div className="flex border-b-4 border-game-border mb-6 overflow-x-auto pb-2 scrollbar-thin">
        {TABS.map((tab, idx) => (
          <button
            key={idx}
            onMouseEnter={() => audio.playHover()}
            onClick={() => handleTabChange(idx)}
            className={`font-arcade text-xs md:text-sm px-4 py-3 mr-2 whitespace-nowrap transition-colors
              ${activeTab === idx
                ? 'bg-game-accent text-white pixel-borders-accent'
                : 'text-game-text/70 hover:text-white hover:bg-game-border'
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto pr-4 scrollbar-thin">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="h-full"
        >
          {activeTab === 0 && <AboutSection />}
          {activeTab === 1 && <ArsenalSection />}
          {activeTab === 2 && <PhasesSection />}
          {activeTab === 3 && <QuestsSection />}
        </motion.div>
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <div className="space-y-6 text-xl leading-relaxed">
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 mb-8">
        <div className="w-32 h-32 bg-game-secondary pixel-borders flex items-center justify-center text-6xl">
          🧙‍♂️
        </div>
        <div>
          <h2 className="font-arcade text-2xl text-game-primary mb-2 text-center md:text-left">Higor Gaspar</h2>
          <p className="text-game-text/80 text-center md:text-left">Classe: Desenvolvedor Full Stack</p>
          <p className="text-game-text/60 text-sm mt-2">Base: Santa Bárbara d'Oeste - SP</p>
        </div>
      </div>

      <div className="bg-game-bg p-6 pixel-borders">
        <h3 className="font-arcade text-game-success mb-4">&gt; Lore (História de Origem)</h3>
        <p>
          Com forte embasamento acadêmico e prático, atuo na arquitetura e no desenvolvimento de aplicações Web, Desktop e Mobile.
          Minha jornada começou com o curso Técnico em Desenvolvimento de Sistemas (2019-2020), foi expandida pela graduação em Análise e Desenvolvimento de Sistemas na Universidade Anhembi Morumbi (2022-2025) e, atualmente, pela pós-graduação em Arquitetura de Software, Ciência de Dados e Cybersecurity na PUCPR (início em Julho de 2026 e previsão de término em Agosto de 2027).
        </p>
        <p className="mt-4">
          Sou entusiasmado por desvendar tecnologias emergentes, liderando sistemas de Visão Computacional, Cloud, IA Generativa e infraestruturas robustas na AWS.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-game-bg p-4 pixel-borders">
          <h4 className="font-arcade text-sm text-game-accent mb-2">Formação (Treinamentos)</h4>
          <ul className="list-none space-y-2 text-base">
            <li><span className="text-game-success">»</span> Pós-Graduação em Arquitetura de Software, Ciência de Dados e Cybersecurity - PUCPR (Jul/2026 - Ago/2027)</li>
            <li><span className="text-game-success">»</span> ADS - Universidade Anhembi Morumbi</li>
            <li><span className="text-game-success">»</span> Técnico em Desenvolvimento de Sistemas</li>
            <li><span className="text-game-success">»</span> Segurança em aplicações Web</li>
          </ul>
        </div>
        <div className="bg-game-bg p-4 pixel-borders flex flex-col justify-between">
          <h4 className="font-arcade text-sm text-game-accent mb-4">Links (Comunicações)</h4>
          <div className="flex flex-col space-y-3">
            <a
              className="flex items-center space-x-3 text-game-text/80 hover:text-white bg-game-panel/50 hover:bg-game-accent p-2 pixel-borders transition-colors group"
              onMouseEnter={() => audio.playHover()}
              onClick={() => audio.playSelect()}
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm md:text-base">E-mail (higorgaspar61@gmail.com)</span>
            </a>
            <a
              href="https://github.com/HigorGasparDeveloper"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-game-text/80 hover:text-white bg-game-panel/50 hover:bg-[#2dba4e] p-2 pixel-borders transition-colors group"
              onMouseEnter={() => audio.playHover()}
              onClick={() => audio.playSelect()}
            >
              <GithubIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm md:text-base">GitHub (Repositórios)</span>
            </a>
            <a
              href="https://www.linkedin.com/in/higor-gaspar/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-game-text/80 hover:text-white bg-game-panel/50 hover:bg-[#0a66c2] p-2 pixel-borders transition-colors group"
              onMouseEnter={() => audio.playHover()}
              onClick={() => audio.playSelect()}
            >
              <LinkedinIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm md:text-base">LinkedIn (Conexão)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArsenalSection() {
  const stacks = [
    {
      title: "Linguagens",
      items: ['TypeScript', 'JavaScript', 'Python', 'PHP', 'C#', 'Java', 'Dart', 'HTML/CSS']
    },
    {
      title: "Frameworks & Libs",
      items: ['React', 'React Native', 'Flutter', 'Node.js', 'Bootstrap', 'JQuery', 'Ajax', 'PM2']
    },
    {
      title: "Bancos de Dados",
      items: ['PostgreSQL', 'MySQL', 'SQL Server', 'Supabase', 'Firebird SQL']
    },
    {
      title: "Cloud & Infra",
      items: ['AWS (EC2, S3, Lambda, Route 53)', 'Docker', 'Vercel', 'Render', 'Nvidia Jetson']
    },
    {
      title: "IA & Automação",
      items: ['Visão Computacional', 'Deep Learning', 'n8n', 'Make', 'RPA', 'Node-red', 'Arduino', 'Raspberry Pi']
    },
    {
      title: "Arquitetura & Protocolos",
      items: ['REST', 'Websockets', 'MQTT', 'JSON', 'XML', 'MVC', 'DDD', 'Scrum']
    }
  ];

  return (
    <div className="space-y-8 pb-8">
      {stacks.map((stack, idx) => (
        <div key={idx}>
          <h2 className="font-arcade text-base md:text-lg text-game-primary mb-4">&gt; {stack.title}</h2>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {stack.items.map((item, i) => (
              <span
                key={i}
                className="bg-game-bg text-game-text px-3 py-2 pixel-borders text-sm md:text-base hover:bg-game-secondary transition-colors cursor-default"
                onMouseEnter={() => audio.playHover()}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function PhasesSection() {
  const phases = [
    {
      title: 'Fase Atual: CONCISE VISION',
      date: '04/2024 - Presente',
      role: 'Analista de Sistemas',
      achievements: [
        'Análise e desenvolvimento usando Visão Computacional e IA generativa',
        'Criação de integrações via APIs, Webooks e tempo real',
        'Configuração e manutenção de arquitetura AWS (EC2, S3, Rotas)',
        'Criação de automações complexas usando n8n',
        'Banco de dados vetoriais (Pinecone, Qdrant)'
      ],
      completed: false
    },
    {
      title: 'Fase 3: VL Corrêa Tecnologia',
      date: '09/2021 - 04/2024',
      role: 'Desenvolvedor Fullstack',
      achievements: [
        'Desenvolvimento Web (PHP, JS, MySQL) e Serviços C#',
        'Implantação de IA / Deep Learning no Nvidia Jetson',
        'Aplicações IoT com Node-RED, Arduino e Raspberry Pi',
        'Integração avançada com APIs Google via Node.js e Python'
      ],
      completed: true
    },
    {
      title: 'Fase 2: MAGSAC EMBALAGENS',
      date: '06/2021 - 09/2021',
      role: 'Auxiliar de TI',
      achievements: [
        'Desenvolvimento Front-end e Back-end (PHP/SQL Server)',
        'Suporte a infraestrutura Windows, Redes e ERP Totvs'
      ],
      completed: true
    },
    {
      title: 'Fase 1: Centro Educacional SESI-099',
      date: '04/2019 - 06/2020',
      role: 'Jovem Aprendiz',
      achievements: [
        'Técnico de Desenvolvimento de Sistemas',
        'Desenvolvimento de aplicativo mobile focado em auxílio ao estudo'
      ],
      completed: true
    }
  ];

  return (
    <div className="space-y-6 pb-8">
      {phases.map((phase, idx) => (
        <div
          key={idx}
          className={`p-5 md:p-6 pixel-borders relative transition-transform ${phase.completed ? 'bg-game-bg' : 'bg-game-bg border-game-accent'} cursor-pointer hover:scale-[1.01]`}
          onMouseEnter={() => audio.playHover()}
          onClick={() => {
            if (!phase.completed) audio.playLevelUp();
            else audio.playSelect();
          }}
        >
          <div className={`absolute -top-3 -right-3 px-3 py-1 text-[10px] md:text-xs font-arcade ${phase.completed ? 'bg-game-success text-game-bg' : 'bg-game-accent text-white'} pixel-borders`}>
            {phase.completed ? 'CLEAR!' : 'IN PROGRESS'}
          </div>

          <h3 className={`font-arcade text-sm md:text-lg mb-2 ${phase.completed ? 'text-game-text/80' : 'text-game-accent'}`}>
            {phase.title}
          </h3>
          <div className="flex flex-col md:flex-row md:items-center justify-between text-game-text/60 mb-4 text-sm md:text-base">
            <span>Classe: {phase.role}</span>
            <span className="mt-1 md:mt-0">Tempo: {phase.date}</span>
          </div>

          <ul className="list-none space-y-2 text-sm md:text-base">
            {phase.achievements.map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="text-game-primary mr-2">»</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function QuestsSection() {
  const quests = [
    {
      title: 'Whisper Core',
      techs: ['Python', 'Whisper', 'OpenRouter API', 'SQLite'],
      desc: 'Sistema de transcrição de áudio em múltiplos formatos via upload ou gravação em tempo real (microfone/som do PC). Possui integração com modelos de IA e prompts personalizados para formatação automatizada do conteúdo em minutos.'
    },
    {
      title: 'Full Stack Brain-Hub',
      techs: ['Flutter', 'Node.js', 'TypeScript', 'Supabase', 'n8n', 'IA Generativa'],
      desc: 'Hub de soluções com frontend em Flutter, APIs Node.js autenticadas via JWT. Integrado a fluxos n8n e IA para automatizar ações em Drive, WhatsApp, Gmail.'
    },
    {
      title: 'Alert-app',
      techs: ['Flutter', 'Python', 'Node.js', 'Supabase'],
      desc: 'Aplicação pessoal de alertas de emergência demonstrando conhecimentos avançados de mensageria e microsserviços em Python.'
    },
    {
      title: 'Backend API Master',
      techs: ['Node.js', 'Express', 'MySQL', 'Render'],
      desc: 'API construída na nuvem para consumo por aplicações em Flutter com banco de dados MySQL e deploy na plataforma Render.'
    },
    {
      title: 'UI Clássicas (Landing Pages & To Do)',
      techs: ['HTML', 'CSS', 'JavaScript'],
      desc: 'Série de projetos visuais e utilitários puros como páginas de login, registro, e aplicações SPA estáticas mantidas em repositório.'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8">
      {quests.map((quest, idx) => (
        <div
          key={idx}
          className="bg-game-bg p-5 pixel-borders flex flex-col h-full hover:bg-game-secondary transition-colors"
          onMouseEnter={() => audio.playHover()}
        >
          <h3 className="font-arcade text-sm text-game-accent mb-3">{quest.title}</h3>
          <p className="text-game-text/80 text-sm md:text-base flex-1 mb-4">
            {quest.desc}
          </p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {quest.techs.map((tech, i) => (
              <span key={i} className="text-xs bg-game-primary/20 text-game-primary px-2 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
