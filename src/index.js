import './styles/color.css'
import './styles/index.css'

const emojiList = [
    "– =͟͟͞͞ʕ•̫͡•ʔ=͟͟͞͞ʕ•̫͡•ʔ=͟͟͞͞ʕ•̫͡•ʔ",
    "ʕ•̼͛͡• ʕ-̺͛͡•ʔ •̮͛͡•ʔ",
    "ʕ•̬͡•ʕ•̫͡•♥",
    "ʕ•̫͡•ʔ ʕ-̼͡-ʔ",
    "ʕ•̫͡• ʕ•̫͡•ʔ •̫͡•ʔ",
    "ʕ•̫͡•ོʔ•̫͡•ཻʕ•̫͡•ʔ•͓͡•ʔ",
    "ʕ͙•̫͑͡•ʔͦ ʕͮ•̫ͤ͡•ʔ͙",
    "ʕ·͡ˑ·ཻʔෆ⃛ʕ•̫͡•ོʔ",
    "ʕ•͓͡•ʔ-̫͡-ʕ•̫͡•ʔ",
    "ʕ•̫͡•ʔ ♡ ʕ•̫͡•ʔ",
    "=͟͟͞͞ʕ•̫͡•ʔ =͟͟͞͞ʕ•̫͡•ʔ =͟͟͞͞ʕ•̫͡•ʔ =͟͟͞͞ʕ•̫͡•ʔ =͟͟͞͞ʕ•̫͡•ʔ",
    "ʕ๑•́ ᴥ •̀ʔʕ♥ᴥ♥๑ʔ",
    "(._.) ƪ(‘-‘ ƪ)(ʃ ‘-‘)ʃ (/._.)/",
    "(-(-_(-_-)_-)-)",
    "ʕ͙•̫͑͡•ʔͦʕͮ•̫ͤ͡•ʔ͙",
    "ʕ╹ᴥ╹ʔฅ o",
    "ฅʕᵔᴥᵔʔฅ o",
    "ʕ╹ᴥ╹ʔฅ☆",
    "ʕ✿╹ᴥ╹ʔฅ",
    "(◉oᴥo)ʕ ⁰̈ᴥ⁰̈ ʔ",
    "ʕ ⁰̈ᴥ⁰̈ʔ☆",
    "ฅʕ⁰̈ᴥ⁰̈✿ʔ",
    "☽ʕ´❛ᴥ❛`ʔ☆",
    "ʕ´❛ᴥ❛ʔ✿",
    "ʕɵ̥̥ᴥɵ̥̥ʔ♥",
    "✿♡⊂ʕ•ᴥ•⊂ʔ",
    "✿⊂ʕ♡ω♡⊂ʔ",
    "ʕ-̼͡-ʔʕ•̫͡•ʔ",
    "ʕoTTᴥTTʔ",
    "❀❀❀ʕᵔᴥᵔʔ❀❀❀",
    "ʕᵔᴥᵔʔZz",
    "▼\\ʕᵔᴥᵔʔ",
    "❀ʕᵔᴥᵔʔ",
    "❀(◕㉨◕✿)",
    "ʕᵔﻌᵔʔ♡ʕᵔﻌᵔʔ",
    "ʕ✿ᵔﻌᵔ˵ʔ",
    "ʕ•ﻌ•✿ʔ",
    "ʕ☆ᵔᴥᵔʔ",
    "(≧0≦)ʕ☆ᵔᴥᵔʔ",
    "ʕ✿•́ ᴥ •̀ʔ♡",
    "ʕ✿•́ ᴥ •̀ʔ☆",
    "ʕóᴥò✿ʔ",
    "ʕ¯ᴥ¯✿ʔ",
    "(♡◕‿◕)ʕ ·ᴥ· ✿ʔ",
    "( ◕‿◕)/ʕ ·ᴥ· ʔ",
    "ʕ ·ᴥ· ʔ",
    "ʕ·͡ᴥ·ʔ ฅ",
    "ʕ ·͡ﻌ·ʔฅ☆",
    "ʕ ·͡//ﻌ//·ʔ",
    "☆ʕ´❛ᴥ❛`ʔ☆",
    "(◍oᴗo)cʕ•ᴥ•cʔ",
    "cʕ•ᴥ•cʔ",
    "(❀oωo)cʕ•ᴥ•cʔ",
    "ʕ♡ᴥ♡ʔฅ",
    "φʕ •ᴥ•o ʔ(•̀ᴗ•́ )و ̑̑",
    "ʕง• ᴥ •ʔงcʕ•ᴥ•cʔ",
    "ʕ •ᴥ• ʔฅ",
    "=͟͟͞͞ʕ•̀=͟͟͞͞ʕ•̀▿•́=͟͟͞͞ʕ•̀▿•́ʔ",
    "=͟͟͞͞ʕ•̀▿•́ʔ",
    "=͟͟͞͞ʕ•̫͡•ʔ",
    "ʕºᴥ≦ʔ",
    "(❀•▿•)⊂ʕ•ᴥ•⊂ʔ",
    "(º∀º)ʕ· ᴥ· ʔ",
    "Ƹ̵̡Ӝ̵̨̄Ʒʕ•́ ᴥ •̀๑ʔ",
    "♡cʕ•́ ᴥ •̀cʔ",
    "✿cʕ•́ ᴥ •̀cʔ",
    "ʕノ•ᴥ•ʔノ o",
    "ʕ ◕ᴥ◕ʔ",
    "ʕ◉ᴥ◉ ʔ",
    "ʕ◕ᴥ◕ ʔ",
    "ʕ oᴥoʔ",
    "ʕ•ᴥ• ʔ",
    "ˁ ๑ ˙͠˟˙ˀ",
    "ˁ˙͠˟˙ ˀ",
    "ˁ✿˙͠˟˙ˀ",
    "ʕ๑•́ ᴥ •̀๑ʔ/♥",
    "ʕ ๑ •́ ᴥ •̀ʔʕ•́ ᴥ •̀✿ʔ",
    "ʕ╥ᴥ╥๑ʔ",
    "ʕ๑╥ᴥ╥ʔʕ•͡ᴥ• ʔ",
    "ʕ•͡ᴥ•",
    "ʕ✿¯ᴥ¯ʔZzz",
    "ʕ0ᴥoʔ",
    "ʕuᴥuʔ",
    "ʕ▽ᴥ▽ʔ",
    "❤ ⊂ʕ•ᴥ•⊂ʔ",
    "o ⊂ʕ•ᴥ•⊂ʔ",
    "ฅʕ ·͡ᴥ· ʔ",
    "ˁ ˙͠˟˙ ˀ",
    "ˁ ˙͠˟˙✿ˀ"
]

