const getGirlFriends = (users) => {
    const friends = users.map((user) => user.friends);
    const flatFriends = friends.flat();
    const femaleFriends = flatFriends.filter((friend) => friend.gender === 'female');

    console.log(femaleFriends);
    return femaleFriends;
}

export default getGirlFriends;