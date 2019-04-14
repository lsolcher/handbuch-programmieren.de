(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{180:function(e,n,i){"use strict";i.r(n);var t=i(4),r=Object(t.a)({},function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h2",{attrs:{id:"warum-brauch-ich-versionierung"}},[e._v("Warum brauch ich Versionierung?")]),e._v(" "),i("p",[e._v('Neben dem Editor ist die Versionskontrolle meines Erachtens das wichtigste Tool im Programmier-Arsenal. Eine Versionskontrolle protokolliert Änderungen an dem Code den Du schreibst. Wenn dann zum Beispiel etwas kaputt geht, kannst du in der Geschichte "zurückspringen" und dir den funktionierenden Code zurückholen. Oder du hast Code gelöscht, weil Du dachtest, dass er nicht mehr benötigt wird – und brauchst ihn plötzlich doch wieder: mit Versionskontrolle kein Problem.')]),e._v(" "),i("p",[e._v("Du kannst jederzeit an einen beliebigen Punkt in der Geschichte deines Projekts springen. Ich kann nicht genug betonen, wie oft die Versionierung mir schon den Allerwertesten gerettet oder mir das Leben erleichtert hat.")]),e._v(" "),i("p",[e._v("In Kombination mit einem Provider wie GitHub werden mit Versionierung sogar Backups mehr oder weniger überflüssig: dein Code landet automatisch in der Cloud. Selbst wenn dein Code nie veröffentlicht wird und nur von Dir benutzt wird: Du sparst Dir unfassbar viel Zeit damit, nicht ständig Backups machen zu müssen und jeden Code, den du jemals geschrieben hast, auf Anhieb wieder zur Verfügung zu haben.")]),e._v(" "),i("h2",{attrs:{id:"im-team-entwickeln-geht-nur-mit-git"}},[e._v("Im Team entwickeln geht nur mit Git")]),e._v(" "),i("p",[e._v("Darüber hinaus macht Versionierung das Zusammenarbeiten mehrerer Programmierer an einer Codebase überhaupt erst sinnvoll möglich, insofern musst Du dich spätestens dann damit auseinandersetzen, wenn du nicht auf ewig in deinem Elfenbeinturm vor dich hincoden willst.")]),e._v(" "),i("p",[e._v("Mit Git können mehrere Programmierer sogar an der selben Datei arbeiten, ohne dass sich die Änderungen gegenseitig überschreiben; Git kümmert sich ganz automatisch um das Zusammensetzuen aller Änderungen und meckert wirklich nur dann, wenn es einen Konflikt zwischen zwei Änderungen gibt, weil zum Beispiel zwei Leute die selbe Codezeile geändert haben.")]),e._v(" "),i("h2",{attrs:{id:"und-so-funktioniert-es"}},[e._v("Und so funktioniert es")]),e._v(" "),i("p",[e._v('Das Ganze funktioniert nach dem folgenden Prinzip: dein Code liegt in einem "Repository", was zunächst mal nichts anderes ist als ein Ordner, in dem alle Dateien von Git überwacht werden. Neben deinem lokalen Ordner gibt es ein "Remote" bzw. "Origin", in dem nicht nur der aktuelle Stand, sondern die gesamte Historie deines Code gespeichert ist.')]),e._v(" "),i("p",[e._v('Neben Wenn du Änderungen gemacht hast, kannst du diese in einem "Commit" zusammenfassen und mit einer Beschreibung der Änderungen als Punkt in der Geschichte des Code festhalten. Dabei arbeitest du immer in einem bestimmten "Branch".')]),e._v(" "),i("p",[e._v("Dein Repository hat mehrere Branches, zum Beispiel einen develop-Branch, an dem entwickelt wird und einen master-Branch, der die aktuelle Live-Version deines Projekts widerspiegelt.")]),e._v(" "),i("p",[e._v('Wenn du nun ein neues Feature entwickelst, erstellst du vom develop-Branch aus einen neuen Feature-Branch, in dem du die Änderung einbauen, testen und finalisieren kannst, bevor sie mit einem "Merge" in den develop-Branch zurückgeführt wird.')]),e._v(" "),i("p",[e._v('Wenn du mehrere Features nach diesem Prinzip fertig gebaut und in deinen develop-Branch gemerged hast, möchtest du vielleicht einen Release machen und eine neue Version deines Projekts veröffentlichen: dazu integrierst du alle Commits aus dem develop-Branch in den Master-Branch, auch das wieder mit einem einfachen "Merge"-Kommando.')]),e._v(" "),i("p",[e._v("Dieser Workflow bringt zahlreiche Vorteile: du kannst an einem neuen Feature arbeiten, ohne damit die Live-Version deines Produkts zu beeinträchtigen. Du kannst jederzeit Experimente machen und ein Feature auch wieder wegwerfen, ohne irgendwelchen Code aufräumen zu müssen. Du kannst einen Hotfix an der Live-Version machen, ohne alle Änderungen miteinzubauen, die vielleicht schon fertig entwickelt sind, aber trotzdem noch nicht in der Live-Version landen sollen.")]),e._v(" "),i("p",[e._v("Auch wenn du an dieser Stelle noch nicht wirklich den Sinn hinter diesem System sehen solltest: ich empfehle dir, diesen Workflow einfach genau so zu übernehmen; mit der Zeit wirst du verstehen, warum all diese Kleinigkeiten so viel Sinn machen.")]),e._v(" "),i("h2",{attrs:{id:"die-wichtigsten-kommandos"}},[e._v("Die wichtigsten Kommandos")]),e._v(" "),i("p",[e._v("Auch wenn du Git heutzutage in modernen Editoren integriert hast und über eine grafische Oberfläche bedienen kannst, macht es Sinn, die wichtigsten Kommandos zu kennen:")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("git clone $url")]),e._v(" erstellt eine lokale Kopie des Repository unter $url")]),e._v(" "),i("li",[i("code",[e._v("git pull")]),e._v(" bringt dein lokales Repository auf den neuesten Stand (holt neue Commits auf deinen Rechner, die zum Beispiel andere in der Zwischenzeit in diesem Branch gemacht haben)")]),e._v(" "),i("li",[i("code",[e._v("git checkout dev")]),e._v(' wechselt den aktiven Branch zu "dev"')]),e._v(" "),i("li",[i("code",[e._v("git checkout -b feature/name")]),e._v(' erstellt vom aktiven Branch ausgehend einen neuen mit dem Namen "feature/name"')]),e._v(" "),i("li",[i("code",[e._v("git status")]),e._v(" zeigt dir in welchem Branch du dich befindest und welche Dateien verändert wurden")]),e._v(" "),i("li",[i("code",[e._v("git add .")]),e._v(' alle modifizierten Dateien werden gestaged (für den nächsten Commit "ausgewählt")')]),e._v(" "),i("li",[i("code",[e._v('git commit -m "Commit-Message"')]),e._v(' erstellt einen Commit mit der Nachricht "Commit-Message"')]),e._v(" "),i("li",[i("code",[e._v("git push")]),e._v(" lädt alle lokalen Commits hoch in den Origin")]),e._v(" "),i("li",[i("code",[e._v("git merge feature/name")]),e._v(' übernimmt alle Commits aus "feature/name" in deinen aktiven Branch')])]),e._v(" "),i("h2",{attrs:{id:"exkurs-merge-vs-rebase"}},[e._v("Exkurs: Merge vs Rebase")]),e._v(" "),i("p",[e._v("Wenn du Commits aus einem Branch in einen anderen einfügen willst, geht das grundsätzlich mit einem Merge, und das in alle Richtungen. Wenn du mit einem Feature-Branch fertig bist, kannst du die Änderungen zurück in den Develop-Branch mergen.")]),e._v(" "),i("p",[e._v("Umgekehrt kannst du genauso den Develop-Branch in älteren Feature-Branch mergen, der vielleicht eine Weile herumlag und noch nicht alle Änderungen hat, die im Develop-Branch mittlerweile vorliegen.")]),e._v(" "),i("p",[e._v('Für diesen Fall gibt es als Alternative noch den "Rebase", was die Änderungen in deinen Feature-Branch einfügt, ohne einen Merge-Commit zu erzeugen. Das hat den Vorteil, dass deine Git-Historie nicht mit unnötigen Merge-Commits zugemüllt wird, aber den Nachteil, dass du nicht einfach pushen kannst, sondern einen --force push machen musst, der die Historie deines Branch neu schreibt, was zu Problemen führen kann, wenn andere an demselben Branch arbeiten.')]),e._v(" "),i("p",[e._v("Die Diskussion ob Merge oder Rebase wird gerne geführt, mit guten Argumenten auf beiden Seiten. Ich für meinen Teil bin im Team Merge – weil ich im Zweifel lieber auf Nummer sicher gehe und mich ein paar Merge-Commits in der Git-Historie nicht groß stören.")]),e._v(" "),i("h2",{attrs:{id:"noch-ein-paar-kleine-tipps-zum-schluss"}},[e._v("Noch ein paar kleine Tipps zum Schluss")]),e._v(" "),i("ul",[i("li",[e._v("Es gibt "),i("a",{attrs:{href:"https://chris.beams.io/posts/git-commit/",target:"_blank",rel:"noopener noreferrer"}},[e._v("hervorragende Konventionen"),i("OutboundLink")],1),e._v(" für das Schreiben von Commit-Messages, an die du dich halten solltest")]),e._v(" "),i("li",[e._v("Versuche möglichst viele, möglichst kleine Commits zu machen mit Änderungen, die zusammengehören")]),e._v(" "),i("li",[e._v("Jedes Projekt sollte immer mindestens einen dev und einen master Branch haben")]),e._v(" "),i("li",[e._v("Arbeite immer in Feature-Branches, um deinen dev und master sauber zu halten")])]),e._v(" "),i("h2",{attrs:{id:"links"}},[e._v("Links")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://git-scm.com/doc",target:"_blank",rel:"noopener noreferrer"}},[e._v("Offizielle Dokumentation"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow",target:"_blank",rel:"noopener noreferrer"}},[e._v("Git Flow"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"https://about.gitlab.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Guter Anbieter mit CI/CD: GitLab"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Der Standard Open-Source-Anbieter: GitHub"),i("OutboundLink")],1)])]),e._v(" "),i("img",{attrs:{src:"https://vg09.met.vgwort.de/na/1a14f60d04a44020a0ae65f27d759025",width:"1",height:"1",alt:""}})])},[],!1,null,null,null);n.default=r.exports}}]);