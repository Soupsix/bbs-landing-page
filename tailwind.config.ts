import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Khai báo để Tailwind quét class trong components
  ],
  theme: {
    extend: {
      colors: {
        'bbs-red': '#d81e25',   // Màu đỏ thương hiệu mới
        'bbs-blue': '#27abde',  // Màu xanh thương hiệu mới
        'deep-navy': '#181d26', // Màu text chính
        'border-gray': '#e0e2e6',
      },
      borderRadius: {
        'button': '12px',
        'card': '16px',
      },
    },
  },
  plugins: [],
};

export default config;