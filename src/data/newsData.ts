import { NewsCategory, NewsItem } from "@/types/news";

export const newsData: NewsItem[] = [
  {
    id: "tech-1",
    category: "TECNOLOGIA",
    title: "React Native lança nova versão",
    description: "A nova versão 0.xx traz melhorias de performance...",
    content:
      "A nova versão do React Native traz melhorias significativas na nova arquitetura (Fabric e TurboModules), tempo de inicialização reduzido e suporte aprimorado aos recursos modernos do ecossistema React. Os desenvolvedores agora contam com compilações mais velozes e melhor interoperabilidade entre módulos nativos.",
  },
  {
    id: "tech-2",
    category: "TECNOLOGIA",
    title: "IA generativa bate recordes",
    description: "Modelos de linguagem estão cada vez mais avançados...",
    content:
      "Modelos de inteligência artificial generativa continuam quebrando recordes de adoção e eficiência em tarefas complexas de desenvolvimento, automação e raciocínio multimodal. Novas arquiteturas de modelos leves possibilitam execuções locais eficientes diretamente em dispositivos móveis.",
  },
  {
    id: "tech-3",
    category: "TECNOLOGIA",
    title: "Expo SDK 52 é lançado",
    description:
      "Novas APIs, melhorias no Dev Client e correções de estabilidade para projetos mobile.",
    content:
      "A mais recente versão do Expo traz suporte aprimorado ao React 19, melhorias substanciais no Expo Router, integração simplificada com bibliotecas nativas de ponta e novas ferramentas de diagnóstico para acelerar a criação de aplicações mobile de alto desempenho.",
  },
  {
    id: "tech-4",
    category: "TECNOLOGIA",
    title: "TypeScript 5.x melhora performance",
    description:
      "Atualizações no compilador reduzem tempos de build e melhoram suporte a decorators.",
    content:
      "Com as otimizações contínuas introduzidas na versão 5.x, o compilador TypeScript oferece checagem estática de tipos mais veloz, menor consumo de memória em monorepositórios e suporte padronizado aos Decorators do ECMAScript.",
  },
  {
    id: "tech-5",
    category: "TECNOLOGIA",
    title: "Hermes recebe otimizações",
    description:
      "Engine JavaScript do React Native ganha melhor gerenciamento de memória e start mais rápido.",
    content:
      "O motor de execução JavaScript Hermes recebeu atualizações importantes no coletor de lixo (Garbage Collector) e no compilador bytecode, diminuindo drasticamente a pegada de memória RAM e acelerando o tempo de abertura dos aplicativos tanto no Android quanto no iOS.",
  },
  {
    id: "sport-1",
    category: "ESPORTES",
    title: "Final do campeonato é definida",
    description: "Os times X e Y se enfrentarão na grande final...",
    content:
      "Após semifinais eletrizantes, os times X e Y garantiram suas vagas e se enfrentarão na grande final do campeonato nacional no próximo domingo. A equipe X venceu de virada com um gol nos acréscimos, enquanto o time Y dominou seu adversário com uma vitória por 3 a 0. A expectativa é de um jogo histórico no estádio Maracanã.",
  },
  {
    id: "sport-2",
    category: "ESPORTES",
    title: "Atleta quebra recorde mundial",
    description:
      "Na modalidade de corrida, um novo recorde foi estabelecido...",
    content:
      "Com uma marca impressionante na prova de velocidade, o atleta superou o recorde mundial anterior em centésimos de segundo e consagrou-se como o competidor mais rápido da história da modalidade, recebendo aplausos de pé de todo o público presente.",
  },
  {
    id: "sport-3",
    category: "ESPORTES",
    title: "Clássico termina empatado",
    description:
      "Em jogo equilibrado, equipes dividem pontos após viradas nos minutos finais.",
    content:
      "Em um clássico repleto de emoções e arquibancadas lotadas, as duas equipes tradicionais duelaram intensamente até o apito final. O empate com gols no final garantiu um ponto valioso para cada lado na briga pelas primeiras colocações da tabela.",
  },
  {
    id: "sport-4",
    category: "ESPORTES",
    title: "Seleção confirma amistosos",
    description:
      "Jogos de preparação visam dar ritmo a jovens promessas antes do torneio continental.",
    content:
      "A comissão técnica confirmou dois confrontos internacionais preparatórios no exterior para o próximo mês. Os jogos têm como objetivo testar variações táticas e conceder minutagem e experiência aos jovens convocados antes da competição oficial.",
  },
  {
    id: "sport-5",
    category: "ESPORTES",
    title: "Maratonista surpreende",
    description:
      "Atleta vence prova de rua e estabelece melhor marca pessoal em percurso desafiador.",
    content:
      "Mesmo diante de condições climáticas adversas e subidas íngremes ao longo do trajeto, o corredor manteve uma cadência perfeita e desferiu um ataque decisivo nos últimos dois quilômetros, garantindo o título e quebrando sua própria marca pessoal.",
  },
];

export function getNewsByCategory(category: NewsCategory): NewsItem[] {
  return newsData.filter((item) => item.category === category);
}

export function getNewsById(id: string): NewsItem | undefined {
  return newsData.find((item) => item.id === id);
}
