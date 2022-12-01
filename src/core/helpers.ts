class CoreHelpers {
  /**
   * Check if the window object exists.
   *
   * @return {boolean}
   */
  static hasWindow(): boolean {
    return typeof window !== 'undefined';
  }
}

export default CoreHelpers;
