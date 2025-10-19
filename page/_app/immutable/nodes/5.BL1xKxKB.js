import{s as Mt,n as tt}from"../chunks/scheduler.Cs0xm5t1.js";import{S as qt,i as Tt,e as r,s as i,c as a,k as s,f as l,g as n,d as o}from"../chunks/index.BdoLxVUq.js";function Ht(Lt){let g,et=" LEME Database Encoding Practice",I,u,nt=`Tagging in LEME adds information about the features of Early Modern English word-entries so as to support advanced
  searching. For example, we tag a word by its language so that researchers can restrict their searches to that
  language. We also encode texts so as to expand abbreviations and emend typos, thereby making word-entries easier to
  read.`,A,d,ot=`LEME uses tags that are explicitly called for by lexicographical practices in this period. Early Modern lexicographers
  are seldom interested in variant spellings or syllabification: as a result, we do not have tags for these. LEME also
  does not require a conventional order of elements in a word-entry. If a lexicographer wants to reverse the order of
  headword and explanation, use sentences as headwords, or permit etymons inside an explanation, so be it. We do not use
  the word "definition" for an explanation because definitions bore only a non-lexical meaning until the first quarter
  of the eighteenth century. Definitions applied to things, not words. An explanation may be idiosyncratic. It can
  include translated equivalents, synonyms, logical definitions (of things), conceptualizations, etymologies, and even
  anecdotal digressions. Word-entries may appear as running prose within paragraphs.`,S,p,rt=`The simpler the LEME tagset can be, the better. When drilling down into a word-entry, LEME enables you to see this
  encoding. All word-entries have these three structural tags:
  <br/>`,W,h,at=`<strong>&lt;wordentry type=&quot;a&quot;&gt;
    <br/>
    &lt;form lang=&quot;en&quot;&gt;</strong>
  …
  <strong>&lt;/form&gt;
    <br/>
    &lt;xpln lang=&quot;en&quot;&gt;</strong>
  …
  <strong>&lt;/xp</strong> <u><strong>l</strong></u> <strong>n&gt;
    <br/>
    &lt;/wordentry&gt;</strong>`,z,f,st=`Each word-entry contains a headword (
  <strong>form</strong>
  ) and an explanation (
  <strong>xpln</strong>
  ). Each tag has a small number of features. The word-entry here is marked as sorted alphabetically within the dictionary.
  Both
  <strong>form</strong>
  and
  <strong>xpln</strong>
  tags can have a feature or element,
  <strong>lang</strong>
  , that specifies their language. Most tags come in pairs: the first one begins characterizing the word that follows, and
  the second tag ends that annotation. `,D,c,it=`Tags also describe other structures inside word-entries. Both <strong>form</strong>
  and
  <strong>xpln</strong>
  may enclose other tags, some of which is textual:
  <strong>expan</strong>
  marks an expanded abbreviation,
  <strong>emend</strong>
  the LEME editor&#39;s emendation of a typo, correction the scribe&#39;s change of a word or passage in a manuscript text, and
  <strong>damage</strong>
  a
  <u>section of the text</u>
  that is obliterated.
  <u>Inside a word-entry</u>
  , term tags mark a change in language and
  <strong>xref</strong> <u>marks</u>
  a cross-reference. Each
  <u>word-entry</u>
  may also have, as an internal feature, an element that LEME calls a
  <strong>lexeme</strong>
  , which is the modern spelling and part of speech for the corresponding headword in the Oxford English Dictionary.`,R,m,lt=`<strong>&lt;wordentry type=&quot;h&quot;&gt;
    <br/>
    &lt;form lexeme=&quot;ditty(n)&quot;&gt;</strong>
  dittie
  <strong>&lt;/form&gt;
    <br/>
    &lt;xpln&gt;</strong>
  the matter of a song.
  <strong>&lt;/xpln&gt;
    <br/>
    &lt;/wordentry&gt;</strong>`,U,b,gt=`Imagine tags as Russian dolls. The outermost two-part <strong>leme</strong>
  tag encloses a number of inner
  <strong>sections</strong>
  , which may enclose several smaller gatherings, such as different glossaries. Each glossary may consist of groups of word-entries,
  such as for words beginning with A, B, C, etc., or for word-entries about a series of topical subjects.`,B,x,ut=`The art of assigning lexemes to old-spelling words is called <u>lemmatization</u>
  . Lemmatization enables LEME to respond to search queries expressed in modern spellings by listing word-entries whose forms
  and explanations use old spellings and inflections of the search term.`,j,w,dt=`In modern dictionaries, word-entries often have sub-entries that describe different senses of the headword. Many Early
  Modern lexical works do not clearly mark senses but all the same may have reams of sub-entries. Here is a sample from
  John Rider's English-Latin dictionary of 1589:`,F,y,pt=`<strong>&lt;wordentry type=&quot;h&quot;&gt;
    <br/>
    &lt;form lang=&quot;en&quot;&gt;</strong>
  To Chaine, or tie in, or with chaines.
  <strong>&lt;/form&gt;
    <br/>
    &lt;xpln lang=&quot;la&quot;&gt;</strong>
  1 Cateno.
  <br/> <strong>&lt;subform lang=&quot;en&quot;&gt;</strong>
  To chaine together.
  <strong>&lt;/subform&gt;
    <br/>
    &lt;subxpln lang=&quot;la&quot;&gt;</strong>
  1 Concateno.
  <strong>&lt;/subxpln&gt;
    <br/>
    &lt;subform lang=&quot;en&quot;&gt;</strong>
  Chained.
  <strong>&lt;/subform&gt;
    <br/>
    &lt;subxpln lang=&quot;la&quot;&gt;</strong>
  1 Catenatus, p. catenarius, ad
  <strong>&lt;/subxpln&gt;
    <br/>
    &lt;subform lang=&quot;en&quot;&gt;</strong>
  A chaine.
  <strong>&lt;/subform&gt;
    <br/>
    &lt;subxpln lang=&quot;la&quot;&gt;</strong>
  1 Catena, f.
  <strong>&lt;/subxpln&gt;
    <br/>
    &lt;subform lang=&quot;en&quot;&gt;</strong>
  A little chaine.
  <strong>&lt;/subform&gt;
    <br/>
    &lt;subxpln lang=&quot;la&quot;&gt;</strong>
  1 Catenula, catenna, f. catellum, n.
  <strong>&lt;/subxpln&gt;
    <br/>
    &lt;subform lang=&quot;en&quot;&gt;</strong>
  A chaining.
  <strong>&lt;/subform&gt;
    <br/>
    &lt;subxpln lang=&quot;la&quot;&gt;</strong>
  1 Catenatio, f.
  <strong>&lt;/subxpln&gt;
    <br/>
    &lt;/xpln&gt;
    <br/>
    &lt;/wordentry&gt;</strong>`,X,v,ht=`Rider's practice does not conform to modern expectations in some respects. Note how he places a miniature monolingual
  English word-entry within the headword form; and how his sub-entries sometimes resemble a different sense ("To chaine
  together"), and other times various derivatives of the "Cateno" word-family (which all share the same root).`,J,E,ft=`LEME aims at an intelligible transcription of its lexical texts. In the 1990s, I developed a more florid tag-set
  suited for diplomatic or critical editions. When I changed from making editions to developing a databas
  <u>e</u>
  , my tags contracted. Eventually, with the emergence of the Text Encoding Initiative guidelines, I dis
  <u>re</u>
  garded most tags for traits of display (e.g., font) and bibliographical elements (e.g., signature, catchword, running-titles).
  Yet LEME often keeps to the original lineation of its texts because that promotes easier proofreading.`,N,C,ct=`Encoding in LEME exists even at the level of the individual character. Unicode supplies us with what we need, although
  it also uses many popular entity references that are not as taxing on memory as Unicode. For example, <strong>&amp;shy;</strong>
  (soft hyphen) joins words split by a line-end,
  <strong>&amp;amp;</strong>
  is ampersand, and
  <strong>&amp;oelig;</strong>
  and
  <strong>&amp;aelig;</strong>
  are the two digraphs. In another respect, regrettably, LEME lacks a standard for reproducing special abbreviation characters
  in Renaissance texts. We use our own shorthand codes based loosely on the appearance of the character, but in very formal
  encoding for exchange purposes, we use Babelmap, an excellent tool, to input actual Unicode character sets.`,O,L,mt=`Various tags are <u>permitted</u>
  and recognized within wordentries but, during processing, are silently ignored. They are &lt;cit&gt;, &lt;correction&gt;,
  &lt;damage&gt;, &lt;doubtful&gt;, &lt;f&gt;, &lt;hungword&gt;, &lt;infl&gt;, &lt;lemeformat&gt;, &lt;pos&gt;, &lt;pronun&gt;,
  and &lt;s&gt;. They can be seen but are not acted on by the database.`,Q,M,bt=`The tag collection in LEME is a creature of SQL database technology. It does not pretend to be a recommended standard
  for other corpora. However, LEME is translating its SQL tags into two formal xml languages for purposes of exchange:
  one uses LEME's own tags, and the other uses TEI, an international standard. A discussion of that will coincide with
  the release of LEME's texts in xml format.`,V,q,xt="List of LEME Database Tags",Y,T,wt="STRUCTURAL",G,H,yt=`Leme  (text id)
  <br/>
  Section  (such as title-page, preface, glossary, etc.)
  <br/>
  Set  (for use at the start of an encoded text to set defaults)
  <br/>
  Wordgroup1  (largest unit of grouping word-entries: e.g., alphabetical)
  <br/>
  Wordgroup2  (sub-group within wordgroup1)
  <br/>
  Wordgroup3  (sub-group within wordgroup2)
  <br/>
  Wordentry  (complete word-entry)
  <br/>
  Form  (headword)
  <br/>
  Xpln  (explanation of headword)
  <br/>
  Subform  (related sub-headword)
  <br/>
  Subxpln  (explanation of sub-headword)
  <br/>
  Heading  (titles of sections)
  <br/>
  Closing  (colophon)
  <br/>
  Alpha  (alphabetic letter for current wordgroup1)`,K,_,vt="TEXTUAL",Z,P,Et=`Addition    (annotation by <u>someone</u>
  other than editor or author)
  <br/>
  Blockquote  (equivalent to lemeformat)
  <br/>
  Cit  (citation)
  <br/>
  Class  (text-type, such as an etymon language)
  <br/>
  Correction    (a scribe&#39;s correction in a manuscript)
  <br/>
  Damage  (loss of text)
  <br/>
  Doubtful  (uncertain reading)
  <br/>
  Editoraddition  (addition of clarifying text by the editor)
  <br/>
  Emend  (editor&#39;s correction)
  <br/>
  Etym  (etymon)
  <br/>
  Etymlang  (language of an etymon)
  <br/>
  Expan  (expansion of a contraction)
  <br/>
  Expression   (identical with term tag)
  <br/>
  F  (font)
  <br/>
  Hungword  (word or word-part shifted to adjacent line)
  <br/>
  Infl  (inflection)
  <br/>
  Joinnext  (display adjacent word-entries together)
  <br/>
  Lemeformat    (passage set apart, such as verse)
  <br/>
  Lemenote  (editorial comment in a wordentry)
  <br/>
  Lemepagenote  (editorial note on a page but outside a word-entry)
  <br/>
  Note  (marginal comment, item number, etc.)
  <br/>
  Page   (page-break marker)
  <br/>
  Pos   (part of speech)
  <br/>
  Pronun     (pronunciation)
  <br/>
  S  (scribe)
  <br/>
  Term  (change of language)
  <br/>
  Xref  (cross-reference)`,$,k,Ct=`<br/>
  Editor / 9 October 2018`;return{c(){g=r("h1"),g.textContent=et,I=i(),u=r("p"),u.textContent=nt,A=i(),d=r("p"),d.textContent=ot,S=i(),p=r("p"),p.innerHTML=rt,W=i(),h=r("p"),h.innerHTML=at,z=i(),f=r("p"),f.innerHTML=st,D=i(),c=r("p"),c.innerHTML=it,R=i(),m=r("p"),m.innerHTML=lt,U=i(),b=r("p"),b.innerHTML=gt,B=i(),x=r("p"),x.innerHTML=ut,j=i(),w=r("p"),w.textContent=dt,F=i(),y=r("p"),y.innerHTML=pt,X=i(),v=r("p"),v.textContent=ht,J=i(),E=r("p"),E.innerHTML=ft,N=i(),C=r("p"),C.innerHTML=ct,O=i(),L=r("p"),L.innerHTML=mt,Q=i(),M=r("p"),M.textContent=bt,V=i(),q=r("h2"),q.textContent=xt,Y=i(),T=r("h3"),T.textContent=wt,G=i(),H=r("p"),H.innerHTML=yt,K=i(),_=r("h3"),_.textContent=vt,Z=i(),P=r("p"),P.innerHTML=Et,$=i(),k=r("p"),k.innerHTML=Ct},l(t){g=a(t,"H1",{"data-svelte-h":!0}),s(g)!=="svelte-1ukuznk"&&(g.textContent=et),I=l(t),u=a(t,"P",{"data-svelte-h":!0}),s(u)!=="svelte-zxmhfa"&&(u.textContent=nt),A=l(t),d=a(t,"P",{"data-svelte-h":!0}),s(d)!=="svelte-u50wc9"&&(d.textContent=ot),S=l(t),p=a(t,"P",{"data-svelte-h":!0}),s(p)!=="svelte-e0b0kb"&&(p.innerHTML=rt),W=l(t),h=a(t,"P",{"data-svelte-h":!0}),s(h)!=="svelte-1iup8ke"&&(h.innerHTML=at),z=l(t),f=a(t,"P",{"data-svelte-h":!0}),s(f)!=="svelte-1v4nkxq"&&(f.innerHTML=st),D=l(t),c=a(t,"P",{"data-svelte-h":!0}),s(c)!=="svelte-1s5n5d2"&&(c.innerHTML=it),R=l(t),m=a(t,"P",{"data-svelte-h":!0}),s(m)!=="svelte-1m2n6rc"&&(m.innerHTML=lt),U=l(t),b=a(t,"P",{"data-svelte-h":!0}),s(b)!=="svelte-1dqd62w"&&(b.innerHTML=gt),B=l(t),x=a(t,"P",{"data-svelte-h":!0}),s(x)!=="svelte-1u7b1pr"&&(x.innerHTML=ut),j=l(t),w=a(t,"P",{"data-svelte-h":!0}),s(w)!=="svelte-1o5wu1m"&&(w.textContent=dt),F=l(t),y=a(t,"P",{"data-svelte-h":!0}),s(y)!=="svelte-1exqlgf"&&(y.innerHTML=pt),X=l(t),v=a(t,"P",{"data-svelte-h":!0}),s(v)!=="svelte-skk4g2"&&(v.textContent=ht),J=l(t),E=a(t,"P",{"data-svelte-h":!0}),s(E)!=="svelte-1x6zal"&&(E.innerHTML=ft),N=l(t),C=a(t,"P",{"data-svelte-h":!0}),s(C)!=="svelte-1yf6v0p"&&(C.innerHTML=ct),O=l(t),L=a(t,"P",{"data-svelte-h":!0}),s(L)!=="svelte-opow6n"&&(L.innerHTML=mt),Q=l(t),M=a(t,"P",{"data-svelte-h":!0}),s(M)!=="svelte-snqxbs"&&(M.textContent=bt),V=l(t),q=a(t,"H2",{"data-svelte-h":!0}),s(q)!=="svelte-1qxbniy"&&(q.textContent=xt),Y=l(t),T=a(t,"H3",{"data-svelte-h":!0}),s(T)!=="svelte-1ko2nwv"&&(T.textContent=wt),G=l(t),H=a(t,"P",{"data-svelte-h":!0}),s(H)!=="svelte-bi7xui"&&(H.innerHTML=yt),K=l(t),_=a(t,"H3",{"data-svelte-h":!0}),s(_)!=="svelte-11h829b"&&(_.textContent=vt),Z=l(t),P=a(t,"P",{"data-svelte-h":!0}),s(P)!=="svelte-1vh6tvf"&&(P.innerHTML=Et),$=l(t),k=a(t,"P",{"data-svelte-h":!0}),s(k)!=="svelte-1spolc1"&&(k.innerHTML=Ct)},m(t,e){n(t,g,e),n(t,I,e),n(t,u,e),n(t,A,e),n(t,d,e),n(t,S,e),n(t,p,e),n(t,W,e),n(t,h,e),n(t,z,e),n(t,f,e),n(t,D,e),n(t,c,e),n(t,R,e),n(t,m,e),n(t,U,e),n(t,b,e),n(t,B,e),n(t,x,e),n(t,j,e),n(t,w,e),n(t,F,e),n(t,y,e),n(t,X,e),n(t,v,e),n(t,J,e),n(t,E,e),n(t,N,e),n(t,C,e),n(t,O,e),n(t,L,e),n(t,Q,e),n(t,M,e),n(t,V,e),n(t,q,e),n(t,Y,e),n(t,T,e),n(t,G,e),n(t,H,e),n(t,K,e),n(t,_,e),n(t,Z,e),n(t,P,e),n(t,$,e),n(t,k,e)},p:tt,i:tt,o:tt,d(t){t&&(o(g),o(I),o(u),o(A),o(d),o(S),o(p),o(W),o(h),o(z),o(f),o(D),o(c),o(R),o(m),o(U),o(b),o(B),o(x),o(j),o(w),o(F),o(y),o(X),o(v),o(J),o(E),o(N),o(C),o(O),o(L),o(Q),o(M),o(V),o(q),o(Y),o(T),o(G),o(H),o(K),o(_),o(Z),o(P),o($),o(k))}}}class kt extends qt{constructor(g){super(),Tt(this,g,null,Ht,Mt,{})}}export{kt as component};
