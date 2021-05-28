// Hey kiddo
const checker = function (age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
};

const secondfunc = function (age) {
    if (age >= 18) {
        return "Hello there";
    } else {
        return "Hey kiddo";
    }
};

console.log(secondfunc(17));

// VAT exercise 1
const priceWithoutVat = function (baseprice) {
    return baseprice;
};

const priceWithVat = function (baseprice) {
    return baseprice * 1.21
};

console.log(priceWithVat(1000));

// VAT exercise 2
const priceIncludingVat = function (endprice) {
    return endprice;
};

const priceExcludingVat = function (endprice) {
    return endprice / 1.21
};

console.log(priceExcludingVat(1210));