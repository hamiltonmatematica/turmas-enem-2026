import { BookOpen, CheckCircle, Clock, GraduationCap, Layout, MonitorPlay, Users, Zap } from "lucide-react";

export const LINKS = {
  RESERVATION: "https://delicategiantpanda-n8n.cloudfy.live/form/71f89cb2-cc61-41b7-a0a8-2459cc14e4ca",
  WHATSAPP_ALYSSON: "https://wa.me/5538999573075?text=Olá%20Alysson",
  WHATSAPP_HAMILTON: "https://wa.me/5538991538392?text=Olá%20Hamilton",
  WHATSAPP_EMANUELLE: "https://wa.me/5538998317477?text=Olá%20Emanuelle",
  WHATSAPP_GERAL: "https://wa.me/553832133244?text=Olá%20quero%20tirar%20uma%20dúvida"
};

const COMMON_FEATURES = [
  "30% de desconto até 31/12 (alunos novos)",
  "50% de desconto até 31/12 (alunos áurea)",
  "Acesso a plataforma Áurea Prime",
  "Sistema de Ensino Geekie 2026",
  "Bolsa de 100% nos cursos de redação e matemática",
  "Coleção Inteligência Áurea (5 volumes)",
  "10 Simulados completos + 8 compactos",
  "Diagnóstico Áurea em TRI",
  "Sem taxa de material",
  "Início: 02 de Fevereiro"
];

// Removing Geekie One from the list for the plan that explicitly says "Sem Geekie One"
const FEATURES_NO_GEEKIE = [
  "30% de desconto até 31/12 (alunos novos)",
  "50% de desconto até 31/12 (alunos áurea)",
  "Acesso a plataforma Áurea Prime",
  "Bolsa de 100% nos cursos de redação e matemática",
  "Coleção Inteligência Áurea (5 volumes)",
  "10 Simulados completos + 8 compactos",
  "Diagnóstico Áurea em TRI",
  "Sem taxa de material",
  "Início: 02 de Fevereiro"
];

export const PRICING_CARDS = [
  {
    id: 'matutino',
    title: 'Enem Matutino',
    subtitle: 'Manhã, ritmo forte e acompanhamento diário',
    priceCash: 'De R$7.400,00 por R$5.180,00 (até 31/12)',
    priceInstallment: 'De 10 x R$850,00 por 10 x R$595,00 (até 31/12) ',
    recommended: false,
    features: COMMON_FEATURES,
  },
  {
    id: 'vespertino',
    title: 'Enem Vespertino',
    subtitle: 'Tarde organizada para quem estuda ou trabalha de manhã',
    priceCash: 'De R$4.900,00 por R$3.430,00 (até 31/12)',
    priceInstallment: 'De 10 x R$560,00 por 10 x R$392,00 (até 31/12)',
    recommended: false,
    features: COMMON_FEATURES,
  },
  {
    id: 'online_geekie',
    title: 'Enem Online com Geekie One',
    subtitle: 'Aulas ao vivo e sistema digital completo',
    priceCash: 'De R$3.100,00 por R$2.170,00 (até 31/12)',
    priceInstallment: 'De 10 x R$ 370,00 por 10 x R$259,00 (até 31/12)',
    recommended: false,
    features: COMMON_FEATURES,
  },
  {
    id: 'online_simple',
    title: 'Enem Online sem Geekie One',
    subtitle: 'Preparação online com planejamento e materiais Áurea',
    priceCash: 'De R$ 1.300,00 por R$910,00 (até 31/12)',
    priceInstallment: 'De 10 x R$ 180,00 por 10 x R$126,00 (até 31/12)',
    recommended: false,
    features: FEATURES_NO_GEEKIE,
  },
];

export const BENEFITS = [
  {
    icon: BookOpen,
    title: 'Material Gratuito',
    description: 'Todos os alunos estudam com material completo sem taxa de material.'
  },
  {
    icon: GraduationCap,
    title: 'Curso de Redação',
    description: 'Acesso ao curso de redação incluso para todas as turmas (Bolsa 100%).'
  },
  {
    icon: Zap,
    title: 'Curso de Matemática',
    description: 'Acesso ao curso de Matemática incluso para todas as turmas (Bolsa 100%).'
  },
  {
    icon: Users,
    title: 'Turma TRI Inteligente',
    description: 'Em julho com bolsa de 100% para alunos ENEM.'
  },
  {
    icon: CheckCircle,
    title: 'Turma Trilha da Aprovação',
    description: 'Em setembro com bolsa de 100% para alunos ENEM.'
  }
];

export const CONTACTS = [
  {
    name: 'Alysson Freitas',
    role: 'Sócio Diretor',
    desc: 'Gestão Administração e Fluxos',
    link: LINKS.WHATSAPP_ALYSSON,
    btnText: 'Falar com Alysson'
  },
  {
    name: 'Hamilton Vinícius',
    role: 'Sócio Diretor',
    desc: 'Matemática Tecnologia e Preparação',
    link: LINKS.WHATSAPP_HAMILTON,
    btnText: 'Falar com Hamilton'
  },
  {
    name: 'Emanuelle',
    role: 'Coordenação Pedagógica',
    desc: 'Organização acompanhamento e suporte ao aluno',
    link: LINKS.WHATSAPP_EMANUELLE,
    btnText: 'Falar com Emanuelle'
  },
  {
    name: 'Atendimento Áurea',
    role: 'Secretaria',
    desc: 'Informações gerais e matrículas',
    link: LINKS.WHATSAPP_GERAL,
    btnText: 'Atendimento geral'
  }
];

export const SCHEDULE_ITEMS = [
  { label: 'Acesso ao sistema Geekie One', check: true },
  { label: 'Acesso à Plataforma Áurea Prime', check: true },
  { label: 'Coleção Inteligência Áurea com 5 volumes', check: true },
  { label: 'Dez simulados completos e oito simulados compactos', check: true },
  { label: 'Diagnóstico TRI individual', check: true },
  { label: 'Planejamento', check: true },
  { label: 'Acompanhamento pela Iara no WhatsApp', check: true },
  { label: 'Sem taxa de material', check: true },
];

export const DIFFERENTIALS = [
  {
    icon: Layout,
    title: "Três formatos de preparação",
    text: "Presencial, Online ao vivo ou Gravada com planejamento semanal"
  },
  {
    icon: Clock,
    title: "Dois ciclos de preparação",
    text: "Ciclo 1 no primeiro semestre (conteúdo) e Ciclo 2 no segundo semestre (competências habilidades e questões)"
  },
  {
    icon: MonitorPlay,
    title: "Sem taxa de material em todas as turmas",
    text: "Sistema de ensino, simulados, materiais exclusivos e coleção Inteligência Áurea"
  }
];