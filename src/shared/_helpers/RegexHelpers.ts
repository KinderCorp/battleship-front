class RegexHelpers {
  /**
   * All pattern.
   *
   * @return {RegExp}
   */
  static all(): RegExp {
    return /.*/;
  }

  /**
   * Email pattern.
   *
   * @return {RegExp}
   */
  static email(): RegExp {
    return /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  }

  /**
   * Number pattern.
   *
   * @return {RegExp}
   */
  static number(): RegExp {
    return /[0-9]+/;
  }
}

export default RegexHelpers;
