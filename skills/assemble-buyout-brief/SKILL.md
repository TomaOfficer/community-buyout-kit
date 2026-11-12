---
name: assemble-buyout-brief
description: Turn an existing community buyout case file or assessment into a dated, shareable property brief for neighbors. Use when the user asks for a handout, browser-ready brief, Claude Artifact, or ChatGPT Site based on that work.
---
# Assemble a buyout brief

Read the group's case file or assessment from the current conversation. If the user only supplied a listing, gather an assessment first using [assess-property](../assess-property/SKILL.md) when available. Use the intended audience the user specified. Default to neighbors considering whether to explore the purchase.

## Write the shareable brief

Lead with what the group hopes to achieve, the biggest unresolved question, and what readers can do next. Organize the brief under **The building**, **What if?**, **The money**, **Fundraising**, and **Ownership and local rules**. Close with concrete next steps. Keep sections short and give a date for the brief.

Carry forward material conflicts and uncertainties. Link claims to shareable sources. Label historical prices and illustrative calculations alongside the numbers. Show which inputs are missing and which costs a partial total excludes. Describe funding and ownership options as questions to explore when feasibility is unknown. Keep contact details from private correspondence, raw documents, and internal notes out of the shareable copy. Use test inputs only for an explicitly labeled demonstration.

## Produce the output

- **HTML:** Use [the HTML layout](assets/brief-template.html) when available. Replace every placeholder, escape text inserted into HTML, and use public HTTP(S) source links. Keep the output self-contained with inline CSS and without scripts, trackers, or external assets. Save it as `brief.html` or at the requested path. If files are unavailable, provide the formatted brief in chat.
- **Claude Artifact:** When requested and available, present the same brief as a single-page Artifact. Use the HTML as its source where supported. Return the preview or link provided by Claude. The user chooses the sharing audience.
- **ChatGPT Sites:** When requested, use the Sites workflow if available. Otherwise give the user a ready-to-use `@Sites` prompt to build a one-page site from the approved brief or attached HTML. Ask Sites to preserve the wording, figures, and citations. Return a preview where supported. Leave deployment and access changes to the user unless requested.

Check that the output retains the sources, labels, and next actions, and can be read on a phone. Return the output location or preview with the biggest unresolved question.
