# Autonoma Integration Implementation

## Checklist

- [x] Endpoint `/api/autonoma` created (`pages/api/autonoma.js`)
- [x] SDK packages installed (`@autonoma-ai/sdk`, `@autonoma-ai/server-express`)
- [x] `discover` action responds with empty schema (no models)
- [x] Maintenance note added to `AGENTS.md`
- [x] Recipe generated at `~/.autonoma/clone-tab-news/recipe.json`
- [x] Branch created and pushed: `autonoma-integration`

## Entity Status

No business domain models exist in this codebase yet. The entity audit confirms:
- `model_count: 0`
- `factory_count: 0`

The only migration (`1761488967155_test-migration.js`) does not create any tables.

## Limitations

- **No `up`/`down` lifecycle**: The SDK rejects `up` when zero factories are registered
  (`"no factories registered — every model in create must have a factory"`). This is
  expected — there are no entities to seed. When models are added, factories should be
  wired here and the recipe updated.
- **No concurrent-instance proof**: Not applicable with zero entities.
- **No auth callback**: Returns empty headers since there are no users to authenticate as.

## When to Update

When the first database table is added (e.g., Users, Posts), implement:
1. A factory in `pages/api/autonoma.js` calling the app's creation code
2. A teardown that deletes by scope
3. An auth callback returning real session credentials
4. Update the recipe with concrete records
