export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}

export interface Operation {
  value?: string | number,
  operator?: '*' | '/' | '-' | '+' | '.' | 'del' | 'reset' | '=';
}
export interface Button {
  label: string;
}

export interface ButtonCalc extends Button {
  operation?: Operation;
  setValue?: React.Dispatch<React.SetStateAction<number>>;
}

export interface InputCalc {
  value: number;
  // handleAdd: (e: React.FormEvent) => void;
}

export interface Theme {
  themeName: 'light' | 'dark'
}

export interface Country {
  name: string,
  image: string,
  capital: string,
  region: string,
  area: string | number
}