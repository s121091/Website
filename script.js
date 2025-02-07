<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>网站搭建中...</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css">
</head>
<body class="font-sans" style="background-color: #F5F5F5;">
    <!-- 导航栏 -->
    <nav class="fixed top-0 left-0 w-full bg-[#A5A8B7] bg-opacity-90 z-50">
        <div class="container mx-auto flex justify-between items-center p-4">
            <div class="text-xl font-bold" style="color: #333333;">oops</div>
            <ul class="flex space-x-6">
                <li><a href="#home" class="hover:text-[#EEDECD]" style="color: #333333;">首页</a></li>
                <li><a href="#products" class="hover:text-[#EEDECD]" style="color: #333333;">产品</a></li>
                <li><a href="#about" class="hover:text-[#EEDECD]" style="color: #333333;">关于我们</a></li>
            </ul>
        </div>
    </nav>

    <!-- 首页 -->
    <section id="home" class="h-screen flex items-center justify-center" style="background-color: #A5A8B7;">
        <div class="text-center">
            <h1 class="text-6xl font-bold mb-4" style="color: #333333;" id="typing-title"></h1>
            <p class="text-xl mb-8" style="color: #333333;" id="typing-subtitle"></p>
            <a href="#products" class="px-6 py-3 rounded-full text-lg" style="background-color: #EEDECD; color: #333333;">
                查看产品
            </a>
        </div>
    </section>

    <!-- 产品 -->
    <section id="products" class="py-20">
        <div class="container mx-auto">
            <h2 class="text-4xl font-bold text-center mb-12" style="color: #333333;">我们的产品</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                    <img src="assets/images/product1.jpg" alt="产品 1" class="w-full h-64 object-cover rounded-lg">
                    <h3 class="text-2xl font-bold mt-4" style="color: #333333;">产品 1</h3>
                    <p class="text-[#6C7A89]">描述信息</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                    <img src="assets/images/product2.jpg" alt="产品 2" class="w-full h-64 object-cover rounded-lg">
                    <h3 class="text-2xl font-bold mt-4" style="color: #333333;">产品 2</h3>
                    <p class="text-[#6C7A89]">描述信息</p>
                </div>
            </div>
        </div>
    </section>

    <!-- 关于我们 -->
    <section id="about" class="py-20" style="background-color: #EEDECD;">
        <div class="container mx-auto text-center">
            <h2 class="text-4xl font-bold mb-12" style="color: #333333;">关于我们</h2>
            <p class="max-w-2xl mx-auto" style="color: #333333;">
                我们是一家致力于创新的公司，专注于为用户提供最好的产品和服务。
            </p>
        </div>
    </section>

    <!-- 页脚 -->
    <footer class="py-12" style="background-color: #A5A8B7;">
        <div class="container mx-auto text-center">
            <p style="color: #333333;">&copy; 2023 oops. 保留所有权利.</p>
        </div>
    </footer>

    <!-- 引入 JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
    <script src="script.js"></script>
</body>
</html>
