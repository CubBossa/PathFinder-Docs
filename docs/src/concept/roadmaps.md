# What are Roadmaps?

## The Roadmap Object

In terms of this pathfinder plugin, a roadmap resembles all waypoints, connecting roads and meta information of one
scope. In case of a roleplay map, this might be the whole world. Otherwise, a spawn town, tutorial world or maze would
be fitting.
It is the job of the roadmap to bundle the information and make it accessible to administrators and players.

## Namespaces and Namespaced Keys

All roadmaps are identified by a unique Namespaced Key. This is a format that minecraft uses in many places, like with
materials: `minecraft:diamond`
Roadmaps usually have a key that starts with the namespace 'pathfinder' and finishes with a custom name, given by the
creator, like `pathfinder:my_town`
To assure that addons for the pathfinder plugin don't conflict with your existing data, they have to register
dynamically created roadmaps with their own namespace. So the namespace can be used to identify which addon created a
roadmap.

::: warning
Choose the key of your roadmap carefully, it cannot be changed later on.
It will not be visible to players.
:::
