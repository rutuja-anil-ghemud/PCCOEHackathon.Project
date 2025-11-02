const chatlog = document.getElementById('chatlog');
const inputMessage = document.getElementById('inputMessage');
const sendButton = document.getElementById('sendButton');

// Basic bot response logic
function getBotResponse(message) {
  message = message.toLowerCase();

  // Crop recommendation queries
  if(message.includes('which crop') || message.includes('what crop') || message.includes('best crop')) {
    if(message.includes('flood')) {
      return "During floods, consider planting rice, water chestnut, or other water-tolerant crops.";
    }
    else if(message.includes('drought')) {
      return "During drought, millets, sorghum, and pigeon peas are good choices due to their drought resistance.";
    }
    else {
      return "Please specify whether you're asking about flood or drought conditions.";
    }
  }

  // Precautions queries
  if(message.includes('precautions') || message.includes('prepare') || message.includes('protect')) {
    if(message.includes('flood')) {
      return "Precautions during floods: Use raised beds, ensure proper drainage, and use flood-resistant crop varieties.";
    }
    else if(message.includes('drought')) {
      return "Precautions during drought: Mulch your soil, use drip irrigation, and practice rainwater harvesting.";
    }
    else {
      return "Please specify if your question is about flood or drought precautions.";
    }
  }

  // Greetings
  if(message.includes('hello') || message.includes('hi')) {
    return "Hello! How can I assist you with flood and drought farming advice today?";
  }

  // Fallback
  return "Sorry, I didn't understand that. Can you please ask about crops or precautions related to flood or drought?";
}

function appendMessage(text, sender) {
  const div = document.createElement('div');
  div.classList.add('message', sender);
  const span = document.createElement('span');
  span.classList.add('text');
  span.textContent = text;
  div.appendChild(span);
  chatlog.appendChild(div);
  chatlog.scrollTop = chatlog.scrollHeight;
}

sendButton.addEventListener('click', () => {
  const msg = inputMessage.value.trim();
  if(msg === '') return;
  appendMessage(msg, 'user');
  inputMessage.value = '';
  setTimeout(() => {
    const botReply = getBotResponse(msg);
    appendMessage(botReply, 'bot');
  }, 500);
});

inputMessage.addEventListener('keydown', (event) => {
  if(event.key === 'Enter') {
    sendButton.click();
  }
});