import {
  ComponentType,
  MutableRefObject,
  ReactElement,
  useLayoutEffect,
  useState,
} from 'react';

type HasElementProp<K extends string | number | symbol> = {
  [I in K]: HTMLElement;
};

type HasElementRefProp<K extends string | number | symbol> = {
  [I in K]: MutableRefObject<HTMLElement | null>;
};

const useElementRefComponent = (): boolean => {
  const [renders, setRenders] = useState(0);

  useLayoutEffect((): void => {
    setRenders(1);
  }, []);

  return renders > 0;
};

export default function withElementRef<
  P extends HasElementProp<K>,
  K extends keyof P,
>(
  Component: ComponentType<P>,
  prop: K,
): ComponentType<Omit<P, K> & HasElementRefProp<K>> {
  return function ElementRefComponent(
    props: Omit<P, K> & HasElementRefProp<K>,
  ): null | ReactElement {
    const render: boolean = useElementRefComponent();

    // `ref` is mounting.
    if (!render) {
      return null;
    }

    // `ref` should be mounted.
    const element: HTMLElement | null = props[prop].current;
    if (element === null) {
      const propStr: string = prop.toString();
      throw new Error(`Expected prop "${propStr}" to be a mounted ref.`);
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: `P` should be defined better?
    const newProps: P = {
      ...props,
      [prop]: element,
    };

    return <Component {...newProps} />;
  };
}
