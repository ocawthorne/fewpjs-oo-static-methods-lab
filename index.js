class Formatter {
  static capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
  }

  static sanitize(str) {
    return str.replace(/[^-,\w\s'A-Za-z0-9]+/g, '');
  }

  static titleize(str) {
    const EXCLUDED = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let i = 0
    return str.split(' ').map(element => {
      i++
      if (EXCLUDED.indexOf(element) > -1 && i !== 1) return this.sanitize(element)
      return this.capitalize(element)
    }).join(' ')
  }
}

// FIRST_WORD   EXCLUDED_WORD   ACTION?
//     NO            NO           YES 
//     NO            YES          NO    (Only ignore if NOT first word BUT excluded word (line 16))
//     YES           NO           YES 
//     YES           YES          YES 
