/* ============================================================================
   CONFIG — EDITE SOMENTE ESTE ARQUIVO PARA PERSONALIZAR O CONTEÚDO
   - fotoPerfil aponta para '/perfil.jpg' (em public/perfil.jpg)
   - fotoPerfilFallback guarda a sua foto em Base64 para garantir exibição
     imediata mesmo em previews online sem servidor de arquivos estáticos.
   ============================================================================ */

export const PROFILE_PHOTO_BASE64 = 'data:image/jpeg;base64,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';

export const CONFIG = {
  nome: 'Emerson Santos',
  nomeContato: { nome: 'Emerson', sobrenome: 'Santos' },
  assinatura: 'emerson.dev',
  titulo: 'Estudante de Desenvolvimento Full Stack',
  bio: 'Transformando ideias e aprendizados em soluções digitais completas — da interface intuitiva à lógica e automação que fazem tudo funcionar.',
  localizacao: 'Maceió, AL',
  iniciais: 'ES',
  fotoPerfil: '/perfil.jpg',
  fotoPerfilFallback: PROFILE_PHOTO_BASE64,
  whatsapp: '5582981467042',
  instagramHandle: 'gxcodev.space',
  siteUrl: '',
  gxcodevUrl: '',
  empresa: 'Gxcodev',
  cnpj: '67.069.614/0001-09',
  ano: 2026,
  redes: {
    instagram: 'https://instagram.com/emssantos_',
    linkedin: 'https://linkedin.com/in/emsantosdev',
    github: 'https://github.com/EmersonSantos-gx',
  },
  mensagens: {
    geral: 'Olá Emerson! Vi seu portfólio no Instagram e quero conversar.',
    orcamento:
      'Olá Emerson! Conheci a Gxcodev pelo seu portfólio e gostaria de solicitar um orçamento para meu projeto.',
  },
  servicos: [
    'Mini Site - Link-in-Bio',
    'Landing Page de Alta Conversão',
    'Dashboard',
    'Design Grafíco (Corel Draw)',
    'UI/UX Design / Protótipo Figma',
    'ChatBot / Automação WhatsApp',
    'Templates / Modelos de Portfólio',
    'Quero conversar sobre uma ideia',
  ],
  FILTROS: [
    { id: 'todos', nome: 'Todos' },
    { id: 'web', nome: 'Web & UI' },
    { id: 'fullstack', nome: 'Full Stack' },
    { id: 'automacao', nome: 'Automações' },
  ],
  SKILLS: [
    {
      titulo: 'Front-End & UI',
      icone: 'fa-solid fa-code',
      foco: 'FOCO PRÁTICO / INTERFACES',
      descricao: 'Criação de interfaces responsivas, Mobile-First e componentes modernos.',
      tecnologias: [
        { nome: 'HTML5', icone: 'fa-brands fa-html5' },
        { nome: 'CSS3', icone: 'fa-brands fa-css3-alt' },
        { nome: 'JavaScript (ES6+)', icone: 'fa-brands fa-js' },
        { nome: 'TypeScript' },
        { nome: 'React', icone: 'fa-brands fa-react' },
        { nome: 'Next.js' },
        { nome: 'Tailwind CSS' },
      ],
    },
    {
      titulo: 'Back-End & Automações',
      icone: 'fa-solid fa-terminal',
      foco: 'APRENDIZADO / LÓGICA & INTEGRAÇÕES',
      descricao: 'Lógica de negócio, integração de sistemas e scripts de produtividade.',
      tecnologias: [
        { nome: 'Node.js', icone: 'fa-brands fa-node-js' },
        { nome: 'Express' },
        { nome: 'Python', icone: 'fa-brands fa-python' },
        { nome: 'APIs REST' },
        { nome: 'Automações & Bots WhatsApp' },
      ],
    },
    {
      titulo: 'Banco de Dados & Cloud',
      icone: 'fa-solid fa-database',
      foco: 'APRENDIZADO / DADOS & DEPLOY',
      descricao: 'Modelagem, persistência de dados, integração com serviços e deploy.',
      tecnologias: [
        { nome: 'PostgreSQL' },
        { nome: 'MongoDB' },
        { nome: 'Supabase' },
        { nome: 'Integração Google Sheets / Cloud' },
      ],
    },
    {
      titulo: 'UI/UX, Versionamento & IA',
      icone: 'fa-solid fa-bezier-curve',
      foco: 'FOCO PRÁTICO / DESIGN & PROCESSO',
      descricao:
        'Do wireframe ao protótipo, com colaboração, versionamento e IA aplicada ao processo criativo.',
      tecnologias: [
        { nome: 'Git & GitHub', icone: 'fa-brands fa-git-alt' },
        { nome: 'Figma (Wireframes & Protótipos)', icone: 'fa-brands fa-figma' },
        { nome: 'VS Code' },
        { nome: 'Engenharia de Prompt & IA Aplicada' },
      ],
    },
  ],
  PROJETOS: [
    {
      id: 'gestao-escalas',
      categoria: 'fullstack',
      titulo: 'HealthSync • Gestão de Escalas Mobile',
      descricao: 'Em desenvolvimento: Organização de agendas, financeiro e notificações por WhatsApp.',
      stack: 'React Native • JavaScript',
      imagem: '/HealthSync.png',
      githubUrl: 'https://github.com/EmersonSantos-gx/HealthSync',
      demoUrl: '',
      preview: 'escalas',
      demonstrativo: false,
      detalhes:
        'Em desenvolvimento: App Mobile para simplificar a gestão de escalas e a leitura das agendas. Um conceito de como unir clareza visual e organização de dados em um mesmo fluxo.',
      destaques: [
        'Visão centralizada das escalas e agendas.',
        'Organização visual de equipes e horários.',
        'Estrutura pensada para integração com uma API.',
      ],
    },
    {
      id: 'Mini Site',
      categoria: 'web',
      titulo: 'Mini Site • Proteção Veicular',
      descricao: 'Portfólio responsivo com foco em conversão, apresentação de serviços e contato rápido.',
      stack: 'JavaScript • CSS • HTML5',
      imagem: '/CelsonLNPRO.png',
      githubUrl: 'https://github.com/EmersonSantos-gx/lnpro-celson',
      demoUrl: '',
      preview: 'financas',
      demonstrativo: false,
      detalhes:
        'Exploração de UI para finanças pessoais, com hierarquia de informações e gráficos compactos. Os valores do preview são apenas dados visuais de exemplo.',
      destaques: [
        'Dominio Personalizado',
        'Desenvolvido com alta conversão Designer UI/UX.',
        'Atende às necessidades do cliente.',
      ],
    },
    {
      id: 'cartao-digital',
      categoria: 'web',
      titulo: 'Cartão Digital Gxcodev',
      descricao: 'Uma presença digital compacta que aproxima serviços, portfólio e contato.',
      stack: 'HTML • Tailwind • JS',
      imagem: '/projeto-3.png',
      githubUrl: 'https://github.com/GxCodev',
      demoUrl: '',
      preview: 'studio',
      demonstrativo: true,
      detalhes:
        'Conceito de Link-in-Bio com foco em navegação mobile, apresentação de serviços e caminhos curtos para uma conversa. Design e interação em uma experiência compacta.',
      destaques: [
        'Experiência Mobile-First.',
        'CTAs claros e identidade visual consistente.',
        'Galeria de trabalhos e contato rápido.',
      ],
    },
    {
      id: 'fluxobot',
      categoria: 'automacao',
      titulo: 'FluxoBot • Automações',
      descricao: 'Estudo de um fluxo para organizar solicitações e encaminhar demandas.',
      stack: 'Python • Automação',
      imagem: '/projeto-4.png',
      githubUrl: 'https://github.com/GxCodev',
      demoUrl: '',
      preview: 'bot',
      demonstrativo: true,
      detalhes:
        'Estudo de fluxo de atendimento para receber, classificar e encaminhar solicitações. O preview representa a ideia visual do processo; nenhuma integração é executada por esta página.',
      destaques: [
        'Mapeamento de etapas do atendimento.',
        'Conceito de classificação de solicitações.',
        'Mensagens claras para acompanhamento.',
      ],
    },
  ],
};
