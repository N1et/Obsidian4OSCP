---
icon: 🗒
target:
- ""
createdAt: "2025-02-09"
imageNameKey: nota_local_machine_enum_for_peter
tags: 
NoteRel:
---
## Local Machine enumeration Checklist
- [ ] username and Group
- [ ] Usernames, groups machine and hostname
- [ ] enviroment variables
- [ ] bashrc Conf
- [ ] Bash History
- [ ] System info, operational system and kernel version
- [ ] sudo version
- [ ] Process Enum
- [ ] Schedule tasks
- [ ] installed packages
- [ ] devices mounted and umount
- [ ] interfaces and routes
- [ ] Kernel Modules

## PrivEsc
- [ ] Directories and Files with write permission
- [ ] Executables with suid permissions
- [ ] Watch for passwords in process
- [ ] Watch for passwords in tcpdump
- [ ] Find for sensitive files 
- [ ] Kernel versions exploits

## Tools
- [ ] Linpeas
- [ ] unix-privesc-check

# Enumeration for user (USER)

## username and group
```
whoami
id

```

## Env Variables
```
env
```


## Bashrc config
```

```

## Bash History
```
history
```

## SSH Keys ?
```
~/.ssh/*

```

# System Information

## Users, groups and hostname
```
cat /etc/passwd

cat /etc/groups

hostname
```

## Operation System and Kernel version
```
cat /etc/os-release 

cat /etc/issue

uname -a

```
## Sudo version
```
sudo -l 
```
## Process Enum
```
ps aux
```

## Schedule Tasks
```
ls -lah /etc/cron*

crontab -l

sudo crontabk -l

grep "CRON" /var/log/syslog


cat /etc/crontab
```

## Relevants Installed Packages 
```
dpkg -l 
```

## interfaces and route
```
ifconfig

ip a

route 

routel
```

## Kernel Modules
```
lsmod
```

Enumerar informação de um modulo de kernel
```
/sbin/modinfo libata
```
## Devices mounted and umounted
```
cat /etc/fstab

mount

lsblk
```

# Privilege escalation

## Directories and Files with write permission
```
find / -writable -type d 2>/dev/null
```

## Executables with suid permissions
```
find / -perm -u=s -type f 2>/dev/null
```

## Find for executables with capabilities exploitable
```
/usr/sbin/getcap -r / 2>/dev/null
```

## Watch for passwords in process
```
watch -n 1 "ps -aux | grep pass"
```

## Watch for passwords in tcpdump
```
sudo tcpdump -i -lo -A | grep "pass"
```

##  Find for sensitive files 
```
find / -name *txt, *config, *conf*, *docx* 
```