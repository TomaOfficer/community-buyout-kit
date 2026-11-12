<div align="center">

<img src="./assets/cairn-ink.svg" alt="" width="96" height="96">

# Community Buyout Kit

**Could we buy this building together?**

[Download the kit](./community-buyout-kit.md?raw=true) · [See the 99 Union Square example](#worked-example)

[![Kit checks](https://github.com/TomaOfficer/community-buyout-kit/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/TomaOfficer/community-buyout-kit/actions/workflows/ci.yml)
[![MIT License](https://img.shields.io/badge/License-MIT-black.svg)](./LICENSE)

</div>

A building you care about goes up for sale. Give your AI chat a listing and this kit, and it will help you work through one possible purchase. You’ll get a short brief to share with neighbors: what it might cost, how you might raise the money, and what you’d need to find out before going further.

The kit helps with the first round of homework so you can spend more time talking with neighbors about what you want the building to become and who’s willing to help make it happen.

## Try it with a building

### In a chat app

1. **Give your AI the kit.** [Download the kit file](./community-buyout-kit.md?raw=true) and attach it to a new chat in an AI app that can read file attachments. If the link opens as text, use your browser’s **Save As** to save it as `community-buyout-kit.md`.
2. **Give it the building.** Paste a listing link, attach a brochure, or type the address and whatever you know. If you already have an idea for the building, include it.

You can copy this message into your chat:

> Use the attached Community Buyout Kit to help me explore buying this building with my neighbors. Here’s the listing or what I know about the property: [paste a link or describe the building].

If your chat can’t open the listing, paste the listing text or type in the details you have. You can start even if you don’t know the asking price.

### In an agent with the repository open

Clone or download this repository and open the folder in your agent. Give it this prompt:

> Read `skills/community-buyout/SKILL.md` and follow it to help me explore buying this building with my neighbors: [paste a listing link or describe the building].

### Keep a case file and make a shareable brief

With this repository open in your agent, ask it to follow [Assess a property](./skills/assess-property/SKILL.md) using your listing, brochure, or address and your goal for the building. Have it save a copy of the [case-file template](./templates/property-case-file.md) in your group's workspace. Bring new evidence back to the same file as you learn more.

When you're ready to show neighbors, ask the agent to follow [Assemble a buyout brief](./skills/assemble-buyout-brief/SKILL.md) using that case file. Open the resulting `brief.html` in a browser or print it to PDF. You can also request a Claude Artifact or a ChatGPT Site where those features are available. If the agent can't start Sites directly, it will give you an `@Sites` prompt to use with the brief.

## Worked example

Start with the [99 Union Square listing](https://www.loopnet.com/Listing/99-Union-Sq-Milford-NH/35788349/) and ask whether neighbors could buy the building to keep storefronts available to local businesses.

[Read the case file](./examples/99-union-square/property-case-file.md) · [Download the HTML brief](./examples/99-union-square/brief.html?raw=true)

Open the downloaded brief in a browser to see the map, financing breakdown, and next steps.

## What you’ll get

A brief in the chat covering the building, one possible use, the money, ways to raise it, and questions about ownership and local rules. It should show where the information came from, which numbers are estimates, and what to ask a seller, tenant, lender, or lawyer.

This is a first draft of the kit. What the chat can look up depends on the app you use. Treat the brief as a starting point for discussion and professional advice before making commitments.

Follow [@communitybuyout](https://x.com/communitybuyout) for worked examples, or send us a building you’ve wondered about buying with your neighbors.

## Maintaining the kit

Edit [the skill](./skills/community-buyout/SKILL.md) first. After changing the workflow, run this from the repository root to refresh the standalone download by removing the skill’s YAML frontmatter:

```sh
sed '1,/^---$/d' skills/community-buyout/SKILL.md > community-buyout-kit.md
```

## License

The kit's original materials are available under the [MIT License](./LICENSE). The 99 Union Square example includes third-party material under these terms:

- **Milford Oval photo** by [Magicpiano](https://commons.wikimedia.org/wiki/File:MilfordNH_Oval.jpg), [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
- **Map data** © [OpenStreetMap contributors](https://www.openstreetmap.org/copyright), [Open Database License](https://opendatacommons.org/licenses/odbl/1-0/).
