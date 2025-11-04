const getFilteredOptions = (options, searchTerm = '') => {
    if (!Array.isArray(options)) return [];
    const lower = searchTerm.toLowerCase();
    return options.filter(option => option.label.toLowerCase().includes(lower));
}
export default getFilteredOptions;