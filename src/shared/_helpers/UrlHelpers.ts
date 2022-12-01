import Router from 'next/router';

import CoreHelpers from '@core/helpers';

class UrlHelpers {
  /**
   * Return the URL.
   *
   * @return {string}
   */
  static getUrl(): string {
    return CoreHelpers.hasWindow() ? window.location.href : '';
  }

  /**
   * Change location.
   *
   * @param {string} path Path name
   * @return {Promise<boolean>}
   */
  static changeLocation = async (path: string): Promise<boolean> => {
    return await Router.push(path);
  };
}

export default UrlHelpers;
