export default class Building {
  constructor(sqft) {
    // Ensure subclass implements evacuationWarningMessage
    if (
      new.target !== Building
      && this.evacuationWarningMessage === undefined
    ) {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }
    this.sqft = sqft;
  }

  // Getter for sqft with validation
  get sqft() {
    return this._sqft;
  }

  // Setter for sqft with type-checking
  set sqft(value) {
    if (typeof value !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = value;
  }
}
