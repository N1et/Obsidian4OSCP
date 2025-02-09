# QuickOSCP (Obsidian4OSCP)

## Introduction

When preparing for a certification like OSCP, organization is key. However, for individuals with ADHD or those who struggle with managing large amounts of technical information, traditional note-taking methods may not be effective. To tackle this challenge, I created this Obsidian template specifically for penetration testing certification studies.

This template provides structured notes, predefined categories, and useful tips, allowing for a more streamlined and efficient learning experience. Instead of spending time figuring out how to structure your notes, you can focus on what really matters—learning, practicing, and improving your hacking skills.

## Why Use This?

Obsidian is a powerful note-taking tool that enables knowledge organization using a markdown-based system. By leveraging Obsidian’s linking capabilities and this structured template, you can:

- Keep all your notes in one place, with well-organized categories.
- Use predefined templates to document each step of your penetration testing methodology.
- Access tips and reminders relevant to each stage of an OSCP exam.
- Quickly retrieve information through backlinks and tags.
- Maintain a methodology-driven approach, reducing the risk of missing crucial steps.

## Objective

The goal of this Obsidian template is to help candidates studying for OSCP (or other similar certifications) stay organized and improve their efficiency during labs and exams. It serves as a personal knowledge base, consolidating methodologies, commands, scripts, and lessons learned from practical experience.

By using this template, you can:

- Structure your enumeration and exploitation process consistently.
- Store frequently used commands and payloads for quick reference.
- Document your findings in a way that mirrors a professional pentesting report.
- Enhance your retention of key techniques and concepts.

## Features

- **Predefined Templates**: Templates for each step of the pentesting process, from information gathering to post-exploitation.
- **Organized Folder Structure**: Notes categorized by attack phase and target.
- **Methodology Integration**: Frameworks like MITRE ATT&CK and OSCP exam methodology referenced in structured notes.
- **Command Reference Sheets**: A collection of useful commands for quick access.   
- **Tagging & Backlinking**: Easy navigation through interconnected notes.
- **Evidences more easy**: When you paste some image, the obsidian automatically change the name to the note name. (Ex: noteName_1.png, noteName_2.png).
## Somethings that i want to do 
Here somethings that i want implement in the future:
- integrate report generate tools (like Pandoc) to compile all the report.
- Add more Template methodologies.
- Convert all portugueses things to english (yes, english is not my first language, thanks ChatGPT).


## How to Use It

### Setting Up the Vault

1. Open the project in Obsidian.
2. Enable the necessary scripts and plugins.
3. **Note:** This vault includes several plugins and executable code snippets. If you have security concerns, review the code before executing anything.

After opening the vault, press **ALT+E** (or **Command+E** on macOS) to access the main menu:

![](readme-1_1.png)

### Understanding Targets and Notes

All notes are linked to a **target**. A target is simply another note that acts as an index, listing all associated notes. It also contains fields for proof and local information.

The first step is to create a target.

### Creating a Target

![](readme_1.png)

![](readme_2.png)

![](readme_3.png)

### Creating a Note

Now, let's create a note:

![](readme_4.png)

This is our newly created note:

![](readme_5.png)

We can link this note to a target using **ALT+E > Helpers > Link Host**, or manually by writing `[[target_name]]`.

![](readme_6.png)

Now our note is successfully linked to a target:

![](readme_7.png)

If we open the target note, we can see all the notes associated with it:

![](readme_8.png)

#### Methodology Notes

In the **Note Templates - Methodology** section, we have predefined templates for privilege escalation techniques.

For example, suppose you discover an **RCE** vulnerability and compromise a machine. The next step is privilege escalation. You can create a methodology note for **Linux privilege escalation** as follows:

![](readme_4.png)

![](readme_9.png)

##### Linux Machine Enumeration Template Example

Now we had a note with methodology to Local Enumeration on Linux.

![](readme_10.png)

##### Windows Machine Enumeration Template Example

and now we had a note to Local Enumeration on Windows.

![](readme_11.png)

### Storing Credentials

When working with **Active Directory**, you may find credentials. To document them efficiently, use the **Credential Template**:

![](readme_12.png)

![](readme_13.png)

By following this structured approach, you can maintain a well-organized and effective workflow throughout your OSCP preparation and penetration testing engagements.


## Plugins Credits
In this vault it was used the following plugins:
- QuickAdd
- Templater
- Iconizer
- Kanban
- Paste Image Rename
- Data View
- File Hider
- Custom Filer Explorer Sorting