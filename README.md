# 🧠 Lunysse - Sistema de Agendamento Psicológico
 
Sistema web moderno para gestão de consultas psicológicas, desenvolvido com React 19 + Vite, focado em atendimentos voluntários em universidades, ONGs e projetos sociais.
 
![Lunysse+ Logo](public/logo.png)
 
[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](CHANGELOG.md)
[![React](https://img.shields.io/badge/React-19.1.1-61dafb.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.0-646cff.svg)](https://vitejs.dev/)
[![Tailwind](https://img.shields.io/badge/Tailwind-4.1.11-38bdf8.svg)](https://tailwindcss.com/)
 
## 📋 Índice
 
- [Sobre o Projeto](foi feito para ajudar pessoas com problemas psicologicos e atender todos os que precisam)
- [Funcionalidades](Recursos e ferramentas disponíveis para psicólogos e pacientes)
- [Tecnologias](Tecnologias utilizadas no desenvolvimento da aplicação.)
- [Instalação](Passo a passo para configurar e rodar o sistema localmente.)
- [Uso](Instruções de como utilizar as principais funcionalidades do sistema.)
- [Estrutura do Projeto](Organização de pastas e arquivos do projeto.)
- [API Mock](Simulação do backend e exemplos de endpoints disponíveis.)
- [Chat com IA](Informações sobre o assistente de inteligência artificial integrado.)
- [Componentes](Lista dos componentes reutilizáveis da interface.)
- [Rotas](Configuração de rotas públicas e protegidas dentro da aplicação.)
- [Design System](Paleta de cores, tipografia e padrões visuais do sistema.)
 
## 🎯 Sobre o Projeto
 
O **Lunysse** é uma plataforma web desenvolvida para facilitar o agendamento e gestão de consultas psicológicas em ambientes de atendimento voluntário. O sistema oferece interfaces diferenciadas para psicólogos e pacientes, com foco na experiência do usuário e eficiência operacional.
 
### Objetivos
 
- Tornar o agendamento de consultas mais rápido e simples.
- Auxiliar psicólogos na organização e acompanhamento de seus pacientes.
-Disponibilizar relatórios e informações analíticas para melhor tomada de decisão
- Manter um registro completo de todas as sessões realizadas.
- Oferecer uma interface intuitiva, moderna e adaptada a diferentes dispositivos.
 
## ✨ Funcionalidades
 
### 👨‍⚕️ Para Psicólogos
 
- **Dashboard Personalizado**: Visão geral com KPIs e próximos agendamentos
- **Gestão de Pacientes**: Lista completa com informações detalhadas
- **Detalhes do Paciente**: Histórico de sessões, anotações e relatórios
- **Gestão de Sessões**: Edição de status, anotações e relatórios clínicos
- **Chat com IA**: Assistente especializada em psicologia clínica
- **Relatórios e Analytics**: Gráficos de frequência, status e alertas de risco
- **Agenda Individual**: Controle de disponibilidade por psicólogo
 
### 👤 Para Pacientes
 
- **Dashboard Simples**: Próximos agendamentos e informações relevantes
- **Agendamento Flexível**: Escolha de psicólogo, data e horário
- **Seleção de Especialista**: Lista de psicólogos com especialidades
- **Verificação de Disponibilidade**: Horários livres em tempo real
 
### 🔐 Sistema de Autenticação
 
- Login protegido com validação de credenciais.
- O sistema reconhece automaticamente se o usuário é psicólogo ou paciente.
-Disponível tanto a versão padrão quanto a moderna com efeito glassmorphism.
- Registro com validação para garantir dados corretos.
- Estado de login compartilhado em toda a aplicação.
- Rotas protegidas de acordo com o tipo de usuário
 
## 🛠 Tecnologias
 
### Frontend
- **React 19.1.1** - Biblioteca principal
- **Vite 7.1.0** - Build tool e dev server
- **React Router DOM 7.8.0** - Roteamento
- **Tailwind CSS 4.1.11** - Framework CSS moderno
- **Framer Motion 12.23.12** - Animações fluidas
- **Lucide React 0.539.0** - Ícones modernos
- **Recharts 3.1.2** - Gráficos e visualizações
- **Chart.js 4.5.0** - Gráficos alternativos
- **React Hot Toast 2.5.2** - Notificações
- **@huggingface/inference 4.6.1** - Integração com IA
 
### Persistência
- **LocalStorage** - Armazenamento local dos dados
- **Mock API** - Simulação de backend
 
### Design
- **Glassmorphism** - Efeitos visuais modernos
- **Design System** - Paleta de cores consistente
- **Responsivo** - Mobile-first approach
 
## 🚀 Instalação
 
### Pré-requisitos
 
- Node.js 18+
- npm ou yarn
 
### Passos
 
1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/sistema-agendamento-psicologico.git
cd sistema-agendamento-psicologico
```
 
2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```
 
3. **Configure as variáveis de ambiente**
```bash
cp .env.example .env
# Edite o arquivo .env e adicione seu token do Hugging Face
```
 
4. **Execute o projeto**
```bash
npm run dev
# ou
yarn dev
```
 
5. **Acesse no navegador**
```
http://localhost:5173
```
 
## 💻 Uso
 
### Contas de Teste
 
#### Psicólogos
- **Dr. João Silva**: `psicologo@test.com` / `123456` - Psicologia Clínica
- **Dra. Ana Costa**: `ana@test.com` / `123456` - Terapia Cognitivo-Comportamental
- **Dr. Carlos Mendes**: `carlos@test.com` / `123456` - Psicologia Infantil
- **Dra. Lucia Ferreira**: `lucia@test.com` / `123456` - Terapia Familiar
 
#### Paciente
- **Maria Santos**: `paciente@test.com` / `123456`
 
### Fluxo de Uso
 
1. **Login**:Faça login utilizando uma das contas de teste disponíveis.
2. **Dashboard**: Confira as informações principais de acordo com o seu perfil.
3. **Navegação**: Confira as informações principais de acordo com o seu perfil.
4. **Agendamento** (Pacientes): Utilize a barra lateral para acessar diferentes áreas do sistema.
5. **Gestão** (Psicólogos):Administre seus pacientes, registre sessões e atualize informações clínicas.
 
## 📁 Estrutura do Projeto
 
```
src/
├── assets/ # Arquivos estáticos como imagens, ícones e fontes
├── components/ # Componentes reutilizáveis da interface
│ ├── Button.jsx # Botão customizável
│ ├── Card.jsx # Container estilizado tipo card
│ ├── FormField.jsx # Campo de formulário com validação
│ ├── Input.jsx # Campo de entrada de dados
│ ├── LoadingSpinner.jsx # Indicador de carregamento
│ ├── MarkdownRenderer.jsx # Renderiza textos em markdown
│ ├── PublicNavbar.jsx # Barra de navegação pública
│ ├── SelectField.jsx # Campo de seleção (dropdown)
│ ├── Sidebar.jsx # Menu lateral para usuários logados
│ ├── ToastManager.jsx # Gerenciador de notificações
│ └── WelcomeCard.jsx # Card de boas-vindas ao entrar como usuario novo
│
├── context/ # Contextos globais do React (autenticação, tema, etc.)
│
├── pages/ # Páginas principais da aplicação
│ ├── About.jsx # Página sobre o projeto
│ ├── Agendamentos.jsx # Página de agendamentos dos pacientes
│ ├── ChatIA.jsx # Página do chat com IA
│ ├── DashboardPaciente.jsx # Dashboard do paciente
│ ├── DashboardPsicologo.jsx # Dashboard do psicólogo
│ ├── Home.jsx # Página inicial
│ ├── Login.jsx # Página de login padrão
│ ├── NotFound.jsx # Página 404
│ ├── PacienteDetalhe.jsx # Detalhes de um paciente específico
│ ├── Pacientes.jsx # Lista de pacientes para psicólogos
│ ├── Register.jsx # Página de cadastro de novos usuários
│ ├── Relatorios.jsx # Página de relatórios e analytics
│ ├── SessaoDetalhes.jsx # Detalhes de uma sessão específica
│ └── Solicitacoes.jsx # Página de solicitações de agendamento
│
├── routes/ # Configuração de rotas da aplicação
│ └── AppRoutes.jsx # Gerencia todas as rotas públicas e protegidas
│
├── services/ # Serviços e integrações externas
│ ├── iaService.js # Comunicação com a API da IA
│ └── mockApi.js # Simulação de backend e dados falsos
│
├── App.jsx # Componente principal da aplicação
├── index.css # Estilos globais
├── main.jsx # Ponto de entrada da aplicação
│
├── .env # Variáveis de ambiente
└── .gitignore # Arquivos e pastas ignorados pelo Git
```
 
## 🔌 API Mock
 
### Estrutura da API
 
A API mockada simula um backend real com as seguintes funcionalidades:
 
#### Autenticação
- `login(email, password)` - Autenticação de usuário
- `register(userData)` - Registro de novo usuário
 
#### Usuários
- `getPsychologists()` - Lista psicólogos disponíveis
 
#### Pacientes
- `getPatients(psychologistId)` - Lista pacientes do psicólogo
 
#### Agendamentos
- `getAppointments(userId, userType)` - Lista agendamentos
- `createAppointment(appointmentData)` - Criar agendamento
- `getAvailableSlots(date, psychologistId)` - Horários disponíveis
- `updateAppointment(id, data)` - Atualizar agendamento
- `cancelAppointment(id)` - Cancelar agendamento
 
#### Sessões
- `getSessionDetails(sessionId)` - Detalhes da sessão
- `updateSessionStatus(sessionId, status)` - Atualizar status
- `updateSessionNotes(sessionId, notes, report)` - Atualizar anotações
 
#### Relatórios
- `getReportsData(psychologistId)` - Dados para relatórios
 
### Persistência
 
Os dados são armazenados no `localStorage` do navegador:
 
- `lunysse_users` - Usuários do sistema
- `lunysse_patients` - Pacientes cadastrados
- `lunysse_appointments` - Agendamentos e sessões
 
## 🤖 Chat com IA
 
### Funcionalidades
 
- **Assistente Especializada**: IA treinada em psicologia clínica
- **Respostas Estruturadas**: Formatação markdown para melhor legibilidade
- **Histórico de Conversa**: Contexto mantido durante a sessão
- **Tratamento de Erros**: Mensagens informativas para problemas de conexão
- **Interface Moderna**: Design consistente com o sistema
 
### Configuração
 
1. **Token do Hugging Face já configurado**:
   - O projeto já possui um token configurado no arquivo `.env`
   - Para usar seu próprio token, substitua o valor em `VITE_HF_TOKEN`
 
2. **Modelo Utilizado**:
   - **Provider**: Novita
   - **Modelo**: zai-org/GLM-4.5
   - **Especialização**: Psicologia clínica
   - **Parâmetros**: max_tokens: 1500, temperature: 0.7
 
3. **Funcionalidades da IA**:
   -As respostas são exibidas com formatação em markdown para melhor leitura.
   - Mantém o contexto das últimas 10 mensagens para continuidade do diálogo.
   -Fornece recomendações baseadas em evidências científicas.
   -Identifica e trata problemas como token inválido, limite de requisições ou falhas de conexão.
   
### Exemplos de Uso
 
- "Como lidar com pacientes com ansiedade?"
- "Técnicas para terapia infantil"
- "Abordagens para terapia de casal"
- "Sinais de alerta em depressão"
- "Orientações sobre aspectos éticos"
 
### Componentes
 
#### `ChatIA.jsx`
- Interface principal do chat
- Gerenciamento de mensagens e estado
- Integração com o serviço de IA
 
#### `MarkdownRenderer.jsx`
- Renderização de markdown nas respostas
- Formatação de títulos, listas e código
- Estilos consistentes com o design system
 
#### `aiService.js`
- Integração com Hugging Face Inference API
- Tratamento de erros e timeouts
- Configuração de parâmetros do modelo
 
## 🎨 Design System
 
### Paleta de Cores
 
```css
:root {
  --dark: #1B3553;      /* Azul escuro principal */
  --medium: #024873;    /* Azul médio */
  --light: #2493BF;     /* Azul claro */
  --accent: #26B0BF;    /* Azul accent */
  --background: #F2EFE9; /* Bege claro */
}
```
 
### Tipografia
 
- **Primária**: Poppins  (títulos e interface)
- **Secundária**: Roboto (textos corridos)
- **Monospace**: Roboto Mono (códigos)
 
### Componentes Base
 
#### Button
- Variantes: primary, secondary, danger
- Estados: normal, hover, loading, disabled
- Tamanhos: sm, md, lg
 
#### Card
- Glassmorphism effect
- Sombras suaves
- Bordas arredondadas
 
#### Modal
- Overlay com blur
- Animações de entrada/saída
- Responsivo
 
### Breakpoints
 
```css
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```
 
## 🧩 Componentes
 
### Componentes de UI
 
#### `<Button />`
Botão customizado com variantes e estados.
 
```jsx
<Button variant="primary" size="lg" loading={isLoading}>
  Confirmar
</Button>
```
 
#### `<Card />`
Container com efeito glassmorphism.
 
```jsx
<Card className="p-6">
  <h2>Título do Card</h2>
  <p>Conteúdo...</p>
</Card>
```
 
#### `<Modal />`
Modal responsivo com overlay.
 
```jsx
<Modal isOpen={isOpen} onClose={handleClose} title="Título">
  <p>Conteúdo do modal...</p>
</Modal>
```
 
#### `<MarkdownRenderer />`
Renderizador de markdown para mensagens da IA.
 
```jsx
<MarkdownRenderer content={markdownText} />
```
 
### Componentes de Layout
 
#### `<Sidebar />`
Navegação lateral para usuários autenticados.
 
#### `<PublicNavbar />`
Navbar para páginas públicas.
 
### Componentes de Utilidade
 
#### `<LoadingSpinner />`
Indicador de carregamento com tamanhos variados.
 
## 🛣 Rotas
 
### Rotas Públicas
- `/` - Página inicial
- `/about` - Sobre o projeto
- `/login` - Login padrão
- `/lunysse` - Login moderno
- `/register` - Cadastro
 
### Rotas Protegidas
- `/dashboard` - Dashboard (redireciona por tipo de usuário)
- `/agendamento` - Agendamento (apenas pacientes)
- `/pacientes` - Lista de pacientes (apenas psicólogos)
- `/pacientes/:id` - Detalhes do paciente
- `/sessao/:sessionId` - Detalhes da sessão
- `/chat-ia` - Chat com IA (apenas psicólogos)
- `/relatorios` - Relatórios (apenas psicólogos)
 
### Proteção de Rotas
 
```jsx
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
 
  if (loading) return <LoadingSpinner />;
  if (!user) return <Navigate to="/login" />;
 
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 lg:ml-64 p-8">
        {children}
      </main>
    </div>
  );
};
```
 
## 📊 Funcionalidades Avançadas
 
### Sistema de Relatórios
 
- **KPIs Dinâmicos**: Calculados em tempo real
- **Gráficos Interativos**: Recharts para visualizações
- **Alertas de Risco**: Baseados em padrões de comportamento
- **Dados Históricos**: Análise temporal de sessões
 
### Chat com IA Especializada
 
- **Assistente Inteligente**: IA especializada em psicologia clínica
- **Respostas Estruturadas**: Formatação markdown automática
- **Contexto Mantido**: Histórico de conversa preservado
- **Sugestões Inteligentes**: Perguntas pré-definidas para facilitar uso
- **Tratamento de Erros**: Feedback claro sobre problemas de conexão
 
### Gestão de Agenda
 
- **Disponibilidade Individual**: Cada psicólogo tem sua agenda
- **Conflito de Horários**: Prevenção automática
- **Horários Flexíveis**: Configuração de slots disponíveis
- **Status de Sessões**: Controle completo do ciclo de vida
 
### Interface Responsiva
 
- **Mobile-First**: Design otimizado para dispositivos móveis
- **Sidebar Adaptativa**: Menu hambúrguer em telas pequenas
- **Cards Flexíveis**: Layout que se adapta ao conteúdo
- **Navegação Intuitiva**: UX consistente em todos os dispositivos
 
## 🔧 Scripts Disponíveis
 
```bash
# Desenvolvimento
npm run dev
 
# Build para produção
npm run build
 
# Preview da build
npm run preview
 
# Lint do código (ESLint 9.32.0)
npm run lint
 
# Instalar dependências
npm install
```
 
### Padrões de Código
 
- Use ESLint para manter consistência
- Siga os padrões do Prettier
- Componentes em PascalCase
- Funções em camelCase
- Constantes em UPPER_CASE
 
## 🔄 Versão Atual
 
**v1.0.0** - Sistema completo com todas as funcionalidades principais implementadas.
 
---
 
<div align="center">
  <p>Desenvolvido com amor para facilitar o acesso à saúde mental</p>
  <p><strong>Cuide+ v1.0.0 - Sistema de Agendamento Psicológico</strong></p>
  <p>React 19 • Vite 7 • Tailwind CSS 4 • Hugging Face AI</p>
</div>