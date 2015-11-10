//Returns an array of object values
export default function(obj) {
    return Object.keys(obj).map((key) => {
        return obj[key];
    });
}