window.onload = () => {
    let windowWidth = document.documentElement.clientWidth
    let windowHeight = document.documentElement.clientHeight - 16

    const generateRandom = (val) => {
        return Math.floor(Math.random() * val)
    }
    const generateCoor = () => {
        return [generateRandom(windowWidth), generateRandom(windowHeight)]
    }
    const removeEmoji = (el) => {
        el.classList.add('emoji__fade-out')
        setTimeout(() => {
            document.body.removeChild(el)
        }, 1000)
    }
    window.addEventListener('resize', () => {
        windowWidth = document.documentElement.clientWidth;
        windowHeight = document.documentElement.clientHeight - 16
    })
    const generateEmoji = () => {
        const box = document.createElement('span')
        box.innerText = emojiList[generateRandom(89)]
        box.classList.add('emoji')
        box.classList.add(`color-${generateRandom(50)}`)
        const [left, top] = generateCoor()
        box.style.top = top + "px"
        box.style.left = left + "px"
        document.body.appendChild(box)
        box.classList.add('emoji__fade-in')
        setTimeout(() => {
            removeEmoji(box)
        }, 1000)
    }
    setInterval(() => {
        new Array(20).fill(0).forEach((_, i) => setTimeout(() => generateEmoji(), i * 100))
    }, 2000)
}