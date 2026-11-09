# Community Buyout Kit

**Could we buy this building together?**

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

## What you’ll get

A brief in the chat covering the building, one possible use, the money, ways to raise it, and questions about ownership and local rules. It should show where the information came from, which numbers are estimates, and what to ask a seller, tenant, lender, or lawyer.

This is a first draft of the kit. What the chat can look up depends on the app you use. Treat the brief as a starting point for discussion and professional advice before making commitments.

Follow [@communitybuyout](https://x.com/communitybuyout) for worked examples, or send us a building you’ve wondered about buying with your neighbors.

## Maintaining the kit

Edit [the skill](./skills/community-buyout/SKILL.md) first. After changing the workflow, run this from the repository root to refresh the standalone download by removing the skill’s YAML frontmatter:

```sh
sed '1,/^---$/d' skills/community-buyout/SKILL.md > community-buyout-kit.md
```
