# Reddit posts — Breefy

⚠️ IMPORTANT : Reddit déteste la promo directe. Apportez de la valeur AVANT tout. Ces posts mixent éducation + mention de Breefy.

## Post 1 — r/SEO (éducatif)

**Titre** :
```
I spent 3 weeks building an SEO brief generator. Here's what I learned about prompt engineering.
```

**Body** :
```
Hey r/SEO,

I've been working on an AI tool that generates complete SEO briefs in 30 seconds. After 50+ prompt iterations, here are the learnings I'd love to share:

1. **Specificity beats generality**: "Generate a brief" produces garbage. "Generate a brief with these 6 sections, each containing X, Y, Z" produces gold.

2. **Structure templates matter more than model choice**: I tested GPT-4, Claude, Gemini. What made the biggest difference wasn't the model — it was giving the model an exact template to fill.

3. **Context windows aren't everything**: I was tempted to stuff the prompt with keyword data, competitor analysis, etc. More context = worse output. Focused prompts beat stuffed prompts.

4. **Claude 3.5/4.x is better at French**: If you're targeting French SEO, Claude > GPT. Noticeable difference in keyword relevance.

5. **Caching saves 90% of costs**: Anthropic's prompt caching feature lets you cache the system prompt. For my use case (same prompt, different keywords), this reduced costs by 90%.

If you want to see the result, I launched it as Breefy: https://getbreefy.com (3 free briefs)

Happy to share more details if anyone's interested!
```

---

## Post 2 — r/entrepreneur (build in public)

**Titre** :
```
I built my first SaaS in 21 days with €25. Here are the metrics from day 1.
```

**Body** :
```
Hey r/entrepreneur,

I just launched Breefy, an AI tool that generates SEO briefs in 30 seconds. This is my first SaaS and I wanted to share the journey for anyone considering the same.

**The idea** : I was spending 2+ hours per SEO brief as a content marketer. I tried every tool (Semrush, Surfer, Frase, Jasper) and none of them were focused on this specific use case. So I built it myself.

**The timeline** :
- Days 1-5: Design + landing page
- Days 6-12: Core features + Claude integration
- Days 13-16: Auth + Stripe billing
- Days 17-19: Legal pages + SEO + testing
- Days 20-21: Polish + launch

**The costs** :
- Domain (getbreefy.com): €10
- Vercel: €0 (hobby tier)
- Neon Postgres: €0 (free tier)
- Anthropic API testing: ~€15
- Stripe: €0 (commission only)
- **Total: €25**

**The stack** :
- Next.js 14 + TypeScript
- Tailwind CSS
- Prisma + PostgreSQL (Neon)
- NextAuth.js (Google OAuth)
- Stripe Checkout + webhooks
- Anthropic Claude Sonnet 4.6

**Day 1 metrics** (launch day):
- [To be updated after launch]

I'll post monthly metrics for transparency. The goal is to validate if this can become a real business.

If you're curious: https://getbreefy.com (3 free briefs, no credit card)

Happy to answer any questions about the build, the stack, or the launch strategy!
```

---

## Post 3 — r/freelance (cas d'usage)

**Titre** :
```
How I went from 5 to 15 SEO clients without working more hours
```

**Body** :
```
I'm a freelance SEO consultant. For years, my bottleneck was briefs — they took me 2h each, and I could only handle 5-7 clients.

Then I started using AI for briefs. Not to replace my expertise, but to handle the boring structural parts (keyword research, H1-H3 outline, meta tags, checklist).

Result: brief time dropped from 2h to 15 minutes (the 15 min is just for me to review and customize).

Now I handle 15 clients with the same hours. Revenue tripled.

The tool I ended up using is Breefy (https://getbreefy.com) because it was the only one focused on briefs (not article writing). Full disclosure: I built it myself after trying everything else.

For other freelancers: if briefs are your bottleneck, explore this direction. It's life-changing for scaling solo.

Happy to chat in DMs if you want tips on using AI responsibly for SEO work.
```

---

## Post 4 — r/bigseo (value-first)

**Titre** :
```
6-pillar framework for SEO briefs that actually produce ranking content
```

**Body** :
```
Seeing a lot of questions about briefs lately. Here's the 6-pillar framework I use (based on 500+ briefs):

**1. Strategic Summary**
Objective, target audience, competitive positioning. 3-4 sentences max. This frames everything that follows.

**2. Keywords**
- Main keyword + search volume
- 8-12 semantic keywords
- 5-8 People Also Ask questions
- Entities to mention (brands, concepts, people)

**3. Structure**
Complete H1-H2-H3 outline with 1-2 sentences description per section AND estimated length per section.

**4. Writing Guidelines**
Tone, style, differentiating angle, CTAs to include, internal link topics.

**5. Technical Optimization**
- Meta title (< 60 chars)
- Meta description (< 155 chars)
- Suggested URL
- Recommended schema markup
- Alt-texts suggestions

**6. Publication Checklist**
8-10 items to verify before publishing (keywords, tags, links, images, schema...).

If ANY of these pillars is missing, the brief is incomplete and the resulting article will likely underperform.

I built a tool (Breefy) that generates briefs following this exact structure in 30 seconds using Claude. Full disclosure I'm the founder: https://getbreefy.com (free to try)

But the framework works even if you do it manually. Feel free to steal.
```
