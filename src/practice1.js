const parseData = ({data, column}) => {
    return data.map(item => {
        let obj = {};
        for (const [i, {name}] of column.entries()) {
            obj[name] = item[i];
        }
        return obj;
    });
};

export { parseData };
