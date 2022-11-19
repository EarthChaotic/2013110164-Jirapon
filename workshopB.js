const user = [
  {
    name: "Jirapon",
    nickname: "Earth",
    hobby: "Gaming",
    address: "Thailand",
    province: {
      province: "Phetchaburi",
      postcode: "76000",
    },
  },
  {
    name: "Kritsakorn",
    nickname: "Kong",
    hobby: "Moodang Mookrob",
    address: "Moodang",
    province: {
      province: "Bangkok",
      postcode: "12500",
    },
  },
  {
    name: "Channawat",
    nickname: "Keng",
    hobby: "DotA2",
    address: "Home",
    province: {
      province: "Phetchaburi",
      postcode: "12510",
    },
  },
];

function getSentence ({nickname,hobby,postcode}){
    return `${nickname} ${hobby} ${postcode}`
}
for(const u of user){
const o = {
nickname:"My Nickname is "+ `${u.nickname}`,
hobby:"My Hobby is " + `${u.hobby}`,
postcode:"and my postcode is "+`${u.province.postcode}`
};

console.log(getSentence(o))
}
