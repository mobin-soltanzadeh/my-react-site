/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    // content: ["./{src, public}/*.{js, html}"],
    darkMode: "class",
    theme: {
        screens: {
        "sm": "640px",
        "md": "768px",
        "base": "1024px",
        "lg": "1174px",
        "xl": "1350px",
        "2xl": "1536px",
        },
        extend: {
        fontFamily: {
            "adlery-a": "Adlery-a",
            "adlery-b": "Adlery-b",
            "adlery-c": "Adlery-c",
            "mangiola": "Mangiola",
            "alegreya": "Alegreya",
            "vazir-extraLight" : "Vazir1",
            "vazir-light" : "Vazir2",
            "vazir-medium" : "Vazir3",
            "shabnam" : "Shabnam1",
            "shabnam-light" : "Shabnam2",
            "shabnam-medium" : "Shabnam3",
            "shabnam-thin" : "Shabnam4",
        }
        },
    },
    plugins: [
        function ({ addVariant }) {
            addVariant('child', '& > *');
            addVariant('child-hover', '& > *:hover');
        }
    ],
}