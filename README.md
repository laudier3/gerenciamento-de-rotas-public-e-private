# 🔐 Rotas Públicas e Privadas no Next.js  

Um projeto desenvolvido para demonstrar de forma prática como trabalhar com **rotas públicas** e **rotas privadas** em aplicações criadas com **Next.js**, utilizando uma **arquitetura de pastas organizada, modular e escalável**.  

Este projeto é ideal como base de estudo ou referência para quem deseja aprender a proteger rotas e estruturar projetos de forma clara e profissional.  

---

## 📸 Visualizar  
Demonstração de rotas públicas e privadas com Next.js  

> *Substitua esta seção por capturas de tela reais do seu projeto.*  

---

## ✨ Funcionalidades  

- 🔓 **Rotas Públicas** → acessíveis por qualquer usuário (ex.: login, cadastro, landing page).  
- 🔒 **Rotas Privadas** → acessíveis apenas para usuários autenticados (ex.: dashboard, perfil, configurações).  
- 🛡️ **Proteção de Rotas** com middleware.  
- 🔄 **Redirecionamento Automático** de usuários não autenticados.  
- 📂 **Arquitetura de Pastas Limpa** separando rotas públicas e privadas com App Router do Next.js.  
- 🧩 **Componentes Reutilizáveis** para manter o projeto organizado e escalável.  

---

## 📂 Estrutura do Projeto  

```bash
src/
 ├── app/
 │   ├── (public)/      # Rotas públicas
 │   ├── (private)/     # Rotas privadas
 │   └── layout.tsx     # Layout global
 │
 ├── middleware.ts       # Componentes reutilizáveis
 