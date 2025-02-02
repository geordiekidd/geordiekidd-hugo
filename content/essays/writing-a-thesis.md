---
title: "How not to write an honours thesis"
date: 2025-01-18T16:10:02+11:00
draft: true
keywords:
    - studying
    - living
---

## <a href="#introduction">#</a> Introduction {#introduction}

Here is some text, and a reference as well <span class="footnote" id="footnote-1-back"><a href="#footnote-1"></a></span>.

## <a href="#take-care">#</a> Take care of yourself {#take-care}



## <a href="#second-section">#</a> Second section {#second-section}

Here is more text, this time for section 2. Somebody should fact check this <span class="footnote" id="fact-check-back"><a href="#fact-check"></a></span>

## <a href="#typesetting">#</a> Don't make your thesis look like shit {#typesetting}

Nobody likes reading a poorly typeset document. If you don't already use it, then it probably isn't worth investing your time in a program like LaTeX <span class="footnote" id="latex-back"><a href="#latex"></a></span>. However, font choice and page design can go a long way. For body, use serif. For headings, use sans. Find one of each that look nice together, and that will do a bunch of heavy lifting in the presentation of your work.

<pre>
\documentclass[a4paper,12pt]{book}

\usepackage[centre,fancy,colours,lua,sans]{umelbthesis}
\usepackage{subfiles}

\input{preamble-artcl}

\begin{document}

\frontmatter
  \input{metadata}
  \maketitle

  \input{abstract}
  \input{acknowledgements}

  \tableofcontents

  \listoftables

  \printglossaries
  \input{contentions}

\mainmatter
  \subfile{chs/intro/ch-intro}  
  \subfile{chs/litrev/ch-litrev}
  \subfile{chs/morph/ch-morph}
  \subfile{chs/dissem/ch-dissem}
  \subfile{chs/form/ch-form}
  \subfile{chs/conc/ch-conc}

  \appendix
  
  \input{chs/apdx/apdx-dataref}
  \input{chs/apdx/apdx-excolist}
  \input{chs/apdx/apdx-semfunc}

\backmatter
  \printbibliography[heading=bibintoc,title=References]%
  \chaptermark{References}

\end{document}
</pre>

## <a href="#things-i-would-do-differently">#</a> Things I would do differently {#things-i-would-do-differently}

#### <a href="#footnotes">#</a> Footnotes {#footnotes}

<span class="footnote-back" id="footnote-1"><a href="#footnote-1-back"></a></span>

<span class="footnote-back" id="fact-check"><a href="#fact-check-back"></a></span> This is false!

<span class="footnote-back" id="latex"><a href="latex-back"></a></span> Trust me on this. I was already quite familiar with LaTeX before I started Honours, and I still spent a senseless number of hours 
