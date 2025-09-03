---
icon: 🗒
target:
- ""
createdAt: "{{DATE}}"
imageNameKey: nota_<% tp.file.title.split(" ").join("_").toLowerCase() %>
tags: 
NoteRel:
---
# AD Enum
- [ ] Verify Guest User in SMB
- [ ] Verify SMB shares READ/WRITE
- [ ] Search by GPP passwords
- [ ] LDAP Anonymous Bind
- [ ] Kerberoasting
- [ ] ASP-REP Roasting

## 🧠 Things to check after enumeration
- [ ] Is there a user with an SPN that is not `krbtgt`?
- [ ] Is there a user without pre-authentication (vulnerable to AS-REP)?
- [ ] GPP with password?
- [ ] Any share with write permissions?
- [ ] Any interesting groups (Domain Admins, Backup Operators)?
- [ ] Did you enumerate Trusts or multiple domains?
- [ ] Is DNS pointing to the same host?

## Others
- [ ] Password spraying using the username as the password, in several variations: all lowercase, all uppercase, first letter capitalized, etc.
- [ ] Always test MSSQL access if you have user credentials, check the note in the other Obsidian.


# Domain
```

```

# No-Login Enumeration

### nmap 
```

```
### enum4linux
```
enum4linux-ng -A <IP>

```


## SMB (445)
- Anonymous access?
- Sensitive file on Shares?
### smbmap 
```
smbmap -H <IP> -u '' -p ''
```

### SMBClient
```
smbclient -L //<IP>/ -N
smbclient //IP/SHARE -N

```

### Rid Bruteforce
```
nxc smb <IP> --rid-brute
```


# Logged Enumeration

## SMB (445)
- Anonymous access?
- Sensitive file on Shares?
```
smbmap -H <IP> -u <user> -p <pass> --shares
smbclient //IP/share -U <user>

```

## GPP Credentials
```
smbclient //IP/SYSVOL -U <user> 

# Navegue para: /Policies/<policy_id>/Machine/Preferences/Groups.xml
# Procure por cpassword

gpp-decrypt <cpassword>
```

## Kerberoasting
```js
GetUserSPNs.py <domain>/<user>:<pass> -dc-ip <IP> -request

```
## ASPRoasting
```js
GetNPUsers.py <domain>/<user>:<pass> -dc-ip <IP> -no-pass

```


## LDAP
- verificar se há alguma senha ou algo parecido com senha em informações de users no LDAP.

```
ldapsearch -x -H ldap://<IP> -D <user>@<domain> -w <pass> -b "dc=dominio,dc=local"
```

## bloodhound

bloodhound-python
```
bloodhound-python -u <user> -p <pass> -d <domain> -dc-ip <IP> -c all
```

nxc
```
 nxc ldap <ip> -u <user> -p <pass> --bloodhound --collection all --dns-server <ip>
```
