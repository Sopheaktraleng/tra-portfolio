/**
 * Shared classname utility — replaces the duplicate `cx` / `classNames`
 * helpers spread across Navbar, DarkModeSelector, AnimatedMarker, etc.
 *
 * Usage:
 *   cn("base-class", condition && "conditional-class", undefined)
 *   // → "base-class conditional-class"
 */
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}
