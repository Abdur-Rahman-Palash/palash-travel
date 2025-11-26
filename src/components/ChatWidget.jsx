import React, { useState, useRef, useEffect } from 'react';

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hello! How can we help you today?' },
  ]);
  const [input, setInput] = useState('');
  const endRef = useRef(null);

  useEffect(() => {
    if (open) endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  const sendMessage = (e) => {
    e?.preventDefault();
    const txt = input.trim();
    if (!txt) return;
    setMessages((prev) => [...prev, { from: 'user', text: txt }]);
    setInput('');

    // simple bot reply simulation
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: 'bot', text: "Thanks for your message — our team will get back shortly." },
      ]);
    }, 700);
  };

  return (
    <div className="fixed right-6 bottom-6 z-50">
      {open ? (
        <div className="w-80 md:w-96 h-96 bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden animate-chatPopup">
          <div className="flex items-center justify-between px-4 py-3 bg-blue-600 text-white">
            <div className="font-bold">Live Chat</div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setOpen(false)}
                className="text-sm bg-white/10 px-3 py-1 rounded-md hover:bg-white/20"
              >
                Minimize
              </button>
            </div>
          </div>

          <div className="flex-1 p-3 overflow-auto bg-gray-50 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={m.from === 'user' ? 'flex justify-end' : 'flex justify-start'}>
                <div
                  className={`inline-block px-3 py-2 rounded-lg max-w-[80%] ${
                    m.from === 'user' ? 'bg-blue-600 text-white' : 'bg-white border'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>

          <form onSubmit={sendMessage} className="p-3 bg-white border-t flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 px-3 py-2 border rounded-lg focus:outline-none"
            />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold">Send</button>
          </form>
        </div>
      ) : (
        <div className="flex flex-col items-end">
          <div className="mb-2 bg-white px-3 py-1 rounded-full text-sm font-medium shadow-sm flex items-center gap-2 animate-chatEntrance">
            <span className="h-2 w-2 bg-green-400 rounded-full ring-2 ring-white shadow-sm" />
            <span className="text-gray-700">We're Online</span>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-3 px-4 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:scale-105 transition-transform animate-chatEntrance"
            aria-label="Open chat"
          >
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H7l-5 3V5z" />
              </svg>
              <span className="hidden sm:inline-block font-semibold text-sm tracking-wide">Lets Talk</span>
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
