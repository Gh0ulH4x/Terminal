interface FileSystem {
  [key: string]: any;
}

const fileSystem: FileSystem = {
  '/': {
    'home': {
      'user': {
        'documents': {
          'hello.txt': 'Hello, World!\nThis is a sample text file.',
          'notes.md': '# My Notes\n\nImportant things to remember:\n1. Learn TypeScript\n2. Practice React',
          'about.txt': 'Hi, I\'m a software developer passionate about creating innovative solutions.\nI specialize in web development, particularly in React, TypeScript, and Node.js.\nI love learning new technologies and contributing to open-source projects.',
          'contact.txt': 'Email: developer@example.com\nGitHub: github.com/developer\nLinkedIn: linkedin.com/in/developer\nWebsite: www.developer.com',
          'projects.txt': '1. Gh0ulH4x - A web-based terminal interface\n2. TaskManager - A React-based project management tool\n3. ChatApp - Real-time messaging application\n4. Portfolio - Personal portfolio website\n5. BlogEngine - Custom blogging platform',
          'discord.txt': 'Join our developer community on Discord!\nServer: Developer Hub\nInvite Link: discord.gg/devhub\nChannels:\n- #general\n- #help\n- #projects\n- #announcements'
        },
        'pictures': {}
      }
    }
  }
};

function getDirectoryContents(path: string): string[] {
  let current = fileSystem;
  const parts = path.split('/').filter(Boolean);
  
  for (const part of parts) {
    current = current[part];
  }
  
  return Object.keys(current);
}

function formatLsOutput(files: string[]): string {
  // Sort files alphabetically
  const sortedFiles = [...files].sort((a, b) => a.localeCompare(b));
  
  // Calculate the maximum length for proper spacing
  const maxLength = Math.max(...sortedFiles.map(f => f.length));
  const columns = Math.floor(80 / (maxLength + 2)); // 80 is typical terminal width
  
  let output = '';
  for (let i = 0; i < sortedFiles.length; i++) {
    const file = sortedFiles[i];
    output += file.padEnd(maxLength + 2); // Add 2 spaces between files
    
    if ((i + 1) % columns === 0) {
      output += '\n';
    }
  }
  
  return output.trim();
}

function getFileContent(path: string): string {
  let current = fileSystem;
  const parts = path.split('/').filter(Boolean);
  const fileName = parts.pop();
  
  for (const part of parts) {
    current = current[part];
  }
  
  if (fileName && current[fileName]) {
    return current[fileName];
  } else {
    throw new Error('File not found');
  }
}

export const commands = {
  help: {
    name: 'help',
    description: 'Display available commands',
    execute: () => `Available commands:
  help     - Display this help message
  ls       - List directory contents
  pwd      - Print working directory
  cat      - Display file contents
  clear    - Clear the terminal
  echo     - Display a message
  whoami   - Display current user`
  },
  
  ls: {
    name: 'ls',
    description: 'List directory contents',
    execute: (args: string[], currentDir: string) => {
      try {
        const contents = getDirectoryContents(currentDir);
        return formatLsOutput(contents);
      } catch {
        return 'ls: cannot access directory';
      }
    }
  },
  
  pwd: {
    name: 'pwd',
    description: 'Print working directory',
    execute: (args: string[], currentDir: string) => currentDir
  },
  
  cat: {
    name: 'cat',
    description: 'Display file contents',
    execute: (args: string[], currentDir: string) => {
      if (args.length === 0) return 'cat: missing file operand';
      try {
        return getFileContent(currentDir + '/' + args[0]);
      } catch {
        return `cat: ${args[0]}: No such file`;
      }
    }
  },
  
  clear: {
    name: 'clear',
    description: 'Clear the terminal',
    execute: () => ''
  },
  
  echo: {
    name: 'echo',
    description: 'Display a message',
    execute: (args: string[]) => args.join(' ')
  },
  
  whoami: {
    name: 'whoami',
    description: 'Display current user',
    execute: () => 'user'
  }
};