declare type Component<P = {}> = React.FC<P>;

declare type State<S = any> = [S, React.Dispatch<React.SetStateAction<S>>];

declare type Node = React.ReactNode;

interface ContextProviderProps {
  children: React.ReactNode;
}

interface SessionService {
  destroy: () => void;
  create: () => void;
}

declare type dialogType = "alert" | "confirm" | "prompt";

interface Dialog<T = any> {
  type: dialogType;
  text: string;
  resolve: (params: T) => void;
}

interface LayoutContext {
  dialogState: State<Dialog>;
}

declare type User = {
  id: string;
  name: string;
};

interface UserContext {
  isLoginIn: boolean;
  user: User;
  signIn: (user: User, token: string, rememberMe: boolean) => void;
  logout: () => void;
}

declare type CustomDate = Date | string;

declare type Size = "xs" | "sm" | "md" | "lg" | "xl";

type InputType =
  | "text"
  | "email"
  | "select"
  | "file"
  | "radio"
  | "checkbox"
  | "textarea"
  | "button"
  | "reset"
  | "submit"
  | "date"
  | "datetime-local"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "range"
  | "search"
  | "tel"
  | "url"
  | "week"
  | "password"
  | "datetime"
  | "time"
  | "color";

declare type TailwindcssGradiant = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

declare type TailwindcssColors =
  | "slate"
  | "gray"
  | "zinc"
  | "neutral"
  | "stone"
  | "red"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink"
  | "rose";
