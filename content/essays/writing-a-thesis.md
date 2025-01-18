---
title: "Writing an honours thesis"
date: 2025-01-18T16:10:02+11:00
draft: true
---

## <span><a href="#introduction">#</a></span> Introduction 

Here is some text, and a reference as well. <span class="footnote" id="footnote-1-back"><a href="#footnote-1"></a></span>



## <span><a href="#second-section">#</a></span> Second section 

Here is more text, this time for section 2. Somebody should fact check this <span class="footnote" id="fact-check-back"><a href="#fact-check"></a></span>

## <span><a href="#typesetting">#</a></span> Typesetting

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
  \emergencystretch=1em
  \printbibliography[heading=bibintoc,title=References]\chaptermark{References}

\end{document}
</pre>

#### <span><a href="#footnotes">#</a></span> Footnotes 

<span class="footnote-back" id="footnote-1"><a href="#footnote-1-back"></a></span>

<span class="footnote-back" id="fact-check"><a href="#fact-check-back"></a></span> This is false!
