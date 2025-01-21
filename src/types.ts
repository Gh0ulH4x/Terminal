export interface Command {
  name: string;
  description: string;
  execute: (args: string[]) => string;
}

export interface TerminalHistory {
  command: string;
  output: string;
}

export interface TerminalState {
  history: TerminalHistory[];
  currentDirectory: string;
}