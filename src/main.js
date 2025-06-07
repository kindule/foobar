// 主应用程序
class HelloWorldApp {
    constructor() {
        this.init();
    }

    init() {
        this.render();
        this.addEventListeners();
    }

    render() {
        const app = document.getElementById('app');
        app.innerHTML = `
            <div class="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <div class="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-md mx-4">
                    <h1 class="text-4xl font-bold text-gray-800 mb-4">
                        Hello World! 👋
                    </h1>
                    <p class="text-gray-600 mb-6">
                        欢迎来到我的第一个 Vite + Tailwind CSS 项目！
                    </p>
                    <div class="space-y-4">
                        <button id="greetBtn" class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105">
                            点击问候
                        </button>
                        <div id="greetingOutput" class="p-4 bg-gray-100 rounded-lg hidden">
                            <p class="text-green-600 font-medium"></p>
                        </div>
                        <div class="flex justify-center space-x-4 mt-6">
                            <div class="text-center">
                                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                                    ⚡
                                </div>
                                <span class="text-sm text-gray-600">Vite</span>
                            </div>
                            <div class="text-center">
                                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                                    🎨
                                </div>
                                <span class="text-sm text-gray-600">Tailwind</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="absolute top-4 right-4 text-white text-sm opacity-75">
                    当前时间: <span id="currentTime"></span>
                </div>
            </div>
        `;
    }

    addEventListeners() {
        // 问候按钮事件
        const greetBtn = document.getElementById('greetBtn');
        const greetingOutput = document.getElementById('greetingOutput');
        
        greetBtn.addEventListener('click', () => {
            const greetings = [
                '你好，世界！🌍',
                'Hello, World! 🌎',
                'Bonjour le monde! 🌏',
                'Hola mundo! 🌍',
                '¡Hola mundo! 🌎',
                'Ciao mondo! 🌏'
            ];
            
            const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
            greetingOutput.querySelector('p').textContent = randomGreeting;
            greetingOutput.classList.remove('hidden');
            
            // 添加动画效果
            greetingOutput.style.transform = 'scale(0)';
            greetingOutput.style.transition = 'transform 0.3s ease';
            setTimeout(() => {
                greetingOutput.style.transform = 'scale(1)';
            }, 100);
        });

        // 更新时间
        this.updateTime();
        setInterval(() => this.updateTime(), 1000);
    }

    updateTime() {
        const timeElement = document.getElementById('currentTime');
        if (timeElement) {
            const now = new Date();
            timeElement.textContent = now.toLocaleString('zh-CN');
        }
    }
}

// 启动应用
document.addEventListener('DOMContentLoaded', () => {
    new HelloWorldApp();
});

console.log('Hello World 项目已启动! 🚀'); 