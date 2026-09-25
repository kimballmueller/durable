/*
  THE DISPATCH — blog posts.

  To add a new post: copy one of the objects below, paste it above the
  closing "];", give it a unique "slug" (used in the URL), and edit the
  fields. Save the file. That's it — no build step, no CMS login.

  Fields:
    slug     - short id, letters/numbers/dashes only, must be unique
    title    - post title
    date     - "Month Day, Year" (just for display)
    author   - name shown under the title
    image    - a photo URL (picsum.photos works for placeholders,
               or paste any image URL)
    excerpt  - 1-2 sentence teaser shown on the blog listing page
    content  - the post body. Each paragraph is one string in this array.
*/

const POSTS = [
  {
    slug: "successful-deploy-test",
    title: "This post is a successful test",
    date: "September 25, 2026",
    author: "Durable Team",
    image: "https://picsum.photos/seed/dispatch-3/1200/700",
    excerpt: "A short note to confirm the new publishing pipeline works end to end. If you're reading this, it did.",
    content: [
      "If you're reading this, the test worked.",
      "This post was written, committed and deployed without anyone opening a CMS.",
      "The code lives on GitHub, and the site is served by Vercel.",
      "A new post is one small edit to a single file.",
      "Once that edit is pushed, the live site updates on its own.",
      "There's no build step, no plugin updates and no login screen.",
      "That's what we were testing today: can we go from idea to live page in minutes?",
      "The answer is yes.",
      "It also means future posts can move as fast as the conversations that start them.",
      "Expect more from The Dispatch soon: lessons from the room, not theory.",
      "Until then, consider this our official hello world.",
      "Test complete. Pipeline confirmed. Back to work."
    ]
  },
  {
    slug: "why-owners-need-a-board",
    title: "Why every owner needs a board, even if they never build one",
    date: "September 12, 2026",
    author: "Durable Team",
    image: "https://picsum.photos/seed/dispatch-1/1200/700",
    excerpt: "Most founders never sit across from a real board. That doesn't mean they don't need one — it means they build it differently.",
    content: [
      "Public companies have boards because someone has to ask the hard question before the market does. Most privately held businesses never build that structure, and the owner ends up making the same six-figure decisions alone, over and over.",
      "A peer group isn't a replacement for a board of directors. It's closer to a board of equals — people with enough context to ask a sharp question, and no incentive to just tell you what you want to hear.",
      "The owners who last longest aren't the ones with the most talent. They're the ones who built a room where someone could tell them they were wrong before it cost them a year."
    ]
  },
  {
    slug: "the-cost-of-isolation",
    title: "The real cost of leadership isolation",
    date: "August 28, 2026",
    author: "Durable Team",
    image: "https://picsum.photos/seed/dispatch-2/1200/700",
    excerpt: "It doesn't show up on the P&L, but isolation is one of the most expensive things a founder carries.",
    content: [
      "Isolation doesn't show up as a line item. It shows up as decision fatigue, as a slower gut check on hires that should've been obvious, as a founder who hasn't taken a real day off in fourteen months.",
      "The owners we work with aren't looking for therapy. They're looking for a peer who has actually run something and can tell, in five minutes, whether a plan holds up.",
      "That's the gap a peer group closes — not motivation, judgment."
    ]
  }
];
