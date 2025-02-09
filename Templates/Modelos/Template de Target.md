---
icon: 🎯
createdAt: "{{DATE}}"
tags:
---

```dataview

TABLE 
	file.name as "File"
WHERE
	econtains(target, [[<% tp.file.title %>]])
SORT file.ctime DESC
```

# Local.txt
```

```
# Proof.txt
```

```