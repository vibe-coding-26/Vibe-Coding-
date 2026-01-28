const LOCAL_LLM_URL = "http://127.0.0.1:11434/api/generate";
const MODEL_NAME = "llama3"; 

const componentLibrary = {
    'Greeting': (props) => `<div class="card" style="grid-column: span 2;"><h1>${props.text}</h1></div>`,
    
    'ClockWidget': () => {
        const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        return `<div class="card">
            <h3>Time</h3>
            <div style="font-size: 40px; font-weight: bold;">${time}</div>
        </div>`;
    },

    'WeatherCard': () => `
        <div class="card">
            <h3>Forecast</h3>
            <div style="display:flex; align-items:center; gap:15px;">
                <span style="font-size:36px;">🌤️</span>
                <div>
                    <div style="font-size:24px; font-weight:bold;">72°F</div>
                    <div style="font-size:12px; opacity:0.7;">San Francisco</div>
                </div>
            </div>
        </div>`,

    'BreathingWidget': () => `
        <div class="card" style="grid-row: span 2; justify-content:center; align-items:center;">
            <div style="font-size: 60px; animation: pulse 4s infinite;">🧘</div>
            <div style="margin-top:20px;">Inhale... Exhale...</div>
            <style>@keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.1); } 100% { transform: scale(1); } }</style>
        </div>`,
    
    'QuoteCard': () => `
        <div class="card">
            <h3>Thought</h3>
            <p style="font-style: italic; font-size: 18px; line-height: 1.5;">"Quiet the mind, and the soul will speak."</p>
        </div>`,

    'CheerUpCard': () => {
        const quotes = [
            "You're doing better than you think you are.",
            "This too shall pass. You've got this.",
            "Take a deep breath. It's just a bad day, not a bad life.",
            "You are capable of amazing things.",
            "Small progress is still progress."
        ];
        const quote = quotes[Math.floor(Math.random() * quotes.length)];
        return `<div class="card" style="background: rgba(255,255,255,0.9); border: 2px solid #a5b4fc;">
            <h3 style="color:#6366f1;">A Little Encouragement</h3>
            <p style="font-size: 20px; font-weight: 500; color: #4338ca;">"${quote}"</p>
        </div>`;
    },

    'StockTicker': () => `
        <div class="card">
            <h3>Market Live</h3>
            <div style="display:flex; justify-content:space-between; border-bottom:1px solid #333; padding-bottom:10px;">
                <span>AAPL</span> <span style="color:#00ff41;">+1.24%</span>
            </div>
            <div style="display:flex; justify-content:space-between; padding-top:10px;">
                <span>NVDA</span> <span style="color:#00ff41;">+3.50%</span>
            </div>
        </div>`,

    'MetricsGrid': () => `
        <div class="card" style="grid-column: span 2;">
            <h3>System Status</h3>
            <div style="display:flex; gap:20px; margin-top:10px;">
                <div style="flex:1; background:#111; padding:15px; text-align:center; border:1px solid #333;">
                    <div style="font-size:10px; color:#888;">CPU</div>
                    <div style="color:#00ff41; font-size:20px;">12%</div>
                </div>
                <div style="flex:1; background:#111; padding:15px; text-align:center; border:1px solid #333;">
                    <div style="font-size:10px; color:#888;">RAM</div>
                    <div style="color:#eab308; font-size:20px;">64%</div>
                </div>
            </div>
        </div>`,

    'IdeaPad': () => `
        <div class="card" style="grid-column: span 2;">
            <h3>Sketchpad</h3>
            <textarea style="width:100%; height:80px; background:transparent; border:none; border-bottom:2px dashed #ccc; outline:none; font-family:inherit; font-size:18px;" placeholder="Draw your thoughts..."></textarea>
        </div>`,

    'ColorPalette': () => `
        <div class="card">
            <h3>Palette</h3>
            <div style="display:flex; gap:10px;">
                <div style="width:40px; height:40px; background:#FF6B6B; border-radius:50%;"></div>
                <div style="width:40px; height:40px; background:#4ECDC4; border-radius:50%;"></div>
                <div style="width:40px; height:40px; background:#FFE66D; border-radius:50%;"></div>
                <div style="width:40px; height:40px; background:#1A535C; border-radius:50%;"></div>
            </div>
        </div>`,

    'HackerTerminal': () => `
        <div class="card" style="grid-column: span 2; background: rgba(0,0,0,0.8);">
            <h3>>_ TERMINAL</h3>
            <pre style="color:#00f3ff; font-size:10px;">[ROOT] Bypass initiated...
[NET] Proxy detected. Rerouting...
[SUCCESS] Access Granted.</pre>
        </div>`,

    'CryptoWatch': () => `
        <div class="card">
            <h3>CRYPTO</h3>
            <div style="color:#ff0099; font-size:24px; font-weight:bold;">BTC $94,200</div>
            <div style="color:#00f3ff; font-size:12px;">ATH Incoming...</div>
        </div>`,

    'ForestSound': () => `
        <div class="card">
            <h3>Ambience</h3>
            <div style="font-size:40px;">🌲 🔊</div>
            <div style="font-size:12px; margin-top:5px;">Rainforest Sounds</div>
        </div>`,
    
    'PlantMonitor': () => `
        <div class="card">
            <h3>My Plants</h3>
            <div style="display:flex; justify-content:space-between; margin-bottom:5px;">
                <span>Monstera</span> <span style="color:#1a472a;">💧 Good</span>
            </div>
            <div style="display:flex; justify-content:space-between;">
                <span>Fern</span> <span style="color:#d97706;">⚠️ Water Me</span>
            </div>
        </div>`
};

