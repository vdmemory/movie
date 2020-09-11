export const deepEqual = (a: any, b: any) => {
    if (a === b) {
        return true;
    }

    if (
        a == null ||
        typeof a != "object" ||
        b == null ||
        typeof b != "object"
    ) {
        return false;
    }

    var propertiesInA = 0,
        propertiesInB = 0;
    for (var property in a) {
        propertiesInA += 1;
    }
    for (var property in b) {
        propertiesInB += 1;
        if (!(property in a) || !deepEqual(a[property], b[property])) {
            return false;
        }
    }
    return propertiesInA == propertiesInB;
};
