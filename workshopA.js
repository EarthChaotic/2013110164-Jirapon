const user = {
    name: "Jirapon",
    nickname: "Earth",
    hobby :"Gaming",
    address:{
        province:"Phetchaburi",
        postcode:"76000"
    }
}

    function getSentence ({nickname,hobby,postcode}){
        return `${nickname} ${hobby} ${postcode}`
    }

const o = {
    nickname:"My Nickname is "+ `${user.nickname}`,
    hobby:"My Hobby is " + `${user.hobby}`,
    postcode:"and my postcode is "+`${user.address.postcode}`
    };

console.log(getSentence(o))