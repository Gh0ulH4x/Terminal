import React, { useState, useRef, useEffect } from 'react';

interface CommandInputProps {
  onCommand: (command: string) => void;
}

export function CommandInput({ onCommand }: CommandInputProps) {
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onCommand(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2">
      <span className="text-emerald-400">root@gh0ulh4x</span>
      <span className="text-emerald-600">#</span>
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 bg-transparent outline-none text-emerald-100 caret-emerald-400 focus:outline-none"
        autoFocus
      />
    </form>
  );
}