async function callLocalLLM(userText) {
    try {
        const prompt = `Classify intent: "${userText}".
        Options:
        - ZEN (calm, stress, yoga)
        - BEAST (work, code, data)
        - CREATIVE (art, idea, write)
        - CYBER (hack, future, neon, tech)
        - NATURE (forest, plants, outside, green)
        
        Output ONLY the word.`;

        document.getElementById('app-container').innerHTML = '<div class="card">Thinking...</div>';

        const response = await fetch(LOCAL_LLM_URL, {
            method: 'POST',
            body: JSON.stringify({
                model: MODEL_NAME,
                prompt: prompt,
                stream: false
            })
        });

        if (!response.ok) throw new Error("Local AI Offline");
        const data = await response.json();
        return mapDecisionToConfig(data.response.trim().toUpperCase());

    } catch (e) {
        console.error(e);
        return mapDecisionToConfig("DEFAULT");
    }
}

function mapDecisionToConfig(decision) {
    let mode = "DEFAULT";
    if (decision.includes("ZEN")) mode = "ZEN";
    if (decision.includes("BEAST")) mode = "BEAST";
    if (decision.includes("CREATIVE")) mode = "CREATIVE";
    if (decision.includes("CYBER")) mode = "CYBER";
    if (decision.includes("NATURE")) mode = "NATURE";

    const common = [{ type: 'ClockWidget' }];

    if (mode === 'ZEN') {
        return {
            vibe: 'vibe-zen',
            components: [
                { type: 'Greeting', props: { text: "Exhale." } },
                ...common,
                { type: 'WeatherCard' },
                { type: 'BreathingWidget' },
                { type: 'QuoteCard' },
                { type: 'CheerUpCard' }
            ]
        };
    }
    
    if (mode === 'BEAST') {
        return {
            vibe: 'vibe-beast',
            components: [
                { type: 'Greeting', props: { text: "COMMAND LINE" } },
                { type: 'MetricsGrid' },
                { type: 'StockTicker' },
                { type: 'StockTicker' }
            ]
        };
    }

    if (mode === 'CREATIVE') {
        return {
            vibe: 'vibe-creative',
            components: [
                { type: 'Greeting', props: { text: "Make Art." } },
                { type: 'ColorPalette' },
                { type: 'IdeaPad' },
                { type: 'ClockWidget' }
            ]
        };
    }

    if (mode === 'CYBER') {
        return {
            vibe: 'vibe-cyber',
            components: [
                { type: 'Greeting', props: { text: "NETRUNNER_V1" } },
                { type: 'HackerTerminal' },
                { type: 'CryptoWatch' },
                { type: 'ClockWidget' }
            ]
        };
    }

    if (mode === 'NATURE') {
        return {
            vibe: 'vibe-nature',
            components: [
                { type: 'Greeting', props: { text: "Wilderness." } },
                { type: 'WeatherCard' },
                { type: 'ForestSound' },
                { type: 'PlantMonitor' }
            ]
        };
    }

    return {
        vibe: '',
        components: [
            { type: 'Greeting', props: { text: "Hello." } },
            { type: 'ClockWidget' },
            { type: 'WeatherCard' }
        ]
    };
}

renderDashboard(mapDecisionToConfig("DEFAULT"));

function renderDashboard(config) {
    if (!config) return;
    document.body.className = config.vibe;
    const container = document.getElementById('app-container');
    container.innerHTML = '';
    config.components.forEach(item => {
        const renderFn = componentLibrary[item.type];
        if (renderFn) container.insertAdjacentHTML('beforeend', renderFn(item.props || {}));
    });
}

document.getElementById('user-input').addEventListener('keypress', async function (e) {
    if (e.key === 'Enter') {
        const config = await callLocalLLM(e.target.value);
        renderDashboard(config);
    }
});