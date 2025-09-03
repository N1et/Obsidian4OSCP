---
icon: 🔑
target:
  - "[[exemplo.com.br]]"
---
## Credencial
```
Peter:Peter@1234
```

# Checklist  
- [ ] Test all credentials on all hosts  
  - [ ] WMI  
  - [ ] RDP  
  - [ ] WinRM  
  - [ ] PsExec  
- [ ] Test credentials locally (`nxc` / `--local-auth`)  

### NTLM Hash  
- [ ] Perform Pass The Hash on all hosts  
- [ ] Attempt to crack using Hashcat  

### Plaintext  
- [ ] Test the password on all other identified credentials (password spray)  

## TIPs
you can test all the credentials in the networkx
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
