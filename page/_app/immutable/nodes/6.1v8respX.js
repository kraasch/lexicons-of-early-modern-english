import{s as li,n as Fe}from"../chunks/scheduler.Cs0xm5t1.js";import{S as oi,i as si,e as r,s,c as l,k as o,f as a,g as n,d as i}from"../chunks/index.BdoLxVUq.js";function ai(ri){let d,Ge="Glossary",wt,p,Je=`<strong>Abbreviation Character</strong>
  The code in the type of an &lt;expan&gt; tag. This code stands for the abbreviation or contraction symbol in the text and
  imitates the look of what we see in the text at the point of the abbreviation. For example, in
  <i>b&lt;expan type=&quot;o+_&quot;&gt;on&lt;/expan&gt;d</i>
  , the character ō is what appears in the text in the word
  <i>bōd</i>
  . The ō is not an accented o with a macron over it but an abbreviation. A new type is needed to represent that character
  but no accepted standard yet exists for abbreviation characters. LEME uses a coded imitation of the shape of the abbreviation
  character:
  <i>o</i>
  followed by the superscript marker (+) of an underscore (_). The commonly used abbreviation or contraction codes for Early
  Modern printed books include:`,_t,u,Ne=`<thead><tr><th>Abbreviation Character in Text</th> <th>Code</th> <th>Expansion</th></tr></thead> <tbody><tr><td>ā</td> <td>a+_</td> <td>an or am</td></tr> <tr><td>ē</td> <td>e+_</td> <td>en or em</td></tr> <tr><td>ī</td> <td>i+_</td> <td>in or im</td></tr> <tr><td>ō</td> <td>o+_</td> <td>on or om</td></tr> <tr><td>ū</td> <td>u+_</td> <td>un or um</td></tr> <tr><td>w
        <sup>t</sup></td> <td>w+t</td> <td>with</td></tr> <tr><td>y
        <sup>e</sup></td> <td>y+e
        <sup></sup></td> <td>the</td></tr> <tr><td>y
        <sup>t</sup></td> <td>y+t
        <sup></sup></td> <td>that</td></tr> <tr><td>y
        <sup>u</sup></td> <td>y+u</td> <td>thou</td></tr> <tr><td><img src="/letter1.jpeg" alt="letter p with added horizontal stroke through descender"/></td> <td>p-</td> <td>per <em>or</em>
        par</td></tr> <tr><td><img src="/letter2.jpeg" alt="letter p with lower side of bowl extended down diagonally through descender"/></td> <td>,p</td> <td>pro</td></tr> <tr><td>9</td> <td>9</td> <td>us</td></tr> <tr><td>4</td> <td>4</td> <td>rum</td></tr></tbody>`,Ct,f,Ue=`<strong>Alston</strong>
  : Entry number in R. C. Alston&#39;s
  <i>A Bibliography of the English Language to 1800</i>
  (1965-)`,Pt,h,Xe=`<strong>analyzed lexicon</strong>
  : See lexicon`,Et,v,Qe=`<strong>bilingual lexicon</strong>
  : See lexicon`,kt,x,Re=`<strong>catchword</strong>
  : &quot;The first word of the following page inserted at the right-hand lower corner of each page of a book, below the last
  line&quot; (OED). LEME transcriptions do not normally record catchwords.`,zt,m,Ve=`<strong>colophon</strong>
  : &quot;The inscription or device, sometimes pictorial or emblematic, formerly placed at the end of a book or manuscript, and
  containing the title, the scribe&#39;s or printer&#39;s name, date and place of printing, etc.&quot; (OED)`,qt,c,We=`<strong>concordance</strong>
  : A dictionary of the different words in a single book. It normally is an alphabetical index of different headwords, each
  word-entry followed by at least a brief illustrative quotation and a reference citation of its location in that text. John
  Marbeck’s concordance (1550) adds to these elements a Latin translation of the headword from the Vulgate, and a final cross-reference
  to similar headwords found elsewhere in the concordance.`,jt,M,Ke=`<strong>character abbreviation</strong>
  : see
  <strong>expansion</strong>`,St,L,Ye=`<strong>character set</strong>
  : the letters, numbers, and special characters in LEME are encoded in UTF-8 (Unicode)`,At,g,Ze=`<strong>contraction</strong>
  : see
  <strong>expansion</strong>`,Dt,T,$e=`<strong>definition or logical definition</strong>
  an explanation of a thing, normally specifying its species and those essential features that differentiate the thing from
  other members of its species`,Ot,y,tn=`<strong>definition, lexical</strong>
  an explanation of a word&#39;s meaning or sense, normally specifying enough information to identify the thing that the word
  names`,It,b,en=`<strong>display</strong>
  : the representation of a lexical text`,Bt,H,nn=`<strong>dittography</strong>
  : &quot;the unintentional repetition of a letter or word, or series of letters or words, by a copyist&quot; (OED)`,Ft,w,rn=`<strong>EMEDD</strong>
  : Early Modern English Dictionaries database (1996-2007)`,Gt,_,ln=`<strong>emendation</strong>
  : an editorial correction of an error usually made by the compositor or scribe. LEME retains the error within a tag that
  surrounds the correction`,Jt,C,on=`<strong>encoding</strong>
  : see source encoding`,Nt,P,sn=`<strong>encyclopedic-lexical</strong>
  : see lexical encyclopedia`,Ut,E,an=`<strong>entity reference</strong>
  : a conventional notation in SGML and XML used to represent a special character that may not be found on a standard keyboard`,Xt,k,dn=`<strong>errata</strong>
  : a list of corrections to errors in a printed text`,Qt,z,pn=`<strong>error</strong>
  : editorial emendation, normally of a printer&#39;s mistake (not a correction of fact or interpretation)`,Rt,q,un=`<strong>expansion</strong>
  : the writing out of a sequence of characters that have been abbreviated or contracted`,Vt,j,fn=`<strong>explanation</strong>
  : the post-headword or post-lemmatic part of word-entry that gives a definition, a synonym, a corresponding term in another
  language, or some other comment`,Wt,S,hn=`<strong>expression</strong>
  : a word, phrase, or sentence that is either cited as such or that appears in a language that differs from its context`,Kt,A,vn=`<strong>form</strong>
  : the principal initial term in a word-entry, and what is named by the post-lemmatic segment. The editorially-made modern
  headword is created from the form. See also sub-form`,Yt,D,xn=`<strong>full word entry</strong>
  : see word entry, full`,Zt,O,mn=`<strong>hanging word</strong>
  : a word at the end of a line that is suspended in the line above or below it`,$t,I,cn=`<strong>hard word</strong>
  : a word borrowed from another language, an invented word, or a term of art that has yet to be absorbed into the mother
  tongue`,te,B,Mn=`<strong>headword</strong>
  : the term by which a word-entry is sorted in an alphabetical or topical lexicon`,ee,F,Ln=`<strong>headword, modernized</strong>
  : an editorial headword, encoded anywhere in a word-entry, that puts an inflected, old-spelling, or variant word-form into
  a modern-spelling form called a lemma. Nouns are encoded by the nominative singular inflection, and verbs by the infinitive
  form.`,ne,G,gn=`<strong>imprint</strong>
  : the printer and the publisher of a book`,ie,J,Tn=`<strong>incipit</strong>
  : the first line of a manuscript`,re,N,yn=`<strong>lemmatized headword</strong>
  : see headword, modernized`,le,U,bn=`<strong>lexical encyclopedia</strong>
  : a lexical text whose word-entries describe things in the world more than explain the words that denote or name them`,oe,X,Hn=`<strong>LEXICONS</strong>
  : menu on Welcome Page. This allows a reader to choose ways of browsing an index of the lexical works in the Early Modern
  period, by
  <ins>LEME Id,</ins>
  author, title, date, and subject.`,se,Q,wn=`<strong>lexicon</strong>
  : a text with lexical content, whether organized formally into word-entries or distributed through running text as definitions
  or explanations of words or things`,ae,R,_n=`<strong>lexicon genre</strong>
  : the type of lexical work, one of multilingual dictionary, glossary, or vocabulary, English dictionary or glossary, grammar,
  hard-word and term-of-art dictionary or glossary, indexes of proper and place names, spelling texts, and treatises (without
  an explicit lexical structure)`,de,V,Cn=`<strong>lexicon subject</strong>
  : the content of a lexical work, such as herbs, the sea, the law, medicine, and so on`,pe,W,Pn=`<strong>lexicon, analyzed</strong>
  : a lexical text that has had its headwords editorially-lemmatized and that has been encoded by headword, explanation,
  sub-headwords, sub-explanations, cross-references, quotations, and other features. This analysis makes possible the searching
  of lexical works by their features, such as their lemmatized headwords, and by the position of words to be retrieved`,ue,K,En=`<strong>lexicon, bilingual</strong>
  : a lexical text with word-entries that display its forms in one language, and its explanations in another language`,fe,Y,kn=`<strong>lexicon, displayable</strong>
  : a lexical text whose transcription can be viewed, page by page, word-entry by word-entry. Only analyzed lexicons can
  be displayed.`,he,Z,zn=`<strong>lexicon, polyglot</strong>
  : a lexical text with word-entries that display their forms in one language, and their explanations in two or more different
  languages`,ve,$,qn=`<strong>lexicon, unanalyzed</strong>
  : a lexical work that may be searched within LEME but that cannot be searched with restrictions or be displayed, page by
  page, entry by entry`,xe,tt,jn=`<strong>ligature</strong>
  : joined letters, such as
  <i>æ</i>`,me,et,Sn=`<strong>modern headword</strong>
  : see headword, modernized`,ce,nt,An=`<strong>normalized headword</strong>
  : see headword, modernized`,Me,it,Dn=`<strong>page text</strong>
  : parts of a lexical text that are not encoded as word-entries, such as an introduction`,Le,rt,On=`<strong>part of speech (English)</strong>
  : abbreviation, adjective, adverb, affix, conjunction, determiner or article, exclamation or interjection, noun, number,
  place name, preposition, pronoun, proper name, relative, and verb`,ge,lt,In=`<strong>pointing</strong>
  : punctuation marks`,Te,ot,Bn=`<strong>polyglot lexicon</strong>
  : see lexicon`,ye,st,Fn=`<strong>post-lemmatic segment</strong>
  : the explanatory part of a word-entry`,be,at,Gn=`<strong>running title</strong>
  : a short title or heading found at the top of a page that does not divide the text into different sections. LEME transcriptions
  do not record running titles.`,He,dt,Jn=`<strong>Schäfer</strong>
  : entry number in Jürgen Schäfer&#39;s
  <i>Early Modern English Lexicography</i>
  (1989)`,we,pt,Nn=`<strong>signature</strong>
  : &quot;A letter or figure, a set or combination of letters or figures, etc., placed by the printer at the foot of the first
  page (and frequently on one or more of the succeeding pages) of every sheet in a book, for the purpose of showing the order
  in which these are to be placed or bound&quot; (OED). . LEME transcriptions encode but do not transcribe signatures.`,_e,ut,Un=`<strong>soft hyphen (&amp;shy; or &amp;#173;)</strong>
  : an entity reference that indicates a break in a word over a line-break (distinguished from a hard hyphen, which indicates
  a compounding)`,Ce,ft,Xn=`<strong>source encoding</strong>
  : mySQL-like tags in LEME transcriptions mark the parts of word-entries, and other features of texts, so as to facilitate
  their searching and retrieval`,Pe,ht,Qn=`<strong>special characters</strong>
  : see entity reference`,Ee,vt,Rn=`<strong>spelling list</strong>
  : a lexical text that lists English words either for inventorying the vocabulary of a language or for standardizing orthography`,ke,xt,Vn=`<strong>static database</strong>
  : where a user moves through the database by hand looking for an item rather than asks a program’s search function to find
  the item`,ze,mt,Wn=`<strong>sub-form</strong>
  : the principal initial term in a sub-entry, usually a phrasal construction that includes the form, or an inflection of
  the form`,qe,ct,Kn=`<strong>term of art</strong>
  : an Early Modern English expression for a word that belongs to a professional or occupational register and may not be
  widely known to speakers at large`,je,Mt,Yn=`<strong>text type</strong>
  : printed book or manuscript`,Se,Lt,Zn=`<strong>transcription source</strong>
  : the edition or the manuscript used as the basis for a LEME transcription of a lexicon text`,Ae,gt,$n=`<strong>treatise</strong>
  : a lexical genre of works that explains or defines or comments on words or things in running prose or marginal notes rather
  than in explicitly structured word-entries`,De,Tt,ti=`<strong>unanalyzed lexicon</strong>
  : see lexicon`,Oe,yt,ei=`<strong>vocabulary</strong>
  : a collection of words or word-entries for language, a given subject, or a topic`,Ie,bt,ni=`<strong>word entry</strong>
  : a headword (lemma) or word-form, accompanied by an explanation (a definition, a synonym, a corresponding term in another
  language)`,Be,Ht,ii=`<strong>word-group</strong>
  : a sequence of word-entries found under an identifying heading, such as an alphabetic letter or a topic name`;return{c(){d=r("h1"),d.textContent=Ge,wt=s(),p=r("p"),p.innerHTML=Je,_t=s(),u=r("table"),u.innerHTML=Ne,Ct=s(),f=r("p"),f.innerHTML=Ue,Pt=s(),h=r("p"),h.innerHTML=Xe,Et=s(),v=r("p"),v.innerHTML=Qe,kt=s(),x=r("p"),x.innerHTML=Re,zt=s(),m=r("p"),m.innerHTML=Ve,qt=s(),c=r("p"),c.innerHTML=We,jt=s(),M=r("p"),M.innerHTML=Ke,St=s(),L=r("p"),L.innerHTML=Ye,At=s(),g=r("p"),g.innerHTML=Ze,Dt=s(),T=r("p"),T.innerHTML=$e,Ot=s(),y=r("p"),y.innerHTML=tn,It=s(),b=r("p"),b.innerHTML=en,Bt=s(),H=r("p"),H.innerHTML=nn,Ft=s(),w=r("p"),w.innerHTML=rn,Gt=s(),_=r("p"),_.innerHTML=ln,Jt=s(),C=r("p"),C.innerHTML=on,Nt=s(),P=r("p"),P.innerHTML=sn,Ut=s(),E=r("p"),E.innerHTML=an,Xt=s(),k=r("p"),k.innerHTML=dn,Qt=s(),z=r("p"),z.innerHTML=pn,Rt=s(),q=r("p"),q.innerHTML=un,Vt=s(),j=r("p"),j.innerHTML=fn,Wt=s(),S=r("p"),S.innerHTML=hn,Kt=s(),A=r("p"),A.innerHTML=vn,Yt=s(),D=r("p"),D.innerHTML=xn,Zt=s(),O=r("p"),O.innerHTML=mn,$t=s(),I=r("p"),I.innerHTML=cn,te=s(),B=r("p"),B.innerHTML=Mn,ee=s(),F=r("p"),F.innerHTML=Ln,ne=s(),G=r("p"),G.innerHTML=gn,ie=s(),J=r("p"),J.innerHTML=Tn,re=s(),N=r("p"),N.innerHTML=yn,le=s(),U=r("p"),U.innerHTML=bn,oe=s(),X=r("p"),X.innerHTML=Hn,se=s(),Q=r("p"),Q.innerHTML=wn,ae=s(),R=r("p"),R.innerHTML=_n,de=s(),V=r("p"),V.innerHTML=Cn,pe=s(),W=r("p"),W.innerHTML=Pn,ue=s(),K=r("p"),K.innerHTML=En,fe=s(),Y=r("p"),Y.innerHTML=kn,he=s(),Z=r("p"),Z.innerHTML=zn,ve=s(),$=r("p"),$.innerHTML=qn,xe=s(),tt=r("p"),tt.innerHTML=jn,me=s(),et=r("p"),et.innerHTML=Sn,ce=s(),nt=r("p"),nt.innerHTML=An,Me=s(),it=r("p"),it.innerHTML=Dn,Le=s(),rt=r("p"),rt.innerHTML=On,ge=s(),lt=r("p"),lt.innerHTML=In,Te=s(),ot=r("p"),ot.innerHTML=Bn,ye=s(),st=r("p"),st.innerHTML=Fn,be=s(),at=r("p"),at.innerHTML=Gn,He=s(),dt=r("p"),dt.innerHTML=Jn,we=s(),pt=r("p"),pt.innerHTML=Nn,_e=s(),ut=r("p"),ut.innerHTML=Un,Ce=s(),ft=r("p"),ft.innerHTML=Xn,Pe=s(),ht=r("p"),ht.innerHTML=Qn,Ee=s(),vt=r("p"),vt.innerHTML=Rn,ke=s(),xt=r("p"),xt.innerHTML=Vn,ze=s(),mt=r("p"),mt.innerHTML=Wn,qe=s(),ct=r("p"),ct.innerHTML=Kn,je=s(),Mt=r("p"),Mt.innerHTML=Yn,Se=s(),Lt=r("p"),Lt.innerHTML=Zn,Ae=s(),gt=r("p"),gt.innerHTML=$n,De=s(),Tt=r("p"),Tt.innerHTML=ti,Oe=s(),yt=r("p"),yt.innerHTML=ei,Ie=s(),bt=r("p"),bt.innerHTML=ni,Be=s(),Ht=r("p"),Ht.innerHTML=ii},l(t){d=l(t,"H1",{"data-svelte-h":!0}),o(d)!=="svelte-18lhlr0"&&(d.textContent=Ge),wt=a(t),p=l(t,"P",{"data-svelte-h":!0}),o(p)!=="svelte-1sfjvgp"&&(p.innerHTML=Je),_t=a(t),u=l(t,"TABLE",{"data-svelte-h":!0}),o(u)!=="svelte-mnx9ze"&&(u.innerHTML=Ne),Ct=a(t),f=l(t,"P",{"data-svelte-h":!0}),o(f)!=="svelte-y75a1"&&(f.innerHTML=Ue),Pt=a(t),h=l(t,"P",{"data-svelte-h":!0}),o(h)!=="svelte-wuir72"&&(h.innerHTML=Xe),Et=a(t),v=l(t,"P",{"data-svelte-h":!0}),o(v)!=="svelte-w3s3q7"&&(v.innerHTML=Qe),kt=a(t),x=l(t,"P",{"data-svelte-h":!0}),o(x)!=="svelte-fssvt1"&&(x.innerHTML=Re),zt=a(t),m=l(t,"P",{"data-svelte-h":!0}),o(m)!=="svelte-r8cl38"&&(m.innerHTML=Ve),qt=a(t),c=l(t,"P",{"data-svelte-h":!0}),o(c)!=="svelte-m4xi0x"&&(c.innerHTML=We),jt=a(t),M=l(t,"P",{"data-svelte-h":!0}),o(M)!=="svelte-1f91y1h"&&(M.innerHTML=Ke),St=a(t),L=l(t,"P",{"data-svelte-h":!0}),o(L)!=="svelte-1017zxh"&&(L.innerHTML=Ye),At=a(t),g=l(t,"P",{"data-svelte-h":!0}),o(g)!=="svelte-1r309w2"&&(g.innerHTML=Ze),Dt=a(t),T=l(t,"P",{"data-svelte-h":!0}),o(T)!=="svelte-3bmc2f"&&(T.innerHTML=$e),Ot=a(t),y=l(t,"P",{"data-svelte-h":!0}),o(y)!=="svelte-i2uglr"&&(y.innerHTML=tn),It=a(t),b=l(t,"P",{"data-svelte-h":!0}),o(b)!=="svelte-uxd06e"&&(b.innerHTML=en),Bt=a(t),H=l(t,"P",{"data-svelte-h":!0}),o(H)!=="svelte-1byx1nj"&&(H.innerHTML=nn),Ft=a(t),w=l(t,"P",{"data-svelte-h":!0}),o(w)!=="svelte-73o3lz"&&(w.innerHTML=rn),Gt=a(t),_=l(t,"P",{"data-svelte-h":!0}),o(_)!=="svelte-1gngl1k"&&(_.innerHTML=ln),Jt=a(t),C=l(t,"P",{"data-svelte-h":!0}),o(C)!=="svelte-1teqort"&&(C.innerHTML=on),Nt=a(t),P=l(t,"P",{"data-svelte-h":!0}),o(P)!=="svelte-1gxjlst"&&(P.innerHTML=sn),Ut=a(t),E=l(t,"P",{"data-svelte-h":!0}),o(E)!=="svelte-zky4mj"&&(E.innerHTML=an),Xt=a(t),k=l(t,"P",{"data-svelte-h":!0}),o(k)!=="svelte-1y0yuhg"&&(k.innerHTML=dn),Qt=a(t),z=l(t,"P",{"data-svelte-h":!0}),o(z)!=="svelte-cg8ro7"&&(z.innerHTML=pn),Rt=a(t),q=l(t,"P",{"data-svelte-h":!0}),o(q)!=="svelte-1is03ut"&&(q.innerHTML=un),Vt=a(t),j=l(t,"P",{"data-svelte-h":!0}),o(j)!=="svelte-yt45k8"&&(j.innerHTML=fn),Wt=a(t),S=l(t,"P",{"data-svelte-h":!0}),o(S)!=="svelte-rdecmi"&&(S.innerHTML=hn),Kt=a(t),A=l(t,"P",{"data-svelte-h":!0}),o(A)!=="svelte-y77jcp"&&(A.innerHTML=vn),Yt=a(t),D=l(t,"P",{"data-svelte-h":!0}),o(D)!=="svelte-bzf5hi"&&(D.innerHTML=xn),Zt=a(t),O=l(t,"P",{"data-svelte-h":!0}),o(O)!=="svelte-oqunzn"&&(O.innerHTML=mn),$t=a(t),I=l(t,"P",{"data-svelte-h":!0}),o(I)!=="svelte-35d4mr"&&(I.innerHTML=cn),te=a(t),B=l(t,"P",{"data-svelte-h":!0}),o(B)!=="svelte-1cn80ew"&&(B.innerHTML=Mn),ee=a(t),F=l(t,"P",{"data-svelte-h":!0}),o(F)!=="svelte-18bajul"&&(F.innerHTML=Ln),ne=a(t),G=l(t,"P",{"data-svelte-h":!0}),o(G)!=="svelte-famh4q"&&(G.innerHTML=gn),ie=a(t),J=l(t,"P",{"data-svelte-h":!0}),o(J)!=="svelte-hib2xu"&&(J.innerHTML=Tn),re=a(t),N=l(t,"P",{"data-svelte-h":!0}),o(N)!=="svelte-1awynnl"&&(N.innerHTML=yn),le=a(t),U=l(t,"P",{"data-svelte-h":!0}),o(U)!=="svelte-kfxpl3"&&(U.innerHTML=bn),oe=a(t),X=l(t,"P",{"data-svelte-h":!0}),o(X)!=="svelte-r4oq1t"&&(X.innerHTML=Hn),se=a(t),Q=l(t,"P",{"data-svelte-h":!0}),o(Q)!=="svelte-cvh9ur"&&(Q.innerHTML=wn),ae=a(t),R=l(t,"P",{"data-svelte-h":!0}),o(R)!=="svelte-19wzy9"&&(R.innerHTML=_n),de=a(t),V=l(t,"P",{"data-svelte-h":!0}),o(V)!=="svelte-83tg12"&&(V.innerHTML=Cn),pe=a(t),W=l(t,"P",{"data-svelte-h":!0}),o(W)!=="svelte-1d0ulw8"&&(W.innerHTML=Pn),ue=a(t),K=l(t,"P",{"data-svelte-h":!0}),o(K)!=="svelte-17bmssz"&&(K.innerHTML=En),fe=a(t),Y=l(t,"P",{"data-svelte-h":!0}),o(Y)!=="svelte-1b5hh87"&&(Y.innerHTML=kn),he=a(t),Z=l(t,"P",{"data-svelte-h":!0}),o(Z)!=="svelte-tp2ydd"&&(Z.innerHTML=zn),ve=a(t),$=l(t,"P",{"data-svelte-h":!0}),o($)!=="svelte-cmzx0j"&&($.innerHTML=qn),xe=a(t),tt=l(t,"P",{"data-svelte-h":!0}),o(tt)!=="svelte-1qzsrbq"&&(tt.innerHTML=jn),me=a(t),et=l(t,"P",{"data-svelte-h":!0}),o(et)!=="svelte-1bmtifw"&&(et.innerHTML=Sn),ce=a(t),nt=l(t,"P",{"data-svelte-h":!0}),o(nt)!=="svelte-195vr8y"&&(nt.innerHTML=An),Me=a(t),it=l(t,"P",{"data-svelte-h":!0}),o(it)!=="svelte-17hxb6x"&&(it.innerHTML=Dn),Le=a(t),rt=l(t,"P",{"data-svelte-h":!0}),o(rt)!=="svelte-3uzhyc"&&(rt.innerHTML=On),ge=a(t),lt=l(t,"P",{"data-svelte-h":!0}),o(lt)!=="svelte-1pchjhb"&&(lt.innerHTML=In),Te=a(t),ot=l(t,"P",{"data-svelte-h":!0}),o(ot)!=="svelte-1v3zv14"&&(ot.innerHTML=Bn),ye=a(t),st=l(t,"P",{"data-svelte-h":!0}),o(st)!=="svelte-1e1apdn"&&(st.innerHTML=Fn),be=a(t),at=l(t,"P",{"data-svelte-h":!0}),o(at)!=="svelte-qyvco4"&&(at.innerHTML=Gn),He=a(t),dt=l(t,"P",{"data-svelte-h":!0}),o(dt)!=="svelte-1isdtnn"&&(dt.innerHTML=Jn),we=a(t),pt=l(t,"P",{"data-svelte-h":!0}),o(pt)!=="svelte-1s8o35g"&&(pt.innerHTML=Nn),_e=a(t),ut=l(t,"P",{"data-svelte-h":!0}),o(ut)!=="svelte-g5edw4"&&(ut.innerHTML=Un),Ce=a(t),ft=l(t,"P",{"data-svelte-h":!0}),o(ft)!=="svelte-1bus4n2"&&(ft.innerHTML=Xn),Pe=a(t),ht=l(t,"P",{"data-svelte-h":!0}),o(ht)!=="svelte-5xns9h"&&(ht.innerHTML=Qn),Ee=a(t),vt=l(t,"P",{"data-svelte-h":!0}),o(vt)!=="svelte-1e22u5i"&&(vt.innerHTML=Rn),ke=a(t),xt=l(t,"P",{"data-svelte-h":!0}),o(xt)!=="svelte-1eujuf6"&&(xt.innerHTML=Vn),ze=a(t),mt=l(t,"P",{"data-svelte-h":!0}),o(mt)!=="svelte-9i0roa"&&(mt.innerHTML=Wn),qe=a(t),ct=l(t,"P",{"data-svelte-h":!0}),o(ct)!=="svelte-vtrvka"&&(ct.innerHTML=Kn),je=a(t),Mt=l(t,"P",{"data-svelte-h":!0}),o(Mt)!=="svelte-v1xfgw"&&(Mt.innerHTML=Yn),Se=a(t),Lt=l(t,"P",{"data-svelte-h":!0}),o(Lt)!=="svelte-1tx6cp5"&&(Lt.innerHTML=Zn),Ae=a(t),gt=l(t,"P",{"data-svelte-h":!0}),o(gt)!=="svelte-1ky4q3"&&(gt.innerHTML=$n),De=a(t),Tt=l(t,"P",{"data-svelte-h":!0}),o(Tt)!=="svelte-1b5xip5"&&(Tt.innerHTML=ti),Oe=a(t),yt=l(t,"P",{"data-svelte-h":!0}),o(yt)!=="svelte-s3dfvy"&&(yt.innerHTML=ei),Ie=a(t),bt=l(t,"P",{"data-svelte-h":!0}),o(bt)!=="svelte-16n76f1"&&(bt.innerHTML=ni),Be=a(t),Ht=l(t,"P",{"data-svelte-h":!0}),o(Ht)!=="svelte-mywbe9"&&(Ht.innerHTML=ii)},m(t,e){n(t,d,e),n(t,wt,e),n(t,p,e),n(t,_t,e),n(t,u,e),n(t,Ct,e),n(t,f,e),n(t,Pt,e),n(t,h,e),n(t,Et,e),n(t,v,e),n(t,kt,e),n(t,x,e),n(t,zt,e),n(t,m,e),n(t,qt,e),n(t,c,e),n(t,jt,e),n(t,M,e),n(t,St,e),n(t,L,e),n(t,At,e),n(t,g,e),n(t,Dt,e),n(t,T,e),n(t,Ot,e),n(t,y,e),n(t,It,e),n(t,b,e),n(t,Bt,e),n(t,H,e),n(t,Ft,e),n(t,w,e),n(t,Gt,e),n(t,_,e),n(t,Jt,e),n(t,C,e),n(t,Nt,e),n(t,P,e),n(t,Ut,e),n(t,E,e),n(t,Xt,e),n(t,k,e),n(t,Qt,e),n(t,z,e),n(t,Rt,e),n(t,q,e),n(t,Vt,e),n(t,j,e),n(t,Wt,e),n(t,S,e),n(t,Kt,e),n(t,A,e),n(t,Yt,e),n(t,D,e),n(t,Zt,e),n(t,O,e),n(t,$t,e),n(t,I,e),n(t,te,e),n(t,B,e),n(t,ee,e),n(t,F,e),n(t,ne,e),n(t,G,e),n(t,ie,e),n(t,J,e),n(t,re,e),n(t,N,e),n(t,le,e),n(t,U,e),n(t,oe,e),n(t,X,e),n(t,se,e),n(t,Q,e),n(t,ae,e),n(t,R,e),n(t,de,e),n(t,V,e),n(t,pe,e),n(t,W,e),n(t,ue,e),n(t,K,e),n(t,fe,e),n(t,Y,e),n(t,he,e),n(t,Z,e),n(t,ve,e),n(t,$,e),n(t,xe,e),n(t,tt,e),n(t,me,e),n(t,et,e),n(t,ce,e),n(t,nt,e),n(t,Me,e),n(t,it,e),n(t,Le,e),n(t,rt,e),n(t,ge,e),n(t,lt,e),n(t,Te,e),n(t,ot,e),n(t,ye,e),n(t,st,e),n(t,be,e),n(t,at,e),n(t,He,e),n(t,dt,e),n(t,we,e),n(t,pt,e),n(t,_e,e),n(t,ut,e),n(t,Ce,e),n(t,ft,e),n(t,Pe,e),n(t,ht,e),n(t,Ee,e),n(t,vt,e),n(t,ke,e),n(t,xt,e),n(t,ze,e),n(t,mt,e),n(t,qe,e),n(t,ct,e),n(t,je,e),n(t,Mt,e),n(t,Se,e),n(t,Lt,e),n(t,Ae,e),n(t,gt,e),n(t,De,e),n(t,Tt,e),n(t,Oe,e),n(t,yt,e),n(t,Ie,e),n(t,bt,e),n(t,Be,e),n(t,Ht,e)},p:Fe,i:Fe,o:Fe,d(t){t&&(i(d),i(wt),i(p),i(_t),i(u),i(Ct),i(f),i(Pt),i(h),i(Et),i(v),i(kt),i(x),i(zt),i(m),i(qt),i(c),i(jt),i(M),i(St),i(L),i(At),i(g),i(Dt),i(T),i(Ot),i(y),i(It),i(b),i(Bt),i(H),i(Ft),i(w),i(Gt),i(_),i(Jt),i(C),i(Nt),i(P),i(Ut),i(E),i(Xt),i(k),i(Qt),i(z),i(Rt),i(q),i(Vt),i(j),i(Wt),i(S),i(Kt),i(A),i(Yt),i(D),i(Zt),i(O),i($t),i(I),i(te),i(B),i(ee),i(F),i(ne),i(G),i(ie),i(J),i(re),i(N),i(le),i(U),i(oe),i(X),i(se),i(Q),i(ae),i(R),i(de),i(V),i(pe),i(W),i(ue),i(K),i(fe),i(Y),i(he),i(Z),i(ve),i($),i(xe),i(tt),i(me),i(et),i(ce),i(nt),i(Me),i(it),i(Le),i(rt),i(ge),i(lt),i(Te),i(ot),i(ye),i(st),i(be),i(at),i(He),i(dt),i(we),i(pt),i(_e),i(ut),i(Ce),i(ft),i(Pe),i(ht),i(Ee),i(vt),i(ke),i(xt),i(ze),i(mt),i(qe),i(ct),i(je),i(Mt),i(Se),i(Lt),i(Ae),i(gt),i(De),i(Tt),i(Oe),i(yt),i(Ie),i(bt),i(Be),i(Ht))}}}class ui extends oi{constructor(d){super(),si(this,d,null,ai,li,{})}}export{ui as component};
