/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        // "./app/**/*.{js,ts,jsx,tsx,mdx}",
        // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        // "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#ffc727",
                    secondary: "#030712",
                    accent: "#11596f",
                    "base-100": "#030712",
                    neutral: "#2a323c",
                    info: "#0369a1",
                    success: "#15803d",
                    warning: "#d97706",
                    error: "#dc2626",
                },
            },
        ],
        darkTheme: "dark", // name of one of the included themes for dark mode
        base: true, // applies background color and foreground color for root element by default
        styled: true, // include daisyUI colors and design decisions for all components
        utils: true, // adds responsive and modifier utility classes
        rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
        prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
        logs: true,
    },
};
