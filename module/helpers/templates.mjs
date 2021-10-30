/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
 export const preloadHandlebarsTemplates = async function() {
  const templatePaths = [
  

    // Actor partials.
    "systems/mnm3e/templates/actor/parts/actor-stats.hbs",
    "systems/mnm3e/templates/actor/parts/actor-combat.hbs",
    "systems/mnm3e/templates/actor/parts/actor-effects.hbs",
    "systems/mnm3e/templates/actor/parts/actor-items.hbs",
    "systems/mnm3e/templates/actor/parts/actor-powers.hbs",
    "systems/mnm3e/templates/actor/parts/actor-origins.hbs"
  ];
  
  return loadTemplates(templatePaths);
};
