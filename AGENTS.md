<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the portfolio as an Arabic-first, single-page TanStack route; section anchors make the long-form story easy to navigate.
- Load Vanta Waves only in a browser effect with Three.js and destroy it on unmount; server rendering cannot access WebGL.
- Keep original portfolio photographs in Lovable asset storage via committed asset pointers; this avoids relying on the old site's availability.
