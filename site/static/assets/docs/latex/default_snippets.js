[
  // Callout auto
  { trigger: "Prop", replacement: "> [!propriete]\n> $0", options: "tA" },
  { trigger: "prop", replacement: "> [!propriete]\n> $0", options: "tA" },
  { trigger: "Exemple", replacement: "> [!exemple]\n> $0", options: "tA" },
  { trigger: "exemple", replacement: "> [!exemple]\n> $0", options: "tA" },
  { trigger: "Ex", replacement: "> [!exemple]\n> $0", options: "t" },
  { trigger: "ex", replacement: "> [!exemple]\n> $0", options: "t" },
  { trigger: "Info", replacement: "> [!info]\n> $0", options: "tA" },
  { trigger: "info", replacement: "> [!info]\n> $0", options: "tA" },
  { trigger: "Def", replacement: "> [!definition]\n> $0", options: "tA" },
  { trigger: "def", replacement: "> [!definition]\n> $0", options: "tA" },
  { trigger: "Meth", replacement: "> [!methode]\n> $0", options: "tA" },
  { trigger: "meth", replacement: "> [!methode]\n> $0", options: "tA" },
  { trigger: "Att", replacement: "> [!attention]\n> $0", options: "t" },
  { trigger: "att", replacement: "> [!attention]\n> $0", options: "t" },
  { trigger: "Attent", replacement: "> [!attention]\n> $0", options: "tA" },
  { trigger: "attent", replacement: "> [!attention]\n> $0", options: "tA" },

  // Math mode
  { trigger: "ml", replacement: "$\\displaystyle $0$", options: "tA" },
  { trigger: "dm", replacement: "$$\n$0\n$$", options: "tAw" },
  { trigger: "beg", replacement: "\\begin{$0}\n$1\n\\end{$0}", options: "mA" },

  // Dashes
  // {trigger: "--", replacement: "–", options: "tA"},
  // {trigger: "–-", replacement: "—", options: "tA"},
  // {trigger: "—-", replacement: "---", options: "tA"},

  // Text environment
  { trigger: "càd", replacement: "c'est-à-dire", options: "tA" },
  { trigger: "=>", replacement: "$\\implies$", options: "tA" },
  { trigger: "mvt", replacement: "mouvement", options: "tA" },
  { trigger: " iff", replacement: " $\\iff$", options: "tA" },
  { trigger: '"', replacement: "\\text{$0}$1", options: "mA" },
  {
    trigger: "ccc",
    replacement: "```${0:Pseudo-code}\n$1\n```",
    options: "tA",
  },
  { trigger: "rm", replacement: "\\mathrm{$0}$1", options: "mA" },
  { trigger: "bf", replacement: "\\mathbf{$0}$1", options: "mA" },
  { trigger: "bb", replacement: "\\mathbb{$0}$1", options: "mA" },
  { trigger: "scr", replacement: "\\mathscr{$0}$1", options: "mA" },
  { trigger: "cal", replacement: "\\mathcal{$0}$1", options: "mA" },

  // Operations
  { trigger: "sr", replacement: "^{2}", options: "mA" },
  { trigger: "cb", replacement: "^{3}", options: "mA" },
  { trigger: "rd", replacement: "^{$0}$1", options: "mA" },
  { trigger: "_", replacement: "_{$0}$1", options: "mA" },
  { trigger: "sts", replacement: "_\\text{$0}", options: "rmA" },
  { trigger: "sq", replacement: "\\sqrt{ $0 }$1", options: "mA" },
  { trigger: "//", replacement: "\\frac{$0}{$1}$2", options: "mA" },
  { trigger: "ee", replacement: "e^{ $0 }$1", options: "mA" },
  { trigger: "invs", replacement: "^{-1}", options: "mA" },

  { trigger: "conj", replacement: "^{*}", options: "mA" },
  { trigger: "trace", replacement: "\\mathrm{Tr}", options: "mA" },
  { trigger: "Tr", replacement: "\\mathrm{Tr}", options: "mA" },
  { trigger: "Re", replacement: "\\mathrm{Re}", options: "mA" },
  { trigger: "Im", replacement: "\\mathrm{Im}", options: "mA" },

  {
    trigger: "([A-Za-z])(\\d)",
    replacement: "[[0]]_{[[1]]}",
    options: "rmA",
    description: "Auto letter subscript",
    priority: -1,
  },
  {
    trigger: "\\\\((?!log)[${MORE_SYMBOLS}${SYMBOL}])(.)",
    replacement: "\\[[0]] [[1]]",
    options: "rmA",
    description: "Manage symbols exceptions",
  },
  {
    trigger: "([A-Za-z])_(\\d\\d)",
    replacement: "[[0]]_{[[1]]}",
    options: "rmA",
  },
  {
    trigger: "\\hat{([A-Za-z])}(\\d)",
    replacement: "hat{[[0]]}_{[[1]]}",
    options: "rmA",
  },
  {
    trigger: "\\\\mathbf{([A-Za-z])}(\\d)",
    replacement: "\\mathbf{[[0]]}_{[[1]]}",
    options: "rmA",
  },
  {
    trigger: "\\\\vec{([A-Za-z])}(\\d)",
    replacement: "\\vec{[[0]]}_{[[1]]}",
    options: "rmA",
  },
  { trigger: "([a-zA-Z])bar", replacement: "\\bar{[[0]]}", options: "rmA" },
  { trigger: "([a-zA-Z])hat", replacement: "\\hat{[[0]]}", options: "rmA" },
  {
    trigger: "([a-zA-Z])ddot",
    replacement: "\\ddot{[[0]]}",
    options: "rmA",
    priority: 1,
  },
  {
    trigger: "([a-zA-Z])dot",
    replacement: "\\dot{[[0]]}",
    options: "rmA",
    priority: -1,
  },
  { trigger: "([a-zA-Z])vec", replacement: "\\vec{[[0]]}", options: "rmA" },
  { trigger: "([a-zA-Z])tilde", replacement: "\\tilde{[[0]]}", options: "rmA" },
  {
    trigger: "([a-zA-Z])und",
    replacement: "\\underline{[[0]]}",
    options: "rmA",
  },
  { trigger: "bar", replacement: "\\bar{$0}$1", options: "mA" },
  { trigger: "hat", replacement: "\\hat{$0}$1", options: "mA" },
  { trigger: "dot", replacement: "\\dot{$0}$1", options: "mA", priority: -1 },
  { trigger: "ddot", replacement: "\\ddot{$0}$1", options: "mA" },
  { trigger: "vec", replacement: "\\vec{$0}$1", options: "mA" },
  { trigger: "inn", replacement: "\\in $0", options: "mA", priority: 1 },
  { trigger: "tilde", replacement: "\\tilde{$0}$1", options: "mA" },
  { trigger: "und", replacement: "\\underline{$0}$1", options: "mA" },
  {
    trigger: "\\\\(neq|ge|le|lt|gt|gg|ll|in|geq|to|ln|log)(.)",
    replacement: "\\[[0]] [[1]]",
    options: "rmA",
  }, // Insert space after some symbols

  // Symbols
  { trigger: "ooo", replacement: "\\infty", options: "mA" },
  {
    trigger: "sum",
    replacement:
      "\\sum_{${0:k} = ${1:n_{0}}}^{${2:+\\infty}} ( ${3:u_{k}} ) $4",
    options: "mA",
  },
  {
    trigger: "prod",
    replacement: "\\prod_{${0:i} = 1}^{${1:n}} ( ${2:u_{i}} ) $3",
    options: "mA",
  },
  {
    trigger: "lim",
    replacement: "\\lim_{ ${0:n} \\to ${1:+\\infty} } $2",
    options: "mA",
  },
  { trigger: "+-", replacement: "\\pm", options: "mA" },
  { trigger: "-+", replacement: "\\mp", options: "mA" },
  { trigger: "...", replacement: "\\dots", options: "mA" },
  { trigger: "nabl", replacement: "\\nabla", options: "mA" },
  { trigger: "del", replacement: "\\nabla", options: "mA" },
  { trigger: "xx", replacement: "\\times", options: "mA" },
  { trigger: "**", replacement: "\\cdot", options: "mA" },
  { trigger: "para", replacement: "\\parallel", options: "mA" },
  { trigger: "===", replacement: "\\equiv", options: "mA" },
  { trigger: "!=", replacement: "\\neq", options: "mA" },
  { trigger: ">=", replacement: "\\ge", options: "mA" },
  { trigger: "<=", replacement: "\\le", options: "mA" },
  { trigger: ">>", replacement: "\\gg", options: "mA" },
  { trigger: "<<", replacement: "\\ll", options: "mA" },
  { trigger: "~~", replacement: "\\sim", options: "mA" },
  { trigger: "prop", replacement: "\\propto", options: "mA" },
  { trigger: "<->", replacement: "\\leftrightarrow ", options: "mA" },
  { trigger: "->", replacement: "\\to", options: "mA" },
  { trigger: "!>", replacement: "\\mapsto", options: "mA" },
  { trigger: "\\\\\\", replacement: "\\setminus", options: "mA" },
  { trigger: "||", replacement: "\\mid", options: "mA" },
  { trigger: "and", replacement: "\\cap", options: "mA" },
  { trigger: "orr", replacement: "\\cup", options: "mA" },
  { trigger: "notin", replacement: "\\not\\in", options: "mA", priority: 1 },
  { trigger: "sub=", replacement: "\\subseteq", options: "mA" },
  { trigger: "sup=", replacement: "\\supseteq", options: "mA" },
  { trigger: "eset", replacement: "\\emptyset", options: "mA" },
  { trigger: "set", replacement: "\\{ $0 \\}$1", options: "mA" },
  { trigger: "=>", replacement: "\\implies", options: "mA" },
  { trigger: "=<", replacement: "\\impliedby", options: "mA" },
  { trigger: "iff", replacement: "\\iff", options: "mA" },
  { trigger: "e\\xi sts", replacement: "\\exists", options: "mA", priority: 1 },

  {
    trigger: "([a-zA-Z])(i|j|n|m|k|x|y)\\2{1}",
    replacement: "[[0]]_{[[1]]}",
    options: "rmA",
    description: "Common subscripts",
  },
  {
    trigger: "([a-zA-Z])([a-zA-Z])p(\\d)",
    replacement: "[[0]]_{[[1]]+[[2]]}",
    options: "rmA",
    description: "Common subscripts (plus)",
  },
  {
    trigger: "([a-zA-Z])([a-zA-Z])m(\\d)",
    replacement: "[[0]]_{[[1]]-[[2]]}",
    options: "rmA",
    description: "Common subscripts (minus)",
  },
  {
    trigger: "\\\\mathbb{(.)}n",
    replacement: "\\mathbb{[[0]]}^{ ${0:n} }",
    options: "rmA",
  },
  {
    trigger: "\\\\mathbb{(.)}mn",
    replacement: "\\mathbb{[[0]]}^{ ${0:m} \\times ${1:n} }",
    options: "rmA",
  },

  { trigger: "ell", replacement: "\\ell", options: "mA" },
  { trigger: "lll", replacement: "\\ell", options: "mA" },
  { trigger: "LL", replacement: "\\mathcal{L}", options: "mA" },
  { trigger: "HH", replacement: "\\mathcal{H}", options: "mA" },
  { trigger: "CC", replacement: "\\mathbb{C}", options: "mA" },
  { trigger: "RR", replacement: "\\mathbb{R}", options: "mA" },
  { trigger: "KK", replacement: "\\mathbb{K}", options: "mA" },
  { trigger: "ZZ", replacement: "\\mathbb{Z}", options: "mA" },
  { trigger: "NN", replacement: "\\mathbb{N}", options: "mA" },
  { trigger: "II", replacement: "\\mathbb{1}", options: "mA" },
  { trigger: "\\mathbb{1}I", replacement: "\\hat{\\mathbb{1}}", options: "mA" },
  { trigger: "AA", replacement: "\\mathcal{A}", options: "mA" },
  { trigger: "MM", replacement: "\\mathcal{M}", options: "mA" },
  { trigger: "BB", replacement: "\\mathscr{B}", options: "mA" },
  { trigger: "SS", replacement: "(S_{n})_{n\\in\\mathbb{N}}", options: "mA" },
  { trigger: "uu", replacement: "(u_{n})_{n\\in\\mathbb{N}}", options: "mA" },
  { trigger: "ff", replacement: "(f_{n})_{n\\in\\mathbb{N}}", options: "mA" },

  // Greek letters
  { trigger: "@a", replacement: "\\alpha", options: "mA" },
  { trigger: "@A", replacement: "\\alpha", options: "mA" },
  { trigger: "@b", replacement: "\\beta", options: "mA" },
  { trigger: "@B", replacement: "\\beta", options: "mA" },
  { trigger: "@c", replacement: "\\chi", options: "mA" },
  { trigger: "@C", replacement: "\\chi", options: "mA" },
  { trigger: "@g", replacement: "\\gamma", options: "mA" },
  { trigger: "@G", replacement: "\\Gamma", options: "mA" },
  { trigger: "@d", replacement: "\\delta", options: "mA" },
  { trigger: "@D", replacement: "\\Delta", options: "mA" },
  { trigger: "@e", replacement: "\\varepsilon", options: "mA" },
  { trigger: "@E", replacement: "\\varepsilon", options: "mA" },
  { trigger: "@z", replacement: "\\zeta", options: "mA" },
  { trigger: "@Z", replacement: "\\zeta", options: "mA" },
  { trigger: "@t", replacement: "\\theta", options: "mA" },
  { trigger: "@T", replacement: "\\Theta", options: "mA" },
  { trigger: ":t", replacement: "\\vartheta", options: "mA" },
  { trigger: "@i", replacement: "\\iota", options: "mA" },
  { trigger: "@k", replacement: "\\kappa", options: "mA" },
  { trigger: "@K", replacement: "\\kappa", options: "mA" },
  { trigger: "@l", replacement: "\\lambda", options: "mA" },
  { trigger: "@L", replacement: "\\Lambda", options: "mA" },
  { trigger: "@m", replacement: "\\mu", options: "mA" },
  { trigger: "@M", replacement: "\\mu", options: "mA" },
  { trigger: "@P", replacement: "\\varphi", options: "mA" },
  { trigger: "@p", replacement: "\\varphi", options: "mA" },
  { trigger: "phi", replacement: "\\varphi", options: "mA" },
  { trigger: "@r", replacement: "\\rho", options: "mA" },
  { trigger: "@R", replacement: "\\rho", options: "mA" },
  { trigger: "@s", replacement: "\\sigma", options: "mA" },
  { trigger: "@S", replacement: "\\Sigma", options: "mA" },
  { trigger: "@u", replacement: "\\upsilon", options: "mA" },
  { trigger: "@U", replacement: "\\Upsilon", options: "mA" },
  { trigger: "ome", replacement: "\\omega", options: "mA" },
  { trigger: "Ome", replacement: "\\Omega", options: "mA" },
  { trigger: "@o", replacement: "\\omega", options: "mA" },
  { trigger: "@O", replacement: "\\Omega", options: "mA" },
  { trigger: "@x", replacement: "\\xi", options: "mA" },
  { trigger: "@X", replacement: "\\Xi", options: "mA" },
  {
    trigger: "([^\\\\])(${GREEKP}|${SYMBOL}|${MORE_SYMBOLS})",
    replacement: "[[0]]\\[[1]]",
    options: "rmA",
    priority: -1,
    description: "Add backslash before greek letters and symbols",
  },

  // Insert space after Greek letters and symbols
  {
    trigger: "\\\\(${GREEK}|${SYMBOL}|${MORE_SYMBOLS})([A-Za-z])",
    replacement: "\\[[0]] [[1]]",
    options: "rmA",
  },
  {
    trigger: "\\\\(${GREEK}|${SYMBOL}) sr",
    replacement: "\\[[0]]^{2}",
    options: "rmA",
  },
  {
    trigger: "\\\\(${GREEK}|${SYMBOL}) cb",
    replacement: "\\[[0]]^{3}",
    options: "rmA",
  },
  {
    trigger: "\\\\(${GREEK}|${SYMBOL}) rd",
    replacement: "\\[[0]]^{$0}$1",
    options: "rmA",
  },
  {
    trigger: "\\\\(${GREEK}|${SYMBOL}) hat",
    replacement: "\\hat{\\[[0]]}",
    options: "rmA",
  },
  {
    trigger: "\\\\(${GREEK}|${SYMBOL}) dot",
    replacement: "\\dot{\\[[0]]}",
    options: "rmA",
  },
  {
    trigger: "\\\\(${GREEK}|${SYMBOL}) bar",
    replacement: "\\bar{\\[[0]]}",
    options: "rmA",
  },
  {
    trigger: "\\\\(${GREEK}|${SYMBOL}) vec",
    replacement: "\\vec{\\[[0]]}",
    options: "rmA",
  },
  {
    trigger: "\\\\(${GREEK}|${SYMBOL}) tilde",
    replacement: "\\tilde{\\[[0]]}",
    options: "rmA",
  },
  {
    trigger: "\\\\(${GREEK}|${SYMBOL}) und",
    replacement: "\\underline{\\[[0]]}",
    options: "rmA",
  },

  // Derivatives and integrals
  {
    trigger: "par",
    replacement: "\\frac{ \\partial ${0:y} }{ \\partial ${1:x} } $2",
    options: "mA",
  },
  {
    trigger: "pa2",
    replacement: "\\frac{ \\partial^{2} ${0:y} }{ \\partial ${1:x}^{2} } $2",
    options: "mA",
  },
  {
    trigger: "pa3",
    replacement: "\\frac{ \\partial^{3} ${0:y} }{ \\partial ${1:x}^{3} } $2",
    options: "mA",
  },
  { trigger: "ddt", replacement: "\\frac{d}{dt} ", options: "mA" },
  {
    trigger: "oinf",
    replacement: "\\int_{0}^{\\infty} $0 \\, d${1:x} $2",
    options: "mA",
  },
  {
    trigger: "infi",
    replacement: "\\int_{-\\infty}^{+\\infty} $0 \\, d${1:x} $2",
    options: "mA",
  },
  { trigger: "oint", replacement: "\\oint", options: "mA" },
  { trigger: "iiint", replacement: "\\iiint", options: "mA" },
  { trigger: "iint", replacement: "\\iint", options: "mA", priority: -1 },
  {
    trigger: "int",
    replacement: "\\int_{${0:0}}^{${1:\\infty}} $2 \\, d${3:x} $4",
    options: "mA",
    priority: -2,
  },

  // Trigonometry
  {
    trigger:
      "([^\\\\])(arcsin|arccos|arctan|arccot|arccsc|arcsec|sin|cos|tan|cot|csc|sec)",
    replacement: "[[0]]\\[[1]]",
    options: "rmA",
  },
  {
    trigger:
      "\\\\(arcsin|arccos|arctan|arccot|arccsc|arcsec|sin|cos|tan|cot|csc|sec)([A-Za-gi-z])",
    replacement: "\\[[0]] [[1]]",
    options: "rmA",
  }, // Insert space after trig funcs. Skips letter "h" to allow sinh, cosh, etc.
  {
    trigger:
      "\\\\(arcsinh|arccosh|arctanh|arccoth|arcsch|arcsech|sinh|cosh|tanh|coth|csch|sech)([A-Za-z])",
    replacement: "\\[[0]] [[1]]",
    options: "rmA",
  }, // Insert space after trig funcs

  // Visual operations
  {
    trigger: "U",
    replacement: "\\underbrace{ ${VISUAL} }_{ $0 }",
    options: "mA",
  },
  {
    trigger: "O",
    replacement: "\\overbrace{ ${VISUAL} }^{ $0 }",
    options: "mA",
  },
  { trigger: "B", replacement: "\\underset{ $0 }{ ${VISUAL} }", options: "mA" },
  { trigger: "C", replacement: "\\cancel{ ${VISUAL} }", options: "mA" },
  { trigger: "K", replacement: "\\cancelto{ $0 }{ ${VISUAL} }", options: "mA" },
  { trigger: "S", replacement: "\\sqrt{ ${VISUAL} }", options: "mA" },

  // Physics and chemistry
  { trigger: "kbt", replacement: "k_{B}T", options: "mA" },
  { trigger: "msun", replacement: "M_{\\odot}", options: "mA" },
  { trigger: "solm", replacement: "M_{\\odot}", options: "mA" },
  { trigger: "pu", replacement: "\\pu{ $0 }", options: "mA" },
  { trigger: "ce", replacement: "\\ce{ $0 }", options: "mA" },
  { trigger: "iso", replacement: "{}^{${0:4}}_{${1:2}}${2:He}", options: "mA" },
  { trigger: "hel4", replacement: "{}^{4}_{2}He ", options: "mA" },
  { trigger: "hel3", replacement: "{}^{3}_{2}He ", options: "mA" },

  {
    trigger: "(${UNITS})",
    replacement: "\\space\\text{[[0]]} $0",
    options: "rm",
  },
  {
    trigger: "([[^A-Za-zÀ-ÿ]])(${UNITS})([\\n\\s.,?!:'])",
    replacement: "[[0]]$\\text{[[1]]}$[[2]]",
    options: "rtA",
  },

  // Quantum mechanics
  { trigger: "hba", replacement: "\\hbar", options: "mA" },
  { trigger: "dag", replacement: "^{\\dagger}", options: "mA" },
  { trigger: "o+", replacement: "\\oplus ", options: "mA" },
  { trigger: "ox", replacement: "\\otimes ", options: "mA" },
  { trigger: "ot\\mathrm{Im}es", replacement: "\\otimes ", options: "mA" }, // Handle conflict with "im" snippet
  { trigger: "bra", replacement: "\\bra{$0} $1", options: "mA" },
  { trigger: "ket", replacement: "\\ket{$0} $1", options: "mA" },
  { trigger: "brk", replacement: "\\braket{ $0 | $1 } $2", options: "mA" },
  {
    trigger: "\\\\bra{([^|]+)\\|",
    replacement: "\\braket{ [[0]] | $0 ",
    options: "rmA",
    description: "Convert bra into braket",
  },
  {
    trigger: "\\\\bra{(.+)}([^ ]+)>",
    replacement: "\\braket{ [[0]] | $0 ",
    options: "rmA",
    description: "Convert bra into braket (alternate)",
  },
  {
    trigger: "outer",
    replacement: "\\ket{${0:\\psi}} \\bra{${0:\\psi}} $1",
    options: "mA",
  },

  // Environments
  { trigger: "dis", replacement: "\\displaystyle $0", options: "mA" },

  {
    trigger: "pmat",
    replacement: "\\begin{pmatrix}\n$0\n\\end{pmatrix}",
    options: "MA",
  },
  {
    trigger: "bmat",
    replacement: "\\begin{bmatrix}\n$0\n\\end{bmatrix}",
    options: "MA",
  },
  {
    trigger: "Bmat",
    replacement: "\\begin{Bmatrix}\n$0\n\\end{Bmatrix}",
    options: "MA",
  },
  {
    trigger: "vmat",
    replacement: "\\begin{vmatrix}\n$0\n\\end{vmatrix}",
    options: "MA",
  },
  {
    trigger: "Vmat",
    replacement: "\\begin{Vmatrix}\n$0\n\\end{Vmatrix}",
    options: "MA",
  },
  {
    trigger: "matrix",
    replacement: "\\begin{matrix}\n$0\n\\end{matrix}",
    options: "MA",
  },

  {
    trigger: "pmat",
    replacement: "\\begin{pmatrix}$0\\end{pmatrix}",
    options: "nA",
  },
  {
    trigger: "bmat",
    replacement: "\\begin{bmatrix}$0\\end{bmatrix}",
    options: "nA",
  },
  {
    trigger: "Bmat",
    replacement: "\\begin{Bmatrix}$0\\end{Bmatrix}",
    options: "nA",
  },
  {
    trigger: "vmat",
    replacement: "\\begin{vmatrix}$0\\end{vmatrix}",
    options: "nA",
  },
  {
    trigger: "Vmat",
    replacement: "\\begin{Vmatrix}$0\\end{Vmatrix}",
    options: "nA",
  },
  {
    trigger: "matrix",
    replacement: "\\begin{matrix}$0\\end{matrix}",
    options: "nA",
  },

  {
    trigger: "cases",
    replacement: "\\begin{cases}\n$0\n\\end{cases}",
    options: "mA",
  },
  {
    trigger: "align",
    replacement: "\\begin{align}\n$0\n\\end{align}",
    options: "mA",
  },
  {
    trigger: "array",
    replacement: "\\begin{array}\n$0\n\\end{array}",
    options: "mA",
  },

  // Brackets
  { trigger: "avg", replacement: "\\langle $0 \\rangle $1", options: "mA" },
  {
    trigger: "abs",
    replacement: "\\left\\lvert $0 \\right\\rvert $1",
    options: "mA",
  },
  { trigger: "norm", replacement: "\\| $0 \\| $1", options: "mA" },
  { trigger: "ceil", replacement: "\\lceil $0 \\rceil $1", options: "mA" },
  { trigger: "floor", replacement: "\\lfloor $0 \\rfloor $1", options: "mA" },
  { trigger: "(", replacement: "(${VISUAL})", options: "mA" },
  { trigger: "[", replacement: "[${VISUAL}]", options: "mA" },
  { trigger: "{", replacement: "{${VISUAL}}", options: "mA" },
  { trigger: "(", replacement: "($0)$1", options: "mA" },
  { trigger: "{", replacement: "{$0}$1", options: "mA" },
  { trigger: "[", replacement: "[$0]$1", options: "mA" },
  { trigger: "lr(", replacement: "\\left( $0 \\right) $1", options: "mA" },
  { trigger: "lr|", replacement: "\\left| $0 \\right| $1", options: "mA" },
  { trigger: "lr{", replacement: "\\left\\{ $0 \\right\\} $1", options: "mA" },
  { trigger: "lr[", replacement: "\\left[ $0 \\right] $1", options: "mA" },
  { trigger: "lra", replacement: "\\left< $0 \\right> $1", options: "mA" },

  // Misc
  {
    trigger: /([^'A-Za-zÀ-ÿ])\b([A-Za-z])\b([\n\s.,?!:])/,
    replacement: "[[0]]$[[1]]$[[2]]",
    options: "tA",
    description: "Automatically convert lone letters to math",
  },
  {
    trigger: "(${GREEK})([\\n\\s.,?!:'])",
    replacement: "$\\[[0]]$[[1]]",
    options: "rtAw",
    description: "Automatically convert greek to math",
  },
  {
    trigger: /([A-Za-z]=\d+)([\n\s.,?!:'])/,
    replacement: "$[[0]]$[[1]]",
    options: "rtAw",
    description: "Automatically convert equality to math",
  },
  {
    trigger: /([A-Za-z]=[A-Za-z][+-]\d+)([\n\s.,?!:'])/,
    replacement: "$[[0]]$[[1]]",
    options: "tAw",
    description: "Automatically convert equation to math",
  },

  {
    trigger: "tayl",
    replacement:
      "${0:f}(${1:x} + ${2:h}) = ${0:f}(${1:x}) + ${0:f}'(${1:x})${2:h} + ${0:f}''(${1:x}) \\frac{${2:h}^{2}}{2!} + \\dots$3",
    options: "mA",
    description: "Taylor expansion",
  },
  {
    trigger: /iden(\d)/,
    replacement: (match) => {
      const n = match[1];
      let arr = [];
      for (let j = 0; j < n; j++) {
        arr[j] = [];
        for (let i = 0; i < n; i++) {
          arr[j][i] = i === j ? 1 : 0;
        }
      }
      let output = arr.map((el) => el.join(" & ")).join(" \\\\\n");
      output = `\\begin{pmatrix}\n${output}\n\\end{pmatrix}`;
      return output;
    },
    options: "mA",
    description: "N x N identity matrix",
  },
];
