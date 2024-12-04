// See the Tailwind configuration guide for advanced usage
// https://tailwindcss.com/docs/configuration

const plugin = require("tailwindcss/plugin")
const fs = require("fs")
const path = require("path")

module.exports = {
  content: [
    "./js/**/*.js",
<<<<<<< HEAD
    "../lib/*_web.ex",
    "../lib/*_web/**/*.*ex"
=======
    "../lib/gist_clone_web.ex",
    "../lib/gist_clone_web/**/*.*ex"
>>>>>>> main
  ],
  theme: {
    extend: {
      colors: {
<<<<<<< HEAD
        emDark: {
          dark: "#010101",
          DEFAULT: "#3C3B3B",
          light: "#828282"
        },
        emPurple: {
          dark: "#631A61",
          DEFAULT: "#A834A5",
          light: "#E88FE5"
        },
        emLavender: {
          dark: "#8C52FF",
          DEFAULT: "#9D74EE",
          light: "#BC9AFF"
        }
      },
      fontFamily: {
        brand: ["WorkSans", "sans-serif"],
      }, 
      fontWeight: {
        regular: "normal",
        bold: "bold"
=======
        brand: "#FD4F00",
>>>>>>> main
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    // Allows prefixing tailwind classes with LiveView classes to add rules
    // only when LiveView classes are applied, for example:
    //
    //     <div class="phx-click-loading:animate-ping">
    //
<<<<<<< HEAD
    plugin(({addVariant}) => addVariant("phx-no-feedback", [".phx-no-feedback&", ".phx-no-feedback &"])),
=======
>>>>>>> main
    plugin(({addVariant}) => addVariant("phx-click-loading", [".phx-click-loading&", ".phx-click-loading &"])),
    plugin(({addVariant}) => addVariant("phx-submit-loading", [".phx-submit-loading&", ".phx-submit-loading &"])),
    plugin(({addVariant}) => addVariant("phx-change-loading", [".phx-change-loading&", ".phx-change-loading &"])),

    // Embeds Heroicons (https://heroicons.com) into your app.css bundle
    // See your `CoreComponents.icon/1` for more information.
    //
    plugin(function({matchComponents, theme}) {
<<<<<<< HEAD
      let iconsDir = path.join(__dirname, "./vendor/heroicons/optimized")
=======
      let iconsDir = path.join(__dirname, "../deps/heroicons/optimized")
>>>>>>> main
      let values = {}
      let icons = [
        ["", "/24/outline"],
        ["-solid", "/24/solid"],
<<<<<<< HEAD
        ["-mini", "/20/solid"]
      ]
      icons.forEach(([suffix, dir]) => {
        fs.readdirSync(path.join(iconsDir, dir)).map(file => {
=======
        ["-mini", "/20/solid"],
        ["-micro", "/16/solid"]
      ]
      icons.forEach(([suffix, dir]) => {
        fs.readdirSync(path.join(iconsDir, dir)).forEach(file => {
>>>>>>> main
          let name = path.basename(file, ".svg") + suffix
          values[name] = {name, fullPath: path.join(iconsDir, dir, file)}
        })
      })
      matchComponents({
        "hero": ({name, fullPath}) => {
          let content = fs.readFileSync(fullPath).toString().replace(/\r?\n|\r/g, "")
<<<<<<< HEAD
=======
          let size = theme("spacing.6")
          if (name.endsWith("-mini")) {
            size = theme("spacing.5")
          } else if (name.endsWith("-micro")) {
            size = theme("spacing.4")
          }
>>>>>>> main
          return {
            [`--hero-${name}`]: `url('data:image/svg+xml;utf8,${content}')`,
            "-webkit-mask": `var(--hero-${name})`,
            "mask": `var(--hero-${name})`,
            "mask-repeat": "no-repeat",
            "background-color": "currentColor",
            "vertical-align": "middle",
            "display": "inline-block",
<<<<<<< HEAD
            "width": theme("spacing.5"),
            "height": theme("spacing.5")
=======
            "width": size,
            "height": size
>>>>>>> main
          }
        }
      }, {values})
    })
  ]
}
