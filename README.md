# Site Institucional - Assessoria para Vistos Americanos

Site institucional moderno e premium para agência de assessoria para emissão de vistos americanos, desenvolvido com React, TypeScript, Tailwind CSS e Framer Motion.

## 🚀 Tecnologias

- **React 18** + **TypeScript**
- **Vite** - Build tool rápida
- **Tailwind CSS** - Estilização utilitária
- **Framer Motion** - Animações fluidas
- **React Hook Form** - Gerenciamento de formulários
- **Recharts** - Gráficos animados
- **Intersection Observer API** - Animações ao scroll
- **Material UI (MUI)** + **Emotion** — Biblioteca de componentes e theming

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

## 🏗️ Estrutura do Projeto

```
src/
├─ components/
│   ├─ Hero.tsx              # Hero section com imagem do cliente e formulário
│   ├─ EligibilityForm.tsx   # Questionário interativo em etapas
│   ├─ AnimatedChart.tsx     # Gráficos animados com Intersection Observer
│   ├─ StatsSection.tsx      # Seção de estatísticas e storytelling
│   ├─ DiferenciaisSection.tsx # Seção de diferenciais com microinterações
│   ├─ FaqSection.tsx        # Seção de FAQ com animações
│   ├─ Navbar.tsx            # Navegação responsiva
│   └─ Footer.tsx            # Rodapé com informações de contato
├─ hooks/
│   └─ useInViewAnimation.ts # Hook customizado para animações ao scroll
├─ pages/
│   └─ Home.tsx              # Página principal
├─ styles/
└─ assets/                   # Imagens e recursos estáticos
```

## 🎨 Características

### Hero Section
- Layout responsivo com grid 3-6-3 (texto-imagem-formulário)
- Imagem do cliente posicionada na borda inferior da seção
- Formulário de contato posicionado à direita
- Gradiente inspirado na bandeira americana
- Animações suaves com Framer Motion

### Questionário Interativo
- Formulário em etapas (step form)
- Validação em tempo real
- Barra de progresso animada
- Cálculo simulado de elegibilidade
- Animações suaves entre perguntas

### Seções de Conteúdo
- Gráficos animados com Intersection Observer
- Cards com microinterações e hover effects
- Contadores numéricos animados
- FAQ com accordion animado
- Storytelling visual com estatísticas

### Design e UX
- Interface moderna e profissional
- Cores institucionais personalizáveis
- Tipografia otimizada para legibilidade
- Animações performáticas e suaves
- Totalmente responsivo

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:
- Desktop (1920px+)
- Tablet (768px - 1919px)
- Mobile (320px - 767px)

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run preview` - Preview da build de produção
- `npm run lint` - Executa o linter

## 📄 Licença

Este projeto foi desenvolvido para uso comercial.

---

**Desenvolvido para Gustavo Rios Vistos Americanos**
