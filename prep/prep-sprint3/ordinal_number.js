function getOrdinalNumber(int) {
    if (int == 1){
        return `${int}st`
    }
    else if (int == 2) {
        return `${int}nd`
    }
    else if (int == 3) {
        return `${int}rd`
    }
    else if (int == 4) {
        return `${int}th`
    }
    else if (int == 5) {
        return `${int}th`
    }
    else if (int == 6) {
        return `${int}th`
    }
    else if (int == 7) {
        return `${int}th`
    }
    else if (int == 8) {
        return `${int}th`
    }
    else if (int == 9) {
        return `${int}th`
    }
    else {
        return `${int}th`
    }
}
console.log(getOrdinalNumber(1));
console.log(getOrdinalNumber(2));
console.log(getOrdinalNumber(3));
console.log(getOrdinalNumber(4));
console.log(getOrdinalNumber(5));
console.log(getOrdinalNumber(6));
console.log(getOrdinalNumber(7));
console.log(getOrdinalNumber(8));
console.log(getOrdinalNumber(9));
console.log(getOrdinalNumber(10));