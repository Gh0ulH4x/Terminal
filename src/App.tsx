import React, { useState, useRef, useEffect } from "react";
import { Terminal, User, Github, Linkedin, Mail, FileText, Instagram, MessageSquare, Wifi, Calendar, Clock, Skull, Terminal as Terminal2, Bug, Shield } from "lucide-react";
import { FaDiscord, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { CommandInput } from "./components/CommandInput";
import { CommandOutput } from "./components/CommandOutput";

function App() {
  const [history, setHistory] = useState<
    Array<{ command: string; output: JSX.Element | string }>
  >([]);
  const [ipAddress, setIpAddress] = useState<string>("Loading...");
  const [matrixActive, setMatrixActive] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const matrixRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => setIpAddress(data.ip))
      .catch(() => setIpAddress("Unknown"));
  }, []);



  const commands = {
    ls: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <span className="text-emerald-400">about.txt</span>
        <span className="text-emerald-400">projects.txt</span>
        <span className="text-emerald-400">contact.txt</span>
        <span className="text-emerald-400">resources.txt</span>
        <span className="text-emerald-400">discord.txt</span>
      </div>
    ),
    pwd: (
      <span className="text-emerald-400">/home/gh0ulh4x</span>
    ),
    date: (
      <div className="flex items-center space-x-2 text-emerald-400">
        <Calendar className="w-4 h-4" />
        <span>{new Date().toLocaleDateString()}</span>
        <Clock className="w-4 h-4 ml-4" />
        <span>{new Date().toLocaleTimeString()}</span>
      </div>
    ),
    uname: (
      <span className="text-emerald-400">Gh0ulH4x-OS x86_64</span>
    ),
    hostname: (
      <span className="text-emerald-400">gh0ulh4x-terminal</span>
    ),
    uptime: (
      <span className="text-emerald-400">up 1337 days, 13:37</span>
    ),
    hack: (
      <div className="space-y-2 font-mono animate-typing">
        <p className="text-emerald-400 flex items-center gap-2">
          <Terminal2 className="w-4 h-4 animate-pulse" />
          [*] Initializing hack sequence...
        </p>
        <p className="text-emerald-400 flex items-center gap-2">
          <Bug className="w-4 h-4 animate-bounce" />
          [*] Scanning target systems...
        </p>
        <p className="text-emerald-400 flex items-center gap-2">
          <Shield className="w-4 h-4 animate-spin" />
          [+] Vulnerabilities detected!
        </p>
        <p className="text-emerald-400 flex items-center gap-2">
          <Skull className="w-4 h-4 animate-pulse" />
          [*] Exploiting security flaws...
        </p>
        <p className="text-emerald-400">[+] Access granted!</p>
        <p className="text-red-400 animate-bounce">[!] Just kidding! This is a demo command 😉</p>
      </div>
    ),
    matrix: (
      <div className="space-y-1 font-mono animate-glitch">
        <p className="text-emerald-400 animate-neon">Wake up, Neo...</p>
        <p className="text-emerald-400 animate-neon">The Matrix has you...</p>
        <p className="text-emerald-400 animate-neon">Follow the white rabbit.</p>
        <p className="text-emerald-400 animate-neon">Knock, knock, Neo.</p>
      </div>
    ),
    nmap: (
      <div className="space-y-1 font-mono animate-typing">
        <p className="text-emerald-400">Starting Nmap 7.94 ( https://nmap.org )</p>
        <p className="text-emerald-400">Scanning target [===&gt;....] 30%</p>
        <p className="text-emerald-400">Discovered open ports:</p>
        <p className="text-emerald-400">22/tcp open ssh</p>
        <p className="text-emerald-400">80/tcp open http</p>
        <p className="text-emerald-400">443/tcp open https</p>
        <p className="text-red-400">Note: This is a simulated scan for demo purposes</p>
      </div>
    ),
    neofetch: (
      <div className="grid grid-cols-2 gap-4 font-mono text-emerald-400">
        <div className="ascii-art animate-glitch">
          <pre className="text-xs">
            {`
                  ******       ******
                **      **   **      **
              **  0101   **  **   1010  **
             **  010101  ** **  101010  **
            **   01010101  ***  10101010  **
            **   0101010101 **  101010101 **
            **   1010101010     010101010 **
              **   10101010     10101010 **
              **    1010         0101  **
                **          01       **
                  **               **
                    **           **
                      **       **
                        **   **
                           **

            `}
          </pre>
        </div>
        <div className="system-info">
          <p><strong>User:</strong> gh0ul</p>
          <p><strong>System:</strong> gh0ulH4x-PC</p>
          <p>OS: Gh0ulH4x OS</p>
          <p>Kernel: 5.13.37-gh0ul</p>
          <p>Shell: ZSH 5.8</p>
          <p>Terminal: Gh0ulH4x-terminal</p>
          <p>CPU: Cyber Quantum i9-9000X</p>
          <p>Memory: 1337 MB / 16384 MB</p>
          <p>Uptime: 1337 days, 13:37</p>
          <p>
            <div className="flex items-center space-x-2 text-emerald-400">
              <Calendar className="w-4 h-4" />
              <span>{new Date().toLocaleDateString()}</span>
              <Clock className="w-4 h-4 ml-4" />
              <span>{new Date().toLocaleTimeString()}</span>
            </div>
          </p>
          <p>..:.-..:---:...-:.:-.--:---:..-</p>
        </div>
      </div>
    ),

    whoami: (
      <div className="grid grid-cols-5 gap-4 font-mono text-emerald-400">
        <div className="flex-shrink-0">
          <img
            src="./image.png" // Replace with your image URL
            alt="Gautam aka Gh0ulH4x"
            className="w-40 h-40 rounded-full" // Circular image and centered
          />
        </div>
        <div class="items-center mt-8 text-xl font-bold">
        <p><strong>Name: root </strong> </p>
        <p> <strong>system: gh0ulH4x </strong> </p>
        
        <p> </p>
        </div>
      </div>
    ),

    "cat contact.txt": (
      <div className="space-y-2">
        <p>📫 Connect with me:</p>
        <ul className="space-y-1 list-none"> {/* Removed the list bullets */}
          <li>
            <a
              href="discord://-/users/718430734443872256"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 flex items-center space-x-2"
            >
              <FaDiscord className="text-blue-400" /> {/* Discord icon */}
              <span>Discord: Gh0ulH4x</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/gh0ulh4x"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 flex items-center space-x-2"
            >
              <FaLinkedin className="text-blue-400" /> {/* LinkedIn icon */}
              <span>LinkedIn: linkedin.com/in/Gh0ulH4x</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/gh0ulh4x"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 flex items-center space-x-2"
            >
              <FaInstagram className="text-pink-400" /> {/* Instagram icon */}
              <span>Instagram: Instagram.com/Gh0ulH4x</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/gh0ulh4x"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 flex items-center space-x-2"
            >
              <FaGithub className="text-gray-400" /> {/* GitHub icon */}
              <span>GitHub: github.com/Gh0ulH4x</span>
            </a>
          </li>
        </ul>
      </div>),

    "cat discord.txt": (
      <div className="space-y-4 p-4 bg-gray-900 text-white rounded-lg shadow-lg max-w-md mx-auto">
        {/* Discord Logo */}
        <div className="flex items-center space-x-3">
          <FaDiscord className="w-12 h-12 text-blue-400" />
          <h2 className="text-2xl font-bold text-purple-400">Join Our Discord Community</h2>
        </div>

        {/* Community Invitation */}
        <p className="text-sm text-gray-300">
          Welcome to <strong>Red Raves</strong>! 🌐 Whether you're passionate about offensive security, red teaming, or just
          diving into the fascinating world of cybersecurity, this is your place to learn, connect, and grow.
          Engage in exciting discussions and build your expertise alongside a like-minded community.
        </p>

        {/* Personal Discord */}
        <div className="mt-4">
          <a
            href="discord://-/users/718430734443872256"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-purple-500 transition"
          >
            🤝 Connect with me: Gh0ulH4x
          </a>
        </div>

        {/* Call to Action */}
        <div className="mt-4">
          <a
            href="https://discord.gg/u8ANjTQq"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-purple-500 transition"
          >
            🔗 Join Red Raves
          </a>
        </div>
        <div>
          <a
            href="https://discord.com/invite/qc43TxvWHC"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-purple-500 transition"
          >
            🔗 Join Crimson Command Centre
          </a>
        </div>

        {/* Highlights */}
        <ul className="mt-4 space-y-2 text-sm text-gray-300">
          <li>⚡ Learn from experienced cybersecurity professionals.</li>
          <li>🎯 Participate in exclusive challenges and events.</li>
          <li>💬 Network with a vibrant and supportive community.</li>
        </ul>

        {/* Footer */}
        <div className="mt-4 text-sm text-gray-400">
          Join us today and start your journey into the thrilling world of cybersecurity! 🚀
        </div>
      </div>

    ),

    "cat about.txt": (
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img
            src="./image.png" // Replace with your image URL
            alt="Gautam aka Gh0ulH4x"
            className="w-38 h-40 square-full" // Adjust size and make it circular
          />
        </div>
        <div className="space-y-2">
          <p>
            Hey there! 👋 I'm <strong>Gautam aka Gh0ulH4x</strong>, a passionate cybersecurity enthusiast with a
            focus on offensive security, red teaming, and OSINT.
          </p>
          <p>
            I'm good at OSINT, creating security tools, and exploring penetration
            testing. I've also created some tools to enhance security practices.
          </p>
          <p>
            When I'm not working on cybersecurity projects, I enjoy diving deeper
            into OSINT, constantly learning new skills, and exploring new areas of
            cybersecurity.
          </p>
          <p className="text-emerald-300">...:---:--:.:...:.:-.-.:.-.:.:-:...:.-..:..:.:....:..:-..:-..:.:-.:-:....:.:.-.:.</p>
        </div>
      </div>),

    // ... (previous commands remain the same)
    help: (
      <div className="space-y-2">
        <p className="text-emerald-400 font-bold">Available commands:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div>
            <p className="text-emerald-400 font-bold">System Commands:</p>
            <ul className="list-disc list-inside">
              <li>ls - List directory contents</li>
              <li>pwd - Print working directory</li>
              <li>date - Display current date and time</li>
              <li>uname - Print system information</li>
              <li>hostname - Show system hostname</li>
              <li>uptime - Show system uptime</li>
              <li>neofetch - System information</li>
              <li>clear - Clear the terminal</li>
            </ul>
          </div>
          <div>
            <p className="text-emerald-400 font-bold">Cool Animations:</p>
            <ul className="list-disc list-inside">
              <li>hack - Run a simulated hack sequence</li>
              <li>matrix - Show Matrix quotes</li>
              <li>nmap - Simulated port scanner</li>
            </ul>
            
          </div>
          <div>
            <p className="text-emerald-400 font-bold">Information:</p>
            <ul className="list-disc list-inside">
              <li>cat about.txt - Learn about me</li>
              <li>cat projects.txt - View my projects</li>
              <li>cat contact.txt - Get my contact info</li>
              <li>cat discord.txt - Join our Discord</li>
              <li>cat resources.txt - Resources</li>
              <li>whoami - Display current user</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  };

  useEffect(() => {
    setHistory([
      {
        command: "",
        output: (
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Terminal className="w-6 h-6 text-emerald-400 animate-pulse" />
              <h1 className="text-xl font-bold text-emerald-400 animate-neon">Welcome to Gh0ulH4x Terminal</h1>
            </div>
            <p className="text-emerald-300">Type 'help' to see available commands.</p>
          </div>
        ),
      },
    ]);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (command: string) => {
    const normalizedCommand = command.trim().toLowerCase();

    if (normalizedCommand === "clear") {
      setHistory([]);
      return;
    }

    const output =
      commands[normalizedCommand as keyof typeof commands] ||
      `Command not found: ${command}`;

    setHistory((prev) => [...prev, { command, output }]);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-[#1a1a2e] rounded-lg shadow-2xl overflow-hidden border border-emerald-900">
        <div className="bg-[#151525] p-3 flex items-center space-x-2 border-b border-emerald-900">
          <div className="flex space-x-2">
            <div className="w-4 h-4 rounded-full bg-red-500 opacity-75 hover:opacity-100 transition-opacity"></div>
            <div className="w-4 h-4 rounded-full bg-yellow-500 opacity-75 hover:opacity-100 transition-opacity"></div>
            <div className="w-4 h-4 rounded-full bg-green-500 opacity-75 hover:opacity-100 transition-opacity"></div>
          </div>
          <div className="flex-1 text-center text-xl text-emerald-300">
            <strong>Terminal</strong>
          </div>
          <div className="flex-2 text-right text-sm text-emerald-400">
            <Wifi className="w-4 h-4" />
            <span>{ipAddress}</span>
          </div>
        </div>

        <div className="bg-[#0f0f1a] p-4 h-[600px] overflow-y-auto hide-scrollbar">
          <div className="space-y-4">
            <div className="space-y-2">
              {history.map((entry, index) => (
                <CommandOutput
                  key={index}
                  command={entry.command}
                  output={entry.output}
                />
              ))}
            </div>
            <CommandInput onCommand={handleCommand} />
            <div ref={bottomRef} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
