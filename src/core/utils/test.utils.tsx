import type { ExtendedRenderOptions } from '@core/models';
import type { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import type { RenderResult } from '@testing-library/react';
import setupStore from '@core/store';

/**
 * Render with providers.
 *
 * @param {JSX.Element} ui The component to render
 * @param {ExtendedRenderOptions} options Render options
 * @return {RenderResult}
 */
const renderWithProviders = (
  ui: JSX.Element,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
): RenderResult => {
  /**
   * Wrapper.
   *
   * @param {PropsWithChildren} children Children
   * @return {JSX.Element}
   */
  const Wrapper = ({ children }: PropsWithChildren): JSX.Element => {
    return <Provider store={store}>{children}</Provider>;
  };

  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

export default renderWithProviders;
