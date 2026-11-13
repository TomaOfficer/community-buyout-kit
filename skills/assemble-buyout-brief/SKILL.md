---
name: assemble-buyout-brief
description: Turn an existing community buyout case file or assessment into a dated, shareable property brief for neighbors. Use when the user asks for a handout, browser-ready brief, Claude Artifact, or ChatGPT Site based on that work.
---
# Assemble a buyout brief

Read the group's case file or assessment from the current conversation. If the user only supplied a listing, gather an assessment first using [assess-property](../assess-property/SKILL.md) when available. Use the intended audience the user specified. Default to neighbors considering whether to explore the purchase.

## Write the shareable brief

Lead with the property, location, date, and what the group hopes to achieve. Use a short facts row for the building type, price if known, and availability. Put the biggest unresolved question and concrete next actions in **What happens next**. Use the main column for the ownership scenario, building evidence, financing, fundraising, and local rules. Keep sections short and finish with links to the main property sources.

Keep this note near the top in every format, including chat and hosted previews: “Use this AI-assisted brief for early research. AI can make mistakes. Verify the sources, figures, and local requirements with qualified advisers before making commitments.”

When the group is planning outreach, include this guidance in the fundraising section: “You can ask neighbors what they’d like to see happen to the building or whether they’d join a conversation. Before asking people whether or how much they’d invest in a specific purchase, talk to a securities lawyer about how to gauge interest.”

Carry forward material conflicts and uncertainties. Link claims to shareable sources. Label historical prices and illustrative calculations alongside the numbers. Show which inputs are missing and which costs a partial total excludes. Describe funding and ownership options as questions to explore when feasibility is unknown. Keep contact details from private correspondence, raw documents, and internal notes out of the shareable copy. Use test inputs only for an explicitly labeled demonstration.

## Produce the output

- **HTML:** Use [the HTML layout](assets/brief-template.html) when available. Replace every placeholder, escape text inserted into HTML, and use public HTTP(S) source links. Fill the facts row with `<div>` groups containing a `<dt>` and `<dd>`. In the financing section, use the same pattern within `<dl class="money">` for the key amounts when the case supports a calculation. State the assumptions and exclusions beside the amounts. Keep the output self-contained with inline CSS and without scripts, trackers, or external assets. Save it as `brief.html` or at the requested path. If files are unavailable, provide the formatted brief in chat.
- **Photo and map:** Use a `<figure>` with a `<div class="media">` and a caption for each available visual. Embed a photo that may be shared and credit it. Label neighborhood imagery as such. If you have a verified location and shareable map data or artwork, embed a static map with a marker, attribution, and a link to open the address in Google Maps. If a map cannot be embedded, include the Google Maps link in the building section when the address is known. Replace any unused media placeholders with an empty string so the grid can reflow.
- **Claude Artifact:** When requested and available, present the same brief as a single-page Artifact. Use the HTML as its source where supported. Return the preview or link provided by Claude. The user chooses the sharing audience.
- **ChatGPT Sites:** When requested, use the Sites workflow if available. Otherwise give the user a ready-to-use `@Sites` prompt to build a one-page site from the approved brief or attached HTML. Ask Sites to preserve the wording, figures, and citations. Return a preview where supported. Leave deployment and access changes to the user unless requested.

Check that the output retains the sources, labels, and next actions, and can be read on a phone. Return the output location or preview with the biggest unresolved question.
