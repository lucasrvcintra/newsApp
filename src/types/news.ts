export type NewsCategory = "TECNOLOGIA" | "ESPORTES";

export type NewsItem = {
  id: string;
  category: NewsCategory;
  title: string;
  description: string;
  content: string;
};
