# Roadmap Command

### Create a Roadmap

`/roadmap create <key>`

Creates a roadmap object with the given key. Don't add the namespace ('pathfinder:'), it will be inserted automatically.
This name is not visible to players. The name that is visible to players can be set lateron.

---

### Delete a Roadmap

`/roadmap delete <roadmap>`

Deletes the provided roadmap and all corresponding waypoints, edges and meta data.

---

### Show Roadmap Infos

`/roadmap info <roadmap>`

Shows all kinds of information about the provided roadmap.

---

### Toggle Editmode

`/roadmap editmode <roadmap>`

Toggles the edit mode for this roadmap. The edit mode allows you to interactively modify your roadmap.
To understand all features, make sure to also read about [Using the Edit Mode](#).

---

### List all Roadmaps

`/roadmap list [<page>]`

Lists all roadmaps with up to ten roadmaps on one page. Provide a page parameter to turn pages.

---

### Force Find Nodes

`/roadmap forcefind <player> <discoverables>`

Makes a certain player find all provided discoverables. Discoverables, like also explained [here](#), resemble all node
groups that can be discovered.
This does *not* make the player navigate to a certain target. This command is used to make the player discover
locations, so that he then can find them via `/find`, if discovering is a precondition for navigation.

---

### Force Forget Nodes

`/roadmap forceforget <player> <discoverables>`

Makes a certain player forget all provided discoverables. Also read [Force Find Nodes](./#force-find-nodes) for more
information.

---

### Set Name

`/roadmap edit <roadmap> set name <minimessage>`

Sets the name of the roadmap that can also be visible to players (depending on your configuration).
The name can also be formatted to show colors, text formattings, hover texts and perform click actions. To do so, you
must use the [MiniMessage Format](https://docs.adventure.kyori.net/minimessage/format.html).

::: tip
Pathfinder adds some custom tags to its minimessage instance. Check out [this site]() for more information.
:::

---

### Set Visualizer

`/roadmap edit <roadmap> set visualizer <visualizer>`

Sets the path visualizer for this roadmap. By default, every navigation on this roadmap will be displayed with the
provided visualizer. Depending on your configuration, players might be able to override this visualizer with their own
settings.

---

### Set Curve-Length

`/roadmap edit <roadmap> set curve-length <float>`

Sets the default curve length for this roadmap. The curve length can be used by the path visualizer as property to
smoothen the path.
The default curve length will only be used, if a node has not set a custom curve length. The value tells, how far the
so-called tangent points of the Bézier curve will be away from their waypoint in blocks.
Therefore, a smaller value will make the path pointier while larger values will make it more curved.
