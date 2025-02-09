---
icon: 🗒
target:
- ""
createdAt: "{{DATE}}"
imageNameKey: nota_<% tp.file.title.split(" ").join("_").toLowerCase() %>
tags: 
NoteRel:
---
### Notas Relacionadas
```dataview

TABLE 
	file.name as "File"
WHERE
	econtains(NoteRel, [[Notas/<% tp.file.title %>]])
```

------
## Reminders
- How it was identified?
- How it was exploited?
- check, do you have all evidences necessary?
## Description

write some description