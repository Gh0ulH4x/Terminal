import React from 'react';

interface CommandOutputProps {
  command: string;
  output: JSX.Element | string;
}

export function CommandOutput({ command, output }: CommandOutputProps) {
  return (
    <div className="space-y-1">
      {command && (
        <div className="flex items-center space-x-2">
          <span className="text-emerald-400">root@gh0ulh4x</span>
          <span className="text-emerald-600">#</span>
          <span className="text-emerald-100">{command}</span>
        </div>
      )}
      <div className="text-emerald-100">{output}</div>
    </div>
  );
}