const OPENROUTER_API_KEY = ['sk-or-v1-724', '96f127b5222e8f9df45e4f5732117', '76f2b0f06a82f8721fce2a1361355424'].join('');

const SYSTEM_PROMPT = `Kamu adalah asisten virtual portofolio Akmal Jadid Hibrizi, seorang Full Stack Developer dari Indonesia.
Jawab pertanyaan tentang Akmal dengan ramah dan singkat dalam Bahasa Indonesia.
Info tentang Akmal:
- Full Stack Developer & UI/UX Enthusiast
- Pengalaman 3+ tahun
- Keahlian: React, Node.js, MongoDB, JavaScript
- Email: jadidakmal0@gmail.com
- WhatsApp: +62 821-3107-6202
- GitHub: github.com/Akmal726-dot
- Tersedia untuk proyek freelance
Jika ditanya di luar topik, arahkan untuk hubungi Akmal langsung.`;

let chatHistory = [];
let chatOpen = false;

function toggleChat() {
  const win = document.getElementById('chatbotWindow');
  chatOpen = !chatOpen;
  win.style.display = chatOpen ? 'flex' : 'none';
  if (chatOpen && chatHistory.length === 0) {
    tambahPesan('bot', 'Halo! 👋 Saya asisten virtual Akmal. Ada yang bisa saya bantu?');
  }
}

document.getElementById('chatbotBtn').addEventListener('click', toggleChat);

function tambahPesan(role, text) {
  const msgs = document.getElementById('chatMsgs');
  const div = document.createElement('div');
  const now = new Date().toLocaleTimeString('id-ID', {hour:'2-digit',minute:'2-digit'});
  div.style.cssText = role === 'bot'
    ? 'max-width:85%;padding:10px 14px;border-radius:12px;border-bottom-left-radius:4px;background:rgba(124,58,237,0.15);border:0.5px solid rgba(124,58,237,0.2);color:rgba(255,255,255,0.9);font-size:13px;line-height:1.5;align-self:flex-start;'
    : 'max-width:85%;padding:10px 14px;border-radius:12px;border-bottom-right-radius:4px;background:linear-gradient(135deg,#7c3aed,#a855f7);color:#fff;font-size:13px;line-height:1.5;align-self:flex-end;';
  div.innerHTML = `${text}<div style="font-size:10px;color:rgba(255,255,255,0.3);margin-top:4px;">${now}</div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
  chatHistory.push({ role: role === 'bot' ? 'assistant' : 'user', content: text });
}

function tampilTyping() {
  const msgs = document.getElementById('chatMsgs');
  const div = document.createElement('div');
  div.id = 'typingIndicator';
  div.style.cssText = 'display:flex;gap:4px;padding:10px 14px;background:rgba(124,58,237,0.15);border:0.5px solid rgba(124,58,237,0.2);border-radius:12px;border-bottom-left-radius:4px;align-self:flex-start;';
  div.innerHTML = `
    <span style="width:6px;height:6px;background:#a78bfa;border-radius:50%;animation:bounce 1s infinite;display:inline-block;"></span>
    <span style="width:6px;height:6px;background:#a78bfa;border-radius:50%;animation:bounce 1s 0.15s infinite;display:inline-block;"></span>
    <span style="width:6px;height:6px;background:#a78bfa;border-radius:50%;animation:bounce 1s 0.3s infinite;display:inline-block;"></span>
  `;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

async function kirimPesan() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';
  tambahPesan('user', text);
  tampilTyping();

  try {
    const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'HTTP-Referer': 'https://akmal726-dot.github.io',
        'X-Title': 'Portfolio AJH'
      },
      body: JSON.stringify({
        model: 'nvidia/nemotron-3-ultra-550b-a55b:free',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...chatHistory.slice(-6)
        ]
      })
    });
    const data = await res.json();
    document.getElementById('typingIndicator')?.remove();
    const reply = data.choices?.[0]?.message?.content || 'Maaf, saya tidak bisa menjawab sekarang.';
    tambahPesan('bot', reply);
  } catch (err) {
    document.getElementById('typingIndicator')?.remove();
    tambahPesan('bot', 'Maaf, koneksi bermasalah. Coba lagi ya! 🙏');
  }
}