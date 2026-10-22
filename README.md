# NewsApp 📰

> Aplicativo móvel de notícias com navegação por categorias, desenvolvido com React Native, Expo e TypeScript.

---

## 📱 Sobre o Projeto

O **NewsApp** é um aplicativo mobile para leitura de notícias de **Tecnologia** e **Esportes**. O usuário pode alternar entre as categorias, visualizar resumos em cartões e abrir cada notícia para ler seu conteúdo completo, com suporte aos temas claro (*Light*) e escuro (*Dark*).

O projeto tem como objetivo praticar a combinação de três tipos de navegação com **Expo Router**: menu lateral (**Drawer**), abas (**Tabs**) e pilhas de telas (**Stack**). As notícias são dados de exemplo armazenados localmente em `src/data/newsData.ts`, sem integração com uma API externa.

---

## ✨ Funcionalidades

- 🗂️ **Notícias por Categoria**: Abas de Tecnologia e Esportes, com cinco notícias de exemplo em cada categoria.
- 📰 **Listagem de Notícias**: Listas com `FlatList` e cartões reutilizáveis (`NewsCard`) que exibem categoria, título e resumo.
- 📖 **Leitura Completa**: Telas de detalhes com conteúdo rolável, título dinâmico no cabeçalho e mensagem para notícias não encontradas.
- 🧭 **Navegação Integrada**:
  - **Drawer** na raiz para acessar Notícias e Sobre.
  - **Tabs** para alternar entre Tecnologia e Esportes.
  - **Stack** em cada categoria para navegar da lista aos detalhes.
- ℹ️ **Tela Sobre**: Apresentação do aplicativo e dos tipos de navegação utilizados, com botão de retorno às notícias.
- 🌓 **Temas Claro e Escuro**: Cores adaptadas automaticamente ao tema do sistema, com componentes reutilizáveis `ThemedView` e `ThemedText`.
- 📱 **Áreas Seguras**: Uso de `SafeAreaProvider` e `SafeAreaView` para acomodar o conteúdo às áreas seguras do dispositivo.

---

## 🛠️ Tecnologias e Ferramentas

- **[React Native](https://reactnative.dev/)** (v0.86.3) - Framework para desenvolvimento mobile multiplataforma.
- **[Expo](https://expo.dev/)** (SDK 57) - Plataforma e ferramentas de desenvolvimento do aplicativo.
- **[Expo Router](https://docs.expo.dev/router/introduction/)** - Navegação baseada em arquivos, com Drawer, Tabs e Stack.
- **[TypeScript](https://www.typescriptlang.org/)** (v6.0) - Tipagem dos componentes e dos dados de notícias.
- **[React](https://react.dev/)** (v19.2.3) - Construção da interface com componentes.
- **[React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/)** e **[Reanimated](https://docs.swmansion.com/react-native-reanimated/)** - Suporte a gestos e animações da navegação.
- **[React Native Safe Area Context](https://github.com/th3rdwave/react-native-safe-area-context)** - Tratamento das áreas seguras da tela.
- **[Expo Vector Icons](https://icons.expo.fyi/)** - Ícones Ionicons utilizados no menu e nas abas.

---

## 📁 Estrutura do Projeto

```text
NewsApp/
├── assets/
│   ├── expo.icon/           # Ícone do app para iOS
│   └── images/             # Ícones, splash screen e imagem da tela Sobre
├── src/
│   ├── app/                # Rotas e telas do Expo Router
│   │   ├── _layout.tsx     # Drawer raiz, tema e provedores globais
│   │   ├── index.tsx       # Redirecionamento para Tecnologia
│   │   ├── about.tsx       # Tela Sobre
│   │   └── (news)/
│   │       ├── _layout.tsx # Abas de Tecnologia e Esportes
│   │       ├── technology/
│   │       │   ├── _layout.tsx # Stack de Tecnologia
│   │       │   ├── index.tsx   # Lista de notícias de Tecnologia
│   │       │   └── [id].tsx    # Detalhes da notícia selecionada
│   │       └── sports/
│   │           ├── _layout.tsx # Stack de Esportes
│   │           ├── index.tsx   # Lista de notícias de Esportes
│   │           └── [id].tsx    # Detalhes da notícia selecionada
│   ├── components/
│   │   ├── NewsCard.tsx    # Cartão de resumo da notícia
│   │   ├── ThemedText.tsx  # Texto com suporte ao tema
│   │   └── ThemedView.tsx  # Contêiner com suporte ao tema
│   ├── data/
│   │   └── newsData.ts     # Notícias locais e funções de consulta
│   └── types/
│       └── news.ts         # Tipos NewsItem e NewsCategory
├── app.json                # Configurações do Expo
├── eas.json                # Perfis de build do EAS
├── eslint.config.js        # Configuração do ESLint
├── package.json            # Dependências e scripts do projeto
├── tsconfig.json           # Configuração do TypeScript
└── README.md               # Documentação do projeto
```

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) em uma versão LTS compatível com o SDK 57 e gerenciador de pacotes **npm**.
- Para executar no celular, **Expo Go compatível com o SDK do projeto** ou uma compilação de desenvolvimento instalada.
- Como alternativa, emulador Android configurado ou simulador iOS (disponível no macOS com Xcode).

### Passo a Passo

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/lucasrvcintra/newsApp.git
   cd newsApp
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**

   ```bash
   npx expo start
   ```

4. **Abra o app:**

   - **No celular físico**: Escaneie o código QR exibido no terminal para abrir no Expo Go compatível ou na compilação de desenvolvimento.
   - **No emulador Android**: Pressione `a` no terminal.
   - **No simulador iOS**: Pressione `i` no terminal.
   - **No navegador web**: Pressione `w` no terminal.

---

## 📋 Scripts Disponíveis

| Comando | Descrição |
| :--- | :--- |
| `npm run start` ou `npx expo start` | Inicia o servidor de desenvolvimento do Expo |
| `npm run android` | Inicia o servidor e abre o app no Android |
| `npm run ios` | Inicia o servidor e abre o app no simulador iOS |
| `npm run web` | Inicia a aplicação no navegador web |
| `npm run lint` | Executa a verificação de código com ESLint / Expo Lint |
| `npx tsc --noEmit` | Executa a checagem estática de tipos do TypeScript |

---

Feito por [Lucas Cintra](https://github.com/lucasrvcintra).
