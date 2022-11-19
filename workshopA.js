const user = {
    name: "Jirapon",
    nickname: "Earth",
    hobby :"Gaming",
    address:"Thailand",
    province:{
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
    postcode:"and my postcode is "+`${user.province.postcode}`
    };

console.log(getSentence(o))