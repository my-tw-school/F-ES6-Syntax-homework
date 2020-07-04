const inject = (items, sections) => {
    const result = sections.reduce((acc, {content, index}) =>
        [...acc.slice(0, index), [content, acc[index]], ...acc.slice(index + 1)], items);

    // eq result.flat()
    return [].concat(...result);
};
export {inject};
