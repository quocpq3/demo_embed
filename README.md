# Chatbot Embed Widget

Một widget chatbot có thể nhúng vào bất kỳ trang web nào, được xây dựng bằng React + TypeScript + Vite.

## Tính năng

- 💬 Chatbot với giao diện thân thiện
- 🎨 Thiết kế responsive với Tailwind CSS
- 🔧 Dễ dàng nhúng vào trang web
- ⚡ Performance tối ưu với Vite
- 🛡️ Shadow DOM isolation

## Cách sử dụng

### 1. Build project

```bash
npm install
npm run build
```

### 2. Upload files

Upload file `chatbot.js` từ thư mục `dist/` lên host của bạn.

### 3. Nhúng vào trang web

Thêm code sau vào cuối thẻ `<body>` của trang HTML:

```html
<script src="path/to/chatbot.js"></script>
```

CSS đã được tích hợp trong script, không cần load riêng.

### 4. Demo

Mở file `demo.html` trong browser để xem demo hoạt động.

## Cấu trúc project

```
src/
├── main.tsx          # Entry point, tự động khởi tạo chatbot
├── App.tsx           # Component chính
├── components/
│   └── Chatbox.tsx   # Component chatbox
├── hooks/
│   └── useChat.ts    # Logic xử lý chat
└── index.css         # Global styles + Tailwind
```

## Tùy chỉnh

### Thay đổi API

Trong `src/hooks/useChat.ts`, thay thế fake API bằng API thật của bạn:

```typescript
const sendMessage = async (text: string) => {
  // Thay thế bằng API call thực
  const response = await fetch("/api/chat", {
    method: "POST",
    body: JSON.stringify({ message: text }),
  });
  const data = await response.json();
  // ...
};
```

### Tùy chỉnh giao diện

Sửa đổi `src/components/Chatbox.tsx` và `src/index.css` để thay đổi giao diện.

## Development

```bash
npm run dev      # Chạy dev server
npm run build    # Build production
npm run preview  # Preview build
```

## License

MIT
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
globalIgnores(['dist']),
{
files: ['**/*.{ts,tsx}'],
extends: [
// Other configs...
// Enable lint rules for React
reactX.configs['recommended-typescript'],
// Enable lint rules for React DOM
reactDom.configs.recommended,
],
languageOptions: {
parserOptions: {
project: ['./tsconfig.node.json', './tsconfig.app.json'],
tsconfigRootDir: import.meta.dirname,
},
// other options...
},
},
])

```

```
