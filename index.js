'use strict';

Array.prototype.allEqual = function() {
    for(var i = 1; i < this.length; i++) {
      if(this[i] !== this[0]) return false;
    }

    return true;
}

module.exports = function nthterm(seq) {
  let steps = [];

  for (let i = 0; i < seq.length - 1; i++) {
    steps.push(seq[i + 1] - seq[i]);
  }

  if (seq.allEqual()) {
    return seq[0].toString();
  } else if (steps.allEqual()) {
    const
      step = steps[0],
      add = seq[0] - step;

    return `${step === 1 ? '' : step}n${step === 0 ? '' : (add > 0 ? '+' : '') + add}`;
  } else {
    const n_steps = [];

    for (let i = 0; i < steps.length - 1; i++) {
      n_steps.push(steps[i + 1] - steps[i]);
    }

    if (n_steps.allEqual()) {
      const
        n_step = n_steps[0],
        coefficient = n_step / 2,
        normal = [];

      for (let n = 1; n < seq.length + 1; n++) {
        normal.push(Math.pow(n, 2) * coefficient);
      }

      const difference = [];

      for (let i = 0; i < seq.length; i++) {
        const j = seq[i], k = normal[i];
        difference.push(j - k);
      }

      const nth_diff = nthterm(difference);

      return `${coefficient === 1 ? '' : coefficient}n²${nth_diff.toString() === '0' ? '' :
        (nth_diff[0] === '-' ? '' : '+') + nth_diff}`;
    } else {
      return null;
    }
  }
}
