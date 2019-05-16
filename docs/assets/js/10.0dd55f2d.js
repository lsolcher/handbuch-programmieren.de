(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{191:function(e,n,t){"use strict";t.r(n);var s=t(4),i=Object(s.a)({},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("Wie man Code richtig kommentiert und verständlich ist diskutabel. Es gibt nicht den einen goldenen Weg, sondern verschiedene Ansätze die alle durchaus ihre Daseinsberechtigung haben. Fest steht, dass es sehr viel Sinn macht, Code gut zu kommentieren und verständlich zu halten, egal wie.")]),e._v(" "),t("p",[e._v("Selbst wenn Code, den du schreibst, niemals von einem anderen Programmierer gelesen, verstanden oder vielleicht weiterentwickelt werden muss, wird es passieren, dass du deinen eigenen Code wieder erneut anfassen musst.")]),e._v(" "),t("p",[e._v("Und bloss weil du den Code zu dem Zeitpunkt, da du ihn geschrieben hast, kanntest wie deine Westentasche und alles für dich ganz klar und logisch erschien, kann die Welt ganz anders aussehen, wenn du diesen Code für ein paar Monate nicht mehr gesehen hast.")]),e._v(" "),t("p",[e._v("Natürlich findest du dich notfalls auch wieder in schlecht oder gar nicht kommentierten Code rein, aber das ist teilweise unnötig mühsam und kostet Zeit, die du lieber mit anderen Dingen verbringen möchtest, als kryptischen Code zu entziffern, selbst wenn's dein eigener ist.")]),e._v(" "),t("h2",{attrs:{id:"der-beste-kommentar-ist-der-den-du-nicht-schreiben-musst"}},[e._v("Der beste Kommentar ist der, den du nicht schreiben musst")]),e._v(" "),t("p",[e._v("Man kann es mit dem Kommentieren definitiv auch übertreiben. Keiner will über ein paar Codezeilen ganze Romane lesen, sonst ist es einfacher, direkt den Code zu lesen und zu verstehen. Ganz generell solltest du versuchen, Code so zu schreiben, dass er selbst kommentiert, was er macht.")]),e._v(" "),t("p",[e._v("Ein Funktionsname sollte beschreiben, was die Funktion macht. Damit kann man einen Funktionsaufruf im Code verstehen, ohne zuerst nachschauen zu müssen, was in dieser Funktion überhaupt passiert. Dementsprechend sollte eine Variable nach ihrem Inhalt benannt werden, um nicht ständig nachgucken zu müssen, sie enthält. Kommentare sollten nicht wiederholen oder umschreiben, was ohnehin im Code darunter steht:")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// The first variable is a loaded user")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" first "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("load")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("p",[e._v("Der Kommentar bei diesem Beispiel ist überflüssig und übernimmt, was mit sprechenden Funktions- und Variablennamen auch machbar wäre:")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" user "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("loadUser")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("userId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("h2",{attrs:{id:"kommentiere-so-wenig-wie-moglich-aber-so-viel-wie-notig"}},[e._v("Kommentiere so wenig wie möglich, aber so viel wie nötig")]),e._v(" "),t("p",[e._v("Wenn du Code so schreibst, dass er nicht nur seine Funktion erfüllt, sondern gleichzeitig selbst beschreibt, was er tut, brauchst du weniger Kommentare. Das macht deinen Code kürzer und übersichtlicher: je weniger Code und Kommentare du lesen musst, umso besser.")]),e._v(" "),t("p",[e._v("Aber auch wenn du grundsätzlich versuchen solltest, so wenig Code und Kommentare wie möglich zu schreiben: ganz ohne geht's eben auch nicht. Kommentare können die Absicht hinter dem Code erklären, ihn gliedern und Zusammenhänge aufzeigen, was dir und anderen dabei hilft, sich schnell zurecht zu finden.")]),e._v(" "),t("h2",{attrs:{id:"erst-durch-iteration-werden-kommentare-richtig-gut"}},[e._v("Erst durch Iteration werden Kommentare richtig gut")]),e._v(" "),t("p",[e._v("Wie Code auch werden Kommentare mit jeder Iteration besser; während du Code schreibst, macht er für dich normalerweise immer Sinn, die Zusammenhänge sind klar, deine größere Strategie hast du sowieso im Kopf. Deswegen ist es auch schwer, Code direkt während dem Schreiben perfekt zu kommentieren.")]),e._v(" "),t("p",[e._v("Es hilft, sich vorzustellen, dass du deinen fertigen Code zum ersten Mal siehst, um ihn besser zu kommentieren – aber all dein implizites Wissen spontan zu vergessen funktioniert dann doch nicht.")]),e._v(" "),t("p",[e._v("Richtig gut werden deine Kommentare erst beim zweiten und dritten Bearbeiten deines Code: wenn du ihn erweiterst oder verbesserst, hab immer auch die Kommentare im Auge: findest du dich in deinem alten Code schnell zurecht? Verstehst du alles auf Anhieb? Wenn du dich erst wieder tief reindenken musst, bevor du an deinem alten Code weiterarbeiten kannst, würden neue oder bessere Kommentare dir dabei helfen, das beim nächsten Mal nicht nochmal tun zu müssen.")]),e._v(" "),t("h2",{attrs:{id:"das-ziel-ist-verstandlichkeit"}},[e._v("Das Ziel ist Verständlichkeit")]),e._v(" "),t("p",[e._v("Beim Schreiben von Code und Kommentaren sollte nach der Funktionalität die Verständlichkeit die höchste Priorität sein. Verständlichen, übersichtlichen, gut kommentierten Code zu schreiben ist eine Kunst, und du wirst mit jeder Zeile die du schreibst, besser darin werden.")]),e._v(" "),t("ul",[t("li",[e._v("versuche so wenig Code wie nötig zu schreiben")]),e._v(" "),t("li",[e._v('versuche "sprechenden" Code zu schreiben')]),e._v(" "),t("li",[e._v("schreibe so wenig Kommentare wie möglich, aber so viele wie nötig")]),e._v(" "),t("li",[e._v("Kommentare sollten nicht wiederholen was bereits im Code steht, sondern zusätzliche Informationen bieten")])]),e._v(" "),t("img",{attrs:{src:"https://vg09.met.vgwort.de/na/09a580f4b5714301a099bcf671a3a692",width:"1",height:"1",alt:""}})])},[],!1,null,null,null);n.default=i.exports}}]);