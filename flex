Updates to css-layout leading to many fixes but requiring some breaking changes:
flex styling property behavior now behaves slightly differently.
If you previously used flex: 1 where not necessary this change will likely break your layout as the measuring behavior is slightly different than before due to performance optimizations.
Removing that unnecessary flex: 1 will solve your layout in most cases.
Due to performance tweaks flexWrap: wrap no longer works together with alignItems: 'stretch' (the default). If you use flexWrap: wrap you probably will want to add the alignItems: 'flex-start' style as well.


Fix unconstraint sizing in main axis (0a9b6be) - @emilsjolander

Most of your layouts will continue to function as before however some of them might not.
Typically this is due to having a flex: 1 style where it is currently a no-op due to being measured with an undefined size but after this change
it may collapse your component to take zero size due to the implicit flexBasis: 0 now being correctly treated.
Removing the bad flex: 1 style or changing it to flexGrow: 1 should solve most if not all layout issues your see after this change.
