/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
 export const preloadHandlebarsTemplates = async function() {
  return loadTemplates([

    // Actor partials.
    "systems/mnm3e/templates/actor/parts/actor-stats.html",
    "systems/mnm3e/templates/actor/parts/actor-combat.html",
    "systems/mnm3e/templates/actor/parts/actor-effects.html",
    "systems/mnm3e/templates/actor/parts/actor-items.html",
    "systems/mnm3e/templates/actor/parts/actor-powers.html",
    "systems/mnm3e/templates/actor/parts/actor-origins.html"
  ]);
};
