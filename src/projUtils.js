export const get_core_data = dataObj => (Object.keys(dataObj).map(key => ({title:key, content: dataObj[key]})));

export const upperFirst = string => string[0].toUpperCase() + string.slice(1);