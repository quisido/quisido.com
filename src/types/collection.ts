import CollectionItem from './collection-item';

export default interface Collection<
  CollectionId extends string,
  ItemId extends string,
> {
  id: CollectionId;
  items: CollectionItem<ItemId>[];
}
