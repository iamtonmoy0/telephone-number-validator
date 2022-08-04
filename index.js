function telephoneCheck(str) {
    var validPatterns = [/^\d{3}-\d{3}-\d{4}$/, /^ 1\d{3}-\d{3}-\d{4}$/, /^1 \(\d{3}\) \d{3}-\d{4}$/, /^\d{10}$/, /^\(\d{3}\)\d{3}-\d{4}$/, /^1 \d{3} \d{3} \d{4}$/, /1\(\d{3}\)\d{3}-\d{4}/];
    return validPatterns.some((pattern) => pattern.test(str));


}