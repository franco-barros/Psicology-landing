export interface Study {
  id: string;
  type: string;
  date: string;
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  cta: string;
  onClick: () => void;
}
