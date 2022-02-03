export type Options = {
  method?: string;
  headers?: Record<string, string>;
  data?: Record<string, unknown>;
  timeout?: number;
};

export type Listener = <T>(...args: T[]) => void;

export type Props = {
  [key: string]: unknown;
  events?: {
    [key: string]: (e: Event) => void;
  }
  classNames?: string[];
  href?: string;
  type?: string;
  id?: string;
  modificator?: string;
};
