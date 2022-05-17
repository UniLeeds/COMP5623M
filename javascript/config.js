window.MathJax = {
    tex: {
        inlineMath: [
            ["\\(", "\\)"]
        ],
        displayMath: [
            ["\\[", "\\]"]
        ],
        processEscapes: true,
        processEnvironments: true
    },
    options: {
        ignoreHtmlClass: ".*|",
        processHtmlClass: "arithmatex"
    },

    // inserted by DCH
    tex: {
        macros: {
            R: '\\mathbb{R}',
            myvec: ['\\mathbfit{#1}', 1],
            mymat: ['\\mathbfit{#1}', 1],
            var: ['\\mathit{#1}', 1],
            func: ['\\mathrm{#1}', 1]
        }
    }
};