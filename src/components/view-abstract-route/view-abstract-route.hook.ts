import { useMemo } from 'react';
import { useParams } from 'react-router';
import AbstractionId from '../../constants/abstraction-id';
import AbstractionItemId from '../../constants/abstraction-item-id';
import ABSTRACTIONS from '../../constants/abstractions';
import type Collection from '../../types/collection';

export interface FoundState {
  abstraction: Collection<AbstractionId, AbstractionItemId>;
  found: true;
}

export interface NotFoundState {
  found: false;
}

interface Params {
  id: string;
}

export default function useViewAbstractRoute(): FoundState | NotFoundState {
  const { id } = useParams<Params>();

  // States
  const abstraction: Collection<AbstractionId, AbstractionItemId> | undefined =
    useMemo((): Collection<AbstractionId, AbstractionItemId> | undefined => {
      const findAbstraction = (
        collection: Collection<AbstractionId, AbstractionItemId>,
      ): boolean => collection.id === id;
      return ABSTRACTIONS.find(findAbstraction);
    }, [id]);

  if (typeof abstraction === 'undefined') {
    return {
      found: false,
    };
  }

  return {
    abstraction,
    found: true,
  };
}
