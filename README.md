# AMD Firmware Verification Study Guide

A comprehensive, interactive study guide for preparing for the AMD Firmware Verification Engineer role.

## Overview

This website covers all essential topics for firmware verification at AMD, including:

- **Firmware Architecture**: Boot processes, secure boot, MMIO, interrupts, debug interfaces
- **Software QA Concepts**: Verification methodologies, test planning, coverage, CI/CD
- **Programming & Scripting**: Python, C/C++, Bash for firmware testing and automation
- **Debugging & Simulation**: Pre-silicon platforms, debugging techniques, common firmware bugs
- **Tools & Systems**: Jama, GitHub, Jira, SoC architecture basics
- **Interview Preparation**: Behavioral questions, STAR method, technical scenarios

## Features

- 📚 Comprehensive learning modules with detailed explanations
- ❓ Interactive Q&A sections with expandable answers
- 🎯 Knowledge quiz to test your understanding
- 📊 Progress tracking (saved in browser)
- 📱 Mobile-responsive design
- 🎨 Clean, modern UI with AMD color scheme

## Structure

```
├── index.html              # Landing page and overview
├── firmware-arch.html      # Firmware architecture concepts
├── qa-concepts.html        # Software QA and verification
├── programming.html        # Programming and scripting skills
├── debugging.html          # Debugging and simulation
├── tools.html             # Tools and system understanding
├── interview.html         # Interview preparation
├── quiz.html              # Interactive knowledge quiz
├── styles.css             # Styling
├── script.js              # Interactive functionality
└── render.yaml            # Render deployment config
```

## Local Development

Simply open `index.html` in your browser to view the site locally.

## Deployment on Render

This site is designed to be deployed as a static site on Render's free tier:

1. Push this repository to GitHub
2. Create a new Static Site on Render
3. Connect your GitHub repository
4. Render will automatically detect the `render.yaml` configuration
5. Deploy!

Alternatively, use the Render dashboard:
- **Build Command**: (leave empty)
- **Publish Directory**: `./`

## Topics Covered

### Firmware Architecture
- Boot flow (ROM → Bootloader → Kernel → OS)
- Secure boot and chain of trust
- Memory-mapped I/O (MMIO)
- Interrupt handling
- Watchdog timers
- Clocks and PLLs
- Debug interfaces (UART, JTAG, ICE)

### Software QA
- Verification workflow
- Test case design
- Testing types (positive, negative, boundary, stress, fault injection)
- Coverage metrics
- Directed vs random testing
- Regression testing and CI/CD
- Test automation best practices

### Programming
- Python for test automation and log parsing
- C/C++ for firmware analysis
- Bash scripting for build automation
- PowerShell basics
- Bitwise operations and register access
- Pointers and memory management

### Debugging
- RTL simulation vs emulation vs FPGA
- Systematic debugging approach
- Common firmware bugs (register offsets, init ordering, cache coherency, race conditions)
- Debug tools and techniques

### Tools & Systems
- Jama (requirements management)
- GitHub (version control)
- Jira (project management)
- SoC architecture basics
- DDR initialization
- PCIe fundamentals
- Clock and reset sequencing

### Interview Prep
- STAR method for behavioral questions
- Prepared story templates
- Common behavioral questions
- Technical interview topics
- Questions to ask the interviewer

## Progress Tracking

Your study progress is automatically saved in your browser's local storage. Visit different topic pages to increase your progress percentages.

## Quiz

Test your knowledge with 20 comprehensive questions covering all major topics. Get immediate feedback with explanations for each answer.

## Mobile Friendly

The site is fully responsive and works great on phones, tablets, and desktops.

## Good Luck!

This guide covers everything you need to prepare for the AMD Firmware Verification Engineer role. Study systematically, practice your interview stories, and you'll be ready to succeed!

---

Built for preparing for AMD's Firmware Verification Engineer position.
