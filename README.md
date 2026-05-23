# Gustavo Grunwald — Dev Portfólio & Currículo Interativo

Bem-vindo ao repositório do meu portfólio profissional! Este é um projeto full-stack moderno, desenvolvido com foco em alta performance, animações fluidas baseadas em rolagem e uma experiência interativa voltada para o universo do desenvolvimento de software.

O grande diferencial do projeto é a integração com um **Chat IA interativo**, permitindo que os visitantes conversem diretamente com um assistente inteligente treinado com o meu perfil profissional.

---

## Funcionalidades Principais

- **Visual Geek/Developer:** Interface inspirada em ambientes de desenvolvimento (IDE).
- **Animações Fluidas e Dinâmicas (Sticky Scroll):** Seções que interagem com a rolagem do mouse, fixando-se no centro da tela para uma leitura confortável antes de transicionar.
- **Efeito Typewriter Dinâmico:** Textos digitados em tempo real de forma assíncrona baseados na visibilidade do componente.
- **Chatbot Inteligente (IA):** Uma área interativa alimentada pela **API do Gemini**, onde recrutadores e visitantes podem tirar dúvidas em tempo real sobre minhas habilidades, experiências e projetos.

## Tecnologias Utilizadas

O projeto utiliza uma stack robusta para garantir velocidade, reatividade e inteligência:

- **React / Next.js:** Framework base para a construção de componentes modulares de alto desempenho.
- **Framer Motion:** Engine responsável pelo controle fino dos gatilhos de scroll (useScroll, useTransform, useInView).
- **Tailwind CSS:** Utilitários de estilização para uma interface fluida, responsiva e otimizada.
- **Google Gemini API:** Integração de inteligência artificial para o processamento de linguagem natural no chat.

## Siga os passos abaixo para rodar o projeto localmente:

- **Clone este repositório:**
  Bash
  git clone [https://github.com/GustavoGrunwald/projeto-curriculo.git]

- **Acesse a pasta do projeto:**
  cd projetp-curriculo

- **Instale as dependências:**
  npm install

- **Crie um arquivo .env.local na raiz do projeto para configurar as chaves da API:**
  VITE_GEMINI_API_KEY=SUA_CHAVE

- **Inicie o servidor em modo de desenvolvimento:**
  npm run dev
  Abra o seu navegador e acesse http://localhost:5173.
