# Gerenciador de Pedidos - Café Premium

## 🧾 Descrição do Projeto
Este projeto é uma aplicação web para gerenciar pedidos de uma cafeteria premium. Permite aos clientes adicionar produtos ao carrinho, visualizar o total, inserir seu nome e enviar o pedido diretamente via WhatsApp. A interface é moderna, responsiva e otimizada para uma experiência fluida em dispositivos móveis e desktops.

## ✨ Funcionalidades
- **Gerenciamento de Produtos:** Adicione, edite e remova itens do carrinho.
- **Cálculo Automático:** O total do pedido é calculado automaticamente.
- **Nome do Cliente:** Permite informar o nome, que será incluído na mensagem do pedido.
- **Envio via WhatsApp:** Envia a lista de pedidos diretamente para o número da cafeteria.
- **Interface Responsiva:** Layout amigável em desktops, tablets e smartphones.
- **Feedback do Usuário:** Notificações de ações como carrinho vazio, pedido enviado e carrinho limpo.
- **Estilos Modernos:** Hover animado, botões com contraste e layout intuitivo.

## 🛠 Tecnologias Utilizadas
- React
- JavaScript (ES6+)
- Tailwind CSS
- Lucide React (ícones)
- Custom Hooks (toasts, utilidades)
- React-to-Print (para futuras funcionalidades de impressão, se necessário)

## 📂 Estrutura do Projeto
- **src/**
  - **components/**: Componentes React reutilizáveis, como `Cart`, `MenuItem`, `Button`.
  - **hooks/**: Hooks personalizados (`useToast`, etc.)
  - **assets/**: Imagens e recursos estáticos.
  - **App.jsx**: Componente principal que renderiza toda a aplicação.
  - **index.jsx**: Ponto de entrada da aplicação.

## 📥 Instalação
Clone o repositório:
```bash
git clone https://github.com/seu_usuario/gerenciador-pedidos.git
cd gerenciador-pedidos
