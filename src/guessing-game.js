class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.candidateName;
      }
    
      setRange(min, max) {
         this.min = min;
        this.max = max;
      }
    
      guess() {
        return (this.candidateName = Math.ceil((this.min + this.max) / 2));
      }
    
      lower() {
        this.max = this.candidateName;
      }
    
      greater() {
        this.min = this.candidateName;
      }
}

module.exports = GuessingGame;
