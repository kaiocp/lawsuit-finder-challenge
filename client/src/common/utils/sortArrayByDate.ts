const sortArrayByDate = (array: Array<any>) => {
    const sortedArray = array.sort((a,b) => Date.parse(b.date) - Date.parse(a.date));
    return sortedArray;
}

export default sortArrayByDate;