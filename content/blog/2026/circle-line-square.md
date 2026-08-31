---
title: "Circle, line, and square"
date: 2026-04-08T11:03:32+10:00
draft: true
---

If you've been poking around the website recently, you'd notice now that it has gone through a major redesign. Unlike the previous design, this one has at least some sensible grounding in considerations of function and space. This has been a goal of mine for some time, for two essential reasons: (i) I was dissatisfied with the functionality of the previous site, and (ii) I wanted to design something more typographically respectable. These are not independent points, but I'll discuss each of them in turn here.

Though I had much fun with the old design, I was acquiring a distaste for its rigidity. [Monospace websites](https://wonger.dev/posts/monospace-dump) – done well, at least – carry a mysteriously universal charm that I tried to emulate. But I think an emulation was all it could be. Monospaced design is rather difficult to implement for a number of reasons, but primarily it is because the relationship between space and weight is fragile with monospace typefaces.

In those typefaces, every character occupies the exact same width, making a block of text effectively a matrix or grid populated with one character per cell, just like a typewriter or your computer's command-line terminal. That means everything is evenly spaced, and lines of text have all their characters aligned below and above one another. Due to this fact, monospaced type involves heaps of negative space between letters, making text set in such type difficult to read because our eyes can't as easily discriminate letterspaces from wordspaces. 

There are two obvious methods of avoiding this problem: to carefully control the spacing between shapes on the page, or to modulate the size and/or weight of the type. The first is difficult to execute, since using vertical or horizontal spacing not equivalent to some multiple of a character h/w renders the point of the type useless (and is in a sense anachronistic). Restrictions on spacing and the uniformity of letter shapes thus heavily constrain the distribution of structural elements on the page, because they will need to go in places where deviation from the invariable grid layout is imperceptible – for example, a title like the one on this page would need to be the same size as the text in the main column, so that their baselines are perfectly aligned (i.e., so they don't appear to be governed by grids of differently-sized cells). Fractional vertical spacing can be a little more forgiving, as with the distance between paragraphs, but the quantity of realistic possibilities is small, and spacing by multiples generally looks better anyway.

Modulating the type weight or size, which is a second strategy for drawing up contrast, introduces adjacent difficulties. Managing multiple weights (e.g., light, regular, bold) in the same text is challenging, and the weight required by monospace faces to combat their otherwise excessive negative space threatens the page with imbalance when adjusting weight any further. Increasing only the type size also adds weight, which requires consideration of the spacing issues described above as well as ones of weight. Type scaled by fractions will become misaligned with the text grid, and going up by multiples – say from 12pt to 24pt – will become too heavy to use despite landing on the grid. 

The geometric demands of monospace typefaces are thus at odds with the one of the main goals of typography, which is to engender text with maximal expressive power through the harmonic arrangement of shapes in (two-dimensional) space. Monospace typefaces permit limited harmonisation, at unison and the octave by default, and without careful arrangement they lack the horizontal motion required to provide any rhythm other than an unvarying one-and-two-and.


I didn't manage to succeed at composing harmony or rhythm in my old site, nor could I make anything interesting out of octaves and quavers. Some people have done that, however: [wonger's website](https://wonger.dev), a well-executed one-weight, one-size website; [emile.space](https://emile.space), a personal website with exceptional functionality in structure and navigation; [Commit Mono](https://commitmono.com), the website of the typeface I used, with game-like interactive design and wonderful use of negative space; [Good Enough](https://goodenough.us), the site of a development team, which finds clear balance between different weights and sizes in the type. My old design was inspired by all of these and more, but I just couldn't find the unique balance they did and as a result the readability of my site was rather impoverished, which really obstructed my proof-reading. So, I started thinking about what a more harmonic redesign might look like and now I have finally come around to implementing it.

My goal was to create a site which, as a basic requirement, is easily readable and navigable on both desktop and mobile. The main activity on [geordiekidd.com](/) is this blog, so the design centres around text readability. The current layout is intended to be viewed on desktop, where it will appear in two columns with a slim left column (for metadata like titles) and wide right column (for body text). (On mobile it displays only as a single column.) This was inspired by some of my favourite book designs, in which a wide column is used for text and a narrow column set in the fore margin carries supplemental information like sidenotes or low-level headings. Some of these books are: [Typografische Entwurfstechnik](https://wiedler.ch/felix/books/story/457), by Jan Tschichold (1932); [Visual Explanations](https://www.edwardtufte.com/book/visual-explanations-images-and-quantities-evidence-and-narrative/), by Edward Tufte (1997); [Printing 1770&ndash;1970](https://www.goodreads.com/book/show/67582899), by Michael Twyman (1970); [The Elements of Typographic Style](https://www.goodreads.com/en/book/show/44735.The_Elements_of_Typographic_Style), by Robert Bringhurst (2018); [The Thames and Hudson Manual of Typography](https://www.goodreads.com/en/book/show/119171.T_H_MANUAL_TYPOGRAPHY_PA), by Rauri McLean (1980). The narrow column is set at a width of 2/7, and the wide column at the remaining 5/7 and body text at 6/7ths of that width.

Those ratios, along with several other aspects of the layout, are extrapolated from discussions of typographic modernism in Jan Tschichold's [Asymmetric Typography](https://modernism101.com/products-page/graphic-design/tschichold-jan-asymmetric-typography-new-york-reinhold-publishing-corporation-cooper-beatty-ltd-toronto-1967-translated-by-ruari-mclean-duplicate-2/). The book's central thesis is that asymmetry in typographic design has beneficial optical and practical effects like improving readability, and that prioritising these outcomes likewise encourages asymmetric composition. This is expressed in a broader way as 'form follows function'. Here, the functional goal is for text to be easily readable and for items to be easily locatable. The 'metadata' column is reserved for headers which name a block of text and align with it vertically. Geometric elements are used to separate adjacent pieces of text, and to indicate internal links. The actual type used is Akzidenz Grotesk, a modernist sanserif face which has beautiful proportion and shape.

One particular design choice deserves special mention. It comes from a very valuable lesson about typography on pages 58–60 of Asymmetric Typography, concerning the placement of simple shapes in relation to one another in a space, entirely independent of text. The lesson is that arranging space between letters (kerning, tracking, spacing, ligating) is only equally important as distributing larger textual shapes (headings, paragraphs, ornaments) across the page. Illustrating this, he shows six possible configurations of a circle, line, and a square arranged in a two-by-three area. The top left one is boring, with improper use of space. The others are respectable arrangements with convincing figure–ground relations. 


{{< image src=/img/tschichold-cls-1.png alt="Six configurations of a circle, line, and square by Jan Tschichold" cap="Jan Tschichold, <em>Asymmetric Typography</em> (1935), p. 60.">}}

The circle, line, and square theme is varied and elaborated in a number of ways throughout the website, and in different inversions and diminutions. That stands as my nod both to the exercise and to Tschichold's styling more generally. In its largest and abstractest form, the page layout distributes its content according to the following configuration, which is my vision of how C, L, and S fit in the grand scheme of things.

<style>
@keyframes clsAnim {
    from { background-color: rgba(255,255,255,0.5) }
    to { background-color: rgba(255,255,255,1) }
}
#cls-anim {
    width: 100%;
    animation-name: clsAnim;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: steps(2,jump-start);
    background-blend-mode: lighten;
    border: 0.75px solid var(--fg-color-secondary);
    background-image: url(/img/sample-post.png);
    background-size: 100%;
    margin-bottom: 1.5rem;
}
</style>
<figure>
    <svg id="cls-anim" viewBox="0 0 100 67">
        <circle r="10" cx="14" cy="21"/><!--circle-->
        <rect width="40" height="0.5" x="29" y="7"/><!-- line -->
        <rect width="4" height="4" x="83" y="45"/><!--square-->
    </svg>
</figure>

Circle, as the most massive element, has immense gravity and attracts attention immediately. Here it corresponds to the location of the header which, since we read left-to-right, is the first thing we read and therefore crucially identifies the rest of the content. Line, in its proximity to circle, commands our attention next and thus corresponds to the beginning of the text block which we read next. Square does not much more than pinning down the bounds of the area introduced by line, but as one scrolls, circle vanishes and the edges of the text become focal. On mobile, these details will not be clear.
