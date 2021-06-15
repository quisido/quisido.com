import { renderHook } from '@testing-library/react-hooks';
import LocaleContext from '../contexts/locale';
import Locale from '../constants/locale';
import NOOP from '../test-utils/noop';
import useLocale from './use-locale';
import { PropsWithChildren, ReactElement } from 'react';

describe('useLocale', (): void => {
  it('should throw an error if there is no Locale context', (): void => {
    const { result } = renderHook(useLocale);
    expect(result.error).toBeInstanceOf(Error);
  });

  it('should return the Locale context value', (): void => {
    const { result } = renderHook(useLocale, {
      wrapper({ children }: PropsWithChildren<unknown>): ReactElement {
        return (
          <LocaleContext.Provider value={[Locale.EnUs, NOOP]}>
            {children}
          </LocaleContext.Provider>
        );
      },
    });
    const [locale, setLocale] = result.current;
    expect(locale).toBe(Locale.EnUs);
    expect(setLocale).toBe(NOOP);
  });
});
