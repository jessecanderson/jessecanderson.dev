---
title: "Why I built Cyberdeck"
description: "Code became cheap. Understanding did not. Cyberdeck grew from my need to manage multiple coding agents without losing track of the work—or my responsibility for it."
published: 2026-07-29
tags: [cyberdeck, ai, agents, developer-tools]
draft: false
---

I started building Cyberdeck because I had too many terminal tabs open.

Each tab held a different coding agent. One might be working on a feature, another investigating a bug, and another reviewing what had already changed. The agents were useful on their own, but the experience of managing them was not. I couldn’t easily tell which tab belonged to which agent, what each one was doing, or how to get them to communicate with each other.

I needed a better way to manage multiple agents doing tasks for me.

That need became Cyberdeck: a keyboard-first command center for running multiple local coding agents. It gives each agent a callsign, a workspace, visible state, and a place in the Local Grid. It keeps permission requests, tool activity, context, failures, and recovery in one interface instead of scattering them across anonymous terminal sessions.

But building it also clarified something more important about working with AI.

## Code is cheap now

Getting Codex to build a project is easy. Code is now cheap.

That doesn’t mean software is easy.

I still have to know what the code does. I need to understand why an agent made a particular choice, how the pieces connect, what assumptions are hiding underneath the implementation, and what happens when something fails. An agent can produce a lot of code quickly, but speed doesn’t remove the need for architecture, judgment, or responsibility.

In some ways, it makes those things more important.

When the cost of producing code drops, it becomes easier to create more than you can meaningfully review. A plausible implementation can look finished long before it is understood. The bottleneck moves from typing code to directing the work, evaluating decisions, and maintaining a coherent system.

Cyberdeck is partly an attempt to make that work visible.

## An agent is more than a chat window

One of the first lessons was that different agent harnesses support different things.

Codex exposes its native App Server transport. Other tools can speak protocols such as ACP. They don’t all report state the same way, manage sessions the same way, or support the same lifecycle and permission capabilities.

It would be possible to hide those differences behind a generic chat interface, but doing that would hide useful truth from the operator.

Cyberdeck instead uses a shared runtime model while keeping provider capabilities visible. An action should only appear available when the connected runtime actually supports it. A restored session should reflect what the provider can really restore. Context compaction, interruption, permissions, and process recovery need to follow the semantics of the underlying harness rather than pretending every agent is interchangeable.

The interface can normalize the experience without lying about the machinery.

## Agent UX is state-management UX

The hard part of a multi-agent tool is not sending a prompt. The hard part is preserving a clear mental model while several independent processes are doing work.

Which agent is active? Which one needs permission? Which one failed? What project does it belong to? Is it still processing, waiting for input, or disconnected? Can the session be restored? Did clearing the display also clear provider context?

These questions sound like interface details, but they determine whether an operator can trust the system.

Cyberdeck gives agents callsigns because identity matters when several are active. It keeps drafts attached to the correct agent. It isolates failures so one severed connection doesn’t take down the rest of the grid. It surfaces permission requests inline because authority should never be granted invisibly. It separates local display state from provider-owned context because those are different things, even when a simpler interface might blur them together.

The more capable agents become, the more important this state becomes.

## Permission is part of the product

Permission prompts are often treated as interruptions to the real experience. I’ve come to think they are part of the real experience.

An agent that can inspect files, run processes, change code, install software, or communicate externally is operating across meaningful boundaries. The interface should explain the requested action, its scope, and its potential impact without forcing the operator to decode a vague warning.

Cyberdeck calls these boundaries ICE, but the atmosphere never replaces the concrete information. The fictional layer can say `AMBER ICE`; the interface still needs to say which action is being requested and what it affects.

That became a broader design rule: personality can help an interface feel memorable, but it must never obscure responsibility.

## Why it looks like a cyberdeck

I also wanted something that reminded me why I loved working in a terminal.

There is a directness to terminal software. It feels close to the machine. It rewards learning the interface, builds muscle memory, and makes a focused tool feel personal in a way that another browser tab often does not.

Cyberdeck calls back to the technology and imagined interfaces of the past while applying them to something happening now. Its Open Deck Systems language treats the application as a personal machine: providers are guests, authority belongs to the operator, state remains inspectable, and modules can be replaced rather than sealed away.

The visual language is atmospheric, but those ideas are product principles rather than decoration:

1. The operator owns the deck.
2. Every signal has a source.
3. Permission boundaries never open silently.
4. One failed agent should not kill the rest of the system.
5. The tool should remain extensible when providers change.

The nostalgia gives Cyberdeck its personality. The principles give that personality a reason to exist.

## A deck should be expandable

The same thinking led to Cyberdeck’s module system.

If the deck is supposed to belong to its operator, it can’t be a sealed product that only grows when I decide to add something. Different people will have different workflows, different information they want close at hand, and different ideas about what belongs beside their agents. They should be able to shape the deck around those needs.

Modules provide native workspaces inside the permanent Cyberdeck shell. The built-in journal was an early example, but the more important step was opening that model to external Python packages through Module API v1. A module can contribute its own workspace and commands while using stable deck services for scoped storage, configuration, notifications, and clipboard access.

The goal is to give users—and eventually the agents working with them—a way to expand and customize the environment without turning every idea into a change to Cyberdeck’s core.

That required treating extension boundaries as architecture rather than just loading arbitrary plugins. Modules declare compatibility before they mount. Installs are staged and promoted atomically. A failed module remains isolated instead of taking down active agents, transcripts, or drafts. External modules receive stable, limited deck services rather than unrestricted access to unfinished internal APIs. And because modules are trusted Python code running with the operator’s permissions, the install flow makes that trust decision explicit.

There is still deliberate restraint in the first version. Modules cannot control agents yet because the provider-neutral agent contract is still being developed. It would be easy to expose Cyberdeck internals and call the system extensible. It is harder—and more valuable—to define a boundary that can survive as the application changes.

That became another lesson from the project: extensibility is not the number of hooks a tool exposes. It is the quality of the contract between the core and the things people build around it.

I want Cyberdeck to become a platform people can make personal: part agent command center, part workbench, and part whatever they and their agents need it to be.

## What I’ve learned

Cyberdeck began as a solution to terminal-tab chaos. Building it taught me that managing coding agents is less about creating a better chat box and more about creating a comprehensible operating environment.

Code generation is only one part of the work. Someone still has to establish intent, understand the architecture, recognize when an abstraction is dishonest, test what was produced, and decide which tradeoffs are acceptable.

AI can make implementation dramatically faster. It can help explore unfamiliar systems and move an idea into working software sooner than before. But it doesn’t remove the need to understand the system. It changes where that understanding has to be applied.

That is the work I want Cyberdeck to support: multiple capable agents, moving quickly, on a machine that still belongs to the person responsible for the outcome.
