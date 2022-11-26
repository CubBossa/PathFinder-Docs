# Find Command

The find command is the heart of the plugin. It allows you to query a "shortest path search" to a certain location.

## Structure

The usage of the command is quite simple.
<br>`/find <target>`
<br>`/find parking_lot`
<br>`/find home`

The definition of the target might not, if not searching for a single target.
<br>`/find parking_lot&towncenter&shop[sells=diamond]|chestshop[sells=diamond,sell-price>=15]`

You can use the query language to give an exact definition of your target location.

## Query Language

