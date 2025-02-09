---
icon: 🔑
target:
  - "[[exemplo.com.br]]"
---
## Credencial
```

```

## Checklist
- [ ] Testar todas as credenciais em todos os hosts
	- [ ] wmi
	- [ ] rdp
	- [ ] winrm
	- [ ] psexec
- [ ] Testar credencial de forma local (nxc / --local-auth)
### Hash NTLM
- [ ] Pass The Hash em todos os hosts
- [ ] Tentar quebrar com o hashcat
### Plaintext
- [ ] Testar senha em todas as outras credenciais identificadas (password spray)

## Dicas
```
nxc smb 192.168.1.0/24 -u web_svc -p 'senha'
nxc wmi 192.168.1.0/24 -u web_svc -p 'senha'
nxc winrm 192.168.1.0/24 -u web_svc -p 'senha'
nxc rdp 192.168.1.0/24 -u web_svc -p 'senha' 
```

```
nxc smb 192.168.1.0/24 -u web_svc -p '' --local 
```
## Nota relacionada
NotaRelacionada