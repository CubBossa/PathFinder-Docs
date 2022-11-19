# Pathfinder Command

### Plugin Info

`/pathfinder info`

Prints some information about your current running version.

::: tip
It is advised to check that you are running the latest version of PathFinder before reporting bugs. 
:::

---

### Help

`/pathfinder help`

Gives you a short instruction on how to use the plugin. For a more detailed overview check out the [Concept Section](/concept) of this wiki.

---

### Data Export

`/pathfinder export <database-type> [<params>]`

Allows you to export specified plugin data into other files. This can be useful to create backups or to share selected elements of your pathfinder plugin with friends.

For example, you may want to share a certain particle visualizer that you have created. Even if you are using sql databases you can easily create ymls of your visualizers to send them to friends or upload them, like I do within the [Examples Section](/not there yet).

---

### Data Import

`/pathfinder import <type> <source>`

For now, there is only one type available. It allows you to copy visualizers from GitHub and load them live.
Again, check out the [Examples Section](/wip) for more information.

:::tip Info
Later, this command is supposed to import all data types from all storage types. It's an easy way of restoring or sharing data.
:::

---

### Reload

`/pathfinder reload [language|config|effects]`

Reload either your languages files, your config file, your effects file or all three of them if no parameter is given.
This command is meant for changes in these files so that you don't have to frequently restart your server. Keep in mind though that not all
config fields may be supported.