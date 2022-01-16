const removeFirstLevel = (tree) => {
    const cleanFirstLevelTree = tree.filter((item) => Array.isArray(item));
    return cleanFirstLevelTree.flat();
}

export default removeFirstLevel;